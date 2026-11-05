---
type: claim
slug: matrix-mortality-2x2-undecidable-quartz-2026
title: Mortality is undecidable for 2×2 integer matrices, with 5,799 matrices (preprint, Lean formalization claimed)
problem: matrix-mortality-2x2
kind: PROOF
claimedBy: Thanin Quartz, Ivan O. Shevchenko, Hans De Sterck, Jun Liu (arXiv preprint; the authors report using OpenAI Codex and Claude Code)
claimedAt: 2026-11-04
formal: true
sources:
  - title: Quartz, Shevchenko, De Sterck, Liu, Mortality Is Undecidable for 2x2 Integer Matrices (arXiv preprint)
    url: https://arxiv.org/abs/2611.06562
  - title: Companion Lean 4 formalization (j49liu/matrix_mortality_lean)
    url: https://github.com/j49liu/matrix_mortality_lean
  - title: Cassaigne, Halava, Harju, Nicolas, Tighter undecidability bounds for matrix mortality (arXiv:1404.0644)
    url: https://arxiv.org/abs/1404.0644
checks:
  - title: Referee the reduction from the two-counter machine to a zero product
    method: REVIEW
    note: "Expert review of the proof: the encoding of configurations as rational points on the projective line, the claim that any incorrect step leaves a factor of p in a denominator that cannot be cancelled, and the rank-one conversion lemma (Lemma 3.1) that turns reachability into a zero product."
    sourceUrl: https://arxiv.org/abs/2611.06562
  - title: Build the Lean development and audit its axioms
    method: FORMAL
    note: "Build with the pinned Lean 4 and Mathlib versions, run the repository axiom audit, and confirm no sorry or project-specific axioms. Then audit statement fidelity: the Lean definitions of mortality, matrix products and the universal machine against the informal theorem."
    sourceUrl: https://github.com/j49liu/matrix_mortality_lean
  - title: Recompute the matrix family
    method: REPRODUCE
    note: Regenerate the 5,798 nonsingular matrices, confirm they are pairwise distinct with determinants 51,859 or -51,859, and test the reduction on small machines and short words by brute force.
    sourceUrl: https://github.com/j49liu/matrix_mortality_lean
  - title: Check consistency with known 2x2 results
    method: CROSS_CHECK
    note: The claim must not contradict decidability for two rational 2x2 matrices (Bournez and Branicky), decidable membership for nonsingular 2x2 integer matrices (Potapov and Semukhin) or the NP-hardness results for determinants in {0, 1, -1}; the paper discusses these in its related-work appendix.
    sourceUrl: https://arxiv.org/abs/2611.06562
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-11-04 as an unrefereed preprint; no journal submission, expert assessment or independent check is recorded. A Lean 4 repository (github.com/j49liu/matrix_mortality_lean, 2 commits when DARC looked) is linked from Appendix G of the HTML version, not from the abstract page; it states that its main theorem uses only the standard axioms, but DARC has not built it or audited its definitions, so the formal flag records that an artifact exists, not that it has been checked. The authors say they used OpenAI Codex and Claude Code for the mathematics, manuscript and Lean code and take responsibility for the result, hence the mixed origin. The determinant 51,859 is read from the paper; DARC has not recomputed the matrices.
  checks:
    - title: Referee the reduction from the two-counter machine to a zero product
      status: OPEN
    - title: Build the Lean development and audit its axioms
      status: OPEN
    - title: Recompute the matrix family
      status: OPEN
    - title: Check consistency with known 2x2 results
      status: OPEN
    - title: Refereeing
      status: OPEN
---

arXiv:2611.06562 (v1, 2026-11-04, cs.CC) claims that the mortality problem is undecidable for $2\times2$ integer matrices: for a family of 5,799 matrices, 5,798 of them fixed, nonsingular and of determinant $\pm p$ for one prime $p$, plus one rank-one matrix that encodes the input, a zero product exists exactly when a fixed universal machine halts on that input. The reduction goes from a fixed two-counter machine through projective reachability on rational points. The paper cites a companion Lean 4 formalization.
