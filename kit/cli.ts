import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { demoFolders, demoText, fmt, validateTree, WikiFormatError, type DemoFile, type WikiError } from "./wiki-ui/format";

// The wiki's command line, run from the repository root:
//
//   npm run check [-- <file>…]   every problem the "DARC wiki check" on a pull request would report
//                                about the content and the demos, as path:line:column: message
//                                (exit 1 if any)
//   npm run fmt [-- <file>…]     rewrite pages in canonical form
//   npm run new-demo <name>      scaffold demos/<name>/
//
// check and fmt use kit/wiki-ui/format, the code the site and the check run use.

const repo = fileURLToPath(new URL("..", import.meta.url));
const posix = (p: string) => p.replace(/\\/g, "/");

/** Every file under content/, by repository path. */
function contentFiles(): Record<string, string> {
  const out: Record<string, string> = {};
  const walk = (dir: string) => {
    if (!existsSync(dir)) return;
    for (const name of readdirSync(dir).sort()) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else out[posix(relative(repo, p))] = readFileSync(p, "utf8");
    }
  };
  walk(join(repo, "content"));
  return out;
}

/** Every demo folder under demos/, its manifest and HTML read (as the check run reads a changed folder). */
function demoTree(): Record<string, DemoFile[]> {
  const out: { path: string; size: number; text?: string }[] = [];
  const walk = (dir: string) => {
    if (!existsSync(dir)) return;
    for (const name of readdirSync(dir).sort()) {
      const p = join(dir, name);
      const path = posix(relative(repo, p));
      if (statSync(p).isDirectory()) walk(p);
      else out.push({ path, size: statSync(p).size, ...(demoText(path.split("/").slice(2).join("/")) ? { text: readFileSync(p, "utf8") } : {}) });
    }
  };
  walk(join(repo, "demos"));
  return demoFolders(out);
}

/** The repository paths the user named (relative to where npm was run), or null for all. */
function named(args: string[]): Set<string> | null {
  if (!args.length) return null;
  const cwd = process.env.INIT_CWD ?? process.cwd();
  return new Set(args.map((a) => posix(relative(repo, join(cwd, a)))));
}

const line = (e: WikiError) => `${e.path}:${e.line}:${e.column}: ${e.message}`;

function check(args: string[]): number {
  const files = contentFiles();
  const only = named(args);
  const demos = demoTree();
  const errors = validateTree(files, demos).filter((e) => !only || only.has(e.path));
  for (const e of errors) console.log(line(e));
  const total = only ? only.size : Object.keys(files).length + Object.values(demos).flat().length;
  const bad = new Set(errors.map((e) => e.path)).size;
  console.log(errors.length ? `\n${errors.length} problems in ${bad} of ${total} files.` : `${total} files checked: no problems.`);
  return errors.length ? 1 : 0;
}

function format(args: string[]): number {
  const only = named(args);
  let changed = 0;
  let failed = 0;
  for (const [path, text] of Object.entries(contentFiles())) {
    if (!path.endsWith(".md") || (only && !only.has(path))) continue;
    try {
      const out = fmt(text);
      if (out !== text) {
        writeFileSync(join(repo, path), out);
        console.log(`formatted ${path}`);
        changed++;
      }
    } catch (e) {
      if (!(e instanceof WikiFormatError)) throw e;
      for (const err of e.errors) console.log(line({ ...err, path }));
      failed++;
    }
  }
  console.log(`${changed} files formatted${failed ? `; ${failed} can't be read as pages (fix them by hand)` : ""}.`);
  return failed ? 1 : 0;
}

// A 1×1 PNG: replace it with a screenshot of the demo.
const THUMBNAIL = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

function demoFiles(name: string): Record<string, string | Buffer> {
  const manifest = {
    name,
    title: name.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()),
    description: "What the demo shows, in one sentence.",
    version: "0.1.0",
    props: { frequency: { type: "number", default: 2, minimum: 1, maximum: 10, description: "Waves across the picture" } },
    height: 320,
    minHeight: 200,
  };
  return {
    "demo.json": `${JSON.stringify(manifest, null, 2)}\n`,
    "index.html": `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="demo.css" />
  </head>
  <body>
    <canvas id="demo" width="640" height="320"></canvas>
    <script src="demo.js"></script>
  </body>
</html>
`,
    "demo.css": `html, body { margin: 0; height: 100%; background: #fff; }
canvas { display: block; width: 100%; height: 100%; }
`,
    "demo.js": `// Runs in a sandbox: no network, no cookies, no forms, no popups. Vendor any library you use
// into this folder. The page sends the demo's props (demo.json) by postMessage after it loads.
const canvas = document.getElementById("demo");
const ctx = canvas.getContext("2d");
let props = { frequency: 2 };

function draw() {
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#2f4bff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 0; x <= width; x++) {
    const y = height / 2 + (height / 3) * Math.sin((x / width) * props.frequency * 2 * Math.PI);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

window.addEventListener("message", (e) => {
  if (e.source !== window.parent || !e.data || e.data.type !== "darc-demo-props") return;
  props = { ...props, ...e.data.props };
  draw();
});
draw();
// Asks the page for the props (again): they may have been sent before this script listened.
window.parent.postMessage({ type: "darc-demo-ready" }, "*");
`,
    "thumbnail.png": Buffer.from(THUMBNAIL, "base64"),
  };
}

function newDemo(args: string[]): number {
  const name = args[0] ?? "";
  if (!/^[a-z0-9-]{3,40}$/.test(name)) {
    console.error("Usage: npm run new-demo <name>   (3 to 40 lowercase letters, digits and dashes)");
    return 2;
  }
  const dir = join(repo, "demos", name);
  if (existsSync(dir)) {
    console.error(`demos/${name} exists already.`);
    return 1;
  }
  mkdirSync(dir, { recursive: true });
  for (const [file, body] of Object.entries(demoFiles(name))) writeFileSync(join(dir, file), body);
  console.log(`Created demos/${name}/. Preview it at http://localhost:5173/#/demos/${name} (npm run preview).`);
  console.log(`Use it on a page with a block:\n\n\`\`\`darc-demo\ndemo: ${name}\n\`\`\``);
  return 0;
}

const COMMANDS: Record<string, (args: string[]) => number> = { check, fmt: format, "new-demo": newDemo };

const [cmd, ...rest] = process.argv.slice(2);
const run = COMMANDS[cmd ?? ""];
if (!run) {
  console.error(`Usage: tsx kit/cli.ts <${Object.keys(COMMANDS).join("|")}> [args]`);
  process.exitCode = 2;
} else {
  process.exitCode = run(rest);
}
