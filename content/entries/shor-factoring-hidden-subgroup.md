---
type: entry
slug: shor-factoring-hidden-subgroup
title: Shor's algorithm and the hidden subgroup problem
field: quantum-algorithms
kind: ALGORITHM
status: MATURE
summary: Shor's 1994 algorithm factors integers and computes discrete logarithms in polynomial time by finding periods with the quantum Fourier transform; it is the abelian case of the hidden subgroup problem.
reliedOn: Shor's algorithm would break RSA, Diffie–Hellman and elliptic-curve cryptography on a large error-corrected machine, which is why public-key standards are moving to post-quantum schemes; the hidden subgroup framework organises most known exponential quantum speedups.
dependsOn:
  - computational-complexity
  - quantum-algorithms
references:
  - title: Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer (arXiv quant-ph/9508027)
    url: https://arxiv.org/abs/quant-ph/9508027
    kind: paper
  - title: Shor, same paper, SIAM J. Comput. 26(5), 1997
    url: https://doi.org/10.1137/S0097539795293172
    kind: paper
  - title: Kitaev, Quantum measurements and the Abelian Stabilizer Problem (1995)
    url: https://arxiv.org/abs/quant-ph/9511026
    kind: paper
  - title: Ettinger, Høyer, Knill, The quantum query complexity of the hidden subgroup problem is polynomial (IPL 2004)
    url: https://arxiv.org/abs/quant-ph/0401083
    kind: paper
  - title: Kuperberg, A subexponential-time quantum algorithm for the dihedral hidden subgroup problem (SIAM J. Comput. 2005)
    url: https://arxiv.org/abs/quant-ph/0302112
    kind: paper
  - title: Childs, van Dam, Quantum algorithms for algebraic problems (Rev. Mod. Phys. 2010)
    url: https://arxiv.org/abs/0812.0380
    kind: paper
  - title: Smolin, Smith, Vargo, Oversimplifying quantum factoring (Nature 2013)
    url: https://doi.org/10.1038/nature12290
    kind: paper
  - title: Gidney, Ekerå, How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits (Quantum 2021)
    url: https://arxiv.org/abs/1905.09749
    kind: paper
  - title: Gidney, How to factor 2048 bit RSA integers with less than a million noisy qubits (preprint, 2025)
    url: https://arxiv.org/abs/2505.15917
    kind: paper
  - title: "Webster et al., The Pinnacle Architecture: Reducing the cost of breaking RSA-2048 to 100 000 physical qubits using quantum LDPC codes (preprint, 2026)"
    url: https://arxiv.org/abs/2602.11457
    kind: paper
  - title: Cain et al., Shor's algorithm is possible with as few as 10,000 reconfigurable atomic qubits (preprint, 2026)
    url: https://arxiv.org/abs/2603.28627
    kind: paper
  - title: Regev, An Efficient Quantum Factoring Algorithm (2023)
    url: https://arxiv.org/abs/2308.06572
    kind: paper
timeline:
  - date: 1994-11-01
    title: Shor's algorithm at FOCS
    body: Shor presented polynomial-time quantum algorithms for factoring and discrete logarithms at FOCS 1994 (month only).
    source: https://doi.org/10.1137/S0097539795293172
  - date: 1995-11-20
    title: Abelian stabilizer problem
    body: Kitaev's phase-estimation approach solved the abelian stabilizer problem, the general abelian hidden subgroup setting.
    source: https://arxiv.org/abs/quant-ph/9511026
  - date: 2003-02-14
    title: Subexponential dihedral algorithm
    body: Kuperberg gave a $2^{O(\sqrt{\log N})}$ quantum algorithm for the dihedral hidden subgroup problem.
    source: https://arxiv.org/abs/quant-ph/0302112
  - date: 2019-05-23
    title: RSA-2048 with 20 million qubits (estimate)
    body: Gidney and Ekerå estimated 8 hours on 20 million noisy qubits.
    source: https://arxiv.org/abs/1905.09749
  - date: 2025-05-21
    title: Under a million qubits (estimate)
    body: Gidney estimated under a week on under a million noisy qubits, with the same hardware assumptions; a preprint.
    source: https://arxiv.org/abs/2505.15917
  - date: 2026-02-12
    title: qLDPC estimate under 100,000 qubits (preprint)
    body: The Pinnacle architecture preprint estimated RSA-2048 with fewer than 100,000 physical qubits using qLDPC codes.
    source: https://arxiv.org/abs/2602.11457
