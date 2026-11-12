---
type: entry
slug: online-graph-colouring
title: Online graph colouring and competitive analysis
field: graph-algorithms
kind: ALGORITHM
status: ACTIVE
summary: Colour a graph's vertices as they arrive, never recolouring. Known ratios to the optimum are only slightly below n; a Nov 2026 preprint claims randomness provably helps.
reliedOn: Online colouring is a standard testbed for competitive analysis and for the question of how much randomization helps against an adversary; the authors cite scheduling and resource allocation as applications.
dependsOn:
  - computational-complexity
  - online-network-design
references:
  - title: "Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring: Competitive Ratios Separating Randomized and Deterministic Algorithms (arXiv preprint, v1 10 November 2026)"
    url: https://arxiv.org/abs/2611.14513
    kind: paper
  - title: Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring for k-Colorable Graphs (arXiv preprint, v1 20 November 2025)
    url: https://arxiv.org/abs/2511.16100
    kind: paper
timeline:
  - date: 1989-01-01
    title: First sublinear competitive ratio
    body: Lovász, Saks and Trotter gave a deterministic online colouring algorithm with ratio O(n / log* n) (year only; month is a placeholder). Bound as quoted in the 2025 paper cited here.
    source: https://arxiv.org/abs/2511.16100
  - date: 1992-01-01
    title: Randomized online colouring
    body: Vishwanathan gave a randomized algorithm with ratio O(n / sqrt(log n)) (year only; month is a placeholder). Bound as quoted in the 2025 paper cited here.
    source: https://arxiv.org/abs/2511.16100
  - date: 1994-01-01
    title: Lower bound Omega(n / log^2 n) for all algorithms
    body: Halldórsson and Szegedy proved that every deterministic or randomized online colouring algorithm has competitive ratio Omega(n / log^2 n) (year only; month is a placeholder). Bound as quoted in the 2026 preprint.
    source: https://arxiv.org/abs/2611.14513
  - date: 1997-01-01
    title: Randomized ratio O(n / log n)
    body: Halldórsson improved the randomized competitive ratio to O(n / log n) (year only; month is a placeholder). Bound as quoted in the 2025 and 2026 papers cited here.
    source: https://arxiv.org/abs/2611.14513
  - date: 2025-11-20
    title: Deterministic ratio O(n / log log n)
    body: Kawarabayashi, Yoneda and Yoneda posted a deterministic algorithm with ratio O(n / log log n), improving Kierstead's 1998 O(n log log log n / log log n). Unrefereed when posted; the 2026 preprint says it is to appear at SODA 2027.
    source: https://arxiv.org/abs/2511.16100
  - date: 2026-11-10
    title: Preprint claims a randomized-deterministic separation
    body: The same authors posted a preprint claiming an Omega(n / log n) deterministic lower bound, an O(n (log log n)^2 / log^2 n) randomized upper bound against an oblivious adversary, and an O(n / (log log n)^(2-eps)) deterministic upper bound. Unrefereed; DARC has not checked it.
    source: https://arxiv.org/abs/2611.14513
explainer:
  oneLine: Giving colours to the points of a network as they appear, with no take-backs, so that linked points differ.
  flow:
    - Vertices arrive; colour each at once
    - Simple rules use about n/2 colours
    - Known limits left randomness unexplained
    - 2026 preprint claims a clear separation
    - Gaps and refereeing still pending
  glossary:
    - term: graph colouring
      meaning: Giving each vertex of a graph a colour so that vertices joined by an edge get different colours.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: chromatic number
      meaning: The smallest number of colours with which a graph can be properly coloured.
      link: https://en.wikipedia.org/wiki/Chromatic_number
    - term: online algorithm
      meaning: A method that must make each decision as the input arrives, without knowing what comes next.
      link: https://en.wikipedia.org/wiki/Online_algorithm
    - term: competitive ratio
      meaning: The worst-case ratio between what an online algorithm achieves and what the best offline algorithm achieves with full knowledge.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: First-Fit
      meaning: "A greedy colouring rule: give each vertex the smallest colour not already used by one of its neighbours."
      link: https://en.wikipedia.org/wiki/Greedy_coloring
    - term: oblivious adversary
      meaning: An opponent who fixes the whole input in advance, without seeing the algorithm's random choices.
      link: https://en.wikipedia.org/wiki/Adversary_(online_algorithm)
    - term: randomized algorithm
      meaning: A method that makes random choices, so its cost is judged on average over those choices.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: bipartite graph
      meaning: A graph whose vertices split into two groups with every edge going between the groups; two colours suffice.
      link: https://en.wikipedia.org/wiki/Bipartite_graph
    - term: clique
      meaning: A set of vertices all joined to each other; each needs its own colour.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: iterated logarithm
      meaning: How many times you must take a logarithm before the number drops to 1 or less; it grows extremely slowly.
      link: https://en.wikipedia.org/wiki/Iterated_logarithm
    - term: computational complexity
      meaning: The study of how much time or memory problems need as they grow.
      link: /research/computational-complexity
  readFirst:
    - title: Graph coloring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: Offline graph colouring, the baseline the online problem is compared with.
    - title: Competitive analysis (online algorithm) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
      why: Defines the competitive ratio and the adversary.
    - title: Greedy coloring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Greedy_coloring
      why: The First-Fit rule and why order matters.
    - title: Kawarabayashi, Yoneda, Yoneda, Online Graph Coloring for k-Colorable Graphs (arXiv)
      url: https://arxiv.org/abs/2511.16100
      why: Its introduction surveys the history of the problem.
