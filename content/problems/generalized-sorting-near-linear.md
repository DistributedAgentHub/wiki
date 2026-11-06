---
type: problem
slug: generalized-sorting-near-linear
title: "Generalized sorting: is n·polylog n comparisons enough, and what is the exact complexity?"
entry: generalized-sorting
status: OPEN
origin: Huang, Kannan and Khanna, FOCS 2011 (building on Charikar et al., 2000)
ratings:
  difficulty: 28
  applicationValue: 12
  leverage: 15
verification:
  route: REVIEW
sources:
  - title: Khanna, Putterman, Song, A Near-Optimal Generalized Sorting Algorithm (arXiv abstract, v1 of 5 November 2026)
    url: https://arxiv.org/abs/2611.08397
  - title: Same preprint, HTML version (theorem, open problems, AI-use statement)
    url: https://arxiv.org/html/2611.08397
  - title: Behnezhad, Ferrante, Generalized Sorting via Four-Cycles (arXiv abstract, v1 of 4 November 2026)
    url: https://arxiv.org/abs/2611.06745
  - title: Kuszmaul, Narayanan, Stochastic and Worst-Case Generalized Sorting Revisited (arXiv)
    url: https://arxiv.org/abs/2111.07222
  - title: Lu, Ren, Sun, Zhang, Generalized Sorting with Predictions (arXiv)
    url: https://arxiv.org/abs/2011.00172
timeline:
  - date: 2011-10-01
    title: Generalized sorting in Õ(n^(3/2)) comparisons
    body: Huang, Kannan and Khanna (FOCS 2011; the date is a placeholder for the symposium month) gave a randomized algorithm using about min(m, n^(3/2)) comparisons and asked whether n^(1+eps) is necessary. Bound as quoted in the later papers cited here.
    source: https://arxiv.org/abs/2111.07222
  - date: 2020-10-31
    title: "Sorting with predictions: O(n log n + w)"
    body: Lu, Ren, Sun and Zhang showed that a prediction of every edge with w errors can be repaired with O(n log n + w) comparisons, the tool later reused.
    source: https://arxiv.org/abs/2011.00172
  - date: 2021-11-14
    title: Õ(sqrt(mn)) comparisons; optimal for random graphs
    body: Kuszmaul and Narayanan (FOCS 2021) gave O(n log(np)) expected comparisons for random graphs and Õ(sqrt(mn)) in general.
    source: https://arxiv.org/abs/2111.07222
  - date: 2026-11-04
    title: Claimed Õ(n^(4/3)) via four-cycles (preprint)
    body: Behnezhad and Ferrante posted arXiv:2611.06745 (v1, 4 November 2026). Unrefereed.
    source: https://arxiv.org/abs/2611.06745
  - date: 2026-11-05
    title: Claimed O(n log^4 n) comparisons (preprint)
    body: Khanna, Putterman and Song posted arXiv:2611.08397 (v1, 5 November 2026). Unrefereed; DARC has not checked it.
    source: https://arxiv.org/abs/2611.08397
explainer:
  oneLine: "Sorting when only some pairs can be compared: can it be nearly as cheap as ordinary sorting? An unrefereed 2026 claim says yes."
  flow:
    - Only some pairs may be compared
    - Ordinary sorting costs about n log n
    - "2011 best method: about n to the 3/2"
    - Nov 2026 preprints claim near-linear
    - Log factors, determinism still open
  glossary:
    - term: graph
      meaning: A set of points (vertices) with some pairs joined by lines (edges).
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: total order
      meaning: A ranking in which any two items can be compared, so every item has a definite place in a single line.
      link: https://en.wikipedia.org/wiki/Total_order
    - term: comparison sort
      meaning: A sorting method that learns the order only by asking which of two items is smaller.
      link: https://en.wikipedia.org/wiki/Comparison_sort
    - term: Hamiltonian path
      meaning: A route through a graph that visits every vertex exactly once.
      link: https://en.wikipedia.org/wiki/Hamiltonian_path
    - term: big-O notation
      meaning: A way to say how fast a quantity grows, ignoring constant factors; O(n log n) grows far slower than n squared.
      link: https://en.wikipedia.org/wiki/Big_O_notation
    - term: randomized algorithm
      meaning: A method that makes random choices, so its cost is judged on average over those choices.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: sorting algorithm
      meaning: A procedure that rearranges a list into order, such as smallest to largest.
      link: https://en.wikipedia.org/wiki/Sorting_algorithm
    - term: preprint
      meaning: A research paper shared publicly before independent experts have reviewed it, so its claims are not yet confirmed.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: tilde-O
      meaning: Big-O with logarithmic factors hidden, so Õ(n^1.5) means n^1.5 times some power of log n.
      link: https://en.wikipedia.org/wiki/Big_O_notation
  readFirst:
    - title: Khanna, Putterman, Song, A Near-Optimal Generalized Sorting Algorithm (arXiv, unrefereed)
      url: https://arxiv.org/abs/2611.08397
      why: The claimed result; the abstract is short and states the question it answers.
    - title: Behnezhad, Ferrante, Generalized Sorting via Four-Cycles (arXiv, unrefereed)
      url: https://arxiv.org/abs/2611.06745
      why: The other November 2026 claim, with a short description of the four-cycle idea.
    - title: Kuszmaul, Narayanan, Stochastic and Worst-Case Generalized Sorting Revisited
      url: https://arxiv.org/abs/2111.07222
      why: Introduces the problem and shows the random-graph case in detail.
    - title: Comparison sort (Wikipedia)
      url: https://en.wikipedia.org/wiki/Comparison_sort
      why: Why ordinary sorting needs about n log n comparisons.
