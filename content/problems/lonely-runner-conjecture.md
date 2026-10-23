---
type: problem
slug: lonely-runner-conjecture
title: The lonely runner conjecture for all numbers of runners
entry: extremal-combinatorics
status: PARTIAL
origin: Jörg Wills (1967) and Thomas Cusick (1973)
ratings:
  difficulty: 60
  applicationValue: 3
  leverage: 20
workMix:
  theory: 45
  engineering: 5
  compute: 50
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: lonely runner conjecture (Lean statement)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/LonelyRunnerConjecture.lean
  - title: "Rosenfeld: The lonely runner conjecture holds for eight runners (arXiv:2509.14111, preprint)"
    url: https://arxiv.org/abs/2509.14111
  - title: "Trakulthongchai: Nine and ten lonely runners (arXiv:2511.22427, preprint)"
    url: https://arxiv.org/abs/2511.22427
  - title: "Sungkawichai, Trakulthongchai: Eleven, twelve, and thirteen lonely runners (arXiv:2604.23906, preprint)"
    url: https://arxiv.org/abs/2604.23906
  - title: "Tao: Some remarks on the lonely runner conjecture (arXiv:1701.02048)"
    url: https://arxiv.org/abs/1701.02048
  - title: "Malikiosis, Santos, Schymura: Linearly-exponential checking is enough for the Lonely Runner Conjecture (arXiv:2411.06903)"
    url: https://arxiv.org/abs/2411.06903
  - title: Lonely runner conjecture (Wikipedia, status table)
    url: https://en.wikipedia.org/wiki/Lonely_runner_conjecture
timeline:
  - date: 2008-01-01
    title: Seven runners
    body: Barajas and Serra prove the case of 7 runners (year only known).
    source: https://en.wikipedia.org/wiki/Lonely_runner_conjecture
  - date: 2017-01-01
    title: Tao's bound and finite-checking reduction
    body: Tao improves the general lower bound on the gap of loneliness and reduces each case to a finite check (arXiv, January 2017; published 2018).
    source: https://arxiv.org/abs/1701.02048
  - date: 2025-09-17
    title: Eight runners
    body: Rosenfeld's computer-assisted proof for 8 runners (preprint).
    source: https://arxiv.org/abs/2509.14111
  - date: 2025-11-27
    title: Nine and ten runners
    body: Trakulthongchai adds a sieve-based refinement for 9 and 10 runners (preprint).
    source: https://arxiv.org/abs/2511.22427
  - date: 2026-04-26
    title: Eleven, twelve and thirteen runners (preprint)
    body: Sungkawichai and Trakulthongchai post computer-assisted proofs for 11, 12 and 13 runners (k = 10, 11, 12 moving runners); version 2 dated 1 September 2026.
    source: https://arxiv.org/abs/2604.23906
