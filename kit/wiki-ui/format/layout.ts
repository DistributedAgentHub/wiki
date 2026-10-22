import type { z } from "zod";
import type { claimFile, entryFile, fieldFile, problemFile } from "./schema";
import type { ClaimPage, EntryPage, Explainer, FieldPage, Page, PageType, ProblemPage } from "./types";

// How a page maps onto a file: the frontmatter object (keys in canonical order, empty
// values left out) and the long text fields, one per body section (§3.2, §3.3).

/** A page split into its frontmatter (without `raw:`) and its text fields by id. */
export type Parts = { fm: Record<string, unknown>; fields: Record<string, string> };

export type Section = { id: string; heading: string | null };

const main = (id: string): Section => ({ id, heading: null });
const EXPLAINER_SECTIONS: Section[] = [
  { id: "plain", heading: "Plain explanation" },
  { id: "student", heading: "Student explanation" },
];

/** Body sections per type, in file order. The first is the main text, with no heading. */
export const SECTIONS: Record<PageType, Section[]> = {
  field: [main("description")],
  entry: [main("body"), ...EXPLAINER_SECTIONS],
  problem: [
    main("body"),
    { id: "stateOfArt", heading: "State of the art" },
    { id: "applications", heading: "Applications" },
    { id: "resolutionCriteria", heading: "Resolution criteria" },
    { id: "resolvedNote", heading: "Resolution" },
    { id: "ratingRationale", heading: "Rating rationale" },
    { id: "profileRationale", heading: "Work mix rationale" },
    { id: "verifySpec", heading: "Verification" },
    ...EXPLAINER_SECTIONS,
  ],
  claim: [main("summary")],
};

/** Top-level frontmatter keys per type, in canonical order. */
export const KEYS: Record<PageType, string[]> = {
  field: ["type", "slug", "name", "parent", "order", "raw"],
  entry: ["type", "slug", "title", "field", "kind", "status", "summary", "reliedOn", "dependsOn", "references", "timeline", "explainer", "raw", "site"],
  problem: ["type", "slug", "title", "entry", "status", "origin", "prize", "ratings", "workMix", "verification", "sources", "links", "timeline", "explainer", "raw", "site"],
  claim: ["type", "slug", "title", "problem", "kind", "claimedBy", "claimedAt", "formal", "sources", "checks", "raw", "site"],
};
export const EXPLAINER_KEYS = ["oneLine", "flow", "glossary", "readFirst"] as const;

const isExplainerField = (id: string): id is "plain" | "student" => id === "plain" || id === "student";

export function getField(page: Page, id: string): string {
  if (isExplainerField(id)) return (page as EntryPage | ProblemPage).explainer[id];
  return (page as unknown as Record<string, string>)[id];
}

/** Empty values are left out of the file: "", null, undefined, false, [] and {}. */
function isEmpty(v: unknown) {
  if (v === "" || v == null || v === false) return true;
  if (Array.isArray(v)) return v.length === 0;
  return typeof v === "object" && Object.keys(v).length === 0;
}

// Keys a page always has: written even when empty, so the file still names them.
const REQUIRED = new Set(["type", "slug", "title", "name", "field", "entry", "problem", "kind", "status", "claimedBy", "date", "method"]);

/** An object with only the non-empty values (and the required keys), in the order given. */
function compact(entries: [string, unknown][]): Record<string, unknown> {
  return Object.fromEntries(entries.filter(([k, v]) => REQUIRED.has(k) || !isEmpty(v)));
}

/** Optional keys of list items: written when present (even if empty), so stored JSON round-trips. */
function present<T extends object>(item: T): T {
  return Object.fromEntries(Object.entries(item).filter(([, v]) => v !== undefined)) as T;
}

function explainerFm(e: Explainer) {
  return compact([
    ["oneLine", e.oneLine],
    ["flow", e.flow],
    ["glossary", e.glossary.map(present)],
    ["readFirst", e.readFirst.map(present)],
  ]);
}

const timelineFm = (t: EntryPage["timeline"]) => t.map((i) => compact([["date", i.date], ["title", i.title], ["body", i.body], ["source", i.source]]));

