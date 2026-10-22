---
type: entry
slug: magic-state-distillation
title: "Magic states: distillation and cultivation"
field: quantum-error-correction
kind: THEORY
status: ACTIVE
summary: Error-correcting codes give cheap Clifford gates but not a universal gate set; magic states supply the missing T or CCZ gates and are made reliable by distillation or, more recently, cultivation.
reliedOn: Non-Clifford gates dominate the cost of fault-tolerant algorithms (T and Toffoli counts are the standard cost measure), so the price of a good magic state largely sets the runtime and size of machines for Shor's algorithm and chemistry.
dependsOn:
  - surface-code-fault-tolerance
references:
  - title: Gottesman, The Heisenberg Representation of Quantum Computers (1998)
    url: https://arxiv.org/abs/quant-ph/9807006
    kind: paper
  - title: Eastin, Knill, Restrictions on Transversal Encoded Quantum Gate Sets (PRL 2009)
    url: https://arxiv.org/abs/0811.4262
    kind: paper
  - title: Bravyi, Kitaev, Universal quantum computation with ideal Clifford gates and noisy ancillas (PRA 2005)
    url: https://doi.org/10.1103/PhysRevA.71.022316
    kind: paper
  - title: Bravyi, Haah, Magic state distillation with low overhead (PRA 2012)
    url: https://arxiv.org/abs/1209.2426
    kind: paper
  - title: Hastings, Haah, Distillation with sublogarithmic overhead (PRL 2018)
    url: https://arxiv.org/abs/1709.03543
    kind: paper
  - title: Krishna, Tillich, Towards low overhead magic state distillation (PRL 2019)
    url: https://arxiv.org/abs/1811.08461
    kind: paper
  - title: Wills, Hsieh, Yamasaki, Constant-Overhead Magic State Distillation (2024)
    url: https://arxiv.org/abs/2408.07764
    kind: paper
  - title: Nguyen, Good binary quantum codes with transversal CCZ gate (2024)
    url: https://arxiv.org/abs/2408.10140
    kind: paper
  - title: "Litinski, Magic State Distillation: Not as Costly as You Think (Quantum 2019)"
    url: https://arxiv.org/abs/1905.06903
    kind: paper
  - title: "Gidney, Shutty, Jones, Magic state cultivation: growing T states as cheap as CNOT gates (2024)"
    url: https://arxiv.org/abs/2409.17595
    kind: paper
  - title: Rodriguez et al., Experimental Demonstration of Logical Magic State Distillation (Nature 2025)
    url: https://arxiv.org/abs/2412.15165
    kind: paper
  - title: Daguerre et al., Experimental Demonstration of High-Fidelity Logical Magic States from Code Switching (PRX 2025)
    url: https://arxiv.org/abs/2506.14169
    kind: paper
timeline:
  - date: 2004-03-03
    title: Magic state distillation
    body: Bravyi and Kitaev posted the 15-to-1 distillation protocol (PRA 2005).
    source: https://arxiv.org/abs/quant-ph/0403025
  - date: 2017-09-11
    title: Sublogarithmic overhead
    body: Hastings and Haah reached $\gamma\approx0.678$, below the conjectured bound of 1.
    source: https://arxiv.org/abs/1709.03543
  - date: 2024-08-14
    title: Constant overhead for qubits
    body: Wills, Hsieh and Yamasaki gave constant-overhead distillation for qubits; Nguyen independently gave good binary codes with transversal CCZ.
    source: https://arxiv.org/abs/2408.07764
  - date: 2024-09-26
    title: Magic state cultivation
    body: Gidney, Shutty and Jones grew T states at roughly the cost of a CNOT.
    source: https://arxiv.org/abs/2409.17595
  - date: 2024-12-19
    title: Logical distillation in hardware
    body: Rodriguez et al. distilled magic states encoded in colour codes on neutral atoms.
    source: https://arxiv.org/abs/2412.15165
explainer:
  oneLine: Making special 'magic' resource states clean enough to give error-corrected quantum computers their missing gate.
  flow:
    - Cheap gates alone are classically simulable
    - T gate needs a magic state
    - Distil many noisy copies into one
    - Cultivation grows one cheaply
    - Universal fault-tolerant computing
  glossary:
    - term: Clifford gates
      meaning: A set of quantum gates that are cheap to protect but can be simulated classically on their own.
      link: https://en.wikipedia.org/wiki/Gottesman%E2%80%93Knill_theorem
    - term: T gate
      meaning: A quarter-phase gate that, added to Clifford gates, makes a universal gate set.
      link: https://en.wikipedia.org/wiki/Quantum_logic_gate
    - term: Gottesman–Knill theorem
      meaning: Circuits of Clifford gates and Pauli measurements can be simulated efficiently classically.
      link: https://en.wikipedia.org/wiki/Gottesman%E2%80%93Knill_theorem
    - term: gate teleportation
      meaning: Applying a gate by consuming a prepared resource state plus measurements.
      link: https://en.wikipedia.org/wiki/Magic_state_distillation
    - term: magic state distillation
      meaning: Turning many noisy magic states into fewer, cleaner ones.
      link: https://en.wikipedia.org/wiki/Magic_state_distillation
    - term: transversal gate
      meaning: A logical gate applied by acting on each physical qubit separately, which keeps errors from spreading.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: surface code
      meaning: The leading error-correcting code for 2D chips.
      link: /research/surface-code-fault-tolerance
  readFirst:
    - title: Magic state distillation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Magic_state_distillation
      why: The idea and the 15-to-1 protocol.
    - title: Gottesman–Knill theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Gottesman%E2%80%93Knill_theorem
      why: Why the easy gates are not enough.
