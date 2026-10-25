---
type: entry
slug: fine-grained-complexity
title: "Fine-grained complexity: SETH, Orthogonal Vectors, APSP and 3SUM"
field: complexity
kind: THEORY
status: ACTIVE
summary: "Exact exponents inside P: fine-grained reductions from SETH/Orthogonal Vectors, APSP and 3SUM give conditional lower bounds for edit distance, LCS, Fréchet distance and graph problems."
reliedOn: The SETH problem, the APSP and 3SUM hypotheses problem and the truly subquadratic (1+ε)-approximate edit distance problem are framed here; conditional lower bounds across string, graph and geometric algorithms cite these hypotheses.
dependsOn:
  - computational-complexity
  - fast-matrix-multiplication
references:
  - title: "V. Vassilevska Williams: On some fine-grained questions in algorithms and complexity (Proc. ICM 2018)"
    url: https://doi.org/10.1142/9789813272880_0188
    kind: paper
  - title: "R. Impagliazzo, R. Paturi, F. Zane: Which Problems Have Strongly Exponential Complexity? (JCSS 2001)"
    url: https://doi.org/10.1006/jcss.2001.1774
    kind: paper
  - title: "R. Williams: A new algorithm for optimal 2-constraint satisfaction and its implications (TCS 2005)"
    url: https://doi.org/10.1016/j.tcs.2005.09.023
    kind: paper
  - title: "V. Vassilevska Williams, R. Williams: Subcubic Equivalences Between Path, Matrix, and Triangle Problems (J. ACM 2018)"
    url: https://doi.org/10.1145/3186893
    kind: paper
  - title: "A. Backurs, P. Indyk: Edit Distance Cannot Be Computed in Strongly Subquadratic Time (unless SETH is false)"
    url: https://arxiv.org/abs/1412.0348
    kind: paper
  - title: "R. Williams: Faster all-pairs shortest paths via circuit complexity"
    url: https://arxiv.org/abs/1312.6680
    kind: paper
  - title: "M. Carmosino et al.: Nondeterministic Extensions of the Strong Exponential Time Hypothesis (ITCS 2016)"
    url: https://doi.org/10.1145/2840728.2840746
    kind: paper
  - title: "J. Alman, V. Vassilevska Williams: Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs (preprint, 2026)"
    url: https://arxiv.org/abs/2610.06783
    kind: paper
timeline:
  - date: 2001-12-01
    title: ETH, SETH and sparsification
    body: Impagliazzo, Paturi and Zane's sparsification lemma made ETH robust across NP-complete problems (JCSS, December 2001).
    source: https://doi.org/10.1006/jcss.2001.1774
  - date: 2005-12-01
    title: SETH implies the OV hypothesis
    body: Williams' split-and-list reduction showed that truly subquadratic Orthogonal Vectors would refute SETH (TCS, December 2005).
    source: https://doi.org/10.1016/j.tcs.2005.09.023
  - date: 2013-12-23
    title: Polynomial method for APSP
    body: Williams gave an n^3/2^(Ω(√log n)) APSP algorithm via circuit complexity and fast rectangular matrix multiplication (STOC 2014).
    source: https://arxiv.org/abs/1312.6680
  - date: 2014-12-01
    title: Edit distance is SETH-hard
    body: Backurs and Indyk showed that strongly subquadratic edit distance would refute SETH (STOC 2015).
    source: https://arxiv.org/abs/1412.0348
  - date: 2026-10-05
    title: Claimed truly subquadratic 3SUM and subcubic APSP (preprint)
    body: Alman and Vassilevska Williams posted O(n^1.9992) 3SUM and O(n^2.9995) APSP algorithms for polynomially bounded integers; the paper states SETH and OV are unaffected. Unrefereed.
    source: https://arxiv.org/abs/2610.06783
explainer:
  oneLine: Why some fast algorithms stop at exactly n² or n³ steps, and how a few shared beliefs explain it.
  flow:
    - Many problems stuck at n² or n³
    - Can't prove the speeds are optimal
    - Link them by fine-grained reductions
    - All rest on a few core hypotheses
    - Break one and a whole family speeds up
  glossary:
    - term: polynomial time
      meaning: Running time that grows like n, n², n³ and so on, as opposed to exponential growth like 2ⁿ.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: fine-grained reduction
      meaning: A translation between problems that preserves running time, so a polynomial speedup for one gives a speedup for the other.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
    - term: SETH (Strong Exponential Time Hypothesis)
      meaning: The belief that for large clause width, satisfiability needs almost as long as trying every assignment.
      link: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
    - term: edit distance
      meaning: The fewest single-letter insertions, deletions and changes needed to turn one text into another.
      link: https://en.wikipedia.org/wiki/Edit_distance
    - term: longest common subsequence
      meaning: The longest sequence of letters appearing in both texts in the same order, used for comparing files and DNA.
      link: https://en.wikipedia.org/wiki/Longest_common_subsequence
    - term: 3SUM
      meaning: The problem of finding three numbers in a list that add up to zero.
      link: https://en.wikipedia.org/wiki/3SUM
    - term: all-pairs shortest paths (APSP)
      meaning: Finding the shortest route between every pair of points in a weighted network.
      link: https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
    - term: big-O notation
      meaning: A way to describe how running time grows with input size while ignoring small constants.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: fast matrix multiplication
      meaning: Methods that multiply big grids of numbers using fewer steps than the schoolbook method.
      link: /research/fast-matrix-multiplication
    - term: computational complexity
      meaning: The study of how many resources (time, memory) problems need.
      link: /research/computational-complexity
    - term: Orthogonal Vectors (OV)
      meaning: Given many 0/1 vectors, decide whether two of them never have a 1 in the same position; the hub that links SETH to string problems.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
    - term: k-SAT
      meaning: Deciding whether a logical formula whose rules each involve at most k variables can be made true.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
  readFirst:
    - title: Exponential time hypothesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
      why: Introduces ETH and SETH, the starting beliefs of the field.
    - title: Edit distance (Wikipedia)
      url: https://en.wikipedia.org/wiki/Edit_distance
      why: The best-known problem whose n² speed is tied to SETH.
    - title: 3SUM (Wikipedia)
      url: https://en.wikipedia.org/wiki/3SUM
      why: A simple-to-state problem at the centre of many conditional lower bounds.
    - title: Time complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Time_complexity
      why: Background on how running times are described.
