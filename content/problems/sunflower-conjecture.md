---
type: problem
slug: sunflower-conjecture
title: "Erdős–Rado sunflower conjecture: removing the log k factor from the (C r log k)^k bound"
entry: extremal-combinatorics
status: OPEN
origin: Erdős and Rado, 1960
prize: $1000 (Erdős)
ratings:
  difficulty: 71
  applicationValue: 12.5
  leverage: 40
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Erdős Problems #20: the sunflower conjecture"
    url: https://www.erdosproblems.com/20
  - title: "Alweiss, Lovett, Wu, Zhang: Improved bounds for the sunflower lemma"
    url: https://arxiv.org/abs/1908.08483
  - title: "Rao: Coding for sunflowers"
    url: https://arxiv.org/abs/1909.04774
  - title: "Bell, Chueluecha, Warnke: Note on sunflowers"
    url: https://arxiv.org/abs/2009.09327
  - title: "Ge, Wang, Xu, Zhao: Bounded VC-dimension implies the Erdős–Rado sunflower conjecture (unrefereed)"
    url: https://arxiv.org/abs/2609.18995
links:
  - to: cap-set-growth-constant
    kind: RELATED
    note: The slice-rank method behind the cap-set bound also gives the best bounds for the Erdős–Szemerédi (3-sunflower-free) variant (Naslund–Sawin).
timeline:
  - date: 1960-01-01
    title: Erdős–Rado sunflower lemma
    body: f(k,r) ≤ k!(r−1)^k and the conjecture (date approximate to the year).
    source: https://www.erdosproblems.com/20
  - date: 2019-08-22
    title: Spread-lemma breakthrough
    body: Alweiss–Lovett–Wu–Zhang reach (log k)^k-type bounds.
    source: https://arxiv.org/abs/1908.08483
  - date: 2020-09-20
    title: (Cr log k)^k
    body: Bell–Chueluecha–Warnke, building on Rao.
    source: https://arxiv.org/abs/2009.09327
  - date: 2026-07-17
    title: Bounded VC-dimension case (preprint)
    body: Ge–Wang–Xu–Zhao; with Mishra’s shifted-family case, the 2026 claims cover special classes only.
    source: https://arxiv.org/abs/2609.18995
explainer:
  oneLine: How many equal-size sets force a sunflower, sets sharing exactly the same overlap? The best bound is nearly but not exactly right.
  flow:
    - "Sunflower: sets sharing the same core"
    - A big pile of k-sets must contain one
    - "Old bound: about k factorial"
    - Now (c r log k) to the k; remove the log
  glossary:
    - term: sunflower
      meaning: A collection of sets whose pairwise overlaps are all exactly the same set.
      link: https://en.wikipedia.org/wiki/Sunflower_(mathematics)
    - term: kernel
      meaning: The common part shared by all sets of a sunflower.
      link: https://en.wikipedia.org/wiki/Sunflower_(mathematics)
    - term: petal
      meaning: The part of a set in a sunflower outside the kernel.
      link: https://en.wikipedia.org/wiki/Sunflower_(mathematics)
    - term: factorial
      meaning: The product of all whole numbers from 1 up to a given number, written k!; it grows extremely fast.
      link: https://en.wikipedia.org/wiki/Factorial
    - term: spread lemma
      meaning: A result saying that a family of sets that is evenly spread out must contain a set inside a random subset.
      link: https://en.wikipedia.org/wiki/Sunflower_(mathematics)
    - term: logarithm
      meaning: The power to which a base must be raised to give a number; it grows very slowly.
      link: https://en.wikipedia.org/wiki/Logarithm
    - term: monotone circuit
      meaning: A computing circuit built only from AND and OR gates, with no negation.
      link: https://en.wikipedia.org/wiki/Circuit_complexity
    - term: VC dimension
      meaning: A measure of how complex a family of sets is, by the largest group of points it can pick out in every possible way.
      link: https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension
    - term: shifted family
      meaning: A family of sets that stays in the family when elements are replaced by smaller ones.
      link: https://en.wikipedia.org/wiki/Family_of_sets
    - term: Extremal combinatorics
      meaning: The study of how large a structure can be while avoiding a given pattern.
      link: /research/extremal-combinatorics
  readFirst:
    - title: "Quanta: Mathematicians Begin to Tame Wild Sunflower Problem"
      url: https://www.quantamagazine.org/mathematicians-begin-to-tame-wild-sunflower-problem-20191021/
      why: Quanta's account of the 2019 advance.
    - title: Sunflower (mathematics) - Wikipedia
      url: https://en.wikipedia.org/wiki/Sunflower_(mathematics)
      why: Definition, the Erdos-Rado lemma and recent progress.
    - title: Extremal and probabilistic combinatorics (research entry)
      url: /research/extremal-combinatorics
      why: Context for set-system problems.
raw:
  ratingRationale: "Sixty-six years old with a $1000 prize, and the 2019–2020 spread method stops exactly one log k factor short with no idea for removing it, so 71: above union-closed sets (66) and below diagonal Ramsey (78). Application value 12.5 is the highest among the combinatorics problems because sunflower bounds feed circuit and data-structure lower bounds. Leverage 40: the spread lemma already reshaped the threshold-conjecture line (Park–Pham)."
site:
  aiReviewed: true
---

A sunflower with r petals is a family of r sets whose pairwise intersections all equal the same set. Let f(k,r) be the least m such that every family of more than m sets, each of size k, contains a sunflower with r petals. Erdős and Rado proved f(k,r) ≤ k!(r−1)^k and conjectured $f(k,r)\le C(r)^k$ for a constant C(r) depending only on r. The best bound is $f(k,r)\le (Cr\log k)^k$, so the problem is to remove the log k factor, already for r = 3, which Erdős thought contains the whole difficulty.

