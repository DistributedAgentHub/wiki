import { parseManifest, validateDemo, type DemoFile, type DemoManifest } from "./demo";
import { pageAt } from "./paths";
import type { PageType, WikiError } from "./types";
import { validate, type ValidateOptions } from "./validate";

// A whole tree of content files at once (docs/wiki-maintainers.md §9.6, §13): what the PR check
// run validates at a pull request's head and what `npm run check` validates in a working copy of
// the wiki repository. One function, so both give the same verdicts: validateTree all at once (the
// kit), validateTreeAsync in slices that leave the event loop free between them (the site's server).

/** validate()'s `exists` for a tree: the pages its paths name (content/<dir>/<slug>.md). */
export function treeExists(paths: Iterable<string>): (type: PageType, slug: string) => boolean {
  const pages = new Set<string>();
  for (const p of paths) {
    const at = pageAt(p);
    if (at) pages.add(`${at.type}:${at.slug}`);
  }
  return (type, slug) => pages.has(`${type}:${slug}`);
}

/**
 * validate()'s verdicts remembered between runs of validateTreeAsync (its `memo`). A page's verdict
 * is reused when its path and text are the same and every question the earlier run asked the tree
 * (does this page exist? what is this demo's demo.json?) gets the same answer: validate() is a pure
 * function of the file and those answers, so it would decide the same again.
 */
export type PageMemo = Map<string, MemoEntry>;
type MemoEntry = { text: string; withDemos: boolean; exists: [PageType, string, boolean][]; demos: [string, string | null][]; errors: WikiError[] };

/** An empty PageMemo. */
export const pageMemo = (): PageMemo => new Map();

/**
 * validateTree's work, one step per content file then one per demo folder, each giving that
 * file's or folder's problems. With a memo, pages are looked up and recorded there.
 */
function* treeSteps(files: Record<string, string>, demos: Record<string, DemoFile[]> | undefined, memo?: PageMemo): Generator<WikiError[]> {
  const paths = Object.keys(files)
    .filter((p) => p.startsWith("content/"))
    .sort();
  const exists = treeExists(paths);
  // Per demo folder: its demo.json's text ("" when it has none), and the manifest read from it.
  const manifestText = new Map<string, string>();
  const manifests = new Map<string, DemoManifest | null>();
  for (const [name, list] of Object.entries(demos ?? {})) {
    const text = list.find((f) => f.path === "demo.json")?.text;
    manifestText.set(name, text ?? "");
    manifests.set(name, text === undefined ? null : parseManifest(text).manifest);
  }
  const demoText = (name: string) => manifestText.get(name) ?? null;
  const demo = demos ? (name: string) => (manifests.has(name) ? { manifest: manifests.get(name)! } : null) : undefined;
  for (const path of paths) {
    if (!pageAt(path)) {
      yield [{ path, line: 1, column: 1, message: "not a page file: pages live at content/<fields|entries|problems|claims>/<slug>.md (slug: lowercase letters, digits and dashes)" }];
      continue;
    }
    const text = files[path];
    if (!memo) {
      yield validate(path, text, { exists, demo });
      continue;
    }
    const was = memo.get(path);
    if (was && was.text === text && was.withDemos === !!demo && was.exists.every(([t, s, a]) => exists(t, s) === a) && was.demos.every(([n, a]) => demoText(n) === a)) {
      yield was.errors;
      continue;
    }
    // Validate, recording what it asks the tree.
    const entry: MemoEntry = { text, withDemos: !!demo, exists: [], demos: [], errors: [] };
    const opts: ValidateOptions = {
      exists: (type, slug) => {
        const a = exists(type, slug);
        entry.exists.push([type, slug, a]);
        return a;
      },
      demo:
        demo &&
        ((name) => {
          entry.demos.push([name, demoText(name)]);
          return demo(name);
        }),
    };
    entry.errors = validate(path, text, opts);
    memo.set(path, entry);
    yield entry.errors;
  }
  if (memo) for (const path of memo.keys()) if (!(path in files)) memo.delete(path);
  for (const name of Object.keys(demos ?? {}).sort()) yield validateDemo(name, demos![name]);
}

/**
 * Every problem with the content files of a tree, by path then position. `files` maps repository
 * paths to their text; paths outside content/ are ignored, and a file under content/ that isn't
 * content/<fields|entries|problems|claims>/<slug>.md is an error. Cross-references resolve
 * against the tree itself.
 *
 * With `demos` (the tree's demo folders, demoFolders), each folder's problems follow, by name,
 * and the pages' darc-demo blocks must name one of them with props its manifest declares.
 */
export function validateTree(files: Record<string, string>, demos?: Record<string, DemoFile[]>): WikiError[] {
  const out: WikiError[] = [];
  for (const errors of treeSteps(files, demos)) out.push(...errors);
  return out;
}

export type ValidateTreeOptions = {
  /** Work this long (ms) at most before letting other work run (default 15). */
  sliceMs?: number;
  /** Lets other work run (default: setImmediate, so pending I/O and timers go first; setTimeout where there is none). */
  pause?: () => Promise<void>;
  /** Verdicts remembered from earlier runs (pageMemo), reused where they still hold, updated otherwise. */
  memo?: PageMemo;
};

const macrotask = () => new Promise<void>((resolve) => (typeof setImmediate === "function" ? setImmediate(resolve) : setTimeout(resolve, 0)));

/**
 * validateTree, the same problems in the same order, without holding the event loop for longer
 * than about `sliceMs` (one page's validation, ~20 ms, can't be split): a server validating a
 * few hundred pages for a PR check keeps answering requests meanwhile.
 */
export async function validateTreeAsync(files: Record<string, string>, demos?: Record<string, DemoFile[]>, opts: ValidateTreeOptions = {}): Promise<WikiError[]> {
  const { sliceMs = 15, pause = macrotask, memo } = opts;
  const out: WikiError[] = [];
  let since = Date.now();
  for (const errors of treeSteps(files, demos, memo)) {
    out.push(...errors);
    if (Date.now() - since >= sliceMs) {
      await pause();
      since = Date.now();
    }
  }
  return out;
}
