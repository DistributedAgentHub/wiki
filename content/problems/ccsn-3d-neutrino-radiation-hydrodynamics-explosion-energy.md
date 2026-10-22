---
type: problem
slug: ccsn-3d-neutrino-radiation-hydrodynamics-explosion-energy
title: Explosion energies and nickel yields from 3D neutrino-radiation-hydrodynamics of core-collapse supernovae
entry: radiation-hydrodynamics
status: IN_PROGRESS
origin: The delayed neutrino-heating mechanism (Bethe & Wilson 1985) has been studied for four decades; self-consistent 3D explosions appeared from 2015.
ratings:
  difficulty: 50
  applicationValue: 12
  leverage: 44
workMix:
  theory: 15
  engineering: 10
  compute: 65
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Hydrodynamics of core-collapse supernovae and their progenitors (Müller 2020)
    url: https://arxiv.org/abs/2006.05083
  - title: Core-Collapse Supernova Explosion Theory (Burrows & Vartanyan 2021)
    url: https://arxiv.org/abs/2009.14157
  - title: "Self-consistent 3D Supernova Models From −7 Minutes to +7 Seconds: a 1-bethe Explosion of a ~19 Solar-mass Progenitor (Bollig et al. 2021)"
    url: https://arxiv.org/abs/2010.10506
  - title: Three-dimensional core-collapse supernova simulated using a 15 M☉ progenitor (Lentz et al. 2015)
    url: https://arxiv.org/abs/1505.05110
  - title: Physical Correlations and Predictions Emerging from Modern Core-Collapse Supernova Theory (Burrows et al. 2024)
    url: https://arxiv.org/abs/2401.06840
links:
  - to: c12-alpha-gamma-o16-rate-pair-instability-mass-gap
    kind: BUILDS_ON
    note: The ¹²C(α,γ)¹⁶O rate sets the C/O ratio at core helium exhaustion, which controls convective carbon-shell burning and hence the pre-collapse core compactness and mantle binding energy that 3D explosion energies correlate with.
  - to: neutron-star-eos-nicer-gw-tidal
    kind: BUILDS_ON
    note: The simulations take a nuclear equation of state as input; its stiffness at supra-saturation density sets proto-neutron-star contraction, neutrino luminosities and the maximum remnant mass, so EOS constraints from NICER and tidal deformabilities restrict the admissible inputs.
timeline:
  - date: 2015-05-19
    title: 3D CHIMERA explosion of a 15 M☉ progenitor
    body: Lentz et al. obtain a 3D neutrino-driven explosion of a 15 M☉ progenitor, with shock revival delayed by about 100 ms relative to 2D and slower energy growth (ApJL 2015).
    source: https://arxiv.org/abs/1505.05110
  - date: 2020-10-20
    title: 1-bethe 3D explosion to 7 s
    body: Bollig et al. evolve a 19 M☉ explosion to 7 s with energy near 1 bethe.
    source: https://arxiv.org/abs/2010.10506
  - date: 2024-01-12
    title: Twenty-model 3D suite
    body: Burrows et al. relate explosion energy and ⁵⁶Ni to progenitor mantle binding energy across 20 3D models.
    source: https://arxiv.org/abs/2401.06840
