---
type: problem
slug: edit-distance-truly-subquadratic-one-plus-eps-approximation
title: "Edit distance: a (1+ε)-approximation in truly subquadratic time n^(2−δ)"
entry: fine-grained-complexity
status: OPEN
origin: Backurs and Indyk (2015) proved exact edit distance SETH-hard; the approximation question goes back to Andoni, Krauthgamer and Onak (2010) and earlier
ratings:
  difficulty: 51
  applicationValue: 26
  leverage: 27.5
workMix:
  theory: 90
  engineering: 0
  compute: 10
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Mao, Rubinstein: Approximation schemes for edit distance and LCS in quasi-strongly subquadratic time"
    url: https://arxiv.org/abs/2603.29702
  - title: "Gorbachev: Factor three approximation for edit distance (preprint, unrefereed)"
    url: https://arxiv.org/abs/2610.01311
  - title: "Andoni, Nosatzki: Edit distance in near-linear time: it's a constant factor"
    url: https://arxiv.org/abs/2005.07678
  - title: "Chakraborty, Das, Goldenberg, Koucký, Saks: Approximating edit distance within constant factor in truly sub-quadratic time"
    url: https://arxiv.org/abs/1810.03664
  - title: "Backurs, Indyk: Edit distance cannot be computed in strongly subquadratic time (unless SETH is false)"
    url: https://arxiv.org/abs/1412.0348
  - title: "Haeupler, Rubinstein, Shahrasbi: Near-linear time insertion-deletion codes and (1+ε)-approximating edit distance via indexing"
    url: https://arxiv.org/abs/1810.11863
links:
  - to: strong-exponential-time-hypothesis
    kind: BUILDS_ON
    note: SETH gives the exact quadratic lower bound; the question is how far approximation can escape it.
timeline:
  - date: 2014-12-01
    title: Exact edit distance is SETH-hard
    body: Backurs and Indyk rule out O(n^{2−δ}) exact algorithms under SETH (arXiv month; day approximate).
    source: https://arxiv.org/abs/1412.0348
  - date: 2018-10-08
    title: Constant factor in truly subquadratic time
    body: Chakraborty, Das, Goldenberg, Koucký and Saks break the quadratic barrier for constant-factor approximation (arXiv month; day approximate).
    source: https://arxiv.org/abs/1810.03664
  - date: 2020-05-15
    title: Constant factor in near-linear time
    body: "Andoni and Nosatzki: a constant-factor approximation in n^{1+ε} time."
    source: https://arxiv.org/abs/2005.07678
  - date: 2026-03-31
    title: (1+ε)-approximation in n²/2^{log^{Ω(1)} n} time
    body: "Mao and Rubinstein: approximation schemes for edit distance and LCS (STOC 2026)."
    source: https://arxiv.org/abs/2603.29702
  - date: 2026-10-01
    title: Factor-3 approximation in Õ(N^{11/6}) (preprint)
    body: Gorbachev removes the +ε from the (3+ε) factor in truly subquadratic time, at a slower exponent than the 3+ε algorithms, and extends it to metric weights in Õ(N^{40/21}). Unrefereed; it does not move the 1+ε question.
    source: https://arxiv.org/abs/2610.01311
explainer:
  oneLine: Can the edit distance of two long texts be approximated to within 1% much faster than comparing all position pairs?
  flow:
    - Exact edit distance needs n² steps
    - Faster exact would break SETH
    - Rough approximations are near-linear
    - "Within 1%: only tiny savings known"
    - "Open: polynomially faster at any accuracy"
  glossary:
    - term: edit distance
      meaning: The fewest single-letter insertions, deletions and substitutions needed to turn one text into another.
      link: https://en.wikipedia.org/wiki/Edit_distance
    - term: approximation (1+ε)
      meaning: An answer guaranteed to be at most (1+ε) times the true value, for example within 1% if ε is 0.01.
      link: https://en.wikipedia.org/wiki/Approximation_algorithm
    - term: subquadratic time
      meaning: Running time growing slower than n times n.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: SETH
      meaning: The belief that logic puzzles with long rules need almost brute-force time.
      link: /research/fine-grained-complexity
    - term: dynamic programming
      meaning: Solving a problem by combining solutions to smaller overlapping pieces, as in the classic edit-distance table.
      link: https://en.wikipedia.org/wiki/Edit_distance
    - term: randomised algorithm
      meaning: A method that makes random choices and is correct with high probability.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: longest common subsequence
      meaning: The longest sequence of letters appearing in both texts in the same order.
      link: https://en.wikipedia.org/wiki/Longest_common_subsequence
    - term: fine-grained complexity
      meaning: The study of exact running-time exponents inside polynomial time.
      link: /research/fine-grained-complexity
    - term: metric
      meaning: A distance measure obeying the usual rules, such as the triangle inequality.
      link: https://en.wikipedia.org/wiki/Metric_space
    - term: truly subquadratic
      meaning: Running time like n to the power 2 minus a fixed positive number, a polynomial saving over n²; dividing by log factors does not count.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: triangle inequality
      meaning: The rule that going from A to C directly is never longer than going via B; it lets algorithms compare strings through shared "centre" strings.
      link: https://en.wikipedia.org/wiki/Triangle_inequality
  readFirst:
    - title: Edit distance (Wikipedia)
      url: https://en.wikipedia.org/wiki/Edit_distance
      why: Definition, uses and the classic algorithm.
    - title: Longest common subsequence (Wikipedia)
      url: https://en.wikipedia.org/wiki/Longest_common_subsequence
      why: A close cousin with the same kind of speed barrier.
    - title: Approximation algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Approximation_algorithm
      why: What 'within a factor' guarantees mean.
