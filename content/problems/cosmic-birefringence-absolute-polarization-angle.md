---
type: problem
slug: cosmic-birefringence-absolute-polarization-angle
title: "Isotropic cosmic birefringence β ≈ 0.3°: separate a parity-violating rotation from polarization-angle miscalibration"
entry: cosmic-microwave-background
status: OPEN
origin: Carroll, Field and Jackiw (1990) proposed birefringence; hint in Planck 2018 data by Minami and Komatsu (2020)
ratings:
  difficulty: 44.5
  applicationValue: 5.5
  leverage: 51
workMix:
  theory: 15
  engineering: 35
  compute: 10
  empirical: 40
verification:
  route: OBSERVATION
sources:
  - title: "Minami, Komatsu: New extraction of the cosmic birefringence from the Planck 2018 polarization data"
    url: https://arxiv.org/abs/2011.11254
  - title: "Eskilt, Komatsu: Improved constraints on cosmic birefringence from the WMAP and Planck CMB polarization data"
    url: https://arxiv.org/abs/2205.13962
  - title: "Diego-Palazuelos, Komatsu: Cosmic birefringence from the Atacama Cosmology Telescope Data Release 6"
    url: https://arxiv.org/abs/2509.13654
  - title: "Eskilt: Cosmic birefringence from a joint analysis of ACT and Planck (preprint)"
    url: https://arxiv.org/abs/2608.06480
  - title: "Lonappan, Keating, Arnold: Differential polarization calibration: a consistency test for cosmic birefringence"
    url: https://arxiv.org/abs/2609.09149
  - title: "Coppi et al.: PROTOCALC drone-borne polarization calibrator for Simons Observatory and CLASS (preprint)"
    url: https://arxiv.org/abs/2502.14473
links:
  - to: dynamical-dark-energy-desi-dr2
    kind: RELATED
    note: An axion-like quintessence field coupled to photons would produce birefringence and also be a candidate for evolving dark energy.
timeline:
  - date: 2020-11-23
    title: First 2.4σ hint of birefringence
    body: Minami and Komatsu use the foreground EB correlation to separate miscalibration from β.
    source: https://arxiv.org/abs/2011.11254
  - date: 2022-05-27
    title: WMAP+Planck 3.6σ
    body: β = 0.342° (+0.094/−0.091) with no frequency dependence.
    source: https://arxiv.org/abs/2205.13962
  - date: 2025-09-17
    title: "ACT DR6: β = 0.215° ± 0.074°"
    body: 2.9σ with the instrumental angle set by an optics model rather than by foregrounds.
    source: https://arxiv.org/abs/2509.13654
  - date: 2026-08-06
    title: "Planck PR4 + ACT DR6: 4.8σ (preprint)"
    body: β = 0.277° ± 0.057° with instrumental priors at face value; 3.5σ in a dust-mitigated test.
    source: https://arxiv.org/abs/2608.06480
