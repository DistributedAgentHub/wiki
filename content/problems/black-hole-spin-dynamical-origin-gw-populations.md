---
type: problem
slug: black-hole-spin-dynamical-origin-gw-populations
title: "Isolated versus hierarchical origin of black-hole spins: χ_eff and spin-tilt distributions in GWTC-5.0"
entry: relativistic-binary-dynamics
status: OPEN
origin: Population analyses of GWTC-1/2/3 (2019–2021) found small effective spins; GW231123 (detected 23 November 2023, published July 2025) showed very high component spins at high mass.
ratings:
  difficulty: 44
  applicationValue: 4
  leverage: 38
workMix:
  theory: 35
  engineering: 5
  compute: 35
  empirical: 25
verification:
  route: OBSERVATION
sources:
  - title: "GWTC-4.0: Population Properties of Merging Compact Binaries (LVK 2025)"
    url: https://arxiv.org/abs/2508.18083
  - title: "GW231123: a Binary Black Hole Merger with Total Mass 190–265 M☉ (LVK 2025)"
    url: https://arxiv.org/abs/2507.08219
  - title: Most Black Holes are Born Very Slowly Rotating (Fuller & Ma 2019)
    url: https://arxiv.org/abs/1907.03714
  - title: Hierarchical mergers of stellar-mass black holes and their gravitational-wave signatures (Gerosa & Fishbach 2021)
    url: https://arxiv.org/abs/2105.03439
  - title: "GWTC-5.0: Population Properties of Merging Compact Binaries (LVK 2026)"
    url: https://arxiv.org/abs/2605.27226
  - title: Signatures of a subpopulation of hierarchical mergers in the GWTC-4 gravitational-wave dataset (Plunkett et al. 2026)
    url: https://arxiv.org/abs/2601.07908
links:
  - to: ringdown-overtone-and-nonlinear-qnm-detectability
    kind: RELATED
    note: Ringdown spectroscopy measures remnant spins directly, the observable that identifies second-generation black holes in hierarchical mergers.
  - to: c12-alpha-gamma-o16-rate-pair-instability-mass-gap
    kind: BUILDS_ON
    note: Attributing high-mass, high-spin mergers to hierarchical assembly relies on where the pair-instability gap begins and ends; the S(300) uncertainty moves the gap edges by tens of M☉ (Farmer et al.; Shen et al.), shifting the mass scale above which first-generation black holes are excluded.
  - to: ccsn-3d-neutrino-radiation-hydrodynamics-explosion-energy
    kind: BUILDS_ON
    note: In the isolated-binary channel, spin–orbit misalignment comes mainly from natal kicks at black-hole formation, and the kick distribution (and whether fallback black holes get kicks at all) is an output of the core-collapse problem.
timeline:
  - date: 2019-07-08
    title: Slowly rotating natal black holes
    body: Fuller & Ma argue for small natal spins.
    source: https://arxiv.org/abs/1907.03714
  - date: 2025-07-10
    title: GW231123
    body: A very massive, highly spinning merger.
    source: https://arxiv.org/abs/2507.08219
  - date: 2025-08-25
    title: GWTC-4.0 population
    body: Population properties from O1–O4a.
    source: https://arxiv.org/abs/2508.18083
  - date: 2026-05-26
    title: GWTC-5.0 population
    body: Rapidly spinning hierarchical-like subpopulation identified at two mass scales in 267 mergers.
    source: https://arxiv.org/abs/2605.27226
