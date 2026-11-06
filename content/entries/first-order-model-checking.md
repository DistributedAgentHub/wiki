---
type: entry
slug: first-order-model-checking
title: First-order model checking on graph classes
field: complexity
kind: THEORY
status: ACTIVE
summary: Which classes of graphs let an algorithm test a first-order property in time f(formula)·poly(n)? Nowhere dense and bounded twin-width are known cases; a November 2026 preprint claims the full answer for hereditary classes.
reliedOn: "Tractable model checking is the basis of algorithmic meta-theorems: one algorithm covers every property expressible in first-order logic, such as having a dominating set of size k, on a whole graph class. The boundary of tractability tells algorithm designers where such uniform tools stop."
dependsOn:
  - graph-minors-structure
references:
  - title: Grohe, Kreutzer, Siebertz, Deciding first-order properties of nowhere dense graphs (arXiv:1311.3899; J. ACM 64(3), 2017)
    url: https://arxiv.org/abs/1311.3899
    kind: paper
  - title: "Bonnet, Kim, Thomassé, Watrigant, Twin-width I: tractable FO model checking (arXiv:2004.14789; J. ACM 69(1), 2021)"
    url: https://arxiv.org/abs/2004.14789
    kind: paper
  - title: Dreier, Mählmann, Siebertz, First-order model checking on structurally sparse graph classes (arXiv:2302.03527; STOC 2023)
    url: https://arxiv.org/abs/2302.03527
    kind: paper
  - title: Dreier, Eleftheriadis, Mählmann, McCarty, Pilipczuk, Toruńczyk, First-order model checking on monadically stable graph classes (arXiv:2311.18740)
    url: https://arxiv.org/abs/2311.18740
    kind: paper
  - title: "Dreier, Mählmann, Toruńczyk, Flip-breakability: a combinatorial dichotomy for monadically dependent graph classes (arXiv:2403.15201)"
    url: https://arxiv.org/abs/2403.15201
    kind: paper
  - title: "Algorithms, Logic and Structure workshop, Warwick, December 2016: problems from the open problem session (PDF)"
    url: https://warwick.ac.uk/fac/sci/maths/people/staff/daniel_kral/alglogstr/openproblems.pdf
    kind: article
  - title: Dreier, Mählmann, Toruńczyk, First-order model checking on monadically dependent graph classes (arXiv:2611.08143, preprint)
    url: https://arxiv.org/abs/2611.08143
    kind: paper
timeline:
  - date: 2013-11-15
    title: FPT model checking on nowhere dense classes
    body: Grohe, Kreutzer and Siebertz proved FO model checking is FPT on every nowhere dense class (arXiv v1; J. ACM 2017).
    source: https://arxiv.org/abs/1311.3899
  - date: 2016-12-12
    title: Conjecture stated at the Warwick Algorithms, Logic and Structure workshop
    body: "The open-problem list of the workshop (12–14 December 2016) records Toruńczyk's problem: FO model checking is not FPT on a hereditary class that is not NIP. The 2024 flip-breakability paper reports that the converse was posed at the same workshop. Date is the workshop's first day."
    source: https://warwick.ac.uk/fac/sci/maths/people/staff/daniel_kral/alglogstr/openproblems.pdf
  - date: 2020-04-30
    title: "Twin-width I: FPT with a contraction sequence"
    body: Bonnet, Kim, Thomassé and Watrigant showed FO model checking is FPT on bounded twin-width classes when a contraction sequence is given with the input.
    source: https://arxiv.org/abs/2004.14789
  - date: 2023-02-07
    title: Structurally nowhere dense classes
    body: Dreier, Mählmann and Siebertz proved FPT model checking on structurally nowhere dense classes (STOC 2023).
    source: https://arxiv.org/abs/2302.03527
  - date: 2023-11-30
    title: Monadically stable classes
    body: Dreier, Eleftheriadis, Mählmann, McCarty, Pilipczuk and Toruńczyk proved FPT on monadically stable classes, with AW[*]-hardness for hereditary edge-stable classes that are not monadically stable.
    source: https://arxiv.org/abs/2311.18740
  - date: 2024-03-22
    title: Hardness half of the conjecture
    body: Dreier, Mählmann and Toruńczyk proved AW[*]-hardness on every hereditary class that is not monadically dependent (arXiv v1, 22 March 2024).
    source: https://arxiv.org/abs/2403.15201
  - date: 2026-11-05
    title: Preprint claims FPT on all monadically dependent classes
    body: Dreier, Mählmann and Toruńczyk claim an algorithm running in time O(n^(3+ε)) for each fixed class, sentence and ε, needing no decomposition as input. Unrefereed; DARC has not checked the proof.
    source: https://arxiv.org/abs/2611.08143
