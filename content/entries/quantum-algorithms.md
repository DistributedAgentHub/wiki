---
type: entry
slug: quantum-algorithms
title: Quantum algorithms
field: quantum-algorithms
kind: ALGORITHM
status: ACTIVE
summary: Algorithms for quantum computers, from Shor's factoring and Grover's search to quantum simulation, and the evidence about which speedups are real, provable or only heuristic.
reliedOn: Shor's algorithm is the reason the world is migrating public-key cryptography to post-quantum standards, and the case for building fault-tolerant quantum computers rests on a short list of algorithms with proven speedups.
dependsOn:
  - computational-complexity
references:
  - title: Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer (arXiv quant-ph/9508027; SIAM J. Comput. 1997)
    url: https://arxiv.org/abs/quant-ph/9508027
    kind: paper
  - title: Grover, A fast quantum mechanical algorithm for database search (arXiv quant-ph/9605043)
    url: https://arxiv.org/abs/quant-ph/9605043
    kind: paper
  - title: Harrow, Hassidim, Lloyd, Quantum algorithm for solving linear systems of equations
    url: https://arxiv.org/abs/0811.3171
    kind: paper
  - title: Tang, A quantum-inspired classical algorithm for recommendation systems (STOC 2019)
    url: https://arxiv.org/abs/1807.04271
    kind: paper
  - title: Gidney, How to factor 2048 bit RSA integers with less than a million noisy qubits (preprint, 2025)
    url: https://arxiv.org/abs/2505.15917
    kind: paper
  - title: Jordan, Shutty, Wootters, Zalcman et al., Optimization by decoded quantum interferometry (Nature 2025)
    url: https://doi.org/10.1038/s41586-025-09527-5
    kind: paper
  - title: Parekh, No Quantum Advantage in Decoded Quantum Interferometry for MaxCut (arXiv 2509.19966; TQC 2026)
    url: https://arxiv.org/abs/2509.19966
    kind: paper
  - title: "OpenAI math manuscripts, family 279: Exact quantum factoring over a fixed finite gate set (AI-generated, unrefereed)"
    url: https://github.com/openai/math/blob/main/preprints/Exact-quantum-factoring-over-a-fixed-finite-gate-set-September-25-2026/main.pdf
    kind: paper
timeline:
  - date: 1995-08-30
    title: Shor's algorithm on arXiv
    body: Shor's factoring and discrete-logarithm algorithms were announced at FOCS 1994; the arXiv version is dated 30 August 1995 and the journal version appeared in SIAM J. Comput. in 1997.
    source: https://arxiv.org/abs/quant-ph/9508027
  - date: 1996-05-29
    title: Grover search
    body: Grover's algorithm gave a quadratic speedup for unstructured search.
    source: https://arxiv.org/abs/quant-ph/9605043
  - date: 2018-07-10
    title: Dequantization of recommendation systems
    body: Tang gave a classical algorithm matching the quantum recommendation-systems algorithm up to polynomial factors, under comparable data access.
    source: https://arxiv.org/abs/1807.04271
  - date: 2025-05-21
    title: RSA-2048 under one million noisy qubits (estimate)
    body: Gidney estimated that factoring a 2048-bit RSA integer needs under one million physical qubits and under a week, under stated hardware assumptions; a preprint, and no such machine exists.
    source: https://arxiv.org/abs/2505.15917
