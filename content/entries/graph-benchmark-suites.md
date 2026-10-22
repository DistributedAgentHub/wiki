---
type: entry
slug: graph-benchmark-suites
title: "Graph benchmark suites: Graph500, GAP and the DIMACS challenge instances"
field: graph-algorithms
kind: LIBRARY
status: ACTIVE
summary: Standard graph workloads (Graph500 BFS and SSSP, the GAP Benchmark Suite, DIMACS clique instances) with fixed generators, validation and public result lists.
reliedOn: Graph processing systems, GPU graph libraries and supercomputers are ranked by these benchmarks, and the DIMACS clique instances are the common yardstick for exact and heuristic combinatorial graph solvers.
dependsOn:
  - computational-complexity
references:
  - title: Graph500 benchmark specification (Kernels 2 and 3)
    url: https://graph500.org/?page_id=12
    kind: docs
  - title: Graph500 home page and lists
    url: https://graph500.org/
    kind: docs
  - title: Beamer, Asanovic, Patterson, The GAP Benchmark Suite (arXiv:1508.03619)
    url: https://arxiv.org/abs/1508.03619
    kind: paper
  - title: Marino, Buffoni, Zavalnij, A short review on the maximum clique problem algorithms with classical, AI, and quantum methods (arXiv:2403.09742, DIMACS table)
    url: https://arxiv.org/abs/2403.09742
    kind: paper
  - title: gapbs reference implementation
    url: https://github.com/sbeamer/gapbs
    kind: code
  - title: "NVIDIA blog: H100 GPUs on CoreWeave deliver a record-breaking Graph500 run (December 2025)"
    url: https://blogs.nvidia.com/blog/h100-coreweave-graph500
    kind: article
timeline:
  - date: 2015-08-01
    title: GAP Benchmark Suite
    body: Beamer, Asanović and Patterson released the six-kernel suite and reference code; month from the arXiv identifier.
    source: https://arxiv.org/abs/1508.03619
  - date: 2025-11-01
    title: Graph500 BFS record (31st list)
    body: eos-dfw (CoreWeave, 8,192 H100 GPUs, scale 41) took first place with 410,266.553 GTEPS on the November 2025 list and still leads in June 2026; month given as the list month.
    source: https://blogs.nvidia.com/blog/h100-coreweave-graph500
explainer:
  oneLine: Standard graph tests, with fixed rules and checks, used to rank computers and graph programs.
  flow:
    - Fixed recipe builds a huge graph
    - Program explores from 64 starts
    - Checker validates the exploration
    - Rate of edges per second ranks machines
  glossary:
    - term: graph
      meaning: A set of points (vertices) joined by lines (edges).
      link: https://en.wikipedia.org/wiki/Graph_theory
    - term: breadth-first search
      meaning: Exploring a graph in rings, first all neighbours of the start, then their neighbours, and so on.
      link: https://en.wikipedia.org/wiki/Breadth-first_search
    - term: TEPS
      meaning: "Traversed edges per second: how many graph connections a machine follows each second."
      link: https://en.wikipedia.org/wiki/Graph500
    - term: clique
      meaning: A group of vertices in which every two are joined by an edge.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: upper bound
      meaning: A proven limit saying that no solution can be larger than a given number.
      link: https://en.wikipedia.org/wiki/Clique_problem
    - term: semidefinite bound
      meaning: A numerical limit computed from a convex relaxation, used to prove clique sizes cannot exceed a value.
      link: https://en.wikipedia.org/wiki/Semidefinite_programming
    - term: adjacency matrix
      meaning: A square matrix whose entry (i, j) is 1 when vertices i and j are joined and 0 otherwise.
      link: https://en.wikipedia.org/wiki/Adjacency_matrix
    - term: harmonic mean
      meaning: An average of rates computed as n divided by the sum of reciprocals; it weights slow runs more heavily.
      link: https://en.wikipedia.org/wiki/Harmonic_mean
    - term: DIMACS instances
      meaning: Standard benchmark graphs from the Second DIMACS Implementation Challenge (1993), used to test clique solvers.
      link: https://en.wikipedia.org/wiki/Clique_problem
  readFirst:
    - title: Graph500 benchmark specification
      url: https://graph500.org/?page_id=12
      why: The exact rules, short enough to read.
    - title: The GAP Benchmark Suite (arXiv)
      url: https://arxiv.org/abs/1508.03619
      why: Explains why the six kernels were chosen.
    - title: Clique problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clique_problem
      why: Background on maximum clique and its benchmarks.
site:
  published: true
  aiReviewed: true
---

## Graph500

