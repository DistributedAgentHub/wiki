import { diff3Merge } from "node-diff3";
import { normalizePage } from "./fmt";
import { splitBlocks } from "./markdown";
import { EXPLAINER_KEYS, fromParts, KEYS, SECTIONS, toParts, type Parts } from "./layout";
import { parse } from "./parse";
import { CONTENT_SCHEMAS } from "./schema";
import { serialize } from "./serialize";
import type { Page } from "./types";

// Three-way merge of a page file (§8.4). The units are each top-level frontmatter key
// (each sub-key of `explainer:`), and within each body section the top-level blocks.
// A unit changed on one side takes that side; the same change on both sides is taken;
// different changes on both sides are a conflict. `site:` always takes theirs (main).

export type MergeConflict = {
  /** "title", "explainer.flow", "section:body", or "validation". */
  unit: string;
  base: unknown;
  ours: unknown;
  theirs: unknown;
};
export type MergeResult = { clean: true; text: string } | { clean: false; conflicts: MergeConflict[] };

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/** One unit: the side that changed, or a conflict (undefined) when both changed differently. */
function pick<T>(base: T, ours: T, theirs: T): { value: T } | undefined {
  if (same(ours, theirs) || same(theirs, base)) return { value: ours };
  if (same(ours, base)) return { value: theirs };
  return undefined;
}

/** Block-level diff3 of one text field; undefined on a conflict. */
function mergeText(base: string, ours: string, theirs: string): string | undefined {
  const quick = pick(base, ours, theirs);
  if (quick) return quick.value;
  const regions = diff3Merge(splitBlocks(ours), splitBlocks(base), splitBlocks(theirs), { excludeFalseConflicts: true });
  if (regions.some((r) => r.conflict)) return undefined;
  return regions.flatMap((r) => r.ok!).join("\n\n");
}

/**
 * "Keep both (yours first)" for one text field: a block-level merge where each conflicting
 * spot keeps my blocks, then their blocks that aren't already among mine.
 */
export function keepBoth(base: string, ours: string, theirs: string): string {
  const regions = diff3Merge(splitBlocks(ours), splitBlocks(base), splitBlocks(theirs), { excludeFalseConflicts: true });
  return regions
    .flatMap((r) => {
      if (r.ok) return r.ok as string[];
      const { a, b } = r.conflict as { a: string[]; b: string[] };
      return [...a, ...b.filter((x) => !a.includes(x))];
    })
    .join("\n\n");
}

const issues = (page: Page) => {
  const r = CONTENT_SCHEMAS[page.type].safeParse(page);
  return r.success ? [] : r.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
};

/**
 * Merges two edits of a page file made from a common base (null for a file both sides
 * created). The clean result is canonical. A merge whose result breaks a content rule
 * neither side broke (a work mix that no longer adds up to 100) is a conflict.
 * Throws WikiFormatError if a file isn't a page.
 */
export function merge3(base: string | null, ours: string, theirs: string): MergeResult {
  if (ours === theirs || theirs === base) return { clean: true, text: ours };
  if (ours === base) return { clean: true, text: theirs };
  const a = parse(ours);
  const b = parse(theirs);
  if (a.type !== b.type) return { clean: false, conflicts: [{ unit: "type", base: base === null ? null : parse(base).type, ours: a.type, theirs: b.type }] };
  const pa = toParts(a);
  const pb = toParts(b);
  const po: Parts = base === null ? { fm: {}, fields: {} } : toParts(parse(base));
  const type = a.type;

  const conflicts: MergeConflict[] = [];
  const fm: Record<string, unknown> = {};
  const unit = (name: string, o: unknown, x: unknown, y: unknown) => {
    const got = pick(o, x, y);
    if (!got) conflicts.push({ unit: name, base: o, ours: x, theirs: y });
    return got?.value;
  };
  for (const key of KEYS[type]) {
    if (key === "raw") continue;
    if (key === "site") fm.site = pb.fm.site;
    else if (key === "explainer") {
      const sub = (p: Parts, k: string) => (p.fm.explainer as Record<string, unknown> | undefined)?.[k];
      const e = Object.fromEntries(EXPLAINER_KEYS.map((k) => [k, unit(`explainer.${k}`, sub(po, k), sub(pa, k), sub(pb, k))]).filter(([, v]) => v !== undefined));
      if (Object.keys(e).length) fm.explainer = e;
    } else fm[key] = unit(key, po.fm[key], pa.fm[key], pb.fm[key]);
  }
  const fields: Record<string, string> = {};
  for (const { id } of SECTIONS[type]) {
    const [o, x, y] = [po.fields[id] ?? "", pa.fields[id], pb.fields[id]];
    const merged = mergeText(o, x, y);
    if (merged === undefined) conflicts.push({ unit: `section:${id}`, base: o, ours: x, theirs: y });
    else fields[id] = merged;
  }
  if (conflicts.length) return { clean: false, conflicts };

  const page = normalizePage(fromParts(Object.fromEntries(Object.entries(fm).filter(([, v]) => v !== undefined)), fields));
  const known = new Set([...issues(a), ...issues(b)]);
  const broken = issues(page).filter((i) => !known.has(i));
  if (broken.length) return { clean: false, conflicts: [{ unit: "validation", base: null, ours: null, theirs: broken }] };
  return { clean: true, text: serialize(page) };
}