explainer:
  oneLine: Step-by-step methods for quantum computers, and the careful question of which speedups over ordinary computers are real.
  flow:
    - Quantum rules allow interference
    - Arrange for wrong answers to cancel
    - "Shor: factoring made fast"
    - "Grover: only a modest speedup"
    - Many claimed speedups later matched by classical
  glossary:
    - term: qubit
      meaning: The quantum version of a bit; it can be in a blend of 0 and 1 until it is measured.
      link: https://en.wikipedia.org/wiki/Qubit
    - term: quantum computing
      meaning: Computing that uses quantum physics, such as superposition and interference, to process information.
      link: https://en.wikipedia.org/wiki/Quantum_computing
    - term: Shor's algorithm
      meaning: A quantum method that factors large numbers quickly, threatening common public-key encryption.
      link: https://en.wikipedia.org/wiki/Shor%27s_algorithm
    - term: Grover's algorithm
      meaning: A quantum search method that needs about the square root as many steps as checking every item.
      link: https://en.wikipedia.org/wiki/Grover%27s_algorithm
    - term: quantum Fourier transform
      meaning: A quantum operation that reveals repeating patterns (periods) hidden in data, the key step of Shor's method.
      link: https://en.wikipedia.org/wiki/Quantum_Fourier_transform
    - term: BQP
      meaning: The class of problems a quantum computer can solve efficiently with a small chance of error.
      link: https://en.wikipedia.org/wiki/BQP
    - term: quantum advantage
      meaning: A task where a quantum computer is shown to be better than any known ordinary computer method.
      link: https://en.wikipedia.org/wiki/Quantum_supremacy
    - term: Hamiltonian simulation
      meaning: Using a quantum computer to predict how a quantum system, such as a molecule, changes over time.
      link: https://en.wikipedia.org/wiki/Hamiltonian_simulation
    - term: quantum error correction
      meaning: Encoding information redundantly across many physical qubits so errors can be detected and fixed.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: query complexity
      meaning: Counting how many times an algorithm must look at its input, used to prove clean speedup limits.
      link: https://en.wikipedia.org/wiki/Query_complexity
    - term: unitary operation
      meaning: A reversible transformation of a quantum state that preserves total probability; quantum gates are unitary.
      link: https://en.wikipedia.org/wiki/Unitary_operator
    - term: hidden subgroup problem
      meaning: A general framework (finding a hidden repeating structure in a function) that covers factoring and discrete logarithms.
      link: https://en.wikipedia.org/wiki/Hidden_subgroup_problem
  readFirst:
    - title: Quantum algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_algorithm
      why: A tour of the main algorithms and what each is good for.
    - title: Shor's algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Shor%27s_algorithm
      why: The headline result, with the classical and quantum steps separated.
    - title: Grover's algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Grover%27s_algorithm
      why: Shows why the speedup is only quadratic.
    - title: BQP (Wikipedia)
      url: https://en.wikipedia.org/wiki/BQP
      why: What 'efficient for a quantum computer' means formally.
site:
  published: true
  aiReviewed: true
---

## Model and classes

A quantum algorithm is a sequence of unitary gates on qubits followed by measurement. The class $\mathsf{BQP}$ contains problems solvable with bounded error by a polynomial-size quantum circuit family; it contains $\mathsf{BPP}$ and is contained in $\mathsf{PP}\subseteq\mathsf{PSPACE}$. Whether $\mathsf{BQP}$ is strictly larger than $\mathsf{BPP}$ is open, so no quantum speedup over _all_ classical algorithms is proven unconditionally; evidence comes from oracle (query) separations, reductions to problems believed hard, and the absence of good classical algorithms after sustained effort.

## The established core

**Shor's algorithm** (1994) factors an $n$-bit integer and computes discrete logarithms in time polynomial in $n$, by finding the period of a function with the quantum Fourier transform. It is a special case of the abelian hidden subgroup problem and is the best-known superpolynomial speedup for a problem of practical importance. **Grover's algorithm** (1996) searches an unstructured space of $N$ items with $O(\sqrt N)$ queries, a quadratic speedup that is provably optimal in the query model; it applies to many exhaustive-search problems but its advantage is easily eaten by the overhead of error correction. **Quantum simulation** of physical Hamiltonians, proposed by Feynman and made rigorous by Lloyd, is the most natural application, with chemistry and materials as the main targets.

## Caveats that shape the field

The Harrow–Hassidim–Lloyd algorithm (2008) solves a sparse linear system $Ax=b$ in time polylogarithmic in the dimension, but it outputs a quantum state, not the vector $x$, assumes efficient state preparation, and its cost depends on the condition number. Tang (2018) showed that for the related recommendation-systems problem, a classical algorithm with comparable sample-and-query access to the data runs in polynomial time, removing the exponential speedup; this "dequantization" programme has since reduced several claimed exponential speedups to polynomial ones. Treat any claimed speedup as conditional on the input and output model.

## Resource estimates

Running Shor's algorithm on a 2048-bit RSA modulus needs error-corrected logical qubits. Gidney (2025) estimated that fewer than one million noisy physical qubits and less than a week would suffice, assuming a 0.1% gate error rate, a two-dimensional grid with nearest-neighbour connectivity, a 1 microsecond surface-code cycle and a 10 microsecond control reaction time. Regev (2023) proposed a factoring circuit with $\tilde O(n^{3/2})$ gates, run about $\sqrt n$ times, under a number-theoretic heuristic. These are paper estimates for machines that have not been built. Separately, an AI-generated manuscript in OpenAI's `openai/math` collection (family 279, dated 25 September 2026, with a Lean formalisation of the statement) claims a polynomial-size uniform circuit family over a fixed finite gate set that factors every integer with probability exactly one; it is unrefereed and has not been assessed by experts.

