---
type: problem
slug: strong-exponential-time-hypothesis
title: "Strong Exponential Time Hypothesis: no (2−ε)ⁿ-time algorithm for k-SAT as k → ∞"
entry: fine-grained-complexity
status: OPEN
origin: Russell Impagliazzo and Ramamohan Paturi (1999; JCSS 2001); named SETH by Calabro, Impagliazzo and Paturi (2009)
ratings:
  difficulty: 88
  applicationValue: 21
  leverage: 81
workMix:
  theory: 94
  engineering: 1
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Impagliazzo, Paturi, Zane: Which Problems Have Strongly Exponential Complexity? (JCSS 2001)"
    url: https://khoury.northeastern.edu/~viola/classes/papers/ImpagliazzoPaturiZane01Which.pdf
  - title: "Backurs and Indyk: Edit Distance Cannot Be Computed in Strongly Subquadratic Time (unless SETH is false)"
    url: https://arxiv.org/abs/1412.0348
  - title: "Abboud, Backurs, Vassilevska Williams: Quadratic-Time Hardness of LCS and other Sequence Similarity Measures"
    url: https://arxiv.org/abs/1501.07053
  - title: "Abboud, Hansen, Vassilevska Williams, Williams: Simulating Branching Programs with Edit Distance and Friends"
    url: https://arxiv.org/abs/1511.06022
  - title: "Carmosino et al.: Nondeterministic Extensions of the Strong Exponential Time Hypothesis"
    url: https://people.csail.mit.edu/virgi/6.s078/papers/nseth.pdf
  - title: "Alman and Vassilevska Williams: Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs (preprint, 2026)"
    url: https://arxiv.org/abs/2610.06783
links:
  - to: p-vs-np
    kind: IMPLIES
    note: SETH implies ETH, which implies P ≠ NP, so a proof of SETH would resolve P vs NP in the expected direction.
  - to: apsp-3sum-hypotheses
    kind: RELATED
    note: SETH, APSP and 3SUM are the three base hypotheses of fine-grained complexity; under NSETH there are no deterministic fine-grained reductions from SAT to 3SUM or APSP (Carmosino et al.), and the 2026 preprint refuting the APSP and 3SUM hypotheses states that SETH is unaffected.
timeline:
  - date: 2001-01-01
    title: ETH, SETH and sparsification
    body: Impagliazzo, Paturi and Zane published the sparsification lemma and the ETH framework in JCSS 2001 (conference versions 1998–99; month not given here).
    source: https://khoury.northeastern.edu/~viola/classes/papers/ImpagliazzoPaturiZane01Which.pdf
  - date: 2014-12-01
    title: Edit distance is SETH-hard
    body: Backurs and Indyk proved that strongly subquadratic edit distance would refute SETH (arXiv December 2014; STOC 2015).
    source: https://arxiv.org/abs/1412.0348
  - date: 2015-01-28
    title: LCS is SETH-hard
    body: Abboud, Backurs and Vassilevska Williams showed that truly subquadratic longest common subsequence would refute SETH.
    source: https://arxiv.org/abs/1501.07053
  - date: 2026-10-05
    title: 3SUM and APSP hypotheses refuted in a preprint; SETH unaffected
    body: Alman and Vassilevska Williams posted O(n^1.9992) 3SUM and O(n^2.9995) APSP algorithms for polynomially bounded integers; the paper states that SETH and Orthogonal Vectors are unaffected. Not yet refereed.
    source: https://arxiv.org/abs/2610.06783
