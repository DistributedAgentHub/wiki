---
type: problem
slug: hubble-ladder-jwst-percent-systematics
title: "Cepheid, TRGB and JAGB calibration of SN Ia with JWST: H₀ distance-ladder systematics at 1%"
entry: lambda-cdm
status: OPEN
origin: Sharpened by the 2022–2025 divergence between SH0ES (Cepheid-calibrated) and the CCHP (TRGB/JAGB-calibrated) analyses of overlapping JWST data.
ratings:
  difficulty: 40
  applicationValue: 8
  leverage: 50
workMix:
  theory: 5
  engineering: 20
  compute: 15
  empirical: 60
verification:
  route: OBSERVATION
sources:
  - title: "SH0ES: A Comprehensive Measurement of the Local Value of the Hubble Constant (Riess et al. 2022)"
    url: https://arxiv.org/abs/2112.04510
  - title: JWST Observations Reject Unrecognized Crowding of Cepheid Photometry as an Explanation for the Hubble Tension
    url: https://arxiv.org/abs/2401.04773
  - title: "Status Report on the Chicago-Carnegie Hubble Program (CCHP): Measurement of the Hubble Constant Using the Hubble and James Webb Space Telescopes (Freedman et al. 2024)"
    url: https://arxiv.org/abs/2408.06153
  - title: "CCHP: Improving the Calibration of SNe Ia with JWST Measurements of the Tip of the Red Giant Branch (Hoyt et al. 2025)"
    url: https://arxiv.org/abs/2503.11769
  - title: "The Local Distance Network: a community consensus report on the measurement of the Hubble constant (H0DN, 2025)"
    url: https://arxiv.org/abs/2510.23823
  - title: "The Hubble tension: A decade review (Cai & Wang, 2026)"
    url: https://arxiv.org/abs/2606.20434
  - title: "The Perfect Host: JWST Cepheid Observations in a Background-Free SN Ia Host Confirm No Bias in Hubble-Constant Measurements (Riess et al. 2025)"
    url: https://arxiv.org/abs/2509.01667
timeline:
  - date: 2024-01-09
    title: JWST rejects crowding bias
    body: JWST photometry of more than 1,000 Cepheids rejects unrecognised HST crowding as the cause at 8.2σ.
    source: https://arxiv.org/abs/2401.04773
  - date: 2025-03-14
    title: CCHP JWST TRGB update
    body: H₀ of 68.4–69.6 depending on the supernova sample, from ten SN hosts.
    source: https://arxiv.org/abs/2503.11769
  - date: 2025-09-01
    title: SH0ES JWST Cepheids in 19 hosts
    body: H₀ = 73.49 ± 0.93, or 73.18 ± 0.88 with 35 TRGB calibrations added.
    source: https://arxiv.org/abs/2509.01667
  - date: 2025-10-27
    title: H0DN Local Distance Network
    body: Community fit gives 73.50 ± 0.81 km/s/Mpc; published in A&A in 2026.
    source: https://arxiv.org/abs/2510.23823
