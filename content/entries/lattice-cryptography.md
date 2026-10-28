---
type: entry
slug: lattice-cryptography
title: Lattice-based cryptography (LWE)
field: cryptography
kind: ALGORITHM
status: ACTIVE
summary: Public-key encryption, signatures and homomorphic encryption whose security rests on Learning With Errors, the basis of the NIST post-quantum standards ML-KEM and ML-DSA.
reliedOn: ML-KEM (FIPS 203) and ML-DSA (FIPS 204) are built on module-LWE and are being deployed to replace RSA and elliptic-curve key exchange and signatures; fully homomorphic encryption schemes rest on the same assumption.
dependsOn:
  - computational-complexity
  - lattices-sphere-packing
  - quantum-algorithms
references:
  - title: Regev, On lattices, learning with errors, random linear codes, and cryptography (J. ACM 2009; STOC 2005)
    url: https://doi.org/10.1145/1568318.1568324
    kind: paper
  - title: Peikert, A Decade of Lattice Cryptography (survey, ePrint 2015/939)
    url: https://eprint.iacr.org/2015/939
    kind: paper
  - title: Lyubashevsky, Peikert, Regev, On Ideal Lattices and Learning with Errors Over Rings (ePrint 2012/230)
    url: https://eprint.iacr.org/2012/230
    kind: paper
  - title: "NIST FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"
    url: https://csrc.nist.gov/pubs/fips/203/final
    kind: docs
  - title: "NIST FIPS 204: Module-Lattice-Based Digital Signature Standard"
    url: https://csrc.nist.gov/pubs/fips/204/final
    kind: docs
  - title: "NIST: HQC announced as a 4th-round selection (2025-03-11)"
    url: https://csrc.nist.gov/news/2025/hqc-announced-as-a-4th-round-selection
    kind: docs
  - title: Becker, Ducas, Gama, Laarhoven, New directions in nearest neighbor searching with applications to lattice sieving (SODA 2016; ePrint 2015/1128)
    url: https://eprint.iacr.org/2015/1128
    kind: paper
  - title: Chailloux, Loyer, Lattice sieving via quantum random walks (ASIACRYPT 2021; ePrint 2021/570)
    url: https://eprint.iacr.org/2021/570
    kind: paper
timeline:
  - date: 2005-05-22
    title: Regev introduces LWE
    body: Regev's STOC 2005 paper defined Learning With Errors and gave the quantum reduction from worst-case lattice problems; the journal version appeared in J. ACM in 2009.
    source: https://doi.org/10.1145/1568318.1568324
  - date: 2024-04-10
    title: Claimed quantum LWE algorithm, withdrawn within days
    body: Chen's ePrint 2024/555 claimed a polynomial-time quantum algorithm for LWE with polynomial modulus-to-noise ratio. On 18 April the author reported a bug in Step 9 (found by Hongxun Wu and, independently, Thomas Vidick) and withdrew the main claim.
    source: https://eprint.iacr.org/2024/555
  - date: 2024-08-13
    title: NIST publishes FIPS 203 and FIPS 204
    body: The module-LWE based key-encapsulation standard ML-KEM and the signature standard ML-DSA became final standards.
    source: https://csrc.nist.gov/pubs/fips/203/final
  - date: 2025-03-11
    title: NIST selects HQC as a code-based backup KEM
    body: After a fourth evaluation round NIST selected HQC for standardisation; it would be the second KEM standard after ML-KEM and does not depend on lattices.
    source: https://csrc.nist.gov/news/2025/hqc-announced-as-a-4th-round-selection
explainer:
  oneLine: Secret codes built on a puzzle about noisy equations, believed hard even for quantum computers.
  flow:
    - Quantum computers threaten today's locks
    - Noise hides a secret in equations
    - Breaking it would solve hard lattice puzzles
    - Used to build encryption and signatures
    - Now part of official standards
  glossary:
    - term: lattice
      meaning: A regular, repeating grid of points in space, made by adding whole-number multiples of a few basic arrows.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: Learning With Errors (LWE)
      meaning: The puzzle of recovering a secret from many linear equations that each carry a small random error.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: shortest vector problem
      meaning: Finding the shortest nonzero arrow pointing from the origin to a point of a lattice.
      link: https://en.wikipedia.org/wiki/Shortest_vector_problem
    - term: post-quantum cryptography
      meaning: Codes designed to stay secure even against attackers with large quantum computers.
      link: https://en.wikipedia.org/wiki/Post-quantum_cryptography
    - term: public-key cryptography
      meaning: Encryption where anyone can lock a message with a public key but only the holder of a secret key can unlock it.
      link: https://en.wikipedia.org/wiki/Public-key_cryptography
    - term: homomorphic encryption
      meaning: Encryption that lets someone compute on data while it stays encrypted.
      link: https://en.wikipedia.org/wiki/Homomorphic_encryption
    - term: Gaussian elimination
      meaning: The school method of solving systems of linear equations by combining and subtracting equations.
      link: https://en.wikipedia.org/wiki/Gaussian_elimination
    - term: worst-case to average-case reduction
      meaning: A proof that being able to break typical random instances would let you solve the hardest instances too.
      link: https://en.wikipedia.org/wiki/Lattice-based_cryptography
    - term: quantum algorithm
      meaning: A step-by-step method designed to run on a quantum computer.
      link: /research/quantum-algorithms
    - term: basis (of a lattice)
      meaning: A set of arrows whose whole-number combinations produce every point of the lattice; short, nearly perpendicular bases make lattice problems easy.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: Module-LWE
      meaning: A version of LWE with extra algebraic structure that makes keys smaller; it is the basis of the ML-KEM and ML-DSA standards.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: lattice sieving
      meaning: "The fastest known way to find short lattice vectors: generate many vectors and repeatedly combine pairs into shorter ones; it takes exponential time."
      link: https://en.wikipedia.org/wiki/Lattice_problem
  readFirst:
    - title: Lattice-based cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lattice-based_cryptography
      why: An overview of the idea and its main schemes.
    - title: Learning with errors (Wikipedia)
      url: https://en.wikipedia.org/wiki/Learning_with_errors
      why: Defines the puzzle with a small worked example.
    - title: Post-quantum cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Post-quantum_cryptography
      why: Puts lattices in context with the other candidate approaches.
