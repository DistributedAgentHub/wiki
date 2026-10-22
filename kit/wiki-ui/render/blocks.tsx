import type { ReactNode } from "react";
import katex from "katex";
import type { CardData, DemoData, FigureData } from "./block-data";
import { demoHeight, demoProps } from "../format/demo";
import { DemoFrame } from "./demo-frame";
import { KATEX } from "./katex";
import type { WikiEnv } from "./env";
import { wikiTarget } from "./env";

// The wiki's block components (docs/wiki-maintainers.md §3.4, §6, §7). Server components: no
// hooks. The video facade and the demo frame are client leaves (video.tsx, demo-frame.tsx).

const EXTERNAL = { rel: "nofollow ugc noopener noreferrer", target: "_blank" } as const;

const FIGURE_WIDTH = { narrow: "max-w-md", wide: "max-w-3xl", full: "max-w-none" } as const;

/** An image from the wiki's `media/` (content-addressed; remote images are never loaded). */
export function Figure({ src, alt, caption, width = "wide", env }: FigureData & { env: WikiEnv }) {
  const [, sha, ext] = /^media\/([0-9a-f]{64})\.([a-z]+)$/.exec(src)!;
  return (
    <figure className={`not-prose mx-auto my-6 ${FIGURE_WIDTH[width]}`} data-width={width}>
      {/* eslint-disable-next-line @next/next/no-img-element -- immutable wiki media; the kit renders this outside Next */}
      <img src={env.mediaUrl(sha, ext)} alt={alt} loading="lazy" decoding="async" className="h-auto w-full border border-border" />
      {caption && <figcaption className="mt-2 text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}

const hostOf = (href: string) => new URL(href).hostname.replace(/^www\./, "");

/**
 * A "super link" (§6.2). An internal card (a relative wiki path) shows the page as the host
 * resolves it; an external one (https only, checked before it gets here) shows what the file
 * stores. Nothing is fetched when the page is viewed.
 */
export function LinkCard({ href, title, description, site, env }: CardData & { env: WikiEnv }) {
  const box = "not-prose my-6 block border border-border bg-surface p-4";
  const target = wikiTarget(href);
  if (target) {
    const page = env.resolvePage(target.path);
    if (!page) {
      return (
        <div className={`${box} text-muted`} data-card="missing">
          <span className="block font-medium">{title || target.path}</span>
          <span className="mt-1 block text-xs">This page was not found.</span>
        </div>
      );
    }
    return (
      <a href={page.href + target.hash} className={`${box} card-hover`} data-card="internal">
        <span className="eyebrow block">{page.type === "entry" ? "Research entry" : page.type === "problem" ? "Open problem" : page.type === "claim" ? "Claim" : "Field"}</span>
        <span className="mt-1 block font-medium text-foreground">{title || page.title}</span>
        {page.summary && <span className="mt-1 block text-sm text-muted">{page.summary}</span>}
      </a>
    );
  }
  const host = hostOf(href);
  return (
    <a href={href} {...EXTERNAL} className={`${box} card-hover`} data-card="external">
      <span className="eyebrow block">{site || host}</span>
      <span className="mt-1 block font-medium text-foreground">{title || host}</span>
      {description && <span className="mt-1 block text-sm text-muted">{description}</span>}
    </a>
  );
}

export const CALLOUT_KINDS = ["NOTE", "TIP", "IMPORTANT", "WARNING", "CAUTION"] as const;
export type CalloutKind = (typeof CALLOUT_KINDS)[number];

const CALLOUT_STYLE: Record<CalloutKind, string> = {
  NOTE: "border-sky-500",
  TIP: "border-emerald-500",
  IMPORTANT: "border-violet-500",
  WARNING: "border-amber-500",
  CAUTION: "border-red-500",
};

/** A GitHub alert (`> [!NOTE]` …), which GitHub renders natively too. */
export function Callout({ kind, children }: { kind: CalloutKind; children?: ReactNode }) {
  return (
    <aside className={`my-6 border-l-4 bg-surface px-4 py-1 ${CALLOUT_STYLE[kind]}`} data-callout={kind.toLowerCase()}>
      <p className="eyebrow">{kind[0] + kind.slice(1).toLowerCase()}</p>
      {children}
    </aside>
  );
}

/**
 * A display equation on its own (the editor's live preview). The same KaTeX output a `$$ … $$`
 * block gets in WikiMarkdown, untrusted and with the same limits.
 */
export function MathBlock({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, { ...KATEX, displayMode: true, throwOnError: false });
  return <div className="math-block" dangerouslySetInnerHTML={{ __html: html }} />;
}

/**
 * An interactive demo (§7) as a locked card: where there is no browser to run it (the host has no
 * registry, as the check run), or when the registry has no such demo (`missing`: removed, or
 * never merged into the wiki repository).
 */
export function DemoPlaceholder({ demo, caption, height, missing = false }: DemoData & { missing?: boolean }) {
  return (
    <figure className="not-prose my-6" data-demo={demo} data-demo-state={missing ? "missing" : "locked"}>
      <div className="flex flex-col items-center justify-center gap-1 border border-dashed border-border bg-surface p-6 text-center" style={{ minHeight: Math.min(height ?? 200, 400) }}>
        <span className="eyebrow">{missing ? "Demo removed" : "Interactive demo"}</span>
        <span className="font-mono text-sm">{demo}</span>
        <span className="text-xs text-muted">
          {missing ? "This demo is not in the wiki repository (any more)." : "The demo's code lives in the wiki repository. It runs here, sandboxed."}
        </span>
      </div>
      {caption && <figcaption className="mt-2 text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}

/**
 * A darc-demo block: the demo of the registry in its sandboxed frame (demo-frame.tsx), with the
 * block's props checked against the manifest (a bad value keeps its default) and its height
 * within the manifest's minimum. The page always shows the registry's current version.
 */
export function Demo({ env, ...data }: DemoData & { env: WikiEnv }) {
  if (!env.resolveDemo) return <DemoPlaceholder {...data} />;
  const found = env.resolveDemo(data.demo);
  if (!found) return <DemoPlaceholder {...data} missing />;
  const { manifest, version } = found;
  return (
    <figure className="not-prose my-6" data-demo={data.demo} data-demo-state="live">
      <DemoFrame src={env.demoUrl(data.demo, version)} title={manifest.title} props={demoProps(manifest, data.props).values} height={demoHeight(manifest, data.height)} />
      <figcaption className="mt-2 text-center text-sm text-muted">{data.caption || manifest.title}</figcaption>
    </figure>
  );
}
