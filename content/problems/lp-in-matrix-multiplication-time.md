---
type: problem
slug: lp-in-matrix-multiplication-time
title: "Linear programming in matrix-multiplication time: O(n^ω log(1/ε)) with no extra terms"
entry: linear-programming
status: OPEN
origin: Zhao Song, Ph.D. thesis (2019), following Cohen, Lee and Song (STOC 2019)
ratings:
  difficulty: 30
  applicationValue: 10
  leverage: 20
verification:
  route: REVIEW
sources:
  - title: "Song: Solving Linear Programs in the Matrix Multiplication Time (arXiv:2611.07980, preprint)"
    url: https://arxiv.org/abs/2611.07980
  - title: "Cohen, Lee, Song: Solving Linear Programs in the Current Matrix Multiplication Time (STOC 2019; arXiv:1810.07896)"
    url: https://arxiv.org/abs/1810.07896
  - title: "Jiang, Song, Weinstein, Zhang: Faster Dynamic Matrix Inverse for Faster LPs (arXiv:2004.07470)"
    url: https://arxiv.org/abs/2004.07470
  - title: "van den Brand: A Deterministic Linear Program Solver in Current Matrix Multiplication Time (SODA 2020; arXiv:1910.11957)"
    url: https://arxiv.org/abs/1910.11957
links:
  - to: matrix-multiplication-exponent
    kind: BUILDS_ON
    note: The target running time is stated in terms of ω, and the algorithms use fast (rectangular) matrix multiplication for the dominant linear-algebra step.
  - to: simplex-smoothed-complexity-dimension-dependence
    kind: RELATED
    note: Both concern the theoretical running time of linear programming, one for interior-point methods in the worst case and one for the simplex method under smoothed analysis.
timeline:
  - date: 2018-10-18
    title: LP in current matrix multiplication time
    body: Cohen, Lee and Song gave an interior-point algorithm with stochastic central path and a projection-matrix maintenance scheme, running in $O^*((n^\omega+n^{2.5-\alpha/2}+n^{2+1/6})\log(n/\delta))$ (STOC 2019).
    source: https://arxiv.org/abs/1810.07896
  - date: 2019-10-25
    title: Deterministic version
    body: Van den Brand derandomized the Cohen–Lee–Song algorithm, obtaining a strict $\tilde O(n^\omega\log(n/\delta))$ bound (SODA 2020).
    source: https://arxiv.org/abs/1910.11957
  - date: 2020-04-16
    title: Faster dynamic matrix inverse
    body: Jiang, Song, Weinstein and Zhang improved the exponent from $2+\max\{1/6,\omega-2,(1-\alpha)/2\}$ to $2+\max\{1/18,\omega-2,(1-\alpha)/2\}$ (STOC 2021).
    source: https://arxiv.org/abs/2004.07470
  - date: 2026-11-05
    title: Claimed matrix-multiplication-time LP solver in a restricted setting
    body: Zhao Song posted a 124-page preprint claiming expected time $O((n^\omega+n^2\log n)\log(1/\varepsilon))$ for feasible bounded-box LPs with $d\le n=O(d)$ constraints and additive accuracy. Unrefereed.
    source: https://arxiv.org/abs/2611.07980
explainer:
  oneLine: Can a linear program be solved as fast as multiplying two big matrices, with no extra cost? A 2026 preprint claims yes in a restricted case.
  flow:
    - Interior-point step solves a linear system
    - System changes a little each step
    - Maintain the inverse, don't recompute it
    - "2019 cost: n^ω plus extra terms"
    - "2026 claim: extra terms removed, restricted case"
  glossary:
    - term: linear program (LP)
      meaning: Choose numbers to minimise a straight-line cost while meeting a set of straight-line equations and inequalities.
      link: https://en.wikipedia.org/wiki/Linear_programming
    - term: interior-point method
      meaning: An LP solving method that moves through the inside of the allowed region along a smooth path, rather than along its corners.
      link: https://en.wikipedia.org/wiki/Interior-point_method
    - term: simplex method
      meaning: An LP method that travels from corner to corner of the allowed region, improving the cost each time.
      link: https://en.wikipedia.org/wiki/Simplex_algorithm
    - term: matrix multiplication exponent ω
      meaning: The number such that two n×n matrices can be multiplied in about n^ω steps; it is at least 2 and currently known to be about 2.37.
      link: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
    - term: dual exponent α
      meaning: "A companion number: the largest α for which a very lopsided product (n×n^α by n^α×n) can be computed in about n² steps; it is at most 1, and the best proven lower bound is about 0.32."
      link: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
    - term: additive accuracy
      meaning: An answer within ε of the true optimum in absolute terms, as opposed to relative accuracy, where the error is a fraction of the optimum's size.
      link: https://en.wikipedia.org/wiki/Approximation_error
    - term: randomized algorithm
      meaning: A method that makes random choices, so its running time is judged on average (in expectation) over those choices.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: big-O notation
      meaning: A way to say how fast a quantity grows, ignoring constant factors; O* also ignores logarithmic factors.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: matrix inverse
      meaning: The matrix that undoes a given matrix; solving a linear system amounts to applying it.
      link: https://en.wikipedia.org/wiki/Invertible_matrix
  readFirst:
    - title: Interior-point method (Wikipedia)
      url: https://en.wikipedia.org/wiki/Interior-point_method
      why: Explains the path through the inside of the feasible region and why each step is a linear solve.
    - title: Computational complexity of matrix multiplication (Wikipedia)
      url: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
      why: Defines ω and lists how the best known value has fallen over the decades.
    - title: Linear programming (Wikipedia)
      url: https://en.wikipedia.org/wiki/Linear_programming
      why: Diet, factory and flow examples of the problems being solved.
    - title: Karmarkar's algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Karmarkar%27s_algorithm
      why: The 1984 algorithm that started the interior-point era for LP.
