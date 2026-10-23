---
type: entry
slug: general-relativity
title: General relativity for astrophysics
field: physics
kind: THEORY
status: MATURE
summary: "Einstein's field equations and their astrophysical solutions: FLRW cosmology, Schwarzschild and Kerr black holes, geodesics, gravitational waves, the TOV equation and black-hole perturbation theory."
reliedOn: Cosmology, gravitational-wave astronomy, black-hole imaging and neutron-star structure all start from it. Downstream it underlies the ringdown and quasinormal-mode problems, the photon-ring test of the Kerr metric, the neutron-star equation of state, Mercury's long-term stability with relativistic precession, and every cosmological tension.
references:
  - title: "Carroll 2019: Spacetime and Geometry, An Introduction to General Relativity (Cambridge University Press)"
    url: https://doi.org/10.1017/9781108770385
    kind: book
  - title: "Misner, Thorne and Wheeler: Gravitation (Princeton University Press reissue, 2017)"
    url: https://press.princeton.edu/books/hardcover/9780691177793/gravitation
    kind: book
  - title: "Wald 1984: General Relativity (University of Chicago Press)"
    url: https://press.uchicago.edu/ucp/books/book/chicago/G/bo5952261.html
    kind: book
  - title: "Poisson and Will 2014: Gravity, Newtonian, Post-Newtonian, Relativistic (Cambridge University Press)"
    url: https://doi.org/10.1017/CBO9781139507486
    kind: book
  - title: "Teukolsky 1973: Perturbations of a rotating black hole. I. Fundamental equations for gravitational, electromagnetic and neutrino-field perturbations (ApJ 185, 635)"
    url: https://doi.org/10.1086/152444
    kind: paper
  - title: "Berti, Cardoso and Starinets 2009: Quasinormal modes of black holes and black branes"
    url: https://arxiv.org/abs/0905.2975
    kind: paper
  - title: "Carroll 1997: Lecture notes on general relativity"
    url: https://arxiv.org/abs/gr-qc/9712019
    kind: article
timeline:
  - date: 1963-09-01
    title: Kerr metric
    body: Kerr publishes the exact vacuum solution for a spinning mass, later identified as the unique stationary black hole of vacuum GR.
    source: https://doi.org/10.1103/PhysRevLett.11.237
  - date: 1973-10-01
    title: Teukolsky master equation
    body: Perturbations of the Kerr metric of spin 0, 1/2, 1 and 2 are shown to obey a single separable equation, the basis of Kerr quasinormal-mode calculations.
    source: https://doi.org/10.1086/152444
  - date: 2016-02-11
    title: First direct detection of gravitational waves
    body: LIGO reports GW150914, a binary-black-hole merger whose signal matches GR's predictions for inspiral, merger and ringdown.
    source: https://doi.org/10.1103/PhysRevLett.116.061102
  - date: 2019-04-10
    title: First horizon-scale image of M87*
    body: The Event Horizon Telescope publishes a ring-like image of the M87 black hole, consistent with the shadow predicted by Kerr null geodesics.
    source: https://doi.org/10.3847/2041-8213/ab0ec7
  - date: 2025-09-09
    title: "GW250114: area law and Kerr ringdown"
    body: At network SNR 80, post-merger data are consistent with the Kerr ℓ = |m| = 2 fundamental mode and first overtone, with frequencies constrained to ±30%. Hawking's area law is confirmed to high credibility.
    source: https://arxiv.org/abs/2509.08054
