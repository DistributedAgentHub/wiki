---
type: entry
slug: radiation-hydrodynamics
title: Radiation hydrodynamics simulation
field: physics
kind: ALGORITHM
status: ACTIVE
summary: Numerical methods that evolve fluid flow together with the photons or neutrinos that heat, cool and push it; the hard part is transport at the speed of light across huge opacity ranges.
reliedOn: Simulations of star formation, accretion discs, stellar atmospheres, supernovae and neutron-star mergers need radiation to be treated consistently with the gas. Conclusions such as whether a core-collapse supernova explodes depend directly on the accuracy of the transport scheme.
dependsOn:
  - general-relativity
  - radiative-transfer
references:
  - title: "Skinner et al. 2019: Fornax, a flexible code for multiphysics astrophysical simulations"
    url: https://arxiv.org/abs/1806.07390
    kind: paper
  - title: "Jiang 2021: An implicit finite volume scheme to solve the time-dependent radiation transport equation based on discrete ordinates"
    url: https://arxiv.org/abs/2102.02212
    kind: paper
  - title: "Stone et al. 2020: The Athena++ adaptive mesh refinement framework"
    url: https://arxiv.org/abs/2005.06651
    kind: paper
  - title: "White et al. 2023: An extension of the Athena++ framework for general equations of state and radiation-MHD in general relativity using a finite-solid-angle discretization (ApJ 949, 103)"
    url: https://arxiv.org/abs/2302.04283
    kind: paper
  - title: "Mezzacappa et al. 2020: Physical, numerical and computational challenges of modeling neutrino transport in core-collapse supernovae"
    url: https://arxiv.org/abs/2010.09013
    kind: paper
  - title: "Wang and Burrows 2025: The effect of the fast-flavor instability on core-collapse supernova models"
    url: https://arxiv.org/abs/2503.04896
    kind: paper
timeline:
  - date: 2018-06-19
    title: Fornax multigroup M1 code
    body: A multigroup, multidimensional radiation-hydrodynamics code designed for supernovae is presented and tested across several radiation problems.
    source: https://arxiv.org/abs/1806.07390
  - date: 2020-10-18
    title: Neutrino transport review
    body: Mezzacappa and colleagues set out why supernova neutrinos need kinetic treatment and what discretisation and solver challenges follow.
    source: https://arxiv.org/abs/2010.09013
  - date: 2021-02-03
    title: Implicit discrete-ordinates transport in Athena++
    body: An implicit scheme removes the speed-of-light time-step constraint for frequency-integrated discrete-ordinates transport coupled to the Athena++ MHD solver.
    source: https://arxiv.org/abs/2102.02212
  - date: 2023-02-08
    title: Radiation-GRMHD in Athena++
    body: Radiation transport with finite-solid-angle discretisation is added to relativistic MHD and tested on black-hole accretion.
    source: https://arxiv.org/abs/2302.04283
