---
type: entry
slug: contact-fano-manifolds
title: Contact Fano manifolds and positive quaternion-Kähler geometry
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: A contact Fano manifold carries a holomorphic contact structure and positive curvature. Positive quaternion-Kähler manifolds have such twistor spaces, and homogeneity of the former would give the Wolf spaces.
reliedOn: The LeBrun–Salamon conjecture about positive quaternion-Kähler manifolds follows, through the twistor correspondence, from a statement about contact Fano manifolds; both sides are tested by the same classification of adjoint varieties.
dependsOn:
  - algebraic-geometry
references:
  - title: "Buczyński, Wiśniewski, Weber: Algebraic torus actions on contact manifolds (arXiv:1802.05002)"
    url: https://arxiv.org/abs/1802.05002
    kind: paper
  - title: "Daura Serrano, Gohr, Lawn, Schedler: The LeBrun–Salamon conjecture is true in dimension up to 56 (arXiv:2610.06336, preprint)"
    url: https://arxiv.org/abs/2610.06336
    kind: paper
  - title: "Hu, Liu, Wan: Transverse rational curves and the LeBrun–Salamon conjecture (arXiv:2610.10410, preprint)"
    url: https://arxiv.org/abs/2610.10410
    kind: paper
  - title: "Hu, Liu, Wan: Transverse rational curves and the homogeneity of contact Fano manifolds (arXiv:2610.38736, preprint)"
    url: https://arxiv.org/abs/2610.38736
    kind: paper
  - title: "Wikipedia: Quaternion-Kähler manifold"
    url: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
    kind: article
timeline:
  - date: 2018-02-14
    title: Contact Fano manifolds with large torus rank are homogeneous
    body: Buczyński, Wiśniewski and Weber show a contact Fano manifold of dimension 2n+1 with reductive automorphism group of rank at least n-2 is homogeneous, which gives the LeBrun–Salamon conjecture for positive quaternion-Kähler manifolds of real dimension at most 16 (v1 date; v3 revised 2020).
    source: https://arxiv.org/abs/1802.05002
  - date: 2026-10-05
    title: Preprint claims the conjecture up to quaternionic dimension 14
    body: Daura Serrano, Gohr, Lawn and Schedler claim the LeBrun–Salamon conjecture for positive quaternion-Kähler manifolds of quaternionic dimension at most 14 (real dimension 56). Unrefereed; the paper mentions partial Lean verification.
    source: https://arxiv.org/abs/2610.06336
  - date: 2026-10-07
    title: Hu, Liu and Wan preprint claims the full conjecture
    body: The authors claim every compact connected positive quaternion-Kähler manifold of real dimension 4n with n at least 2 is a rescaled Wolf space, using transverse rational curves on the twistor space. Unrefereed.
    source: https://arxiv.org/abs/2610.10410
  - date: 2026-10-28
    title: Preprint claims every contact Fano manifold is homogeneous
    body: Hu, Liu and Wan claim that every smooth complex projective contact Fano manifold is homogeneous under its contact automorphism group, with consequences including very ampleness of the contact line bundle, Kähler–Einstein metrics and K-polystability. Unrefereed.
    source: https://arxiv.org/abs/2610.38736