site:
  aiReviewed: true
---

Given two strings of length $n$ over a constant alphabet, edit distance $\mathrm{ED}(x,y)$ is the minimum number of insertions, deletions and substitutions turning $x$ into $y$. Exact computation takes $O(n^2)$ time and cannot be done in $O(n^{2-\varepsilon})$ unless SETH fails (Backurs–Indyk 2015). **Problem:** for every constant $\varepsilon>0$, decide whether there exist $\delta=\delta(\varepsilon)>0$ and a (randomized) algorithm that outputs a $(1+\varepsilon)$-multiplicative approximation to $\mathrm{ED}(x,y)$ in time $O(n^{2-\delta})$ (a _truly_ subquadratic, polynomially faster than $n^2$ running time), or prove that no such algorithm exists under a standard hypothesis.

# State of the art

Constant-factor approximation is possible in truly subquadratic time (Chakraborty, Das, Goldenberg, Koucký and Saks, arXiv:1810.03664, FOCS 2018, Õ(n^{2−2/7})) and even in near-linear time n^{1+ε} with a constant depending on ε (Andoni–Nosatzki, arXiv:2005.07678, FOCS 2020), after earlier (log n)^{O(1/ε)} approximation in n^{1+ε} time (Andoni–Krauthgamer–Onak 2010) and the large-distance case (Brakensiek–Rubinstein, arXiv:1904.05390). For small constants, (3+ε)-approximations run in truly subquadratic time (Andoni 2018; Goldenberg–Rubinstein–Saha 2020, about n^{1.6}), and Gorbachev (arXiv:2610.01311, 1 October 2026, unrefereed preprint) gives a randomized factor-exactly-3 approximation in Õ(N^{11/6}) time (Õ(N^{40/21}) for arbitrary metric edit weights). In these algorithms the factor 3 comes from routing comparisons through shared 'center' strings by the triangle inequality, ed(U,Y\[p..q)) ≤ r + ed(C,Y\[p..q)) ≤ ed(U,Y\[p..q)) + 2r, and the +ε from sample-based search; Gorbachev pays for the vanishing excess by moving each center one edit closer to its block (handled with implicit DIST matrices), at the price of a slower exponent than the N^{1.6+o(1)} of Goldenberg–Rubinstein–Saha. He states that a (3−δ)-approximation in truly subquadratic time would need new ideas, that (1+ε) in truly subquadratic time is open, and that no known fine-grained lower bound even excludes (1+ε) in O(N) time. He also proves that the metric assumption is necessary: for non-metric weights, any approximation needs Ω(N²) oracle queries, and is OV-hard over constant alphabets. On the (1+ε) side, Mao and Rubinstein (arXiv:2603.29702, accepted to STOC 2026) give randomized (1+ε)-approximation for edit distance (and (1−ε) for LCS) in time n²/2^{log^{Ω(1)} n}, a super-polylogarithmic but not polynomial saving, which separates approximate from exact edit distance (the latter cannot be sped up beyond polylogarithmic factors under the hypotheses of Abboud–Hansen–Vassilevska Williams–Williams). Haeupler, Rubinstein and Shahrasbi (arXiv:1810.11863) obtain (1+ε) in near-linear time only for strings with an indexing structure. Whether (1+ε) is achievable in n^{2−δ} time for general strings is open.

# Applications

Edit distance underlies sequence alignment in genomics, spelling and plagiarism detection and version control; a (1+ε) subquadratic algorithm would speed these pipelines at a 1% error level on long sequences, and a hardness result would justify heuristics.

# Resolution criteria

Either a randomized or deterministic algorithm with (1+ε)-approximation in time O(n^{2−δ}) for every fixed ε>0, or a proof (conditional on a standard hypothesis such as SETH or a fine-grained hypothesis) that for some ε>0 no such algorithm exists.

# Rating rationale

