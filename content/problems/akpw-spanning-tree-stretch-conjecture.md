---
type: problem
slug: akpw-spanning-tree-stretch-conjecture
title: "The Alon–Karp–Peleg–West conjecture: O(log n) expected stretch for spanning-tree distributions"
entry: low-stretch-spanning-trees
status: OPEN
origin: Alon, Karp, Peleg and West, DIMACS workshop 1991; SIAM Journal on Computing, 1995
ratings:
  difficulty: 22
  applicationValue: 12
  leverage: 18
verification:
  route: REVIEW
sources:
  - title: Hajiaghayi, Logarithmic Embeddings into Probabilistic Spanning Trees for Distances and Capacities (arXiv abstract, v1 of 3 November 2026)
    url: https://arxiv.org/abs/2611.05189
  - title: Same preprint, HTML version (theorems, AI Use Statement and bibliography)
    url: https://arxiv.org/html/2611.05189
  - title: Lean files repository linked by the preprint
    url: https://github.com/hajiaghayi/Spanning-Tree-Embedding
  - title: "Kyng, Probst Gutenberg, Rieder: Random-Shift Revisited (arXiv)"
    url: https://arxiv.org/abs/2510.09124
  - title: "Dorkofikis et al.: Low-Stretch Spanning Trees via Smoothed Analysis of Dijkstra's Algorithm (arXiv)"
    url: https://arxiv.org/abs/2609.35136
links:
  - to: deterministic-k-server-conjecture
    kind: RELATED
    note: The Alon-Karp-Peleg-West spanning-tree game was introduced to attack the k-server problem, and both problems have a claimed 2026 resolution that is not yet refereed.
timeline:
  - date: 1991-02-11
    title: Conjecture posed; exp(O(sqrt(log n log log n))) proved
    body: Alon, Karp, Peleg and West introduced the spanning-tree game at the DIMACS on-line algorithms workshop (journal version 1995) and conjectured O(log n).
    source: https://arxiv.org/html/2611.05189
  - date: 2005-01-01
    title: O(log^2 n log log n) stretch
    body: Elkin, Emek, Spielman and Teng (STOC 2005) gave the first near-logarithmic bound. Date is the conference year; day not given in the source.
    source: https://arxiv.org/html/2611.05189
  - date: 2008-01-01
    title: Nearly tight low-stretch spanning trees
    body: Abraham, Bartal and Neiman (FOCS 2008) reached O(log n log log n (log log log n)^3). Year from the bibliography of the 2026 preprint.
    source: https://arxiv.org/html/2611.05189
  - date: 2012-01-01
    title: O(log n log log n) by petal decompositions
    body: Abraham and Neiman (STOC 2012), the best accepted bound before 2026.
    source: https://arxiv.org/html/2611.05189
  - date: 2026-11-03
    title: Claimed O(log n) expected stretch (preprint)
    body: Hajiaghayi posted arXiv:2611.05189 claiming the conjecture, with capacity and oblivious-routing versions. Unrefereed; the paper discloses extensive use of OpenAI's Astra and links Lean files, which DARC has not checked.
    source: https://arxiv.org/abs/2611.05189
