---
type: problem
slug: earth-twin-rv-stellar-activity-10cms
title: "Stellar-activity radial-velocity noise at 10 cm/s: granulation and convective blueshift for Earth twins"
entry: exoplanet-detection
status: OPEN
origin: Radial-velocity searches reached 1 m/s with HARPS (2003); the 10 cm/s Earth-twin target has been set by the community since about 2010.
ratings:
  difficulty: 55
  applicationValue: 9
  leverage: 33
workMix:
  theory: 25
  engineering: 25
  compute: 35
  empirical: 15
verification:
  route: OBSERVATION
sources:
  - title: Extreme Precision Radial Velocity Working Group Final Report (Crass et al. 2021)
    url: https://arxiv.org/abs/2107.14291
  - title: A Gaussian process framework for modelling stellar activity signals in radial velocity data (Rajpaul et al. 2015)
    url: https://arxiv.org/abs/1506.07304
  - title: On the Feasibility of Intense Radial Velocity Surveys for Earth-twin Discoveries (Hall et al. 2018)
    url: https://arxiv.org/abs/1806.00518
  - title: The Extreme Stellar-Signals Project III. Combining Solar Data from HARPS, HARPS-N, EXPRES, and NEID (Zhao et al. 2023)
    url: https://arxiv.org/abs/2309.03762
  - title: Terra Hunting Experiment project site (status update, 2026)
    url: https://www.terrahunting.org/
links:
  - to: jwst-retrieval-degeneracies-temperate-sub-neptunes
    kind: RELATED
    note: Together they decide which temperate planets have measured masses and interpretable atmospheres; retrievals need RV masses to fix the scale height.
timeline:
  - date: 2015-06-24
    title: Gaussian-process activity model
    body: Rajpaul et al. introduce multi-indicator Gaussian processes for RV activity modelling.
    source: https://arxiv.org/abs/1506.07304
  - date: 2021-07-29
    title: EPRV working group report
    body: Sets the 10 cm/s goal and names stellar variability as the main barrier.
    source: https://arxiv.org/abs/2107.14291
  - date: 2023-09-07
    title: Multi-instrument solar RVs
    body: Simultaneous solar data from four spectrographs show 15–30 cm/s instrument-level scatter.
    source: https://arxiv.org/abs/2309.03762
explainer:
  oneLine: Finding an Earth twin by its wobble means spotting a 9 cm/s motion hidden in far larger stellar noise.
  flow:
    - Earth tugs Sun by 9 cm/s
    - Star's surface moves by metres per second
    - Noise mimics planet-like periods
    - Model star using solar observations
    - Test by injecting fake planets
  glossary:
    - term: radial velocity
      meaning: A star's speed toward or away from us, measured from the Doppler shift of its light.
      link: https://en.wikipedia.org/wiki/Doppler_spectroscopy
    - term: Doppler shift
      meaning: A change in the colour of light because its source moves toward or away from us.
      link: https://en.wikipedia.org/wiki/Doppler_effect
    - term: habitable zone
      meaning: The range of distances from a star where a planet could have liquid water on its surface.
      link: https://en.wikipedia.org/wiki/Circumstellar_habitable_zone
    - term: granulation
      meaning: The bubbling pattern of hot rising and cool sinking gas on a star's surface.
      link: https://en.wikipedia.org/wiki/Granule_(solar_physics)
    - term: convective blueshift
      meaning: A net shift of starlight toward blue because hot rising gas is brighter than cool sinking gas; magnetic fields change it.
      link: https://en.wikipedia.org/wiki/Granule_(solar_physics)
    - term: starspot
      meaning: A cooler, darker patch on a star's surface caused by magnetic fields.
      link: https://en.wikipedia.org/wiki/Sunspot
    - term: Gaussian process
      meaning: A flexible statistical tool for modelling smooth, correlated random variation.
      link: https://en.wikipedia.org/wiki/Gaussian_process
    - term: red noise
      meaning: Random variation that is strongest at slow rates, which easily mimics a long-period planet.
      link: https://en.wikipedia.org/wiki/Colors_of_noise
    - term: injection-recovery test
      meaning: Adding a fake signal to real data and checking whether the method finds it.
      link: https://en.wikipedia.org/wiki/Detection_theory
    - term: spectrograph
      meaning: An instrument that spreads light into its colours so fine detail can be measured.
      link: https://en.wikipedia.org/wiki/Spectrograph
    - term: G and K dwarfs
      meaning: Ordinary stars like the Sun (G) or slightly cooler and smaller (K).
      link: https://en.wikipedia.org/wiki/Stellar_classification
    - term: p-mode oscillations
      meaning: Sound waves that make a star’s surface rise and fall every few minutes.
      link: https://en.wikipedia.org/wiki/Helioseismology
  readFirst:
    - title: "Methods of detecting exoplanets: radial velocity (Wikipedia)"
      url: https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets
      why: Puts the wobble method in context.
    - title: Doppler spectroscopy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Doppler_spectroscopy
      why: Explains how the tiny velocities are measured.
    - title: Terra Hunting Experiment
      url: https://www.terrahunting.org/
      why: A long survey designed to find Earth-like planets with this method.
