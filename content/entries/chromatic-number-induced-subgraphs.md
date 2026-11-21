---
type: entry
slug: chromatic-number-induced-subgraphs
title: Chromatic number and induced subgraphs (χ-boundedness)
field: combinatorics
kind: THEORY
status: ACTIVE
summary: How many colours a graph needs, why that can be large with no big clique, and which induced structures (trees, anticomplete pairs) large chromatic number forces. Home of the El-Zahar–Erdős question.
reliedOn: The χ-boundedness programme (Gyárfás–Sumner and its relatives) organises what is known about graphs with large chromatic number, and its girth constructions are the standard counterexamples cited across structural graph theory.
dependsOn:
  - probabilistic-method
references:
  - title: "Scott and Seymour: A survey of χ-boundedness (arXiv:1812.07500)"
    url: https://arxiv.org/abs/1812.07500
    kind: paper
  - title: "Nguyen, Scott, Seymour: On a problem of El-Zahar and Erdős (arXiv:2303.13449)"
    url: https://arxiv.org/abs/2303.13449
    kind: paper
  - title: "Liu, Meng: A disproof of the El-Zahar–Erdős conjecture (arXiv:2611.24735, preprint)"
    url: https://arxiv.org/abs/2611.24735
    kind: paper
  - title: "Wikipedia: Gyárfás–Sumner conjecture"
    url: https://en.wikipedia.org/wiki/Gy%C3%A1rf%C3%A1s%E2%80%93Sumner_conjecture
    kind: article
  - title: "Wikipedia: Girth (graph theory), section on girth and graph colouring"
    url: https://en.wikipedia.org/wiki/Girth_(graph_theory)
    kind: article
  - title: "Wikipedia: Graph coloring"
    url: https://en.wikipedia.org/wiki/Graph_coloring
    kind: article
timeline:
  - date: 1955-01-01
    title: Triangle-free graphs of large chromatic number
    body: Tutte, Zykov and Mycielski show triangle-free graphs can need arbitrarily many colours (Mycielski 1955; the article dates the Tutte and Zykov constructions to 1947 and 1949).
    source: https://en.wikipedia.org/wiki/Graph_coloring
  - date: 1959-01-01
    title: "Erdős: large girth and large chromatic number"
    body: A probabilistic argument gives graphs with no short cycles and arbitrarily large chromatic number (Canad. J. Math. 11, 1959, as cited by the Liu–Meng preprint; the linked article states the theorem without a year).
    source: https://en.wikipedia.org/wiki/Girth_(graph_theory)
  - date: 2018-12-18
    title: Scott and Seymour survey χ-boundedness
    body: A survey of problems posed by Gyárfás in the early 1980s and the recent progress on them.
    source: https://arxiv.org/abs/1812.07500
  - date: 2023-03-23
    title: "Nguyen, Scott, Seymour: one-sided El-Zahar–Erdős"
    body: Large chromatic number without K_t gives two anticomplete subgraphs, one of large minimum degree and one of large chromatic number.
    source: https://arxiv.org/abs/2303.13449
  - date: 2026-11-18
    title: Liu and Meng preprint claims the El-Zahar–Erdős question has a negative answer
    body: A preprint claims girth-g graphs of arbitrarily large chromatic number where every anticomplete pair has a side needing at most 6 colours. Unrefereed.
    source: https://arxiv.org/abs/2611.24735
