---
type: entry
slug: matroid-theory
title: "Matroid theory: independence, representability and tensor products"
field: combinatorics
kind: THEORY
status: ACTIVE
summary: Matroids abstract linear independence. Active questions include representability, freest tensor products of uniform matroids, and rigidity and hyperconnectivity matroids.
reliedOn: Matroids underlie spanning trees, matching and rigidity theory, and give the framework in which questions about generic matrix completion and framework rigidity are stated.
references:
  - title: Matroid (Wikipedia)
    url: https://en.wikipedia.org/wiki/Matroid
    kind: article
  - title: Uniform matroid (Wikipedia)
    url: https://en.wikipedia.org/wiki/Uniform_matroid
    kind: article
  - title: Rigidity matroid (Wikipedia)
    url: https://en.wikipedia.org/wiki/Rigidity_matroid
    kind: article
  - title: "Cruickshank, Jackson, Jordan, Tanigawa: Rigidity of Graphs and Frameworks: A Matroid Theoretic Approach"
    url: https://arxiv.org/abs/2508.11636
    kind: paper
  - title: "Jackson, Tanigawa: Maximal Matroids in Weak Order Posets"
    url: https://arxiv.org/abs/2102.09901
    kind: paper
  - title: "Tyomkyn: Linear matroid products: a synthetic approach"
    url: https://arxiv.org/abs/2609.16747
    kind: paper
timeline:
  - date: 2026-10-27
    title: A preprint claims freer tensor products than the generic one
    body: A preprint by Tyomkyn claims tensor products of uniform matroids strictly freer than the generic linear one, non-representable over every field, and counterexamples to the Jackson-Tanigawa hyperconnectivity conjecture in every dimension d >= 2. Unrefereed; no independent assessment found.
    source: https://arxiv.org/abs/2610.37616
explainer:
  oneLine: Matroids capture 'independence' in vectors, graphs and frameworks, and ask which structures can be realized by actual vectors.
  flow:
    - Independence appears in vectors, graphs, frames
    - Matroids keep only the independence rules
    - "Ask: can each be realized by vectors?"
    - "Combine two into a grid: tensor product"
    - Is the generic one always freest?
  glossary:
    - term: matroid
      meaning: A finite set with a family of independent subsets obeying the exchange rule, abstracting linear independence.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: linear independence
      meaning: Vectors are independent if none can be written as a combination of the others.
      link: https://en.wikipedia.org/wiki/Linear_independence
    - term: uniform matroid
      meaning: A matroid in which any set of at most r elements is independent and larger sets are not.
      link: https://en.wikipedia.org/wiki/Uniform_matroid
    - term: rank function
      meaning: The size of the largest independent subset of a given set; for vectors it is their span dimension.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: representable matroid
      meaning: A matroid that can be realized by vectors over some field so that independence matches linear independence.
      link: https://en.wikipedia.org/wiki/Matroid_representation
    - term: tensor product
      meaning: A way to combine vectors u and v into a new object u⊗v; for matroids, a grid-shaped matroid whose rank multiplies.
      link: https://en.wikipedia.org/wiki/Tensor_product
    - term: weak order
      meaning: Matroid M is below N if every independent set of M is independent in N; the larger matroid is freer.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: rigidity matroid
      meaning: The matroid of edges of a graph drawn in space that are not redundant for keeping it stiff.
      link: https://en.wikipedia.org/wiki/Rigidity_matroid
    - term: circuit
      meaning: A smallest dependent set of a matroid; in a graph, a cycle.
      link: https://en.wikipedia.org/wiki/Matroid
  readFirst:
    - title: Matroid - Wikipedia
      url: https://en.wikipedia.org/wiki/Matroid
      why: Definitions and examples from vectors and graphs.
    - title: Uniform matroid - Wikipedia
      url: https://en.wikipedia.org/wiki/Uniform_matroid
      why: The simplest family, the building block of the open problem.
    - title: Rigidity matroid - Wikipedia
      url: https://en.wikipedia.org/wiki/Rigidity_matroid
      why: How stiffness of frameworks becomes a matroid.
    - title: "Rigidity of Graphs and Frameworks: A Matroid Theoretic Approach"
      url: https://arxiv.org/abs/2508.11636
      why: A survey that connects matroids to rigidity, for readers ready for a research survey.