## Optimisation and verifiability

_Decoded Quantum Interferometry_ (Jordan, Shutty, Wootters, Zalcman and coauthors; Nature 2025) turns optimisation problems into decoding problems and claims a superpolynomial speedup for an algebraic problem (optimal polynomial intersection, OPI) against known classical algorithms. It has drawn both strengthening and weakening work: Parekh (arXiv September 2025; TQC 2026) showed that the MaxCut instances on which it attains a nontrivial asymptotic guarantee are solvable exactly in classical polynomial time, while Kramer, Gil-Fuster, Jones, Eisert and Schreiber (arXiv October 2026, preprint) claim a provable gap in approximation ratio for a variant of OPI whose constraint sets are accessed through membership oracles. Yamakawa and Zhandry (FOCS 2022; J. ACM 2024) proved a separation between quantum and classical _search_ problems relative to a random oracle, with classically verifiable answers and no structure in the oracle.

## Experiments

Sampling experiments since 2019 have claimed "beyond-classical" computation, and nearly every one has been followed by tensor-network or Pauli-path classical simulations that narrow or close the gap. Which of these claims still stand, and whether any computation is both useful and verifiable, is the subject of the open problem on useful quantum advantage.

# Plain explanation

A quantum computer is a machine that follows the rules of quantum physics. It does not just try every answer at once, which is a common myth. Instead, it can set up many possibilities together and then arrange things so that wrong answers cancel out and right ones reinforce. Only some problems have a structure that allows this.

The most famous quantum method is Shor's algorithm (1994). On a large, error-corrected quantum computer (none has been built yet) it would factor large numbers into primes very quickly. That matters because much of today's internet security depends on factoring being slow. The second is Grover's algorithm, which finds a needle in a haystack of N items in about the square root of N steps, a real but modest speedup. The third, simulating quantum physics itself, was the original motivation: molecules and materials are quantum, so a quantum computer should be a natural tool for studying them.

A lot of the field is careful honesty about what is proven. Nobody has yet proved that a quantum computer can solve any practical problem faster than every possible ordinary algorithm. The evidence is strong but indirect. And some early exciting claims were later matched by cleverly designed ordinary algorithms.

Analogy: a quantum computer is more like a special-purpose instrument, such as a telescope, than a faster general-purpose laptop.

# Student explanation

**Model and classes.** A quantum algorithm is a sequence of unitary operations (gates) on qubits followed by measurement. **BQP** is the class of problems solvable with bounded error by a polynomial-size quantum circuit family. It contains BPP (ordinary randomised polynomial time) and is contained in PSPACE. Whether BQP is strictly bigger than BPP is open, so no speedup over _all_ classical algorithms is proven unconditionally. Evidence comes from oracle (query) separations, reductions to problems believed hard, and decades of failed classical attempts.

**The established core.**

- **Shor's algorithm** (1994) factors an $n$-bit integer and computes discrete logarithms in time polynomial in $n$, by finding the period of a function with the quantum Fourier transform. It is a special case of the _hidden subgroup problem_ for abelian groups and is the best known superpolynomial speedup for a practically important problem.
- **Grover's algorithm** (1996) searches $N$ unstructured items with $O(\sqrt N)$ queries, a quadratic speedup provably optimal in the query model. It applies to many brute-force searches, but the overhead of error correction can eat the advantage.
- **Quantum simulation** (Feynman; Lloyd) of physical systems is the most natural application; chemistry and materials are the main targets.

**Caveats that shape the field.** The Harrow–Hassidim–Lloyd algorithm (2008) solves a sparse linear system in time polylogarithmic in its size, but it outputs a quantum state rather than the full solution, assumes state preparation is cheap, and depends on the condition number. Tang (2018) showed that for a related recommendation-systems problem, an ordinary algorithm with comparable access could do almost as well, removing a claimed exponential speedup ("dequantization").

**Benchmarks.** Several experiments have claimed to beat classical computers on contrived sampling tasks. Many have then been matched or approached by improved classical simulations. A strong, easily checkable demonstration of quantum advantage on a task that anyone can verify remains an active goal.

**Open questions.** Are there superpolynomial speedups for problems beyond algebraic structure, such as optimisation? Which quantum-chemistry tasks give an advantage after counting error-correction costs? Can the structure of lattice problems be exploited by a quantum algorithm (see lattice cryptography)?

The topic links deep theory (query complexity, Fourier analysis) with practical engineering questions about how many error-corrected qubits are needed.
