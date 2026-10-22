---
type: problem
slug: schur-number-six-lower-bound
title: "Schur number S(6): improve 536 ≤ S(6), or determine S(6)"
entry: drat-lrat-proof-certificates
status: OPEN
origin: Issai Schur, 1917; S(5) = 160 by Heule, 2017
ratings:
  difficulty: 60
  applicationValue: 3
  leverage: 12
workMix:
  theory: 25
  engineering: 20
  compute: 55
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: Fredricksen, Sweet, Symmetric Sum-Free Partitions and Lower Bounds for Schur Numbers
    url: https://www.combinatorics.org/ojs/index.php/eljc/article/download/v7i1r32/pdf
  - title: "OEIS A045652: Schur's numbers (version 2), with bounds and references"
    url: https://oeis.org/A045652
  - title: Heule, Schur Number Five
    url: https://arxiv.org/abs/1711.08076
  - title: Shifted S-templates and improved lower bounds for Schur numbers (arXiv preprint)
    url: https://arxiv.org/abs/2607.15034
timeline:
  - date: 2000-01-01
    title: S(6) ≥ 536
    body: Fredricksen and Sweet gave symmetric sum-free partitions with S(6) ≥ 536 and S(7) ≥ 1680; year only.
    source: https://www.combinatorics.org/ojs/index.php/eljc/article/download/v7i1r32/pdf
  - date: 2017-11-01
    title: S(5) = 160
    body: Heule proved S(5) = 160 with a two-petabyte certified proof.
    source: https://arxiv.org/abs/1711.08076
explainer:
  oneLine: Can the numbers 1 to 537 be sorted into six boxes so that in no box two numbers add up to a third?
  flow:
    - Put numbers 1..n into six boxes
    - No box has x, y and x + y
    - "Known: 536 works"
    - Is 537 possible? Needs a find or a proof
  glossary:
    - term: sum-free set
      meaning: A set of numbers in which no two (possibly equal) add up to a third member.
      link: https://en.wikipedia.org/wiki/Sum-free_set
    - term: Schur number
      meaning: The largest n for which the numbers 1 to n can be split into k sum-free sets.
      link: https://en.wikipedia.org/wiki/Schur_number
    - term: SAT encoding
      meaning: Rewriting a puzzle as true-or-false rules for a SAT solver.
      link: /research/sat-solving
    - term: proof certificate
      meaning: A file that a separate program can check to confirm a solver's answer.
      link: /research/drat-lrat-proof-certificates
    - term: partition
      meaning: A split of a set into groups where every item is in exactly one group.
      link: https://en.wikipedia.org/wiki/Ramsey_theory
    - term: SAT problem
      meaning: Decide whether a Boolean formula can be made True; here, whether a valid split exists.
      link: /research/sat-solving
    - term: unsatisfiable
      meaning: No assignment of True/False values makes the formula True.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: Ramsey number
      meaning: The size at which any colouring must contain a monochromatic structure; it gives general upper bounds on Schur numbers.
      link: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
    - term: verified checker
      meaning: A proof checker whose own correctness has been proved in a theorem prover.
      link: /research/drat-lrat-proof-certificates
  readFirst:
    - title: Schur number (Wikipedia)
      url: https://en.wikipedia.org/wiki/Schur_number
      why: Definition and table of known values.
    - title: Heule, Schur Number Five (arXiv)
      url: https://arxiv.org/abs/1711.08076
      why: How the five-box case was settled.
site:
  aiReviewed: true
---

A set of integers is _sum-free_ if it contains no x, y, z (x and y may be equal) with x + y = z. The Schur number S(k) is the largest n such that {1, …, n} can be partitioned into k sum-free sets. The values S(1) to S(5) are 1, 4, 13, 44, 160. (This is the convention of Heule and of OEIS A045652; some sources count one higher, giving 2, 5, 14, 45, 161.) The best known construction gives S(6) ≥ 536. **Question:** determine S(6). Concretely: does {1, …, 537} admit a partition into six sum-free sets? A yes answer is a checkable colouring; a no answer would settle S(6) = 536 and needs a certified proof of unsatisfiability.

# State of the art

Fredricksen and Sweet (Electronic Journal of Combinatorics, 2000) constructed symmetric sum-free partitions giving S(6) ≥ 536 and S(7) ≥ 1680. A 2026 preprint on shifted S-templates (arXiv:2607.15034) still cites S(6) ≥ 536 as the known bound and states no upper bound for S(6). S(5) = 160 was proved by Heule in 2017 with a SAT proof of about two petabytes, verified by a formally verified checker (arXiv:1711.08076). For six colours the encoding is far larger. The general upper bound comes from multicolour Ramsey numbers, S(k) ≤ R_k(3) − 2 (OEIS A045652), which is far above 536; no specific upper bound for S(6) close to the lower bound has been published. For seven colours, Rowley (2021) raised the lower bound to S(7) ≥ 1696.

