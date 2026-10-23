---
type: entry
slug: navier-stokes-equations
title: The Navier–Stokes equations
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: The partial differential equations for viscous incompressible flow. They underlie most of fluid engineering and weather modelling, yet global smoothness of unforced 3D solutions is unproven.
reliedOn: Essentially all computational fluid dynamics, aerodynamics, ocean and atmosphere modelling and turbulence theory start from these equations or their discretizations. A rigorous theory of their solutions determines how far numerical simulation can be trusted in the turbulent regime.
dependsOn:
  - harmonic-analysis
  - sobolev-spaces-energy-methods
references:
  - title: "Clay Mathematics Institute: Navier–Stokes Equation"
    url: https://www.claymath.org/millennium/navier-stokes-equation/
    kind: docs
  - title: C. Fefferman, Existence and smoothness of the Navier–Stokes equation (Clay official description)
    url: https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf
    kind: article
  - title: T. Tao, Finite time blowup for an averaged three-dimensional Navier-Stokes equation
    url: https://arxiv.org/abs/1402.0290
    kind: paper
  - title: D. Albritton, E. Brué, M. Colombo, Non-uniqueness of Leray solutions of the forced Navier-Stokes equations
    url: https://arxiv.org/abs/2112.03116
    kind: paper
  - title: "J. Chen and T. Hou, Stable nearly self-similar blowup of the 2D Boussinesq and 3D Euler equations with smooth data II: Rigorous numerics"
    url: https://arxiv.org/abs/2305.05660
    kind: paper
  - title: Y. Wang et al., Discovery of Unstable Singularities
    url: https://arxiv.org/abs/2509.14185
    kind: paper
  - title: OpenAI, Finite time blowup for Navier–Stokes (manuscript, September 2026)
    url: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
    kind: paper
  - title: P. Constantin, M. Ignatova, V. Vicol, Regularity of asymptotically axisymmetric solutions to the 3D Navier-Stokes equations with analytic forcing
    url: https://arxiv.org/abs/2609.20803
    kind: paper
timeline:
  - date: 2014-02-01
    title: Blow-up for an averaged Navier–Stokes equation
    body: Tao constructs a smooth finite-time blow-up for a modified equation that preserves the energy identity, and outlines a program for transferring such constructions to the true equations. Month of the arXiv posting; day not asserted.
    source: https://arxiv.org/abs/1402.0290
  - date: 2021-12-06
    title: Non-uniqueness of Leray solutions for forced Navier–Stokes
    body: Albritton, Brué and Colombo show two distinct Leray solutions with the same zero initial data and the same body force, built from an unstable vortex-ring background.
    source: https://arxiv.org/abs/2112.03116
  - date: 2023-05-09
    title: Computer-assisted proof of Euler blow-up with boundary
    body: Chen and Hou complete a rigorous-numerics step that, with their analytic Part I, proves finite-time singularity for 3D axisymmetric Euler with smooth data and a boundary. The viscous problem is not addressed.
    source: https://arxiv.org/abs/2305.05660
  - date: 2025-09-17
    title: Unstable self-similar singularities found numerically with machine learning
    body: A Google DeepMind-led collaboration reports new families of unstable self-similar blow-up solutions for the incompressible porous media equation and 3D Euler with a boundary, some computed to near double-precision accuracy, which the authors say suffices for computer-assisted proofs. Navier–Stokes itself is not settled.
    source: https://arxiv.org/abs/2509.14185
  - date: 2026-09-08
    title: OpenAI claims forced finite-time blow-up
    body: OpenAI releases a manuscript, with a Lean 4 certificate, constructing a smooth compactly supported force and a solution from rest whose velocity blows up in finite time with bounded energy. Unrefereed as of October 2026; the unforced case is not addressed.
    source: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
  - date: 2026-09-17
    title: Analytic forcing rules out the OpenAI-type mechanism
    body: Constantin, Ignatova and Vicol prove that solutions with the structural features of the OpenAI construction are regular at the putative singular point when the force is real-analytic, so the construction cannot be adapted to zero force.
    source: https://arxiv.org/abs/2609.20803
