---
type: entry
slug: online-network-design
title: "Online network design: online Steiner tree and Steiner forest"
field: optimization
kind: THEORY
status: ACTIVE
summary: Terminals or terminal pairs arrive one at a time and bought edges stay bought. The best ratio is Θ(log k); the exact ratio of the natural greedy algorithm is the live question.
reliedOn: Competitive analysis of online network design is the standard model for incremental network building, and the greedy shortest-path rule is the baseline that more elaborate online Steiner algorithms are compared with.
dependsOn:
  - computational-complexity
references:
  - title: "Awerbuch, Azar, Bartal: On-line Generalized Steiner Problem (SODA 1996; journal version, Theoretical Computer Science 2004)"
    url: https://www.cs.jhu.edu/~baruch/RESEARCH/Research_areas/Algorithmic_Theory/2004%20Theoretical_Comp_Sc/gst.pdf
    kind: paper
  - title: "Bamas, Drygala, Maggiori: An Improved Analysis of Greedy for Online Steiner Forest (SODA 2022)"
    url: https://arxiv.org/abs/2111.10086
    kind: paper
  - title: "Gholami, Hajiaghayi, Hajiaghayi, Jabbarzade: The Tight Competitive Ratio of Greedy for Online Steiner Forest (arXiv preprint, 2026)"
    url: https://arxiv.org/abs/2610.40569
    kind: paper
timeline:
  - date: 2026-10-29
    title: Claimed tight bound for greedy online Steiner forest
    body: Gholami, I. Hajiaghayi, M. Hajiaghayi and Jabbarzade posted a preprint claiming that greedy is Θ(log k log log k)-competitive, refuting the O(log k) conjecture of Awerbuch, Azar and Bartal. Unrefereed.
    source: https://arxiv.org/abs/2610.40569
explainer:
  oneLine: Building a network edge by edge as requests arrive, with no way to undo purchases and no knowledge of what comes next.
  flow:
    - Requests arrive one by one
    - Bought edges can never be undone
    - "Greedy: buy the cheapest new connection"
    - Compare cost with hindsight optimum
    - "Claimed: greedy loses an extra log log factor"
  glossary:
    - term: online algorithm
      meaning: A method that must make permanent decisions as input arrives, without seeing the future requests.
      link: https://en.wikipedia.org/wiki/Online_algorithm
    - term: competitive ratio
      meaning: The worst-case factor by which an online algorithm's cost exceeds that of the best choice made with full hindsight.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: Steiner tree
      meaning: A cheapest set of edges in a weighted graph that connects a chosen set of terminal nodes, possibly through extra nodes.
      link: https://en.wikipedia.org/wiki/Steiner_tree_problem
    - term: Steiner forest
      meaning: Like a Steiner tree, but only given pairs of nodes must be connected, so the result may be several separate trees.
      link: https://en.wikipedia.org/wiki/Steiner_tree_problem
    - term: greedy algorithm
      meaning: A method that always takes the locally cheapest step and never revisits earlier choices.
      link: https://en.wikipedia.org/wiki/Greedy_algorithm
    - term: shortest path
      meaning: The route between two nodes of a weighted graph whose edge costs add up to the least.
      link: https://en.wikipedia.org/wiki/Shortest_path_problem
    - term: weighted graph
      meaning: Nodes joined by edges, where each edge carries a cost such as a length or price.
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: logarithm
      meaning: The power to which a base must be raised to give a number; it grows very slowly, so $\log k$ is small even for huge $k$.
      link: https://en.wikipedia.org/wiki/Logarithm
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Θ (theta) notation
      meaning: Says a quantity grows at the same rate as a given function, bounded above and below up to constant factors.
      link: https://en.wikipedia.org/wiki/Big_O_notation
  readFirst:
    - title: Competitive analysis of online algorithms (Wikipedia)
      url: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
      why: Defines competitive ratio with simple examples.
    - title: Steiner tree problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Steiner_tree_problem
      why: Shows what a Steiner tree is and why extra nodes help.
    - title: Gholami et al., The Tight Competitive Ratio of Greedy for Online Steiner Forest (arXiv)
      url: https://arxiv.org/abs/2610.40569
      why: The unrefereed October 2026 paper; the abstract states the claim.