explainer:
  oneLine: Simulate a dying star's collapse in 3D well enough to predict how powerful its explosion is.
  flow:
    - Core collapses, shock stalls
    - Neutrinos reheat gas behind shock
    - 3D turbulence helps revive explosion
    - Run long enough for energy to settle
    - Compare with real supernova energies
  glossary:
    - term: core-collapse supernova
      meaning: The explosion of a massive star after its core runs out of fuel and collapses.
      link: https://en.wikipedia.org/wiki/Type_II_supernova
    - term: neutrino
      meaning: An almost massless particle that rarely interacts; supernovae release enormous numbers.
      link: https://en.wikipedia.org/wiki/Neutrino
    - term: neutron star
      meaning: An extremely dense star, one to two times the Sun’s mass in a ball about 20–25 km across, left after some supernovae.
      link: https://en.wikipedia.org/wiki/Neutron_star
    - term: progenitor
      meaning: The star that exists before it explodes.
      link: https://en.wikipedia.org/wiki/Supernova
    - term: bethe (unit)
      meaning: A unit of energy used for supernovae equal to 10⁵¹ erg.
      link: https://en.wikipedia.org/wiki/Foe_(unit)
    - term: nickel-56
      meaning: A radioactive isotope made in supernovae whose decay powers the light we see for weeks.
      link: https://en.wikipedia.org/wiki/Nickel-56
    - term: nuclear equation of state
      meaning: The relation between pressure and density for matter at nuclear densities.
      link: https://en.wikipedia.org/wiki/Equation_of_state
    - term: bounce (supernova)
      meaning: The moment when the collapsing core reaches nuclear density and rebounds, launching a shock.
      link: https://en.wikipedia.org/wiki/Type_II_supernova
    - term: Type IIP supernova
      meaning: The most common kind of supernova from a massive star, with a long plateau in its light curve.
      link: https://en.wikipedia.org/wiki/Type_II_supernova
    - term: radiation hydrodynamics
      meaning: Computer methods following gas together with the radiation or neutrinos that it exchanges energy with.
      link: /research/radiation-hydrodynamics
    - term: erg
      meaning: A small unit of energy; 10⁵¹ erg is roughly what the Sun emits in ten billion years.
      link: https://en.wikipedia.org/wiki/Erg
    - term: neutron-star kick
      meaning: The high speed a newborn neutron star gets from a lopsided explosion.
      link: https://en.wikipedia.org/wiki/Neutron_star#Kicks
  readFirst:
    - title: Supernova (Wikipedia)
      url: https://en.wikipedia.org/wiki/Supernova
      why: General background on types and mechanisms.
    - title: Type II supernova (Wikipedia)
      url: https://en.wikipedia.org/wiki/Type_II_supernova
      why: Describes core collapse and the neutrino-driven explosion.
    - title: Neutron star (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neutron_star
      why: What is left behind.
site:
  aiReviewed: true
---

Predict, from first principles, the distributions of explosion energy (0.1–2 × 10⁵¹ erg), ⁵⁶Ni mass, remnant neutron-star mass and kick for progenitors of 9–30 M☉ in 3D simulations with energy-dependent neutrino transport (M1 or Boltzmann), general-relativistic gravity and a nuclear equation of state, run for seconds after bounce until the explosion energy saturates. The central problem is that most 3D models are evolved for only 0.3–1 s and reach diagnostic energies of 10⁵⁰–10⁵¹ erg that are still rising; the required objects are converged explosion energies with quantified dependence on neutrino-opacity input (muons, nucleon correlations), turbulence, rotation, magnetic fields and progenitor perturbations. A success is a model suite whose explosion-energy–progenitor mapping reproduces the observed distribution of SN IIP energies and nickel masses and the neutron-star mass distribution.

# State of the art

Reviews: Müller (arXiv:2006.05083) and Burrows & Vartanyan (arXiv:2009.14157). Bollig et al. (arXiv:2010.10506) produced a 3D explosion of a 19 M☉ progenitor evolved to 7 s with an explosion energy reaching about 1 bethe (10⁵¹ erg). Fornax simulations by the Burrows group and the Garching/Monash codes show explosions across many progenitors, often with energies of 0.1–1 bethe and with a trend for compact progenitors to explode less energetically. Differences between codes in neutrino treatment, equation of state and resolution lead to different outcomes for the same progenitor, and few models reach the highest observed energies. Strong dependence on neutrino-opacity corrections and progenitor structure (including 3D pre-collapse convection) means the explosion-energy prediction is not accepted as solved. Burrows et al. (arXiv:2401.06840; ApJL 964, L16, 2024) analysed 20 3D Fornax models of 9–60 M☉ progenitors and found correlations of explosion energy and ⁵⁶Ni mass with the binding energy of the mantle, and Vartanyan et al. (arXiv:2411.03434) carried a 17 M☉ model from bounce past shock breakout, reaching about 10⁵¹ erg and about 0.1 M☉ of ⁵⁶Ni. These are single-code suites; no 2025–2026 result establishes converged energy and nickel distributions across codes.

# Applications

Predictions feed galactic chemical evolution (nickel and iron-group yields), the neutron-star and black-hole mass distribution, supernova neutrino and gravitational-wave signal templates for a Galactic event, and r-process modelling. No direct application.

# Resolution criteria

Resolved when 3D simulations of at least dozens of progenitors with two independent codes evolve to explosion-energy saturation and reproduce observed SN energies, nickel masses and remnant masses within about 30%, with a documented sensitivity to neutrino physics and progenitor perturbations.

# Rating rationale

The mechanism is broadly established, but converged explosion energies and nickel masses across progenitors need seconds-long 3D runs with consistent microphysics, so difficulty is above the old combined entry (41). Application value 12 and leverage 44 (above the old 40) reflect that nucleosynthesis yields, remnant mass distributions and Galactic-supernova neutrino and GW templates all use these outputs.

# Work mix rationale

Dominated by large 3D simulations on leadership-class computers, with theory input for neutrino physics.

# Verification

At least dozens of progenitors must be evolved in 3D to explosion-energy saturation with two independent codes, reproducing observed supernova energies, nickel masses and remnant masses within about 30%. The spec should fix the progenitor set, the neutrino transport and microphysics, the resolution convergence tests and a sensitivity study to neutrino physics and progenitor perturbations.

# Plain explanation

When a very massive star runs out of fuel, its core collapses in a fraction of a second into an extremely dense ball, a neutron star. Nearly all of the huge energy released comes out as ghostly particles called neutrinos. A small part of this goes into heating the gas around the core, and this heating can push the rest of the star outward in a supernova explosion. It is a bit like relighting a dying campfire by blowing on it: a small, steady breath may or may not revive it, depending on details.

Scientists want to predict from first principles how violent the explosion will be, how much of the metal nickel it makes, and what leftover neutron star remains. That needs a 3D computer simulation following the swirling gas, the neutrinos and Einstein's gravity all at once, for seconds after the collapse.

This has turned out to be extremely hard. Early simulations failed to explode at all. Modern ones explode, but most are stopped after a fraction of a second, when the explosion is still gaining strength. Different research groups, using slightly different physics, get different answers for the same star.

The goal is a set of simulations whose explosions match the energies and nickel amounts seen in real supernovae, and whose neutron stars match those in the sky.

Where the analogy breaks: a campfire either catches or not, but a supernova keeps gaining strength for seconds after it "catches", which is why simulations must run so long.

# Student explanation

**The target.** For progenitor stars of 9 to 30 solar masses, predict the distributions of explosion energy (0.1 to 2×10⁵¹ erg, or 0.1 to 2 "bethe"), the mass of radioactive ⁵⁶Ni, the neutron-star mass, and the neutron-star kick, in 3D simulations that include energy-dependent neutrino transport (M1 or Boltzmann), general-relativistic gravity and a nuclear equation of state, run for seconds after bounce until the explosion energy saturates.

**Mechanism.** After core bounce, the shock stalls. Neutrinos from the proto-neutron star deposit a small fraction of their energy behind the shock, and turbulence and convection help to revive it (the neutrino-driven mechanism). The shock then must plough through the outer star. The explosion energy is the net energy of ejected matter, which keeps rising as matter is heated and as the infall that powers it ends, a process lasting seconds.

**The central problem.** Most 3D models are evolved for only 0.3 to 1 s and show diagnostic energies of 10⁵⁰ to 10⁵¹ erg that are still rising. Converged explosion energies are needed, with quantified dependence on the neutrino opacity inputs (including muons and nucleon correlations), turbulence, rotation, magnetic fields and perturbations in the progenitor.

**State of the art.** Bollig and collaborators evolved a 19 solar-mass model to 7 s, reaching about 1 bethe. Fornax simulations by the Burrows group and the Garching/Monash codes explode many progenitors with energies of 0.1 to 1 bethe, with compact progenitors tending to explode less energetically. A suite of 20 3D Fornax models showed correlations of explosion energy and nickel mass with the binding energy of the stellar mantle. A 17 solar-mass model was followed past shock breakout to about 10⁵¹ erg and 0.1 solar masses of nickel. These are single-code suites, and the codes differ in neutrino treatment, equation of state and resolution, giving different outcomes for the same star.

**Success criterion.** A model suite whose mapping from progenitor to explosion energy reproduces the observed distribution of Type IIP supernova energies and nickel masses, and the neutron-star mass distribution.

**Why it matters.** Supernovae forge and spread many of the elements heavier than helium, set the masses of neutron stars and black holes, and drive galaxy evolution.
