---
type: problem
slug: matrix-multiplication-3x3-tensor-rank
title: "Tensor rank of 3×3 matrix multiplication: 19 ≤ R ≤ 23, find rank 22 or raise the lower bound"
entry: fast-matrix-multiplication
status: OPEN
origin: Laderman, 1976 (rank 23); Bläser, 2003 (lower bound 19)
ratings:
  difficulty: 72
  applicationValue: 6
  leverage: 30
workMix:
  theory: 65
  engineering: 5
  compute: 30
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: Laderman, A noncommutative algorithm for multiplying 3×3 matrices using 23 multiplications (Bull. AMS 1976)
    url: https://doi.org/10.1090/S0002-9904-1976-13988-2
  - title: Bläser, On the complexity of the multiplication of matrices of small formats (J. Complexity 2003)
    url: https://doi.org/10.1016/S0885-064X(02)00007-9
  - title: Wang, Automated Lower Bounds for Bilinear Complexity over Finite Fields (arXiv preprint, 2026)
    url: https://arxiv.org/abs/2603.07280
  - title: Wang, A Lower Bound of 21 for 3×3 Matrix Multiplication over F2 (arXiv preprint, 2026)
    url: https://arxiv.org/abs/2609.06725
  - title: Tomar, The rank of 3×3 matrix multiplication over F2 is 23 (arXiv preprint, 2026)
    url: https://arxiv.org/abs/2610.11823
  - title: "The geometry of rank decompositions of matrix multiplication II: 3×3 matrices (J. Pure Appl. Algebra 2019)"
    url: https://www.sciencedirect.com/science/article/pii/S0022404918302548
links:
  - to: matrix-multiplication-exponent
    kind: RELATED
    note: The rank of the 3×3 tensor bounds ω through the exponent log_3 R(3), and its structure guides asymptotic constructions.
timeline:
  - date: 1976-01-01
    title: Rank at most 23
    body: Laderman gave a 23-multiplication algorithm for 3×3 matrices; year only.
    source: https://doi.org/10.1090/S0002-9904-1976-13988-2
  - date: 2003-02-01
    title: Rank at least 19
    body: Bläser proved the lower bound 19 over every field; month of the journal issue.
    source: https://doi.org/10.1016/S0885-064X(02)00007-9
  - date: 2026-03-07
    title: F2 lower bound 20 (preprint)
    body: Wang's automated framework gave R ≥ 20 over F2.
    source: https://arxiv.org/abs/2603.07280
  - date: 2026-09-06
    title: F2 lower bound 21 (preprint)
    body: Wang raised the F2 lower bound to 21.
    source: https://arxiv.org/abs/2609.06725
  - date: 2026-10-08
    title: Rank over F2 claimed to be 23 (preprint)
    body: Tomar submitted a preprint claiming rank 23 over F2 with Lean-checked certificates; revised on 12 October 2026.
    source: https://arxiv.org/abs/2610.11823
