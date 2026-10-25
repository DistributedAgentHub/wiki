---
type: problem
slug: perfect-matching-in-nc
title: "Perfect matching in NC: derandomising the isolation lemma for bipartite and general graphs"
entry: computational-complexity
status: PARTIAL
origin: Karp–Upfal–Wigderson (1986) and Mulmuley–Vazirani–Vazirani (1987) place matching in RNC; Fenner–Gurjar–Thierauf (2016) quasi-NC for bipartite graphs; Svensson–Tarnawski (2017) quasi-NC for general graphs
ratings:
  difficulty: 74
  applicationValue: 10
  leverage: 46
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Svensson, Tarnawski: The Matching Problem in General Graphs is in Quasi-NC"
    url: https://arxiv.org/abs/1704.01929
  - title: "Fenner, Gurjar, Thierauf: Bipartite Perfect Matching is in quasi-NC"
    url: https://arxiv.org/abs/1601.06319
  - title: "Mulmuley, Vazirani, Vazirani: Matching is as easy as matrix inversion"
    url: https://doi.org/10.1007/BF02579206
  - title: "Anari, Vazirani: Planar Graph Perfect Matching is in NC"
    url: https://arxiv.org/abs/1709.07822
  - title: "Eppstein, Vazirani: NC Algorithms for Computing a Perfect Matching and a Maximum Flow in One-Crossing-Minor-Free Graphs (SIAM J. Comput. 2021)"
    url: https://doi.org/10.1137/19M1256221
timeline:
  - date: 1987-12-01
    title: Matching is in RNC via the isolation lemma
    body: Mulmuley, Vazirani and Vazirani showed matching reduces to matrix inversion with randomised isolation.
    source: https://doi.org/10.1007/BF02579206
  - date: 2016-01-23
    title: Bipartite matching in quasi-NC
    body: Fenner, Gurjar and Thierauf gave a deterministic quasi-NC algorithm (STOC 2016).
    source: https://arxiv.org/abs/1601.06319
  - date: 2017-04-06
    title: General-graph matching in quasi-NC
    body: Svensson and Tarnawski extended the result to general graphs (FOCS 2017).
    source: https://arxiv.org/abs/1704.01929
  - date: 2017-09-21
    title: Planar perfect matching in NC
    body: Anari and Vazirani proved NC for planar graphs.
    source: https://arxiv.org/abs/1709.07822
explainer:
  oneLine: Can a network be paired up perfectly using many processors working in parallel, without relying on random choices?
  flow:
    - Pair everyone up using many processors
    - Random weights make one pairing win
    - Can we pick weights without random?
    - "2016: nearly, using too many processors"
    - "Open: full efficient parallel method"
  glossary:
    - term: perfect matching
      meaning: A way to pair up all the nodes of a network using links so that each node is in exactly one pair.
      link: https://en.wikipedia.org/wiki/Matching_(graph_theory)
    - term: NC
      meaning: Problems solvable in a polylogarithmic number of parallel rounds using a polynomial number of processors.
      link: https://en.wikipedia.org/wiki/NC_(complexity)
    - term: parallel algorithm
      meaning: A method that splits work across many processors running at the same time.
      link: https://en.wikipedia.org/wiki/Parallel_algorithm
    - term: isolation lemma
      meaning: A result saying random weights make the cheapest solution unique with good probability.
      link: https://en.wikipedia.org/wiki/Isolation_lemma
    - term: quasi-NC
      meaning: Like NC but allowing a super-polynomial number of processors that grows slowly.
      link: https://en.wikipedia.org/wiki/NC_(complexity)
    - term: derandomization
      meaning: Replacing a method that uses random choices with a deterministic one of similar speed.
      link: https://en.wikipedia.org/wiki/Derandomization
    - term: bipartite graph
      meaning: A network whose nodes split into two groups with links only between the groups.
      link: https://en.wikipedia.org/wiki/Bipartite_graph
    - term: determinant
      meaning: A single number computed from a table of numbers; it can reveal whether a matching exists.
      link: https://en.wikipedia.org/wiki/Determinant
    - term: randomized algorithm
      meaning: A method that makes random choices and is correct with high probability.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: planar graph
      meaning: A network that can be drawn on paper without any links crossing.
      link: https://en.wikipedia.org/wiki/Planar_graph
    - term: RNC
      meaning: Like NC, but the parallel algorithm may use random choices and be right with high probability.
      link: https://en.wikipedia.org/wiki/NC_(complexity)
  readFirst:
    - title: Matching (graph theory) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Matching_(graph_theory)
      why: Defines matchings with pictures and applications.
    - title: NC (complexity) (Wikipedia)
      url: https://en.wikipedia.org/wiki/NC_(complexity)
      why: What 'fast in parallel' means formally.
    - title: Derandomization (Wikipedia)
      url: https://en.wikipedia.org/wiki/Derandomization
      why: The wider theme of removing randomness.
