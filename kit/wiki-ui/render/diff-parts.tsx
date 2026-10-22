import type { ReactNode } from "react";
import { diffWords, type DiffLine } from "../editor-model/diff";
import { WikiMarkdown } from "./markdown";
import type { WikiEnv } from "./env";

// The pieces "What changed" is drawn with, in the editor's publish dialog and on a page's history
// (docs/briefings/design-audit-workspace.md M3): a run of unchanged paragraphs folded into one
// expandable row, and a changed paragraph shown word by word when most of it stayed the same.
// No hooks: the history page renders them on the server (the fold is a <details>).

/** "… 12 unchanged paragraphs …": the paragraphs on opening, in both columns when side by side. */
export function FoldedRun({ texts, env, side = false }: { texts: string[]; env: WikiEnv; side?: boolean }) {
  const n = texts.length;
  const md = (t: string, k: number) => (
    <div key={k} className="opacity-60">
      <WikiMarkdown env={env}>{t}</WikiMarkdown>
    </div>
  );
  return (
    <details className={`group text-xs text-muted ${side ? "col-span-2" : ""}`} data-fold={n}>
      <summary className="cursor-pointer select-none py-0.5 hover:text-foreground">
        … {n} unchanged {n === 1 ? "paragraph" : "paragraphs"} … <span className="underline group-open:hidden">show</span>
        <span className="hidden underline group-open:inline">hide</span>
      </summary>
      <div className={`mt-2 text-sm ${side ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}`}>{side ? texts.flatMap((t, i) => [md(t, 2 * i), md(t, 2 * i + 1)]) : texts.map(md)}</div>
    </details>
  );
}

const WORD = {
  del: "bg-red-500/15 text-red-800 line-through decoration-red-600/70 dark:text-red-300",
  add: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300",
} as const;

/** A changed paragraph's words: removed ones struck through in red, added ones in green; `show` keeps one side only. */
export function WordDiff({ parts, show = "both" }: { parts: DiffLine[]; show?: "both" | "before" | "after" }) {
  return (
    <p className="whitespace-pre-wrap" data-word-diff={show}>
      {parts.map((p, i) => {
        if (p.kind === "same") return <span key={i}>{p.text}</span>;
        if ((p.kind === "del" && show === "after") || (p.kind === "add" && show === "before")) return null;
        const Tag = p.kind === "del" ? "del" : "ins";
        return (
          <Tag key={i} className={`no-underline ${WORD[p.kind]}`}>
            {p.text}
          </Tag>
        );
      })}
    </p>
  );
}

/** Markdown that looks different rendered (math, emphasis, links, tables, headings…). */
const markup = (t: string) => /[$*_`[\]|#<>\\]/.test(t);

/** A changed paragraph's word diff, without a heading's leading "## " (the rendered version shows it is a heading). */
const HEADING = /^#{1,6}\s+/;
const words = (before: string, after: string) => diffWords(before.replace(HEADING, ""), after.replace(HEADING, ""));

/**
 * One changed paragraph. Mostly the same: its words, changes highlighted, then (if it has
 * formatting or math) how it now reads. Otherwise: the old one struck through, then the new one.
 */
export function ChangedBlock({ before, after, env, label }: { before: string; after: string; env: WikiEnv; label?: ReactNode }) {
  const { parts, similar } = words(before, after);
  return (
    <div className="space-y-1 border-l-4 border-amber-500 bg-amber-500/5 pl-3" data-change="change">
      {label}
      {similar ? (
        <>
          <WordDiff parts={parts} />
          {markup(after) && (
            <div className="text-muted">
              <span className="text-xs">Now reads:</span>
              <WikiMarkdown env={env}>{after}</WikiMarkdown>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="line-through opacity-60">
            <WikiMarkdown env={env}>{before}</WikiMarkdown>
          </div>
          <WikiMarkdown env={env}>{after}</WikiMarkdown>
        </>
      )}
    </div>
  );
}

/** One side of a changed paragraph, side by side: word-highlighted when mostly the same, else rendered. */
export function ChangedSide({ before, after, side, env }: { before: string; after: string; side: "before" | "after"; env: WikiEnv }) {
  const { parts, similar } = words(before, after);
  const tone = side === "before" ? "border-red-500 bg-red-500/5" : "border-emerald-500 bg-emerald-500/5";
  return (
    <div className={`border-l-4 pl-3 ${tone}`} data-change={side === "before" ? "del" : "add"}>
      {similar ? <WordDiff parts={parts} show={side} /> : <WikiMarkdown env={env}>{side === "before" ? before : after}</WikiMarkdown>}
    </div>
  );
}
