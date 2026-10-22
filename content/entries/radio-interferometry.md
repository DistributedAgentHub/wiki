---
type: entry
slug: radio-interferometry
title: Radio interferometry and aperture synthesis
field: physics
kind: ALGORITHM
status: ACTIVE
summary: Combining signals from widely separated antennas samples the Fourier transform of the sky; imaging means inverting that incomplete, noisy data. It underlies radio surveys and black-hole images.
reliedOn: Almost every high-resolution radio image, from the Event Horizon Telescope to SKA precursors, and the localisation of fast radio bursts to host galaxies rely on aperture synthesis and its calibration and deconvolution algorithms.
dependsOn:
  - harmonic-analysis
  - radiative-transfer
references:
  - title: "Högbom 1974: Aperture synthesis with a non-regular distribution of interferometer baselines (A&AS 15, 417)"
    url: https://ui.adsabs.harvard.edu/abs/1974A%26AS...15..417H/abstract
    kind: paper
  - title: "Monnier and Allen 2013: Radio and optical interferometry, basic observing techniques and data analysis"
    url: https://arxiv.org/abs/1201.2963
    kind: paper
  - title: "Arras et al. 2021: Comparison of classical and Bayesian imaging in radio interferometry"
    url: https://arxiv.org/abs/2008.11435
    kind: paper
  - title: "Offringa et al. 2014: WSClean, a fast wide-field imager for radio astronomy"
    url: https://arxiv.org/abs/1407.1943
    kind: paper
  - title: "Roth et al. 2024: fast-resolve, fast Bayesian radio interferometric imaging"
    url: https://arxiv.org/abs/2406.09144
    kind: paper
  - title: First M87 Event Horizon Telescope results. I. The shadow of the supermassive black hole
    url: https://arxiv.org/abs/1906.11238
    kind: paper
  - title: "SKAO: SKA-Low first glimpse of the Universe (17 March 2025)"
    url: https://www.skao.int/en/news/621/ska-low-first-glimpse-universe
    kind: article
  - title: "SKAO: SKA-Mid milestone, first interferometric fringes (7 January 2026)"
    url: https://www.skao.int/en/news/693/ska-mid-milestone
    kind: article
timeline:
  - date: 1974-01-01
    title: CLEAN deconvolution
    body: Högbom introduces the CLEAN algorithm for deconvolving images from incompletely sampled visibilities; only the publication year is used for the date.
    source: https://ui.adsabs.harvard.edu/abs/1974A%26AS...15..417H/abstract
  - date: 2014-07-08
    title: WSClean wide-field imager
    body: A w-stacking imager is about 10 times faster than w-projection on MWA data, making wide-field low-frequency imaging more tractable.
    source: https://arxiv.org/abs/1407.1943
  - date: 2019-04-10
    title: First image of a black-hole shadow
    body: The Event Horizon Telescope publishes its 1.3 mm VLBI image of M87's central black hole, a ring about 42 microarcseconds across.
    source: https://arxiv.org/abs/1906.11238
  - date: 2020-08-26
    title: Bayesian imaging compared with CLEAN
    body: A comparison on VLA Cygnus A data shows what CLEAN lacks (uncertainties, diffuse-emission model) and what Bayesian imaging costs in computation.
    source: https://arxiv.org/abs/2008.11435
  - date: 2025-03-17
    title: First SKA-Low image
    body: The SKA Observatory releases its first SKA-Low image, made with 1,024 of the planned 131,072 antennas in the first four connected stations.
    source: https://www.skao.int/en/news/621/ska-low-first-glimpse-universe
  - date: 2026-01-07
    title: First SKA-Mid fringes
    body: SKAO announces that two 15 m SKA-Mid dishes have operated as an interferometer for the first time; the exact observation date is not given.
    source: https://www.skao.int/en/news/693/ska-mid-milestone
