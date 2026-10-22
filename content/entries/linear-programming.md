---
type: entry
slug: linear-programming
title: Linear programming
field: optimization
kind: ALGORITHM
status: MATURE
summary: "Optimising a linear function over a polyhedron: solved fast in practice by simplex and interior-point methods, with polynomial-time guarantees and one famous gap, strong polynomiality."
reliedOn: LP underlies logistics, scheduling and network flow, supplies relaxations to integer programming solvers, and is the template for approximation algorithms in combinatorial optimisation.
dependsOn:
  - computational-complexity
  - fast-matrix-multiplication
references:
  - title: "Spielman and Teng: Smoothed Analysis of Algorithms: Why the Simplex Algorithm Usually Takes Polynomial Time"
    url: https://arxiv.org/abs/cs/0111050
    kind: paper
  - title: "Santos: A counterexample to the Hirsch conjecture"
    url: https://arxiv.org/abs/1006.2814
    kind: paper
  - title: "Cohen, Lee, Song: Solving Linear Programs in the Current Matrix Multiplication Time"
    url: https://arxiv.org/abs/1810.07896
    kind: paper
  - title: "Dadush, Koh, Natura, Olver, Végh: A strongly polynomial algorithm for linear programs with at most two non-zero entries per row or column"
    url: https://doi.org/10.1145/3618260.3649764
    kind: paper
  - title: "Bach and Huiberts: Optimal Smoothed Analysis of the Simplex Method"
    url: https://arxiv.org/abs/2504.04197
    kind: paper
  - title: "Applegate et al.: PDLP: A Practical First-Order Method for Large-Scale Linear Programming"
    url: https://arxiv.org/pdf/2501.07018v2
    kind: paper
timeline:
  - date: 2010-06-14
    title: Hirsch conjecture disproved
    body: Santos constructed a 43-dimensional polytope with 86 facets whose diameter exceeds the Hirsch bound n - d, showing that the 1957 conjecture is false; the polynomial Hirsch question remains open.
    source: https://arxiv.org/abs/1006.2814
  - date: 2018-10-18
    title: LP in matrix multiplication time
    body: Cohen, Lee and Song gave an interior-point algorithm running in about n^ω log(n/δ) arithmetic operations, up to lower-order terms (STOC 2019).
    source: https://arxiv.org/abs/1810.07896
  - date: 2024-06-10
    title: Strongly polynomial for two nonzeros per row or column
    body: Dadush, Koh, Natura, Olver and Végh gave a strongly polynomial algorithm for generalised flow and all LPs with at most two nonzeros per row or column (STOC 2024).
    source: https://doi.org/10.1145/3618260.3649764
  - date: 2025-04-05
    title: Optimal smoothed analysis of simplex
    body: Bach and Huiberts proved an O(σ^(-1/2) d^(11/4) log(n)^(7/4)) smoothed pivot bound for a simplex method, with a matching lower bound in its dependence on the noise level σ.
    source: https://arxiv.org/abs/2504.04197