raw:
  body: "## Online Steiner problems\n\nIn the **online Steiner tree** problem a weighted graph is known in advance and terminals arrive one at a time; after each arrival the algorithm must have bought edges connecting the new terminal to the earlier ones, and bought edges are never returned. In the **online Steiner forest** problem (also called the online generalized Steiner problem) the requests are *pairs* of vertices $(s_i,t_i)$ and each pair must be connected before the next arrives, so the purchased edges may form many separate components. An algorithm is $c$-competitive if its cost is at most $c$ times the cost of the cheapest edge set connecting all $k$ requested pairs, chosen with hindsight.\n\n## Greedy\n\nThe natural **greedy** algorithm connects each new pair by a shortest path in the graph where already-purchased edges cost zero, and pays only for the new edges. For Steiner *trees* the analysis of Imase and Waxman (1991) shows that this is $O(\\log k)$-competitive and that no online algorithm does better than $\\Omega(\\log k)$; that lower bound carries over to forests (as recalled by Awerbuch, Azar and Bartal). The tree analysis does not extend to forests, because greedy can keep many components alive at once.\n\n## What is known for forests\n\nAwerbuch, Azar and Bartal (first presented at SODA 1996; journal version in *Theoretical Computer Science*, 2004) proved that greedy is $O(\\log^2 k)$-competitive (stated there in terms of the number of vertices $n$) and observed that a key lemma of their analysis is tight up to a $\\log\\log$ factor. Berman and Coulston (1997) then gave a different, non-greedy online algorithm that is $O(\\log k)$-competitive, which is optimal in order. The Awerbuch–Azar–Bartal paper conjectures that greedy itself is $O(\\log k)$-competitive.\n\nBamas, Drygala and Maggiori (SODA 2022) improved the analysis of greedy to $O(\\log k\\cdot\\log\\log k)$ on a wide class of instances that contains all the hard examples published until then, leaving the general case open.\n\n## The October 2026 claim\n\nGholami, I. Hajiaghayi, M. Hajiaghayi and Jabbarzade (arXiv:2610.40569, 29 October 2026, unrefereed) claim that greedy's worst-case competitive ratio on online Steiner forest is $\\Theta(\\log k\\cdot\\log\\log k)$: an upper bound of $O(\\log k\\cdot\\log\\log k)$ for every instance, and a matching infinite family of instances on which greedy pays $\\Omega(\\log k\\cdot\\log\\log k)$ times the optimum. If correct, this refutes the $O(\\log k)$ conjecture and shows a $\\Theta(\\log\\log k)$ gap between greedy and the best online algorithm. It is a statement about one specific algorithm; the best achievable ratio stays $\\Theta(\\log k)$.\n\n## Why it matters\n\nGreedy is the algorithm one would actually run, since it needs no randomness or preprocessing, so its exact worst case says how much is lost by not using the more elaborate Berman–Coulston scheme. The problem also sits with the other competitive-analysis questions in the library, such as the $k$-server conjecture, where the best deterministic ratio on every metric is likewise at stake.\n"
  student: "**The setting.** A weighted graph (nodes joined by edges with costs) is known in advance. Requests then arrive one at a time. In the **online Steiner tree** problem each request is a node, and after it arrives the algorithm must have bought edges linking it to all earlier requests. In **online Steiner forest** each request is a *pair* of nodes $(s_i,t_i)$ that must be connected to each other, but different pairs need not be connected to each other, so the bought edges can form several separate pieces. Edges, once bought, stay bought.\n\n**Online algorithms and competitive ratio.** An *online algorithm* must decide with only part of the input. We measure it against $\\mathrm{OPT}$, the cost of the cheapest edge set that serves all $k$ requests, chosen by someone who saw the whole sequence. The algorithm is **$c$-competitive** if on every request sequence its cost is at most $c\\cdot\\mathrm{OPT}$. Here $c$ may depend on $k$. The adversary picks the worst sequence, so this is a worst-case guarantee.\n\n**Greedy.** When a pair arrives, set the cost of every already bought edge to zero and buy a shortest path (the cheapest route, as found by Dijkstra's algorithm) between $s_i$ and $t_i$. It uses no randomness and no precomputation. For trees, Imase and Waxman (1991) showed greedy is $O(\\log k)$-competitive, and that every online algorithm has ratio at least $\\Omega(\\log k)$. Here $\\log k$ grows very slowly: for a million requests it is about 20.\n\n**What was known for forests.** Awerbuch, Azar and Bartal (1996) proved greedy is $O(\\log^2 k)$-competitive and conjectured the truth was $O(\\log k)$. Berman and Coulston (1997) gave a *different*, non-greedy algorithm that is $O(\\log k)$-competitive, so the best achievable ratio is $\\Theta(\\log k)$. Bamas, Drygala and Maggiori (SODA 2022) showed greedy achieves $O(\\log k\\cdot\\log\\log k)$ on a wide but restricted class of instances.\n\n**The October 2026 claim.** Gholami, I. Hajiaghayi, M. Hajiaghayi and Jabbarzade (arXiv:2610.40569, 29 October 2026) claim that on *every* instance greedy costs at most about $\\mathrm{OPT}\\cdot\\log k\\cdot\\log\\log k$, and that infinitely many instances force greedy to pay at least about that much. If correct, the greedy ratio is exactly $\\Theta(\\log k\\log\\log k)$, which refutes the $O(\\log k)$ conjecture.\n\n**Why a $\\log\\log k$ factor matters.** For $k=10^6$, $\\log_2 k\\approx 20$ and $\\log_2\\log_2 k\\approx 4$, so the extra factor is a small number in practice. Its importance is conceptual: it would say the simplest rule is provably, by a growing amount, worse than the cleverer one. The claim concerns only greedy, and the best possible ratio remains $\\Theta(\\log k)$.\n\n**Status.** This is a two-day-old preprint, not refereed, and DARC has seen no independent verification. Treat it as a claim."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine a town laying cables to connect houses, but the houses are announced one at a time. Each time a new request arrives, the town must connect it right away, and cables already laid cannot be dug up. The town does not know which houses will be announced later, so an early cheap choice can turn out to be wasteful once the rest of the requests show up.

Researchers judge such plans by comparing them with a planner who knew every request in advance. If the online plan never costs more than, say, five times the perfect hindsight plan, it is called "five-competitive". The question is how that factor grows as the number of requests grows.

A simple rule is to always lay the cheapest new cable that finishes the job, reusing cables already in the ground. That rule is easy to run, and people have long wanted to know exactly how bad it can get. Another, more elaborate method is known to do about as well as anything can. In October 2026 a preprint claimed the simple rule is slightly worse than that, by a small extra factor. Nobody independent has confirmed this yet.

The analogy breaks in one place: the maths counts only the worst possible order of requests, not a typical one.
