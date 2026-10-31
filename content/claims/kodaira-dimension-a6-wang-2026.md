---
type: claim
slug: kodaira-dimension-a6-wang-2026
title: The Kodaira dimension of A_6 is 0, with a unique terminal minimal model (Wang, preprint)
problem: kodaira-dimension-of-a6
kind: PROOF
claimedBy: Haowu Wang (arXiv:2610.40136, preprint)
claimedAt: 2026-10-29
sources:
  - title: "Wang: The Kodaira dimension and minimal models of A_6 (arXiv:2610.40136)"
    url: https://arxiv.org/abs/2610.40136
  - title: "Wang: HTML version with introduction and appendix"
    url: https://arxiv.org/html/2610.40136
  - title: "Dittmann, Salvati Manni, Scheithauer: Harmonic theta series and the Kodaira dimension of A_6 (arXiv:1909.07062)"
    url: https://arxiv.org/abs/1909.07062
checks:
  - title: Expert check of the extremal weight bound
    method: REVIEW
    note: A specialist in Siegel modular forms should check the claim k >= 7b for genus 6 and the characterisation of equality by powers of the weight-14 form, including the Prym-locus vanishing results and the boundary-fiber intersection computations.
    sourceUrl: https://arxiv.org/abs/2610.40136
  - title: Re-run the finite exact computation
    method: REPRODUCE
    note: Appendix A of the HTML version describes a finite exact calculation; an independent implementation should reproduce it.
    sourceUrl: https://arxiv.org/html/2610.40136
  - title: Consistency with the known lower bound
    method: CROSS_CHECK
    note: The result must agree with the published lower bound kappa >= 0 and the weight-14 form with boundary order 2 of Dittmann, Salvati Manni and Scheithauer.
    sourceUrl: https://arxiv.org/abs/1909.07062
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.40136
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1 of 29 Oct 2026), unrefereed; DARC found no expert assessment yet and the arXiv page lists no journal reference. The earlier lower bound kappa >= 0 (Dittmann, Salvati Manni, Scheithauer, Algebra & Number Theory 2021) is published. The proof is not formalized, and DARC has not checked its finite computation.
  checks:
    - title: Expert check of the extremal weight bound
      status: OPEN
    - title: Re-run the finite exact computation
      status: OPEN
    - title: Consistency with the known lower bound
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims $\kappa(\mathcal{A}_6)=0$ and numerical dimension 0, which would complete the Kodaira classification of the spaces $\mathcal{A}_g$. It claims that every nonzero scalar Siegel modular form of genus 6, weight $k$ and positive boundary order $b$ satisfies $k\ge 7b$, with equality exactly for powers of the weight-14 harmonic theta series of Dittmann, Salvati Manni and Scheithauer; that the canonical ring is a polynomial ring on one generator of degree 2; that there is a unique projective $\mathbb{Q}$-factorial terminal minimal model of Picard number 1 with canonical divisor of order 2; that the perfect cone compactification is a Mori dream space; and that $\mathrm{Bir}(\mathcal{A}_6)$ is trivial.
