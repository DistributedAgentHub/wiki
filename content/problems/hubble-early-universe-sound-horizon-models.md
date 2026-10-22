---
type: problem
slug: hubble-early-universe-sound-horizon-models
title: Sound-horizon reduction (early dark energy, ΔN_eff, varying mₑ) versus ACT DR6, SPT-3G and DESI DR2
entry: lambda-cdm
status: OPEN
origin: Poulin, Smith, Karwal & Kamionkowski (2018) proposed early dark energy as a resolution of the Hubble tension.
ratings:
  difficulty: 54
  applicationValue: 7
  leverage: 50
workMix:
  theory: 55
  engineering: 0
  compute: 35
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Early Dark Energy Can Resolve The Hubble Tension (Poulin et al. 2018)
    url: https://arxiv.org/abs/1811.04083
  - title: "The Atacama Cosmology Telescope: Constraints on Pre-Recombination Early Dark Energy (Hill et al. 2021)"
    url: https://arxiv.org/abs/2109.04451
  - title: "The Atacama Cosmology Telescope: DR6 Power Spectra, Likelihoods and ΛCDM Parameters (2025)"
    url: https://arxiv.org/abs/2503.14452
  - title: "DESI DR2 Results II: BAO Measurements and Cosmological Constraints (2025)"
    url: https://arxiv.org/abs/2503.14738
  - title: "SPT-3G D1: CMB temperature and polarization power spectra and cosmology from 2019 and 2020 observations of the SPT-3G Main field (Camphuis et al. 2025)"
    url: https://arxiv.org/abs/2506.20707
  - title: "The Hubble tension: A decade review (Cai & Wang, 2026)"
    url: https://arxiv.org/abs/2606.20434
links:
  - to: hubble-ladder-jwst-percent-systematics
    kind: BUILDS_ON
    note: The target these models must hit (a 5–7% smaller r_d giving H₀ ≈ 72–73) is set by the local distance-ladder value; if ladder systematics pull H₀ toward the CCHP's 68–70, the required sound-horizon reduction shrinks or vanishes.
  - to: s8-baryonic-feedback-small-scale-power
    kind: BUILDS_ON
    note: Early dark energy fits raise ω_m and n_s and hence S₈, so whether weak lensing excludes them depends on how much of the cosmic-shear S₈ is a baryonic-feedback suppression of P(k) at k = 1–10 h/Mpc.
timeline:
  - date: 2018-11-09
    title: Early dark energy proposed
    body: Poulin et al. show an EDE component fits Planck with higher H₀.
    source: https://arxiv.org/abs/1811.04083
  - date: 2025-03-18
    title: ACT DR6 and DESI DR2 release
    body: ACT DR6 finds no preference for EDE; DESI DR2 BAO tightens late-time expansion.
    source: https://arxiv.org/abs/2503.14452
  - date: 2025-06-25
    title: SPT-3G D1 and CMB-SPA
    body: Combined SPT, ACT and Planck CMB gives H₀ = 67.19 ± 0.38 in ΛCDM.
    source: https://arxiv.org/abs/2506.20707
  - date: 2026-06-18
    title: Hubble tension decade review
    body: "Cai & Wang review: standard fixes tightly constrained, tension unresolved."
    source: https://arxiv.org/abs/2606.20434
