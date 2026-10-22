---
type: problem
slug: lyman-alpha-warm-fuzzy-dark-matter-bounds
title: Lyman-α forest bounds on warm and fuzzy dark-matter masses with DESI-era P1D and IGM marginalisation
entry: lambda-cdm
status: OPEN
origin: Narayanan et al. (2000) and Viel et al. (2005) first used the Lyman-α forest to bound warm dark matter; Iršič et al. (2017) extended it to fuzzy dark matter.
ratings:
  difficulty: 36
  applicationValue: 5
  leverage: 40
workMix:
  theory: 20
  engineering: 10
  compute: 40
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: New Constraints on the free-streaming of warm dark matter from intermediate and small scale Lyman-α forest data (Iršič et al. 2017)
    url: https://arxiv.org/abs/1702.01764
  - title: First constraints on fuzzy dark matter from Lyman-α forest data and hydrodynamical simulations (Iršič et al. 2017)
    url: https://arxiv.org/abs/1703.04683
  - title: Strong bound on canonical ultra-light axion dark matter from the Lyman-alpha forest (Rogers & Peiris 2021)
    url: https://arxiv.org/abs/2007.12705
  - title: New Constraints on Warm Dark Matter from the Lyman-α Forest Power Spectrum (Villasenor et al. 2023)
    url: https://arxiv.org/abs/2209.14220
  - title: "DESI: One-dimensional power spectrum from first Lyman-α forest samples (2023)"
    url: https://arxiv.org/abs/2306.06311
  - title: Unveiling Dark Matter free-streaming at the smallest scales with high redshift Lyman-alpha forest (Iršič et al. 2023)
    url: https://arxiv.org/abs/2309.04533
  - title: "JWST Lensed Quasar Dark Matter Survey III: Dark Matter Sensitive Flux Ratios and Warm Dark Matter Constraint from the Full Sample (Keeley et al. 2025)"
    url: https://arxiv.org/abs/2511.07765
links:
  - to: s8-baryonic-feedback-small-scale-power
    kind: RELATED
    note: Both probe the small-scale matter power spectrum and must separate baryonic effects from dark-matter physics.
timeline:
  - date: 2017-02-06
    title: WDM bound from Lyman-α
    body: Iršič et al. bound the WDM free-streaming scale with XQ-100 and HIRES/MIKE.
    source: https://arxiv.org/abs/1702.01764
  - date: 2020-07-24
    title: Ultralight axion bound
    body: Rogers & Peiris bound ultralight axion dark matter with an emulator marginalising over IGM.
    source: https://arxiv.org/abs/2007.12705
  - date: 2023-09-08
    title: High-redshift WDM bound
    body: Iršič et al. obtain m_WDM > 5.7 keV (95%) from high-redshift Lyman-α data.
    source: https://arxiv.org/abs/2309.04533
  - date: 2025-11-11
    title: Independent lensing bound
    body: JWST flux ratios of 31 lensed quasars give m_WDM > 5.6–6.4 keV.
    source: https://arxiv.org/abs/2511.07765
