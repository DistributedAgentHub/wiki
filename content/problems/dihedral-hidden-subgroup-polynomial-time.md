---
type: problem
slug: dihedral-hidden-subgroup-polynomial-time
title: A polynomial-time quantum algorithm for the dihedral hidden subgroup problem
entry: shor-factoring-hidden-subgroup
status: OPEN
origin: Regev, 2002 (link to lattices); Kuperberg, 2003 (subexponential algorithm)
ratings:
  difficulty: 80
  applicationValue: 70
  leverage: 62
workMix:
  theory: 90
  engineering: 0
  compute: 10
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: Kuperberg, A subexponential-time quantum algorithm for the dihedral hidden subgroup problem (SIAM J. Comput. 2005)
    url: https://arxiv.org/abs/quant-ph/0302112
  - title: Regev, Quantum Computation and Lattice Problems (FOCS 2002; SIAM J. Comput. 2004)
    url: https://arxiv.org/abs/cs/0304005
  - title: Regev, A Subexponential Time Algorithm for the Dihedral Hidden Subgroup Problem with Polynomial Space (2004)
    url: https://arxiv.org/abs/quant-ph/0406151
  - title: Kuperberg, Another subexponential-time quantum algorithm for the dihedral hidden subgroup problem (TQC 2013)
    url: https://arxiv.org/abs/1112.3333
  - title: Ettinger, Høyer, Knill, The quantum query complexity of the hidden subgroup problem is polynomial (IPL 2004)
    url: https://arxiv.org/abs/quant-ph/0401083
  - title: Brakerski, Kirshanova, Stehlé, Wen, Learning With Errors and Extrapolated Dihedral Cosets (PKC 2018)
    url: https://arxiv.org/abs/1710.08223
  - title: Simon, A Polynomial-Time Quantum Algorithm for the Dihedral Coset Problem (IACR ePrint 2026/1591, disputed)
    url: https://eprint.iacr.org/2026/1591
  - title: Gupte, Ragavan, Zhandry, The ePrint:2026/1591 Quantum Algorithm Does Not Solve DCP (IACR ePrint 2026/1693)
    url: https://eprint.iacr.org/2026/1693
  - title: Gupte, Ragavan, Zhandry, A Fourier-Label Information-Loss Barrier for Dihedral Coset Algorithms (preprint, 2026)
    url: https://arxiv.org/abs/2609.40062
  - title: Guo, Yang, Rigorous Statements and Proofs of the Lemmas in Simon's Algorithm for the Dihedral Coset Problem and Their Underlying Hypothesis (IACR ePrint 2026/1714)
    url: https://eprint.iacr.org/2026/1714
links:
  - to: lwe-quantum-hardness
    kind: RELATED
    note: By Regev (2002) a failure-tolerant polynomial-time DCP algorithm gives quantum algorithms for unique-SVP, and Brakerski et al. (2018) showed LWE is equivalent to extrapolated DCP, so the two problems share their main quantum line of attack.
timeline:
  - date: 2003-02-14
    title: Kuperberg's sieve
    body: Kuperberg gave the first subexponential algorithm.
    source: https://arxiv.org/abs/quant-ph/0302112
  - date: 2003-04-01
    title: Dihedral cosets and lattices
    body: Regev's reduction from unique-SVP to the dihedral coset problem appeared on arXiv (FOCS 2002).
    source: https://arxiv.org/abs/cs/0304005
  - date: 2017-10-23
    title: LWE equals extrapolated DCP
    body: Brakerski, Kirshanova, Stehlé and Wen showed LWE is equivalent to extrapolated DCP.
    source: https://arxiv.org/abs/1710.08223
  - date: 2026-08-11
    title: Polynomial-time claim (disputed)
    body: Simon posted a claimed polynomial-time DCP algorithm on IACR ePrint.
    source: https://eprint.iacr.org/2026/1591
  - date: 2026-09-30
    title: No-go theorem for the template
    body: Gupte, Ragavan and Zhandry posted a barrier for Fourier-label-discarding algorithms, with Lean code, applying it to Simon's algorithm; a preprint.
    source: https://arxiv.org/abs/2609.40062
