import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";
import type { Plugin } from "vite";

// The preview server's files outside the app: images from media/, and demos from demos/ with the
// headers the site serves them with (docs/wiki-maintainers.md §7), so a demo that works here
// works on the site: no network, no forms, no navigation of the page around it.

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".woff2": "font/woff2",
};
const MEDIA = /^\/media\/([a-f0-9]{64}\.(?:png|jpg|webp|gif))$/;
const DEMO = /^\/demos\/([a-z0-9-]{3,40})\/((?:[A-Za-z0-9._-]+\/)*[A-Za-z0-9._-]+)$/;
const DEMO_TYPES = new Set([".html", ".js", ".css", ".json", ".png", ".jpg", ".webp", ".woff2"]);

/** The Content-Security-Policy of a demo's files: only the demo's own folder, nothing else. */
export function demoCsp(origin: string, name: string): string {
  const own = `${origin}/demos/${name}/`;
  return [
    "default-src 'none'",
    `script-src ${own}`,
    `style-src ${own} 'unsafe-inline'`,
    `img-src ${own} data:`,
    `font-src ${own}`,
    "connect-src 'none'",
    "form-action 'none'",
    `frame-ancestors ${origin}`,
    "base-uri 'none'",
  ].join("; ");
}

/** The file a request names inside `dir`, or null (outside it, missing, or a folder). */
function inside(dir: string, rel: string): string | null {
  const root = resolve(dir);
  const file = resolve(join(root, rel));
  if (!file.startsWith(root + sep) || !existsSync(file) || !statSync(file).isFile()) return null;
  return file;
}

export function wikiFiles(repo: string): Plugin {
  return {
    name: "darc-wiki-files",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? "").split("?")[0]);
        const media = MEDIA.exec(url);
        const demo = DEMO.exec(url);
        const file = media ? inside(join(repo, "media"), media[1]) : demo ? inside(join(repo, "demos", demo[1]), demo[2]) : undefined;
        if (file === undefined) return next();
        const type = file && TYPES[extname(file).toLowerCase()];
        if (!file || !type || (demo && !DEMO_TYPES.has(extname(file).toLowerCase()))) {
          res.statusCode = 404;
          res.end("Not found");
          return;
        }
        res.setHeader("Content-Type", type);
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Cache-Control", "no-store");
        // Not same-origin: the sandboxed frame has an opaque origin, and a browser applies CORP to
        // its loads, so same-origin would block the demo's own scripts and styles.
        if (demo) res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
        if (demo) res.setHeader("Content-Security-Policy", demoCsp(`http://${req.headers.host ?? "localhost:5173"}`, demo[1]));
        res.end(readFileSync(file));
      });
    },
  };
}
