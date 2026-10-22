---
type: problem
slug: cosmological-neutrino-mass-sum-vs-oscillation-floor
title: "Cosmological neutrino mass: why DESI DR2 plus CMB prefers a sum below the ≈0.06 eV oscillation floor"
entry: lambda-cdm
status: OPEN
origin: Tension emerged with DESI DR1 (2024) and sharpened with DESI DR2 BAO combined with Planck and ACT DR6 CMB (2025)
ratings:
  difficulty: 37
  applicationValue: 8.5
  leverage: 47
workMix:
  theory: 25
  engineering: 15
  compute: 15
  empirical: 45
verification:
  route: OBSERVATION
sources:
  - title: "DESI Collaboration (Elbers et al.): Constraints on neutrino physics from DESI DR2 BAO and DR1 full shape"
    url: https://arxiv.org/abs/2503.14744
  - title: "Esteban et al.: NuFIT 6.0, updated global analysis of three-flavor neutrino oscillations"
    url: https://arxiv.org/abs/2410.05380
  - title: "Jhaveri, Karwal, Hu: Turning a negative neutrino mass into a positive optical depth"
    url: https://arxiv.org/abs/2504.21813
  - title: "Sailer, Farren, Ferraro, White: Dispu τ able: the high cost of a low optical depth"
    url: https://arxiv.org/abs/2504.16932
  - title: "Chen, Zaldarriaga: It's all Ok: curvature in light of BAO from DESI DR2"
    url: https://arxiv.org/abs/2505.00659
  - title: "Pulido-Hernández, Cervantes-Cota: Negative masses and spatial curvature: effects on the neutrino mass tension in LambdaCDM and extended cosmologies"
    url: https://arxiv.org/abs/2603.13208
links:
  - to: hubble-early-universe-sound-horizon-models
    kind: RELATED
    note: "The preference is tied to H0·r_d and Ωm: CMB fits with negative effective neutrino mass shift H0 and the sound-horizon inference."
  - to: dynamical-dark-energy-desi-dr2
    kind: BUILDS_ON
    note: "The neutrino bound comes from the same DESI DR2 BAO + CMB fit and is degenerate with the dark-energy model: Σm_ν < 0.064 eV in ΛCDM relaxes to < 0.163 eV in w₀w_aCDM, so whether the sub-floor preference is real depends on the outcome of the w(z) question."
timeline:
  - date: 2025-03-18
    title: DESI DR2 neutrino constraints
    body: Σmν < 0.0642 eV (95%) in ΛCDM with CMB, and a 3σ tension with the oscillation floor for the effective-mass parameter.
    source: https://arxiv.org/abs/2503.14744
  - date: 2025-04-30
    title: Optical depth as the culprit
    body: Jhaveri, Karwal and Hu show τ ≈ 0.09 removes the tension; Sailer et al. (2025-04-23) show this τ conflicts with Planck low-ℓ polarization.
    source: https://arxiv.org/abs/2504.21813
  - date: 2025-05-01
    title: Spatial curvature relaxes the bound
    body: "Chen and Zaldarriaga: a slightly negative Ωk, favoured at about 2σ, relaxes Σmν to < 0.10 eV."
    source: https://arxiv.org/abs/2505.00659
  - date: 2026-03-13
    title: Symmetric negative-mass analysis with curvature
    body: Tension with the oscillation floor falls to 1.17σ with curvature included (PRD 114, 043543).
    source: https://arxiv.org/abs/2603.13208
