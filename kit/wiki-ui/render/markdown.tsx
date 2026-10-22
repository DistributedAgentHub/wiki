import ReactMarkdown, { type Components, type UrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { PluggableList } from "unified";
import type { ReactElement, ReactNode } from "react";
import type { Block } from "./block-data";
import { Callout, Demo, Figure, LinkCard, type CalloutKind } from "./blocks";
import { wikiTarget, type WikiEnv } from "./env";
import { KATEX } from "./katex";
import { LinkPreview } from "./link-preview";
import { createMemo, envKey } from "./memo";
import { remarkWikiBlocks } from "./remark-blocks";
import { remarkSectionIds } from "./sections";
import { Video } from "./video";

export { KATEX } from "./katex";

// Everything rendered here can be written by anyone, so it is treated as hostile:
// - react-markdown never renders raw HTML: <script>, <img onerror>, <iframe> come out as text.
// - Links may only point at http(s), mailto, or this site; anything else (javascript:,
//   data:, vbscript:) is dropped. Outbound links carry rel=nofollow ugc noopener.
// - Images are not loaded (a remote image tells its owner who is reading); they become links.
// - KaTeX runs untrusted (no \href, \url, \includegraphics) with limits on macro
//   expansion and size, so a crafted formula can't stall the server or cover the page.
// Math: $inline$ and $$display$$, rendered server-side.
//
// Wiki text (docs/wiki-maintainers.md §3.4, §4) is rendered with a WikiEnv. Only then are its
// typed blocks (figures, link cards, videos, demos, callouts) and its links between wiki pages
// (../entries/x.md) rendered as such. Without an env (comments, messages, reviews) the text
// renders exactly as before blocks existed: a darc-* block is a code block, a page link is text.

const SAFE_URL = /^(https?:|mailto:|\/(?!\/)|#)/i;
export const safeUrl: UrlTransform = (url) => {
  const u = url.trim();
  return SAFE_URL.test(u) ? u : "";
};

/** safeUrl, also keeping links between wiki pages (the `a` component maps them to the page). */
const wikiUrl: UrlTransform = (url, key, node) => (wikiTarget(url) ? url.trim() : safeUrl(url, key, node));

function Link({ href, children }: { href?: string; children?: ReactNode }) {
  if (!href) return <>{children}</>;
  const external = /^(https?:|mailto:)/i.test(href);
  return (
    <a href={href} {...(external ? { rel: "nofollow ugc noopener noreferrer", target: "_blank" } : {})}>
      {children}
    </a>
  );
}

const components: Components = {
  a: Link,
  img: ({ src, alt }) =>
    typeof src === "string" && src ? (
      <a href={src} rel="nofollow ugc noopener noreferrer" target="_blank">
        [image: {alt || "link"}]
      </a>
    ) : null,
};

/** The typed block a `darc-block` element carries (remark-blocks.ts checked it). */
function TypedBlock({ block, env }: { block: string; env: WikiEnv }) {
  const b = JSON.parse(block) as Block;
  switch (b.kind) {
    case "darc-figure":
      return <Figure {...b.data} env={env} />;
    case "darc-card":
      return <LinkCard {...b.data} env={env} />;
    case "darc-video":
      return <Video {...b.data} />;
    case "darc-demo":
      return <Demo {...b.data} env={env} />;
  }
}

/** The components for wiki text: links between pages resolved through the env, and the typed blocks. */
function wikiComponents(env: WikiEnv): Components {
  return {
    ...components,
    a: ({ href, children }) => {
      const target = href ? wikiTarget(href) : null;
      if (!target) return <Link href={href}>{children}</Link>;
      const page = env.resolvePage(target.path);
      if (!page) return <span title="This page was not found">{children}</span>;
      const to = page.href + target.hash;
      return env.previewUrl ? (
        <LinkPreview href={to} previewUrl={env.previewUrl(target.path)}>
          {children}
        </LinkPreview>
      ) : (
        <a href={to}>{children}</a>
      );
    },
    // Custom elements from remark-blocks (not HTML tags, so not in Components' keys).
    ...({
      "darc-block": ({ block }: { block: string }) => <TypedBlock block={block} env={env} />,
      "darc-callout": ({ kind, children }: { kind: CalloutKind; children?: ReactNode }) => <Callout kind={kind}>{children}</Callout>,
    } as Components),
  };
}

/**
 * Rendered texts for reuse (memo.ts). The budget counts the characters of the keys (mostly the
 * texts). The elements take about 130 bytes of heap per character of text (measured on the
 * research entries, math included), so this holds about 25 MB: a few dozen long entries plus
 * the short texts around them. Every entry's text together is about 350,000 characters.
 */
export const RENDERED = createMemo<ReactElement>(200_000);

const PROSE =
  "prose prose-neutral max-w-none dark:prose-invert prose-a:text-research prose-headings:tracking-tight prose-code:font-mono prose-code:before:content-none prose-code:after:content-none";

/**
 * Markdown, rendered safely. `headingIds` anchors the document's sections as `<prefix>-<slug>`
 * so a table of contents can link to them (lib/toc: markdownToc with the same prefix lists
 * exactly those anchors). Without it nothing gets an id, so comments and the like can't add
 * anchors to the page. `env` marks the text as wiki text (see above).
 */
export function WikiMarkdown({ children, className, headingIds, env }: { children: string; className?: string; headingIds?: string; env?: WikiEnv }) {
  const render = () => {
    const remark: PluggableList = [remarkGfm, remarkMath];
    if (headingIds) remark.push([remarkSectionIds, { prefix: headingIds }]);
    if (env) remark.push(remarkWikiBlocks);
    return ReactMarkdown({ children, remarkPlugins: remark, rehypePlugins: [[rehypeKatex, KATEX]], urlTransform: env ? wikiUrl : safeUrl, components: env ? wikiComponents(env) : components });
  };
  const ek = envKey(env);
  return (
    <div className={`${PROSE} ${headingIds ? "[&_[id]]:scroll-mt-24" : ""} ${className ?? ""}`}>
      {ek === null ? render() : RENDERED.get(`w\u0000${headingIds ?? ""}\u0000${ek}\u0000${children}`, render)}
    </div>
  );
}

/** One-line Markdown (inline math, emphasis, code) without block wrappers or links, for summaries. */
export function InlineMarkdown({ children }: { children: string }) {
  return RENDERED.get(`i\u0000${children}`, () =>
    ReactMarkdown({ children, remarkPlugins: [remarkMath], rehypePlugins: [[rehypeKatex, KATEX]], urlTransform: safeUrl, disallowedElements: INLINE_DISALLOWED, unwrapDisallowed: true, components: INLINE_COMPONENTS }),
  );
}

const INLINE_DISALLOWED = ["a", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "blockquote", "pre", "img", "table", "hr"];
const INLINE_COMPONENTS: Components = { p: ({ children }) => <>{children}</> };
