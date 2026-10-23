---
type: problem
slug: navier-stokes-unforced-regularity
title: Global regularity or finite-time blow-up for unforced 3D Navier–Stokes (f ≡ 0)
entry: navier-stokes-equations
status: OPEN
origin: Leray, 1934; successor to the Clay problem, 2026
ratings:
  difficulty: 92
  applicationValue: 23
  leverage: 45
workMix:
  theory: 78
  engineering: 6
  compute: 16
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Clay Mathematics Institute: Navier–Stokes equation"
    url: https://www.claymath.org/millennium/navier-stokes-equation/
  - title: "Constantin, Ignatova, Vicol: regularity with real-analytic forcing for asymptotically axisymmetric solutions"
    url: https://arxiv.org/abs/2609.20803
  - title: "Tao: Finite time blowup for an averaged 3D Navier–Stokes equation"
    url: https://arxiv.org/abs/1402.0290
  - title: "Albritton, Brué, Colombo: Non-uniqueness of Leray solutions of the forced Navier–Stokes equations"
    url: https://arxiv.org/abs/2112.03116
  - title: "Chen, Hou: Stable nearly self-similar blowup of the 2D Boussinesq and 3D Euler equations with smooth data"
    url: https://arxiv.org/abs/2210.07191
links:
  - to: navier-stokes-regularity
    kind: BUILDS_ON
    note: Forced blow-up tools and the Lean artefact would be the starting point for any unforced blow-up attempt.
timeline:
  - date: 1934-01-01
    title: Leray's weak solutions
    body: Global weak solutions in 3D; regularity left open (date approximate to the year).
    source: https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf
  - date: 2014-02-01
    title: Averaged equation blows up
    body: Tao's averaged model shows that energy structure alone cannot prove regularity.
    source: https://arxiv.org/abs/1402.0290
  - date: 2026-09-29
    title: Forced mechanism cannot work for analytic force
    body: Constantin–Ignatova–Vicol show why the new construction needs a non-analytic force (arXiv v1 29 September 2026).
    source: https://arxiv.org/abs/2609.20803
explainer:
  oneLine: Start a 3D fluid smoothly with nobody stirring it. Can it ever form an infinitely sharp spike?
  flow:
    - Smooth start, nobody stirring
    - Whirls can feed smaller whirls
    - Energy alone cannot stop a runaway
    - Proof of either outcome is unknown
  glossary:
    - term: Navier-Stokes equations
      meaning: The equations of motion for a viscous fluid.
      link: /research/navier-stokes-equations
    - term: viscosity
      meaning: How sticky or resistant to flow a fluid is.
      link: https://en.wikipedia.org/wiki/Viscosity
    - term: divergence-free
      meaning: A flow field with no sources or sinks, as for an incompressible fluid.
      link: https://en.wikipedia.org/wiki/Solenoidal_vector_field
    - term: supercritical
      meaning: Describes an equation whose energy becomes weaker at small scales, so it cannot control tiny-scale behaviour.
      link: /research/sobolev-spaces-energy-methods
    - term: Leray weak solution
      meaning: A solution that exists for all time but only satisfies the equations in an averaged sense.
      link: https://en.wikipedia.org/wiki/Weak_solution
    - term: partial regularity
      meaning: A result saying that any bad points of a solution must be very rare.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
    - term: Euler equations
      meaning: The equations for an ideal fluid with no viscosity.
      link: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
    - term: self-similar solution
      meaning: A solution that looks the same when you zoom in appropriately in space and time.
      link: https://en.wikipedia.org/wiki/Self-similarity
    - term: singularity
      meaning: A point where a solution becomes infinite or stops being smooth.
      link: https://en.wikipedia.org/wiki/Mathematical_singularity
    - term: computer-assisted proof
      meaning: A proof in which a computer carries out a rigorous calculation that is part of the argument.
      link: https://en.wikipedia.org/wiki/Computer-assisted_proof
    - term: scaling
      meaning: Zooming a solution in space and time so that it still solves the same equation.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
  readFirst:
    - title: Navier-Stokes existence and smoothness - Wikipedia
      url: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
      why: The problem and its partial results.
    - title: "Clay Mathematics Institute: Navier-Stokes"
      url: https://www.claymath.org/millennium/navier-stokes-equation/
      why: The official statement.
    - title: Sobolev spaces and energy methods (research entry)
      url: /research/sobolev-spaces-energy-methods
      why: The tools and their limits.
