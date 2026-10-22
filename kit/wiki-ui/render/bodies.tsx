import type { ReactNode } from "react";
import { parseMarkdown } from "../format/markdown";
import { SECTIONS } from "../format/layout";
import type { ClaimPage, EntryPage, Explainer, FieldPage, Page, ProblemPage, Source, TimelineItem } from "../format/types";
import type { WikiEnv } from "./env";
import { InlineMarkdown, WikiMarkdown } from "./markdown";

// A whole wiki page rendered from its typed object (docs/wiki-maintainers.md §4): what the
// editor's preview, the repository's preview kit and the check run show. The site's pages lay
// the same texts out among their live parts (votes, discussion, clusters) and render each text
// with the same WikiMarkdown and env, so a text looks the same in all of them.

const EXTERNAL = { rel: "nofollow ugc noopener noreferrer", target: "_blank" } as const;
const isWeb = (url: string) => /^https?:\/\//i.test(url.trim());

/** A link to an outside URL, or its text alone when the URL isn't http(s). */
function OutLink({ url, children }: { url: string; children: ReactNode }) {
  return isWeb(url) ? (
    <a href={url.trim()} {...EXTERNAL}>
      {children}
    </a>
  ) : (
    <>{children}</>
  );
}

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      {children}
    </section>
  );
}

/**
 * A field's description. A one-paragraph description without links (every field's today)
 * renders inline in the page's own paragraph, as the field page always showed it; anything
 * more as wiki text.
 */
export function FieldDescription({ text, env, className }: { text: string; env: WikiEnv; className?: string }) {
  const [first, ...more] = parseMarkdown(text).children;
  const inline = !first || (!more.length && first.type === "paragraph" && !first.children.some((c) => c.type === "link" || c.type === "linkReference"));
  if (inline) {
    return (
      <p className={className}>
        <InlineMarkdown>{text}</InlineMarkdown>
      </p>
    );
  }
  return (
    <WikiMarkdown env={env} className={className}>
      {text}
    </WikiMarkdown>
  );
}

