---
type: claim
slug: pure-semisimplicity-counterexample-ren-2026
title: Counterexample to the pure semisimplicity conjecture via a division ring extension (Ren, preprint)
problem: pure-semisimplicity-conjecture
kind: DISPROOF
claimedBy: Junpeng Ren (arXiv:2610.39883, preprint)
claimedAt: 2026-10-29
sources:
  - title: "Ren: A counterexample to the pure semisimplicity conjecture (arXiv:2610.39883)"
    url: https://arxiv.org/abs/2610.39883
  - title: "Ren: pure-semisimplicity-lean (GitHub)"
    url: https://github.com/oasisss6666/pure-semisimplicity-lean
checks:
  - title: Expert check of the construction
    method: REVIEW
    note: A ring theorist should check that $H\subseteq T$ is a division ring extension with the stated right dimension sequence and infinite left dimension, and that the triangular ring is right pure semisimple but not of finite representation type, using Simson's reduction.
    sourceUrl: https://arxiv.org/abs/2610.39883
  - title: Rebuild and audit the Lean formalization
    method: FORMAL
    note: Build the repository (Lean v4.34.0, pinned Mathlib) from a clean checkout, confirm no sorry or extra axioms for main_theorem, and compare the Lean definitions of right pure semisimple and finite representation type with the paper's. The README reports 832 theorems and a local verify.py audit; no CI run is published.
    sourceUrl: https://github.com/oasisss6666/pure-semisimplicity-lean
  - title: Consistency with known partial results
    method: CROSS_CHECK
    note: Check the example against Šaroch's periodic dimension sequence and the García and Šaroch results on small potential counterexamples, which the paper's introduction cites.
    sourceUrl: https://arxiv.org/abs/2610.39883
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.39883
site:
  status: UNDER_REVIEW
  statusNote: A 10-page arXiv preprint (v1 of 29 Oct 2026), unrefereed; DARC found no expert assessment yet. A Lean 4 formalization of the main theorem is linked and the paper says it passed a kernel replay with only the standard axioms, but the repository has no CI workflow and 2 commits, so DARC does not count the claim as machine-checked. The Lean statements also need review for fidelity to the paper. The paper's AI-use declaration says GPT-6 Astra contributed to developing the proof, including the construction of the division rings, and that AI models helped with the formalization.
  checks:
    - title: Expert check of the construction
      status: OPEN
    - title: Rebuild and audit the Lean formalization
      status: OPEN
    - title: Consistency with known partial results
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims a division ring extension $H\subseteq T$, with $T$ a union of fraction division rings of nearest-neighbour quantum Laurent algebras with parameter $1/2$, whose bimodule ${}_H T_T$ has right dimension sequence $(1,2,2,2,\dots)$ and infinite left dimension. The triangular ring $\begin{pmatrix}H&T\\0&T\end{pmatrix}$ is then claimed to be right pure semisimple but neither left pure semisimple nor of finite representation type, disproving the pure semisimplicity conjecture.
