---
type: entry
slug: pulsar-timing-arrays
title: Pulsar timing arrays
field: physics
kind: ALGORITHM
status: ACTIVE
summary: Using the arrival times of radio pulses from many millisecond pulsars as a galaxy-sized gravitational-wave detector sensitive to nanohertz frequencies; the 2023 results gave the first evidence for a background.
reliedOn: It is the only technique sensitive to gravitational waves with periods of years to decades, the band where supermassive black hole binaries are expected to radiate. The nanohertz background and its interpretation rest entirely on pulsar-timing analyses.
dependsOn:
  - general-relativity
  - gw-matched-filtering
  - n-body-simulation
references:
  - title: "The NANOGrav 15 yr Data Set: Evidence for a gravitational-wave background"
    url: https://arxiv.org/abs/2306.16213
    kind: paper
  - title: The second data release from the European Pulsar Timing Array III. Search for gravitational wave signals
    url: https://arxiv.org/abs/2306.16214
    kind: paper
  - title: Search for an isotropic gravitational-wave background with the Parkes Pulsar Timing Array
    url: https://arxiv.org/abs/2306.16215
    kind: paper
  - title: Searching for the nano-Hertz stochastic gravitational wave background with the Chinese Pulsar Timing Array Data Release I
    url: https://arxiv.org/abs/2306.16216
    kind: paper
  - title: "The MeerKAT Pulsar Timing Array: the 4.5-year data release"
    url: https://arxiv.org/abs/2412.01148
    kind: paper
  - title: "PINT: pulsar timing package (NANOGrav)"
    url: https://github.com/nanograv/PINT
    kind: code
  - title: "ENTERPRISE: Bayesian PTA noise and signal inference (NANOGrav)"
    url: https://github.com/nanograv/enterprise
    kind: code
timeline:
  - date: 2023-06-28
    title: Four PTAs report a common signal with Hellings-Downs correlations
    body: NANOGrav reports Bayes factors of 200-1000 for a Hellings-Downs-correlated versus an uncorrelated common process, and p-values of about 10^-3 to 5x10^-5 (about 3 to 4 sigma) for the correlations; EPTA finds about 3 sigma in its 10.3-year subset; PPTA about 2 sigma; CPTA 4.6 sigma at a single frequency near 14 nHz.
    source: https://arxiv.org/abs/2306.16213
  - date: 2024-12-02
    title: MeerKAT PTA 4.5-year release
    body: Eighty-three millisecond pulsars observed over 4.5 years give tentative evidence (ln B = 4.46) for a common signal with an amplitude higher than other arrays report.
    source: https://arxiv.org/abs/2412.01148
  - date: 2025-12-09
    title: Independent five-array combination
    body: Yu and Allen combine public data from five arrays, 121 pulsars, and find a nonzero amplitude with an HD-consistent angular correlation, but significance below 5 sigma (preprint, revised April 2026).
    source: https://arxiv.org/abs/2512.08666
