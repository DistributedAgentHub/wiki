---
type: problem
slug: log-rank-conjecture
title: "Log-rank conjecture: D(f) ≤ polylog(rank) for Boolean matrices (best known O(√rank))"
entry: communication-complexity
status: OPEN
origin: Lovász and Saks, 1988
ratings:
  difficulty: 80
  applicationValue: 5.5
  leverage: 48
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Sudakov, Tomon: Matrix discrepancy and the log-rank conjecture"
    url: https://arxiv.org/abs/2311.18524
  - title: "Lovett: Communication is bounded by root of rank"
    url: https://arxiv.org/abs/1306.1877
  - title: "Göös, Pitassi, Watson: Deterministic Communication vs. Partition Number (SIAM J. Comput. 2018)"
    url: https://doi.org/10.1137/16M1059369
  - title: "Hambardzumyan, Lovett, Shirley: The Log-Rank Conjecture: New Equivalent Formulations (CCC 2026)"
    url: https://arxiv.org/abs/2510.02583
  - title: Alphabet-Preserving Lifting for the Log-Rank Conjecture (preprint, 2026)
    url: https://arxiv.org/abs/2608.01812
timeline:
  - date: 2013-06-08
    title: Root-of-rank bound
    body: Lovett proved D(f) = O(√r log r).
    source: https://arxiv.org/abs/1306.1877
  - date: 2015-10-17
    title: Near-quadratic separation
    body: Göös, Pitassi and Watson gave explicit functions with D(f) = Ω̃(log² rank) (FOCS 2015; SIAM J. Comput. 2018; day approximate).
    source: https://doi.org/10.1137/16M1059369
  - date: 2023-11-30
    title: Logarithmic factor removed
    body: Sudakov and Tomon proved D(f) = O(√rank) via matrix discrepancy.
    source: https://arxiv.org/abs/2311.18524
explainer:
  oneLine: If a table of 0s and 1s has simple structure, can two people always compute it with a short conversation?
  flow:
    - Two people compute from split data
    - Their task is a 0/1 table
    - Simple table means low rank
    - Rank gives a lower bound on bits
    - "Conjecture: that is nearly the truth"
  glossary:
    - term: communication complexity
      meaning: The number of bits parties must exchange to compute a function of their combined inputs.
      link: /research/communication-complexity
    - term: communication matrix
      meaning: A table listing the correct answer for every pair of inputs the two parties could hold.
      link: https://en.wikipedia.org/wiki/Communication_complexity
    - term: rank (of a matrix)
      meaning: The number of truly independent rows in a table of numbers; low rank means simple structure.
      link: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
    - term: monochromatic rectangle
      meaning: A block of the table, made of some rows and some columns, in which every entry is the same.
      link: https://en.wikipedia.org/wiki/Communication_complexity
    - term: deterministic protocol
      meaning: A conversation scheme with fixed rules and no coin flips.
      link: https://en.wikipedia.org/wiki/Communication_complexity
    - term: polylogarithmic
      meaning: A power of the logarithm of the size; it grows extremely slowly.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: discrepancy
      meaning: A measure of how evenly a block of the table is split between 0s and 1s.
      link: https://en.wikipedia.org/wiki/Communication_complexity
    - term: log-rank conjecture
      meaning: The statement that communication cost is at most a power of the logarithm of the table's rank.
      link: https://en.wikipedia.org/wiki/Log-rank_conjecture
    - term: lower bound
      meaning: A proof that no method can do a task using fewer than a given amount of some resource, here bits of communication.
      link: https://en.wikipedia.org/wiki/Communication_complexity
  readFirst:
    - title: Log-rank conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Log-rank_conjecture
      why: A compact statement with a summary of known bounds.
    - title: Communication complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Communication_complexity
      why: The model, with examples and the rectangle picture.
    - title: Rank (linear algebra) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Rank_(linear_algebra)
      why: A refresher on rank for readers who need it.
site:
  aiReviewed: true
---

For a Boolean function $f:X\times Y\to\{0,1\}$ let $M_f$ be its communication matrix and $D(f)$ its deterministic two-party communication complexity. The **log-rank conjecture** asserts that $D(f)\le \mathrm{polylog}(\mathrm{rank}_{\mathbb R}M_f)$, that is, $D(f)=O(\log^{c}\mathrm{rank}\,M_f)$ for a universal constant $c$. The trivial bound is $D(f)\ge\log_2\mathrm{rank}\,M_f$. Is there any $c$, or is there a family with $D(f)=\mathrm{rank}^{\Omega(1)}$? The relation is equivalent to a statement about partitioning low-rank 0/1 matrices into few monochromatic rectangles.

# State of the art

**Upper bounds.** The trivial bound is $D(f)\le\mathrm{rank}$. Lovett (arXiv:1306.1877; STOC 2014, J. ACM 2016) proved $D(f)=O(\sqrt{r}\log r)$ via discrepancy, and Sudakov and Tomon (arXiv:2311.18524, 2023; published 2025) removed the logarithm, $D(f)=O(\sqrt{\mathrm{rank}})$, by showing that every rank-$r$ Boolean matrix contains a monochromatic rectangle of relative size $2^{-O(\sqrt r)}$ in each dimension. This is still the best known bound as of October 2026.

**Lower bounds.** Kushilevitz's construction (reported by Nisan and Wigderson, 1995) gives $D(f)\ge(\log\mathrm{rank})^{\log_3 6}$. Göös, Pitassi and Watson (FOCS 2015; SIAM J. Comput. 2018) constructed explicit functions with $D(f)=\Omega((\log r)^2/(\log\log r)^2)$, and a 2026 preprint (arXiv:2608.01812, unrefereed) improves this to $\Omega((\log r)^2/\log\log r)$. The gap between $\sqrt r$ and $\log^2 r$ is exponential.