explainer:
  oneLine: Finding the best choice when everything is a straight-line trade-off, like the cheapest diet meeting nutrition limits.
  flow:
    - "Linear trade-offs: maximise profit or minimise cost"
    - Allowed choices form a many-sided shape
    - Simplex hops corner to corner
    - Hard cases exist but noise kills them
    - "Open: speed independent of number size"
  glossary:
    - term: linear program
      meaning: An optimisation problem where both the goal and the limits are straight-line (linear) relationships.
      link: https://en.wikipedia.org/wiki/Linear_programming
    - term: polyhedron
      meaning: A solid shape with flat faces and straight edges; the set of allowed choices in a linear program is one.
      link: https://en.wikipedia.org/wiki/Polyhedron
    - term: simplex method
      meaning: Dantzig's algorithm that moves from corner to corner of the allowed region, improving the answer each step.
      link: https://en.wikipedia.org/wiki/Simplex_algorithm
    - term: interior-point method
      meaning: An algorithm that moves through the inside of the allowed region toward the best corner instead of along edges.
      link: https://en.wikipedia.org/wiki/Interior-point_method
    - term: ellipsoid method
      meaning: The first provably polynomial-time method for linear programs, by shrinking an egg-shaped region around the answer.
      link: https://en.wikipedia.org/wiki/Ellipsoid_method
    - term: smoothed analysis
      meaning: Measuring an algorithm's performance when worst-case inputs are shaken by a small random noise.
      link: https://en.wikipedia.org/wiki/Smoothed_analysis
    - term: polynomial time
      meaning: Running time that grows like a fixed power of the input size.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: strongly polynomial
      meaning: Polynomial in the count of numbers in the input, regardless of how large the numbers themselves are.
      link: https://en.wikipedia.org/wiki/Strongly-polynomial_time
    - term: matrix multiplication exponent
      meaning: The exponent describing the best known cost of multiplying large grids of numbers.
      link: /research/fast-matrix-multiplication
    - term: Klee-Minty cube
      meaning: A deformed cube on which classical simplex rules take exponentially many steps.
      link: https://en.wikipedia.org/wiki/Klee%E2%80%93Minty_cube
    - term: pivot
      meaning: "One step of the simplex method: moving from one corner of the allowed region to a neighbouring one."
      link: https://en.wikipedia.org/wiki/Simplex_algorithm
    - term: objective function
      meaning: The quantity a linear program tries to make as small (or as large) as possible, such as cost or profit.
      link: https://en.wikipedia.org/wiki/Linear_programming
  readFirst:
    - title: Linear programming (Wikipedia)
      url: https://en.wikipedia.org/wiki/Linear_programming
      why: Gentle introduction with diet, factory and flow examples.
    - title: Simplex algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Simplex_algorithm
      why: A picture-based walk along the corners of the allowed region.
    - title: Smoothed analysis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Smoothed_analysis
      why: Why the worst cases almost never appear in practice.
site:
  published: true
  aiReviewed: true
---

## The problem

A linear program asks for
$\min\; c^{\top}x\quad\text{subject to}\quad Ax\le b,$
with $A\in\mathbb R^{m\times n}$. The feasible set is a polyhedron, and an optimum, if it exists, is attained at a vertex.

## Simplex

Dantzig's simplex method (1947) moves from vertex to vertex along edges, improving the objective. For the classical pivot rules there are instances, starting with Klee and Minty (1972), on which it takes exponentially many steps. In practice it is nevertheless very fast. Spielman and Teng (2001) explained this through _smoothed analysis_: if every input number is perturbed by Gaussian noise of standard deviation $\sigma$, a simplex variant takes polynomially many pivots in expectation. The bound has been improved repeatedly; Bach and Huiberts (2025) obtained $O(\sigma^{-1/2}d^{11/4}\log(n)^{7/4})$ pivot steps and a matching lower bound on the diameter of the perturbed polyhedron, so the dependence on noise is essentially optimal for this approach.

## Polynomial-time methods

The ellipsoid method (Khachiyan, 1979) gave the first polynomial algorithm in the bit-length of the input; Karmarkar's interior-point method (1984) made polynomial-time LP practical. Interior-point methods follow the _central path_ through the interior, solving a linear system per step. Cohen, Lee and Song (2018) showed that LP with $n$ variables can be solved to accuracy $\delta$ in about $n^{\omega}\log(n/\delta)$ arithmetic operations, where $\omega$ is the matrix multiplication exponent (with current values of $\omega$ and its dual exponent). For very large instances, first-order methods such as PDLP, available in Google's OR-Tools, avoid factorising matrices and scale to problems that factorisation-based solvers cannot hold in memory.

## Strongly polynomial time

The algorithms above run in time polynomial in the _bit-length_ of the data, which can depend on the sizes of the numbers. A _strongly polynomial_ algorithm uses a number of arithmetic operations polynomial in $m$ and $n$ alone. Tardos (1986) gave an algorithm whose number of arithmetic operations depends only on the size of the constraint matrix $A$, not on $b$ and $c$, so it is strongly polynomial when $A$ has small integer entries (as in network flow problems). Finding one for general LP, in the real-number model of computation, is Smale's ninth problem (1998). Related facts: the Hirsch conjecture on polytope diameters was disproved by Santos (2010), though polynomial bounds on the diameter remain open; and primal-dual log-barrier interior-point methods are not strongly polynomial (Allamigeon, Benchimol, Gaubert and Joswig, 2017), a result extended to all self-concordant barrier methods by Allamigeon, Gaubert and Vandame (2022).