explainer:
  oneLine: Can random skeleton trees keep every network's average detour near log n? An unrefereed 2026 claim says yes.
  flow:
    - "1991: conjecture of O(log n) average stretch"
    - Bounds shrink slowly over 20 years
    - "2012: log n times log log n stands"
    - "Nov 2026: unrefereed paper claims log n"
    - Experts and Lean check still needed
  glossary:
    - term: spanning tree
      meaning: A subset of a graph's edges that connects every vertex and contains no loop.
      link: https://en.wikipedia.org/wiki/Spanning_tree
    - term: stretch
      meaning: How many times longer the distance between an edge's two ends becomes when travel is restricted to the tree.
      link: /research/low-stretch-spanning-trees
    - term: expected value
      meaning: The average outcome of a random choice, with each outcome weighted by its probability.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: k-server problem
      meaning: An online problem where k mobile servers must move to serve requests that arrive one by one, keeping the total travel small.
      link: https://en.wikipedia.org/wiki/K-server_problem
    - term: big-O notation
      meaning: A way to say how fast a quantity grows, ignoring constant factors, for example O(log n) grows far slower than n.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: preprint
      meaning: A research paper shared publicly before independent experts have reviewed it, so its claims are not yet confirmed.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Lean
      meaning: "A proof assistant: software that checks every step of a mathematical proof written in its formal language."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: oblivious routing
      meaning: Choosing the paths for traffic using fixed rules, without looking at what other traffic is in the network.
      link: /research/low-stretch-spanning-trees
    - term: Laplacian matrix
      meaning: A matrix built from a graph that records how vertices are connected; many network problems reduce to linear systems with it.
      link: https://en.wikipedia.org/wiki/Laplacian_matrix
    - term: randomized algorithm
      meaning: A method that makes random choices; here it samples a random tree and is judged on its average behaviour.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
  readFirst:
    - title: Hajiaghayi, Logarithmic Embeddings into Probabilistic Spanning Trees for Distances and Capacities (arXiv, unrefereed)
      url: https://arxiv.org/abs/2611.05189
      why: The claimed result itself; read the abstract and the AI Use Statement to see exactly what is and is not asserted.
    - title: Lean files linked by the paper (GitHub)
      url: https://github.com/hajiaghayi/Spanning-Tree-Embedding
      why: The formal proof files the author links; DARC has not rebuilt them, so treat them as unverified.
    - title: "Lecture 15: the FRT algorithm (M. Dinitz, JHU)"
      url: https://www.cs.jhu.edu/~mdinitz/classes/ApproxAlgorithms/Spring2019/Lectures/lecture15.pdf
      why: Readable proof of the O(log n) result for non-spanning trees, the easier cousin of this conjecture.
    - title: Spanning tree (Wikipedia)
      url: https://en.wikipedia.org/wiki/Spanning_tree
      why: Plain introduction to the basic object.
raw:
  verifySpec: "Expert review of the preprint's proof: the protected-geodesic petal decomposition, the pathwise entropy bound, the derandomizing local-averaging inequality and the rational packing step, checked against the stated theorems (expected stretch at most (1+theta)*rho_n with rho_n = C0*ceil(log2(2n)), at most m trees, deterministic polynomial time). In addition, an independent rebuild of the Lean files at the commit linked from the paper (SpanningTreeDecompositions-Theorem-1.1.zip) with an axiom listing, and a check that the formal statement of Theorem 1.1 matches the informal one, including that trees are spanning and that it is the expected stretch of each edge. A refereed publication or acceptance by specialists in tree embeddings would settle it."
  student: "**The question.** A *graph* has vertices joined by edges with positive lengths. A *spanning tree* keeps a loop-free set of edges that still connects all $n$ vertices. For a tree $T$ the *stretch* of an edge $(u,v)$ is $d_T(u,v)/d_G(u,v)$: how much longer the trip is along the tree. One tree cannot be good everywhere (cut a cycle and the two ends of the cut edge are $n-1$ apart), so we ask for a random tree. The conjecture of Alon, Karp, Peleg and West states that there is a distribution over spanning trees with $d_T \\ge d_G$ always and\n\n$$\\mathbb{E}[d_T(u,v)] \\le C\\log n \\cdot d_G(u,v)$$\n\nfor every edge, with $C$ a universal constant. The left side is an *expected value*: the average over the random choice of tree. Diamond graphs force at least $\\log n$, so this would be optimal.\n\n**Origin.** The game was invented in 1991 to attack the $k$-server problem, an online decision problem where servers must move to serve requests that arrive one at a time without knowing the future. Trees are far easier to analyse than general networks, so a distribution of trees that mimics the network is a natural tool.\n\n**Progress.** AKPW proved $\\exp(O(\\sqrt{\\log n\\log\\log n}))$. Elkin, Emek, Spielman and Teng got $O(\\log^2 n\\log\\log n)$ in 2005, Abraham, Bartal and Neiman improved it in 2008, and Abraham and Neiman reached $O(\\log n\\log\\log n)$ in 2012, the best *accepted* bound. If the tree need not use the graph's own edges, Fakcharoenphol, Rao and Talwar already had $O(\\log n)$ in 2003. So the remaining gap was a single $\\log\\log n$ factor.\n\n**The 2026 claim.** Hajiaghayi's preprint (arXiv:2611.05189, 3 November 2026, one author) claims $O(\\log n)$ for every connected graph, plus a capacity version that gives optimal oblivious routing, and a deterministic polynomial-time construction using at most $m$ trees ($m$ is the number of edges). The paper says it grew out of extensive interaction with OpenAI's Astra model and links Lean proof files. It has not been refereed. DARC has not checked the argument or rebuilt the Lean files, so the status stays **OPEN**.\n\n**What would settle it.** Acceptance by specialists in tree embeddings or publication in a refereed venue, an independent rebuild of the Lean files together with a check that the formal statement says what the paper says, or the discovery of an error.\n\n**Why it is hard.** Spanning trees are rigid: every tree edge must be a real edge, so the cutting tricks used for general trees do not transfer directly. Nobody had managed to strip the last $\\log\\log n$ in 14 years."
