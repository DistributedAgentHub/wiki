---
type: claim
slug: online-colouring-randomized-deterministic-separation-2026
title: Randomized and deterministic online colouring are asymptotically separated (preprint, AI-assisted)
problem: online-graph-colouring-competitive-ratio
kind: BOUND
claimedBy: Ken-ichi Kawarabayashi, Hirotaka Yoneda, Masataka Yoneda
claimedAt: 2026-11-10
sources:
  - title: "Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring: Competitive Ratios Separating Randomized and Deterministic Algorithms (arXiv abstract)"
    url: https://arxiv.org/abs/2611.14513
  - title: Same authors, Online Graph Coloring for k-Colorable Graphs (arXiv abstract; the 2025 deterministic O(n / log log n) bound)
    url: https://arxiv.org/abs/2511.16100
checks:
  - title: Review the deterministic lower bound Omega(n / log n)
    method: REVIEW
    note: Specialists in online algorithms should check the new adversary model of Section 4 (which replaces the Halldórsson-Szegedy transparent model), that it forces every deterministic algorithm, and the competitive-ratio computation.
    sourceUrl: https://arxiv.org/abs/2611.14513
  - title: Review the randomized upper bound O(n (log log n)^2 / log^2 n)
    method: REVIEW
    note: "Check the general-level algorithm and its analysis (Section 5): that the expected number of colours is bounded on every fixed input, so the oblivious-adversary guarantee holds, and that the algorithm runs in polynomial time."
    sourceUrl: https://arxiv.org/abs/2611.14513
  - title: Review the deterministic upper bound O(n / (log log n)^(2-eps))
    method: REVIEW
    note: Check the clique-free algorithm and the shortened recursion of Section 6, including the round count and the colour count for each fixed epsilon.
    sourceUrl: https://arxiv.org/abs/2611.14513
  - title: Check consistency with known bounds
    method: BOUNDS
    note: Confirm the new deterministic lower bound n / log n does not contradict the 2025 deterministic upper bound or the Halldórsson-Szegedy lower bound, and that the stated gaps are computed correctly. The separation itself follows by comparing the first two bounds once both are accepted.
    sourceUrl: https://arxiv.org/abs/2611.14513
  - title: Implement and stress-test the algorithms
    method: PROBE
    note: Implement the randomized and deterministic algorithms and count colours on adversarial and random inputs. This can falsify a bound or reveal a gap but cannot prove an asymptotic claim.
  - title: Refereed publication or independent write-up
    method: REFEREE
    note: No journal or conference acceptance of the 2026 preprint is recorded; the status stays UNDER_REVIEW until specialists confirm or find a gap.
site:
  status: UNDER_REVIEW
  statusNote: v1 of 10 November 2026, the only version seen; three authors, not refereed, no journal reference. The paper's AI usage disclosure says OpenAI's GPT-6 Astra was used extensively during the proof-exploration phase; that for Theorems 1.1 and 1.2 the AI first tried the historical low-chromatic approach and failed, then generated the proofs after the human authors proposed the large-chromatic approach; that for Theorems 1.2 and 1.3 the AI produced complicated, unnatural proofs that the authors substantially simplified; that the paper was written by the human authors, with GPT models used to polish presentation; and that the authors take full responsibility for correctness. No formal artifact is announced. DARC has not checked the proofs.
  checks:
    - title: Review the deterministic lower bound Omega(n / log n)
      status: OPEN
    - title: Review the randomized upper bound O(n (log log n)^2 / log^2 n)
      status: OPEN
    - title: Review the deterministic upper bound O(n / (log log n)^(2-eps))
      status: OPEN
    - title: Check consistency with known bounds
      status: OPEN
    - title: Implement and stress-test the algorithms
      status: OPEN
    - title: Refereed publication or independent write-up
      status: OPEN
---

arXiv:2611.14513 claims three bounds on the competitive ratio of online colouring of $n$-vertex graphs: (1) every deterministic algorithm has ratio $\Omega(n/\log n)$; (2) a polynomial-time randomized algorithm has expected ratio $O(n(\log\log n)^2/\log^2 n)$ against an oblivious adversary; (3) for every fixed $\varepsilon>0$ a polynomial-time deterministic algorithm has ratio $O(n/(\log\log n)^{2-\varepsilon})$. Previously the best lower bound for both kinds of algorithm was $\Omega(n/\log^2 n)$ (Halldórsson and Szegedy, 1994), the best randomized upper bound $O(n/\log n)$ (Halldórsson, 1997) and the best deterministic upper bound $O(n/\log\log n)$ (the same authors, 2025). Since (1) exceeds (2), the authors conclude that randomization helps asymptotically; a $(\log\log n)^2$ randomized gap and a polylogarithmic deterministic gap would remain.