explainer:
  oneLine: When black holes merge, how fast do they spin and in which direction? That reveals how the pairs were formed.
  flow:
    - Detectors measure black-hole masses and spins
    - "Isolated pairs: small, aligned spins"
    - "Cluster pairs: random tilts, second-generation spins"
    - Fit mixture of channels to the catalog
    - Rare extreme events test the models
  glossary:
    - term: effective spin (χ_eff)
      meaning: A single number summarising how much the black holes' spins line up with their orbit.
      link: https://en.wikipedia.org/wiki/Binary_black_hole
    - term: spin tilt
      meaning: The angle between a black hole's spin axis and the axis of its orbit.
      link: https://en.wikipedia.org/wiki/Binary_black_hole
    - term: hierarchical merger
      meaning: A merger in which one of the black holes is itself the result of an earlier merger.
      link: https://en.wikipedia.org/wiki/Binary_black_hole
    - term: pair-instability supernova
      meaning: The explosion of a very massive star that leaves no black hole, creating a gap in black-hole masses.
      link: https://en.wikipedia.org/wiki/Pair-instability_supernova
    - term: tidal spin-up
      meaning: Speeding up a star's rotation through tidal forces from a close companion.
      link: https://en.wikipedia.org/wiki/Tidal_locking
    - term: globular cluster
      meaning: A dense old ball of stars where black holes can meet and pair up.
      link: https://en.wikipedia.org/wiki/Globular_cluster
    - term: active galactic nucleus disc
      meaning: The gas disc around a feeding supermassive black hole, a possible nursery for merging pairs.
      link: https://en.wikipedia.org/wiki/Active_galactic_nucleus
    - term: LIGO
      meaning: The US laser interferometer detectors that first detected gravitational waves.
      link: https://en.wikipedia.org/wiki/LIGO
    - term: population inference
      meaning: Using many events to learn the properties of the whole group of sources.
      link: https://en.wikipedia.org/wiki/Bayesian_inference
    - term: black-hole mass gap
      meaning: A range of masses where theory expects few or no black holes from single stars.
      link: https://en.wikipedia.org/wiki/Pair-instability_supernova
    - term: branching fraction
      meaning: The share of all events that come from one particular formation route.
      link: https://en.wikipedia.org/wiki/Branching_fraction
    - term: isotropic
      meaning: The same in every direction; here, spin axes pointing randomly.
      link: https://en.wikipedia.org/wiki/Isotropy
  readFirst:
    - title: Binary black hole (Wikipedia)
      url: https://en.wikipedia.org/wiki/Binary_black_hole
      why: Introduces the systems and how they form.
    - title: Pair-instability supernova (Wikipedia)
      url: https://en.wikipedia.org/wiki/Pair-instability_supernova
      why: Explains the mass gap used to spot second-generation black holes.
    - title: "GWOSC: catalog of detected events"
      url: https://gwosc.org/eventapi/html/GWTC/
      why: The public list of gravitational-wave events behind these population studies.
site:
  aiReviewed: true
---

Explain the joint distribution of masses, spin magnitudes, spin tilts and effective spin χ_eff observed in merging binary black holes. The candidate channels are isolated binary evolution with tidal spin-up and angular-momentum transport in stellar interiors (which predicts mostly small, aligned spins), dynamical formation in clusters (isotropic tilts, hierarchical mergers with spin ≈ 0.7 for second-generation black holes), and AGN-disc channels. The problem is to determine the branching fractions from the population posteriors, in particular the width and mass dependence of the χ_eff distribution, the fraction of hierarchical mergers above the pair-instability gap, and the rare high-spin events (GW231123, total mass about 190–265 M☉), using a model for black-hole natal spins that is consistent with stellar physics. A resolution identifies which channel produces each feature (the χ_eff tail, the 35 M☉ peak, the high-mass events) with a quantified branching ratio.

# State of the art

The GWTC-4.0 population paper (arXiv:2508.18083, August 2025; 158 mergers) finds 90% of black-hole spins below 0.57 and 24–42% of binaries with negative χ_eff. The GWTC-5.0 population paper (arXiv:2605.27226, May 2026; 267 mergers through O4b) finds a rapidly spinning (χ ∼ 0.7) subpopulation consistent with hierarchical mergers at two mass scales, near 10–20 M☉ and above about 45 M☉, with a rate of 0.2–3.1 Gpc⁻³ yr⁻¹, and at least 9% of mergers from channels that prefer aligned spins. An independent GWTC-4 analysis places a transition at m₁ ≈ 46 (+13/−7) M☉ above which mergers are nearly all hierarchical (Plunkett et al., arXiv:2601.07908, preprint). GW231123, with a total mass of 190–265 M☉ and high component spins, is difficult to explain through isolated binary evolution and is a candidate for hierarchical merger (arXiv:2507.08219, July 2025). Fuller & Ma (arXiv:1907.03714) argue that stellar angular-momentum transport makes most black holes born with very small spins, so that observed spinning systems require tidal spin-up or hierarchical formation; Gerosa & Fishbach (arXiv:2105.03439) show how hierarchical mergers produce spin signatures. Measurements of spin tilts are weak for most events and the χ_eff–mass–mass-ratio correlation is debated, so the branching fractions remain uncertain by factors of 2–3 and the isolated-binary contribution (tidal spin-up versus small natal spins) is not pinned down. No consensus exists.

# Applications

Spins and masses test models of massive-star evolution, pair-instability supernovae, cluster dynamics and AGN-disc migration, and feed rate forecasts for LISA and third-generation detectors. No practical application.

