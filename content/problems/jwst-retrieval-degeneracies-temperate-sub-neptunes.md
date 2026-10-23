---
type: problem
slug: jwst-retrieval-degeneracies-temperate-sub-neptunes
title: Retrieval degeneracies in JWST transmission spectra of temperate sub-Neptunes and biosignature claims
entry: exoplanet-detection
status: OPEN
origin: Highlighted by the contested 2023–2025 claims of dimethyl sulfide in the atmosphere of K2-18 b.
ratings:
  difficulty: 48
  applicationValue: 10
  leverage: 36
workMix:
  theory: 30
  engineering: 15
  compute: 35
  empirical: 20
verification:
  route: REPRODUCTION
sources:
  - title: Identification of carbon dioxide in an exoplanet atmosphere (JWST ERS Team 2022)
    url: https://arxiv.org/abs/2208.11692
  - title: New Constraints on DMS and DMDS in the Atmosphere of K2-18 b from JWST MIRI (Madhusudhan et al. 2025)
    url: https://arxiv.org/abs/2504.12267
  - title: Insufficient evidence for DMS and DMDS in the atmosphere of K2-18 b (Luque et al. 2025)
    url: https://arxiv.org/abs/2505.13407
  - title: K2-18b Does Not Meet The Standards of Evidence For Life (Stevenson et al. 2025)
    url: https://arxiv.org/abs/2508.05961
  - title: A Comprehensive Reanalysis of K2-18 b's JWST NIRISS+NIRSpec Transmission Spectrum (Schmidt et al. 2025)
    url: https://arxiv.org/abs/2501.18477
  - title: A water-rich interior in the temperate sub-Neptune K2-18 b revealed by JWST (Hu et al. 2025)
    url: https://arxiv.org/abs/2507.12622
timeline:
  - date: 2022-08-24
    title: CO₂ in WASP-39 b
    body: JWST ERS data identify CO₂ in an exoplanet atmosphere.
    source: https://arxiv.org/abs/2208.11692
  - date: 2025-04-16
    title: DMS/DMDS claim for K2-18 b
    body: MIRI spectrum interpreted as 3σ evidence for DMS or DMDS.
    source: https://arxiv.org/abs/2504.12267
  - date: 2025-05-19
    title: Joint reanalysis
    body: Luque et al. find insufficient evidence for DMS and DMDS.
    source: https://arxiv.org/abs/2505.13407
  - date: 2025-08-08
    title: MIRI red-noise analysis
    body: Stevenson et al. show MIRI binning choices drive the DMS/DMDS preference.
    source: https://arxiv.org/abs/2508.05961
explainer:
  oneLine: When Webb data hint at a life-linked gas, how much comes from the data and how much from modelling choices?
  flow:
    - Starlight passes through planet's air
    - Gases leave colour dips in spectrum
    - Fit a model to infer the gases
    - Different model choices change the answer
    - Need tests calibrated on fake spectra
  glossary:
    - term: transmission spectrum
      meaning: The colour-by-colour dimming of starlight that passes through a planet's atmosphere during a transit.
      link: https://en.wikipedia.org/wiki/Transmission_spectroscopy
    - term: atmospheric retrieval
      meaning: Fitting models to a spectrum to infer which gases are present and how much.
      link: https://en.wikipedia.org/wiki/Extraterrestrial_atmosphere
    - term: sub-Neptune
      meaning: A planet between the size of Earth and Neptune.
      link: https://en.wikipedia.org/wiki/Sub-Neptune
    - term: K2-18 b
      meaning: A planet about 2.6 times Earth's radius in the habitable zone of a red dwarf star 124 light-years away.
      link: https://en.wikipedia.org/wiki/K2-18b
    - term: dimethyl sulfide (DMS)
      meaning: A sulfur-containing gas that on Earth is produced mainly by marine life.
      link: https://en.wikipedia.org/wiki/Dimethyl_sulfide
    - term: biosignature
      meaning: A sign, such as a gas, that could point to the presence of life.
      link: https://en.wikipedia.org/wiki/Biosignature
    - term: haze
      meaning: A layer of small particles high in an atmosphere that scatters light and hides what is underneath.
      link: https://en.wikipedia.org/wiki/Haze
    - term: MIRI
      meaning: The Mid-Infrared Instrument on the James Webb Space Telescope.
      link: https://en.wikipedia.org/wiki/Mid-Infrared_Instrument
    - term: stellar contamination
      meaning: Errors in a planet's spectrum caused by spots and bright regions on its star.
      link: https://en.wikipedia.org/wiki/Starspot
    - term: red noise
      meaning: Random variation with a slow, correlated pattern, which can resemble real features.
      link: https://en.wikipedia.org/wiki/Colors_of_noise
    - term: mean molecular weight
      meaning: The average mass of the gas molecules in an atmosphere; light (hydrogen-rich) atmospheres are puffier and easier to study.
      link: https://en.wikipedia.org/wiki/Molar_mass
    - term: prior
      meaning: In Bayesian statistics, what you assume about a quantity before looking at the data.
      link: https://en.wikipedia.org/wiki/Prior_probability
  readFirst:
    - title: K2-18b (Wikipedia)
      url: https://en.wikipedia.org/wiki/K2-18b
      why: Summary of the planet and the debate around it.
    - title: Biosignature (Wikipedia)
      url: https://en.wikipedia.org/wiki/Biosignature
      why: What counts as a sign of life and why it is hard.
    - title: "NASA: Webb finds methane and carbon dioxide on K2-18 b (2023)"
      url: https://science.nasa.gov/missions/webb/webb-discovers-methane-carbon-dioxide-in-atmosphere-of-k2-18-b/
      why: The first Webb spectrum of K2-18 b; its tentative DMS hint was not confirmed by later analyses.
