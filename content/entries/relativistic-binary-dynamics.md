---
type: entry
slug: relativistic-binary-dynamics
title: Relativistic two-body dynamics and waveform models
field: physics
kind: THEORY
status: ACTIVE
summary: Post-Newtonian, effective-one-body and numerical-relativity descriptions of compact binaries, the waveform models built from them, and the Bayesian inference that turns signals into masses, spins, tides and populations.
reliedOn: Every gravitational-wave parameter-estimation and population result depends on these waveform models and samplers, and Solar-System ephemerides carry their 1PN terms. Downstream it underlies ringdown overtone and nonlinear QNM detectability, neutron-star EOS inference from NICER plus GW, the origin of black-hole spins in GW populations, and Mercury's instability probability with GR and tides.
dependsOn:
  - general-relativity
  - gw-matched-filtering
  - n-body-simulation
references:
  - title: "Blanchet (Living Reviews in Relativity, arXiv v6): Post-Newtonian theory for gravitational waves"
    url: https://arxiv.org/abs/1310.1528
    kind: paper
  - title: "Buonanno and Damour 1999: Effective one-body approach to general relativistic two-body dynamics"
    url: https://arxiv.org/abs/gr-qc/9811091
    kind: paper
  - title: "Pretorius 2005: Evolution of binary black-hole spacetimes"
    url: https://arxiv.org/abs/gr-qc/0507014
    kind: paper
  - title: "Laskar and Gastineau 2009: Existence of collisional trajectories of Mercury, Mars and Venus with the Earth (Nature 459, 817)"
    url: https://doi.org/10.1038/nature08096
    kind: paper
  - title: "LIGO/Virgo 2017: GW170817, observation of gravitational waves from a binary neutron star inspiral"
    url: https://arxiv.org/abs/1710.05832
    kind: paper
  - title: "Ashton et al. 2019: Bilby, a user-friendly Bayesian inference library for gravitational-wave astronomy"
    url: https://arxiv.org/abs/1811.02042
    kind: paper
  - title: "Mitman et al. 2023: Nonlinearities in black hole ringdowns"
    url: https://arxiv.org/abs/2208.07380
    kind: paper
  - title: "LIGO/Virgo/KAGRA 2025: GWTC-4.0, population properties of merging compact binaries"
    url: https://arxiv.org/abs/2508.18083
    kind: paper
timeline:
  - date: 2005-07-04
    title: Binary black holes through merger
    body: Pretorius evolves an orbiting binary black hole through merger and ringdown with a generalized-harmonic code, opening numerical-relativity waveform calibration.
    source: https://arxiv.org/abs/gr-qc/0507014
  - date: 2009-06-01
    title: Mercury's 1% instability with GR
    body: In 2501 integrations including general relativity, about 1% lead to Mercury eccentricities large enough for collisions with Venus or the Sun within 5 Gyr.
    source: https://doi.org/10.1038/nature08096
  - date: 2017-10-16
    title: GW170817 tidal deformability
    body: The first binary-neutron-star signal bounds the tidal deformability and rules out the stiffest equations of state.
    source: https://arxiv.org/abs/1710.05832
  - date: 2022-08-15
    title: Quadratic quasinormal modes in NR ringdowns
    body: Two groups show a second-order (4,4) mode in numerical-relativity ringdowns whose amplitude scales quadratically with the (2,2) mode and can rival the linear (4,4) mode.
    source: https://arxiv.org/abs/2208.07380
  - date: 2025-09-09
    title: GW250114 black-hole spectroscopy
    body: The loudest event to date requires at least two quasinormal modes post-peak. It constrains the (2,2) fundamental and first overtone to tens of percent of the Kerr prediction and gives the most stringent single-event GR tests so far.
    source: https://arxiv.org/abs/2509.08099
