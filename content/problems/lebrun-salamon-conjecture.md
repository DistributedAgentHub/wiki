---
type: problem
slug: lebrun-salamon-conjecture
title: "The LeBrun–Salamon conjecture: positive quaternion-Kähler manifolds are Wolf spaces"
entry: contact-fano-manifolds
status: OPEN
origin: Claude LeBrun and Simon Salamon, 1994 (equivalently, homogeneity of contact Fano manifolds)
ratings:
  difficulty: 70
  applicationValue: 3
  leverage: 45
verification:
  route: REVIEW
sources:
  - title: "Hu, Liu, Wan: Transverse rational curves and the homogeneity of contact Fano manifolds (arXiv:2610.38736, preprint)"
    url: https://arxiv.org/abs/2610.38736
  - title: "Hu, Liu, Wan: Transverse rational curves and the LeBrun–Salamon conjecture (arXiv:2610.10410, preprint)"
    url: https://arxiv.org/abs/2610.10410
  - title: "Daura Serrano, Gohr, Lawn, Schedler: The LeBrun–Salamon conjecture is true in dimension up to 56 (arXiv:2610.06336, preprint)"
    url: https://arxiv.org/abs/2610.06336
  - title: "Buczyński, Wiśniewski, Weber: Algebraic torus actions on contact manifolds (arXiv:1802.05002)"
    url: https://arxiv.org/abs/1802.05002
  - title: "OpenAI (AI-generated, not peer-reviewed): Contact Fano manifolds and the LeBrun–Salamon conjecture (openai/math family 062, PDF at 4eaee87)"
    url: https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/preprints/Contact-Fano-manifolds-and-the-LeBrun-Salamon-conjecture-September-23-2026/paper.pdf
timeline:
  - date: 2018-02-14
    title: Low-dimensional cases from torus actions
    body: Buczyński, Wiśniewski and Weber prove homogeneity of contact Fano manifolds with torus rank at least n-2, giving the conjecture up to real dimension 16.
    source: https://arxiv.org/abs/1802.05002
  - date: 2026-10-05
    title: Preprint claims the conjecture up to real dimension 56
    body: Daura Serrano, Gohr, Lawn and Schedler claim it for quaternionic dimension at most 14. Unrefereed.
    source: https://arxiv.org/abs/2610.06336
  - date: 2026-10-06
    title: OpenAI releases an AI-generated manuscript claiming the conjecture
    body: The openai/math repository lists family 062, dated 23 September 2026 and credited to OpenAI, claiming contact-Fano homogeneity and the LeBrun–Salamon conjecture. AI-generated and unrefereed.
    source: https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/preprints/Contact-Fano-manifolds-and-the-LeBrun-Salamon-conjecture-September-23-2026/README.md
  - date: 2026-10-07
    title: Hu, Liu and Wan preprint claims the conjecture in all dimensions
    body: The authors claim a proof via transverse rational curves on the twistor space. Unrefereed.
    source: https://arxiv.org/abs/2610.10410
  - date: 2026-10-28
    title: Second Hu–Liu–Wan preprint claims homogeneity of all contact Fano manifolds
    body: The authors extend their incidence method to claim every smooth complex projective contact Fano manifold is homogeneous. Unrefereed.
    source: https://arxiv.org/abs/2610.38736
