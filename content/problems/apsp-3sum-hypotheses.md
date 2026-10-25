---
type: problem
slug: apsp-3sum-hypotheses
title: "APSP and 3SUM hypotheses: no n^(3−ε) APSP or n^(2−ε) 3SUM on polynomially bounded integers"
entry: fine-grained-complexity
status: IN_PROGRESS
origin: "3SUM hypothesis: Gajentaan and Overmars (1995); APSP hypothesis and subcubic equivalences: Vassilevska Williams and Williams (FOCS 2010); claimed refutation: Alman and Vassilevska Williams (arXiv:2610.06783, 5 October 2026, unrefereed)"
ratings:
  difficulty: 32
  applicationValue: 24
  leverage: 66
workMix:
  theory: 85
  engineering: 0
  compute: 15
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Alman, Vassilevska Williams: Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs (preprint, 2026)"
    url: https://arxiv.org/abs/2610.06783
  - title: "Vassilevska Williams, Williams: Subcubic equivalences between path, matrix and triangle problems (FOCS 2010; J. ACM 2018)"
    url: https://doi.org/10.1145/3186893
  - title: "Williams: Faster all-pairs shortest paths via circuit complexity (STOC 2014)"
    url: https://arxiv.org/abs/1312.6680
  - title: "Carmosino et al.: Nondeterministic Extensions of the Strong Exponential Time Hypothesis"
    url: https://people.csail.mit.edu/virgi/6.s078/papers/nseth.pdf
  - title: "Abboud, Vassilevska Williams: Popular Conjectures Imply Strong Lower Bounds for Dynamic Problems (FOCS 2014)"
    url: https://arxiv.org/abs/1402.0054
links:
  - to: matrix-multiplication-exponent
    kind: BUILDS_ON
    note: The claimed refutation builds on a variant of Coppersmith's rectangular matrix multiplication, so its exponents are tied to rectangular matrix multiplication bounds.
timeline:
  - date: 1995-10-01
    title: 3SUM-hardness in geometry
    body: Gajentaan and Overmars introduced 3SUM-hardness for computational-geometry problems (Comput. Geom., October 1995; day approximate).
    source: https://doi.org/10.1016/0925-7721(95)00022-2
  - date: 2010-10-01
    title: APSP subcubic equivalences
    body: Vassilevska Williams and Williams proved APSP is equivalent to several problems under subcubic reductions (FOCS 2010).
    source: https://doi.org/10.1145/3186893
  - date: 2014-05-31
    title: Faster APSP via circuit complexity
    body: Williams gave an n^3/2^(Ω(√log n))-type algorithm, the best truly sub-polynomial speedup known for decades.
    source: https://arxiv.org/abs/1312.6680
  - date: 2026-10-05
    title: Claimed refutation of the 3SUM and APSP hypotheses
    body: Alman and Vassilevska Williams posted deterministic O(n^1.9992) 3SUM and O(n^2.9995) APSP algorithms for polynomially bounded integers, refuting both hypotheses if correct; unrefereed.
    source: https://arxiv.org/abs/2610.06783
explainer:
  oneLine: Two beliefs, that shortest routes between all pairs need n³ steps and 3SUM needs n², behind hundreds of speed limits.
  flow:
    - Shortest paths need n³ steps for decades
    - 3SUM needs n² steps for decades
    - Hundreds of problems tied to them
    - "Hypothesis: no polynomial speed-up"
    - 2026 preprint claims one; unconfirmed
  glossary:
    - term: all-pairs shortest paths (APSP)
      meaning: Finding the shortest route between every pair of nodes in a weighted network.
      link: https://en.wikipedia.org/wiki/Shortest_path_problem
    - term: 3SUM
      meaning: The problem of finding three numbers in a list that add up to zero.
      link: https://en.wikipedia.org/wiki/3SUM
    - term: conditional lower bound
      meaning: A statement that an algorithm cannot be sped up unless some widely believed hypothesis is false.
      link: /research/fine-grained-complexity
    - term: fine-grained reduction
      meaning: A translation between problems that preserves running times, so a speed-up for one transfers to the other.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
    - term: word RAM
      meaning: A standard model of a computer with memory words of about log n bits and unit-time basic operations.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: min-plus product
      meaning: Matrix multiplication where sums replace products and minimum replaces sums; it is equivalent to APSP.
      link: https://en.wikipedia.org/wiki/Min-plus_matrix_multiplication
    - term: matrix multiplication
      meaning: Combining two tables of numbers row by column; fast methods underlie many graph algorithms.
      link: /research/fast-matrix-multiplication
    - term: unrefereed preprint
      meaning: A paper posted online that independent experts have not yet checked.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Big-O notation
      meaning: A way of describing how running time grows with input size, ignoring small constants.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: subcubic equivalence
      meaning: Two problems are subcubic-equivalent if a truly faster-than-n³ algorithm for either gives one for the other.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
  readFirst:
    - title: 3SUM (Wikipedia)
      url: https://en.wikipedia.org/wiki/3SUM
      why: A clear description of the problem and its role in geometry.
    - title: Floyd–Warshall algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
      why: The classic cubic-time method for all-pairs shortest paths.
    - title: Shortest path problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Shortest_path_problem
      why: Background on the variants of the problem.
