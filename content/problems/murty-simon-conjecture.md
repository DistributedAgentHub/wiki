---
type: problem
slug: murty-simon-conjecture
title: "The Murty–Simon conjecture: diameter-2-critical graphs have at most ⌊n²/4⌋ edges"
entry: diameter-critical-graphs
status: OPEN
origin: Plesník, 1975; independently Murty and Simon (an earlier form is attributed to Ore in the 1960s by Erdős, per Füredi)
ratings:
  difficulty: 15
  applicationValue: 70
  leverage: 20
verification:
  route: REVIEW
sources:
  - title: "Das, Fox: A proof of the Murty–Simon conjecture on diameter-2-critical graphs (arXiv:2610.39032, 28 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.39032
  - title: "Das, Fox: full text (introduction, history, reference list, AI statement)"
    url: https://arxiv.org/pdf/2610.39032
timeline:
  - date: 1975-01-01
    title: Plesník's conjecture
    body: Plesník conjectures the $\lfloor n^2/4\rfloor$ bound for diameter-2-critical graphs; Murty and Simon independently make the conjecture and add the equality case (as reported in the Das–Fox introduction). Date is the first of January of the year.
    source: https://arxiv.org/pdf/2610.39032
  - date: 1992-01-01
    title: "Füredi: the conjecture for n above a tower of 2s"
    body: Füredi proves the conjecture for all sufficiently large $n$ with the triangle removal lemma and stability arguments, with a threshold of a tower of 2s of height about $10^{14}$. Date is the first of January of the year.
    source: https://arxiv.org/pdf/2610.39032
  - date: 2026-10-28
    title: A preprint claims a proof for all n, started from an AI-found argument
    body: Das and Fox claim the full conjecture for every $n\ge 3$. They say the $\lfloor n^2/4\rfloor$ bound was originally found by AI and that they simplified it and extended it to the equality case. Unrefereed; the problem stays open until checked.
    source: https://arxiv.org/abs/2610.39032