# Resolution criteria

Resolved when population models that incorporate stellar-evolution and dynamical inputs reproduce the full joint mass–spin–tilt distribution from O1–O4 (GWTC-5.0 and the forthcoming O4c catalog) and O5 within posterior uncertainties and give channel fractions with uncertainty below 20%, backed by at least one independent smoking-gun signature (for example, eccentricity or a spin-tilt distribution).

# Rating rationale

Data are abundant (267 mergers through O4b) and the models are defined, but channel degeneracies and uncertain stellar-physics inputs remain, so mid-40s. Leverage 38: branching fractions constrain massive-star evolution, pair-instability and cluster dynamics. Application value 4.

# Work mix rationale

Population modelling and stellar-evolution theory dominate; more detections add statistics.

# Verification

Needs gravitational-wave catalog data (GWTC-5.0, O4c and O5): population models must reproduce the joint mass-spin-tilt distribution within posterior uncertainties, give channel fractions to better than 20%, and be backed by at least one independent smoking-gun event.

# Plain explanation

Gravitational-wave detectors have now caught hundreds of black holes merging. Each signal carries the masses and, less precisely, the spins of the two black holes before the merger. A spinning black hole is like a top: it has a speed and a direction of its axis. What do the observed spins tell us about where these black-hole pairs came from?

There are different ways to make a pair. In one, two stars are born together as a binary and live their lives side by side. Then the stars die and leave black holes that orbit each other. Theory expects those black holes to spin slowly, with spin axes mostly lined up with the orbit.

In another way, black holes find each other in a crowded star cluster. Then their spin directions should be random. Some of them are the product of earlier mergers, and those would spin fast, at about 70% of the maximum.

Hierarchical mergers could also happen in the disc of gas around a supermassive black hole.

By looking at the shape of the whole population of spins, researchers try to work out the share from each route. Recent catalogues show that most spins are small, but a subgroup spins fast, consistent with earlier mergers. A recent record-holding event with very massive, rapidly spinning components is hard to make from stars alone.

Where the analogy breaks: tops lose spin to friction, but black holes keep theirs unless they feed or merge.

# Student explanation

**The data.** For each merging binary black hole, gravitational-wave analysis measures the masses and spins. The best-measured spin combination is the effective spin χ_eff, a mass-weighted average of the spin components along the orbital axis. Spin tilts (angles between spin and orbit axis) are poorly measured for most events.

**Candidate formation channels.**

- _Isolated binary evolution_: tidal spin-up and angular-momentum transport in the stars predict mostly small, aligned spins.
- _Dynamical formation in clusters_: isotropic tilts; hierarchical mergers (second-generation black holes formed from earlier mergers) have spin of about 0.7 and masses that can reach into or above the pair-instability gap in the black-hole mass spectrum.
- _AGN-disc channels_: binaries formed or hardened in the gas discs of active galactic nuclei.

**What the problem asks.** Explain the joint distribution of masses, spin magnitudes, tilts and χ_eff. Determine the branching fractions from the population posteriors, in particular the width and mass dependence of the χ_eff distribution, the fraction of hierarchical mergers above the pair-instability gap, and rare high-spin events (such as GW231123, total mass about 190 to 265 solar masses), using a model for black-hole natal spins consistent with stellar physics. A resolution identifies which channel produces each feature (the χ_eff tail, the 35 solar-mass peak, the high-mass events) with a quantified branching ratio.

**State of the art.**

- The GWTC-4.0 population paper (August 2025; 158 mergers) finds 90% of black-hole spins below 0.57 and 24 to 42% of binaries with negative χ_eff.
- The GWTC-5.0 population paper (May 2026; 267 mergers) finds a rapidly spinning (χ about 0.7) subpopulation consistent with hierarchical mergers at two mass scales, near 10 to 20 and above about 45 solar masses, and at least 9% of mergers from channels preferring aligned spins.
- An independent analysis (preprint) places a transition at about 46 solar masses above which mergers are nearly all hierarchical.
- Fuller and Ma argued that stellar angular-momentum transport makes most black holes born with very small spins, so observed spinning systems need tidal spin-up or hierarchical formation. Gerosa and Fishbach show how hierarchical mergers produce spin signatures.
- Spin tilts are weakly measured and the χ_eff–mass–mass-ratio correlation is debated, so branching fractions remain uncertain by factors of 2 to 3.

**Why it matters.** It tells us where merging black holes are born.
