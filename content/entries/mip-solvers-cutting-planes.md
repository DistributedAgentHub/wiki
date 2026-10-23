---
type: entry
slug: mip-solvers-cutting-planes
title: "Integer programming solvers: branch-and-cut, HiGHS, SCIP, MIPLIB and VIPR"
field: optimization
kind: LIBRARY
status: ACTIVE
summary: Open-source LP and mixed-integer solvers (HiGHS, SCIP), the MIPLIB instance library with its list of open instances, and VIPR certificates that check optimality claims in exact arithmetic.
reliedOn: Scheduling, logistics, energy planning, chip layout and combinatorial research rely on MIP solvers; MIPLIB defines which instances count as solved or open, and exact certificates make a claimed optimality proof independently checkable.
dependsOn:
  - computational-complexity
  - linear-programming
references:
  - title: "Gleixner et al., MIPLIB 2017: data-driven compilation of the 6th mixed-integer programming library (Math. Program. Comput. 2021)"
    url: https://doi.org/10.1007/s12532-020-00194-3
    kind: paper
  - title: MIPLIB 2017 (instances, status, solutions)
    url: https://miplib.zib.de/
    kind: docs
  - title: "MIPLIB 2017: instances tagged open"
    url: https://miplib.zib.de/tag_open.html
    kind: docs
  - title: Huangfu, Hall, Parallelizing the dual revised simplex method (Math. Program. Comput. 2018)
    url: https://doi.org/10.1007/s12532-017-0130-5
    kind: paper
  - title: HiGHS project site
    url: https://highs.dev/
    kind: docs
  - title: The SCIP Optimization Suite 9.0 (arXiv:2402.17702)
    url: https://arxiv.org/abs/2402.17702
    kind: paper
  - title: Cheung, Gleixner, Steffy, Verifying Integer Programming Results (IPCO 2017)
    url: https://doi.org/10.1007/978-3-319-59250-3_13
    kind: paper
  - title: Eifler, Gleixner, Safe and Verified Gomory Mixed Integer Cuts in a Rational MIP Framework (SIAM J. Optim. 2024)
    url: https://doi.org/10.1137/23M156046X
    kind: paper
  - title: Concorde TSP solver (University of Waterloo)
    url: https://www.math.uwaterloo.ca/tsp/concorde.html
    kind: code
timeline:
  - date: 2017-06-01
    title: VIPR certificates
    body: Cheung, Gleixner and Steffy introduced the VIPR format and checker for MIP results; month given as the conference month (IPCO 2017).
    source: https://doi.org/10.1007/978-3-319-59250-3_13
  - date: 2018-01-01
    title: HiGHS dual simplex paper
    body: Huangfu and Hall published the parallel dual revised simplex method behind HiGHS; year only.
    source: https://doi.org/10.1007/s12532-017-0130-5
  - date: 2021-01-01
    title: MIPLIB 2017 paper
    body: Gleixner et al. described the data-driven compilation of MIPLIB 2017 and its status classification; year only.
    source: https://doi.org/10.1007/s12532-020-00194-3
  - date: 2024-02-01
    title: SCIP Optimization Suite 9.0
    body: The SCIP team released version 9.0 and documented it on arXiv; month from the arXiv identifier.
    source: https://arxiv.org/abs/2402.17702
  - date: 2025-10-17
    title: New World TSP tour
    body: Yuichi Nagata found a tour of 1,904,711 cities of length 7,515,755,912, 44 metres shorter than the previous record.
    source: https://www.math.uwaterloo.ca/tsp/world/index.html