# State of the art

**Open.** Kostochka (1997) improved Erdős–Rado to o(k!) for fixed r. Alweiss, Lovett, Wu and Zhang (arXiv:1908.08483, Annals 2021) proved $f(k,r)\le (C_r\log k\log\log k)^k$ with a spread-lemma argument; Rao (arXiv:1909.04774) simplified it with a coding argument, Tao and Frankston–Kahn–Narayanan–Park gave further proofs, and Bell, Chueluecha and Warnke (arXiv:2009.09327) obtained $(Cr\log k)^k$, the current record. Special cases are known: Mishra (arXiv:2606.02667) proves the conjecture for shifted families, and Ge, Wang, Xu and Zhao (arXiv:2609.18995) for families of bounded VC-dimension (both 2026 preprints, unrefereed). The Erdős problems site lists the problem (#20) as open with no claimed proof.

# Applications

Sunflower bounds enter monotone circuit lower bounds (Razborov’s method), DNF and junta approximation, randomness extraction and data-structure lower bounds; the 2019 improvement immediately strengthened several of these. A full resolution would sharpen them further but change no deployed system.

# Resolution criteria

A refereed proof that f(k,r) ≤ C(r)^k for every fixed r (or for r = 3), or a construction showing superexponential growth in k.

# Work mix rationale

A new combinatorial or information-theoretic idea is needed; computation only checks small cases.

# Verification

Statement: `Erdos20.erdos_20` in [ErdosProblems/20.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/20.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026); Wikipedia/ErdosRadoSunflowerConjecture.lean points there): there are constants c_k with f(n,k) < c_k^n for all n > 0, where f(n,k) is the sunflower threshold for families of n-element sets and k petals, defined in the file with the corpus' Sunflower helpers. A proof is accepted when it compiles against the pinned corpus and passes Comparator; the current best bound (C·k·log n)^n leaves the log n factor to remove (the pack writes the same bound with k and r swapped).

# Plain explanation

A sunflower, in mathematics, is a collection of sets that all overlap in exactly the same way. Picture flowers whose petals are different but whose centre is shared. Each set is the common centre plus its own private petals, and no two sets share any petal.

Now suppose you have a big pile of sets, each with k elements. The Erdős-Rado sunflower question asks: how large must the pile be to guarantee that three, or r, of the sets form a sunflower?

In 1960 Erdős and Rado proved that some size always suffices, roughly the size of k factorial. That number is enormous. They guessed that a far smaller size, growing only as a fixed number raised to the power k, would be enough. This is the sunflower conjecture.

A big step came in 2019 when Ryan Alweiss, Shachar Lovett, Kewen Wu and Jiapeng Zhang showed that a size of roughly the logarithm of k, raised to the power k, suffices; a 2020 refinement made this (a constant times log k) to the power k. That is vastly smaller than k factorial and close to the conjecture, but not the same: the base still grows slowly with k, because of the logarithm. Removing it, even for three petals, is the open problem.

A pile of flower bouquets is an easy picture, but the difficulty is real: the proofs have to track many different overlaps at once.

# Student explanation

**Definitions.** A **sunflower** with $r$ petals is a family of $r$ sets whose pairwise intersections are all the same set $K$ (the _kernel_ or core). Equivalently, the sets $S_1,\dots,S_r$ have $S_i\cap S_j=K$ for $i\ne j$, so after removing $K$ the _petals_ $S_i\setminus K$ are disjoint. Let $f(k,r)$ be the least $m$ such that every family of more than $m$ sets, each of size $k$, contains a sunflower with $r$ petals.

**The Erdős–Rado bound.** Erdős and Rado (1960) proved $f(k,r)\le k!\,(r-1)^k$. The proof is a clean induction: take a maximal collection of pairwise disjoint sets. If it has $r$ members, you have a sunflower with empty kernel. Otherwise every set in the family meets their union (at most $k(r-1)$ elements), so some element lies in many sets; remove it and recurse on sets of size $k-1$. They conjectured $f(k,r)\le C(r)^k$ for a constant $C(r)$ depending only on $r$.

**Progress.**

- Kostochka (1997): improved to $o(k!)$ for fixed $r$.
- Alweiss, Lovett, Wu and Zhang (arXiv 1908.08483, Annals 2021): $f(k,r)\le(C_r\log k\log\log k)^k$, using a **spread-lemma** argument: if a family is 'spread out' (no small set lies in too many members), a random subset of the ground set contains a member, and one can find sunflowers by a random-restriction argument.
- Rao (arXiv 1909.04774) simplified it with a coding argument; Tao and Frankston–Kahn–Narayanan–Park gave other proofs.
- Bell, Chueluecha and Warnke (arXiv 2009.09327): $(Cr\log k)^k$, the current record.

So the problem is to remove the $\log k$ factor, already for $r=3$, which Erdős thought contains the whole difficulty.

**Special cases.** Mishra (arXiv 2606.02667) proves the conjecture for shifted families, and Ge, Wang, Xu and Zhao (arXiv 2609.18995) for families of bounded VC-dimension. Both are 2026 preprints, unrefereed. The Erdős problems site lists the problem (#20) as open with no accepted claim.

**Why the log is stubborn.** The spread-lemma approach naturally loses a logarithm: it needs a random subset of the ground set dense enough to contain a member of the family with good probability. Avoiding it would need a different way to handle nearly spread families.

**Why it matters.** The conjecture is tied to **monotone circuit lower bounds** (Razborov's approach to P vs NP-type questions used sunflowers) and to the study of the spread lemma, which also helped resolve the Kahn–Kalai expectation-threshold conjecture on thresholds in random structures (Park and Pham, 2022).
