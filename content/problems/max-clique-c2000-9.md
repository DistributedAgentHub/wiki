---
type: problem
slug: max-clique-c2000-9
title: "Maximum clique of DIMACS graph C2000.9: find 81 or prove 80"
entry: graph-benchmark-suites
status: OPEN
origin: Second DIMACS Implementation Challenge (1993); heuristic records since 2005
ratings:
  difficulty: 62
  applicationValue: 4
  leverage: 8
workMix:
  theory: 40
  engineering: 15
  compute: 45
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: Marino, Buffoni, Zavalnij, A short review on the maximum clique problem algorithms (DIMACS table)
    url: https://arxiv.org/abs/2403.09742
  - title: Krpan, Povh, Improving Upper Bounds for the Maximum Clique Problem using Reduction Rules (arXiv preprint)
    url: https://arxiv.org/abs/2607.11726
timeline:
  - date: 2026-07-13
    title: Upper bound 168 (preprint)
    body: Krpan and Povh reported an improved certified upper bound of 168 for C2000.9 in a preprint.
    source: https://arxiv.org/abs/2607.11726
explainer:
  oneLine: In a dense 2000-dot graph, find 81 dots that are all joined to each other, or prove none exist.
  flow:
    - Dense random graph, 2000 dots
    - Heuristics find a group of 80
    - "Best proof: at most 168"
    - Is 81 possible?
  glossary:
    - term: clique
      meaning: A group of vertices that are all pairwise joined.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: DIMACS instances
      meaning: A standard set of test graphs from a 1990s implementation challenge.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: upper bound
      meaning: A proven limit on how large a clique can be.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: Lovász theta function
      meaning: A number computed by semidefinite programming that bounds clique size from above.
      link: https://en.wikipedia.org/wiki/Semidefinite_programming
    - term: NP-hard
      meaning: At least as hard as a large class of problems believed to need exponential time in the worst case.
      link: /research/computational-complexity
    - term: graph
      meaning: A set of vertices joined by edges, storable as an adjacency matrix.
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: clique number
      meaning: The size of the largest set of vertices in which every pair is joined.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: branch-and-bound
      meaning: Exhaustive search that splits into cases and discards those whose bound rules them out.
      link: https://en.wikipedia.org/wiki/Branch_and_bound
    - term: graph colouring
      meaning: Assigning groups to vertices so that joined vertices differ; the number of groups bounds the clique size.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: semidefinite program
      meaning: Optimisation over symmetric matrices constrained to have no negative eigenvalues; it gives the theta bound.
      link: https://en.wikipedia.org/wiki/Semidefinite_programming
  readFirst:
    - title: Clique problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clique_problem
      why: Definitions and algorithms.
    - title: A short review on the maximum clique problem (arXiv)
      url: https://arxiv.org/abs/2403.09742
      why: Surveys the DIMACS results.
site:
  aiReviewed: true
---

C2000.9 is a random graph with 2000 vertices and 1,799,532 edges (edge density 0.9) from the DIMACS clique benchmark. Determine its clique number ω: find a clique of 81 vertices, or prove that no clique of size 81 exists (so ω = 80).

# State of the art

The literature lists ω(C2000.9) ≥ 80 (for instance in the DIMACS table of the 2024 review by Marino, Buffoni and Zavalnij). A 2026 arXiv preprint by Krpan and Povh (arXiv:2607.11726, not peer reviewed) improves the best certified integer upper bound from 177 to 168 for C2000.9 using core and truss reductions with the Lovász theta function, and states that the exact clique numbers of C500.9, C1000.9 and C2000.9 are not known. The gap between 80 and 168 is the remaining distance: exact methods are far from proving 80 optimal.

# Applications

Maximum clique has uses in bioinformatics, coding theory and network analysis, but this random instance has no direct application. Better upper bounds help general branch-and-bound and semidefinite-programming solvers.

# Resolution criteria

A clique of 81 vertices, verified by checking all pairs against the instance file; or an upper bound of 80 certified by an independently checkable proof (a branch-and-bound log with bounds that can be re-derived, or an exact SDP/LP dual certificate).

# Rating rationale

Difficulty 62: the best certified upper bound (168, a preprint) is more than twice the best clique (80), so proving 80 is far beyond exact methods, and heuristics have not found 81 in nearly two decades; level with the World TSP (62) as a finite instance with no proof route. Application value 4 and leverage 8: a random benchmark graph.

# Work mix rationale

Both directions need computation; the upper-bound side also needs new theory in bounding relaxations and reductions.

# Verification

Quantity: the clique number of DIMACS C2000.9 (2000 vertices, 1,799,532 edges); lower bound 80 (heuristics, listed in the 2024 review), best certified upper bound 168 (Krpan and Povh preprint, 2026). A clique of 81 vertices is checked pairwise against the instance file. An upper bound needs a certificate that an independent program can recheck: a branch-and-bound proof tree with re-derivable bounds, or an exact dual certificate for the bounding relaxation.

# Plain explanation

Imagine 2000 people where nearly every pair are friends: out of every ten pairs, nine are. A clique is a group in which everyone is friends with everyone else. The question is how large a clique this particular graph contains.

Programs have found a clique of 80 people. Nobody has found 81, and nobody can prove that 81 is impossible. The best proven statement is that there is no clique larger than 168. That statement comes from a 2026 preprint that has not been peer reviewed, and it is more than twice as large as the best clique known.

If someone finds 81, anyone can check it by testing every pair in the group. If 81 is impossible, the proof would be a long, careful computation.

The caveat: this graph is random, made for testing, and has no practical application. It shows how well our methods for hard counting problems work.

# Student explanation

**The question.** A **graph** is a set of vertices joined by edges; you can store it as an adjacency matrix $A$ with $A_{ij} = 1$ when vertices $i$ and $j$ are joined. A **clique** is a set of vertices in which every pair is joined, and the **clique number** $\omega$ is the size of the largest one. C2000.9 is a standard test graph from the 1993 DIMACS challenge: 2,000 vertices, each pair joined with probability 0.9, giving 1,799,532 edges. What is its clique number?

**What is known.** Heuristic searches have found a clique of 80 vertices, so $\omega \ge 80$. No one has found 81. On the other side, the best certified upper bound is 168, from a 2026 preprint by Krpan and Povh (not yet peer reviewed) that improved the previous 177. The true value lies between 80 and 168.

**Why finding is hard.** The number of 81-vertex subsets of 2,000 vertices is about $10^{146}$. Heuristics such as local search grow a clique, swap vertices in and out, and restart, but they can only report what they find; two decades of improved heuristics have stalled at 80.

**Why proving is hard.** To prove that no clique of 81 exists, an exact method must rule out every possibility. Branch-and-bound splits the search ("vertex 1 is in the clique, or it is not") and discards a branch when an _upper bound_ shows it cannot reach 81. Simple bounds come from colouring: if the remaining vertices can be split into 80 groups with no edges inside a group, a clique can use at most one vertex from each group. For dense random graphs these bounds are weak. Stronger bounds come from the **Lovász theta function**, the optimum of a semidefinite program (an optimisation over symmetric matrices required to have no negative eigenvalues), which is always at least the clique number but on this graph is still far above 80. With the best bound at 168, more than twice the best clique, a complete proof is far out of reach of current methods.

**How a claim is checked.** A clique of 81 is a list of vertex numbers; a program checks all 3,240 pairs against the instance file, in milliseconds. A proof that 80 is optimal must be a certificate an independent program can recheck: a branch-and-bound tree whose bounds can be re-derived, or an exact solution of the dual of the bounding relaxation.