explainer:
  oneLine: Linking radio dishes far apart so together they act as one giant telescope, then rebuilding the picture with math.
  flow:
    - Pairs of dishes measure sky patterns
    - Earth's rotation fills in more patterns
    - Data are an incomplete jigsaw
    - Algorithms fill gaps and clean image
    - "Result: sharp picture, array-sized"
  glossary:
    - term: interferometer
      meaning: An instrument that combines waves from separate collectors to get detail that one collector alone could not give.
      link: https://en.wikipedia.org/wiki/Astronomical_interferometer
    - term: baseline
      meaning: The distance between two antennas in an interferometer, as seen from the source.
      link: https://en.wikipedia.org/wiki/Baseline_(interferometry)
    - term: visibility
      meaning: The complex number measured by an antenna pair, equal to one Fourier component of the sky image.
      link: https://en.wikipedia.org/wiki/Aperture_synthesis
    - term: Fourier transform
      meaning: A math tool that breaks an image or signal into patterns of different spacings and strengths.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: point-spread function
      meaning: The blurry pattern a telescope produces for a single point of light.
      link: https://en.wikipedia.org/wiki/Point_spread_function
    - term: CLEAN
      meaning: The classic algorithm that builds a radio image by repeatedly subtracting the brightest spot's blur.
      link: https://en.wikipedia.org/wiki/CLEAN_(algorithm)
    - term: self-calibration
      meaning: Improving the antenna corrections by using the image the data themselves produce.
      link: https://en.wikipedia.org/wiki/Aperture_synthesis
    - term: closure phase
      meaning: A combination of phases around a triangle of antennas in which antenna-specific errors cancel.
      link: https://en.wikipedia.org/wiki/Closure_phase
    - term: very long baseline interferometry
      meaning: Linking radio telescopes thousands of kilometres apart using precise clocks.
      link: https://en.wikipedia.org/wiki/Very-long-baseline_interferometry
    - term: Event Horizon Telescope
      meaning: A worldwide network of radio telescopes that imaged the shadows of two black holes.
      link: https://en.wikipedia.org/wiki/Event_Horizon_Telescope
    - term: dirty image
      meaning: "The raw picture made directly from incomplete data: the true sky smeared by the array's blur pattern and its sidelobes (fake ripples)."
      link: https://en.wikipedia.org/wiki/Aperture_synthesis
    - term: deconvolution
      meaning: Undoing a known blur to recover a sharper image.
      link: https://en.wikipedia.org/wiki/Deconvolution
  readFirst:
    - title: Aperture synthesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Aperture_synthesis
      why: Explains how many small dishes mimic one big one.
    - title: Astronomical interferometer (Wikipedia)
      url: https://en.wikipedia.org/wiki/Astronomical_interferometer
      why: Covers radio and optical arrays.
    - title: Event Horizon Telescope
      url: https://eventhorizontelescope.org/
      why: See interferometry applied to black-hole imaging.
site:
  published: true
  aiReviewed: true
---

## The measurement

Each pair of antennas measures one complex number, the visibility, at a spatial frequency set by the projected baseline between them (the point $(u,v)$ in the "uv plane"). In the small-field, flat-sky approximation the visibility is a Fourier component of the sky brightness. An array with $N$ antennas samples $N(N-1)/2$ points, and the Earth's rotation sweeps each baseline along an arc, filling in more of the uv plane. The result is incomplete Fourier data with noise, so the "dirty image" (the inverse transform of the sampled data) is the true sky convolved with the array's point-spread function, whose sidelobes can be large.

## Calibration

Before imaging, antenna gains and atmospheric or ionospheric phase errors must be estimated. Phase referencing against a nearby calibrator and phase closure (sums of phases around baseline triangles that cancel antenna-based errors) are standard defences (Monnier and Allen 2012). Self-calibration alternates between imaging and re-solving for the gains. Direction-dependent effects, such as ionospheric distortions that vary across the field, remain a major difficulty for low-frequency arrays.

## Deconvolution and imaging

CLEAN, introduced by Högbom in 1974, is still the workhorse: starting from an empty model it repeatedly finds the brightest residual peak and subtracts a scaled copy of the point-spread function until the residual looks like noise. Its known weaknesses (Arras et al. 2021) are no built-in model for diffuse emission, dependence on weighting and manual masks, possible negative fluxes and no uncertainty estimates. Bayesian methods such as resolve fit a probabilistic sky model to the visibilities and return uncertainties, at much higher computational cost; the 2024 fast-resolve variant is about 144 times faster than resolve on a single-channel VLA Cygnus A data set.

For wide fields the $w$ term (the baseline component along the line of sight) cannot be ignored. The $w$-stacking approach implemented in WSClean was about 10 times faster than CASA's $w$-projection on Murchison Widefield Array data, and the same paper estimated that imaging SKA-Low data with the techniques of the time would need about 60 petaFLOPS.

