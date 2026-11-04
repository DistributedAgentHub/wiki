---
type: claim
slug: ding-huang-yang-o-n-exponential-decay-2026
title: Exponential decay of spin correlations in the 2D O(N) model, N≥3, at every temperature (Ding–Huang–Yang, preprint)
problem: polyakov-exponential-decay-2d-o-n-model
kind: PROOF
claimedBy: Jian Ding, Fenglin Huang, Peng Yang (arXiv:2611.04908, preprint)
claimedAt: 2026-11-03
sources:
  - title: "Ding, Huang, Yang: Exponential decay for the two-dimensional Heisenberg model (arXiv:2611.04908)"
    url: https://arxiv.org/abs/2611.04908
  - title: "OpenAI (AI-generated, unrefereed): family 215 (openai/math at adc7f12)"
    url: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/lean/docs/215.md
checks:
  - title: Expert reading of the main argument
    method: REVIEW
    note: A probabilist should check the Gaussian decay of the number of macroscopic loops (Section 4), the extended spin-wave argument and its tracking of the multiplicity of the map (Section 5, Theorem 5.2 and Proposition 5.27), and the passage from small crossing probabilities of loop-soup clusters to Theorem 1.4.
    sourceUrl: https://arxiv.org/abs/2611.04908
  - title: Check the extension to real N
    method: REVIEW
    note: Confirm that the loop-soup model with conditioned local time coincides with the spin O(N) model for integer N via Lupu's isomorphism (Section 2.2) and that Theorem 1.4 for 2<N≤3 implies Theorem 1.1 (the preprint says modulo boundary conditions).
    sourceUrl: https://arxiv.org/abs/2611.04908
  - title: Boundary conditions and the claimed statement
    method: REVIEW
    note: Check exactly which boundary conditions Theorem 1.1 covers (free boundary, and constant boundary spins), and whether uniformity in the volume gives a statement for infinite-volume Gibbs measures.
    sourceUrl: https://arxiv.org/abs/2611.04908
  - title: Compare with OpenAI's family 215 manuscript
    method: CROSS_CHECK
    note: Two unrefereed manuscripts claim exponential decay of the free-boundary two-point function by reportedly different methods. Agreement would be informative but is not verification of either.
    sourceUrl: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/lean/docs/215.md
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.04908
site:
  status: UNDER_REVIEW
  statusNote: A long arXiv preprint (v1 of 3 Nov 2026; math.PR, math-ph), unrefereed; the arXiv page lists no journal reference and DARC found no expert assessment yet. The authors state that they developed the mathematics and wrote the manuscript themselves, with limited task-specific AI assistance that they list (checking one case of a lemma, locating a reference, documenting discussions, drawing figures). They also state that OpenAI released a different proof of the free-boundary statement on 6 Oct 2026 while their draft was being completed, that the two approaches are drastically different, and that their work was not influenced by it; they expect but do not claim the result for all boundary conditions. The paper does not mention a formal verification.
  checks:
    - title: Expert reading of the main argument
      status: OPEN
    - title: Check the extension to real N
      status: OPEN
    - title: Boundary conditions and the claimed statement
      status: OPEN
    - title: Compare with OpenAI's family 215 manuscript
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for every $N\ge3$ and every inverse temperature $\beta>0$, the spin correlation of the two-dimensional spin $O(N)$ model decays exponentially, for the free boundary condition and for boundary conditions in which all boundary spins are equal, confirming Polyakov's 1975 prediction for the Heisenberg model ($N=3$). The method defines a generalized $O(N)$ model for real $N>2$: a loop soup on the metric graph with intensity $N/2$ conditioned on local time $\beta$ at each vertex, loops assigned independently to $\lceil N\rceil$ copies, and a spin field built from random signs on the clusters through Lupu's isomorphism theorem. The key estimate is exponential decay of cluster connectivity in one copy, obtained from a Gaussian bound on the number of macroscopic loops (proved with a complex-rotation spin-wave argument) and an extended spin-wave argument of Mermin–Wagner type. The authors say the mechanism emerges as soon as $N>2$ and does not rely on the rotation symmetry of $S^2$.
