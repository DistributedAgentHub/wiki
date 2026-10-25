---
type: problem
slug: simplex-smoothed-complexity-dimension-dependence
title: "Smoothed simplex complexity: optimal dimension dependence (now O(σ^(−1/2) d^(11/4) log^(7/4) n))"
entry: linear-programming
status: PARTIAL
origin: Spielman and Teng (2001/2004); Dadush–Huiberts (2018); Huiberts–Lee–Zhang (STOC 2023); Bach–Huiberts (2025)
ratings:
  difficulty: 38
  applicationValue: 36
  leverage: 28
workMix:
  theory: 80
  engineering: 5
  compute: 15
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Bach, Huiberts: Optimal Smoothed Analysis of the Simplex Method"
    url: https://arxiv.org/abs/2504.04197
  - title: "Bach, Black, Huiberts, Kafer: Beyond Smoothed Analysis: Analyzing the Simplex Method by the Book"
    url: https://arxiv.org/abs/2510.21613
  - title: "Spielman, Teng: Smoothed analysis of algorithms: Why the simplex algorithm usually takes polynomial time (J. ACM 2004)"
    url: https://doi.org/10.1145/990308.990310
  - title: "Dadush, Huiberts: A friendly smoothed analysis of the simplex method (STOC 2018)"
    url: https://arxiv.org/abs/1711.05667
timeline:
  - date: 2001-07-06
    title: Smoothed analysis of simplex
    body: Spielman and Teng proved polynomial smoothed complexity (STOC 2001; J. ACM 2004).
    source: https://doi.org/10.1145/990308.990310
  - date: 2017-11-14
    title: Friendly smoothed analysis
    body: Dadush and Huiberts simplified and improved the analysis (arXiv 2017; STOC 2018).
    source: https://arxiv.org/abs/1711.05667
  - date: 2025-04-05
    title: Optimal noise dependence
    body: Bach and Huiberts proved O(σ^(-1/2) d^(11/4) log^(7/4) n) with a matching lower bound in σ.
    source: https://arxiv.org/abs/2504.04197
  - date: 2025-10-24
    title: Analysis by the book
    body: Bach, Black, Huiberts and Kafer introduced a framework beyond smoothed analysis.
    source: https://arxiv.org/abs/2510.21613
explainer:
  oneLine: Why does simplex almost always run fast? Pin down how its typical cost grows with the number of variables.
  flow:
    - Simplex hops corner to corner
    - Worst cases are astronomically slow
    - "Add small noise: worst cases vanish"
    - Noise dependence now shown optimal
    - "Open: tight dependence on dimension"
  glossary:
    - term: simplex method
      meaning: Dantzig's algorithm for linear programs that moves from corner to corner of the allowed region.
      link: https://en.wikipedia.org/wiki/Simplex_algorithm
    - term: linear program
      meaning: Optimising a straight-line goal under straight-line limits.
      link: https://en.wikipedia.org/wiki/Linear_programming
    - term: pivot
      meaning: One step of the simplex method, moving from one corner to a neighbouring one.
      link: https://en.wikipedia.org/wiki/Simplex_algorithm
    - term: smoothed analysis
      meaning: Measuring performance on worst-case inputs that have been shaken by a small amount of random noise.
      link: https://en.wikipedia.org/wiki/Smoothed_analysis
    - term: polyhedron
      meaning: A solid shape with flat faces; the set of allowed choices of a linear program.
      link: https://en.wikipedia.org/wiki/Polyhedron
    - term: Gaussian noise
      meaning: Random perturbation following the bell-curve distribution.
      link: https://en.wikipedia.org/wiki/Normal_distribution
    - term: diameter of a polyhedron
      meaning: The largest number of edges one must travel to get between two corners by the shortest route.
      link: https://en.wikipedia.org/wiki/Hirsch_conjecture
    - term: Klee–Minty cube
      meaning: A deformed cube on which classical simplex rules visit exponentially many corners.
      link: https://en.wikipedia.org/wiki/Klee%E2%80%93Minty_cube
    - term: pivot rule
      meaning: The rule that decides which neighbouring corner the simplex method moves to next.
      link: https://en.wikipedia.org/wiki/Simplex_algorithm
    - term: shadow-vertex method
      meaning: A simplex variant that follows the outline (shadow) of the shape projected onto a flat plane; it is the one smoothed analysis can handle.
      link: https://en.wikipedia.org/wiki/Smoothed_analysis
  readFirst:
    - title: Smoothed analysis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Smoothed_analysis
      why: The idea behind the explanation, in plain terms.
    - title: Simplex algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Simplex_algorithm
      why: What the method does and why it is fast in practice.
    - title: Klee–Minty cube (Wikipedia)
      url: https://en.wikipedia.org/wiki/Klee%E2%80%93Minty_cube
      why: The famous worst-case example that smoothing defuses.
