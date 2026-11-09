---
type: problem
slug: matroid-secretary-conjecture
title: "The matroid secretary conjecture: constant-competitive online selection on every matroid"
entry: online-selection-secretary-prophet
status: OPEN
origin: Babaioff, Immorlica and Kleinberg, SODA 2007
ratings:
  difficulty: 22
  applicationValue: 10
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Abdi, Banihashem, Hajiaghayi, Huang, Mittal, Singla: As Easy as Rank One: Optimal Algorithms for Matroid Secretary and Single-Sample Matroid Prophet (arXiv:2611.08869, preprint)"
    url: https://arxiv.org/abs/2611.08869
  - title: "Singla: The Matroid Secretary Conjecture is True (arXiv:2609.14555, preprint)"
    url: https://arxiv.org/abs/2609.14555
  - title: "Abdi, Banihashem, Hajiaghayi, Mittal: On the Strong Matroid Secretary Conjecture and Beyond (arXiv:2609.19118, preprint)"
    url: https://arxiv.org/abs/2609.19118
  - title: "Huang: Settling the Matroid Secretary Problem (arXiv:2609.30421, preprint)"
    url: https://arxiv.org/abs/2609.30421
  - title: "Bérczi, Dughmi, Livanos, Soto, Verdugo: The Strong Secretary Conjecture is True for Linear Matroids (arXiv:2609.20797, preprint)"
    url: https://arxiv.org/abs/2609.20797
  - title: "Lachish: O(log log rank) Competitive-Ratio for the Matroid Secretary Problem (arXiv:1403.7343)"
    url: https://arxiv.org/abs/1403.7343
  - title: "Feldman, Svensson, Zenklusen: A Simple O(log log(rank))-Competitive Algorithm for the Matroid Secretary Problem (arXiv:1404.4473)"
    url: https://arxiv.org/abs/1404.4473
links:
  - to: greedy-online-steiner-forest-competitive-ratio
    kind: RELATED
    note: Both are worst-case questions about irrevocable online decisions under a combinatorial constraint, settled by competitive-ratio arguments.
timeline:
  - date: 2007-01-01
    title: The conjecture is posed
    body: Babaioff, Immorlica and Kleinberg introduced the matroid secretary problem at SODA 2007 and conjectured an O(1)-competitive algorithm; they gave O(log ρ). Only the year is known here.
    source: https://arxiv.org/abs/1403.7343
  - date: 2014-03-26
    title: O(log log rank)
    body: Lachish gave an O(log log ρ)-competitive algorithm; Feldman, Svensson and Zenklusen gave a simpler one with the same ratio on 17 April 2014.
    source: https://arxiv.org/abs/1403.7343
  - date: 2026-09-13
    title: Claimed constant ratio
    body: Singla posted a preprint claiming each element of the optimum is accepted with probability at least 1/4. Unrefereed.
    source: https://arxiv.org/abs/2609.14555
  - date: 2026-09-17
    title: Strong form claimed for linear matroids
    body: Bérczi, Dughmi, Livanos, Soto and Verdugo posted a preprint claiming the strong conjecture for linear matroids. Unrefereed.
    source: https://arxiv.org/abs/2609.20797
  - date: 2026-09-24
    title: Claimed e-competitive ordinal algorithm
    body: Huang posted a preprint claiming to settle matroid secretary with an e-probability-competitive ordinal algorithm. Unrefereed.
    source: https://arxiv.org/abs/2609.30421
  - date: 2026-11-06
    title: Claimed strong form with ratio e and 2-competitive single-sample prophet
    body: Abdi, Banihashem, Hajiaghayi, Huang, Mittal and Singla posted a preprint claiming the strong conjecture for all matroids and an optimal single-sample matroid prophet algorithm. Unrefereed.
    source: https://arxiv.org/abs/2611.08869