site:
  aiReviewed: true
---

For the unforced 3D incompressible Navier–Stokes equations ∂\_t u + (u·∇)u = νΔu − ∇p, ∇·u = 0, with ν > 0 on ℝ³ or on the 3-torus, decide whether every smooth, divergence-free initial datum u0 with finite energy (and decay at infinity, or periodicity) yields a smooth solution for all t > 0, or whether some such datum develops a singularity in finite time. A proof of global regularity must supply a priori control beyond the energy, which is supercritical with respect to the scaling of the equation. A proof of blow-up must construct u0 with sup|u| → ∞ at a finite time, stable against the dissipation.

# State of the art

**Open.** Smooth solutions are global in 2D and local in 3D, with global existence for small critical-norm data (Fujita–Kato). Leray weak solutions exist globally; uniqueness is unknown. Partial regularity: the singular set has zero 1D parabolic Hausdorff measure (Caffarelli–Kohn–Nirenberg, 1982), and Escauriaza–Seregin–Šverák (2003) showed boundedness in L^∞\_t L^3_x forbids blow-up. Albritton–Brué–Colombo (2021) proved non-uniqueness of Leray solutions with a force. Tao (2014) showed blow-up for an averaged Navier–Stokes equation, indicating that any regularity proof must use the exact structure of the nonlinearity beyond energy-type identities. For Euler, Chen–Hou (2022–2023) gave a computer-assisted proof of blow-up from smooth data in a domain with boundary. OpenAI's 8 September 2026 manuscript constructs finite-time blow-up with a smooth, compactly supported force; it is unrefereed and under verification (see navier-stokes-regularity). Constantin–Ignatova–Vicol (arXiv:2609.20803) show that solutions with the construction's structural features (anisotropic Type II bounds, exact axisymmetry in a collapsing core) cannot blow up under real-analytic forcing, in particular f ≡ 0, so the unforced problem is untouched.

# Applications

Regularity or singularity formation for the unforced equations underpins the validity of Navier–Stokes as a model of turbulence and informs numerical-analysis guarantees, but no engineering workflow awaits the answer. Methods (a priori estimates in supercritical regimes, computer-assisted proofs for fluids) transfer to other PDEs.

# Resolution criteria

Either a proof that every smooth finite-energy datum with f ≡ 0 gives a global smooth solution, or an explicit smooth finite-energy datum whose solution blows up in finite time, accepted by experts. Results for the forced equation, averaged models, Euler, or non-smooth data do not count.

# Rating rationale

The original supercritical question, untouched by the forced construction, so it is graded with the Millennium problems: 92, below Riemann (96) and Yang–Mills (93), exactly the value the calibration pass gave for the unforced question alone. Application value 23, just below the Clay entry (24): it would validate or limit the continuum model, with no engineering dependence. Leverage 45 is slightly below the Clay entry's 48 because fewer results are conditional on the exact answer.

# Work mix rationale

A resolution needs a new a priori estimate or an unstable singular profile; computation and formal proof support but do not substitute.

# Verification

Statement: the unforced Clay alternatives, `NavierStokes.navier_stokes_existence_and_smoothness_R3` (A, on ℝ³) and `navier_stokes_existence_and_smoothness_periodic` (B, on the torus), in [Millennium/NavierStokes.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Millennium/NavierStokes.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)), both with force `f := 0`. Global regularity is a Lean proof of either statement for all admissible data; finite-time blow-up is a proof of its negation, i.e. an explicit smooth initial velocity with no smooth finite-energy solution. The file states the equations directly with derivatives of smooth functions. A proof is accepted when it compiles against the pinned corpus and passes Comparator; expert refereeing of the paper version runs alongside. The forced alternatives (C) and (D) in the same file are labelled solved with a linked OpenAI Lean proof (September 2026); they do not settle this unforced question.