explainer:
  oneLine: Multiplying two 3 by 3 tables needs 27 products by the school method; 23 suffice, and 22 is unknown.
  flow:
    - "School method: 27 multiplications"
    - "Laderman 1976: 23 multiplications"
    - "Lower bound known: 19"
    - 22 would be checkable in seconds
  glossary:
    - term: matrix multiplication
      meaning: Combining two tables of numbers by multiplying rows by columns and adding.
      link: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
    - term: tensor rank
      meaning: The smallest number of simple building blocks that add up to a given three-way table of numbers.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: Strassen's algorithm
      meaning: A 1969 method that multiplies 2×2 tables with 7 multiplications instead of 8.
      link: https://en.wikipedia.org/wiki/Strassen_algorithm
    - term: Brent equations
      meaning: Equations that a set of products must satisfy to be a valid matrix multiplication scheme.
      link: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
    - term: exponent ω
      meaning: The number describing how the cost of multiplying n×n tables grows with n.
      link: /research/fast-matrix-multiplication
    - term: Lean
      meaning: A proof assistant that checks proofs line by line.
      link: /research/lean-mathlib
    - term: finite field F2
      meaning: The number system with only 0 and 1, where 1 + 1 = 0; arithmetic on single bits.
      link: https://en.wikipedia.org/wiki/GF(2)
    - term: linear combination
      meaning: A sum of quantities each multiplied by a constant, such as 2a₁₁ − a₂₃.
      link: https://en.wikipedia.org/wiki/Linear_combination
    - term: lower bound
      meaning: "A proved minimum: no algorithm can use fewer multiplications than this."
      link: https://en.wikipedia.org/wiki/Upper_and_lower_bounds
  readFirst:
    - title: Strassen algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Strassen_algorithm
      why: The 2×2 case and the idea of saving multiplications.
    - title: Tensor rank decomposition (Wikipedia)
      url: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
      why: The language used for lower bounds.
    - title: The rank of 3×3 matrix multiplication over F2 is 23 (arXiv preprint)
      url: https://arxiv.org/abs/2610.11823
      why: The newest claim; unrefereed.
site:
  aiReviewed: true
---

The tensor rank R(3) of 3×3 matrix multiplication is the smallest number r of products of linear forms a_i(A)·b_i(B) such that every entry of the product matrix is a linear combination of these r products. Laderman's algorithm gives R(3) ≤ 23, and the best lower bound valid over all fields is 19 (Bläser, 2003). **Question:** is R(3) = 23 over the rational or complex numbers, or is there a decomposition of rank 22 or less?

# State of the art

Over the rationals, reals and complex numbers the bounds remain 19 ≤ R(3) ≤ 23: Laderman's 23-product algorithm (1976) and Bläser's lower bound of 19 (2003), which holds over every field. Large computer searches (flip graphs, reinforcement learning, SAT) have found many inequivalent rank-23 schemes and none of rank 22. Over the two-element field F2 the lower bound moved quickly in 2026, all in preprints: 20 (Chengu Wang, arXiv:2603.07280, March), 21 (Wang, arXiv:2609.06725, September; a structural proof by Yang and co-authors, arXiv:2609.18722), 22 (attributed to Rudich and Rousseau in the next preprint; no public source was found), and a claim that the F2 rank is exactly 23 (Tejasvi Singh Tomar, arXiv:2610.11823, 8 October 2026, revised 12 October, with Lean 4 certificates including a kernel-only build). If the F2 claim holds, no rank-22 scheme exists with integer coefficients (reduce it mod 2); a rank-22 scheme over the rationals would then need coefficients with even denominators. None of these preprints is refereed.

# Applications

Little practical value: a rank-22 scheme gives an exponent of log₃22 ≈ 2.81, worse than Strassen's log₂7 ≈ 2.807, and small-matrix kernels are limited by additions and memory traffic rather than by multiplications. The value is structural: the 3×3 tensor is the smallest open case, and methods that settle it (lower-bound techniques, exhaustive certified search) are tests for the larger tensors behind ω.

# Resolution criteria

Upper bound: 22 rank-one tensors (explicit coefficient vectors over the rationals) that sum to the 3×3 matrix multiplication tensor, verified by exact arithmetic. Lower bound: a proof, ideally formal, that R(3) ≥ 20 over the rationals or the complex numbers.

# Rating rationale

Difficulty 72: the 23 upper bound has stood since 1976 against SAT, flip-graph and reinforcement-learning searches, and the lower bound over Q and C has been 19 since 2003; below the exponent ω itself (82). Application value 6: a rank-22 scheme would not beat Strassen asymptotically and small kernels are bound by additions and memory. Leverage 30: the smallest open matrix multiplication tensor and a test for lower-bound methods, far less than ω (72).

# Work mix rationale

Lower bounds need new algebraic geometry or substitution arguments; upper bounds are large exact searches, which have not found 22.

# Verification

