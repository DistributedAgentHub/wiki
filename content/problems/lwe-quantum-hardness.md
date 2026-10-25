---
type: problem
slug: lwe-quantum-hardness
title: "Learning With Errors: a polynomial-time quantum algorithm at polynomial modulus-to-noise ratio?"
entry: lattice-cryptography
status: OPEN
origin: Oded Regev, 2005 (definition of LWE and the quantum worst-case reduction); quantum algorithms for the underlying dihedral coset problem studied since Kuperberg (2003)
ratings:
  difficulty: 79
  applicationValue: 80
  leverage: 82
workMix:
  theory: 87
  engineering: 3
  compute: 10
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: Regev, On lattices, learning with errors, random linear codes, and cryptography (J. ACM 2009; STOC 2005)
    url: https://doi.org/10.1145/1568318.1568324
  - title: Chen, Quantum Algorithms for Lattice Problems (ePrint 2024/555, with the 18 April 2024 update)
    url: https://eprint.iacr.org/2024/555
  - title: Simon, A Polynomial-Time Quantum Algorithm for the Dihedral Coset Problem (ePrint 2026/1591, preprint)
    url: https://eprint.iacr.org/2026/1591
  - title: Gupte, Ragavan, Zhandry, The ePrint:2026/1591 Quantum Algorithm Does Not Solve DCP (ePrint 2026/1693, preprint)
    url: https://eprint.iacr.org/2026/1693
  - title: Bai et al., A Quasi-polynomial Time Algorithm for the Extrapolated Dihedral Coset Problem over Power-of-Two Moduli (ePrint 2025/1046)
    url: https://eprint.iacr.org/2025/1046
  - title: Brakerski, Kirshanova, Stehlé, Wen, Learning With Errors and Extrapolated Dihedral Cosets
    url: https://arxiv.org/abs/1710.08223
  - title: NIST FIPS 203 (ML-KEM)
    url: https://csrc.nist.gov/pubs/fips/203/final
  - title: Guo, Yang, Rigorous Statements and Proofs of the Lemmas in Simon's Algorithm for the Dihedral Coset Problem and Their Underlying Hypothesis (ePrint 2026/1714, preprint)
    url: https://eprint.iacr.org/2026/1714
  - title: Chailloux, Loyer, Lattice sieving via quantum random walks (ASIACRYPT 2021; ePrint 2021/570)
    url: https://eprint.iacr.org/2021/570
  - title: Becker, Ducas, Gama, Laarhoven, New directions in nearest neighbor searching with applications to lattice sieving (ePrint 2015/1128)
    url: https://eprint.iacr.org/2015/1128
links:
  - to: p-vs-np
    kind: RELATED
    note: "LWE security cannot be based on P ≠ NP alone: the worst-case lattice problems in Regev's reduction are in NP ∩ coNP for approximation factors of order √n and above, so they are not NP-hard unless the polynomial hierarchy collapses."
timeline:
  - date: 2024-04-10
    title: Chen's quantum LWE claim and its withdrawal
    body: ePrint 2024/555 claimed polynomial-time quantum LWE algorithms; on 18 April the author reported an unrepairable bug in Step 9 and withdrew the claim.
    source: https://eprint.iacr.org/2024/555
  - date: 2025-06-04
    title: Quasi-polynomial quantum algorithm for EDCP over power-of-two moduli
    body: Bai et al. solved the extrapolated dihedral coset problem for power-of-two moduli in quasi-polynomial time; the authors state it does not affect standard LWE.
    source: https://eprint.iacr.org/2025/1046
  - date: 2026-08-03
    title: Simon's DCP preprint
    body: Simon (AWS) claimed a polynomial-time quantum algorithm for the dihedral coset problem, which via known reductions would give quantum approximate SVP within about √n·polylog n and attacks on LWE in a corresponding regime; unrefereed and contested.
    source: https://eprint.iacr.org/2026/1591
  - date: 2026-08-15
    title: No-go note against Simon's algorithm
    body: Gupte, Ragavan and Zhandry argued that the algorithm cannot extract the least-significant bit of the DCP secret and proved a broader no-go result for algorithms following Regev's template, with Lean 4 code; Simon revised his preprint on 7 October in response. Unresolved.
    source: https://eprint.iacr.org/2026/1693
