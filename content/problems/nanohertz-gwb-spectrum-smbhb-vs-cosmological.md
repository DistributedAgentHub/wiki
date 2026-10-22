---
type: problem
slug: nanohertz-gwb-spectrum-smbhb-vs-cosmological
title: "Spectral shape of the nanohertz background: SMBH binaries with environments versus cosmological sources"
entry: pulsar-timing-arrays
status: IN_PROGRESS
origin: Evidence for a Hellings–Downs-correlated background was announced in June 2023 by NANOGrav, EPTA/InPTA, PPTA and CPTA.
ratings:
  difficulty: 33
  applicationValue: 6.5
  leverage: 38.5
workMix:
  theory: 25
  engineering: 15
  compute: 30
  empirical: 30
verification:
  route: OBSERVATION
sources:
  - title: "The NANOGrav 15-year Data Set: Evidence for a Gravitational-Wave Background"
    url: https://arxiv.org/abs/2306.16213
  - title: "The NANOGrav 15-year Data Set: Search for Signals from New Physics"
    url: https://arxiv.org/abs/2306.16219
  - title: "The NANOGrav 15-year Data Set: Constraints on Supermassive Black Hole Binaries from the Gravitational Wave Background"
    url: https://arxiv.org/abs/2306.16220
  - title: "All correlations must die: Assessing the significance of a stochastic gravitational-wave background in pulsar-timing arrays (Taylor et al. 2017)"
    url: https://arxiv.org/abs/1606.09180
  - title: "The MeerKAT Pulsar Timing Array: The first search for gravitational waves with the MeerKAT radio telescope (Miles et al. 2024)"
    url: https://arxiv.org/abs/2412.01153
  - title: Pulsar Timing Array in the past decade (Liu et al. 2026)
    url: https://arxiv.org/abs/2602.14014
  - title: Stochastic gravitational-wave background search using data from five pulsar timing arrays (2025)
    url: https://arxiv.org/abs/2512.08666
links:
  - to: final-parsec-gas-driven-eccentricity-pta-amplitude
    kind: BUILDS_ON
    note: A physically parametrised binary model of the low-frequency spectrum needs the environmental hardening and eccentricity distribution computed there.
  - to: jwst-black-hole-seed-mass-function-z7
    kind: BUILDS_ON
    note: The astrophysical amplitude prior hinges on the black-hole mass function normalisation and the M_BH–M⋆ relation; JWST evidence on overmassive black holes at z = 4–7 and the seed channel feeds that prior and thus the Bayes factors against cosmological sources.
timeline:
  - date: 2023-06-28
    title: PTA evidence for a GW background
    body: Four PTA collaborations report Hellings–Downs-correlated signals.
    source: https://arxiv.org/abs/2306.16213
  - date: 2024-12-02
    title: MeerKAT PTA
    body: Noise-model-dependent 3–3.4σ Hellings–Downs evidence from 83 pulsars over 4.5 yr.
    source: https://arxiv.org/abs/2412.01153
  - date: 2026-02-15
    title: PTA decade review
    body: "Review of the decade: 2023 Hellings–Downs evidence of about 2–4.6σ across arrays; PTAs described as on the threshold of a confident detection."
    source: https://arxiv.org/abs/2602.14014
