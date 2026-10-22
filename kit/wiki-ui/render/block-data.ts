import { parse as parseYaml } from "yaml";
import type { z } from "zod";
import { BLOCK_MAX_BYTES, BLOCK_SCHEMAS } from "../format/schema";

// The typed `darc-*` blocks as data (docs/wiki-maintainers.md §3.4): the fenced YAML read with
// the core schema and checked against its zod schema. Anything that doesn't pass (an unknown
// type, bad YAML, an oversized block, an unknown key, a value the renderer won't load) is null,
// and the renderer shows the block as the plain code block it is in the file.

export type BlockKind = keyof typeof BLOCK_SCHEMAS;
export type FigureData = z.infer<(typeof BLOCK_SCHEMAS)["darc-figure"]>;
export type CardData = z.infer<(typeof BLOCK_SCHEMAS)["darc-card"]>;
export type VideoData = z.infer<(typeof BLOCK_SCHEMAS)["darc-video"]>;
export type DemoData = z.infer<(typeof BLOCK_SCHEMAS)["darc-demo"]>;

export type Block =
  | { kind: "darc-figure"; data: FigureData }
  | { kind: "darc-card"; data: CardData }
  | { kind: "darc-video"; data: VideoData }
  | { kind: "darc-demo"; data: DemoData };

const isKind = (lang: string): lang is BlockKind => Object.hasOwn(BLOCK_SCHEMAS, lang);

/** The typed block a fenced code block holds, or null when it isn't a valid one. */
export function readBlock(lang: string | null | undefined, value: string): Block | null {
  if (!lang || !isKind(lang)) return null;
  if (new TextEncoder().encode(value).length > BLOCK_MAX_BYTES) return null;
  let raw: unknown;
  try {
    raw = parseYaml(value, { schema: "core", uniqueKeys: true });
  } catch {
    return null;
  }
  const checked = BLOCK_SCHEMAS[lang].safeParse(raw);
  return checked.success ? ({ kind: lang, data: checked.data } as Block) : null;
}