explainer:
  oneLine: Computer methods that follow moving gas and the light or neutrinos it exchanges energy with, at the same time.
  flow:
    - Gas and radiation exchange energy
    - Light is fast, gas is slow
    - Thick gas traps light; thin lets it fly
    - "Pick a method: moments, rays or packets"
    - Predict explosions and accretion flows
  glossary:
    - term: hydrodynamics
      meaning: The study of how fluids and gases move and respond to forces.
      link: https://en.wikipedia.org/wiki/Fluid_dynamics
    - term: Euler equations
      meaning: The equations for the motion of a gas without friction or heat conduction.
      link: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
    - term: magnetohydrodynamics
      meaning: The study of electrically conducting fluids, such as ionized gas, together with magnetic fields.
      link: https://en.wikipedia.org/wiki/Magnetohydrodynamics
    - term: specific intensity
      meaning: How much light energy flows in a given direction, per area, time, solid angle and frequency.
      link: https://en.wikipedia.org/wiki/Radiance
    - term: flux-limited diffusion
      meaning: A cheap method that treats radiation as diffusing through gas, with a cap so it never exceeds light speed.
      link: https://en.wikipedia.org/wiki/Radiative_transfer
    - term: M1 closure
      meaning: A moment-method rule for the radiation pressure that allows light to stream in a beam.
      link: https://en.wikipedia.org/wiki/Radiative_transfer
    - term: discrete ordinates
      meaning: A method that tracks radiation along a fixed list of directions.
      link: https://en.wikipedia.org/wiki/Discrete_ordinates_method
    - term: Monte Carlo method
      meaning: Solving a problem by following many random samples, here packets of light.
      link: https://en.wikipedia.org/wiki/Monte_Carlo_method
    - term: neutrino
      meaning: An almost massless particle that barely interacts with matter; supernovae release huge numbers of them.
      link: https://en.wikipedia.org/wiki/Neutrino
    - term: CFL condition
      meaning: A rule that limits how large a time step a simple numerical method may take compared with the speed of the fastest signal.
      link: https://en.wikipedia.org/wiki/Courant%E2%80%93Friedrichs%E2%80%93Lewy_condition
    - term: radiative transfer
      meaning: The rules for how light is emitted, absorbed and scattered as it passes through matter.
      link: /research/radiative-transfer
    - term: free streaming
      meaning: When radiation travels in straight lines without being absorbed or scattered, as in thin gas.
      link: https://en.wikipedia.org/wiki/Free_streaming
  readFirst:
    - title: Radiative transfer (Wikipedia)
      url: https://en.wikipedia.org/wiki/Radiative_transfer
      why: "Background on the radiation half of the problem: emission, absorption and scattering."
    - title: Supernova (Wikipedia)
      url: https://en.wikipedia.org/wiki/Supernova
      why: Shows the main phenomenon these simulations try to explain.
    - title: Neutrino (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neutrino
      why: Introduces the particles that carry supernova energy.
site:
  published: true
  aiReviewed: true
---

## The problem

In many astrophysical flows the radiation carries energy and momentum comparable to the gas. The gas obeys the Euler (or magnetohydrodynamic) equations with radiative source terms, and the radiation obeys a transport equation for its specific intensity $I(\mathbf{x}, \hat{n}, \nu, t)$, a function of position, direction, frequency and time. That is up to seven dimensions, and the characteristic speeds differ by orders of magnitude: the gas may move at $10^{-2}c$ while radiation moves at $c$ and, in opaque regions, is tightly coupled to the gas. Explicit time stepping limited by the speed of light would be impractically slow.

## Main families of methods

**Moment methods.** Integrate the transport equation over angle to get equations for the energy density and flux, closed by an assumption for the radiation pressure tensor. Flux-limited diffusion (FLD) is cheap and correct in opaque regions but fails in free streaming. The M1 closure uses a local analytic form for the pressure tensor and keeps correct causal propagation, but cannot represent crossing beams. The Fornax code (Skinner et al. 2019), built for supernovae, solves comoving-frame multigroup M1 equations with a semi-explicit high-order time step and reports scaling beyond 100,000 MPI tasks.

**Discrete ordinates.** Evolve intensity along a finite set of directions. The implicit, frequency-integrated scheme of Jiang (2021) in Athena++ removes the speed-of-light time-step constraint while remaining conservative, at the cost of an iterative solve each step; an extension to general-relativistic radiation-MHD (White et al. 2023) has been ported to the GPU code AthenaK.

**Monte Carlo.** Follow packets of photons. Handles complex geometry and scattering with transparent error behaviour but has statistical noise and scaling difficulties in opaque regions.

**Kinetic neutrino transport.** In supernovae and mergers, neutrinos are sometimes coupled to matter and sometimes free streaming, so a fluid-like closure is not always valid. Mezzacappa et al. (2020) describe the challenge of discretising the full Boltzmann equation while conserving lepton number and energy, and of making the resulting nonlinear solves efficient on supercomputers.

## Algorithmic issues

Operator splitting between hydrodynamics and radiation can violate energy conservation unless the coupling is treated implicitly. Low-order closures can give qualitatively wrong results in geometries with shadows. Adaptive mesh refinement (for example in Athena++, Stone et al. 2020) helps resolve fronts and interfaces but complicates load balancing, especially for implicit radiation solves. Code comparison projects are essential because different closures can lead to different outcomes.

## State of the art (October 2026)

Production codes combine adaptive meshes, multigroup transport and GPU acceleration. In core-collapse supernova modelling, groups now run long 3D simulations with multigroup M1 transport and include neutrino flavor-conversion physics (for example the fast-flavor instability, found to change net neutrino heating by roughly 10% temporarily in 2D models, raising it in most). For accretion onto black holes, radiation-GRMHD codes capture the thin-disc, high-accretion-rate regime. The leading open issue is how much closure error remains compared with full Boltzmann transport in 3D, and which microphysics is missing.

## Related methods

Astrophysical radiation-hydrodynamics codes are often coupled to self-gravity solvers, and their transport methods (flux-limited diffusion, M1, discrete ordinates, Monte Carlo) are shared with codes for inertial-confinement fusion and atmospheric modelling.

# Plain explanation

In many places in space, light does more than carry news. It carries real energy and push. Inside an exploding star, the glow and the stream of tiny particles called neutrinos heat the gas and shove it outward. Around a black hole feeding on gas, light pushes back on the gas falling in. To simulate such places on a computer, you must follow both the gas and the radiation, and let each act on the other. That is radiation hydrodynamics.

It is hard for two reasons. First, light is very fast. Gas may move at a small fraction of light speed, but light crosses the whole simulation almost instantly. A program that takes steps small enough to follow light would take far too long to advance the gas.

Second, the behavior changes with the situation. Inside thick gas, light is trapped and just seeps out slowly, like heat through a thick wall. In thin gas it flies straight. A good method must handle both, and everything in between.

There are several families of methods, each with shortcuts. Some track only the average amount and direction of the radiation. Some follow light along a handful of fixed directions.

This is how scientists try to simulate exploding stars from first principles.

Where the analogy breaks: heat through a wall is a good picture for trapped light, but real radiation also has many colours, and each colour is trapped differently.

# Student explanation

**The setup.** The gas obeys the fluid equations (Euler equations, or magnetohydrodynamics if magnetic fields matter) with extra source terms for energy and momentum exchanged with radiation. The radiation obeys a transport equation for its specific intensity, which depends on position, direction, frequency and time: up to seven dimensions. Gas may move at 1% of the speed of light, while radiation travels at c and is tightly coupled to gas in opaque regions. A time step limited by c (the CFL condition) would be impractically small.

**Moment methods.** Integrate the transport equation over angle to get equations for radiation energy and flux, then close them with an assumption linking the pressure to the energy. Flux-limited diffusion is cheap and right for opaque regions, but fails when light free-streams. The M1 closure uses a local formula for the pressure tensor; it keeps correct signal speeds but cannot represent two beams crossing. The code Fornax (for supernovae) uses multigroup M1 (radiation split into a set of energy bins) for neutrinos.

**Discrete ordinates.** Evolve the intensity along a finite set of directions. Implicit schemes (as in Athena++ and AthenaK) remove the light-speed time step limit but require an iterative solution at each step.

**Monte Carlo.** Follow packets of photons through the grid. This handles complex geometry and scattering and has understandable errors, but is noisy and costly when the gas is very opaque.

**Neutrinos.** In core-collapse supernovae, neutrinos carry most of the energy, and their transport follows the same equations (with energy-dependent interactions) and must be coupled to general relativity and a nuclear equation of state.

**Challenges.**

- Conserving energy and momentum exactly while splitting the update into gas and radiation parts.
- Transitions between thick and thin regimes.
- Cost: even simplified 3D multi-group transport uses very large supercomputer resources, and GPU ports are underway.

**Why it matters.** It is the main tool for predicting supernova explosions, accretion discs, star formation and the first stars, and for linking simulation to observed light.
