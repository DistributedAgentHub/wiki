---
type: problem
slug: hyperclique-hypothesis
title: "The Hyperclique Hypothesis: is finding a k-clique in an h-uniform hypergraph (h ≥ 3) as hard as brute force?"
entry: fine-grained-complexity
status: OPEN
origin: Lincoln, Vassilevska Williams and Williams (SODA 2018); two unrefereed preprints of November 2026 claim to refute it (Fischer, arXiv:2611.03880; Alman, Li, Pant, Pratt and Williams, arXiv:2611.05082)
ratings:
  difficulty: 24
  applicationValue: 22
  leverage: 58
verification:
  route: REVIEW
sources:
  - title: Fischer, The Hyperclique Hypothesis is False (arXiv:2611.03880, 2 November 2026, preprint)
    url: https://arxiv.org/abs/2611.03880
  - title: Alman, Li, Pant, Pratt, Williams, Finding Hypercliques Faster Than Brute Force (arXiv:2611.05082, 3 November 2026, preprint)
    url: https://arxiv.org/abs/2611.05082
  - title: Lincoln, Vassilevska Williams, Williams, Tight Hardness for Shortest Cycles and Paths in Sparse Graphs (SODA 2018; preprint arXiv:1712.08147, Hypothesis 1.4)
    url: https://arxiv.org/abs/1712.08147
links:
  - to: strong-exponential-time-hypothesis
    kind: RELATED
    note: Both are hardness hypotheses used for fine-grained lower bounds; the Hyperclique Hypothesis follows from the separate Max-k-SAT Hypothesis, and the Alman et al. preprint explains why recent Exponential Time Hypothesis claims do not directly settle it.
  - to: apsp-3sum-hypotheses
    kind: RELATED
    note: Same family of fine-grained hypotheses, and the November 2026 preprints describe their algorithms as algebraic, like the claimed refutation of the APSP and 3SUM hypotheses; the k-AP Hypothesis ties hyperclique to arithmetic-progression problems.
  - to: matrix-multiplication-exponent
    kind: RELATED
    note: For graphs clique detection is sped up by fast matrix multiplication, and the claimed hypergraph algorithms generalise the matrix multiplication tensor to a higher-order hyperclique tensor.
timeline:
  - date: 2018-01-07
    title: Hyperclique Hypothesis stated
    body: Lincoln, Vassilevska Williams and Williams formalised the hypothesis in their SODA 2018 paper on cycles and paths in sparse graphs and derived conditional lower bounds from it (conference date approximate; the preprint is arXiv:1712.08147).
    source: https://arxiv.org/abs/1712.08147
  - date: 2026-11-02
    title: Preprint claims the Hyperclique Hypothesis is false
    body: Nick Fischer posted an algebraic algorithm detecting and counting k-cliques in h-uniform hypergraphs in O(n^((1-ε_h)k)) time for k>h≥3; the abstract says the result is almost entirely due to AI. Unrefereed.
    source: https://arxiv.org/abs/2611.03880
  - date: 2026-11-03
    title: Second preprint claims to refute the hyperclique conjecture
    body: Alman, Li, Pant, Pratt and Williams posted arithmetic circuits of size O(n^(k-ε_k)) for the k-hyperclique tensor, counting k-hypercliques in (k-1)-uniform hypergraphs faster than brute force, with corollaries for Max-kSAT and k-term arithmetic progressions. Unrefereed.
    source: https://arxiv.org/abs/2611.05082
