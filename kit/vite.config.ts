import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { wikiFiles } from "./serve.ts";

// npm run preview: every page of content/ rendered with kit/wiki-ui, the components the site
// uses, at http://localhost:5173. Content and component edits reload at once.

const repo = fileURLToPath(new URL("..", import.meta.url));

export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  publicDir: false,
  plugins: [react(), tailwindcss(), wikiFiles(repo)],
  build: { outDir: `${repo}/dist`, emptyOutDir: true },
  server: {
    port: 5173,
    // The pages are read from ../content.
    fs: { allow: [repo] },
    watch: process.env.WIKI_POLL === "1" ? { usePolling: true, interval: 300 } : undefined,
  },
});
