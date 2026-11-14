---
type: entry
slug: nonlinear-wave-equations-soliton-resolution
title: Nonlinear wave equations and soliton resolution
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: "Focusing nonlinear wave equations at the energy-critical scaling: stationary solutions, solitary waves, and whether every bounded solution splits into solitary waves plus free radiation."
reliedOn: Concentration-compactness, profile decompositions and modulation theory were developed or sharpened on this equation and are reused for wave maps and other critical evolution equations. Soliton resolution is the model case of the long-time classification question for such equations.
dependsOn:
  - harmonic-analysis
  - sobolev-spaces-energy-methods
references:
  - title: "Duyckaerts, Kenig, Merle: Classification of radial solutions of the focusing, energy-critical wave equation (Camb. J. Math. 2013)"
    url: https://arxiv.org/abs/1204.0031
    kind: paper
  - title: "Duyckaerts, Jia, Kenig, Merle: Soliton resolution along a sequence of times for the focusing energy critical wave equation (GAFA 2017)"
    url: https://arxiv.org/abs/1601.01871
    kind: paper
  - title: "Duyckaerts, Kenig, Merle: Soliton resolution for the radial critical wave equation in all odd space dimensions (Acta Math. 2023)"
    url: https://arxiv.org/abs/1912.07664
    kind: paper
  - title: "Jendrej, Lawrie: Soliton resolution for the energy-critical nonlinear wave equation in the radial case (Ann. PDE 2023)"
    url: https://arxiv.org/abs/2203.09614
    kind: paper
  - title: "Duyckaerts, Kenig, Merle: Concentration-compactness and universal profiles for the non-radial energy critical wave equation (Nonlinear Anal. 2016)"
    url: https://arxiv.org/abs/1510.01750
    kind: paper
  - title: "Wikipedia: Soliton"
    url: https://en.wikipedia.org/wiki/Soliton
    kind: article
timeline:
  - date: 2012-03-30
    title: Radial three-dimensional classification
    body: "Duyckaerts, Kenig and Merle characterize the asymptotics of globally defined radial solutions of the 3D focusing energy-critical wave equation (refereed: Camb. J. Math. 2013)."
    source: https://arxiv.org/abs/1204.0031
  - date: 2016-01-08
    title: Nonradial resolution along a sequence of times
    body: Duyckaerts, Jia, Kenig and Merle prove soliton resolution along a sequence of times for general type II solutions in dimensions 3, 4 and 5 (GAFA 2017).
    source: https://arxiv.org/abs/1601.01871
  - date: 2019-12-16
    title: Radial resolution in all odd dimensions
    body: Duyckaerts, Kenig and Merle prove radial soliton resolution in all odd space dimensions (Acta Math. 2023).
    source: https://arxiv.org/abs/1912.07664
  - date: 2022-03-17
    title: Radial resolution in all dimensions at least four
    body: Jendrej and Lawrie treat radial data in every dimension $N\ge4$ by a collision-interval argument (Ann. PDE 2023).
    source: https://arxiv.org/abs/2203.09614
