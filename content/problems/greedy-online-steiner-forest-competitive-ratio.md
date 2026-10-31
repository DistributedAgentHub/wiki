---
type: problem
slug: greedy-online-steiner-forest-competitive-ratio
title: Competitive ratio of the greedy algorithm for online Steiner forest
entry: online-network-design
status: IN_PROGRESS
origin: Awerbuch, Azar and Bartal, SODA 1996
ratings:
  difficulty: 50
  applicationValue: 30
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: "Gholami, Hajiaghayi, Hajiaghayi, Jabbarzade: The Tight Competitive Ratio of Greedy for Online Steiner Forest (arXiv preprint, 2026)"
    url: https://arxiv.org/abs/2610.40569
  - title: "Awerbuch, Azar, Bartal: On-line Generalized Steiner Problem"
    url: https://www.cs.jhu.edu/~baruch/RESEARCH/Research_areas/Algorithmic_Theory/2004%20Theoretical_Comp_Sc/gst.pdf
  - title: "Bamas, Drygala, Maggiori: An Improved Analysis of Greedy for Online Steiner Forest"
    url: https://arxiv.org/abs/2111.10086
links:
  - to: deterministic-k-server-conjecture
    kind: RELATED
    note: Both ask for the exact worst-case competitive ratio of a natural online algorithm, and both have a claimed 2026 resolution that is not yet refereed.
timeline:
  - date: 1996-01-01
    title: Greedy is O(log²) competitive; O(log) conjectured
    body: Awerbuch, Azar and Bartal proved that the Min-Cost (greedy) algorithm for the online generalized Steiner problem is O(log² n)-competitive and conjectured O(log n); the date is the SODA 1996 year, month and day not given.
    source: https://www.cs.jhu.edu/~baruch/RESEARCH/Research_areas/Algorithmic_Theory/2004%20Theoretical_Comp_Sc/gst.pdf
  - date: 2021-11-19
    title: O(log k log log k) on a wide class of instances
    body: Bamas, Drygala and Maggiori showed that greedy is O(log k log log k)-competitive on a wide class of instances containing all previously published examples (SODA 2022).
    source: https://arxiv.org/abs/2111.10086
  - date: 2026-10-29
    title: Claimed tight bound Θ(log k log log k)
    body: Gholami, I. Hajiaghayi, M. Hajiaghayi and Jabbarzade posted a preprint claiming matching upper and lower bounds for greedy, which would refute the O(log k) conjecture. Unrefereed.
    source: https://arxiv.org/abs/2610.40569
explainer:
  oneLine: How badly can the simple cheapest-connection rule do when connection requests arrive one at a time? A new preprint claims an answer.
  flow:
    - Pairs arrive; cables stay bought
    - Greedy buys the cheapest new path
    - "1996: ratio at most log squared"
    - "2022: log times log log on restricted cases"
    - "2026 preprint: exactly that, unverified"
  glossary:
    - term: online algorithm
      meaning: A method that must make permanent decisions as input arrives, without seeing the future requests.
      link: https://en.wikipedia.org/wiki/Online_algorithm
    - term: competitive ratio
      meaning: The worst-case factor by which an online algorithm's cost exceeds that of the best choice made with full hindsight.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: Steiner forest
      meaning: Like a Steiner tree, but only given pairs of nodes must be connected, so the result may be several separate trees.
      link: https://en.wikipedia.org/wiki/Steiner_tree_problem
    - term: greedy algorithm
      meaning: A method that always takes the locally cheapest step and never revisits earlier choices.
      link: https://en.wikipedia.org/wiki/Greedy_algorithm
    - term: shortest path
      meaning: The route between two nodes of a weighted graph whose edge costs add up to the least.
      link: https://en.wikipedia.org/wiki/Shortest_path_problem
    - term: conjecture
      meaning: A statement that experts believe is true but have not proved.
      link: https://en.wikipedia.org/wiki/Conjecture
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
      why: Background on the tree version of the problem.
    - title: Gholami et al., The Tight Competitive Ratio of Greedy for Online Steiner Forest (arXiv)
      url: https://arxiv.org/abs/2610.40569
      why: The unrefereed October 2026 paper; the abstract states the claim.
    - title: Bamas, Drygala, Maggiori, An Improved Analysis of Greedy for Online Steiner Forest (arXiv)
      url: https://arxiv.org/abs/2111.10086
      why: The 2022 partial result that the new claim extends.
