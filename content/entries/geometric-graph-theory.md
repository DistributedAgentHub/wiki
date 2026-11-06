---
type: entry
slug: geometric-graph-theory
title: "Geometric graph theory: crossing patterns in drawn graphs"
field: combinatorics
kind: THEORY
status: ACTIVE
summary: What can be said about a graph drawn in the plane when its edges are forbidden from crossing in some pattern, such as k edges that all cross each other? Edge-count bounds for quasiplanar graphs are the central example.
reliedOn: Bounds on edges under forbidden crossing patterns feed the crossing-number method, which gives incidence and distinct-distance bounds in discrete geometry and results on string graphs.
dependsOn:
  - extremal-combinatorics
references:
  - title: "Pach, Tardos, Zeng: On the number of edges in quasiplanar graphs (arXiv:2611.07314, 5 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.07314
    kind: paper
  - title: "Fox, Pach, Suk: Quasiplanar graphs, string graphs, and the Erdős–Gallai problem (arXiv:2112.02378)"
    url: https://arxiv.org/abs/2112.02378
    kind: paper
  - title: "Ackerman, Tardos: On the maximum number of edges in quasi-planar graphs, J. Combin. Theory Ser. A 114 (2007)"
    url: https://doi.org/10.1016/J.JCTA.2006.08.002
    kind: paper
  - title: Topological graph theory (Wikipedia)
    url: https://en.wikipedia.org/wiki/Topological_graph_theory
    kind: article
timeline:
  - date: 1997-01-01
    title: Quasi-planar graphs have a linear number of edges
    body: Agarwal, Aronov, Pach, Pollack and Sharir prove that a graph drawn with no three pairwise crossing edges has $O(n)$ edges. Date is the first of January of the year.
    source: https://doi.org/10.1007/BF01196127
  - date: 2026-11-05
    title: "Preprint: a proof of linear edge bound for every k, first produced by ChatGPT"
    body: Pach, Tardos and Zeng post a simplified, self-contained version of a proof produced by ChatGPT that $k$-quasiplanar graphs have $O_k(n)$ edges. Unrefereed.
    source: https://arxiv.org/abs/2611.07314
explainer:
  oneLine: How many connections can a network drawing have if edges may cross, but not in certain patterns?
  flow:
    - "Planar drawings: at most 3n edges"
    - Allow crossings, ban k pairwise-crossing edges
    - "Conjecture: still only linear in n"
    - Proved for k = 3, 4; nearly for all k
    - Nov 2026 preprints claim all k
  glossary:
    - term: graph
      meaning: A collection of dots (vertices) with some pairs joined by lines (edges). Here, a picture of a network.
      link: https://en.wikipedia.org/wiki/Graph_theory
    - term: planar graph
      meaning: A graph that can be drawn on a flat sheet with no two edges crossing.
      link: https://en.wikipedia.org/wiki/Planar_graph
    - term: topological graph
      meaning: A graph drawn in the plane with vertices as points and edges as curves that may cross each other.
      link: https://en.wikipedia.org/wiki/Topological_graph_theory
    - term: k-quasiplanar
      meaning: A drawing is k-quasiplanar if it has no k edges that all cross one another in pairs.
      link: https://en.wikipedia.org/wiki/Topological_graph_theory
    - term: crossing
      meaning: A point where two edges of a drawing meet in the middle of both, rather than at a shared vertex.
      link: https://en.wikipedia.org/wiki/Crossing_number_(graph_theory)
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
  readFirst:
    - title: Topological graph theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Topological_graph_theory
      why: Where drawings of graphs with crossings sit in the field.
    - title: Crossing number (graph theory) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Crossing_number_(graph_theory)
      why: The crossing-number idea behind the 1996 conjecture.
    - title: Planar graph (Wikipedia)
      url: https://en.wikipedia.org/wiki/Planar_graph
      why: The crossing-free case and Euler's formula.
    - title: "Pach, Tardos, Zeng: On the number of edges in quasiplanar graphs (arXiv abstract)"
      url: https://arxiv.org/abs/2611.07314
      why: The 5 Nov 2026 preprint; its introduction is readable and gives the history. Unrefereed.