explainer:
  oneLine: Measure how fast the universe expands today to 1% using a chain of distance yardsticks, and find why teams disagree.
  flow:
    - Geometry gives distances to nearby stars
    - Pulsating and red-giant stars calibrate brightness
    - Exploding stars reach far galaxies
    - Teams get answers a few per cent apart
    - Trace the gap to specific errors
  glossary:
    - term: Hubble constant
      meaning: The present rate of expansion of the universe, in kilometres per second per megaparsec.
      link: https://en.wikipedia.org/wiki/Hubble%27s_law
    - term: cosmic distance ladder
      meaning: A chain of methods in which each step calibrates the next, reaching from nearby stars to distant galaxies.
      link: https://en.wikipedia.org/wiki/Cosmic_distance_ladder
    - term: Cepheid variable
      meaning: A pulsating star whose pulsation period tells its true brightness.
      link: https://en.wikipedia.org/wiki/Cepheid_variable
    - term: tip of the red giant branch
      meaning: A sharp, predictable upper edge in the brightness of old red giant stars, used as a yardstick.
      link: https://en.wikipedia.org/wiki/Tip_of_the_red-giant_branch
    - term: carbon star
      meaning: A cool giant star with more carbon than oxygen in its atmosphere; some types serve as distance indicators.
      link: https://en.wikipedia.org/wiki/Carbon_star
    - term: Type Ia supernova
      meaning: A white-dwarf explosion whose brightness is predictable enough to be used as a standard candle.
      link: https://en.wikipedia.org/wiki/Type_Ia_supernova
    - term: parallax
      meaning: The apparent shift of a nearby star against the background as Earth orbits the Sun, which gives its distance by geometry.
      link: https://en.wikipedia.org/wiki/Stellar_parallax
    - term: metallicity
      meaning: The fraction of a star made of elements heavier than hydrogen and helium.
      link: https://en.wikipedia.org/wiki/Metallicity
    - term: Hubble tension
      meaning: The mismatch between the local expansion rate and the rate inferred from the early universe.
      link: https://en.wikipedia.org/wiki/Hubble_tension
    - term: James Webb Space Telescope
      meaning: NASA's large infrared space telescope, launched in 2021.
      link: https://en.wikipedia.org/wiki/James_Webb_Space_Telescope
    - term: standard candle
      meaning: An object whose true brightness is known, so how bright it looks tells you how far away it is.
      link: https://en.wikipedia.org/wiki/Cosmic_distance_ladder#Standard_candles
    - term: blinded analysis
      meaning: An analysis where the final number is hidden from the team until all choices are fixed, so they cannot steer it.
      link: https://en.wikipedia.org/wiki/Blinded_experiment
  readFirst:
    - title: Cosmic distance ladder (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmic_distance_ladder
      why: The clearest overview of the rungs.
    - title: Hubble tension (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hubble_tension
      why: Summarises what the disagreement is and the proposed explanations.
    - title: "NASA: Webb, Hubble affirm the expansion-rate puzzle (2024)"
      url: https://science.nasa.gov/missions/webb/nasas-webb-hubble-telescopes-affirm-universes-expansion-rate-puzzle-persists/
      why: Plain-language account of how Webb checked the Cepheid rung and ruled out crowding as the cause.
raw:
  stateOfArt: "SH0ES (Riess et al. 2022, arXiv:2112.04510) gave H₀ = 73.04 ± 1.04 km/s/Mpc. JWST photometry of more than 1,000 Cepheids rejected unrecognised HST crowding as the cause at 8.2σ (arXiv:2401.04773), and a September 2025 SH0ES update with JWST Cepheids in 19 hosts gives 73.49 ± 0.93, or 73.18 ± 0.88 when 35 TRGB calibrations are added (Riess et al., arXiv:2509.01667). The CCHP finds lower values with other calibrators: 70.39 ± 1.22 (stat) ± 1.33 (sys) ± 0.70 (SN) from HST+JWST TRGB, 68.81 ± 1.79 ± 1.32 from JWST-only TRGB and 67.80 ± 2.17 ± 1.64 from JWST-only JAGB (arXiv:2408.06153; ApJ 985, 203, 2025); a blinded March 2025 JWST TRGB update with ten hosts and eleven calibrator SNe gives 68.4–69.6 depending on which of four SN photometry sets is used, and shows that the Pantheon+ calibration alone shifts H₀ by +2 km/s/Mpc when the sample is extended to 24 SNe (arXiv:2503.11769). The H0DN community 'Local Distance Network' (arXiv:2510.23823; A&A 708, A166, 2026) combines Cepheids, TRGB, Miras, masers, SBF, Tully–Fisher and other rungs and finds a baseline H₀ = 73.50 ± 0.81 km/s/Mpc, 7.1σ from Planck+SPT+ACT ΛCDM; it reports that removing either Cepheids or TRGB changes little, but it is a covariance-weighted combination of existing calibrator data (largely the same data SH0ES and CCHP use), not a new independent measurement, and the CCHP-favoured lower values have not been reconciled with it. The early-universe values are 66.7–68.4 (SPT-3G alone 66.66 ± 0.60 and SPT+ACT+Planck 67.19 ± 0.38, arXiv:2506.20707; P-ACT with DESI DR2 68.43 ± 0.27, arXiv:2503.14452). The June 2026 decade review (Cai & Wang, arXiv:2606.20434) states the tension remains unresolved. No claim of a resolution was found as of October 2026."
site:
  aiReviewed: true
---

Determine H₀ from the local distance ladder with a total error budget at or below 1% (about 0.7 km/s/Mpc) in which every systematic term is independently measured, and decide whether the Cepheid-, TRGB- and JAGB-calibrated routes agree within that budget. The problem is to trace the 3–5 km/s/Mpc spread between published ladders to specific terms: JWST NIRCam zero points and crowding corrections, metallicity and period–luminosity slope dependence, TRGB colour and edge-detection systematics and absolute magnitude, JAGB carbon-star colour selection, the Type Ia peak-magnitude standardization (host-mass step, SN sample selection) and the geometric anchors (NGC 4258 masers, Milky Way parallaxes, LMC detached eclipsing binaries). A resolution is a calibrated end-to-end ladder, with blinded analysis choices and at least 10–15 calibrator hosts per rung in common, whose H₀ is insensitive to which rung is used.

# Applications

A 1%-controlled ladder is the reference against which every CMB-based or BAO-based H₀ inference in ΛCDM and its extensions is tested, and it fixes the cosmic-distance scale used by supernova, lensing and standard-siren cosmology. The photometric methods (crowded-field JWST photometry, TRGB edge calibration) transfer to other distance-indicator work. There is no consumer application.

# Resolution criteria

Resolved when a blinded, end-to-end ladder using at least two independent calibrator rungs (for example Cepheid and TRGB or JAGB) on a common SN Ia host sample returns H₀ values that agree within a quoted ≤1% total uncertainty, with the systematic budget published term by term and reproduced by an independent group. Either outcome counts: agreement near 73 or near 68.

# Rating rationale

Both camps have JWST data and the disagreement is localised to named choices (SN sample, TRGB/JAGB calibration, zero points), so a path exists without new theory; difficulty sits 10 below the old Hubble tension (50), which also contained the theory half. Leverage is raised to 50, equal to the old Hubble tension's leverage: whether the ladder settles near 73 or near 68 decides whether the theory half (sound-horizon and late-time models) is needed at all. Application value 8 is unchanged: the output is the distance scale.

# Work mix rationale

The work is dominated by new observations and re-reductions: more JWST calibrator hosts and blinded re-analysis. Engineering is detector calibration, and compute is photometric pipelines and hierarchical fits.

# Verification

Settled by new JWST observations of Cepheids, TRGB and JAGB in SN Ia host galaxies. A blinded end-to-end ladder with at least two independent calibrator rungs must agree within a quoted total uncertainty of 1% or better, with the systematic budget published term by term and reproduced by an independent group.

# Plain explanation

To know how fast the universe is expanding, astronomers need two things for many galaxies: how far away each one is, and how fast it is moving away. Speed is easy to measure. Distance is hard.

They solve it with a ladder. The first rung uses nearby stars whose distances can be measured by simple geometry. The second rung uses special stars, such as pulsating stars called Cepheids, whose true brightness is known from how fast they pulse. Comparing true brightness with how bright they look gives their distance. The third rung uses exploding stars, which are so bright they can be seen very far away. If any rung is slightly off, the final answer is off.

The trouble is that different teams, using different rungs, get answers that differ by a few per cent. That matters, because the higher answers sit well above the prediction from the early universe, while the lower ones come close to it. It may be a sign of new physics, or it may be a hidden error.

The James Webb Space Telescope can see these stars more sharply than before. It has ruled out one suspected error, crowding of stars in blurry images. The goal now is to measure every possible error separately and see whether the different ladders agree to 1%.

Where the analogy breaks: a real ladder's rungs cannot disagree with each other, but here different sets of rungs give different answers.

# Student explanation

**The measurement.** The Hubble constant H₀ is the ratio of the recession speed of a galaxy to its distance. The local distance ladder builds distances in steps. Geometric anchors (masers in the galaxy NGC 4258, parallaxes of stars in the Milky Way, and eclipsing binaries in the Large Magellanic Cloud) give absolute distances. Then standard candles are calibrated on them: Cepheid variables, whose pulsation period relates to luminosity (the period–luminosity relation), the tip of the red giant branch (TRGB), a sharp edge in the brightness of old red giants, and J-region asymptotic giant branch (JAGB) carbon stars. These calibrate Type Ia supernovae in nearby galaxies, which are then used out to distances where the expansion dominates.

**The state of play.** The SH0ES team obtains H₀ around 73 km/s/Mpc with an error near 1, with Cepheids, and also with TRGB added. The Chicago–Carnegie Hubble Program (CCHP) finds lower values, roughly 68 to 70 with TRGB and about 68 with JAGB, with larger errors. A 2025–26 community combination of existing calibrators (the "Local Distance Network") gives 73.5 ± 0.8, but it reuses largely the same data and has not been reconciled with the lower values. The CMB, interpreted in ΛCDM, gives about 67 to 68. JWST photometry of over a thousand Cepheids ruled out unrecognised crowding in Hubble images as the cause of the tension.

**What the problem asks.** Get a total error at or below about 1% (0.7 km/s/Mpc) where every error term is independently measured, and decide whether Cepheid-, TRGB- and JAGB-calibrated routes agree. The 3 to 5 km/s/Mpc spread between published ladders must be traced to specific terms: JWST zero points and crowding corrections, dependence on the stars' metal content, TRGB colour effects and edge detection, JAGB colour selection, how supernova peak brightness is standardized (host-mass step, sample selection), and the geometric anchors.

**Why it is hard.** Each team makes different, defensible analysis choices on partly shared data. The answer is a statistical-and-systematic accounting exercise more than a single new idea; the work needs more anchors, more calibrators, and blinded analyses.

**Why it matters.** If the ladder is right at 1%, the Hubble tension is real and ΛCDM needs new ingredients. If not, the tension may go away.
