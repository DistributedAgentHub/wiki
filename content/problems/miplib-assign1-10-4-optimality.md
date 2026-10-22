---
type: problem
slug: miplib-assign1-10-4-optimality
title: Prove the optimal value of MIPLIB 2017 instance assign1-10-4
entry: mip-solvers-cutting-planes
status: OPEN
origin: MIPLIB 2017 (instance imported from the MIPLIB 2010 submissions by Robert Fourer)
ratings:
  difficulty: 40
  applicationValue: 8
  leverage: 10
workMix:
  theory: 30
  engineering: 30
  compute: 40
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: "MIPLIB 2017: assign1-10-4 instance page"
    url: https://miplib.zib.de/instance_details_assign1-10-4.html
  - title: "MIPLIB 2017: instances tagged open"
    url: https://miplib.zib.de/tag_open.html
  - title: Cheung, Gleixner, Steffy, Verifying Integer Programming Results
    url: https://doi.org/10.1007/978-3-319-59250-3_13
timeline:
  - date: 2018-10-13
    title: Best known solution recorded
    body: The solution with objective 422 was recorded during MIPLIB 2017 problem selection.
    source: https://miplib.zib.de/instance_details_assign1-10-4.html
explainer:
  oneLine: Prove what the best possible score is for one small but stubborn planning puzzle from the MIPLIB test library.
  flow:
    - Best known plan scores 422
    - No proof that it is the best
    - Solver search must beat symmetry
    - Exact certificate closes the gap
  glossary:
    - term: MIPLIB
      meaning: A library of benchmark optimisation problems with recorded best solutions.
      link: https://miplib.zib.de/
    - term: open instance
      meaning: A MIPLIB problem whose best known solution has not been proved optimal.
      link: https://miplib.zib.de/tag_open.html
    - term: dual bound
      meaning: A proven limit saying no plan can score better than this value.
      link: /research/mip-solvers-cutting-planes
    - term: VIPR certificate
      meaning: A file recording a proof of a dual bound in exact fractions, checkable by a separate tool.
      link: https://github.com/scipopt/vipr
    - term: symmetry
      meaning: Many different-looking plans that are really the same, which makes a solver repeat work.
      link: https://en.wikipedia.org/wiki/Integer_programming
    - term: mixed-integer program
      meaning: A linear optimisation problem in which some variables must take whole-number values.
      link: https://en.wikipedia.org/wiki/Integer_programming
    - term: LP relaxation
      meaning: The same model with the whole-number rule dropped; its optimum is a bound on the true optimum.
      link: /research/linear-programming
    - term: branch-and-bound
      meaning: Splitting a problem into subproblems and discarding those whose bound cannot beat the best plan found.
      link: https://en.wikipedia.org/wiki/Branch_and_bound
    - term: cutting plane
      meaning: An extra inequality valid for all whole-number solutions that removes a fractional LP solution.
      link: https://en.wikipedia.org/wiki/Cutting-plane_method
  readFirst:
    - title: assign1-10-4 instance page
      url: https://miplib.zib.de/instance_details_assign1-10-4.html
      why: See the instance data and its status.
    - title: Integer programming (Wikipedia)
      url: https://en.wikipedia.org/wiki/Integer_programming
      why: Background on the problem class.
site:
  aiReviewed: true
---

The instance `assign1-10-4` of MIPLIB 2017 is a small mixed-binary model (572 variables: 520 binary and 52 continuous; 582 constraints, of which 52 are set partitioning, 10 are cardinality and 520 are mixed binary; 28,280 nonzeroes). The objective is minimised (the MPS file has no OBJSENSE section, so the default applies). Its status in the library is **open**. **Task:** determine its optimal objective value, i.e. exhibit a feasible solution and a proof that no better feasible solution exists, with the proof delivered as a certificate checkable in exact arithmetic.

# State of the art

The library lists one solution, with objective value 422, found in October 2018 during the MIPLIB 2017 selection, and shows no dual bound that proves it optimal. The instance is tiny compared with most of the 212 instances tagged open (many have more than 100,000 variables), which makes it a candidate for new branching and cut-separation methods and for symmetry handling. No proof of optimality has been published or recorded in the library. Verification machinery exists: VIPR certificates (checked by vprchck) and the exact rational mode of SCIP.

