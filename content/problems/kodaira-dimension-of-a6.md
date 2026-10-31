---
type: problem
slug: kodaira-dimension-of-a6
title: The Kodaira dimension of the moduli space A_6 of abelian sixfolds
entry: moduli-of-abelian-varieties
status: IN_PROGRESS
origin: Part of the classification of the spaces A_g by Kodaira dimension (Tai, Freitag, Mumford and others), as recounted in Wang's 2026 preprint
ratings:
  difficulty: 60
  applicationValue: 4
  leverage: 40
verification:
  route: REVIEW
sources:
  - title: "Wang: The Kodaira dimension and minimal models of A_6 (arXiv:2610.40136, 29 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.40136
  - title: "Dittmann, Salvati Manni, Scheithauer: Harmonic theta series and the Kodaira dimension of A_6 (arXiv:1909.07062)"
    url: https://arxiv.org/abs/1909.07062
timeline:
  - date: 2021-03-30
    title: Lower bound kappa(A_6) >= 0 from a weight-14 harmonic theta series
    body: Dittmann, Salvati Manni and Scheithauer construct a degree-6 weight-14 Siegel cusp form with boundary order 2 (revised arXiv version of 30 March 2021).
    source: https://arxiv.org/abs/1909.07062
  - date: 2026-10-29
    title: "Wang preprint: a claimed determination kappa(A_6)=0"
    body: Wang claims Kodaira dimension 0, the bound k >= 7b, a polynomial canonical ring on one degree-2 generator and a unique terminal minimal model. Unrefereed.
    source: https://arxiv.org/abs/2610.40136
explainer:
  oneLine: Is the space of shapes of 6-dimensional abelian varieties of intermediate complexity? One unrefereed 2026 preprint says yes.
  flow:
    - g<=5 simple, g>=7 as complex as possible
    - "2021: weight-14 form gives kappa >= 0"
    - Is there any better form with k < 7b?
    - "2026 preprint: no, so kappa = 0"
    - "Unrefereed: experts must check it"
  glossary:
    - term: abelian variety
      meaning: A smooth shape defined by polynomial equations that is also a group, like a higher-dimensional doughnut.
      link: https://en.wikipedia.org/wiki/Abelian_variety
    - term: moduli space
      meaning: A space whose points are the different shapes of some kind of object.
      link: https://en.wikipedia.org/wiki/Moduli_space
    - term: Kodaira dimension
      meaning: A number measuring how fast the count of pluricanonical forms grows with m; the complexity of the space.
      link: https://en.wikipedia.org/wiki/Kodaira_dimension
    - term: general type
      meaning: The case where the Kodaira dimension equals the space's own dimension.
      link: https://en.wikipedia.org/wiki/Kodaira_dimension
    - term: unirational
      meaning: Covered by a simple parameter space like projective space; forces Kodaira dimension -infinity.
      link: https://en.wikipedia.org/wiki/Rational_variety
    - term: Siegel modular form
      meaning: A function on the Siegel upper half-space with a fixed transformation rule under a symmetry group.
      link: https://en.wikipedia.org/wiki/Siegel_modular_form
    - term: cusp form
      meaning: A modular form that vanishes at the boundary, where the torus degenerates; boundary order b says how strongly.
      link: https://en.wikipedia.org/wiki/Siegel_modular_form
    - term: theta series
      meaning: A generating function counting lattice points by length; builds the weight-14 form here.
      link: https://en.wikipedia.org/wiki/Theta_function
    - term: Calabi-Yau manifold
      meaning: A complex shape with trivial canonical bundle; its Kodaira dimension is 0.
      link: https://en.wikipedia.org/wiki/Calabi%E2%80%93Yau_manifold
    - term: Siegel upper half-space
      meaning: The space of symmetric complex matrices with positive definite imaginary part.
      link: https://en.wikipedia.org/wiki/Siegel_upper_half-space
  readFirst:
    - title: "Wang: The Kodaira dimension and minimal models of A_6 (arXiv:2610.40136)"
      url: https://arxiv.org/abs/2610.40136
      why: The unrefereed claim; its introduction reviews the genus-by-genus history.
    - title: "Dittmann, Salvati Manni, Scheithauer: Harmonic theta series and the Kodaira dimension of A_6"
      url: https://arxiv.org/abs/1909.07062
      why: The published 2021 lower bound that the new claim tries to match.
    - title: "Wikipedia: Kodaira dimension"
      url: https://en.wikipedia.org/wiki/Kodaira_dimension
      why: What the number measures, with examples.
    - title: "Wikipedia: Siegel modular form"
      url: https://en.wikipedia.org/wiki/Siegel_modular_form
      why: Background on the functions at the heart of the argument.
site:
  aiReviewed: true
---

What is the Kodaira dimension of the moduli space $\mathcal{A}_6$ of principally polarized abelian varieties of dimension 6? Equivalently, how do Siegel modular cusp forms of degree 6, weight $k$ and boundary vanishing order $b$ constrain the pluricanonical forms of a smooth projective model of $\mathcal{A}_6$? It is known that $\mathcal{A}_g$ is unirational for $g\le 5$ and of general type for $g\ge 7$, so $g=6$ was the one case of the classification not decided before 2026.

# State of the art