explainer:
  oneLine: The belief that for logic puzzles with long clauses, trying nearly all settings is essentially the best you can do.
  flow:
    - Brute force tries 2ⁿ settings
    - No big shortcut found in decades
    - "SETH: none exists for long rules"
    - Faster text comparison would break it
    - So those speeds look unbeatable
  glossary:
    - term: k-SAT
      meaning: Logic puzzles whose rules each mention at most k variables.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: Exponential Time Hypothesis (ETH)
      meaning: The belief that 3-SAT needs time that grows exponentially with the number of variables.
      link: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
    - term: brute force
      meaning: Solving a problem by trying every possible option.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: fine-grained reduction
      meaning: A translation between problems that preserves running time, so a speed-up for one gives a speed-up for the other.
      link: https://en.wikipedia.org/wiki/Fine-grained_reduction
    - term: Orthogonal Vectors
      meaning: Given two lists of 0-1 vectors, find a pair, one from each, with no position where both have a 1.
      link: /research/fine-grained-complexity
    - term: edit distance
      meaning: The fewest single-letter changes needed to turn one text into another.
      link: https://en.wikipedia.org/wiki/Edit_distance
    - term: P versus NP
      meaning: The question of whether every problem with quickly checkable answers can also be solved quickly.
      link: /research/computational-complexity
    - term: 3SUM
      meaning: Finding three numbers in a list that add up to zero.
      link: https://en.wikipedia.org/wiki/3SUM
    - term: exponential time
      meaning: Running time that multiplies by a constant for each extra input item, like 2ⁿ.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: PPSZ algorithm
      meaning: The best known family of k-SAT algorithms, which mixes random guessing with simple reasoning; its savings shrink as k grows.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
  readFirst:
    - title: Exponential time hypothesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Exponential_time_hypothesis
      why: States ETH and SETH and lists the consequences.
    - title: Edit distance (Wikipedia)
      url: https://en.wikipedia.org/wiki/Edit_distance
      why: The best-known everyday problem whose speed is tied to SETH.
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: The puzzle at the centre of the hypothesis.
site:
  aiReviewed: true
---

For $k\ge 3$ let $s_k=\inf\{c:\ k\text{-SAT on } n \text{ variables can be solved in time } O(2^{cn})\}$, where algorithms may be randomised. The _Strong Exponential Time Hypothesis_ (SETH) states that $\lim_{k\to\infty}s_k=1$. Equivalently, for every $\varepsilon>0$ there is an integer $k$ such that $k$-SAT cannot be solved in time $O\big((2-\varepsilon)^{n}\big)$. The question is whether SETH is true. It implies the weaker Exponential Time Hypothesis ($s_3>0$, i.e. 3-SAT needs $2^{\Omega(n)}$ time), which in turn implies $\mathsf{P}\ne\mathsf{NP}$.

# State of the art

The best known $k$-SAT algorithms (PPSZ and its refinements) run in time $2^{(1-c/k)n}$ for a constant $c>0$, consistent with SETH; for CNF-SAT with $n$ variables and $m$ clauses the best savings are about $2^{n(1-1/O(\log(m/n)))}$. Since the 2010s SETH has been one of the main assumptions of fine-grained complexity. Williams (2005) showed that Orthogonal Vectors in truly subquadratic time would refute SETH. Backurs and Indyk (arXiv December 2014; STOC 2015) showed the same for edit distance in $O(n^{2-\delta})$ time, and Abboud, Backurs and Vassilevska Williams (2015) and Bringmann and Künnemann (2015) for longest common subsequence. Abboud, Hansen, Vassilevska Williams and Williams (2016) derived the edit-distance and LCS bounds from much weaker hypotheses about branching programs. On the limits of SETH-based hardness, Carmosino, Gao, Impagliazzo, Mihajlin, Paturi and Schneider (2016) showed that if the nondeterministic variant NSETH holds, there are no deterministic fine-grained reductions from SAT to 3SUM or APSP. As of October 2026 SETH is neither proved nor refuted. A preprint by Alman and Vassilevska Williams (arXiv:2610.06783, 5 October 2026, unrefereed) gives truly subquadratic 3SUM and truly subcubic APSP algorithms, refuting the 3SUM and APSP hypotheses; the authors list SETH and Orthogonal Vectors as unaffected.

# Applications

SETH-based lower bounds tell algorithm designers where not to look: for example, that a truly subquadratic exact edit-distance algorithm, which would be valuable for genome comparison, is unlikely. Refuting SETH would require a $(2-\varepsilon)^n$ algorithm for SAT of unbounded clause width and would yield faster exact algorithms for Orthogonal Vectors and related problems in theory, but the expected practical impact on SAT solving is small because practical solvers exploit structure rather than worst-case exponents.

# Resolution criteria

A refutation accepted by experts: an algorithm and $\varepsilon>0$ that solve $k$-SAT in $O((2-\varepsilon)^n)$ time for every $k$, or a truly subquadratic algorithm for a problem known to be SETH-hard via a fine-grained reduction (for example Orthogonal Vectors or edit distance). A proof of SETH would also resolve it but is far beyond current techniques, since it would imply $\mathsf{P}\ne\mathsf{NP}$.

# Rating rationale

