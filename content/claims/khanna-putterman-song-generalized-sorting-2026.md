---
type: claim
slug: khanna-putterman-song-generalized-sorting-2026
title: Generalized sorting with O(n log^4 n) expected comparisons (preprint, AI-assisted)
problem: generalized-sorting-near-linear
kind: ALGORITHM
claimedBy: Sanjeev Khanna, Aaron Putterman, Junkai Song
claimedAt: 2026-11-05
sources:
  - title: Khanna, Putterman, Song, A Near-Optimal Generalized Sorting Algorithm (arXiv preprint)
    url: https://arxiv.org/abs/2611.08397
  - title: Preprint, HTML version
    url: https://arxiv.org/html/2611.08397
  - title: Behnezhad, Ferrante, Generalized Sorting via Four-Cycles (arXiv preprint)
    url: https://arxiv.org/abs/2611.06745
  - title: Lu, Ren, Sun, Zhang, Generalized Sorting with Predictions (arXiv)
    url: https://arxiv.org/abs/2011.00172
checks:
  - title: Expert review of the prediction construction and error isolation
    method: REVIEW
    note: Specialists in query complexity and sorting variants should check the prediction-construction lemma (O(n) expected errors per phase using O(n log^3 n) queries), the bipartite bounded-degree reduction and the error-isolation passes that cut the errors by a constant factor each pass.
    sourceUrl: https://arxiv.org/html/2611.08397
  - title: Check the use of prediction repair
    method: CROSS_CHECK
    note: Confirm that the repair step of Lu, Ren, Sun and Zhang (O(n log n + w) queries for w errors, needing the Hamiltonian path) applies exactly as used and that the total is O(n log^4 n) in expectation.
    sourceUrl: https://arxiv.org/abs/2011.00172
  - title: Consistency with the Behnezhad-Ferrante four-cycle algorithm
    method: CROSS_CHECK
    note: The two preprints appeared a day apart; the stronger bound must not contradict the first, and the relation between their ideas should be described by the authors or reviewers.
    sourceUrl: https://arxiv.org/abs/2611.06745
  - title: Implement the algorithm and count comparisons on adversarial graphs
    method: REPRODUCE
    note: No implementation is recorded. A simulation on random and structured graphs (for example dense graphs with the sorted Hamiltonian path hidden among decoy edges) would test the query counts empirically, though it cannot prove the worst-case bound.
  - title: Refereed publication or independent write-up
    method: REFEREE
    note: No conference or journal acceptance is recorded; the status stays UNDER_REVIEW until specialists confirm or find a gap.
site:
  status: UNDER_REVIEW
  statusNote: "Submitted 5 November 2026 (v1, the only version seen on 6 November 2026), three authors, not refereed. The authors state that ChatGPT 6-Astra was essential to the improved bounds and describe the sequence: ChatGPT found an Õ(n^(4/3)) algorithm, the authors improved it to Õ(n^(6/5)), and the models, given that algorithm, then found Õ(n^(10/9)), Õ(n^(17/16)), Õ(n^(19/18)) and finally the near-linear algorithm. They also state that the algorithm does not run in polynomial time. A separate preprint by Behnezhad and Ferrante (arXiv:2611.06745, 4 November 2026) claims a weaker Õ(n^(4/3)) bound. DARC has not checked the proof, and no independent verification or expert review is recorded. The description of the method comes from a summarizing fetch of the paper's HTML version."
  checks:
    - title: Expert review of the prediction construction and error isolation
      status: OPEN
    - title: Check the use of prediction repair
      status: OPEN
    - title: Consistency with the Behnezhad-Ferrante four-cycle algorithm
      status: OPEN
    - title: Implement the algorithm and count comparisons on adversarial graphs
      status: OPEN
    - title: Refereed publication or independent write-up
      status: OPEN
---

arXiv:2611.08397 claims a randomized algorithm that sorts $n$ items with a hidden total order using $O(n\log^4 n)$ comparisons in expectation, when comparisons are allowed only along the edges of a given graph that contains the Hamiltonian path of the order. The best accepted bound is $\tilde O(n^{3/2})$ (Huang, Kannan and Khanna, FOCS 2011), so the preprint would answer negatively their question of whether $n^{1+\Omega(1)}$ comparisons are necessary. The method builds a prediction of all edge orientations with $O(n\log n)$ expected errors by repeated edge sampling and error isolation, then repairs it with the prediction-repair algorithm of Lu, Ren, Sun and Zhang.
