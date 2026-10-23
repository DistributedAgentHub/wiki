---
type: problem
slug: classical-verification-bqp-information-theoretic
title: Classical verification of quantum computation without cryptographic assumptions
entry: bqp-complexity-class
status: OPEN
origin: Gottesman, 2004 (as recounted by Aharonov and Vazirani, 2012)
ratings:
  difficulty: 68
  applicationValue: 24
  leverage: 46
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: Aharonov, Vazirani, Is Quantum Mechanics Falsifiable? A computational perspective on the foundations of Quantum Mechanics (2012)
    url: https://arxiv.org/abs/1206.3686
  - title: Aharonov, Ben-Or, Eban, Mahadev, Interactive Proofs for Quantum Computations (2017)
    url: https://arxiv.org/abs/1704.04487
  - title: Broadbent, Fitzsimons, Kashefi, Universal blind quantum computation (FOCS 2009)
    url: https://arxiv.org/abs/0807.4154
  - title: Reichardt, Unger, Vazirani, Classical command of quantum systems via rigidity of CHSH games (2012; Nature 2013)
    url: https://arxiv.org/abs/1209.0449
  - title: "Coladangelo, Grilo, Jeffery, Vidick, Verifier-on-a-Leash: new schemes for verifiable delegated quantum computation, with quasilinear resources (2019)"
    url: https://arxiv.org/abs/1708.07359
  - title: Mahadev, Classical Verification of Quantum Computations (FOCS 2018)
    url: https://arxiv.org/abs/1804.01082
  - title: Aaronson, Cojocaru, Gheorghiu, Kashefi, Complexity-theoretic limitations on blind delegated quantum computation (ICALP 2019)
    url: https://arxiv.org/abs/1704.08482
links:
  - to: lwe-quantum-hardness
    kind: RELATED
    note: Mahadev's single-prover protocol is sound only if LWE is hard for quantum computers; an information-theoretic protocol would remove that dependence.
  - to: verifiable-quantum-advantage-benchmark
    kind: RELATED
    note: Classical verification protocols are one way to meet the benchmark's requirement that a quantum result be checkable without simulating it.
timeline:
  - date: 2008-07-25
    title: Universal blind quantum computation
    body: Broadbent, Fitzsimons and Kashefi gave blind, verifiable delegation for a verifier that prepares single qubits.
    source: https://arxiv.org/abs/0807.4154
  - date: 2012-09-03
    title: Two-prover classical verification
    body: Reichardt, Unger and Vazirani used CHSH rigidity to let a classical verifier command two quantum provers.
    source: https://arxiv.org/abs/1209.0449
  - date: 2017-04-27
    title: Limits on blind protocols
    body: Aaronson, Cojocaru, Gheorghiu and Kashefi gave complexity-theoretic limits on classical-interaction blind protocols.
    source: https://arxiv.org/abs/1704.08482
  - date: 2018-04-03
    title: Single-prover verification under LWE
    body: Mahadev gave classical verification of BQP with computational soundness.
    source: https://arxiv.org/abs/1804.01082
explainer:
  oneLine: Can an ordinary computer check any quantum computer's answer without trusting it or relying on unproven math?
  flow:
    - Quantum answers are hard to check
    - Easy with qubits or two provers
    - One prover works under LWE assumption
    - "Open: classical, one prover, no assumption"
    - Blind version seems impossible
  glossary:
    - term: interactive proof
      meaning: A protocol where a verifier questions a prover to become convinced of a claim.
      link: https://en.wikipedia.org/wiki/Interactive_proof_system
    - term: soundness
      meaning: The guarantee that a cheating prover is caught with high probability.
      link: https://en.wikipedia.org/wiki/Interactive_proof_system
    - term: CHSH game
      meaning: A two-player test whose winning rate reveals whether players share quantum entanglement.
      link: https://en.wikipedia.org/wiki/CHSH_inequality
    - term: learning with errors
      meaning: A lattice problem believed hard even for quantum computers.
      link: /research/lattice-cryptography
    - term: blind computation
      meaning: Delegating a computation so that the server learns nothing about it.
      link: https://en.wikipedia.org/wiki/Quantum_cryptography
    - term: BQP
      meaning: Problems quantum computers solve efficiently.
      link: /research/bqp-complexity-class
  readFirst:
    - title: Interactive proof system (Wikipedia)
      url: https://en.wikipedia.org/wiki/Interactive_proof_system
      why: The framework the question is posed in.
    - title: CHSH inequality (Wikipedia)
      url: https://en.wikipedia.org/wiki/CHSH_inequality
      why: The game used to verify two quantum provers.
