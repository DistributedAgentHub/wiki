---
type: claim
slug: quasi-rh-zero-free-seven-eighths-openai
title: Zero-free half-plane Re s > 7/8 for ζ and all Dirichlet L-functions
problem: riemann-hypothesis
kind: PROOF
claimedBy: OpenAI (model-produced manuscripts, github.com/openai/math family 003)
claimedAt: 2026-10-06
formal: true
sources:
  - title: "OpenAI math collection: manuscript map (family 003)"
    url: https://github.com/openai/math/blob/main/CONTENTS.md
  - title: "OpenAI math collection: Lean scope for family 003"
    url: https://github.com/openai/math/blob/main/lean/docs/003.md
  - title: "Scientific American: the most exciting claims from OpenAI's heap of new proofs (8 Oct 2026)"
    url: https://www.scientificamerican.com/article/the-most-exciting-claims-from-openais-heap-of-new-proofs/
  - title: "S. Aaronson: The Mathocalypse (7 Oct 2026)"
    url: https://scottaaronson.blog/?p=10169
checks:
  - title: Third-party Lean build and axiom audit of QuasiRiemannHypothesis.lean
    method: FORMAL
    note: Build the repository, run `#print axioms` on the zeta, Dirichlet and Hecke 7/8 theorems and on the Siegel-zero theorem, and confirm there is no `sorry` or custom axiom.
  - title: Comparator statements faithfully encode the claim
    method: REVIEW
    note: An analytic number theorist should check the Lean definitions of the Dirichlet $L$-functions, the uniformity over moduli and characters, and the exclusion of the pole at $s=1$, against the manuscript.
  - title: Expert reading of the key zero-detection step in the 7/8 manuscript
    method: REVIEW
    note: Identify which estimate breaks the Vinogradov–Korobov barrier and check it independently. This is the step every expert reader will look at first.
  - title: Independent check of the alternative 11/12 proof
    method: CROSS_CHECK
    note: The weaker 11/12 statement has a separate, human-edited write-up. Verifying it would give an independent route to a zero-free half-plane, even if the 7/8 argument fails.
site:
  status: UNVERIFIED
  statusNote: Unrefereed. The repository lists Comparator statements for the 7/8 results and the Siegel-zero result, but the documentation states no axioms or sorry status. As of 16 Oct 2026 no expert or third-party check had been published; Aaronson (7 Oct) mentions it without assessing it.
  checks:
    - title: Third-party Lean build and axiom audit of QuasiRiemannHypothesis.lean
      status: OPEN
    - title: Comparator statements faithfully encode the claim
      status: OPEN
    - title: Expert reading of the key zero-detection step in the 7/8 manuscript
      status: OPEN
    - title: Independent check of the alternative 11/12 proof
      status: OPEN
---

The manuscript 'The Quasi-Riemann Hypothesis' (dated 30 Sep 2026, released 6 Oct) claims that $\zeta(s)$ and every Dirichlet $L$-function have no zeros with $\mathrm{Re}\, s > 7/8$, uniformly in the modulus, and the same for finite-order Hecke $L$-functions over $\mathbb{Q}(\sqrt{-3})$; a companion claims a uniform exclusion of Landau–Siegel zeros, $1-\beta \ge c/\log q$. A separate write-up gives an alternative proof of $\mathrm{Re}\, s > 11/12$. If correct, this would be the first zero-free half-plane of any width $<1$, but it leaves the strip $1/2 < \mathrm{Re}\, s \le 7/8$ open and does not change the zero-density supremum.
