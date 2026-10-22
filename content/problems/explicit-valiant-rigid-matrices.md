---
type: problem
slug: explicit-valiant-rigid-matrices
title: "Explicit Valiant-rigid matrices: construct N×N matrices with rigidity N^(1+δ) at rank εN"
entry: computational-complexity
status: OPEN
origin: Leslie Valiant, 1977
ratings:
  difficulty: 79.5
  applicationValue: 6.5
  leverage: 47
workMix:
  theory: 96
  engineering: 0
  compute: 4
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Alman, Liang: Low rank matrix rigidity: tight lower bounds and hardness amplification"
    url: https://arxiv.org/abs/2502.19580
  - title: "Alman: Superlogarithmic-rank matrix rigidity for the Walsh–Hadamard transform (preprint)"
    url: https://arxiv.org/abs/2608.06592
  - title: "Bhangale, Harsha, Paradise, Tal: Rigid matrices from rectangular PCPs"
    url: https://arxiv.org/abs/2005.03123
  - title: "Alman, Williams: Probabilistic rank and matrix rigidity"
    url: https://arxiv.org/abs/1611.05558
  - title: "Dvir, Liu: Fourier and circulant matrices are not rigid"
    url: https://arxiv.org/abs/1902.07334
  - title: "Alman: Kronecker products, low-depth circuits, and matrix rigidity"
    url: https://arxiv.org/abs/2102.11992
links:
  - to: log-rank-conjecture
    kind: RELATED
    note: Razborov rigidity, the strengthened notion, gives communication-complexity separations and shares matrix-rank tools with the log-rank problem.
  - to: acc0-lower-bounds-beyond-nqp
    kind: BUILDS_ON
    note: The best constructions of rigid matrices (Alman–Chen 2019, Bhangale–Harsha–Paradise–Tal 2020, in P^NP) are produced by Williams's algorithmic method, the same 'non-trivial algorithm implies lower bound' framework that gives NEXP and NQP ⊄ ACC⁰.
