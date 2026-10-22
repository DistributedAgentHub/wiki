import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { toMarkdown, type Options } from "mdast-util-to-markdown";
import type { Root } from "mdast";

// Markdown in wiki files: parsed like the site renders it (GFM + math, remark defaults)
// and written back by one stringifier with fixed options (docs/wiki-maintainers.md §3.2).

const processor = unified().use(remarkParse).use(remarkGfm).use(remarkMath).freeze();

const OPTIONS: Options = {
  bullet: "-",
  emphasis: "_",
  strong: "*",
  fence: "`",
  rule: "-",
  listItemIndent: "one",
  // remark-gfm and remark-math register their stringify extensions on the processor.
  extensions: (processor.data() as { toMarkdownExtensions: Options["extensions"] }).toMarkdownExtensions,
};

/** The mdast tree of a Markdown text, with positions (offsets into `text`). */
export function parseMarkdown(text: string): Root {
  return processor.parse(text);
}

// The stringifier escapes the "[" of a GitHub alert marker; the alert only works unescaped.
const ALERT = /^((?:> ?)+)\\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]$/gm;

/** A Markdown tree as text, by the fixed stringifier (without a final newline). The editor writes its sections with it. */
export function stringifyMarkdown(tree: Root): string {
  return toMarkdown(tree, OPTIONS).replace(ALERT, "$1[!$2]").replace(/\n+$/, "");
}

function stringifyOnce(text: string) {
  return stringifyMarkdown(parseMarkdown(text));
}

/** Remembers the last `size` results of a pure function of a string (oldest dropped first). */
class Memo<T> {
  private cache = new Map<string, T>();
  constructor(private size = 2000) {}
  get(s: string) {
    return this.cache.get(s);
  }
  set(s: string, v: T) {
    if (this.cache.size >= this.size) this.cache.delete(this.cache.keys().next().value!);
    this.cache.set(s, v);
    return v;
  }
}

const normalized = new Memo<string>();

/**
 * The normalized form of a Markdown text: the fixed stringifier's output, without a final
 * newline. A fixed point: normalizeMarkdown(normalizeMarkdown(t)) === normalizeMarkdown(t).
 * One pass is almost always enough; a few odd texts (an HTML comment inside math) settle on
 * the second, and none of 40,000 fuzzed texts or the real content needed a third.
 */
export function normalizeMarkdown(text: string): string {
  const hit = normalized.get(text);
  if (hit !== undefined) return hit;
  const first = stringifyOnce(text);
  const second = stringifyOnce(first);
  const out = second === first ? first : stringifyOnce(second);
  normalized.set(out, out);
  return normalized.set(text, out);
}

/** The source text of each top-level block, in order (the units `merge3` diffs). */
export function splitBlocks(text: string): string[] {
  return parseMarkdown(text).children.map((n) => text.slice(n.position!.start.offset!, n.position!.end.offset!));
}

/**
 * Whether a text can be a body section as it is: already normalized, not empty, no
 * top-level `#` heading, and closed (no open construct runs on into the next section).
 */
export function fitsSection(text: string): boolean {
  const hit = fits.get(text);
  if (hit !== undefined) return hit;
  // A CR would not survive: parse reads a file's line endings as LF.
  if (!text || text.includes("\r") || normalizeMarkdown(text) !== text) return fits.set(text, false);
  const tree = parseMarkdown(`${text}\n\n# x\n`);
  const last = tree.children.at(-1)!;
  const closed = last.type === "heading" && last.position!.start.offset === text.length + 2;
  return fits.set(text, closed && !tree.children.slice(0, -1).some((n) => n.type === "heading" && n.depth === 1));
}
const fits = new Memo<boolean>();
