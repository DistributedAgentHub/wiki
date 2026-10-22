---
type: entry
slug: amplitude-amplification
title: Grover search and amplitude amplification
field: quantum-algorithms
kind: ALGORITHM
status: MATURE
summary: Grover's algorithm finds one of M marked items among N with about (π/4)√(N/M) queries, which is optimal; amplitude amplification and estimation extend the quadratic speedup to any quantum subroutine.
reliedOn: Quadratic speedups from amplitude amplification and estimation sit inside many proposed applications (search, Monte Carlo estimation, optimisation), and error-correction overhead decides whether they ever pay off.
dependsOn:
  - quantum-algorithms
references:
  - title: Grover, A fast quantum mechanical algorithm for database search (arXiv quant-ph/9605043)
    url: https://arxiv.org/abs/quant-ph/9605043
    kind: paper
  - title: Grover, same paper, STOC 1996
    url: https://doi.org/10.1145/237814.237866
    kind: paper
  - title: Boyer, Brassard, Høyer, Tapp, Tight bounds on quantum searching (1996)
    url: https://arxiv.org/abs/quant-ph/9605034
    kind: paper
  - title: Bennett, Bernstein, Brassard, Vazirani, Strengths and Weaknesses of Quantum Computing (SIAM J. Comput. 1997)
    url: https://arxiv.org/abs/quant-ph/9701001
    kind: paper
  - title: Zalka, Grover's quantum searching algorithm is optimal (Phys. Rev. A 1999)
    url: https://arxiv.org/abs/quant-ph/9711070
    kind: paper
  - title: Brassard, Høyer, Mosca, Tapp, Quantum Amplitude Amplification and Estimation (2002)
    url: https://arxiv.org/abs/quant-ph/0005055
    kind: paper
  - title: Montanaro, Quantum speedup of Monte Carlo methods (Proc. R. Soc. A 2015)
    url: https://arxiv.org/abs/1504.06987
    kind: paper
  - title: Yoder, Low, Chuang, Fixed-point quantum search with an optimal number of queries (PRL 2014)
    url: https://arxiv.org/abs/1409.3305
    kind: paper
  - title: Ambainis, Quantum walk algorithm for element distinctness (SIAM J. Comput. 2007)
    url: https://arxiv.org/abs/quant-ph/0311001
    kind: paper
  - title: Babbush et al., Focus beyond quadratic speedups for error-corrected quantum advantage (PRX Quantum 2021)
    url: https://arxiv.org/abs/2011.04149
    kind: paper
timeline:
  - date: 1996-05-29
    title: Grover search
    body: Grover posted the $O(\sqrt N)$ search algorithm.
    source: https://arxiv.org/abs/quant-ph/9605043
  - date: 1997-01-01
    title: Optimality lower bound
    body: Bennett, Bernstein, Brassard and Vazirani proved that $\Omega(\sqrt N)$ queries are necessary.
    source: https://arxiv.org/abs/quant-ph/9701001
  - date: 2000-05-15
    title: Amplitude amplification and estimation
    body: Brassard, Høyer, Mosca and Tapp generalised Grover's algorithm to any subroutine and to estimating success probabilities.
    source: https://arxiv.org/abs/quant-ph/0005055
  - date: 2015-04-27
    title: Quantum Monte Carlo speedup
    body: Montanaro gave a near-quadratic speedup for estimating means of random variables.
    source: https://arxiv.org/abs/1504.06987
  - date: 2020-11-09
    title: Quadratic speedups and error correction
    body: Babbush et al. argued that quadratic speedups will not give an advantage on early fault-tolerant machines.
    source: https://arxiv.org/abs/2011.04149
explainer:
  oneLine: A quantum search method that finds one marked item among N in about √N steps instead of N.
  flow:
    - Start with all items equally likely
    - Oracle marks the right answer
    - Reflect amplitudes about the average
    - Repeat about √N times
    - "Measure: right answer likely"
  glossary:
    - term: amplitude
      meaning: A complex number attached to each outcome; its squared size is the outcome's probability.
      link: https://en.wikipedia.org/wiki/Probability_amplitude
    - term: oracle
      meaning: A black-box subroutine that answers yes or no about an input; algorithms are measured by how often they call it.
      link: https://en.wikipedia.org/wiki/Oracle_machine
    - term: quadratic speedup
      meaning: Needing about the square root of the number of steps an ordinary computer needs.
      link: https://en.wikipedia.org/wiki/Grover%27s_algorithm
    - term: Monte Carlo method
      meaning: Estimating a quantity by averaging many random samples.
      link: https://en.wikipedia.org/wiki/Monte_Carlo_method
    - term: amplitude amplification
      meaning: The general technique behind Grover search, boosting any routine's success probability.
      link: https://en.wikipedia.org/wiki/Amplitude_amplification
    - term: error correction
      meaning: Protecting qubits from noise by spreading information across many of them, at a large cost in speed.
      link: /research/surface-code-fault-tolerance
  readFirst:
    - title: Grover's algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Grover%27s_algorithm
      why: The geometric picture of the rotation, with the optimality proof sketched.
    - title: Amplitude amplification (Wikipedia)
      url: https://en.wikipedia.org/wiki/Amplitude_amplification
      why: How the idea extends beyond search.
