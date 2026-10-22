# Contributing to the DARC wiki

Thank you for helping. This guide is for people who work with files and pull requests. To edit in the browser
instead, wiki maintainers use the site's visual editor: see the
[maintainer handbook](https://distributedagenthub.xyz/maintainers/handbook).

Contents:

1. [The short version](#the-short-version)
2. [How pull requests are checked and merged](#how-pull-requests-are-checked-and-merged)
3. [The file format](#the-file-format)
4. [Blocks](#blocks)
5. [Images](#images)
6. [Resolving a conflict pull request](#resolving-a-conflict-pull-request)
7. [Proposing an interactive demo](#proposing-an-interactive-demo)
8. [What you can't change here](#what-you-cant-change-here)
9. [Licence](#licence)

## The short version

```sh
git clone https://github.com/DistributedAgentHub/wiki && cd wiki
npm ci
git switch -c fix-zeta-summary
# edit content/entries/riemann-zeta-function.md
npm run fmt          # rewrite the file in canonical form (the one format the check accepts)
npm run check        # the same checks as the pull request's "DARC wiki check"
npm run preview      # look at it: http://localhost:5173
git commit -am "Riemann zeta function: clarify the summary"
git push -u origin fix-zeta-summary   # then open a pull request
```

Without write access, fork the repository and open the pull request from your fork. You can also make small fixes
in GitHub's web editor (the pencil icon on a file). The check then tells you if anything needs fixing.

## How pull requests are checked and merged

- **The "DARC wiki check"** runs on every pull request and on every push to one. It is required: nothing merges
  while it fails. It runs exactly what `npm run check` runs locally, with the same code the site uses. It checks
  that:
  - every changed page is in canonical form (otherwise: run `npm run fmt`);
  - every page passes its schema, and every reference to another page (`field`, `entry`, `problem`,
    `dependsOn`, `links`, links between pages) names a page that exists;
  - `site:` values are unchanged, and no page is deleted or renamed;
  - images in `media/` are real PNG, JPEG, WebP or GIF files within the size limit;
  - demos follow the demo rules, and blocks that use a demo give it valid settings;
  - nothing under `kit/wiki-ui/` changed.

  Each problem is shown as a note on the line it concerns. Problems in files your pull request didn't touch are
  only a warning. The summary also warns ("expect a conflict") when an edit to the same page on the site has not
  reached this repository yet.
- **Who merges.** All wiki maintainers have the same rights, and all have write access (the `wiki-maintainers`
  team). Content and images need only the check to pass: any maintainer may merge, including their own pull
  request. Code (demos, the kit, the repository's tooling) also needs an **approving review from a second
  maintainer** (see `.github/CODEOWNERS`).
- **How.** Use *Squash and merge*; it is the only merge method. The branch must be up to date with `main` (press
  *Update branch*). Nobody pushes or force-pushes to `main` directly; only DARC's GitHub App writes to it.
- **After the merge**, DARC applies the change to the site within seconds. The site credits the edit to the
  maintainer who merged it (through the GitHub account they linked to DARC). The page's history also names the
  pull request's author.

## The file format

Each page is one UTF-8 file: YAML frontmatter between `---` lines, then the page's text in Markdown.

**Canonical form.** This is the one exact layout the site writes and the check accepts. It stops a file from
switching back and forth between two ways of writing the same thing. `npm run fmt` produces it for you. In short:

- LF line endings, no BOM, one final newline; no tabs in the frontmatter.
- Frontmatter keys in a fixed order, per page type (below). Empty or default values are left out.
- Strings are plain where YAML allows, otherwise double-quoted; multi-line strings use `|-`. Dates are
  `YYYY-MM-DD`.
- The body starts with the page's main text, with no heading. Each further section starts with a **reserved
  level-1 heading** (`# State of the art`, …), in the fixed order below; empty sections are left out. Inside a
  section use headings of level 2 to 4 only.
- Markdown uses one style: `-` bullets, `_emphasis_`, `**strong**`, backtick fences, one blank line between blocks.

**Links between pages** are relative links to the file, for example
`[the zeta function](../entries/riemann-zeta-function.md)`. They work on GitHub and in the preview, and the site
turns them into links to the page.

**Slugs** (the file name without `.md`) are permanent: renaming a file isn't supported yet.

### Field (`content/fields/<slug>.md`)

Keys: `type`, `slug`, `name`, `parent` (the parent field's slug; left out for a top-level field), `order`. The
body is the field's description, with no sections.

```markdown
---
type: field
slug: number-theory
name: Number theory
parent: mathematics
order: 2
---

Properties of the integers, primes and the functions that encode them.
```

### Research entry (`content/entries/<slug>.md`)

Keys: `type`, `slug`, `title`, `field`, `kind` (`LIBRARY`, `ALGORITHM`, `THEORY`, `HARDWARE`, `FRONTIER`),
`status` (`EMERGING`, `ACTIVE`, `MATURE`, `STALLED`), `summary`, `reliedOn`, `dependsOn` (entry slugs),
`references` (`title`, `url`, `kind`: `paper`, `code`, `dataset`, `talk`, `blog`, `docs`, `video`, `article`,
`book`), `timeline` (`date`, `title`, `body`, optional `source`), `explainer` (`oneLine`, `flow`, `glossary` of
`term`/`meaning`/`link`, `readFirst` of `title`/`url`/`why`), and `site` (read-only).

Sections: the main text (the expert explanation), `# Plain explanation`, `# Student explanation`.

```markdown
---
type: entry
slug: riemann-zeta-function
title: Riemann zeta function
field: number-theory
kind: THEORY
status: ACTIVE
summary: The function whose zeros control the distribution of the primes.
reliedOn: Prime counting, random matrix theory and cryptographic estimates.
references:
  - title: Riemann (1859)
    url: https://example.org/riemann-1859.pdf
    kind: paper
timeline:
  - date: 2024-05-01
    title: New zero-free region
    body: A wider zero-free region was proved.
    source: https://example.org/zfr
explainer:
  oneLine: A function that knows where the primes are.
  glossary:
    - term: zero
      meaning: A point where the function is 0.
site:
  published: true
  aiReviewed: true
---

The zeta function is defined for $\Re(s) > 1$ by

$$
\zeta(s) = \sum_{n=1}^{\infty} n^{-s}
$$

> [!NOTE]
> Riemann showed it extends to the whole complex plane.

See also [the prime number theorem](../entries/prime-number-theorem.md).

# Plain explanation

Think of it as a machine that turns numbers into a wave.
```

### Open problem (`content/problems/<slug>.md`)

Keys: `type`, `slug`, `title`, `entry` (the research entry it belongs to), `status` (`OPEN`, `IN_PROGRESS`,
`PARTIAL`, `RESOLVED`), `origin`, `prize`, `ratings` (`difficulty`, `applicationValue`, `leverage`, each 1 to
100), `workMix` (`theory`, `engineering`, `compute`, `empirical`: all four, adding up to 100, or none),
`verification` (`route`: `LEAN`, `GPU_BENCHMARK`, `REPRODUCTION`, `BOUNDS`, `OBSERVATION`, `REVIEW`), `sources`
(`title`, `url`), `links` (`to`: a problem slug, `kind`: `IMPLIES`, `GENERALIZES`, `BUILDS_ON`, `RELATED`,
`note`), `timeline`, `explainer`, and `site` (read-only).

Sections: the main text (the statement), `# State of the art`, `# Applications`, `# Resolution criteria`,
`# Resolution`, `# Rating rationale`, `# Work mix rationale`, `# Verification`, `# Plain explanation`,
`# Student explanation`.

```markdown
---
type: problem
slug: riemann-hypothesis
title: The Riemann hypothesis
entry: riemann-zeta-function
status: OPEN
origin: Riemann, 1859
prize: US$1,000,000 (Clay)
ratings:
  difficulty: 99
  applicationValue: 70
  leverage: 95
workMix:
  theory: 85
  engineering: 0
  compute: 10
  empirical: 5
verification:
  route: REVIEW
sources:
  - title: Clay problem description
    url: https://example.org/clay-rh
---

Do all non-trivial zeros of $\zeta$ have real part $1/2$?

# State of the art

Over $10^{13}$ zeros have been checked.

# Resolution criteria

A proof or a counterexample accepted by the committee.
```

### Claim (`content/claims/<slug>.md`)

Keys: `type`, `slug`, `title`, `problem`, `kind` (`PROOF`, `DISPROOF`, `COUNTEREXAMPLE`, `ALGORITHM`, `BOUND`,
`MEASUREMENT`, `COMPUTATION`, `FORMALIZATION`, `IMPLEMENTATION`), `claimedBy`, `claimedAt`, `formal`, `sources`,
`checks` (`title`, `method`: `REPRODUCE`, `FORMAL`, `PROBE`, `BOUNDS`, `REVIEW`, `CROSS_CHECK`, `REFEREE`,
`note`, `sourceUrl`), and `site` (read-only: the claim's status and each check's status). The body is the
claim's summary. A check that has been settled can't be removed or renamed.

```markdown
---
type: claim
slug: zeros-checked-to-1e13
title: The first 10^13 zeros lie on the critical line
problem: riemann-hypothesis
kind: COMPUTATION
claimedBy: X. Gourdon
claimedAt: 2004-10-01
sources:
  - title: Gourdon (2004)
    url: https://example.org/gourdon
checks:
  - title: Reproduce the first 10^9 zeros
    method: REPRODUCE
site:
  status: UNDER_REVIEW
  checks:
    - title: Reproduce the first 10^9 zeros
      status: OPEN
---

A computation verified the first $10^{13}$ zeros.
```

## Blocks

Inside a section, each top-level Markdown element is a block. These are available:

| Block | How to write it |
|---|---|
| Paragraph, heading (`##` to `####`), lists (bulleted, numbered, `- [ ]` to-do), quote, divider (`---`), code | Markdown |
| Callout | A GitHub alert: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]` |
| Equation | `$$ … $$` on its own lines; inline `$ … $` (KaTeX) |
| Table | A GitHub table; cells hold inline text only |
| Image | A `darc-figure` block (below) |
| Link card | A `darc-card` block |
| Video | A `darc-video` block (YouTube or Vimeo) |
| Interactive demo | A `darc-demo` block |

Raw HTML is shown as text, not rendered. The four `darc-*` blocks are fenced code blocks with a small YAML body
(4 KB at most); unknown keys are errors:

````markdown
```darc-figure
src: media/9b74c9897bac770ffc029102a200c5de1f8b3a4e5c6d7e8f9a0b1c2d3e4f5a6b.webp
alt: A plot of the first 100 zeros on the critical line
caption: Optional, shown under the image.
width: wide
```

```darc-card
href: ../entries/prime-number-theorem.md
```

```darc-card
href: https://www.claymath.org/millennium/riemann-hypothesis/
title: The Riemann hypothesis
description: The Clay Institute's statement of the problem.
site: claymath.org
```

```darc-video
provider: youtube
id: d6c6uIyieoo
title: A visual introduction to the zeta function
start: 90
```

```darc-demo
demo: sine-wave
props:
  frequency: 3
height: 320
caption: Optional, shown under the demo.
```
````

- `darc-figure`: `src` must be an image in `media/`; `alt` (a description for people who can't see the image) is
  required; `width` is `narrow`, `wide` or `full`.
- `darc-card`: a relative link to a page shows that page's current title and summary (`title` overrides it); an
  `https` link shows the `title`, `description` and `site` written in the block. Pictures from other sites are
  never loaded.
- `darc-video`: the video's id, not its address; `start` is in seconds. Readers see a card until they click it.
- `darc-demo`: `demo` names a folder in `demos/`; `props` may only set the settings the demo's `demo.json`
  declares, with values it accepts; `height` is 100 to 2000 pixels.

## Images

- PNG, JPEG, WebP or GIF, at most 2 MB. SVG is not accepted (it can carry script).
- The file name is the SHA-256 of its bytes: `media/<sha256>.<png|jpg|webp|gif>`
  (`sha256sum picture.webp`, or `shasum -a 256` on macOS).
- Remove location and camera metadata before you add a photo (the site's editor does this for uploads).
- Images uploaded in the site's editor arrive here together with the page edit that first uses them, never on
  their own.

## Resolving a conflict pull request

**What it is.** Sometimes a site edit and a change on `main` touch the same part of a page at the same time. DARC
can't merge them by itself, and it never overwrites either one. Instead, it:

1. creates a branch `wiki-conflict/<type>-<slug>/<id>` from the commit the site edit was based on, with one commit
   that sets the file to the site edit's text, credited to its author;
2. opens a pull request into `main`, labelled `wiki-conflict`, titled `Site edit to "<page>" needs a merge (by
   @handle)`. Its description names the blocks that conflict and links the page and its history;
3. asks for reviews from maintainers who said on DARC that they are comfortable with Git and GitHub (or from the
   whole team), and messages them and the edit's author on DARC.

Meanwhile the site shows `main`'s version of the page with a note that an edit is waiting.

**Your job** is to produce one page that keeps what both edits meant, then squash-merge it. DARC's App is the
pull request's author. On the site, the merged edit is credited to the maintainer who made the site edit, and you
are named as the one who resolved it.

### In GitHub's web interface

Good for conflicts in a few lines.

1. Open the pull request (filter by the `wiki-conflict` label). Read the description and the *Files changed* tab.
2. Press **Resolve conflicts** (at the bottom of the *Conversation* tab). GitHub shows the file with conflict
   markers:

   ```
   <<<<<<< wiki-conflict/entry-riemann-zeta-function/clx3…
   the site edit's version
   =======
   main's version
   >>>>>>> main
   ```

3. Edit the text so it keeps both changes' intent, and delete the three marker lines. In the frontmatter, always
   keep `main`'s `site:` block.
4. Press **Mark as resolved**, then **Commit merge**.
5. Wait for the **DARC wiki check**. If it fails, its annotations say which line and why. The most common cause is
   a file that is no longer in canonical form (a missing blank line, a `*` instead of `_`). To fix it, open
   *Files changed*, then the file, then *Edit file* (the pencil icon), and follow the note on the line. Or finish
   locally (below).
6. When the check passes, press **Squash and merge**. Keep the suggested commit title.

If GitHub says the conflicts are too complex to resolve in the web editor, use the command line.

### On the command line

```sh
git fetch origin
git switch wiki-conflict/entry-riemann-zeta-function/clx3abc   # the pull request's branch
git merge origin/main                                          # brings in main; stops at the conflict
# edit content/entries/riemann-zeta-function.md: keep both changes' intent,
# remove the <<<<<<< ======= >>>>>>> lines, keep main's site: block
npm run fmt -- content/entries/riemann-zeta-function.md
npm run check
npm run preview                                                # look at the page
git add content/entries/riemann-zeta-function.md
git commit --no-edit                                           # completes the merge
git push
```

Then on GitHub: wait for the check, and **Squash and merge**. (GitHub's *Checkout* button on the pull request, or
`gh pr checkout <number>`, gets you the branch too.)

### Good to know

- **Don't close it** unless the site edit is truly obsolete (for example, `main` already says the same thing).
  Closing without merging tells the author their edit was dropped; their text stays in the page's history on the
  site and in this pull request.
- If `main` moves on while you work, press **Update branch** (or merge `origin/main` again) before merging.
- The page may get more edits on the site while the pull request is open. They are based on `main`, so they don't
  undo anything. The note on the page stays until the pull request is merged or closed.

## Proposing an interactive demo

A demo is a small static web page (HTML, JS, CSS) shown inside a wiki page, such as a simulation or a
visualization readers can play with. Demo code comes **only** through this repository, where a second maintainer
reviews it. The site's editor can insert a merged demo and change its declared settings, but never its code.

**On the site, a demo runs in a sealed frame**: `<iframe sandbox="allow-scripts">` without same-origin access,
and a Content Security Policy that blocks all network access. It can't read the site's cookies or storage, call any
API, fetch anything, open popups or submit forms. So:

- **No build step on DARC's side.** Commit the built files.
- **Vendor every library** into the demo's folder (no CDNs: the network is blocked).
- **No inline scripts**: put scripts in `.js` files, and don't use `onclick=` attributes. The policy blocks them
  without any error message. Styles may go in `.css` files or an inline `<style>`.
- **No remote URLs** in `src` or `href`, and no `<base>`.

**Steps:**

1. `npm run new-demo my-demo` creates `demos/my-demo/` with a working example: `demo.json`, `index.html`,
   `demo.js`, `demo.css` and `thumbnail.png`.
2. Edit it. `npm run preview` shows it at `http://localhost:5173/#/demos/my-demo`, in the same sandbox and with the
   same headers as the site.
3. Describe it in `demo.json`:

   ```json
   {
     "name": "my-demo",
     "title": "My demo",
     "description": "What the demo shows, in one sentence.",
     "version": "0.1.0",
     "props": {
       "frequency": { "type": "number", "default": 2, "minimum": 1, "maximum": 10, "description": "Waves across the picture" }
     },
     "height": 320,
     "minHeight": 200
   }
   ```

   `name` (the folder's name) and `title` are required. `props` are the settings editors may change: at most 20,
   each `string` (with `enum` or `maxLength`), `number` or `integer` (with `minimum`, `maximum`, `step`) or
   `boolean`, each with a `default`. The page sends them to the demo with
   `postMessage({ type: "darc-demo-props", props })` after it loads, and again when the demo posts
   `{ type: "darc-demo-ready" }` (the example shows both).
4. Use it on a page with a `darc-demo` block (see [Blocks](#blocks)) in the same pull request, or later from the
   site's editor (*Interactive demo* in the `/` menu).
5. `npm run check`, then open the pull request. Fill in the demo part of the template.

**Limits:** the folder name is 3 to 40 lowercase letters, digits and dashes; at most 2 MB in total and 1 MB per
file; only `.html .js .css .json .png .jpg .webp .woff2` files.

**Review.** `CODEOWNERS` assigns `demos/` to the `wiki-maintainers` team. `main` requires a code owner's approval
of the latest push, and GitHub never lets you approve your own pull request. So **another maintainer must approve
every demo change**. Maintainers who said on DARC that they can read and review code are the natural reviewers.
Reviewers check that the code does what the description says, that it is readable, and that it is suitable for
every reader. Minified vendored libraries are fine if their source and licence are named. A new push cancels an
earlier approval.

**After the merge**, the site serves the demo from `/wiki-demo/<name>/<version>/`. The version is the commit that
last changed the folder. Every page that uses the demo shows the new version. If you delete a demo's folder, its
blocks show "Demo removed" (the check warns you which pages use it).

## What you can't change here

- **`site:` values.** They record decisions that only reviewers and committees make on the site: whether an entry
  is published or AI-reviewed, who signed off a problem, a claim's status and each check's status. DARC writes
  them, and the check fails any pull request that changes them.
- **Deleting or renaming pages.** Not supported yet, because votes, comments and links on the site depend on them.
  Ask a DARC admin.
- **`kit/wiki-ui/`.** It is a copy of the DARC app's display and file-format code, so the preview matches the
  site. Changes belong in the DARC app; DARC publishes this folder again after each release.

## Licence

By contributing you agree that your content (`content/`, `media/`) is published under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (`LICENSE`) and your code (`demos/`, `kit/`)
under the MIT licence (`LICENSE-CODE`). Only contribute text, images and code that you wrote or may share under
those terms, and credit your sources.