site:
  aiReviewed: true
---

Detect the reflex Doppler signal of an Earth-mass planet in the habitable zone of a G or K dwarf, an amplitude of about 9 cm/s at 1 AU around a Sun-like star, from spectrographs (ESPRESSO, HARPS3, EXPRES, NEID, KPF) with instrumental stability near 10 cm/s. The binding constraint is stellar variability: granulation, supergranulation, p-mode oscillations, magnetic-feature suppression of convective blueshift and rotational modulation at the level of 0.5–2 m/s for the Sun, with red-noise structure on the planet's orbital timescale. The problem is to build and validate models or line-by-line filters (Gaussian processes, spectral-activity indicators such as line-depth ratios, shape-based decorrelation, empirical scalpels) that reduce stellar RV variance by one to two orders of magnitude, using resolved-Sun observations as ground truth, and to demonstrate injection-recovery of 10–20 cm/s planets in realistic long-term data.

# State of the art

The Extreme Precision Radial Velocity Working Group's final report (arXiv:2107.14291) identifies stellar variability, not instrument stability, as the main barrier at 10 cm/s, and recommends Sun-as-a-star observations as a testbed. Gaussian-process frameworks tied to activity indicators (Rajpaul et al., arXiv:1506.07304) are standard tools. Solar-telescope observations with HARPS-N, NEID and similar instruments have shown that convective-blueshift suppression can be partly modelled but a residual of 0.5–1 m/s on rotation and magnetic-cycle timescales remains for the Sun. No Earth-mass planet in the habitable zone of a Sun-like star has been detected by radial velocity. Combining Sun-as-a-star data from HARPS, HARPS-N, EXPRES and NEID, the Extreme Stellar-Signals Project found instrument-to-instrument residuals of about 15–30 cm/s on intraday timescales (Zhao et al., arXiv:2309.03762), so even the instrumental floor is not yet at 10 cm/s. The ten-year Terra Hunting Experiment with HARPS3 on the Isaac Newton Telescope (simulations: arXiv:1806.00518) suffered a cryostat failure late in commissioning in June 2026 and is now expected to start in 2027, according to the project site.

# Applications

Detecting Earth twins is required to determine the occurrence rate η⊕ that sets the target lists and designs of future direct-imaging missions, and the activity-filtering methods apply to all precision RV science. No other application.

# Resolution criteria

Resolved when a Sun-like star shows a habitable-zone Earth-mass planet at ≥5σ with a signal confirmed in at least two independent instruments and an analysis demonstrated, by injection–recovery tests on solar data, to achieve a residual RV scatter ≤30 cm/s on orbital timescales.