raw:
  stateOfArt: "Madhusudhan et al. reported 3σ evidence for DMS and/or DMDS in the MIRI spectrum of K2-18 b (arXiv:2504.12267, April 2025). Luque et al. (arXiv:2505.13407; A&A 700, A284, 2025) found insufficient evidence for DMS and DMDS in a joint 0.6–12 µm analysis of NIRISS, NIRSpec and MIRI data, showed that ethane and other methyl-bearing molecules fit equally well, and estimated that about 25 more MIRI transits would be needed for a 3σ test; Stevenson et al. (arXiv:2508.05961, accepted to AJ) find that the MIRI spectrum is dominated by binning-dependent red noise, that 87.5% of retrievals with their preferred binning do not favour DMS/DMDS, and that K2-18 b does not meet astrobiology standards of evidence; and Schmidt et al. (arXiv:2501.18477, accepted to AJ), with 60 data treatments and over 250 retrievals, confirm CH₄ at about 4σ but find no statistically reliable evidence for CO₂ or DMS. Hu et al. (arXiv:2507.12622) added four NIRSpec transits and find DMS below 3σ (below about 2σ without haze), and 2026 modelling papers reproduce the spectrum without DMS, for example with a hazy 200–400× solar atmosphere (Lavvas et al., arXiv:2603.26474). The WASP-39 b early-release programme established CO₂ detection and the capabilities of the JWST instruments (arXiv:2208.11692). The community conclusion is that biosignature claims on current JWST data are not robust; no accepted detection of a biosignature exists. No new JWST observations of K2-18 b were published in 2026 as of October."
site:
  aiReviewed: true
---

Determine how much of the inferred composition (CH₄, CO₂, DMS, DMDS, H₂O, NH₃) of a temperate sub-Neptune such as K2-18 b from JWST NIRISS, NIRSpec and MIRI transmission spectra is constrained by data rather than by retrieval-model assumptions: the number of free parameters, the treatment of clouds and hazes, the temperature–pressure profile, the stellar-contamination correction, instrument offsets between NIRISS, NIRSpec and MIRI, and the line lists and cross-sections for heavy organics. The task is to define a retrieval protocol, with model comparison that is calibrated using simulated spectra with known truth, in which a gas detection at a stated significance is stable to the choice of retrieval code, priors and data reduction, and to quantify, in the same framework, which molecules are detectable as functions of instrument, number of transits and mean molecular weight.

# Applications

Robust retrieval protocols determine which JWST and Ariel/ELT observations can support claims about habitability, and the model-comparison methods transfer to all atmospheric characterisation. No other application.

# Resolution criteria

