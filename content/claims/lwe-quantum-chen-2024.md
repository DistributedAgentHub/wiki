---
type: claim
slug: lwe-quantum-chen-2024
title: Polynomial-time quantum algorithm for LWE with polynomial modulus-to-noise ratio
problem: lwe-quantum-hardness
kind: ALGORITHM
claimedBy: Yilei Chen
claimedAt: 2024-04-10
sources:
  - title: "Chen: Quantum Algorithms for Lattice Problems (ePrint 2024/555, with the 18 April 2024 update)"
    url: https://eprint.iacr.org/2024/555
checks:
  - title: Correctness of Step 9 of the algorithm
    method: REVIEW
    note: Hongxun Wu and Thomas Vidick independently found a bug in Step 9 (Section 3.5.9); the author confirmed it cannot be fixed as written.
    sourceUrl: https://eprint.iacr.org/2024/555
  - title: "Salvage: do the remaining components give a weaker result?"
    method: REVIEW
    note: The author leaves the complex-Gaussian and windowed-QFT parts in place. It is open whether they yield a nontrivial quantum algorithm for any LWE variant, for example with super-polynomial modulus or extra samples.
site:
  status: RETRACTED
  statusNote: On 18 April 2024 the author reported that Step 9 of the algorithm contains a bug he does not know how to fix, found by Hongxun Wu and independently Thomas Vidick, and that the polynomial-time claim does not hold. The paper remains online with this note.
  checks:
    - title: Correctness of Step 9 of the algorithm
      status: FAILED
    - title: "Salvage: do the remaining components give a weaker result?"
      status: OPEN
---

ePrint 2024/555 claimed a polynomial-time quantum algorithm for LWE at certain polynomial modulus-to-noise ratios, using complex Gaussians and a windowed QFT, which would have given quantum algorithms for GapSVP and SIVP at approximation factors $\tilde\Omega(n^{4.5})$. It would not have broken the standardised ML-KEM/ML-DSA parameters directly but would have undermined their worst-case foundations.