raw:
  body: "In online Steiner forest, a weighted graph $G$ is given and terminal pairs $(s_1,t_1),\\dots,(s_k,t_k)$ arrive one at a time; each pair must be connected by purchased edges before the next arrives, and purchased edges cannot be removed. The *greedy* algorithm connects each pair by a shortest path in the graph where purchased edges cost zero. What is the worst-case competitive ratio of greedy as a function of $k$? Awerbuch, Azar and Bartal proved $O(\\log^2 k)$ and conjectured $O(\\log k)$; every online algorithm has ratio $\\Omega(\\log k)$, and a non-greedy algorithm of Berman and Coulston achieves $O(\\log k)$."
  student: "**The question.** In online Steiner forest, a weighted graph is given and pairs $(s_i,t_i)$, $i=1,\\dots,k$, arrive one at a time; each pair must be connected by bought edges before the next arrives, and bought edges stay bought. The *greedy* algorithm buys a shortest path between $s_i$ and $t_i$ after setting the cost of already-bought edges to zero. An algorithm is $c$-competitive if its cost is at most $c\\cdot\\mathrm{OPT}$ on every sequence, where $\\mathrm{OPT}$ is the cheapest edge set serving all pairs, computed with full hindsight. What is greedy's best possible $c$ as a function of $k$?\n\n**Known before October 2026.**\n\n- Every online algorithm has $c=\\Omega(\\log k)$ (Imase and Waxman, 1991, for online Steiner tree, which is a special case).\n- Greedy has $c=O(\\log^2 k)$ (Awerbuch, Azar and Bartal, 1996), who conjectured $O(\\log k)$.\n- A different algorithm of Berman and Coulston (1997) has $c=O(\\log k)$, so the best possible is $\\Theta(\\log k)$.\n- Greedy has $O(\\log k\\log\\log k)$ on a large restricted class of instances (Bamas, Drygala and Maggiori, SODA 2022).\n\n**The claim.** Gholami, I. Hajiaghayi, M. Hajiaghayi and Jabbarzade (arXiv:2610.40569, 29 October 2026) report two theorems: an upper bound of the form $C\\cdot\\mathrm{OPT}\\cdot\\log(2k)\\log\\log(4k)$ on every instance, and an infinite family of instances where greedy costs at least $c\\cdot\\mathrm{OPT}\\cdot\\log k\\log\\log k$. Together, greedy's ratio would be exactly $\\Theta(\\log k\\log\\log k)$. That would refute the conjecture and leave a $\\Theta(\\log\\log k)$ gap to the best online algorithm.\n\n**Why it was hard.** For trees, a newly arriving node only has to join one growing component, and the analysis is clean. For forests, greedy may keep many separate components alive, and a later pair can force them to merge in costly ways. The question stayed open from 1996 until at least 2022, when only the restricted-class result appeared.\n\n**What is unknown.** Whether the two theorems are correct. As of 31 October 2026 the paper is two days old, unrefereed, and DARC found no independent verification. The problem stays marked in progress."
site:
  aiReviewed: true
---

# State of the art

**Accepted results.** Greedy is $O(\log^2 k)$-competitive (Awerbuch, Azar, Bartal, SODA 1996). No online algorithm beats $\Omega(\log k)$, which follows from the Imase–Waxman lower bound for online Steiner tree, and Berman and Coulston give an $O(\log k)$-competitive non-greedy algorithm. Bamas, Drygala and Maggiori (SODA 2022) showed that greedy is $O(\log k\cdot\log\log k)$-competitive on a wide class of instances containing all previously published hard examples.

**Claimed resolution (unrefereed).** Gholami, I. Hajiaghayi, M. Hajiaghayi and Jabbarzade (arXiv:2610.40569, 29 October 2026) report that greedy's cost is at most $C\cdot\mathrm{OPT}\cdot\log(2k)\log\log(4k)$ on every instance, and that an infinite family of instances forces cost at least $c\cdot\mathrm{OPT}\cdot\log k\log\log k$. That would make the ratio $\Theta(\log k\log\log k)$, refute the $O(\log k)$ conjecture, and leave a $\Theta(\log\log k)$ gap between greedy and the best online algorithm. As of 31 October 2026 the paper is two days old and no independent verification or refereed publication was found, so the status is IN_PROGRESS.

# Applications

Mostly theoretical: it fixes how much a simple, memoryless shortest-path rule loses against the more elaborate Berman–Coulston scheme in online network building. It does not change practice, since the best order $\Theta(\log k)$ was already known.

# Resolution criteria

A proof of the exact worst-case competitive ratio of greedy for online Steiner forest, accepted by experts, for example the 2026 Gholami–Hajiaghayi–Hajiaghayi–Jabbarzade upper and lower bounds after refereed publication or independent verification; or an error found in either bound.

# Rating rationale

Difficulty: a claimed complete answer exists from specialists and only verification remains, but the question resisted the community from 1996 to 2022. Application value is low because the best order was already achieved by another algorithm. Leverage is confined to online network design.

# Verification

Claim: greedy's competitive ratio on online Steiner forest is Θ(log k log log k). A reviewer checks the upper bound proof (Theorem 1 of arXiv:2610.40569) for all graphs and request sequences, and the lower-bound construction (Theorem 2) by computing greedy's cost and an explicit offline forest on the instance family for several values of k, confirming the ratio grows like log k log log k and not like log k. Acceptance is by independent expert reading or refereed publication.

# Plain explanation

A network is built in a hurry: requests to link two places arrive one by one, and every cable laid stays laid. A simple rule says to lay the cheapest cable that completes each new request, reusing what is already there.

How much worse than a perfect planner, who knew all the requests ahead of time, can this simple rule get? In 1996 three researchers showed it is never worse than a certain growing factor, and guessed that the true factor is smaller. Another, more complicated method was later found that achieves that smaller factor, but nobody could say whether the simple rule did too.

On 29 October 2026 four researchers posted a preprint claiming the guess was wrong: they say the simple rule really is worse, by a small extra factor that grows very slowly. This has not been checked by independent experts or published in a journal, so it is a claim, not a result.

The question is mostly of theoretical interest. It does not change what engineers should do, since the better method was already known. What it would settle, if correct, is exactly how much a simple rule loses against a clever one.
