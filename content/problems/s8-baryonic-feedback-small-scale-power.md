---
type: problem
slug: s8-baryonic-feedback-small-scale-power
title: "Baryonic feedback in the small-scale matter power spectrum for cosmic shear: the S₈ systematic budget"
entry: lambda-cdm
status: OPEN
origin: Noted since DES Y1 and KiDS-1000 (2017–2020), when cosmic-shear S₈ values were about 2–3σ below Planck.
ratings:
  difficulty: 33
  applicationValue: 10
  leverage: 42
workMix:
  theory: 15
  engineering: 5
  compute: 50
  empirical: 30
verification:
  route: OBSERVATION
sources:
  - title: A non-linear solution to the S₈ tension? (Amon & Efstathiou 2022)
    url: https://arxiv.org/abs/2206.11794
  - title: "A non-linear solution to the S₈ tension II: Analysis of DES Year 3 cosmic shear (Preston et al. 2023)"
    url: https://arxiv.org/abs/2305.09827
  - title: "The FLAMINGO project: cosmological hydrodynamical simulations (Schaye et al. 2023)"
    url: https://arxiv.org/abs/2306.04024
  - title: "Weak lensing combined with the kinetic Sunyaev Zel'dovich effect: A study of baryonic feedback (Bigwood et al. 2024)"
    url: https://arxiv.org/abs/2404.06098
  - title: "KiDS-Legacy: Cosmological constraints from cosmic shear with the complete Kilo-Degree Survey (2025)"
    url: https://arxiv.org/abs/2503.19441
  - title: "Dark Energy Survey Year 6 Results: Cosmological Constraints from Cosmic Shear (DES Collaboration 2026)"
    url: https://arxiv.org/abs/2602.10065
  - title: Cosmic Shear constraints from HSC Year 3 with clustering calibration of the tomographic redshift distributions from DESI (2025)
    url: https://arxiv.org/abs/2511.18134
timeline:
  - date: 2022-06-23
    title: Nonlinear suppression proposed
    body: Amon & Efstathiou argue enhanced feedback can resolve the S₈ tension.
    source: https://arxiv.org/abs/2206.11794
  - date: 2024-04-09
    title: Lensing plus kSZ constraints
    body: Joint analysis favours strong feedback.
    source: https://arxiv.org/abs/2404.06098
  - date: 2025-03-25
    title: KiDS-Legacy cosmic shear
    body: Final KiDS analysis finds S₈ consistent with Planck.
    source: https://arxiv.org/abs/2503.19441
  - date: 2026-02-10
    title: DES Y6 cosmic shear
    body: S₈ = 0.798 (+0.014/−0.015), about 2σ below the CMB.
    source: https://arxiv.org/abs/2602.10065
