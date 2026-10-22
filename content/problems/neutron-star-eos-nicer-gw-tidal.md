---
type: problem
slug: neutron-star-eos-nicer-gw-tidal
title: Neutron-star equation of state from joint NICER mass–radius and GW tidal-deformability inference
entry: relativistic-binary-dynamics
status: OPEN
origin: GW170817 (2017) and NICER's first radius measurements (2019) opened multimessenger constraints on dense matter.
ratings:
  difficulty: 50
  applicationValue: 14
  leverage: 52
workMix:
  theory: 25
  engineering: 15
  compute: 25
  empirical: 35
verification:
  route: OBSERVATION
sources:
  - title: "GW170817: Measurements of Neutron Star Radii and Equation of State (LVK 2018)"
    url: https://arxiv.org/abs/1805.11581
  - title: Multi-messenger constraints on the neutron-star equation of state and the Hubble constant (Dietrich et al. 2020)
    url: https://arxiv.org/abs/2002.11355
  - title: Impact of the PSR J0740+6620 radius constraint on the properties of high-density matter (Legred et al. 2021)
    url: https://arxiv.org/abs/2106.05313
  - title: "A NICER View of the Nearest and Brightest Millisecond Pulsar: PSR J0437–4715 (Choudhury et al. 2024)"
    url: https://arxiv.org/abs/2407.06789
  - title: The Radius of PSR J0437-4715 from NICER Data (Miller et al. 2025; ApJL 2026)
    url: https://arxiv.org/abs/2512.08790
  - title: A NICER view of the 1.4 solar-mass edge-on pulsar PSR J0614-3329 (Mauviard et al. 2025)
    url: https://arxiv.org/abs/2506.14883
  - title: "GWTC-5.0: Observations from the Second Part of the Fourth LIGO-Virgo-KAGRA Observing Run (LVK 2026)"
    url: https://arxiv.org/abs/2605.27225
timeline:
  - date: 2018-05-29
    title: GW170817 EOS constraints
    body: Tidal deformability bound radii near 11–13 km.
    source: https://arxiv.org/abs/1805.11581
  - date: 2024-07-09
    title: NICER J0437−4715
    body: First radius for the nearest millisecond pulsar.
    source: https://arxiv.org/abs/2407.06789
  - date: 2025-06-17
    title: NICER PSR J0614−3329
    body: Radius 10.29 (+1.01/−0.86) km at 1.44 M☉, on the compact side of NICER results.
    source: https://arxiv.org/abs/2506.14883
  - date: 2025-12-09
    title: Reanalysis of J0437−4715
    body: A nonthermal component broadens the radius posterior to 11.8–15.1 km.
    source: https://arxiv.org/abs/2512.08790