explainer:
  oneLine: Using the ticking of many spinning stars as a galaxy-sized detector for very slow gravitational waves.
  flow:
    - Millisecond pulsars tick very regularly
    - Passing wave shifts pulse arrival times
    - Compare timing between pairs of pulsars
    - Hellings–Downs pattern shows true waves
    - "2023: evidence for a nanohertz hum"
  glossary:
    - term: pulsar
      meaning: A rapidly spinning neutron star that sends a beam of radio waves sweeping past Earth.
      link: https://en.wikipedia.org/wiki/Pulsar
    - term: millisecond pulsar
      meaning: A pulsar that spins hundreds of times per second and keeps extremely steady time.
      link: https://en.wikipedia.org/wiki/Millisecond_pulsar
    - term: timing residual
      meaning: The difference between when a pulse actually arrives and when the best timing model predicts it should.
      link: https://en.wikipedia.org/wiki/Pulsar_timing_array
    - term: gravitational-wave background
      meaning: A random, overlapping sea of gravitational waves from many sources, rather than one single event.
      link: https://en.wikipedia.org/wiki/Gravitational_wave_background
    - term: Hellings–Downs curve
      meaning: The predicted pattern of how timing changes of two pulsars are related, depending on the angle between them.
      link: https://en.wikipedia.org/wiki/Pulsar_timing_array
    - term: supermassive black hole
      meaning: A black hole millions to billions of times the Sun's mass, found at the centre of most large galaxies.
      link: https://en.wikipedia.org/wiki/Supermassive_black_hole
    - term: red noise
      meaning: Random variation that is strongest at slow rates, which mimics slow gravitational waves.
      link: https://en.wikipedia.org/wiki/Colors_of_noise
    - term: dispersion (radio)
      meaning: The delay of lower-frequency radio waves as they travel through gas between stars.
      link: https://en.wikipedia.org/wiki/Dispersion_(optics)
    - term: NANOGrav
      meaning: The North American collaboration that times pulsars to look for nanohertz gravitational waves.
      link: https://en.wikipedia.org/wiki/NANOGrav
    - term: strain
      meaning: How much a gravitational wave stretches distances, as a fraction; here about one part in a million billion.
      link: https://en.wikipedia.org/wiki/Gravitational_wave
    - term: nanohertz
      meaning: A frequency of a billionth of a cycle per second; one cycle takes years to decades.
      link: https://en.wikipedia.org/wiki/Hertz
  readFirst:
    - title: Pulsar timing array (Wikipedia)
      url: https://en.wikipedia.org/wiki/Pulsar_timing_array
      why: A compact guide to the idea and the main collaborations.
    - title: "NANOGrav: gravitational waves"
      url: https://nanograv.org/science/topics/gravitational-waves
      why: The collaboration's own introduction for newcomers.
    - title: Pulsar (Wikipedia)
      url: https://en.wikipedia.org/wiki/Pulsar
      why: Background on the clocks themselves.
site:
  published: true
  aiReviewed: true
---

## The idea

Millisecond pulsars rotate with extraordinary regularity. A radio telescope records the arrival time of pulses (times of arrival, TOAs) and a _timing model_ predicts them from the pulsar's spin, position, proper motion, binary orbit, interstellar dispersion and the position of the telescope relative to the Solar System barycentre. The _timing residual_ is observed minus predicted arrival time. A gravitational wave passing between the pulsar and Earth stretches and compresses space along the line of sight, producing a residual of order $h/(2\pi f)$ for strain $h$ at frequency $f$. For $h\sim10^{-15}$ at $f\sim 10$ nHz this is tens of nanoseconds, which is why the data need to be nanosecond-to-microsecond precise and decades long.

The observing band runs from about $1/T$ (the inverse of the data span, a few nanohertz for a 15-year dataset) up to a limit set by the observing cadence of a few weeks, of order $10^{-7}$ Hz.

## Why many pulsars: the Hellings-Downs curve

Any single pulsar has red noise of its own (spin irregularities, interstellar propagation), so a lone pulsar cannot prove a signal is gravitational. A gravitational-wave background has a distinctive signature: the correlation of residuals between pulsar pairs depends only on their angular separation and follows the Hellings-Downs curve, $\Gamma(\theta)=\tfrac32 x\ln x-\tfrac14 x+\tfrac12$ with $x=(1-\cos\theta)/2$, which in this normalization equals $1/2$ for nearly coincident (distinct) pulsars, dips to about $-0.15$ near $82^\circ$ and rises to $+0.25$ for antipodal pairs. Observing that quadrupolar pattern is what distinguishes gravitational waves from clock errors (a monopole) or ephemeris errors (a dipole).

## Analysis methods

Practical analysis is Bayesian. For each pulsar the timing model, white noise, red noise and dispersion-measure variations are modelled jointly; a common-spectrum process shared by all pulsars is then added, and cross-correlations are tested with and without the Hellings-Downs ordering. The spectrum of a background from circular, gravitational-wave-driven black-hole binaries is $h_c = A (f/\mathrm{yr}^{-1})^{-2/3}$, equivalent to a residual power spectrum $\propto f^{-13/3}$. Standard open tools include PINT (timing models) and ENTERPRISE (noise and signal inference). Systematics that matter are Solar System ephemeris errors, clock corrections, and mis-modelled pulsar noise.

## State of the field