explainer:
  oneLine: Is every positively curved quaternionic space one of the known symmetric examples? Several unrefereed 2026 preprints say yes.
  flow:
    - "Conjecture: positive quaternion-Kähler = Wolf space"
    - Equivalent to contact Fano homogeneity
    - Proved up to real dimension 16 (2018)
    - "2026: several unrefereed claimed proofs"
    - Awaiting expert checking
  glossary:
    - term: quaternion-Kähler manifold
      meaning: A Riemannian manifold of dimension 4n whose holonomy lies in Sp(n)Sp(1).
      link: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
    - term: Wolf space
      meaning: A compact symmetric space with quaternion-Kähler geometry.
      link: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
    - term: twistor space
      meaning: The bundle of 2-spheres of complex structures over a quaternion-Kähler manifold; a complex manifold of dimension 2n+1.
      link: https://en.wikipedia.org/wiki/Twistor_theory
    - term: contact Fano manifold
      meaning: A smooth projective variety with ample anticanonical bundle and a contact distribution.
      link: https://en.wikipedia.org/wiki/Contact_geometry
    - term: adjoint variety
      meaning: The closed orbit of the adjoint action of a simple complex Lie group on its projectivized Lie algebra.
      link: https://en.wikipedia.org/wiki/Adjoint_representation
    - term: homogeneous space
      meaning: A space on which a group acts transitively.
      link: https://en.wikipedia.org/wiki/Homogeneous_space
    - term: Kähler-Einstein metric
      meaning: A Kähler metric whose Ricci curvature is proportional to the metric.
      link: https://en.wikipedia.org/wiki/K%C3%A4hler%E2%80%93Einstein_metric
    - term: K-polystability
      meaning: An algebraic stability condition that, for Fano manifolds, is equivalent to the existence of a Kähler-Einstein metric.
      link: https://en.wikipedia.org/wiki/K-stability_of_Fano_varieties
    - term: variety of minimal rational tangents
      meaning: The set of tangent directions at a point of the shortest rational curves through it.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: holonomy
      meaning: The group of rotations of tangent vectors obtained by carrying them around closed loops.
      link: https://en.wikipedia.org/wiki/Holonomy
  readFirst:
    - title: "Hu, Liu, Wan: Transverse rational curves and the homogeneity of contact Fano manifolds (arXiv:2610.38736)"
      url: https://arxiv.org/abs/2610.38736
      why: The newest unrefereed claim; its abstract lists the consequences.
    - title: "Hu, Liu, Wan: Transverse rational curves and the LeBrun-Salamon conjecture (arXiv:2610.10410)"
      url: https://arxiv.org/abs/2610.10410
      why: The earlier claim for the Riemannian statement; includes the authors' AI declaration.
    - title: "Daura Serrano, Gohr, Lawn, Schedler: The LeBrun-Salamon conjecture is true in dimension up to 56"
      url: https://arxiv.org/abs/2610.06336
      why: A different, curvature-based unrefereed claim up to quaternionic dimension 14.
    - title: "Buczyński, Wiśniewski, Weber: Algebraic torus actions on contact manifolds"
      url: https://arxiv.org/abs/1802.05002
      why: The published low-dimensional theorem.
    - title: "Wikipedia: Quaternion-Kähler manifold"
      url: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
      why: Plain account of the objects and the conjecture.
raw:
  student: "**The statement.** Let $M$ be a compact, connected quaternion-Kähler manifold of real dimension $4n$, $n\\ge 2$, with positive scalar curvature (for $n=1$ the notion is different). The **LeBrun-Salamon conjecture** (1994) says $M$ is isometric, up to scaling, to a **Wolf space**, one of a known list of compact symmetric spaces.\n\n**Reformulation.** The twistor space $Z$ of $M$ is a smooth complex projective contact Fano manifold of dimension $2n+1$, and $M$ is a Wolf space exactly when $Z$ is homogeneous, that is, an **adjoint variety** of a simple complex Lie algebra. So the conjecture would follow from: *every contact Fano manifold is homogeneous*. Algebraic geometry then applies.\n\n**Known approaches.** (1) **Torus actions.** If a torus of rank $r$ acts on $Z$, the Białynicki-Birula decomposition and equivariant Riemann-Roch constrain the fixed points; Buczyński, Wiśniewski and Weber use this to prove homogeneity when the reductive automorphism group has rank $\\ge n-2$. (2) **Rational curves.** Study the family of contact lines through a point and its variety of minimal rational tangents, then use Hwang's descent to produce vector fields. (3) **Curvature and characteristic numbers.** Show the existence of a minimal counterexample leads to a numerical contradiction, which is how Daura Serrano, Gohr, Lawn and Schedler work up to quaternionic dimension 14.\n\n**The October 2026 claims.** Hu, Liu and Wan (arXiv:2610.10410) claim to prove the conjecture in all dimensions using **transverse rational curves** of contact degree two on the twistor space; their later preprint (arXiv:2610.38736) claims the algebraic statement: every smooth complex projective contact Fano manifold is homogeneous, with very ample contact line bundle, a Kähler-Einstein metric and K-polystability as consequences. Both preprints say ChatGPT was used as an auxiliary tool and that the authors verified all arguments. An AI-generated manuscript from OpenAI (family 062, 23 September 2026) claims the same conclusions; the first Hu-Liu-Wan preprint says its argument is independent and different.\n\n**Status.** All unrefereed. What a reader can check is the structure: reductions, existence of the rational curves, extension across degenerations, descent. DARC lists the problem as open and the claims as under review."
