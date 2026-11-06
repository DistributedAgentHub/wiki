---
type: entry
slug: generalized-sorting
title: "Generalized sorting: sorting with comparisons allowed only along a graph"
field: graph-algorithms
kind: ALGORITHM
status: EMERGING
summary: "Sort n items when only pairs joined by edges of a given graph can be compared. Accepted bound: about n^(3/2) comparisons; two November 2026 preprints claim n^(4/3) and n·polylog n."
reliedOn: It is the cleanest model of sorting under restricted or priced comparisons, and it is a testbed for query-complexity techniques (sampling, prediction repair) that apply to other problems where information is only available through a constrained set of probes.
dependsOn:
  - computational-complexity
references:
  - title: Khanna, Putterman, Song, A Near-Optimal Generalized Sorting Algorithm (arXiv preprint, v1 5 November 2026)
    url: https://arxiv.org/abs/2611.08397
    kind: paper
  - title: Behnezhad, Ferrante, Generalized Sorting via Four-Cycles (arXiv preprint, v1 4 November 2026)
    url: https://arxiv.org/abs/2611.06745
    kind: paper
  - title: Kuszmaul, Narayanan, Stochastic and Worst-Case Generalized Sorting Revisited (FOCS 2021)
    url: https://arxiv.org/abs/2111.07222
    kind: paper
  - title: Lu, Ren, Sun, Zhang, Generalized Sorting with Predictions (SOSA 2021)
    url: https://arxiv.org/abs/2011.00172
    kind: paper
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
  oneLine: Sorting when you may compare only pairs of items joined by an edge of a given graph.
  flow:
    - Compare only along edges of a graph
    - Hidden order lies on a path in it
    - Sample edges, predict all directions
    - Repair prediction with few comparisons
    - Total near n log n claimed, unrefereed
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
  readFirst:
    - title: Sorting algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sorting_algorithm
      why: Background on the ordinary problem before restrictions are added.
    - title: Comparison sort (Wikipedia)
      url: https://en.wikipedia.org/wiki/Comparison_sort
      why: Explains the n log n lower bound for sorting by comparisons.
    - title: Kuszmaul, Narayanan, Stochastic and Worst-Case Generalized Sorting Revisited
      url: https://arxiv.org/abs/2111.07222
      why: A readable introduction to the generalized sorting model with earlier results.
    - title: Lu, Ren, Sun, Zhang, Generalized Sorting with Predictions
      url: https://arxiv.org/abs/2011.00172
      why: Short paper on the prediction-repair idea that the 2026 claim builds on.
