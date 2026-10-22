---
type: problem
slug: erdos-szekeres-seven-gon-33-points
title: "Erdős–Szekeres for n = 7: does every set of 33 points in general position contain a convex heptagon?"
entry: extremal-combinatorics
status: OPEN
origin: Esther Klein (n = 4); Erdős and Szekeres (1935 upper bound and conjecture, 1960–61 matching lower-bound construction)
ratings:
  difficulty: 45
  applicationValue: 1.8
  leverage: 14
workMix:
  theory: 25
  engineering: 10
  compute: 65
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: "Dumitru: Notes on the 33-point Erdős–Szekeres problem (preprint, unrefereed)"
    url: https://arxiv.org/abs/2512.24061
  - title: "Suk: On the Erdős–Szekeres convex polygon problem"
    url: https://arxiv.org/abs/1604.08657
  - title: "Holmsen, Mojarrad, Pach, Tardos: Two extensions of the Erdős–Szekeres problem"
    url: https://arxiv.org/abs/1710.11415
  - title: "Szekeres, Peters: Computer solution to the 17-point Erdős–Szekeres problem (ANZIAM J. 48, 2006)"
    url: https://archive.austms.org.au/Publ/ANZIAM/V48P2/2409.html
links:
  - to: diagonal-ramsey-numbers
    kind: RELATED
    note: The Erdős–Szekeres theorem was an early application of Ramsey-type arguments; both ask for exact thresholds of unavoidable structure.
  - to: cdcl-vsids-restarts-proof-search-theorem
    kind: RELATED
    note: Resolution requires SAT/CDCL search on a huge symmetric instance, so progress hinges on proof-search behaviour.
timeline:
  - date: 2006-10-01
    title: ES(6) = 17
    body: Szekeres and Peters settle the hexagon case by exhaustive computer search (ANZIAM J. 48; month approximate, day set to the first).
    source: https://archive.austms.org.au/Publ/ANZIAM/V48P2/2409.html
  - date: 2016-04-29
    title: Suk proves ES(n) = 2^{n+o(n)}
    body: First near-matching upper bound, with error term O(n^(2/3) log n) in the exponent.
    source: https://arxiv.org/abs/1604.08657
  - date: 2017-10-31
    title: Error term improved to O(√(n log n))
    body: Holmsen, Mojarrad, Pach and Tardos sharpen Suk's exponent.
    source: https://arxiv.org/abs/1710.11415
  - date: 2025-12-30
    title: SAT encoding of the 33-point case (unrefereed preprint)
    body: UNSAT certificates for anchored subfamilies only; the full case remains open.
    source: https://arxiv.org/abs/2512.24061
explainer:
  oneLine: Does every set of 33 scattered points contain seven that form a convex heptagon? Known for up to 6; seven is open.
  flow:
    - Scatter points, no three in a line
    - "Guess: 2^(n-2)+1 points force n-gon"
    - Verified for 4, 5 and 6 corners
    - Seven corners (33 points) is open
  glossary:
    - term: convex polygon
      meaning: "A polygon with no dents: any line between two of its points stays inside it."
      link: https://en.wikipedia.org/wiki/Convex_polygon
    - term: general position
      meaning: A scatter of points with no three on a straight line.
      link: https://en.wikipedia.org/wiki/General_position
    - term: Erdos-Szekeres theorem
      meaning: The result that enough points in general position always contain a convex polygon of any given size.
      link: https://en.wikipedia.org/wiki/Happy_ending_problem
    - term: happy ending problem
      meaning: Another name for the Erdos-Szekeres convex polygon problem.
      link: https://en.wikipedia.org/wiki/Happy_ending_problem
    - term: SAT solver
      meaning: A computer program that decides whether a logical formula can be made true, used to check huge search problems.
      link: https://en.wikipedia.org/wiki/SAT_solver
    - term: exhaustive search
      meaning: Checking every possible case by computer to be sure none is an exception.
      link: https://en.wikipedia.org/wiki/Brute-force_search
    - term: orientation of a triple
      meaning: Whether three points in order turn clockwise or anticlockwise.
      link: https://en.wikipedia.org/wiki/Orientation_(geometry)
    - term: symmetry breaking
      meaning: Adding constraints to a computer search so that arrangements that are mirror images or relabellings of each other are not checked many times.
      link: https://en.wikipedia.org/wiki/Symmetry-breaking_constraints
    - term: Isabelle/HOL
      meaning: A proof assistant used to check mathematical proofs by computer.
      link: https://en.wikipedia.org/wiki/Isabelle_(proof_assistant)
    - term: Ramsey theory
      meaning: The study of how large a structure must be before some regular pattern is guaranteed to appear.
      link: https://en.wikipedia.org/wiki/Ramsey_theory
  readFirst:
    - title: Happy ending problem - Wikipedia
      url: https://en.wikipedia.org/wiki/Happy_ending_problem
      why: The problem's history and known results.
    - title: Convex polygon - Wikipedia
      url: https://en.wikipedia.org/wiki/Convex_polygon
      why: What 'convex' means.
    - title: SAT solver - Wikipedia
      url: https://en.wikipedia.org/wiki/SAT_solver
      why: The computer tool behind the finite cases.
