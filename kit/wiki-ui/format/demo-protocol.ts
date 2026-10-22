// The messages between a page and its demo's frame (docs/wiki-maintainers.md §7). Kept apart from
// demo.ts, which holds the manifest's zod schema, so the client's DemoFrame doesn't ship zod.

/** The largest props message a page sends (JSON). */
export const DEMO_PROPS_MAX_BYTES = 4096;
/** What a page tells its demo (`{type, props}`), and what a demo may tell the page: that it is listening. */
export const DEMO_PROPS_MESSAGE = "darc-demo-props";
export const DEMO_READY_MESSAGE = "darc-demo-ready";

/** A prop's value, as a page sends it. */
export type DemoPropValue = string | number | boolean;
