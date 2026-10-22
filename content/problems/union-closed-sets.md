---
type: problem
slug: union-closed-sets
title: "Frankl’s union-closed sets conjecture: raise the proven constant from ≈0.3829 to 1/2"
entry: extremal-combinatorics
status: PARTIAL
origin: Peter Frankl, 1979
ratings:
  difficulty: 66
  applicationValue: 3.8
  leverage: 22
workMix:
  theory: 88
  engineering: 0
  compute: 12
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Gilmer: A constant lower bound for the union-closed sets conjecture"
    url: https://arxiv.org/abs/2211.09055
  - title: "Chase, Lovett: Approximate union closed conjecture"
    url: https://arxiv.org/abs/2211.11689
  - title: "Alweiss, Huang, Sellke: Improved lower bound for Frankl’s union-closed sets conjecture"
    url: https://arxiv.org/abs/2211.11731
  - title: "Sawin: An improved lower bound for the union-closed set conjecture"
    url: https://arxiv.org/abs/2211.11504
  - title: "Liu: Improving the lower bound for the union-closed sets conjecture via conditionally IID coupling"
    url: https://arxiv.org/abs/2306.08824
  - title: "Jiang: Entropy bounds and global couplings for union-closed families (unrefereed)"
    url: https://arxiv.org/abs/2609.08291
  - title: "Costa, Sadhu: Beyond Liu’s 0.382709 threshold (unrefereed)"
    url: https://arxiv.org/abs/2610.02295
timeline:
  - date: 2022-11-16
    title: Gilmer proves a constant lower bound
    body: Information-theoretic argument.
    source: https://arxiv.org/abs/2211.09055
  - date: 2022-11-21
    title: Constant raised to (3−√5)/2
    body: Several teams within a week.
    source: https://arxiv.org/abs/2211.11504
  - date: 2026-10-01
    title: Preprints reach 0.38288525
    body: Jiang and Costa–Sadhu (unrefereed).
    source: https://arxiv.org/abs/2610.02295
explainer:
  oneLine: "In any family of sets closed under merging, must some element appear in at least half of them? Best proven: about 38 percent."
  flow:
    - A family of sets closed under merging
    - Is some element in at least half?
    - Entropy argument gives a fixed share
    - Best proven is about 38 percent, not 50
  glossary:
    - term: union-closed family
      meaning: A collection of sets in which the union of any two members is also a member.
      link: https://en.wikipedia.org/wiki/Union-closed_sets_conjecture
    - term: union of sets
      meaning: The set containing everything that is in either of the two sets.
      link: https://en.wikipedia.org/wiki/Union_(set_theory)
    - term: Frankl's conjecture
      meaning: The conjecture that in a union-closed family some element lies in at least half of the sets.
      link: https://en.wikipedia.org/wiki/Union-closed_sets_conjecture
    - term: entropy
      meaning: A measure of how uncertain or spread out a random object is.
      link: https://en.wikipedia.org/wiki/Entropy_(information_theory)
    - term: coupling
      meaning: A way of defining two random objects on the same probability space so that their relationship can be controlled.
      link: https://en.wikipedia.org/wiki/Coupling_(probability)
    - term: independent sample
      meaning: A random choice made without any influence from another choice.
      link: https://en.wikipedia.org/wiki/Independence_(probability_theory)
    - term: set system
      meaning: A collection of subsets of some ground set, studied for their intersections and unions.
      link: https://en.wikipedia.org/wiki/Family_of_sets
    - term: golden ratio
      meaning: The number about 1.618; the constant (3 minus root 5)/2 is built from it.
      link: https://en.wikipedia.org/wiki/Golden_ratio
    - term: preprint
      meaning: A paper posted publicly before it has been reviewed by other experts.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Extremal combinatorics
      meaning: The study of how large a structure can be while avoiding a given pattern.
      link: /research/extremal-combinatorics
  readFirst:
    - title: "Quanta: Long Out of Math, an AI Programmer Cracks a Pure Math Problem"
      url: https://www.quantamagazine.org/long-out-of-math-an-ai-programmer-cracks-a-pure-math-problem-20230103/
      why: Quanta's report on Gilmer's 2022 result.
    - title: Union-closed sets conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Union-closed_sets_conjecture
      why: Statement, equivalent forms and history.
    - title: Entropy (information theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Entropy_(information_theory)
      why: The tool that made the breakthrough possible.
site:
  aiReviewed: true
---

Let F be a finite family of finite sets, not all empty, closed under pairwise union. The conjecture asserts that some element belongs to at least |F|/2 of the sets of F. Let c_UC be the largest constant such that some element always lies in at least c_UC·|F| of the sets. The problem asks to raise the best proven lower bound on c_UC toward 1/2, or to prove 1/2.

# State of the art

**Partially resolved: a universal constant is known, but not 1/2.** Knill (1994) and Wójcik (1999) gave bounds of order 1/log₂|F|. In November 2022 Gilmer proved a constant 0.01 by an entropy argument comparing the union of two independent samples with one sample. Within days Chase–Lovett, Alweiss–Huang–Sellke, Sawin and Pebody raised it to (3−√5)/2 ≈ 0.38197; Sawin also disproved a stronger conjecture of Gilmer and showed the constant can be exceeded. Liu (arXiv:2306.08824) proved a bound above 0.3823455 with conditionally i.i.d. couplings, and his numerics suggested about 0.382709. In September–October 2026, Jiang (arXiv:2609.08291, computer-assisted) and Costa–Sadhu (arXiv:2610.02295) proved c_UC ≥ 0.38288525; Costa–Sadhu show that the inequality they use cannot exceed 0.3828852599…. These 2026 results are unrefereed. The entropy method cannot reach 1/2 as it stands.

# Applications

None practical. The entropy method for extremal set problems and the coupling techniques have been reused in other extremal problems.

# Resolution criteria

A refereed proof of c_UC = 1/2, or of any c_UC above the 0.3828852599… limit of the current entropy inequality. Small improvements within the existing framework are partial progress.

# Rating rationale

Simple to state, open for 45 years, and the entropy method now saturates near 0.383, well below 1/2, so 66: below sunflowers (71), whose best bound is also stuck one idea away. Application value 3.8 and leverage 22 are low: the entropy technique has been reused, but little depends on the answer.

# Work mix rationale

A new method is needed; computation optimizes entropy inequalities.

# Verification

Statement: `UnionClosed.union_closed` in [Wikipedia/UnionClosed.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/UnionClosed.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)): every union-closed family other than {∅} has an element in at least half of its sets, with Yu's constant and other solved variants stated alongside. A raised constant c is the same statement with 1/2 replaced by c. A proof is accepted when it compiles against the pinned corpus and passes Comparator; the entropy arguments need real-analysis estimates formalized along the way.