site:
  aiReviewed: true
---

Let $\mathrm{ES}(n)$ be the least $N$ such that every set of $N$ points in the plane in general position contains $n$ points in convex position. Erdős and Szekeres conjectured in 1935 that $\mathrm{ES}(n)=2^{n-2}+1$, and in 1960–61 proved the lower bound $\mathrm{ES}(n)\ge 2^{n-2}+1$ by an explicit construction. The conjecture is known for $n\le 6$ ($\mathrm{ES}(5)=9$, $\mathrm{ES}(6)=17$). **Problem:** show $\mathrm{ES}(7)=33$, i.e. that every $33$-point set in general position contains a convex $7$-gon (the lower bound $\mathrm{ES}(7)\ge 33$ follows from the Erdős–Szekeres construction), or exhibit a $33$-point set with no convex $7$-gon.

# State of the art

ES(5)=9 was proved by Makai (unpublished; first published proof by Kalbfleisch, Kalbfleisch and Stanton, 1970), and ES(6)=17 by Szekeres and Peters (ANZIAM J. 48, 2006) through an exhaustive computer search; it has since been re-verified by SAT-based and formal methods (Scheucher; Marić in Isabelle/HOL). For asymptotics, Suk (2016; JAMS 2017) proved ES(n) = 2^{n+O(n^{2/3} log n)}, and Holmsen, Mojarrad, Pach and Tardos (arXiv:1710.11415) improved the error term to O(√(n log n)) in the exponent. For n = 7 only partial computational results exist: a December 2025 single-author preprint (Dumitru, arXiv:2512.24061, unrefereed) gives a SAT encoding of the 33-point case with triple-orientation variables, a 4-set convexity criterion and convex-layer anchoring, and obtains UNSAT certificates only for anchored subfamilies, reporting heavy-tailed solver runtimes. No complete resolution, human or AI-produced, was found as of 2026-10-16.

# Applications

None practical. Methodologically it is a benchmark for SAT solving with symmetry breaking and for proof-certificate checking in finite geometry.

# Resolution criteria

A complete certified proof (e.g. a DRAT/LRAT certificate of unsatisfiability of the full 33-point encoding, checked by a verified checker) that no 33-point set avoids a convex 7-gon, or an explicit counterexample set of 33 points. Partial subfamily certificates do not count.

# Rating rationale

Difficulty 45: a finite, fully specified question whose expected answer is yes, with a visible route (symmetry breaking plus large-scale certified SAT), but ES(6) was already a major 2006 computation and the 33-point instance is far larger; this places it below r(4,t) (55) and cap sets (58) and far below the infinite Hadwiger–Nelson problem (79). Application value 1.8: none beyond SAT benchmarking. Leverage 14: it would confirm one more case without implying the general conjecture, the lowest in the area.

# Work mix rationale

Mostly a computation, but cracking the instance needs better symmetry breaking and encodings (theory), plus a verified proof-checking pipeline.

# Verification