explainer:
  oneLine: Pin down how much exploding stars and black-hole winds smooth out matter, to see if the 'clumpiness tension' is real.
  flow:
    - Early glow predicts how clumpy matter is
    - Lensing finds matter a bit smoother
    - Winds from stars and black holes smooth it
    - Calibrate smoothing with gas observations
    - See how much of the gap remains
  glossary:
    - term: S8
      meaning: A single number summarising how clumpy matter is in the universe today.
      link: https://en.wikipedia.org/wiki/Weak_gravitational_lensing
    - term: cosmic shear
      meaning: Small distortions of distant galaxy shapes caused by the gravity of matter along the line of sight.
      link: https://en.wikipedia.org/wiki/Weak_gravitational_lensing
    - term: matter power spectrum
      meaning: A plot showing how strongly matter is clumped at each size scale.
      link: https://en.wikipedia.org/wiki/Power_spectrum
    - term: baryon
      meaning: Ordinary matter, made of protons and neutrons, as opposed to dark matter.
      link: https://en.wikipedia.org/wiki/Baryon
    - term: AGN feedback
      meaning: Energy released by gas falling onto a central black hole, which can heat or blow out the gas of its galaxy.
      link: https://en.wikipedia.org/wiki/Active_galactic_nucleus
    - term: hydrodynamic simulation
      meaning: A computer model that follows gas as well as gravity as galaxies form.
      link: https://en.wikipedia.org/wiki/Computational_fluid_dynamics
    - term: Sunyaev–Zel'dovich effect
      meaning: A small change in CMB light as it passes through hot gas, used to measure the gas.
      link: https://en.wikipedia.org/wiki/Sunyaev%E2%80%93Zeldovich_effect
    - term: halo model
      meaning: A way of describing the distribution of matter as a collection of dark-matter halos.
      link: https://en.wikipedia.org/wiki/Dark_matter_halo
    - term: emulator
      meaning: A fast statistical model trained to imitate a slow simulation.
      link: https://en.wikipedia.org/wiki/Surrogate_model
    - term: ΛCDM
      meaning: The standard model of cosmology.
      link: /research/lambda-cdm
    - term: subgrid recipe
      meaning: A simplified rule a simulation uses for physics happening on scales smaller than its grid, such as black-hole winds.
      link: https://en.wikipedia.org/wiki/Galaxy_formation_and_evolution
    - term: σ₈
      meaning: The typical size of matter-density ripples in spheres about 8 megaparsecs (h⁻¹) across; a standard measure of clumpiness.
      link: https://en.wikipedia.org/wiki/Matter_power_spectrum
  readFirst:
    - title: Weak gravitational lensing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Weak_gravitational_lensing
      why: Explains the method that measures S8.
    - title: Sunyaev–Zeldovich effect (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sunyaev%E2%80%93Zeldovich_effect
      why: One of the probes used to calibrate gas in halos.
    - title: Active galactic nucleus (Wikipedia)
      url: https://en.wikipedia.org/wiki/Active_galactic_nucleus
      why: Background on the black-hole winds.
raw:
  stateOfArt: "Amon & Efstathiou (arXiv:2206.11794) argued that a strong, scale-dependent suppression of the nonlinear matter power spectrum would remove the S₈ tension, and Preston, Amon & Efstathiou (arXiv:2305.09827) found that DES Y3 cosmic shear prefers more suppression than most hydrodynamic simulations produce. The FLAMINGO simulations (arXiv:2306.04024) include variants with stronger feedback calibrated to cluster gas fractions. Bigwood et al. (arXiv:2404.06098) combined weak lensing with kSZ measurements and found that data favour strong feedback, which can reduce the S₈ discrepancy, though the interpretation depends on the baryonification model. The survey numbers have converged upward. KiDS-Legacy (Wright et al., arXiv:2503.19441; A&A 703, A158, 2025) found S₈ = 0.815 (+0.016/−0.021), 0.73σ from Planck, attributing the rise mainly to improved redshift calibration, and it marginalises over baryon feedback. HSC Y3 with DESI clustering-based redshift calibration moves from 0.769 to 0.804 (+0.019/−0.018) (arXiv:2511.18134). DES Y6 cosmic shear gives 0.798 (+0.014/−0.015) with the NLA alignment model, about 2σ below the CMB (arXiv:2602.10065, February 2026), and DES Y6 3×2pt gives 0.789 ± 0.012, 2.6σ in S₈ alone (arXiv:2601.14559, January 2026). So the residual is 0–2.6σ depending on the survey, comparable to the spread from alignment and redshift choices, and the share attributable to feedback rather than to calibration is not settled. Euclid DR1 cosmology is not expected before mid-2027 and Rubin/LSST has no cosmic-shear results as of October 2026."
site:
  aiReviewed: true
---

Determine the suppression of the matter power spectrum P(k) at k = 1–10 h/Mpc by AGN and stellar feedback with accuracy of about 1–2% in the scales and redshifts used by weak-lensing surveys, and quantify how much of the remaining 0–2.6σ S₈ offset between cosmic shear (KiDS-Legacy, HSC Y3, DES Y6) and the CMB it explains. The task is to build a baryonification or halo-model emulator, trained on hydrodynamic simulation suites (FLAMINGO, BAHAMAS, IllustrisTNG, EAGLE variants) and anchored by kinetic Sunyaev–Zel'dovich, thermal SZ, X-ray gas-fraction and galaxy-galaxy lensing data, that propagates feedback uncertainty into shear two-point functions without being tuned on the cosmic shear itself. The decision-relevant question is whether the required suppression (beyond what hydrodynamic simulations produce) is physical, and whether S₈ from KiDS-Legacy, DES, HSC, Euclid and LSST then agrees with Planck at the percent level.

# Applications

A calibrated feedback model is required for every Stage-IV weak-lensing cosmology analysis (Euclid, LSST, Roman); an error of a few percent in P(k) at k = 5 h/Mpc is comparable to the target statistical errors. The emulators also constrain AGN feedback physics in galaxy formation.

# Resolution criteria

Resolved when a feedback model calibrated only on non-lensing gas observables predicts the nonlinear P(k) to within about 1–2% and the Stage-IV surveys (Euclid DR1, LSST Y1), with feedback marginalised using that model, give S₈ consistent with the CMB with this model, or when they give a residual discrepancy above 3σ after marginalising over it.

# Rating rationale

With KiDS-Legacy, HSC Y3 and DES Y6 between 0 and 2.6σ from the CMB, the tension question has shrunk, but percent-level P(k) feedback calibration is a harder modelling task than the old S₈ entry (23) captured; still a visible route. Leverage is raised to 42, above the old S₈ entry (26.5): every Stage-IV cosmic-shear result (Euclid, LSST, Roman), including dark-energy constraints, depends on this calibration. Application value 10 because the emulators are pipeline infrastructure for those missions.

# Work mix rationale

Mostly simulations and emulator calibration, plus joint analysis with SZ and X-ray data.

# Verification

Settled by Stage-IV survey data (Euclid DR1, LSST Y1) together with gas observables: a feedback model calibrated only on non-lensing observables must predict the nonlinear P(k) to about 1 to 2%, and the resulting S8 must either match the CMB or retain a residual discrepancy above 3 sigma after marginalisation.

# Plain explanation

One test of the standard model of the universe is how clumpy matter is today. The early universe's glow predicts the answer. Telescopes that map the gentle distortion of faraway galaxies' shapes by intervening matter, called cosmic shear, measure how clumpy it actually is. Earlier surveys found the late universe a bit smoother than predicted. The newest surveys come closer: some now agree fully, others are still a little low. The mismatch is described by a number called S8.

One suspect for the difference is ordinary matter. Exploding stars and jets from the supermassive black holes at the centres of galaxies can blow gas out of galaxies and spread it around. That spreads out the matter and makes things smoother on small scales than a simple model predicts, a bit like stirring milk into coffee smooths out the swirls.

To test this, scientists need to know exactly how much smoothing these winds produce. They run huge computer simulations of galaxies and compare them with X-ray and radio measurements of hot gas. But the simulations differ from each other, and each uses crude recipes for things they cannot resolve.

The goal is a calibrated recipe, accurate to a few per cent, that is not tuned to the lensing data itself, so that the check is fair.

Where the analogy breaks: stirring a coffee smooths it everywhere, but galactic winds act more in some places and times than others.

# Student explanation

**The tension.** S8 = σ₈ √(Ω_m/0.3) is a combination that weak lensing measures well; σ₈ is the amplitude of matter fluctuations on scales of about 8 Mpc/h. Cosmic shear surveys (KiDS-Legacy, HSC Y3, DES Y6) find S8 lower than the CMB prediction in ΛCDM by 0 to 2.6σ depending on survey and analysis.

**Baryonic feedback.** Energy injected by stellar winds, supernovae and active galactic nuclei (AGN) moves gas out of halos. Since baryons are about 15% of the matter, this changes the total matter distribution and suppresses the matter power spectrum P(k) at k of about 1 to 10 h/Mpc. These are the scales used in the cosmic shear measurements, so feedback is a systematic that can bias cosmological parameters.

**What the problem asks.** Determine the suppression of P(k) to about 1 to 2% accuracy over the scales and redshifts used, and quantify how much of the remaining S8 offset it explains. The route:

- Build a baryonification or halo-model emulator, trained on suites of hydrodynamic simulations (FLAMINGO, BAHAMAS, IllustrisTNG, EAGLE variants).
- Anchor it with other data: the kinetic and thermal Sunyaev–Zel'dovich effects, X-ray gas fractions, galaxy–galaxy lensing.
- Propagate the uncertainty into shear two-point functions without tuning on the cosmic-shear data themselves.

**State of the art.** The survey numbers have moved up toward the CMB: KiDS-Legacy now agrees with Planck (0.7σ), mainly thanks to better redshift calibration; HSC with new redshift calibration moves up too; DES Y6 remains about 2 to 2.6σ low. How much of what remains is feedback rather than calibration is not settled. Amon and Efstathiou argued that strong, scale-dependent suppression would remove the tension. Preston, Amon and Efstathiou found that DES Y3 shear prefers more suppression than most hydrodynamic simulations give. FLAMINGO includes variants with stronger feedback calibrated to cluster gas fractions. Combining weak lensing with kSZ measurements has suggested stronger feedback than many simulations assume.

**Difficulties.** Simulations cannot resolve the physics of black-hole winds and so use "subgrid" recipes that differ between codes; gas observations are indirect; and there is the danger of circular reasoning if feedback is tuned on shear itself.

**Why it matters.** If feedback explains the offset, ΛCDM survives. If a residual offset remains once feedback and calibration are both pinned down, it would point to a problem with ΛCDM or with the data.
