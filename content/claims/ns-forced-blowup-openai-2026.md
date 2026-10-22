---
type: claim
slug: ns-forced-blowup-openai-2026
title: Finite-time blow-up for forced 3D Navier–Stokes from rest with a smooth compactly supported force
problem: navier-stokes-regularity
kind: PROOF
claimedBy: OpenAI (manuscript attributed to an internal model; no human authors listed)
claimedAt: 2026-09-08
formal: true
sources:
  - title: "OpenAI: Finite Time Blowup for Navier–Stokes (manuscript, unrefereed)"
    url: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
  - title: OpenAI Lean repository NavierStokesAndEuler
    url: https://github.com/openai/NavierStokesAndEuler
  - title: Independent build and axiom audit of the Lean project (Zenodo, Oct 2026)
    url: https://zenodo.org/records/23286556
  - title: "Bastounis, Circelli, Hansen: Navier–Stokes lost in translation (preprint)"
    url: https://arxiv.org/abs/2610.08144
  - title: "Clay Mathematics Institute: Navier–Stokes announcement (11 Sep 2026)"
    url: https://www.claymath.org/news/navier-stokes-announcement/
  - title: Quanta Magazine (8 Sep 2026)
    url: https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/
checks:
  - title: Lean project builds with no sorry and only standard axioms
    method: FORMAL
    note: Independent rebuild reports only `propext`, `Classical.choice` and `Quot.sound`, with no `sorry` or `native_decide` in 816 files.
    sourceUrl: https://zenodo.org/records/23286556
  - title: Lean theorem statements match an external formalization of the Clay alternatives
    method: FORMAL
    note: The same audit reports that all 16 definitions and both main statements agree with DeepMind's Formal Conjectures encoding (commit 8bf45ed).
    sourceUrl: https://zenodo.org/records/23286556
  - title: Formal Conjectures encoding faithfully states Fefferman's alternatives (C) and (D)
    method: REVIEW
    note: A PDE specialist should compare the Lean definitions (force class, smoothness, energy bound, torus normalization) line by line with the official Clay problem description. The agreement check above only compares two formalizations with each other.
  - title: Lean development is a faithful certificate of the written proof
    method: FORMAL
    note: Bastounis–Circelli–Hansen find the Lean code proves different intermediate estimates by different arguments (e.g. an inverse estimate with m+5 rather than m+4 derivatives, and a pressure-flux bound that also depends on A_R). The formal theorem stands, but the prose argument is not certified by it.
    sourceUrl: https://arxiv.org/abs/2610.08144
  - title: Expert line-by-line review of the 166-page manuscript
    method: REVIEW
    note: "No independent group has published a full check of the written argument. Work can be split by section: the self-similar ansatz, stability of the collapsing core, and the forcing construction."
  - title: Journal refereeing and Clay acceptance
    method: REFEREE
    note: Clay's rules require publication in a refereed venue and two years of general acceptance. As of 16 Oct 2026 the manuscript has not been submitted or accepted anywhere publicly.
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed. An independent rebuild of the Lean project (Zenodo, 10 Oct 2026) found only the standard axioms and statements matching DeepMind's Formal Conjectures, but Bastounis–Circelli–Hansen (arXiv:2610.08144) show the Lean code proves different, sometimes weaker, intermediate bounds than the prose and so does not certify the written proof; they make no claim about its correctness. The Clay Institute (11 Sep 2026) called the problem 'apparently settled' and announced a deliberately unhurried evaluation; no prize has been awarded.
  checks:
    - title: Lean project builds with no sorry and only standard axioms
      status: PASSED
    - title: Lean theorem statements match an external formalization of the Clay alternatives
      status: PASSED
    - title: Formal Conjectures encoding faithfully states Fefferman's alternatives (C) and (D)
      status: OPEN
    - title: Lean development is a faithful certificate of the written proof
      status: FAILED
    - title: Expert line-by-line review of the 166-page manuscript
      status: OPEN
    - title: Journal refereeing and Clay acceptance
      status: OPEN
---

For every viscosity $\nu > 0$ the 166-page manuscript constructs a force $f \in C_c^\infty(\mathbb{R}^3 \times (0,\infty))$ and a smooth solution $(u,p)$ on $[0,1)$ with $u(\cdot,0)=0$, bounded kinetic energy and $\limsup_{t\to 1}\|u(t)\|_{L^\infty} = \infty$, which is Fefferman's alternative (C) on $\mathbb{R}^3$; a corollary gives alternative (D) on $\mathbb{T}^3$. A Lean 4 project formalizes the (C) and (D) statements and an unforced Euler blow-up. If correct, it settles the Clay problem as stated through the forced alternatives; it says nothing about the unforced equations ($f \equiv 0$).
