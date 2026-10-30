---
type: entry
slug: diameter-critical-graphs
title: Diameter-2-critical graphs and the Murty–Simon conjecture
field: combinatorics
kind: THEORY
status: ACTIVE
summary: Graphs of diameter 2 that lose this when any edge is deleted. The Murty–Simon conjecture caps their edge count at the Mantel bound; a 2026 preprint claims a proof for every n.
reliedOn: The conjecture generalizes Mantel's theorem, the starting point of extremal graph theory, and Füredi's 1992 proof of the large-n case was the first application of the regularity lemma to an exact answer, per the Das–Fox introduction.
dependsOn:
  - extremal-combinatorics
references:
  - title: "Das, Fox: A proof of the Murty–Simon conjecture on diameter-2-critical graphs (arXiv:2610.39032, preprint)"
    url: https://arxiv.org/abs/2610.39032
    kind: paper
  - title: "Das, Fox: A proof of the Murty–Simon conjecture (full text: introduction, history, reference list)"
    url: https://arxiv.org/pdf/2610.39032
    kind: paper
timeline:
  - date: 1975-01-01
    title: Plesník conjectures the bound
    body: According to the introduction of the Das–Fox preprint, Plesník conjectured that an $n$-vertex diameter-2-critical graph has at most $\lfloor n^2/4\rfloor$ edges; Murty and Simon made the conjecture independently and added that the balanced complete bipartite graph is the only extremal case. The same source says Erdős told Füredi that the question goes back to work of Ore in the 1960s. Only the year is known, so the date is the first of January.
    source: https://arxiv.org/pdf/2610.39032
  - date: 1992-01-01
    title: Füredi proves the conjecture for very large n
    body: Füredi proves the conjecture for all sufficiently large $n$ using the triangle removal lemma and stability arguments, with a threshold that is a tower of 2s of height about $10^{14}$ (as reported in the Das–Fox introduction). Only the year is known, so the date is the first of January.
    source: https://arxiv.org/pdf/2610.39032
  - date: 2016-01-01
    title: Loh and Ma disprove the Caccetta–Häggkvist strengthening
    body: Loh and Ma show that diameter-2-critical graphs need not have average edge-degree at most $n$, closing one proposed route to the conjecture (as reported in the Das–Fox introduction). Only the year is known, so the date is the first of January.
    source: https://arxiv.org/pdf/2610.39032
  - date: 2026-10-28
    title: A preprint claims a proof of the Murty–Simon conjecture for all n
    body: Das and Fox post a preprint claiming the full conjecture for every $n\ge 3$. Its abstract says a proof of the $\lfloor n^2/4\rfloor$ bound was originally found by AI and that the authors simplified it and extended its ideas to the equality case. Unrefereed.
    source: https://arxiv.org/abs/2610.39032
