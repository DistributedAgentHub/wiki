---
type: entry
slug: lambda-cdm
title: ΛCDM, the standard model of cosmology
field: physics
kind: THEORY
status: ACTIVE
summary: Six-parameter model of a spatially flat universe with cold dark matter, a cosmological constant and inflation-seeded perturbations; it fits the CMB, BAO and supernovae well but is now strained at a few points.
reliedOn: Almost all survey forecasts, N-body and hydrodynamical simulations, and interpretations of galaxy, CMB and lensing data assume it as the baseline. The problems of the Hubble tension, dark matter, dark energy and small-scale structure are all defined relative to it.
dependsOn:
  - cosmological-perturbation-theory
  - n-body-simulation
references:
  - title: Planck 2018 results. VI. Cosmological parameters
    url: https://arxiv.org/abs/1807.06209
    kind: paper
  - title: "Riess et al. 1998: Observational evidence from supernovae for an accelerating universe and a cosmological constant"
    url: https://arxiv.org/abs/astro-ph/9805201
    kind: paper
  - title: "Perlmutter et al. 1999: Measurements of Omega and Lambda from 42 high-redshift supernovae"
    url: https://arxiv.org/abs/astro-ph/9812133
    kind: paper
  - title: "DESI DR2 Results II: Measurements of baryon acoustic oscillations and cosmological constraints"
    url: https://arxiv.org/abs/2503.14738
    kind: paper
  - title: "The Atacama Cosmology Telescope: DR6 power spectra, likelihoods and LambdaCDM parameters"
    url: https://arxiv.org/abs/2503.14452
    kind: paper
  - title: "Dark Energy Survey Year 6 Results: Cosmological constraints from galaxy clustering and weak lensing"
    url: https://arxiv.org/abs/2601.14559
    kind: paper
  - title: "Popovic et al.: DES Supernova Program reanalysis with an updated calibration (DES-Dovekie)"
    url: https://arxiv.org/abs/2511.07517
    kind: paper
  - title: "Wright et al.: KiDS-Legacy cosmological constraints from cosmic shear"
    url: https://arxiv.org/abs/2503.19441
    kind: paper
  - title: "DES Collaboration: Constraints on dynamical dark energy from multiple probes in the full Dark Energy Survey"
    url: https://arxiv.org/abs/2605.27221
    kind: paper
timeline:
  - date: 1998-05-15
    title: Supernovae show the expansion is accelerating
    body: The High-z Supernova Search Team posted evidence from 16 distant and 34 nearby Type Ia supernovae favouring a positive cosmological constant; the Supernova Cosmology Project reported the same conclusion with 42 supernovae in December 1998.
    source: https://arxiv.org/abs/astro-ph/9805201
  - date: 2018-07-17
    title: Planck 2018 parameters
    body: The final Planck release fixes the six base parameters to sub-percent precision, with H0 = 67.4 +/- 0.5 km/s/Mpc (arXiv 17 July 2018; published A&A 641, A6, 2020).
    source: https://arxiv.org/abs/1807.06209
  - date: 2025-03-18
    title: "DESI DR2 BAO: 3.1 sigma preference for evolving dark energy with the CMB"
    body: With more than 14 million galaxies and quasars, DESI finds BAO consistent with flat LambdaCDM on its own but in 2.3 sigma tension with the CMB; allowing w0-wa gives a 3.1 sigma preference over a constant Lambda with the CMB, and 2.8-4.2 sigma when supernovae are added, depending on the sample.
    source: https://arxiv.org/abs/2503.14738
  - date: 2026-05-26
    title: DES multi-probe dark energy constraint
    body: Using six years of DES supernovae, BAO and weak lensing, the collaboration finds a 2.2 sigma preference for w0-wa on its own and 3.0 sigma when the CMB is added; excluding supernovae still gives 2.6 sigma.
    source: https://arxiv.org/abs/2605.27221
