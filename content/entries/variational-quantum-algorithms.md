---
type: entry
slug: variational-quantum-algorithms
title: "Variational quantum algorithms: VQE and QAOA"
field: quantum-algorithms
kind: ALGORITHM
status: ACTIVE
summary: Hybrid methods in which a classical optimiser tunes the parameters of a short quantum circuit to minimise a measured energy or cost; proposed for noisy devices, with no proven advantage so far.
reliedOn: Most near-term (pre-fault-tolerant) application claims in chemistry and optimisation are variational, so their trainability and classical simulability decide whether noisy quantum hardware has practical uses.
dependsOn:
  - quantum-algorithms
references:
  - title: Peruzzo et al., A variational eigenvalue solver on a photonic quantum processor (Nat. Commun. 2014)
    url: https://doi.org/10.1038/ncomms5213
    kind: paper
  - title: Farhi, Goldstone, Gutmann, A Quantum Approximate Optimization Algorithm (2014)
    url: https://arxiv.org/abs/1411.4028
    kind: paper
  - title: McClean, Romero, Babbush, Aspuru-Guzik, The theory of variational hybrid quantum-classical algorithms (NJP 2016)
    url: https://arxiv.org/abs/1509.04279
    kind: paper
  - title: Kandala et al., Hardware-efficient variational quantum eigensolver for small molecules and quantum magnets (Nature 2017)
    url: https://arxiv.org/abs/1704.05018
    kind: paper
  - title: Barak et al., Beating the random assignment on constraint satisfaction problems of bounded degree (2015)
    url: https://arxiv.org/abs/1505.03424
    kind: paper
  - title: Hastings, Classical and Quantum Bounded Depth Approximation Algorithms (2019)
    url: https://arxiv.org/abs/1905.07047
    kind: paper
  - title: Basso et al., The QAOA at High Depth for MaxCut on Large-Girth Regular Graphs and the SK Model (TQC 2022)
    url: https://arxiv.org/abs/2110.14206
    kind: paper
  - title: Shaydulin et al., Evidence of scaling advantage for the QAOA on a classically intractable problem (Sci. Adv. 2024)
    url: https://arxiv.org/abs/2308.02342
    kind: paper
  - title: McClean et al., Barren plateaus in quantum neural network training landscapes (Nat. Commun. 2018)
    url: https://arxiv.org/abs/1803.11173
    kind: paper
  - title: Larocca et al., Barren Plateaus in Variational Quantum Computing (Nat. Rev. Phys. 2025)
    url: https://arxiv.org/abs/2405.00781
    kind: paper
  - title: Cerezo et al., Does provable absence of barren plateaus imply classical simulability? (Nat. Commun. 2025)
    url: https://arxiv.org/abs/2312.09121
    kind: paper
timeline:
  - date: 2013-04-10
    title: VQE proposed
    body: Peruzzo et al. posted the variational eigensolver; published in Nature Communications in July 2014.
    source: https://arxiv.org/abs/1304.3061
  - date: 2014-11-14
    title: QAOA proposed
    body: Farhi, Goldstone and Gutmann introduced the QAOA.
    source: https://arxiv.org/abs/1411.4028
  - date: 2018-03-29
    title: Barren plateaus
    body: McClean et al. showed exponentially vanishing gradients for random deep circuits.
    source: https://arxiv.org/abs/1803.11173
  - date: 2021-10-27
    title: High-depth QAOA analysis
    body: Basso et al. evaluated QAOA up to $p=20$ on large-girth graphs and the SK model.
    source: https://arxiv.org/abs/2110.14206
  - date: 2023-12-14
    title: Trainability versus simulability
    body: Cerezo et al. argued that provably trainable models are often classically simulable.
    source: https://arxiv.org/abs/2312.09121
