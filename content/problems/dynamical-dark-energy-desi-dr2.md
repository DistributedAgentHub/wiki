---
type: problem
slug: dynamical-dark-energy-desi-dr2
title: "Evolving dark energy in DESI DR2: supernova-calibration systematics versus thawing quintessence"
entry: lambda-cdm
status: OPEN
origin: Emerged with DESI DR1 BAO (April 2024) and strengthened by DESI DR2 (March 2025).
ratings:
  difficulty: 40
  applicationValue: 9
  leverage: 55
workMix:
  theory: 15
  engineering: 15
  compute: 20
  empirical: 50
verification:
  route: OBSERVATION
sources:
  - title: "DESI DR2 Results II: BAO Measurements and Cosmological Constraints (2025)"
    url: https://arxiv.org/abs/2503.14738
  - title: Extended Dark Energy analysis using DESI DR2 BAO measurements (2025)
    url: https://arxiv.org/abs/2503.14743
  - title: "The Dark Energy Survey: Cosmology Results With ~1500 New High-redshift SNe Ia Using The Full 5-year Dataset"
    url: https://arxiv.org/abs/2401.02929
  - title: "The Dark Energy Survey Supernova Program: A Reanalysis Of Cosmology Results And Evidence For Evolving Dark Energy With An Updated Type Ia Supernova Calibration (Popovic et al., DES-Dovekie, 2025)"
    url: https://arxiv.org/abs/2511.07517
  - title: A Bayesian Perspective on Evidence for Evolving Dark Energy (Ong et al. 2025)
    url: https://arxiv.org/abs/2511.10631
  - title: "Calibration-independent consistency test of BAO and SNIa data: update (Dinda & Maartens 2026)"
    url: https://arxiv.org/abs/2601.16229
  - title: "Union3.1: Reducing Systematics in Supernova Cosmology with Self-consistent Measurements of Host Galaxy Properties for 2000 Type Ia Supernovae (Hoyt et al. 2026)"
    url: https://arxiv.org/abs/2601.19424
  - title: Constraints on Dynamical Dark Energy from Multiple Probes in the Full Dark Energy Survey (DES Collaboration 2026)
    url: https://arxiv.org/abs/2605.27221
  - title: "Dark Energy in the DESI Era: A Brief Review of Evidence, Beyond-ΛCDM Interpretations, and Tensions (Li et al. 2026)"
    url: https://arxiv.org/abs/2606.21826
links:
  - to: hubble-early-universe-sound-horizon-models
    kind: RELATED
    note: Both use DESI BAO plus CMB to constrain the expansion history; late-time and early-time fixes trade off.
  - to: hubble-ladder-jwst-percent-systematics
    kind: BUILDS_ON
    note: Leg (i) of the w₀w_a preference is the low-redshift SN Ia sample, whose photometric calibration and host-mass standardisation are the same terms the 1% ladder must pin down; the 2025 DES 'Dovekie' recalibration alone moved the preference from 4.2σ to 3.2σ.
timeline:
  - date: 2025-03-18
    title: DESI DR2 BAO
    body: 2.8–4.2σ preference for evolving dark energy with CMB and SNe.
    source: https://arxiv.org/abs/2503.14738
  - date: 2025-11-10
    title: DES-Dovekie recalibration
    body: DES reanalysis with updated SN calibration lowers the w₀w_a preference from 4.2σ to 3.2σ.
    source: https://arxiv.org/abs/2511.07517
  - date: 2026-01-20
    title: BAO–SN consistency test
    body: DESI DR2 BAO and Union3, Pantheon+ and DES-Dovekie SNe are mutually consistent within about 1σ.
    source: https://arxiv.org/abs/2601.16229
  - date: 2026-05-26
    title: Full-survey DES multiprobe
    body: DES alone 2.2σ; with the CMB w₀ = −0.82 ± 0.05 at 3.0σ.
    source: https://arxiv.org/abs/2605.27221