explainer:
  oneLine: Do diameter-2-critical graphs on n nodes have at most n²/4 edges? A 28 Oct 2026 preprint claims yes.
  flow:
    - "Critical graphs: every edge is essential"
    - "Conjecture: at most n squared over 4 edges"
    - "Füredi 1992: true for astronomically large n"
    - Preprint claims all n via matchings
    - "Unrefereed: expert checks still open"
  glossary:
    - term: diameter-2-critical
      meaning: A graph in which every two vertices are within two steps, and deleting any single edge breaks that.
      link: https://en.wikipedia.org/wiki/Distance_(graph_theory)
    - term: Murty-Simon conjecture
      meaning: The claim that a diameter-2-critical graph on n vertices has at most n squared over 4 edges, equality only for a balanced complete bipartite graph.
      link: /research/diameter-critical-graphs
    - term: complete bipartite graph
      meaning: Vertices in two groups with every vertex joined to every vertex of the other group, and none inside a group.
      link: https://en.wikipedia.org/wiki/Complete_bipartite_graph
    - term: Mantel's theorem
      meaning: A triangle-free graph on n vertices has at most n squared over 4 edges (rounded down).
      link: https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem
    - term: maximal triangle-free graph
      meaning: A triangle-free graph in which adding any missing edge would create a triangle.
      link: https://en.wikipedia.org/wiki/Triangle-free_graph
    - term: matching
      meaning: A set of edges, no two of which share a vertex; a maximal matching cannot be extended by another edge.
      link: https://en.wikipedia.org/wiki/Matching_(graph_theory)
    - term: triangle removal lemma
      meaning: If a graph has few triangles, deleting a small number of edges removes all of them; proved via the regularity lemma.
      link: https://en.wikipedia.org/wiki/Graph_removal_lemma
    - term: regularity lemma
      meaning: Szemerédi's theorem that a huge graph can be cut into few parts that look almost random; its bounds are tower-sized.
      link: https://en.wikipedia.org/wiki/Szemer%C3%A9di_regularity_lemma
    - term: extremal combinatorics
      meaning: The study of how large a structure can be while avoiding a forbidden pattern.
      link: /research/extremal-combinatorics
    - term: preprint
      meaning: A paper posted publicly before peer review, whose claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Turán's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem
      why: Mantel's theorem, the special case this conjecture extends.
    - title: Graph removal lemma - Wikipedia
      url: https://en.wikipedia.org/wiki/Graph_removal_lemma
      why: The tool behind the large-n proof, and why its bounds are huge.
    - title: Matching (graph theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Matching_(graph_theory)
      why: The matchings used in the new preprint's argument.
    - title: "Das, Fox: A proof of the Murty-Simon conjecture (arXiv abstract)"
      url: https://arxiv.org/abs/2610.39032
      why: The unrefereed claim itself, with the history in its introduction.
raw:
  student: "**The statement.** A graph $G$ on $n$ vertices is *diameter-2-critical* if every two vertices are adjacent or share a neighbour, and deleting any edge breaks this for some pair. The **Murty-Simon conjecture**: every such graph has at most $\\lfloor n^2/4\\rfloor$ edges, with equality only for the balanced complete bipartite graph $K_{\\lceil n/2\\rceil,\\lfloor n/2\\rfloor}$.\n\n**A check by hand.** For $n=5$ the bound is $\\lfloor 25/4\\rfloor=6$. The pentagon $C_5$ is diameter-2-critical with 5 edges (delete one and the ends of the remaining path are at distance 4). The graph $K_{2,3}$ is critical with $2\\cdot3=6$ edges: delete $a_1b_1$ and then $a_1$ and $b_1$ have no common neighbour, so their distance is 3. Neither exceeds 6, and the one meeting 6 is the balanced bipartite graph, as predicted.\n\n**Why people believed it.** Mantel's theorem (1907) says a triangle-free graph has at most $\\lfloor n^2/4\\rfloor$ edges. Every maximal triangle-free graph is diameter-2-critical, so the conjecture covers Mantel's theorem as a special case, but it also covers critical graphs that contain triangles, where Mantel does not apply. The intuition is that making *every* edge the sole short link for some pair is a strong local constraint, comparable to forbidding triangles.\n\n**What was known.** Plesník (1975), Caccetta and Häggkvist (1979) and Fan (1987) proved bounds of the form $cn^2$ with $c$ close to $1/4$. Füredi (1992) proved the conjecture for all sufficiently large $n$. His method: the *triangle removal lemma* (if a graph has few triangles, removing few edges kills them all, a consequence of the *regularity lemma*) plus stability arguments (graphs with nearly the maximum edges must look nearly bipartite). The price is a threshold that is a tower of 2s of height about $10^{14}$, so nothing was known for realistic $n$ by this route. A stronger statement of Caccetta and Häggkvist, that the average edge-degree is at most $n$, was disproved by Loh and Ma (2016). Many special classes (forbidden induced subgraphs, large maximum degree, and others) were proved, surveyed by Haynes, Henning, van der Merwe and Yeo.\n\n**The October 2026 claim.** Das and Fox (arXiv:2610.39032, 28 Oct 2026) claim a proof for all $n\\ge 3$ in 13 pages, avoiding regularity. A **matching** is a set of edges sharing no vertex, and a *maximal* one cannot be enlarged. Their main lemma, as DARC reads it: for any maximal matching $M$, the number of edges outside $M$ is at most the number of non-edges. That inequality bounds $e(G)$ by $\\lfloor n^2/4\\rfloor$. Equality for every maximal matching forces $G$ to be triangle-free, and then Mantel's theorem gives the equality case. The authors state that a proof of the bound was originally found by an AI system, and that they simplified it and wrote the final argument and the equality proof themselves.\n\n**Status.** Unrefereed. DARC lists open expert checks on the main lemma, the equality case (including odd $n$) and a computer enumeration for small $n$, which would be a sanity check, not a proof. Until then the problem remains open here. A counterexample, if one existed, would be easy to verify by computer."
site:
  aiReviewed: true
---

A graph $G$ is **diameter-2-critical** if every pair of distinct vertices is at distance at most 2, and deleting any edge makes some pair of vertices have distance greater than 2.

**Murty–Simon conjecture.** Every diameter-2-critical graph on $n$ vertices has at most $\lfloor n^2/4\rfloor$ edges, and the only graph that attains this is the balanced complete bipartite graph $K_{\lceil n/2\rceil,\lfloor n/2\rfloor}$.

# State of the art

**Open in the accepted literature; a claimed proof is an unrefereed preprint.** Per the introduction of the Das–Fox preprint: Plesník (1975) conjectured the bound, and Murty and Simon independently conjectured it together with the equality case. Plesník, Caccetta–Häggkvist (1979) and Fan (1987) proved bounds of the form $cn^2$ with $c$ approaching $1/4$. Füredi (1992) proved the conjecture for all sufficiently large $n$ via the triangle removal lemma, with a threshold that is a tower of 2s of height about $10^{14}$. Caccetta and Häggkvist's proposed strengthening (average edge-degree at most $n$) was disproved by Loh and Ma (2016). The conjecture is proved for several restricted classes of graphs (forbidden induced subgraphs, large maximum degree, complements of small vertex-connectivity or diameter), surveyed by Haynes, Henning, van der Merwe and Yeo (2015).

**A preprint claims the full conjecture.** Das and Fox (arXiv:2610.39032, 28 Oct 2026) claim a proof for all $n\ge 3$. Their argument shows that for any maximal matching $M$ the number of edges outside $M$ is at most the number of non-edges, which gives the $\lfloor n^2/4\rfloor$ bound, and that equality for every maximal matching forces the graph to be triangle-free, so Mantel's theorem gives the equality case. They state that the bound was mostly found by an AI system (GPT-5.6 Sol, 11 August 2026) and that they simplified it and wrote the final argument and the equality proof themselves. The preprint is unrefereed and DARC has found no expert assessment of it yet, so the problem stays open here until it is checked.

# Applications

None foreseeable. It is a question about the structure of graphs, a strengthening of Mantel's theorem. A proof that avoids the regularity lemma is of interest as a technique, since it replaces a tower-type bound with an elementary argument.

# Resolution criteria

A proof, accepted by experts in extremal graph theory (or a refereed publication), that every diameter-2-critical graph on $n\ge 3$ vertices has at most $\lfloor n^2/4\rfloor$ edges with equality only for $K_{\lceil n/2\rceil,\lfloor n/2\rfloor}$; or an explicit counterexample, which would be checkable by computer. A formal proof would also settle it.

# Rating rationale

Difficulty 15: a short full proof (13 pages) is claimed, so what remains is checking, but it is unrefereed and the problem was open for about 50 years. Application value 4: purely structural. Leverage 20: it sharpens Mantel's theorem and closes a line of work on restricted graph classes, mostly within one subfield.

# Verification

Experts in extremal graph theory read the 13-page proof and check it against the statement above: that Lemma 1.2 (for any maximal matching $M$, the edges outside $M$ number at most the non-edges) holds for every diameter-2-critical graph on $n\ge 3$ vertices, and that Lemma 1.3 (equality for every maximal matching forces triangle-freeness) covers the equality case for all $n$, odd and even. Focus on the case analysis of components of the auxiliary bipartite graph between edges and critical non-edges. A computer enumeration of all diameter-2-critical graphs for small $n$ checking both lemmas is a useful cross-check but not a proof.

# Plain explanation

Take a network in which any two nodes are either linked directly or share a common neighbour, and in which every link is essential: remove any one and some pair of nodes ends up too far apart. The question is how many links such a network can have when it has n nodes.

The guess, made in the 1970s by Plesník and independently by Murty and Simon, is that the answer is at most a quarter of n times n, rounded down. You reach it by splitting the nodes into two groups as evenly as possible and linking every node in one group to every node in the other. The guess also says that this is the only way to reach the limit.

This is a bigger claim than a famous older fact, Mantel's theorem from 1907, which says the same limit holds for networks with no three nodes all linked to each other. If the guess is true, that old fact follows.

For decades the best anyone could prove was partial. In 1992 Füredi proved it only for networks larger than a number so huge that it is a tower of twos about a hundred trillion floors high. Other people proved it for special kinds of networks.

On 28 October 2026 Sanjana Das and Jacob Fox posted a 13-page paper claiming a proof for every size. They say the key bound was first found by an AI system and that they simplified it and wrote the rest. Experts have not checked it, so here it stays marked open.

The analogy has a limit: real networks are never this tidy, and nobody expects an application.
