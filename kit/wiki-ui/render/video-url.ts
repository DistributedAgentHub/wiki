// Video embeds (docs/wiki-maintainers.md §6.3): YouTube through youtube-nocookie, Vimeo with
// dnt=1. Ids are checked with strict patterns before anything is put in a URL.

export type VideoProvider = "youtube" | "vimeo";
export type VideoRef = { provider: VideoProvider; id: string; start?: number };

const ID: Record<VideoProvider, RegExp> = {
  youtube: /^[A-Za-z0-9_-]{11}$/,
  vimeo: /^[0-9]{1,12}$/,
};

/** Whether `id` is a well-formed id for the provider. */
export function validVideoId(provider: VideoProvider, id: string): boolean {
  return ID[provider].test(id);
}

/** The player URL for a video, or null when its id isn't well formed. */
export function videoEmbedUrl({ provider, id, start }: VideoRef): string | null {
  if (!validVideoId(provider, id)) return null;
  const s = start && start > 0 ? Math.floor(start) : 0;
  if (provider === "youtube") return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1${s ? `&start=${s}` : ""}`;
  return `https://player.vimeo.com/video/${id}?dnt=1&autoplay=1${s ? `#t=${s}s` : ""}`;
}

/** Seconds from a t=/start= value: 90, 90s, 1m30s, 1h2m3s. */
function seconds(v: string | null): number | undefined {
  if (!v) return undefined;
  if (/^\d+s?$/.test(v)) return parseInt(v, 10) || undefined;
  const m = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(v);
  if (!m) return undefined;
  return (+(m[1] ?? 0) * 3600 + +(m[2] ?? 0) * 60 + +(m[3] ?? 0)) || undefined;
}

/**
 * The video a pasted URL points at, or null when it isn't a YouTube or Vimeo video URL
 * (the editor turns a pasted URL into a darc-video block with this).
 */
export function parseVideoUrl(input: string): VideoRef | null {
  let u: URL;
  try {
    u = new URL(input.trim());
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  const host = u.hostname.replace(/^(www\.|m\.)/, "");
  const start = seconds(u.searchParams.get("t") ?? u.searchParams.get("start") ?? (/^t=(.+)$/.exec(u.hash.slice(1))?.[1] ?? null));
  const ref = (provider: VideoProvider, id: string | undefined): VideoRef | null =>
    id && validVideoId(provider, id) ? { provider, id, ...(start ? { start } : {}) } : null;
  const parts = u.pathname.split("/").filter(Boolean);
  if (host === "youtu.be") return ref("youtube", parts[0]);
  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (parts[0] === "watch") return ref("youtube", u.searchParams.get("v") ?? undefined);
    if (["embed", "shorts", "live", "v"].includes(parts[0])) return ref("youtube", parts[1]);
    return null;
  }
  if (host === "vimeo.com") return ref("vimeo", parts.find((p) => /^\d+$/.test(p)));
  if (host === "player.vimeo.com" && parts[0] === "video") return ref("vimeo", parts[1]);
  return null;
}
