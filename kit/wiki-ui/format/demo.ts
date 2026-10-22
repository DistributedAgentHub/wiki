import { z } from "zod";
import type { WikiError } from "./types";
import type { DemoPropValue } from "./demo-protocol";

// Interactive demos (docs/wiki-maintainers.md §7): a static folder demos/<name>/ in the wiki
// repository with a manifest (demo.json), an index.html and its scripts, styles and assets. The
// rules here are the only ones: the sync applies them before it serves a demo, the PR check run
// and the kit's `npm run check` report them, and the renderer reads a page's demo props with them.

export const DEMO_NAME = /^[a-z0-9-]{3,40}$/;

/** The file types a demo may hold, with the type they are served as. */
export const DEMO_TYPES: Record<string, string> = {
  html: "text/html; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  css: "text/css; charset=utf-8",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp",
  woff2: "font/woff2",
};
export const DEMO_MAX_BYTES = 2 * 1024 * 1024;
export const DEMO_FILE_MAX_BYTES = 1024 * 1024;
/** A demo's height on a page when neither the block nor the manifest sets one. */
export const DEMO_HEIGHT = 320;
export const DEMO_HEIGHT_MIN = 100;
export const DEMO_HEIGHT_MAX = 2000;
/** The most props a demo declares. */
export const DEMO_PROPS_MAX = 20;
// The page ↔ demo messages and the props' size limit live in demo-protocol.ts (no zod).
export { DEMO_PROPS_MAX_BYTES, DEMO_PROPS_MESSAGE, DEMO_READY_MESSAGE, type DemoPropValue } from "./demo-protocol";

/** The type a demo file is served as, or null when demos can't hold it. */
export const demoType = (file: string): string | null => DEMO_TYPES[/\.([a-z0-9]+)$/.exec(file)?.[1] ?? ""] ?? null;
/** Whether a demo file's text is read by the rules (the manifest and the HTML). */
export const demoText = (file: string) => file === "demo.json" || file.endsWith(".html");

// ─── The manifest (demo.json) ──────────────────────────────────────────────

const label = { title: z.string().max(100).optional(), description: z.string().max(300).optional() };
const height = z.number().int().min(DEMO_HEIGHT_MIN).max(DEMO_HEIGHT_MAX);

/** One declared prop: a JSON-schema subset (string, possibly an enum; number; integer; boolean), always with a default. */
const propSchema = z
  .discriminatedUnion("type", [
    z.strictObject({ type: z.literal("string"), default: z.string().max(1000), maxLength: z.number().int().min(1).max(1000).optional(), enum: z.array(z.string().max(200)).min(1).max(50).optional(), ...label }),
    z.strictObject({ type: z.literal("number"), default: z.number(), minimum: z.number().optional(), maximum: z.number().optional(), step: z.number().positive().optional(), ...label }),
    z.strictObject({ type: z.literal("integer"), default: z.number().int(), minimum: z.number().int().optional(), maximum: z.number().int().optional(), ...label }),
    z.strictObject({ type: z.literal("boolean"), default: z.boolean(), ...label }),
  ])
  .superRefine((p, ctx) => {
    const bad = propError(p, p.default);
    if (bad) ctx.addIssue({ code: "custom", path: ["default"], message: bad });
    if ((p.type === "number" || p.type === "integer") && p.minimum !== undefined && p.maximum !== undefined && p.minimum > p.maximum) {
      ctx.addIssue({ code: "custom", path: ["minimum"], message: "is over the maximum" });
    }
  });

export const DEMO_MANIFEST = z
  .strictObject({
    name: z.string().regex(DEMO_NAME, "must be the folder's name: 3–40 lowercase letters, digits and dashes"),
    title: z.string().trim().min(1, "is required").max(120),
    description: z.string().max(500).optional(),
    version: z.string().max(40).optional(),
    props: z
      .record(z.string(), propSchema)
      .superRefine((p, ctx) => {
        if (Object.keys(p).length > DEMO_PROPS_MAX) ctx.addIssue({ code: "custom", message: `at most ${DEMO_PROPS_MAX} props` });
        for (const k of Object.keys(p)) if (!/^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(k)) ctx.addIssue({ code: "custom", path: [k], message: "a prop's name is a letter, then up to 39 letters, digits or _" });
      })
      .optional(),
    height: height.optional(),
    minHeight: height.optional(),
  })
  .refine((m) => m.minHeight === undefined || m.height === undefined || m.minHeight <= m.height, { path: ["minHeight"], message: "is over height" });

export type DemoManifest = z.infer<typeof DEMO_MANIFEST>;
export type DemoProp = z.infer<typeof propSchema>;

/** What is wrong with a value for a prop, or null. */
function propError(p: DemoProp, v: unknown): string | null {
  switch (p.type) {
    case "boolean":
      return typeof v === "boolean" ? null : "must be true or false";
    case "string":
      if (typeof v !== "string") return "must be text";
      if (v.length > (p.maxLength ?? 1000)) return `must be at most ${p.maxLength ?? 1000} characters`;
      return p.enum && !p.enum.includes(v) ? `must be one of: ${p.enum.join(", ")}` : null;
    default:
      if (typeof v !== "number" || !Number.isFinite(v)) return "must be a number";
      if (p.type === "integer" && !Number.isInteger(v)) return "must be a whole number";
      if (p.minimum !== undefined && v < p.minimum) return `must be at least ${p.minimum}`;
      return p.maximum !== undefined && v > p.maximum ? `must be at most ${p.maximum}` : null;
  }
}

