---
type: claim
slug: riemann-hypothesis-lean-proof-alpoge-claude-2026
title: Lean proof of the Riemann Hypothesis and of GRH for Dirichlet L-functions (Alpöge with Claude; claim under review)
problem: riemann-hypothesis
kind: PROOF
claimedBy: Levent Alpöge (Anthropic), working with Claude (unsigned note on alpo.ge; a Lean archive only, no paper)
claimedAt: 2026-11-20
formal: true
sources:
  - title: "Levent Alpöge: untitled four-page note claiming the proof (alpo.ge, 20 Nov 2026; unsigned, unrefereed)"
    url: https://alpo.ge/remark.pdf
  - title: The Lean archive, part 01 of 14 (direct download; joined archive sha256 9631b4f020199e580ba86178cb56c6e9b09f690c2369a80dc4334aa93f49c7fc)
    url: https://alpo.ge/lean.tar.gz.part01
  - title: "Mathlib at the pinned commit 0df444a: the definition RiemannHypothesis"
    url: https://github.com/leanprover-community/mathlib4/blob/0df444a360eaa60ab8c11dca51a86af692955474/Mathlib/NumberTheory/LSeries/RiemannZeta.lean#L185
  - title: "Andrew Sutherland (MIT): RH Lean proof, verification files (build, axiom and checker results; updated 20 Nov 2026, 22:05 UTC)"
    url: https://math.mit.edu/~drew/grh/
  - title: "Deicyde/riemann-hypothesis at e50d098: third-party mirror with a Mathlib-only comparator challenge file"
    url: https://github.com/Deicyde/riemann-hypothesis/tree/e50d09817ad81469f737e8f637561e6ccf86c670
  - title: "Lean Zulip, general channel: thread on building and checking the archive"
    url: https://leanprover.zulipchat.com/#narrow/channel/113488-general/topic/Discussion.3A.20Alp.C3.B6ge.20Proves.20the.20Riemann.20Hypothesis
  - title: "Scientific American (J. Howlett, 20 Nov 2026): Anthropic mathematician claims to prove Riemann hypothesis"
    url: https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/
  - title: "Scientific American (C. Moskowitz, 20 Nov 2026): independent mathematicians on the Lean checks"
    url: https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/
  - title: "AFP via Phys.org (20 Nov 2026): Anthropic researcher says he and Claude proved the Riemann hypothesis"
    url: https://phys.org/news/2026-11-anthropic-claude-math-greatest-riddle.html
