---
type: claim
slug: mee-sigma2p-many-one-jaakkola-2026
title: Minimum Equivalent Expression is Σ₂ᵖ-complete under many-one reductions (preprint, AI-attributed proof)
problem: minimum-equivalent-expression-many-one
kind: PROOF
claimedBy: Reijo Jaakkola (arXiv preprint; the abstract credits the proof to GPT-Sol-6.1)
claimedAt: 2026-10-25
sources:
  - title: Jaakkola, Propositional formula minimization is Σ₂ᵖ-complete under many-one reductions (arXiv preprint)
    url: https://arxiv.org/abs/2610.34516
  - title: Buchfuhrer and Umans, The Complexity of Boolean Formula Minimization (ICALP 2008)
    url: https://doi.org/10.1007/978-3-540-70575-8_3
checks:
  - title: Verify the many-one reduction is correct in both directions
    method: REVIEW
    note: "Expert review of the construction: polynomial-time computability, preservation of yes and no instances, and the claimed bound k."
    sourceUrl: https://arxiv.org/abs/2610.34516
  - title: Compare with the Turing-reduction proof of Buchfuhrer and Umans
    method: CROSS_CHECK
    note: Check which steps of the 2008 argument needed oracle calls and how the preprint replaces them with a single instance.
    sourceUrl: https://doi.org/10.1007/978-3-540-70575-8_3
  - title: Formalize the reduction in a proof assistant
    method: FORMAL
    note: No formalization is recorded; the note is short enough that a formal check may be feasible.
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-10-25 as a short unrefereed note. The AI attribution is the author's own statement in the abstract; DARC has not independently established how the proof was produced. No public expert assessment or formalization is recorded yet.
  checks:
    - title: Verify the many-one reduction is correct in both directions
      status: OPEN
    - title: Compare with the Turing-reduction proof of Buchfuhrer and Umans
      status: OPEN
    - title: Formalize the reduction in a proof assistant
      status: OPEN
---

arXiv:2610.34516 (v1, 2026-10-25) claims that the Minimum Equivalent Expression problem, which asks whether a propositional formula is equivalent to one with at most k variable occurrences, is Σ₂ᵖ-complete under polynomial-time many-one reductions. The abstract says this had been open since at least 1979 and that Buchfuhrer and Umans (2008) showed completeness under Turing reductions. The abstract states that the proof was discovered by GPT-Sol-6.1.
