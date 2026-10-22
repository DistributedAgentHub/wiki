import { z } from "zod";
import {
  CHECK_METHODS,
  CHECK_STATUSES,
  CLAIM_KINDS,
  CLAIM_STATUSES,
  LINK_KINDS,
  QUESTION_STATUSES,
  REFERENCE_KINDS,
  TOPIC_KINDS,
  TOPIC_STATUSES,
  VERIFY_ROUTES,
} from "./types";

// Two layers of schemas (docs/wiki-maintainers.md §3.3):
// - file schemas: the frontmatter's shape as written (strict: unknown keys are errors). `parse` needs it.
// - content schemas: the same limits the services enforce on each value. `validate` checks them.
// The content limits copy the services' zod shapes (topicContentShape, problemDetailsShape, FIELD_SHAPES,
// the claim shapes), which can't be imported here (wiki-ui has no app imports); a test keeps them equal.
// Three limits are wider than the services', because the curated content (imported without the
// services) already goes past them and must stay valid: a timeline title may be a short name
// ("PPO", "LLL"; services: 5+), a problem's origin and a reference title may be up to 300 (services: 200).

// ─── File schemas (frontmatter as written) ──────────────────────────────────

export const SLUG = /^[a-z0-9][a-z0-9-]{0,99}$/;
const slug = z.string().regex(SLUG, "must be a slug: lowercase letters, digits and hyphens");
const str = z.string();
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "must be a date: YYYY-MM-DD");
const num = z.number();

const sourceFile = z.strictObject({ title: str, url: str });
const timelineFile = z.strictObject({ date, title: str, body: str.optional(), source: str.optional() });
const explainerFile = z.strictObject({
  oneLine: str.optional(),
  flow: z.array(str).optional(),
  glossary: z.array(z.strictObject({ term: str, meaning: str, link: str.optional() })).optional(),
  readFirst: z.array(z.strictObject({ title: str, url: str, why: str.optional() })).optional(),
});
const raw = (fields: readonly string[]) => z.strictObject(Object.fromEntries(fields.map((f) => [f, str.optional()])));

export const fieldFile = z.strictObject({
  type: z.literal("field"),
  slug,
  name: str,
  parent: slug.optional(),
  order: z.number().int().optional(),
  raw: raw(["description"]).optional(),
});

export const entryFile = z.strictObject({
  type: z.literal("entry"),
  slug,
  title: str,
  field: slug,
  kind: z.enum(TOPIC_KINDS),
  status: z.enum(TOPIC_STATUSES),
  summary: str.optional(),
  reliedOn: str.optional(),
  dependsOn: z.array(slug).optional(),
  references: z.array(z.strictObject({ title: str, url: str, kind: str })).optional(),
  timeline: z.array(timelineFile).optional(),
  explainer: explainerFile.optional(),
  raw: raw(["body", "plain", "student"]).optional(),
  site: z.strictObject({ published: z.boolean().optional(), aiReviewed: z.boolean().optional() }).optional(),
});

export const problemFile = z.strictObject({
  type: z.literal("problem"),
  slug,
  title: str,
  entry: slug,
  status: z.enum(QUESTION_STATUSES),
  origin: str.optional(),
  prize: str.optional(),
  ratings: z.strictObject({ difficulty: num.optional(), applicationValue: num.optional(), leverage: num.optional() }).optional(),
  workMix: z.strictObject({ theory: num, engineering: num, compute: num, empirical: num }).optional(),
  verification: z.strictObject({ route: z.enum(VERIFY_ROUTES) }).optional(),
  sources: z.array(sourceFile).optional(),
  links: z.array(z.strictObject({ to: slug, kind: z.enum(LINK_KINDS), note: str })).optional(),
  timeline: z.array(timelineFile).optional(),
  explainer: explainerFile.optional(),
  raw: raw(["body", "stateOfArt", "applications", "resolutionCriteria", "resolvedNote", "ratingRationale", "profileRationale", "verifySpec", "plain", "student"]).optional(),
  site: z.strictObject({ aiReviewed: z.boolean().optional(), verifiedBy: str.optional(), expertSubmitted: z.boolean().optional() }).optional(),
});

