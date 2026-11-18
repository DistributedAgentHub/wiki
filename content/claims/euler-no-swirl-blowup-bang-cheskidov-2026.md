---
type: claim
slug: euler-no-swirl-blowup-bang-cheskidov-2026
title: Finite-time blow-up for unforced axisymmetric Euler without swirl from one datum in every C^{1,α}, α<1/3 (Bang–Cheskidov, preprint)
problem: euler-blowup-axisymmetric-no-swirl-threshold
kind: PROOF
claimedBy: Jeaheang Bang and Alexey Cheskidov (Westlake University; arXiv:2611.18151, preprint; the paper's AI acknowledgment says ChatGPT was used to optimize arguments and speed up the preparation of the first draft, and that the final draft was prepared and checked by the authors)
claimedAt: 2026-11-13
sources:
  - title: "Bang, Cheskidov: Sharp Finite-Time Blow-Up for Unforced Axisymmetric Euler Without Swirl via Multiscale Data (arXiv:2611.18151)"
    url: https://arxiv.org/abs/2611.18151
  - title: "Shkoller: Incompressible Euler Blowup at the C^{1,1/3} Threshold (arXiv:2603.10945)"
    url: https://arxiv.org/abs/2603.10945
  - title: "Chen: Asymptotically Self-Similar Blowup for 3D Incompressible Euler with C^{1,1/3-} Velocity I (arXiv:2605.15149)"
    url: https://arxiv.org/abs/2605.15149
  - title: "Shao, Wei, Zhang, Zhang: Self-similar blow-up solutions of d-dimensional incompressible Euler equations (arXiv:2605.19716)"
    url: https://arxiv.org/abs/2605.19716
  - title: "Danchin: Axisymmetric incompressible flows with bounded vorticity"
    url: https://www.mathnet.ru/eng/rm6761
  - title: "Elgindi: Finite-time singularity formation for C^{1,α} solutions to the incompressible Euler equations on R^3"
    url: https://annals.math.princeton.edu/2021/194-3/p02
checks:
  - title: Manuscript publicly available
    method: REVIEW
    note: The 57-page preprint (arXiv v1, 13 November 2026, Analysis of PDEs) is public, with Theorems 1.1 and 1.2 stated in the introduction.
    sourceUrl: https://arxiv.org/abs/2611.18151
  - title: Expert check of the large strain estimate and the multiscale induction
    method: REVIEW
    note: The lower bound for strain at the stationary non-smooth point by angular redistribution, which removes the need for small self-deformation, and the induction over scales (Sections 3 to 8) have not been independently checked.
    sourceUrl: https://arxiv.org/abs/2611.18151
  - title: Hypotheses of the global-regularity results at α≥1/3
    method: CROSS_CHECK
    note: Confirm that the datum lies outside the hypotheses of Danchin's theorem and of the Shao–Wei–Zhang endpoint result (finite energy, compactly supported vorticity, relative vorticity condition), so that the sharpness claim is consistent.
    sourceUrl: https://arxiv.org/abs/2611.18151
  - title: Agreement with the independent constructions
    method: CROSS_CHECK
    note: Shkoller, Chen and Shao–Wei–Zhang–Zhang report blow-up for each α<1/3 by different methods (Lagrangian, self-similar profiles). Agreement in the exponent range is informative but does not verify this paper's proof, and those results are themselves unrefereed.
    sourceUrl: https://arxiv.org/abs/2603.10945
  - title: Independent numerical or computational reproduction
    method: REPRODUCE
    note: The preprint includes a regularised numerical illustration of one vortex-ring pair (Figure 1) and states that convergence of that computation is not asserted; no code or reproduction of the cascade is recorded.
    sourceUrl: https://arxiv.org/abs/2611.18151
  - title: Formalization
    method: FORMAL
    note: No Lean or other machine-checked development is mentioned in the paper.
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: no journal reference or referee report is public."
    sourceUrl: https://arxiv.org/abs/2611.18151
  - title: AI involvement disclosed
    method: REVIEW
    note: The paper's AI acknowledgment states that ChatGPT was used to optimize arguments and speed up the preparation of the first draft, and that the final draft was prepared and checked by the authors. Disclosure does not bear on correctness.
    sourceUrl: https://arxiv.org/abs/2611.18151
raw:
  summary: "A 57-page preprint (arXiv v1, 13 November 2026, math.AP) reports, for the unforced incompressible Euler equations on R^3, a divergence-free axisymmetric velocity field without swirl, in L² and in C^{1,α} for every α<1/3 (smooth away from the origin), with compactly supported vorticity, whose classical solution has ∫₀ᵀ‖ω(t)‖_{L∞} dt = ∞ for some finite T, so it blows up in finite time by the Beale–Kato–Majda criterion. The datum is an explicit series of sparse, anisotropic vortex-ring pairs at shrinking scales, and the blow-up is a forward cascade through them. The abstract says this is sharp, because global regularity is known at α=1/3 in this class. Three earlier 2026 preprints (Shkoller; Chen; Shao–Wei–Zhang–Zhang) report blow-up for each fixed exponent in the same range; this one claims a single datum for all of them. It is not a smooth-data result and does not address Euler with swirl or non-axisymmetric flow."
site:
  status: UNDER_REVIEW
  statusNote: "A preprint (arXiv v1, 13 Nov 2026), unrefereed; the arXiv page lists no journal reference. DARC read the abstract, the introduction (including the Theorem 1.1 and 1.2 statements and the comparison tables) and the reference list, and did not check the proofs. The global-regularity statements at α≥1/3 are quoted from the preprint's introduction (Danchin 2007 for α>1/3; Shao–Wei–Zhang for the endpoint); DARC opened only the abstract page of Danchin and could not open the Shao–Wei–Zhang paper. The three earlier blow-up constructions are also 2026 preprints. Origin is MIXED: the paper's AI acknowledgment states that ChatGPT was used to optimize arguments and speed up the preparation of the first draft, and that the final draft was prepared and checked by the authors; the abstract page does not say so."
  checks:
    - title: Manuscript publicly available
      status: PASSED
    - title: Expert check of the large strain estimate and the multiscale induction
      status: OPEN
    - title: Hypotheses of the global-regularity results at α≥1/3
      status: OPEN
    - title: Agreement with the independent constructions
      status: OPEN
    - title: Independent numerical or computational reproduction
      status: OPEN
    - title: Formalization
      status: OPEN
    - title: Refereeing
      status: OPEN
    - title: AI involvement disclosed
      status: PASSED
---