explainer:
  oneLine: Einstein's theory of gravity as bent space and time, and what it predicts for black holes and the universe.
  flow:
    - Mass and energy bend spacetime
    - Objects follow straightest paths
    - Strong bending gives black holes
    - Moving masses send out ripples
    - Whole universe expands as one fabric
  glossary:
    - term: spacetime
      meaning: The combination of three directions of space and one of time into a single four-dimensional fabric.
      link: https://en.wikipedia.org/wiki/Spacetime
    - term: geodesic
      meaning: The straightest possible path through curved space or spacetime; free-falling objects follow geodesics.
      link: https://en.wikipedia.org/wiki/Geodesics_in_general_relativity
    - term: metric
      meaning: A rule that tells you how to measure distances and time intervals in a given spacetime.
      link: https://en.wikipedia.org/wiki/Metric_tensor_(general_relativity)
    - term: event horizon
      meaning: The boundary around a black hole beyond which nothing, not even light, can return.
      link: https://en.wikipedia.org/wiki/Event_horizon
    - term: Schwarzschild black hole
      meaning: "The simplest black hole: it has mass but does not spin and has no charge."
      link: https://en.wikipedia.org/wiki/Schwarzschild_metric
    - term: Kerr black hole
      meaning: A spinning uncharged black hole; the realistic kind in astrophysics.
      link: https://en.wikipedia.org/wiki/Kerr_metric
    - term: ISCO
      meaning: "The innermost stable circular orbit: the closest circular orbit around a black hole where matter can orbit without falling in."
      link: https://en.wikipedia.org/wiki/Innermost_stable_circular_orbit
    - term: Friedmann equations
      meaning: The equations that describe how the whole universe expands, given what it contains.
      link: https://en.wikipedia.org/wiki/Friedmann_equations
    - term: cosmological constant
      meaning: A constant energy density of empty space that makes expansion speed up.
      link: https://en.wikipedia.org/wiki/Cosmological_constant
    - term: gravitational wave
      meaning: A ripple of spacetime curvature travelling at the speed of light.
      link: https://en.wikipedia.org/wiki/Gravitational_wave
    - term: quasinormal mode
      meaning: A damped ringing pattern, like a bell after being struck, that a disturbed black hole settles through.
      link: https://en.wikipedia.org/wiki/Quasinormal_mode
    - term: TOV equation
      meaning: The equation that gives the balance of pressure and gravity inside a non-rotating star in general relativity.
      link: https://en.wikipedia.org/wiki/Tolman%E2%80%93Oppenheimer%E2%80%93Volkoff_equation
  readFirst:
    - title: General relativity (Wikipedia)
      url: https://en.wikipedia.org/wiki/General_relativity
      why: A broad, readable tour of the ideas and tests of the theory.
    - title: Black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/Black_hole
      why: Covers horizons, spin, and observations in one place.
    - title: Friedmann equations (Wikipedia)
      url: https://en.wikipedia.org/wiki/Friedmann_equations
      why: Shows how general relativity turns into a model of the whole universe.
    - title: "Sean Carroll: Lecture Notes on General Relativity"
      url: https://arxiv.org/abs/gr-qc/9712019
      why: Free university-level notes for readers who want to go further.
raw:
  body: "## What it is\n\nGeneral relativity (GR) models gravity as spacetime curvature. The field equations are\n$$G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}/c^4,$$\nwith $G_{\\mu\\nu} = R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu}$, and free test particles follow geodesics, $\\ddot x^\\mu + \\Gamma^\\mu_{\\alpha\\beta}\\dot x^\\alpha \\dot x^\\beta = 0$. The contracted Bianchi identity forces $\\nabla_\\mu T^{\\mu\\nu}=0$. For astrophysics the theory reduces to a short list of exact solutions and controlled approximations.\n\n## Core results\n\n**Cosmology.** The homogeneous, isotropic FLRW metric $ds^2 = -c^2dt^2 + a^2(t)[dr^2/(1-kr^2) + r^2 d\\Omega^2]$ turns the field equations into the Friedmann equations $H^2 = 8\\pi G\\rho/3 - kc^2/a^2 + \\Lambda c^2/3$ and $\\ddot a/a = -4\\pi G(\\rho + 3p/c^2)/3 + \\Lambda c^2/3$. Distances (comoving, angular-diameter, luminosity) follow from null geodesics in this metric.\n\n**Black holes.** Schwarzschild has a horizon at $r = 2GM/c^2$, a photon sphere at $3GM/c^2$ and an innermost stable circular orbit (ISCO) at $6GM/c^2$. The Kerr metric (spin $a = J/Mc$) has horizons at $r_\\pm = M \\pm \\sqrt{M^2 - a^2}$ ($G=c=1$), an ergoregion where frame dragging forbids static observers, a spin-dependent ISCO between $M$ and $9M$, and a band of unstable bound photon orbits whose image is the photon ring. Kerr geodesics are integrable thanks to the Carter constant.\n\n**Gravitational waves.** Linearizing $g_{\\mu\\nu} = \\eta_{\\mu\\nu} + h_{\\mu\\nu}$ and working in Lorenz then transverse-traceless (TT) gauge gives $\\Box \\bar h_{\\mu\\nu} = 0$ in vacuum, with two polarizations $h_+$ and $h_\\times$. The quadrupole formula $h^{TT}_{ij} = (2G/c^4 r)\\,\\ddot I^{TT}_{ij}(t - r/c)$ and the luminosity $L = (G/5c^5)\\langle \\dddot{I}_{ij}^{\\,\\mathrm{STF}} \\dddot{I}_{ij}^{\\,\\mathrm{STF}}\\rangle$ drive binary inspiral.\n\n**Compact stars.** Hydrostatic equilibrium of a static perfect-fluid star is the Tolman–Oppenheimer–Volkoff equation, $dp/dr = -G(\\rho + p/c^2)(m + 4\\pi r^3 p/c^2)/[r^2(1 - 2Gm/rc^2)]$. Given an equation of state, it yields the mass–radius relation and a maximum mass.\n\n**Weak field.** The parametrized post-Newtonian limit reproduces Mercury's anomalous perihelion advance, $\\Delta\\varpi = 6\\pi GM_\\odot/[c^2 a(1-e^2)]$ per orbit (about 43″ per century).\n\n**Perturbation theory.** Perturbations of Schwarzschild separate into the Regge–Wheeler (odd) and Zerilli (even) equations. For Kerr, Teukolsky (1973) showed that the Newman–Penrose scalar $\\psi_4$ obeys a separable master equation. With ingoing conditions at the horizon and outgoing conditions at infinity, this yields a discrete set of complex quasinormal-mode (QNM) frequencies $\\omega_{\\ell m n}(M, a)$. In vacuum GR, no-hair results make the whole spectrum a function of $M$ and $a$ alone, which is what ringdown spectroscopy tests.\n\n## Techniques to master\n\nTensor calculus and the Cartan or Newman–Penrose formalisms; Killing vectors and conserved quantities along geodesics; effective potentials for timelike and null orbits; numerical integration of the geodesic equation for ray tracing; the 3+1 split; gauge choices in linearized theory; WKB and Leaver continued-fraction methods for QNMs.\n\n## Reading path\n\nCarroll's *Spacetime and Geometry* gives the core course. Wald adds the global and causal structure, and Misner–Thorne–Wheeler is the encyclopaedic reference. Poisson–Will covers post-Newtonian and post-Minkowskian theory, and Teukolsky (1973) and the review by Berti, Cardoso and Starinets cover perturbations and QNMs.\n\n## Where it bites\n\nThe Kerr QNM spectrum is the null hypothesis for the problem on detecting overtones and quadratic nonlinear modes in ringdowns. Kerr null geodesics fix the shape of the $n=1$ photon subring targeted by the photon-ring Kerr test. The TOV equation maps a candidate equation of state to the masses, radii and tidal deformabilities used in the NICER-plus-GW problem. The 1PN perihelion term sets Mercury's secular frequency in the instability-probability problem, and the Friedmann equations are the baseline every cosmological tension is measured against."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Before Einstein, gravity was a force that pulled things across empty space. Einstein said something stranger. Space and time are a single stretchy fabric, and heavy things bend it. Objects then simply follow the straightest path they can through the bent fabric. We see that bending and call it gravity.

