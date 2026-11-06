---
type: problem
slug: fo-model-checking-monadically-dependent
title: FPT first-order model checking on every monadically dependent graph class
entry: first-order-model-checking
status: OPEN
origin: Stated at the Algorithms, Logic and Structure workshop, Warwick, December 2016 (hardness direction in Toruńczyk's entry on the open-problem list; the converse posed at the same workshop, per Dreier, Mählmann and Toruńczyk, 2024); the hardness half was proved in 2024. A November 2026 unrefereed preprint claims the tractability half.
ratings:
  difficulty: 24
  applicationValue: 8
  leverage: 42
verification:
  route: REVIEW
sources:
  - title: Dreier, Mählmann, Toruńczyk, First-Order Model Checking on Monadically Dependent Graph Classes (arXiv:2611.08143, 5 November 2026, preprint)
    url: https://arxiv.org/abs/2611.08143
  - title: "Dreier, Mählmann, Toruńczyk, Flip-Breakability: A Combinatorial Dichotomy for Monadically Dependent Graph Classes (arXiv:2403.15201)"
    url: https://arxiv.org/abs/2403.15201
  - title: "Algorithms, Logic and Structure workshop, Warwick, December 2016: problems from the open problem session (PDF)"
    url: https://warwick.ac.uk/fac/sci/maths/people/staff/daniel_kral/alglogstr/openproblems.pdf
  - title: Grohe, Kreutzer, Siebertz, Deciding first-order properties of nowhere dense graphs (arXiv:1311.3899)
    url: https://arxiv.org/abs/1311.3899
  - title: "Bonnet, Kim, Thomassé, Watrigant, Twin-width I: tractable FO model checking (arXiv:2004.14789)"
    url: https://arxiv.org/abs/2004.14789
  - title: Dreier, Eleftheriadis, Mählmann, McCarty, Pilipczuk, Toruńczyk, First-Order Model Checking on Monadically Stable Graph Classes (arXiv:2311.18740)
    url: https://arxiv.org/abs/2311.18740
  - title: Dreier, Mählmann, Siebertz, First-Order Model Checking on Structurally Sparse Graph Classes (arXiv:2302.03527)
    url: https://arxiv.org/abs/2302.03527
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
  oneLine: Claimed 2026 proof that logic questions on graphs can be answered quickly on exactly the monadically dependent families; unchecked.
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
  body: "**Instance:** a graph $G$ from a fixed class $\\mathcal C$ and a first-order sentence $\\varphi$. **Question:** does $G\\models\\varphi$? **Conjecture:** for a hereditary class $\\mathcal C$ (closed under induced subgraphs), the problem is fixed-parameter tractable, that is solvable in time $f(|\\varphi|)\\cdot n^{c}$ with $c$ independent of $\\varphi$, if and only if $\\mathcal C$ is monadically dependent, meaning no first-order transduction produces all graphs from $\\mathcal C$. The 'only if' direction is proved under the assumption FPT $\\ne$ AW[*]. The open part is the 'if' direction: FPT model checking on every monadically dependent class."
  stateOfArt: "**Known before November 2026.** Hardness: model checking is AW[*]-hard on every hereditary class that is not monadically dependent (Dreier, Mählmann and Toruńczyk, 2024). Tractability: nowhere dense classes (Grohe, Kreutzer and Siebertz, 2013 preprint, J. ACM 2017); structurally nowhere dense classes (Dreier, Mählmann and Siebertz, 2023); monadically stable classes (Dreier, Eleftheriadis, Mählmann, McCarty, Pilipczuk and Toruńczyk, 2023); bounded twin-width classes when a contraction sequence is supplied (Bonnet, Kim, Thomassé and Watrigant, 2020). The new preprint says no efficient way was known to compute such a sequence for general bounded twin-width graphs.\n\n**Claimed resolution (unrefereed).** Dreier, Mählmann and Toruńczyk (arXiv:2611.08143, v1, 5 November 2026, cs.LO) claim FPT model checking on every monadically dependent class, with running time $O(n^{3+\\varepsilon})$ for each fixed class, sentence and $\\varepsilon>0$. The algorithm takes only the graph and the sentence as input, not a decomposition, and the class affects the constants only. They state that, together with the 2024 hardness result, this completely characterizes the hereditary classes with FPT model checking. DARC has read the abstract and introduction, not the proofs, and no refereeing or independent check is recorded. The problem stays OPEN here until experts accept the argument."
  resolutionCriteria: "An accepted proof (peer-reviewed or independently checked by experts) that FO model checking is FPT on every monadically dependent graph class, or a proof that it is not, for example by finding a monadically dependent hereditary class on which it is AW[*]-hard. If errors are found in the preprint, the tractability direction reverts to open with no credible claim."
  student: "**The question.** A *graph* has vertices and edges. A *first-order sentence* is built from vertex variables, 'is adjacent to', 'equals', AND/OR/NOT and the quantifiers 'for all' and 'there exists', each ranging over vertices. Example: 'there exist $x,y,z$ pairwise adjacent' says the graph has a triangle. *Model checking* means: given a graph $G$ and a sentence $\\varphi$, is $\\varphi$ true in $G$?\n\n**Brute force.** A sentence with $k$ quantifiers can be checked by trying all $n^k$ tuples of vertices, where $n$ is the number of vertices. That is polynomial for each fixed $k$ but the exponent grows with $\\varphi$. The hope is *fixed-parameter tractable* (FPT) time, $f(|\\varphi|)\\cdot n^{c}$, where $c$ does not depend on $\\varphi$: the sentence may make the constant huge, but the dependence on the graph size stays fixed. On all graphs this is believed impossible (the problem is complete for a class called AW[*]).\n\n**Tractable families.** Sparse families such as planar graphs are *nowhere dense*; Grohe, Kreutzer and Siebertz proved FPT for all of them (2014/2017). Bonnet, Kim, Thomassé and Watrigant proved it for families of bounded *twin-width* if the graph comes with a witness, a contraction sequence (2020).\n\n**The dividing line.** Call a family *hereditary* if deleting vertices keeps you inside it. Call it *monadically dependent* if no first-order recipe, after giving the vertices some colours, can rebuild every graph out of graphs in the family. The conjecture says that for hereditary families, FPT is possible exactly when the family is monadically dependent. The 2024 paper of Dreier, Mählmann and Toruńczyk proved half: if the family is not monadically dependent, model checking is AW[*]-hard, so FPT is not expected.\n\n**The 2026 claim.** The same three authors posted arXiv:2611.08143 on 5 November 2026, claiming the other half: an algorithm for every monadically dependent family, running in time about $n^{3+\\varepsilon}$ for each fixed family and sentence, and needing no witness as input. If correct, the hereditary families are completely sorted into 'FPT' and 'AW[*]-hard'.\n\n**Status.** The paper is an unrefereed preprint. DARC read its abstract and introduction but not the proofs, and no independent check is recorded, so the problem stays open here. Also note that $f(|\\varphi|)$ can be astronomically large, so this is a classification result, not a fast query tool."
site:
  aiReviewed: true
---

# Applications

Mostly theoretical. A confirmed result would justify one general-purpose procedure for first-order queries on graph classes such as bounded twin-width and nowhere dense inputs, and would show which classes cannot support one. The dependence on the sentence is huge in earlier algorithms of this kind (non-elementary for twin-width), so no practical implementation follows directly.

# Rating rationale

Difficulty 24: the hardness half is proved and the tractability half has an explicit claimed algorithm by the authors who proved the closest cases, so what remains is checking a long proof; without the claim this central problem of algorithmic model theory, open since 2016, would sit in the 60s, and it returns there if the preprint fails. Application value 8: no deployed system depends on it, since FPT dependence on the sentence is huge and the constants are impractical. Leverage 42: it would close the classification for hereditary classes and reshape the subfield of algorithmic meta-theorems, with few results outside it depending on the answer.

# Verification

Route: expert review of the preprint. A reviewer should restate the main theorem (uniform algorithm, time $O(n^{3+\varepsilon})$ for each fixed monadically dependent class), check the key combinatorial lemma that tuples over a vertex set $U$ realise only $|U|^{O(1)}$ types of fixed quantifier rank, verify the computation of construction sequences that the paper takes from its companion work and how it feeds the model-checking step, and confirm the extension from graphs to binary structures. Cross-check against the known special cases (nowhere dense, monadically stable, bounded twin-width with a given sequence) and against the hardness theorem of arXiv:2403.15201 so that the two together give the claimed characterization. Check that the paper's notion of fixed-parameter tractability (uniform, not strongly uniform) matches the one in the dichotomy statement. No formal proof or implementation is recorded.

# Plain explanation

A graph is dots joined by lines: a road map, a friendship network, a circuit. You can ask questions about it in a precise language: 'is there a dot connected to every other dot?' or 'are there three dots, all joined to each other?' Checking such a question on a huge graph can be very slow if you search blindly.

Researchers ask a bigger question. For which families of graphs is there one method that answers every question of this kind quickly, no matter how the question is worded, as long as the question itself is short? Families of sparse, tree-like graphs, such as road maps with no huge tangled knots, are known to work. So are some other families defined by a notion called twin-width.

The analogy is a keyed lock. For some buildings, one master key opens every door. For others, a master key is believed impossible. The research is about drawing the line between the two kinds of buildings.

In November 2026, three researchers posted a paper claiming to settle exactly where the line is for a big natural kind of family. It has not been checked by outside experts, so this site lists the question as open.

Why care? It tells people who design algorithms which general tools can work and which cannot. The tools involved are mostly of theoretical interest.
