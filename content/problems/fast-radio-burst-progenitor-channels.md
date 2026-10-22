---
type: problem
slug: fast-radio-burst-progenitor-channels
title: "FRB progenitor fractions: prompt magnetars versus delayed channels from localized host demographics"
entry: radio-interferometry
status: PARTIAL
origin: Lorimer et al. (2007) discovered the first burst; the 2020 Galactic magnetar burst linked at least some FRBs to magnetars.
ratings:
  difficulty: 42
  applicationValue: 10
  leverage: 34
workMix:
  theory: 15
  engineering: 20
  compute: 25
  empirical: 40
verification:
  route: OBSERVATION
sources:
  - title: A bright millisecond-duration radio burst from a Galactic magnetar (CHIME/FRB 2020)
    url: https://arxiv.org/abs/2005.10324
  - title: The First CHIME/FRB Fast Radio Burst Catalog
    url: https://arxiv.org/abs/2106.04352
  - title: A repeating fast radio burst source in a globular cluster (Kirsten et al. 2022)
    url: https://arxiv.org/abs/2105.11445
  - title: "Deep Synoptic Array Science: First FRB and Host Galaxy Catalog (Law et al. 2024)"
    url: https://arxiv.org/abs/2307.03344
  - title: A repeating fast radio burst source in the outskirts of a quiescent galaxy (Shah et al. 2024)
    url: https://arxiv.org/abs/2410.23374
  - title: A Catalog of Local Universe Fast Radio Bursts from CHIME/FRB and the KKO Outrigger (CHIME/FRB Collaboration 2025)
    url: https://arxiv.org/abs/2502.11217
  - title: The Second CHIME/FRB Catalog of Fast Radio Bursts (CHIME/FRB Collaboration 2026)
    url: https://arxiv.org/abs/2601.09399
  - title: The Host Galaxies of Fast Radio Bursts Track a Combination of Stellar Mass and Star Formation, Similar to Type Ia Supernovae (Horowicz et al. 2025)
    url: https://arxiv.org/abs/2504.08038
links:
  - to: ccsn-3d-neutrino-radiation-hydrodynamics-explosion-energy
    kind: RELATED
    note: Magnetar birth in core collapse is the leading prompt FRB channel; the magnetar-formation fraction is a CCSN-model output.
timeline:
  - date: 2020-05-20
    title: Galactic magnetar burst
    body: SGR 1935+2154 emits a bright millisecond radio burst.
    source: https://arxiv.org/abs/2005.10324
  - date: 2024-10-30
    title: FRB in a quiescent galaxy
    body: A repeating source in the outskirts of an old galaxy.
    source: https://arxiv.org/abs/2410.23374
  - date: 2025-02-16
    title: CHIME Outrigger catalog
    body: 81 bursts localised to about 2″ × 60″ with the KKO outrigger; 21 new host galaxies.
    source: https://arxiv.org/abs/2502.11217
  - date: 2026-01-14
    title: Second CHIME/FRB catalog
    body: 4,539 bursts from 3,641 sources, including 83 repeaters.
    source: https://arxiv.org/abs/2601.09399
