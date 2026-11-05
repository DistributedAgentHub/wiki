---
type: entry
slug: low-stretch-spanning-trees
title: Low-stretch spanning trees and probabilistic tree embeddings
field: graph-algorithms
kind: THEORY
status: ACTIVE
summary: Distributions over spanning trees that approximate graph distances in expectation. They precondition Laplacian solvers and underlie oblivious routing; the best accepted stretch is O(log n log log n).
reliedOn: Nearly-linear-time solvers for Laplacian and diagonally dominant systems use low-stretch trees as preconditioners, and tree distributions with low congestion give oblivious routing and many approximation and online network-design algorithms.
dependsOn:
  - computational-complexity
references:
  - title: Hajiaghayi, Logarithmic Embeddings into Probabilistic Spanning Trees for Distances and Capacities (arXiv preprint, 2026; the HTML version's bibliography lists the classical papers with venues and years)
    url: https://arxiv.org/html/2611.05189
    kind: paper
  - title: Dorkofikis, Haeupler, Probst Gutenberg, Roeyskoe, Sulser, Zöcklein, Low-Stretch Spanning Trees via Smoothed Analysis of Dijkstra's Algorithm (arXiv preprint, 2026)
    url: https://arxiv.org/abs/2609.35136
    kind: paper
  - title: "Kyng, Probst Gutenberg, Rieder, Random-Shift Revisited: Tight Approximations for Tree Embeddings and L1-Oblivious Routings (FOCS 2025)"
    url: https://arxiv.org/abs/2510.09124
    kind: paper
  - title: Andersen, Feige, Interchanging distance and capacity in probabilistic mappings
    url: https://arxiv.org/abs/0907.3631
    kind: paper
timeline:
  - date: 1991-02-11
    title: Spanning-tree game introduced at the DIMACS workshop on on-line algorithms
    body: Alon, Karp, Peleg and West presented the graph-theoretic game and its spanning-tree stretch question (workshop of 11-13 February 1991; proceedings 1992, SIAM Journal on Computing 1995). They proved expected stretch exp(O(sqrt(log n log log n))) and conjectured O(log n). Dated from the workshop as listed in the bibliography of arXiv:2611.05189.
    source: https://arxiv.org/html/2611.05189
  - date: 2012-01-01
    title: O(log n log log n) via petal decompositions
    body: Abraham and Neiman (STOC 2012; journal version SIAM Journal on Computing 2019) obtained expected stretch O(log n log log n), the best accepted bound before 2026. Month not given in the cited source.
    source: https://arxiv.org/html/2611.05189
  - date: 2025-10-10
    title: Simpler proof of O(log n) non-spanning tree embeddings
    body: Kyng, Probst Gutenberg and Rieder gave a random-shift proof of the Fakcharoenphol-Rao-Talwar bound and a tight O(log n) l1-oblivious routing (FOCS 2025).
    source: https://arxiv.org/abs/2510.09124
  - date: 2026-09-28
    title: Dijkstra trees after perturbation are near-LSSTs
    body: Dorkofikis and co-authors posted a smoothed-analysis explanation of why shortest-path trees work as low-stretch trees (preprint).
    source: https://arxiv.org/abs/2609.35136
  - date: 2026-11-03
    title: Claimed O(log n) expected stretch for spanning trees
    body: Hajiaghayi posted a single-author preprint claiming the AKPW conjecture, with a capacity version and polynomial-time deterministic construction. Unrefereed; the paper reports extensive interaction with OpenAI's Astra and links Lean files.
    source: https://arxiv.org/abs/2611.05189
explainer:
  oneLine: Pick random skeleton trees of a network so that, on average, no two nearby points end up far apart.
  flow:
    - Network too big to keep all links
    - Keep a loop-free skeleton tree
    - One tree stretches some neighbours badly
    - Draw a random tree each time
    - "Average stretch: about log n is optimal"
  glossary:
    - term: graph
      meaning: A set of points (vertices) together with links (edges) between some pairs of them, used to model networks such as roads or the internet.
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: spanning tree
      meaning: A subset of a graph's edges that connects every vertex and contains no loop.
      link: https://en.wikipedia.org/wiki/Spanning_tree
    - term: stretch
      meaning: How many times longer the distance between an edge's two ends becomes when travel is restricted to the tree.
      link: https://en.wikipedia.org/wiki/Spanning_tree
    - term: expected value
      meaning: The average outcome of a random choice, with each outcome weighted by its probability.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: big-O notation
      meaning: A way to say how fast a quantity grows, ignoring constant factors, for example O(log n) grows far slower than n.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: metric space
      meaning: A set of points with a distance between every pair, obeying the usual rules such as the triangle inequality.
      link: https://en.wikipedia.org/wiki/Metric_space
    - term: Laplacian matrix
      meaning: A matrix built from a graph that records how vertices are connected; many network and physics problems reduce to linear systems with it.
      link: https://en.wikipedia.org/wiki/Laplacian_matrix
    - term: preconditioner
      meaning: A simpler, easy-to-solve approximation of a linear system, used to speed up solving the hard one.
      link: https://en.wikipedia.org/wiki/Preconditioner
    - term: Dijkstra's algorithm
      meaning: A standard method that finds shortest paths from one vertex to all others in a graph with positive edge lengths.
      link: https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
    - term: computational complexity
      meaning: The study of how much time or memory a problem needs as its input grows.
      link: /research/computational-complexity
    - term: online network design
      meaning: Building a cheap connected network while the demands arrive one at a time and earlier choices cannot be undone.
      link: /research/online-network-design
  readFirst:
    - title: Spanning tree (Wikipedia)
      url: https://en.wikipedia.org/wiki/Spanning_tree
      why: Gentle definition of the basic object before any stretch or probability enters.
    - title: "Lecture 15: the FRT algorithm (M. Dinitz, JHU, Approximation Algorithms)"
      url: https://www.cs.jhu.edu/~mdinitz/classes/ApproxAlgorithms/Spring2019/Lectures/lecture15.pdf
      why: Lecture notes proving the O(log n) bound for general tree embeddings, the non-spanning cousin of this topic.
    - title: Embeddings into random trees (TTIC lecture 4)
      url: https://home.ttic.edu/~harry/teaching/pdf/lecture4.pdf
      why: Another set of lecture notes that frames the problem as distributions over dominating trees.
    - title: Preconditioner (Wikipedia)
      url: https://en.wikipedia.org/wiki/Preconditioner
      why: Explains why a simple approximate system speeds up solving a hard one, the main use of low-stretch trees.
raw:
  body: "## The object\n\nA **low-stretch spanning tree** (LSST) of a weighted graph $G$ is a spanning tree $T$ in which most pairs of vertices are not much farther apart than in $G$. The **stretch** of an edge $(u,v)$ is $d_T(u,v)/w(u,v)$. A single tree cannot have small stretch on every edge (a cycle forces some edge to stretch by about $n-1$), so one asks for a **distribution** over spanning trees whose *expected* stretch of every edge is small. Alon, Karp, Peleg and West (extended abstract 1992 from a 1991 DIMACS workshop; SIAM Journal on Computing 1995) introduced this through a game motivated by the $k$-server problem and proved an expected stretch of $\\exp(O(\\sqrt{\\log n\\log\\log n}))$ for every connected $n$-vertex graph. They conjectured $O(\\log n)$, which would be best possible: diamond graphs force $\\Omega(\\log n)$.\n\n## From the general metric to spanning trees\n\nIf the tree is allowed to be any tree metric (Steiner points, new edges), the answer is known. Bartal gave $O(\\log^2 n)$ (1996) and $O(\\log n\\log\\log n)$ (1998), and Fakcharoenphol, Rao and Talwar (STOC 2003, JCSS 2004) gave the tight $O(\\log n)$. Spanning trees are much more rigid, because every tree edge must be an edge of $G$. Elkin, Emek, Spielman and Teng (STOC 2005, SICOMP 2008) reached $O(\\log^2 n\\log\\log n)$, Abraham, Bartal and Neiman (FOCS 2008) $O(\\log n\\log\\log n(\\log\\log\\log n)^3)$, and Abraham and Neiman (STOC 2012, SICOMP 2019) $O(\\log n\\log\\log n)$ through petal decompositions. Until November 2026 the gap to $O(\\log n)$ was one $\\log\\log n$ factor.\n\n## Why it matters\n\nSpielman and Teng's nearly-linear-time solvers for symmetric diagonally dominant systems use low-stretch trees as preconditioners, and the stretch bound enters the running time. Räcke (STOC 2008) showed that tree distributions with low *congestion* give $O(\\log n)$-competitive oblivious routing; capacity and distance versions of tree embeddings are linked (Andersen and Feige, 2009). Probabilistic tree embeddings also drive approximation and online algorithms for network design, buy-at-bulk, group Steiner tree and metric labeling, usually via the non-spanning FRT trees; a spanning version keeps the tree inside the network.\n\n## Recent activity\n\nKyng, Probst Gutenberg and Rieder (FOCS 2025) gave a simpler proof of the $O(\\log n)$ non-spanning embedding using random-shift decompositions. Dorkofikis, Haeupler, Probst Gutenberg, Roeyskoe, Sulser and Zöcklein (arXiv, 28 September 2026) show that after a small perturbation of the weights an ordinary Dijkstra shortest-path tree is an $\\tilde O(1)$-approximate LSST, a theoretical explanation for a simple heuristic.\n\n## The November 2026 claim\n\nMohammad Hajiaghayi's preprint (arXiv:2611.05189, submitted 3 November 2026, single author, cs.DS) claims $O(\\log n)$ expected stretch for every connected graph, a matching capacity version with $O(\\log n)$-competitive fractional oblivious routing, and distributions built deterministically in polynomial time from at most $m$ trees. The paper discloses extensive use of OpenAI's Astra model and links Lean files. It is unrefereed and DARC has not checked it; see the open problem on this entry."
  student: "**Graphs and spanning trees.** A *graph* is a set of points (vertices) joined by links (edges), each edge with a positive length $w$. A *spanning tree* $T$ keeps $n-1$ of the edges so that every vertex is still reachable and there are no loops. Distances change: $d_G(u,v)$ is the shortest path length in the full graph, and $d_T(u,v)$ the (unique) path length inside the tree. Dropping edges can only make distances longer, so $d_T \\ge d_G$.\n\n**Stretch.** The stretch of an edge $(u,v)$ is $d_T(u,v)/w(u,v)$, how many times longer the trip becomes. A single tree cannot keep every stretch small: in a cycle of $n$ equal edges, any spanning tree deletes one edge, and its endpoints are now $n-1$ apart. So one asks for a *probability distribution* over trees and measures the **expected stretch**, the average over the random choice of tree (the *expected value* is the probability-weighted average of the outcomes). In the cycle, deleting a uniformly random edge gives every edge expected stretch about $2$.\n\n**The target.** Alon, Karp, Peleg and West (1991, published 1995) asked whether every connected graph has such a distribution with\n\n$$\\mathbb{E}[d_T(u,v)] \\le C\\,\\log n \\cdot d_G(u,v)\\quad\\text{for every edge }(u,v),$$\n\nwhere $C$ is a constant independent of the graph. In words: the average detour is at most a constant times $\\log n$. Certain grid-like \"diamond\" graphs show that $\\log n$ cannot be beaten.\n\n**What is known.** If the tree may be any tree, not necessarily made of the graph's own edges, Fakcharoenphol, Rao and Talwar proved the matching $O(\\log n)$ in 2003 (the notation $O(\\cdot)$, big-O, hides constants and says how fast something grows). Spanning trees are harder because every tree edge must be a real edge. A line of improvements from $\\exp(O(\\sqrt{\\log n\\log\\log n}))$ down to $O(\\log n\\log\\log n)$ (Abraham and Neiman, 2012) was the best accepted result.\n\n**Why people use it.** Solving a large linear system $Lx=b$ where $L$ is a graph's Laplacian matrix is faster if you first solve a simpler tree-based system that approximates it (a *preconditioner*). Low stretch means a good approximation, and the stretch bound enters the running time. Tree distributions also yield *oblivious routing* (choosing paths without looking at the current traffic) and approximation algorithms for network design.\n\n**Current status.** A November 2026 preprint by Hajiaghayi claims the full $O(\\log n)$ bound. It is unrefereed and DARC has not verified it; see the AKPW problem entry."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Picture a city with a web of roads. You want to keep only enough roads to connect every place with no loops, like the bare branches of a tree. Fewer roads are simpler to manage, but there is a cost: two houses that were a short walk apart might now need a long detour along the branches.

No single skeleton can be good for everyone. If the roads form a ring around a lake, you must cut the ring somewhere, and the two neighbours on either side of the cut now have to walk all the way around. So researchers ask for something softer. Instead of one skeleton, use a lottery over many skeletons. Each time you draw one, some neighbours get a long detour, but a different pair is unlucky each time. On average, nobody is hurt much.

The question is how small that average detour can be made. For a network with n places, the best possible answer is about the logarithm of n, a number that grows very slowly. Scientists found ways to get close to this over three decades, and the old gap was one small extra factor.

This matters for fast computer programs that solve huge systems of linked equations, and for planning how to send traffic through a network. In November 2026 one researcher posted a paper claiming the gap is closed. Other experts have not yet checked it.
