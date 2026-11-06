---
type: claim
slug: dreier-mahlmann-torunczyk-fo-model-checking-2026
title: FO model checking is fixed-parameter tractable on every monadically dependent graph class (preprint)
problem: fo-model-checking-monadically-dependent
kind: ALGORITHM
claimedBy: Jan Dreier, Nikolas Mählmann, Szymon Toruńczyk (arXiv preprint)
claimedAt: 2026-11-05
sources:
  - title: Dreier, Mählmann, Toruńczyk, First-Order Model Checking on Monadically Dependent Graph Classes (arXiv preprint)
    url: https://arxiv.org/abs/2611.08143
  - title: Dreier, Mählmann, Toruńczyk, Flip-Breakability (arXiv:2403.15201), hardness half and statement of the conjecture
    url: https://arxiv.org/abs/2403.15201
  - title: Grohe, Kreutzer, Siebertz, Deciding first-order properties of nowhere dense graphs (arXiv:1311.3899)
    url: https://arxiv.org/abs/1311.3899
  - title: Bonnet, Kim, Thomassé, Watrigant, Twin-width I (arXiv:2004.14789)
    url: https://arxiv.org/abs/2004.14789
checks:
  - title: Referee the main theorem and its proof
    method: REVIEW
    note: "Expert review of the algorithm and its correctness: the bound of $|U|^{O(1)}$ types of fixed quantifier rank over a vertex set, and how the construction-sequence computation from the authors' companion work feeds the model-checking step."
    sourceUrl: https://arxiv.org/abs/2611.08143
  - title: Check the running time and uniformity
    method: BOUNDS
    note: Confirm the claimed $O(n^{3+\varepsilon})$ bound, that the algorithm depends on the class only through constants, and which notion of fixed-parameter tractability (uniform versus strongly uniform) the theorem proves.
    sourceUrl: https://arxiv.org/abs/2611.08143
  - title: Check consistency with known cases and with the hardness theorem
    method: CROSS_CHECK
    note: The result must agree with FPT on nowhere dense classes (arXiv:1311.3899), monadically stable classes (arXiv:2311.18740) and bounded twin-width with a given sequence (arXiv:2004.14789), and combine with arXiv:2403.15201 to give the claimed characterization of hereditary classes.
    sourceUrl: https://arxiv.org/abs/2403.15201
  - title: Refereeing
    method: REFEREE
    note: Unrefereed preprint; no journal or conference submission is recorded.
raw:
  summary: "arXiv:2611.08143 (v1, 2026-11-05, cs.LO) claims that first-order model checking is fixed-parameter tractable on every monadically dependent graph class, which includes nowhere dense classes and classes of bounded twin-width. The stated running time is $O(n^{3+\\varepsilon})$ for each fixed class, sentence and $\\varepsilon>0$, with no decomposition given as input. Combined with the authors' 2024 result that model checking is AW[*]-hard on every hereditary class that is not monadically dependent, the paper says this completely characterizes the hereditary graph classes with fixed-parameter tractable first-order model checking."
site:
  status: UNDER_REVIEW
  statusNote: Posted 2026-11-05 as an unrefereed preprint; no journal or conference submission, expert assessment or independent check is recorded. DARC read the abstract page and the introduction of the HTML version but not the proofs. The hardness half cited as known is a separate 2024 paper (arXiv:2403.15201) by the same authors, also not audited by DARC. The 2016 Warwick workshop origin was checked against the workshop's open-problem list, which records Toruńczyk's hardness direction; that the converse was posed there is taken from the 2024 paper.
  checks:
    - title: Referee the main theorem and its proof
      status: OPEN
    - title: Check the running time and uniformity
      status: OPEN
    - title: Check consistency with known cases and with the hardness theorem
      status: OPEN
    - title: Refereeing
      status: OPEN
---