explainer:
  oneLine: Is there a fast quantum algorithm to solve noisy secret-recovery equations, the puzzle behind new internet encryption?
  flow:
    - Secret hidden in noisy equations
    - No fast attack known
    - Shor's method threatens older locks
    - Is there a quantum attack here?
    - New standards bet that there is not
  glossary:
    - term: Learning With Errors (LWE)
      meaning: The puzzle of recovering a secret from many equations that each carry a small random error.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: lattice
      meaning: A regular grid of points made by adding whole-number multiples of a few basic arrows.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: shortest vector problem
      meaning: Finding the shortest nonzero arrow from the origin to a point of a lattice.
      link: https://en.wikipedia.org/wiki/Shortest_vector_problem
    - term: post-quantum cryptography
      meaning: Encryption designed to remain secure against attackers with large quantum computers.
      link: https://en.wikipedia.org/wiki/Post-quantum_cryptography
    - term: Shor's algorithm
      meaning: A quantum method that factors big numbers quickly, breaking widely used older encryption.
      link: https://en.wikipedia.org/wiki/Shor%27s_algorithm
    - term: lattice reduction
      meaning: Algorithms that look for a short, nearly perpendicular set of arrows describing a lattice; the main attack on LWE.
      link: https://en.wikipedia.org/wiki/Lattice-based_cryptography
    - term: modulus
      meaning: The number at which values wrap around, like hours on a 12-hour clock.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: worst-case to average-case reduction
      meaning: A proof that breaking typical random instances would let you solve the hardest instances too.
      link: /research/lattice-cryptography
    - term: quantum algorithm
      meaning: A step-by-step method designed to run on a quantum computer.
      link: /research/quantum-algorithms
    - term: dihedral coset problem
      meaning: A quantum problem about hidden shifts; a fast quantum algorithm for it would give fast quantum algorithms for some lattice problems.
      link: https://en.wikipedia.org/wiki/Hidden_subgroup_problem
    - term: lattice sieving
      meaning: "The fastest known way to find short lattice vectors: generate many vectors and repeatedly combine pairs into shorter ones; it takes exponential time."
      link: https://en.wikipedia.org/wiki/Lattice_problem
    - term: discrete Gaussian
      meaning: A bell-curve-shaped probability distribution over whole numbers, used to draw the small LWE errors.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
  readFirst:
    - title: Learning with errors (Wikipedia)
      url: https://en.wikipedia.org/wiki/Learning_with_errors
      why: A direct introduction to the puzzle with a small example.
    - title: Lattice-based cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lattice-based_cryptography
      why: Shows how the puzzle is turned into working encryption.
    - title: Post-quantum cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Post-quantum_cryptography
      why: Places LWE among the other quantum-resistant approaches.
site:
  aiReviewed: true
---

Let $n$ be the dimension, $q=\mathrm{poly}(n)$ a modulus and $\chi$ a discrete Gaussian of width $\alpha q$ with $\alpha q\ge 2\sqrt n$ and $\alpha=1/\mathrm{poly}(n)$. An LWE instance is $(A,\ b=As+e \bmod q)$ with $A\in\mathbb Z_q^{m\times n}$ uniform, $s\in\mathbb Z_q^n$ uniform and $e\leftarrow\chi^m$, $m=\mathrm{poly}(n)$. _Is there a quantum algorithm running in time $\mathrm{poly}(n)$ that, with non-negligible probability over $(A,s,e)$, recovers $s$ (or distinguishes $b$ from uniform)?_ By Regev's reduction a yes would put $\mathrm{GapSVP}_\gamma$ and SIVP with $\gamma=\mathrm{poly}(n)$ in $\mathsf{BQP}$. The conjecture underlying lattice-based cryptography is that the answer is no. The same question can be asked for the structured (ring and module) variants used in standards, whose worst-case reductions refer to ideal and module lattices, a more structured and less-studied class.

# State of the art

