---
type: problem
slug: pss-quasiplanar-conjecture
title: "The Pach–Shahrokhi–Szegedy conjecture: k-quasiplanar graphs have O_k(n) edges"
entry: geometric-graph-theory
status: OPEN
origin: Pach, Shahrokhi and Szegedy, 1996
ratings:
  difficulty: 20
  applicationValue: 5
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: "Pach, Tardos, Zeng: On the number of edges in quasiplanar graphs (arXiv:2611.07314, 5 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.07314
  - title: "Sadhu: Every k-Quasi-Planar Graph Has Linearly Many Edges (arXiv:2611.01509, 1 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.01509
  - title: "Fox, Pach, Suk: Quasiplanar graphs, string graphs, and the Erdős–Gallai problem (arXiv:2112.02378)"
    url: https://arxiv.org/abs/2112.02378
  - title: "Ackerman, Tardos: On the maximum number of edges in quasi-planar graphs (JCTA 2007)"
    url: https://doi.org/10.1016/J.JCTA.2006.08.002
  - title: "Ackerman: On the maximum number of edges in topological graphs with no four pairwise crossing edges (DCG 2009)"
    url: https://link.springer.com/article/10.1007/s00454-009-9143-9
  - title: "Agarwal, Aronov, Pach, Pollack, Sharir: Quasi-planar graphs have a linear number of edges (Combinatorica 1997)"
    url: https://doi.org/10.1007/BF01196127
  - title: "Beeker, Lazarovich: Cubical accessibility and bounds on curves on surfaces (arXiv:1701.01313)"
    url: https://arxiv.org/abs/1701.01313
timeline:
  - date: 1996-01-01
    title: The conjecture is posed
    body: Pach, Shahrokhi and Szegedy (Applications of the crossing number, J. Graph Theory 22, 1996) conjecture a linear edge bound for $k$-quasiplanar graphs, as attributed in the Pach–Tardos–Zeng introduction. Date is the first of January of the year.
    source: https://arxiv.org/abs/2611.07314
  - date: 1997-01-01
    title: "k = 3: linear bound"
    body: Agarwal, Aronov, Pach, Pollack and Sharir prove $O(n)$ edges for graphs with no three pairwise crossing edges. Date is the first of January of the year.
    source: https://doi.org/10.1007/BF01196127
  - date: 2009-01-01
    title: "k = 4: linear bound"
    body: Ackerman proves a linear edge bound for drawings with no four pairwise crossing edges. Date is the first of January of the year.
    source: https://link.springer.com/article/10.1007/s00454-009-9143-9
  - date: 2021-12-04
    title: "Fox–Pach–Suk: near-linear for every k"
    body: Fox, Pach and Suk post (arXiv v1, 4 December 2021) a bound of $n(Cs^{-1}\log n)^{2s-4}$ edges, with $C$ an absolute constant, for $r=2^s$-quasiplanar graphs with $s\ge 3$ (published in 2024), a polylogarithmic factor from linear.
    source: https://arxiv.org/abs/2112.02378
  - date: 2026-11-01
    title: Sadhu preprint claims a linear bound for every k
    body: A six-page arXiv preprint claims $C_kn$ edges, applying a Beeker–Lazarovich theorem to arcs on a sphere with holes. Unrefereed.
    source: https://arxiv.org/abs/2611.01509
  - date: 2026-11-05
    title: "Pach–Tardos–Zeng preprint: simplified version of a ChatGPT proof"
    body: Pach, Tardos and Zeng present a self-contained combinatorial version of a proof produced by ChatGPT that $k$-quasiplanar graphs have $O_k(n)$ edges. Unrefereed; the problem stays open until checked.
    source: https://arxiv.org/abs/2611.07314
