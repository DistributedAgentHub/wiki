import { normalizeMarkdown } from "./markdown";
import { SECTIONS } from "./layout";
import { parse } from "./parse";
import { serialize } from "./serialize";
import type { EntryPage, Page, ProblemPage } from "./types";

/** The page with every Markdown text field normalized and `dependsOn` sorted. */
export function normalizePage<P extends Page>(page: P): P {
  const out = structuredClone(page);
  for (const { id } of SECTIONS[page.type]) {
    if (id === "plain" || id === "student") {
      const e = (out as EntryPage | ProblemPage).explainer;
      e[id] = e[id] && normalizeMarkdown(e[id]);
    } else {
      const o = out as unknown as Record<string, string>;
      o[id] = o[id] && normalizeMarkdown(o[id]);
    }
  }
  if (out.type === "entry") out.dependsOn = [...out.dependsOn].sort();
  return out;
}

/** The canonical form of a file. A file is valid only if `fmt(file) === file`. Throws WikiFormatError. */
export function fmt(file: string): string {
  return serialize(normalizePage(parse(file)));
}
