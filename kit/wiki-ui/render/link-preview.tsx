"use client";

import { useRef, useState, type ReactNode } from "react";

type Preview = { title: string; summary: string };

/**
 * A link to another wiki page that shows the page's title and summary on hover or focus
 * (docs/wiki-maintainers.md §6.2). The preview is fetched once, on the first hover, from
 * `previewUrl` (the site serves it from the public API's shared response cache).
 */
export function LinkPreview({ href, previewUrl, children }: { href: string; previewUrl: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<Preview | null>(null);
  const asked = useRef(false);

  function show() {
    setOpen(true);
    if (asked.current) return;
    asked.current = true;
    fetch(previewUrl)
      .then((r) => (r.ok ? r.json() : null))
      .then((p: Preview | null) => p && setPreview({ title: p.title, summary: p.summary }))
      .catch(() => {});
  }

  return (
    <span className="relative inline" onMouseEnter={show} onMouseLeave={() => setOpen(false)} onFocus={show} onBlur={() => setOpen(false)}>
      <a href={href}>{children}</a>
      {open && preview && (
        <span role="tooltip" className="not-prose absolute left-0 top-full z-20 mt-1 block w-72 border border-border bg-background p-3 text-left text-sm shadow-lg">
          <span className="block font-medium text-foreground">{preview.title}</span>
          {preview.summary && <span className="mt-1 block text-xs text-muted">{preview.summary}</span>}
        </span>
      )}
    </span>
  );
}