export function toParts(page: Page): Parts {
  const fields = Object.fromEntries(SECTIONS[page.type].map((s) => [s.id, getField(page, s.id)]));
  switch (page.type) {
    case "field":
      return { fm: compact([["type", "field"], ["slug", page.slug], ["name", page.name], ["parent", page.parent], ["order", page.order || null]]), fields };
    case "entry":
      return {
        fm: compact([
          ["type", "entry"],
          ["slug", page.slug],
          ["title", page.title],
          ["field", page.field],
          ["kind", page.kind],
          ["status", page.status],
          ["summary", page.summary],
          ["reliedOn", page.reliedOn],
          ["dependsOn", page.dependsOn],
          ["references", page.references.map(present)],
          ["timeline", timelineFm(page.timeline)],
          ["explainer", explainerFm(page.explainer)],
          ["site", compact([["published", page.site.published], ["aiReviewed", page.site.aiReviewed]])],
        ]),
        fields,
      };
    case "problem": {
      const r = page.ratings;
      return {
        fm: compact([
          ["type", "problem"],
          ["slug", page.slug],
          ["title", page.title],
          ["entry", page.entry],
          ["status", page.status],
          ["origin", page.origin],
          ["prize", page.prize],
          ["ratings", compact([["difficulty", r.difficulty], ["applicationValue", r.applicationValue], ["leverage", r.leverage]])],
          ["workMix", page.workMix && { ...page.workMix }],
          ["verification", page.verifyRoute && { route: page.verifyRoute }],
          ["sources", page.sources.map(present)],
          ["links", page.links.map(present)],
          ["timeline", timelineFm(page.timeline)],
          ["explainer", explainerFm(page.explainer)],
          ["site", compact([["aiReviewed", page.site.aiReviewed], ["verifiedBy", page.site.verifiedBy], ["expertSubmitted", page.site.expertSubmitted]])],
        ]),
        fields,
      };
    }
    case "claim":
      return {
        fm: compact([
          ["type", "claim"],
          ["slug", page.slug],
          ["title", page.title],
          ["problem", page.problem],
          ["kind", page.kind],
          ["claimedBy", page.claimedBy],
          ["claimedAt", page.claimedAt],
          ["formal", page.formal],
          ["sources", page.sources.map(present)],
          ["checks", page.checks.map((c) => compact([["title", c.title], ["method", c.method], ["note", c.note], ["sourceUrl", c.sourceUrl]]))],
          [
            "site",
            compact([
              ["status", page.site.status],
              ["statusNote", page.site.statusNote],
              ["decidedBy", page.site.decidedBy],
              ["checks", page.site.checks.map((c) => compact([["title", c.title], ["status", c.status], ["resolvedBy", c.resolvedBy]]))],
            ]),
          ],
        ]),
        fields,
      };
  }
}

type ExplainerFile = NonNullable<z.infer<typeof entryFile>["explainer"]>;
type TimelineFile = NonNullable<z.infer<typeof entryFile>["timeline"]>;

function explainerOf(e: ExplainerFile | undefined, f: Record<string, string>): Explainer {
  return {
    oneLine: e?.oneLine ?? "",
    flow: e?.flow ?? [],
    glossary: e?.glossary ?? [],
    readFirst: e?.readFirst ?? [],
    plain: f.plain ?? "",
    student: f.student ?? "",
  };
}

const timelineOf = (t: TimelineFile | undefined) => (t ?? []).map((i) => present({ date: i.date, title: i.title, body: i.body ?? "", source: i.source }));

/** The page from a frontmatter that passed its file schema, and its text fields. */
export function fromParts(fm: Record<string, unknown>, f: Record<string, string>): Page {
  const text = (id: string) => f[id] ?? "";
  switch (fm.type as PageType) {
    case "field": {
      const d = fm as z.infer<typeof fieldFile>;
      return { type: "field", slug: d.slug, name: d.name, parent: d.parent ?? null, order: d.order ?? 0, description: text("description") } satisfies FieldPage;
    }
    case "entry": {
      const d = fm as z.infer<typeof entryFile>;
      return {
        type: "entry",
        slug: d.slug,
        title: d.title,
        field: d.field,
        kind: d.kind,
        status: d.status,
        summary: d.summary ?? "",
        reliedOn: d.reliedOn ?? "",
        body: text("body"),
        dependsOn: d.dependsOn ?? [],
        references: d.references ?? [],
        timeline: timelineOf(d.timeline),
        explainer: explainerOf(d.explainer, f),
        site: { published: d.site?.published ?? false, aiReviewed: d.site?.aiReviewed ?? false },
      } satisfies EntryPage;
    }
    case "problem": {
      const d = fm as z.infer<typeof problemFile>;
      return {
        type: "problem",
        slug: d.slug,
        title: d.title,
        entry: d.entry,
        status: d.status,
        origin: d.origin ?? null,
        prize: d.prize ?? null,
        body: text("body"),
        stateOfArt: text("stateOfArt"),
        applications: text("applications"),
        resolutionCriteria: text("resolutionCriteria"),
        resolvedNote: text("resolvedNote"),
        ratings: { difficulty: d.ratings?.difficulty ?? null, applicationValue: d.ratings?.applicationValue ?? null, leverage: d.ratings?.leverage ?? null },
        ratingRationale: text("ratingRationale"),
        workMix: d.workMix ?? null,
        profileRationale: text("profileRationale"),
        verifyRoute: d.verification?.route ?? null,
        verifySpec: text("verifySpec"),
        sources: d.sources ?? [],
        links: d.links ?? [],
        timeline: timelineOf(d.timeline),
        explainer: explainerOf(d.explainer, f),
        site: { aiReviewed: d.site?.aiReviewed ?? false, verifiedBy: d.site?.verifiedBy ?? null, expertSubmitted: d.site?.expertSubmitted ?? false },
      } satisfies ProblemPage;
    }
    case "claim": {
      const d = fm as z.infer<typeof claimFile>;
      return {
        type: "claim",
        slug: d.slug,
        title: d.title,
        problem: d.problem,
        kind: d.kind,
        claimedBy: d.claimedBy,
        claimedAt: d.claimedAt ?? null,
        formal: d.formal ?? false,
        summary: text("summary"),
        sources: d.sources ?? [],
        checks: (d.checks ?? []).map((c) => ({ title: c.title, method: c.method, note: c.note ?? "", sourceUrl: c.sourceUrl ?? "" })),
        site: {
          status: d.site?.status ?? "UNVERIFIED",
          statusNote: d.site?.statusNote ?? "",
          decidedBy: d.site?.decidedBy ?? null,
          checks: (d.site?.checks ?? []).map((c) => ({ title: c.title, status: c.status, resolvedBy: c.resolvedBy ?? null })),
        },
      } satisfies ClaimPage;
    }
  }
}