raw:
  body: "Given an $n$-vertex graph, decide whether it has a perfect matching and, if so, construct one, using a deterministic parallel algorithm with $\\mathrm{poly}(n)$ processors and $O(\\log^{c}n)$ depth ($\\mathsf{NC}$). The problem is in $\\mathsf{RNC}$ by the isolation lemma (a random weight assignment makes the minimum-weight perfect matching unique with probability $\\ge1/2$). Fenner, Gurjar and Thierauf (2016) put bipartite perfect matching in quasi-$\\mathsf{NC}$, i.e. $\\mathrm{polylog}(n)$ depth with $n^{\\mathrm{polylog}\\,n}$ processors, and Svensson and Tarnawski (2017) extended this to general graphs. *Is perfect matching in $\\mathsf{NC}$ — and more modestly, is bipartite perfect matching in $\\mathsf{NC}$?* One natural route is to reduce the $\\log n$ rounds of weight-function refinement in the quasi-NC isolation arguments to $O(1)$ rounds, each using polynomially many weight functions."
site:
  aiReviewed: true
---

# State of the art

**Known.** Mulmuley, Vazirani and Vazirani (Combinatorica 1987) and Karp, Upfal and Wigderson (1986) gave RNC algorithms. Fenner, Gurjar and Thierauf (STOC 2016, arXiv:1601.06319) gave a deterministic quasi-NC algorithm for bipartite perfect matching by constructing a poly-size family of weight functions, one of which is isolating, and as a consequence NC algorithms for planar bipartite graphs. Svensson and Tarnawski (FOCS 2017, arXiv:1704.01929) extended to general graphs, by a more involved isolation argument; they stated getting from quasi-NC to NC as the most immediate open question, even for bipartite graphs, and noted that the number of weight functions in the construction ($\log n$ rounds) is the obstacle. Anari and Vazirani (arXiv 2017; FOCS 2018, J. ACM 2020) proved that planar perfect matching is in NC, and Eppstein and Vazirani (SPAA 2019; SIAM J. Comput. 2021) extended NC algorithms to one-crossing-minor-free graphs, which include $K_{3,3}$-free graphs. Exact matching (a perfect matching with a prescribed number of red edges) is in RNC with no known deterministic polynomial-time algorithm, let alone NC; an unrefereed AI-generated manuscript in OpenAI's October 2026 release claims a randomised almost-linear-time sequential algorithm for it, which does not bear on derandomisation. No 2025–26 result improving the quasi-NC bounds was found.

# Applications

NC algorithms for matching would complete the picture of parallel complexity of combinatorial optimisation (matching, flows, matroid problems are the standard test cases for derandomising the isolation lemma). It would also imply deterministic algorithms for related search problems that reduce to matching, but a quasi-NC algorithm is already almost as good in theory; practical parallel matching uses randomised or heuristic algorithms.

# Resolution criteria

A deterministic algorithm for bipartite (or general) perfect matching with $\mathrm{poly}(n)$ processors and $\mathrm{polylog}(n)$ depth, with proof. Partial progress: NC for a new graph class, or an NC algorithm for the decision problem alone.

# Rating rationale