timeline:
  - date: 2016-11-17
    title: Walsh–Hadamard is not Valiant-rigid
    body: Alman and Williams use probabilistic rank to rule out the leading candidate.
    source: https://arxiv.org/abs/1611.05558
  - date: 2019-02-19
    title: Fourier and circulant matrices are not rigid
    body: Dvir and Liu rule out all matrices M_xy = f(x−y) over abelian groups as Valiant-rigid candidates.
    source: https://arxiv.org/abs/1902.07334
  - date: 2020-05-06
    title: Rigid matrices from rectangular PCPs
    body: Bhangale, Harsha, Paradise and Tal reach rank N^{o(1)} in FNP, improving the Alman–Chen P^NP construction; still far from rank εN.
    source: https://arxiv.org/abs/2005.03123
  - date: 2025-02-26
    title: Tight low-rank rigidity of Walsh–Hadamard
    body: Alman and Liang prove rank-(c log N) rigidity N²(1/2 − N^{−c'}) and a hardness-amplification statement.
    source: https://arxiv.org/abs/2502.19580
  - date: 2026-08-06
    title: Superlogarithmic-rank rigidity (preprint)
    body: "Alman: Walsh–Hadamard over F₃ keeps rank above log² N/80 after changing 1% of entries."
    source: https://arxiv.org/abs/2608.06592
explainer:
  oneLine: Name a concrete table of numbers that stays complicated however a few entries change; it would prove circuit lower bounds.
  flow:
    - Rank measures how simple a table is
    - "Rigid: changing few entries can't simplify"
    - Rigid tables imply circuit lower bounds
    - Most tables are rigid, none can be named
    - "Open: explicit rigid table"
  glossary:
    - term: matrix
      meaning: A rectangular table of numbers.
      link: https://en.wikipedia.org/wiki/Matrix_multiplication
    - term: rank
      meaning: The number of truly independent rows or columns of a table; low rank means simple structure.
      link: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
    - term: rigidity
      meaning: How many entries must be changed to make a table's rank small; high rigidity means it is robustly complex.
      link: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
    - term: explicit construction
      meaning: An object that can be produced by a definite, efficient recipe rather than only shown to exist.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: linear circuit
      meaning: A network of addition gates (with scalar multiples) that computes a matrix-vector product.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: circuit lower bound
      meaning: A proof that any circuit for a task must be at least a certain size.
      link: https://en.wikipedia.org/wiki/Circuit_complexity
    - term: NP oracle
      meaning: An imaginary helper that instantly answers any NP question.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: counting argument
      meaning: A proof that something exists because there are more possibilities than ways to fail.
      link: https://en.wikipedia.org/wiki/Circuit_complexity
    - term: Walsh–Hadamard matrix
      meaning: A square table of +1s and −1s with perfectly balanced rows, long thought to be a natural candidate for a rigid matrix.
      link: https://en.wikipedia.org/wiki/Hadamard_matrix
    - term: field
      meaning: A number system where you can add, subtract, multiply and divide (except by zero), such as the rationals or arithmetic modulo a prime.
      link: https://en.wikipedia.org/wiki/Field_(mathematics)
  readFirst:
    - title: Rank (linear algebra) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
      why: A refresher on rank for non-specialists.
    - title: Arithmetic circuit complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
      why: Context on circuits made of additions and multiplications.
    - title: Circuit complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Circuit_complexity
      why: Why lower bounds for circuits are hard to prove.
site:
  aiReviewed: true
---

For a matrix $M\in\mathbb F^{N\times N}$ and $r\le N$, the rigidity $\mathcal R_M(r)$ is the minimum number of entries of $M$ that must be changed to bring its rank down to at most $r$. Generic matrices over an infinite field have $\mathcal R_M(r)=(N-r)^2$, and a counting argument gives $\Omega((N-r)^2/\log N)$ for random matrices over a fixed finite field. Valiant (1977) showed that if a family $\{M_N\}$ satisfies $\mathcal R_{M_N}(\varepsilon N)\ge N^{1+\delta}$ for constants $\varepsilon,\delta>0$ then $M_N$ cannot be computed by linear circuits of size $O(N)$ and depth $O(\log N)$. **Problem:** give a polynomial-time constructible (explicit) family of matrices over a fixed field with $\mathcal R_{M_N}(\varepsilon N)\ge N^{1+\delta}$ for some $\varepsilon,\delta>0$.

# State of the art

The best bound for any explicit matrix over any field is Ω((N²/r) log(N/r)) (Friedman 1993; Pudlák–Rödl 1994; Shokrollahi–Spielman–Stemann 1997), which is only O(N) at rank r = εN, far below the N^{1+δ} Valiant needs. Even with an NP oracle the regime is out of reach: Alman and Chen (FOCS 2019) construct, in P^NP and for infinitely many N, matrices needing δN² changes to reach rank 2^{(log N)^{1/4−ε}}, and Bhangale, Harsha, Paradise and Tal (arXiv:2005.03123, FOCS 2020) raise the rank to 2^{log N/Ω(log log N)} = N^{o(1)}; both are Razborov-type rigidity at sub-polynomial rank, not rank εN. Many natural candidates are known not to be Valiant-rigid: Walsh–Hadamard (Alman–Williams, arXiv:1611.05558), Fourier, circulant and Toeplitz matrices (Dvir–Liu, arXiv:1902.07334), and matrices of the form f(x AND y) and Kronecker powers of fixed matrices (Alman, arXiv:2102.11992). In the low-rank regime Alman and Liang (arXiv:2502.19580, STOC 2025) proved that the rank-(c log N) rigidity of the Walsh–Hadamard matrix over any finite field is at least N²(1/2 − N^{−c'}), with a hardness-amplification result: a slightly stronger bound at rank log^{1+ε} N would make it Razborov-rigid. Alman (arXiv:2608.06592, August 2026, preprint) then showed that changing 1% of the entries of the Walsh–Hadamard matrix over F₃ cannot bring its rank down to log² N/80, the first constant-fraction rigidity bound for an explicit family at superlogarithmic rank. All of this is far from rank εN; no explicit Valiant-rigid family is known.

# Applications

Mainly theoretical: it would give the first superlinear lower bounds for log-depth linear circuits (e.g. for the FFT and Walsh–Hadamard transform), and yield separations in communication complexity (Razborov rigidity). Rigidity upper bounds have already produced faster low-depth circuits for the Hadamard transform.

# Resolution criteria

A deterministic polynomial-time algorithm that outputs, for every N, a matrix M_N over a fixed finite field (or Q) with R\_{M_N}(εN) ≥ N^{1+δ} for fixed ε, δ > 0, with a proof of the rigidity bound accepted by experts.

# Rating rationale

Difficulty 79.5: open for nearly 50 years, with every structured candidate ruled out and even P^NP constructions stuck at sub-polynomial rank; just below the log-rank conjecture (80), which has a clearer combinatorial core, and above ACC⁰ lower bounds (72). Application value 6.5: the payoff is lower bounds for linear transforms such as the FFT, with algorithmic spin-offs only from rigidity upper bounds, slightly above log-rank (5.5). Leverage 47: it would settle Valiant's route to log-depth linear-circuit lower bounds and, via Razborov rigidity and Dvir–Golovnev–Weinstein, connect to communication and data-structure lower bounds, level with log-rank (48).

# Work mix rationale

A new explicit construction with a proof is needed; computation only tests small candidates.

# Verification

A resolution is a deterministic polynomial-time construction of matrices M_N with rigidity at least N^(1+delta) at rank eps\*N, plus a proof. Rigidity of a given large matrix is hard to certify by computation, and Mathlib has no rigidity theory, so algebraic-complexity experts review the proof.

# Plain explanation

A table of numbers (a matrix) has a rank, a measure of how simple it is: a rank-one table is built from a single pattern, a high-rank one from many independent patterns. A table is called rigid if you must change a great many of its entries to bring its rank down to something small. Rigid tables are tables whose complexity is robust: simplifying them requires wrecking them.

Why care? In 1977 Leslie Valiant showed that if you could exhibit tables that are rigid enough, then multiplying by them cannot be done by a certain kind of fast, shallow network of additions. That would be a rare real lower bound, a proof that a natural computing task provably needs lots of work.

A simple counting argument shows that almost all tables are extremely rigid. So rigid tables are everywhere, but nobody can point to one. We want an explicit one, a concrete recipe we can write down and check.

The best known explicit tables are rigid only by a modest amount, far below what Valiant's argument needs. Even using a magic helper that answers yes/no questions about hard puzzles, the best results only handle quite low ranks.

This is the problem of finding a needle where the haystack is made entirely of needles. It is typical of the field: proofs that complex objects exist are easy, while naming one is hard.

# Student explanation

**Definition.** For a matrix $M\in\mathbb F^{N\times N}$ and $r\le N$, the **rigidity** $\mathcal R_M(r)$ is the minimum number of entries of $M$ that must be changed to bring its rank down to at most $r$. Generic matrices over an infinite field have $\mathcal R_M(r)=(N-r)^2$, and a counting argument gives $\Omega((N-r)^2/\log N)$ for random matrices over a fixed finite field. So rigid matrices abound.

**Valiant's theorem** (1977): if a family $\{M_N\}$ satisfies $\mathcal R_{M_N}(\varepsilon N)\ge N^{1+\delta}$ for constants $\varepsilon,\delta>0$, then the linear map $x\mapsto M_Nx$ cannot be computed by linear circuits of size $O(N)$ and depth $O(\log N)$.

**The problem.** Construct explicit matrices (meaning a polynomial-time algorithm outputs $M_N$, or even entries computable quickly) with rigidity $N^{1+\delta}$ at rank $\varepsilon N$.

**State of the art.** The best bound for any explicit matrix over any field is $\Omega((N^2/r)\log(N/r))$ (Friedman 1993; Pudlák and Rödl 1994; Shokrollahi, Spielman and Stemann 1997). At rank $r=\varepsilon N$ this is only $O(N)$, far below the $N^{1+\delta}$ that Valiant needs. Even with an NP oracle the regime is out of reach: Alman and Chen (2019) construct, in $\mathsf{P}^{\mathsf{NP}}$, matrices needing $\delta N^2$ changes to reach rank $2^{(\log N)^{1/4-\varepsilon}}$, and Bhangale, Harsha, Paradise and Tal (2020) raise the rank to $N^{o(1)}$. Both are about sub-polynomial rank, not rank $\varepsilon N$.

**Why it is hard.** Rigidity is a worst-case-over-modifications property, and proving it for a specific matrix requires showing that no sparse change reduces rank. Known techniques give only weak bounds for explicit matrices. Even the Walsh–Hadamard matrix, a natural candidate, has been shown rigid only at very low rank (a 2026 preprint shows that changing 1% of its entries over a three-element field cannot bring its rank down to about $\log^2 N/80$), far from rank $\varepsilon N$.

**Context.** This is one of the few problems where a concrete combinatorial construction would yield a famous complexity-theoretic lower bound. It is related to constructing hard functions, to circuit lower bounds such as ACC0, and to the log-rank conjecture, through shared themes of low-rank structure.

**Payoff.** Mostly theoretical: a first super-linear lower bound for log-depth linear circuits.
