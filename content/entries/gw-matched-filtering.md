---
type: entry
slug: gw-matched-filtering
title: Gravitational-wave matched filtering
field: physics
kind: ALGORITHM
status: ACTIVE
summary: Finding faint signals by correlating detector data against banks of theoretical waveforms.
reliedOn: Compact-binary detections by LIGO/Virgo/KAGRA and the parameter estimates derived from them depend on this pipeline.
references:
  - title: Observation of Gravitational Waves from a Binary Black Hole Merger
    url: https://doi.org/10.1103/PhysRevLett.116.061102
    kind: paper
timeline:
  - date: 2015-09-14
    title: "GW150914: first direct detection"
    body: A binary black hole merger was detected by both LIGO sites; matched-filter searches identified it with high significance. Announced Feb 2016.
explainer:
  oneLine: Finding a faint, known-shaped signal in noisy data by sliding a copy of the expected signal along it.
  flow:
    - Know the expected signal shape
    - Build many templates for all masses
    - Slide each template along noisy data
    - Peak in signal-to-noise = candidate
    - Glitch checks reject fake signals
  glossary:
    - term: gravitational wave
      meaning: A tiny ripple in space itself, produced for example when two black holes orbit and merge.
      link: https://en.wikipedia.org/wiki/Gravitational_wave
    - term: matched filter
      meaning: A way of finding a known signal shape in noise by correlating the data with a copy of that shape.
      link: https://en.wikipedia.org/wiki/Matched_filter
    - term: template bank
      meaning: A big collection of predicted signal shapes covering the range of masses and spins one searches for.
      link: https://en.wikipedia.org/wiki/Matched_filter
    - term: signal-to-noise ratio
      meaning: How big a signal is compared with the typical size of the noise.
      link: https://en.wikipedia.org/wiki/Signal-to-noise_ratio
    - term: power spectral density
      meaning: A plot of how much noise power sits at each frequency.
      link: https://en.wikipedia.org/wiki/Spectral_density
    - term: glitch
      meaning: A short, loud burst of instrumental or environmental noise in a detector that can imitate a real signal.
      link: https://en.wikipedia.org/wiki/LIGO
    - term: chirp
      meaning: A signal whose frequency rises over time, like the sound of the final orbits of two merging black holes.
      link: https://en.wikipedia.org/wiki/Chirp
    - term: LIGO
      meaning: The US-based pair of laser detectors that made the first direct detection of gravitational waves in 2015.
      link: https://en.wikipedia.org/wiki/LIGO
    - term: Gaussian noise
      meaning: Random noise whose values follow a bell curve; the matched filter is the best linear detector for it.
      link: https://en.wikipedia.org/wiki/Gaussian_noise
    - term: chi-squared veto
      meaning: A check that a candidate’s signal builds up across frequency bands the way a real chirp would; glitches usually fail it.
      link: https://en.wikipedia.org/wiki/Chi-squared_test
  readFirst:
    - title: Matched filter (Wikipedia)
      url: https://en.wikipedia.org/wiki/Matched_filter
      why: Plain description of why correlating with the expected shape is the best test in Gaussian noise.
    - title: Gravitational-wave open science tutorials (GWOSC)
      url: https://gwosc.org/tutorials/
      why: Hands-on tutorials using real LIGO data, including a matched-filtering lesson.
    - title: "LIGO: what are gravitational waves"
      url: https://www.ligo.caltech.edu/page/what-are-gw
      why: A friendly introduction to the signals being searched for.
site:
  published: true
  aiReviewed: true
---

## Idea

If you know the shape of the signal, the optimal linear detector in Gaussian noise is the **matched filter**: correlate the data with a template, weighted by the inverse noise spectrum.

## In practice

- A **template bank** covers the parameter space of masses and spins.
- Signal-to-noise ratio peaks above threshold become candidates.
- Consistency tests (e.g. $\chi^2$ vetoes) reject noise glitches.

## Open questions

Bank size explodes for precessing or eccentric systems; ML-based search is an active alternative.

# Plain explanation

Imagine a loud party and you are listening for one friend's laugh. You know what that laugh sounds like, so even when it is buried in chatter, your brain picks it out. You are comparing what you hear to a pattern you already carry in your head.

Gravitational-wave detectors do the same thing with a computer. When two black holes spiral together, they send out ripples in space. By the time the ripples reach Earth, they are far smaller than the shaking of the detector from ordinary noise. But physicists know, from Einstein's equations, what the ripple should look like: a short sound that rises in pitch and gets louder, like a chirp.

So the computer holds up a copy of the expected chirp and slides it along the data. When the copy lines up with a real signal, a clear peak appears. This is called matched filtering. If the data hold nothing but noise, no peak stands out.

Because black holes come in many sizes, the computer has to try thousands of chirp shapes. This collection is called a template bank. A peak that appears must also pass checks, because sudden bursts of noise can fake a chirp.

Where the analogy breaks: a human ear copes with unknown voices, but matched filtering only finds shapes you thought of ahead of time. A signal that nobody predicted could slip past it.

# Student explanation

**The goal.** A gravitational-wave detector outputs a long stream of numbers, s(t) = n(t) + h(t), where n is noise and h is a possible signal. The signal is typically much smaller than the noise at any single moment. We want the best possible way to decide whether h is there.

**The matched filter.** If the noise is Gaussian (bell-curve distributed) and we know the exact shape of h, the best linear test is the _matched filter_. We correlate the data with the template, which means we multiply them together and add up over time, and we down-weight the frequencies where the detector is noisy. The weighting uses the noise power spectral density, a plot of how much noise the detector has at each frequency. The output is a signal-to-noise ratio (SNR), measured in units of the noise scatter. A peak of SNR above a chosen threshold (for example 8) makes a candidate.

**Template banks.** The signal depends on parameters such as the two masses and spins. The pipeline lays down a grid of templates covering the region of parameters. The grid must be dense enough that a real signal always matches some template with only a small loss of SNR (typically a few percent). Banks used in real searches, which include spins, hold hundreds of thousands of templates.

**Fighting false alarms.** Real detectors produce short bursts of non-Gaussian noise called glitches. Pipelines apply consistency tests, such as a chi-squared (χ²) veto, which checks whether the SNR accumulates across frequency bands in the way a true chirp would. They also demand that two detectors see the same signal at nearly the same time. The false-alarm rate is measured by shifting the data from one detector in time, which destroys real coincidences, and counting what is left.

**Limits and open questions.**

- The bank must be much bigger when the black holes spin with tilted axes (precession) or travel on elliptical orbits (eccentricity), because the signal shape has more free parameters.
- Matched filtering can only find what the templates describe.
- Machine-learning searches are an active alternative that can be faster, though they are not yet as trusted for claims of detection.
