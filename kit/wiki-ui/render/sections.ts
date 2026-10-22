import type { Heading, Paragraph, PhrasingContent, Root, RootContent } from "mdast";

// Section anchors for long Markdown texts (moved here from src/lib/toc.ts, which re-exports
// them): the renderer (markdown.tsx) and the table of contents (lib/toc markdownToc) run
// `sectionAnchors` over the same parse tree, so a link and its target always agree.

export type TocItem = { id: string; label: string; children?: TocItem[] };

/** A URL-safe anchor: lowercase ASCII words joined by "-", at most 60 characters. */
export function slugify(text: string): string {
  const s = text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 60)
    .replace(/^-+|-+$/g, "");
  return s || "section";
}

/** Plain text of inline Markdown, with TeX commands reduced to their arguments ($\mathsf{NP}$ → NP). */
function plain(nodes: PhrasingContent[]): string {
  return nodes
    .map((n): string => {
      if (n.type === "inlineMath") return n.value.replace(/\\[a-zA-Z]+\s*/g, "").replace(/[{}]/g, "");
      if ("value" in n) return n.value;
      if ("children" in n) return plain(n.children as PhrasingContent[]);
      return "";
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

// A paragraph that opens with a short bold lead ("**What goes wrong.** …") is a section in
// all but name: the explanations are written that way instead of with headings.
const LEAD_MAX = 80;
function leadOf(p: Paragraph): string | null {
  const first = p.children[0];
  if (first?.type !== "strong") return null;
  const text = plain(first.children);
  if (!/[.:?]$/.test(text) || text.length > LEAD_MAX) return null;
  return text.replace(/[.:]$/, "");
}

/**
 * Gives the sections of a Markdown document stable, de-duplicated anchors and returns them in
 * order. Sections are the top-level h1/h2 headings; a document with none is split by its bold
 * paragraph leads instead. Each id carries the prefix, so two documents on one page (and the
 * page's own section ids) never collide, and text the reader wrote can only ever produce
 * `prefix-[a-z0-9-]` ids.
 */
export function sectionAnchors(tree: Root, prefix: string): TocItem[] {
  const headings = tree.children.filter((n): n is Heading => n.type === "heading" && n.depth <= 2);
  const marks: [RootContent, string][] = headings.length
    ? headings.map((h) => [h, plain(h.children)])
    : tree.children.flatMap((n): [RootContent, string][] => {
        const lead = n.type === "paragraph" ? leadOf(n) : null;
        return lead ? [[n, lead]] : [];
      });
  const seen = new Map<string, number>();
  return marks.map(([node, label]) => {
    const base = `${prefix}-${slugify(label)}`;
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    const id = n === 1 ? base : `${base}-${n}`;
    node.data = { ...node.data, hProperties: { ...node.data?.hProperties, id } };
    return { id, label: label || "Section" };
  });
}

/** Remark plugin for react-markdown: `[remarkSectionIds, { prefix }]`. */
export function remarkSectionIds({ prefix }: { prefix: string }) {
  return (tree: Root) => {
    sectionAnchors(tree, prefix);
  };
}
