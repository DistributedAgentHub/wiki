---
type: claim
slug: erdos-similarity-in-the-large-yip-2026
title: Every unbounded set of reals is avoided by a closed set filling at least 1−ε of every unit interval (Yip, preprint; the unbounded 'in the large' variant, not the classical Erdős conjecture)
problem: erdos-similarity-problem
kind: PROOF
claimedBy: Chi Hoi Yip (arXiv:2611.14056, preprint)
claimedAt: 2026-11-10
sources:
  - title: "Yip: A resolution of the Erdős similarity problem in the large (arXiv:2611.14056, preprint)"
    url: https://arxiv.org/abs/2611.14056
  - title: "Kolountzakis, Papageorgiou: Large sets containing no copies of a given infinite sequence (arXiv:2208.02637)"
    url: https://arxiv.org/abs/2208.02637
  - title: "Gao, Mooroogen, Yip: On an Erdős similarity problem in the large (arXiv:2311.06727)"
    url: https://arxiv.org/abs/2311.06727
  - title: "Iosevich et al.: The Erdős similarity conjecture and Rajchman measures (arXiv:2609.04456, preprint)"
    url: https://arxiv.org/abs/2609.04456
  - title: "Jung, Lai, Mooroogen: Fifty years of the Erdős similarity conjecture (arXiv:2412.11062)"
    url: https://arxiv.org/abs/2412.11062
checks:
  - title: Probabilistic construction (Lemma 2.1 and Theorem 1.2)
    method: REVIEW
    note: "Check the random-shift construction of the bounded open set U (the sets U_0 and U_i, equations (5)–(12) of the preprint): the union-bound and Fubini estimate |U_0|<δ/4, the density bound on each U_i, and the verification that every affine copy with c≤λ≤C, |t|≤T meets U. Then check the inductive assembly over scales s, including that the sets U_s are separated by more than 2 so the density bound holds, and the 'infinitely many points outside S' conclusion. No independent check was found."
    sourceUrl: https://arxiv.org/abs/2611.14056
  - title: Consistency with the earlier partial answers
    method: CROSS_CHECK
    note: "The theorem should contain as special cases the earlier results on unbounded sequences: Kolountzakis–Papageorgiou (subexponential growth, separated sequences), Gao–Mooroogen–Yip (certain sequences of arbitrarily rapid growth, via metric number theory) and Iosevich et al. (sets supporting Rajchman measures). It should also answer the exponential-growth case {2^n}, which the December 2024 survey lists as open. Confirm no case contradicts a published lower bound."
    sourceUrl: https://arxiv.org/abs/2311.06727
  - title: "Scope: unbounded variant versus the classical conjecture"
    method: REVIEW
    note: Confirm that the theorem concerns unbounded A and (1−ε)-large sets in the sense |S∩I|≥1−ε for every unit interval, so that it does not give a positive-measure set avoiding a bounded sequence such as {2^-n}. The survey of Jung, Lai and Mooroogen states no precise equivalence between the two problems is known; Section 3 of the preprint shows the density rate cannot be prescribed independently of A.
    sourceUrl: https://arxiv.org/abs/2412.11062
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference and no comments beyond '6 pages'."
    sourceUrl: https://arxiv.org/abs/2611.14056
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed arXiv v1 (6 pages, submitted 10 November 2026, math.CA); no journal reference and no expert assessment was found. The argument is short and elementary in its tools (a union bound and Fubini over random shifts), which makes checking feasible, but DARC has not re-derived it. The acknowledgments thank several mathematicians for discussions and state that ChatGPT was used to assist with the exposition of the manuscript; they do not describe AI as contributing to the mathematics, so the origin is listed as human, with this disclosure recorded here. The paper's own phrase 'resolves the Erdős similarity problem in the large' refers to Kolountzakis and Papageorgiou's Question 1; earlier partial answers for linear, subexponential and some rapidly growing sequences (Bradford–Kohut–Mooroogen, Kolountzakis–Papageorgiou, Gao–Mooroogen–Yip, Iosevich et al.) are cited in the introduction.
  checks:
    - title: Probabilistic construction (Lemma 2.1 and Theorem 1.2)
      status: OPEN
    - title: Consistency with the earlier partial answers
      status: OPEN
    - title: "Scope: unbounded variant versus the classical conjecture"
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint, titled as a resolution of the Erdős similarity problem 'in the large', reports the following. For every unbounded set $A\subset\mathbb R$, every $0<\varepsilon<1$ and every $R_0>0$ there is a closed, symmetric set $S$ with $|S\cap I|\ge1-\varepsilon$ for every unit interval $I$, containing $[-R_0,R_0]$, with $|S\cap[x,x+1]|\to1$ as $|x|\to\infty$, such that $(\lambda A+t)\setminus S$ is infinite for all $\lambda\ne0$, $t\in\mathbb R$. This answers negatively a question of Kolountzakis and Papageorgiou (whether some increasing unbounded sequence is contained, up to an affine copy, in every $(1-\varepsilon)$-large set), for all unbounded sets at once. The proof is probabilistic and takes about three pages; a short section shows the rate of convergence in the density limit cannot in general be prescribed independently of $A$. **Scope:** this is the unbounded variant. It is not the classical Erdős similarity conjecture (positive-measure sets, infinite sets that may be bounded, such as $\{2^{-n}\}$), which the preprint says remains open, and the survey literature notes no known equivalence between the two.
