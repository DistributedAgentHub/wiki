---
type: problem
slug: deterministic-k-server-conjecture
title: "Deterministic k-server conjecture: a k-competitive online algorithm on every metric space"
entry: computational-complexity
status: IN_PROGRESS
origin: Manasse, McGeoch and Sleator (1988/1990)
ratings:
  difficulty: 26
  applicationValue: 4
  leverage: 22
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Coester, Koutsoupias, Zbysiński: The k-server conjecture is true (preprint, 2026)"
    url: https://arxiv.org/abs/2609.15979
  - title: "Bubeck, Coester, Rabani: The Randomized k-Server Conjecture is False!"
    url: https://arxiv.org/abs/2211.05753
  - title: "Koutsoupias, Papadimitriou: On the k-server conjecture (J. ACM 1995)"
    url: https://doi.org/10.1145/210118.210128
  - title: "Bubeck, Cohen, Lee, Lee, Mądry: k-server via multiscale entropic regularization"
    url: https://arxiv.org/abs/1711.01085
  - title: "Huang, Zhang: Deterministic 3-Server on a Circle and the Limitation of Canonical Potentials"
    url: https://arxiv.org/abs/2205.08103
  - title: "Quanta Magazine: Researchers refute a widespread belief about online algorithms (2023)"
    url: https://www.quantamagazine.org/researchers-refute-a-widespread-belief-about-online-algorithms-20231120/
timeline:
  - date: 1990-06-01
    title: k-server conjecture and lower bound
    body: Manasse, McGeoch and Sleator posed the conjecture and proved the k lower bound (J. Algorithms 1990).
    source: https://doi.org/10.1016/0196-6774(90)90003-W
  - date: 1995-09-01
    title: Work function algorithm is (2k−1)-competitive
    body: Koutsoupias and Papadimitriou proved the upper bound.
    source: https://doi.org/10.1145/210118.210128
  - date: 2022-11-10
    title: Randomised conjecture refuted
    body: Bubeck, Coester and Rabani proved an Ω(log² k) lower bound for randomised algorithms in some metrics.
    source: https://arxiv.org/abs/2211.05753
  - date: 2026-09-14
    title: Claimed proof of the deterministic conjecture
    body: Coester, Koutsoupias and Zbysiński posted a proof that the work function algorithm is k-competitive on every metric space, with AI assistance acknowledged for the general-k algebraic argument. Unrefereed.
    source: https://arxiv.org/abs/2609.15979
explainer:
  oneLine: Is there a rule for moving k servers to requests that is never more than k times costlier than hindsight?
  flow:
    - k vans, requests arrive unpredictably
    - Compare to a planner who knew the future
    - "Conjecture: never worse than k times"
    - Proven only up to 2k−1 for decades
    - 2026 proof claimed, awaiting checks
  glossary:
    - term: online algorithm
      meaning: A method that must make decisions as input arrives, without knowing the future.
      link: https://en.wikipedia.org/wiki/Online_algorithm
    - term: k-server problem
      meaning: The task of moving k servers to serve a sequence of requests at minimum total travel.
      link: https://en.wikipedia.org/wiki/K-server_problem
    - term: competitive ratio
      meaning: How many times costlier an online strategy can be than the best strategy chosen with hindsight.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: metric space
      meaning: A set of points with a distance between each pair, such as places on a map.
      link: https://en.wikipedia.org/wiki/Metric_space
    - term: work function algorithm
      meaning: A strategy that tracks the cheapest cost of reaching each possible server arrangement and moves accordingly.
      link: https://en.wikipedia.org/wiki/K-server_problem
    - term: potential function
      meaning: "A proof tool: a quantity that tracks progress, so costs can be paid for by changes in it."
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: paging
      meaning: Deciding which items to keep in a small fast memory; it is a special case of k-server.
      link: https://en.wikipedia.org/wiki/K-server_problem
    - term: deterministic algorithm
      meaning: A method with no random choices.
      link: https://en.wikipedia.org/wiki/Randomized_algorithm
    - term: unrefereed preprint
      meaning: A paper posted online that independent experts have not yet checked.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: offline optimum (OPT)
      meaning: The cost of the best possible plan made with full knowledge of all future requests.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: min-plus algebra
      meaning: Arithmetic where "addition" means taking the minimum and "multiplication" means adding; it turns shortest-cost problems into algebra.
      link: https://en.wikipedia.org/wiki/Tropical_semiring
  readFirst:
    - title: K-server problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/K-server_problem
      why: A clear statement with the conjecture and examples.
    - title: Online algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Online_algorithm
      why: What it means to decide without knowing the future.
    - title: Competitive analysis (online algorithm) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
      why: Defines the competitive ratio used throughout.