explainer:
  oneLine: Is there a hiring rule that works within a fixed factor of optimal on every kind of independence constraint? Preprints now claim yes.
  flow:
    - Items arrive in random order
    - Accepted set must be independent
    - "Offline benchmark: greedy optimum"
    - "Goal: accept each optimum element w.p. 1/e"
    - 2026 preprints claim this is achievable
  glossary:
    - term: matroid
      meaning: A set system, modelled on linear independence, in which every independent set can be grown to the same maximum size.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: matroid secretary problem
      meaning: Items with weights arrive in random order; accept or reject each at once so that the accepted set is independent in a matroid and heavy.
      link: https://en.wikipedia.org/wiki/Secretary_problem
    - term: competitive ratio
      meaning: The worst-case factor by which an online algorithm falls short of the best offline answer.
      link: https://en.wikipedia.org/wiki/Competitive_analysis_(online_algorithm)
    - term: rank (of a matroid)
      meaning: The size of its largest independent set, for example the number of vectors in a basis of a vector space.
      link: https://en.wikipedia.org/wiki/Matroid
    - term: ordinal algorithm
      meaning: An algorithm that sees only how arriving items compare with earlier ones, never their actual values.
      link: https://en.wikipedia.org/wiki/Secretary_problem
    - term: greedy algorithm
      meaning: A method that builds an answer by repeatedly taking the best choice that still fits the rules; on a matroid it finds the best independent set.
      link: https://en.wikipedia.org/wiki/Greedy_algorithm
    - term: prophet inequality
      meaning: A guarantee that an online rule gets a fixed fraction of what someone seeing all values in advance would get, when values are random.
      link: https://en.wikipedia.org/wiki/Prophet_inequality
    - term: independence oracle
      meaning: A black box that answers whether a given set is independent, so an algorithm never needs the matroid written out.
      link: https://en.wikipedia.org/wiki/Matroid_oracle
    - term: graphic matroid
      meaning: The matroid whose independent sets are the forests, the edge sets with no cycle, of a graph.
      link: https://en.wikipedia.org/wiki/Graphic_matroid
    - term: linear independence
      meaning: A set of vectors is independent if none of them can be written as a combination of the others.
      link: https://en.wikipedia.org/wiki/Linear_independence
    - term: preprint
      meaning: A paper posted online before a journal or conference has reviewed it.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Secretary problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Secretary_problem
      why: "Start here: the rank-one case and the 1/e rule."
    - title: Matroid (Wikipedia)
      url: https://en.wikipedia.org/wiki/Matroid
      why: Explains the independence structure, with vector and graph examples.
    - title: Prophet inequality (Wikipedia)
      url: https://en.wikipedia.org/wiki/Prophet_inequality
      why: The sibling problem that appears in the 2026 papers.
    - title: "Feldman, Svensson, Zenklusen: A Simple O(log log rank)-Competitive Algorithm (arXiv)"
      url: https://arxiv.org/abs/1404.4473
      why: The introduction summarizes the conjecture and pre-2026 progress.
raw:
  body: "Let $M$ be a matroid on a ground set of $n$ elements with non-negative weights chosen by an adversary, revealed in a uniformly random order. When an element arrives the algorithm must accept or reject it irrevocably, and the accepted set must be independent in $M$. **Conjecture** (Babaioff–Immorlica–Kleinberg, 2007): there is an algorithm whose expected accepted weight is at least $1/c$ of the maximum-weight independent set, for a constant $c$ independent of $M$. The **strong form** asks for an *ordinal* algorithm (using only comparisons between elements) that accepts each element of the canonical optimum, the greedy basis, with probability at least $1/e$, which gives ratio $e$. This would be optimal, since the case of rank one is the classical secretary problem."
  student: "**Statement.** A matroid $M$ on $n$ elements has weights fixed by an adversary. The elements arrive in uniformly random order. On arrival the algorithm accepts or rejects, and the accepted set must be independent (for vectors: linearly independent). The algorithm is **$c$-competitive** if its expected accepted weight is at least $\\mathrm{OPT}/c$, where $\\mathrm{OPT}$ is the weight of the best independent set. The **matroid secretary conjecture** (Babaioff, Immorlica and Kleinberg, 2007) says some constant $c$ works for every matroid. Rank one is the ordinary secretary problem, where $c=e$ is the best possible, so no better constant than $e$ can be expected.\n\n**The strong form.** Sort the elements by weight and run the greedy algorithm: it produces the *canonical optimum*, a maximum-weight independent set. The strong conjecture asks for an **ordinal** algorithm, one that only compares weights, that accepts every element of that set with probability at least $1/e$. Summing over elements, this gives ratio $e$ for any weights. It is a statement about probabilities, and no weights appear in it.\n\n**What was known.** Babaioff, Immorlica and Kleinberg gave $O(\\log\\rho)$ with $\\rho$ the rank. Chakraborty and Lachish (2012) improved this to $O(\\sqrt{\\log\\rho})$. Lachish (2014) and Feldman, Svensson and Zenklusen (2014) reached $O(\\log\\log\\rho)$. Constant ratios were known for special matroids, such as graphic ones.\n\n**The 2026 claims.** Singla (13 Sep) posted a claim of $1/4$ per element. Bérczi and coauthors (17 Sep) claimed the strong conjecture for linear matroids, and Abdi, Banihashem, Hajiaghayi and Mittal (16 Sep) did the same, and gave a single-sample prophet algorithm. Huang (24 Sep) claimed ratio $e$ for all matroids. On 6 November, six authors posted arXiv:2611.08869, claiming each element of the canonical optimum is accepted independently with probability $1/e$ and that the algorithm needs only $n$ in advance, plus a $2$-competitive single-sample prophet algorithm that uses $O(n^2)$ independence queries. The abstract says both ratios are optimal even for rank one. DARC has read only the abstracts and has not checked the proofs.\n\n**Why it matters.** It is the central open question of online selection under constraints. A confirmed result would give a universal guarantee for online mechanisms with structural limits, and would also bear on contention resolution schemes, which Dughmi linked to the matroid secretary conjecture.\n\n**What to look for.** The claims are all unrefereed. A reader should check that the acceptance probability holds for *every* element of the canonical optimum on *every* matroid, not only on average, and that the algorithm really needs only $n$ and independence queries."