site:
  published: true
  aiReviewed: true
---

## What it is

Fine-grained complexity classifies problems in P by their exact exponent, conditional on a few hypotheses connected by _fine-grained reductions_. A $(a,b)$-reduction from $A$ to $B$ (Vassilevska Williams–Williams) solves an $A$-instance of size $n$ in time $a(n)^{1-\delta}$ apart from oracle calls to $B$ on instances of sizes $n_i$, where for every $\varepsilon>0$ there is $\delta>0$ with $\sum_i b(n_i)^{1-\varepsilon}\le a(n)^{1-\delta}$; then a polynomial speedup for $B$ gives one for $A$.

## The core hypotheses

- **ETH / SETH** (Impagliazzo–Paturi–Zane). ETH: 3-SAT needs $2^{\delta n}$ time for some $\delta>0$. SETH: for every $\varepsilon>0$ there is $k$ with $k$-SAT not in $O(2^{(1-\varepsilon)n})$. The sparsification lemma reduces to $O(n)$ clauses.
- **Orthogonal Vectors.** Given $n$ vectors in $\{0,1\}^d$, $d=c\log n$, decide whether two are orthogonal. Williams (2005), by split-and-list, showed SETH implies no $n^{2-\varepsilon}$ algorithm for every $c$ (OVH).
- **APSP**: no $n^{3-\varepsilon}$ algorithm for all-pairs shortest paths with integer weights in $[-n^c,n^c]$. **3SUM**: no $n^{2-\varepsilon}$ algorithm deciding whether $n$ integers in $[-n^c,n^c]$ contain $a+b+c=0$.

Vassilevska Williams and Williams (FOCS 2010; J. ACM 2018) proved APSP subcubic-equivalent to min-plus product, negative triangle, replacement paths and others.

## Conditional lower bounds and algorithms

Edit distance in $O(n^{2-\delta})$ would refute SETH (Backurs–Indyk 2015), and likewise LCS (Abboud–Backurs–Vassilevska Williams; Bringmann–Künnemann) and discrete Fréchet distance (Bringmann 2014). The gadgets embed OV: each vector becomes a string, and the alignment cost drops by a fixed amount exactly when some pair is orthogonal.

The **polynomial method** gives the matching upper-bound side. Williams (STOC 2014) computed min-plus products in $n^3/2^{\Omega(\sqrt{\log n})}$ time by expressing small min-plus blocks as $\mathsf{AC}^0[2]$ circuits, converting them to sparse probabilistic polynomials, and evaluating them with fast rectangular matrix multiplication. Abboud, Williams and Yu (SODA 2015) solved OV with $d=c\log n$ in $n^{2-1/O(\log c)}$ time; this is consistent with OVH because the savings vanish as $c\to\infty$.

**Matrix multiplication** separates algebraic from combinatorial algorithms: triangle detection and Boolean matrix multiplication run in $O(n^{\omega})$, while "combinatorial" lower bounds are stated separately. Min-plus product does not reduce to ring matrix multiplication directly, which is why APSP was conjectured cubic.

**NSETH** (Carmosino, Gao, Impagliazzo, Mihajlin, Paturi, Schneider 2016) asserts that $k$-TAUT has no $2^{(1-\varepsilon)n}$ _nondeterministic_ algorithm. Because 3SUM and APSP have fast nondeterministic and co-nondeterministic algorithms, NSETH rules out deterministic fine-grained reductions from SAT to them: the hypotheses are believed independent.

**Status in October 2026.** Alman and Vassilevska Williams (arXiv:2610.06783, 5 October 2026; unrefereed) claim deterministic $O(n^{1.9992})$ 3SUM and $O(n^{2.9995})$ APSP for polynomially bounded integers, from a new thin-matrix-product algorithm based on a variant of Coppersmith's rectangular matrix multiplication; the abstract credits Anthropic's Claude with discovering the algorithm. The paper states that SETH and Orthogonal Vectors are unaffected. If the claim holds, many conditional bounds based on APSP or 3SUM lose their basis while SETH-based ones stand.