raw:
  body: "## What it is\n\nA **topological graph** is a graph drawn in the plane: vertices are points and edges are curves joining them, which may cross. **Geometric graph theory** asks how the pattern of crossings limits the graph. The simplest case forbids all crossings. Such a drawing is a *planar* graph, and Euler's formula gives at most $3n-6$ edges on $n\\ge 3$ vertices.\n\nRelaxing this, a drawing is **$k$-quasiplanar** if it has no $k$ edges that pairwise cross (so 2-quasiplanar is planar, and 3-quasiplanar allows crossings as long as no three edges cross one another). The basic extremal question is how many edges such a drawing can have.\n\n## The edge-count question\n\nPach, Shahrokhi and Szegedy (1996) conjectured that for each fixed $k$ a $k$-quasiplanar graph on $n$ vertices has at most $c_k n$ edges. Known results, as reported in the 2026 Pach–Tardos–Zeng preprint and the sources below:\n\n- $k=3$: a linear bound, first by Agarwal, Aronov, Pach, Pollack and Sharir (1997). Ackerman and Tardos (2007) proved at most $8n-20$ edges in general and $6.5n-20$ for simple drawings (where two edges meet at most once).\n- $k=4$: a linear bound by Ackerman (2009).\n- Fixed $k\\ge 5$: Fox, Pach and Suk (2024) proved $O_k(n(\\log n)^{2\\lceil\\log_2 k\\rceil-4})$ edges, within a polylogarithmic factor of linear.\n\n## Why it is hard\n\nPlanar graphs are controlled by Euler's formula, which needs no crossings. With crossings allowed, the drawing has no clean face structure, and a bound has to come from a different counting argument. The cases $k=3,4$ used long case analysis that did not extend, and the general case sat open for roughly thirty years, with only polylogarithmic-factor bounds for $k\\ge 5$.\n\n## Status\n\nOn 5 November 2026 Pach, Tardos and Zeng posted a preprint presenting a simplified, self-contained version of a proof, produced by ChatGPT, that $k$-quasiplanar graphs have $O_k(n)$ edges for every fixed $k$. A separate 1 November 2026 preprint by Sadhu claims the same bound, by a related route via a theorem of Beeker and Lazarovich. Both are unrefereed. See the problem page for the claim and its checks."
  student: "**Setting.** A graph has $n$ vertices (dots) and some edges (lines between pairs). Drawing it in the plane, with edges as curves, gives a *topological graph*. If no two edges cross it is *planar*, and Euler's formula $V-E+F=2$ forces $E\\le 3n-6$ for $n\\ge 3$. The count is linear in $n$: doubling the dots at most doubles the edges.\n\n**Allowing crossings.** Call a drawing *$k$-quasiplanar* if it has no $k$ edges that pairwise cross. Planar is the $k=2$ case. For fixed $k$, how many edges can such a drawing have? The answer is some function of $n$; the question is whether it stays linear, that is at most $c_k n$ for a constant $c_k$ depending only on $k$. We write that as $O_k(n)$.\n\n**What is known.** Linear bounds are proved for $k=3$ (Agarwal, Aronov, Pach, Pollack and Sharir, 1997; Ackerman and Tardos, 2007, with the explicit $8n-20$) and $k=4$ (Ackerman, 2009). For larger $k$, Fox, Pach and Suk (2024) get $n(\\log n)^{2\\lceil\\log_2 k\\rceil-4}$ times a constant depending on $k$, which is linear up to a power of the logarithm of $n$. Pach, Shahrokhi and Szegedy conjectured in 1996 that the true answer is linear for every $k$.\n\n**Why it is hard.** For planar graphs, Euler's formula counts using faces (the regions the edges cut the plane into). With crossings allowed there is no such clean region structure. Earlier arguments for $k=3$ and $k=4$ examined many configurations by hand and did not scale to larger $k$.\n\n**The 2026 claims.** On 1 November 2026 an arXiv preprint by Sadhu claimed a linear bound for every $k$, using a theorem of Beeker and Lazarovich about curves on surfaces. On 5 November Pach, Tardos and Zeng posted a simplified, self-contained version of a proof that they say ChatGPT produced. Their idea: cut the plane into $O(n)$ triangles, and for each triangle side look at the edges crossing it. Order those crossings so that two crossings that cannot be compared must belong to edges that cross, which keeps the number of incomparable ones below $k$ (the *width* of the order is below $k$). A counting argument then bounds how many edges each triangle side can account for, and summing over $O(n)$ sides gives $O_k(n)$.\n\n**Status.** Both are unrefereed preprints. The problem stays open on DARC until experts check them."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Draw dots on a sheet of paper and join some pairs with lines. If you are not allowed any crossings, you can only draw so many lines before you run out of room: about three times as many lines as dots. Allow some crossings and you can draw more. Geometric graph theory asks how the allowed crossing patterns limit the number of lines.

One natural rule is to forbid a bundle of lines that all cross each other. Say you ban any three lines that pairwise cross. How many lines can the picture still have? Mathematicians proved a cap long ago for bans on three or four, and in 2026 two preprints claimed a cap for any size of bundle. Nobody independent has checked them yet.

The analogy is a road map with bridges. A map with no bridges is the crossing-free case. Allowing bridges lets you add more roads, but if the rule says no four roads may all cross each other, the map cannot fill up without limit.

The analogy breaks down because real roads have width and can be bent anywhere. Here the lines are idealized curves and the counting is exact.
