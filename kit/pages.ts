import { demoFolders, parse, readManifest, validateTree, WikiFormatError, type Page, type PageType, type WikiError } from "./wiki-ui/format";
import type { ResolvedDemo, ResolvedPage, WikiEnv } from "./wiki-ui/render";

// The repository's files as the preview sees them: every content/**.md (reloaded on edit), each
// read as a page, the problems `npm run check` would report, and the WikiEnv the components get.

const raw = import.meta.glob<string>("../content/**/*.md", { query: "?raw", import: "default", eager: true });
const manifests = import.meta.glob<unknown>("../demos/*/demo.json", { import: "default", eager: true });

/** Repository path → file text. */
export const files: Record<string, string> = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k.replace(/^\.\.\//, ""), v]));

// The demos' files: their paths (not loaded), and the manifests' and HTML's text. Sizes aren't known
// here, so the preview leaves the size limits to npm run check.
const demoPaths = Object.keys(import.meta.glob("../demos/*/**/*"));
const demoHtml = import.meta.glob<string>("../demos/*/**/*.html", { query: "?raw", import: "default", eager: true });
const demoTexts: Record<string, string> = { ...demoHtml, ...Object.fromEntries(Object.entries(manifests).map(([k, m]) => [k, JSON.stringify(m)])) };

/** Every problem in the tree, as `npm run check` reports it (but for demo sizes). */
export const problems: WikiError[] = validateTree(
  files,
  demoFolders(demoPaths.map((k) => ({ path: k.replace(/^\.\.\//, ""), size: 0, ...(k in demoTexts ? { text: demoTexts[k] } : {}) }))),
);

export type Entry = { path: string; page: Page | null; title: string; summary: string; problems: WikiError[] };

function read(path: string): Page | null {
  try {
    return parse(files[path]);
  } catch (e) {
    if (e instanceof WikiFormatError) return null;
    throw e;
  }
}

const titleOf = (p: Page) => (p.type === "field" ? p.name : p.title);
const summaryOf = (p: Page) => (p.type === "entry" ? p.summary || p.explainer.oneLine : p.type === "problem" ? p.explainer.oneLine : "");

export const pages: Entry[] = Object.keys(files)
  .sort()
  .map((path) => {
    const page = read(path);
    return { path, page, title: page ? titleOf(page) : path, summary: page ? summaryOf(page) : "", problems: problems.filter((e) => e.path === path) };
  });
const byPath = new Map(pages.map((p) => [p.path, p]));
export const pageAtPath = (path: string) => byPath.get(path) ?? null;

/** The demos under demos/ whose manifest reads (npm run check reports the others), as the site's registry holds them. */
const registry: Record<string, ResolvedDemo> = Object.fromEntries(
  Object.entries(manifests).flatMap(([k, m]) => {
    const { manifest } = readManifest(m);
    return manifest ? [[k.split("/")[2], { version: "local", manifest }]] : [];
  }),
);

export const demos = Object.entries(registry)
  .map(([name, d]) => ({ name, title: d.manifest.title, description: d.manifest.description ?? "" }))
  .sort((a, b) => a.name.localeCompare(b.name));
export const demoAt = (name: string): ResolvedDemo | null => (Object.hasOwn(registry, name) ? registry[name] : null);

/** A link to a page inside the preview. */
export const pageHref = (path: string) => `#/${path}`;

export const env: WikiEnv = {
  resolvePage(path): ResolvedPage | null {
    const p = byPath.get(path);
    return p?.page ? { type: p.page.type as PageType, title: p.title, summary: p.summary, href: pageHref(path) } : null;
  },
  mediaUrl: (sha, ext) => `/media/${sha}.${ext}`,
  demoUrl: (name) => `/demos/${name}/index.html`,
  resolveDemo: demoAt,
};