## Techniques to master

Split-and-list reductions; gadget design for alignment problems; subcubic equivalences via negative-triangle; probabilistic polynomials and Razborov–Smolensky; rectangular matrix multiplication; self-reducibility and hashing for 3SUM.

## Standard references / Reading path

Vassilevska Williams, "On some fine-grained questions in algorithms and complexity" (ICM 2018); Impagliazzo–Paturi–Zane (JCSS 2001); the Backurs–Indyk and Williams APSP papers; Carmosino et al. on NSETH; then arXiv:2610.06783.

## Where it bites

**SETH** is neither proved nor refuted. The **APSP and 3SUM hypotheses** are under a credible, unrefereed refutation claim. **(1+ε)-approximate edit distance in $n^{2-\delta}$ time** is open: Gorbachev (arXiv:2610.01311, October 2026, unrefereed) gives a factor-3 approximation in $\tilde O(N^{11/6})$, and no fine-grained lower bound excludes a $(1+\varepsilon)$-approximation in near-linear time.

# Plain explanation

Computer scientists call a problem "easy" if some algorithm solves it in polynomial time. But a method taking about n steps and one taking n times n times n steps are very different. For a million data points, the first takes a million steps, the second a quintillion.

Some everyday problems have had the same textbook running time for decades. Comparing two strings of text (edit distance, used in spell-checkers and DNA matching) takes about n times n steps. Finding the shortest route between every pair of cities takes about n cubed. People have tried hard to beat these and failed.

Fine-grained complexity explains that failure without proving the speeds optimal. Researchers show that a faster algorithm for one problem would give a faster algorithm for another, famous one. So stubborn problems form families: break one and the family falls. All rest on a few core beliefs, such as the belief that solving a logic puzzle cannot be much faster than trying nearly every setting.

It is like noticing that a dozen locks are all opened by copies of one key. That does not prove the key is unobtainable, but it shows where effort should go.

The beliefs can fail. In October 2026 a not-yet-refereed preprint claimed faster methods for two core problems (all-pairs shortest routes, and finding three numbers that sum to zero). If it holds up, results resting on those two beliefs lose their footing; the logic-puzzle belief is unaffected.

# Student explanation

**Motivation.** Classical complexity theory sorts problems into "polynomial time" and "probably not". But inside polynomial time, exponents matter: $n^2$ versus $n^{1.5}$ is the difference between feasible and infeasible on large data. Proving unconditional lower bounds for specific exponents is far beyond current techniques, so fine-grained complexity proves _conditional_ ones.

**Fine-grained reductions.** A reduction from problem $A$ to problem $B$ is fine-grained if it respects running times: a polynomially faster algorithm for $B$ yields a polynomially faster algorithm for $A$. Then if $A$ is believed to need time $n^2$, so does $B$.

**The core hypotheses.**

- **ETH and SETH** (Impagliazzo, Paturi, Zane). ETH: 3-SAT on $n$ variables needs time $2^{\delta n}$ for some $\delta>0$. SETH: for every $\varepsilon>0$ there is a $k$ such that $k$-SAT cannot be solved in time $(2-\varepsilon)^n$. In words, brute force is essentially optimal for large clause width.
- **Orthogonal Vectors (OV).** Given $n$ vectors of $0$s and $1$s of dimension about $\log n$, find two with no position where both have a $1$. The obvious method takes $n^2$ time. Williams (2005) showed that a truly faster algorithm would refute SETH.
- **APSP.** All-pairs shortest paths in a weighted graph with $n$ vertices: no algorithm in $n^{3-\varepsilon}$ time.
- **3SUM.** Among $n$ numbers, find three summing to zero: no algorithm in $n^{2-\varepsilon}$ time.

**Consequences.** Edit distance in time $n^{2-\delta}$ would refute SETH (Backurs and Indyk, 2015); the same holds for the longest common subsequence and the discrete Fréchet distance (a way of comparing curves). The proofs build gadgets: each vector becomes a string, arranged so that the alignment cost drops by a fixed amount exactly when some pair of vectors is orthogonal. Many graph and geometry problems are tied to APSP or 3SUM.

**How to read the results.** They are _evidence_, not proofs. If a hypothesis fell, a whole family of problems would speed up at once. The structure has also guided algorithm designers toward problems where improvement is plausible, and toward approximations when exact answers look stuck. Fast matrix multiplication is a recurring tool: triangle detection runs in $O(n^{\omega})$ time, and the best APSP algorithms use matrix-product ideas.

A caution: the hypotheses are conjectures about the best possible running time, and one or more of them can in principle be wrong. In October 2026 Alman and Vassilevska Williams posted a preprint (unrefereed) claiming deterministic $O(n^{1.9992})$ 3SUM and $O(n^{2.9995})$ APSP for polynomially bounded integers, built on a new rectangular-matrix-product algorithm. If it holds, the APSP and 3SUM hypotheses are false and the bounds resting on them lose their basis; the authors state that SETH and Orthogonal Vectors are unaffected.