site:
  aiReviewed: true
---

Consider the linear program $\max c^\top x$ subject to $Ax\le b$ with $A\in\mathbb R^{n\times d}$, where each row is perturbed by independent Gaussian noise of standard deviation $\sigma\max_i\|a_i\|$. The _smoothed complexity_ of a simplex variant is the maximum over inputs of the expected number of pivots. Spielman and Teng (2001; J. ACM 2004) proved a polynomial bound for the shadow-vertex simplex method; Bach and Huiberts (arXiv:2504.04197, April 2025) proved $O(\sigma^{-1/2}d^{11/4}\log(n)^{7/4})$, together with a high-probability lower bound $\Omega(\sigma^{-1/2}d^{1/2}\ln(4/\sigma)^{-1/4})$ on the combinatorial diameter of the smoothed polyhedron (for $n=\lfloor(4/\sigma)^d\rfloor$), so the $\sigma$-dependence is optimal up to polylogarithmic factors. _Determine the tight dependence on the dimension $d$: is the smoothed complexity $\tilde\Theta(d^{a}\sigma^{-1/2})$ for some explicit $a\in[1/2,11/4]$, and can the analysis be extended to the pivot rules actually used in solvers (Dantzig, steepest edge, devex)?_

# State of the art

**Upper bounds.** Spielman and Teng's original bound was $O(\sigma^{-30}d^{55}n^{86})$; Deshpande and Spielman (2005), Vershynin (2009), Dadush and Huiberts (2018, SIAM J. Comput. 2020), Huiberts, Lee and Zhang (STOC 2023, $O(\sigma^{-3/2}d^{13/4}\log^{7/4}n)$) and Bach and Huiberts (arXiv:2504.04197, April 2025, $O(\sigma^{-1/2}d^{11/4}\log^{7/4}n)$) improved it. Bach and Huiberts also proved a high-probability lower bound $\Omega(\sigma^{-1/2}d^{1/2}\ln(4/\sigma)^{-1/4})$ on the combinatorial diameter after smoothing, so $\sigma^{-1/2}$ is optimal among all simplex methods up to polylogarithmic factors, while the dimension exponent is open between $1/2$ and $11/4$. A 2025 follow-up by Bach, Black, Huiberts and Kafer (arXiv:2510.21613) proposes an analysis framework "by the book" using properties of real LPs.