explainer:
  oneLine: Find a fast quantum method for a symmetry puzzle whose solution could weaken the new quantum-safe encryption.
  flow:
    - Polygon symmetries hide a shift d
    - Copies of coset states contain d
    - Best extraction is subexponential
    - Fast solution would hit lattice crypto
    - Open; 2026 claim disputed
  glossary:
    - term: dihedral group
      meaning: The rotations and reflections of a regular polygon.
      link: https://en.wikipedia.org/wiki/Dihedral_group
    - term: hidden subgroup problem
      meaning: Finding an unknown subgroup from a function that is constant on its cosets.
      link: https://en.wikipedia.org/wiki/Hidden_subgroup_problem
    - term: coset
      meaning: A shifted copy of a subgroup inside a group.
      link: https://en.wikipedia.org/wiki/Coset
    - term: lattice
      meaning: A regular grid of points in many dimensions, the basis of lattice cryptography.
      link: https://en.wikipedia.org/wiki/Lattice_problem
    - term: shortest vector problem
      meaning: Finding the shortest nonzero point of a lattice; believed hard even for quantum computers.
      link: https://en.wikipedia.org/wiki/Lattice_problem
    - term: learning with errors
      meaning: A lattice problem used in post-quantum encryption standards.
      link: /research/lattice-cryptography
    - term: subexponential
      meaning: Growing faster than any polynomial in the input length but slower than exponential.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: Shor's algorithm
      meaning: The quantum factoring algorithm, which solves the commutative case.
      link: /research/shor-factoring-hidden-subgroup
  readFirst:
    - title: Hidden subgroup problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hidden_subgroup_problem
      why: The framework and its known cases.
    - title: Lattice-based cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lattice-based_cryptography
      why: What is at stake for encryption.
site:
  aiReviewed: true
---

The dihedral group $D_N$ of order $2N$ is generated by a rotation $\rho$ of order $N$ and a reflection $\sigma$. In the **dihedral hidden subgroup problem** an oracle computes a function on $D_N$ that is constant exactly on the cosets of an unknown subgroup $\{e,\sigma\rho^{d}\}$; the task is to find $d\in\mathbb Z_N$. The standard approach reduces it to the **dihedral coset problem** (DCP): given copies of states $\tfrac{1}{\sqrt2}(|0\rangle|x\rangle+|1\rangle|x+d \bmod N\rangle)$ with independent random $x$, output $d$. An equivalent form is the hidden shift problem on $\mathbb Z_N$: given injective $f,g$ with $f(x)=g(x+d)$, find $d$.