explainer:
  oneLine: How many colours a graph needs, and what structure large colour counts force inside it. Home of the El-Zahar–Erdős question.
  flow:
    - Graph needs many colours
    - No big clique required (Erdős)
    - Which induced pieces are forced?
    - "El-Zahar–Erdős: two apart pieces"
    - 2026 preprint claims no (unrefereed)
  glossary:
    - term: chromatic number
      meaning: The fewest colours needed to colour the vertices of a graph so that no edge joins two vertices of the same colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: clique
      meaning: A set of vertices in which every two are joined by an edge; a clique of size k needs k colours.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: girth
      meaning: The length of the shortest cycle in a graph; large girth means no short loops anywhere.
      link: https://en.wikipedia.org/wiki/Girth_(graph_theory)
    - term: induced subgraph
      meaning: A graph made from some of the vertices of a graph together with every edge of the original that joins them.
      link: https://en.wikipedia.org/wiki/Induced_subgraph
    - term: anticomplete
      meaning: Two sets of vertices are anticomplete when no edge of the graph joins a vertex of one to a vertex of the other.
      link: https://arxiv.org/abs/2611.24735
    - term: χ-bounded
      meaning: A family of graphs where the chromatic number is at most some function of the largest clique size.
      link: https://arxiv.org/abs/1812.07500
    - term: Gyárfás–Sumner conjecture
      meaning: The unproved claim that forbidding one tree as an induced subgraph, plus bounding the clique size, bounds the chromatic number.
      link: https://en.wikipedia.org/wiki/Gy%C3%A1rf%C3%A1s%E2%80%93Sumner_conjecture
    - term: probabilistic method
      meaning: Proving something exists by showing that a random construction has the wanted property with positive probability.
      link: /research/probabilistic-method
    - term: independence number
      meaning: The size of the largest set of vertices with no edge between any two; a small one forces many colours.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: degenerate graph
      meaning: A graph in which every subgraph has a vertex of small degree; a 2-degenerate graph can be coloured with 3 colours.
      link: https://en.wikipedia.org/wiki/Degeneracy_(graph_theory)
  readFirst:
    - title: "Wikipedia: Graph coloring"
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: Chromatic number and the triangle-free constructions, with pictures.
    - title: "Wikipedia: Girth (graph theory)"
      url: https://en.wikipedia.org/wiki/Girth_(graph_theory)
      why: Includes the statement of Erdős's large-girth, large-chromatic-number theorem.
    - title: "Wikipedia: Gyárfás–Sumner conjecture"
      url: https://en.wikipedia.org/wiki/Gy%C3%A1rf%C3%A1s%E2%80%93Sumner_conjecture
      why: A short account of the best-known question about forced induced subgraphs.
    - title: "Scott and Seymour: A survey of χ-boundedness"
      url: https://arxiv.org/abs/1812.07500
      why: The field-level survey; the introduction is readable first.
    - title: "Liu, Meng: A disproof of the El-Zahar–Erdős conjecture (preprint)"
      url: https://arxiv.org/abs/2611.24735
      why: The 2026 claim; short, but unrefereed.
raw:
  body: "## What chromatic number is\n\nA **proper colouring** of a graph gives each vertex a colour so that adjacent vertices never share one. The **chromatic number** $\\chi(G)$ is the fewest colours that suffice. A graph with a clique (a set of vertices all joined to each other) of size $k$ needs at least $k$ colours, so $\\chi(G)\\ge\\omega(G)$, where $\\omega$ is the largest clique size. Colouring models scheduling, register allocation and frequency assignment, but the questions here are about structure, not algorithms.\n\n## Large chromatic number without large cliques\n\nOne might guess that high chromatic number forces a big clique. It does not. Tutte, Zykov and Mycielski built triangle-free graphs of arbitrarily large chromatic number, and Erdős (1959) proved much more with the probabilistic method: for every $g$ and $k$ there is a graph with no cycle shorter than $g$ (girth at least $g$) and $\\chi\\ge k$. Take a random graph, delete one vertex from each short cycle, and show that few vertices go while the independence number stays small, which forces many colours. The high chromatic number is spread over the whole graph, with no local witness.\n\n## χ-bounded classes\n\nGyárfás introduced the idea of a **χ-bounded** class: a family of graphs in which $\\chi$ is at most some function of $\\omega$. Perfect graphs are the extreme case, with $\\chi=\\omega$. The central question is which forbidden induced subgraphs make a class χ-bounded. Erdős's girth theorem shows that a forbidden graph must be a forest, since otherwise random high-girth graphs avoid it. The **Gyárfás–Sumner conjecture** says that forbidding one tree is enough: for every tree $T$ and every $t$, graphs with no induced $T$ and no clique of size $t$ have bounded chromatic number. It is proved only for special trees such as paths, stars and trees of radius two. Scott and Seymour's 2018 survey (arXiv:1812.07500) describes the state of the field and the progress of recent years.\n\n## Anticomplete pairs and the El-Zahar–Erdős question\n\nTwo vertex sets $A$ and $B$ are **anticomplete** if no edge joins them. A graph of large chromatic number and small clique number looks locally sparse, so one may hope to find two far-apart pieces that are each still expensive to colour. El-Zahar and Erdős (Combinatorica, 1985) asked whether for all $t$ and $c$ there is a $d$ such that every graph with $\\omega<t$ and $\\chi\\ge d$ contains anticomplete sets $A,B$ with $\\chi(A)\\ge c$ and $\\chi(B)\\ge c$. Nguyen, Scott and Seymour (arXiv:2303.13449) proved a one-sided version: one side can be required to have large minimum degree while the other has large chromatic number.\n\nIn November 2026 a preprint by Liu and Meng (arXiv:2611.24735) claims a negative answer even for triangle-free graphs: graphs of arbitrarily large girth and chromatic number in which every anticomplete pair has one side that needs at most 6 colours. If that holds, the question fails already for $t=3$, $c=7$. The preprint is unrefereed and DAH has not checked the proof. The entry on the question is [the El-Zahar–Erdős problem](/research/chromatic-number-induced-subgraphs/questions/el-zahar-erdos-conjecture).\n"
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine a map where neighbouring countries must get different colours. The smallest number of colours that works is the chromatic number of the map, and mathematicians ask the same question about any network of dots joined by lines, which they call a graph.