explainer:
  oneLine: Does each of n runners at distinct speeds get a moment at least 1/n of a lap from all others?
  flow:
    - Runners start together at different speeds
    - Each wants a gap of 1/n lap
    - True up to 7 runners; computers push on
    - No proof for every number of runners
  glossary:
    - term: Diophantine approximation
      meaning: The study of how well real numbers can be approximated by fractions.
      link: https://en.wikipedia.org/wiki/Diophantine_approximation
    - term: view obstruction
      meaning: A geometric problem asking when a line of sight is blocked by lattice-point obstacles.
      link: https://en.wikipedia.org/wiki/Lonely_runner_conjecture
    - term: circle group
      meaning: The real numbers with whole-number differences ignored, like positions on a track.
      link: https://en.wikipedia.org/wiki/Circle_group
    - term: computer-assisted proof
      meaning: A proof where a part is a computer search that must itself be trusted or verified.
      link: https://en.wikipedia.org/wiki/Computer-assisted_proof
    - term: Lean statement
      meaning: The conjecture written in the strict language of the Lean proof assistant.
      link: /research/formal-conjectures-corpus
  readFirst:
    - title: Lonely runner conjecture (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lonely_runner_conjecture
      why: History, equivalents and a table of proved cases.
    - title: "Tao: Some remarks on the lonely runner conjecture"
      url: https://arxiv.org/abs/1701.02048
      why: The best general bound and the finite-checking reduction.
    - title: "Formal Conjectures: lonely runner"
      url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/LonelyRunnerConjecture.lean
      why: The exact Lean statement.
raw:
  stateOfArt: "**Proved for small $n$:** up to 4 runners by Betke and Wills (1972) and Cusick (1974), 5 by Cusick and Pomerance (1984, computer-assisted), 6 by Bohman, Holzman and Kleitman (2001), 7 by Barajas and Serra (2008). **Recent computer-assisted extensions (2025 and 2026):** Rosenfeld proved 8 runners ([arXiv:2509.14111](https://arxiv.org/abs/2509.14111)); Trakulthongchai proved 9 and 10 ([arXiv:2511.22427](https://arxiv.org/abs/2511.22427)), independently of Rosenfeld's separate 9-runner write-up ([arXiv:2512.01912](https://arxiv.org/abs/2512.01912)); and Sungkawichai and Trakulthongchai proved 11, 12 and 13 runners ([arXiv:2604.23906](https://arxiv.org/abs/2604.23906), v2 September 2026). Runner counts here include every runner, as the Formal Conjectures statement does; papers that fix one runner at speed 0 count only the $k$ moving ones, so their $k = 10, 11, 12$ are 11, 12 and 13 runners. These are preprints and not yet verified in Lean. **General bound:** Tao (arXiv 2017, published 2018) proved that with $n$ runners some time gives a gap of at least $1/(2n-2)$ plus a correction of order $\\log n/(n^2(\\log\\log n)^2)$, about half of the conjectured $1/n$. **Finite checking:** Tao reduced the conjecture for a given $n$ to integer speeds of size $n^{O(n^2)}$, and Malikiosis, Santos and Schymura ([arXiv:2411.06903](https://arxiv.org/abs/2411.06903), *Forum Math. Sigma* 2025) improved this to speeds at most about $n^{2n}$, which is what makes each new case a computation."
site:
  aiReviewed: true
---

Take $n$ runners on a circular track of length 1, all starting at the same point at time 0 and running at constant, pairwise distinct speeds (negative speeds allowed). A runner is **lonely** at time $t$ if its distance along the track to every other runner is at least $1/n$. The conjecture: every runner is lonely at some time $t \ge 0$.

Lean 4 statement in the Formal Conjectures corpus:

```lean
theorem lonely_runner_conjecture (n : ℕ)
    (speed : Fin n ↪ ℝ) (lonely : Fin n → ℝ → Prop)
    (lonely_def :
      ∀ r t, lonely r t ↔
        ∀ r2 : Fin n, r2 ≠ r →
        dist (t * speed r : UnitAddCircle) (t * speed r2) ≥ 1 / n)
    (r : Fin n) : ∃ t ≥ 0, lonely r t
```

The goal is the statement for every $n$, not a fixed small $n$.

# Applications

Directly none. The problem is equivalent to statements about view obstruction in lattices and to a covering problem for real numbers by Diophantine approximation, with connections to flows in graphs, so progress feeds geometry of numbers rather than any technology.

# Resolution criteria

A Lean proof of `lonely_runner_conjecture` for all $n$. Verified intermediate results, such as the statement for each fixed $n \le 13$ with the case-by-case computation re-run inside Lean, count as PARTIAL progress.

# Rating rationale

Difficulty 60: sixty years old, and computation now settles one or more cases a year (8 to 13 runners in 2025–2026, preprints), but the general bound is only half the conjectured gap and no uniform argument is in sight; research-grade, below kissing number five (64) and union-closed sets (66), above cap sets (58). Application value 3: none beyond Diophantine approximation and view-obstruction problems. Leverage 20: equivalent formulations in view obstruction, flows in graphs and covering problems would follow, but few results are conditional on it.

# Work mix rationale

Each new case is a computer search justified by a reduction theorem; the general case needs a structural argument beyond finite checking.

# Verification

Statement: `LonelyRunnerConjecture.lonely_runner_conjecture` in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/LonelyRunnerConjecture.lean) (quoted above; the file also defines `deltaTuple`, `deltaGap` and states Tao's bound as `lonely_runner_conjecture.variants.tao_2017`). Mathlib has the circle $\mathbb{R}/\mathbb{Z}$ as `UnitAddCircle` with a metric ([Topology.Instances.AddCircle](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Topology/Instances/AddCircle/Defs.html)), so no new definitions are needed. A full proof must work for every $n$. A verifiable PARTIAL milestone is the same statement specialised to a fixed $n$ (for example $n = 8$), proved in Lean either by formalizing the finite-checking reduction or by a certified exhaustive search; statements must still match the corpus after the specialisation. Judge with Comparator.

# Plain explanation

Picture a round running track. Several runners start from the same spot at the same time and run at steady, different speeds, some maybe in the opposite direction. The lonely runner conjecture says that, however you pick the speeds, each runner will at some point be lonely: far from everyone else, at least an equal share of the track away. With four runners, for instance, that share is a quarter of a lap.

Why this share? It is the best you could hope for, since if runners were spread perfectly evenly each would be that far from the nearest neighbour. The conjecture says some moment will always come that is at least this good.

It is known to be true for up to seven runners by older work, and recent papers by computer search report eight and more, up to thirteen. Nobody can prove it for any number of runners. Each new case takes more computer time than the last, so a computer alone will not finish it. The checking route is Lean, where a proof would be a file the computer accepts.

# Student explanation

**Statement.** Distinct real speeds $v_1,\dots,v_n$. For each $i$ there is $t\ge0$ with $\|t(v_i-v_j)\|\ge 1/n$ for all $j\ne i$, where $\|x\|$ is the distance to the nearest integer. In Lean: distances in `UnitAddCircle` at least $1/n$.

**Equivalent view.** Subtracting the speed of runner $i$ reduces the problem to: for distinct nonzero speeds $w_1,\dots,w_{n-1}$ there is $t$ with $\|tw_j\|\ge\frac1n$ for all $j$. The best constant can only be $\frac1n$ (attained for $w_j=j$).

**Known results.** Cases up to 7 runners (Betke–Wills, Cusick–Pomerance, Bohman–Holzman–Kleitman, Barajas–Serra). _General bound:_ Tao (2018) showed that some time gives a distance of at least $\frac1{2n-2}+c\frac{\log n}{n^2(\log\log n)^2}$ for large $n$, about half of the conjectured $\frac1n$. _Finite checking:_ it suffices to consider integer speeds up to $n^{O(n^2)}$ (Tao), improved to speeds up to about $n^{2n}$ (Malikiosis–Santos–Schymura, 2025), which makes a case a finite search. _Recent preprints_ report computer-assisted proofs for 8 runners (Rosenfeld, 2025), 9 and 10 (Trakulthongchai, 2025; Rosenfeld separately for 9) and 11, 12 and 13 (Sungkawichai–Trakulthongchai, 2026). Papers that fix one runner at speed 0 count only the moving runners, so they call the last cases $k=10,11,12$.

**Obstacle.** The cost of each case grows quickly and there is no uniform argument; the general bound is below the required $\frac1n$ by a factor of about two.

**Check.** The statement is in the Formal Conjectures corpus. Partial results can be recorded as Lean proofs for a fixed $n$.

**Small case, worked.** For two runners at speeds 0 and 1, the gap between them reaches $1/2$ at time $1/2$, which is exactly the required $1/n$. For three runners with relative speeds 1 and 2, at time $1/3$ the positions are $1/3$ and $2/3$ and every pair is at least $1/3$ apart, again exactly $1/n$. These examples show the bound $1/n$ cannot be improved.

**Other formulations.** The conjecture is equivalent to a view-obstruction problem (a ray from the origin in a cube of points avoiding small cubes) and to a covering statement for real numbers modulo 1, which is why it appears in the literature of several fields.