**Question:** is there a quantum algorithm that solves DCP in time polynomial in $\log N$? The cryptographically relevant strong form asks for an algorithm that still succeeds when a small fraction of the input states are faulty (Regev's failure parameter), since that version gives a quantum polynomial-time algorithm for the unique shortest vector problem within polynomial factors.

# State of the art

**Information versus computation.** Ettinger, Høyer and Knill (2004) showed that polynomially many coset states determine $d$ information-theoretically; the difficulty is extracting it efficiently.

**Subexponential algorithms.** Kuperberg (2003; SIAM J. Comput. 2005) gave an algorithm with time and query complexity $2^{O(\sqrt{\log N})}$ that combines coset states pairwise to cancel low-order bits, with superpolynomial space. Regev (2004) reduced the space to polynomial at subexponential time, and Kuperberg (2011; TQC 2013) gave a second algorithm with $2^{O(\sqrt{\log N})}$ quantum time and $O(\log N)$ quantum space, trading classical space and time. No polynomial-time algorithm is known after more than twenty years.

**Link to lattices.** Regev (2002; SIAM J. Comput. 2004) showed that solving DCP with a failure parameter gives a quantum algorithm for $\mathrm{poly}(n)$-unique-SVP, and that DCP reduces to an average-case subset-sum problem. Brakerski, Kirshanova, Stehlé and Wen (PKC 2018) showed that LWE is equivalent, under quantum polynomial-time reductions, to a relaxed _extrapolated_ DCP, so breaking LWE may not need the full DCP.

**2026 claim, disputed.** Simon (IACR ePrint 2026/1591, August 2026) claimed a polynomial-time quantum algorithm for DCP. Gupte, Ragavan and Zhandry argued that it does not solve DCP (ePrint 2026/1693) and proved a broader no-go theorem for algorithms in Regev's Fourier-sampling and subset-sum template that discard more than $\omega(\log n)$ bits of the Fourier labels, with Lean 4 code (arXiv:2609.40062, preprint). Guo and Yang (ePrint 2026/1714) gave rigorous proofs of the claim's lemmas, with fixes, and identified an unproven hypothesis about its partition rule. The claim has been revised and not withdrawn, and is not accepted as a solution.

# Applications

Cryptanalysis. Through Regev's reduction and the Brakerski–Kirshanova–Stehlé–Wen equivalence, a polynomial-time DCP algorithm that tolerates faulty samples would give quantum polynomial-time attacks on lattice problems behind LWE-based schemes in some parameter regimes; whether standardised parameter sets would fall depends on the exact reduction losses. Kuperberg-type hidden-shift algorithms are also the main quantum attack on the isogeny-based scheme CSIDH, which works in an abelian class group, so a polynomial-time hidden-shift algorithm would affect its parameters too. A negative result for broad algorithm classes would strengthen confidence in post-quantum lattice cryptography.

# Resolution criteria

A quantum algorithm for DCP (or the cyclic hidden shift problem) with a proof of success probability and running time polynomial in log N, ideally tolerating faulty samples, accepted by experts after public scrutiny. A proof that no polynomial-time algorithm exists is out of reach (the query complexity is already polynomial), so negative progress counts as no-go theorems for broad algorithm families.

# Rating rationale

Difficulty 80: open for over twenty years with only subexponential algorithms, and a failure-tolerant polynomial-time algorithm would via Regev's reduction also give quantum algorithms for lattice problems, so it sits just above the LWE quantum-hardness problem (79) and below the ω problem (82). Application value 70: it is the main known quantum route to lattice and isogeny cryptanalysis, below LWE itself (80) because the reductions lose parameters and the problem is sufficient rather than necessary for an LWE break. Leverage 62: it organises non-abelian hidden subgroup research and much of the quantum cryptanalysis of post-quantum schemes, comparable to the verifiable-advantage problem (60).

# Work mix rationale

The question is purely algorithmic; computation helps only to test candidate algorithms on small instances and to formalise lemmas.

# Verification

Expert review of the algorithm and its proof: success probability and running time polynomial in $\log N$ for every hidden shift $d$, the fraction of faulty samples tolerated, and how the result composes with Regev's and Brakerski–Kirshanova–Stehlé–Wen's reductions. Small-$N$ simulations (for example $N\le 2^{20}$ with a state-vector or stabilizer-plus-classical simulator) can catch errors but cannot confirm asymptotic claims, and a Lean 4 formalisation of the key lemmas, as done for the 2026 no-go theorem, is strongly encouraged.

# Plain explanation

Shor's algorithm breaks today's encryption by finding a hidden pattern in a group of operations that can be done in any order. Many similar puzzles involve groups where the order matters, and those are much harder.

The most important one involves the dihedral group, the symmetries of a regular polygon: its rotations and flips. A quantum computer is given special states that each hide the same unknown number, the 'shift', and must find it. In principle a modest number of these states contains the answer. The best known method to extract it, found by Greg Kuperberg in 2003, is much faster than ordinary methods but still too slow to be called efficient.

This matters because Oded Regev showed that a fast enough method would also crack problems about lattices, grids of points in many dimensions. Those lattice problems protect the new 'post-quantum' encryption standards meant to survive quantum computers. In 2026 a researcher claimed a fast method; other experts published reasons it fails, and it is not accepted. So the puzzle stays open, and its difficulty is part of why lattice encryption is trusted.

# Student explanation

**The group.** The dihedral group $D_N$ has $N$ rotations and $N$ reflections of a regular $N$-gon, so $2N$ elements, and rotations and reflections do not commute.

**The coset problem.** The standard approach gives you copies of two-term states
$\tfrac{1}{\sqrt2}\big(|0\rangle|x\rangle+|1\rangle|x+d \bmod N\rangle\big),$
each with a fresh random $x$ and the same unknown $d$. Find $d$. Measuring the second register directly gives only $x$ or $x+d$, which is useless; you must use interference between many copies.

**What is known.** Polynomially many copies determine $d$ in principle. Kuperberg's algorithm (2003) uses a _sieve_: apply a Fourier transform to each copy, which turns it into a state labelled by a random number $k$ with a phase that depends on $kd$; combine pairs whose labels nearly match to cancel low-order bits, building up states that reveal one bit of $d$ at a time. Its cost is $2^{O(\sqrt{\log N})}$: faster than any polynomial in $N$, but slower than any polynomial in $\log N$, the number of digits.

**Why cryptographers care.** Regev (2002) showed that solving this problem, even when some copies are faulty, would give a quantum algorithm for the unique shortest vector problem in lattices. In 2018 the learning with errors (LWE) problem, the basis of new encryption standards, was shown to be equivalent to a relaxed version. A fast algorithm would therefore endanger lattice-based encryption, depending on parameters.

**2026.** A claimed polynomial-time algorithm was posted in August 2026; others argued with proofs and Lean code that it does not work, and it is not accepted.
