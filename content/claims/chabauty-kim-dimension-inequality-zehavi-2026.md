---
type: claim
slug: chabauty-kim-dimension-inequality-zehavi-2026
title: Kim's dimension inequality for curves of genus at least 2 over Q (Zehavi, preprint)
problem: chabauty-kim-dimension-inequality
kind: PROOF
claimedBy: Sa'ar Zehavi (arXiv:2611.18218, preprint)
claimedAt: 2026-11-13
sources:
  - title: "Zehavi: The Chabauty–Kim dimension inequality via noncommutative Iwasawa theory (arXiv:2611.18218, 13 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.18218
  - title: "Kim: The unipotent Albanese map and Selmer varieties for curves (arXiv:math/0510441)"
    url: https://arxiv.org/abs/math/0510441
  - title: "Coates, Kim: Selmer varieties for curves with CM Jacobians (arXiv:0810.3354)"
    url: https://arxiv.org/abs/0810.3354
  - title: "Ellenberg, Hast: Rational points on solvable curves over Q via non-abelian Chabauty (arXiv:1706.00525)"
    url: https://arxiv.org/abs/1706.00525
  - title: "Balakrishnan, Dogra: Quadratic Chabauty and rational points I: p-adic heights (arXiv:1601.00388)"
    url: https://arxiv.org/abs/1601.00388
  - title: "Balakrishnan, Dogra, Müller, Tuitman, Vonk: Explicit Chabauty–Kim for the split Cartan modular curve of level 13 (arXiv:1711.05846)"
    url: https://arxiv.org/abs/1711.05846
checks:
  - title: Expert reading of the H^2 bound (Theorem 1.1)
    method: REVIEW
    note: An expert in noncommutative Iwasawa theory should read the reduction of dim H^2 to Hom of the Iwasawa module X into the dual twist, the claim that X is finitely generated and torsion over the field K_c = Q(A[p^c]), the noncommutative Weierstrass-type step, and the Hilbert-series count on the graded ring of dimension O(m^{D-g-1}) that yields the min{d_lambda, ...} bound outside a finite set of weights.
    sourceUrl: https://arxiv.org/abs/2611.18218
  - title: Expert reading of the power-saving bound (Theorem 1.4)
    method: REVIEW
    note: A representation theorist should check the use of Filip's character formula, Weyl's unitary trick, the Casimir second-moment estimate and the Rankin-type optimisation, and that the resulting exponent -1/(D+1) is what Theorem 1.4 needs to beat the growth of the de Rham target. Per the AI declaration this part was developed with an AI system, so it deserves independent re-derivation.
    sourceUrl: https://arxiv.org/abs/2611.18218
  - title: Deduction of the dimension inequality (Corollary 1.5)
    method: CROSS_CHECK
    note: Check that the H^2 bounds, combined with the Euler-characteristic count for H^1_f of the unipotent Selmer scheme, give the strict inequality for all large n at every odd prime of good reduction, with no use of Bloch–Kato or Fontaine–Mazur, and compare with the Coates–Kim and Ellenberg–Hast cases where the inequality is already known.
    sourceUrl: https://arxiv.org/abs/2611.18218
  - title: Consistency with known examples
    method: REPRODUCE
    note: For a small CM genus-2 curve covered by Coates–Kim, compute the dimensions on both sides for several n and confirm they satisfy the claimed bounds. This tests the statement on examples only, not the proof.
    sourceUrl: https://arxiv.org/abs/0810.3354
  - title: Formalization
    method: FORMAL
    note: No Lean or other machine-checked artifact is mentioned in the preprint, and DARC found none.
    sourceUrl: https://arxiv.org/abs/2611.18218
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference. Peer review is pending."
    sourceUrl: https://arxiv.org/abs/2611.18218
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1, 13 November 2026, 61 pages, math.NT and math.AG, single author, comments welcome), unrefereed; DARC found no expert assessment and no independent verification. The paper's AI Declaration says the general strategy is the author's (or perhaps Coates and Kim's), that the nontrivial bound and its application to the power-saving bound were developed through a long back-and-forth with GPT 6 Astra (OpenAI) in Ultra mode, and that the later draft was written without LLMs apart from discussion of standard background and gathering references; origin is therefore MIXED. No Lean or other formalization is mentioned, so formal is false. Earlier unconditional cases (Coates–Kim for CM Jacobians, Ellenberg–Hast for solvable covers of P^1) are consistent with the claimed statement but do not count as verification of it. The status stays UNDER_REVIEW, the problem stays OPEN.
  checks:
    - title: Expert reading of the H^2 bound (Theorem 1.1)
      status: OPEN
    - title: Expert reading of the power-saving bound (Theorem 1.4)
      status: OPEN
    - title: Deduction of the dimension inequality (Corollary 1.5)
      status: OPEN
    - title: Consistency with known examples
      status: OPEN
    - title: Formalization
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims (Corollary 1.5) that for every smooth projective geometrically connected curve $C/\mathbb Q$ of genus $g\ge2$ with good reduction outside a finite set $S$, a rational base point and an odd auxiliary prime $p$, Kim's dimension inequality $\dim H^1_f(G_{\mathbb Q,\Sigma},U_n^{\text{ét}}) < \dim U_n^{\mathrm{dR}}/F^0$ holds for all sufficiently large $n$. It rests on Theorem 1.1, a bound $\dim H^2(G_{\mathbb Q,\Sigma},V_{\lambda,s})\ll\min\{d_\lambda,(1+\|\lambda\|)^{D-g-1}/d_\lambda\}$ for irreducible representations of the symplectic group outside a finite exceptional set of weights ($D=2g^2+g$), proved with noncommutative Iwasawa theory, and on Theorem 1.4, a power-saving bound $\dim H^2<A\,b_n\,n^{-1/(D+1)}$ from character estimates on $\mathrm{USp}(2g)$. The preprint says the finiteness of the Chabauty–Kim loci then gives a new proof of Mordell's theorem over $\mathbb Q$; this is not a new consequence, and the paper does not claim the method makes rational points effectively computable. The constant A and the finite exceptional set of weights are shown to exist but are not computed.