explainer:
  oneLine: Does banning k edges that all cross each other keep a drawn graph's edge count linear? Two Nov 2026 preprints claim yes.
  flow:
    - Draw a graph; ban k pairwise-crossing edges
    - "Conjecture: edge count stays linear in n"
    - Proved for k = 3, 4; log factor for all k
    - "Nov 2026: two preprints claim a linear bound"
    - Experts have not checked them yet
  glossary:
    - term: planar graph
      meaning: A graph that can be drawn on a flat sheet with no two edges crossing.
      link: https://en.wikipedia.org/wiki/Planar_graph
    - term: topological graph
      meaning: A graph drawn in the plane with vertices as points and edges as curves that may cross each other.
      link: https://en.wikipedia.org/wiki/Topological_graph_theory
    - term: k-quasiplanar
      meaning: A drawing is k-quasiplanar if it has no k edges that all cross one another in pairs.
      link: https://en.wikipedia.org/wiki/Topological_graph_theory
    - term: extremal problem
      meaning: A question asking for the largest (or smallest) size of an object that still obeys a given rule.
      link: /research/extremal-combinatorics
    - term: big-O notation
      meaning: O(n) means 'at most a constant times n for large n'. O_k(n) lets the constant depend on k.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: Euler's formula
      meaning: For a connected planar drawing, vertices minus edges plus faces equals 2; it implies at most 3n-6 edges.
      link: https://en.wikipedia.org/wiki/Euler%27s_formula
    - term: poset
      meaning: A set where some pairs of items are ordered ('a before b') and others are not comparable.
      link: https://en.wikipedia.org/wiki/Partially_ordered_set
    - term: width of a poset
      meaning: The largest number of items in it that are pairwise not comparable.
      link: https://en.wikipedia.org/wiki/Dilworth%27s_theorem
    - term: triangulation
      meaning: Cutting a region into triangles that fit edge to edge.
      link: https://en.wikipedia.org/wiki/Polygon_triangulation
    - term: preprint
      meaning: A paper posted online before a journal's referees have checked it.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Dilworth's theorem
      meaning: A poset whose largest set of pairwise incomparable items has size d can be split into d chains, each fully ordered.
      link: https://en.wikipedia.org/wiki/Dilworth%27s_theorem
  readFirst:
    - title: "Pach, Tardos, Zeng: On the number of edges in quasiplanar graphs"
      url: https://arxiv.org/abs/2611.07314
      why: The 5 Nov 2026 preprint; the introduction gives the history and known bounds. Unrefereed.
    - title: "Sadhu: Every k-Quasi-Planar Graph Has Linearly Many Edges"
      url: https://arxiv.org/abs/2611.01509
      why: A six-page independent preprint claiming the same bound, 1 Nov 2026. Unrefereed.
    - title: "Fox, Pach, Suk: Quasiplanar graphs, string graphs, and the Erdős–Gallai problem"
      url: https://arxiv.org/abs/2112.02378
      why: The best published bound before the claims.
    - title: Topological graph theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Topological_graph_theory
      why: Background on drawings of graphs with crossings.
raw:
  student: "**The question.** A *topological graph* is a graph drawn in the plane with edges as curves. It is *$k$-quasiplanar* if no $k$ edges pairwise cross. For $k=2$ these are planar graphs, and Euler's formula limits them to $3n-6$ edges. The **Pach–Shahrokhi–Szegedy conjecture** (1996) says that for each fixed $k$ the maximum number of edges is $O_k(n)$, that is, at most $c_kn$ for a constant $c_k$ depending only on $k$.\n\n**Known results.** $k=3$: linear (Agarwal et al., 1997), at most $8n-20$ edges (Ackerman and Tardos, 2007; $6.5n-20$ if two edges meet at most once). $k=4$: linear (Ackerman, 2009). Fixed $k\\ge5$: $O_k(n(\\log n)^{2\\lceil\\log_2k\\rceil-4})$ (Fox, Pach and Suk, 2024), which is linear up to a polylogarithmic factor. The conjecture had not been proved for any $k\\ge5$.\n\n**What the 5 Nov 2026 preprint claims.** Pach, Tardos and Zeng (arXiv:2611.07314) present a simplified, self-contained version of a proof that, they state, was produced by ChatGPT. They state the bound\n\n$$e(G)\\le 2^{(2+o(1))k\\log_2 k}\\,n,$$\n\nmeaning the constant grows roughly like $k^{2k}$ as $k$ grows. They conjecture $O(kn)$ and say their methods do not reach it.\n\n**Idea of the argument (from the preprint's outline).**\n1. Triangulate a big triangle around the drawing so that there are $O(n)$ triangles and $O(n)$ triangulation edges, with tiny special triangles around each vertex.\n2. For each triangulation edge $pq$, list the points where drawing edges cross it, and order them using the way the drawing edges continue through the triangulation. Two crossings that cannot be compared belong to edges that cross each other. Since no $k$ edges pairwise cross, the poset has *width* below $k$.\n3. Assign each drawing edge a *representative* at one of the triangulation edges it passes through (a maximal element, or one of three kinds of 'preferred cover').\n4. Count: maximal elements are bounded by the width, and two lemmas, proved with Dilworth's theorem (a width-$d$ poset splits into $d$ chains) and a staircase argument, bound the other types by functions of $k$. With $O(n)$ triangulation edges, the total is $O_k(n)$.\n\nThe preprint says the AI proof relied on a theorem of Beeker and Lazarovich proved by advanced topology; the authors give a version that avoids it. A separate Sadhu preprint (arXiv:2611.01509, 6 pages) claims the same bound via that theorem.\n\n**Status.** Both are unrefereed preprints and DARC has found no expert assessment. The problem stays open here until the proof is checked; a specialist would check the lemmas and the handling of non-simple drawings."
