"use client";

import { useState } from "react";
import { videoEmbedUrl, type VideoProvider } from "./video-url";

const PROVIDER: Record<VideoProvider, string> = { youtube: "YouTube", vimeo: "Vimeo" };

/**
 * A YouTube or Vimeo video behind a click-to-load facade (docs/wiki-maintainers.md §6.3): until
 * the reader clicks, the page shows a title card and makes no request to the provider. The
 * player then loads sandboxed. The caller has checked the id (readBlock + validVideoId).
 */
export function Video({ provider, id, title, start }: { provider: VideoProvider; id: string; title?: string; start?: number }) {
  const [playing, setPlaying] = useState(false);
  const src = videoEmbedUrl({ provider, id, start })!;
  const name = title?.trim() || `${PROVIDER[provider]} video`;
  return (
    <figure className="not-prose my-6 aspect-video w-full border border-border bg-surface" data-video={provider}>
      {playing ? (
        <iframe
          src={src}
          title={name}
          className="h-full w-full"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          allow="autoplay; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          <span aria-hidden className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-research group-hover:border-research">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 4 L16 10 L6 16 Z" />
            </svg>
          </span>
          <span className="font-medium">{name}</span>
          <span className="text-xs text-muted">Play: loads the video from {PROVIDER[provider]}</span>
        </button>
      )}
    </figure>
  );
}