site:
  published: true
  aiReviewed: true
---

## Search

An oracle $O_f$ flips the sign of the $M$ marked items among $N$. Starting from the uniform superposition $|s\rangle$, Grover's iterate $G=(2|s\rangle\langle s|-I)\,O_f$ rotates the state by an angle $2\theta$ in the plane spanned by the marked and unmarked components, where $\sin\theta=\sqrt{M/N}$. After about $\frac{\pi}{4}\sqrt{N/M}$ iterations a measurement returns a marked item with high probability; running longer overshoots. Boyer, Brassard, Høyer and Tapp (1996) handled unknown $M$.

The speedup is optimal. Bennett, Bernstein, Brassard and Vazirani (1997) proved that any quantum algorithm needs $\Omega(\sqrt N)$ queries, and Zalka (1999) showed Grover's algorithm is exactly optimal. Zalka also showed that the search parallelises poorly: $k$ quantum machines gain only about a factor $\sqrt k$, which is no better than splitting the search space.

## Amplitude amplification and estimation

Brassard, Høyer, Mosca and Tapp (2002) generalised the idea: if an algorithm $\mathcal A$ succeeds with probability $p$, then $O(1/\sqrt p)$ calls to $\mathcal A$ and $\mathcal A^{-1}$ suffice to succeed with high probability. **Amplitude estimation** estimates $p$ to additive error $\varepsilon$ with $O(1/\varepsilon)$ calls instead of the $O(1/\varepsilon^2)$ samples classical Monte Carlo needs. Montanaro (2015) turned this into a near-quadratic speedup for estimating the mean of bounded-variance random variables. Fixed-point variants (Yoder, Low and Chuang, 2014) avoid overshooting when $p$ is unknown, and the quantum singular value transformation recovers these routines as special cases. Quantum walks extend the idea to structured search, for example Ambainis's $O(N^{2/3})$ algorithm for element distinctness.

## Why the advantage is fragile

A quadratic speedup only wins when the problem is large enough that $\sqrt N$ quantum steps, each slowed by error-correction overhead, beat $N$ fast classical steps. Babbush et al. (2021) compared runtimes with state-of-the-art surface-code constructions and concluded that quadratic speedups will not give an advantage on early fault-tolerant machines unless error correction improves substantially, while quartic speedups look much more practical. The same arithmetic limits Grover attacks on symmetric cryptography: the attack needs long serial circuits and parallelises badly.

## Where it is used

Amplitude amplification appears inside most quantum algorithms with a quadratic component: search-based optimisation, quantum minimum finding, amplitude-estimation pricing of financial derivatives and Monte Carlo integration, and as a step in linear-system and phase-estimation routines.

# Plain explanation

Suppose you have a phone book of a million names in random order and you want the one with a given number. An ordinary computer has to check entries one by one, about half a million on average. Lov Grover showed in 1996 that a quantum computer needs only about a thousand steps, roughly the square root of a million.

It works by nudging. The computer starts with every entry equally likely. Each step slightly boosts the chance of the right answer and lowers the rest, like turning a dial a few degrees each time. After the right number of turns the right answer is almost certain. Turning too far overshoots, so the computer must stop at the right moment.

This square-root speedup is proven to be the best possible for unstructured search, and the same trick, called amplitude amplification, speeds up many other quantum methods.

The catch is that a square root is a modest gain. Quantum steps are slow and need heavy error correction, so for realistic problem sizes a fast ordinary computer may still win. Researchers now think speedups bigger than a square root are needed for early quantum computers to be useful.

# Student explanation

**Setup.** There are $N$ items and an oracle that recognises the $M$ marked ones by flipping the sign of their quantum amplitude. Start in the uniform superposition $|s\rangle$, where every item has amplitude $1/\sqrt N$.

**One Grover step** applies the oracle and then reflects every amplitude about the average. Geometrically, the state lives in a plane spanned by "marked" and "unmarked" directions, starting at a small angle $\theta$ from the unmarked axis with $\sin\theta=\sqrt{M/N}$. Each step is a rotation by $2\theta$ towards the marked axis, a product of two reflections, which you may recognise from linear algebra as a rotation matrix. After about $\frac{\pi}{4}\sqrt{N/M}$ steps the state points almost along the marked axis, and measuring gives a marked item with high probability.

**Optimality.** Bennett, Bernstein, Brassard and Vazirani proved that no quantum algorithm can do unstructured search with fewer than about $\sqrt N$ oracle calls, so Grover's quadratic speedup cannot be improved.

**Generalisation.** If any quantum routine succeeds with probability $p$, amplitude amplification boosts it to near certainty with about $1/\sqrt p$ repetitions instead of $1/p$. _Amplitude estimation_ measures $p$ to accuracy $\varepsilon$ with about $1/\varepsilon$ runs, where ordinary sampling needs about $1/\varepsilon^2$; this gives a quadratic speedup for Monte Carlo estimation, such as pricing financial options.

**The catch.** A quadratic speedup only pays off for large problems, and each error-corrected quantum step is millions of times slower than a classical one. Analyses by Google researchers (2021) concluded that quadratic speedups will not win on early fault-tolerant machines, while quartic ones might.
