---
type: entry
slug: euler-equations-singularity-formation
title: The incompressible Euler equations and finite-time singularity formation
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: The equations of an ideal fluid. Whether smooth 3D solutions can develop a singularity in finite time is a central open question; singularities are known for rougher data; 2026 preprints sharpen the picture.
reliedOn: The Euler equations are the zero-viscosity limit of Navier–Stokes and the model for turbulence at high Reynolds number. Knowing when their solutions stay smooth bounds what numerical simulation can resolve and tests the Beale–Kato–Majda route to the Navier–Stokes regularity question.
dependsOn:
  - navier-stokes-equations
  - sobolev-spaces-energy-methods
references:
  - title: Euler equations (fluid dynamics) (Wikipedia)
    url: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
    kind: article
  - title: T. Elgindi, Finite-time singularity formation for C^{1,α} solutions to the incompressible Euler equations on R^3 (Annals of Mathematics 194 (2021), 647–727)
    url: https://annals.math.princeton.edu/2021/194-3/p02
    kind: paper
  - title: "J. Chen and T. Hou, Stable nearly self-similar blowup of the 2D Boussinesq and 3D Euler equations with smooth data II: Rigorous numerics"
    url: https://arxiv.org/abs/2305.05660
    kind: paper
  - title: R. Danchin, Axisymmetric incompressible flows with bounded vorticity (Russian Math. Surveys 62 (2007))
    url: https://www.mathnet.ru/eng/rm6761
    kind: paper
  - title: S. Shkoller, Incompressible Euler Blowup at the C^{1,1/3} Threshold (arXiv:2603.10945, preprint)
    url: https://arxiv.org/abs/2603.10945
    kind: paper
  - title: J. Chen, Asymptotically Self-Similar Blowup for 3D Incompressible Euler with C^{1,1/3-} Velocity I (arXiv:2605.15149, preprint)
    url: https://arxiv.org/abs/2605.15149
    kind: paper
  - title: F. Shao, D. Wei, P. Zhang, Z. Zhang, Self-similar blow-up solutions of d-dimensional incompressible Euler equations with C^{1,(1-2/d)-} velocity (arXiv:2605.19716, preprint)
    url: https://arxiv.org/abs/2605.19716
    kind: paper
  - title: J. Bang and A. Cheskidov, Sharp Finite-Time Blow-Up for Unforced Axisymmetric Euler Without Swirl via Multiscale Data (arXiv:2611.18151, preprint)
    url: https://arxiv.org/abs/2611.18151
    kind: paper
  - title: OpenAI, Finite time blowup for the Euler equation (preprint, September 2026)
    url: https://cdn.openai.com/pdf/315b36cd-ec98-4023-8342-93345194ece1/euler.pdf
    kind: paper
timeline:
  - date: 2021-11-02
    title: Blow-up for C^{1,α} velocity on R^3
    body: Elgindi proves finite-time singularity formation for C^{1,α} solutions of the incompressible Euler equations on R^3, for small α>0, published online in the Annals of Mathematics (date is the online publication date).
    source: https://annals.math.princeton.edu/2021/194-3/p02
  - date: 2023-05-09
    title: Computer-assisted proof of Euler blow-up with boundary
    body: Chen and Hou complete the rigorous-numerics part of a proof of finite-time singularity for 3D axisymmetric Euler with smooth data and a boundary (arXiv v1 date).
    source: https://arxiv.org/abs/2305.05660
  - date: 2026-03-11
    title: "Shkoller: blow-up at the C^{1,1/3} threshold (preprint)"
    body: A preprint reports Type I finite-time singularities for finite-energy axisymmetric no-swirl Euler data in C^{1,α} for every 0<α<1/3 (arXiv v1 date).
    source: https://arxiv.org/abs/2603.10945
  - date: 2026-05-14
    title: "Chen: asymptotically self-similar blow-up, C^{1,1/3-} (preprint)"
    body: Part I of a two-part preprint constructs smooth 1D limiting profiles (at α = 1/3, by a fixed-point argument around a numerically constructed approximate profile, and for α slightly below 1/3); the companion Part II lifts 1D profiles to asymptotically self-similar 3D axisymmetric no-swirl blow-up for every α in (0,1/3) (arXiv v1 date of Part I).
    source: https://arxiv.org/abs/2605.15149
  - date: 2026-05-19
    title: "Shao–Wei–Zhang–Zhang: self-similar blow-up in dimension d≥3 (preprint)"
    body: A preprint constructs self-similar blow-up for every exponent below 1−2/d in d dimensions; its v2 (22 July 2026) adds finite-codimensional stability and with it finite-energy solutions with compactly supported vorticity (date is arXiv v1).
    source: https://arxiv.org/abs/2605.19716
  - date: 2026-11-13
    title: "Bang–Cheskidov: one datum blowing up in every C^{1,α}, α<1/3 (preprint)"
    body: A preprint reports a single compactly supported-vorticity datum, axisymmetric without swirl, lying in every C^{1,α} with α<1/3 whose unforced solution blows up in finite time (arXiv v1 date).
    source: https://arxiv.org/abs/2611.18151