explainer:
  oneLine: Does finding a tightly linked group in a network of triples need brute force? Two 2026 preprints claim not.
  flow:
    - "Pick k of n vertices: n^k options"
    - "Hypothesis: nothing polynomially faster for hypergraphs"
    - Many other problems proved at least as hard
    - Two Nov 2026 preprints claim faster algebraic algorithms
    - "Unrefereed: experts must check"
  glossary:
    - term: clique
      meaning: A set of vertices in a graph in which every two are joined by an edge.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: hypergraph
      meaning: A graph whose edges may join more than two vertices; in an h-uniform hypergraph every edge has exactly h vertices.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: hyperclique
      meaning: A set of k vertices in an h-uniform hypergraph in which every h of them form an edge.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: brute force
      meaning: Solving a problem by trying every possible candidate; for k vertices out of n it takes about n^k steps.
      link: https://en.wikipedia.org/wiki/Brute-force_search
    - term: fine-grained complexity
      meaning: The study of the exact running-time exponents of problems, linked by reductions to a few hardness hypotheses.
      link: /research/fine-grained-complexity
    - term: fine-grained reduction
      meaning: A translation between problems that preserves running time, so a speed-up for one gives a speed-up for the other.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
    - term: matrix multiplication
      meaning: Combining two grids of numbers into a third; fast algorithms such as Strassen's need fewer steps than the textbook method.
      link: /research/fast-matrix-multiplication
    - term: tensor
      meaning: A many-index array of numbers that generalises vectors and matrices; the hyperclique problem corresponds to such an array.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: arithmetic circuit
      meaning: A network of addition and multiplication gates that computes a polynomial; its size counts the gates.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: arithmetic progression
      meaning: A list of numbers with a constant gap between neighbours, such as 3, 7, 11, 15.
      link: https://en.wikipedia.org/wiki/Arithmetic_progression
    - term: Max-k-SAT
      meaning: Given logic clauses of at most k variables each, find a true/false assignment that satisfies as many clauses as possible.
      link: https://en.wikipedia.org/wiki/Maximum_satisfiability_problem
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Clique problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clique_problem
      why: The graph version of the problem, with the matrix-multiplication method for small cliques.
    - title: Fine-grained reduction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fine-grained_reduction
      why: What it means for one problem's running time to be tied to another's.
    - title: Strassen algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Strassen_algorithm
      why: The first matrix multiplication method to beat the textbook n^3 steps.
    - title: Alman et al., Finding Hypercliques Faster Than Brute Force (arXiv preprint)
      url: https://arxiv.org/abs/2611.05082
      why: Section 1 explains the triangle-by-matrix-multiplication idea and why hypergraphs were thought harder (unrefereed).