/** A manifest value checked against the schema: the manifest, or its problems as "key: message". */
export function readManifest(value: unknown): { manifest: DemoManifest; errors: [] } | { manifest: null; errors: string[] } {
  const r = DEMO_MANIFEST.safeParse(value);
  if (r.success) return { manifest: r.data, errors: [] };
  return { manifest: null, errors: r.error.issues.map((i) => `${i.path.length ? `${i.path.join(".")}: ` : ""}${i.message}`) };
}

/** demo.json's text read as a manifest (see readManifest). */
export function parseManifest(text: string): ReturnType<typeof readManifest> {
  let value: unknown;
  try {
    value = JSON.parse(text);
  } catch {
    return { manifest: null, errors: ["not valid JSON"] };
  }
  return readManifest(value);
}

/**
 * The props a page's darc-demo block gives a demo, checked against its manifest: every declared
 * prop with the block's value or else its default, and what is wrong with the block's values
 * (an undeclared prop, a value of the wrong type or out of range: those keep the default).
 */
export function demoProps(manifest: DemoManifest, given: Record<string, unknown> = {}): { values: Record<string, DemoPropValue>; errors: string[] } {
  const decl = manifest.props ?? {};
  const values: Record<string, DemoPropValue> = Object.fromEntries(Object.entries(decl).map(([k, p]) => [k, p.default]));
  const errors: string[] = [];
  for (const [k, v] of Object.entries(given)) {
    const p = Object.hasOwn(decl, k) ? decl[k] : undefined;
    if (!p) {
      errors.push(`props.${k}: the demo "${manifest.name}" has no prop "${k}"${Object.keys(decl).length ? ` (it has: ${Object.keys(decl).join(", ")})` : ""}`);
      continue;
    }
    const bad = propError(p, v);
    if (bad) errors.push(`props.${k}: ${bad}`);
    else values[k] = v as DemoPropValue;
  }
  return { values, errors };
}

/** A demo's height on a page: the block's, else the manifest's, never under the manifest's minimum. */
export function demoHeight(manifest: DemoManifest, block?: number): number {
  return Math.min(DEMO_HEIGHT_MAX, Math.max(block ?? manifest.height ?? DEMO_HEIGHT, manifest.minHeight ?? DEMO_HEIGHT_MIN));
}

// ─── The folder ─────────────────────────────────────────────────────────────

/** A file of a demo folder: its path inside the folder, its size, and its text when demoText(path) and it was read. */
export type DemoFile = { path: string; size: number; text?: string };

/** The demo folders among a tree's files (repository paths): demos/<name>/<file> by name. Files right under demos/ belong to none. */
export function demoFolders(files: { path: string; size: number; text?: string }[]): Record<string, DemoFile[]> {
  const out: Record<string, DemoFile[]> = {};
  for (const f of files) {
    const m = /^demos\/([^/]+)\/(.+)$/.exec(f.path);
    if (m) (out[m[1]] ??= []).push({ ...f, path: m[2] });
  }
  return out;
}

// Inline code doesn't run under the demo CSP (script-src is the folder), so it is an error rather than a silent no-op.
const INLINE_SCRIPT = /<script\b(?![^>]*\bsrc\s*=)[^>]*>\s*[^<\s]/i;
const INLINE_HANDLER = /<[a-z][^>]*\son[a-z]+\s*=/i;
const REMOTE = /\b(?:src|href)\s*=\s*["']?\s*(?:https?:)?\/\//i;

/**
 * Every problem with a demo folder (§7): its name; demo.json (against the manifest schema, and
 * naming the folder) and index.html present; file types and sizes; and HTML that loads nothing
 * from other sites, has no <base> and no inline scripts or event handlers (the CSP blocks them).
 * Problems with the folder as a whole are at `demos/<name>`.
 */
export function validateDemo(name: string, files: DemoFile[]): WikiError[] {
  const out: WikiError[] = [];
  const at = (file: string | null, message: string) => out.push({ path: file ? `demos/${name}/${file}` : `demos/${name}`, line: 1, column: 1, message });
  if (!DEMO_NAME.test(name)) at(null, "a demo's folder name is 3–40 lowercase letters, digits and dashes");
  const byPath = new Map(files.map((f) => [f.path, f]));
  for (const must of ["demo.json", "index.html"]) if (!byPath.has(must)) at(null, `${must} is missing`);
  let total = 0;
  for (const f of [...files].sort((a, b) => a.path.localeCompare(b.path))) {
    total += f.size;
    if (!demoType(f.path)) at(f.path, `only ${Object.keys(DEMO_TYPES).map((e) => `.${e}`).join(" ")} files are allowed`);
    if (f.size > DEMO_FILE_MAX_BYTES) at(f.path, `over ${DEMO_FILE_MAX_BYTES / 1024 / 1024} MB`);
    if (f.path.endsWith(".html") && f.text !== undefined) {
      if (/<base\b/i.test(f.text)) at(f.path, "<base> is not allowed");
      if (REMOTE.test(f.text)) at(f.path, "src and href can't load from other sites (demos run without the network): put the file in the folder");
      if (INLINE_SCRIPT.test(f.text)) at(f.path, "inline <script> code doesn't run (the demo's security policy allows only its own files): move it to a .js file");
      if (INLINE_HANDLER.test(f.text)) at(f.path, "inline event handlers (onclick=…) don't run: use addEventListener in a .js file");
    }
  }
  if (total > DEMO_MAX_BYTES) at(null, `over ${DEMO_MAX_BYTES / 1024 / 1024} MB in total`);
  const manifest = byPath.get("demo.json")?.text;
  if (manifest !== undefined) {
    const r = parseManifest(manifest);
    for (const e of r.errors) at("demo.json", e);
    if (r.manifest && r.manifest.name !== name) at("demo.json", `name: must be "${name}", the folder's name`);
  }
  return out;
}
