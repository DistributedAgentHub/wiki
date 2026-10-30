---
type: claim
slug: cfp-vanishing-conjecture-deng-2026
title: Proof of the Church–Farb–Putman vanishing conjecture for SL_n(Z) (Deng, preprint)
problem: church-farb-putman-vanishing-conjecture
kind: PROOF
claimedBy: Taiwang Deng (arXiv:2610.39960, preprint)
claimedAt: 2026-10-29
sources:
  - title: "Deng: Vanishing near the virtual cohomological dimension of SL_n(Z) (arXiv:2610.39960)"
    url: https://arxiv.org/abs/2610.39960
checks:
  - title: Expert check of the Franke filtration argument
    method: REVIEW
    note: An expert in automorphic forms should check the degree computation, the reduction to a maximal parabolic with a trivial factor and a Speh factor, and the Eisenstein residue identity and cochain homotopy used to build primitives.
    sourceUrl: https://arxiv.org/abs/2610.39960
  - title: Weight bound input
    method: CROSS_CHECK
    note: Check that the Chenevier–Lannes bound (motivic weight at least 11 for level-one regular algebraic cuspidal representations of rank at least two) is applied as stated and is enough for every $n$.
    sourceUrl: https://arxiv.org/abs/2610.39960
  - title: Consistency with the known low-codimension cases
    method: CROSS_CHECK
    note: The result must agree with the proofs of $i=0$ (Lee–Szczarba), $i=1$ (Church–Putman) and $i=2$ (Brück–Miller–Patzt–Sroka–Wilson) as cited in the paper's introduction.
    sourceUrl: https://arxiv.org/abs/2610.39960
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.39960
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1 of 29 Oct 2026), unrefereed; DARC found no expert assessment yet. The argument depends on Franke's theory and the Chenevier–Lannes weight bound, both deep results cited from the literature. The author reports ChatGPT was used for editorial help only.
  checks:
    - title: Expert check of the Franke filtration argument
      status: OPEN
    - title: Weight bound input
      status: OPEN
    - title: Consistency with the known low-codimension cases
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims $H^{N_n-i}(\mathrm{SL}_n(\mathbb Z);\mathbb Q)=0$ for all $n\ge2$ and $0\le i<n-1$, where $N_n=n(n-1)/2$, via Franke's filtration of the weighted automorphic cochain complex, Franke's topological model for trivial cuspidal support, and the Chenevier–Lannes lower bound 11 on motivic weight for non-trivial support. The result is for full level and trivial rational coefficients, with no control of torsion.