raw:
  student: "**Linear programs.** A linear program (LP) asks you to minimise a straight-line cost $c^\\top x=c_1x_1+\\dots+c_nx_n$ over $n$ variables, subject to $d$ linear equations $Ax=b$ (a system like those in first-year linear algebra) and $x\\ge 0$. The allowed points form a many-sided solid; the best point sits at a corner. The simplex method walks from corner to corner. **Interior-point methods** instead travel through the inside of the solid along a smooth path (the *central path*) that ends at the optimum, using Newton-style steps. Each step solves a linear system with a matrix of the form $A W A^\\top$, where $W$ is a diagonal matrix of weights that changes slowly from step to step.\n\n**Where matrix multiplication enters.** Solving or inverting an $n\\times n$ system costs about $n^3$ operations by the elimination you learned, but fast algorithms bring it to $O(n^{\\omega})$, with $\\omega$ the *matrix multiplication exponent*. The best known value is about $2.37$, and nobody knows whether it can be $2$. An interior-point method needs roughly $\\sqrt n$ steps (up to logs), so a naive implementation costs about $n^{\\omega+1/2}$. The Cohen–Lee–Song algorithm (STOC 2019) avoids this by *maintaining* the inverse as $W$ changes, updating it cheaply instead of recomputing, and by using a randomised (stochastic) central path. Their stated running time is $O^*\\big((n^{\\omega}+n^{2.5-\\alpha/2}+n^{2+1/6})\\log(n/\\delta)\\big)$, where $\\alpha$ is the *dual exponent* (the largest $\\alpha$ for which an $n\\times n^{\\alpha}$ times $n^{\\alpha}\\times n$ product can be done in $n^{2+o(1)}$ time) and $\\delta$ is the relative accuracy. With today's $\\omega\\approx2.37$ and $\\alpha\\approx0.31$ the first term dominates, giving $O^*(n^{\\omega}\\log(n/\\delta))$. If $\\omega$ were $2$, the bound would be $n^{2+1/6}$, not $n^2$. Jiang, Song, Weinstein and Zhang (2020) improved the exponent on that stubborn term from $1/6$ to $1/18$, about $n^{2.055}$.\n\n**The open question.** Zhao Song's 2019 thesis asked for a bound that is a function of $\\omega$ alone, with no such extra terms. His 2026 preprint (arXiv:2611.07980, 124 pages) claims expected time $O((n^{\\omega}+n^2\\log n)\\log(1/\\varepsilon))$, but only for LPs that are feasible, live in a bounded box, have $d\\le n=O(d)$ independent equality constraints, and where accuracy is *additive* ($\\varepsilon$ in absolute terms) rather than relative. It is a single-author preprint and no one has checked it publicly. DARC has not verified the proof.\n\n**Why it matters.** It is mainly a statement about how LP is related to matrix multiplication in the abstract. Real solvers use simplex or sparse interior-point codes, because these fast-multiplication algorithms only beat the textbook cubic method at enormous sizes."
site:
  aiReviewed: true
---

Let $\omega$ be the exponent of matrix multiplication. Given a linear program with $n$ variables and $d\le n$ linearly independent equality constraints, can it be solved to accuracy $\varepsilon$ in time $\tilde O(n^{\omega}\log(1/\varepsilon))$ **for every value of $\omega$**, that is, with a bound that is a function of $\omega$ alone and carries no additional polynomial term such as $n^{2+1/6}$ or $n^{2.5-\alpha/2}$ (with $\alpha$ the dual exponent of matrix multiplication)? The cost of one dense matrix product is a natural floor for solving a dense LP by interior-point methods, so the question asks whether an LP costs no more than inverting a matrix. DARC's reading of the question, taken from the wording of the 2026 preprint's abstract (the thesis itself was not opened), is that it asks for this ω-only bound; for the current value $\omega\approx 2.37$ the Cohen–Lee–Song abstract already states $O^*(n^{\omega}\log(n/\delta))$, so the open part is the form of the bound if $\omega$ is smaller.