explainer:
  oneLine: The equations that describe how water, air and other smooth fluids move.
  flow:
    - Newton's law applied to a fluid element
    - Energy can only decrease
    - But energy is too weak at small scales
    - So smoothness in 3D is unproven
  glossary:
    - term: viscosity
      meaning: How sticky or resistant to flow a fluid is; honey has high viscosity, water low.
      link: https://en.wikipedia.org/wiki/Viscosity
    - term: incompressible
      meaning: A fluid whose density cannot change, so it cannot be squeezed into a smaller space.
      link: https://en.wikipedia.org/wiki/Incompressible_flow
    - term: Navier-Stokes equations
      meaning: The equations of motion for a viscous fluid, expressing Newton's second law for a fluid element.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations
    - term: Euler equations
      meaning: The equations for an ideal fluid with no viscosity.
      link: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
    - term: Laplacian
      meaning: An operator measuring how a value differs from the average of its neighbours; it smooths things out.
      link: https://en.wikipedia.org/wiki/Laplace_operator
    - term: weak solution
      meaning: A solution that satisfies the equation only in an averaged sense, so it may not be smooth.
      link: https://en.wikipedia.org/wiki/Weak_solution
    - term: singularity
      meaning: A point where a solution becomes infinite or stops being smooth.
      link: https://en.wikipedia.org/wiki/Mathematical_singularity
    - term: finite-time blow-up
      meaning: When a solution becomes infinitely large at some specific moment.
      link: https://en.wikipedia.org/wiki/Mathematical_singularity
    - term: supercritical
      meaning: Describes an equation whose energy becomes weaker at small scales, so it cannot control tiny-scale behaviour.
      link: /research/sobolev-spaces-energy-methods
    - term: Millennium Prize Problems
      meaning: Seven problems for each of which the Clay Institute offers one million dollars.
      link: https://en.wikipedia.org/wiki/Millennium_Prize_Problems
    - term: energy identity
      meaning: The rule that, with no outside force, the kinetic energy of a fluid can only be lost to friction, never gained.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
  readFirst:
    - title: Navier-Stokes existence and smoothness - Wikipedia
      url: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
      why: Clear statement of the problem and what is known.
    - title: "Clay Mathematics Institute: Navier-Stokes"
      url: https://www.claymath.org/millennium/navier-stokes-equation/
      why: The official description of the prize problem.
    - title: Navier-Stokes equations - Wikipedia
      url: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations
      why: Background on the equations and their uses.
    - title: But what is a partial differential equation? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/pdes
      why: Friendly intuition for equations of this type.
site:
  published: true
  aiReviewed: true
---

## The equations

For a velocity field $u(x,t)\in\mathbb{R}^3$, pressure $p(x,t)$, constant kinematic viscosity $\nu>0$ and external force $f$, the incompressible Navier–Stokes equations are
$\partial_t u+(u\cdot\nabla)u=-\nabla p+\nu\Delta u+f,\qquad \nabla\cdot u=0.$
They express Newton's second law for a fluid element: the left side is acceleration, the right side is pressure gradient, viscous friction and forcing. Incompressibility determines the pressure, which acts as a Lagrange multiplier and makes the system non-local. Setting $\nu=0$ gives the Euler equations of an ideal fluid.

## Structure

- **Energy identity.** Smooth, decaying solutions satisfy $\tfrac12\frac{d}{dt}\|u\|_{L^2}^2+\nu\|\nabla u\|_{L^2}^2=\int f\cdot u$. Energy cannot grow without forcing, but this controls only a weak norm of the solution.
- **Scaling.** If $u$ solves the equations (with $f=0$), so does $u_\lambda(x,t)=\lambda u(\lambda x,\lambda^2 t)$. The energy is _supercritical_ in three dimensions: it becomes weaker at small scales, so energy conservation does not by itself prevent the small scales from collapsing. In two dimensions it is critical, and global smooth solutions exist (classical results of Leray and Ladyzhenskaya).
- **Weak solutions.** Leray (1934) constructed global weak solutions in 3D with finite energy, but their uniqueness and smoothness are not known.
- **Partial regularity.** Caffarelli, Kohn and Nirenberg (1982) showed that the set of space-time points where a suitable weak solution can be singular has one-dimensional parabolic Hausdorff measure zero. Escauriaza, Seregin and Šverák (2003) showed that a solution that stays bounded in $L^\infty_tL^3_x$ cannot blow up.
- **Local theory.** Smooth data give a smooth solution on a short time interval, and small data give global smooth solutions. The open issue is large data over long times.

## What a singularity would be

A "blow-up" is a finite time $T^*$ beyond which no smooth solution continues, with $\|u(t)\|_{L^\infty}\to\infty$ as $t\to T^*$. Physically it would mean the equations stop describing the flow at a point, as viscosity fails to prevent unbounded concentration of vorticity. The Clay problem, in Fefferman's formulation, asks either for global smooth, finite-energy solutions for all smooth, rapidly decaying (or periodic) initial data **with zero force**, or for an example of breakdown, where in the breakdown alternatives a smooth, rapidly decaying **external force is allowed** (see the problem entry). That asymmetry became important in 2026.

## Evidence about blow-up

Several results show that the obstruction is subtle. Tao (2014) built a smooth finite-time blow-up for an _averaged_ Navier–Stokes equation that keeps the energy identity, showing that any regularity proof must use structure beyond harmonic-analysis estimates plus energy. Albritton, Brué and Colombo (2021) proved non-uniqueness of Leray solutions for the _forced_ equations. For the inviscid Euler equations, Chen and Hou (2022–2023) proved finite-time singularity formation from smooth data for 3D axisymmetric flow with a boundary, with a computer-assisted verification step, and a Google DeepMind-led collaboration (2025) found unstable self-similar singularities numerically for related models.