function Sources({ heading, items }: { heading: string; items: Source[] }) {
  if (!items.length) return null;
  return (
    <Section heading={heading}>
      <ul className="list-disc space-y-1 pl-5 text-sm">
        {items.map((s, i) => (
          <li key={i}>
            <OutLink url={s.url}>{s.title}</OutLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Timeline({ items, env }: { items: TimelineItem[]; env: WikiEnv }) {
  if (!items.length) return null;
  return (
    <Section heading="Progress">
      <ol className="space-y-4">
        {[...items].reverse().map((u, i) => (
          <li key={i} className="border-l-2 border-border pl-4">
            <div className="font-mono text-xs text-muted">{u.date}</div>
            <div className="font-medium">
              <InlineMarkdown>{u.title}</InlineMarkdown>
            </div>
            {u.body && (
              <WikiMarkdown env={env} className="prose-sm mt-1">
                {u.body}
              </WikiMarkdown>
            )}
            {u.source && (
              <div className="text-xs">
                <OutLink url={u.source}>Source</OutLink>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** The explainer's lists: the idea in steps, the words on the page, and what to read first. */
function ExplainerLists({ e }: { e: Explainer }) {
  return (
    <>
      {e.flow.length > 1 && (
        <Section heading="The idea in steps">
          <ol className="list-decimal space-y-1 pl-5 text-sm">
            {e.flow.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </Section>
      )}
      {e.glossary.length > 0 && (
        <Section heading="Words on this page">
          <dl className="space-y-2 text-sm">
            {e.glossary.map((g, i) => (
              <div key={i}>
                <dt className="font-medium">{g.link ? <OutLink url={g.link}>{g.term}</OutLink> : g.term}</dt>
                <dd className="text-muted">{g.meaning}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}
      {e.readFirst.length > 0 && (
        <Section heading="New to this? Read first">
          <ul className="space-y-2 text-sm">
            {e.readFirst.map((r, i) => (
              <li key={i}>
                <OutLink url={r.url}>{r.title}</OutLink>
                {r.why && <div className="text-xs text-muted">{r.why}</div>}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

/** The page's body sections after the main text, each under its file heading. */
function TextSections({ page, env }: { page: EntryPage | ProblemPage; env: WikiEnv }) {
  return (
    <>
      {SECTIONS[page.type].slice(1).map(({ id, heading }) => {
        const text = id === "plain" || id === "student" ? page.explainer[id] : (page as unknown as Record<string, string>)[id];
        return text ? (
          <Section key={id} heading={heading!}>
            <WikiMarkdown env={env}>{text}</WikiMarkdown>
          </Section>
        ) : null;
      })}
    </>
  );
}

function Header({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <header className="space-y-2">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {children}
    </header>
  );
}

export function FieldBody({ page, env }: { page: FieldPage; env: WikiEnv }) {
  return (
    <article className="space-y-6" data-wiki="field">
      <Header eyebrow="Field" title={page.name} />
      {page.description && <FieldDescription text={page.description} env={env} className="text-muted" />}
    </article>
  );
}

export function EntryBody({ page, env }: { page: EntryPage; env: WikiEnv }) {
  return (
    <article className="space-y-8" data-wiki="entry">
      <Header eyebrow="Research entry" title={page.title}>
        {page.summary && (
          <p className="text-lg text-muted">
            <InlineMarkdown>{page.summary}</InlineMarkdown>
          </p>
        )}
      </Header>
      {page.explainer.oneLine && <p className="text-lg leading-snug">{page.explainer.oneLine}</p>}
      {page.body && <WikiMarkdown env={env}>{page.body}</WikiMarkdown>}
      <TextSections page={page} env={env} />
      {page.reliedOn && (
        <Section heading="What relies on it">
          <p>
            <InlineMarkdown>{page.reliedOn}</InlineMarkdown>
          </p>
        </Section>
      )}
      <ExplainerLists e={page.explainer} />
      <Sources heading="References" items={page.references} />
      <Timeline items={page.timeline} env={env} />
    </article>
  );
}

export function ProblemBody({ page, env }: { page: ProblemPage; env: WikiEnv }) {
  return (
    <article className="space-y-8" data-wiki="problem">
      <Header eyebrow="Open problem" title={page.title}>
        {(page.origin || page.prize) && (
          <p className="text-sm text-muted">{[page.origin, page.prize && `Prize: ${page.prize}`].filter(Boolean).join(" · ")}</p>
        )}
      </Header>
      {page.explainer.oneLine && <p className="text-lg leading-snug">{page.explainer.oneLine}</p>}
      {page.body && <WikiMarkdown env={env}>{page.body}</WikiMarkdown>}
      <TextSections page={page} env={env} />
      <ExplainerLists e={page.explainer} />
      <Sources heading="Sources" items={page.sources} />
      <Timeline items={page.timeline} env={env} />
    </article>
  );
}

export function ClaimBody({ page, env }: { page: ClaimPage; env: WikiEnv }) {
  return (
    <article className="space-y-8" data-wiki="claim">
      <Header eyebrow="Claim" title={page.title}>
        <p className="text-sm text-muted">Claimed by {page.claimedBy}{page.claimedAt ? `, ${page.claimedAt}` : ""}</p>
      </Header>
      {page.summary && <WikiMarkdown env={env}>{page.summary}</WikiMarkdown>}
      {page.checks.length > 0 && (
        <Section heading="Checks">
          <ol className="space-y-3">
            {page.checks.map((c, i) => (
              <li key={i} className="border border-border p-3">
                <div className="font-medium">{c.title}</div>
                <div className="font-mono text-xs text-muted">{c.method}</div>
                {c.note && (
                  <WikiMarkdown env={env} className="prose-sm mt-1 text-muted">
                    {c.note}
                  </WikiMarkdown>
                )}
                {c.sourceUrl && (
                  <div className="text-xs">
                    <OutLink url={c.sourceUrl}>Source</OutLink>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}
      <Sources heading="Sources" items={page.sources} />
    </article>
  );
}

/** Any wiki page, by its type. */
export function PageBody({ page, env }: { page: Page; env: WikiEnv }) {
  switch (page.type) {
    case "field":
      return <FieldBody page={page} env={env} />;
    case "entry":
      return <EntryBody page={page} env={env} />;
    case "problem":
      return <ProblemBody page={page} env={env} />;
    case "claim":
      return <ClaimBody page={page} env={env} />;
  }
}
