## What this changes

<!-- One or two sentences: which pages, demos or files, and why. -->

## Checklist

- [ ] `npm run fmt` and `npm run check` pass locally (the "DARC wiki check" runs the same checks).
- [ ] I looked at the changed pages in `npm run preview`.
- [ ] No `site:` values changed (DARC writes them; they record review verdicts).
- [ ] No page was deleted or renamed (not supported yet).
- [ ] Nothing under `kit/wiki-ui/` changed (it is generated from the DARC app).

**Interactive demos only** (`demos/`):

- [ ] Built files are committed and every library is vendored (demos run with no network).
- [ ] Within the limits: 2 MB in total, no file over 1 MB, only `.html .js .css .json .png .jpg .webp .woff2`.
- [ ] A second maintainer will review it: demo code is merged only after another maintainer approves.

By opening this pull request you agree that your content is published under CC BY-SA 4.0
(`LICENSE`) and your code under the MIT licence (`LICENSE-CODE`).
