---
type: entry
slug: graph-minors-structure
title: Graph minors and structural graph theory
field: combinatorics
kind: THEORY
status: ACTIVE
summary: Minors, tree-width and the Robertson–Seymour theory; the extremal density of K_t-minor-free graphs; and colouring by excluded minors, from the Four Colour Theorem to Hadwiger's conjecture.
reliedOn: Hadwiger's conjecture for t = 7, which asks whether K7-minor-free graphs are 6-colourable, is built on this entry. So are partial results on it, such as the K7 minus two edges cases, and the asymptotic (linear) Hadwiger line.
dependsOn:
  - extremal-combinatorics
references:
  - title: R. Diestel, Graph Theory (6th ed.), Springer GTM 173
    url: https://doi.org/10.1007/978-3-662-70107-2
    kind: book
  - title: P. Seymour, Hadwiger's Conjecture, in Open Problems in Mathematics, Springer (2016)
    url: https://doi.org/10.1007/978-3-319-32162-2_13
    kind: article
  - title: N. Robertson, D. Sanders, P. Seymour and R. Thomas, The Four-Colour Theorem, J. Combin. Theory Ser. B 70 (1997)
    url: https://doi.org/10.1006/jctb.1997.1750
    kind: paper
  - title: N. Robertson and P. Seymour, Graph Minors. XX. Wagner's conjecture, J. Combin. Theory Ser. B 92 (2004)
    url: https://doi.org/10.1016/j.jctb.2004.08.001
    kind: paper
  - title: M. Delcourt and L. Postle, Reducing Linear Hadwiger's Conjecture to Coloring Small Graphs (arXiv:2108.01633)
    url: https://arxiv.org/abs/2108.01633
    kind: paper
  - title: C.-H. Liu and J. Luo, Beyond halfway to Hadwiger's conjecture (arXiv:2609.06867, unrefereed preprint)
    url: https://arxiv.org/abs/2609.06867
    kind: paper
  - title: S. Norin and R. Steiner, A Proof of the Linear Hadwiger Conjecture (arXiv:2610.05291, unrefereed preprint, not independently verified)
    url: https://arxiv.org/abs/2610.05291
    kind: paper
  - title: "LinearHadwiger: Lean 4 formalization accompanying Norin–Steiner (repository claims, not independently checked)"
    url: https://github.com/snorin239/LinearHadwiger
    kind: code
timeline:
  - date: 1984-12-01
    title: Kostochka's density bound for clique minors
    body: Kostochka (and independently Thomason) showed that graphs of average degree on the order of t√(log t) contain a K_t minor, so K_t-minor-free graphs are O(t√(log t))-colourable.
    source: https://doi.org/10.1007/BF02579141
  - date: 1993-09-01
    title: Hadwiger's conjecture for t = 6
    body: Robertson, Seymour and Thomas showed that a minimal counterexample for K6 is an apex graph, which reduces the case t = 6 to the Four Colour Theorem.
    source: https://doi.org/10.1007/BF01202354
  - date: 2019-10-21
    title: Breaking the degeneracy barrier
    body: Norin, Postle and Song proved that K_t-minor-free graphs are O(t(log t)^β)-colourable for every β > 1/4, the first improvement over the Kostochka–Thomason bound.
    source: https://arxiv.org/abs/1910.09378
  - date: 2021-08-03
    title: O(t log log t) and reduction to small graphs
    body: Delcourt and Postle proved χ = O(t log log t) for K_t-minor-free graphs and reduced linear Hadwiger to graphs with polylogarithmically more than t vertices.
    source: https://arxiv.org/abs/2108.01633
  - date: 2026-10-04
    title: Claimed proof of linear Hadwiger (unrefereed)
    body: Norin and Steiner posted a preprint claiming χ(G) ≤ C·h(G) for an absolute C (roughly 10^100 by their estimate), with an AI-found proof and a Lean formalization. The claim has not been independently verified and does not bear on t = 7.
    source: https://arxiv.org/abs/2610.05291