explainer:
  oneLine: Networks where every two nodes are at most two hops apart, and removing any link breaks that.
  flow:
    - "Diameter 2: any two nodes within two hops"
    - "Critical: deleting any edge breaks that"
    - Triangle-free graphs obey Mantel's bound
    - "Conjecture: critical graphs obey it too"
    - Preprint claims proof, unchecked
  glossary:
    - term: graph
      meaning: Dots (vertices) joined by lines (edges); the standard model for networks.
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: distance
      meaning: The number of edges on the shortest path between two vertices.
      link: https://en.wikipedia.org/wiki/Distance_(graph_theory)
    - term: diameter
      meaning: The largest distance between any two vertices of a graph.
      link: https://en.wikipedia.org/wiki/Distance_(graph_theory)
    - term: diameter-2-critical
      meaning: A graph of diameter at most 2 that no longer has this property once any single edge is deleted.
      link: https://en.wikipedia.org/wiki/Distance_(graph_theory)
    - term: complete bipartite graph
      meaning: Vertices split into two groups, with every vertex joined to every vertex of the other group and none within a group.
      link: https://en.wikipedia.org/wiki/Complete_bipartite_graph
    - term: triangle-free graph
      meaning: A graph with no three vertices that are all joined to one another.
      link: https://en.wikipedia.org/wiki/Triangle-free_graph
    - term: Mantel's theorem
      meaning: A triangle-free graph on n vertices has at most n squared over 4 edges (rounded down); only a balanced complete bipartite graph reaches it.
      link: https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem
    - term: extremal graph theory
      meaning: The study of how large a graph can be while avoiding some forbidden structure.
      link: https://en.wikipedia.org/wiki/Extremal_graph_theory
    - term: extremal combinatorics
      meaning: The wider field of maximum sizes of structures avoiding forbidden patterns, of which extremal graph theory is part.
      link: /research/extremal-combinatorics
    - term: matching
      meaning: A set of edges, no two of which share a vertex; a maximal matching is one that cannot be extended.
      link: https://en.wikipedia.org/wiki/Matching_(graph_theory)
    - term: regularity lemma
      meaning: Szemerédi's theorem that any huge graph can be cut into few parts that behave almost randomly; its bounds are tower-sized.
      link: https://en.wikipedia.org/wiki/Szemer%C3%A9di_regularity_lemma
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Turán's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem
      why: "Mantel's theorem and its proofs: the result the conjecture generalises."
    - title: Extremal graph theory - Wikipedia
      url: https://en.wikipedia.org/wiki/Extremal_graph_theory
      why: The field this question belongs to.
    - title: Distance (graph theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Distance_(graph_theory)
      why: Distance and diameter, with pictures.
    - title: "Das, Fox: A proof of the Murty-Simon conjecture (arXiv abstract)"
      url: https://arxiv.org/abs/2610.39032
      why: The October 2026 preprint making the claim, unrefereed; the introduction has the history.
raw:
  body: "## What it is\n\nA graph has **diameter at most 2** if every pair of vertices is joined by an edge or by a path of length 2. It is **diameter-2-critical** if it has this property but loses it when any single edge is deleted. Every *maximal* triangle-free graph is diameter-2-critical, but not conversely: some diameter-2-critical graphs contain triangles (the introduction of the Das–Fox preprint gives a 7-vertex example).\n\n## The extremal question\n\nMantel's theorem (1907) says a triangle-free graph on $n$ vertices has at most $\\lfloor n^2/4\\rfloor$ edges, with equality only for the balanced complete bipartite graph $K_{\\lceil n/2\\rceil,\\lfloor n/2\\rfloor}$. It is usually counted as the first result of extremal graph theory. The **Murty–Simon conjecture** asks whether the same bound holds on the larger class of diameter-2-critical graphs:\n\n$$e(G)\\le \\left\\lfloor \\tfrac{n^2}{4}\\right\\rfloor,\\qquad\\text{with equality only for } K_{\\lceil n/2\\rceil,\\lfloor n/2\\rfloor}.$$\n\nIf true, it contains Mantel's theorem. A graph with many edges can still be critical because each edge must be the *only* short route between some pair of vertices. That is a strong local constraint, and the conjecture says it caps the edge count as sharply as forbidding triangles does.\n\n## Related formulations\n\nThe problem has been stated in several ways. Caccetta and Häggkvist proposed that the average edge-degree is at most $n$ (disproved by Loh and Ma). Hanson and Wang studied a related total-domination setting, and the bibliography of the Das–Fox preprint lists many papers that prove the conjecture for restricted graph classes (forbidden induced subgraphs, large maximum degree, complements of small connectivity or diameter), including a survey by Haynes, Henning, van der Merwe and Yeo.\n\n## Why it is hard\n\nFüredi (1992) proved the conjecture for all sufficiently large $n$ by combining the triangle removal lemma (a consequence of Szemerédi's regularity lemma) with stability arguments. The threshold is a tower of 2s of height roughly $10^{14}$, so nothing was known for the $n$ that appear in practice. A proof for every $n$ needs an argument that avoids regularity.\n\n## Status\n\nA preprint posted on 28 October 2026 by Das and Fox claims a proof for all $n\\ge 3$, built on a proof of the $\\lfloor n^2/4\\rfloor$ bound first found by an AI system. It is unrefereed. See the problem page for the claim and its checks."
  student: "**The definitions.** A **graph** $G$ is a set of vertices (dots) joined by edges (lines). The **distance** between two vertices is the number of edges on the shortest path between them, and the **diameter** is the largest such distance over all pairs. A graph has diameter at most 2 when every two vertices are adjacent or share a common neighbour. It is **diameter-2-critical** when it has this property, but deleting *any* single edge destroys it, so some pair then has distance greater than 2. Every edge is therefore essential.\n\n**Worked example 1.** The 5-cycle $C_5$ (a pentagon) has 5 edges. Any two corners are adjacent or have exactly one common neighbour, so the diameter is 2. Delete one edge and the pentagon becomes a path of 5 vertices, whose two ends are at distance 4. So $C_5$ is diameter-2-critical, with $5 \\le \\lfloor 25/4 \\rfloor = 6$ edges.\n\n**Worked example 2.** Take the complete bipartite graph $K_{2,3}$: two vertices $a_1,a_2$ on one side, three $b_1,b_2,b_3$ on the other, and all $2\\cdot 3=6$ edges between the sides. Two vertices on the same side share a neighbour; vertices on different sides are adjacent. So the diameter is 2. Delete the edge $a_1b_1$. The neighbours of $a_1$ are now $b_2,b_3$ and the only neighbour of $b_1$ is $a_2$, with no overlap, so $a_1$ and $b_1$ are at distance 3. In general $K_{\\lceil n/2\\rceil,\\lfloor n/2\\rfloor}$ is diameter-2-critical for $n\\ge 3$, and it has exactly $\\lceil n/2\\rceil\\lfloor n/2\\rfloor=\\lfloor n^2/4\\rfloor$ edges.\n\n**Where Mantel comes in.** **Mantel's theorem** (1907) says a graph with no triangle (three mutually adjacent vertices) has at most $\\lfloor n^2/4\\rfloor$ edges, and only the balanced complete bipartite graph reaches it. Every *maximal* triangle-free graph (one where adding any edge creates a triangle) is diameter-2-critical, but not conversely: some diameter-2-critical graphs contain triangles. So diameter-2-critical graphs form a bigger family, and the **Murty-Simon conjecture** asks whether Mantel's bound still holds on it:\n\n$$e(G)\\le \\lfloor n^2/4\\rfloor,$$\n\nwhere $e(G)$ is the number of edges. In words: the edge count never exceeds a quarter of $n^2$ (rounded down), with equality only for the balanced bipartite graph. If true, it contains Mantel's theorem.\n\n**Why it is hard.** Small $n$ can be checked by computer. For all $n$, the best known unconditional result until now is by Füredi (1992), who proved it only for $n$ larger than a tower of powers of two (a stack of 2s about $10^{14}$ high). His proof used the triangle removal lemma, a tool built on Szemerédi's regularity lemma, which gives bounds of that tower size. Nothing similar was available for ordinary $n$.\n\n**The 2026 claim.** A preprint by Das and Fox (arXiv:2610.39032, 28 October 2026) claims a proof for every $n\\ge 3$. In outline, for any *maximal matching* $M$ (a set of disjoint edges that cannot be enlarged), the edges outside $M$ number at most the non-edges, which yields the bound. Equality for every maximal matching forces no triangles, so Mantel's theorem finishes the equality case. The authors say a proof of the bound was first found by an AI system. It is a preprint, unrefereed, and DARC has seen no expert assessment yet, so treat the problem as open until it is checked."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Picture a small town where every person must be able to reach every other person by a direct road, or by going through exactly one other person. That is a network with a two-hop rule. Now add a strict condition: every road matters. If you close any single road, then some pair of people can no longer meet within two hops.

Networks like this are called diameter-2-critical. They are built with no wasted roads. A natural question is how many roads such a town can have. More roads usually make a network more connected, but here every road has to be the only short link for some pair, and that limits how crowded things can get.

In 1907 a mathematician named Mantel showed a simple fact: if no three people are all directly linked to one another, there can be at most about a quarter of the squared number of people as roads. The best way to reach that is to split the town into two groups and link every person in one group to every person in the other. The guess studied here says the same limit holds for the larger family of two-hop, every-road-matters networks. The guess is about fifty years old.

In October 2026 two mathematicians, Sanjana Das and Jacob Fox, posted a paper claiming to prove it, starting from an argument first found by an AI system. Nobody independent has checked it yet, so on DARC it is still marked open.

The town picture has limits: real roads have lengths and costs, while here every road is the same.