raw:
  body: "## Lattices and the LWE problem\n\nA *lattice* is the set of integer combinations of $n$ linearly independent vectors in $\\mathbb R^n$. Natural computational problems on lattices include the Shortest Vector Problem (SVP: find a shortest nonzero vector), its approximation version $\\mathrm{GapSVP}_\\gamma$, and the Shortest Independent Vectors Problem (SIVP). For approximation factors that are polynomial in $n$ none of them has a known polynomial-time algorithm, classical or quantum; the best algorithms take time exponential in $n$.\n\n*Learning With Errors* (LWE), introduced by Regev in 2005, is the average-case problem used in cryptography. Fix a dimension $n$, a modulus $q$ and an error distribution $\\chi$ (typically a discrete Gaussian of width $\\alpha q$). A secret $s\\in\\mathbb Z_q^n$ is chosen uniformly. An instance is a list of samples $(a_i,\\ b_i=\\langle a_i,s\\rangle+e_i \\bmod q)$ with $a_i$ uniform and $e_i\\leftarrow\\chi$. *Search-LWE* asks for $s$; *decision-LWE* asks to distinguish the samples from uniform ones. Without the noise $e_i$ the secret is recovered by Gaussian elimination; with it, no efficient algorithm is known.\n\n## Why it is trusted\n\nRegev showed (STOC 2005; J. ACM 2009) that for suitable parameters, solving LWE on random instances would give a *quantum* algorithm for worst-case $\\mathrm{GapSVP}_\\gamma$ and SIVP with $\\gamma=\\tilde O(n/\\alpha)$. Classical reductions exist under further restrictions on parameters (Peikert 2009; Brakerski, Langlois, Peikert, Regev and Stehlé 2013). So an efficient attack on LWE would be an algorithmic breakthrough for lattice problems that have been studied for decades. This worst-case-to-average-case link is unusual among cryptographic assumptions.\n\n## Structured variants and deployed schemes\n\nPlain LWE needs public keys of size quadratic in $n$. Ring-LWE (Lyubashevsky, Peikert and Regev) and module-LWE add algebraic structure over polynomial rings, shrinking keys and speeding up arithmetic, at the price of a hardness argument that now refers to *ideal* or *module* lattices. The NIST standards published on 13 August 2024 use module-LWE: ML-KEM (FIPS 203, from CRYSTALS-Kyber) has parameter sets ML-KEM-512, ML-KEM-768 and ML-KEM-1024, and ML-DSA (FIPS 204, from CRYSTALS-Dilithium) is the signature standard. A third lattice standard, FN-DSA (FIPS 206, based on Falcon), had been announced but was not listed among NIST's final FIPS as of October 2026. In March 2025 NIST also selected HQC, a code-based key-encapsulation mechanism, as a non-lattice backup to ML-KEM; NIST presented its planned standard (FIPS 207, HQC-KEM) in September 2025, and no final version had been published as of October 2026. LWE also underlies fully homomorphic encryption, which computes on encrypted data.\n\n## How security is estimated\n\nConcrete parameters are chosen from the cost of the best known attacks: lattice basis reduction (BKZ) with a sieving or enumeration subroutine, hybrid and dual attacks, and combinatorial algorithms such as BKW and Arora–Ge for special parameter ranges. Estimates of these costs are refined every few years, and the security margins of the standardised parameter sets rest on them. Heuristic sieving solves SVP in dimension $n$ in time about $2^{0.292n}$ classically (Becker, Ducas, Gama and Laarhoven, 2016) and about $2^{0.257n}$ with quantum random walks (Chailloux and Loyer, 2021), so known quantum speedups only shrink the constant in the exponent.\n\n## Quantum attacks: what has and has not happened\n\nThe central open question is whether quantum computers can do much better. The natural route is through the *dihedral coset problem* (DCP): Regev showed in 2002 that an efficient quantum algorithm for DCP (tolerating some failure probability) would solve the unique shortest vector problem for polynomial factors, and Kuperberg's algorithm solves DCP in subexponential time $2^{O(\\sqrt{\\log N})}$, where $N$ is the order of the cyclic group. In April 2024 Yilei Chen posted a claimed polynomial-time quantum algorithm for LWE with polynomial modulus-to-noise ratio; within days the author reported a bug in the analysis that he could not repair, and withdrew the main claim. In June 2025 Bai, Jangir, Kirshanova, Ngo and Youmans (CRYPTO 2025) gave a quasi-polynomial quantum algorithm for an extrapolated variant of DCP over power-of-two moduli; it needs quasi-polynomially many samples, and the authors state that it therefore does not affect LWE with standard parameters. In August 2026 Daniel Simon posted an unrefereed preprint claiming a polynomial-time quantum algorithm for DCP; a preprint arguing that the algorithm cannot work followed twelve days later, and the dispute is unresolved (see the problem entry).\n\n## What to take away\n\nLWE is the best-studied assumption among the post-quantum options, but it is an assumption: there is no proof that lattice problems are hard, and the standards were chosen with the explicit expectation that cryptanalysis will continue."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Today's internet security mostly relies on two number puzzles: factoring big numbers and a related one called discrete logarithms. A large enough quantum computer would solve both quickly, so the locks protecting our messages would open. Lattice cryptography is a replacement built on a different puzzle.

