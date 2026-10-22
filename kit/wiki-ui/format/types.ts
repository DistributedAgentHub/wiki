// The wiki's page types: the typed object a content file holds (docs/wiki-maintainers.md §1.4, §3.3).
// Pure data, shared by the site, the editor, the check run and the repo kit.

export const PAGE_TYPES = ["field", "entry", "problem", "claim"] as const;
export type PageType = (typeof PAGE_TYPES)[number];

export const TOPIC_KINDS = ["LIBRARY", "ALGORITHM", "THEORY", "HARDWARE", "FRONTIER"] as const;
export const TOPIC_STATUSES = ["EMERGING", "ACTIVE", "MATURE", "STALLED"] as const;
export const QUESTION_STATUSES = ["OPEN", "IN_PROGRESS", "PARTIAL", "RESOLVED"] as const;
export const LINK_KINDS = ["IMPLIES", "GENERALIZES", "BUILDS_ON", "RELATED"] as const;
export const VERIFY_ROUTES = ["LEAN", "GPU_BENCHMARK", "REPRODUCTION", "BOUNDS", "OBSERVATION", "REVIEW"] as const;
export const REFERENCE_KINDS = ["paper", "code", "dataset", "talk", "blog", "docs", "video", "article", "book"] as const;
export const CLAIM_KINDS = ["PROOF", "DISPROOF", "COUNTEREXAMPLE", "ALGORITHM", "BOUND", "MEASUREMENT", "COMPUTATION", "FORMALIZATION", "IMPLEMENTATION"] as const;
export const CLAIM_STATUSES = ["UNVERIFIED", "UNDER_REVIEW", "PARTIALLY_VERIFIED", "VERIFIED", "REFUTED", "RETRACTED"] as const;
export const CHECK_STATUSES = ["OPEN", "PASSED", "FAILED"] as const;
export const CHECK_METHODS = ["REPRODUCE", "FORMAL", "PROBE", "BOUNDS", "REVIEW", "CROSS_CHECK", "REFEREE"] as const;

export type Source = { title: string; url: string };
export type Reference = { title: string; url: string; kind: string };
/** An approved ProgressUpdate. `date` is YYYY-MM-DD. */
export type TimelineItem = { date: string; title: string; body: string; source?: string };
export type GlossaryItem = { term: string; meaning: string; link?: string };
export type ReadItem = { title: string; url: string; why?: string };
/** All empty when the page has no explainer. `plain` and `student` are body sections. */
export type Explainer = { oneLine: string; plain: string; student: string; flow: string[]; glossary: GlossaryItem[]; readFirst: ReadItem[] };

export type FieldPage = {
  type: "field";
  slug: string;
  name: string;
  parent: string | null;
  order: number;
  description: string;
};

export type EntryPage = {
  type: "entry";
  slug: string;
  title: string;
  field: string;
  kind: string;
  status: string;
  summary: string;
  reliedOn: string;
  body: string;
  dependsOn: string[];
  references: Reference[];
  timeline: TimelineItem[];
  explainer: Explainer;
  site: { published: boolean; aiReviewed: boolean };
};

export type Ratings = { difficulty: number | null; applicationValue: number | null; leverage: number | null };
export type WorkMix = { theory: number; engineering: number; compute: number; empirical: number };
export type ProblemLink = { to: string; kind: string; note: string };

export type ProblemPage = {
  type: "problem";
  slug: string;
  title: string;
  entry: string;
  status: string;
  origin: string | null;
  prize: string | null;
  body: string;
  stateOfArt: string;
  applications: string;
  resolutionCriteria: string;
  resolvedNote: string;
  ratings: Ratings;
  ratingRationale: string;
  workMix: WorkMix | null;
  profileRationale: string;
  verifyRoute: string | null;
  verifySpec: string;
  sources: Source[];
  links: ProblemLink[];
  timeline: TimelineItem[];
  explainer: Explainer;
  site: { aiReviewed: boolean; verifiedBy: string | null; expertSubmitted: boolean };
};

export type ClaimCheck = { title: string; method: string; note: string; sourceUrl: string };
export type ClaimCheckVerdict = { title: string; status: string; resolvedBy: string | null };

export type ClaimPage = {
  type: "claim";
  slug: string;
  title: string;
  problem: string;
  kind: string;
  claimedBy: string;
  /** YYYY-MM-DD */
  claimedAt: string | null;
  formal: boolean;
  summary: string;
  sources: Source[];
  checks: ClaimCheck[];
  site: { status: string; statusNote: string; decidedBy: string | null; checks: ClaimCheckVerdict[] };
};

export type Page = FieldPage | EntryPage | ProblemPage | ClaimPage;

/** A problem with a file, at a 1-based line and column. `path` is the file's repository path ("" when unknown). */
export type WikiError = { path: string; line: number; column: number; message: string };

/** Thrown by `parse` when a file can't be read as a page at all. */
export class WikiFormatError extends Error {
  constructor(readonly errors: WikiError[]) {
    super(errors.map((e) => `${e.path ? `${e.path}:` : ""}${e.line}:${e.column}: ${e.message}`).join("\n"));
    this.name = "WikiFormatError";
  }
}

export const emptyExplainer = (): Explainer => ({ oneLine: "", plain: "", student: "", flow: [], glossary: [], readFirst: [] });