explainer:
  oneLine: A quantum method that finds the prime factors of huge numbers quickly, which would break much of today's encryption.
  flow:
    - Factoring hides a repeating pattern
    - Quantum superposition holds all exponents
    - Fourier transform reveals the period
    - Period gives the prime factors
    - Needs a large error-corrected machine
  glossary:
    - term: prime factorization
      meaning: Writing a whole number as a product of primes, such as 15 = 3 × 5.
      link: https://en.wikipedia.org/wiki/Integer_factorization
    - term: RSA
      meaning: A widely used public-key encryption scheme whose security relies on factoring being hard.
      link: https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29
    - term: modular arithmetic
      meaning: Arithmetic with remainders, like a clock where 13 o'clock is 1 o'clock.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: quantum Fourier transform
      meaning: A quantum version of the discrete Fourier transform that reveals periods in a superposition.
      link: https://en.wikipedia.org/wiki/Quantum_Fourier_transform
    - term: discrete logarithm
      meaning: Finding x from a^x in modular arithmetic; Shor's method solves it too.
      link: https://en.wikipedia.org/wiki/Discrete_logarithm
    - term: hidden subgroup problem
      meaning: Finding an unknown subgroup from a function that is constant on its cosets; covers factoring and more.
      link: https://en.wikipedia.org/wiki/Hidden_subgroup_problem
    - term: logical qubit
      meaning: A reliable qubit built from many noisy physical qubits by error correction.
      link: /research/surface-code-fault-tolerance
    - term: post-quantum cryptography
      meaning: Encryption designed to resist attacks by quantum computers, such as lattice-based schemes.
      link: https://en.wikipedia.org/wiki/Post-quantum_cryptography
    - term: dihedral group
      meaning: "The symmetries of a regular polygon: rotations and reflections."
      link: https://en.wikipedia.org/wiki/Dihedral_group
  readFirst:
    - title: Shor's algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Shor%27s_algorithm
      why: Step-by-step account with the classical and quantum parts separated.
    - title: Shor, I'll do it (Scott Aaronson's blog)
      url: https://scottaaronson.blog/?p=208
      why: A famous plain-language explanation of how Shor's algorithm uses interference.
    - title: Post-quantum cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Post-quantum_cryptography
      why: Why encryption is being replaced before large quantum computers exist.
site:
  published: true
  aiReviewed: true
---

## From factoring to period finding

Factoring an $n$-bit odd integer $N$ with at least two distinct prime factors reduces, with a randomised classical argument, to **order finding**: pick a random $a$ coprime to $N$ and find the smallest $r>0$ with $a^r\equiv 1 \pmod N$. If $r$ is even and $a^{r/2}\not\equiv -1 \pmod N$, then $\gcd(a^{r/2}-1,N)$ is a nontrivial factor, which happens for at least half of the choices of $a$.

The quantum part finds $r$. A register is put in a uniform superposition over exponents $x$, the value $a^x \bmod N$ is computed into a second register, and the quantum Fourier transform (QFT) is applied to the first register. Measuring gives a value close to a multiple of $2^m/r$, and the continued-fraction expansion recovers $r$ with good probability. The cost is dominated by modular exponentiation: $O(n^3)$ gates with schoolbook arithmetic and $O(n^2\log n\log\log n)$ with fast multiplication. Discrete logarithms are a two-dimensional period-finding problem and fall to the same method, including in elliptic-curve groups.

## The hidden subgroup problem