explainer:
  oneLine: Is the polarization of the Big Bang light twisted slightly, hinting at new physics, or is it a calibration error?
  flow:
    - Axion-like field could twist light's polarization
    - CMB shows hint of 0.3 degree rotation
    - Tilted detectors give the same signal
    - Need absolute angle calibration
    - Confirm 5 sigma or find a systematic
  glossary:
    - term: polarization
      meaning: The direction in which a light wave wiggles.
      link: https://en.wikipedia.org/wiki/Polarization_(waves)
    - term: cosmic birefringence
      meaning: A rotation of the polarization direction of light travelling across the universe.
      link: https://en.wikipedia.org/wiki/Birefringence
    - term: parity violation
      meaning: A difference between a process and its mirror image.
      link: https://en.wikipedia.org/wiki/Parity_(physics)
    - term: axion
      meaning: A hypothetical very light particle or field; a dark-matter candidate.
      link: https://en.wikipedia.org/wiki/Axion
    - term: E and B modes
      meaning: Two kinds of polarization pattern, gradient-like and swirl-like.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background#Polarization
    - term: EB correlation
      meaning: A statistical relation between E and B patterns that would arise from rotation.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background#Polarization
    - term: Crab Nebula
      meaning: The remnant of a supernova seen in 1054, used as a standard polarized radio source.
      link: https://en.wikipedia.org/wiki/Crab_Nebula
    - term: foreground
      meaning: Emission from our own galaxy that lies in front of the CMB.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background
    - term: Planck satellite
      meaning: The ESA mission that mapped the CMB in detail.
      link: https://en.wikipedia.org/wiki/Planck_(spacecraft)
    - term: cosmic microwave background
      meaning: The oldest light in the universe.
      link: /research/cosmic-microwave-background
    - term: last scattering surface
      meaning: The shell around us from which CMB light last bounced off electrons, about 380,000 years after the Big Bang.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background
    - term: miscalibration angle
      meaning: How far a detector’s assumed polarization direction is off from its true one.
      link: https://en.wikipedia.org/wiki/Polarimetry
  readFirst:
    - title: Birefringence (Wikipedia)
      url: https://en.wikipedia.org/wiki/Birefringence
      why: The general idea of a medium rotating or splitting polarization.
    - title: Cosmic microwave background (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmic_microwave_background
      why: Covers CMB polarization.
    - title: Axion (Wikipedia)
      url: https://en.wikipedia.org/wiki/Axion
      why: The kind of particle that could cause the effect.
site:
  aiReviewed: true
---

A parity-violating coupling of an axion-like field $\phi$ to photons, $\tfrac{g_{\phi\gamma}}{4}\phi F\tilde F$, rotates the plane of linear polarization of CMB photons by an angle $\beta$ between last scattering and today, mixing $E$ and $B$ modes: $C_\ell^{EB,\mathrm{obs}}=\tfrac12\sin(4\beta)\,(C_\ell^{EE}-C_\ell^{BB})$ plus miscalibration terms. A detector miscalibration angle $\alpha$ produces the same signal, so $\alpha+\beta$ is measured; separating them requires an absolute polarization-angle calibration, or the use of Galactic foreground emission as a reference. **Problem:** measure $\beta$ with an absolute angle calibration to $\lesssim 0.05^\circ$ and decide whether $\beta\neq 0$ ($\beta\approx 0.2$–$0.35^\circ$ is indicated) at $\ge 5\sigma$, or show it is a systematic.

# State of the art

Minami and Komatsu (arXiv:2011.11254, PRL 2020) estimated β and the detector angle simultaneously using the Galactic-foreground EB correlation: β = 0.35 ± 0.14° (68%), 2.4σ. Eskilt and Komatsu (arXiv:2205.13962, PRD 2022) combined WMAP and Planck: β = 0.342° (+0.094/−0.091), excluding zero at 3.6σ, with no evidence of frequency dependence (also Eskilt, arXiv:2201.13347). ACT DR6, separating the instrumental angle with a model of the telescope optics, gives β = 0.215° ± 0.074°, 2.9σ (Diego-Palazuelos and Komatsu, arXiv:2509.13654, PRD). A joint Planck PR4 + ACT DR6 analysis gives β = 0.277° ± 0.057°, 4.8σ, if the instrumental-angle priors are taken at face value, and 3.5σ in a dust-mitigated test (Eskilt, arXiv:2608.06480, August 2026, unrefereed). Lonappan, Keating and Arnold (arXiv:2609.09149, ApJL 2026) apply a birefringence-blind differential-calibration estimator to Planck NPIPE maps and reproduce the Minami–Komatsu calibration pattern (χ² = 8.18 for 7 dof), giving β = 0.37 ± 0.12° conditionally; the authors present it as a consistency check, not an independent measurement. The limiting systematic is the absolute angle: the Crab Nebula (Tau A), the standard celestial calibrator, is known to about 0.27° (Aumont et al. 2020), and drone-borne calibrators (e.g. PROTOCALC for Simons Observatory and CLASS) had first flights in 2024–25.

# Applications

A confirmed β ≠ 0 would be evidence of parity-violating physics (axion-like dark energy or dark matter coupled to photons) and set g\_{φγ}; absolute polarization-angle calibration is also required for primordial B-mode searches.

# Resolution criteria

A measurement of β whose instrumental-angle calibration is independent of Galactic foregrounds and of CMB EB itself (an artificial calibrator such as a drone, balloon or satellite source, or a celestial calibrator known to ≲0.05°), giving β ≠ 0 at ≥ 5σ with foreground-model explanations excluded in refereed work; or a result consistent with β = 0 with an uncertainty well below the current ±0.057°.

# Rating rationale

Difficulty 44.5: the signal is at 3–4.8σ depending on calibration priors, and the bottleneck (an absolute angle known to ≲0.05°) has visible routes in drone calibrators, Simons Observatory and LiteBIRD, so it sits below primordial B-modes (55), which need the same calibration plus foreground and delensing control, and above the neutrino-mass tension (37), whose culprits are better isolated. Application value 5.5: none outside physics, just below B-modes (6). Leverage 51: a confirmed parity-violating rotation would be direct evidence for an axion-like field coupled to photons, just below B-modes (54).

# Work mix rationale

Mostly calibration hardware and new data; the dust modelling needs theory and simulation.

# Verification

Needs a new measurement of the birefringence angle with an instrumental-angle calibration independent of Galactic foregrounds and of CMB EB (an artificial calibrator such as a drone, balloon or satellite source, or a celestial calibrator known to about 0.05 degrees), giving a non-zero angle at 5 sigma or more with foreground explanations excluded.

# Plain explanation

Light is a wave that wiggles in some direction, called its polarization. As the oldest light in the universe, the cosmic microwave background, travelled to us for 13 billion years, its direction of wiggle might have rotated slightly. That would happen if space held a new field that treats light differently from its mirror image. This is called cosmic birefringence.

Teams using Planck, WMAP and ACT data find a hint of a tiny rotation of about a third of a degree. That is about how far a clock's minute hand moves in three seconds. Published analyses put it at about 2.4 to 3.6 sigma; one not-yet-reviewed combination reaches 4.8 sigma, but only by trusting assumptions about the instruments. If it is real, it points to new physics, possibly related to dark energy or dark matter.

The catch: detectors tilted by a third of a degree give the same signal. It is like judging whether a picture hangs crooked when you are not sure your own head is level. Nobody can yet calibrate detector angles that well: the standard sky reference, the Crab Nebula, is only known to about a quarter of a degree.

Scientists use the polarization of dust in our galaxy as a reference, and drones carrying calibration sources are being tested.

The task is to measure the true angle to about a twentieth of a degree.

Where the analogy breaks: you could fetch a spirit level for the picture, but there is no spirit level for the sky.

# Student explanation

**The effect.** A parity-violating coupling of an axion-like field φ to photons rotates the plane of linear polarization of CMB photons by an angle β between last scattering and today. This mixes E and B modes: it creates an EB correlation proportional to sin(4β) times the difference between the EE and BB power spectra, in addition to calibration terms.

**The degeneracy.** A detector miscalibration angle α produces the same EB signal, so only α + β is measured. To separate them one needs an absolute polarization-angle calibration, or a physical reference such as Galactic foreground emission, for which the EB correlation is assumed to be small (though dust may carry a small EB signal of its own).

**The problem.** Measure β with an absolute angle calibration to about 0.05 degrees or better, and decide whether β ≠ 0 (a value between 0.2 and 0.35 degrees is indicated) at 5σ or more, or show it is a systematic.

**State of the art.**

- Minami and Komatsu (2020) estimated β and the detector angle simultaneously using the Galactic-foreground EB correlation: β = 0.35 ± 0.14 degrees (2.4σ).
- Eskilt and Komatsu (2022) combined WMAP and Planck: β = 0.342 (+0.094/−0.091), excluding zero at 3.6σ, with no evidence of frequency dependence.
- ACT DR6, separating the instrumental angle with a model of the telescope optics, gives β = 0.215 ± 0.074 degrees (2.9σ).
- A joint Planck PR4 + ACT DR6 analysis (unrefereed) gives β = 0.277 ± 0.057 degrees, 4.8σ, if instrumental-angle priors are taken at face value, and 3.5σ in a dust-mitigated test.
- Another analysis applies a birefringence-blind differential-calibration estimator to Planck maps and gets β = 0.37 ± 0.12 degrees conditionally; the authors present it as a consistency check, not an independent measurement.

**The limiting systematic** is the absolute angle. The Crab Nebula (Tau A), the standard celestial calibrator, is known to about 0.27 degrees, and drone-borne calibrators (such as PROTOCALC for Simons Observatory and CLASS) had first flights in 2024 to 2025.

**Why it matters.** A confirmed β would be the first evidence of parity-violating physics beyond the Standard Model on cosmic scales, possibly tied to dark energy or dark matter via axion-like fields.