A common picture is a heavy ball on a stretched rubber sheet. A marble rolled near the ball curves around it. The picture is only a rough guide, because the real fabric has time in it too, and it bends in all directions, not just downward.

This idea has big consequences. Light follows bent paths too, so a heavy galaxy can act like a lens. Clocks run slower deep in gravity, which GPS satellites must correct for. If you squeeze enough mass into a small space, the fabric bends so much that nothing, not even light, can escape, and you get a black hole. Violent events such as two black holes colliding shake the fabric, and the shaking travels outward as gravitational waves. The whole universe can be treated as one bendy fabric, which gives us the expanding universe.

Where the analogy breaks: the rubber sheet needs an outside force to pull the ball down, but in Einstein's theory nothing outside is needed. Also, nobody has yet joined the theory to quantum physics. Most physicists expect it to need changing somewhere extreme, such as deep inside black holes or at the very start of the universe, but nobody knows how.

# Student explanation

**The big idea.** In general relativity (GR), gravity is the curvature of spacetime. The Einstein field equations say how matter and energy (on one side) set the curvature (on the other). Free-falling objects follow _geodesics_, which are the straightest possible paths in curved spacetime. A key consequence is that all objects fall the same way regardless of mass.

**The equations in words.** The curvature of spacetime is described by a quantity built from the metric, the rule for measuring distances and times. The field equations set that curvature equal to a multiple of the energy and momentum content of matter, with an optional extra term, the cosmological constant Λ. They are a set of coupled nonlinear equations, so only simple, highly symmetric cases can be solved exactly. Astrophysics uses a short list of these solutions plus careful approximations.

**Cosmology (FLRW).** Assuming the universe looks the same everywhere and in every direction gives the FLRW metric, which has one function a(t), the scale factor, describing the expansion. The field equations then reduce to the two Friedmann equations. The first links the expansion rate H to the density of matter, radiation, curvature and Λ. The second says whether the expansion speeds up or slows down. Distances to far galaxies are then found by following light rays through this expanding space.

**Black holes.**

- _Schwarzschild_ (no spin): an event horizon at radius 2GM/c², the point of no return. Light can orbit at 1.5 times that radius (the photon sphere), and stable orbits of matter end at three times that radius (the ISCO, innermost stable circular orbit).
- _Kerr_ (spinning): spacetime is dragged around the hole. There is an ergoregion where nothing can stay still. The ISCO moves inward for matter orbiting in the same direction as the spin.

**Gravitational waves.** For weak fields, small ripples in the metric travel at the speed of light, with two polarizations (two ways of stretching and squeezing). The quadrupole formula says they are made by changing mass quadrupoles, for instance two orbiting masses, and that they carry energy away.

**Stars and perturbations.** The TOV equation gives the structure of a non-rotating star in GR, including neutron stars. Black-hole perturbation theory studies small disturbances of a black hole, which ring at fixed frequencies called quasinormal modes.

**Limits.** GR agrees with every test so far, but nobody knows how to combine it with quantum mechanics, which matters only at extreme densities such as black-hole centres and the Big Bang.