explainer:
  oneLine: Use distant quasar light passing through hydrogen gas to rule out dark matter that is too light or too fast.
  flow:
    - Quasar light crosses hydrogen clouds
    - Forest of lines maps small-scale clumps
    - Warm or fuzzy dark matter smooths clumps
    - Hot gas smooths them too
    - Fit both to bound the dark-matter mass
  glossary:
    - term: warm dark matter
      meaning: Dark matter whose particles are light and fast enough to wash out the smallest clumps.
      link: https://en.wikipedia.org/wiki/Warm_dark_matter
    - term: fuzzy dark matter
      meaning: Dark matter made of extremely light particles that behave like large waves.
      link: https://en.wikipedia.org/wiki/Fuzzy_cold_dark_matter
    - term: Lyman-alpha forest
      meaning: The set of absorption lines in a quasar's spectrum caused by hydrogen clouds along the line of sight.
      link: https://en.wikipedia.org/wiki/Lyman-alpha_forest
    - term: quasar
      meaning: An extremely bright galactic core powered by a supermassive black hole, visible from very far away.
      link: https://en.wikipedia.org/wiki/Quasar
    - term: free streaming
      meaning: Fast-moving particles escaping from small density peaks and smoothing them out.
      link: https://en.wikipedia.org/wiki/Warm_dark_matter
    - term: matter power spectrum
      meaning: A plot of how clumpy matter is at each size scale.
      link: https://en.wikipedia.org/wiki/Power_spectrum
    - term: intergalactic medium
      meaning: The thin gas filling the space between galaxies.
      link: https://en.wikipedia.org/wiki/Intergalactic_medium
    - term: keV
      meaning: A thousand electronvolts, a unit of energy and, in particle physics, of mass.
      link: https://en.wikipedia.org/wiki/Electronvolt
    - term: emulator
      meaning: A fast statistical model trained to imitate a slow simulation.
      link: https://en.wikipedia.org/wiki/Surrogate_model
    - term: reionization
      meaning: The period when the first stars and galaxies reheated and ionized the hydrogen gas of the universe.
      link: https://en.wikipedia.org/wiki/Reionization
    - term: de Broglie wavelength
      meaning: The wavelength a particle has in quantum physics; the lighter and slower the particle, the longer it is.
      link: https://en.wikipedia.org/wiki/Matter_wave
    - term: marginalise
      meaning: In statistics, average over a quantity you do not care about (here the gas history) so your answer allows for every plausible value of it.
      link: https://en.wikipedia.org/wiki/Marginal_distribution
  readFirst:
    - title: Lyman-alpha forest (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lyman-alpha_forest
      why: Explains what the forest is and what it can measure.
    - title: Warm dark matter (Wikipedia)
      url: https://en.wikipedia.org/wiki/Warm_dark_matter
      why: Contrasts warm and cold dark matter.
    - title: Fuzzy cold dark matter (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fuzzy_cold_dark_matter
      why: An introduction to the wave-like alternative.
site:
  aiReviewed: true
---

Determine the lower bound on the thermal-relic warm dark-matter mass m_WDM (currently a few keV) and on the ultralight scalar mass m_a (currently of order 10⁻²⁰ eV) from the one-dimensional Lyman-α flux power spectrum on scales k ≈ 0.1–10 h/Mpc at z = 2–5, using data from DESI, XQ-100, HIRES/MIKE and eBOSS. The central difficulty is the degeneracy between the suppression of small-scale matter power by dark-matter free streaming or quantum pressure and the thermal history of the intergalactic medium (temperature–density relation, pressure smoothing, reionisation heating). The problem is to build hydrodynamic-simulation emulators, including mixed fuzzy and cold dark matter, that marginalise over IGM and ionising-background uncertainties and reach sub-percent statistical and about 1–2% systematic accuracy, so that the bound is robust and a detection of a cutoff (or a comparison with the 21-cm and lensing bounds) is possible.

# State of the art

Iršič et al. used XQ-100 and HIRES/MIKE spectra to bound WDM (arXiv:1702.01764; 4.1 keV from HIRES/MIKE alone, stronger combined) and fuzzy dark matter (arXiv:1703.04683; m_a > 1.4×10⁻²¹ eV from HIRES/MIKE with a conservative IGM thermal history). Rogers & Peiris (arXiv:2007.12705; PRL 126, 071302) found m_a > 2×10⁻²⁰ eV at 95% in an emulator analysis marginalising over the IGM, and Villasenor et al. (arXiv:2209.14220) used 1,080 Cholla hydrodynamic simulations spanning thermal histories to derive updated WDM bounds. The DESI early-data P1D (arXiv:2306.06311) is the first of a new generation, and an April 2026 dark-matter-only preprint (Wang, arXiv:2604.06038) shows that for mixed fuzzy/cold dark matter the flux power depends on the velocity treatment, not only on the matter power spectrum, so particle-only proxies are inadequate. Iršič et al. (arXiv:2309.04533) extended high-redshift data to m_WDM > 5.7 keV (95%), or 4.1 keV with restricted scales, and a June 2026 analysis gives m_FDM > 1.9×10⁻²¹ eV for pure fuzzy dark matter (Liu et al., arXiv:2606.06969). DESI DR1 P1D has been measured, but no DESI-based WDM or FDM bound had been published by October 2026 (a DR1 thermal-relic analysis constrains only N_eff and light relics). An independent cross-check now exists: JWST lensed-quasar flux ratios give m_WDM > 5.6–6.4 keV from 31 lenses (Keeley et al., arXiv:2511.07765) and 6.5–7.4 keV with extended arcs (Gilman et al., arXiv:2511.07513). Published Lyman-α bounds still move by factors of about 1.5–3 with IGM thermal-history assumptions.

# Applications

A cutoff in small-scale power would indicate non-CDM physics (warm or wave dark matter), while a firm bound restricts sterile-neutrino and axion-like particle parameter spaces and informs structure-formation simulations. The IGM thermal-history inference is reused in reionisation studies.

# Resolution criteria

Resolved when two independent pipelines (different simulation suites and emulators) using DESI DR1/DR2 Lyman-α spectra give consistent bounds on m_WDM and m_a, with IGM and systematics marginalised to the same level, and when the bound is cross-checked against an independent probe such as strong-lensing flux ratios (now at m_WDM ≳ 6 keV) or the 21-cm power spectrum.

# Rating rationale

A bound exists and the route to a robust one is simulation and data, with no new theory, so it sits in the 30s below the SIDM lensing test (46). Leverage 40: the bound cuts warm sterile-neutrino and ultralight-axion model space and is an input to every small-scale-structure argument. Application value 5.

# Work mix rationale

Simulation emulators and IGM modelling dominate; DESI supplies the data.

# Verification

Two independent pipelines (different simulation suites and emulators) must run on DESI DR1/DR2 Lyman-alpha spectra and give consistent bounds on m_WDM and m_a, with IGM and systematics marginalised to the same level. The spec fixes the dataset release, the P1D estimator, the emulator validation and the cross-check against an independent probe such as strong-lensing flux ratios.

# Plain explanation

One standard idea says its particles are heavy and slow ("cold"). Alternatives say the particles are lighter and move faster ("warm"), or that they are so incredibly light that they behave like waves ("fuzzy"). Each alternative smooths out the smallest clumps of matter in the universe.

To test this, scientists use quasars, very distant bright objects. Their light passes through clouds of hydrogen gas on its way to us, and each cloud leaves a dark line in the spectrum, at a colour that depends on how far away the cloud is. A whole forest of lines appears, called the Lyman-alpha forest. The pattern of that forest shows how lumpy the gas, and so the matter, was on small scales long ago. If dark matter were too warm or too fuzzy, small lumps would be missing, and the forest would look smoother.

The difficulty is that gas temperature also smooths the forest. Heated gas puffs up and washes out small bumps, just as odd dark matter would. So scientists must model both the gas history and the dark matter at the same time.

The result so far is a lower limit on how light the dark-matter particle can be. But that limit still shifts by a factor of 1.5 to 3 with the gas assumptions, and new DESI data have not yet been used.

Where the analogy breaks: a real forest looks thinner for one obvious reason, but here two different causes look alike.

# Student explanation

**The question.** For thermal-relic warm dark matter (WDM), find the smallest allowed particle mass m_WDM (currently a few keV). For ultralight scalar ("fuzzy") dark matter, find the smallest allowed boson mass m_a (currently of order 10⁻²⁰ eV). Both suppress the matter power spectrum on small scales: WDM by free streaming (particles move fast enough to escape small clumps), fuzzy dark matter by quantum pressure, since the particle's de Broglie wavelength is astronomically large.

**The probe.** The Lyman-α forest is the set of absorption lines in quasar spectra from neutral hydrogen along the line of sight. At redshifts of 2 to 5, the one-dimensional flux power spectrum P1D on scales of roughly 0.1 to 10 h/Mpc tracks the matter power spectrum. Data come from DESI, XQ-100, HIRES/MIKE and eBOSS.

**The degeneracy.** The forest is also smoothed by the thermal state of the intergalactic medium (IGM): its temperature–density relation, the pressure smoothing scale (gas puffed up by past heating), and heating during reionization. These effects mimic a small-scale cutoff.

**What a solution requires.** Build hydrodynamic-simulation emulators (fast statistical stand-ins trained on many simulations), including mixed models of fuzzy plus cold dark matter, and marginalise (average over) the IGM history so the bound on the dark-matter parameter is robust.

**State of the art.** Iršič and collaborators used XQ-100 and HIRES/MIKE spectra to set a WDM bound (about 4.1 keV from one dataset, stronger combined) and a fuzzy-dark-matter bound (m_a above 1.4×10⁻²¹ eV with a conservative thermal history). Rogers and Peiris found m_a above 2×10⁻²⁰ eV at 95% in an emulator analysis marginalising over the IGM. Villasenor and collaborators used 1,080 simulations spanning thermal histories to set a new WDM bound. Extending high-redshift data gives m_WDM above 5.7 keV (95%), and a 2026 analysis gives m_a above 1.9×10⁻²¹ eV for pure fuzzy dark matter; note that the fuzzy bounds from different groups still differ by about a factor of ten. An independent check from JWST lensed quasars gives m_WDM above roughly 5.6 to 7.4 keV. Published Lyman-α bounds still move by factors of about 1.5 to 3 with IGM assumptions, and no DESI-based WDM or FDM bound had been published by October 2026.

**Why it matters.** It constrains what dark matter can be, and the tightness of the bound depends on the realism of gas physics in simulations.