raw:
  student: "**The setup.** A graph is a set of vertices joined by edges. A *colouring* gives each vertex a colour so that the two ends of every edge differ; the *chromatic number* $\\chi(G)$ is the fewest colours that can work. In the *online* version the vertices arrive one by one, each with its edges to earlier vertices, and the colour must be chosen immediately and kept forever.\n\n**Measuring quality.** Competitive analysis compares an online algorithm with an offline one that sees everything. The *competitive ratio* is (colours the online algorithm uses) / $\\chi(G)$, taken for the worst input. Think of an adversary who designs the input to hurt your algorithm. For a randomized algorithm the adversary fixes the input before the coin flips, and we count the expected number of colours; this is called an *oblivious* adversary.\n\n**First-Fit fails.** First-Fit gives each vertex the smallest colour not used by an earlier neighbour. An adversary can present a bipartite graph (colourable with 2 colours) in an order that makes First-Fit use about $n/2$ colours for $n$ vertices. So its ratio is about $n/4$, nearly the worst possible.\n\n**What is known.** Smarter algorithms bring the ratio below $n$, but only by factors such as $\\log n$: Lovász, Saks and Trotter (1989) gave a deterministic ratio of $O(n/\\log^* n)$; Halldórsson (1997) gave a randomized $O(n/\\log n)$; Kawarabayashi, Yoneda and Yoneda (2025) a deterministic $O(n/\\log\\log n)$. On the other side, Halldórsson and Szegedy (1994) showed that no algorithm, even a randomized one, can beat about $n/\\log^2 n$. Since $\\log\\log n$ grows far more slowly than $\\log n$, there was a wide gap, and the question *does randomness help here?* was open.\n\n**The 2026 claim.** The same authors, in an unrefereed preprint, claim a deterministic lower bound of $\\Omega(n/\\log n)$ and a randomized algorithm with ratio about $n(\\log\\log n)^2/\\log^2 n$. Because $n/\\log n$ is larger than that, any deterministic method would be provably worse than the randomized one. Their central trick is to look at graphs that need many colours, not few. If every colour is used on at most two vertices, the number of colours is at most $(n+\\omega)/2$ where $\\omega$ is the size of the biggest clique (a group of vertices all joined to each other); the question becomes whether three vertices per colour is possible, which they claim works with randomness and fails without.\n\n**Honest status.** Preprints are not checked by referees. DARC lists the claim as under review, and the exact answer is still open: a $(\\log\\log n)^2$ gap remains for randomized algorithms and a larger one for deterministic algorithms."
site:
  published: true
  aiReviewed: true
---

## The model

Vertices of an undirected graph $G$ arrive one at a time, each together with its edges to the vertices that have already arrived. The algorithm must give each arriving vertex a colour at once, so that adjacent vertices never share a colour, and it can never change a colour later. Its cost is the number of colours used. The **competitive ratio** is the worst case of (colours used) divided by the chromatic number $\chi(G)$, the least number of colours an offline algorithm that sees the whole graph could use. For randomized algorithms the ratio is taken in expectation against an **oblivious adversary**: the input is fixed in advance, without seeing the algorithm's random choices.

## Why simple rules fail