raw:
  body: "The **APSP hypothesis** states that for every $\\varepsilon>0$, all-pairs shortest paths on $n$-vertex directed graphs with integer edge weights in $[-n^c,n^c]$ (and no negative cycles) cannot be solved in $O(n^{3-\\varepsilon})$ time on a word RAM with $O(\\log n)$-bit words. The **3SUM hypothesis** states that for every $\\varepsilon>0$, deciding whether $n$ integers in $[-n^c,n^c]$ contain $a+b+c=0$ cannot be done in $O(n^{2-\\varepsilon})$ time, even with randomisation. *Are these hypotheses true?* Hundreds of conditional lower bounds in graph algorithms, computational geometry and dynamic data structures rest on them, together with the Exact Triangle, Zero-Weight $k$-Clique and hinted Online Matrix–Vector hypotheses that reduce to them. A refutation is an algorithm with running time $O(n^{3-\\varepsilon})$ (APSP) or $O(n^{2-\\varepsilon})$ (3SUM) for a fixed $\\varepsilon>0$; a proof would be an unconditional polynomial lower bound for a problem in P, far beyond current lower-bound techniques."
site:
  aiReviewed: true
---

# State of the art

**Status before the claim.** The best APSP algorithm for polynomially bounded integers before 2026 ran in $n^3/2^{\Omega(\sqrt{\log n})}$ time (Williams, STOC 2014 for real weights, with refinements by Chan and Williams, SODA 2016 via derandomisation), and for 3SUM the best was $O(n^2(\log\log n)^{O(1)}/\log^2 n)$ (Chan, 2018 and follow-ups). Neither was truly subpolynomially faster than the textbook bound, and Abboud, Vassilevska Williams and others had built an extensive web of equivalences (APSP is subcubic-equivalent to min-plus product, negative-triangle and replacement paths; Vassilevska Williams and Williams, FOCS 2010). Carmosino et al. (2016) showed that nondeterministic SETH rules out deterministic fine-grained reductions from SAT to 3SUM or APSP.

**The 2026 claim (unrefereed).** Alman and Vassilevska Williams (arXiv:2610.06783, submitted 5 October 2026) state that they refute the 3SUM and APSP hypotheses with a deterministic $O(n^{1.9992})$ algorithm for 3SUM on polynomial-size integers and an $O(n^{2.9995})$ algorithm for APSP on directed graphs with polynomially bounded integer weights. By known reductions, the authors say this also refutes the real-valued versions, the Exact Triangle hypothesis, the Zero-Weight $k$-Clique hypotheses and three rectangular hinted Online Matrix-Vector conjectures of van den Brand, Nanongkai and Saranurak. The algorithms come from a new thin-matrix-product algorithm, built by modifying a variant of Coppersmith's rectangular matrix multiplication (from a ten-multiplication identity of Schönhage); via known reductions it solves All-Edges Sparse Triangle on lopsided tripartite graphs in truly subquadratic time. The paper credits an internal Anthropic model with discovering the core algorithm, which the authors then simplified and extended, and Aaronson's 7 October post repeats this attribution. The authors state that SETH and Orthogonal Vectors are unaffected. As of 15 October 2026 it is an unrefereed preprint by leading experts in the area; no independent verification or published expert assessment was found. The status is therefore IN_PROGRESS: a credible refutation under review, not an accepted one.

# Applications

If correct, conditional lower bounds based on these hypotheses are void and algorithm designers should look for truly subcubic and subquadratic algorithms for many problems (replacement paths, negative-triangle, nearest-point problems, 3SUM-hard geometric problems). The exponents are tiny ($3-0.0005$), and the algorithms are galactic because they rest on rectangular fast matrix multiplication, so no immediate practical speed-up is implied.

# Resolution criteria

Resolved negatively (hypotheses false) when a truly subcubic APSP or truly subquadratic 3SUM algorithm for polynomially bounded integers is accepted by experts, for example the Alman–Vassilevska Williams algorithms after refereed publication or independent verification. Resolved positively only by an unconditional proof of the stated lower bounds. If a flaw is found in the 2026 preprint, both hypotheses revert to open with no credible claim.

# Rating rationale