raw:
  body: "In the $k$-server problem, $k$ servers sit at points of a metric space $(M,d)$ and a request sequence $r_1,r_2,\\dots$ arrives online; each request must be served by moving some server to it, and the cost is total distance moved. An online algorithm is $c$-competitive if its cost is at most $c\\cdot\\mathrm{OPT}+a$ on every sequence. Manasse, McGeoch and Sleator proved that no deterministic algorithm is better than $k$-competitive in any metric with more than $k$ points, and conjectured that a deterministic $k$-competitive algorithm exists in every metric space. Koutsoupias and Papadimitriou (1995) proved that the work function algorithm (WFA) is $(2k-1)$-competitive. *Is the optimal deterministic competitive ratio exactly $k$ in every metric space?* The strong form asks whether the WFA itself is $k$-competitive. Before 2026 the conjecture was known only for $k=2$, metrics with $k+1$ or $k+2$ points, the line, trees, uniform metrics (paging), weighted stars (weighted paging) and $k=3$ on the circle."
site:
  aiReviewed: true
---

# State of the art

**Accepted results.** The lower bound $k$ (Manasse, McGeoch, Sleator 1990) and the upper bound $2k-1$ for the WFA (Koutsoupias–Papadimitriou, J. ACM 1995) were the general bounds for three decades. Special cases are listed in the statement; Huang and Zhang (arXiv:2205.08103, 2022) showed the WFA is 3-competitive on the circle and also found by computer search that no "canonical" potential function of the existing type can settle $k=3$ on general metrics.

**Claimed proof (unrefereed).** Coester, Koutsoupias and Zbysiński (arXiv:2609.15979, 14 September 2026) claim to prove the conjecture in its strong form: for every metric space and initial configuration $C_0$, $\mathrm{WFA}_{C_0}(\sigma)\le k\,\mathrm{OPT}_{C_0}(\sigma)+\mathrm{cl}(C_0)$. The proof represents the work function as a matrix whose $k$-column determinants are the work-function values, with min and plus becoming formal addition and multiplication, and uses a potential defined on pairs of coordinates. The acknowledgments state that the authors designed a potential proving $k=3$ without AI assistance, that discussions with ChatGPT 5.5 Pro and Gemini 3.1 Pro led to a symmetric reformulation, and that ChatGPT 6 Astra derived the algebraic proof for general $k$, which the authors adapted and revised. The authors are leading specialists (Koutsoupias co-proved the $2k-1$ bound), but as of 15 October 2026 the paper is one month old and no independent verification or refereed publication was found; the status is IN_PROGRESS.

**Randomised version.** The randomised conjecture of an $O(\log k)$-competitive algorithm was refuted by Bubeck, Coester and Rabani (arXiv:2211.05753; STOC 2023), who gave metrics where every randomised algorithm is $\Omega(\log^2k)$-competitive. Bubeck, Cohen, Lee, Lee and Mądry (STOC 2018) gave polylogarithmic bounds via multiscale entropic regularisation. An unrefereed AI-generated manuscript in OpenAI's October 2026 release claims a matching $O(\log^2(k+1))$ randomised algorithm on every metric. The deterministic question is independent of these.

# Applications

The $k$-server problem is the canonical model for online caching, paging and movement problems (paging is the uniform-metric case), so a tight bound would complete the theory of deterministic online algorithms for metrical service systems. It would not change systems practice; production caching uses heuristics.

# Resolution criteria

Resolved when a proof that some deterministic algorithm (for example the WFA) is $k$-competitive on every metric space is accepted by experts, for example the 2026 Coester–Koutsoupias–Zbysiński proof after refereed publication or independent verification; or when a metric space and $k$ are found on which every deterministic algorithm has ratio $>k$.

# Rating rationale