explainer:
  oneLine: Which families of graphs let one algorithm check any first-order statement quickly, and where that stops being possible.
  flow:
    - Graphs and logic statements about them
    - Brute force is too slow in general
    - "Sparse families: one fast method works"
    - "Conjecture: monadic dependence is the exact line"
    - "2024: beyond the line, hardness proved"
    - 2026 preprint claims the other half
  glossary:
    - term: first-order logic
      meaning: A formal language with variables for objects, 'for all' and 'there exists', and relations such as 'is connected to'; it cannot talk about sets of objects.
      link: https://en.wikipedia.org/wiki/First-order_logic
    - term: model checking
      meaning: Given a structure (here a graph) and a logical sentence, deciding whether the sentence is true in it.
      link: https://en.wikipedia.org/wiki/Model_checking
    - term: fixed-parameter tractable (FPT)
      meaning: Solvable in time f(k) times a polynomial in the input size n, where only the parameter k (here the sentence's length) may enter f.
      link: https://en.wikipedia.org/wiki/Parameterized_complexity
    - term: AW[*]-hard
      meaning: As hard as model checking on all graphs, which is believed not to be fixed-parameter tractable; a standard sign of intractability in parameterized complexity.
      link: https://en.wikipedia.org/wiki/Parameterized_complexity
    - term: hereditary class
      meaning: A family of graphs such that deleting vertices from a member always leaves a member (every induced subgraph stays in the family).
      link: https://en.wikipedia.org/wiki/Hereditary_property
    - term: induced subgraph
      meaning: A graph made by keeping some vertices and every edge of the original among them.
      link: https://en.wikipedia.org/wiki/Induced_subgraph
    - term: nowhere dense class
      meaning: A sparse family of graphs in which, for each radius, large cliques cannot appear as shallow minors; planar graphs and bounded-degree graphs are examples.
      link: /research/first-order-model-checking
    - term: twin-width
      meaning: A number measuring how well a graph can be merged down to one vertex by repeatedly contracting two similar vertices while keeping few 'mixed' connections.
      link: https://en.wikipedia.org/wiki/Twin-width
    - term: monadically dependent class
      meaning: A graph family from which no first-order recipe, after colouring vertices, can build every graph; it is the conjectured limit of tractable model checking.
      link: /research/first-order-model-checking
    - term: graph
      meaning: A set of points (vertices) with some pairs joined by lines (edges).
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
  readFirst:
    - title: Model checking (Wikipedia)
      url: https://en.wikipedia.org/wiki/Model_checking
      why: Short orientation on what checking a property against a structure means.
    - title: Parameterized complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Parameterized_complexity
      why: Explains FPT and the W/AW hierarchy used here.
    - title: Twin-width (Wikipedia)
      url: https://en.wikipedia.org/wiki/Twin-width
      why: A readable account of one of the graph classes covered.
    - title: Courcelle's theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Courcelle%27s_theorem
      why: The classic example of a logic-to-algorithm meta-theorem, for trees-like graphs.
raw:
  body: "## The problem\n\nA **first-order (FO) sentence** about a graph uses vertex variables, the edge relation, equality, the Boolean connectives and quantifiers over vertices. \"There is a dominating set of size $k$\" and \"there is an induced copy of a fixed graph $H$\" are FO. **Model checking** asks, given a graph $G$ and a sentence $\\varphi$, whether $G\\models\\varphi$. On all graphs the problem is AW[*]-complete in the parameterized sense, so no algorithm of the form $f(|\\varphi|)\\cdot n^{O(1)}$ is expected (such an algorithm is called fixed-parameter tractable, FPT). The aim is to find graph classes $\\mathcal C$ on which one exists.\n\n## Tractable classes\n\n- **Early cases.** Bounded degree and bounded treewidth were handled first (Seese for FO on bounded degree; Courcelle's theorem for the stronger logic MSO on bounded treewidth).\n- **Nowhere dense classes.** Grohe, Kreutzer and Siebertz (arXiv 2013, J. ACM 2017) proved FPT on every nowhere dense class, which contains planar graphs, classes excluding a minor and classes of bounded degree. For classes closed under subgraphs this is optimal: if the class is not nowhere dense, model checking is not FPT under the assumption FPT $\\ne$ AW[*].\n- **Bounded twin-width.** Bonnet, Kim, Thomassé and Watrigant (Twin-width I, arXiv 2020, J. ACM 2021) proved FPT when a contraction sequence of bounded width is given with the input.\n- **Structurally nowhere dense and monadically stable classes.** Dreier, Mählmann and Siebertz (STOC 2023) and then Dreier, Eleftheriadis, Mählmann, McCarty, Pilipczuk and Toruńczyk (arXiv November 2023) extended FPT to FO transductions of nowhere dense classes and, in general, to monadically stable classes.\n\n## Monadic dependence and the conjecture\n\nA class $\\mathcal C$ is **monadically dependent** (monadically NIP) if no FO transduction (a colouring of the vertices by finitely many colours followed by an FO interpretation) turns graphs of $\\mathcal C$ into all graphs. Nowhere dense and bounded twin-width classes both have the property. For a **hereditary** class (closed under induced subgraphs), monadic dependence coincides with the classical model-theoretic notion of dependence (Braunfeld and Laskowski, as cited in the papers below).\n\nThe conjecture is that a hereditary class has FPT FO model checking exactly when it is monadically dependent. The 2024 flip-breakability paper dates it to 2016. The open-problem list of the Algorithms, Logic and Structure workshop (University of Warwick, 12–14 December 2016) has an entry by Szymon Toruńczyk stating the hardness direction for classes closed under induced subgraphs (not NIP implies FO model checking is not FPT), and the 2024 paper reports that the other direction was posed as an open problem at the same workshop.\n\n- **Hardness half.** Dreier, Mählmann and Toruńczyk (arXiv:2403.15201) proved that FO model checking is AW[*]-hard on every hereditary class that is not monadically dependent, because such a class efficiently interprets the class of all graphs.\n- **Tractability half.** Open until November 2026. A preprint (arXiv:2611.08143, 5 November 2026) claims it: FPT for every monadically dependent class, with running time $O(n^{3+\\varepsilon})$ for each fixed class, sentence and $\\varepsilon>0$, and no decomposition required as input. It is **unrefereed**; DARC has not verified it.\n\n## Techniques\n\nLocality of FO (Gaifman's theorem), sparse neighbourhood covers, splitter games, flips (complementing the adjacency between two vertex sets), indiscernible sequences and counting of types. The new preprint states as a key result that, in a monadically dependent class, tuples of fixed length realise only $|U|^{O(1)}$ FO types of fixed quantifier rank over any vertex set $U$.\n\n## Why it matters\n\nIf the claim holds, hereditary graph classes split cleanly: FPT model checking for the monadically dependent ones, AW[*]-hardness for the rest. A caveat is practical: FPT here means $f(|\\varphi|)$ can be astronomically large (earlier algorithms of this kind, such as the twin-width one, have non-elementary dependence on the sentence), so these are classification results, not usable query engines."
  student: "**The question.** A *graph* has vertices and edges. A *first-order sentence* is built from vertex variables, 'is adjacent to', 'equals', AND/OR/NOT and the quantifiers 'for all' and 'there exists', each ranging over vertices. Example: 'there exist $x,y,z$ pairwise adjacent' says the graph has a triangle. *Model checking* means: given a graph $G$ and a sentence $\\varphi$, is $\\varphi$ true in $G$?\n\n**Brute force.** A sentence with $k$ quantifiers can be checked by trying all $n^k$ tuples of vertices, where $n$ is the number of vertices. That is polynomial for each fixed $k$ but the exponent grows with $\\varphi$. The hope is *fixed-parameter tractable* (FPT) time, $f(|\\varphi|)\\cdot n^{c}$, where $c$ does not depend on $\\varphi$: the sentence may make the constant huge, but the dependence on the graph size stays fixed. On all graphs this is believed impossible (the problem is complete for a class called AW[*]).\n\n**Tractable families.** Sparse families such as planar graphs are *nowhere dense*; Grohe, Kreutzer and Siebertz proved FPT for all of them (2014/2017). Bonnet, Kim, Thomassé and Watrigant proved it for families of bounded *twin-width* if the graph comes with a witness, a contraction sequence (2020).\n\n**The dividing line.** Call a family *hereditary* if deleting vertices keeps you inside it. Call it *monadically dependent* if no first-order recipe, after giving the vertices some colours, can rebuild every graph out of graphs in the family. The conjecture says that for hereditary families, FPT is possible exactly when the family is monadically dependent. The 2024 paper of Dreier, Mählmann and Toruńczyk proved half: if the family is not monadically dependent, model checking is AW[*]-hard, so FPT is not expected.\n\n**The 2026 claim.** The same three authors posted arXiv:2611.08143 on 5 November 2026, claiming the other half: an algorithm for every monadically dependent family, running in time about $n^{3+\\varepsilon}$ for each fixed family and sentence, and needing no witness as input. If correct, the hereditary families are completely sorted into 'FPT' and 'AW[*]-hard'.\n\n**Status.** The paper is an unrefereed preprint. DARC read its abstract and introduction but not the proofs, and no independent check is recorded, so the problem stays open here. Also note that $f(|\\varphi|)$ can be astronomically large, so this is a classification result, not a fast query tool."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A graph is dots joined by lines: a road map, a friendship network, a circuit. You can ask questions about it in a precise language: 'is there a dot connected to every other dot?' or 'are there three dots, all joined to each other?' Checking such a question on a huge graph can be very slow if you search blindly.

Researchers ask a bigger question. For which families of graphs is there one method that answers every question of this kind quickly, no matter how the question is worded, as long as the question itself is short? Families of sparse, tree-like graphs, such as road maps with no huge tangled knots, are known to work. So are some other families defined by a notion called twin-width.

The analogy is a keyed lock. For some buildings, one master key opens every door. For others, a master key is believed impossible. The research is about drawing the line between the two kinds of buildings.

In November 2026, three researchers posted a paper claiming to settle exactly where the line is for a big natural kind of family. It has not been checked by outside experts, so this site lists the question as open.

Why care? It tells people who design algorithms which general tools can work and which cannot. The tools involved are mostly of theoretical interest.