## Recent progress

Dadush, Huiberts, Natura and Végh (STOC 2020) gave an interior-point method whose iteration count depends only on a rescaling-invariant condition measure of $A$. Dadush, Koh, Natura, Olver and Végh (STOC 2024) gave a strongly polynomial algorithm for LPs with at most two nonzero entries per row or per column, which includes minimum-cost generalised flow, a long-standing open case.

## Practice

Commercial and open-source solvers combine simplex, barrier and first-order methods with presolve. Real-world instances with millions of variables are routine. The theory leaves the worst-case question open, but there is no known practical instance class on which the algorithms in use perform badly.

# Plain explanation

Imagine running a factory. You have limited workers, materials and machine hours, and several products that earn different profits. Everything scales in straight lines: double the output, double the materials. What mix of products earns the most? That is a linear program.

These problems show up everywhere: airline crew scheduling, shipping routes, diet planning, power-grid dispatch. In 1947 George Dantzig invented the simplex method, which walks along the corners of the set of allowed choices, always moving to a better corner. It is famously fast in practice.

But there is a puzzle. Mathematicians found cooked-up examples where simplex takes an absurdly long time. Yet on real problems it almost never does. In 2001 Spielman and Teng explained why: if the data has even a tiny bit of random noise, the bad cases disappear. This idea is called smoothed analysis.

Other methods, such as interior-point methods, are guaranteed to be fast and also work well in practice. They cut through the middle of the allowed region instead of walking along its edges.

The open question: is there a method whose running time depends only on how many numbers there are, not on how big those numbers are? Nobody knows.

Analogy: simplex is climbing a crystal from corner to corner, interior-point is tunnelling through the middle.

# Student explanation

**The problem.** A _linear program_ (LP) asks for

$\min\ c^{\top}x\quad\text{subject to}\quad Ax\le b,$

which says: choose the vector $x$ of unknowns to make the linear cost $c^{\top}x$ as small as possible, while obeying the linear inequalities in $Ax\le b$. The set of allowed $x$ is a _polyhedron_, a shape with flat faces, and if an optimum exists it is attained at a corner (vertex).

**Simplex.** Dantzig's simplex method (1947) moves from vertex to vertex along edges, improving the objective each step. Klee and Minty (1972) built examples where classical pivot rules take exponentially many steps. Yet in practice simplex is very fast. **Smoothed analysis** (Spielman and Teng, 2001) explains this: if every input number is perturbed by a small random Gaussian amount of size $\sigma$, a simplex variant takes polynomially many pivots on average, for the worst underlying input. Later work has improved the bound many times; Bach and Huiberts (2025) obtained roughly $\sigma^{-1/2}d^{11/4}\log^{7/4}(n)$ pivots for $d$ variables and $n$ constraints, together with a matching lower bound for the noise dependence of this approach.

**Polynomial-time methods.** The _ellipsoid method_ (Khachiyan, 1979) was the first proven polynomial-time algorithm, polynomial in the number of bits of the input, though slow in practice. Karmarkar (1984) introduced _interior-point methods_, which follow a _central path_ through the inside of the polyhedron, solving a linear system at each step. Cohen, Lee and Song (2018) showed that an LP with $n$ variables can be solved to accuracy $\delta$ in about $n^{\omega}\log(n/\delta)$ operations, where $\omega$ is the matrix multiplication exponent. For very large problems, first-order methods (like PDLP in Google's OR-Tools) avoid matrix factorisation and scale further.

**Strongly polynomial time.** The known polynomial algorithms have a running time that depends on the size of the numbers in the input. A _strongly polynomial_ algorithm would depend only on the number of variables and constraints. Whether one exists for general LP is a famous open question (one of Smale's problems). Strongly polynomial algorithms are known for special cases such as network flows.

**Why it matters.** LP is a workhorse for industry and a core subroutine of integer programming, approximation algorithms and many machine-learning methods. Progress on LP speed feeds directly into, and borrows from, fast matrix multiplication and graph algorithms such as maximum flow.
