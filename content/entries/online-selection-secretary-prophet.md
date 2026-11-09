---
type: entry
slug: online-selection-secretary-prophet
title: "Online selection: secretary problems and prophet inequalities"
field: optimization
kind: THEORY
status: ACTIVE
summary: Items arrive one at a time and each must be accepted or rejected at once. The secretary problem (random order, no distributions) and prophet inequalities (known or sampled distributions) measure what is lost.
reliedOn: These two models are the standard theory behind online auctions, posted pricing and ad allocation, where a seller commits to each buyer before seeing the next one. Matroid versions model constraints such as spanning forests or linearly independent sets.
dependsOn:
  - computational-complexity
  - online-network-design
references:
  - title: "Lachish: O(log log rank) Competitive-Ratio for the Matroid Secretary Problem (arXiv:1403.7343)"
    url: https://arxiv.org/abs/1403.7343
    kind: paper
  - title: "Feldman, Svensson, Zenklusen: A Simple O(log log(rank))-Competitive Algorithm for the Matroid Secretary Problem (arXiv:1404.4473)"
    url: https://arxiv.org/abs/1404.4473
    kind: paper
  - title: Secretary problem (Wikipedia)
    url: https://en.wikipedia.org/wiki/Secretary_problem
    kind: article
  - title: Prophet inequality (Wikipedia)
    url: https://en.wikipedia.org/wiki/Prophet_inequality
    kind: article
timeline:
  - date: 2014-03-26
    title: O(log log rank) for matroid secretary
    body: Lachish gave an O(log log ρ)-competitive algorithm, improving the earlier O(√log ρ) bound; Feldman, Svensson and Zenklusen followed with a simpler algorithm of the same ratio.
    source: https://arxiv.org/abs/1403.7343
  - date: 2026-11-06
    title: Claimed optimal matroid secretary and single-sample matroid prophet algorithms
    body: Abdi, Banihashem, Hajiaghayi, Huang, Mittal and Singla posted a preprint claiming ratio e for matroid secretary and 2 for single-sample matroid prophet. Unrefereed.
    source: https://arxiv.org/abs/2611.08869
explainer:
  oneLine: Choosing items one at a time, with no take-backs and no peeking at what comes next.
  flow:
    - Items arrive; each choice is final
    - Random order allows a constant guarantee
    - "Rule: accepted set must be independent"
    - Greedy optimum is the offline benchmark
    - "Question: constant ratio on every matroid?"
  glossary:
    - term: secretary problem
      meaning: Candidates arrive in random order and you must hire the best one, deciding on each at once; the optimal rule wins with probability about 1/e.
      link: https://en.wikipedia.org/wiki/Secretary_problem
    - term: prophet inequality
      meaning: A guarantee that a rule seeing items one by one, knowing their distributions, gets a fixed fraction of what someone seeing all items in advance would get.
      link: https://en.wikipedia.org/wiki/Prophet_inequality
    - term: online algorithm
      meaning: A method that must make decisions as input arrives, without knowing the future.
      link: https://en.wikipedia.org/wiki/Online_algorithm
    - term: competitive ratio
      meaning: The worst-case factor by which an online algorithm falls short of the best offline answer.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: matroid
      meaning: A set system, modelled on linear independence, in which every independent set can be grown to the same maximum size.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: linear independence
      meaning: A set of vectors is independent if none of them can be written as a combination of the others.
      link: https://en.wikipedia.org/wiki/Linear_independence
    - term: graphic matroid
      meaning: The matroid whose independent sets are the forests, the edge sets with no cycle, of a graph.
      link: https://en.wikipedia.org/wiki/Graphic_matroid
    - term: greedy algorithm
      meaning: A method that builds an answer by repeatedly taking the best choice that still fits the rules.
      link: https://en.wikipedia.org/wiki/Greedy_algorithm
    - term: independence oracle
      meaning: A black box that answers whether a given set is independent, so an algorithm never needs the matroid written out.
      link: https://en.wikipedia.org/wiki/Matroid_oracle
    - term: expected value
      meaning: The long-run average result of a random process; here, the average total value an algorithm collects.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: competitive analysis and online design
      meaning: DARC's entry on competitive ratios for online network design, a neighbouring online problem.
      link: /research/online-network-design
  readFirst:
    - title: Secretary problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Secretary_problem
      why: The classical puzzle and the 1/e rule, with the proof idea.
    - title: Prophet inequality (Wikipedia)
      url: https://en.wikipedia.org/wiki/Prophet_inequality
      why: Short statement of the half-of-the-maximum result and its variants, including matroids.
    - title: Matroid (Wikipedia)
      url: https://en.wikipedia.org/wiki/Matroid
      why: Defines the independence structure used in the matroid versions.
    - title: Optimal stopping (Wikipedia)
      url: https://en.wikipedia.org/wiki/Optimal_stopping
      why: The wider family of decide-now problems that the secretary problem belongs to.
