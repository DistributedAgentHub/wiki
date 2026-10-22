import { parseDocument, type Document } from "yaml";
import type { Nodes } from "mdast";
import { parseMarkdown } from "./markdown";
import { fromParts, SECTIONS } from "./layout";
import { FILE_SCHEMAS } from "./schema";
import { PAGE_TYPES, WikiFormatError, type Page, type PageType } from "./types";

// file → page (§3.2). Lenient about form (CRLF, a BOM, key order, Markdown that isn't
// normalized): `validate` reports those. A file that can't be read as a page throws.

/** Everything `parse` learned about a file, for `validate` and `merge3`. */
export type FileRead = {
  /** The file with a BOM and CR line endings removed: positions refer to it. */
  text: string;
  type: PageType;
  page: Page;
  doc: Document;
  /** Offset of the YAML text in `text`. */
  yamlStart: number;
  /** Offset of the body (after the frontmatter) in `text`. */
  bodyStart: number;
  /** Offset in `text` where each text field starts (its section, or its `raw:` value). */
  fieldAt: Record<string, number>;
  /** Problems that don't stop reading: unknown or repeated sections, a field given twice. */
  issues: { at: number; message: string }[];
};

/** 1-based line and column of an offset in a text. */
export function position(text: string, offset: number) {
  const before = text.slice(0, offset);
  const line = before.split("\n").length;
  return { line, column: offset - before.lastIndexOf("\n") };
}

const fail = (text: string, at: number, message: string, path = "") => new WikiFormatError([{ path, ...position(text, at), message }]);

function plainText(node: Nodes): string {
  if ("value" in node) return node.value;
  return "children" in node ? node.children.map((c) => plainText(c as Nodes)).join("") : "";
}

/** Offset where a YAML node starts, by key path; the nearest existing ancestor if the path is missing. */
export function nodeOffset(doc: Document, path: readonly PropertyKey[]): number {
  for (let n = path.length; n > 0; n--) {
    // A mapping key points at its key; a list item at the item.
    const key = keyOffset(doc, path.slice(0, n));
    if (key !== undefined) return key;
    const node = doc.getIn(path.slice(0, n), true) as { range?: [number, number, number] } | undefined;
    if (node?.range) return node.range[0];
  }
  return 0;
}

type Items = { items?: { key?: { value?: unknown; range?: [number, number, number] } }[] };

function keyOffset(doc: Document, path: readonly PropertyKey[]): number | undefined {
  const key = path.at(-1);
  if (typeof key !== "string") return undefined;
  const parent = (path.length > 1 ? doc.getIn(path.slice(0, -1), true) : doc.contents) as Items | undefined;
  return parent?.items?.find((item) => item.key?.value === key)?.key?.range?.[0];
}

/** Reads a file into its page, keeping what `validate` needs to point at lines. Throws WikiFormatError. */
export function readFile(input: string, path = ""): FileRead {
  const text = input.replace(/^\ufeff/, "").replace(/\r\n?/g, "\n");
  if (!text.startsWith("---\n")) throw fail(text, 0, 'a page starts with frontmatter: a "---" line, YAML, then another "---" line', path);
  const close = /^---[ \t]*$/m.exec(text.slice(4));
  if (!close) throw fail(text, 0, 'the frontmatter has no closing "---" line', path);
  const yamlStart = 4;
  const yamlText = text.slice(yamlStart, yamlStart + close.index);
  const bodyStart = yamlStart + close.index + close[0].length + 1;

  const doc = parseDocument(yamlText, { schema: "core", uniqueKeys: true, prettyErrors: false });
  if (doc.errors.length) {
    throw new WikiFormatError(doc.errors.map((e) => ({ path, ...position(text, yamlStart + e.pos[0]), message: `YAML: ${e.message.split("\n")[0]}` })));
  }
  const fm = doc.toJS() as unknown;
  if (!fm || typeof fm !== "object" || Array.isArray(fm)) throw fail(text, yamlStart, "the frontmatter must be a YAML mapping (key: value lines)", path);
  const type = (fm as { type?: unknown }).type as PageType;
  if (!PAGE_TYPES.includes(type)) {
    throw fail(text, yamlStart + nodeOffset(doc, ["type"]), `type must be one of ${PAGE_TYPES.join(", ")}`, path);
  }
  const checked = FILE_SCHEMAS[type].safeParse(fm);
  if (!checked.success) {
    throw new WikiFormatError(
      checked.error.issues.map((i) => ({
        path,
        ...position(text, yamlStart + nodeOffset(doc, i.path as PropertyKey[])),
        message: `${i.path.length ? `${i.path.join(".")}: ` : ""}${i.message}`,
      })),
    );
  }
  const { raw = {}, ...rest } = checked.data as { raw?: Record<string, string | undefined> };

  // Body sections: split at the type's reserved level-1 headings.
  const issues: FileRead["issues"] = [];
  const body = text.slice(bodyStart);
  const sections = SECTIONS[type];
  const cuts: { id: string; start: number; end: number }[] = [{ id: sections[0].id, start: 0, end: 0 }];
  let last = 0;
  for (const node of parseMarkdown(body).children) {
    if (node.type !== "heading" || node.depth !== 1) continue;
    const name = plainText(node).trim();
    const index = sections.findIndex((s) => s.heading === name);
    const at = bodyStart + node.position!.start.offset!;
    if (index < 0) {
      issues.push({ at, message: `"# ${name}" is not a section of a ${type} page (use ## for headings inside a section; sections: ${sections.slice(1).map((s) => s.heading).join(", ")})` });
      continue;
    }
    if (cuts.some((c) => c.id === sections[index].id)) {
      issues.push({ at, message: `the section "# ${name}" appears twice` });
      continue;
    }
    if (index < last) issues.push({ at, message: `the section "# ${name}" is out of order (order: ${sections.slice(1).map((s) => s.heading).join(", ")})` });
    last = Math.max(last, index);
    cuts.at(-1)!.end = node.position!.start.offset!;
    cuts.push({ id: sections[index].id, start: node.position!.end.offset!, end: 0 });
  }
  cuts.at(-1)!.end = body.length;

  const fields: Record<string, string> = {};
  const fieldAt: Record<string, number> = {};
  for (const c of cuts) {
    const slice = body.slice(c.start, c.end);
    const lead = /^\s*\n/.exec(slice)?.[0].length ?? 0;
    const value = slice.slice(lead).trimEnd();
    if (!value) continue;
    fields[c.id] = value;
    fieldAt[c.id] = bodyStart + c.start + lead;
  }
  for (const [id, value] of Object.entries(raw)) {
    const at = yamlStart + nodeOffset(doc, ["raw", id]);
    if (fields[id] !== undefined) issues.push({ at, message: `raw.${id}: this text is also a body section; give it once` });
    fields[id] = value!;
    fieldAt[id] = at;
  }
  return { text, type, page: fromParts(rest, fields), doc, yamlStart, bodyStart, fieldAt, issues };
}

/** The page in a file. Throws WikiFormatError (with line and column) if the file isn't a page. */
export function parse(file: string, path = ""): Page {
  return readFile(file, path).page;
}
