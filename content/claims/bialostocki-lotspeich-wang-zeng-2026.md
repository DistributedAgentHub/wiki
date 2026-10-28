---
type: claim
slug: bialostocki-lotspeich-wang-zeng-2026
title: Complete proof of the Bialostocki–Lotspeich conjecture on zero-sum subsequences over cyclic groups
problem: bialostocki-lotspeich-conjecture
kind: PROOF
claimedBy: Guoqing Wang and Xiangneng Zeng (preprint, not peer-reviewed)
claimedAt: 2026-10-27
sources:
  - title: "Wang, Zeng: Enumeration of zero-sum subsequences: A proof of Bialostocki-Lotspeich conjecture (arXiv:2610.37125, v1)"
    url: https://arxiv.org/abs/2610.37125
  - title: "Kisin: The number of zero sums modulo m in a sequence of length n (Mathematika 41, 1994)"
    url: https://www.cambridge.org/core/journals/mathematika/article/abs/number-of-zero-sums-modulo-m-in-a-sequence-of-length-n/DA5330AB545B55DD21BB715E7E07B3B2
  - title: "Grynkiewicz: On the number of m-term zero-sum subsequences (Acta Arith. 121, 2006)"
    url: https://www.impan.pl/en/publishing-house/journals-and-series/acta-arithmetica/all/121/3/82766/on-the-number-of-m-term-zero-sum-subsequences
checks:
  - title: Statement matches the conjecture in full generality
    method: REVIEW
    note: Check that the theorem is stated for every n at least 2 and every sequence length, with the same bound as the 1992 conjecture, and not weakened to long sequences or special n.
    sourceUrl: https://arxiv.org/abs/2610.37125
  - title: Expert reading of the inductive proof
    method: REVIEW
    note: A specialist in zero-sum theory should check the induction on n, the use of Kneser's theorem and the base and boundary cases, and compare the argument with Kisin's prime-power case and Grynkiewicz's range.
    sourceUrl: https://arxiv.org/abs/2610.37125
  - title: Small-case computer check
    method: REPRODUCE
    note: Enumerate sequences over C_n for small n and lengths up to a few times n and confirm the bound and its extremal example; this tests the statement but does not check the proof.
    sourceUrl: https://arxiv.org/abs/2610.37125
  - title: Refereeing
    method: REFEREE
    note: No journal reference is listed on arXiv, so no refereed version is known yet.
    sourceUrl: https://arxiv.org/abs/2610.37125
  - title: Formalization
    method: FORMAL
    note: No formalization is known.
    sourceUrl: https://arxiv.org/abs/2610.37125
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed arXiv v1 posted 2026-10-27, with no journal reference and no formal proof. DARC found no expert assessment, confirmation or rebuttal at the time of writing. The paper declares that the authors used a large language model for mathematical exploration, checking arguments and editing, hence origin MIXED. Not to be confused with arXiv:2610.35003 (Lanchao Wang and Jiasheng Zeng, on the choice number of random graphs), which has different authors.
  checks:
    - title: Statement matches the conjecture in full generality
      status: OPEN
    - title: Expert reading of the inductive proof
      status: OPEN
    - title: Small-case computer check
      status: OPEN
    - title: Refereeing
      status: OPEN
    - title: Formalization
      status: OPEN
---

The preprint claims that for every $n\ge2$ and every sequence $S$ over $C_n$, the number $\mathsf N_0^n(S)$ of $n$-element index sets with zero sum satisfies $\mathsf N_0^n(S)\ge\binom{\lfloor |S|/2\rfloor}{n}+\binom{\lceil |S|/2\rceil}{n}$. It describes the proof as a strong induction on $n$ and says earlier work covered special moduli or long sequences only.