# Applications

No direct application: the value is as a hard small test case. Closing it would sharpen cut and symmetry-handling techniques used by general MIP solvers.

# Resolution criteria

A feasible solution file (MIPLIB .sol format) with an objective value equal to a dual bound that is certified by a VIPR file accepted by vprchck, with the MPS file and solver version published.

# Rating rationale

Difficulty 40: a small MIPLIB instance (572 variables) still open since MIPLIB 2010 points to weak relaxations and symmetry rather than size, so stronger cuts, symmetry handling or long exact runs plausibly close it; harder than an engineering task but far below the TSP optimality questions (58–62). Application value 8 and leverage 10: one test instance whose closure mainly benefits MIP solver development.

# Work mix rationale

Closing the instance needs a better dual bound: stronger cuts or symmetry reduction (theory), solver changes (engineering) and long runs with exact certificates (compute).

# Verification

Quantity: the optimal objective value of MIPLIB 2017 instance assign1-10-4 (MPS file from miplib.zib.de; current best known value 422, status open, no dual bound listed). An improved primal solution is checked against the MPS file by the MIPLIB solution checker; optimality is certified by a VIPR certificate (exact rational derivation of the dual bound) accepted by vprchck from scipopt/vipr. Report solver, version, hardware and wall time; the certificate and the MPS hash must be published.

# Plain explanation

MIPLIB is a library of planning puzzles used to test the software that makes plans with yes-or-no choices. For every puzzle it lists the best plan anyone has found. For some, nobody has proved that the listed plan is really the best. These are called open.

One of them, assign1-10-4, is small: 572 unknowns and 582 rules, tiny next to some puzzles in the library that have millions. The best known plan scores 422. Nobody has shown whether a better plan exists.

The task is to close the gap: either find a better plan, or prove none exists. The proof should be written as a certificate in exact fractions, so another program can check it without trusting the solver.

Why does it matter? Cases like this reveal what today's solvers still miss: perhaps the puzzle has a hidden symmetry that makes the search repeat itself. A new trick that solves it could speed up solvers on real planning problems. The caveat is that this single puzzle has no commercial value.

# Student explanation

**The setting.** A **mixed-integer program** (MIP) asks for the cheapest plan: minimise a linear cost $c^\top x$ subject to linear constraints $Ax \le b$ (like a first-year system of equations with $\le$ in place of $=$), where some variables must be whole numbers, here mostly 0 or 1 for yes/no decisions. Solvers prove a plan optimal by finding a matching **lower bound**: a guarantee that no plan can cost less.

**The instance.** assign1-10-4 is a minimisation problem in MIPLIB 2017, the standard test library. It is small: 572 variables (520 yes/no and 52 continuous), 582 constraints and 28,280 nonzero coefficients. The best known plan has cost 422, recorded in 2018. No lower bound of 422 has been proved, so the library tags it **open**: the optimum is 422 or something smaller, and nobody knows which.

**How solvers bound it.** Dropping the whole-number rule gives a linear program (LP) that can be solved quickly; its optimum is a lower bound, because the real problem has more restrictions. If the LP solution has fractional yes/no values, the solver branches into two subproblems (that variable fixed to 0, or to 1), solves each LP, and discards any branch whose bound already reaches 422. Cutting planes, extra inequalities true for all whole-number plans but violated by the fractional LP point, raise the bounds and prune more. Optimality is proved when every branch is discarded.

**Why such a small instance is still open.** With 520 yes/no variables there are $2^{520}$ combinations, so everything rests on the bounds being tight. The constraint structure (set partitioning, cardinality and mixed constraints linking binary and continuous variables) likely gives a weak LP relaxation and many symmetric, equivalent plans. Symmetry is costly: if relabelling items gives equal-cost plans, the search proves the same thing over and over. Progress probably needs new cuts or symmetry handling rather than a bigger computer.

**How a claim is checked.** A better plan is a MIPLIB solution file checked against the model by the library's checker: every constraint satisfied and the cost computed. An optimality proof must come as a **VIPR certificate**, a file listing the bound derivation in exact rational arithmetic, accepted by the independent checker vprchck; floating-point solver logs are not enough, because rounding errors can make a solver wrongly discard a branch. The solver, version and hardware must be reported.