raw:
  body: "## What a matroid is\n\nA **matroid** abstracts linear independence. It is a finite set $E$ with a family of *independent* subsets such that the empty set is independent, subsets of independent sets are independent, and whenever one independent set is larger than another, an element of the larger can be added to the smaller. Every matroid has a **rank function** $r(X)$, the size of the largest independent subset of $X$. The standard examples are vectors in a vector space (independent means linearly independent) and edges of a graph (independent means containing no cycle).\n\nThe **uniform matroid** $U_{r,n}$ on $n$ elements calls a set independent exactly when it has at most $r$ elements. It is the matroid of $n$ vectors in general position in $r$-dimensional space.\n\n## Representability\n\nA matroid is **representable** over a field $F$ if its elements can be assigned vectors over $F$ so that independence in the matroid is linear independence of the vectors. Some matroids are representable over every field, some only over some fields, and some over none (the Vamos matroid is a classical non-representable example). Separating what a matroid is abstractly from what a vector configuration can realize is a central theme of the subject.\n\n## The weak order and \"freest\" matroids\n\nOn a fixed ground set one compares matroids in the **weak order**: $M \\preceq N$ when every independent set of $M$ is independent in $N$. Among matroids satisfying extra constraints (for example, \"these given sets must be circuits\"), a matroid at the top of this order is called the **freest** one: it has the most independent sets. Jackson and Tanigawa studied when such a unique maximal matroid exists in a weak-order poset.\n\n## Products and tensor products\n\nFor matroids $M_1$ on $E_1$ and $M_2$ on $E_2$, a *product* is a matroid on $E_1\\times E_2$ whose rows and columns carry copies of $M_1$ and $M_2$. A *tensor product* additionally has rank multiplying on flat boxes, $r(F_1\\times F_2)=r_1(F_1)\\,r_2(F_2)$. When both factors are represented by vectors $u_i$ and $v_j$, the matroid of the tensors $u_i\\otimes v_j$ is a tensor product; with generic vectors one gets the **generic tensor product**. Mason (1981) asked whether a freest product always exists, and Las Vergnas (1981) showed that in general it need not. For two uniform matroids the question stayed open and is the subject of the problem on this site.\n\n## Rigidity and hyperconnectivity\n\nA graph drawn in $d$-dimensional space is rigid if its edge lengths allow only trivial motions. The edges of the complete graph $K_n$ carry the **generic $d$-dimensional rigidity matroid**, and a close relative is the **$d$-hyperconnectivity matroid**. Bipartite versions (birigidity) are tied to low-rank matrix completion. Tyomkyn's 2026 preprints use a duality between tensor products of uniform matroids and abstract birigidity matroids, so a statement about one translates to the other. The survey by Cruickshank, Jackson, Jordan and Tanigawa collects these links.\n\n## Where the field stands\n\nA September 2026 preprint by Tyomkyn states that the generic birigidity matroid is the freest *linearly representable* matroid of its kind, confirming Mason's conjecture within representable matroids. Bulavka and Tancer (arXiv, June 2026) report counterexamples to the Jackson-Tanigawa maximality conjectures for rigidity and hyperconnectivity, and a further preprint by Tyomkyn dated 27 October 2026 claims counterexamples to the uniform tensor-product form of Mason's conjecture, built from non-representable matroids. None of these preprints has been refereed, and we found no independent assessment of the 27 October claim.\n\n## Why it matters\n\nMatroid theory is the common language of linear independence, spanning trees, matching and rigidity. A good account of the freest product would give canonical objects for questions in rigidity theory and matrix completion, and, according to Brakensiek and coauthors, would bear on deterministic independence tests in generic birigidity matroids."
  student: "**Independence, two ways.** From linear algebra you know that vectors $v_1,\\dots,v_k$ are *linearly independent* if no one is a combination of the others. Take a graph and call a set of edges independent if it contains no cycle. Both notions obey the same rules, and a **matroid** is any finite set $E$ with a family of 'independent' subsets obeying them: the empty set is independent, subsets of independent sets are independent, and a larger independent set can always give an element to a smaller one (the exchange rule). The **rank** $r(X)$ is the size of the biggest independent subset of $X$; for vectors it is the dimension of their span.\n\n**Uniform matroids.** $U_{r,n}$ has $n$ elements, and a set is independent when it has at most $r$ of them. It is what you get from $n$ vectors in 'general position' in $\\mathbb R^r$ (no unlucky coincidences, like three of them on a plane through the origin).\n\n**Representability.** A matroid is *representable over a field* $F$ if we can attach vectors in $F^r$ to its elements so that independence matches linear independence. Not every matroid can be: the Vamos matroid is represented over no field.\n\n**Comparing matroids.** On the same set $E$, say $M\\preceq N$ if every independent set of $M$ is independent in $N$. The bigger matroid is 'freer'. A natural question is whether a natural class always has a freest member.\n\n**Tensor products.** Given vectors $u_i$ and $v_j$, the tensors $u_i\\otimes v_j$ are the rank-one matrices built from them. Matroids on grids $E_1\\times E_2$ built this way are tensor products of matroids; their rank multiplies, $r(F_1\\times F_2)=r_1(F_1)r_2(F_2)$, on grid-shaped boxes. With generic $u_i, v_j$ one gets the *generic tensor product*. Mason asked in 1981 whether a freest product always exists, and Las Vergnas showed that in general it does not.\n\n**Rigidity.** A graph drawn in $\\mathbb R^d$ is rigid if its edges allow no bending. The *rigidity matroid* calls a set of edges independent when none is redundant for stiffness, and bipartite and 'hyperconnectivity' variants exist. By a duality, tensor products of uniform matroids correspond to such rigidity-type matroids, so a statement about one gives a statement about the other. This links to matrix completion: filling in missing entries of a low-rank matrix is a generic independence question.\n\n**Status.** A September 2026 preprint shows the generic one is freest among *representable* choices. A 27 October 2026 preprint claims a non-representable tensor product that is freer; it is unrefereed."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Think about a box of sticks. You want to pick some of them so that none is wasted, meaning none can be replaced by combining the others. Mathematicians noticed that this same idea shows up in very different places: arrows pointing in different directions, roads that connect towns without making a loop, and bars in a bridge that keep it from wobbling. A matroid is the shared rulebook for all of them.

The rulebook only says which collections of things count as 'independent'. It does not say what the things are. That makes it powerful, because one theorem covers roads, arrows and bars at once. It also raises a hard question: if a matroid is given only by its rules, can it always be turned back into real arrows? Sometimes yes, sometimes only with certain kinds of numbers, and sometimes never.

A live research question asks how two matroids can be combined into a grid-shaped one, and whether there is always a most flexible way to do it. A recent preprint claims there is not, even in the simplest case. Nobody independent has checked that yet.

The analogy has a limit. Sticks you can see and measure carry details that the abstract rulebook deliberately forgets.