Quantity: whether 33 points in general position always contain a convex heptagon, i.e. ES(7) = 33. Resolution is a complete certificate: a DRAT/LRAT proof of unsatisfiability of the full 33-point SAT encoding checked by a verified checker, or an explicit set of 33 points in general position with no convex heptagon; partial subfamily certificates do not count. The Lean statement of the general conjecture is `Erdos107.erdos_107` (f(n) = 2^(n−2) + 1) in [ErdosProblems/107.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/107.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)); its n = 7 instance is the target, and the correspondence between the SAT encoding and that statement must be reviewed or proved.

# Plain explanation

Scatter points on a sheet of paper, with no three on a straight line. Can you always pick some of them that form a convex polygon, a shape with no dents, such as a triangle, a rectangle or a pentagon?

In 1935, Paul Erdős and George Szekeres showed that for any size you want, enough points guarantee such a polygon. For a convex polygon with n corners, how many points do you need? They guessed the answer is two to the power n minus two, plus one. For four corners that is five points, for five corners nine, for six corners seventeen, and for seven corners thirty-three.

The guess is confirmed for polygons with up to six corners. The five-corner case was settled by 1970. The six-corner case needed a huge computer search in 2006, which has since been re-verified by other computer methods. For seven corners, nobody has settled it. The difficulty is that the number of possible arrangements of 33 points explodes, so brute force is not feasible.

A lower bound is known: there are arrangements of 32 points with no convex seven-gon, so at least 33 are needed. The question is whether 33 suffice, or if you need more.

A picture of points on a table suggests the problem is easy. The catch is that you must prove it for every possible scatter, not just the ones you try.

# Student explanation

**Definition.** Let $\mathrm{ES}(n)$ be the least $N$ such that every set of $N$ points in the plane in general position (no three collinear) contains $n$ points in convex position (the vertices of a convex $n$-gon). Erdős and Szekeres proved in 1935 that $\mathrm{ES}(n)$ is finite and conjectured $\mathrm{ES}(n)=2^{n-2}+1$. In 1960–61 they gave a construction showing $\mathrm{ES}(n)\ge2^{n-2}+1$, by explicit sets of $2^{n-2}$ points with no convex $n$-gon.

**Known values.** $\mathrm{ES}(4)=5$, $\mathrm{ES}(5)=9$ (Makai, unpublished; first published proof by Kalbfleisch, Kalbfleisch and Stanton, 1970), $\mathrm{ES}(6)=17$ (Szekeres and Peters, ANZIAM J. 2006, by exhaustive computer search; re-verified by SAT-based and formal methods, e.g. Scheucher, and Marić in Isabelle/HOL). **Problem:** show $\mathrm{ES}(7)=33$, i.e. that every $33$-point set in general position contains a convex $7$-gon, or find a counterexample (a $33$-point set with none).

**Asymptotics.** Suk (2016; JAMS 2017) proved $\mathrm{ES}(n)=2^{n+O(n^{2/3}\log n)}$, the first result close to the conjecture; Holmsen, Mojarrad, Pach and Tardos (arXiv 1710.11415) improved the error term in the exponent to $O(\sqrt{n\log n})$. These show the conjectured exponential growth is right, but give no exact numbers for small $n$.

**Why $n=7$ is hard.** The Szekeres–Peters method encodes configurations by _signatures_: for each triple of points, whether it turns clockwise or anticlockwise. A convex $n$-gon can be detected from triple orientations alone, so the problem becomes a purely combinatorial one about assignments of orientations satisfying consistency axioms. For $n=6$ this still needed a long computer search; for $n=7$ the space is far larger. A December 2025 single-author preprint (Dumitru, arXiv 2512.24061, unrefereed) gives a SAT encoding of the 33-point case with triple-orientation variables; it reports only partial computational results.

**What is needed.** Either clever symmetry-breaking and stronger SAT encodings that make the 33-point case feasible, or a new theoretical argument. A counterexample would be a surprise, as the conjecture has stood since 1935 and matches the asymptotics.

**Related.** Erdős–Szekeres problems are part of discrete geometry and Ramsey theory; the problem shares computational methods with the Hadwiger–Nelson problem and relates to the proof-search theory of SAT solvers.