site:
  aiReviewed: true
---

For every connected graph $G$ on $n$ vertices with positive edge lengths, is there a probability distribution over spanning trees $T$ of $G$ such that $d_T(u,v)\ge d_G(u,v)$ always and, for every edge $(u,v)$, $\mathbb{E}[d_T(u,v)]\le C\log n\cdot d_G(u,v)$ for an absolute constant $C$? Diamond graphs show $\Omega(\log n)$ is necessary.

# State of the art

**Accepted results.** Alon, Karp, Peleg and West proved expected stretch $\exp(O(\sqrt{\log n\log\log n}))$ (1991/1995). Elkin, Emek, Spielman and Teng reached $O(\log^2 n\log\log n)$ (2005), Abraham, Bartal and Neiman $O(\log n\log\log n(\log\log\log n)^3)$ (2008), and Abraham and Neiman $O(\log n\log\log n)$ (2012), the best accepted bound. For tree metrics that need not be spanning, Fakcharoenphol, Rao and Talwar proved the tight $O(\log n)$ (2003).

**Claimed resolution (unrefereed).** Mohammad Hajiaghayi, arXiv:2611.05189 (v1, 3 November 2026, single author), claims $O(\log n)$ expected stretch for every connected graph. The preprint also claims a capacity version (every tree cut dominates the graph cut, expected tree cut within $O(\log n)$) giving an $O(\log n)$-competitive fractional oblivious routing, matching $\Omega(\log n)$ lower bounds from diamond graphs, deterministic polynomial-time construction from at most $m$ trees for rational inputs, and an $\Omega(m/\rho)$ support lower bound for congestion $\rho$. The proof is said to combine a protected-geodesic petal decomposition, a pathwise entropy bound and a derandomizing local averaging inequality. The AI Use Statement reports extensive interaction with OpenAI's Astra model, with Gemini Argon assisting in parts, and links a zip of Lean files on GitHub. As of 5 November 2026 the paper is two days old; no independent verification, refereeing or rebuild of the Lean files was found, and DARC has not checked it. The status therefore stays OPEN.

# Applications

A proof would remove the last $\log\log n$ factor from the best accepted low-stretch spanning-tree bound. Laplacian solvers already run in nearly linear time with the current bound, so the practical gain is small; the main value is theoretical, a tight answer to a 35-year-old question, plus clean spanning-tree versions of FRT-style embeddings for oblivious routing and network-design algorithms that must stay inside the given network.

# Resolution criteria

A proof of $O(\log n)$ expected stretch for every connected graph that is accepted by experts or published in a refereed venue, or a Lean formalization of the statement (including a check that the formal statement matches the claim) that an independent party has rebuilt; or an error found in the 2026 argument.

# Rating rationale

Difficulty 22: the conjecture stood from 1991 and was within one log log n factor since 2012, but a complete claimed proof (with Lean files) now exists, so most of the remaining distance is verification of a days-old single-author preprint; slightly below the deterministic k-server conjecture (26) because the claim extends a known framework, and if confirmed it drops to about 5. Application value 12: Laplacian solvers already run in near-linear time with the O(log n log log n) bound, so the gain is a log log factor plus cleaner spanning-tree oblivious routing. Leverage 18: tree embeddings, oblivious routing and related network algorithms, a few results in one subfield.

# Plain explanation

Take any network of roads. A skeleton keeps just enough roads to connect everything with no loops, but makes some trips longer. In 1991 four researchers asked: can you always pick a random skeleton so that, on average, every road's detour is only about as large as the logarithm of the number of places? That number grows very slowly. A million places give about twenty, and a billion give about thirty.

They proved a weaker answer, and over the next two decades others shaved it down. By 2012 the best accepted result was off from the goal by one tiny extra factor, which grows even more slowly. It looked close, yet nobody could remove it.

On 3 November 2026, a researcher named Mohammad Hajiaghayi posted a paper claiming to have done it. He says he worked extensively with an AI system from OpenAI called Astra, and that he shared computer-checkable files. This is only a claim so far. The paper is a few days old, no other experts have confirmed it, and DARC has not checked it. Until they do, the question stays listed as open.

If the claim holds, it settles a clean mathematical question. It will probably not change everyday software, since the best accepted result was already nearly as good.