explainer:
  oneLine: Figure out what matter is like inside neutron stars by combining their sizes, masses and how they stretch in collisions.
  flow:
    - Neutron stars squeeze matter beyond lab limits
    - Matter's stiffness sets star radius
    - X-rays, gravitational waves, radio give clues
    - Probes sometimes disagree
    - Combine into one equation of state
  glossary:
    - term: neutron star
      meaning: An extremely dense star, about 1.4 solar masses in a ball about 25 km across, left behind by some supernovae.
      link: https://en.wikipedia.org/wiki/Neutron_star
    - term: equation of state
      meaning: The rule that says how pressure depends on density for a given material.
      link: https://en.wikipedia.org/wiki/Equation_of_state
    - term: NICER
      meaning: NASA's Neutron star Interior Composition Explorer, an X-ray telescope on the space station.
      link: https://en.wikipedia.org/wiki/Neutron_Star_Interior_Composition_Explorer
    - term: tidal deformability
      meaning: How easily a star is stretched by its partner's gravity; larger for puffier stars.
      link: https://en.wikipedia.org/wiki/Love_number
    - term: GW170817
      meaning: The first gravitational-wave detection of two merging neutron stars, in 2017, seen also in light.
      link: https://en.wikipedia.org/wiki/GW170817
    - term: nuclear saturation density
      meaning: The density found at the centre of heavy atomic nuclei; the usual yardstick for neutron-star matter.
      link: https://en.wikipedia.org/wiki/Nuclear_matter
    - term: chiral effective field theory
      meaning: A theory of nuclear forces that works well at the density of ordinary nuclei.
      link: https://en.wikipedia.org/wiki/Chiral_perturbation_theory
    - term: pulsar
      meaning: A spinning neutron star that sends a beam of radiation past Earth.
      link: https://en.wikipedia.org/wiki/Pulsar
    - term: Bayesian inference
      meaning: A way of updating probabilities for different explanations when new data arrive.
      link: https://en.wikipedia.org/wiki/Bayesian_inference
    - term: relativistic binary dynamics
      meaning: The study of how two compact objects orbit and merge.
      link: /research/relativistic-binary-dynamics
    - term: Tolman–Oppenheimer–Volkoff equation
      meaning: The general-relativity equation for the balance of pressure and gravity inside a star; with an equation of state it gives the mass–radius curve.
      link: https://en.wikipedia.org/wiki/Tolman%E2%80%93Oppenheimer%E2%80%93Volkoff_equation
    - term: hot spot
      meaning: A small heated patch on a pulsar’s surface, near its magnetic poles, whose X-ray glow NICER tracks.
      link: https://en.wikipedia.org/wiki/Neutron_Star_Interior_Composition_Explorer
  readFirst:
    - title: Neutron star (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neutron_star
      why: Structure and equation of state in one place.
    - title: NICER mission (NASA)
      url: https://science.nasa.gov/mission/nicer/
      why: The mission page for the X-ray measurements.
    - title: GW170817 (Wikipedia)
      url: https://en.wikipedia.org/wiki/GW170817
      why: The merger that gave the first tidal-deformability measurement.
site:
  aiReviewed: true
---

Infer the pressure–density relation of cold matter at 1–8 times nuclear saturation density from NICER pulse-profile modelling of PSR J0030+0451, J0740+6620 and J0437−4715, GW170817 and GW190425 tidal deformabilities, radio mass measurements of 2 M☉ pulsars, and nuclear-theory priors at low density (chiral effective field theory) and perturbative-QCD constraints at high density. The inference must propagate hotspot-model systematics in the NICER analyses, the dependence of Λ̃ on the waveform model, and non-parametric versus parametric EOS priors, to a radius accuracy of about 0.2–0.3 km for a 1.4 M☉ star. A resolution is an EOS posterior for which the radius at 1.4 M☉ and the maximum mass are determined to better than 3%, with no tension among the independent probes.

# State of the art

GW170817 gave Λ̃ ≲ 800 and radii around 11–13 km (arXiv:1805.11581), and Dietrich et al. combined multimessenger data with the Hubble constant (arXiv:2002.11355). Legred et al. (arXiv:2106.05313) combined the J0740+6620 radius with other data. NICER's J0437−4715 analysis (Choudhury et al., arXiv:2407.06789, July 2024) found R = 11.36 (+0.95/−0.63) km at M = 1.418 M☉, while a December 2025 reanalysis that includes a modulated nonthermal component finds 11.8–15.1 km at 68% for the same pulsar and shows the nonthermal component is strongly preferred by the Bayesian evidence (Miller et al., arXiv:2512.08790; ApJL 2026). That two analyses of the same data differ so much shows hotspot-model systematics have not converged. Other NICER targets add leverage but also complexity: PSR J0614−3329 gives R = 10.29 (+1.01/−0.86) km at 1.44 M☉ (Mauviard et al., arXiv:2506.14883), smaller than most other NICER radii, and PSR J1231−1411 gives 12.6–13.5 km at about 1.04 M☉ with results that depend on the prior and are only likely converged (Salmi et al., arXiv:2409.14923). On the gravitational-wave side, O4 ended on 18 November 2025 without a confirmed binary neutron-star merger: GWTC-4.0 (O4a) contains only two neutron-star–black-hole events and GWTC-5.0 (O4b, May 2026) reports no new sources with a neutron star (arXiv:2605.27225); O4c results are pending. GW170817 therefore remains the only tidal measurement with a counterpart. No EOS is accepted at the 3% radius level.

# Applications

The EOS fixes the neutron-star mass–radius relation and maximum mass, informs the quark-matter or hyperon content of dense matter, the kilonova and short-GRB engine, supernova remnant masses and the gravitational-wave signal for future detectors. No practical application.

# Resolution criteria

Resolved when independent NICER, GW and nuclear-theory constraints are consistent and the pressure at 2–6 times saturation density is known to within about 20%, with radius at 1.4 M☉ constrained to better than 3%.

# Rating rationale

Several independent probes exist and the field is limited by systematics (NICER hotspot models disagree by 1–3 km on the same pulsar) and by the absence of new loud BNS events in O4, so mid-range difficulty. Application value 14 for nuclear-physics spin-off; leverage 52 because the EOS gates compact-object astrophysics, kilonova and r-process modelling.

# Work mix rationale

New observations (NICER, O4/O5 events, radio masses) and Bayesian modelling dominate, with nuclear-theory input.

# Verification

Needs new NICER mass-radius and gravitational-wave tidal-deformability data, consistent with nuclear-theory constraints, so that the pressure at 2 to 6 times saturation density is known to about 20% and the radius at 1.4 solar masses to better than 3%.

# Plain explanation

A neutron star is the crushed core of a star that exploded. It holds about as much mass as the Sun in a ball about the width of a city. Inside, matter is squeezed to densities beyond anything we can make on Earth. What happens to matter at those extremes? Does it stay as neutrons, or turn into something exotic? The answer is hidden in a relationship called the equation of state, which says how hard matter pushes back when squeezed, like how stiff a sponge is.

The equation of state decides how big a neutron star of a given mass is. So measuring size and mass of neutron stars is a way to learn about the matter inside.

There are three tools. NICER, an X-ray telescope on the space station, watches hot spots on spinning neutron stars and, from the way their light bends in the star's gravity, works out the radius. Gravitational waves from colliding neutron stars show how much each one was stretched by the other's gravity, which also depends on the matter inside. And radio measurements of heavy neutron stars show how massive they can get.

Each tool has its own uncertainties, and they do not always agree. Two analyses of the same star have given quite different sizes, showing that the models of the hot spots are not yet settled.

Where the analogy breaks: squeezing a sponge is a good picture, but the stiffness of neutron-star matter changes by huge factors with depth.

# Student explanation

**The goal.** Infer the pressure–density relation (the equation of state, EOS) of cold matter at 1 to 8 times nuclear saturation density (the density at the centre of a heavy nucleus). Given the EOS, the Tolman–Oppenheimer–Volkoff equations give the mass–radius curve of neutron stars, so measuring masses and radii constrains the EOS.

**Data sets combined.**

- NICER pulse-profile modelling of PSR J0030+0451, J0740+6620 and J0437−4715: X-ray hot spots on the surface are lensed by the star's gravity, and the shape of the pulse gives the mass-to-radius ratio.
- Gravitational-wave tidal deformabilities from GW170817 and GW190425: in the inspiral, each star is deformed by its partner's tidal field in proportion to a quantity Λ, which depends on the radius and EOS.
- Radio mass measurements of pulsars near 2 solar masses, which require the EOS to be stiff enough to support them.
- Nuclear theory at low density (chiral effective field theory) and perturbative QCD at very high density.

**Needed.** The inference must propagate hotspot-model systematics in NICER analyses, the dependence of the combined tidal deformability on the waveform model, and the choice of parametric or non-parametric EOS priors, to a radius accuracy of about 0.2 to 0.3 km for a 1.4 solar-mass star. A resolution is an EOS posterior in which the radius at 1.4 solar masses and the maximum mass are determined to better than 3%, with no tension among independent probes.

**State of the art.** GW170817 gave a combined tidal deformability below about 800 and radii around 11 to 13 km. NICER's analysis of J0437−4715 (July 2024) found R = 11.36 (+0.95/−0.63) km at 1.418 solar masses, while a December 2025 reanalysis including a modulated nonthermal component finds 11.8 to 15.1 km for the same pulsar, with the nonthermal component strongly preferred by Bayesian evidence. That two analyses of the same data differ so much shows hotspot-model systematics have not converged. J0614−3329 gives a smaller radius of 10.29 km than most others. On the gravitational-wave side, GW170817 remains the only tidal measurement of a binary neutron-star merger with a clear counterpart: the fourth observing run ended in November 2025 without a confirmed binary neutron-star merger.

**Why it matters.** It is the main way to measure cold, dense nuclear matter beyond laboratory reach, and it feeds supernova and merger models.