# Applications

No direct application. A proof of S(6) = 536 would dwarf the two-petabyte S(5) proof and would drive proof compression and checker engineering; a partition of {1, …, 537} would be a small, instantly checkable construction.

# Resolution criteria

Lower bound: an explicit partition of {1, …, 537} into six sum-free sets, verified by a script. Upper bound: a DRAT or LRAT proof that the standard CNF encoding for n = 537 and k = 6 is unsatisfiable, accepted by a verified checker.

# Rating rationale

Difficulty 60: S(5) = 160 already needed a two-petabyte certified proof and the six-colour instance is far larger, while the construction side has not moved since 2000; it sits just below R(5,5) (62), a comparable finite Ramsey-type value, and well above the empty-heptagon question (45), which has a visible SAT route. Application value 3: none beyond SAT proof engineering. Leverage 12: additive Ramsey theory and proof-compression methods only.

# Work mix rationale

Both directions are mostly computation: a heavily structured search for a partition of 537 numbers, or a SAT proof far larger than the five-colour one. Theory enters through symmetry and template constructions.

# Verification

Quantity: the largest n with a partition of {1..n} into six sum-free sets; current record S(6) ≥ 536 (Fredricksen and Sweet, 2000), no matching upper bound. A lower-bound improvement is certified by an explicit colouring of {1..537} (or higher) checked by a short script; a matching upper bound is certified by a DRAT/LRAT refutation of the standard encoding (variable x\_{i,c}, clauses forbidding monochromatic x + y = z), checked with drat-trim and a verified LRAT checker. Publish the generator, the CNF and the proof hash.

# Plain explanation

Take the numbers 1, 2, 3 and so on. You want to put each one into one of six boxes, with a rule: inside any box, no two numbers may add up to another number in the same box (a number may be added to itself). With one box you get as far as 1. With five boxes you can go up to 160 and no further, which was proved in 2017 by a computer in a calculation whose written proof took about two petabytes of disk.

With six boxes, people have found a way to sort the numbers up to 536. Nobody knows if 537 is possible. If you could find a sorting, anyone can check it in an instant. If it is impossible, proving it would need a computer proof much bigger than the two-petabyte one.

So the question is simple to state and nobody knows the answer. The caveat is that it has no known practical use. Its value is as a test for the biggest proofs computers can produce and check.

# Student explanation

**The question in a small case.** Try to split the numbers 1, 2, 3, 4 into two groups so that no group contains $x$, $y$ and $x+y$ ($x=y$ allowed, so a group may not contain both $x$ and $2x$). The split {1, 4} and {2, 3} works. Adding 5 fails: wherever 5 goes, some sum appears. A group with no such triple is called **sum-free**, and the **Schur number** S(k) is the largest $n$ such that 1, …, n can be split into $k$ sum-free groups. So S(2) = 4. The known values are 1, 4, 13, 44 and 160 for $k$ = 1 to 5. (Some sources count one higher and list 2, 5, 14, 45, 161; the question is the same.)

**What is known for six groups.** Fredricksen and Sweet (2000) built an explicit split of 1, …, 536 into six sum-free groups, so S(6) ≥ 536. No one has found a split of 1, …, 537, and no upper bound close to 536 is known; the general bound from multicolour Ramsey numbers is far larger. S(6) is therefore unknown.

**How a computer attacks it.** The question "can 1..n be split into k sum-free groups?" becomes a SAT problem. Introduce a True/False variable $x_{i,c}$ meaning "number $i$ is in group $c$". Clauses say every number gets a group, and for every triple with $x + y = z$ and every group $c$, not all three of $x$, $y$, $z$ are in group $c$. A satisfying assignment is a split; unsatisfiability means no split exists.

**Why it is hard.** For five groups and $n = 161$, proving unsatisfiability took Heule's 2017 computation, whose certified proof was about two petabytes and was checked by a formally verified checker. With six groups and $n = 537$ there are more than three times as many numbers, one more group, and far more triples, so a complete search is far beyond current machines unless new symmetry arguments cut it down. Searching for a split of 537 is also hard: the known record comes from highly symmetric template constructions, and no new structure has improved it in 26 years.

**How a claim is checked.** A lower-bound improvement is a list assigning each of 1, …, 537 (or more) to one of six groups; a short Python loop over all pairs checks that no group contains a sum, in under a second. An upper bound, proving S(6) = 536, would be a DRAT or LRAT proof that the formula for $n = 537$ is unsatisfiable, accepted by a verified checker, published with the program that generated the formula.
