---
type: claim
slug: two-step-nilpotency-special-varieties-jiang-li-2026
title: Fundamental groups of special quasi-projective varieties are virtually two-step nilpotent (Jiang–Li, preprint)
problem: two-step-nilpotency-conjecture-special-varieties
kind: PROOF
claimedBy: Tianshu Jiang and Jiayu Li (arXiv:2611.14283, preprint)
claimedAt: 2026-11-10
sources:
  - title: "Jiang, Li: Virtual Two-Step Nilpotency of the Fundamental Groups of Special Quasi-Projective Varieties (arXiv:2611.14283)"
    url: https://arxiv.org/abs/2611.14283
  - title: "Cao, Deng, Hacon, Păun: Two-step nilpotent monodromy of local systems on special varieties (arXiv:2603.14539)"
    url: https://arxiv.org/abs/2603.14539
  - title: "OpenAI (AI-generated, not peer-reviewed): The abelianity conjecture for special compact Kähler manifolds (openai/math family 057, 23 Sep 2026, at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-abelianity-conjecture-for-special-compact-Kahler-manifolds-September-23-2026/paper.pdf
  - title: "OpenAI (AI-generated, not peer-reviewed): Log abundance in characteristic zero (openai/math family 034, 24 Sep 2026, at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf
checks:
  - title: Expert check of the second Albanese map and the finite-kernel step
    method: REVIEW
    note: A specialist should check that the kernel of the canonical second Albanese map on the finite étale cover is finitely generated and FAb, and that finiteness of the kernel gives a finite-index subgroup of class at most two.
    sourceUrl: https://arxiv.org/abs/2611.14283
  - title: Check of the contradiction with specialness
    method: REVIEW
    note: Check that an infinite kernel gives a saturated rank-one subsheaf of logarithmic differentials whose Iitaka dimension contradicts specialness, including the bigness of the weighted adjoint via good minimal models and meridian groups.
    sourceUrl: https://arxiv.org/abs/2611.14283
  - title: Check the input from OpenAI's unrefereed log minimal model theorem
    method: REVIEW
    note: The minimal model program step cites OpenAI's AI-generated manuscript 'Log abundance in characteristic zero' (24 Sep 2026, Theorem 11.1) for the existence of good log minimal models. A specialist should check whether that input is needed in full, whether it holds, or whether published results suffice in the setting used.
    sourceUrl: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf
  - title: Consistency with the linear case and the sharpness examples
    method: CROSS_CHECK
    note: Compare the result with Theorem B of Cao–Deng–Hacon–Păun (linear images are virtually nilpotent of class at most two) and with the Cadorel–Deng–Yamanoi examples of nilpotent, non-virtually-abelian fundamental groups.
    sourceUrl: https://arxiv.org/abs/2603.14539
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.14283
site:
  status: UNDER_REVIEW
  statusNote: A 56-page arXiv preprint (v1 of 10 Nov 2026), unrefereed; the arXiv page lists no journal reference and DARC found no expert assessment yet. The paper's AI disclosure section says OpenAI's proof of the abelianity conjecture for special compact Kähler manifolds (an unrefereed AI-generated manuscript of 23 Sep 2026, cited as [OAI26d]) inspired the argument, that the proof combines the authors' group theorem with OpenAI's existence theorem for good log minimal models (the unrefereed manuscript 'Log abundance in characteristic zero', 24 Sep 2026, cited as [OAI26b, Theorem 11.1]), and that the authors thank ChatGPT-6 Astra for help with discussion and revision of the arguments; it states that the human authors conceived the new ideas and take full responsibility for the proofs. The claim therefore also rests on an unrefereed AI-generated result. The linear case it generalizes is in the separately posted Cao–Deng–Hacon–Păun paper (arXiv:2603.14539), which is not part of this claim.
  checks:
    - title: Expert check of the second Albanese map and the finite-kernel step
      status: OPEN
    - title: Check of the contradiction with specialness
      status: OPEN
    - title: Check the input from OpenAI's unrefereed log minimal model theorem
      status: OPEN
    - title: Consistency with the linear case and the sharpness examples
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims that for every smooth connected complex quasi-projective variety special in Campana's sense, the fundamental group has a finite-index subgroup $\Gamma_0$ with $[\Gamma_0,[\Gamma_0,\Gamma_0]]=1$, which would settle the two-step nilpotency conjecture of Cao, Deng, Hacon and Păun. The method builds a canonical second Albanese map on a finite étale cover, shows its kernel on fundamental groups is finite by producing, from an infinite kernel, a rank-one subsheaf of logarithmic differentials of too large Iitaka dimension, and uses good minimal models and meridian groups.
