---
type: problem
slug: implementable-deterministic-almost-linear-max-flow
title: Deterministic O(m polylog m) maximum flow, or an m^(1+o(1)) implementation that beats push-relabel
entry: linear-programming
status: IN_PROGRESS
origin: Chen–Kyng–Liu–Peng–Probst Gutenberg–Sachdeva (2022); deterministic version by van den Brand et al. (2023)
ratings:
  difficulty: 30
  applicationValue: 48
  leverage: 20
workMix:
  theory: 35
  engineering: 45
  compute: 20
  empirical: 0
verification:
  route: REPRODUCTION
sources:
  - title: Chen, Kyng, Liu, Peng, Probst Gutenberg, Sachdeva, Maximum Flow and Minimum-Cost Flow in Almost-Linear Time (FOCS 2022)
    url: https://arxiv.org/abs/2203.00671
  - title: van den Brand et al., A Deterministic Almost-Linear Time Algorithm for Minimum-Cost Flow (FOCS 2023)
    url: https://arxiv.org/abs/2309.16629
  - title: Bernstein, Blikstad, Saranurak, Tu, Maximum Flow by Augmenting Paths in n^(2+o(1)) Time (FOCS 2024)
    url: https://arxiv.org/abs/2406.03648
  - title: Bernstein, Blikstad, Li, Saranurak, Tu, Combinatorial Maximum Flow via Weighted Push-Relabel on Shortcut Graphs (preprint, 2025)
    url: https://arxiv.org/abs/2510.17182
  - title: Li, Balancing Weights, Directed Sparsification, and Augmenting Paths (preprint, 2026)
    url: https://arxiv.org/abs/2604.14633
  - title: Li, Wice, Maximum Flow Without the Outer IPM (preprint, 2026)
    url: https://arxiv.org/abs/2608.17384
timeline:
  - date: 2022-03-01
    title: Almost-linear-time max flow
    body: Chen et al. gave an m^(1+o(1)) max-flow and min-cost flow algorithm (FOCS 2022).
    source: https://arxiv.org/abs/2203.00671
  - date: 2023-09-28
    title: Deterministic almost-linear time
    body: Van den Brand et al. derandomised the algorithm (FOCS 2023).
    source: https://arxiv.org/abs/2309.16629
  - date: 2024-06-05
    title: Combinatorial algorithm for dense graphs
    body: Bernstein, Blikstad, Saranurak and Tu gave an augmenting-path algorithm in n^(2+o(1)) log U time (FOCS 2024).
    source: https://arxiv.org/abs/2406.03648
  - date: 2026-08-01
    title: "Preprint: m^(1+o(1)) without the outer interior-point method"
    body: Li and Wice report an approximate pseudo-circulation route to max flow; not yet refereed.
    source: https://arxiv.org/abs/2608.17384
explainer:
  oneLine: An almost-linear-time method for pushing the most stuff through a network exists on paper, but is too complicated to use.
  flow:
    - "Max flow: most stuff through a network"
    - "2022: near-linear time method found"
    - Too complex and heavy to run
    - "Goal: simple deterministic and fast"
    - "Open: beat practical codes on huge graphs"
  glossary:
    - term: maximum flow
      meaning: The largest amount that can be sent from a source to a sink through a network with limited link capacities.
      link: https://en.wikipedia.org/wiki/Maximum_flow_problem
    - term: flow network
      meaning: A directed graph whose links have capacities, used to model pipes, traffic or data.
      link: https://en.wikipedia.org/wiki/Flow_network
    - term: push-relabel
      meaning: A classic, practical max-flow method that pushes excess flow along links, raising node heights when stuck.
      link: https://en.wikipedia.org/wiki/Push%E2%80%93relabel_maximum_flow_algorithm
    - term: almost-linear time
      meaning: Running time that is close to the size of the input, up to a factor that grows slower than any power.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: interior-point method
      meaning: An optimisation method that moves through the inside of the feasible region to the best point.
      link: https://en.wikipedia.org/wiki/Interior-point_method
    - term: deterministic algorithm
      meaning: An algorithm that uses no random choices and always behaves the same on the same input.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: expander graph
      meaning: A sparse but very well-connected network, a key building block in modern graph algorithms.
      link: https://en.wikipedia.org/wiki/Expander_graph
    - term: linear programming
      meaning: Optimising a linear goal under linear limits; max flow is a special case.
      link: /research/linear-programming
    - term: augmenting path
      meaning: A route from source to sink with spare capacity; pushing extra flow along it increases the total flow.
      link: https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm
    - term: Dinic's algorithm
      meaning: A classic max-flow method that repeatedly sends flow along many shortest augmenting paths at once; widely used in practice.
      link: https://en.wikipedia.org/wiki/Dinic%27s_algorithm
  readFirst:
    - title: Researchers Achieve 'Absurdly Fast' Algorithm for Network Flow (Quanta)
      url: https://www.quantamagazine.org/researchers-achieve-absurdly-fast-algorithm-for-network-flow-20220608/
      why: The accessible story of the 2022 breakthrough.
    - title: Maximum flow problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Maximum_flow_problem
      why: Definitions, examples and a history of algorithms.
    - title: Flow network (Wikipedia)
      url: https://en.wikipedia.org/wiki/Flow_network
      why: Basic concepts like capacity and cuts.
