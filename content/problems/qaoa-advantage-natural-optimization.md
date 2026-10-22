---
type: problem
slug: qaoa-advantage-natural-optimization
title: A QAOA speedup over every known classical algorithm on a natural optimisation family
entry: variational-quantum-algorithms
status: OPEN
origin: Farhi, Goldstone and Gutmann, 2014
ratings:
  difficulty: 60
  applicationValue: 38
  leverage: 36
workMix:
  theory: 45
  engineering: 15
  compute: 30
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Farhi, Goldstone, Gutmann, A Quantum Approximate Optimization Algorithm (2014)
    url: https://arxiv.org/abs/1411.4028
  - title: Barak et al., Beating the random assignment on constraint satisfaction problems of bounded degree (2015)
    url: https://arxiv.org/abs/1505.03424
  - title: Hastings, Classical and Quantum Bounded Depth Approximation Algorithms (2019)
    url: https://arxiv.org/abs/1905.07047
  - title: "Farhi, Gamarnik, Gutmann, The QAOA Needs to See the Whole Graph: A Typical Case (2020)"
    url: https://arxiv.org/abs/2004.09002
  - title: Basso et al., The QAOA at High Depth for MaxCut on Large-Girth Regular Graphs and the SK Model (TQC 2022)
    url: https://arxiv.org/abs/2110.14206
  - title: Montanari, Optimization of the Sherrington-Kirkpatrick Hamiltonian (2019)
    url: https://arxiv.org/abs/1812.10897
  - title: Shaydulin et al., Evidence of Scaling Advantage for the QAOA on a Classically Intractable Problem (Sci. Adv. 2024)
    url: https://doi.org/10.1126/sciadv.adm6761
  - title: Boulebnane et al., Decoupling of the QAOA into independent spin-boson systems (preprint, 2026)
    url: https://arxiv.org/abs/2609.40309
  - title: "Goh, Müller, The Overlap Gap Property: Separating Quantum and Quantum-Inspired Approximate Optimization Algorithms (preprint, 2026)"
    url: https://arxiv.org/abs/2609.35131
links:
  - to: verifiable-quantum-advantage-benchmark
    kind: RELATED
    note: "An optimisation advantage would need the same ingredients as a verifiable advantage claim: checkable outputs (optimisation outputs are easy to score), a stated classical baseline, and a standing public challenge."
timeline:
  - date: 2015-05-13
    title: Classical algorithm beats an early QAOA guarantee
    body: Barak et al. gave a classical algorithm beating the QAOA's guarantee for bounded-occurrence Max-E3LIN2.
    source: https://arxiv.org/abs/1505.03424
  - date: 2020-04-20
    title: Overlap-gap limit at low depth
    body: Farhi, Gamarnik and Gutmann showed low-depth QAOA cannot find near-optimal independent sets in sparse random graphs.
    source: https://arxiv.org/abs/2004.09002
  - date: 2021-10-27
    title: High-depth QAOA beats known unconditional algorithms
    body: Basso et al. found $p=11$ QAOA beats classical algorithms free of unproven conjectures on large-girth regular graphs.
    source: https://arxiv.org/abs/2110.14206
  - date: 2023-08-04
    title: LABS scaling evidence
    body: Shaydulin et al. reported better empirical scaling than branch-and-bound on LABS up to 40 qubits.
    source: https://arxiv.org/abs/2308.02342
