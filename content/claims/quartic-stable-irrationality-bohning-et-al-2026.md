---
type: claim
slug: quartic-stable-irrationality-bohning-et-al-2026
title: Very general quartic hypersurfaces of every dimension are not stably rational (Böhning, von Bothmer, Pirutka, Zhang, preprint)
problem: stable-rationality-quartic-hypersurfaces
kind: PROOF
claimedBy: Christian Böhning, Hans-Christian Graf von Bothmer, Alena Pirutka and Zhijia Zhang (arXiv:2611.15702, preprint)
claimedAt: 2026-11-11
sources:
  - title: "Böhning, von Bothmer, Pirutka, Zhang: Stable irrationality of quartic hypersurfaces (arXiv:2611.15702)"
    url: https://arxiv.org/abs/2611.15702
  - title: Böhning et al., HTML version v1
    url: https://arxiv.org/html/2611.15702v1
  - title: "Ottem: Very general quartic sixfolds are not stably rational (arXiv:2609.10231, preprint)"
    url: https://arxiv.org/abs/2609.10231
  - title: "Hotchkiss: The rationality problem for hypersurfaces of degree at least five (arXiv:2610.10509, preprint)"
    url: https://arxiv.org/abs/2610.10509
checks:
  - title: Expert reading of the quadric bundle and its unramified class
    method: REVIEW
    note: A specialist in unramified cohomology should check that the reference quadric bundle over (P^1)^a × (P^2)^b has a non-zero class in H^m_nr with Z/2 coefficients and satisfies the hypotheses of Schreieder's degeneration theorem.
    sourceUrl: https://arxiv.org/html/2611.15702v1
  - title: Expert reading of the degeneration to quartics in dimensions 7 and above
    method: REVIEW
    note: The new content is the Segre-embedding degeneration (first found in dimension 10) and its generalization to every dimension at least 7, with the weights on base and normal coordinates and the rescaling that puts the generic quadric in the central fibre (Sections 3 and 4, where the AI statement says ChatGPT found the constructions). These sections deserve line-by-line checking.
    sourceUrl: https://arxiv.org/html/2611.15702v1
  - title: Consistency with the known low-dimensional cases
    method: CROSS_CHECK
    note: Check that the construction is consistent with the published cases of dimensions 3, 4 and 5 and with Ottem's dimension-6 preprint, and that Remark 4.9 (recovering Hotchkiss's degree ≥ 5 result) agrees with the Hotchkiss preprint; the latter two are themselves unrefereed.
    sourceUrl: https://arxiv.org/abs/2611.15702
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.15702
  - title: Formalization
    method: FORMAL
    note: No formalization is recorded; the argument depends on Schreieder's degeneration theorem, which would also have to be formalized.
site:
  status: UNDER_REVIEW
  statusNote: An arXiv preprint (v1, 11 November 2026, 23 pages, four authors, no journal reference), unrefereed; DARC found no expert assessment. Dimensions 3 to 5 are published or accepted results, while dimension 6 (Ottem, arXiv:2609.10231) and degree at least 5 (Hotchkiss, arXiv:2610.10509) are themselves unrefereed 2026 preprints, so this claim does not yet change the community-accepted state of the problem. The paper's AI statement says about two weeks of interaction, mainly with ChatGPT-6 Astra and also Claude and models of the SAIR Open Math Model; it says ChatGPT found the first degeneration in dimension 10 using the Segre embedding of P2×P2 and that, guided by the authors, it was generalized to every dimension at least 7. The authors state that they wrote the paper themselves and are responsible for its correctness, and that ChatGPT and Claude were also used for proofreading and literature search. Origin is therefore MIXED. No Lean or other formalization is mentioned, so formal is false.
  checks:
    - title: Expert reading of the quadric bundle and its unramified class
      status: OPEN
    - title: Expert reading of the degeneration to quartics in dimensions 7 and above
      status: OPEN
    - title: Consistency with the known low-dimensional cases
      status: OPEN
    - title: Refereeing
      status: OPEN
    - title: Formalization
      status: OPEN
---

The preprint claims that a very general quartic hypersurface of any positive dimension over an uncountable algebraically closed field of characteristic not $2$ does not admit an integral decomposition of the diagonal, and is therefore not stably rational. The method is the specialization method in Schreieder's framework: a quadric bundle over a product of projective spaces $(\mathbb P^1)^a\times(\mathbb P^2)^b$ whose generic fibre is built from subforms of a Pfister form and carries a non-zero unramified cohomology class with $\mathbb Z/2$ coefficients is degenerated, using the Segre embedding to lower the degrees of the coefficients, into a family of quartics. The paper says the earlier cases are dimension 3 (Colliot-Thélène–Pirutka), 4 (Totaro), 5 (Nicaise–Ottem; Pavić–Schreieder) and 6 (Ottem), that its construction is general for dimensions $\ge7$, and that it recovers Hotchkiss's result for degree $\ge5$.