Quantity: tensor rank of the 3×3 matrix multiplication tensor over Q (or R, C); current bounds 19 ≤ R ≤ 23. An upper-bound improvement is a list of 22 triples of 3×3 coefficient matrices $(U_i,V_i,W_i)$ with rational entries; the check expands $\sum_i U_i\otimes V_i\otimes W_i$ in exact rational arithmetic and compares it entry by entry with the matrix multiplication tensor (the Brent equations), a short script. A lower-bound improvement over Q or C needs a proof reviewed by experts or checked in Lean 4; for F2, the preprint arXiv:2610.11823 supplies Lean artefacts (GitHub tejasvi/rank333-f2-kernel, kernel-only) that anyone can rebuild. Report the field, coefficient ring and verification script.

# Plain explanation

To multiply two tables of numbers with three rows and three columns, the school method uses 27 separate multiplications. In 1969 Strassen found a trick for two-by-two tables that saves one multiplication. In 1976 Laderman showed that three-by-three tables can be multiplied with 23 multiplications. Fifty years later, nobody has found 22, and nobody has proved that 23 is needed.

What is known: at least 19 are needed, and 23 suffice. The gap between 19 and 23 has hardly moved. Large computer searches have only found new ways of using 23.

A solution with 22 would be a list of 22 pairs of recipes that anyone can check by exact arithmetic in seconds. A proof that 23 is needed would be an argument that experts, or a proof assistant, can check.

In October 2026 a preprint claimed that, for tables whose entries are 0 or 1 with the arithmetic wrapped at two, exactly 23 is needed, with a proof checked in Lean. That is a special case, still not refereed.

# Student explanation

**The question.** Multiplying two $3\times3$ matrices the school way computes each of the 9 entries as a sum of 3 products, so 27 multiplications. Can it be done with fewer? An algorithm here is a list of $r$ products, each of the form (a linear combination of entries of $A$) × (a linear combination of entries of $B$), such that every entry of $AB$ is a linear combination of those $r$ products. The smallest possible $r$ is the **tensor rank** $R(3)$.

**A smaller example.** For $2\times2$ matrices the school method uses 8 products. Strassen (1969) found 7, for example $m_1 = (a_{11} + a_{22})(b_{11} + b_{22})$, with every entry of the product a sum and difference of the seven $m_i$. You can verify it in Python by expanding with symbolic variables. Applied recursively to large matrices split into $2\times2$ blocks, saving one multiplication in eight gives an $n^{2.807}$ algorithm instead of $n^3$.

**What is known for 3×3.** Laderman (1976) found 23 products, so $R(3) \le 23$. Bläser (2003) proved that at least 19 are needed over any number system, so $19 \le R(3) \le 23$ over the rational, real and complex numbers. Large computer searches (SAT solvers, flip graphs, reinforcement learning) have found thousands of different 23-product schemes and none with 22.

**Recent finite-field progress.** Over the two-element field $\mathbb{F}_2$ (arithmetic with only 0 and 1, where $1 + 1 = 0$, like a single bit), 2026 preprints raised the lower bound to 20, then 21, and a preprint by Tomar (October 2026) claims that exactly 23 are needed, with certificates checked in Lean. If correct, no 22-product scheme exists using integer coefficients, because reducing it modulo 2 would give one over $\mathbb{F}_2$. A 22-product scheme over the rationals would then need fractions with even denominators. None of these preprints has been refereed, and the rational and complex cases stay open.

**Why it is hard.** Searching for 22 products means solving the **Brent equations**: 729 polynomial equations (one per entry of the $9\times9\times9$ multiplication tensor) in the 594 unknown coefficients, far too many to search exhaustively. Lower bounds need algebraic invariants of the tensor, and known methods stall at 19.

**How a claim is checked.** A 22-product scheme is a list of 22 triples of $3\times3$ coefficient matrices; a short script expands the products in exact rational arithmetic and confirms the result equals $AB$ for symbolic $A$ and $B$. A lower bound needs a proof checked by experts or in Lean.