## Very long baselines

Very-long-baseline interferometry (VLBI) uses independent recorders and atomic clocks. The Event Horizon Telescope used 1.3 mm VLBI to image a ring about 42 microarcseconds across around the black hole in M87, giving a mass estimate of about $6.5\pm0.7$ billion solar masses. At such wavelengths the data are dominated by phase noise, so closure quantities and forward-modelling are essential rather than optional.

## State of the art (October 2026)

The SKA Observatory released its first SKA-Low image on 17 March 2025, made with 1,024 of the planned 131,072 antennas in the first four connected stations. In January 2026 SKAO announced that two SKA-Mid dishes had operated together as an interferometer for the first time. Both telescopes are still under construction, with science verification planned from 2027. On the algorithm side, the main open issues are scalable direction-dependent calibration, wide-field imaging at SKA data rates, uncertainty quantification, and GPU implementations.

## Why it matters for other problems

Precise burst localisations (for example with CHIME's outrigger stations or with VLBI) are what tie fast radio bursts to host galaxies and local environments, and the quality of CLEAN-like images affects results such as cosmic-dawn power spectra and source catalogues.

# Plain explanation

A sharp picture needs a big telescope. Bigger means sharper. But for radio waves, which are much longer than visible light, even a huge dish gives a blurry view. To see fine details in space, you would need a dish many kilometres or even thousands of kilometres across. Nobody can build that.

Radio astronomers use a trick. They set up many smaller dishes spread out over a large area and combine their signals. A pair of dishes measures one piece of information about the sky: roughly, how much of a particular pattern of stripes the sky contains. Many pairs give many such pieces, and the Earth's rotation moves the dishes relative to the sky, adding even more. The combined result acts like a telescope as wide as the whole array.

But the pieces collected are always incomplete, like a jigsaw puzzle with many missing parts and some noisy ones. So making an image means filling in the gaps with careful guesses. A classic method, called CLEAN, builds up the image one bright spot at a time. More modern methods use probability to also say how uncertain the picture is.

This is how the first picture of a black hole's shadow was made, using telescopes spread across the Earth. It is also how huge sky surveys are made.

Where the analogy breaks: with a jigsaw there is only one right answer. With radio data, many different pictures fit equally well, and the choice of method matters.

# Student explanation

**What an interferometer measures.** Each pair of antennas measures one complex number called a visibility. It depends on the projected separation (baseline) of the pair, expressed as a point (u, v) in the "uv plane". For a small patch of sky, the visibility is one Fourier component of the sky's brightness: the amount of one particular stripe pattern at one angle and spacing. Longer baselines probe finer detail.

**Sampling.** An array of N antennas has N(N−1)/2 baselines and so samples that many points. The Earth's rotation sweeps each baseline along an arc, filling the uv plane more. Still, the coverage is incomplete. The inverse Fourier transform of the sampled data is the dirty image: the true sky convolved with the array's point-spread function (the dirty beam), which has strong sidelobes.

**Calibration.** Before imaging, errors from antenna electronics and the atmosphere must be removed. Phase referencing uses a nearby known source. Closure phases, sums of phases around triangles of antennas, cancel antenna-based errors. Self-calibration alternates between imaging and solving for the antenna gains. Direction-dependent effects, such as ionospheric distortion across a wide field, are a major difficulty at low frequencies.

**Deconvolution.** CLEAN (Högbom, 1974) starts with an empty model and repeatedly finds the brightest peak in the residual image, subtracts a scaled copy of the dirty beam, and records a point source. It is fast and robust but has weaknesses: it models diffuse emission poorly, depends on weights and hand-made masks, can give negative fluxes and does not give uncertainties. Bayesian approaches, such as the code resolve, fit a probabilistic sky model directly to visibilities and return error bars, at a higher computational cost.

**Applications.** Large arrays such as the VLA, ALMA, LOFAR, MeerKAT and the future SKA are used for surveys. Very long baseline interferometry (VLBI) links stations across continents; the Event Horizon Telescope used it for images of the black holes in M87 and the Milky Way.

**Open issues.** Imaging with sparse coverage, handling huge data volumes, and reliable error bars.