**Graph500** ranks machines by the speed of graph traversal rather than floating-point arithmetic. The benchmark specification fixes a Kronecker generator (similar to R-MAT, with initiator probabilities 0.57, 0.19, 0.19 and 0.05), an edge factor of 16 (so a graph with 2^SCALE vertices has 16 times as many edges) and random permutation of vertex labels and edge order to remove locality. The timed kernels are **breadth-first search** (BFS, Kernel 2) and **single-source shortest path** (SSSP, Kernel 3). Up to 64 distinct search keys are sampled from vertices of degree at least one. The metric is **TEPS**, traversed edges per second, aggregated with the **harmonic mean**. Each run's output (a parent array, or distances plus a parent tree) goes through an untimed **validation** that checks that it is a tree without cycles and that tree edges join vertices whose BFS levels differ by exactly one; this validation is what makes a Graph500 number checkable.

The current BFS record is eos-dfw, a CoreWeave datacentre system in Dallas built from 8,192 NVIDIA H100 GPUs in just over 1,000 nodes, which entered first on the November 2025 list (the 31st) at scale 41 (about 2.2 trillion vertices and 35 trillion edges) with 410,266.553 GTEPS and still leads the June 2026 list, followed by LineShine at the National Supercomputing Center in Shenzhen (scale 43, 234,827.4293 GTEPS) and Fugaku at RIKEN (scale 43, 204,068 GTEPS).

## GAP Benchmark Suite

The **GAP Benchmark Suite** (Beamer, Asanović and Patterson, 2015) defines six kernels (BFS, SSSP, PageRank, connected components, betweenness centrality and triangle counting) on a set of real and synthetic graphs, with a reference implementation in C++ (the `gapbs` repository) and rules for how results are reported. It was designed so that implementations of the same kernel can be compared across frameworks and hardware.

## DIMACS clique instances

The DIMACS clique benchmark graphs, from the Second DIMACS Implementation Challenge, are the standard test set for **maximum clique** algorithms. Many of the graphs are solved to proven optimality, but a few dense random ones are not. For C2000.9 (2000 vertices, 1,799,532 edges) the literature lists a clique number of at least 80, found by heuristics; the exact value is unknown. Clique solutions are checkable at once, while optimality needs an upper-bound proof by exact branch-and-bound or semidefinite bounds.

## Limits

TEPS depends on graph size and on machine scale, so lists mix very different systems; comparisons need the scale and the number of nodes. DIMACS graphs are random, so solver progress on them says little about real networks.

# Plain explanation

A graph is a set of dots joined by lines: people and friendships, web pages and links, roads and junctions. Many programs need to explore huge graphs, for instance finding all places reachable from a starting point, or the shortest route between two points.

To compare machines and programs fairly, researchers agree on a standard test. In Graph500 a computer builds a giant random graph following a fixed recipe, explores it from 64 starting points, and is scored on how many connections it can follow per second. A checking program then confirms that the answer is a correct exploration, so nobody can win with a wrong result.

Another suite, GAP, defines six common graph tasks with reference code. A third source of tests is a set of dense graphs from a 1990s challenge, where the task is to find the biggest group of dots that are all joined to one another. For one of those graphs, called C2000.9, the best group found has 80 dots, but nobody knows whether 81 is possible.

The caveat: a high score on a random test graph says little about the kind of graph your own business has.

# Student explanation

**What a graph is.** A graph is a set of dots (vertices) joined by lines (edges): web pages and links, road junctions and roads, proteins and interactions. You can store a small one as an adjacency matrix $A$, where $A_{ij}=1$ if vertices $i$ and $j$ are joined; a large sparse one is stored as a list of neighbours for each vertex. Graph programs are limited less by arithmetic than by memory access and communication, so ordinary floating-point benchmarks do not rank machines well for them.

**Graph500.** The benchmark builds a huge random graph with a fixed recipe (a Kronecker generator with 16 edges per vertex on average, $2^{\text{SCALE}}$ vertices), then runs **breadth-first search** (BFS) from up to 64 random start vertices. BFS visits the start, then all its neighbours, then all their unvisited neighbours, layer by layer, recording each vertex's parent. The score is **TEPS**, traversed edges per second, averaged with a harmonic mean. An untimed **validation** step checks that the output is a tree and that every tree edge joins vertices whose layer numbers differ by exactly one. A wrong answer therefore cannot score. The current BFS leader, eos-dfw (a CoreWeave system of 8,192 H100 GPUs), reached 410,266.553 billion TEPS at scale 41, about 2.2 trillion vertices, on the November 2025 list and still led in June 2026.

**GAP Benchmark Suite.** GAP defines six kernels (BFS, shortest paths, PageRank, connected components, betweenness centrality, triangle counting) on fixed real and synthetic graphs, with reference C++ code, so that frameworks can be compared on the same inputs.

**DIMACS clique graphs.** A **clique** is a set of vertices that are all joined to each other. Finding the largest one is hard: checking every subset of 2,000 vertices is hopeless ($2^{2000}$ subsets). The DIMACS graphs from a 1993 challenge are the standard test set. For the dense random graph C2000.9 the largest clique found has 80 vertices, while the best proven upper bound is 168. A claimed clique is easy to verify (check every pair), but proving that no larger one exists needs an upper-bound certificate.

**Limits.** TEPS grows with machine size, so the list mixes very different systems, and random test graphs say little about the structure of real networks.