Difficulty 88: proving SETH would imply P ≠ NP, so the proof direction is at least as hard as the anchor, and 25 years of attempts at a refutation have failed; it sits just below the Millennium-level problems only because a refutation by a clever SAT algorithm is a live possibility. Application value 21: like UGC (16) it mainly guides algorithm designers, though a refutation would at least give faster exponential-time algorithms. Leverage 81: hundreds of fine-grained lower bounds rest on it, more than on UGC (79) and second in complexity theory only to P vs NP.

# Work mix rationale

Proving SETH is harder than proving P ≠ NP, and refuting it needs a new SAT algorithm paradigm. Both are theory problems; compute serves only experiments with algorithm variants.

# Verification

A refutation is an algorithm with a running-time analysis, and a proof of SETH would imply P != NP, so neither can be machine-checked today: Mathlib has no fine-grained running-time framework. Experts judge the algorithm and its analysis. A benchmark can show practical speed but cannot settle an asymptotic claim.

# Plain explanation

Take a logic puzzle with n on/off switches and a list of rules. Brute force tries every setting: about 2 to the power n tries. Each extra switch doubles the work. Clever solvers do somewhat better, but for puzzles with long rules nobody has found a method that is meaningfully faster than doubling per switch.

The Strong Exponential Time Hypothesis, SETH, turns this experience into a precise belief: however small an improvement you name on "double the work per extra switch" (say, multiply by 1.99 instead), there are puzzles with long enough rules where no method achieves it.

Nobody can prove it. If it were false, the proof would be a faster algorithm. If it is true, proving it would also settle the famous P versus NP question, so a proof is far out of reach.

Why do people care? Many everyday problems have run in about n times n steps for decades, such as comparing two long texts. Researchers have shown that a faster method for those would break SETH. So SETH works as a reason to stop looking for the faster method. It is a bit like noticing that every attempt to dig a tunnel hits the same rock layer.

It is a belief based on lack of progress, not a theorem. Some recent claims about related hypotheses are unrefereed, and the authors say SETH is not affected.

# Student explanation

**Statement.** For $k\ge3$ let $s_k$ be the infimum of numbers $c$ such that $k$-SAT on $n$ variables can be solved in time $O(2^{cn})$ (randomised algorithms allowed). SETH says $\lim_{k\to\infty}s_k=1$. Equivalently: for every $\varepsilon>0$ there is a $k$ such that $k$-SAT cannot be solved in time $O((2-\varepsilon)^n)$.

**Place in the hierarchy.** SETH implies the weaker Exponential Time Hypothesis (ETH: 3-SAT needs time $2^{\Omega(n)}$), which in turn implies $\mathsf{P}\ne\mathsf{NP}$. SETH is the strongest of the three, so it is the easiest to refute (refuting ETH would also refute SETH) and the hardest to prove: a proof of SETH would prove $\mathsf{P}\ne\mathsf{NP}$.

**Evidence.** The best known $k$-SAT algorithms (PPSZ and its refinements) run in time $2^{(1-c/k)n}$ for a constant $c>0$: the saving per variable shrinks as $k$ grows, consistent with SETH. For general CNF with $n$ variables and $m$ clauses, the best savings are small.

**Why it is used.** Since the 2010s SETH has been a central assumption of _fine-grained complexity_. Williams (2005) showed that an Orthogonal Vectors algorithm in truly subquadratic time would refute SETH. Backurs and Indyk (2015) showed the same for edit distance in $O(n^{2-\delta})$ time, and others showed it for longest common subsequence. So these quadratic-time textbook algorithms are optimal unless SETH fails.

**Limits of SETH-based hardness.** Carmosino, Gao, Impagliazzo, Mihajlin, Paturi and Schneider (2016) showed that if a nondeterministic variant (NSETH) holds, there are no deterministic fine-grained reductions from SAT to 3SUM or All-Pairs Shortest Paths. That is why those problems have their own hypotheses.

**Status.** SETH is neither proved nor refuted. A preprint by Alman and Vassilevska Williams (October 2026, unrefereed) claims truly subquadratic 3SUM and truly subcubic APSP algorithms; the authors list SETH and Orthogonal Vectors as unaffected.

**What would count as progress.** A refutation would be a $(2-\varepsilon)^n$-time algorithm for $k$-SAT at all $k$. A proof would need a method that is not currently within sight, since it would imply P differs from NP.
