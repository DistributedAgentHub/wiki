---
type: entry
slug: moduli-of-abelian-varieties
title: Moduli of abelian varieties, Siegel modular forms and the Kodaira dimension of A_g
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: The moduli space A_g of principally polarized abelian varieties is a quotient of the Siegel upper half-space; modular forms on it decide its birational type. Genus 6 was the last case left open.
reliedOn: Birational classification of the moduli of abelian varieties rests on constructing and bounding Siegel modular forms with prescribed vanishing at the boundary; the same forms feed lattice and theta-series theory.
dependsOn:
  - algebraic-geometry
references:
  - title: "Wang: The Kodaira dimension and minimal models of A_6 (arXiv:2610.40136, preprint)"
    url: https://arxiv.org/abs/2610.40136
    kind: paper
  - title: "Wang: The Kodaira dimension and minimal models of A_6, HTML version with the introduction"
    url: https://arxiv.org/html/2610.40136
    kind: paper
  - title: "Dittmann, Salvati Manni, Scheithauer: Harmonic theta series and the Kodaira dimension of A_6 (arXiv:1909.07062; Algebra & Number Theory 15, 2021)"
    url: https://arxiv.org/abs/1909.07062
    kind: paper
timeline:
  - date: 2021-03-30
    title: Weight-14 harmonic theta series gives the lower bound kappa(A_6) >= 0
    body: Dittmann, Salvati Manni and Scheithauer build a weight-14 degree-6 Siegel cusp form vanishing to order 2 at the boundary, which implies the Kodaira dimension of A_6 is non-negative (date of the revised arXiv version; journal publication in 2021).
    source: https://arxiv.org/abs/1909.07062
  - date: 2026-10-29
    title: A preprint claims the Kodaira dimension of A_6 is 0
    body: Wang claims kappa(A_6)=0, a polynomial canonical ring on one degree-2 generator, and a unique terminal minimal model of Picard number one. Unrefereed.
    source: https://arxiv.org/abs/2610.40136
explainer:
  oneLine: A map of all shapes of high-dimensional 'tori' with extra structure, and how complicated that map is.
  flow:
    - "Abelian varieties: tori with extra structure"
    - Their shapes form a space A_g
    - Kodaira dimension measures how complex A_g is
    - Siegel modular forms decide that number
    - g=6 left open until a 2026 preprint
  glossary:
    - term: abelian variety
      meaning: A smooth shape defined by polynomial equations that is also a group, like a higher-dimensional doughnut with addition of points.
      link: https://en.wikipedia.org/wiki/Abelian_variety
    - term: complex torus
      meaning: The complex plane or space folded up by a lattice, giving a doughnut-like shape with complex coordinates.
      link: https://en.wikipedia.org/wiki/Complex_torus
    - term: elliptic curve
      meaning: "A one-dimensional abelian variety: a complex torus described by a cubic equation."
      link: https://en.wikipedia.org/wiki/Elliptic_curve
    - term: moduli space
      meaning: A space whose points are the different shapes (up to equivalence) of some kind of object, a parameter space of shapes.
      link: https://en.wikipedia.org/wiki/Moduli_space
    - term: Kodaira dimension
      meaning: A number measuring how fast the count of pluricanonical forms grows; -infinity for flexible spaces, the full dimension for general type.
      link: https://en.wikipedia.org/wiki/Kodaira_dimension
    - term: general type
      meaning: A space with the maximal Kodaira dimension, equal to its own dimension; the most rigid kind.
      link: https://en.wikipedia.org/wiki/Kodaira_dimension
    - term: unirational
      meaning: A space that is covered by a simple parameter space, like a projective space, by a rational map; such spaces have Kodaira dimension -infinity.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: Siegel upper half-space
      meaning: The space of symmetric complex matrices with positive definite imaginary part; the parameters of all g-dimensional complex tori.
      link: https://en.wikipedia.org/wiki/Siegel_upper_half-space
    - term: Siegel modular form
      meaning: A function on the Siegel upper half-space with a fixed transformation rule under a symmetry group; generalizes elliptic modular forms.
      link: https://en.wikipedia.org/wiki/Siegel_modular_form
    - term: theta series
      meaning: A generating function that counts points of a lattice by length; a source of modular forms.
      link: https://en.wikipedia.org/wiki/Theta_function
    - term: Calabi-Yau manifold
      meaning: A complex shape with trivial canonical bundle, whose Kodaira dimension is 0; tori are the simplest examples.
      link: https://en.wikipedia.org/wiki/Calabi%E2%80%93Yau_manifold
    - term: algebraic geometry
      meaning: The study of shapes defined by polynomial equations.
      link: /research/algebraic-geometry
  readFirst:
    - title: "Wikipedia: Elliptic curve"
      url: https://en.wikipedia.org/wiki/Elliptic_curve
      why: The one-dimensional case of everything in this entry, with pictures.
    - title: "Wikipedia: Moduli space"
      url: https://en.wikipedia.org/wiki/Moduli_space
      why: Plain account of what a parameter space of shapes is.
    - title: "Wikipedia: Kodaira dimension"
      url: https://en.wikipedia.org/wiki/Kodaira_dimension
      why: Definition and examples of the complexity number discussed here.
    - title: "Wikipedia: Siegel modular form"
      url: https://en.wikipedia.org/wiki/Siegel_modular_form
      why: The functions that decide the answer for A_g.