explainer:
  oneLine: "The standard recipe of the universe: some ordinary matter, much dark matter, and a push that speeds up expansion."
  flow:
    - Six numbers set the recipe
    - Ordinary + dark matter + dark energy
    - Predicts CMB, galaxies, light elements
    - Fits well, but cracks are showing
    - Hubble gap and evolving dark energy
  glossary:
    - term: cold dark matter
      meaning: Invisible, slow-moving matter that has been detected only through its gravity.
      link: https://en.wikipedia.org/wiki/Cold_dark_matter
    - term: dark energy
      meaning: The unknown cause of the accelerating expansion of the universe.
      link: https://en.wikipedia.org/wiki/Dark_energy
    - term: cosmological constant
      meaning: "The simplest form of dark energy: a fixed energy density in empty space."
      link: https://en.wikipedia.org/wiki/Cosmological_constant
    - term: Hubble constant
      meaning: The present-day expansion rate of the universe, in km/s per megaparsec (a megaparsec is about 3.26 million light-years).
      link: https://en.wikipedia.org/wiki/Hubble%27s_law
    - term: Hubble tension
      meaning: The disagreement between the expansion rate measured locally and the rate inferred from the early universe.
      link: https://en.wikipedia.org/wiki/Hubble_tension
    - term: cosmic inflation
      meaning: A proposed burst of extremely fast expansion in the first instant that seeded structure.
      link: https://en.wikipedia.org/wiki/Cosmic_inflation
    - term: baryon acoustic oscillations
      meaning: A fixed distance imprinted in galaxy positions by early sound waves, used as a ruler.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: Type Ia supernova
      meaning: The explosion of a white dwarf star; its predictable brightness makes it a cosmic yardstick.
      link: https://en.wikipedia.org/wiki/Type_Ia_supernova
    - term: cosmic microwave background
      meaning: The oldest light in the universe, about 380,000 years after the Big Bang.
      link: /research/cosmic-microwave-background
    - term: equation of state (dark energy)
      meaning: The ratio w of dark energy's pressure to its energy density; w = −1 means a true constant.
      link: https://en.wikipedia.org/wiki/Equation_of_state_(cosmology)
    - term: general relativity
      meaning: Einstein's theory of gravity as curved spacetime.
      link: /research/general-relativity
    - term: sigma (σ)
      meaning: A measure of how unlikely a result is to be a fluke; 3σ is suggestive, 5σ is the usual bar for a discovery.
      link: https://en.wikipedia.org/wiki/Standard_deviation
  readFirst:
    - title: Lambda-CDM model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lambda-CDM_model
      why: A full overview with the parameters and observations.
    - title: Hubble tension (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hubble_tension
      why: Explains the best-known crack in the model.
    - title: "NASA: Dark energy, dark matter"
      url: https://science.nasa.gov/dark-energy/
      why: NASA's plain introduction to the mysterious 95%.
    - title: Planck mission results (ESA)
      url: https://www.esa.int/Science_Exploration/Space_Science/Planck
      why: The satellite whose data pinned down the six numbers.
site:
  published: true
  aiReviewed: true
---

## What the model says

$\Lambda$CDM describes a spatially flat universe whose expansion is governed by general relativity and whose contents are, today, roughly 5% ordinary (baryonic) matter, about 26% cold dark matter (CDM) that interacts with ordinary matter only through gravity so far as we can tell, and about 69% a cosmological constant $\Lambda$ with equation of state $w=-1$, plus photons and neutrinos that contribute negligibly now. Structure grows from nearly scale-invariant, Gaussian, adiabatic density fluctuations of the kind generated by cosmic inflation.

The base model has six free parameters: the physical baryon and cold-dark-matter densities $\Omega_b h^2$ and $\Omega_c h^2$, the angular size of the sound horizon at recombination $\theta_*$, the optical depth to reionization $\tau$, and the amplitude $A_s$ and tilt $n_s$ of the primordial fluctuations. Everything else, including the Hubble constant $H_0$, the matter fraction $\Omega_m$ and the age of the universe (about 13.8 Gyr), is derived from these. Planck's 2018 analysis of the cosmic microwave background (CMB) gives $H_0 = 67.4 \pm 0.5$ km/s/Mpc within this model.

## Why it is the standard

The model predicts the full temperature and polarization power spectra of the CMB, the baryon acoustic oscillation (BAO) scale seen in galaxy clustering, the luminosity-distance relation of Type Ia supernovae, the abundance of light elements from Big Bang nucleosynthesis, and the weak-lensing signal from large-scale structure, all from the same six numbers. Acceleration of the expansion was first inferred from supernovae in 1998 by two independent teams (Riess et al.; Perlmutter et al.), and has since been confirmed by independent combinations of CMB, BAO and lensing data.

## Where it is under strain

1. **Hubble constant.** Local distance-ladder measurements give $H_0$ near 73 km/s/Mpc, against 67-68 from the CMB within $\Lambda$CDM. This is treated in the Hubble-tension problem.
2. **Evolving dark energy.** DESI's second-year BAO data (March 2025), combined with the CMB, prefer a time-varying equation of state $w_0 w_a$ over a constant $\Lambda$ at 3.1 sigma; adding supernovae gives 2.8 to 4.2 sigma depending on the sample. A recalibration of the Dark Energy Survey supernova sample (DES-Dovekie, arXiv:2511.07517, November 2025) lowered the corresponding preference from 4.2 to 3.2 sigma, and the full DES multi-probe analysis (arXiv:2605.27221, May 2026) finds 3.0 sigma when combined with the CMB. This is "interesting" but below the 5-sigma convention and sensitive to supernova calibration.
3. **Neutrino mass.** DESI plus CMB gives $\sum m_\nu < 0.064$ eV (95%) in $\Lambda$CDM, uncomfortably close to the 0.059 eV minimum implied by oscillation experiments.
4. **Amplitude of clustering ($S_8$).** An earlier weak-lensing deficit relative to Planck has mostly faded: KiDS-Legacy agrees with Planck at about 0.7 sigma, and DES Year 6 differs from the combined Planck, ACT and SPT CMB data by 1.8 sigma in the full parameter space (2.6 sigma on $S_8$ alone).
5. **Small scales.** Dwarf-galaxy structure (cores, diversity, satellites) is debated and depends on how baryonic physics is modelled.

## What is not explained

$\Lambda$CDM is a phenomenological model. It does not say what dark matter is, why the vacuum energy is as small as observed, or what set the initial conditions. These are the dark-matter and cosmological-constant problems below. Reading the model as "fully tested" or "in crisis" are both overstatements: it remains the best fit across a very wide set of data, and the open question is whether the 2-to-7-sigma discrepancies listed above are systematics or the first signs of an extension.

# Plain explanation

Cosmologists have a simple recipe for the universe, called ΛCDM (say "lambda-C-D-M"). It has just six numbers, and with them it describes an astonishing amount: the glow left over from the Big Bang, the way galaxies are spread across the sky, the amounts of hydrogen and helium made in the first minutes, and the way the expansion of the universe has changed.

The recipe says that only about 5% of the universe is the ordinary stuff that makes stars, planets and people. About a quarter is cold dark matter: something that has not been seen directly, does not give off light, and so far seems to interact only through gravity. The remaining roughly 70% is dark energy, a steady push that makes the expansion speed up. The letter Λ (lambda) stands for the simplest form of this push, a constant amount of energy in empty space.

The recipe also says that structure grew from tiny ripples in density that were stretched out by a very early burst of expansion called inflation.

Why does anyone doubt a recipe that works so well? Because a few measurements do not agree perfectly. Two ways of measuring how fast the universe expands today give answers that differ by about 8 per cent, more than their stated errors allow. New surveys also hint that the dark-energy push might not be constant. These cracks may be errors in measurement, or they may point to new physics. Right now nobody knows.

# Student explanation

**What the model says.** ΛCDM describes a spatially flat universe whose expansion is governed by general relativity. Today, about 5% of the energy budget is baryonic (ordinary) matter, about 26% is cold dark matter (CDM) that interacts with ordinary matter only through gravity as far as we know, and about 69% is a cosmological constant Λ, a form of dark energy with equation of state w = −1 (its pressure is minus its energy density, so it never dilutes). Photons and neutrinos matter little today. Structure grew from nearly scale-invariant, Gaussian, adiabatic density fluctuations, of the kind produced by cosmic inflation.

**The six parameters.** The base model has six free numbers: the densities of baryons and of cold dark matter, the angular size of the sound horizon at recombination, the optical depth to reionization, and the amplitude and tilt of the primordial fluctuations. Everything else, including the Hubble constant H₀, the matter fraction and the age of the universe (about 13.8 billion years), is derived from these. The Planck satellite's 2018 analysis of the cosmic microwave background (CMB) gives H₀ = 67.4 ± 0.5 km/s/Mpc in this model.

**Why it is the standard.** One set of six numbers predicts: the CMB temperature and polarization spectra; the baryon acoustic oscillation (BAO) scale in galaxy clustering; the brightness–distance relation of Type Ia supernovae; the abundances of light elements from Big Bang nucleosynthesis; and the weak-lensing signal of large-scale structure. Acceleration of the expansion was inferred from supernovae in 1998 by two independent teams.

**Where it is strained.**

1. _The Hubble tension._ Distance-ladder measurements (Cepheids, supernovae) give H₀ around 73 km/s/Mpc, versus 67 from the CMB. The gap is several standard errors.
2. _Evolving dark energy._ Recent BAO data from DESI combined with the CMB and supernovae prefer a dark energy whose density changes with time, at roughly 3 to 4σ depending on the supernova sample; recalibrated supernova data pull this down to about 3σ. That is below the 5σ convention for a discovery and sensitive to how supernovae are calibrated.
3. _Structure growth (S₈)._ An earlier weak-lensing hint of less clumping than the CMB predicts has mostly faded in the latest surveys (KiDS-Legacy, DES Year 6).
4. _Neutrino mass._ Cosmology caps the sum of the neutrino masses at about 0.064 eV, uncomfortably close to the 0.059 eV minimum that oscillation experiments require.

**What is not explained.** The model does not say what dark matter or dark energy is. Λ is a placeholder: the vacuum-energy value that naive quantum estimates suggest is wildly larger than observed (see the cosmological-constant problem).