explainer:
  oneLine: Can a change to the early universe fix the Hubble tension without breaking any other measurement?
  flow:
    - CMB measures angles, needs a ruler length
    - Shorter ruler would raise inferred H₀
    - Add early energy, particles or new constants
    - Must still fit all other data
    - Newest data disfavour most such models
  glossary:
    - term: sound horizon
      meaning: The farthest distance sound waves could travel in the early universe's plasma; used as a ruler.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: baryon acoustic oscillations
      meaning: A fixed ripple scale in the distribution of galaxies left over from the early sound waves.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: early dark energy
      meaning: A proposed short-lived extra energy component in the young universe that speeds up early expansion.
      link: https://en.wikipedia.org/wiki/Hubble_tension
    - term: N_eff (effective number of neutrino species)
      meaning: A measure of how much radiation there is in the early universe apart from photons; the standard value is about 3.04.
      link: https://en.wikipedia.org/wiki/Cosmic_neutrino_background
    - term: recombination
      meaning: The time when electrons and nuclei first combined, making the universe transparent.
      link: https://en.wikipedia.org/wiki/Recombination_(cosmology)
    - term: fine-structure constant
      meaning: A fundamental number, about 1/137, that sets the strength of electromagnetic interactions.
      link: https://en.wikipedia.org/wiki/Fine-structure_constant
    - term: axion
      meaning: A hypothetical very light particle or field; some versions are proposed as dark-matter or dark-energy candidates.
      link: https://en.wikipedia.org/wiki/Axion
    - term: Hubble tension
      meaning: The disagreement between the local and early-universe expansion rate.
      link: https://en.wikipedia.org/wiki/Hubble_tension
    - term: prior volume effect
      meaning: A statistical artefact where a result seems to favour a model just because a large region of parameter space is allowed by the prior.
      link: https://en.wikipedia.org/wiki/Prior_probability
    - term: Atacama Cosmology Telescope
      meaning: A ground-based telescope in Chile that mapped the CMB at high resolution.
      link: https://en.wikipedia.org/wiki/Atacama_Cosmology_Telescope
    - term: cosmic microwave background
      meaning: The oldest light in the universe.
      link: /research/cosmic-microwave-background
    - term: redshift
      meaning: How much light has been stretched by cosmic expansion; higher redshift means further away and earlier in time.
      link: https://en.wikipedia.org/wiki/Redshift
  readFirst:
    - title: Hubble tension (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hubble_tension
      why: Lists the proposed early-universe fixes and their status.
    - title: Baryon acoustic oscillations (Wikipedia)
      url: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
      why: Explains the ruler that these models try to shorten.
    - title: Atacama Cosmology Telescope (Wikipedia)
      url: https://en.wikipedia.org/wiki/Atacama_Cosmology_Telescope
      why: About one of the telescopes whose data constrain these models.
site:
  aiReviewed: true
---

Determine whether any model that reduces the comoving sound horizon r_d by about 5–7% before recombination, so that the CMB and BAO give H₀ ≈ 72–73 km/s/Mpc, can simultaneously fit Planck, ACT DR6 and SPT-3G high-ℓ TT/TE/EE spectra, CMB lensing, DESI DR2 BAO and the growth of structure. The classes at issue are early dark energy (an axion-like scalar field contributing about 10% of the energy density near matter–radiation equality, with field fraction f_EDE and critical redshift z_c), extra relativistic species ΔN_eff, a varying electron mass or fine-structure constant, and modified recombination. For each class the question is quantitative: what is the largest H₀ allowed by the joint likelihood, and does the data prefer a non-zero extension parameter (for example f_EDE > 0) at more than 3σ. A model-independent statement is also wanted: the minimal shifts in matter density and spectral tilt that any such model must induce, and why they strain the S₈ and BAO fits.

# State of the art

Early dark energy (Poulin et al., arXiv:1811.04083) fit Planck with H₀ ≈ 71–72, ACT DR4-era analyses showed mild preference (Hill et al., arXiv:2109.04451), but ACT DR6 found no preference for early dark energy, varying constants or modified recombination, and N_eff = 2.86 ± 0.13 (arXiv:2503.14454), and profile-likelihood analyses indicate that much of the earlier posterior weight is a prior-volume effect. SPT-3G D1 alone gives H₀ = 66.66 ± 0.60, and the CMB-SPA combination of SPT-3G, ACT and Planck gives 67.19 ± 0.38 in ΛCDM, with a 2.8σ CMB–DESI DR2 BAO discrepancy and mild preferences for modified recombination or a varying electron mass in a non-flat universe when BAO are added (arXiv:2506.20707, June 2025). ACT DR6 with Planck and DESI DR2 BAO gives 68.43 ± 0.27 (arXiv:2503.14452). DESI DR2 BAO (arXiv:2503.14738, March 2025) pins the late-time expansion and the product H₀·r_d. Typical EDE fits raise the matter density and spectral index and worsen the fit to weak-lensing S₈ and to DESI BAO. The June 2026 decade review (Cai & Wang, arXiv:2606.20434) concludes that most standard fixes are tightly constrained and considers interacting dark energy as an alternative. No model class is accepted as resolving the tension. SPT-3G D1 and ACT DR6 (2025) are the latest CMB releases as of October 2026: SPT-3G Ext-10k exists only as forecasts (arXiv:2510.24669) and the Simons Observatory had published commissioning papers but no cosmology.

# Applications

A confirmed sound-horizon modification would be new physics before recombination (a light scalar sector or extra radiation), constraining axion-like and dark-sector model building. A firm exclusion converts into bounds on f_EDE, ΔN_eff and mₑ variation. The inference methods (profile likelihoods, emulators) are reusable across cosmological extensions. There is no near-term practical application.

# Resolution criteria

A model class is excluded when profile-likelihood and Bayesian fits to the full CMB+BAO+SN+lensing data bound f_EDE (or its analogue) below the value needed for H₀ > 71 at ≥3σ in two independent pipelines. A model is a candidate resolution when it fits all those data, including S₈, with a likelihood improvement over ΛCDM of at least 3σ after the extra parameters and has a physical, technically natural origin.

# Rating rationale

Harder than the ladder half: ACT DR6 and SPT-3G found no preference for EDE, varying constants or modified recombination, so success needs a new model class rather than more data; it sits just above the old Hubble tension (50) and below primordial B-modes (55). Leverage 50 matches the old Hubble tension because a confirmed pre-recombination modification would reshape early-universe cosmology, but a firm exclusion only adds bounds. Application value 7, as for the cosmological constant problem.

# Work mix rationale

Mostly model-building and Bayesian inference. Compute is Boltzmann-code runs and emulators. The empirical share is the next CMB and BAO data.

# Verification

A model class is excluded when profile-likelihood and Bayesian fits to the full CMB, BAO, SN and lensing data bound its early-dark-energy fraction (or analogue) below the value needed for H0 > 71 at 3 sigma or more in two independent pipelines. The spec must name the datasets and likelihoods (including ACT DR6, SPT-3G and DESI DR2), the samplers, convergence criteria and the chi-square improvement over LCDM that makes a model a candidate. Fits run on public data, so anyone can rerun them.

# Plain explanation

Two ways of measuring how fast the universe expands disagree. Measuring nearby galaxies gives a larger number. Taking the glow from the early universe and running it forward with our best model gives a smaller number.

One idea is that the model is missing something in the early universe. The glow gives us a "ruler": the distance a sound wave could travel in the young universe's hot fog. If that ruler were about 5 to 7 per cent shorter than the model assumes, the maths would give the larger number for today's expansion and the two measurements could agree.

What could shrink the ruler? Candidates include a short-lived burst of extra energy, called early dark energy, a few extra types of nearly invisible particles, or a slightly different electron mass. Each would speed up the early universe a little, so the sound wave has less time to travel.

The catch is that changing the early universe also changes many other things we can measure well, such as the detailed patterns in the glow and the way galaxies are clustered. Newer data have not been kind to these ideas. The latest telescope results show no clear preference for any of them.

The open question is simple: is there any version that fits all of the data at once, or is the tension coming from somewhere else?

Where the analogy breaks: a ruler can be shortened without touching anything else, but the early universe is tightly interconnected.

# Student explanation

**The idea.** The CMB and baryon acoustic oscillations (BAO) measure angles. To turn an angle into H₀, they need the true length of a standard ruler, the comoving sound horizon r_d: how far sound waves traveled in the photon–baryon plasma before the baryons decoupled from light. The CMB gives angular sizes very precisely, so if r_d were smaller by 5 to 7%, the inferred H₀ would be larger, about 72 to 73 km/s/Mpc, matching the local ladder.

**How to shrink r_d.** r_d is an integral of the sound speed divided by the expansion rate. Anything that makes the expansion rate larger before recombination reduces it. Candidates:

- _Early dark energy (EDE)_: an axion-like scalar field that contributes about 10% of the energy density near matter–radiation equality (when matter and radiation had equal energy density, roughly 50,000 years after the Big Bang), parametrized by its fraction f_EDE and critical redshift z_c, then decays away.
- _Extra relativistic species (ΔN_eff)_: more light, invisible particles, adding to the radiation density.
- _Varying constants_: a different electron mass or fine-structure constant changes recombination.
- _Modified recombination._

**The constraints.** A good model must still match all of: the Planck, ACT DR6 and SPT-3G high-ℓ temperature and polarization spectra (TT/TE/EE); CMB lensing; DESI DR2 BAO; and the growth of structure (the amount of clustering). Many of these tweaks that fix H₀ spoil another observable, for example by increasing the amplitude of matter clustering or by changing the damping tail of the CMB.

**Where things stand.** Early dark energy fit Planck data with H₀ around 71 to 72, and earlier ACT data showed a mild preference. But ACT DR6 found no preference for EDE, varying constants or modified recombination, and found N_eff = 2.86 ± 0.13, not above the standard 3.04. Statistical analyses suggest much of the earlier support was a prior-volume effect: an apparent preference created by how the extra parameters were allowed to range, not by the data. SPT-3G alone gives a low H₀ near 66.7; combining SPT, ACT and Planck with DESI BAO shows only mild preferences for modified recombination or a varying electron mass, and no model class is accepted as a fix.

**The task.** For each class, state quantitatively the largest H₀ allowed by the joint likelihood, and whether any class survives. A model that does would be a major discovery; a clean no would push attention to the late-time ladder and systematics.