# State of the art

**Accepted bounds (as stated in the abstracts).** Cohen, Lee and Song (STOC 2019; J. ACM 2020) solve $\min_{Ax=b,\,x\ge0}c^\top x$ in $O^*\big((n^{\omega}+n^{2.5-\alpha/2}+n^{2+1/6})\log(n/\delta)\big)$ time with relative accuracy $\delta$, which for $\omega\sim2.37$ and $\alpha\sim0.31$ is $O^*(n^{\omega}\log(n/\delta))$; if $\omega=2$ it is $O^*(n^{2+1/6}\log(n/\delta))$. Van den Brand (SODA 2020) derandomized this to a strict $\tilde O(n^{\omega}\log(n/\delta))$ bound. Jiang, Song, Weinstein and Zhang (arXiv:2004.07470) lowered the exponent from $2+\max\{1/6,\omega-2,(1-\alpha)/2\}$ to $2+\max\{1/18,\omega-2,(1-\alpha)/2\}$, which is $n^{2.055}$ when $\omega\approx2$ and $\alpha\approx1$, against $n^{2.16}$ before.

**Claimed (unrefereed).** Zhao Song (arXiv:2611.07980, 5 November 2026, 124 pages) gives a randomized algorithm for feasible LPs with a bounded box, $n$ variables, $d\le n=O(d)$ linearly independent equality constraints and additive accuracy $\varepsilon$, in expected time $O((n^{\omega}+n^2\log n)\log(1/\varepsilon))$, and says this answers the matrix-multiplication-time question from his 2019 thesis. The setting is narrower than the general results above (feasible, bounded box, $n=O(d)$, additive rather than relative accuracy, expected rather than worst-case time), so even if correct it does not by itself replace them. Single author, not refereed, so the status stays OPEN.

# Applications

Mostly theoretical. Practical LP solvers rely on simplex and on interior-point codes with sparse linear algebra, and the fast-matrix-multiplication algorithms behind these bounds are galactic, so no change to solvers is expected. The value is a clean statement of LP's complexity relative to matrix multiplication, and techniques (dynamic matrix inverse maintenance, sketching) that other optimization algorithms reuse.

# Resolution criteria

A proof, accepted by experts or refereed, of a randomized or deterministic LP algorithm running in $\tilde O(n^{\omega}\log(1/\varepsilon))$ with no additional polynomial term for any $\omega\ge2$, for general (not only bounded-box, $n=O(d)$) linear programs with the accuracy notion stated; or a verified correct version of arXiv:2611.07980 together with an argument that its restrictions can be removed or do not matter for the question as posed in the thesis.

# Rating rationale

Difficulty 30: the open part is a lower-order additive term (the largest was n^(2+1/6), cut to n^(2+1/18) in 2020) that matters only if ω is close to 2, and a complete claimed algorithm exists, but it is an unrefereed single-author preprint in a restricted setting; far below the matrix multiplication exponent itself (82) and below the smoothed simplex question (38) because the path is visible and a candidate is already written. Application value 10: the fast-matrix-multiplication algorithms are galactic and production LP solvers use simplex and sparse interior-point codes, so the benefit is theoretical (simplex smoothed analysis, by contrast, is 36). Leverage 20: sharpens interior-point and dynamic-matrix techniques for a few results in one subfield.

# Verification

Route: expert review of arXiv:2611.07980. Reviewers should check the 124-page argument, compare its bound against Cohen–Lee–Song and Jiang–Song–Weinstein–Zhang in the restricted setting (feasible, bounded box, d ≤ n = O(d), additive accuracy ε, expected time), and decide whether it answers the thesis question as posed. Acceptance is by refereed publication or independent expert write-up.

# Plain explanation

Many planning questions ask for the best choice under a list of limits: the cheapest diet that meets every nutrition need, the factory plan that earns most from fixed machines and workers. When the quantities are linked in straight-line ways, this is called a linear program, and computers solve huge ones every day.

How long should this take? Computer scientists compare it with another job: multiplying two big tables of numbers. That job has a speed limit nobody has fully pinned down, and fast methods for it are used inside many other algorithms. A natural hope is that solving a linear program should cost no more than one such multiplication.

Papers from 2018 to 2020 came close. Their running times match the multiplication time with today's best known methods, but they carry extra pieces that would show up if multiplication ever gets faster. In November 2026 one researcher posted a long paper claiming to remove those extra pieces, but only for a narrower family of linear programs. No expert has confirmed it yet, and these methods are far too complicated to be used in real software, so nobody expects it to change how planning tools work.