On 8 September 2026 OpenAI released a manuscript, whose proof it attributes to an internal AI system and which comes with a Lean 4 certificate, constructing for every $\nu>0$ a smooth force, compactly supported in space and time, and a solution starting from rest whose velocity becomes unbounded in finite time while the energy stays bounded. That would settle the forced breakdown alternatives of the Clay problem. Alongside it, OpenAI released a companion claim of finite-time blow-up for the _unforced_ 3D Euler equations on $\mathbb{R}^3$ from smooth, compactly supported data. As of October 2026 neither had been refereed. Constantin, Ignatova and Vicol showed that constructions of the OpenAI type cannot work with a real-analytic force, in particular with zero force, so whether unforced viscous flows can blow up remains open.

## Practice

Engineering works with discretizations (direct numerical simulation at moderate Reynolds numbers, large-eddy simulation and Reynolds-averaged models at high ones). These are validated against experiment, not against a regularity theorem, so the mathematical question is largely decoupled from daily practice.

# Plain explanation

Stir a cup of coffee, watch smoke rise from a candle, or think of air flowing over a wing. All of these motions are described by the Navier-Stokes equations. They are Newton's law of motion, force equals mass times acceleration, applied to a tiny piece of fluid. The forces are the push of pressure, the stickiness (viscosity) of the fluid, and any outside push such as gravity.

Engineers use these equations every day, inside computer programs, to design aircraft, forecast weather and study blood flow. The programs give good answers in practice.

So why is this a famous maths puzzle? Because nobody can prove that the equations always behave well. In two dimensions we know that a smooth flow stays smooth forever. In three dimensions nobody can prove that. A smooth flow left to itself might, in principle, develop an infinitely sharp spike in finite time, where the equations stop making sense. Nobody has shown that this happens or that it never does. In 2026 a not-yet-checked proof claimed a spike can be forced by a carefully designed outside push; for a fluid left alone, the question is still open.

The trouble is that the usual guarantee, energy cannot grow, is too weak at tiny scales. Small whirls can pass energy down to ever smaller whirls.

One caution: real fluids are made of molecules, so the equations are an approximation. The question is about the maths, not about whether real water misbehaves.

# Student explanation

For a fluid with velocity $u(x,t)$ and pressure $p(x,t)$, and constant viscosity $\nu>0$, the **incompressible Navier–Stokes equations** are
$\partial_t u+(u\cdot\nabla)u=-\nabla p+\nu\Delta u+f,\qquad \nabla\cdot u=0.$
The left side is the acceleration of a fluid element (the second term is _transport_: the flow carries itself along). On the right are the pressure force, the viscous force (the Laplacian $\Delta u$ smooths things out) and any outside force $f$. The condition $\nabla\cdot u=0$ means the fluid cannot be compressed. It determines the pressure, which acts instantly everywhere, making the system _non-local_. With $\nu=0$ you get the **Euler equations** for an ideal fluid.

**Energy.** If $f=0$, the total kinetic energy decreases over time: $\frac12\frac{d}{dt}\|u\|^2_{L^2}=-\nu\|\nabla u\|^2_{L^2}$. So energy cannot grow, and this is the main global information we have. But it only controls a weak size of $u$, not whether $u$ stays smooth.

**Scaling.** If $u$ solves the equations (with $f=0$), then so does $\lambda u(\lambda x,\lambda^2 t)$ for any $\lambda>0$. Compare how the energy behaves under this zoom: in three dimensions, energy becomes _weaker_ at small scales. This is called **supercritical**, and is the root of the difficulty: energy conservation alone leaves room for flow to concentrate on tiny scales. In two dimensions, the energy is critical and smooth solutions are known to exist globally.

**What is known in 3D.**

- Smooth solutions exist for a short time (local existence), and for all time if the initial data is small in a suitable norm.
- Leray (1934) built _weak solutions_ that exist for all time, but nobody knows if they are unique or smooth.
- Caffarelli, Kohn and Nirenberg (1982) showed any singular points would be very sparse in space-time.
- Escauriaza, Seregin and Šverák (2003) showed that if a certain norm of the velocity stays bounded, no singularity forms.
- Tao (2014) showed that a modified, 'averaged' version of the equations, with the same energy law, can blow up. This indicates a proof of smoothness must use the exact structure of the nonlinear term.

The **Clay Millennium Prize** problem asks either for a proof that smooth solutions exist for all time when there is no force, or for a breakdown example, where a smooth external force _is_ allowed. In September 2026 OpenAI released an unrefereed manuscript claiming forced blow-up; Constantin, Ignatova and Vicol showed constructions of that type cannot work without a force, so the unforced question remains open. The problem pages discuss both versions.