explainer:
  oneLine: How two black holes or neutron stars orbit, spiral together and merge, and how this becomes a predicted signal.
  flow:
    - Orbit radiates gravitational waves
    - "Slow inspiral: post-Newtonian approximation"
    - "Merger: solve Einstein on a computer"
    - "Ringdown: remnant settles like a bell"
    - Fast waveform models used to read data
  glossary:
    - term: inspiral
      meaning: The phase in which two orbiting compact objects slowly spiral together as they lose energy to gravitational waves.
      link: https://en.wikipedia.org/wiki/Binary_black_hole
    - term: post-Newtonian expansion
      meaning: A method that corrects Newtonian gravity step by step with small relativistic terms.
      link: https://en.wikipedia.org/wiki/Post-Newtonian_expansion
    - term: numerical relativity
      meaning: Solving Einstein's equations on supercomputers, for example to follow a black-hole merger.
      link: https://en.wikipedia.org/wiki/Numerical_relativity
    - term: ringdown
      meaning: The final stage in which the merged black hole settles to a steady state, emitting a damped ringing signal.
      link: https://en.wikipedia.org/wiki/Quasinormal_mode
    - term: chirp mass
      meaning: A particular combination of the two masses that mainly controls how fast a signal's pitch rises.
      link: https://en.wikipedia.org/wiki/Chirp_mass
    - term: effective-one-body
      meaning: A model that replaces the two-body problem with one particle moving in a deformed black-hole spacetime.
      link: https://en.wikipedia.org/wiki/Effective_one-body_formalism
    - term: spin precession
      meaning: The wobbling of orbit and spin directions when spins are not aligned with the orbit.
      link: https://en.wikipedia.org/wiki/Precession
    - term: Bayesian inference
      meaning: A way of updating the probabilities of different explanations as data arrive.
      link: https://en.wikipedia.org/wiki/Bayesian_inference
    - term: tidal deformability
      meaning: How easily a star is stretched by the gravity of its partner; it depends on what the star is made of.
      link: https://en.wikipedia.org/wiki/Love_number
    - term: perihelion precession of Mercury
      meaning: The slow turning of Mercury's elliptical orbit, partly explained by general relativity.
      link: https://en.wikipedia.org/wiki/Tests_of_general_relativity
    - term: quasinormal mode
      meaning: One of the fixed, fading tones a disturbed black hole rings with; their pitches depend only on its mass and spin.
      link: https://en.wikipedia.org/wiki/Quasinormal_mode
    - term: arcsecond
      meaning: "A tiny angle: 1/3600 of a degree."
      link: https://en.wikipedia.org/wiki/Minute_and_second_of_arc
  readFirst:
    - title: First observation of gravitational waves (Wikipedia)
      url: https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves
      why: The discovery signal and how it matched predicted waveforms.
    - title: Binary black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/Binary_black_hole
      why: Basic orientation on the systems being modeled.
    - title: Numerical relativity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Numerical_relativity
      why: Explains how the merger gets simulated.
    - title: Post-Newtonian expansion (Wikipedia)
      url: https://en.wikipedia.org/wiki/Post-Newtonian_expansion
      why: Short introduction to the inspiral approximation.
site:
  published: true
  aiReviewed: true
---

## What it is

Two bodies in GR have no exact solution. The problem is solved by matched approximations. The post-Newtonian (PN) expansion in $v^2/c^2 \sim GM/rc^2$ covers the slow inspiral, numerical relativity (NR) covers the merger, and black-hole perturbation theory covers the ringdown. Effective-one-body (EOB) and phenomenological models resum and calibrate these pieces into waveforms fast enough for Bayesian inference.

## Core machinery