site:
  published: true
  aiReviewed: true
---

## The space $\mathcal{A}_g$

The moduli space $\mathcal{A}_g$ of principally polarized abelian varieties of dimension $g$ is the quotient of the Siegel upper half-space $\mathfrak{H}_g$ by $\mathrm{Sp}_{2g}(\mathbb{Z})$. It is a quasi-projective variety of dimension $g(g+1)/2$. Its Satake compactification and toroidal compactifications, such as the perfect cone compactification, add boundary strata.

## Modular forms and the Kodaira dimension

Pluricanonical forms on a smooth model of $\mathcal{A}_g$ correspond to Siegel modular forms of weight a multiple of $g+1$ that vanish to a sufficient order along the boundary. So the Kodaira dimension $\kappa(\mathcal{A}_g)$ can be studied by asking how small the weight of a nonzero form can be for a given boundary vanishing order.

## What is known by genus

According to the introduction of the 2026 preprint below: $\mathcal{A}_g$ is unirational for $g\le 5$ (the last two cases through constructions of Clemens, Donagi and Verra), and of general type for $g\ge 7$, by Mumford ($g=7$), Freitag ($g=8$) and Tai ($g\ge 9$). The case $g=6$ stayed open. Dittmann, Salvati Manni and Scheithauer (Algebra & Number Theory 15, 2021) used harmonic theta series to construct a weight-14 Siegel cusp form of degree 6 with boundary order 2, which gives $\kappa(\mathcal{A}_6)\ge 0$.

## The 2026 claim

Wang's preprint claims $\kappa(\mathcal{A}_6)=0$. It states that every nonzero scalar form of weight $k$ and positive boundary order $b$ on $\mathrm{Sp}_{12}(\mathbb{Z})$ satisfies $k\ge 7b$, with equality exactly for powers of the weight-14 form, that the canonical ring of a smooth projective model is a polynomial ring on one generator of degree 2, and that there is a unique projective $\mathbb{Q}$-factorial terminal minimal model of Picard number one, with $\mathrm{Bir}(\mathcal{A}_6)$ trivial. The preprint is unrefereed; DARC found no independent assessment.

## Why it matters

The classification of $\mathcal{A}_g$ by Kodaira dimension separates the dimensions where abelian varieties can be parametrized rationally from those where the moduli space is of general type. Methods developed along the way (extremal modular forms, theta series of lattices, birational geometry of toroidal compactifications) are used well beyond this question.

# Plain explanation

Take a doughnut surface. Mathematicians can treat it as a curved shape with a built-in way of adding points. Generalize it to many dimensions and you get an abelian variety. Each one has its own shape, a bit like each rectangle has its own proportions.

Now imagine a giant atlas with one point for every possible shape in a given dimension. That atlas is called a moduli space, a parameter space of shapes. For six-dimensional shapes, the atlas has 21 directions you can move in.