**Reformulations.** Hambardzumyan, Lovett and Shirley (arXiv:2510.02583, CCC 2026) show that the signed rectangle rank of a Boolean matrix is $O(r\log r)$, so the conjecture is equivalent to asking whether signed rectangle decompositions can be made positive with quasi-polynomial blow-up; they also prove its equivalence with a Lovett/Singer–Sudan conjecture on cross-intersecting set systems. No counterexample is known or expected.

# Applications

A proof would show that low-rank structure alone makes communication cheap, with consequences for data-structure lower bounds (via cell-probe and communication reductions), property testing, and the relation between rank and monochromatic-rectangle partitions. It is mostly of theoretical value.

# Resolution criteria

A proof that $D(f)\le(\log\mathrm{rank}\,M_f)^{O(1)}$ for all Boolean $f$ (or any bound $D(f)\le \mathrm{rank}^{1/2-\Omega(1)}$ as a partial result), or an explicit family with $D(f)\ge \mathrm{rank}(M_f)^{\Omega(1)}$.

# Rating rationale

Difficulty 80: a famous 1988 conjecture whose upper bound has moved only from rank to √rank in 35 years, with an exponential gap to the best lower bound; it sits below ω (82) and quantum PCP (83) because it is a single combinatorial statement with active quantitative progress and new equivalent forms. Application value 5.5: minimal, slightly above Aaronson–Ambainis (5) through data-structure lower bounds. Leverage 48: it ties together communication complexity, rank and rectangle partitions and has a moderate conditional literature.

# Work mix rationale

All work is combinatorial and linear-algebraic proof; small computer searches have not suggested counterexamples.

# Verification

The statement is D(f) <= polylog(rank) for Boolean matrices, or an explicit family with D(f) >= rank^Omega(1). Communication complexity is not in Mathlib, so there is no formal statement to check against. Experts review the proof or the construction. A candidate counterexample family can be partly screened by computer for small sizes, which does not settle it.

# Plain explanation

Alice and Bob each hold a private piece of data and want to compute something about both pieces by exchanging as few bits as possible. We can write the whole task as a big table of 0s and 1s: one row for each possible input of Alice, one column for each of Bob. The entry says what the right answer is.

A number called the rank measures how simple the table is: roughly, how many basic rows you need so that every row can be built by adding and scaling them. If the rank is small, the table is built from a few ingredients. Mathematicians showed that the number of bits needed is at least about the logarithm of the rank. The log-rank conjecture says this is nearly the truth: a conversation of length about a power of the logarithm of the rank should always be enough.

The best proven result is much weaker. It says that about the square root of the rank bits always suffice. The best examples in the other direction need about the square of the logarithm of the rank. The gap between these two is enormous, and the conjecture has been open since 1988.

Why is it hard? You would need to find, inside any simple table, a large block that is all 0s or all 1s. We only know how to do that weakly.

A solution would link matrix structure with communication, and would tidy many results in complexity theory.

# Student explanation

**Setting.** For a Boolean function $f:X\times Y\to\{0,1\}$, let $M_f$ be its communication matrix, with entry $f(x,y)$ at row $x$ and column $y$. Let $D(f)$ be the deterministic two-party communication complexity: the fewest bits Alice and Bob must exchange in the worst case to compute $f$.

**The rank bound.** The matrix has a real rank; the trivial lower bound is $D(f)\ge\log_2\mathrm{rank}\,M_f$. The reason: a protocol with $c$ bits cuts the matrix into at most $2^c$ rectangles, each with constant value; each such rectangle contributes rank at most 1; so rank is at most $2^c$.

**The conjecture** (Lovász and Saks, 1988). $D(f)\le\mathrm{polylog}(\mathrm{rank}\,M_f)$, that is, $D(f)=O(\log^c\mathrm{rank})$ for some universal constant $c$. Is there such a $c$, or is there a family with $D(f)=\mathrm{rank}^{\Omega(1)}$? The relation is equivalent to a statement about partitioning low-rank 0/1 matrices into few monochromatic rectangles.

**Upper bounds.** The trivial bound is $D(f)\le\mathrm{rank}$. Lovett (2014) proved $D(f)=O(\sqrt r\log r)$ for rank $r$, using discrepancy. Sudakov and Tomon (2023, published 2025) removed the logarithm, giving $D(f)=O(\sqrt r)$, by showing that every rank-$r$ Boolean matrix contains a monochromatic rectangle of relative size $2^{-O(\sqrt r)}$ in each dimension. This is still the best known as of October 2026.

**Lower bounds (examples).** Kushilevitz's construction (reported by Nisan and Wigderson, 1995) gives $D(f)\ge(\log r)^{\log_3 6}\approx(\log r)^{1.63}$. Göös, Pitassi and Watson later gave a family with $D(f)=\tilde\Omega(\log^2 r)$, the best known separation. So the truth lies between roughly $\log^2 r$ and $\sqrt r$.

**Why it is hard.** Proving it needs a way to find large monochromatic rectangles in any low-rank matrix, and current methods (discrepancy, combinatorial structure) lose a polynomial factor. The problem is also connected to other open problems about matrices and circuits, for example matrix rigidity.

**Payoff.** Resolving it would settle a basic question about how algebraic simplicity relates to communication, and would clarify related quantum and randomised variants.