# Plain explanation

This is the purest form of the Navier-Stokes question. Take a fluid, set it moving in a smooth way, and then leave it alone: no stirring, no wind, no gravity pushing it around. Will the motion stay smooth forever? Or could a tiny region spin up faster and faster until, at a particular moment, the speed there becomes infinite?

In two dimensions we know the answer: smooth stays smooth. In three dimensions nobody knows. The best we can prove is that smooth solutions last for a short time, that very small starts last forever, and that if there is a bad point, it must be extremely rare.

There are two reasons it is hard. First, the one thing we can control in general, the total energy, is too weak to forbid tiny, violent features. Second, mathematicians have shown that a simplified imitation of the equations, with the same energy rule, can blow up. So a proof of smoothness cannot rely on energy alone and must use the exact details of the equations.

For an ideal fluid with no stickiness, a computer-assisted proof (Chen and Hou) shows blow-up can happen in a container with walls. Whether stickiness prevents it is unknown. A 2026 claimed blow-up for the sticky equations needs an outside push, and experts showed that kind of construction cannot work without one.

A good picture is whirlpools feeding smaller whirlpools. The question is whether this cascade can run away in finite time.

# Student explanation

**Statement.** For the unforced equations $\partial_t u+(u\cdot\nabla)u=\nu\Delta u-\nabla p$, $\nabla\cdot u=0$, with $\nu>0$ on $\mathbb R^3$ or the 3-torus, decide whether every smooth, divergence-free initial datum $u_0$ with finite energy (and decay at infinity, or periodicity) yields a smooth solution for all $t>0$, or whether some such datum develops a singularity in finite time. A proof of regularity must supply control beyond the energy. A proof of blow-up must construct $u_0$ with $\sup|u|\to\infty$ at a finite time, in a way that survives the smoothing effect of viscosity.

**Why energy is not enough.** The equations are invariant under the scaling $u_\lambda(x,t)=\lambda u(\lambda x,\lambda^2 t)$. Under that zooming, the energy $\|u\|_{L^2}^2$ scales like $\lambda^{-1}$ in three dimensions, so it is weaker at small scales: the equation is _supercritical_. In two dimensions the energy is critical, which is why global regularity is known there. In 3D, the controlled quantities (energy and the dissipation integral) do not scale like the quantities needed to prevent blow-up.

**What is known.**

- Smooth local existence and global existence for small data in a _critical_ norm (Fujita–Kato).

- Leray weak solutions exist globally; whether they are unique is unknown.

- Partial regularity: the singular set has zero one-dimensional parabolic Hausdorff measure (Caffarelli–Kohn–Nirenberg, 1982).

- Escauriaza–Seregin–Šverák (2003): a solution bounded in $L^\infty_tL^3_x$ cannot blow up.

- Albritton–Brué–Colombo (2021) showed non-uniqueness of Leray solutions _with a force_; this does not settle the unforced case.

- Tao (2014) proved finite-time blow-up for an _averaged_ Navier–Stokes equation obeying the same energy identity. This indicates any regularity proof must use more than energy-type identities, for instance the precise algebraic structure of the nonlinearity.

- For the inviscid Euler equations, Chen and Hou (2022–2023) gave a computer-assisted proof of finite-time blow-up from smooth data in a special setting; it is unknown whether viscosity would stop the mechanism.

- OpenAI's September 2026 manuscript (unrefereed) claims blow-up with a smooth outside force. Constantin, Ignatova and Vicol showed that constructions with its structural features cannot blow up under real-analytic forcing, in particular with no force, so this problem is untouched.

**Possible routes.** A blow-up proof might try to extend Euler blow-up scenarios to include viscosity, using a stable self-similar profile verified with rigorous computation. A regularity proof needs a new quantity, monotone or bounded, that is critical or subcritical. No consensus approach exists.

**Relation to the Clay problem.** The Clay prize can be won by alternatives with a force, so this unforced question is a strictly stronger target on the blow-up side.