Difficulty 32: before October 2026 refuting either hypothesis would have sat near 78 (decades of only subpolynomial savings, much like SETH at 88 but with no P ≠ NP barrier); a refutation by the leading experts in the area, with a mechanism in established algebraic techniques, is now under review, so the remaining distance is mainly verification. This is a larger discount than UGC (70) received, because the claim is human-written by specialists rather than an unreviewed AI manuscript. If the preprint is confirmed the difficulty drops to about 5; if it fails it returns to the 75–80 band. Application value 24: the savings are tiny and the algorithms galactic, so the value is in redirecting algorithm design. Leverage 66: hundreds of conditional lower bounds depend on these hypotheses, below SETH (81) and ω (72).

# Work mix rationale

Verification is mathematical (checking a long proof), with some computation to test exponents numerically.

# Verification

Refuting the hypotheses needs a truly subcubic APSP or truly subquadratic 3SUM algorithm, which is an algorithm with a proof; proving them needs unconditional lower bounds beyond current techniques. No formal running-time framework exists in Mathlib, so experts verify the manuscript. If the 2026 preprint has a flaw, both hypotheses revert to open.

# Plain explanation

Two simple-sounding tasks have resisted real speed-ups for decades. In the first, given a road network with n towns, find the shortest route between every pair of towns. The standard method takes about n times n times n steps. In the second, given a list of n numbers, find three that add up to zero. The obvious method takes about n times n steps.

Researchers have only shaved off tiny factors, like dividing by a logarithm. No one has found a method that is polynomially faster, such as n to the power 2.9 for the first task.

These two hunches are called the APSP and 3SUM hypotheses. They matter because hundreds of other problems in graphs, geometry and databases have been shown to be at least as hard: a faster method for any of them would break one of the two hunches. So they act like two anchors holding down many stubborn running times.

The question is whether the hunches are true. Proving them looks out of reach, because it would require showing that no cleverer algorithm exists. Disproving one would just need a faster algorithm.

Important: in October 2026 a preprint by Alman and Vassilevska Williams claimed exactly such faster algorithms for both tasks, and so a refutation of both hypotheses. It had not yet been refereed or independently confirmed at the time of the data used for this wiki, so the hypotheses should be treated as under challenge.

# Student explanation

**Statements.** _APSP hypothesis:_ for every $\varepsilon>0$, all-pairs shortest paths on $n$-vertex directed graphs with integer edge weights in $[-n^c,n^c]$ (no negative cycles) cannot be solved in $O(n^{3-\varepsilon})$ time on a word RAM with $O(\log n)$-bit words. _3SUM hypothesis:_ for every $\varepsilon>0$, deciding whether $n$ integers in $[-n^c,n^c]$ contain three that sum to zero cannot be done in $O(n^{2-\varepsilon})$ time, even with randomisation. The question: are they true?

**Why they matter.** Hundreds of conditional lower bounds in graph algorithms, computational geometry and dynamic data structures rest on them, together with related hypotheses (Exact Triangle, Zero-Weight $k$-Clique and the hinted Online Matrix–Vector hypotheses) that reduce to them. APSP is _subcubic-equivalent_ to several other problems, including min-plus matrix product, finding a negative triangle, and replacement paths (Vassilevska Williams and Williams, 2010): a truly subcubic algorithm for one gives it for all.

**Before 2026.** The best APSP algorithm for polynomially bounded integers ran in $n^3/2^{\Omega(\sqrt{\log n})}$ time (Williams 2014, with refinements by Chan and Williams 2016). For 3SUM the best was about $n^2(\log\log n)^{O(1)}/\log^2 n$ (Chan 2018 and follow-ups). Neither was polynomially faster than the textbook bound. Carmosino et al. (2016) showed that if nondeterministic SETH holds, there are no deterministic fine-grained reductions from SAT to 3SUM or APSP, which is why these two have their own hypotheses.

**The 2026 claim (unrefereed).** Alman and Vassilevska Williams (arXiv, 5 October 2026) state a deterministic $O(n^{1.9992})$ algorithm for 3SUM on polynomial-size integers and an $O(n^{2.9995})$ algorithm for APSP on directed graphs with polynomially bounded integer weights. By known reductions the authors say this also refutes the real-valued versions and several related hypotheses. The algorithms come from a new thin-matrix-product algorithm, built from a variant of Coppersmith's rectangular matrix multiplication; the paper credits an internal Anthropic model with discovering the core algorithm, which the authors then simplified and wrote up. The exponents are tiny improvements, but the point is that they are polynomial improvements. Experts had not yet confirmed the result when the wiki data was prepared.

**Meaning.** If the claim holds, a whole web of conditional lower bounds weakens at once, because the 'no polynomially faster algorithm' assumption underneath fails. If it does not, the hypotheses stand as before. A _proof_ of either hypothesis in the usual model would require ruling out all algorithms, far beyond current lower-bound techniques.

The link to matrix multiplication is important: both new algorithms build on fast rectangular matrix multiplication, tying this topic to the matrix multiplication exponent.
