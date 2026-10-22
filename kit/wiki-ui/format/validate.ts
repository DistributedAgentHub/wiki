import { parse as parseYaml, YAMLParseError } from "yaml";
import type { Code, Nodes } from "mdast";
import { fmt } from "./fmt";
import { parseMarkdown } from "./markdown";
import { getField, SECTIONS } from "./layout";
import { nodeOffset, position, readFile, type FileRead } from "./parse";
import { pageAt, pagePath } from "./paths";
import { BLOCK_MAX_BYTES, BLOCK_SCHEMAS, CONTENT_SCHEMAS } from "./schema";
import { demoProps, type DemoManifest } from "./demo";
import { WikiFormatError, type Page, type PageType, type WikiError } from "./types";

// Every rule a content file must pass (§3.2–§3.4), each error at a line and column:
// the file reads as a page, its values are within the services' limits, its typed
// blocks are well-formed, the pages it names exist, and it is in canonical form.

export type ValidateOptions = {
  /** Whether a page exists in the tree being validated (the repo at head, or the DB). Cross-references are skipped without it. */
  exists?: (type: PageType, slug: string) => boolean;
  /**
   * The demo a darc-demo block names (§7): null when there is no such demo, `{manifest: null}`
   * when its folder has a manifest that doesn't read (reported on the folder). Demo blocks are
   * checked against the manifest's props only with it.
   */
  demo?: (name: string) => { manifest: DemoManifest | null } | null;
};

const SECTION_IDS = new Set(Object.values(SECTIONS).flatMap((s) => s.map((x) => x.id)));

/** Where a page value is written in the file: its frontmatter key, or its text field. */
function offsetOf(read: FileRead, path: readonly PropertyKey[]): number {
  const [head, sub] = path;
  const field = head === "explainer" && (sub === "plain" || sub === "student") ? sub : (head as string);
  if (SECTION_IDS.has(field)) return read.fieldAt[field] ?? read.bodyStart;
  return read.yamlStart + nodeOffset(read.doc, path);
}

/** The cross-references of a page: [type, slug, key path]. */
function references(page: Page): [PageType, string, PropertyKey[]][] {
  switch (page.type) {
    case "field":
      return page.parent ? [["field", page.parent, ["parent"]]] : [];
    case "entry":
      return [["field", page.field, ["field"]], ...page.dependsOn.map((s, i): [PageType, string, PropertyKey[]] => ["entry", s, ["dependsOn", i]])];
    case "problem":
      return [["entry", page.entry, ["entry"]], ...page.links.map((l, i): [PageType, string, PropertyKey[]] => ["problem", l.to, ["links", i, "to"]])];
    case "claim":
      return [["problem", page.problem, ["problem"]]];
  }
}

function codeBlocks(node: Nodes, out: Code[] = []): Code[] {
  if (node.type === "code") out.push(node);
  else if ("children" in node) for (const c of node.children) codeBlocks(c as Nodes, out);
  return out;
}

/** The typed `darc-*` blocks in each text field. */
function blockErrors(read: FileRead, opts: ValidateOptions): { at: number; message: string }[] {
  const out: { at: number; message: string }[] = [];
  for (const [id, at] of Object.entries(read.fieldAt)) {
    const text = getField(read.page, id);
    // A `raw:` value has no lines of its own: point at its key.
    const inBody = at >= read.bodyStart;
    for (const code of codeBlocks(parseMarkdown(text))) {
      if (!code.lang?.startsWith("darc-")) continue;
      const where = inBody ? at + code.position!.start.offset! : at;
      const schema = BLOCK_SCHEMAS[code.lang as keyof typeof BLOCK_SCHEMAS];
      if (!schema) {
        out.push({ at: where, message: `unknown block type "${code.lang}" (known: ${Object.keys(BLOCK_SCHEMAS).join(", ")})` });
        continue;
      }
      if (new TextEncoder().encode(code.value).length > BLOCK_MAX_BYTES) {
        out.push({ at: where, message: `${code.lang}: the block is over ${BLOCK_MAX_BYTES / 1024} KB` });
        continue;
      }
      let value: unknown;
      try {
        value = parseYaml(code.value, { schema: "core", uniqueKeys: true });
      } catch (e) {
        const err = e as YAMLParseError;
        out.push({ at: where, message: `${code.lang}: YAML: ${err.message.split(" at line")[0]} (line ${err.linePos![0].line} of the block)` });
        continue;
      }
      const checked = schema.safeParse(value);
      if (!checked.success) {
        for (const i of checked.error.issues) out.push({ at: where, message: `${code.lang}: ${i.path.length ? `${i.path.join(".")}: ` : ""}${i.message}` });
      } else if (code.lang === "darc-demo" && opts.demo) {
        const { demo, props } = checked.data as { demo: string; props?: Record<string, unknown> };
        const found = opts.demo(demo);
        if (!found) out.push({ at: where, message: `darc-demo: there is no demo "${demo}" (a folder demos/${demo}/ on main)` });
        else if (found.manifest) for (const e of demoProps(found.manifest, props).errors) out.push({ at: where, message: `darc-demo: ${e}` });
      }
    }
  }
  return out;
}

/** The first line where two texts differ. */
function firstDifference(a: string, b: string) {
  const x = a.split("\n");
  const y = b.split("\n");
  let i = 0;
  while (i < x.length && x[i] === y[i]) i++;
  return i + 1;
}

/**
 * Every problem with a content file, in file order. `path` is its repository path
 * (content/<dir>/<slug>.md); an empty path skips the path check.
 */
export function validate(path: string, file: string, opts: ValidateOptions = {}): WikiError[] {
  let read: FileRead;
  try {
    read = readFile(file, path);
  } catch (e) {
    if (e instanceof WikiFormatError) return e.errors;
    throw e;
  }
  const found: { at: number; message: string }[] = [...read.issues];
  const { page } = read;

  if (path) {
    const named = pageAt(path);
    if (!named || named.type !== page.type || named.slug !== page.slug) {
      found.push({ at: read.yamlStart + nodeOffset(read.doc, ["slug"]), message: `a ${page.type} page with slug "${page.slug}" belongs at ${pagePath(page.type, page.slug)}` });
    }
  }

  const checked = CONTENT_SCHEMAS[page.type].safeParse(page);
  if (!checked.success) {
    for (const i of checked.error.issues) found.push({ at: offsetOf(read, i.path as PropertyKey[]), message: `${i.path.join(".")}: ${i.message}` });
  }

  found.push(...blockErrors(read, opts));

  if (opts.exists) {
    for (const [type, slug, at] of references(page)) {
      if (!opts.exists(type, slug)) found.push({ at: offsetOf(read, at), message: `${at.join(".")}: there is no ${type} page "${slug}"` });
    }
  }

  const errors: WikiError[] = found.map((f) => ({ path, ...position(read.text, f.at), message: f.message }));
  const canonical = fmt(file);
  if (canonical !== file) {
    errors.push({ path, line: firstDifference(file, canonical), column: 1, message: "the file is not in canonical form: run npm run fmt (the first difference is on this line)" });
  }
  return errors.sort((a, b) => a.line - b.line || a.column - b.column);
}