export const claimFile = z.strictObject({
  type: z.literal("claim"),
  slug,
  title: str,
  problem: slug,
  kind: z.enum(CLAIM_KINDS),
  claimedBy: str,
  claimedAt: date.optional(),
  formal: z.boolean().optional(),
  sources: z.array(sourceFile).optional(),
  checks: z.array(z.strictObject({ title: str, method: z.enum(CHECK_METHODS), note: str.optional(), sourceUrl: str.optional() })).optional(),
  raw: raw(["summary"]).optional(),
  site: z
    .strictObject({
      status: z.enum(CLAIM_STATUSES),
      statusNote: str.optional(),
      decidedBy: str.optional(),
      checks: z.array(z.strictObject({ title: str, status: z.enum(CHECK_STATUSES), resolvedBy: str.optional() })).optional(),
    })
    .optional(),
});

export const FILE_SCHEMAS = { field: fieldFile, entry: entryFile, problem: problemFile, claim: claimFile } as const;

// ─── Content schemas (the services' limits) ────────────────────────────────

/** http(s) only, as src/lib/urls.ts webUrl(). */
export const webUrl = () => z.url({ protocol: /^https?$/, error: "must be an http(s) link" }).max(500);
const optionalUrl = z.preprocess((v) => (v === "" || v == null ? undefined : v), webUrl().optional());
const blankToUndefined = (v: unknown) => (v === "" || v == null ? undefined : v);
const optionalText = (max: number) => z.preprocess(blankToUndefined, z.string().trim().max(max).optional());
const oneDecimal = (path: string) => (v: number | null | undefined, ctx: z.RefinementCtx) => {
  if (v != null && Math.round(v * 10) / 10 !== v) ctx.addIssue({ code: "custom", message: `${path}: at most one decimal` });
};
const rating = z.number().min(1).max(100).nullable().superRefine(oneDecimal("rating"));
const share = z.number().min(0).max(100).superRefine(oneDecimal("share"));