explainer:
  oneLine: Curved shapes with a built-in notion of "twisting direction", and whether the nicest ones are all perfectly symmetric.
  flow:
    - Positive quaternion-Kähler manifold M
    - Its twistor space Z is a contact Fano manifold
    - "Conjecture: Z is homogeneous (adjoint variety)"
    - Then M is a Wolf space
    - "2026: several unrefereed claimed proofs"
  glossary:
    - term: quaternion-Kähler manifold
      meaning: "A Riemannian manifold of dimension 4n whose holonomy lies in Sp(n)Sp(1): locally like n-dimensional quaternionic space."
      link: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
    - term: Wolf space
      meaning: A compact symmetric space with quaternion-Kähler geometry, such as quaternionic projective space.
      link: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
    - term: holonomy
      meaning: The group of rotations of tangent vectors obtained by carrying them around closed loops.
      link: https://en.wikipedia.org/wiki/Holonomy
    - term: twistor space
      meaning: A complex manifold attached to a geometric space, here the bundle of 2-spheres of complex structures over it.
      link: https://en.wikipedia.org/wiki/Twistor_theory
    - term: contact structure
      meaning: A hyperplane field in the tangent bundle that is maximally non-integrable at every point.
      link: https://en.wikipedia.org/wiki/Contact_geometry
    - term: Fano manifold
      meaning: A smooth projective variety whose anticanonical bundle is ample; strongly positively curved.
      link: https://en.wikipedia.org/wiki/Fano_variety
    - term: homogeneous space
      meaning: "A space on which a group acts transitively: every point can be moved to every other."
      link: https://en.wikipedia.org/wiki/Homogeneous_space
    - term: adjoint variety
      meaning: The closed orbit of the adjoint action of a simple complex Lie group on the projectivized Lie algebra.
      link: https://en.wikipedia.org/wiki/Adjoint_representation
    - term: variety of minimal rational tangents
      meaning: The set of tangent directions at a point of the shortest rational curves through it.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: algebraic geometry
      meaning: The study of shapes defined by polynomial equations.
      link: /research/algebraic-geometry
  readFirst:
    - title: "Wikipedia: Quaternion-Kähler manifold"
      url: https://en.wikipedia.org/wiki/Quaternion-K%C3%A4hler_manifold
      why: Definitions, the Wolf spaces, the conjecture and the twistor space in one place.
    - title: "Wikipedia: Contact geometry"
      url: https://en.wikipedia.org/wiki/Contact_geometry
      why: What a contact structure is, with pictures.
    - title: "Wikipedia: Fano variety"
      url: https://en.wikipedia.org/wiki/Fano_variety
      why: The positivity condition on the algebraic side.
    - title: "Buczyński, Wiśniewski, Weber: Algebraic torus actions on contact manifolds"
      url: https://arxiv.org/abs/1802.05002
      why: The main published low-dimensional result, with an introduction to the problem.
site:
  published: true
  aiReviewed: true
---

## Two kinds of geometry

A **quaternion-Kähler manifold** of real dimension $4n$ is a Riemannian manifold whose holonomy lies in $\mathrm{Sp}(n)\mathrm{Sp}(1)$. In the **positive** case the scalar curvature is positive and the manifold is compact. The known examples are the **Wolf spaces**: compact symmetric spaces of this type, such as $\mathbb{HP}^n$ and the Grassmannian $\mathrm{Gr}_2(\mathbb{C}^{n+2})$.

## Twistor spaces and contact Fano manifolds

A positive quaternion-Kähler manifold $M$ has a **twistor space** $Z$, a 2-sphere bundle over $M$. It is a complex manifold of complex dimension $2n+1$ with a holomorphic contact structure and a Kähler–Einstein metric of positive curvature. In algebraic terms $Z$ is a **contact Fano manifold**: a smooth complex projective variety with ample anticanonical bundle and a contact distribution $D\subset TZ$ of corank one that is maximally non-integrable. The twistor space of a Wolf space is a **homogeneous** contact Fano manifold, an **adjoint variety**: the closed orbit of the adjoint action of a simple complex Lie algebra.

## The two conjectures

The **LeBrun–Salamon conjecture** says that every positive quaternion-Kähler manifold is a Wolf space. Its algebraic counterpart asks whether every contact Fano manifold is homogeneous. A positive answer to the second implies the first. Because the contact side is algebraic, one can use rational curves, torus actions and moduli of curves, which is how much of the progress has been made.

## What is known

Buczyński, Wiśniewski and Weber (2018) proved that a contact Fano manifold of dimension $2n+1$ whose reductive automorphism group has rank at least $n-2$ is homogeneous, which gives the conjecture for positive quaternion-Kähler manifolds of real dimension at most 16. In October 2026 a preprint by Daura Serrano, Gohr, Lawn and Schedler claims the conjecture up to quaternionic dimension 14 (real dimension 56) by a curvature-moment argument. Hu, Liu and Wan claim all dimensions, and then the homogeneity of all contact Fano manifolds, with an incidence method based on transverse rational curves. OpenAI's openai/math release lists an AI-generated manuscript with the same conclusions. All of these are unrefereed.

