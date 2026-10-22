"use client";

import { useEffect, useRef } from "react";
import { DEMO_PROPS_MAX_BYTES, DEMO_PROPS_MESSAGE, DEMO_READY_MESSAGE, type DemoPropValue } from "../format/demo-protocol";

/**
 * An interactive demo (docs/wiki-maintainers.md §7) in a sandboxed frame. `allow-scripts` only:
 * no allow-same-origin, so the demo runs in an opaque origin and can't read the site's cookies or
 * storage, call its API or reach this page's DOM; no forms, popups or top navigation. Its files
 * come with a CSP that allows no network at all (src/app/wiki-demo, the kit's server).
 *
 * The props (checked against the manifest by the caller; at most DEMO_PROPS_MAX_BYTES of JSON,
 * else none) go in by postMessage when the frame loads and whenever the demo says it is ready
 * (`{type: "darc-demo-ready"}`), so a demo that starts listening late still gets them. Only
 * messages from this frame's own window are heard, and the target is "*" because an opaque
 * origin has no name: the props are the page's public text.
 */
export function DemoFrame({ src, title, props, height }: { src: string; title: string; props: Record<string, DemoPropValue>; height: number }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const json = JSON.stringify(props);
  useEffect(() => {
    const el = frame.current!;
    const payload = new TextEncoder().encode(json).length <= DEMO_PROPS_MAX_BYTES ? (JSON.parse(json) as Record<string, DemoPropValue>) : {};
    const send = () => el.contentWindow?.postMessage({ type: DEMO_PROPS_MESSAGE, props: payload }, "*");
    const onMessage = (e: MessageEvent) => {
      if (e.source === el.contentWindow && (e.data as { type?: unknown } | null)?.type === DEMO_READY_MESSAGE) send();
    };
    window.addEventListener("message", onMessage);
    el.addEventListener("load", send);
    // Server-rendered: the frame may have loaded before this ran.
    send();
    return () => {
      window.removeEventListener("message", onMessage);
      el.removeEventListener("load", send);
    };
  }, [json]);
  return (
    <iframe
      ref={frame}
      src={src}
      title={title}
      sandbox="allow-scripts"
      loading="lazy"
      referrerPolicy="no-referrer"
      className="block w-full border border-border bg-white"
      style={{ height }}
    />
  );
}