explainer:
  oneLine: The equations for a fluid with no friction, and the open question of whether smooth flows can break down in finite time.
  flow:
    - Ideal fluid obeys Euler equations
    - Vortex stretching can amplify spin
    - Blow-up needs vorticity to diverge
    - "Rough axisymmetric data: blow-up reported"
    - "Smooth data: still open"
  glossary:
    - term: Euler equations
      meaning: "The equations for a fluid with no friction: how its velocity and pressure change in time while the fluid cannot be compressed."
      link: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
    - term: vorticity
      meaning: A measure of how fast the fluid is spinning at each point, found from how the velocity varies from place to place.
      link: https://en.wikipedia.org/wiki/Vorticity
    - term: singularity
      meaning: A point where a quantity becomes infinite or stops behaving smoothly, here a solution whose velocity gradient grows without bound.
      link: https://en.wikipedia.org/wiki/Mathematical_singularity
    - term: Hölder continuity
      meaning: "A way to measure roughness: a function is C^α if its changes over a distance d are at most a constant times d to the power α."
      link: https://en.wikipedia.org/wiki/H%C3%B6lder_condition
    - term: axisymmetric flow without swirl
      meaning: A flow that looks the same when rotated around an axis and has no motion around the axis, so every particle moves in a plane through it.
      link: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
    - term: vortex ring
      meaning: A doughnut-shaped region of spinning fluid, like a smoke ring.
      link: https://en.wikipedia.org/wiki/Vortex_ring
    - term: compact support
      meaning: Zero outside some bounded region, so the vorticity lives in a finite region of space.
      link: https://en.wikipedia.org/wiki/Support_(mathematics)
    - term: Navier–Stokes equations
      meaning: The fluid equations with viscosity (internal friction), the real-fluid counterpart of the Euler equations.
      link: /research/navier-stokes-equations
    - term: vortex stretching
      meaning: The mechanism in three dimensions by which stretching a spinning tube of fluid makes it spin faster.
      link: https://en.wikipedia.org/wiki/Vorticity
    - term: Beale–Kato–Majda criterion
      meaning: A result saying a smooth 3D Euler solution can be continued as long as the time integral of the largest vorticity stays finite.
      link: /research/euler-equations-singularity-formation
  readFirst:
    - title: Euler equations (fluid dynamics) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
      why: The equations and their relation to Navier–Stokes, with a note on the open singularity question.
    - title: Vorticity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Vorticity
      why: What the spin of a fluid means and how it is measured.
    - title: Elgindi, Finite-time singularity formation for C^{1,α} solutions (Annals of Mathematics, 2021)
      url: https://annals.math.princeton.edu/2021/194-3/p02
      why: The paper that first proved blow-up for rough Euler flows in three dimensions; the abstract is readable.