A natural guess is that a graph needing many colours must contain a big group of dots that are all joined to each other, because such a group needs a different colour for every member. That guess is wrong. In 1959 Paul Erdős showed that you can have a network with no short loops at all, so it looks very sparse nearby, and yet it needs as many colours as you like. His proof does not draw the network. It shows that a randomly built one works with positive chance.

That raises a question about what else a many-colour network must contain. One famous guess from 1985, by El-Zahar and Erdős, says that such a network always holds two separate pieces, with no line between them, that each still need many colours. Nobody had settled it.

In November 2026 two authors posted a paper claiming the guess is false, using a random construction in the spirit of Erdős. The paper has not been checked by independent experts, and DAH has not checked it either.

# Student explanation

**Colouring and cliques.** A graph is a set of vertices joined by edges. A proper colouring gives each vertex a colour so that the two ends of every edge differ; $\chi(G)$ is the least number of colours that works. A clique of size $k$ (every pair joined) needs $k$ colours, so $\chi(G)\ge\omega(G)$, where $\omega$ is the largest clique. First-year intuition says the two should be close. They are not: the Mycielski construction gives triangle-free graphs with $\chi$ as large as you like, and Erdős (1959) showed that one can even forbid every cycle shorter than $g$ (girth at least $g$) while keeping $\chi\ge k$.

**How the random argument works.** Choose a random graph on $n$ vertices where each pair is joined independently with a small probability. Two facts hold with positive probability. There are few short cycles, so deleting one vertex from each leaves almost all of the graph. And the largest set of pairwise non-adjacent vertices (an independent set) is small. A colour class is an independent set, so with independence number at most $\alpha$ you need at least $n/\alpha$ colours. This is the heart of the probabilistic method: show that the random object has the properties you want with positive probability, hence one exists.

**χ-bounded classes.** A family of graphs is χ-bounded if $\chi$ is at most some function of $\omega$. Erdős's theorem says that to force this by forbidding an induced subgraph, that subgraph must be a forest. The Gyárfás–Sumner conjecture says that forbidding any one tree is enough. It is known only for special trees such as paths and stars.

**Anticomplete pairs.** Two vertex sets are anticomplete if no edge goes between them. El-Zahar and Erdős (1985) asked: for every clique bound $t$ and every $c$, is there a $d$ such that any graph with $\omega<t$ and $\chi\ge d$ contains anticomplete sets $A$ and $B$ that both have $\chi\ge c$? Nguyen, Scott and Seymour (2023, arXiv:2303.13449) proved a one-sided form: $B$ with $\chi\ge c$ and $A$ with large minimum degree.

**The 2026 claim.** Liu and Meng (arXiv:2611.24735, 18 November 2026) claim a negative answer. Their Theorem 1 says that for every $d$ and every $g\ge4$ there is a graph with $\chi\ge d$ and girth at least $g$ in which every anticomplete pair has one side with $\chi\le6$. With $g=4$ the graphs have no triangles, so the conjecture would fail for $t=3$ and $c=7$. The method is a random graph on blocks with edge probabilities that grow fast along an ordering of the block pairs, then deletion of one vertex per short cycle. The paper states that OpenAI's GPT-6.2 Astra helped construct the counterexample and its proof.

**Status.** The paper is an unrefereed preprint. DAH has read its full four-page text but has verified nothing. The preprint does not discuss whether 7 can be lowered, so the cases $c\le6$ are not addressed by it.