explainer:
  oneLine: Equations where waves pull on themselves, and the question of whether every such wave settles into lasting lumps plus spreading ripples.
  flow:
    - Self-attracting waves on space
    - Special lumps stay unchanged
    - "Guess: everything resolves into lumps"
    - "Proved: round symmetry, chosen times"
    - "Claimed: fixed lump list can fail"
  glossary:
    - term: wave equation
      meaning: The equation $u_{tt}=\Delta u$ describing waves that travel at constant speed; adding a term in $u$ makes it nonlinear.
      link: https://en.wikipedia.org/wiki/Wave_equation
    - term: soliton
      meaning: A wave that keeps its shape while travelling, or sits still, because spreading and self-attraction balance.
      link: https://en.wikipedia.org/wiki/Soliton
    - term: Laplacian
      meaning: The operator $\Delta=\partial_{x_1}^2+\partial_{x_2}^2+\partial_{x_3}^2$, measuring how sharply a function curves.
      link: https://en.wikipedia.org/wiki/Laplace_operator
    - term: energy-critical
      meaning: Describes an equation whose energy is unchanged by the squeeze-and-rescale symmetry, so energy alone cannot stop concentration.
      link: https://en.wikipedia.org/wiki/Scale_invariance
    - term: dispersive equation
      meaning: An equation whose waves spread out and decay over time; mathematicians include the wave equation, though in physics the word means different wavelengths travel at different speeds.
      link: https://en.wikipedia.org/wiki/Dispersive_partial_differential_equation
    - term: Sobolev space (energy space)
      meaning: The function space where the energy $\int|\nabla u|^2$ is finite; the natural home for solutions of these equations.
      link: /research/sobolev-spaces-energy-methods
    - term: Lorentz boost
      meaning: The transformation that turns a still object into one moving at constant speed below the speed of light.
      link: https://en.wikipedia.org/wiki/Lorentz_transformation
    - term: radial symmetry
      meaning: Looking the same in all directions around a centre, so the solution depends only on distance $|x|$.
      link: https://en.wikipedia.org/wiki/Spherical_symmetry
    - term: conformal transformation
      meaning: An angle-preserving change of space; the equation for stationary solutions is unchanged by them, while the wave equation is not.
      link: https://en.wikipedia.org/wiki/Conformal_group
    - term: Strichartz estimate
      meaning: A bound on a wave's average size over space and time, expressing that waves spread out; a basic tool for solving these equations.
      link: /research/harmonic-analysis
  readFirst:
    - title: "Wikipedia: Soliton"
      url: https://en.wikipedia.org/wiki/Soliton
      why: Everyday examples of waves that keep their shape, from canal waves to optical fibres.
    - title: "Wikipedia: Dispersive partial differential equation"
      url: https://en.wikipedia.org/wiki/Dispersive_partial_differential_equation
      why: The family of equations this topic belongs to, with the basic idea of dispersion.
    - title: "Duyckaerts, Kenig, Merle: Concentration-compactness and universal profiles for the non-radial energy critical wave equation (arXiv:1510.01750)"
      url: https://arxiv.org/abs/1510.01750
      why: The authors of the main theorems survey the method and the nonradial setting; graduate level.
    - title: "Chen, Holmer, Shen: A counterexample to fixed-profile soliton resolution for the three-dimensional quintic wave equation (arXiv:2611.17291)"
      url: https://arxiv.org/abs/2611.17291
      why: The new unrefereed preprint; its first section states the quantifiers of the fixed-profile assertion precisely.
site:
  published: true
  aiReviewed: true
---

## What it is

The **focusing energy-critical wave equation** in $\mathbb{R}^{1+N}$, $N\ge3$, is $u_{tt}-\Delta u=|u|^{4/(N-2)}u$; in three dimensions this is $u_{tt}-\Delta u=u^5$. The sign of the nonlinearity makes waves attract themselves. With $H=\dot H^1\times L^2$ the energy space, the conserved energy is $E(u,u_t)=\tfrac12\int(|\nabla u|^2+u_t^2)\,dx-\tfrac{N-2}{2N}\int|u|^{2N/(N-2)}\,dx$. The scaling $u_\lambda(t,x)=\lambda^{(N-2)/2}u(\lambda t,\lambda x)$ preserves both the equation and the energy norm, so the energy cannot rule out concentration at a point: this is what "critical" means. It is why the equation is the standard testing ground for blow-up and long-time behaviour.

## Stationary solutions and solitary waves

Time-independent solutions solve $-\Delta Q=|Q|^{4/(N-2)}Q$. There is a unique positive radial one up to sign and scaling, the ground state $W(x)=(1+|x|^2/(N(N-2)))^{-(N-2)/2}$, which for $N=3$ is $(1+|x|^2/3)^{-1/2}$. Translating, rescaling and Lorentz-boosting a stationary solution gives a travelling solitary wave. The stationary equation has a larger symmetry group (the conformal group) than the wave equation does, and sign-changing stationary solutions also exist; these facts matter below.

## Dichotomy and type II solutions

Kenig and Merle (2008) showed that for solutions with energy below that of $W$, those whose $\dot H^1$ norm is below that of $W$ scatter (behave like a free wave), while those whose norm is above it blow up. Solutions whose energy norm stays bounded but which do not scatter, called type II, are the subject of soliton resolution.

## Soliton resolution

The expectation is that at large times a bounded solution separates into a free wave (radiation) plus finitely many rescaled, boosted stationary solutions that drift apart. Established results, all refereed:

- **Radial data.** Duyckaerts, Kenig and Merle proved this in dimension 3, then in all odd dimensions (Acta Math. 2023); Jendrej and Lawrie proved it for every dimension $N\ge4$ (Ann. PDE 2023). The resolution holds for all large times, with ground states only.
- **Nonradial data.** Duyckaerts, Jia, Kenig and Merle (GAFA 2017) proved resolution along a sequence of times in dimensions 3, 4 and 5, where the profiles may depend on the sequence. Whether one list of profiles works for every sequence of times is a stronger statement, stated as a conjecture by Duyckaerts, Kenig and Merle.