site:
  aiReviewed: true
---

# State of the art

**Accepted bounds.** Babaioff, Immorlica and Kleinberg gave $O(\log\rho)$ for matroids of rank $\rho$; Chakraborty and Lachish (2012) $O(\sqrt{\log\rho})$; Lachish (2014) and Feldman, Svensson and Zenklusen (2014) $O(\log\log\rho)$, as stated in their arXiv abstracts. Constant ratios were known for many special classes (for example graphic and laminar matroids).

**Claimed (unrefereed).** In September 2026 Singla (arXiv:2609.14555) claimed that every element of the optimum is accepted with probability at least $1/4$, and Huang (arXiv:2609.30421) claimed an ordinal algorithm with ratio $e$. Abdi, Banihashem, Hajiaghayi and Mittal (arXiv:2609.19118) claimed the strong conjecture for linear matroids, and a single-sample prophet algorithm that yields a $1/64$-competitive ordinal secretary algorithm for all matroids; Bérczi, Dughmi, Livanos, Soto and Verdugo (arXiv:2609.20797) independently claimed the strong conjecture for linear matroids. On 6 November 2026 Abdi, Banihashem, Hajiaghayi, Huang, Mittal and Singla (arXiv:2611.08869) posted a paper which, per its abstract, resolves the strong form with each element of the canonical optimum accepted independently with probability $1/e$, needing only $n$ in advance, and gives a $2$-competitive single-sample matroid prophet algorithm; the abstract says both ratios are optimal even for rank one. DARC has read only the abstracts. All of these are preprints without refereeing, so the problem stays OPEN.

# Applications

Mostly theoretical. Matroid secretary is the model for online auctions and posted-price mechanisms under structural constraints (one item per buyer, spanning forests, linearly independent bundles). A constant-competitive algorithm would give the first universal guarantee for these settings, but the constants and oracle model matter in practice and no deployed system depends on the answer.

# Resolution criteria

A proof, accepted by experts or published in a refereed venue, of an algorithm that is $O(1)$-competitive for matroid secretary on every matroid (for the strong form, accepting each element of the canonical optimum with probability at least $1/e$ in the ordinal model). The 2026 preprints would count once confirmed by independent readings or refereed publication.

# Rating rationale

Difficulty 22: the problem stood open for 19 years with only a log log rank bound, but several independent 2026 preprints claim a constant and the latest claims the optimal $e$, so a path is visible and what remains is checking; unrefereed, so not near 1. Application value 10: mechanism-design motivation, but no deployed system waits on it (comparable to the matrix-multiplication-time LP question at 10). Leverage 25: it would settle a central open problem of online selection and be used through reductions to contention resolution and prophet inequalities, within one subfield.

# Verification

Claim: arXiv:2611.08869 shows an ordinal algorithm that accepts each element of the canonical optimum independently with probability 1/e on every matroid, knowing only n, and a 2-competitive single-sample matroid prophet algorithm. A reviewer checks the acceptance-probability argument (the reference state and reversible-update step) for all matroids, checks consistency with the earlier preprints 2609.14555, 2609.19118 and 2609.30421, and sanity-checks the algorithm by simulation on small matroids (uniform, graphic, a non-linear example) to confirm the per-element probability is at least 1/e. Acceptance is by independent expert reading or refereed publication.

# Plain explanation

In the hiring puzzle, candidates arrive in random order and you must say yes or no at once. With one opening, a simple rule picks the best candidate about one time in three. Now suppose you have several openings, and the rules say which groups of hires are allowed together, for example that no two hires may be redundant for the team. How well can you do?

In 2007 three researchers guessed that there is always a rule that gets a fixed fraction of the best possible result, whatever the rules are. For nearly twenty years nobody could show it. The best proven result lost a factor that grows very slowly with the problem size, but still grows.

Between September and November 2026 several papers appeared that claim to answer yes, the latest saying the best possible factor, about 2.7, is reachable. These are claims posted online. Experts have not yet checked them, so DARC still lists the question as open.

Why it matters: the model describes online auctions, where a seller commits to each buyer before meeting the next. The result would be a theory guarantee, not a new tool you can buy.
