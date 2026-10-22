import { Document, Scalar, visit, type Pair } from "yaml";
import { fitsSection } from "./markdown";
import { KEYS, SECTIONS, toParts, type Parts } from "./layout";
import type { Page, PageType } from "./types";

// page → file (§3.2). Lossless for every page: a text field the body can't hold as it is
// goes in the frontmatter under `raw:`, as a double-quoted string.

// Anything a plain or block scalar can't carry as is (tabs, CR, other control and odd
// line-break characters) makes the string double-quoted, where it is escaped.
const NEEDS_ESCAPE = /[\u0000-\u0009\u000b-\u001f\u007f-\u009f\u2028\u2029\ufeff]/;

/**
 * YAML with the fixed options: no folding, plain scalars where safe, else double quotes;
 * `|` blocks for multi-line strings. String values under the top-level key `quoted` are
 * always double-quoted.
 */
export function toYaml(value: Record<string, unknown>, quoted?: string): string {
  const doc = new Document(value);
  visit(doc, {
    Scalar(key, node, path) {
      if (typeof node.value !== "string") return;
      const s = node.value;
      const under = key === "value" && path.length > 2 && (path[2] as Pair<Scalar>).key.value === quoted;
      if (under || NEEDS_ESCAPE.test(s)) node.type = Scalar.QUOTE_DOUBLE;
      else node.type = s.includes("\n") ? Scalar.BLOCK_LITERAL : Scalar.PLAIN;
    },
  });
  return doc.toString({ lineWidth: 0, minContentWidth: 0, singleQuote: false, doubleQuotedAsJSON: true, indentSeq: true });
}

/** The file for the parts of a page of the given type. */
export function render(type: PageType, parts: Parts): string {
  const raw: Record<string, string> = {};
  const body: string[] = [];
  for (const s of SECTIONS[type]) {
    const text = parts.fields[s.id];
    if (!text) continue;
    if (!fitsSection(text)) raw[s.id] = text;
    else body.push(s.heading ? `# ${s.heading}\n\n${text}` : text);
  }
  const fm: Record<string, unknown> = { ...parts.fm, ...(Object.keys(raw).length ? { raw } : {}) };
  const ordered = Object.fromEntries(KEYS[type].filter((k) => k in fm).map((k) => [k, fm[k]]));
  const yaml = toYaml(ordered, "raw");
  return `---\n${yaml}---\n${body.length ? `\n${body.join("\n\n")}\n` : ""}`;
}

/** The page's file. `parse(serialize(page))` deep-equals `page` (R1). */
export function serialize(page: Page): string {
  return render(page.type, toParts(page));
}