site:
  published: true
  aiReviewed: true
---

## Why magic states are needed

Circuits made only of Clifford gates (Hadamard, phase, CNOT) with Pauli measurements can be simulated efficiently on a classical computer (the Gottesman–Knill theorem), so a universal quantum computer needs at least one non-Clifford gate, usually $T=\mathrm{diag}(1,e^{i\pi/4})$ or the three-qubit CCZ. Eastin and Knill (2009) proved that no quantum code can implement a universal gate set transversally, so some gate always needs extra machinery. The standard fix is **gate teleportation**: prepare the magic state $|T\rangle=T|+\rangle$, consume it with Clifford operations and a measurement, and the $T$ gate is applied.

## Distillation

Bravyi and Kitaev (2005) showed that many noisy magic states can be distilled into fewer, better ones using only Clifford operations. Their 15-to-1 protocol, based on the punctured Reed–Muller code, turns 15 states with error $p$ into one with error about $35p^3$. Repeating it reaches any target error $\varepsilon$ with overhead $O(\log^{\gamma}(1/\varepsilon))$ input states per output state. Better codes lowered the exponent: triorthogonal codes (Bravyi and Haah, 2012) gave $\gamma\approx\log_2 3\approx1.6$, Hastings and Haah (2018) reached $\gamma\approx0.678$, Krishna and Tillich (2019) made $\gamma$ arbitrarily small for qudits, and in 2024 Wills, Hsieh and Yamasaki, and independently Nguyen, constructed qubit protocols with constant overhead ($\gamma=0$) from asymptotically good codes with transversal CCZ. These asymptotic results use very large codes; practical factories use small protocols.

## Practical cost

Early estimates made magic-state factories the bulk of a fault-tolerant computer. Litinski (2019) showed with careful surface-code layouts that distillation is "not as costly as you think". Gidney, Shutty and Jones (2024) introduced **magic state cultivation**, which grows one $|T\rangle$ state inside a surface-code patch using about as many physical gates as a lattice-surgery CNOT of the same reliability; their simulations reach logical error rates of $2\times10^{-9}$ at $10^{-3}$ circuit noise and $4\times10^{-11}$ at $5\times10^{-4}$, and they suggest further distillation may not be needed in practice. Gidney's 2025 RSA-2048 estimate relied on cultivation to cut the space for factories.

## Experiments

Logical-level magic states have now been made on hardware: distillation with $d=3$ and $d=5$ colour-code logical qubits on a neutral-atom processor (Rodriguez et al., Nature 2025), and high-fidelity logical magic states by code switching on trapped ions (Daguerre et al., PRX 2025). Both are small-scale demonstrations of a building block, not factories.

# Plain explanation

Error-correcting codes make some quantum operations cheap and reliable, but never all of them; a mathematical theorem forbids that. Unfortunately, the cheap operations alone are not enough: a computer using only them could be imitated by an ordinary computer, so it would have no quantum advantage.

The missing ingredient is supplied by 'magic states'. A magic state is a special quantum state that, when consumed in the right way, performs the missing operation. Making one directly is error-prone, so they are purified, like distilling spirits: fifteen rough copies go in, one much cleaner copy comes out, and the process can be repeated.

For years, magic-state 'factories' were expected to take up most of a quantum computer. That picture has changed. Better distillation schemes, and in 2024 a technique called cultivation, which grows one good magic state inside a single error-corrected patch, have made them far cheaper. Small experiments on atoms and ions have now distilled and prepared magic states on error-corrected qubits.

# Student explanation

**Why they are needed.** Clifford gates (Hadamard, phase $S$, CNOT) are easy to do fault-tolerantly, but the Gottesman–Knill theorem shows that circuits of Clifford gates and Pauli measurements can be simulated efficiently on a classical computer. A universal set needs one more gate, usually $T=\mathrm{diag}(1,e^{i\pi/4})$. The Eastin–Knill theorem rules out codes in which every gate is applied qubit-by-qubit ("transversally"), so some gate always needs a workaround.

**Gate teleportation.** Prepare the magic state $|T\rangle=T|+\rangle$. Interacting it with the data qubit using a CNOT, measuring, and applying a Clifford correction depending on the result has the same effect as applying $T$. So a supply of good magic states gives a supply of $T$ gates.

**Distillation.** Bravyi and Kitaev's 15-to-1 protocol takes 15 magic states with error $p$ and, using only Clifford operations and a check that detects most failures, outputs one with error about $35p^3$. With $p=10^{-3}$ that is about $3.5\times10^{-8}$; a second round goes far lower. The number of input states per output grows like $\log^{\gamma}(1/\varepsilon)$ for target error $\varepsilon$; better codes have pushed $\gamma$ down, and in 2024 two groups reached constant overhead ($\gamma=0$) in theory, using very large codes.

**Cultivation.** In 2024 Gidney, Shutty and Jones showed how to grow a single high-quality $|T\rangle$ state inside a surface-code patch at roughly the cost of one logical CNOT, reaching simulated error rates around $10^{-9}$ with $10^{-3}$ physical noise. This removed much of the space once reserved for factories in resource estimates.

**Counting cost.** Resource estimates count $T$ gates (or Toffoli gates, which take several $T$ gates each) because Clifford gates are comparatively cheap. Reducing the $T$ count of an algorithm is therefore a major part of compiling it for a fault-tolerant machine.