Difficulty 51: strong partial results (truly subquadratic factor 3, a super-polylogarithmic (1+ε) saving) narrow the gap, but the last step needs an idea beyond triangle-inequality routing and no hardness tool applies; research-grade, slightly easier than the CDCL proof-search theorem (54), harder than the smoothed-simplex problem (38) and far below SETH (88). Application value 26: concrete in bioinformatics and text processing, close to the APSP/3SUM hypotheses (24). Leverage 27.5: local to fine-grained approximation, just below the smoothed-simplex problem (28).

# Work mix rationale

An algorithmic idea (or a new fine-grained hardness reduction) is needed; implementation would follow later.

# Verification

Either a (1+eps)-approximation in time O(n^(2-delta)) or a conditional hardness proof (for example from SETH). Both are asymptotic claims about running time, with no formal model in Mathlib, so experts check them. An implementation can be tested for approximation quality on benchmarks, which supports but does not establish the time bound.

# Plain explanation

How different are two pieces of text, or two DNA strings? The standard measure counts the fewest single-letter changes (insertions, deletions, swaps) needed to turn one into the other. Spell-checkers, genome comparison and file syncing all use it.

The textbook method for computing it exactly takes about n times n steps for texts of length n. For genomes with billions of letters, that is far too slow. For decades nobody found a polynomially faster exact method, and in 2015 Backurs and Indyk showed why: a substantially faster exact method would disprove a widely believed hypothesis (SETH) about logic puzzles.

But what if you do not need the exact number? An answer within a small percentage may be enough. Over the years, researchers got faster and faster methods that are accurate only up to a fixed factor. Constant-factor approximations are now known in nearly linear time. For approximations within 3 times the true value or so, truly faster than n times n methods are known.

The open question: can we get an answer within any percentage you choose (1 plus epsilon) in a time polynomially smaller than n times n? As of the data used here, the best (1 plus epsilon) methods save only a sub-polynomial factor. No known barrier even rules out nearly linear time.

So it is an unusually wide-open gap. The problem sits exactly where theory is unsure.

# Student explanation

**Definition.** For strings $x,y$ of length $n$ over a constant alphabet, the edit distance $\mathrm{ED}(x,y)$ is the minimum number of insertions, deletions and substitutions turning $x$ into $y$. Exact computation takes $O(n^2)$ time by dynamic programming, and cannot be done in $O(n^{2-\varepsilon})$ unless the Strong Exponential Time Hypothesis fails (Backurs and Indyk, 2015).

**The problem.** For every constant $\varepsilon>0$, decide whether there exists $\delta=\delta(\varepsilon)>0$ and a (randomised) algorithm that outputs a $(1+\varepsilon)$-multiplicative approximation to $\mathrm{ED}(x,y)$ in time $O(n^{2-\delta})$: a _truly_ subquadratic approximation scheme, polynomially faster than $n^2$.

**What is known.**

- _Constant-factor approximation_ in truly subquadratic time: Chakraborty, Das, Goldenberg, Koucký and Saks (FOCS 2018) in $\tilde O(n^{2-2/7})$. In near-linear time $n^{1+\varepsilon}$ with a constant depending on $\varepsilon$: Andoni and Nosatzki (FOCS 2020). Before that, a $(\log n)^{O(1/\varepsilon)}$ factor in $n^{1+\varepsilon}$ time (Andoni, Krauthgamer, Onak 2010) and the large-distance case (Brakensiek and Rubinstein).
- _Small constants:_ $(3+\varepsilon)$-approximations run in truly subquadratic time (Andoni 2018; Goldenberg, Rubinstein and Saha 2020, about $n^{1.6}$). An unrefereed October 2026 preprint by Gorbachev achieves a factor of exactly 3 (no $+\varepsilon$) in about $n^{11/6}$ time, slower than the $n^{1.6}$ of the $(3+\varepsilon)$ methods. He states that a $(3-\delta)$-approximation in truly subquadratic time would need new ideas, and that $(1+\varepsilon)$ in truly subquadratic time is open.
- _Barely subquadratic for $(1+\varepsilon)$:_ Mao and Rubinstein (accepted to STOC 2026) give a randomised $(1+\varepsilon)$-approximation in time $n^2/2^{\log^{\Omega(1)}n}$, faster by a super-polylogarithmic but not polynomial factor.
- _Lower bounds:_ no known fine-grained lower bound even excludes $(1+\varepsilon)$-approximation in $O(n)$ time. Gorbachev also proves the metric assumption is necessary: for non-metric weights, any approximation needs $\Omega(n^2)$ oracle queries.

**Why it is hard.** The constant-factor algorithms split the strings into blocks and compare block centres, losing accuracy at every level. The jump from a factor 3 to $1+\varepsilon$ seems to need a new idea for combining local information without losing a constant factor.

**Payoff.** Faster, nearly exact string comparison for genomics and text, if it were practical, and a clean test of whether the SETH-based hardness of exact edit distance is robust to approximation.