**No efficient quantum algorithm is known.** The best attacks, classical and quantum, are lattice-reduction algorithms with exponential cost; for heuristic sieving the running time is about $2^{0.292n}$ classically (Becker, Ducas, Gama and Laarhoven, 2016) and about $2^{0.257n}$ quantumly (Chailloux and Loyer, 2021, improving Laarhoven's $2^{0.265n}$), so known quantum speedups only shrink the constant in the exponent. Concrete parameters of ML-KEM (FIPS 203) and ML-DSA (FIPS 204), published 13 August 2024, are set from these costs. The FIPS 203 page carries a November 2025 note about potential errata; no cryptanalytic break of the standardised parameter sets has been reported.

**Quantum routes.** Regev (FOCS 2002) showed that an efficient quantum algorithm for the dihedral coset problem (DCP) that tolerates some failure probability would solve unique-SVP for polynomial factors; Kuperberg's subexponential algorithm is the best general DCP algorithm. Brakerski, Kirshanova, Stehlé and Wen (2018) connected LWE to _extrapolated_ DCP (EDCP). Bai, Jangir, Kirshanova, Ngo and Youmans (ePrint 2025/1046, June 2025; CRYPTO 2025) gave a quasi-polynomial quantum algorithm for EDCP over power-of-two moduli using quasi-polynomially many samples; they state that it does not affect LWE with standard parameters because the reduction from LWE supplies only polynomially many samples.

**Chen 2024.** Yilei Chen's ePrint 2024/555 (10 April 2024) claimed a polynomial-time quantum algorithm for LWE with certain polynomial modulus-to-noise ratios, which would have given quantum algorithms for GapSVP and SIVP at approximation factors $\tilde\Omega(n^{4.5})$. On 18 April the author reported that Step 9 contained a bug he could not fix, found by Hongxun Wu and, independently, Thomas Vidick, and stated that the polynomial-time claim does not hold.

**Simon 2026 (unrefereed, disputed).** Daniel Simon (AWS) posted ePrint 2026/1591 on 3 August 2026, claiming a polynomial-time quantum algorithm for DCP and hence, via known reductions, for approximate SVP within a factor $\sqrt n\cdot\mathrm{polylog}(n)$ and for LWE in a corresponding parameter regime. The ePrint record shows six revisions through 8 October 2026, including a corrected proof of Lemma 3. Gupte, Ragavan and Zhandry (ePrint 2026/1693, 15 August 2026, revised 1 September) argue that the algorithm cannot recover the least-significant bit of the DCP secret with non-negligible advantage, hence does not solve DCP, and prove a broader no-go result for algorithms following Regev's template, with Lean code. Simon's revision of 7 October 2026 responds to that note and to comments by Sam Jaques. Guo and Yang (ePrint 2026/1714, 17 August 2026) give rigorous proofs of three of the four lemmas that Simon's preprint stated with only sketches, but identify a remaining unproven hypothesis about how the algorithm chooses its partition, and conclude that the lemmas alone do not establish correctness. All three are preprints; there is no accepted resolution, and none of them is a demonstrated attack on any standardised parameter set.

# Applications

A polynomial-time quantum algorithm for LWE at standard parameters would break ML-KEM, ML-DSA, most lattice-based fully homomorphic encryption and many protocols built on them, forcing another migration of public-key cryptography to a non-lattice basis such as code-based HQC (selected by NIST in March 2025) or hash-based signatures. A proof, or strong new evidence, of quantum hardness would justify continued deployment at the current parameters and smaller margins. Partial progress, such as algorithms that work only for unusual parameter regimes (very small modulus, special noise distributions), directly tells designers which regimes to avoid.

# Resolution criteria

Either (a) a quantum algorithm with a complete proof or heuristic analysis that is verified by independent experts and, ideally, run on small instances, solving LWE (or DCP together with an accepted reduction) for the parameters above; or (b) a convincing hardness result. Unconditional hardness is out of reach (it would prove $\mathsf{NP}\not\subseteq\mathsf{BQP}$, and in particular $\mathsf P\ne\mathsf{NP}$), so in practice (b) means a reduction from a well-studied problem or a proved limitation on large algorithm families, such as the Gupte–Ragavan–Zhandry no-go note for Regev-template DCP algorithms. Expert acceptance of a claim requires scrutiny of the full proof; a preprint alone, as the 2024 episode showed, is not enough.

# Rating rationale

Difficulty 79: unconditional hardness is out of reach (it would imply NP ⊄ BQP), and quantum attacks have failed since 2002, including Chen's retracted 2024 claim; Simon's 2026 DCP claim is unrefereed and contested by a no-go preprint, so it does not lower the number. Placed just below the ω problem (82) and classical factoring (84) because it is a concrete algorithmic question rather than a landmark of mathematics. Application value 80: a yes would break mandated post-quantum standards and FHE, but only once large quantum computers exist, so it ranks below classical factoring (85), which needs no new hardware. Leverage 82: the NIST lattice standards, FHE and much of modern cryptographic theory rest on it, the highest outside P vs NP and RH.

# Work mix rationale

Either a new quantum algorithm or new evidence for hardness is a theory question; a proof of hardness is out of reach with current complexity theory. Compute is used for concrete cryptanalysis that sets parameters.

# Verification

The claim is an algorithm plus an analysis (or a heuristic argument) for LWE at polynomial modulus-to-noise ratio, and unconditional hardness is out of reach. Independent experts check the analysis, and small-instance runs can support but not prove it. No Lean statement is realistic because Mathlib has no quantum complexity or lattice-problem framework.

# Plain explanation

Many new encryption systems built to resist quantum computers rely on one puzzle. A secret list of numbers is hidden in many equations, and each equation has a little random noise added. This is Learning With Errors, or LWE. Without the noise, simple algebra reveals the secret. With it, nobody knows a fast way.

The question: could a quantum computer solve it quickly? A large enough quantum computer running Shor's algorithm would break older locks based on factoring (no such machine exists yet). No comparably fast quantum method is known for LWE. The best attacks, quantum or ordinary, take time that grows exponentially with the problem size.

There is an extra reason for interest. A famous result shows that solving LWE would also solve hard puzzles about regular grids of points (lattices) that have resisted fast methods for decades. So a quick solution would be a mathematical surprise as well as a security disaster.

Why is it hard to settle? Proving that no fast algorithm exists is beyond current mathematics. So researchers keep attacking it, and real systems set their sizes from the best known attacks, with a safety margin.

Claimed attacks do appear. One in 2024 was withdrawn within days when a bug was found. An August 2026 claim for a related problem is disputed and unresolved.

The analogy: nobody has found a key to this lock in twenty years, but nobody has proved there isn't one.

# Student explanation

**The problem.** Let $n$ be the dimension, $q$ a modulus polynomial in $n$, and $\chi$ a discrete Gaussian error distribution of width $\alpha q$ (with $\alpha q\gtrsim2\sqrt n$). An LWE instance is $(A,\,b=As+e \bmod q)$ with $A$ a uniformly random matrix, $s$ a uniform secret vector and $e$ a vector of small errors drawn from $\chi$. The question: _is there a polynomial-time quantum algorithm that, with non-negligible probability, recovers $s$ (search) or distinguishes $b$ from uniform (decision)?_

**Why a yes would be a big deal.** Regev's reduction (2005) shows that an efficient algorithm for LWE would give an efficient quantum algorithm for worst-case approximate lattice problems (GapSVP and SIVP) with polynomial approximation factor. These have resisted algorithms for decades. Classical reductions exist for some parameter ranges.

**State of the art.** No efficient quantum algorithm is known. The best attacks, classical and quantum, are lattice-reduction and sieving algorithms with exponential running time. For heuristic sieving the cost is about $2^{0.292n}$ classically (Becker, Ducas, Gama, Laarhoven, 2016) and about $2^{0.257n}$ quantumly (Chailloux and Loyer, 2021, improving Laarhoven's $2^{0.265n}$). So known quantum speedups only reduce the constant in the exponent.

**Deployed standards.** NIST published ML-KEM (FIPS 203) and ML-DSA (FIPS 204) in August 2024. Their concrete parameters are set from the estimated cost of these attacks, with margins. The FIPS 203 page carries a November 2025 note about potential errata, but no cryptanalytic break of the standardised parameters has been reported.

**Approaches to a positive or negative answer.**

- A positive answer needs a new quantum algorithm for the lattice or LWE problem, perhaps via a hidden subgroup-style structure. A natural route is the _dihedral coset problem_ (DCP): an efficient quantum algorithm for it would solve related lattice problems. Past attempts have not succeeded: Chen's April 2024 claimed algorithm for LWE was withdrawn after a bug was found; a 2025 quasi-polynomial algorithm for an extrapolated DCP needs too many samples to affect standard LWE; and Simon's August 2026 preprint claiming polynomial-time DCP is disputed by a rebuttal preprint, with no accepted resolution.
- A negative answer, a proof of hardness, would be a major advance: it would separate complexity classes in ways no one knows how to do. More realistically, the problem is studied by cryptanalysis, and confidence grows with time.

**Unknowns.** How much do the structured variants used in practice (Ring-LWE, Module-LWE) differ in hardness from plain LWE? Do dedicated quantum algorithms for the noisy-equation structure exist that do not pass through lattice reduction?