explainer:
  oneLine: Programs that find the best plan under many yes-or-no choices, and the library of test cases that tracks which remain unsolved.
  flow:
    - Relax the yes-or-no choices to fractions
    - Split into cases, prune bad ones
    - Add cuts that remove false fractions
    - Certify the final bound in exact arithmetic
  glossary:
    - term: mixed-integer program
      meaning: An optimisation problem with linear rules in which some unknowns must be whole numbers.
      link: https://en.wikipedia.org/wiki/Integer_programming
    - term: LP relaxation
      meaning: The same problem with the whole-number requirement dropped, giving a quick estimate of the best score.
      link: /research/linear-programming
    - term: cutting plane
      meaning: An extra rule that cuts off a fractional answer but keeps all valid whole-number answers.
      link: https://en.wikipedia.org/wiki/Cutting-plane_method
    - term: branch-and-cut
      meaning: Splitting the problem into cases while adding cutting planes to tighten each case.
      link: https://en.wikipedia.org/wiki/Branch_and_cut
    - term: presolve
      meaning: Simplifying a model before solving by removing redundant rules and tightening limits.
      link: https://en.wikipedia.org/wiki/Integer_programming
    - term: optimality certificate
      meaning: A file that proves a claimed best plan cannot be beaten, checkable without trusting the solver.
      link: https://github.com/scipopt/vipr
    - term: linear program
      meaning: Minimise or maximise a linear function subject to linear inequalities; solvable quickly, unlike its whole-number version.
      link: /research/linear-programming
    - term: incumbent
      meaning: The best feasible plan found so far during the search; branches whose bound is worse than it are discarded.
      link: https://en.wikipedia.org/wiki/Branch_and_bound
    - term: MIPLIB
      meaning: The standard public library of mixed-integer test instances, with each instance's best known value and status.
      link: https://miplib.zib.de/
    - term: travelling salesman problem
      meaning: Find the shortest closed tour visiting every city exactly once.
      link: https://en.wikipedia.org/wiki/Travelling_salesman_problem
  readFirst:
    - title: MIPLIB 2017
      url: https://miplib.zib.de/
      why: Browse the instances and see their status.
    - title: HiGHS
      url: https://highs.dev/
      why: A practical open-source solver with documentation.
    - title: Integer programming (Wikipedia)
      url: https://en.wikipedia.org/wiki/Integer_programming
      why: Overview of the problem class and solution methods.
raw:
  body: "## Branch-and-cut\n\nA **mixed-integer linear program** (MIP) minimises a linear function subject to linear constraints with some variables required to be integer. Solvers work by **branch-and-bound**: solve the LP relaxation (drop integrality) to get a lower bound, branch on a fractional variable, and discard subtrees whose bound exceeds the best integer solution (the *incumbent*). **Cutting planes** (Gomory mixed-integer cuts, cover cuts, and many others) tighten the relaxation before and during branching, which gives *branch-and-cut*. **Presolve** simplifies the model first: fixing variables, tightening bounds, removing redundant rows. Primal heuristics find good incumbents early. Everything rests on a fast LP solver, usually dual simplex.\n\n## HiGHS and SCIP\n\n**HiGHS** (ERGO-Code, Edinburgh) is MIT-licensed open-source software for large sparse LP, MIP and QP, with a dual revised simplex, an interior point solver, an active set QP solver and a branch-and-cut MIP solver. It is offered through JuMP, GAMS, AMPL, SciPy, Pyomo and CVXPY. **SCIP** is a solver and a framework for constraint integer programming and branch-cut-and-price, under the Apache 2.0 licence since version 8.0.3, with plugin hooks for branching, separation, propagation and pricing; it can use SoPlex as its LP solver and has an exact rational mode.\n\n## MIPLIB and open instances\n\n**MIPLIB 2017** is the standard library of MIP instances, compiled in a data-driven way from submissions. Every instance has a status. Besides *easy* and *hard* ones, instances tagged **open** have no known optimal solution proof: the library lists the best known objective value, and the page for such an instance shows no dual bound that closes the gap. At the time of writing the open tag lists 212 instances. Any solver run that closes one of them is a publishable record.\n\n## Certificates: VIPR\n\nFloating-point solvers can be wrong, so an optimality claim needs independent checking. **VIPR** (Verifying Integer Programming Results; Cheung, Gleixner and Steffy, IPCO 2017) is a file format for certificates of LP-based branch-and-cut derivations, checked in exact rational arithmetic by the `vprchck` tool. The SCIP exact rational extension can produce VIPR files, and version 1.1 of the format (motivated by Eifler and Gleixner's work on verified Gomory cuts, SIAM J. Optim. 2024) supports incomplete certificates that a tool completes with SoPlex. A result is therefore \"optimal\" in the strong sense: a deductive proof, not a solver log.\n\n## TSP and Concorde\n\nFor the travelling salesman problem, the **Concorde** code of Applegate, Bixby, Chvátal and Cook is a branch-and-cut solver built on the same ideas. Cook's TSP pages track the largest instances: for the 1,904,711-city World TSP and the 100,000-city Mona Lisa instance, the best tours are within a few hundredths of a percent of Concorde's lower bounds, but optimality is unproven (see the two problems below).\n\n## Limits\n\nBenchmarks on MIPLIB depend on hardware and time limits, and solvers differ in how they treat numerics. A solution is a certificate of feasibility only; closing the gap needs the dual proof."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Many real decisions have yes-or-no choices and tight rules: which trucks go where, which power plants run, which tasks go on which machine. A mixed-integer program describes such a problem with numbers. Software called a solver then looks for the best plan.