# Plain explanation

Imagine a collection of clubs. Each club is a set of members. Say the collection has a property: whenever you take any two clubs and merge their member lists, the merged list is also exactly one of the clubs in the collection. Such a family is called union-closed.

The conjecture, from the 1970s and named after Peter Frankl, says that in any such family there is always at least one person who belongs to at least half of the clubs. It is easy to state and looks innocent. For decades the best proof showed only that someone belongs to a share that shrinks as the family grows.

In 2022 Justin Gilmer proved something new: some person always belongs to a fixed share, about one percent, whatever the family size. Within days others improved this to about 38 percent, which is the figure still standing. The tool was entropy, a measure of uncertainty from information theory, used to compare what you get by picking one club at random with what you get by merging two.

The remaining step from 38 percent to 50 percent has resisted, and it is known that the entropy method in this simple form cannot reach exactly 50 percent. Some recent preprints, not yet checked, improve the digits slightly.

The club picture hides a trap: a family can contain a huge variety of strange sets, and the proof must handle all of them.

# Student explanation

**Statement.** Let $\mathcal F$ be a finite family of finite sets, not all empty, closed under pairwise union ($A,B\in\mathcal F\Rightarrow A\cup B\in\mathcal F$). **Frankl's union-closed sets conjecture** says that some element lies in at least $|\mathcal F|/2$ of the sets. Let $c_{UC}$ be the largest constant such that some element always lies in at least $c_{UC}|\mathcal F|$ sets. The problem asks to raise the best proven lower bound on $c_{UC}$ toward $1/2$, or to prove $1/2$.

**Old results.** Knill (1994) and Wójcik (1999) gave bounds of order $1/\log_2|\mathcal F|$, which tend to zero as the family grows. So no universal constant was known before 2022.

**Gilmer's breakthrough (November 2022).** Gilmer proved a universal constant, $0.01$, by an **entropy argument**. Pick two sets $A,B$ independently at random from a (suitably weighted) family and compare the entropy of $A\cup B$ with the entropy of a single sample. Union-closure means $A\cup B$ is again in the family, so its entropy is at most that of a sample. But if no element is common enough, merging two samples increases the entropy, a contradiction. Entropy plays the role of the number of 'bits needed to describe the set'.

Within days, Chase–Lovett, Alweiss–Huang–Sellke, Sawin and Pebody raised the constant to $(3-\sqrt5)/2\approx0.38197$. Sawin also showed that Gilmer's method could go slightly beyond this using a modified approach, and disproved a stronger conjecture of Gilmer. Liu (arXiv 2306.08824) proved a bound above $0.3823455$ with conditionally i.i.d. couplings, and numerics suggested the method might reach about $0.382709$.

**Why $0.38$ is a barrier.** The entropy method as set up compares independent samples. A calculation shows there are probability distributions for which the argument gives exactly $(3-\sqrt5)/2$ (and slightly more with refinements), so reaching $1/2$ needs new ideas: for example, a different coupling of the two samples, or combining entropy with the structure of the family.

**Recent developments.** In September–October 2026 two preprints (Jiang, computer-assisted; Costa and Sadhu) report further small improvements of the constant. They prove $c_{UC}\ge0.38288525$, and Costa and Sadhu show the inequality they use cannot go past $0.38288526$. These are unrefereed; the refereed best remains close to $0.3823$.

**Why it matters.** The conjecture is a prototypical extremal problem on set systems, and the new entropy method has influenced other problems. The conjecture is also related to lattice theory, since union-closed families are the same as families closed under joins.
