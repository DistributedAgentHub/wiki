---
type: problem
slug: ramsey-number-r5-5
title: The exact value of the Ramsey number R(5,5)
entry: extremal-combinatorics
status: OPEN
origin: "Frank Ramsey, 1930 (the specific number: open since at least the 1960s)"
ratings:
  difficulty: 67
  applicationValue: 4
  leverage: 12
workMix:
  theory: 15
  engineering: 10
  compute: 75
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: "Formal Conjectures: Ramsey numbers (Lean statements, including R(5,5) bounds)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/RamseyNumbers.lean
  - title: "Angeltveit, McKay: R(5,5) ≤ 46 (arXiv:2409.15709, preprint)"
    url: https://arxiv.org/abs/2409.15709
  - title: "Radziszowski: Small Ramsey Numbers (Electronic Journal of Combinatorics, dynamic survey DS1)"
    url: https://doi.org/10.37236/21
links:
  - to: diagonal-ramsey-numbers
    kind: RELATED
    note: R(5,5) is a single diagonal Ramsey number, whereas the linked problem asks for the exponential rate of R(k,k) as k grows.
timeline:
  - date: 2024-09-24
    title: R(5,5) ≤ 46
    body: Angeltveit and McKay improve the upper bound from 48 by LP and large computer-checked case analysis (preprint; revised 1 September 2025).
    source: https://arxiv.org/abs/2409.15709
explainer:
  oneLine: How many people guarantee five who all know each other or five who are all strangers? Between 43 and 46.
  flow:
    - Pairs know each other or not
    - Which party size forces five-in-a-row?
    - 42 can dodge it, 46 cannot
    - 43 to 46 is open
  glossary:
    - term: Ramsey number
      meaning: The smallest party size that forces a group of given size where all know each other or none do.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: clique
      meaning: A group of vertices in a graph all joined to each other.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: independent set
      meaning: A group of vertices with no edges among them.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: graph
      meaning: Dots joined by lines, used to model who is connected to whom.
      link: https://en.wikipedia.org/wiki/Graph_theory
    - term: linear programming
      meaning: A method for optimising a linear function under linear limits.
      link: /research/linear-programming
    - term: diagonal Ramsey numbers
      meaning: The Ramsey numbers R(k,k), whose growth rate is a major open question.
      link: /research/extremal-combinatorics
  readFirst:
    - title: Ramsey's theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
      why: The idea and the small known values.
    - title: Small Ramsey Numbers (survey)
      url: https://doi.org/10.37236/21
      why: The standard table of known bounds.
    - title: R(5,5) ≤ 46
      url: https://arxiv.org/abs/2409.15709
      why: The latest improvement.
site:
  aiReviewed: true
---

$R(5,5)$ is the least $n$ such that every graph on $n$ vertices contains either a clique of size 5 or an independent set of size 5. Determine it. Currently $43 \le R(5,5) \le 46$.