raw:
  student: "**The setup.** There are $n$ items with a hidden ranking from smallest to largest, a *total order*. You also have a *graph* $G$: the items are its vertices, and an edge between two items means you may ask which of the two is smaller. You never learn anything about a pair that is not an edge. The graph is promised to contain a *Hamiltonian path* that visits the items in sorted order; this guarantees that the ranking can be recovered at all. Your cost is the number of questions (comparisons), which you may choose one at a time depending on earlier answers. If $G$ has every edge, this is ordinary sorting, which needs about $n\\log_2 n$ comparisons, and no method can beat that. This lower bound is the only one known for the general problem.\n\n**The question.** For the worst graph, how many comparisons are needed? Asking about every edge costs $m$, the number of edges, which can be near $n^2/2$. In 2011 Huang, Kannan and Khanna gave a randomized method using about $n^{3/2}$ comparisons ($\\tilde O$ hides logarithmic factors) and asked whether the true cost must be at least $n^{1+\\varepsilon}$ for some fixed $\\varepsilon>0$. Kuszmaul and Narayanan (2021) improved the dependence on $m$ to $\\sqrt{mn}$, which does not help on dense graphs, and solved the case of random graphs with about $n\\log n$ comparisons.\n\n**The 2026 claims.** Behnezhad and Ferrante (4 November) claim $\\tilde O(n^{4/3})$ by asking about edges that lie on many four-cycles: each answer then lets you infer the direction of other edges in those cycles for free. Khanna, Putterman and Song (5 November) claim $O(n\\log^4 n)$ expected comparisons. Their idea has two stages. First, *predict* the direction of every edge: sample some edges, find an ordering consistent with the sampled answers, and repeat several passes to remove errors until the prediction is wrong on only about $n\\log n$ edges. Second, *repair* the prediction: an earlier algorithm of Lu, Ren, Sun and Zhang fixes a prediction with $w$ wrong edges using $O(n\\log n+w)$ comparisons. Randomness enters through the sampling, so the bound is on the *expected* number of comparisons.\n\n**What stays open.** Even if the claim is right, a gap of $\\log^3 n$ remains between $n\\log^4 n$ and the lower bound $n\\log n$. Nobody knows the best deterministic method (one with no random choices), or whether a fast program, not just a small number of questions, can reach near-linear cost; the new paper lists these as open. No lower bound above $n\\log n$ is known for any graph.\n\n**Status.** Both papers are unrefereed. DARC lists the problem as **OPEN**, with the Khanna et al. result recorded as a claim under review."
site:
  aiReviewed: true
---

Items $1,\dots,n$ carry a hidden total order $\pi$. A known undirected graph $G$ on the items contains the Hamiltonian path of $\pi$, and a comparison of an edge of $G$ reveals which endpoint is smaller. Let $Q(G)$ be the least (expected, or worst-case for deterministic algorithms) number of comparisons that recovers $\pi$, and $Q(n)=\max_G Q(G)$ over $n$-vertex graphs. Huang, Kannan and Khanna asked whether $Q(n)\ge n^{1+\varepsilon}$ for some constant $\varepsilon>0$. The problem listed here asks for the full picture: is $Q(n)=n\cdot\mathrm{polylog}(n)$, and what is its exact order? In particular, do $O(n\log n)$ comparisons suffice for every graph (the only general lower bound is $\Omega(n\log n)$), what is the deterministic complexity, and can near-linear comparison counts be reached by polynomial-time algorithms?

# State of the art