**Post-Newtonian theory.** The 1PN Einstein–Infeld–Hoffmann equations already give the relativistic perihelion advance. In the Solar System, the 1PN correction adds about 0.43″/yr to Mercury's precession. It shifts Mercury's secular frequency $g_1$ away from the $g_5$ (Jupiter) resonance that drives large eccentricity excursions. Laskar and Gastineau (2009) found that about 1% of 2501 integrations including GR and the Moon reach Mercury eccentricities high enough for collision with Venus or the Sun within 5 Gyr. Without GR, destabilization is far more common. For radiating binaries, the energy flux and the binding energy $E(x)$, with $x = (GM\omega/c^3)^{2/3}$, are known to high PN order (Blanchet's Living Review). Energy balance $dE/dt = -\mathcal{F}$ gives the phase. At leading order the chirp mass $\mathcal{M} = (m_1m_2)^{3/5}/M^{1/5}$ sets $\dot f \propto \mathcal{M}^{5/3} f^{11/3}$.

**Effective-one-body.** Buonanno and Damour (1999) map the two-body Hamiltonian onto a test particle in a deformed Schwarzschild or Kerr metric. They add a resummed radiation-reaction force and attach a QNM ringdown. Modern versions such as SEOBNRv5 are calibrated to NR.

**Numerical relativity.** In 2005, Pretorius (generalized harmonic gauge) and the moving-puncture groups (BSSN) evolved binary black holes through merger. NR catalogs now calibrate all waveform families. Surrogate models (NRSur7dq4) interpolate NR directly. Phenomenological models (IMRPhenomXPHM) fit frequency-domain ansätze with twisted-up precession.

**Spins and tides.** Spin–orbit coupling enters at 1.5PN through the mass-weighted effective spin $\chi_{\rm eff} = (m_1\chi_1\cos\theta_1 + m_2\chi_2\cos\theta_2)/M$, which is nearly conserved. In-plane spins precess the orbital plane and modulate the signal. Tidal deformability $\Lambda = (2/3)k_2 (Rc^2/Gm)^5$ enters at 5PN via the combination $\tilde\Lambda$. GW170817 constrained $\tilde\Lambda$ and hence the neutron-star equation of state.

**Ringdown.** The remnant rings in Kerr QNMs. Overtones $n \ge 1$ improve fits near the peak (Giesler et al. 2019). Second-order perturbation theory predicts quadratic modes at frequencies $\omega_1 + \omega_2$, seen in NR (Mitman et al. 2022; Cheung et al. 2022). GW250114 (SNR about 80) required at least two modes post-peak.

**Inference.** The posterior is $p(\theta|d) \propto \mathcal{L}(d|\theta)\pi(\theta)$, with a Whittle likelihood weighted by the noise PSD, sampled with nested sampling or MCMC (bilby). Hierarchical population inference marginalizes per-event posteriors under a hyper-model with selection effects. GWTC-4.0 population results find mostly aligned, non-extremal spins, with a significant fraction of negative $\chi_{\rm eff}$.

## Techniques to master

PN two-body Lagrangians and Hamiltonians and energy-balance phasing; the stationary-phase approximation; EOB Hamiltonians; 3+1 NR formulations (BSSN, generalized harmonic) and waveform extraction; mode mixing and mismatch; matched filtering; the Fisher matrix versus full posteriors; hierarchical Bayesian modelling with selection functions; secular perturbation theory and symplectic integration for the Solar System.

## Reading path

Poisson and Will for PN theory, then Blanchet's Living Review; Buonanno–Damour for EOB; Pretorius (2005) and an NR text (Baumgarte–Shapiro or Alcubierre); the bilby paper and the GWTC population papers for inference; Laskar and Gastineau (2009) for Solar-System chaos.

## Where it bites

Whether overtones and quadratic QNMs can be claimed depends on the start time, noise and NR-calibrated amplitude ratios. NICER-plus-GW EOS inference relies on accurate tidal phasing and waveform systematics. Spin-origin claims rest on $\chi_{\rm eff}$ and tilt distributions from hierarchical models. The Mercury problem asks how the roughly 1% instability probability shifts once GR is combined with tidal and other small perturbations.

# Plain explanation

When two heavy, dense objects such as black holes orbit each other, they slowly lose energy by sending out gravitational waves. As they lose energy, they move closer, orbit faster, and send out stronger waves. This ends in a merger. The slow approach is called the inspiral, and it makes a signal that rises in pitch and volume, like a chirp.

Einstein's equations cannot be solved exactly for two bodies. So scientists use a patchwork. While the objects are far apart and slow, a method that corrects Newton's gravity step by step works well. For the final violent moments, they use giant computer simulations that solve Einstein's equations directly. After the merger the leftover black hole rings like a struck bell, and a third method handles that.

Simulations take weeks, but real detectors need millions of predicted signals. So physicists build fast formulas that are fitted to the simulations, in effect a quick imitation of the slow answer.

The payoff is large. By comparing the predicted signal with the one a detector hears, scientists can read off the masses and spins of the objects, test whether Einstein was right in strong gravity, and count how often such mergers happen in the universe.

Where the analogy breaks: a struck bell is a fine picture for the end of the story, but the early inspiral is more like two dancers spinning ever faster, which a bell cannot show.

# Student explanation

**The problem.** In general relativity (GR) the two-body problem has no exact solution. Instead, we match three approximate descriptions.

**Post-Newtonian (PN) theory.** When the bodies are widely separated and slow, expand GR's predictions as Newton's gravity plus corrections in powers of v²/c². The first correction already explains the extra advance of Mercury's orbit by about 0.43 arcseconds per year (a century-old test of GR). For a binary losing energy by radiation, balancing the binding energy E against the flux of gravitational-wave energy gives the orbital phase over time. At lowest order the frequency growth depends on one combination of the masses called the chirp mass, which is why it is the best-measured quantity in a signal.

**Numerical relativity (NR).** Close to merger, the PN expansion fails. In 2005 Pretorius and then two other groups succeeded in simulating two black holes merging by solving Einstein's equations on a computer. NR catalogs now contain thousands of simulations.

**Black-hole perturbation theory.** After merger, the remnant is a single spinning black hole slightly deformed, and its ringdown is a sum of quasinormal modes with frequencies fixed by its mass and spin.

**Waveform models.** Real data analysis needs millions of waveforms, so it uses fast models built from the three pieces. In the effective-one-body (EOB) approach, the two-body motion is mapped onto a single particle moving in a deformed black-hole spacetime, adding radiation reaction and a ringdown. Phenomenological models fit simple formulas directly to NR. Modern models, such as SEOBNRv5, are calibrated to NR.

**Inference.** Bayesian inference compares data with the model over the parameter space (masses, spins, tidal deformability, distance, orientation), giving probability distributions for each. Combining many events gives the population of black holes and neutron stars.

**Limits.** Systematic errors in the models matter once signals are loud; precessing spins, eccentric orbits and high-mass-ratio systems remain harder than the simplest cases.