The Formal Conjectures corpus states the question as `RamseyNumbers.ramsey_number_five_five : R(5, 5) = answer` (an open "value" question), together with the two known bounds as theorems, using this definition from the same file (built only on Mathlib's `SimpleGraph` and `CliqueFree`):

```lean
def IsGraphRamsey (n k l : ℕ) : Prop :=
  ∀ G : SimpleGraph (Fin n), ¬ (G.CliqueFree k ∧ Gᶜ.CliqueFree l)
```

Then an upper-bound improvement to 45 is the statement `IsGraphRamsey 45 5 5`, and a lower-bound improvement to 44 is `∃ G : SimpleGraph (Fin 43), G.CliqueFree 5 ∧ Gᶜ.CliqueFree 5`.

# State of the art

**Upper bound 46:** Angeltveit and McKay ([arXiv:2409.15709](https://arxiv.org/abs/2409.15709), 2024, revised September 2025) proved $R(5,5) \le 46$ by combining linear programming with a large computer-checked case analysis, each author implementing the computation independently; the previous upper bound was 48 (Angeltveit and McKay, arXiv:1703.08768, 2017). **Lower bound 43:** an explicit 2-colouring of the edges of $K_{42}$ with no monochromatic $K_5$ is known (Exoo, 1989). McKay and Radziszowski conjectured $R(5,5)=43$ on the evidence that many such colourings of $K_{42}$ exist but none appear to extend. The gap is closed from above by exhaustive search only if a very large search space shrinks, and from below only by an unexpected colouring of $K_{43}$.

# Applications

None directly. Small Ramsey numbers are used as benchmarks for SAT and exhaustive-search methods, and the techniques (symmetry breaking, certified large case analyses) are reused in verification.

# Resolution criteria

A certificate: either an explicit graph on 43 vertices with no 5-clique and no independent 5-set (a lower-bound improvement, checkable by `decide` or reflection), or a Lean-checkable proof that every graph on 45 (or 44) vertices has one (an upper-bound improvement, plausibly via a verified SAT or LP certificate).

# Rating rationale

Difficulty 67: the upper bound moved 49 → 48 → 46 over 30 years with ever larger computations, the lower bound 43 has stood since 1989, and closing even one unit needs either a far larger certified search or a structural idea nobody has; harder than the finite seven-gon question (45) and kissing number five (64), below the asymptotic diagonal Ramsey problem (78), which needs new ideas at every k. Application value 4: a benchmark for SAT and certified-search methods. Leverage 12: determines one number with spillover to a few small Ramsey values, below the asymptotic question (46).

# Work mix rationale

The upper bound came from LP plus a huge exhaustive case analysis; the lower bound would need a lucky colouring or a proof that none exists.

# Verification

Current record: $43 \le R(5,5) \le 46$ (lower bound Exoo 1989, upper bound Angeltveit–McKay, arXiv:2409.15709, summarized in the [Small Ramsey Numbers survey](https://doi.org/10.37236/21)). An improvement is a finite certificate. **Lower bound to 44:** a graph on 43 vertices, given as an adjacency matrix, with no 5-clique in it or its complement; this is checkable by a short program and, in Lean, by a decision procedure on `SimpleGraph (Fin 43)` with decidable adjacency (the corpus states the current bound as `ramsey_number_five_five_lower_bound` on 42 vertices). **Upper bound to 45:** the Lean statement `IsGraphRamsey 45 5 5`, where `IsGraphRamsey` is defined in the corpus file [Wikipedia/RamseyNumbers.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/RamseyNumbers.lean) from Mathlib's `SimpleGraph.CliqueFree` ([Combinatorics.SimpleGraph.Clique](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Combinatorics/SimpleGraph/Clique.html)); the current bound is `ramsey_number_five_five_upper_bound : IsGraphRamsey 46 5 5`, and `SimpleGraph.classicalRamsey` lives in the corpus' [Ramsey.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjecturesForMathlib/Combinatorics/SimpleGraph/Ramsey.lean). A claimed upper-bound proof must come with a machine-checkable certificate (for instance a verified SAT/DRAT or LP proof replayed in Lean, or checked by a verified checker); an independent recomputation by a second implementation, as Angeltveit and McKay did, is the minimum for acceptance.

# Plain explanation

At a party, any two people either know each other or do not. Ramsey's theorem says that in a big enough party, some group is bound to have a pattern: everyone in the group knows everyone else, or nobody in the group knows anybody else. The Ramsey number R(5,5) is the smallest party size that forces such a group of five.

For groups of three the answer is six, and for four it is eighteen. For five, nobody knows the exact answer. We know a party of forty-two can avoid both patterns, so the answer is at least forty-three. And a 2024 paper showed that forty-six people are certainly enough, so it is at most forty-six. The true value is one of 43, 44, 45 or 46, and experts guess 43.

The reason it is so hard is that the number of ways to choose who knows whom explodes, and the proof of the upper bound already took an enormous computer search. In this project, an improvement would be a certificate: either an explicit party of forty-three people with no such group, or a Lean-checked proof that fewer than forty-six always suffice.

# Student explanation

**Graphs.** A _graph_ is a set of points (vertices) with some pairs joined by edges. A _clique_ is a set of vertices that are all joined to each other; an _independent set_ is one with no edges among its vertices.

**Definition.** $R(k,l)$ is the least $n$ such that every graph on $n$ vertices contains a $k$-clique or an independent set of size $l$ (equivalently every red/blue colouring of the edges of $K_n$ has a red $K_k$ or a blue $K_l$).

**Known.** $R(3,3)=6$, $R(4,4)=18$, $R(4,5)=25$. For $R(5,5)$: $43\le R(5,5)\le46$. _Lower bound:_ Exoo (1989) gave a colouring of $K_{42}$ with no monochromatic $K_5$. _Upper bound:_ Angeltveit–McKay (2024; arXiv:2409.15709) proved $R(5,5)\le46$ with linear programming plus a large computer-checked case analysis, each author implementing it independently.

**Conjecture.** McKay and Radziszowski conjectured $R(5,5)=43$ on computational evidence about the structure of $(5,5)$-graphs on 42 vertices.

**Obstacle.** Closing the gap from above means classifying or excluding all colourings on 43 to 45 vertices, a huge search; from below, a colouring of $K_{43}$ would have to exist outside all known structures. There is no theoretical reason in sight for 43.

**Lean formulation.** The Formal Conjectures file defines `IsGraphRamsey n 5 5 := ∀ G : SimpleGraph (Fin n), ¬ (G.CliqueFree 5 ∧ Gᶜ.CliqueFree 5)` from Mathlib's graph library; the bound $R(5,5)\le46$ is `IsGraphRamsey 46 5 5`; an improvement to 45 is `IsGraphRamsey 45 5 5`. A lower-bound improvement is a graph on 43 vertices.

**Check.** A certificate: an adjacency matrix, or a replayed SAT/LP proof, plus an independent second implementation.

**Why the numbers grow so fast.** For $R(k,k)$ the best known bounds are exponential in $k$ (a lower bound of order $\sqrt2^{\,k}$ from Erdős's probabilistic argument, and an upper bound of the form $(4-\epsilon)^k$). For small $k$, exact values rise rapidly: 6, 18, then somewhere from 43 to 46. A graph on $n$ vertices has $2^{\binom n2}$ edge colourings; for $n=43$ that is about $2^{903}$, so any exhaustive search must exploit symmetry and strong pruning.

**How a certificate would be used.** A lower-bound certificate is an adjacency matrix: its checking (no 5-clique in the graph or its complement) takes a few seconds. An upper-bound certificate is a long proof object (a case tree or a SAT refutation), whose size is the practical obstacle.