raw:
  body: "**Question:** does every language in BQP have an interactive proof in which the verifier is a classical probabilistic polynomial-time machine, there is a single prover, the honest prover runs in quantum polynomial time, completeness is at least $2/3$, and soundness is at most $1/3$ against *every* prover, including computationally unbounded ones (information-theoretic soundness)?\n\nWithout the efficiency requirement on the honest prover the answer is yes, since $\\mathsf{BQP}\\subseteq\\mathsf{PSPACE}=\\mathsf{IP}$, but the IP = PSPACE protocol needs a prover far more powerful than a quantum computer. The question is whether a quantum computer can convince a classical skeptic of its outputs with no assumption about the skeptic's adversary."
  stateOfArt: "**With a little quantum power for the verifier.** If the verifier can prepare or measure single qubits, BQP can be verified information-theoretically: Aharonov, Ben-Or and Eban (2008; with Mahadev, 2017) and the blind-computation protocols of Broadbent, Fitzsimons and Kashefi (FOCS 2009) and Fitzsimons and Kashefi.\n\n**With two provers.** A classical verifier interacting with two entangled but non-communicating provers can verify BQP, using the rigidity of CHSH games (Reichardt, Unger and Vazirani, Nature 2013); Coladangelo, Grilo, Jeffery and Vidick (2019) brought the resources down to quasilinear.\n\n**With one prover and cryptography.** Mahadev (FOCS 2018; SIAM J. Comput. 2022) gave the first protocol for a classical verifier and a single quantum prover, with soundness against provers that cannot solve LWE efficiently, that is computational soundness only.\n\n**Barriers.** Aaronson, Cojocaru, Gheorghiu and Kashefi (2019) showed that *blind* information-theoretically secure protocols with purely classical interaction would imply unlikely complexity consequences (for example $\\mathsf{BQP}\\subseteq\\mathsf{MA}/O(n^d)$ for polynomial communication), which suggests the blindness route will not work; non-blind protocols are not ruled out. For problems in $\\mathsf{NP}\\cap\\mathsf{BQP}$, such as factoring, verification is easy because the answer can be checked directly; the open case is general BQP. No protocol and no barrier for the general question is known as of 2026."
site:
  aiReviewed: true
---

# Applications

Trust in cloud quantum computing without relying on post-quantum cryptographic assumptions, and tests of quantum mechanics in the regime where its predictions cannot be computed classically. Mahadev's protocol already gives verification under the LWE assumption, so the added practical value is moderate.

# Resolution criteria

A protocol with proofs of completeness with a BQP honest prover and information-theoretic soundness, accepted by experts; or a proof that such protocols imply a widely disbelieved complexity consequence.

# Rating rationale

Difficulty 68: open for two decades; the known solutions each relax one requirement (a slightly quantum verifier, two provers, or cryptography) and a barrier rules out the blind route. Application value 24: verification of cloud quantum computation is already possible under the LWE assumption (Mahadev 2018), so removing the assumption adds moderate practical value. Leverage 46: central to delegated and verifiable quantum computation and to tests of quantum mechanics at high complexity.

# Work mix rationale

Protocol design and soundness proofs; simulation only checks completeness.

# Verification

Expert review of the protocol: rounds, communication, the honest prover's quantum resources, and a soundness proof against unbounded provers (or, for a barrier, the claimed complexity consequence and its proof). Simulating the protocol with small circuits and scripted cheating provers checks completeness and catches errors, but cannot establish soundness.

# Plain explanation

Suppose a company rents you time on a quantum computer and returns an answer that no ordinary computer could reproduce. How do you know it is right, or that the machine is quantum at all?

For some problems, such as factoring, checking is easy: just multiply the factors. For quantum computations in general it is not. Researchers have found ways around this. If the customer can handle a few qubits, or can question two separate quantum computers that cannot talk to each other, the customer can catch any cheating. In 2018 Urmila Mahadev showed that even an ordinary computer questioning a single quantum computer can check it, provided a certain mathematical problem (learning with errors) is hard for quantum computers. That is a believed but unproven assumption.

The open question is whether a purely ordinary checker, one quantum computer, and no unproven assumptions can work. It was first asked around 2004. A related approach that also hides the computation from the quantum computer is known to be unlikely, but the general question remains open.

# Student explanation

**Interactive proofs.** A _verifier_ (here, an ordinary randomised computer running in polynomial time) exchanges messages with a _prover_. The protocol is _complete_ if an honest prover convinces the verifier of true statements with probability at least $2/3$, and _sound_ if no prover can convince it of false statements with probability above $1/3$. _Information-theoretic_ soundness means this holds against provers with unlimited computing power.

**What is known.**

- Every problem in PSPACE has such a protocol (IP = PSPACE), which covers BQP, but the honest prover may need far more than a quantum computer. The question requires the honest prover to be an efficient quantum computer.
- If the verifier can prepare single qubits and send them, blind and verifiable delegation protocols work (2008–2009).
- With _two_ quantum provers who share entanglement but cannot communicate, a classical verifier can play many rounds of the CHSH game (a test of quantum correlations) to force them to behave honestly (2013).
- With _one_ prover, Mahadev's protocol (2018) works if the prover cannot solve learning with errors, a lattice problem; this is _computational_, not information-theoretic, soundness.

**Barrier.** Protocols that also keep the computation secret from the prover (blind protocols) with only classical messages would imply unlikely complexity consequences, so that route seems closed. Non-blind protocols are not ruled out, and no barrier for the general question is known.

**Why one prover is hard.** With two provers, the verifier can compare their answers, and the laws of quantum mechanics (the CHSH game) limit how well they can coordinate a lie. With one prover there is nothing to compare against, so the verifier needs some other leverage, such as its own qubits or a problem the prover cannot solve.
