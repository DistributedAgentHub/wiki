import type { Blockquote, Root, RootContent, Text } from "mdast";
import { readBlock, type Block } from "./block-data";
import { CALLOUT_KINDS, type CalloutKind } from "./blocks";
import { wikiTarget } from "./env";
import { validVideoId } from "./video-url";

// Turns a wiki text's typed blocks into elements the renderer maps to block components
// (docs/wiki-maintainers.md §3.4). Only top-level blocks are typed blocks. A darc-* block that
// isn't valid stays the code block it is in the file, and a quote without an alert marker
// stays a quote, so text written before blocks existed renders exactly as it did.

/** Whether the renderer will show a block (beyond its schema: a card's link, a video's id). */
function renderable(b: Block): boolean {
  if (b.kind === "darc-video") return validVideoId(b.data.provider, b.data.id);
  if (b.kind === "darc-card") {
    if (wikiTarget(b.data.href)) return true;
    return /^https:\/\/[^\s/?#]+\.[^\s]*$/.test(b.data.href) && URL.canParse(b.data.href);
  }
  return true;
}

const ALERT = new RegExp(`^\\[!(${CALLOUT_KINDS.join("|")})\\][ \\t]*(?:\\n|$)`);

/** The alert kind of a quote (`> [!NOTE]` on its first line), stripping the marker; or null. */
function alertOf(q: Blockquote): CalloutKind | null {
  const p = q.children[0];
  if (p?.type !== "paragraph") return null;
  const t = p.children[0];
  const m = t?.type === "text" ? ALERT.exec(t.value) : null;
  if (!m) return null;
  const text = t as Text;
  text.value = text.value.slice(m[0].length);
  if (!text.value) p.children.shift();
  // A marker alone in its paragraph (the body starts a new one) leaves nothing to show.
  if (!p.children.length) q.children.shift();
  return m[1] as CalloutKind;
}

function typed(node: RootContent): RootContent {
  if (node.type === "code") {
    const b = readBlock(node.lang, node.value);
    if (!b || !renderable(b)) return node;
    return { type: "darcBlock", data: { hName: "darc-block", hProperties: { block: JSON.stringify(b) } } } as unknown as RootContent;
  }
  if (node.type === "blockquote") {
    const kind = alertOf(node);
    if (kind) node.data = { hName: "darc-callout", hProperties: { kind } };
  }
  return node;
}

/** Remark plugin: `remarkWikiBlocks` (no options). */
export function remarkWikiBlocks() {
  return (tree: Root) => {
    tree.children = tree.children.map(typed);
  };
}
