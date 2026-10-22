import { useEffect, useState, useSyncExternalStore } from "react";
import { PAGE_DIRS, type PageType, type WikiError } from "./wiki-ui/format";
import { Demo, PageBody } from "./wiki-ui/render";
import { demoAt, demos, env, pageAtPath, pageHref, pages, problems } from "./pages";

// The preview's three views, by the URL's hash: the index (#/), a page (#/content/<dir>/<slug>.md,
// optionally followed by #<section>), and a demo on its own (#/demos/<name>).

const subscribe = (fn: () => void) => {
  window.addEventListener("hashchange", fn);
  return () => window.removeEventListener("hashchange", fn);
};
const useHash = () => useSyncExternalStore(subscribe, () => window.location.hash);

const TYPE_HEADINGS: Record<PageType, string> = { field: "Fields", entry: "Research entries", problem: "Open problems", claim: "Claims" };

function Problems({ items }: { items: WikiError[] }) {
  if (!items.length) return null;
  return (
    <div className="border-l-4 border-warn bg-surface px-4 py-3 text-sm" data-problems={items.length}>
      <p className="eyebrow">npm run check</p>
      <ul className="mt-1 space-y-1 font-mono text-xs">
        {items.map((e, i) => (
          <li key={i}>
            {e.path}:{e.line}:{e.column}: {e.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Index() {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const shown = pages.filter((p) => !needle || p.title.toLowerCase().includes(needle) || p.path.includes(needle));
  const broken = new Set(problems.map((e) => e.path)).size;
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="eyebrow">DARC wiki · local preview</div>
        <h1 className="text-3xl font-semibold tracking-tight">{pages.length} pages</h1>
        <p className="text-sm text-muted">
          {problems.length ? `${problems.length} problems in ${broken} files: run npm run check for the list.` : "Every page passes npm run check."}
        </p>
        <input className="field max-w-md" placeholder="Filter by title or path" value={q} onChange={(e) => setQ(e.target.value)} />
      </header>
      {(Object.keys(PAGE_DIRS) as PageType[]).map((type) => {
        const list = shown.filter((p) => p.path.startsWith(`content/${PAGE_DIRS[type]}/`));
        if (!list.length) return null;
        return (
          <section key={type} className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">
              {TYPE_HEADINGS[type]} <span className="text-sm font-normal text-muted">{list.length}</span>
            </h2>
            <ul className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
              {list.map((p) => (
                <li key={p.path}>
                  <a href={pageHref(p.path)} className="hover:text-research">
                    {p.title}
                  </a>
                  {p.problems.length > 0 && <span className="ml-2 font-mono text-xs text-warn">{p.problems.length} problems</span>}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {demos.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Interactive demos</h2>
          <ul className="space-y-1 text-sm">
            {demos.map((d) => (
              <li key={d.name}>
                <a href={`#/demos/${d.name}`} className="hover:text-research">
                  {d.title}
                </a>{" "}
                <span className="font-mono text-xs text-muted">{d.name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function PageView({ path, section }: { path: string; section: string }) {
  const entry = pageAtPath(path);
  useEffect(() => {
    if (section) document.getElementById(section)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [path, section]);
  if (!entry) return <p>There is no file at {path}.</p>;
  return (
    <div className="space-y-6">
      <p className="font-mono text-xs text-muted">{path}</p>
      <Problems items={entry.problems} />
      {entry.page ? <PageBody page={entry.page} env={env} /> : <p>This file can&apos;t be read as a page: fix the problems above.</p>}
    </div>
  );
}

/** A demo on its own, as a page's darc-demo block with no props shows it: the site's sandboxed frame. */
function DemoView({ name }: { name: string }) {
  const demo = demoAt(name);
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <div className="eyebrow">Interactive demo · demos/{name}</div>
        <h1 className="text-3xl font-semibold tracking-tight">{demo?.manifest.title ?? name}</h1>
      </header>
      <Problems items={problems.filter((e) => e.path === `demos/${name}` || e.path.startsWith(`demos/${name}/`))} />
      <Demo demo={name} env={env} />
      <p className="text-sm text-muted">
        Use it on a page with a <code>darc-demo</code> block: <code>demo: {name}</code>
      </p>
    </div>
  );
}

export function App() {
  const hash = useHash();
  const [route, section = ""] = hash.replace(/^#\/?/, "").split("#");
  const demo = /^demos\/([a-z0-9-]{3,40})$/.exec(route);
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {route && (
        <nav className="mb-6 text-sm">
          <a href="#/" className="text-muted hover:text-research">
            ← All pages
          </a>
        </nav>
      )}
      {!route ? <Index /> : demo ? <DemoView name={demo[1]} /> : <PageView path={decodeURIComponent(route)} section={section} />}
    </main>
  );
}
