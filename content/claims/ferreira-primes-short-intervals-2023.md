---
type: claim
slug: ferreira-primes-short-intervals-2023
title: Primes in every interval (x, x + x^λ] for all λ in (0,1), implying Legendre for large n
problem: legendre-conjecture
kind: PROOF
claimedBy: Luan Alberto Ferreira (arXiv preprint, submitted to Annals of Mathematics)
claimedAt: 2023-07-17
sources:
  - title: "Ferreira: Real exponential sums over primes and prime gaps (arXiv:2307.08725)"
    url: https://arxiv.org/abs/2307.08725
  - title: "Baker, Harman, Pintz: The difference between consecutive primes, II"
    url: https://doi.org/10.1112/plms/83.3.532
checks:
  - title: Expert referee report on the exponential-sum argument
    method: REFEREE
    note: The result would be a major advance on prime gaps; a specialist should check the key estimates and constants.
  - title: Consistency with known limits
    method: REVIEW
    note: Compare with Maier's matrix method and the parity barrier, which limit what short-interval methods are known to reach.
  - title: Formalization in Lean
    method: FORMAL
    note: A Lean proof of the eventual statement in the Formal Conjectures corpus would settle the large-n case.
site:
  status: UNVERIFIED
  statusNote: "The arXiv page lists no journal reference and the comments say it was submitted to Annals of Mathematics; no independent confirmation was found by 17 October 2026. The claim is extraordinary: the Riemann Hypothesis gives the asymptotic only for λ > 1/2, so the preprint claims more than RH implies. The Formal Conjectures file labels the large-n statement solved, citing Ferreira, which reflects the claim, not a refereed acceptance."
  checks:
    - title: Expert referee report on the exponential-sum argument
      status: OPEN
    - title: Consistency with known limits
      status: OPEN
    - title: Formalization in Lean
      status: OPEN
---

The preprint claims that for every real λ with 0 < λ < 1, the interval (x, x + x^λ] contains asymptotically x^λ / log x primes. This would improve the Baker–Harman–Pintz gap exponent 0.525 to any positive power and would give Legendre's conjecture, Andrica's conjecture and Brocard's conjecture for all sufficiently large n. First posted 17 July 2023; version 4 dated 7 May 2026.
