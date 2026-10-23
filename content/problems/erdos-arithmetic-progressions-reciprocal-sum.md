---
type: problem
slug: erdos-arithmetic-progressions-reciprocal-sum
title: "Erdős's conjecture on arithmetic progressions: divergent reciprocal sums contain progressions of every length"
entry: extremal-combinatorics
status: OPEN
origin: Paul Erdős (with Turán, 1936; stated in this form by Erdős)
prize: Erdős offered $5,000
ratings:
  difficulty: 76
  applicationValue: 6
  leverage: 55
verification:
  route: LEAN
sources:
  - title: "Kelley, Meka: Strong bounds for 3-progressions (arXiv:2302.05537)"
    url: https://arxiv.org/abs/2302.05537
  - title: "Bloom, Sisask: The Kelley–Meka bounds for sets free of three-term arithmetic progressions (arXiv:2302.07211)"
    url: https://arxiv.org/abs/2302.07211
  - title: "Leng, Sah, Sawhney: Improved bounds for Szemerédi's theorem (arXiv:2402.17995)"
    url: https://arxiv.org/abs/2402.17995
site:
  aiReviewed: true
---

**Conjecture:** if $A\subseteq\mathbb N$ satisfies $\sum_{a\in A}1/a=\infty$, then $A$ contains arithmetic progressions of every finite length.

Writing $r_k(N)$ for the size of the largest subset of $\{1,\dots,N\}$ with no $k$-term progression, it suffices to prove $r_k(N)\le N/(\log N)^{1+c}$ for some $c>0$ and every $k$.

# State of the art

The case $k=3$ is settled: Bloom and Sisask broke the logarithmic barrier in 2020, and the Kelley–Meka bound $r_3(N)\le N\exp(-c(\log N)^{1/12})$ (arXiv:2302.05537), sharpened by Bloom and Sisask (arXiv:2302.07211), is far stronger than needed. For $k\ge 4$ the best general bounds, $r_k(N)\le N\exp(-(\log\log N)^{c_k})$ (Leng, Sah and Sawhney, arXiv:2402.17995), do not suffice. The primes, whose reciprocal sum diverges, contain arbitrarily long progressions (Green–Tao).

**Unverified claim:** openai/math family 159 (October 2026) claims quasipolynomial bounds $r_k(N)\le C_kN\exp(-c_k(\log N)^{\varepsilon_k})$ for every $k$, and hence the conjecture. OpenAI's unreviewed Lean formalization states only the qualitative conjecture. It is on the Verification board.

# Applications

None directly. Quantitative Szemerédi bounds feed into additive combinatorics, theoretical computer science (property testing, pseudorandomness) and the theory of patterns in the primes.

# Resolution criteria

A proof for all $k$ accepted by additive combinatorialists (refereed publication or broad acceptance), or a Lean proof of the full conjecture against a reviewed statement.

# Rating rationale

Needs Kelley–Meka-strength bounds for every progression length, well beyond the current (log log N)-type bounds for k ≥ 4. Quantitative Szemerédi bounds matter across additive combinatorics and pseudorandomness.

# Verification

A Lean 4 proof that every set of positive integers with divergent reciprocal sum contains k-term progressions with positive common difference for every k, checked with Comparator with checked definitions; expert review of the quantitative density bound that drives it.