## Why it matters

It would settle a long-standing classification question in Riemannian geometry with special holonomy, and would show that Kähler–Einstein metrics exist on every contact Fano manifold.

# Plain explanation

Some shapes look the same from every point, like a sphere: you can slide any point to any other by a symmetry. Mathematicians call these homogeneous. Many shapes have extra structure, and a natural question is whether the extra structure forces that kind of perfect symmetry.

Here is one such question. Take an eight- or higher-dimensional curved space with a very specific kind of positive curvature, built from quaternions (a number system with three imaginary units). Every example anyone has found is a highly symmetric space. Is that a coincidence, or is it a theorem that nothing else exists? This is the LeBrun-Salamon conjecture, from 1994.

There is a way to translate it into a different language. Each such space has a larger partner shape, called its twistor space, that is described by polynomial equations and has a field of 'twisting directions' that cannot be lined up into surfaces (a contact structure). The question becomes: is every shape of that polynomial kind perfectly symmetric?

In October 2026 two preprints by Hu, Liu and Wan and an AI-generated manuscript released by OpenAI claimed a full answer, yes, and another preprint claimed it up to a fixed dimension. None has been checked by outside experts, so for now this is a claim, not a result.

# Student explanation

**Quaternion-Kähler manifolds.** A Riemannian manifold of dimension $4n$ whose **holonomy group** (the rotations obtained by carrying vectors around loops) sits inside $\mathrm{Sp}(n)\mathrm{Sp}(1)$ is called **quaternion-Kähler**. Think of the quaternions $\mathbb{H}$ as $\mathbb{R}^4$ with three imaginary units $i,j,k$: at each point the tangent space is a quaternionic vector space, up to a rotation. The examples with positive scalar curvature are compact. All known ones are **Wolf spaces**: symmetric spaces such as the quaternionic projective space $\mathbb{HP}^n$ and the Grassmannian of complex 2-planes in $\mathbb{C}^{n+2}$.

**The twistor space.** Each point of a quaternion-Kähler manifold $M$ carries a 2-sphere of complex structures (the unit imaginary quaternions). The total space of this sphere bundle is the **twistor space** $Z$, a complex manifold of complex dimension $2n+1$. For positive $M$ it has a Kähler-Einstein metric and a **holomorphic contact structure**: a hyperplane field $D\subset TZ$ that is maximally non-integrable, meaning the Lie bracket of two sections of $D$ is not tangent to $D$, as measured by a nondegenerate 2-form. Such a $Z$ is a **Fano manifold** (ample anticanonical bundle, so strongly positive curvature) and projective, hence a **contact Fano manifold**.

**Homogeneity.** A space is **homogeneous** if a group acts transitively on it. The twistor space of a Wolf space is an **adjoint variety**: the unique closed orbit, in the projectivized Lie algebra, of the adjoint action of a simple complex Lie group. So if every contact Fano manifold is homogeneous, then every positive quaternion-Kähler manifold is a Wolf space.

**Tools.** On the algebraic side one studies **rational curves**: maps from $\mathbb{P}^1$. Lines tangent to the contact distribution, and the **variety of minimal rational tangents** (the directions of such curves at a point), encode the geometry; **Hwang's descent theorem** and the methods of Hwang and Mok produce global vector fields from such data. Another route uses torus actions and the Białynicki-Birula decomposition.

**Status.** Buczyński, Wiśniewski and Weber (2018) proved homogeneity when the rank of the reductive automorphism group is at least $n-2$, giving the conjecture up to real dimension 16. In October 2026, four unrefereed claims appeared: a curvature-moment argument up to quaternionic dimension 14 (Daura Serrano, Gohr, Lawn, Schedler); a proof of the conjecture in all dimensions via transverse rational curves, and then of contact-Fano homogeneity (Hu, Liu, Wan, two preprints); and an AI-generated OpenAI manuscript. **DARC treats the question as open until experts have checked a proof.**
