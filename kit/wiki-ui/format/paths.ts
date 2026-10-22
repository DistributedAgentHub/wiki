import { SLUG } from "./schema";
import type { PageType } from "./types";

// Where pages live in the wiki repository (§3.1): flat by type, one file per page.

/** Images (media/<sha>.<ext>) are at most this big (§6.1): the server's limit, checked by the editor before uploading. */
export const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

export const PAGE_DIRS: Record<PageType, string> = { field: "fields", entry: "entries", problem: "problems", claim: "claims" };

/** content/<dir>/<slug>.md */
export function pagePath(type: PageType, slug: string): string {
  return `content/${PAGE_DIRS[type]}/${slug}.md`;
}

/** The page a repository path names, or null if it isn't a page file. */
export function pageAt(path: string): { type: PageType; slug: string } | null {
  const m = /^content\/([a-z]+)\/([^/]+)\.md$/.exec(path);
  if (!m) return null;
  const type = (Object.keys(PAGE_DIRS) as PageType[]).find((t) => PAGE_DIRS[t] === m[1]);
  return type && SLUG.test(m[2]) ? { type, slug: m[2] } : null;
}