explainer:
  oneLine: The study of networks by what smaller networks they contain after squeezing connected parts into single points.
  flow:
    - Squeeze parts of a network together
    - Ask which small shapes survive
    - Forbidden shapes describe whole graph families
    - "Link to colouring: Hadwiger's conjecture"
  glossary:
    - term: graph
      meaning: A set of dots (vertices) joined by lines (edges), used to model networks.
      link: https://en.wikipedia.org/wiki/Graph_theory
    - term: graph minor
      meaning: A graph obtained from another by deleting vertices or edges and contracting edges.
      link: https://en.wikipedia.org/wiki/Graph_minor
    - term: planar graph
      meaning: A graph that can be drawn on a flat sheet without any lines crossing.
      link: https://en.wikipedia.org/wiki/Planar_graph
    - term: complete graph
      meaning: A graph in which every pair of dots is joined by a line.
      link: https://en.wikipedia.org/wiki/Complete_graph
    - term: Robertson-Seymour theorem
      meaning: Every family of graphs closed under taking minors is described by a finite list of forbidden minors.
      link: https://en.wikipedia.org/wiki/Robertson%E2%80%93Seymour_theorem
    - term: tree-width
      meaning: A number measuring how close a graph is to being a tree; small tree-width makes many problems easy.
      link: https://en.wikipedia.org/wiki/Treewidth
    - term: graph colouring
      meaning: Giving each dot a colour so that dots joined by a line never share one.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: Four Colour Theorem
      meaning: Any map can be coloured with four colours so that neighbouring regions have different colours.
      link: https://en.wikipedia.org/wiki/Four_color_theorem
    - term: Hadwiger's conjecture
      meaning: The conjecture that a graph with no K_t minor needs at most t-1 colours.
      link: https://en.wikipedia.org/wiki/Hadwiger_conjecture_(graph_theory)
    - term: edge contraction
      meaning: Merging the two dots at the ends of a line into a single dot, keeping all their other connections.
      link: https://en.wikipedia.org/wiki/Edge_contraction
    - term: minor-closed family
      meaning: A family of graphs such that every minor of a member is again a member, such as all planar graphs.
      link: https://en.wikipedia.org/wiki/Graph_minor
  readFirst:
    - title: Graph minor - Wikipedia
      url: https://en.wikipedia.org/wiki/Graph_minor
      why: The definition with pictures, and the main theorems.
    - title: Four color theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Four_color_theorem
      why: The famous result that Hadwiger's conjecture extends.
    - title: Hadwiger conjecture (graph theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Hadwiger_conjecture_(graph_theory)
      why: What is known and what is open for each value of t.
    - title: Treewidth - Wikipedia
      url: https://en.wikipedia.org/wiki/Treewidth
      why: The structural parameter at the centre of the theory.
site:
  published: true
  aiReviewed: true
---

## What it is

A graph $H$ is a **minor** of $G$ if $H$ can be obtained from a subgraph of $G$ by contracting edges. Equivalently, $G$ contains a model of $H$: disjoint connected branch sets $(B_v)_{v\in V(H)}$, with an edge between $B_u$ and $B_v$ whenever $uv\in E(H)$. The Hadwiger number $h(G)$ is the largest $t$ such that $K_t$ is a minor of $G$. Classes are described by excluded minors or excluded induced subgraphs.

## The core machinery

- **Planarity and $K_5$.** Kuratowski and Wagner: $G$ is planar if and only if it has neither $K_5$ nor $K_{3,3}$ as a minor. Wagner also proved that $K_5$-minor-free graphs are clique-sums (of order at most 3) of planar graphs and the Wagner graph $V_8$. Hence Hadwiger's conjecture for $t=5$ is equivalent to the Four Colour Theorem.
- **Four Colour Theorem.** Appel and Haken proved it in 1976 with discharging and a computer check of reducible configurations. Robertson–Sanders–Seymour–Thomas (1997) gave a simpler proof with 633 configurations and a quadratic algorithm. Gonthier formalized that proof in Coq (announced 2005, published 2008).
- **Tree-width.** Tree-width is defined by tree-decompositions and is dual to brambles: $\operatorname{tw}(G)\ge k$ if and only if $G$ has a bramble of order $k+1$ (Seymour–Thomas). By the grid theorem, large tree-width forces a large grid minor (polynomially, by Chekuri–Chuzhoy).
- **Graph Minor Theorem.** Robertson–Seymour (Graph Minors XX, 2004) proved that finite graphs are well-quasi-ordered under the minor relation. So every minor-closed class has a finite set of excluded minors, and testing for a fixed minor takes polynomial time. The **structure theorem** says that every $K_t$-minor-free graph is a clique-sum of graphs that almost embed in a surface of bounded genus, with boundedly many apices and vortices.
- **Extremal density.** Mader proved that $K_t$-minor-free graphs have at most $2^{t-3}n$ edges, and exactly $(t-2)n-\binom{t-1}{2}$ for $t\le7$. Kostochka and Thomason (1984) showed that the maximum average degree is $\Theta(t\sqrt{\log t})$, with random graphs extremal. Degeneracy then gives $\chi=O(t\sqrt{\log t})$.
- **Hadwiger's conjecture.** The conjecture is $\chi(G)\le h(G)$. It is easy for $t\le4$, equivalent to the Four Colour Theorem for $t=5$, and holds for $t=6$ (Robertson–Seymour–Thomas, 1993). Their proof shows that a minimal counterexample is an apex graph, so the $t=6$ case also reduces to the Four Colour Theorem. The standard tools are contraction-critical graphs and their connectivity (Dirac, Mader) and Kempe-chain recolouring.
- **The asymptotic line.** Norin–Postle–Song (2019) gave the first bound below $O(t\sqrt{\log t})$, namely $O(t(\log t)^{\beta})$ for every $\beta>1/4$. Delcourt–Postle (2021) proved $O(t\log\log t)$ and reduced linear Hadwiger to graphs on $t(\log t)^{O(1)}$ vertices. Liu–Luo (preprint, September 2026) proved $O(t\log\log\log t)$. Norin–Steiner (arXiv:2610.05291, 4 October 2026) claim linear Hadwiger: $\chi(G)\le C\cdot h(G)$. Their paper is an **unrefereed preprint**, and the claim has **not yet been independently verified**. The authors say the proof was found by an OpenAI model following their directions, give a rough estimate of $C\approx10^{100}$, and point to a Lean 4 formalization whose README reports an axiom-clean build. Even if correct, a constant factor of this size says nothing about $t=7$.
- **χ-boundedness.** The strong perfect graph theorem (Chudnovsky–Robertson–Seymour–Thomas, Annals 2006) states that $G$ is perfect if and only if it has no odd hole and no odd antihole. The Scott–Seymour program studies which induced-subgraph exclusions bound $\chi$ in terms of $\omega$.

## Techniques to master

Discharging, Kempe chains, linkage from connectivity, tree-decompositions, finding minors in dense pieces, and fractional colouring via LP duality (Reed–Seymour).

## Standard references / Reading path

Prerequisites: undergraduate graph theory and the extremal combinatorics entry. Read Diestel, _Graph Theory_ (GTM 173, 6th ed.), Chapters 4, 5, 7 and 12; Mohar–Thomassen, _Graphs on Surfaces_; Seymour's survey "Hadwiger's conjecture" in _Open Problems in Mathematics_; then the papers of Robertson–Seymour–Thomas (1993), Norin–Postle–Song and Delcourt–Postle.

## Where it bites

The first open case of Hadwiger's conjecture is $t=7$: is every $K_7$-minor-free graph 6-colourable? Jakobsen's 1971 bound of 8 colours still stands, and it is not even known whether 7 colours suffice. Two recent preprints settle the 6-colour statement for $K_7$ with two edges deleted. Norin–Totschnig (arXiv:2507.03244) treat $K_7^{\vee}$, where the two deleted edges share an end. Dvořák–Norin–Rahman (arXiv:2609.17760) treat $K_7^{=}$, where they are disjoint. The $K_7^{=}$ proof goes through an edge bound of $4n-8$ for 5-connected $K_7^{=}$-minor-free graphs.

# Plain explanation

A graph, in mathematics, is just dots joined by lines: a road map, a friendship network, a circuit. A graph is a minor of another if you can get it by deleting some dots or lines and squeezing connected clumps of dots into single dots.

Why squeeze? Because it throws away fine detail and keeps the overall shape of how things connect. Two road networks can look different yet share the same big-picture layout. Asking 'does this network contain that shape as a minor?' is a robust question.

Here is the striking part. A graph can be drawn on paper without crossing lines (planar) exactly when it avoids two particular small shapes as minors. The same pattern, a short list of forbidden shapes, turns out to describe huge families of networks. In a monumental series of papers, Robertson and Seymour proved that every such family is described by a finite list of forbidden shapes. The proof is hundreds of pages long and tells you, remarkably, that the world of graphs is far more orderly than it looks.

The theory also connects to colouring. The Four Colour Theorem says any map can be coloured with four colours so that neighbouring regions differ. Hadwiger's conjecture is a sweeping extension that links colouring to minors, and it remains open.

The analogy of squeezing is imperfect: there are many ways to squeeze, and the theory studies what is true regardless of how you do it.

# Student explanation

A graph $H$ is a **minor** of $G$ if $H$ can be obtained from a subgraph of $G$ by contracting edges. Equivalently, $G$ contains a _model_ of $H$: for each vertex $v$ of $H$ a connected set of vertices $B_v$ of $G$, with the sets disjoint, and an edge of $G$ between $B_u$ and $B_v$ whenever $uv$ is an edge of $H$. The **Hadwiger number** of $G$ is the largest $t$ for which the complete graph $K_t$ (every pair joined) is a minor of $G$.

The first great result is **Kuratowski and Wagner's theorem**: a graph is planar (drawable in the plane with no crossing edges) if and only if it has neither $K_5$ nor $K_{3,3}$ as a minor. This turns a geometric property into a combinatorial one, expressed by a finite list of obstructions.

The **Robertson–Seymour theorem** (the Graph Minors Theorem) generalizes it: in any infinite collection of graphs, one is a minor of another. A consequence is that every _minor-closed_ family (one where taking minors never leaves the family) is characterized by finitely many forbidden minors. The proof develops the **structure theorem**: graphs avoiding a fixed minor are, roughly, built by gluing together pieces that are nearly drawable on a surface of bounded complexity. A key parameter is **tree-width**, which measures how tree-like a graph is. Graphs of small tree-width are easy for algorithms, and large tree-width forces a big _grid minor_. Hence tree-width is the central notion linking structure to algorithms.

Colouring comes in through **Hadwiger's conjecture**: every graph with no $K_t$ minor can be properly coloured (neighbours get different colours) with $t-1$ colours. For $t=5$ it is equivalent to the **Four Colour Theorem** (Appel and Haken, 1976; simplified by Robertson, Sanders, Seymour and Thomas in 1997, and formally verified in the Coq proof assistant). For $t=6$ it was reduced to the Four Colour Theorem. For $t\ge7$ it is open. Even a bound linear in $t$ (at most $Ct$ colours for a fixed $C$) is not established: the best refereed bound is $O(t\log\log t)$ (Delcourt and Postle, 2021), a September 2026 preprint claims $O(t\log\log\log t)$, and an October 2026 preprint (Norin and Steiner, proof found with an AI model, unrefereed and not yet independently checked) claims a linear bound with a constant around $10^{100}$, which would say nothing about $t=7$.

A second line of work asks how many edges a graph can have if it avoids a $K_t$ minor. The answer is, in terms of average degree, of order $t\sqrt{\log t}$ (Kostochka and Thomason), so avoiding a minor forces sparseness.

The entry therefore covers three connected themes: forbidden-minor characterizations, structure and tree-width, and the minor-based approach to colouring.