/** The explainer parts, as src/lib/explainers.ts FIELD_SHAPES. */
const explainerLink = z
  .string()
  .trim()
  .max(500)
  .refine((s) => /^https?:\/\//.test(s) || /^\/research\/[a-z0-9-]+/.test(s), "a link must be a full URL or a /research/<entry> path");
export const EXPLAINER_SHAPES = {
  oneLine: z.string().trim().min(5).max(200),
  plain: z.string().trim().min(40, "write at least a few sentences").max(10_000),
  student: z.string().trim().min(40, "write at least a few sentences").max(15_000),
  flow: z.array(z.string().trim().min(1).max(80)).min(2).max(8),
  glossary: z.array(z.object({ term: z.string().trim().min(1).max(80), meaning: z.string().trim().min(3).max(300), link: explainerLink.optional() })).max(40),
  readFirst: z.array(z.object({ title: z.string().trim().min(2).max(300), url: explainerLink, why: z.string().trim().max(300).optional() })).max(12),
} as const;

/** Each part is checked only when it is set: an explainer may be partly written, or absent. */
const explainer = z.object({
  oneLine: z.union([z.literal(""), EXPLAINER_SHAPES.oneLine]),
  plain: z.union([z.literal(""), EXPLAINER_SHAPES.plain]),
  student: z.union([z.literal(""), EXPLAINER_SHAPES.student]),
  flow: z.union([z.array(z.never()).length(0), EXPLAINER_SHAPES.flow]),
  glossary: EXPLAINER_SHAPES.glossary,
  readFirst: EXPLAINER_SHAPES.readFirst,
});

/** As src/lib/services.ts topicContentShape (without the revision message). */
export const TOPIC_SHAPE = {
  title: z.string().trim().min(3).max(120),
  summary: z.string().trim().min(10).max(300),
  body: z.string().trim().min(50, "write at least a short explainer (50+ characters)").max(100_000),
  reliedOn: z.string().trim().min(10, "explain what depends on this").max(1000),
  kind: z.enum(TOPIC_KINDS),
  status: z.enum(TOPIC_STATUSES),
};

/** As src/lib/services.ts updateShape (title from 2, not 5): a timeline item is an approved progress update. */
const timeline = z.array(
  z.object({ date: z.string(), title: z.string().trim().min(2).max(200), body: z.string().trim().min(20).max(20_000), source: optionalUrl }),
);

export const fieldContent = z.object({
  name: z.string().trim().min(2).max(80),
  description: z.string().trim().max(2000),
  order: z.number().int().min(0),
});

export const entryContent = z.object({
  ...TOPIC_SHAPE,
  references: z.array(z.object({ title: z.string().trim().min(2).max(300), url: webUrl(), kind: z.enum(REFERENCE_KINDS) })),
  timeline,
  explainer,
});

/** As src/lib/services.ts questionShape and problemDetailsShape. */
export const PROBLEM_SHAPE = {
  title: z.string().trim().min(8).max(200),
  body: z.string().trim().min(10).max(20_000),
  origin: optionalText(300),
  prize: optionalText(200),
  stateOfArt: optionalText(20_000),
  applications: optionalText(20_000),
  resolutionCriteria: optionalText(5_000),
  ratingRationale: optionalText(5_000),
  profileRationale: optionalText(5_000),
  verifySpec: optionalText(5_000),
  sources: z.array(z.object({ title: z.string().trim().min(1).max(300), url: webUrl() })).max(30),
};

/** As src/lib/services.ts linkShape. */
const link = z.object({ to: z.string().min(1), kind: z.enum(LINK_KINDS), note: z.string().trim().min(10, "say why they are connected").max(1000) });

export const problemContent = z.object({
  ...PROBLEM_SHAPE,
  resolvedNote: optionalText(5_000),
  ratings: z.object({ difficulty: rating, applicationValue: rating, leverage: rating }),
  workMix: z
    .object({ theory: share, engineering: share, compute: share, empirical: share })
    .nullable()
    .superRefine((m, ctx) => {
      if (!m) return;
      const sum = m.theory + m.engineering + m.compute + m.empirical;
      if (Math.abs(sum - 100) > 0.5) ctx.addIssue({ code: "custom", message: `Work mix: shares must add up to 100 (got ${Math.round(sum * 10) / 10}).` });
    }),
  links: z.array(link),
  timeline,
  explainer,
});

/** As src/lib/claims.ts claimShape and checkShape. */
export const CLAIM_SHAPE = {
  title: z.string().trim().min(8).max(160),
  claimedBy: z.string().trim().min(2).max(300),
  summary: z.string().trim().min(40, "state exactly what is claimed (40+ characters)").max(20_000),
  sources: z.array(z.object({ title: z.string().trim().min(2).max(300), url: webUrl() })).min(1, "cite the claim's source").max(20),
};
export const CHECK_SHAPE = {
  title: z.string().trim().min(8).max(200),
  method: z.enum(CHECK_METHODS),
  note: z.string().trim().max(5000),
};

export const claimContent = z.object({
  ...CLAIM_SHAPE,
  checks: z.array(z.object({ ...CHECK_SHAPE, sourceUrl: optionalUrl })).max(20),
});

export const CONTENT_SCHEMAS = { field: fieldContent, entry: entryContent, problem: problemContent, claim: claimContent } as const;

// ─── Typed blocks (fenced darc-* YAML) ─────────────────────────────────────

export const BLOCK_MAX_BYTES = 4096;
const media = z.string().regex(/^media\/[0-9a-f]{64}\.(png|jpg|webp|gif)$/, "must be media/<sha256>.<png|jpg|webp|gif>");

export const BLOCK_SCHEMAS = {
  "darc-figure": z.strictObject({
    src: media,
    alt: z.string().trim().min(1, "alt text is required").max(300),
    caption: z.string().max(1000).optional(),
    width: z.enum(["narrow", "wide", "full"]).optional(),
  }),
  "darc-card": z.strictObject({
    href: z.string().min(1).max(500),
    title: z.string().max(300).optional(),
    description: z.string().max(1000).optional(),
    site: z.string().max(200).optional(),
  }),
  "darc-video": z.strictObject({
    provider: z.enum(["youtube", "vimeo"]),
    id: z.string().regex(/^[A-Za-z0-9_-]{1,64}$/, "must be the video's id"),
    title: z.string().max(300).optional(),
    start: z.number().int().min(0).optional(),
  }),
  "darc-demo": z.strictObject({
    demo: z.string().regex(/^[a-z0-9][a-z0-9-]{0,63}$/, "must be a demo folder name"),
    props: z.record(z.string(), z.unknown()).optional(),
    height: z.number().int().min(100).max(2000).optional(),
    caption: z.string().max(1000).optional(),
  }),
} as const;