explainer:
  oneLine: Show that the leading quantum optimisation algorithm beats every known ordinary method on a natural family of problems.
  flow:
    - QAOA tunes a short quantum circuit
    - Compare against best classical algorithms
    - Early wins were matched classically
    - High-depth evidence is mixed
    - Need proof or lasting public challenge
  glossary:
    - term: QAOA
      meaning: Quantum approximate optimisation algorithm.
      link: /research/variational-quantum-algorithms
    - term: approximation ratio
      meaning: How close an algorithm's answer is to the best possible, as a fraction.
      link: https://en.wikipedia.org/wiki/Approximation_algorithm
    - term: MaxCut
      meaning: Splitting a graph's nodes into two groups to cut as many edges as possible.
      link: https://en.wikipedia.org/wiki/Maximum_cut
    - term: combinatorial optimisation
      meaning: Choosing the best among a huge finite set of options.
      link: https://en.wikipedia.org/wiki/Combinatorial_optimization
    - term: spin glass
      meaning: A disordered magnet model whose ground states are hard to find; used as a benchmark.
      link: https://en.wikipedia.org/wiki/Spin_glass
    - term: overlap gap property
      meaning: A structure where good solutions form separated clusters, which blocks local algorithms.
      link: https://en.wikipedia.org/wiki/Spin_glass
    - term: Sherrington–Kirkpatrick model
      meaning: A spin glass where every pair of spins interacts with a random strength.
      link: https://en.wikipedia.org/wiki/Sherrington%E2%80%93Kirkpatrick_model
  readFirst:
    - title: Quantum optimization algorithms (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_optimization_algorithms
      why: QAOA and related approaches.
    - title: Maximum cut (Wikipedia)
      url: https://en.wikipedia.org/wiki/Maximum_cut
      why: The benchmark problem most QAOA results use.
site:
  aiReviewed: true
---

Fix a natural family of combinatorial optimisation instances (random or structured instances of a standard problem such as MaxCut on random regular graphs, Max-$k$-XORSAT, the Sherrington–Kirkpatrick model or low-autocorrelation binary sequences) and a performance measure: either the approximation ratio reached as $n\to\infty$, or the exponent $c$ in a time-to-solution scaling $2^{cn}$ for reaching the optimum or a fixed target quality.

**Question:** is there such a family on which the QAOA (standard transverse-field mixer, depth $p(n)$ at most polynomial, any classical pre- or post-processing that does not solve the problem by itself) achieves a strictly better asymptotic performance than every known classical polynomial-time algorithm for the ratio measure, or than every known classical solver for the time-to-solution measure? The answer must hold against classical algorithms that rely on unproven conjectures as well as proven ones, and a time-to-solution claim must survive a public classical challenge.

# State of the art

**Early claims overtaken.** At depth $p=1$ the QAOA guarantees ratio at least 0.6924 for MaxCut on 3-regular graphs (Farhi, Goldstone and Gutmann, 2014). A QAOA guarantee for bounded-occurrence Max-E3LIN2 was beaten classically by Barak et al. (2015). Hastings (2019) showed that one-step local classical algorithms match single-layer QAOA on Max-3-LIN-2 and beat it on triangle-free MaxCut, and gave evidence that fixed-depth QAOA cannot match global classical algorithms on Max-3-LIN-2.

**Limits from locality.** Farhi, Gamarnik and Gutmann (2020) used the overlap gap property to show that QAOA with $p$ below a constant times $\log n$ cannot find independent sets larger than 0.854 times optimal in sparse random graphs at large degree; above that depth no limit is known.

**High depth.** Basso et al. (TQC 2022) evaluated QAOA exactly on large-girth $D$-regular graphs as $D\to\infty$ (equivalently the SK model) up to $p=20$ and found that $p=11$ beats every classical algorithm known to them that is free of unproven conjectures, and conjectured that QAOA reaches the Parisi value as $p\to\infty$. Montanari's message-passing algorithm (2019) reaches near-optimal SK energies assuming the absence of an overlap gap, so this advantage is conditional on which conjectures are allowed. 2026 preprints extend high-depth analysis to mixed spin glasses through a spin-boson mapping (Boulebnane et al., arXiv:2609.40309) and argue that QAOA can pass an overlap-gap barrier that blocks a mean-field quantum-inspired algorithm on Max-4-XORSAT (Goh and Müller, arXiv:2609.35131).

**Time-to-solution evidence.** Shaydulin et al. (Sci. Adv. 2024) simulated QAOA on LABS up to 40 qubits and found better scaling than branch-and-bound exact solvers; combined with quantum minimum finding it had the best empirical scaling of any algorithm they compared. The evidence is from small sizes and noiseless simulation, and it is a polynomial speedup in the exponent's base, which error-correction overhead must also beat.

No family meets the question's bar as of 2026.

# Applications

A confirmed asymptotic advantage would be the first evidence that quantum computers help with optimisation, a large share of proposed industrial uses. Practical value is limited by three things: industrial instances are not random families, classical heuristics are very strong on them, and a polynomial speedup must outrun error-correction overhead (Babbush et al., 2021).

# Resolution criteria

Either a proof that QAOA at some depth schedule reaches, on a stated natural family, an approximation ratio strictly above the best ratio of any known polynomial-time classical algorithm (conjecture-dependent ones included), or published instances, parameters and code showing a better time-to-solution exponent with confidence intervals at sizes where the exponent is stable, which no classical solver matches within 12 months of a public challenge.

# Rating rationale

Difficulty 60: research-grade, with a decade of results pointing both ways (classical algorithms overtook early QAOA guarantees; high-depth analyses favour QAOA only against conjecture-free baselines), so it sits with the verifiable-advantage problem (50) plus the extra burden of beating every classical heuristic. Application value 38: optimisation is a large proposed market, but industrial instances are not random families and polynomial speedups must outrun error-correction overhead. Leverage 36: it decides the prospects of one algorithm family rather than a field.

# Work mix rationale

Analytic performance at high depth and classical baselines are theory; large simulations and hardware runs supply the scaling evidence.

# Verification

For a scaling claim: publish the instance generator, QAOA parameters (or the procedure that sets them), circuits and raw results; an independent group reruns noiseless simulation or hardware experiments at the reported sizes and recomputes time-to-solution exponents with bootstrap confidence intervals, against named classical baselines (exact branch-and-bound, tabu or memetic search, simulated annealing, message passing) run with their best settings. For an approximation-ratio claim: expert review of the analytic QAOA performance and of the classical comparison, including conjecture-dependent algorithms.

# Plain explanation

Many practical problems are optimisation problems: the best route, the best schedule, the best way to split a network. The quantum approximate optimisation algorithm, QAOA, is the most studied quantum approach to them. It runs a short quantum circuit with a few tuning knobs and measures candidate answers.

The question is whether QAOA ever does better than ordinary computers, not just on one example but on a whole natural family of problems as they grow large. The history is a back-and-forth. In 2014 QAOA's guarantee on one problem beat the best known ordinary algorithm; within a year ordinary researchers found a better one. Later work showed simple ordinary methods match QAOA when its circuit is short. More recent calculations suggest deeper QAOA circuits beat every ordinary method that does not rely on unproven assumptions, and small simulations hint at faster scaling on one hard problem.

None of this is yet a clear win. A convincing answer would need either a proof or large, reproducible experiments that ordinary methods fail to match for a year.

# Student explanation

**What QAOA does.** For a cost function $C(z)$ on bit strings $z$, depth-$p$ QAOA prepares a state by alternating $p$ times between a phase layer $e^{-i\gamma_k C}$ and a mixing layer $e^{-i\beta_k\sum_i X_i}$, then measures to get a candidate $z$. The $2p$ angles are tuned to maximise the average cost.

**Two ways to win.**

- _Approximation ratio_: on a family of random instances, the average cost QAOA achieves divided by the optimum, as the size $n\to\infty$. QAOA wins if this ratio exceeds what every known polynomial-time classical algorithm achieves.
- _Time to solution_: the time to find the optimum grows roughly like $2^{cn}$; QAOA wins if its exponent $c$ is smaller than every classical solver's.

**Evidence so far.**

- At $p=1$, QAOA cuts at least 69.24% of the edges a best cut would for MaxCut on 3-regular graphs; simple classical algorithms do as well or better.
- Short QAOA circuits only "see" a small neighbourhood of each node, and for problems with an _overlap gap_ (near-optimal solutions form isolated clusters) this provably limits them.
- At depth $p=11$, on large random graphs of high degree, calculations show QAOA beats all classical algorithms that do not rely on unproven conjectures, but a message-passing algorithm reaches near-optimal values if a conjecture holds.
- Simulations of up to 40 qubits on the LABS problem suggest a better exponent than exact classical solvers.

**Why it is hard.** Classical baselines keep improving and depend on conjectures; high-depth QAOA is expensive to analyse or simulate; and a polynomial speedup must also beat error-correction overhead.