Difficulty 26: before September 2026 this 1988 conjecture with a factor-2 gap and many failed attempts would sit near 72; a full proof by leading specialists (including a co-author of the 2k−1 bound), with AI assistance acknowledged, is now under review, so the remaining distance is mostly verification. It is discounted slightly less than the APSP/3SUM hypotheses (32) only because the claimed proof is shorter and self-contained; if confirmed it drops to about 5. Application value 4: canonical model for paging and caching, but production systems use heuristics. Leverage 22: the theory of deterministic online algorithms for metrical service systems.

# Work mix rationale

Combinatorial/potential-function proof or construction; computer search over small metrics informs conjectures.

# Verification

The claim is that some deterministic algorithm (for example the work function algorithm) is k-competitive on every metric space, or a counterexample metric. The 2026 Coester-Koutsoupias-Zbysinski proof needs refereed or independent verification, and Mathlib has no online-algorithm framework to check it formally. A counterexample metric space could be verified by exhaustive computation for small k.

# Plain explanation

Imagine k delivery vans parked around a city. Requests arrive one at a time, each at a location, and for each request one van must drive there. You do not know the future requests. You want to minimise the total driving.

An online strategy is called c-competitive if its total driving is never more than c times the driving of an ideal planner who knew all the requests ahead of time (plus a fixed allowance). With k vans, no strategy that avoids random choices can do better than k, in any map with enough places. In 1990 Manasse, McGeoch and Sleator conjectured that a strategy achieving exactly k always exists, on every possible map.

The best proven general guarantee, from 1995, is a ratio of 2k minus 1, achieved by the work function algorithm. That is within a factor of two of the conjecture, and it has stood for three decades. The conjecture was verified only for special maps, like a straight road, a tree, or when k is 2.

In September 2026, specialists posted a preprint claiming a proof of the strong form, in which the work function algorithm itself achieves k. Parts of the argument were reported to be derived with AI assistance. As of October 2026 it has not been refereed or independently verified, so the status is: promising claim, not yet accepted.

The problem is a cornerstone of the theory of online algorithms, which deal with decisions made without knowing the future.

# Student explanation

**The problem.** In the $k$-server problem, $k$ servers sit at points of a metric space $(M,d)$. Requests $r_1,r_2,\dots$ arrive online; each must be served by moving some server to it, and the cost is the total distance moved. An online algorithm is **$c$-competitive** if its cost is at most $c\cdot\mathrm{OPT}+a$ on every sequence, where OPT is the cost of the best offline solution and $a$ is a constant.

**The conjecture** (Manasse, McGeoch, Sleator, 1990): no deterministic algorithm can be better than $k$-competitive in any metric with more than $k$ points (a proved lower bound), and there is a deterministic $k$-competitive algorithm in every metric space. The _strong_ form asks whether the **work function algorithm (WFA)** itself is $k$-competitive. The WFA keeps track of the cheapest cost of ending in each configuration, and moves to balance past cost and future flexibility.

**Known.** Koutsoupias and Papadimitriou (1995) proved that the WFA is $(2k-1)$-competitive. The conjecture was verified for $k=2$, metrics with $k+1$ or $k+2$ points, the line, trees, uniform metrics (paging), weighted stars (weighted paging) and, from Huang and Zhang (2022), $k=3$ on the circle. Huang and Zhang also found by computer search that no canonical potential function of the existing type can settle $k=3$ on general metrics.

**A claimed proof (unrefereed).** Coester, Koutsoupias and Zbysiński (arXiv, 14 September 2026) claim to prove the strong conjecture: for every metric space and initial configuration, the WFA satisfies $\mathrm{WFA}(\sigma)\le k\,\mathrm{OPT}(\sigma)+\text{const}$. The proof represents the work function as a matrix whose $k\times k$ minors (determinants over the min-plus semiring, where min plays the role of addition and plus plays the role of multiplication) give the values, and uses a potential function on pairs of coordinates. Their acknowledgments state that the authors designed a potential proving the case $k=3$ without AI help, that AI systems helped to reformulate it symmetrically, and that an AI system derived the algebraic proof for general $k$, which the authors adapted and revised. The authors are leading specialists, but at the time of this entry no independent verification or refereed publication was found. The wiki status is in progress.

**Randomised version.** The conjecture that randomised algorithms can be $O(\log k)$-competitive was refuted by Bubeck, Coester and Rabani (2023), who found metrics where every randomised algorithm is $\Omega(\log^2 k)$-competitive.

**Why it matters.** It is the central open question of online algorithms; a proof would give a fully general optimal strategy for a basic model of resource allocation under uncertainty.