site:
  aiReviewed: true
---

A **topological graph** is a simple graph drawn in the plane, with vertices as distinct points and edges as Jordan arcs that avoid other vertices but may cross each other. It is **$k$-quasiplanar** if it has no $k$ edges that pairwise cross.

**Pach–Shahrokhi–Szegedy conjecture.** For every fixed $k\ge 2$ there is a constant $c_k$ such that every $k$-quasiplanar graph on $n$ vertices has at most $c_k n$ edges. Equivalently, the maximum number of edges is $O_k(n)$.

# State of the art

**Open in the accepted literature; claimed proofs are unrefereed preprints.** Per the introduction of the Pach–Tardos–Zeng preprint: the case $k=2$ is planar graphs ($3n-6$ edges, Euler's formula). For $k=3$, Agarwal, Aronov, Pach, Pollack and Sharir (Combinatorica, 1997) proved $O(n)$ edges, and Ackerman and Tardos (JCTA, 2007) proved at most $8n-20$ edges, or $6.5n-20$ for simple drawings. For $k=4$, Ackerman (Discrete & Computational Geometry, 2009) proved a linear bound (his theorem gives at most $72(n-2)$ edges in the published version; the author's preprint text states 36(n-2)). For fixed $k\ge 5$ the best published bound is Fox–Pach–Suk (European J. Combin., 2024), $O_k(n(\log n)^{2\lceil\log_2 k\rceil-4})$ edges, only a polylogarithmic factor from linear.

**Two preprints claim the full conjecture.** Pach, Tardos and Zeng (arXiv:2611.07314, 5 Nov 2026) present a simplified, self-contained, purely combinatorial version of a proof that the preprint says was produced by ChatGPT (named there as ChatGPT-6), and state that the authors did not write the original proof. They give at most $2^{(2+o(1))k\log_2 k}\,n$ edges and conjecture that $O(kn)$ is true. They say the original argument relied on a result of Beeker and Lazarovich (Journal of Topology, 2017) on curves on surfaces. An earlier preprint by Sadhu (arXiv:2611.01509, 1 Nov 2026, 6 pages) claims the same bound with a very similar strategy, also through Beeker–Lazarovich. Neither is refereed and DARC has found no expert assessment of either, so the problem stays open here until they are checked.

# Applications

None foreseeable directly. Bounds on edges under forbidden crossing patterns are tools in discrete geometry (through the crossing-number method) and in the study of string graphs, so a clean linear bound would tidy up those arguments. A proof that is elementary and combinatorial would be of interest as a technique.

# Resolution criteria

A proof, accepted by experts in discrete and computational geometry (or a refereed publication), that for each fixed $k$ every $k$-quasiplanar topological graph on $n$ vertices has $O_k(n)$ edges; or a family of drawings with superlinearly many edges and no $k$ pairwise crossing edges. A formal proof would also settle it.

# Rating rationale

Difficulty 20: open for about 30 years with a long series of partial results, but two short unrefereed preprints now claim a full proof, so what remains is checking. Application value 5: structural, with indirect use in discrete geometry. Leverage 30: it would settle the extremal question for a whole family of crossing-restricted drawings and tidy results on string graphs and the crossing method, within one subfield.

# Verification

Experts in discrete geometry read the proof in arXiv:2611.07314 (the triangulation-and-poset argument: the width bound on the poset of crossings of each triangulation edge, the four types of representatives, and Lemmas 1 and 2 with their Dilworth-type counting) and check that the edge count is $O_k(n)$ for every fixed $k$ and that the general-position assumptions and non-simple drawings are handled. Compare against Sadhu's independent preprint (arXiv:2611.01509) and the Beeker–Lazarovich theorem. Checking against the known $k=3$ bounds ($6.5n-20$ simple, $8n-20$ general) is a useful sanity test, not a proof.

# Plain explanation

Picture a network drawn on paper: dots joined by lines. If no lines may cross, there is a firm limit on how many lines you can draw: about three for every dot. If lines may cross, you can draw more. But what if the only rule is that no bundle of a certain size may all cross each other? Say no four lines may pairwise cross.

In 1996 three mathematicians guessed that this rule still keeps the number of lines proportional to the number of dots, with the constant depending on the bundle size. It was proved for bundles of three, then four. For larger bundles only a slightly weaker result was known, off by a power of a logarithm: a tiny factor, but enough to leave the guess open for about thirty years.

In early November 2026, two preprints claimed a full proof. One of them, by the well-known researchers Pach, Tardos and Zeng, says the original argument was produced by an AI chatbot and that they rewrote it in a simpler, self-contained form. Experts have not yet checked either paper, so this is a claim, not a result.

Why care? It is a clean question about how far crossings can be tolerated. If true, it tidies up a family of results in geometry.