A famous, 35-year-old derandomisation problem with a clean statement and a long chain of partial progress (planar, minor-closed, quasi-NC) but no technique for removing the last log n factor of weight-function rounds. Application value is low. Leverage is mid-band because matching is the canonical problem for isolation-based derandomisation.

# Work mix rationale

Purely combinatorial/algebraic proof.

# Verification

A resolution is a deterministic polylog-depth, polynomial-processor algorithm for perfect matching with a proof of correctness and depth. Parallel-complexity classes are not in Mathlib, so the claim cannot be machine-checked today. Experts review the argument; an implementation on random graphs can test correctness but not the depth bound.

# Plain explanation

Take a group of people and a list of which pairs would get along. A perfect matching is a way to pair everyone up so that each pair is compatible. Computers can find one quickly, one step after another.

The question here is about speed using many computers working at once. A class of problems called NC are those that can be solved in a tiny number of rounds using a reasonable (polynomial) number of processors. Perfect matching has a fast parallel method, but it uses random numbers. The trick is to assign random weights to the pairings so one of them is the unique cheapest, which then stands out.

Can we do it without randomness? In 2016 and 2017 researchers showed it can be done nearly that fast without randomness, but with somewhat more than a reasonable number of processors. Closing this last gap, going from nearly to fully efficient, is still open, even for the simpler case where the people split into two groups.

A fully deterministic fast method is known for special types of networks, such as those that can be drawn flat on paper without crossings.

Why is it hard? Making a unique winner without randomness requires a clever way to pick the weights, and every known way needs a growing number of rounds of refinement.

A solution would complete the picture for how parallel computing handles basic combinatorial tasks, and it is a standard test case for removing randomness from algorithms.

# Student explanation

**The problem.** Given an $n$-vertex graph, decide whether it has a perfect matching and, if so, construct one, using a deterministic parallel algorithm with $\mathrm{poly}(n)$ processors and $O(\log^c n)$ depth. That is the class $\mathsf{NC}$. The problem is in $\mathsf{RNC}$ (NC with randomness) by the **isolation lemma**: a random weight assignment makes the minimum-weight perfect matching unique with probability at least $1/2$. Once the minimum is unique, determinants of weighted matrices reveal it in parallel.

**Known.** Mulmuley, Vazirani and Vazirani (1987) and Karp, Upfal and Wigderson (1986) gave RNC algorithms. Fenner, Gurjar and Thierauf (STOC 2016) gave a deterministic _quasi-NC_ algorithm for bipartite perfect matching (polylogarithmic depth but $n^{\mathrm{polylog}\,n}$ processors), by constructing a polynomial-size family of weight functions one of which is isolating. They obtained NC algorithms for planar bipartite graphs as a consequence. Svensson and Tarnawski (FOCS 2017) extended the quasi-NC result to general graphs with a more involved isolation argument. They stated getting from quasi-NC to NC as the most immediate open question, even for bipartite graphs; the obstacle is the number of weight functions in the construction ($\log n$ rounds of refinement).

**Special cases in NC.** Anari and Vazirani (2018) proved planar perfect matching is in NC, and Eppstein and Vazirani (2019) extended NC algorithms to graphs excluding certain minors, including $K_{3,3}$-free graphs.

**Open relatives.** _Exact matching_ (a perfect matching with a prescribed number of red edges) is in RNC but has no known deterministic polynomial-time algorithm, let alone NC. No 2025-26 result improving the quasi-NC bounds was found in the sources behind this entry.

**Possible route.** Reduce the $\log n$ rounds of weight refinement to $O(1)$ rounds, each using polynomially many weight functions.

**Link to identity testing.** Perfect matching in a bipartite graph is equivalent to a determinant of a matrix with variable entries being nonzero, so derandomising polynomial identity testing for such determinants would solve it; the matching problem is a classic test case for derandomisation.

**Payoff.** An NC algorithm would complete the picture of the parallel complexity of combinatorial optimisation (matching, flows, matroids) and imply deterministic algorithms for related search problems that reduce to matching.