raw:
  body: "## The online selection model\n\nIn an **online selection** problem, items arrive one at a time and each must be accepted or rejected immediately and irrevocably. Accepted items must satisfy a feasibility constraint, and the goal is to collect as much value as possible. An algorithm is judged by its **competitive ratio**: the worst-case ratio between the best offline choice (made with the whole input in view) and what the online algorithm obtains in expectation.\n\n## The secretary problem\n\nIn the classical **secretary problem** $n$ candidates arrive in a uniformly random order and the goal is to hire the best one. Rejecting the first $n/e$ candidates and then accepting the first one better than all earlier ones hires the best with probability about $1/e$, and no rule does better. The adversary chooses the values, but the order is random, which is what makes a constant guarantee possible.\n\nThe **matroid secretary problem** replaces \"hire one\" by \"accept a set that is independent in a matroid\", for example a set of linearly independent vectors or a forest in a graph. Babaioff, Immorlica and Kleinberg (SODA 2007) conjectured that an $O(1)$-competitive algorithm exists for every matroid. Their paper gave an $O(\\log \\rho)$ algorithm for rank $\\rho$; Lachish (2014) and Feldman, Svensson and Zenklusen (2014) reached $O(\\log\\log\\rho)$. The **strong form** asks for an *ordinal* algorithm (it only compares values, never reads them) that accepts each element of a fixed optimal basis with probability at least $1/e$; this would give ratio $e$, which is optimal already for rank one.\n\n## Prophet inequalities\n\nIn a **prophet inequality** the values are independent random variables with known distributions and arrive in adversarial order. The classical result (Krengel and Sucheston, with the tight form credited to Garling) is that a single threshold gets at least half of the expected maximum, which a \"prophet\" who sees all values would collect. **Single-sample** versions replace the known distributions by one sample from each, and are closely tied to secretary algorithms: a good single-sample algorithm can be turned into a secretary algorithm by a black-box reduction.\n\n## Current state\n\nBetween September and November 2026 several unrefereed preprints (Singla; Huang; Abdi, Banihashem, Hajiaghayi, Mittal and coauthors; Bérczi and coauthors for linear matroids) have claimed to settle the conjecture. These claims are being checked; see the problem page."
  student: "**The setting.** Items arrive one at a time. Each must be accepted or rejected immediately and forever, and the accepted items must obey a rule. We compare the algorithm against the best choice made by someone who saw all items. The **competitive ratio** is the worst case, over inputs, of (offline best) divided by (what the algorithm gets on average). A ratio of 2 means we always get at least half.\n\n**Secretary problem.** There are $n$ candidates in uniformly random order, and we want the best one. Rule: reject the first $n/e$, where $e\\approx2.718$, then accept the first candidate who beats all earlier ones. This picks the overall best with probability about $1/e\\approx0.37$, and no rule does better. You can derive this with first-year calculus: if the best candidate sits at position $t\\cdot n$ with $t>1/e$, you succeed whenever the best of the first $tn$ arrived among the first $n/e$, which has probability $\\frac{1/e}{t}$. Integrating over $t$ from $1/e$ to $1$ gives $\\frac1e\\int_{1/e}^{1}\\frac{dt}{t}=\\frac1e$. The key assumption is that the *order is random*; the values may be chosen by an adversary.\n\n**Matroids.** A matroid is a set system that captures the idea of independence in linear algebra: a set of vectors is independent if none is a combination of the others, and every independent set can be extended to a maximum one (a basis) of the same size. Forests in a graph also form a matroid. In the **matroid secretary problem** we may keep only independent sets. The classical problem is the case where at most one item may be kept. A greedy algorithm, which sorts by weight and keeps what stays independent, finds the best independent set offline. Its output is the **canonical optimum**. Babaioff, Immorlica and Kleinberg (SODA 2007) conjectured that an algorithm with *constant* competitive ratio exists for every matroid. For rank $\\rho$ the best proven bound until 2026 was $O(\\log\\log\\rho)$. The **strong** conjecture asks for ratio $e$: an algorithm that accepts each element of the canonical optimum with probability at least $1/e$, using only comparisons of weights (an *ordinal* algorithm).\n\n**Prophet inequalities.** Now each item's value is a random variable with a known distribution, and the order is chosen by an adversary. A single threshold, set at half the expected maximum, gets half the expected maximum, which is the best any rule can guarantee. In the **single-sample** version the algorithm does not know the distributions but sees one sample from each. These are linked to secretary algorithms by reductions.\n\n**State of the art.** In September to November 2026 several unrefereed preprints claimed a constant ratio, ending with a six-author paper claiming ratio $e$ for secretary and $2$ for single-sample prophet. None has been refereed yet. See the problem page."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine hiring for one job. Candidates walk in one by one, and after each interview you must say yes or no on the spot. A no is final, and so is a yes. You do not know who is coming later. How well can you do?

There is a surprising answer. If the candidates come in random order, you can follow a simple recipe: turn down the first third or so, then hire the first person who beats everyone you have seen. This picks the very best candidate about one time in three, no matter how many people apply. This puzzle is called the secretary problem.

A second puzzle is the prophet problem. Here a seller meets buyers one at a time and knows roughly how much each might pay. A single well-chosen price gets at least half of what a fortune teller, who sees every offer in advance, would get.

Researchers study versions with rules about which choices can go together, such as "no two chosen items may be redundant". These are used to think about online auctions and ad sales, where a seller must commit to each buyer before meeting the next. The maths asks how much is lost compared with seeing everything first.

The analogy breaks in one place: real hiring rarely has random order or a fixed list of rules, while the maths needs both.