site:
  aiReviewed: true
---

Given a directed graph with $m$ edges, integer capacities in $[1,U]$ with $U=\mathrm{poly}(m)$, find a maximum $s$–$t$ flow. Almost-linear-time algorithms with running time $m^{1+o(1)}$ exist, including deterministic ones, but their $m^{o(1)}$ factor is a large subpolynomial overhead (for example $2^{O(\log^{7/8}m\,\log\log m)}$ in the first version) and they rely on dynamic data structures for low-stretch decompositions and expander hierarchies. _Does there exist a deterministic algorithm with running time $O(m\,\mathrm{polylog}(m))$, or at least an implementation of an $m^{1+o(1)}$ algorithm, whose measured running time on the DIMACS and SNAP benchmark families beats push-relabel and Dinic implementations on graphs with $m\ge10^{8}$?_ The target is the combination: deterministic, within a logarithmic or small-polynomial-in-log factor of linear, and implementable.

# State of the art

**Almost-linear time.** Chen, Kyng, Liu, Peng, Probst Gutenberg and Sachdeva (arXiv March 2022; FOCS 2022) solve exact max flow and min-cost flow on directed graphs with polynomially bounded integer data in $m^{1+o(1)}$ time. The method is an interior-point method whose steps are approximate undirected minimum-ratio cycles, found with a dynamic data structure with amortised $m^{o(1)}$ update time. Van den Brand, Chen, Kyng, Liu, Peng, Probst Gutenberg, Sachdeva and Sidford (arXiv September 2023; FOCS 2023) made it deterministic. The framework extends to convex edge-separable objectives, including entropy-regularised optimal transport and matrix scaling. The $m^{o(1)}$ factor hides a large subpolynomial overhead, and no implementation competitive with push-relabel or Dinic codes is reported in the sources reviewed.

**Combinatorial and simpler algorithms.** Bernstein, Blikstad, Saranurak and Tu (arXiv June 2024; FOCS 2024) gave a combinatorial augmenting-path algorithm in $n^{2+o(1)}\log U$ time, near-optimal for dense graphs, avoiding continuous optimisation. Bernstein, Blikstad, Li, Saranurak and Tu (arXiv October 2025, preprint) report a much simpler $\tilde O(n^2\log U)$ algorithm that removes the $n^{o(1)}$ factor, release a C++ implementation (without benchmarking it against established codes), and obtain a deterministic $\tilde O(n^2)$ algorithm for vertex-capacitated max flow. Li (arXiv April 2026, preprint) gives a randomised augmenting-path algorithm for directed uncapacitated graphs running in $m\,n^{1/2+o(1)}$ time, the first improvement over Dinic's bound for moderately sparse graphs among combinatorial augmenting-path methods. Li and Wice (arXiv August 2026, preprint) report that Li's balancing weights yield an approximate pseudo-circulation in $m^{1+o(1)}$ time, and hence an $m^{1+o(1)}$ max-flow algorithm for directed capacitated graphs that avoids the outer interior-point framework. All 2025–26 items are unrefereed.

**What practice uses.** Classical algorithms (Dinic, push-relabel, Boykov–Kolmogorov for vision graphs) remain the standard implementations, and their typical running times are close to linear on many instance families despite weaker worst-case bounds.

# Applications

A practical near-linear max-flow would speed up everything reducible to flows: bipartite matching, image segmentation, scheduling, network reliability and transportation, as well as min-cost flow and optimal-transport solvers. Today the asymptotically fastest algorithms are not used in practice, so the benefit would come from an implementable variant, not from the theoretical bound alone.

# Resolution criteria

(a) A proof of a deterministic $O(m\,\mathrm{polylog}\,m)$ max-flow algorithm, or (b) an open-source implementation of a worst-case $m^{1+o(1)}$ algorithm whose wall-clock time on the standard benchmark suites at $m\ge 10^8$ is at least competitive with the best push-relabel code, with a reproducible report. (a) is theoretical resolution; (b) is the practical target.

# Rating rationale