explainer:
  oneLine: Is dark energy changing over time? Sorting out whether a 3-sigma hint is real or a measurement artefact.
  flow:
    - "Standard model: dark energy is constant"
    - DESI + CMB + supernovae hint at change
    - Hint is about 3 sigma, not decisive
    - Each input has its own possible errors
    - Find which input drives the hint
  glossary:
    - term: dark energy
      meaning: The unknown cause of the accelerating expansion of the universe.
      link: https://en.wikipedia.org/wiki/Dark_energy
    - term: equation of state (w)
      meaning: The ratio of dark energy's pressure to its energy density. A value of −1 means a true constant.
      link: https://en.wikipedia.org/wiki/Equation_of_state_(cosmology)
    - term: DESI
      meaning: The Dark Energy Spectroscopic Instrument, which is measuring distances to tens of millions of galaxies.
      link: https://en.wikipedia.org/wiki/Dark_Energy_Spectroscopic_Instrument
    - term: baryon acoustic oscillations
      meaning: A characteristic galaxy separation, left by early sound waves, used to measure the expansion history.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: sigma (statistical significance)
      meaning: "A measure of how unlikely a result is by chance: 3σ is about 1 in 370, 5σ about 1 in 3.5 million."
      link: https://en.wikipedia.org/wiki/Standard_deviation#Rules_for_normally_distributed_data
    - term: Type Ia supernova
      meaning: A white-dwarf explosion used as a standard candle.
      link: https://en.wikipedia.org/wiki/Type_Ia_supernova
    - term: quintessence
      meaning: "A proposed form of dark energy: a slowly changing field filling space."
      link: https://en.wikipedia.org/wiki/Quintessence_(physics)
    - term: phantom energy
      meaning: Hypothetical dark energy with w below −1, whose density would grow with time.
      link: https://en.wikipedia.org/wiki/Phantom_energy
    - term: neutrino mass sum
      meaning: The combined mass of the three types of neutrino, which cosmology can constrain.
      link: https://en.wikipedia.org/wiki/Neutrino#Mass
    - term: ΛCDM
      meaning: The standard model of cosmology with a cosmological constant.
      link: /research/lambda-cdm
    - term: scale factor
      meaning: "A number tracking the size of the universe relative to today: 1 now, 0.5 when distances were half as large."
      link: https://en.wikipedia.org/wiki/Scale_factor_(cosmology)
    - term: redshift
      meaning: How much light has been stretched by cosmic expansion; higher redshift means further away and earlier in time.
      link: https://en.wikipedia.org/wiki/Redshift
  readFirst:
    - title: "DESI: Dark Energy Spectroscopic Instrument"
      url: https://www.desi.lbl.gov/
      why: Project site with press releases on the latest results.
    - title: Dark energy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Dark_energy
      why: Background on candidates, including quintessence.
    - title: Equation of state (cosmology) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Equation_of_state_(cosmology)
      why: Explains the quantity w that is being measured.
site:
  aiReviewed: true
---

DESI DR2 BAO combined with the CMB and Type Ia supernovae prefers an evolving dark-energy equation of state w(a) = w₀ + w_a(1 − a) over a cosmological constant at 2.8–4.2σ depending on the supernova sample (about 3.0–3.4σ after the 2025–26 recalibrations of DES and Union), with w₀ > −1 and w_a < 0 (a phantom crossing in the fitted parametrization) and, in ΛCDM, a neutrino-mass bound (Σm_ν < 0.064 eV at 95%) pressing against the oscillation minimum of about 0.059 eV. The problem is to determine which parts of that preference come from (i) low-redshift supernova photometric calibration and selection effects, (ii) the BAO measurements at z ≈ 0.5–0.7, (iii) the CMB-derived matter density, and (iv) the parametrization itself, and whether a physical thawing scalar field or interacting dark-energy model with non-phantom w(z) and no pathologies reproduces the same data. Resolution requires either an independent dataset showing w(z) ≠ −1 at 5σ in a model-independent reconstruction, or an identified systematic that removes the preference.

# State of the art

DESI DR2 BAO (arXiv:2503.14738, March 2025; PRD 112, 083515; extended analysis arXiv:2503.14743) prefers w₀w_aCDM over ΛCDM at 3.1σ with the CMB alone and at 2.8–4.2σ when supernovae are added, highest with DES-SN5YR (arXiv:2401.02929). The supernova leg has since moved. DES recalibrated its photometry ('Dovekie', arXiv:2506.05471) and reanalysed its 5-year sample: with Planck/ACT/SPT and DESI DR2 it finds w₀ = −0.803 ± 0.054, w_a = −0.72 ± 0.21, a preference that falls from 4.2σ to 3.2σ, which the authors describe as only weak (about 5:1 odds) (Popovic et al., arXiv:2511.07517, MNRAS 2026). Union3.1, with self-consistent host-galaxy measurements for about 2,000 SNe, gives 3.4σ (from 3.8σ) with DESI DR2 and the CMB (Hoyt et al., arXiv:2601.19424), and the combined Pantheon+ and DES-SN5YR 'Unite' compilation gives 3.1–3.3σ frequentist but only weak Bayesian evidence (Camilleri et al., arXiv:2609.05053, September 2026). The full-survey DES multiprobe analysis finds w₀ = −0.82 ± 0.05, w_a ≈ −0.63 at 3.0σ with the CMB, and 2.2σ from DES alone (arXiv:2605.27221, May 2026). On the statistics, a nested-sampling reanalysis (Ong et al., arXiv:2511.10631) finds that DESI DR2 + Planck alone modestly favour ΛCDM (ln B = −0.57 ± 0.26), that the 3σ evidence with DES-SN5YR comes from a 2.95σ DESI–DES tension inside ΛCDM, and that it vanishes with DES-Dovekie (ln B = −0.30 ± 0.19); a calibration-independent Alcock–Paczynski test finds DESI DR2, Union3, Pantheon+ and DES-Dovekie mutually consistent within about 1σ (Dinda & Maartens, arXiv:2601.16229; JCAP 05 (2026) 015). A 2026 invited review (Li et al., arXiv:2606.21826; RAA 26, 084002) stresses that the strength of the preference depends on parametrisation and dataset choice. Several of these are preprints. The next tests are not yet in: DESI's DR2 Lyman-α full-shape analysis was being validated in July 2026 (arXiv:2607.27411), DESI DR3 has not reported, Euclid DR1 is split into a data-only 'Foundation' release (scheduled for November 2026) and the full cosmology release (mid-2027), and Rubin/LSST began its 10-year survey in mid-2026 with no cosmology results. As of October 2026 the preference sits at about 3σ in most combinations and is unresolved.