raw:
  body: "A *$k$-uniform hypergraph* on $n$ vertices has edges that are sets of exactly $k$ vertices. An *$\\ell$-hyperclique* in it is a set of $\\ell$ vertices such that every $k$-subset of them is an edge. The **$(\\ell,k)$-Hyperclique Hypothesis** of Lincoln, Vassilevska Williams and Williams (SODA 2018) states that for all integers $\\ell>k>2$, finding an $\\ell$-hyperclique in a $k$-uniform hypergraph on $n$ vertices requires $n^{\\ell-o(1)}$ time on a word RAM with $O(\\log n)$-bit words. Brute force takes about $n^{\\ell}$ time, so the hypothesis says that nothing polynomially faster than exhaustive search exists once $k\\ge3$. For $k=2$ (ordinary graphs) the analogue is false: $\\ell$-clique detection beats brute force using fast matrix multiplication (for triangles, $\\operatorname{tr}(A^3)$ counts them). A common special case is the $k$-Hyperclique Hypothesis for $\\ell=k+1$: no $O(n^{k+1-\\varepsilon})$ algorithm finds a $(k+1)$-hyperclique in a $k$-uniform hypergraph. **Question:** is the hypothesis true?"
  plain: "Picture a school with many students. A *clique* is a group where everybody knows everybody. To find a group of five, the obvious way is to check every possible group of five. That takes a huge amount of work, and it gets much worse as the school grows.\n\nFor ordinary friendships, between two people, smart methods beat this check-everything approach. Now change the rules. Instead of pairs, suppose the links join three people at once, like study groups of three. A group of four is then 'tight' if every possible trio inside it is a study group. Finding tight groups in this setting looks even harder, and since 2018 many computer scientists believed that checking every group is basically the best you can do. This belief is called the Hyperclique Hypothesis.\n\nIt matters because many other problems, from database queries to logic puzzles and geometry, were shown to be at least as hard as this one. If you could never beat checking everything here, you could never beat it there either.\n\nIn November 2026 two unchecked papers, posted a day apart, each claim that this belief is wrong. One says its result was found almost entirely by AI. Experts have not confirmed either one yet, so the question stays open here.\n\nThe analogy is only a picture: the real problem is about exact counting in large mathematical networks."
  student: "**The objects.** A *graph* has vertices joined by edges, and each edge links 2 vertices. A *clique* of size $k$ is a set of $k$ vertices that are all joined to one another. A *hypergraph* lets an edge link more vertices: in an *$h$-uniform* hypergraph every edge is a set of exactly $h$ vertices. A *$k$-hyperclique* is a set of $k$ vertices in which every $h$-element subset is an edge. For example, in a 3-uniform hypergraph, 4 vertices form a hyperclique if all 4 of their triples are edges.\n\n**Brute force.** With $n$ vertices there are about $n^k$ ways to pick $k$ of them, so trying all of them takes about $n^k$ steps. The **Hyperclique Hypothesis** (Lincoln, Vassilevska Williams and Williams, 2018) says that for $h\\ge3$ nothing does polynomially better: no algorithm runs in $O(n^{k-\\varepsilon})$ time for any fixed $\\varepsilon>0$. This is the style of claim studied in *fine-grained complexity*: instead of asking only 'polynomial or not', it asks for the exact exponent, and links problems so that a faster algorithm for one gives a faster algorithm for another.\n\n**Why $h=2$ is different.** For ordinary graphs, triangles can be counted by multiplying matrices: if $A$ is the adjacency matrix (entry 1 if an edge exists), then $\\operatorname{tr}(A^3)$, the sum of the diagonal of $A\\cdot A\\cdot A$, equals six times the number of triangles. Fast matrix multiplication such as Strassen's beats the textbook $n^3$ steps, so triangle finding beats brute force. For hypergraphs the matching algebra is a *tensor* (a many-index array) instead of a matrix. The 2018 paper showed that the obvious rank-based tricks cannot beat $n^k$ for hypercliques, which is why people believed the hypothesis.\n\n**Why it matters.** Conditional lower bounds for problems such as Max-$k$-SAT (satisfy as many clauses as possible), some database joins, and geometry problems like Klee's measure were derived from it. A related guess, the $k$-AP Hypothesis, says finding a $k$-term arithmetic progression (like 3, 7, 11, 15) in a set of numbers up to $N$ needs about $N^2$ time; it was known to imply the Hyperclique Hypothesis.\n\n**What two preprints claim.** Fischer (arXiv:2611.03880, 2 November 2026) reports an algebraic algorithm running in $O(n^{(1-\\varepsilon_h)k})$ time for $k>h\\ge3$, and says the result is almost entirely due to AI. Alman, Li, Pant, Pratt and Williams (arXiv:2611.05082, 3 November) report counting $k$-hypercliques in $(k-1)$-uniform hypergraphs in $O(n^{k-\\varepsilon_k})$ time using arithmetic circuits for the hyperclique tensor, and list faster Max-$k$-SAT ($2^{(1-\\varepsilon)n}$-type) and arithmetic-progression detection as corollaries. Both say their results refute the $k$-AP Hypothesis or a related conjecture. Neither is refereed and DARC has not checked them.\n\n**What is unknown.** Whether the algorithms are correct as stated. Experts would check the construction, its running time for each $k$, and the reductions to the consequences. The $\\varepsilon$ savings are small, so these algorithms are theoretical, not practical."
site:
  aiReviewed: true
---

# State of the art