In November 2026 two unrefereed preprints (Chen, Holmer, Shen) claim, in dimensions 3 and 5, a solution for which no fixed finite list of profiles works along every sequence, because its stationary core keeps changing shape inside the conformal family. The 3D paper presents its construction as consistent with the sequential theorem, and its solution is odd, hence not radial.

## Tools

Profile decomposition (Bahouri and Gérard), concentration-compactness and rigidity (Kenig and Merle), channels of energy, modulation theory around stationary solutions, and spectral analysis of the linearization at a stationary solution. The new preprints add computer-assisted spectral certificates for specific sign-changing stationary states.

# Plain explanation

Drop a stone in a pond and the ripples spread out and fade. That is an ordinary wave. Now imagine a pond where a wave also pulls on itself, so that a bump tends to get taller and narrower instead of spreading. Mathematicians study equations like this because they are the simplest places where waves can pile up, lump together, or even blow up.

A few special lumps do not change at all: they just sit there, or glide along without losing their shape. These are called solitary waves, or solitons. The big guess, known as soliton resolution, is that whatever you start with, as long as it does not blow up, then after a very long time you see only two things: a few of these lasting lumps drifting apart, plus ordinary ripples spreading to infinity.

This has been proved for waves with perfect round symmetry. For waves without that symmetry, it has been proved only if you are allowed to look at a cleverly chosen set of moments in time. In November 2026 two unreviewed papers claimed that a stronger version of the guess, where the list of lump shapes is fixed in advance, can fail. Mathematicians have not yet checked those papers.

# Student explanation

**The equation.** Think of $u(t,x)$ as the height of a wave at time $t$ and place $x$ in 3D space. The ordinary wave equation from first-year physics is $u_{tt}=\Delta u$, where $u_{tt}$ is the acceleration and $\Delta u$ (the Laplacian: the sum of the second derivatives in $x_1,x_2,x_3$) measures how sharply the wave is curved. The **focusing energy-critical** equation adds a self-attraction term: $u_{tt}-\Delta u=u^5$. The conserved energy is $E=\tfrac12\int(|\nabla u|^2+u_t^2)\,dx-\tfrac16\int u^6\,dx$: kinetic plus gradient energy, minus a term from the self-attraction. "Critical" means that if you squeeze a solution by a factor $\lambda$ and rescale its height by $\lambda^{1/2}$, you get another solution with the same kinetic-plus-gradient energy. So the energy cannot tell a wide wave from a narrow one, and a solution can concentrate without any energy cost showing up.

**Lumps that do not change.** A solution that does not depend on $t$ satisfies $-\Delta Q=Q^5$: spreading ($\Delta$) and self-attraction ($Q^5$) balance exactly. The simplest is the ground state $W(x)=(1+|x|^2/3)^{-1/2}$, a single round bump. Shift it, rescale it, or move it at constant speed (a Lorentz boost, as in special relativity) and you still have a solution: a **solitary wave**. There are also stationary solutions that change sign, and the stationary equation has more symmetries (conformal ones) than the wave equation does.

**Soliton resolution** is the expectation that a solution with bounded energy norm eventually looks like free radiation (a solution of $u_{tt}=\Delta u$) plus a few boosted, rescaled stationary solutions drifting apart. Think of a splash in a bathtub: afterwards a few steady bumps survive and ripples spread away. The analogy breaks because the lumps here are exact solutions of a nonlinear equation, and the lumps can attract and exchange energy with the ripples.

**What is known.** With round symmetry (radial data), it holds for all large times: Duyckaerts, Kenig and Merle in 3D and then all odd dimensions, Jendrej and Lawrie in every dimension from 4 up. Without round symmetry, Duyckaerts, Jia, Kenig and Merle proved it only along a suitably chosen sequence of times, in dimensions 3, 4 and 5.

**The fixed-profile question.** A stronger version insists that the list of lump shapes is chosen once and for all, before you choose the sequence of times. Two unrefereed preprints of November 2026 (Chen, Holmer and Shen) claim a solution in 3D and in 5D where the lump keeps morphing between shapes that are not related by shifting, rescaling or rotating, so no fixed list works. They use a computer-assisted certificate for one calculation. These are claims, not accepted results; the 3D solution is not round-symmetric, and the authors present it as consistent with the sequential theorem.