# Rating rationale

A further factor of about 5–10 in stellar RV noise is needed beyond what has been shown even for the Sun, with no first-principles model of the residual, so it keeps the old 53–55 range. Leverage 33 and application value 9 are close to the old entry (31, 8.5): η⊕ for Sun-like stars sets target lists for the Habitable Worlds Observatory.

# Work mix rationale

Activity-model development and simulation of stellar surfaces, new spectrographs and long observing campaigns.

# Verification

Needs new radial-velocity observations: a habitable-zone Earth-mass planet around a Sun-like star at 5 sigma, confirmed on two independent instruments, with a method shown by injection-recovery on solar data to reach residual RV scatter of 30 cm/s or less on orbital timescales.

# Plain explanation

One way to find planets is to watch the star they orbit. A planet tugs on its star and makes it wobble a little toward us and away from us. We can measure that motion through tiny colour changes in the starlight. For a planet like Earth around a star like the Sun, the wobble is only about 9 centimetres per second, slower than a baby crawling.

Today's best instruments are close to measuring motions that small, though not quite there. The trouble is the star itself. A star's surface is not calm. It bubbles like a pot of boiling water, has dark cool spots that come and go as it spins, and rings with sound waves. All of these make the star look as if it moves by half a metre to two metres per second, which is much bigger than the planet's signal.

Worse, the star's noise changes on timescales similar to a planet's year, so it is easy to mistake for a planet, or to hide a real one.

To cope, scientists study the Sun in detail, because we can see its surface, then build models and filters to subtract the noise.

So far, no Earth-mass planet in the habitable zone of a Sun-like star has been found this way.

Where the analogy breaks: hearing a whisper in a noisy room is hard, but the noise here comes from the very object we are trying to listen to.

# Student explanation

**The target.** Detect the reflex Doppler signal of an Earth-mass planet in the habitable zone of a G or K dwarf: about 9 cm/s at 1 AU around a Sun-like star. Spectrographs such as ESPRESSO, HARPS3, EXPRES, NEID and KPF are designed for instrumental stability near 10 cm/s.

**The binding constraint.** Stellar variability. Granulation (convective cells), supergranulation, p-mode oscillations, suppression of the convective blueshift by magnetic features, and rotational modulation by spots and faculae together produce 0.5 to 2 m/s variations for the Sun. The noise is red (has structure on long timescales), including on the orbital period of a planet in the habitable zone.

**What the problem asks.** Build and validate models or line-by-line filters that reduce the stellar RV variance by one to two orders of magnitude, using resolved-Sun observations as ground truth, and demonstrate injection-recovery of planets of 10 to 20 cm/s amplitude in realistic long-term data. Approaches include:

- Gaussian processes tied to activity indicators;
- spectral activity indicators such as line-depth ratios;
- shape-based decorrelation (using changes in the line profile to separate Doppler shifts from shape changes);
- empirical methods that identify lines affected by activity.

**State of the art.** The Extreme Precision Radial Velocity Working Group's final report identifies stellar variability, not instrument stability, as the main barrier at 10 cm/s, and recommends Sun-as-a-star observations as a testbed. Solar-telescope observations (HARPS-N, NEID and others) have shown that convective-blueshift suppression can be partly modelled, but a residual of 0.5 to 1 m/s on rotation and magnetic-cycle timescales remains for the Sun. Combining Sun-as-a-star data from HARPS, HARPS-N, EXPRES and NEID, the Extreme Stellar-Signals Project found instrument-to-instrument residuals of about 15 to 30 cm/s on intraday timescales, so even the instrumental floor is not yet at 10 cm/s. The Terra Hunting Experiment, a ten-year survey with HARPS3, was delayed by a cryostat failure and is now expected to start in 2027.

**Why it matters.** Radial velocities remain the main way to measure the masses of small planets, and a nearby Earth twin would be a prime target for follow-up.