**Before November 2026.** Williams (2005) noted that a faster 4-hyperclique algorithm would give a faster Max-3SAT algorithm, and Lincoln, Vassilevska Williams and Williams (SODA 2018; preprint arXiv:1712.08147) generalised this and stated the hypothesis. Their evidence was that the tensor rank of the natural generalisation of the matrix multiplication tensor is $\Omega(n^{k})$, so Strassen-style rank decompositions cannot help, and that the extension of the techniques behind fast clique detection in graphs does not give a polynomial speed-up for hypergraphs. No algorithm polynomially faster than exhaustive search was known for any $k>h\ge3$. Conditional lower bounds were built on it for problems including Orthogonal Vectors in moderate dimension, sparse cycle and hypercycle detection, Max-$k$-SAT-type problems, first-order model checking and Boolean constraint satisfaction, Klee's measure problem, discrete $k$-center and database joins (the Loomis–Whitney join), as listed in the introductions of the two preprints. The recently proposed $k$-AP Hypothesis (Dudek et al., 2026) was known to imply it.\n\n**Two claimed refutations (preprints, unrefereed).** Nick Fischer (arXiv:2611.03880, submitted 2 November 2026) reports an algebraic algorithm that detects and counts $k$-cliques in $h$-uniform hypergraphs in $O(n^{(1-\varepsilon_h)k})$ time for all $k>h\ge3$ and, via known reductions, also refutes the $k$-AP Hypothesis. The abstract says the result is almost entirely due to AI; its disclosure names ChatGPT Astra 6 and Claude Opus 5.5, with minimal human input. Alman, Li, Pant, Pratt and Williams (arXiv:2611.05082, submitted 3 November 2026) report that for every fixed $k$, the number of $k$-hypercliques in a $(k-1)$-uniform hypergraph can be counted in $O(n^{k-\varepsilon_k})$ time, via uniform arithmetic circuits of that size for the $k$-hyperclique tensor, and state corollaries: Max-$k$-SAT in $2^{(1-\varepsilon)n}\mathrm{poly}(m,n)$ time and $k$-term arithmetic progressions in subsets of $\{0,\dots,n\}$ in $n^{2-\varepsilon}$ time. Their abstract credits the main result to ChatGPT 6 Pro. The two papers appeared a day apart; DARC has not checked either argument. DARC does not read either paper as making a claim about SETH, and the Alman et al. paper explains why the recent claims about the Exponential Time Hypothesis do not by themselves give their Max-$k$-SAT result. The hypothesis stays OPEN here until experts accept a refutation.

# Applications

If a refutation is confirmed, the conditional lower bounds listed above lose their basis, and faster algorithms may exist for those problems, among them Max-k-SAT (the preprints give 2^((1-ε)n)-type running times with a small ε) and detecting arithmetic progressions in integer sets. The savings claimed are small polynomial factors and the constructions are algebraic, so no practical speed-up is implied. If the claims fail, the hypothesis keeps guiding which problems are worth attacking. It has no direct applications either way.

# Resolution criteria

A refutation accepted by experts: peer-reviewed publication or independent verification of an algorithm that detects or counts k-hypercliques in (k-1)-uniform hypergraphs in O(n^(k-ε)) time for a fixed ε>0 and each k (or, for the h-uniform form, k-cliques for each k>h≥3), including a check of the running-time analysis. Confirmation of the hypothesis would need a conditional or unconditional lower bound, which no current technique provides for general word-RAM algorithms. If flaws are found in both preprints, the hypothesis reverts to open with no credible claim.

# Rating rationale

Difficulty 24: two preprints, one by well-known experts in this area, claim an explicit mechanism in established algebraic techniques, so the remaining distance is mostly verification; before them a refutation would have sat in the 70s (no polynomial saving was known above the graph case), and if both fail it returns there. Application value 22: the savings are small and the algorithms algebraic, so the value is in redirecting algorithm design, close to APSP/3SUM (24). Leverage 58: conditional lower bounds in geometry, databases, logic and Max-k-SAT depend on it, fewer than on the APSP/3SUM hypotheses (66) and SETH (81).

# Verification

Route: expert review of both preprints. A reviewer should restate the algorithm or circuit construction, check the claim of a polynomial saving for each fixed k (including how the constant ε depends on k and h), verify the correctness of the counting identity, and confirm the running-time analysis. A cheap sanity check is to implement the smallest case (counting 4-hypercliques in a 3-uniform hypergraph) and compare counts with brute force on random instances; the saving in running time only shows asymptotically. Cross-check the two constructions against each other and against the reductions to Max-k-SAT and k-AP detection. A formal proof-assistant check would strengthen it; none is recorded.