**Open parts.** The dimension dependence $d^{11/4}$ has no matching lower bound (the known one is $d^{1/2}$), and all bounds are for variants of the shadow-vertex method with two-phase constructions, not the pivot rules used in practical codes. No pivot rule is known to be polynomial in the worst case, and strongly polynomial LP (Smale's ninth problem) is open; smoothed bounds do not address it.

# Applications

A tight, rule-specific smoothed analysis would explain, with a theorem, why simplex runs in near-linear iterations in practice on real LPs, and would guide pivot-rule and pre-conditioning design in solvers (Gurobi, HiGHS, CPLEX). It would not give a strongly polynomial algorithm.

# Resolution criteria

A theorem giving matching upper and lower bounds on smoothed pivot count up to polylogarithmic factors in $d$ and $\sigma$ for a shadow-vertex variant, or a smoothed polynomial bound for a pivot rule used in practice (Dantzig's rule or steepest edge).

# Rating rationale

The first 25 years of progress reduced exponents dramatically and the noise dependence is now proved optimal; what remains is the dimension exponent and extension to real pivot rules, which are technical but seem attackable, so difficulty is in the hard-but-visible band. Application value is moderate, as an explanation of solver behaviour. Leverage is limited to LP theory.

# Work mix rationale

Probabilistic geometry of random polytopes; numerical experiments on pivot counts test conjectured exponents.

# Verification

The target is matching upper and lower bounds (up to polylog factors) on smoothed pivot count for a shadow-vertex variant, or a smoothed polynomial bound for a pivot rule used in practice. This is a probabilistic geometry theorem outside Mathlib, so experts review it. Experiments on random perturbed LPs can illustrate scaling but do not prove it.

# Plain explanation

The simplex method, invented in 1947, is the standard tool for planning problems like scheduling and supply chains. It works by hopping from corner to corner of a many-sided shape, improving the answer each hop. In theory there are carefully built shapes where it needs an astronomical number of hops. In practice it is almost always very fast. For decades this was a puzzle.

In 2001 Spielman and Teng offered an explanation called smoothed analysis. Take any problem, even a nasty one, and add a tiny bit of random noise to its numbers, like the measurement error always present in real data. Then, on average, the method needs only a reasonable number of hops. The nasty examples are fragile: they collapse when jiggled.

Since then, researchers have tightened the bounds on how many hops. In 2025 Bach and Huiberts showed that the dependence on the amount of noise cannot be improved for this style of analysis. What remains open is the dependence on the number of variables (the dimension). The best bound grows like the dimension to the power 11 over 4. The best known lower bound is much smaller, about the square root of the dimension. Where in between is the truth?

A second question: do the proofs apply to the rules for choosing hops that real software actually uses? So far, they apply to a simpler, analysable rule.

Resolving this would turn a half-century-old explanation into a tight, trustworthy theory.

# Student explanation

**Setting.** Consider the linear program $\max c^{\top}x$ subject to $Ax\le b$, with $A\in\mathbb R^{n\times d}$ ($n$ constraints, $d$ variables). Perturb each row by independent Gaussian noise of standard deviation $\sigma\max_i\|a_i\|$. The **smoothed complexity** of a simplex variant is the maximum, over all inputs, of the _expected_ number of pivots (hops) on the perturbed input. Smoothed analysis interpolates between worst case ($\sigma\to0$) and average case (large $\sigma$).

**History of bounds.**

- Spielman and Teng (2001; J. ACM 2004) proved a polynomial bound for the shadow-vertex simplex method: originally $O(\sigma^{-30}d^{55}n^{86})$.
- Improvements by Deshpande and Spielman (2005), Vershynin (2009), Dadush and Huiberts (2018) and Huiberts, Lee and Zhang (2023), who obtained $O(\sigma^{-3/2}d^{13/4}\log^{7/4}n)$.
- Bach and Huiberts (arXiv, April 2025) proved $O(\sigma^{-1/2}d^{11/4}\log^{7/4}n)$, together with a high-probability lower bound $\Omega(\sigma^{-1/2}d^{1/2}\ln(4/\sigma)^{-1/4})$ on the _combinatorial diameter_ of the polyhedron after smoothing. The diameter is the longest shortest path between corners along edges; no simplex variant can take fewer pivots than the distance it needs to travel. Hence the $\sigma^{-1/2}$ dependence is optimal for simplex methods, up to polylogarithmic factors.

**The open problem.** Determine the tight dependence on the dimension $d$. Is the smoothed complexity $\tilde\Theta(d^{a}\sigma^{-1/2})$ for some explicit exponent $a$ between $1/2$ and $11/4$? And can the analysis be extended to the pivot rules actually used in solvers, such as Dantzig's rule, steepest edge and devex?

**Why it is hard.** The analysis tracks the shadow of the polyhedron projected onto a two-dimensional plane and bounds the number of its vertices, which involves delicate geometric probability. The lower bound uses the diameter and so applies to every pivot rule, but the upper bound is for a specific, analysable rule. The remaining gap in $d$ comes from loss in several geometric estimates.

**Why it matters.** It would turn the standard explanation for simplex's practical speed into a tight theory, and set a template for explaining other algorithms that work better than their worst case suggests. It would not change what solvers do.