First-Fit, which gives each vertex the smallest colour not used by a neighbour, can be forced to use about $n/2$ colours on an $n$-vertex bipartite graph, which two colours suffice for, so its competitive ratio is at least about $n/4$. Online colouring is hard in a way that most online problems are not: even the best known algorithms have a competitive ratio that is only a slowly shrinking fraction of $n$.

## Upper bounds, in order

- Lovász, Saks and Trotter (1989) gave a deterministic algorithm with ratio $O(n/\log^* n)$, where $\log^*$ is the iterated logarithm, and a deterministic way to colour bipartite graphs with $2\log_2(n+1)$ colours.
- Vishwanathan (1992) gave a randomized algorithm with ratio $O(n/\sqrt{\log n})$.
- Halldórsson (1997) improved the randomized ratio to $O(n/\log n)$.
- Kierstead (1998) improved the deterministic ratio to $O(n\log\log\log n/\log\log n)$.
- Kawarabayashi, Yoneda and Yoneda (arXiv, November 2025; the 2026 preprint says it is to appear at SODA 2027) gave a deterministic $O(n/\log\log n)$.

## Lower bound

Halldórsson and Szegedy (1994) proved that every algorithm, deterministic or randomized, has competitive ratio $\Omega(n/\log^2 n)$. For three decades this was the best general lower bound, so it could not tell whether randomness helps: the best randomized upper bound ($n/\log n$) was below the best deterministic one, but both lay above the common lower bound.

## The November 2026 preprint (unrefereed)

Kawarabayashi, Yoneda and Yoneda (arXiv:2611.14513, v1 of 10 November 2026) report three results. First, a deterministic lower bound $\Omega(n/\log n)$. Second, a polynomial-time randomized algorithm with expected competitive ratio $O(n(\log\log n)^2/\log^2 n)$ against an oblivious adversary. Third, for every fixed $\varepsilon>0$, a polynomial-time deterministic algorithm with ratio $O(n/(\log\log n)^{2-\varepsilon})$. Because $(\log\log n)^2/\log^2 n$ is much smaller than $1/\log n$, the first two results together would show that randomization helps by a polylogarithmic factor, a separation that holds even against deterministic algorithms with unlimited running time.

The authors work with graphs of large chromatic number, rather than the constant-colourable graphs that were the historical focus. A key observation is that giving each colour to at most two vertices already works well when $\chi$ is large: for a graph with no clique of size $\omega+1$, such an algorithm uses at most $(n+\omega)/2$ colours. They then ask whether three vertices per colour can be made to work, which they show fails for deterministic algorithms and, by their claim, succeeds for randomized ones. The paper's AI usage disclosure says OpenAI's GPT-6 Astra was used extensively while exploring the proofs: after the authors proposed the large-chromatic approach it generated the proofs of the first two results, and its proofs of the second and third results were substantially simplified by the authors, who wrote the paper and take responsibility for its correctness.

## What stays open

If the preprint holds, the randomized ratio is pinned between $n/\log^2 n$ and $n(\log\log n)^2/\log^2 n$, a gap of $(\log\log n)^2$; the deterministic ratio is pinned between $n/\log n$ and $n/(\log\log n)^{2-\varepsilon}$, a polylogarithmic gap. The authors conjecture that every deterministic algorithm has ratio $\Omega(n/\log^c n)$ for every fixed $c>0$ (they say they believe no deterministic algorithm achieves $O(n/\log n)$), and that a randomized algorithm with ratio $O(n/\log^2 n)$ exists; both are conjectures, not results. DARC has not checked the proofs.

# Plain explanation

Imagine a map being drawn one town at a time. Each time a new town appears, you are told which earlier towns it has a road to, and you must paint it straight away. Towns joined by a road may not share a colour, and you can never repaint. The aim is to use as few colours as possible.

If you could see the whole map first, you might need only a handful of colours. Painting blind is far worse. A simple rule, always pick the first colour that is allowed, can be tricked into using about half as many colours as there are towns, even on a map that two colours would have been enough for.

Researchers measure how bad an online method is by comparing it with the best colouring you could make with full knowledge. For forty years the best methods were only slightly better than the trivial one of giving every town its own colour. Using coin flips seemed to help, but nobody could prove it really helps, because the known limits did not separate the two.

In November 2026 three researchers posted a paper claiming that coin flips do help, by a clear margin. This is a claim, not an established result: other experts have not yet checked it.
