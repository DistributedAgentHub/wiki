import type { Nodes } from "mdast";
import { parseMarkdown } from "../format/markdown";
import { pageAt } from "../format/paths";
import type { PageType } from "../format/types";
import type { DemoManifest } from "../format/demo";
import { readBlock } from "./block-data";

// What the renderer needs from its host (docs/wiki-maintainers.md §4). Everything that depends
// on where the wiki is shown comes in through one WikiEnv: the site builds it from cached DB
// reads (src/lib/wiki-env.ts), the repo's preview kit from the files, the check run as a stub.

/** A wiki page as a link or a card shows it. */
export type ResolvedPage = { type: PageType; title: string; summary: string; href: string };

/** A demo of the registry (§7): the version served (the commit that last changed its folder) and its manifest. */
export type ResolvedDemo = { version: string; manifest: DemoManifest };

export type WikiEnv = {
  /** The page at a repository path (content/<dir>/<slug>.md), or null when there is none. */
  resolvePage(path: string): ResolvedPage | null;
  /** Where an image of `media/` is served: `media/<sha>.<ext>` in the file. */
  mediaUrl(sha: string, ext: string): string;
  /** Where a demo's entry page is served; the demo block embeds it in a sandboxed frame. */
  demoUrl(name: string, version: string): string;
  /**
   * The demo of this name in the registry, or null when there is none (removed, or never merged).
   * Without it (the check run, text outside a browser) demo blocks show as locked cards.
   */
  resolveDemo?(name: string): ResolvedDemo | null;
  /**
   * Where a hover preview of a page is fetched from, when previews are on. A URL rather than
   * a fetch function: the preview is a client component, and only data crosses to the client.
   */
  previewUrl?(path: string): string;
};

/** An env that knows no pages: links between pages render as plain text, cards as "not found". */
export const STUB_ENV: WikiEnv = {
  resolvePage: () => null,
  mediaUrl: (sha, ext) => `media/${sha}.${ext}`,
  demoUrl: (name, version) => `demos/${name}/index.html?v=${version}`,
};

// An internal link in a file is a relative path to another page's file, as GitHub reads it:
// ../entries/riemann-zeta-function.md, optionally with a #fragment (§3.4).
const WIKI_LINK = /^(?:\.\.?\/)*(?:content\/)?([a-z]+\/[a-z0-9][a-z0-9-]{0,99}\.md)(#[A-Za-z0-9_-]*)?$/;

/** The page a link's href points at, as {path, hash}, or null when it isn't a link between wiki pages. */
export function wikiTarget(href: string): { path: string; hash: string } | null {
  const m = WIKI_LINK.exec(href.trim());
  if (!m) return null;
  const path = `content/${m[1]}`;
  return pageAt(path) ? { path, hash: m[2] ?? "" } : null;
}

function collect(node: Nodes, out: Set<string>) {
  if (node.type === "link" || node.type === "definition") {
    const t = wikiTarget(node.url);
    if (t) out.add(t.path);
  } else if (node.type === "code" && node.lang === "darc-card") {
    const b = readBlock(node.lang, node.value);
    const t = b?.kind === "darc-card" ? wikiTarget(b.data.href) : null;
    if (t) out.add(t.path);
  }
  if ("children" in node) for (const c of node.children) collect(c as Nodes, out);
}

/**
 * Every wiki page the texts link to or show as a card, so a host can look them all up at once
 * before rendering (rendering itself is synchronous). Most texts link to none, which costs the
 * host nothing.
 */
export function wikiPathsIn(texts: (string | null | undefined)[]): string[] {
  const out = new Set<string>();
  for (const t of texts) if (t && /\.md\b/.test(t)) collect(parseMarkdown(t), out);
  return [...out].sort();
}

/** The demos the texts show (top-level darc-demo blocks, as the renderer finds them), so a host can look them up at once. */
export function wikiDemosIn(texts: (string | null | undefined)[]): string[] {
  const out = new Set<string>();
  for (const t of texts) {
    if (!t || !t.includes("darc-demo")) continue;
    for (const node of parseMarkdown(t).children) {
      const b = node.type === "code" ? readBlock(node.lang, node.value) : null;
      if (b?.kind === "darc-demo") out.add(b.data.demo);
    }
  }
  return [...out].sort();
}
