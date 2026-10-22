---
type: claim
slug: dcp-quantum-simon-2026
title: Polynomial-time quantum algorithm for the dihedral coset problem
problem: lwe-quantum-hardness
kind: ALGORITHM
claimedBy: Daniel R. Simon
claimedAt: 2026-08-03
sources:
  - title: "Simon: A Polynomial-Time Quantum Algorithm for the Dihedral Coset Problem (ePrint 2026/1591)"
    url: https://eprint.iacr.org/2026/1591
  - title: "Gupte, Ragavan, Zhandry: The ePrint:2026/1591 Quantum Algorithm Does Not Solve DCP (ePrint 2026/1693)"
    url: https://eprint.iacr.org/2026/1693
  - title: "Guo, Yang: Rigorous Statements and Proofs of the Lemmas in Simon's Algorithm (ePrint 2026/1714)"
    url: https://eprint.iacr.org/2026/1714
checks:
  - title: Algorithm recovers the secret's least-significant bit
    method: REVIEW
    note: Gupte–Ragavan–Zhandry show that the algorithm uses only the top third of the Fourier labels, up to error $\mathrm{poly}(n)\cdot 2^{-n/3}$, and so gains negligible advantage on the LSB. They also give a no-go result for algorithms following Regev's template.
    sourceUrl: https://eprint.iacr.org/2026/1693
  - title: Rigorous proofs of the four lemmas
    method: REVIEW
    note: Guo–Yang give rigorous statements and proofs of all four lemmas, with corrections to Lemmas 1 and 4.
    sourceUrl: https://eprint.iacr.org/2026/1714
  - title: Partition-independence hypothesis holds for the algorithm's own rule
    method: REVIEW
    note: Guo–Yang show correctness needs the two-sided partition to be fixed independently of the measured string, and the algorithm does not supply this. Prove it or give a counterexample.
  - title: Rebuild the Lean refutation and check it against the 7 Oct revision
    method: FORMAL
    note: Confirm the Lean code of 2026/1693 models the algorithm as revised on 7–8 Oct 2026, not only the August version, and that its no-go still applies.
site:
  status: UNDER_REVIEW
  statusNote: Disputed. Gupte–Ragavan–Zhandry (ePrint 2026/1693) prove, with Lean code, that the algorithm cannot recover the least-significant bit of the secret with non-negligible advantage. Guo–Yang (ePrint 2026/1714) prove the four lemmas rigorously (with fixes) but identify an unproven hypothesis about the partition rule. Simon's revision of 7–8 Oct 2026 responds to the critique and has not been withdrawn.
  checks:
    - title: Algorithm recovers the secret's least-significant bit
      status: FAILED
    - title: Rigorous proofs of the four lemmas
      status: PASSED
    - title: Partition-independence hypothesis holds for the algorithm's own rule
      status: OPEN
    - title: Rebuild the Lean refutation and check it against the 7 Oct revision
      status: OPEN
---

ePrint 2026/1591 claims a polynomial-time quantum algorithm for the dihedral coset problem that erases sample bits without a subset-sum oracle, tolerating a $1/O(\log n)$ rate of faulty samples. Via Regev's reduction and Brakerski–Kirshanova–Stehlé–Wen, this would give polynomial-time quantum algorithms for approximate SVP within $\sqrt{n}\cdot\mathrm{polylog}(n)$ and for LWE in a corresponding regime. It is not a demonstrated attack on any standardised parameter set.