explainer:
  oneLine: Cosmic data say neutrinos weigh less than particle experiments require. Mistake, fluke or new physics?
  flow:
    - "Oscillations: neutrinos must weigh at least 0.06 eV"
    - "Cosmology: mass makes matter clump less"
    - DESI + CMB prefer less than the minimum
    - Check optical depth, curvature, dark energy
    - Wait for more data to settle
  glossary:
    - term: neutrino
      meaning: A very light particle that barely interacts with matter.
      link: https://en.wikipedia.org/wiki/Neutrino
    - term: neutrino oscillation
      meaning: The change of a neutrino from one type to another as it travels, proving it has mass.
      link: https://en.wikipedia.org/wiki/Neutrino_oscillation
    - term: mass ordering
      meaning: Whether the third neutrino is heavier (normal) or lighter (inverted) than the other two.
      link: https://en.wikipedia.org/wiki/Neutrino_oscillation
    - term: electronvolt
      meaning: A tiny unit of energy and, in particle physics, mass.
      link: https://en.wikipedia.org/wiki/Electronvolt
    - term: baryon acoustic oscillations
      meaning: A characteristic length scale in galaxy clustering used as a ruler.
      link: https://en.wikipedia.org/wiki/Baryon_acoustic_oscillations
    - term: optical depth to reionization (τ)
      meaning: A number measuring how much CMB light was scattered by the free electrons from the first stars.
      link: https://en.wikipedia.org/wiki/Reionization
    - term: CMB lensing
      meaning: The bending of CMB light by matter on its way to us.
      link: https://en.wikipedia.org/wiki/Gravitational_lensing
    - term: spatial curvature
      meaning: Whether space on large scales is flat or bent like a sphere or saddle.
      link: https://en.wikipedia.org/wiki/Shape_of_the_universe
    - term: DESI
      meaning: The Dark Energy Spectroscopic Instrument, mapping tens of millions of galaxies.
      link: https://en.wikipedia.org/wiki/Dark_Energy_Spectroscopic_Instrument
    - term: evolving dark energy
      meaning: A dark energy whose density changes over time.
      link: https://en.wikipedia.org/wiki/Dark_energy
    - term: non-relativistic
      meaning: Moving much slower than light, so a particle behaves like ordinary matter and can clump.
      link: https://en.wikipedia.org/wiki/Special_relativity
    - term: 95% CL
      meaning: "A 95% confidence level: the range or limit that should contain the true value 95 times out of 100."
      link: https://en.wikipedia.org/wiki/Confidence_interval
  readFirst:
    - title: Neutrino (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neutrino
      why: Basic properties, including cosmological role.
    - title: Neutrino oscillation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neutrino_oscillation
      why: Why a minimum mass is known.
    - title: "DESI: Dark Energy Spectroscopic Instrument"
      url: https://www.desi.lbl.gov/
      why: The survey behind the new limits.
site:
  aiReviewed: true
---

Neutrino oscillations fix a lower bound on the sum of neutrino masses: $\sum m_\nu\gtrsim 0.058\,\mathrm{eV}$ for normal ordering and $\gtrsim 0.098\,\mathrm{eV}$ for inverted ordering (95% CL, NuFIT 6.0). Within $\Lambda$CDM with three degenerate species, DESI DR2 BAO combined with Planck and ACT CMB data give $\sum m_\nu<0.0642\,\mathrm{eV}$ (95%), already below the inverted-ordering floor and in tension with the normal-ordering floor once a parameter $\sum m_{\nu,\mathrm{eff}}$ is allowed to take negative values (about $3\sigma$ in DESI's analysis). **Problem:** determine whether the preference for $\sum m_{\nu,\mathrm{eff}}\lesssim 0$ is (i) a systematic in the CMB lensing/optical-depth/BAO analysis, (ii) a signature of a model extension (curvature, evolving dark energy, non-standard neutrino physics) that restores $\sum m_\nu\ge 0.058\,\mathrm{eV}$ without degrading fits to other data, or (iii) a statistical fluctuation, using data that do not share DESI's BAO distance scale or the Planck low-ℓ determination of the reionization optical depth $\tau$.

# State of the art

DESI (Elbers et al., arXiv:2503.14744) report Σmν < 0.0642 eV (95%) for DESI DR2 BAO + CMB in ΛCDM, a Feldman–Cousins limit of 0.053 eV, and Σmν < 0.163 eV in w0waCDM; an analysis with an effective neutrino mass allowed to go negative finds a 3σ tension with the oscillation floor. NuFIT 6.0 (arXiv:2410.05380) puts that floor at 0.058 eV (normal) and 0.098 eV (inverted ordering). The leading explanations are now quantified. (i) Optical depth: dropping CMB lensing and low-ℓ polarization, the data prefer τ = 0.091 ± 0.011, which removes the tension at 0.06 eV (Jhaveri, Karwal and Hu, arXiv:2504.21813), but such a τ is in roughly 3–5σ tension with Planck low-ℓ polarization (Sailer, Farren, Ferraro and White, arXiv:2504.16932, PRL 2026); with an external τ prior of 0.11 ± 0.006 one 2026 preprint finds Σmν = 0.10 (+0.04/−0.05) eV, a tentative 2σ detection (Sullivan, de Belsunce and Ivanov, arXiv:2606.30903, unrefereed). (ii) Curvature: a small negative Ωk, favoured at about 2σ, relaxes the bound to < 0.10 eV (Chen and Zaldarriaga, arXiv:2505.00659), and with a symmetric negative-mass extension the tension falls from 2.59σ to 1.17σ, Σmν,eff = −0.011 (+0.052/−0.050) eV (Pulido-Hernández and Cervantes-Cota, arXiv:2603.13208, PRD 114, 043543, 2026). (iii) Evolving dark energy relaxes it too. No DESI DR3 or Euclid neutrino result had appeared by October 2026, so the preference is model-dependent and unresolved.

# Applications

A measured Σmν constrains the neutrino mass ordering and absolute mass scale, informing beta-decay and neutrinoless double-beta experiments and global cosmological parameter inference; resolving the tension also calibrates how much cosmological constraints can be trusted against systematics.

# Resolution criteria

Either (a) an independent determination of the dominant nuisance parameters (reionization optical depth, CMB lensing amplitude, BAO distance scale) from data not entering the preference, after which Σmν_eff is consistent with ≥ 0.059 eV at the 2σ level in ΛCDM, or (b) a model extension that fits CMB, BAO and SNe jointly with Σmν ≥ 0.059 eV with a better Bayesian evidence than ΛCDM, confirmed by DESI DR3/Euclid-class data, or (c) a >3σ detection of a negative effective neutrino energy density persisting across independent probes.

# Rating rationale

Difficulty 37: the culprits are identified and quantified (τ, the BAO amplitude, curvature or w0wa) and DESI DR3, Euclid and large-scale polarization data will discriminate, so it sits just below the dynamical-dark-energy and ladder problems (40), whose systematics are less isolated. Application value 8.5 is near the cosmology ceiling (dark energy 9): it informs neutrino-mass experiments and the trust placed in cosmological parameter inference. Leverage 47: the answer constrains the mass ordering and the extensions of ΛCDM, below dynamical dark energy (55) because a τ systematic would resolve it with little downstream effect.

# Work mix rationale

Mostly new data (optical depth, lensing, BAO) and joint analyses; theory is needed for model extensions and consistent priors.

# Verification

Settled by new independent measurements of the dominant nuisance parameters (reionization optical depth, CMB lensing amplitude, BAO distance scale) from data not entering the preference, after which the effective neutrino-mass sum should be consistent with 0.059 eV or more at 2 sigma in LCDM, or by a model extension that fits CMB, BAO and SNe jointly.

# Plain explanation

Neutrinos are among the most common particles in the universe. Experiments that watch neutrinos change type as they travel proved that they have a small mass. These experiments cannot give the mass directly, but they do set a minimum: the three kinds together must weigh at least about 0.06 electron-volts, which is less than a billionth of the mass of a hydrogen atom.

Cosmology offers another route. Because neutrinos were everywhere in the early universe, their mass changes how matter clumps together. By mapping galaxies and the afterglow of the Big Bang, cosmologists can place an upper limit on the total neutrino mass.

The strange part: the latest limit, from the DESI galaxy survey plus the CMB, sits barely above the minimum that particle experiments demand, leaving almost no room. It is like guessing the weight of a backpack from how much it slows a hiker: it works only if you know everything else about the hike. If you let the mass sum go negative in the maths, which makes no physical sense but is a way to test, the data prefer a negative value at about 3 sigma.

Possible explanations: a data-handling error, a bigger cosmological model (for example dark energy that changes with time), or bad luck. Nobody yet knows which.

Where the analogy breaks: a hiker can be weighed directly, but the "everything else" here, such as dark energy, the shape of space and how the first stars ionized gas, is itself uncertain.

# Student explanation

**The oscillation floor.** Neutrino oscillations fix a lower bound on the sum of neutrino masses: Σm_ν ≳ 0.058 eV for the normal mass ordering and ≳ 0.098 eV for the inverted ordering (95% CL, NuFIT 6.0).

**The cosmological limit.** Neutrinos with mass become non-relativistic after the CMB epoch and suppress the growth of structure on small scales. In ΛCDM with three degenerate species, DESI DR2 BAO combined with Planck and ACT CMB data give Σm_ν < 0.0642 eV (95%), already below the inverted-ordering floor and in tension with the normal-ordering floor. Allowing an "effective" mass sum Σm_ν,eff to take negative values, DESI's analysis finds about 3σ tension with the oscillation floor. A Feldman–Cousins treatment of the limit gives 0.053 eV, and in w₀w_aCDM the bound relaxes to 0.163 eV.

**The problem.** Determine whether the preference for Σm_ν,eff ≲ 0 is

1. a systematic in the CMB lensing, optical depth or BAO analysis;
2. a signature of a model extension (curvature, evolving dark energy, non-standard neutrino physics) that restores Σm_ν ≥ 0.058 eV without degrading fits to other data;
3. a statistical fluctuation,
   using data that do not share DESI's BAO distance scale or the Planck low-ℓ measurement of the reionization optical depth τ.

**State of the art.**

- (i) _Optical depth_: dropping CMB lensing and low-ℓ polarization, the data prefer τ = 0.091 ± 0.011, which removes the tension at 0.06 eV, but that τ is in roughly 3 to 5σ tension with Planck low-ℓ polarization. With an external τ prior of 0.11 ± 0.006, one 2026 preprint finds Σm_ν = 0.10 (+0.04/−0.05) eV, a tentative 2σ detection (unrefereed).
- (ii) _Curvature_: a small negative curvature, favoured at about 2σ, relaxes the bound to below 0.10 eV. With a symmetric negative-mass extension the tension falls from 2.59σ to 1.17σ.
- (iii) _Evolving dark energy_ relaxes the bound too.
- No DESI DR3 or Euclid neutrino result had appeared by October 2026, so the preference is model-dependent.

**Why it matters.** Cosmology may soon detect the neutrino mass sum or find a conflict with particle physics.