**Open in the expert-accepted literature as of today.** $\mathcal{A}_g$ is unirational for $g\le 5$ and of general type for $g\ge 7$ (Mumford for $g=7$, Freitag for $g=8$, Tai for $g\ge 9$; unirationality of the last cases through constructions of Clemens, Donagi and Verra, according to the introduction of the preprint below). Dittmann, Salvati Manni and Scheithauer (arXiv:1909.07062, Algebra & Number Theory 2021) constructed a weight-14 degree-6 Siegel cusp form with boundary order 2, giving $\kappa(\mathcal{A}_6)\ge 0$. **A preprint claims** (Wang, arXiv:2610.40136, 29 October 2026) that $\kappa(\mathcal{A}_6)=0$ and the numerical dimension is 0; that every nonzero scalar form of weight $k$ and positive boundary order $b$ satisfies $k\ge 7b$, with equality exactly for powers of that weight-14 form; that the canonical ring of a smooth projective model is a polynomial ring on one generator of degree 2; that there is a unique projective $\mathbb{Q}$-factorial terminal minimal model with Picard number one and canonical divisor of order 2; that the perfect cone compactification is a Mori dream space; and that $\mathrm{Bir}(\mathcal{A}_6)$ is trivial. The preprint is unrefereed and DARC found no independent assessment, so the problem is marked in progress, not resolved.

# Applications

None foreseeable outside pure mathematics. A settled answer completes the Kodaira classification of the spaces $\mathcal{A}_g$, and the methods (extremal Siegel modular forms, theta series of lattices) are used in lattice and modular-form theory.

# Resolution criteria

A proof accepted by experts in moduli of abelian varieties and Siegel modular forms, in practice a refereed paper or independent confirmation of the bound $k\ge 7b$ and of the finite computations it relies on, determining $\kappa(\mathcal{A}_6)$.

# Rating rationale

Difficulty 60: the only genus left in the classification, a lower bound known since 2019, and one unrefereed claimed determination awaiting expert checking. Application value 4: no foreseeable practical use. Leverage 40: completes the classification of A_g and reshapes the birational geometry of one family of moduli spaces.

# Verification

The claim is a proof, to be refereed by experts in Siegel modular forms and birational geometry. Reviewers should check the extremal-weight bound k >= 7b for genus 6 (vanishing results on the Prym locus, intersection computations on boundary fibers, the theta calculation), the passage from that bound to the canonical ring, and the finite exact computation in the appendix, which can be re-run independently.

# Plain explanation

Mathematicians sort spaces by how complicated they are, using a single number called the Kodaira dimension. The space we are asking about is an atlas listing every possible shape of a certain kind of six-dimensional doughnut.

For smaller doughnuts, in 1 to 5 dimensions, the atlas is simple. For bigger ones, 7 dimensions and up, the atlas is as complicated as it can be. Dimension 6 sits right between them, and for years nobody knew which side it falls on.

In 2021 a team showed it is at least in the middle. They found one special function, with a huge number of symmetries, that proves the atlas is not simple. Whether it is as complicated as the larger ones stayed open.

In October 2026 a preprint by Haowu Wang claimed the atlas is exactly in the middle: more complicated than the small cases, simpler than the big ones, the same kind as a doughnut itself. The proof reportedly shows that no other special function can do better than the 2021 one.

This has not been checked by outside experts. The proof includes a long exact computation that has to be redone independently. Until that happens, the question stays open on DARC.

Why is it hard? You must rule out every possible function of every size, not just find one example.

# Student explanation

**The question.** The moduli space $\mathcal{A}_6$ parametrizes 6-dimensional complex tori with extra structure (principally polarized abelian varieties). It is a space of dimension $6\cdot 7/2=21$. What is its **Kodaira dimension** $\kappa$, the growth rate of the number of pluricanonical forms (see the topic entry)? A torus has $\kappa=0$, a very flexible space has $\kappa=-\infty$, and the most rigid have $\kappa$ equal to the dimension (**general type**).

**Why $g=6$ is the last case.** $\mathcal{A}_g$ is unirational ($\kappa=-\infty$) for $g\le 5$ and of general type for $g\ge 7$: Mumford for 7, Freitag for 8, Tai for all $g\ge 9$. So the classification by Kodaira dimension was complete except at $g=6$.

**Forms and the weight bound.** Pluricanonical forms on $\mathcal{A}_g$ correspond to **Siegel modular cusp forms** of weight a multiple of $g+1=7$ that vanish to high enough order $b$ at the boundary. A single form of weight $k$ and boundary order $b$ with $k/b$ small is a strong signal of many forms. The 2021 construction by Dittmann, Salvati Manni and Scheithauer gives $k=14$, $b=2$, so $k=7b$, and proves $\kappa\ge 0$. If a form with $k<7b$ existed, the space would have $\kappa>0$.

**What is claimed.** Wang's preprint says no such form exists: for every nonzero form, $k\ge 7b$, and equality holds only for powers of the weight-14 form. Then all pluricanonical forms are powers of that one form, so the canonical ring is a polynomial ring on a single generator (of degree 2) and $\kappa=0$. The preprint also claims a unique terminal minimal model with Picard number one. The proof combines vanishing results on a special subfamily (the Prym locus), intersection numbers on boundary fibers, and a finite exact computation described in the appendix.

**Status.** Unrefereed (arXiv v1, 29 October 2026). No expert has confirmed the bound $k\ge 7b$ and nobody independent has rerun the computation. **DARC therefore lists the problem as in progress, not resolved.** If it holds up, the Kodaira classification of all $\mathcal{A}_g$ is finished; if a form with $k<7b$ turned up, $\kappa(\mathcal{A}_6)$ would be positive.