Difficulty is low-to-mid because the theory is largely in place and the gap is constant factors and engineering, though removing the m^{o(1)} factor deterministically is a real theory problem. Application value is moderate: flow underlies many pipelines but push-relabel already scales well in practice. Leverage is narrow: algorithm engineering and a few theory results depend on it.

# Work mix rationale

Half of the work is simplifying the theory (replacing expander hierarchies with something implementable) and half is a serious implementation with benchmarking.

# Verification

Part (b) is checkable by running: an open-source implementation of a worst-case m^(1+o(1)) algorithm must be at least competitive in wall-clock time with the best push-relabel code on the standard benchmark suites at m >= 10^8. The report must name the machine, compiler flags, instance suites, a correctness check of the flow value against a reference solver, and the number of repeats. Part (a), a deterministic O(m polylog m) proof, goes to expert review.

# Plain explanation

A network of pipes, roads or data links has limits on how much each link can carry. The maximum flow problem asks how much stuff can be pushed from a source to a destination. It is a classic: matching workers to jobs, splitting images into foreground and background, and routing traffic are all versions of it.

For decades, algorithms got steadily faster. In 2022, a team of researchers finally achieved something close to the best that could ever be hoped for: running time nearly proportional to the number of links, just reading the network. A later version made it work without any randomness.

There is a catch. The method is built from very sophisticated machinery and hides a large overhead. No one has built a version that actually beats the older, simpler methods used in real software on real networks.

The open problem has two forms. Either find a deterministic algorithm that is within a small factor of linear time, or turn the existing almost-linear algorithm into an actual program that is faster than the standard ones on large benchmark networks (with hundreds of millions of links).

Why is it hard? Fast theoretical methods rely on complicated structures that are hard to program, and the constant hidden by the theory may be so large that it only pays off on enormous networks. Simpler algorithms that avoid heavy machinery are being developed, but have not yet closed the gap.

# Student explanation

**The problem.** Given a directed graph with $m$ edges and integer capacities in $[1,U]$ with $U=\mathrm{poly}(m)$, find a maximum $s$–$t$ flow. Almost-linear-time algorithms with running time $m^{1+o(1)}$ exist, including deterministic ones, but the $m^{o(1)}$ factor is a large subpolynomial overhead, and they rely on dynamic data structures for low-stretch decompositions and expander hierarchies. The task: find a deterministic algorithm running in $O(m\,\mathrm{polylog}\,m)$ time, or at least an implementation of an $m^{1+o(1)}$ algorithm whose measured running time on standard benchmark families (DIMACS, SNAP) beats push-relabel and Dinic implementations on graphs with $m\ge10^8$.

**Almost-linear time.** Chen, Kyng, Liu, Peng, Probst Gutenberg and Sachdeva (2022) solved exact max flow and min-cost flow in $m^{1+o(1)}$ time. It is an _interior-point method_: it walks to the optimum through a sequence of steps, each of which is an approximate minimum-ratio cycle in an undirected graph, found with a dynamic data structure with amortised $m^{o(1)}$ update time. Van den Brand, Chen, Kyng, Liu, Peng, Probst Gutenberg, Sachdeva and Sidford (2023) made it deterministic. The framework extends to convex edge-separable objectives such as entropy-regularised optimal transport and matrix scaling.

**Gaps.** The hidden $m^{o(1)}$ factor is large, and no implementation competitive with push-relabel or Dinic's algorithm is reported in the sources reviewed.

**Simpler routes.**

- Bernstein, Blikstad, Saranurak and Tu (2024) gave a combinatorial augmenting-path algorithm in $n^{2+o(1)}\log U$ time for dense graphs, avoiding continuous optimisation.
- Bernstein, Blikstad, Li, Saranurak and Tu (2025 preprint) report a simpler $\tilde O(n^2\log U)$ algorithm, with a C++ implementation that is not benchmarked against established codes.
- A 2026 preprint by Li gives a randomised augmenting-path algorithm for directed uncapacitated graphs in $m\,n^{1/2+o(1)}$ time, the first improvement over Dinic's bound for moderately sparse graphs among combinatorial methods. A follow-up preprint by Li and Wice (August 2026) reports an almost-linear algorithm for capacitated directed graphs that avoids the interior-point framework. All 2025–26 items are unrefereed.

**Why it matters.** Anything reducible to flows would speed up: bipartite matching, image segmentation, scheduling, network reliability, transportation and optimal transport. Today the asymptotically fastest algorithms are not used in practice, so the benefit depends on a practical implementation.

**Why hard.** The theory and the practice pull apart: the near-linear methods depend on dynamic expander and decomposition machinery with enormous constants, while the practical ones lack matching guarantees.