checks:
  - title: Independent build with the pinned Lean and Mathlib
    method: FORMAL
    note: "Reported by Andrew Sutherland (MIT): all 175,187 modules compile with Lean v4.33.1 and Mathlib v4.33.1, zero errors, finished 16:43 UTC on 20 November 2026; the Mathlib files used are byte-identical to the official cache. Caveats from his page: the build ran without a sandbox and called `lean` directly, not `lake build` (a 77-module sample matches a `lake build` byte for byte; the full set was not compared). Not reproduced by DAH."
    sourceUrl: https://math.mit.edu/~drew/grh/
  - title: Axiom report for the five theorems
    method: FORMAL
    note: "Reported on the same page: `#print axioms` on the five theorems of `Main.lean` lists only `propext`, `Classical.choice` and `Quot.sound`, and the environment contains no axioms declared outside Lean core. DAH's own text search of the 175,187 source files found no `sorry`, `admit`, `axiom` declaration or `native_decide`, which is consistent with this but is not a build."
    sourceUrl: https://math.mit.edu/~drew/grh/
  - title: Re-check by independently written kernels
    method: FORMAL
    note: "Reported on the same page: a leanchecker replay of every module passed, nanoda (a Rust kernel) and con-leche (master) accept the full 61.6 GB export, and lean4lean accepts every compiled module, five of them only with a raised step limit. The con-leche and con-ron binaries bundled with Lean v4.36.0 declined the export (an unsupported reflexive inductive type), which the page records as not a rejection. Further checker runs are reported in the Lean Zulip thread by other users."
    sourceUrl: https://math.mit.edu/~drew/grh/
  - title: End-to-end comparator run against a Mathlib-only challenge file
    method: FORMAL
    note: "The challenge file states the five theorems with `sorry` proofs and imports only Mathlib, so that nothing in the submission can redefine the symbols in the statements. As of 22:05 UTC on 20 November 2026 Sutherland's page lists `lake comparator` (Lean v4.36.0) as running: statement comparison and the axiom check had passed in one run, the kernel stage had no verdict yet. con-leche `--compare`, a second implementation of the statement matching, already reports all five theorems as justified by the solution. Close this check when the full comparator run is published."
    sourceUrl: https://math.mit.edu/~drew/grh/
  - title: Sandboxed reproduction, and a DAH rebuild
    method: REPRODUCE
    note: The published build was unsandboxed, and the page says the export has not yet been compared with one from a sandboxed build. Rebuild from the archive with the hash above in a sandbox with no network (the protocol in the Deicyde mirror's README), export, and compare the export's sha256 with `5ea74b91…244e`. DAH labels a result machine-checked only on the artefact's own CI or on its own rebuild, and neither exists yet.
    sourceUrl: https://github.com/Deicyde/riemann-hypothesis/tree/e50d09817ad81469f737e8f637561e6ccf86c670
  - title: The formal statements say what RH and GRH say
    method: REVIEW
    note: "The headline statement is Mathlib's `RiemannHypothesis` at the pinned commit: for all complex $s$, if `riemannZeta s = 0`, $s$ is not $-2(n+1)$ for a natural number $n$, and $s\\ne 1$, then $\\mathrm{Re}\\,s=1/2$. An analytic number theorist should confirm that Mathlib's `riemannZeta` and `DirichletCharacter.LFunction` are the standard analytic continuations, that the Dirichlet statements quantify over every modulus and every character (imprimitive ones included), and record the scope: Dirichlet $L$-functions only, with the Extended Riemann Hypothesis left as future work in the note."
    sourceUrl: https://github.com/leanprover-community/mathlib4/blob/0df444a360eaa60ab8c11dca51a86af692955474/Mathlib/NumberTheory/LSeries/RiemannZeta.lean#L185
  - title: A human-readable proof and an expert reading of the argument
    method: REVIEW
    note: No paper exists. The note sketches a descendant of Stepanov's method with multiplicity supplied by iterated theta lifts between totally definite unitary groups, and lists steps such as a Bost slope inequality, an Iwasawa tower and a relative trace formula, in a timeline that it says Claude provided and whose descriptions its author says he may have to edit. As far as these sources show, no expert has yet published an account of why the argument works. Until experts can read it, the claim rests on the formal check alone.
    sourceUrl: https://alpo.ge/remark.pdf
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: there is no manuscript and no journal submission. The note says its author intends to write the argument up properly."
    sourceUrl: https://alpo.ge/remark.pdf
site:
  status: UNDER_REVIEW
  statusNote: "A claim under review; the problem stays OPEN. **Reported by third parties on 20 November 2026 and not reproduced by DAH:** Andrew Sutherland (MIT), whose page says the checks were run with Claude Code, compiled all 175,187 modules with Lean v4.33.1 with zero errors (finished 16:43 UTC), on cloud machines without a sandbox and by calling `lean` directly, with a 77-module sample byte-identical to a `lake build`. His page, last updated 22:05 UTC, reports that `#print axioms` on the five theorems lists only `propext`, `Classical.choice` and `Quot.sound`, that a kernel replay of every module (leanchecker) passed, that the independently written kernels nanoda and con-leche accept the full exported proof, that lean4lean accepts every compiled module (five needed a raised step limit), and that con-leche `--compare` finds all five theorems of a challenge file that imports only Mathlib 'justified by the solution'. The same page lists the end-to-end `lake comparator` run and the Lean-kernel replay of the export as still running (statement comparison and the axiom check had passed in one run), and says the con-leche and con-ron binaries bundled with Lean v4.36.0 declined the export because of an unsupported feature, which is not a rejection. Others in the Lean Zulip thread (Simon DeDeo, Elliot Arledge, Szymon Teżewski) report their own builds or checker runs. **What DAH did itself:** downloaded the 14 parts and confirmed the joined archive's sha256 (`9631b4f0…49c7fc`, the hash Sutherland reports), read `src/Main.lean`, `src/Statements.lean` and the build configuration, and ran a text search of the sources that found no `sorry`, `admit`, `axiom` declaration or `native_decide`. A text search is not a build, and DAH has not built the archive. **Not done by anyone, as far as these sources show:** an expert reading of the mathematics, a human-readable proof, refereeing. Sutherland told Scientific American that much work remains to understand the mathematical details, and Brian Conrey told AFP he had seen only the note and had asked for a manuscript. The note is unsigned and undated; its attribution rests on its place on Alpöge's site and on press reports. Anthropic's news and research pages carried no announcement of the claim on 20 November 2026, and AFP reports that the company did not immediately respond to a request for comment. Origin is MIXED by the note's own account: its author says he guided the approach and that Claude 'far outpaced' him near the end."
  checks:
    - title: Independent build with the pinned Lean and Mathlib
      status: PASSED
    - title: Axiom report for the five theorems
      status: PASSED
    - title: Re-check by independently written kernels
      status: PASSED
    - title: End-to-end comparator run against a Mathlib-only challenge file
      status: OPEN
    - title: Sandboxed reproduction, and a DAH rebuild
      status: OPEN
    - title: The formal statements say what RH and GRH say
      status: OPEN
    - title: A human-readable proof and an expert reading of the argument
      status: OPEN
    - title: Refereeing
      status: OPEN
---

An unsigned four-page note on Levent Alpöge's personal site (alpo.ge/remark.pdf, posted 20 November 2026) says 'I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis', that the method extends to the Generalized Riemann Hypothesis, and that its author expects the Extended Riemann Hypothesis 'with more time'. The only artefact is a Lean 4 archive in 14 parts (239,275,554 bytes joined; 175,187 `.lean` files, about 17.4 million lines; Lean v4.33.1 and Mathlib at commit `0df444a`). Its `src/Main.lean` states five theorems. The first is `riemannHypothesis : RiemannHypothesis`, where `RiemannHypothesis` is Mathlib's own definition: every zero of $\zeta$ other than the trivial zeros $-2,-4,\dots$ has real part $1/2$. The second is the same statement written out. The other three concern the Dirichlet $L$-functions of every modulus $N$ and every character $\chi$ mod $N$: $L(\chi,s)\ne 0$ for $\mathrm{Re}\,s>1/2$ (except the trivial character at $s=1$); every zero with $0<\mathrm{Re}\,s<1$ has $\mathrm{Re}\,s=1/2$; and the latter again for primitive characters. 'GRH' here therefore means Dirichlet $L$-functions only: Dedekind zeta functions and automorphic $L$-functions are not covered. The note describes the argument as a descendant of Stepanov's method in which multiplicity is supplied by chains of theta lifts between unitary groups, of length about $\sqrt{X}$ for a von Mangoldt sum of length $X$, and it gives a 20-step timeline from 6 October to 16 November 2026 that it says Claude provided. There is no paper: the note says a written-out version passed 250,000 pages and was not posted, and that its author has not yet mastered all of the mathematics around the argument.
