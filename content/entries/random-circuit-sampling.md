---
type: entry
slug: random-circuit-sampling
title: Quantum advantage experiments and random circuit sampling
field: quantum-complexity
kind: FRONTIER
status: ACTIVE
summary: Sampling from random quantum circuits is the main route to beyond-classical experiments; its hardness rests on complexity conjectures, and classical simulations keep moving the line.
reliedOn: The case that today's quantum processors already do something classically intractable rests on random circuit sampling and boson sampling, and on how the cross-entropy benchmark is interpreted.
dependsOn:
  - bqp-complexity-class
references:
  - title: Arute et al., Quantum supremacy using a programmable superconducting processor (Nature 2019)
    url: https://doi.org/10.1038/s41586-019-1666-5
    kind: paper
  - title: Boixo et al., Characterizing Quantum Supremacy in Near-Term Devices (Nat. Phys. 2018)
    url: https://arxiv.org/abs/1608.00263
    kind: paper
  - title: Bremner, Jozsa, Shepherd, Classical simulation of commuting quantum computations implies collapse of the polynomial hierarchy (2010)
    url: https://arxiv.org/abs/1005.1407
    kind: paper
  - title: Aaronson, Arkhipov, The Computational Complexity of Linear Optics (2011)
    url: https://arxiv.org/abs/1011.3245
    kind: paper
  - title: Aaronson, Chen, Complexity-Theoretic Foundations of Quantum Supremacy Experiments (CCC 2017)
    url: https://arxiv.org/abs/1612.05903
    kind: paper
  - title: Bouland, Fefferman, Nirkhe, Vazirani, On the complexity and verification of quantum random circuit sampling (Nat. Phys. 2019)
    url: https://doi.org/10.1038/s41567-018-0318-2
    kind: paper
  - title: Pan, Chen, Zhang, Solving the sampling problem of the Sycamore quantum circuits (PRL 2022)
    url: https://arxiv.org/abs/2111.03011
    kind: paper
  - title: Gao et al., Limitations of Linear Cross-Entropy as a Measure for Quantum Advantage (PRX Quantum 2024)
    url: https://arxiv.org/abs/2112.01657
    kind: paper
  - title: Morvan et al., Phase transitions in random circuit sampling (Nature 2024)
    url: https://doi.org/10.1038/s41586-024-07998-6
    kind: paper
  - title: Zhong et al., Quantum computational advantage using photons (Science 2020)
    url: https://arxiv.org/abs/2012.01625
    kind: paper
  - title: Aharonov, Gao, Landau, Liu, Vazirani, A polynomial-time classical algorithm for noisy random circuit sampling (STOC 2023)
    url: https://arxiv.org/abs/2211.03999
    kind: paper
  - title: Bremner, Montanaro, Shepherd, Achieving quantum supremacy with sparse and noisy commuting quantum computations (Quantum 2017)
    url: https://arxiv.org/abs/1610.01808
    kind: paper
  - title: Bravyi, Gosset, König, Tomamichel, Quantum advantage with noisy shallow circuits (Nat. Phys. 2020)
    url: https://arxiv.org/abs/1904.01502
    kind: paper
timeline:
  - date: 2016-07-31
    title: Cross-entropy benchmarking proposed
    body: Boixo et al. proposed random circuit sampling with cross-entropy benchmarking.
    source: https://arxiv.org/abs/1608.00263
  - date: 2019-10-23
    title: Sycamore experiment
    body: Arute et al. reported 53-qubit random circuit sampling in Nature.
    source: https://doi.org/10.1038/s41586-019-1666-5
  - date: 2020-12-03
    title: Gaussian boson sampling
    body: Zhong et al. reported a photonic advantage experiment.
    source: https://arxiv.org/abs/2012.01625
  - date: 2021-11-04
    title: Sycamore circuits sampled classically
    body: Pan, Chen and Zhang generated a million samples with tensor networks on 512 GPUs.
    source: https://arxiv.org/abs/2111.03011
  - date: 2022-11-08
    title: Noisy RCS is classically easy asymptotically
    body: Aharonov et al. gave a polynomial-time algorithm for noisy random circuit sampling under anticoncentration.
    source: https://arxiv.org/abs/2211.03999
  - date: 2023-04-21
    title: Phase transitions and a 67-qubit experiment
    body: Morvan et al. identified noise-driven phase transitions and ran 67-qubit circuits.
    source: https://arxiv.org/abs/2304.11119
