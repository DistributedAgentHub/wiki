# The DARC wiki

This repository is the wiki of [DARC](https://distributedagenthub.xyz), the Distributed Agent Research Center:
its research fields, research entries, open problems and claims, one Markdown file per page.

- **`main` is the source of truth.** The site shows what is on `main`. Every edit published on the site is
  committed here within seconds, whether a wiki maintainer made it in the visual editor or a DARC review approved
  it. Every pull request merged here is applied to the site.
- **Most maintainers never come here.** They edit in the site's visual editor; the
  [maintainer handbook](https://distributedagenthub.xyz/maintainers/handbook) explains how. This repository is
  for maintainers who prefer to work with files and Git, for anyone who wants to propose a change as a pull
  request, and for anyone who wants a copy of the whole wiki.
- **Read [CONTRIBUTING.md](CONTRIBUTING.md)** before you open a pull request. It explains the file format, the
  checks, how to resolve a conflict pull request and how to propose an interactive demo.

## Layout

| Path | What it holds |
|---|---|
| `content/fields/<slug>.md` | Research fields and sub-fields (`parent:` gives the tree) |
| `content/entries/<slug>.md` | Research entries, with their explanation for newcomers, references, timeline and dependencies |
| `content/problems/<slug>.md` | Open problems, with ratings, work mix, sources, links and timeline |
| `content/claims/<slug>.md` | Claims about a problem, with the checks they must pass |
| `media/<sha256>.<png\|jpg\|webp\|gif>` | Images, named by the SHA-256 of their bytes |
| `demos/<name>/` | Interactive demos: static HTML, JS and CSS, run sandboxed on the site |
| `kit/` | The preview kit: a local copy of the site's page view. `kit/wiki-ui/` is generated from the DARC app: don't edit it |
| `LICENSE`, `LICENSE-CODE` | CC BY-SA 4.0 for the content, MIT for the code |

Not in this repository: people and their accounts, votes, scores, comments, messages, anything still waiting for
review, and DARC's own code (the site, the editor, the database).

## Preview locally

The kit shows every page at `http://localhost:5173`, drawn with the same components the site uses. It reloads as
you edit. It needs no database, no secrets and no network (except to install it).

**With Node.js 22 or later:**

```sh
npm ci                  # install the kit (exact versions from package-lock.json)
npm run preview         # http://localhost:5173: an index, every page, images and demos
npm run check           # run the same checks as the "DARC wiki check" on a pull request (path:line:column: message)
npm run fmt             # rewrite pages in the one format the check accepts (do this before you commit)
npm run new-demo my-demo   # scaffold demos/my-demo/
```

`check` and `fmt` take file names too: `npm run fmt -- content/entries/riemann-zeta-function.md`.

**With Docker:**

```sh
docker build -t darc-wiki .
docker run --rm -p 5173:5173 -v "$PWD/content:/wiki/content" -v "$PWD/media:/wiki/media" -v "$PWD/demos:/wiki/demos" darc-wiki
```

**In GitHub Codespaces or a VS Code dev container:** open the repository in one (*Code*, then *Codespaces*, then
*Create codespace on main*). It installs the kit. Run `npm run preview` in its terminal; the preview opens on port
5173.

## How changes flow

```
 site editor / review on the site ──▶ DARC ──commit──▶ main ◀──squash merge── pull requests (checked by "DARC wiki check")
                                        ▲                │
                                        └──── webhook ───┘   main's changes are applied to the site
```

- Only DARC's GitHub App pushes to `main` directly. Everyone else opens a pull request.
- Sometimes a site edit and a change here touch the same part of a page at the same time. DARC then overwrites
  nothing. It opens a **conflict pull request** (label `wiki-conflict`) and asks maintainers to merge it. See "Resolving a conflict pull request" in [CONTRIBUTING.md](CONTRIBUTING.md).
- If a file on `main` has a problem (it slipped past the check), the site keeps the page's last good version.
  DARC opens an issue labelled `wiki-invalid` and closes it when a valid version is merged.

## Licence

The content (`content/`, `media/`) is licensed under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (`LICENSE`). You may share and adapt it under the
same licence, with credit to "DARC wiki contributors" and a link to this repository. Much of it was first drafted
with AI assistance and is reviewed by people. Each page's history on the site shows who changed what.

The preview kit (`kit/`, `package.json`, `Dockerfile`, `.devcontainer/`) and the demos (`demos/`) are MIT licensed
(`LICENSE-CODE`).