explainer:
  oneLine: Is the new low-pitched gravitational-wave hum from pairs of giant black holes, or from the early universe?
  flow:
    - Pulsars show a low-pitched gravitational hum
    - Black-hole pairs predict one spectrum
    - Early-universe sources predict others
    - Compare shapes with Bayesian evidence
    - Need more pulsars and years to decide
  glossary:
    - term: characteristic strain
      meaning: A standard measure of how strongly a gravitational-wave background stretches space at each frequency.
      link: https://en.wikipedia.org/wiki/Gravitational_wave_background
    - term: spectral index
      meaning: The slope of a power-law spectrum, telling how the strength changes with frequency.
      link: https://en.wikipedia.org/wiki/Spectral_index
    - term: Bayes factor
      meaning: A number that compares how well two models explain the same data; larger means stronger support for one.
      link: https://en.wikipedia.org/wiki/Bayes_factor
    - term: first-order phase transition
      meaning: An abrupt change of the state of the universe, like water suddenly boiling, which could have produced gravitational waves.
      link: https://en.wikipedia.org/wiki/Phase_transition
    - term: cosmic strings
      meaning: Hypothetical long thin defects left over from the early universe.
      link: https://en.wikipedia.org/wiki/Cosmic_string
    - term: scalar-induced gravitational waves
      meaning: Gravitational waves produced at second order by large density ripples in the early universe.
      link: https://en.wikipedia.org/wiki/Gravitational_wave_background
    - term: Hellings–Downs correlation
      meaning: The specific pattern in which timing changes of pulsar pairs are related if caused by gravitational waves.
      link: https://en.wikipedia.org/wiki/Pulsar_timing_array
    - term: orbital eccentricity
      meaning: How stretched an orbit is.
      link: https://en.wikipedia.org/wiki/Orbital_eccentricity
    - term: pulsar timing array
      meaning: A set of pulsars timed precisely to detect very slow gravitational waves.
      link: /research/pulsar-timing-arrays
    - term: anisotropy
      meaning: A variation of signal strength with direction on the sky.
      link: https://en.wikipedia.org/wiki/Anisotropy
    - term: power law
      meaning: A relationship where one quantity changes as a fixed power of another, so it is a straight line on a log–log plot.
      link: https://en.wikipedia.org/wiki/Power_law
    - term: continuous-wave source
      meaning: A single nearby black-hole pair loud enough to stand out from the background as its own steady tone.
      link: https://en.wikipedia.org/wiki/Pulsar_timing_array
  readFirst:
    - title: Pulsar timing array (Wikipedia)
      url: https://en.wikipedia.org/wiki/Pulsar_timing_array
      why: How the hum is measured.
    - title: "NANOGrav: gravitational waves"
      url: https://nanograv.org/science/topics/gravitational-waves
      why: The collaboration's newcomer-friendly material on the 2023 result.
    - title: Cosmic string (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmic_string
      why: One of the exotic non-black-hole explanations.
site:
  aiReviewed: true
---

Use the spectrum and angular correlations of the nanohertz gravitational-wave background (characteristic strain h_c(f) ∝ f^α with α = (3 − γ)/2, expected γ = 13/3 for circular, GW-driven binaries) to discriminate between a supermassive-black-hole-binary origin, with environmental hardening and eccentricity, and cosmological sources (first-order phase transitions, cosmic strings, scalar-induced gravitational waves). The 15-year NANOGrav data prefer γ ≈ 3.2 with large errors and an amplitude above many binary-population predictions. The problem is to compute marginal likelihoods for physically parametrised binary models (mass function, M_BH–M⋆ normalisation, eccentricity, residence time) and for cosmological models on the same data, and to determine what additional bandwidth, pulsar count or anisotropy and continuous-wave information would separate them at a Bayes factor above 100.

# State of the art

NANOGrav 15-year (arXiv:2306.16213), EPTA DR2, PPTA DR3 and CPTA all reported evidence for a correlated background in June 2023, with Hellings–Downs correlation significance of about 2–4.6σ across arrays and an amplitude A ≈ 2.4×10⁻¹⁵ at 1/yr for γ = 13/3. NANOGrav's new-physics analysis (arXiv:2306.16219) found Bayes factors of order 10–100 for several cosmological models over the baseline SMBHB model with fixed population assumptions, and the SMBHB paper (arXiv:2306.16220) found the amplitude requires a high normalisation of the black-hole mass function or overmassive black holes. Taylor et al. (arXiv:1606.09180) introduced phase-shift and sky-scramble backgrounds for assessing the significance of correlation searches. Both explanations remain viable and the cosmological-model comparison depends strongly on the astrophysical-prior choices. Later data have not crossed 5σ. The MeerKAT PTA (4.5 yr, 83 pulsars) finds 3–3.4σ Hellings–Downs evidence under some noise models and none under others, with a higher amplitude (Miles et al., arXiv:2412.01153). Re-modelling chromatic noise in NANOGrav 15-yr data raises the frequentist significance only from 3.16σ to 3.32σ (arXiv:2606.28554, June 2026), and a five-array combination with 121 pulsars stays below 5σ (arXiv:2512.08666). A February 2026 review of the decade describes PTAs as "on the threshold" of a confident detection (Liu et al., arXiv:2602.14014). IPTA DR3 and the NANOGrav 20-year data set had not been released as of October 2026.

# Applications

A confirmed cosmological component would be a window on physics at 10–100 MeV temperatures, constraining first-order phase transitions and cosmic strings. If the background is astrophysical, it measures the supermassive-black-hole binary population and merger rate. No practical application.

# Resolution criteria

Resolved when data (IPTA DR3, NANOGrav 20-year or later) with 5σ Hellings–Downs evidence give a spectral shape and anisotropy for which the Bayes factor between best astrophysical and best cosmological models exceeds 100, or when an individual binary or a non-Gaussianity signature is detected.

# Rating rationale

Unchanged from the calibrated 33/6.5/38.5: the problem is the old one with the spectral discrimination made explicit, and more pulsars and longer baselines will largely decide it. Leverage stays below dark-matter identity and the CMB problems because a cosmological origin, though high-impact, is the less likely outcome.

# Work mix rationale

Data analysis and population modelling dominate, with pulsar timing observations adding data.

# Verification

Needs new pulsar-timing data (IPTA DR3, NANOGrav 20-year or later) with Hellings-Downs evidence at 5 sigma that gives a spectral shape and anisotropy for which the Bayes factor between the best astrophysical and best cosmological models exceeds 100, or a detected individual binary or non-Gaussianity.

# Plain explanation

In 2023, several teams reported what looks like a faint, ever-present hum of gravitational waves, with wavelengths so long that one wave takes years to pass. They found it by timing pulsars. It looks like the combined effect of countless pairs of supermassive black holes, circling each other in galaxies across the universe.

But there is another possibility. Some ideas about the very early universe also predict such a hum: sudden changes in the state of the universe, long threads of energy called cosmic strings, or ripples from the first moments after the Big Bang. If so, the hum would carry news from a time we cannot see any other way.

How can they be told apart? It is like guessing which instruments are playing from how the loudness changes from low notes to high notes. Scientists use the shape of the hum, how its strength changes from slower to faster waves, and how the signal is spread across the sky. Black-hole pairs predict one shape, varied a little by the gas and stars around them. Early-universe sources predict other shapes.

At the moment the data are not good enough to be sure, and the hum itself is not yet at the strict level physicists call a detection. Its strength is higher than many black-hole models expect, which keeps the door open.

Where the analogy breaks: telling instruments apart by pitch works in music, but here the pitch range we hear is only a sliver of the full sound.

# Student explanation

**The signal.** The background is described by its characteristic strain h_c(f), which follows a power law h_c ∝ f^α with α = (3 − γ)/2. For a population of circular binaries driven only by gravitational-wave emission, γ is 13/3. The 15-year NANOGrav data prefer γ near 3.2, with large uncertainties, and an amplitude larger than many binary-population predictions.

**Candidate sources.**

1. _Supermassive black-hole binaries (SMBHBs)._ Their spectrum is modified by environmental hardening (stars and gas helping the orbit shrink faster at low frequencies), by orbital eccentricity, and by how long binaries spend at each stage (the residence time). All of these tend to flatten or turn over the spectrum at the lowest frequencies and change the spectral index.
2. _Cosmological sources._ First-order phase transitions in the early universe, cosmic strings, and scalar-induced gravitational waves (generated by large primordial density fluctuations at second order).

**What the problem asks.** Compute marginal likelihoods (Bayesian evidence) for physically parametrised binary models (mass function, normalisation of the black-hole-to-host-mass relation, eccentricity, residence time) and for cosmological models on the same data. Then determine what extra bandwidth, pulsar count, anisotropy or continuous-wave information would separate them at a Bayes factor above 100.

**State of the art.** NANOGrav 15-year, EPTA DR2, PPTA DR3 and CPTA reported evidence of a correlated background in June 2023, with Hellings–Downs significance of about 2 to 4.6σ depending on array. NANOGrav's new-physics analysis found Bayes factors of order 10 to 100 for several cosmological models over the baseline SMBHB model with fixed population assumptions. The SMBHB paper found that the amplitude requires a high black-hole mass function normalisation or overmassive black holes. Both explanations remain viable and the comparison depends strongly on the choice of astrophysical priors. Later data have not crossed 5σ: for example the MeerKAT PTA finds 3 to 3.4σ under some noise models and none under others, and a five-array combination with 121 pulsars stays below 5σ.

**Why it is hard.** The spectral shape is measured over only a few frequency bins, noise models matter, and a binary model with enough freedom can imitate many shapes.

**Why it matters.** A cosmological origin would open a new window on the universe’s first fraction of a second; a binary origin would tell us how often giant black holes merge.