A function $f$ on a group $G$ _hides_ a subgroup $H$ if it is constant on the cosets of $H$ and takes different values on different cosets; the task is to find $H$. For abelian groups this is solved efficiently by Fourier sampling (Kitaev's abelian stabilizer algorithm, 1995), with Simon's problem, factoring and discrete logarithms as special cases. Ettinger, Høyer and Knill (2004) showed that polynomially many queries determine $H$ for every finite group, but extracting $H$ from those queries may take exponential time.

The open cases are non-abelian. The **dihedral** group is linked to lattices: Regev (2002) showed that an algorithm for the dihedral coset problem that tolerates faulty samples gives a quantum algorithm for the unique shortest vector problem, and Kuperberg (2003) gave a subexponential algorithm with running time $2^{O(\sqrt{\log N})}$. The **symmetric** group would give graph isomorphism, but Moore, Russell and Schulman (2005) showed that strong Fourier sampling on coset states cannot distinguish the relevant subgroups, and Babai's quasipolynomial classical algorithm (2015) reduced the stakes. Childs and van Dam (2010) review the area.

## Resource estimates

Experiments so far have factored only small numbers, often with circuits simplified using knowledge of the answer (Smolin, Smith and Vargo, 2013). For RSA-2048, Gidney and Ekerå (2019) estimated 20 million noisy qubits for 8 hours; Gidney (2025) lowered this to under a million qubits for under a week, assuming a 0.1% gate error rate, a nearest-neighbour square grid, a 1 microsecond surface-code cycle and a 10 microsecond reaction time. Preprints in 2026 go further by replacing the surface code with high-rate codes: Webster et al. (the "Pinnacle" architecture, qLDPC codes) estimate fewer than 100,000 physical qubits under the same error rate and timing, and Cain et al. argue that as few as 10,000 reconfigurable neutral-atom qubits could run Shor's algorithm at cryptographic scale, with RSA-2048 taking one to two orders of magnitude longer than a few-day P-256 discrete logarithm on 26,000 qubits. Regev (2023) gave a different factoring circuit with $\tilde O(n^{3/2})$ gates run about $\sqrt n$ times, under a number-theoretic heuristic. All of these are paper estimates for machines that do not exist.

## Limits

Shor's algorithm does not break symmetric ciphers or hash functions (Grover search gives only a quadratic speedup against them) and gives no known speedup for NP-complete problems. Lattice-based schemes such as ML-KEM (FIPS 203, 2024) were standardised because no efficient quantum algorithm for their underlying problems is known; the dihedral hidden subgroup problem is the main known quantum route towards them.

# Plain explanation

Much of internet security, including the padlock in your browser, relies on one fact: multiplying two large prime numbers is easy, but going backwards from the product to the primes takes ordinary computers an impractically long time.

In 1994 Peter Shor found that a quantum computer could go backwards quickly. The trick is to turn factoring into finding a repeating pattern, a rhythm hidden in a long list of numbers. A quantum computer can make all the entries of that list interfere with each other so that the rhythm stands out, much as a prism splits white light into its colours.

No quantum computer today is big or reliable enough to run Shor's method on real encryption keys; experiments have only factored tiny numbers. Estimates of the machine needed have fallen from about 20 million qubits (2019) to under a million (2025), and some 2026 proposals claim far fewer. That is why governments are already switching to new encryption that quantum computers are not known to break.

Shor's method is one case of a broader puzzle, finding a hidden pattern in a group of symmetries. Some versions of that puzzle remain unsolved, and one of them is tied to the security of the new encryption.

# Student explanation

**Reduction to period finding.** To factor an odd number $N$, pick a random $a$ that shares no factor with $N$ and look at the sequence $a^1, a^2, a^3,\dots$ taken modulo $N$ (the remainder after dividing by $N$). It repeats with some period $r$, called the order of $a$. If $r$ is even, then $a^{r/2}-1$ usually shares a factor with $N$, and the greatest common divisor, computed with Euclid's algorithm in first-year time, gives a factor. So factoring reduces to finding $r$.

**The quantum step.** A register of qubits is put in a superposition of all exponents $x$ at once, and $a^x \bmod N$ is computed into a second register. The first register then holds a periodic pattern with period $r$. The **quantum Fourier transform** works like a discrete Fourier transform from signals courses: it turns a signal with period $r$ into sharp peaks at multiples of $1/r$. Measuring gives one of those peaks, and a short classical calculation (continued fractions) recovers $r$. The cost is dominated by the modular arithmetic, roughly $n^3$ gates for an $n$-bit number, versus the best classical method, the number field sieve, whose time grows faster than any polynomial in $n$.

**Hidden subgroups.** Factoring, discrete logarithms and Simon's problem are all instances of the _hidden subgroup problem_: a function is constant on the cosets of an unknown subgroup and the task is to find it. For commutative (abelian) groups, quantum computers solve it efficiently. For the dihedral group (symmetries of a polygon) only a subexponential algorithm is known, and a fast one would threaten lattice-based encryption.

**How big a machine?** Running Shor on a 2048-bit RSA key needs error-corrected logical qubits. Estimates: 20 million noisy qubits for 8 hours (2019), under a million for under a week (2025), and preprints in 2026 claiming around 100,000 or fewer with newer error-correcting codes. None of these machines exists yet.
