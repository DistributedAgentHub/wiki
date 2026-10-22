import type { Options as KatexOptions } from "rehype-katex";

// KaTeX runs untrusted (no \href, \url, \includegraphics) with limits on macro expansion and
// size, so a crafted formula can't stall the server or cover the page.
export const KATEX: KatexOptions = { trust: false, strict: "ignore", maxExpand: 500, maxSize: 20 };