Resolved when a retrieval protocol validated on blind injection–retrieval tests reproduces the true composition of simulated temperate-planet spectra to within stated confidence intervals and, applied to K2-18 b data (and a second planet), yields identical detection conclusions across at least three independent codes.

# Rating rationale

The old biosignatures entry (67) targeted detecting life; the re-scoped retrieval-robustness problem is statistical and more tractable, though MIRI red noise and prior sensitivity are unsolved. Leverage 36, below the old 41, because it is a methods gate for interpreting JWST, Ariel and ELT spectra rather than the life question itself. Application value 10.

# Work mix rationale

Statistical methodology and simulation, with new JWST data and laboratory cross-sections.

# Verification

A retrieval protocol must be validated on blind injection-retrieval tests, recovering the true composition of simulated temperate-planet spectra within stated confidence intervals, and then applied to K2-18 b data and a second planet with identical detection conclusions across at least three independent retrieval codes. The spec fixes the simulated spectra, noise model, priors and detection threshold; JWST data are public, so the runs can be repeated.

# Plain explanation

The James Webb Space Telescope can study the air of some planets around other stars. It does this by looking at starlight that passes through a planet's atmosphere as the planet crosses in front of its star. Each gas absorbs particular colours, so the dips in the colours reveal which gases are there.

In 2025 a team reported hints of two gases, which on Earth are made mainly by living things, in a planet called K2-18 b. But other teams reanalysed the same data and did not find convincing evidence, and most experts now judge the hint unconvincing.

Why can the same data give different answers? Because turning a spectrum into a list of gases requires a model with many choices: how many gases to allow, how to treat clouds and haze, what the temperature profile is, how to correct for the star's own spots, and how to line up data from different instruments. Different choices can make the same hint look strong or disappear. The data are also noisy, and several carbon compounds leave similar signs.

The aim is to define a testing procedure, calibrated on fake spectra whose answer is known, so that a claimed detection is stable no matter which reasonable choices are made.

Where the analogy breaks: reading a spectrum is a bit like identifying a song from a muffled recording, but the tune here has many possible sources and no one knows the original.

# Student explanation

**The problem.** In retrieval, a forward model of a planet's atmosphere (composition, temperature–pressure profile, clouds and hazes) is fitted to a transmission spectrum, giving probabilities for the abundances of molecules. The problem is to determine how much of the inferred composition (CH₄, CO₂, DMS, DMDS, H₂O, NH₃) of a temperate sub-Neptune like K2-18 b, from JWST NIRISS, NIRSpec and MIRI spectra, is constrained by data rather than by modelling assumptions.

**Sources of model dependence.**

- the number of free parameters;
- the treatment of clouds and hazes;
- the temperature–pressure profile;
- the correction for stellar contamination (unocculted starspots and faculae);
- offsets between instruments;
- the molecular line lists and cross-sections, which for heavy organics are incomplete.

**What a solution looks like.** A retrieval protocol with model comparison calibrated on simulated spectra with known truth, in which a gas detection at a stated significance is stable to the choice of retrieval code, priors and data reduction, and which also tells which molecules are detectable as functions of instrument, number of transits and mean molecular weight.

**State of the art.** Madhusudhan and collaborators reported 3σ evidence for DMS and/or DMDS in the MIRI spectrum of K2-18 b (April 2025). Luque and collaborators found insufficient evidence in a joint 0.6 to 12 micron analysis of three instruments, showed that ethane and other methyl-bearing molecules fit equally well, and estimated that about 25 more MIRI transits would be needed for a 3σ test. Stevenson and collaborators find that the MIRI spectrum is dominated by binning-dependent red noise, that 87.5% of retrievals with their preferred binning do not favour DMS/DMDS, and that the claims do not meet astrobiology standards of evidence. Schmidt and collaborators, with 60 data treatments and over 250 retrievals, confirm CH₄ at about 4σ but find no statistically reliable evidence for CO₂ or DMS. Hu and collaborators added four NIRSpec transits and find DMS below 3σ. Modelling papers have reproduced the spectrum without DMS. The WASP-39 b early-release programme established CO₂ detection and the capabilities of the instruments.

**Conclusion so far.** Biosignature claims on current JWST data are not robust; no accepted detection of a biosignature exists.