A natural question is: how complicated is this atlas itself? Some atlases are simple. You can describe them with a handful of free numbers, like the pages of a flat map. Others are so rich that they cannot be described that way at all. A number called the Kodaira dimension measures this. Low means simple, maximal means as complicated as possible.

For the atlases of shapes in 1 to 5 dimensions, the answer is simple. From 7 dimensions on, it is as complicated as possible. Dimension 6 was the single case left, sitting between the two. In October 2026 a preprint claimed the answer there is the in-between value zero. Experts have not yet checked it, so treat it as a claim, not a fact.

The tools are special functions with many symmetries, called Siegel modular forms. Think of them as the fingerprints of the atlas. The analogy breaks down because a real atlas has two dimensions and this one has 21.

# Student explanation

**Starting point: tori and elliptic curves.** A complex number $z=x+iy$ lives in the plane. Identify points that differ by a lattice, for example $z\sim z+1\sim z+\tau$ with $\operatorname{Im}\tau>0$. The result is a doughnut, a **complex torus**. If it is also cut out by polynomial equations it is an **elliptic curve**. Its shape is recorded by $\tau$, but different $\tau$ can give the same shape (swap the two sides of the lattice, or shift by 1), so the space of shapes is the upper half-plane divided out by a symmetry group. That quotient is a **moduli space**, a parameter space of shapes.

**Higher dimensions.** In $g$ complex dimensions replace $\tau$ by a symmetric $g\times g$ matrix $\tau$ with positive definite imaginary part. These matrices form the **Siegel upper half-space**. The torus $\mathbb{C}^g/(\mathbb{Z}^g+\tau\mathbb{Z}^g)$ is an **abelian variety** (with an extra structure called a principal polarization). Dividing the space of $\tau$ by the symmetries $\mathrm{Sp}_{2g}(\mathbb{Z})$, which generalize the elliptic-curve symmetries, gives the moduli space $\mathcal{A}_g$. Its dimension is $g(g+1)/2$: 1 for $g=1$, 21 for $g=6$.

**How complicated is $\mathcal{A}_g$?** Count the **pluricanonical forms**: the volume-like objects $(dz_1\wedge\dots\wedge dz_n)^{\otimes m}$ that stay well behaved on a smooth model of the space. The **Kodaira dimension** $\kappa$ is the growth rate of how many such forms exist as $m$ grows. If the count grows like $m^{\kappa}$, then $\kappa=-\infty$ means no forms at all (typical of very flexible spaces), $\kappa=0$ means essentially one (like a torus or Calabi-Yau manifold), and $\kappa$ equal to the dimension is **general type**, the most rigid case.

**The link to modular forms.** A **Siegel modular form** of weight $k$ is a function $f(\tau)$ obeying a transformation rule under $\mathrm{Sp}_{2g}(\mathbb{Z})$, scaled by a power $k$ of a determinant-like factor. These are the sections of pluricanonical forms: a weight of a multiple of $g+1$ that vanishes strongly enough at the boundary (the places where the torus degenerates) gives a pluricanonical form. So the question becomes: how small can the weight $k$ be for a given vanishing order $b$ at the boundary? Small weight means many forms.

**What is known.** $\mathcal{A}_g$ is unirational for $g\le 5$ (so $\kappa=-\infty$). It is of general type for $g=7$ (Mumford), $g=8$ (Freitag) and $g\ge 9$ (Tai). For $g=6$, Dittmann, Salvati Manni and Scheithauer (2021) built a form of weight 14 vanishing to order 2 at the boundary using a **theta series** (a generating function counting lattice points) and deduced $\kappa\ge 0$.

**The claim.** Haowu Wang (arXiv:2610.40136, 29 October 2026) claims no nonzero form beats that example: weight $k\ge 7b$ for every boundary order $b$, with equality only for powers of the weight-14 form. If right, the forms form a polynomial ring on one generator, so $\kappa(\mathcal{A}_6)=0$ and the Kodaira classification of all $\mathcal{A}_g$ is complete. **It is an unrefereed preprint.** Its proof includes a finite exact computation that independent experts have not yet rerun, so DARC treats the problem as in progress, not resolved.