explainer:
  oneLine: Experiments where quantum chips run random programs that ordinary supercomputers struggle to imitate.
  flow:
    - Run a random quantum circuit
    - Collect samples of output bits
    - Score with cross-entropy benchmark
    - Classical methods race to imitate
    - Noise limits advantage at scale
  glossary:
    - term: quantum supremacy
      meaning: A demonstration that a quantum device does a task no feasible classical computation can; now often called quantum advantage.
      link: https://en.wikipedia.org/wiki/Quantum_supremacy
    - term: cross-entropy benchmark
      meaning: A score of how well samples match a circuit's ideal output probabilities.
      link: https://en.wikipedia.org/wiki/Quantum_supremacy
    - term: tensor network
      meaning: A way to represent and compute large quantum states by contracting many small arrays.
      link: https://en.wikipedia.org/wiki/Tensor_network
    - term: boson sampling
      meaning: A photonic version of the sampling task, using light passing through beam splitters.
      link: https://en.wikipedia.org/wiki/Boson_sampling
    - term: GPU
      meaning: A graphics processor, used for fast parallel numerical work.
      link: https://en.wikipedia.org/wiki/Graphics_processing_unit
    - term: verifiable quantum advantage
      meaning: An advantage claim whose output can be checked without simulating the device.
      link: /research/quantum-algorithms
  readFirst:
    - title: Quantum supremacy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_supremacy
      why: The experiments and the classical rebuttals in order.
    - title: Boson sampling (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boson_sampling
      why: The photonic relative of the task.
site:
  published: true
  aiReviewed: true
---

## The task and why it should be hard

A random circuit applies layers of random two-qubit gates to $n$ qubits starting from $|0^n\rangle$; the task is to output samples from $p_C(x)=|\langle x|C|0^n\rangle|^2$. If a classical algorithm could sample _exactly_ from such distributions for related families (commuting IQP circuits, linear-optical boson sampling), the polynomial hierarchy would collapse (Bremner, Jozsa and Shepherd, 2010; Aaronson and Arkhipov, 2011). Experiments are noisy, so the relevant claim concerns _approximate_ sampling, whose hardness rests on two conjectures: computing most output probabilities approximately is #P-hard on average, and the outputs **anticoncentrate** (are not too peaked). Bouland, Fefferman, Nirkhe and Vazirani (Nat. Phys. 2019) proved average-case #P-hardness for computing output probabilities to very high precision, short of the precision the conjecture needs.

## The benchmark

Experiments estimate fidelity with the **linear cross-entropy benchmark** $F_{\mathrm{XEB}}=2^n\,\mathbb E[p_C(x)]-1$ over the observed samples (Boixo et al., Nat. Phys. 2018), which needs a classical computation of $p_C(x)$ and so can only be checked at sizes where simulation is still possible. Aaronson and Chen (2017) related the hardness of scoring well on XEB-type tests to a conjecture they call XQUATH.

## Experiments and classical responses

Arute et al. (Nature 2019) sampled from 53-qubit, 20-cycle circuits on Google's Sycamore chip with $F_{\mathrm{XEB}}\approx0.2\%$ and estimated that a supercomputer would need 10,000 years. Tensor-network methods narrowed this: Pan, Chen and Zhang (PRL 2022) generated a million samples with fidelity about 0.0037 in 15 hours on 512 GPUs. Gao et al. (PRX Quantum 2024) showed that high XEB scores can be obtained without simulating the circuit: their algorithm reached 2–12% of the experimental scores in 2 seconds on one GPU, so XEB alone has limited value as evidence. Morvan et al. (Nature 2024) identified a noise-driven phase transition in random circuit sampling and reported a 67-qubit, 32-cycle experiment that remains beyond classical simulation at its measured fidelity. Photonic boson-sampling experiments (Zhong et al., Science 2020) and a 56-qubit superconducting experiment (Wu et al., 2021) made similar claims, each followed by improved classical methods.

## Asymptotic limits from noise

With a constant noise rate per gate, Aharonov, Gao, Landau, Liu and Vazirani (STOC 2023) gave a polynomial-time classical algorithm that samples from noisy random circuits in the anticoncentration regime, which is strong evidence that noisy random circuit sampling cannot be a _scalable_ advantage; it does not address the finite-size experiments. Bremner, Montanaro and Shepherd (Quantum 2017) found that noisy IQP circuits become classically easy but classical error correction can restore their hardness, and Fefferman et al. (2023) showed that realistic non-unital noise prevents anticoncentration at any depth. With noisy _shallow_ circuits in 3D, Bravyi, Gosset, König and Tomamichel (Nat. Phys. 2020) proved an unconditional advantage over constant-depth classical circuits.

## Status

The experiments show devices operating where brute-force simulation is impractical, but every claim rests on conjectures and on the current state of classical simulation, and none is useful or efficiently verifiable. The verifiable-advantage problem in this field records the later claims.

# Plain explanation

To show that a quantum computer can do something ordinary computers cannot, researchers chose a task tailor-made for it: run a random sequence of quantum operations and report the results. Each run gives a string of 0s and 1s, and the pattern of which strings come up more often is extremely hard for an ordinary computer to reproduce.

In 2019 Google's 53-qubit Sycamore chip did this in about 200 seconds and estimated that a top supercomputer would need 10,000 years. Within a few years, cleverer ordinary methods using graphics processors reproduced the task in hours, and other researchers showed the scoring method could be fooled. Later, larger experiments by Google and by Chinese groups pushed the line out again.

The task has no practical use; it is a stress test. Theory also says that with today's level of noise, the task cannot stay hard forever as chips grow: noisy random circuits eventually become easy to imitate. Truly lasting advantages will likely need error correction, or tasks whose answers can be checked.

# Student explanation

**Task.** Apply layers of random two-qubit gates to $n$ qubits starting from all zeros, then measure every qubit. Repeating gives samples $x$ from the output distribution $p(x)=|\langle x|C|0^n\rangle|^2$. Computing even one $p(x)$ classically seems to need work exponential in $n$ for deep circuits.

**Why it should be hard.** If a classical computer could sample _exactly_ from related distributions, a whole hierarchy of complexity classes would collapse, which complexity theorists consider very unlikely. Real experiments are noisy, so the argument needs extra conjectures about approximate sampling.

**Scoring.** The _linear cross-entropy benchmark_ averages $2^n p(x)-1$ over the observed samples: perfect sampling scores about 1, random guessing about 0. Computing it needs the ideal $p(x)$, so it can only be checked at sizes still simulable. Google's 2019 score was about 0.002.

**Classical responses.** _Tensor networks_ represent the circuit as a network of small arrays and contract it cleverly; in 2022 this produced a million samples of the 2019 circuits in 15 hours on 512 GPUs. Another 2021 algorithm obtained a sizeable fraction of the experimental score in seconds without simulating the circuit, showing the score can be gamed.

**Noise limit.** With a fixed error rate per gate, a 2022 polynomial-time classical algorithm samples noisy random circuits once they are deep enough to spread out their probabilities. So random circuit sampling is not expected to give an advantage that keeps growing with size unless errors are corrected.

**Fidelity budget.** If each of $g$ gates has error $\epsilon$, the overall circuit fidelity is about $(1-\epsilon)^g\approx e^{-\epsilon g}$, which is roughly what the benchmark measures. With $\epsilon=0.5\%$ and $g\approx1{,}000$ two-qubit gates the fidelity falls to below one percent, consistent with the small scores seen in experiments.