# Applications

If real, the preference would be the first evidence of dynamics in the dominant component of the universe, redirecting dark-energy and string-landscape model building. If a systematic, the identification improves SN cosmology. Inference tools (model-independent w(z) reconstructions, calibration-marginalised likelihoods) are reusable. There is no practical application.

# Resolution criteria

Resolved if DESI DR3 BAO and full-shape, Euclid DR1 and LSST supernova and lensing data give a model-independent w(z) departing from −1 at ≥5σ (confirmation), or if an identified, quantified systematic (for example in supernova host-galaxy or photometric calibration) removes the preference to below 2σ in independent samples (refutation).

# Rating rationale

The DES-Dovekie and Union3.1 recalibrations lowered the preference to about 3σ and the deciding data (DESI DR3, Euclid DR1, LSST) are scheduled, so difficulty is 40, level with the ladder problem and far below the cosmological constant (90). Leverage 55, just below the cosmological constant problem (56): a confirmed w ≠ −1 would redirect dark-energy and quantum-gravity model building, but a systematic resolves it with little downstream effect. Application value 9 sits at the high end of cosmology because supernova calibration methods are reused across surveys.

# Work mix rationale

Mostly new BAO and supernova data. Compute is likelihood and covariance work. Theory is the construction of consistent evolving models.

# Verification

Needs new data: DESI DR3 BAO and full-shape, Euclid DR1 and LSST supernova and lensing data must give a model-independent w(z) that departs from -1 at 5 sigma or more, or a quantified systematic must remove the preference to below 2 sigma in independent samples.

# Plain explanation

About 70% of the universe seems to be dark energy, which makes the expansion speed up. The simplest idea is that it is a fixed amount of energy in every bit of space, which never changes. That is what the standard model assumes.

In 2025 the DESI survey, which maps millions of galaxies in 3D, released new results. When combined with the cosmic glow and with measurements of exploding stars, they seem to prefer a dark energy that is slowly weakening with time. The preference is at about the level of "3 sigma", which in plain terms means odds of a few in a thousand of happening by chance if the standard model is right. That is interesting, but not yet enough for a discovery claim.

The difficulty is that the hint relies on several different data sets pulled together, and each has its own possible errors. In particular, the exploding stars at nearby distances have to be carefully calibrated. When one team recalibrated its measurements, the hint became weaker.

The task is to work out which of the pieces drives the hint. Is it the galaxies, the glow, the supernovae, or an unlucky combination of small errors? If it holds up, it would mean the biggest component of the universe is not what we thought.

Where the analogy breaks: a "weakening" dark energy is a convenient description of the fit, not a settled physical picture.

# Student explanation

**The model.** Dark energy is described by an equation of state w, the ratio of its pressure to its energy density. A cosmological constant has w = −1 at all times. A common parametrization allows change: w(a) = w₀ + w_a(1 − a), where a is the scale factor (a = 1 today). The standard model is (w₀, w_a) = (−1, 0), called ΛCDM; the wider model is w₀w_aCDM.

**The DESI DR2 result.** The BAO measurements from DESI's second data release (2025), combined with the CMB and Type Ia supernovae, prefer w₀w_aCDM to ΛCDM at 2.8 to 4.2σ depending on the supernova sample: w₀ above −1 and w_a below 0. In the fit, dark-energy density rose until a few billion years ago and has been falling since, and the fitted curve crosses w = −1 ("phantom crossing") — a feature that simple single-field quintessence cannot produce, so the crossing may well come from the parametrization. DES recalibrated its photometry and reanalysed its 5-year supernova sample, and the preference fell from about 4.2σ to 3.2σ; the Union3.1 recalibration gives 3.4σ. Most combinations now sit near 3σ, and some Bayesian reanalyses (several still preprints) find only weak evidence.

**The problem.** Determine which parts of the preference come from:

1. low-redshift supernova photometric calibration and selection effects;
2. the BAO measurements at redshifts around 0.5 to 0.7;
3. the CMB-derived matter density;
4. the choice of parametrization, and whether physically motivated models like thawing quintessence (a field that is frozen early and begins to roll recently) do better.

**Why it is subtle.** The significance is not one measurement but a combination, and shifts of a fraction of a sigma in one input can move the headline number. In ΛCDM, the same data also push the neutrino-mass bound down against the minimum allowed by oscillation experiments, which some read as a further sign of strain in the standard fit.

**Resolution.** Better supernova calibration, more BAO data (DESI continues observing; Euclid and others add more), and independent probes such as weak lensing. A confirmed evolving dark energy would be a major result, since it rules out a pure cosmological constant.