Here is the puzzle in kitchen terms. A secret list of numbers is mixed with many known lists, and then a little random noise is added to every result. Without the noise, you could work out the secret with school algebra. With the noise, the simple algebra breaks down, and nobody knows a fast way to undo the mixing.

This puzzle is called Learning With Errors (LWE). It matters for two reasons. First, researchers showed that breaking it on typical instances would also solve certain hard problems about regular grids of points called lattices, which have been studied for decades with no fast method known. That link is unusual and builds trust. Second, it supports many tools: encryption, digital signatures and even computing on encrypted data.

In 2024 the US standards agency published the first official post-quantum standards, two of which (named ML-KEM and ML-DSA) are based on this idea.

The caveat: trust is not proof. No fast attack is known, but none is ruled out either. Claimed fast quantum attacks have appeared: one in 2024 was withdrawn within days after a bug was found, and a 2026 claim is disputed and unresolved.

# Student explanation

**Lattices.** A _lattice_ is the set of all integer combinations of $n$ linearly independent vectors in $\mathbb R^n$; picture a regular grid of points, possibly slanted. The same lattice has many different bases, some short and nearly perpendicular (good), some long and skewed (bad). Natural problems: the _Shortest Vector Problem_ (SVP) asks for the shortest nonzero lattice vector; its approximation versions allow a slack factor $\gamma$. For slack factors polynomial in $n$, no polynomial-time algorithm is known, classical or quantum. The best known algorithms take exponential time in $n$.

**Learning With Errors.** Regev (2005) introduced LWE. Fix a dimension $n$, a modulus $q$ and a noise distribution (typically a discrete Gaussian). Choose a secret vector $s$ modulo $q$. An instance is a list of pairs $(a_i, b_i)$ where $a_i$ is a random vector and $b_i=\langle a_i,s\rangle+e_i \bmod q$, with a small random error $e_i$. _Search-LWE_ asks for $s$. _Decision-LWE_ asks to tell such samples apart from uniformly random ones. With no error, Gaussian elimination recovers $s$. With error, no efficient algorithm is known.

**Why it is trusted.** Regev proved that solving LWE on random instances would give a _quantum_ algorithm for worst-case lattice problems (approximate SVP and a cousin called SIVP). Later work gave classical reductions under extra conditions on parameters. So an attack on LWE would be an algorithmic breakthrough for lattice problems that have been studied for a long time. This _worst-case to average-case_ link is unusual among assumptions used in cryptography.

**Structured variants.** Plain LWE needs large keys. Variants with extra algebraic structure (Ring-LWE and Module-LWE) shrink keys and speed up operations, at the price of relying on structured lattices that are less studied.

**Deployed standards.** NIST's August 2024 post-quantum standards include ML-KEM (key exchange, FIPS 203) and ML-DSA (signatures, FIPS 204), both built on module-lattice assumptions. Concrete parameters are chosen from the estimated cost of the best known attacks, which are lattice-reduction and sieving algorithms with exponential running time (roughly $2^{0.29n}$ classically; quantum versions shave the exponent slightly).

**Beyond encryption.** LWE also supports _fully homomorphic encryption_, which lets a server compute on data it cannot read.

Open questions include whether a polynomial-time quantum algorithm for LWE exists (Chen's April 2024 claim was withdrawn after a bug was found; Simon's August 2026 unrefereed claim for the related dihedral coset problem is disputed), whether the structured variants are weaker than plain LWE, and how safe the concrete parameter choices are.