explainer:
  oneLine: Fast radio bursts flash for a thousandth of a second from far away. What makes them, and in what shares?
  flow:
    - Brief, powerful radio flashes from afar
    - Galactic magnetar made a burst in 2020
    - Some hosts are old, some young
    - Model young and delayed routes
    - Fit shares to host-galaxy data
  glossary:
    - term: fast radio burst
      meaning: A very short, very bright flash of radio waves from outside our galaxy.
      link: https://en.wikipedia.org/wiki/Fast_radio_burst
    - term: magnetar
      meaning: A neutron star with an extremely strong magnetic field.
      link: https://en.wikipedia.org/wiki/Magnetar
    - term: neutron star
      meaning: An extremely dense star left after some supernovae.
      link: https://en.wikipedia.org/wiki/Neutron_star
    - term: progenitor
      meaning: The object or event that produces something, here the source of an FRB.
      link: https://en.wikipedia.org/wiki/Fast_radio_burst
    - term: host galaxy
      meaning: The galaxy in which an event takes place.
      link: https://en.wikipedia.org/wiki/Fast_radio_burst
    - term: delay time
      meaning: The time between a star forming and the event that produces a burst.
      link: https://en.wikipedia.org/wiki/Fast_radio_burst
    - term: dispersion measure
      meaning: A measure of how much gas a radio signal has passed through, which delays lower frequencies.
      link: https://en.wikipedia.org/wiki/Dispersion_(optics)
    - term: repeater
      meaning: A source that produces bursts again and again.
      link: https://en.wikipedia.org/wiki/Fast_radio_burst
    - term: globular cluster
      meaning: A dense, old, ball-shaped cluster of stars.
      link: https://en.wikipedia.org/wiki/Globular_cluster
    - term: CHIME
      meaning: The Canadian Hydrogen Intensity Mapping Experiment, a radio telescope that finds many FRBs.
      link: https://en.wikipedia.org/wiki/Canadian_Hydrogen_Intensity_Mapping_Experiment
    - term: Macquart relation
      meaning: The observed link between how much a burst is dispersed by gas and how far away it is.
      link: https://en.wikipedia.org/wiki/Fast_radio_burst
    - term: accretion-induced collapse
      meaning: A white dwarf that gains mass from a companion until it collapses into a neutron star.
      link: https://en.wikipedia.org/wiki/White_dwarf
  readFirst:
    - title: Fast radio burst (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fast_radio_burst
      why: A clear summary of what is known.
    - title: Magnetar (Wikipedia)
      url: https://en.wikipedia.org/wiki/Magnetar
      why: Background on the leading candidate.
    - title: CHIME/FRB project
      url: https://www.chime-frb.ca/
      why: The telescope team that finds most known bursts.
site:
  aiReviewed: true
---

Determine which progenitor channels produce the observed cosmological FRB population, and in what fractions: young magnetars from core-collapse supernovae, magnetars from delayed channels (neutron-star mergers, accretion-induced collapse), and other sources. The data are the host-galaxy properties (stellar mass, star-formation rate, morphology, offset) of hundreds of localised bursts from CHIME/FRB Outriggers, DSA-110 and ASKAP (with offsets and the 1:1 comparison to the stellar-mass and star-formation-weighted galaxy populations), the volumetric rate and energy function from the CHIME/FRB catalog, repeater versus non-repeater populations, and the Macquart relation. The problem is to fit population-synthesis models, with a delay-time distribution and an energy function, that reproduce the host demographics (including old-population hosts) and the rate evolution, and to determine the prompt (core-collapse magnetar) fraction to ±20% and whether a delayed channel with delay times ≳1 Gyr is required.

# State of the art

The Galactic magnetar SGR 1935+2154 produced a bright millisecond radio burst in April 2020 (arXiv:2005.10324). The first CHIME/FRB catalog has 536 bursts (arXiv:2106.04352), and an FRB in a globular cluster of M81 (arXiv:2105.11445) points to a non-prompt channel. The DSA-110 FRB host catalog (arXiv:2307.03344) and subsequent work show a preference for massive star-forming hosts; a repeating FRB in the outskirts of a quiescent galaxy (arXiv:2410.23374, October 2024) shows that delayed channels contribute. The first CHIME/FRB Outriggers host catalog localised 81 bursts to about 2″ × 60″ with CHIME and the KKO outrigger and securely identified 21 new hosts (arXiv:2502.11217, February 2025). The second CHIME/FRB catalog (arXiv:2601.09399, January 2026) has 4,539 bursts from 3,641 sources, including 981 bursts from 83 repeaters, and the full Outrigger array localised FRB 20250316A to 13 pc (arXiv:2506.19006), but no full-array host catalog has been published. Host-population modelling is split: Loudas et al. (51 hosts, arXiv:2502.15566) find that FRBs mostly track star formation but allow up to about 40–50% tracking stellar mass, while Horowicz et al. (arXiv:2504.08038) rule out pure star-formation tracking and find a mix similar to Type Ia supernovae. The population is a mix, but the fractions are not constrained, and no progenitor is identified for the bulk of FRBs.

# Applications

The progenitor channel determines whether FRBs trace star formation or old populations, which matters when they are used as probes of the baryon content and intergalactic medium (missing baryons) and for electromagnetic counterparts of mergers. No other application.

# Resolution criteria

Resolved when population models fitted to a localised sample of at least several hundred bursts (including hosts, offsets and energy function) identify the channel fractions to within about 20%, and a progenitor class is confirmed by a multiwavelength counterpart or persistent source for at least two non-magnetar-flare events.

# Rating rationale

Localised samples are growing quickly and population fits are standard, but delay-time distributions and selection effects are poorly constrained, so difficulty is just above the old 40. Application value 10, near the old 11, for FRBs as baryon and IGM probes; leverage 34 near the old 33.

# Work mix rationale

New localizations and host observations are the main need, with population-synthesis modelling.

# Verification

Needs a localised sample of at least several hundred bursts (hosts, offsets, energy function) from which population models give channel fractions to about 20%, and a multiwavelength counterpart or persistent source confirming a progenitor class for at least two non-magnetar-flare events.

# Plain explanation

Fast radio bursts, or FRBs, are flashes of radio waves that last about a thousandth of a second, yet are so powerful that we see them from billions of light-years away. They were discovered in 2007. Thousands have now been found, but we still do not know for sure what makes them.

One clue came in 2020 when a magnetar in our own galaxy, a neutron star with an extremely strong magnetic field, produced a bright short radio burst. That points at magnetars as one source. Magnetars are thought to be born when massive young stars explode, so they should sit in galaxies still forming stars.

But there are signs of other routes. One burst came from an old cluster of stars in a nearby galaxy, where no young massive stars are expected. Another repeating one sits at the edge of an old galaxy that is no longer making stars. These suggest that magnetars can also be made in slower ways, for example by merging neutron stars after billions of years.

It is a bit like guessing where the members of a crowd came from by looking at the neighbourhoods they were spotted in. From the kinds of galaxies that host bursts, scientists try to work out the share from young, fast routes and from delayed ones. Different studies disagree on the numbers.

Where the analogy breaks: tracing a crowd to its source works when everyone comes from one town, but here there seem to be several.

# Student explanation

**The question.** Which progenitor channels produce the observed cosmological FRB population, and in what fractions?

- _Prompt channel_: young magnetars born in core-collapse supernovae of massive stars, so the FRB rate tracks recent star formation.
- _Delayed channels_: magnetars from neutron-star mergers or accretion-induced collapse of white dwarfs, with a delay time that can exceed a billion years, so FRBs would trace stellar mass.
- Other sources.

**The data.**

- Host-galaxy properties (stellar mass, star-formation rate, morphology, offset from the galaxy centre) of hundreds of localised bursts, from CHIME/FRB Outriggers, DSA-110 and ASKAP, compared with the stellar-mass-weighted and star-formation-weighted galaxy populations.
- The volumetric rate and energy function from the CHIME/FRB catalogue.
- Repeater versus non-repeater populations.
- The Macquart relation (the link between a burst's dispersion measure and its distance), which also traces redshift.

**What the problem asks.** Fit population-synthesis models with a delay-time distribution and an energy function that reproduce the host demographics (including old-population hosts) and the rate evolution, and determine the prompt (core-collapse magnetar) fraction to ±20%, and whether a delayed channel with delay times above about 1 Gyr is needed.

**State of the art.**

- The Galactic magnetar SGR 1935+2154 produced a bright millisecond radio burst in April 2020.
- The first CHIME/FRB catalogue has 536 bursts; the second (January 2026) has 4,539 bursts from 3,641 sources, including 981 bursts from 83 repeaters.
- An FRB in a globular cluster of M81 points to a non-prompt channel, and a repeater in the outskirts of a quiescent galaxy (October 2024) shows that delayed channels contribute.
- The first CHIME Outriggers host catalogue localised 81 bursts and securely identified 21 new hosts. FRB 20250316A was localised to within 13 parsecs (about 42 light-years), but no full-array host catalogue has been published.
- Host-population modelling is split: one study (51 hosts) finds that FRBs mostly track star formation but allow up to about 40 to 50% tracking stellar mass, while another rules out pure star-formation tracking and finds a mix similar to Type Ia supernovae.

**Status.** The population is a mix, but the fractions are not constrained, and no progenitor is identified for the bulk of FRBs.