The solver works like a careful explorer. It first solves an easier version where choices may be fractions, which gives a hopeful estimate of the best possible score. Then it splits the problem into cases ("truck A goes, or it does not") and drops any case whose estimate is worse than a plan already found. It also adds extra rules, called cuts, that remove impossible fractional answers without losing real ones.

Two open-source solvers, HiGHS and SCIP, do this. A shared library of test problems, MIPLIB, lists the best known plan for each, and marks some as open: nobody has proved that the best known plan is really the best.

Because floating-point arithmetic can make small mistakes, researchers have created certificates, checked in exact fractions, that prove a claimed best plan.

The same ideas solve the travelling salesman problem, where the record for 1.9 million cities is close to, but not yet proved, optimal.

# Student explanation

**What it is for.** Many engineering decisions mix continuous quantities with yes/no choices: how much power each plant produces, and whether it is switched on at all. A **mixed-integer linear program** (MIP) writes this as: minimise a linear cost $c^\top x$ subject to linear constraints $Ax \le b$, with some entries of $x$ forced to be whole numbers (often 0 or 1). Without the whole-number requirement it is a **linear program** (LP), which is like a first-year system of equations with $\le$ in place of $=$, and which can be solved very fast. With it, the problem becomes much harder: a model with 500 yes/no variables has $2^{500}$ combinations, far too many to try.

**Branch-and-bound.** The solver first drops the whole-number rule and solves the LP. Its optimum is a **bound**: no real plan can cost less. If the LP answer says "build 0.4 of a plant", the solver _branches_ into two smaller problems, one with the variable fixed to 0 and one fixed to 1, and repeats. Any branch whose bound is already worse than the best plan found so far (the _incumbent_) is discarded. The search ends when every branch is either solved or discarded; the incumbent is then optimal.

**Cutting planes.** A cut is an extra inequality that every whole-number solution satisfies but the current fractional LP answer violates. For example, if $x_1 + x_2 \le 1.5$ and both are 0/1 variables, then $x_1 + x_2 \le 1$ is also valid and removes fractional points such as (0.75, 0.75). Adding cuts tightens the bound and shrinks the search tree; combining them with branching is called _branch-and-cut_.

**Software and test sets.** HiGHS and SCIP are open-source solvers that implement these steps, plus presolve (simplifying the model first) and heuristics that find good plans early. **MIPLIB 2017** is the standard library of test instances; 212 of them are tagged _open_, meaning no one has proved the best known value optimal.

**Trusting the answer.** Solvers use floating-point arithmetic, so rounding can make them wrong. A **VIPR certificate** records the bound derivation in exact fractions, and a small checker (vprchck) re-verifies it, the same idea as SAT proof certificates.

**Travelling salesman.** The Concorde code uses branch-and-cut for the travelling salesman problem; for the 1.9-million-city World TSP the best tour is within about 0.047% of the proven bound, but optimality is unproven.