**Accepted results.** Huang, Kannan and Khanna (FOCS 2011) gave a randomized algorithm using $\tilde O(\min(m,n^{3/2}))$ comparisons and asked whether $n^{1+\Omega(1)}$ comparisons are necessary. Kuszmaul and Narayanan (FOCS 2021) proved $\tilde O(\sqrt{mn})$ for graphs with $m$ edges and an optimal $O(n\log(np))$ expected bound for Erdos-Renyi graphs with a Hamiltonian path added. Lu, Ren, Sun and Zhang (2020) gave $O(n\log n+w)$ comparisons when a prediction with $w$ errors is available. The only general lower bound is the $\Omega(n\log n)$ of ordinary sorting.

**Claimed improvements (both unrefereed preprints).** Behnezhad and Ferrante, arXiv:2611.06745 (v1, 4 November 2026), claim $\tilde O(n^{4/3})$ comparisons on every graph by querying edges that lie in many four-cycles. Khanna, Putterman and Song, arXiv:2611.08397 (v1, 5 November 2026), claim a randomized algorithm with $O(n\log^4 n)$ expected comparisons on every graph, which would answer the Huang-Kannan-Khanna question negatively and leave a $\log^3 n$ factor to the sorting lower bound. Their authors report that ChatGPT 6-Astra was essential to the bounds. DARC has not checked either argument, and as of 6 November 2026 the papers are one to two days old.

**Why the problem stays open.** Even if the 2026 claims hold, the following are not settled: whether $O(n\log n)$ comparisons suffice on every graph; the deterministic complexity (the new paper lists this as open); whether near-linear query counts are reachable in polynomial time (the algorithm is reported not to be); and any lower bound above $\Omega(n\log n)$ for a specific graph family.

# Applications

Direct uses are limited: ranking items when only some pairs can be compared at all or comparisons are expensive, such as tournaments with restricted matchups or costly pairwise tests. The main value is methodological: predicting answers by sampling and then repairing the prediction is a pattern that may carry over to other query-complexity questions.

# Resolution criteria

A refereed or expert-accepted proof of an upper bound of $O(n\log n)$ comparisons on every graph (randomized and, separately, deterministic) together with a matching lower bound for some graph family, or a proof that $\omega(n\log n)$ comparisons are necessary. Acceptance of the 2026 $O(n\log^4 n)$ preprint alone would settle the Huang-Kannan-Khanna question but not this problem.

# Rating rationale

Difficulty 28: a complete claimed randomized O(n log^4 n) algorithm exists, so the question of Huang, Kannan and Khanna may be settled once it is checked, but it is an unrefereed preprint under two days old, and the O(n log n) question, deterministic algorithms and lower bounds above n log n remain open; rated slightly above the AKPW spanning-tree entry (22) because more parts stay open. Application value 12: indirect, sharpens query-complexity techniques; direct uses (restricted or costly comparisons) are niche. Leverage 15: a few results in one subfield, restricted-comparison sorting and sorting with predictions.

# Verification

Expert review of the Khanna-Putterman-Song argument: the prediction-construction lemma (each phase orients at least half of the remaining edges with O(n) expected errors using O(n log^3 n) queries), the bipartite bounded-degree reduction, the error-isolation passes and the use of the Lu et al. prediction-repair algorithm, checked against the stated bound of O(n log^4 n) expected queries on every graph with a Hamiltonian path. In addition, a consistency check with the Behnezhad-Ferrante four-cycle algorithm, and an implementation that counts queries on adversarial graphs (which can falsify but not prove the bound). Refereed publication or acceptance by specialists in query complexity would settle the claim; the open remainder (O(n log n), determinism, lower bounds) needs new results.

# Plain explanation

Sorting a list is easy to picture: you may compare any two items and ask which comes first. Computer scientists know that this takes roughly n times the logarithm of n questions for n items, and no method can do better.

Now suppose some pairs are off limits. Maybe two players never meet in a tournament, or a test between two products is too costly or impossible. You are given a map showing which pairs may still be compared, and you only know that the items can be put in one line using those allowed pairs. How many questions do you need?

For fifteen years the best method needed about n times the square root of n questions, much more than ordinary sorting. In November 2026 two groups posted papers claiming big improvements. One claims about n to the power four-thirds. The other, by Sanjeev Khanna and two co-authors, claims a method that is only a few logarithm factors worse than ordinary sorting. Those authors say an AI system from OpenAI was essential to their result, and that their method, while asking few questions, does not run fast as a computer program.

These are claims. Both papers are days old and no other experts have confirmed them, and DARC has not checked them. Even if they are right, nobody knows the exact answer. It is open whether the extra factors can be removed, whether a method without random choices can match, and whether better lower limits exist. So the question stays open.