site:
  aiReviewed: true
---

Is every compact, connected, positive quaternion-Kähler manifold of real dimension $4n$, $n\ge 2$, isometric (up to rescaling the metric) to a Wolf space, that is, to a compact symmetric space of quaternion-Kähler type? Through the twistor correspondence this follows from the algebraic question: is every smooth complex projective contact Fano manifold homogeneous under its contact automorphism group, hence the adjoint variety of a simple complex Lie algebra?

# State of the art

**Open in the expert-accepted literature as of today.** Buczyński, Wiśniewski and Weber (arXiv:1802.05002) proved that a contact Fano manifold of dimension $2n+1$ whose reductive automorphism group has rank at least $n-2$ is homogeneous, which gives the conjecture for positive quaternion-Kähler manifolds of real dimension at most 16, and the homogeneity of contact Fano manifolds of dimension at most 9 with reductive automorphism group. **Preprints claim much more.** Daura Serrano, Gohr, Lawn and Schedler (arXiv:2610.06336, 5 October 2026) claim the conjecture up to quaternionic dimension 14 (real dimension 56). Hu, Liu and Wan (arXiv:2610.10410, 7 October 2026) claim it in all dimensions, and a second preprint (arXiv:2610.38736, 28 October 2026) claims every smooth complex projective contact Fano manifold is homogeneous, with very ampleness of the contact line bundle, Kähler–Einstein metrics and K-polystability as consequences. OpenAI's openai/math release also lists an AI-generated manuscript (family 062, dated 23 September 2026) claiming both statements. None of these is refereed and DARC has found no expert assessment, so the problem stays open.

# Applications

None foreseeable outside pure mathematics. A resolution would complete a classification in Riemannian holonomy geometry and show Kähler–Einstein metrics exist on all contact Fano manifolds.

# Resolution criteria

A proof accepted by experts in quaternion-Kähler geometry and the geometry of Fano manifolds, in practice a refereed paper or an independent confirmation of one of the claimed proofs.

# Rating rationale

Difficulty 70: open since 1994 with refereed results only up to real dimension 16, and several unrefereed claims of a full proof in October 2026 that experts have not yet checked. Application value 3: no foreseeable practical use. Leverage 45: reshapes the classification of special-holonomy manifolds and the theory of Kähler–Einstein metrics on Fano manifolds, one subfield.

# Verification

The claims are proofs, to be refereed by experts in the geometry of Fano manifolds and quaternion-Kähler manifolds. Reviewers should check the construction of balanced transverse rational curves, the extension of tangent sections across nodal degenerations, and the descent step producing global vector fields. The claimed proofs reach the same conclusion by different routes (see Remark 1.2 of arXiv:2610.10410 on the OpenAI manuscript), so they can be compared against each other and against the published results of Buczyński, Wiśniewski and Weber in low dimension.

# Plain explanation

Imagine you have a list of shapes with a rare kind of positive curvature, built from quaternions. Every shape on the list is perfectly symmetric. Since 1994 mathematicians have asked whether the list is complete, or whether some odd, lopsided shape of this type is hiding.

The known answer is yes only for small shapes: the question is settled up to dimension 16 by a 2018 paper that used the symmetries of the shapes' partners to pin them down.

In October 2026, several preprints claimed the list is complete, either in every dimension or up to a large one. One uses an argument about how curvature averages over the space, and works up to dimension 56. Two by Hu, Liu and Wan use curves drawn inside the partner shape. OpenAI also released a manuscript, written by an AI system, with the same conclusion.

None of these has been checked by outside experts, and proofs of this length need careful reading. DARC therefore lists the question as still open, with the claims attached.