raw:
  body: "## The equations\n\nFor a velocity field $u(x,t)\\in\\mathbb{R}^3$ and pressure $p$, the incompressible Euler equations of an ideal fluid are\n$$\\partial_t u+(u\\cdot\\nabla)u+\\nabla p=0,\\qquad \\nabla\\cdot u=0.$$\nThey are the Navier–Stokes equations with the viscosity set to zero. Smooth solutions conserve kinetic energy. The **vorticity** $\\omega=\\nabla\\times u$ measures local rotation and obeys $\\partial_t\\omega+u\\cdot\\nabla\\omega=\\omega\\cdot\\nabla u$: the right-hand side, **vortex stretching**, can amplify vorticity, and it is absent in two dimensions, where the vorticity is simply carried along and solutions with bounded vorticity are global.\n\n## Local theory and the continuation criterion\n\nSmooth (or Hölder-differentiable) data give a unique local classical solution in $\\mathbb{R}^3$. The Beale–Kato–Majda criterion, as quoted in the 2026 preprints cited below, says such a solution can be continued past time $T$ as long as $\\int_0^T\\|\\omega(t)\\|_{L^\\infty}\\,dt<\\infty$, so a finite-time singularity requires the vorticity to blow up in this integrated sense. Whether smooth, finite-energy data in $\\mathbb{R}^3$ can produce one, without a boundary and without a force, is open.\n\n## Axisymmetric flow\n\nA flow is **axisymmetric without swirl** if in cylindrical coordinates $(r,\\theta,z)$ it has no dependence on $\\theta$ and no velocity in the $\\theta$ direction. Then the vorticity points in the $\\theta$ direction and the quotient $\\omega_\\theta/r$ is transported by the flow, which gives global regularity for smooth, decaying data (Ukhovskii–Yudovich, 1968, as cited in the preprint below). Rougher data are different: Danchin (2007) extended global regularity to bounded vorticity with suitable decay and relative vorticity in a Lorentz space, which covers finite-energy data with compactly supported vorticity in $C^\\alpha$, $\\alpha>1/3$, and the 2026 preprint below attributes the endpoint $\\alpha=1/3$ to Shao–Wei–Zhang.\n\n## Singularities known and reported\n\n- **Hölder velocity, $C^{1,\\alpha}$ (no swirl).** Elgindi (Annals of Mathematics, 2021) proved finite-time singularity formation for $C^{1,\\alpha}$ velocity fields on $\\mathbb{R}^3$ for small $\\alpha>0$; stability and finite-energy versions followed (Elgindi–Ghoul–Masmoudi).\n- **Smooth data with a boundary.** Chen and Hou's computer-assisted proof (arXiv 2023) gives a finite-time singularity for 3D axisymmetric Euler with smooth data in a domain with a boundary.\n- **Every exponent below $1/3$ (2026 preprints).** Shkoller (March 2026), Chen (May 2026) and Shao–Wei–Zhang–Zhang (May 2026) each report blow-up for every fixed $\\alpha<1/3$ in the axisymmetric no-swirl class; Bang and Cheskidov (November 2026) report one datum that works for all of them at once.\n- **Smooth data in $\\mathbb{R}^3$.** OpenAI's September 2026 preprint reports blow-up from smooth, compactly supported data for the unforced equations, with a non-axisymmetric construction. The axisymmetric-with-swirl smooth-data case is described as open in the Bang–Cheskidov preprint.\n\nSeveral of these results are unrefereed 2026 preprints. DARC lists the claims it tracks on the Verification board and does not treat any preprint as settled.\n\n## Why it matters\n\nThe Euler equations govern the inertial range of turbulence, and a singularity would be a mechanism for energy transfer to arbitrarily small scales. The question also sits behind the Navier–Stokes problem: viscosity could, in principle, prevent a singularity that the Euler equations allow."
  student: "**The equations.** A fluid with velocity $u(x,t)$ and pressure $p$ that cannot be compressed and has no friction obeys Newton's second law per unit volume, $\\partial_t u+(u\\cdot\\nabla)u=-\\nabla p$, together with $\\nabla\\cdot u=0$ (no net flow in or out of any small region). Those are the Euler equations. They conserve kinetic energy. Add viscosity and you get the Navier–Stokes equations.\n\n**Vorticity.** The curl $\\omega=\\nabla\\times u$ is a vector pointing along the local axis of spin, with length proportional to the spin rate. Taking the curl of the Euler equations gives $\\partial_t\\omega+(u\\cdot\\nabla)\\omega=(\\omega\\cdot\\nabla)u$. The left side says the spin is carried along with the fluid. The right side, *vortex stretching*, can make spin grow when the flow stretches a vortex line, like a skater pulling in her arms in reverse. In two dimensions the spin points out of the plane and the stretching term is zero, so the largest vorticity never increases and solutions stay smooth.\n\n**What a blow-up is.** A solution blows up in finite time if some quantity becomes infinite at a finite $T$. The Beale–Kato–Majda criterion, stated in the preprints cited here, says that for smooth solutions in 3D this happens only if $\\int_0^T\\max|\\omega|\\,dt=\\infty$. So everything comes down to whether vortex stretching can make the largest vorticity grow fast enough.\n\n**A special class.** Use cylindrical coordinates $(r,\\theta,z)$ and suppose nothing depends on $\\theta$ and there is no velocity in the $\\theta$ direction: *axisymmetric without swirl*. Then the vorticity $\\omega_\\theta$ points around the circle, and the ratio $\\omega_\\theta/r$ is simply carried along with the fluid. For smooth, decaying data this stops blow-up. A rougher datum can escape it, because bounded $\\omega_\\theta$ does not mean bounded $\\omega_\\theta/r$ near the axis. Roughness is measured with Hölder spaces: the vorticity is $C^\\alpha$ if its values at two points $d$ apart differ by at most a constant times $d^\\alpha$.\n\n**Where things stand.** Elgindi (2021) proved blow-up in this class for small $\\alpha>0$. For $\\alpha>1/3$ solutions with compactly supported vorticity are global (Danchin, 2007), and the endpoint $1/3$ is also global according to a 2026 paper cited by the latest preprint. In 2026 several preprints reported blow-up for every $\\alpha<1/3$, so $1/3$ would be the exact threshold. A different construction (OpenAI's September 2026 preprint) reports blow-up from fully smooth data in a non-axisymmetric flow. All of this is unrefereed and is tracked on the Verification board."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine water with no stickiness at all, an ideal fluid. Its motion obeys a famous set of rules called the Euler equations, written down in the eighteenth century. The rules tell you, from how the fluid moves now, how it moves a moment later.

For a mathematician the big question is simple to ask and very hard to answer: if the fluid starts out perfectly smooth, can it ever produce something violent, such as a spot where the spinning becomes infinitely fast after a finite time? Such a failure is called a blow-up. In two dimensions, the answer is known: no. In three dimensions, with smooth starting data, nobody has settled it for the plain setting that mathematicians care most about.

What has been done is to find blow-up in neighbouring settings. Some flows that are a little rough, not perfectly smooth, are known to blow up. Others blow up when the fluid sits in a container with walls. In 2026, several preprints reported blow-up for flows shaped like stacks of smoke rings with an exactly measured amount of roughness, and one preprint reported a smooth start with no container. These are papers posted online and waiting for experts to check them.

An analogy: stretching a rubber band thinner and thinner can concentrate the pull in a tiny spot. The rubber analogy breaks down because a fluid keeps changing the shape of its own stretching.