explainer:
  oneLine: Hybrid methods where an ordinary computer tunes a short quantum circuit to lower an energy or a cost.
  flow:
    - Quantum circuit with adjustable knobs
    - Measure an energy or cost
    - Classical optimiser turns the knobs
    - Repeat until the score stops improving
    - Flat landscapes and noise get in the way
  glossary:
    - term: variational principle
      meaning: Any trial state's average energy is at least the true lowest energy.
      link: https://en.wikipedia.org/wiki/Variational_method_%28quantum_mechanics%29
    - term: VQE
      meaning: "Variational quantum eigensolver: tunes a circuit to minimise a molecule's energy."
      link: https://en.wikipedia.org/wiki/Variational_quantum_eigensolver
    - term: QAOA
      meaning: "Quantum approximate optimisation algorithm: alternating cost and mixing layers for optimisation problems."
      link: https://en.wikipedia.org/wiki/Quantum_optimization_algorithms
    - term: MaxCut
      meaning: Splitting a graph's nodes into two groups to cut as many edges as possible.
      link: https://en.wikipedia.org/wiki/Maximum_cut
    - term: gradient descent
      meaning: Repeatedly stepping in the direction that lowers a function the fastest.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: barren plateau
      meaning: A region where the cost is almost flat, so the optimiser gets no useful direction.
      link: https://en.wikipedia.org/wiki/Variational_quantum_eigensolver
    - term: Pauli operators
      meaning: The basic single-qubit measurements X, Y and Z, from which Hamiltonians are built.
      link: https://en.wikipedia.org/wiki/Pauli_matrices
  readFirst:
    - title: Variational quantum eigensolver (Wikipedia)
      url: https://en.wikipedia.org/wiki/Variational_quantum_eigensolver
      why: How the loop works for chemistry.
    - title: Quantum optimization algorithms (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_optimization_algorithms
      why: QAOA and related methods in context.
site:
  published: true
  aiReviewed: true
---

## The variational quantum eigensolver

Peruzzo et al. (2014) proposed the **variational quantum eigensolver** (VQE) and ran it on a photonic chip. A parametrised circuit prepares $|\psi(\theta)\rangle=U(\theta)|0\rangle$; the energy $E(\theta)=\langle\psi(\theta)|H|\psi(\theta)\rangle$ is estimated by measuring the Pauli terms of $H$; a classical optimiser updates $\theta$. By the variational principle every $E(\theta)$ is an upper bound on the ground energy. McClean et al. (2016) set out the general theory, and Kandala et al. (2017) ran hardware-efficient ansätze on superconducting qubits for small molecules up to BeH$_2$.

## The quantum approximate optimisation algorithm

Farhi, Goldstone and Gutmann (2014) introduced the **QAOA** for combinatorial optimisation. For a cost function $C$ on bit strings and the mixer $B=\sum_i X_i$, depth $p$ prepares $\prod_{k=1}^{p}e^{-i\beta_k B}e^{-i\gamma_k C}|+\rangle^{\otimes n}$; as $p\to\infty$ it can follow an adiabatic path to the optimum. At $p=1$ on MaxCut for 3-regular graphs it guarantees an approximation ratio of at least 0.6924.

The QAOA's record against classical algorithms is mixed. A 2014 QAOA result for bounded-occurrence Max-E3LIN2 was overtaken by a classical algorithm of Barak et al. (2015). Hastings (2019) showed simple local classical algorithms match or beat single-layer QAOA on several problems. Farhi, Gamarnik and Gutmann (2020) used the overlap gap property to show that QAOA with depth below a constant times $\log n$ cannot find near-maximum independent sets in sparse random graphs. On the other side, Basso et al. (2022) computed that QAOA at $p=11$ beats all classical algorithms they knew that do not rely on unproven conjectures for MaxCut on large-girth regular graphs of high degree, and Shaydulin et al. (2024) reported numerical evidence that QAOA's time to solution for the low-autocorrelation binary sequences (LABS) problem scales better than branch-and-bound solvers, for up to 40 qubits.

## Obstacles

**Barren plateaus.** McClean et al. (2018) showed that for sufficiently random deep circuits the gradient vanishes exponentially in the number of qubits, so training needs exponentially many measurements; Larocca et al. (2025) review the many variants. **Classical simulability.** Cerezo et al. (2025) collect evidence that the structures that provably avoid barren plateaus often confine the computation to a small subspace that a classical computer can simulate, given data gathered from the device. **Measurement cost.** Estimating $E(\theta)$ to precision $\varepsilon$ needs $O(1/\varepsilon^2)$ shots per term, which is large at chemical accuracy. **Noise** biases the measured costs and flattens landscapes further.

## Status

No variational algorithm has a proven or convincingly demonstrated advantage over the best classical method on a problem of practical interest. They remain useful as benchmarks for hardware and as heuristics whose value at large scale is an open empirical question.

# Plain explanation

Today's quantum computers are small and noisy, so they cannot run long, precise programs like Shor's algorithm. Variational algorithms were invented to make use of them anyway.

The idea is a feedback loop. The quantum computer runs a short circuit with adjustable knobs and measures a score, such as the energy of a molecule or the quality of a schedule. An ordinary computer reads the score and turns the knobs to make it better, then asks for another run, many times over. It resembles tuning a radio by ear: you never compute the right setting, you just keep adjusting.

Two well-known examples are the variational quantum eigensolver (VQE), aimed at chemistry, and the quantum approximate optimisation algorithm (QAOA), aimed at scheduling-type problems.

The results so far are sobering. For large circuits the score often becomes flat, so the tuner cannot tell which way to turn (a 'barren plateau'). When circuits are designed to avoid this, ordinary computers can often simulate them. Each measurement is noisy, so many repetitions are needed. No variational method has yet beaten the best ordinary method on a useful problem, though researchers are still testing them at larger sizes.

# Student explanation

**VQE.** A circuit $U(\theta)$ with adjustable angles $\theta$ prepares a trial state $|\psi(\theta)\rangle$. The energy $E(\theta)=\langle\psi(\theta)|H|\psi(\theta)\rangle$ is estimated by measuring the pieces of the Hamiltonian $H$ (written as a sum of Pauli terms) many times and averaging. A classical optimiser, such as gradient descent, updates $\theta$. By the variational principle, every trial energy is at least the true ground energy, so lower is better.

**QAOA.** For a cost function $C(z)$ on bit strings (for example the number of edges cut in a graph, MaxCut), the circuit alternates two kinds of layers: $e^{-i\gamma C}$, which applies phases according to the cost, and $e^{-i\beta B}$ with $B=\sum_i X_i$, which mixes bit strings. With $p$ layers there are $2p$ angles to tune. As $p$ grows the method can imitate slow adiabatic evolution towards the best answer.

**Obstacles.**

- _Barren plateaus_: for random deep circuits the gradient of $E(\theta)$ is exponentially small in the number of qubits, so estimating it needs exponentially many measurements.
- _Classical simulability_: circuits proven to avoid barren plateaus often live in a small subspace that a classical computer can simulate.
- _Shot noise_: the error of an average of $S$ measurements falls like $1/\sqrt S$, so high precision needs many runs.

**Record.** Early QAOA guarantees were later matched by classical algorithms; high-depth analyses and small-scale numerical studies give mixed but sometimes encouraging evidence. The open question is whether any natural problem shows a lasting advantage.

**Practical note.** Gradients can be measured on the device itself with the _parameter-shift rule_: for gates of the form $e^{-i\theta P/2}$ with $P$ a Pauli operator, the derivative equals half the difference of two energy measurements at $\theta\pm\pi/2$.