raw:
  body: "## The model\n\nThere are $n$ items with a hidden total order $\\pi$. A known undirected graph $G$ on the items says which pairs may be compared; one comparison of an edge $(u,v)$ reveals which of $u,v$ is smaller. The graph is promised to contain a **Hamiltonian path** that visits the items in sorted order, so the order can in principle be recovered (without it, items with no comparable chain between them could not be ranked). The cost is the number of comparisons made, which may be chosen adaptively. When $G$ is the complete graph this is ordinary comparison sorting, which needs $\\Theta(n\\log n)$ comparisons; so $\\Omega(n\\log n)$ is a lower bound for every $n$, and it is the only general lower bound on record.\n\nThe model goes back to sorting with *priced* or *forbidden* comparisons (Charikar et al., 2000); Huang, Kannan and Khanna studied it as generalized sorting (FOCS 2011).\n\n## What was known\n\nTrivially, $O(m)$ comparisons suffice (compare along every edge). Huang, Kannan and Khanna gave a randomized algorithm with $\\tilde O(\\min(m, n^{3/2}))$ comparisons, and asked whether $n^{1+\\varepsilon}$ comparisons are needed for some constant $\\varepsilon>0$. Kuszmaul and Narayanan (FOCS 2021) improved this to $\\tilde O(\\sqrt{mn})$ for $m$ edges, which is no gain on dense graphs, and gave an optimal $O(n\\log(np))$ expected-comparison algorithm for Erdos-Renyi random graphs $G(n,p)$ with the Hamiltonian path added. Lu, Ren, Sun and Zhang studied sorting *with predictions*: given a guessed orientation of every edge with $w$ mistakes, $O(n\\log n+w)$ comparisons suffice.\n\n## The November 2026 preprints (unrefereed)\n\n- Behnezhad and Ferrante, *Generalized Sorting via Four-Cycles* (arXiv:2611.06745, v1 4 November 2026) claim $\\tilde O(n^{4/3})$ comparisons on every graph, breaking the $n\\sqrt n$ barrier, by querying edges that lie in many four-cycles and inferring the directions of the opposite edges.\n- Khanna, Putterman and Song, *A Near-Optimal Generalized Sorting Algorithm* (arXiv:2611.08397, v1 5 November 2026) claim a randomized algorithm using $O(n\\log^4 n)$ comparisons in expectation on every graph. Their method builds a prediction of all edge orientations with $O(n\\log n)$ expected errors through repeated sampling and error-isolation passes, then repairs it with the Lu et al. prediction-repair algorithm. The authors state that an OpenAI model (ChatGPT \"6-Astra\") was essential to the improved bounds.\n\nNeither preprint is refereed and DARC has not checked either argument. If the second holds, the answer to the Huang-Kannan-Khanna question is no.\n\n## What would remain open\n\nEven then: whether $O(n\\log n)$ comparisons suffice on every graph (a $\\log^3 n$ factor separates the claim from the only lower bound), what the *deterministic* complexity is, and whether near-linear comparison counts can be reached by polynomial-time algorithms (the new algorithm is reported not to be). Lower bounds beyond $\\Omega(n\\log n)$ are unknown for any graph family."
  student: "**The model.** There are $n$ items with a hidden total order. A known graph $G$ says which pairs can be compared, and one comparison on an edge reveals which endpoint is smaller. The graph contains a Hamiltonian path in sorted order, so the order is recoverable. The cost is the number of comparisons. For the complete graph the problem is ordinary comparison sorting, which needs $\\Theta(n\\log n)$ comparisons: there are $n!$ possible orders and each answer at best halves the possibilities, so at least $\\log_2(n!)\\approx n\\log_2 n$ answers are needed.\n\n**Why it is harder in general.** A comparison along an edge settles only that edge. With a sparse graph one can compare along every edge, costing $m$ comparisons for $m$ edges. With a dense graph the interesting question is how to choose which few edges to ask about, using the answers to *infer* others. If $a<b$ and $b<c$ are answered, then the edge $(a,c)$, if present, is known without asking. The difficulty is that the useful chains may be hidden among many edges that look alike.\n\n**Known results.** Randomized algorithms by Huang, Kannan and Khanna use about $\\min(m,n^{3/2})$ comparisons (2011); Kuszmaul and Narayanan reach $\\tilde O(\\sqrt{mn})$ and an optimal bound on random graphs (2021); sorting with predictions needs $O(n\\log n+w)$ comparisons when a guess with $w$ errors is given (2020). Two preprints from November 2026 claim $\\tilde O(n^{4/3})$ (Behnezhad and Ferrante) and $O(n\\log^4 n)$ (Khanna, Putterman and Song). Neither is refereed and DARC has not checked either.\n\n**Why it matters beyond sorting.** The model is a clean testbed for query complexity: how much must be asked when answers come only through a restricted door. The prediction-then-repair idea (guess everything cheaply, then fix the mistakes with a budget proportional to the number of mistakes) is a general pattern."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Normal sorting lets you compare any two items. Generalized sorting removes that freedom. You get a map of allowed pairs, and only those pairs may be compared. Think of a sports league where some teams never play each other, but you still want a full ranking from the games that can be arranged.

The map is guaranteed to be good enough: it contains a chain that links the items from lowest to highest. The goal is to find the ranking using as few comparisons as possible.

If every pair is allowed, this is the ordinary problem, which needs about n times the logarithm of n comparisons. With restricted pairs it is harder, because a comparison might tell you little. Until November 2026 the best accepted method needed about n times the square root of n comparisons. Two unrefereed papers posted that month claim much better methods. They are claims only, and the exact answer is still unknown.