In June 2023 NANOGrav (67 pulsars in the background analysis, data from 2004 to 2020), the European PTA, the Parkes PTA and the Chinese PTA each reported a common-spectrum signal with Hellings-Downs-like correlations, at roughly 2 to 4.6 sigma depending on collaboration and statistic. NANOGrav's strain amplitude was $2.4^{+0.7}_{-0.6}\times10^{-15}$ (median and 90% credible interval) at $1\,\mathrm{yr}^{-1}$. The MeerKAT PTA (83 pulsars, 4.5 years, 2024) found a larger, tentative amplitude. In December 2025 an independent two-author combination of public data from five arrays (121 pulsars; Yu and Allen, arXiv:2512.08666, preprint) found a Hellings-Downs-consistent correlation whose significance still falls short of the 5-sigma convention for detection. The International PTA third data release (IPTA DR3), which merges the regional arrays, was in preparation, but its gravitational-wave search had not been published as of October 2026.

## Beyond the background

Next goals are detecting the angular correlation at 5 sigma, measuring the spectrum shape and anisotropy, and finding individual continuous-wave sources. Interpretation of the signal (supermassive black hole binaries versus cosmological sources) is the subject of the nanohertz-origin problem.

# Plain explanation

A pulsar is a dead star that spins many times a second and sweeps a beam of radio waves past Earth, like a lighthouse. Some of them, called millisecond pulsars, tick so evenly that they rival the best atomic clocks.

Now imagine a ripple in space passing between us and one of those pulsars. The ripple stretches and squeezes the space the pulses travel through, so the pulses arrive a tiny bit early, then a tiny bit late. The change is about a hundred-millionth of a second or less.

One pulsar is not enough to tell, because each pulsar has its own small irregularities. But if you watch dozens of pulsars across the sky for many years, a passing ripple should affect them in a related pattern that depends on how far apart they are in the sky. Finding that pattern would be convincing proof of a gravitational wave.

In 2023, several teams around the world reported evidence for exactly such a signal, though not yet at the strict level physicists call a detection: a low hum of gravitational waves with very slow pulses taking years to cycle. The most likely source is many pairs of supermassive black holes, each billions of times the Sun's mass, slowly circling each other in distant galaxies. Whether that is the full story is not yet settled.

Where the analogy breaks: unlike a lighthouse beacon, the pulsars here are all different distances away and have different quirks, which is what makes the data hard.

# Student explanation

**The measurement.** A radio telescope records the time of arrival (TOA) of pulses from a millisecond pulsar. A timing model predicts those arrival times from the pulsar's spin, position, motion, orbit if it has a companion, the delay caused by gas along the line of sight (dispersion), and the position of the telescope relative to the Solar System's centre of mass. The timing residual is observed minus predicted.

**What a gravitational wave does.** A gravitational wave of strain h and frequency f passing between the pulsar and Earth changes the residual by about h/(2πf). For h around 10⁻¹⁵ and f around 10 nanohertz, that is tens of nanoseconds. So the data must be precise to nanoseconds to microseconds and span years to decades. The observing band runs from about 1/T (the inverse of the data span, a few nanohertz for 15 years) up to roughly 10⁻⁷ Hz set by how often pulsars are observed.

**Why an array.** Each pulsar has its own red noise (slow irregularities in spin and in the gas on the path), so one pulsar cannot show a signal is gravitational. A gravitational-wave background predicts a specific correlation between the residuals of each pair of pulsars as a function of their angular separation, the Hellings–Downs curve. The curve has a quadrupolar form: it is positive for nearby pairs, dips negative at about 82 degrees apart, and rises again for opposite pairs. Clock errors would look like a monopole (the same for every pulsar) and errors in the planetary positions like a dipole, so this shape separates gravitational waves from them.

**Analysis.** Done with Bayesian methods: each pulsar gets a noise model, a common red-noise process is added, and the evidence for Hellings–Downs correlation is computed.

**The 2023 result.** NANOGrav, the European, Parkes and Chinese pulsar timing arrays all reported evidence (roughly 2 to 4.6 sigma, depending on the array and statistic) for a common signal with Hellings–Downs correlation. None has yet reached the 5-sigma convention for a detection, and the combined International PTA analysis had not been published as of October 2026. The amplitude is a little higher than many models of supermassive black-hole binaries predict.

**Open questions.** Is the source supermassive black-hole binaries or new physics in the early universe? Can individual binaries be picked out? How do noise and gas effects change the answer?
