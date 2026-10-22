---
type: problem
slug: primordial-b-modes-delensing-foreground-residuals
title: "Reaching σ(r) ≈ 10⁻³ with CMB B-modes: delensing efficiency and Galactic foreground residuals"
entry: cosmic-microwave-background
status: OPEN
origin: Kamionkowski, Kosowsky & Stebbins and Seljak & Zaldarriaga (1997) introduced B-mode polarisation as a probe of inflationary tensors.
ratings:
  difficulty: 55
  applicationValue: 6
  leverage: 54
workMix:
  theory: 25
  engineering: 40
  compute: 10
  empirical: 25
verification:
  route: OBSERVATION
sources:
  - title: "BICEP/Keck XIII: Improved Constraints on Primordial Gravitational Waves using Planck, WMAP and BICEP/Keck Observations through the 2018 Observing Season"
    url: https://arxiv.org/abs/2110.00483
  - title: Improved limits on the tensor-to-scalar ratio using BICEP and Planck (Tristram et al. 2022)
    url: https://arxiv.org/abs/2112.07961
  - title: "The Simons Observatory: Science goals and forecasts"
    url: https://arxiv.org/abs/1808.07445
  - title: Delensing CMB Polarization with External Datasets (Smith, Hanson & LoVerde 2010)
    url: https://arxiv.org/abs/1010.0048
  - title: Planck intermediate results. XXX. The angular power spectrum of polarized dust emission at intermediate and high Galactic latitudes
    url: https://arxiv.org/abs/1409.5738
  - title: A Demonstration of Improved Constraints on Primordial Gravitational Waves with Delensing (BICEP/Keck and SPTpol, 2021)
    url: https://arxiv.org/abs/2011.08163
  - title: "Inflation at the End of 2025: Constraints on r and n_s Using the Latest CMB and BAO Data (Balkenhol et al. 2025)"
    url: https://arxiv.org/abs/2512.10613
  - title: CMB-S4 project site (DOE/NSF July 2025 decision)
    url: https://cmb-s4.org/
links:
  - to: hubble-early-universe-sound-horizon-models
    kind: RELATED
    note: Both depend on the same CMB lensing reconstruction and polarisation foreground cleaning in SPT-3G, ACT and Simons Observatory data.
  - to: cosmic-birefringence-absolute-polarization-angle
    kind: BUILDS_ON
    note: A polarization-angle error (or a real rotation β) mixes E into B with C_ℓ^BB ∝ sin²(2α)C_ℓ^EE, a spurious signal that must be controlled at the σ(r) ≈ 10⁻³ level; the absolute angle calibration this problem develops (Tau A, drone calibrators, foreground EB) is that control.
timeline:
  - date: 2021-10-01
    title: BICEP/Keck 2018 constraint
    body: r < 0.036 (95% CL), 0.032 with Planck and BAO.
    source: https://arxiv.org/abs/2110.00483
  - date: 2021-12-15
    title: Planck plus BICEP limit
    body: Tristram et al. obtain r < 0.032.
    source: https://arxiv.org/abs/2112.07961
  - date: 2025-07-09
    title: CMB-S4 not supported
    body: DOE and NSF state they can no longer support the CMB-S4 project.
    source: https://cmb-s4.org/
  - date: 2025-12-11
    title: Combined r limit
    body: Latest CMB+BAO combination gives r < 0.034 (95%).
    source: https://arxiv.org/abs/2512.10613
explainer:
  oneLine: Search the polarization of the Big Bang glow for a faint twist from gravitational waves of the first instant.
  flow:
    - Inflation would make primordial gravitational waves
    - Waves leave B-mode twist in CMB polarization
    - "Lensing makes fake B modes: remove them"
    - "Galactic dust makes B modes: remove it"
    - Reach sensitivity to see or rule out r
  glossary:
    - term: cosmic microwave background
      meaning: The oldest light in the universe, released about 380,000 years after the Big Bang.
      link: /research/cosmic-microwave-background
    - term: polarization
      meaning: A preferred direction of the wiggling of light waves.
      link: https://en.wikipedia.org/wiki/Polarization_(waves)
    - term: B modes
      meaning: A swirling pattern in CMB polarization that primordial gravitational waves would produce.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background#Polarization
    - term: tensor-to-scalar ratio
      meaning: The size of primordial gravitational waves compared with density ripples; written r.
      link: https://en.wikipedia.org/wiki/Cosmic_inflation
    - term: cosmic inflation
      meaning: A proposed burst of extremely fast expansion in the first instant of the universe.
      link: https://en.wikipedia.org/wiki/Cosmic_inflation
    - term: gravitational lensing
      meaning: The bending of light by the gravity of matter in between.
      link: https://en.wikipedia.org/wiki/Gravitational_lensing
    - term: delensing
      meaning: Estimating the lensing effect and subtracting it to reveal what lies beneath.
      link: https://en.wikipedia.org/wiki/Gravitational_lensing
    - term: foreground
      meaning: Light from sources in front of the background, here dust and electrons in our galaxy.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background
    - term: synchrotron radiation
      meaning: Light emitted by fast electrons spiralling in a magnetic field.
      link: https://en.wikipedia.org/wiki/Synchrotron_radiation
    - term: BICEP and Keck Array
      meaning: A series of telescopes at the South Pole that measure CMB polarization.
      link: https://en.wikipedia.org/wiki/BICEP_and_Keck_Array
    - term: LiteBIRD
      meaning: A planned Japanese-led space mission to map CMB polarization.
      link: https://en.wikipedia.org/wiki/LiteBIRD
    - term: multipole ℓ
      meaning: "A label for angular size on the sky: low ℓ means big patches, high ℓ means small ones (roughly 180°/ℓ)."
      link: https://en.wikipedia.org/wiki/Spherical_harmonics
  readFirst:
    - title: Cosmic microwave background (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmic_microwave_background
      why: Includes a section on polarization and B modes.
    - title: BICEP and Keck Array (Wikipedia)
      url: https://en.wikipedia.org/wiki/BICEP_and_Keck_Array
      why: The experiments that set the best limits and the 2014 dust story.
    - title: Cosmic inflation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmic_inflation
      why: The theory the search is testing.
site:
  aiReviewed: true
---

Measure the tensor-to-scalar ratio r to a statistical-plus-systematic precision of σ(r) ≈ 10⁻³, sufficient to detect r ≳ 0.005 at 5σ or to test Starobinsky-like plateau models, which predict r ≈ 0.004. The problem has two quantitative halves: delensing, which must remove at least 80–90% of the lensing B-mode variance at ℓ ≈ 50–150 using CMB lensing reconstruction, CIB and large-scale-structure tracers; and component separation, which must remove Galactic synchrotron and dust polarisation, with spatially varying spectral indices and decorrelation of dust across frequency, to a residual of δr < 10⁻³ without bias. The task is to determine, with end-to-end simulations including realistic dust and synchrotron models, instrument systematics (beam, gain, bandpass), the achievable bias and variance for ground (Simons Observatory, BICEP Array, SPT-3G) and space (LiteBIRD) experiments.

# State of the art

BICEP/Keck through the 2018 season gives r < 0.036 at 95% CL, and r < 0.032 combined with Planck and BAO (arXiv:2110.00483; Tristram et al., arXiv:2112.07961). Delensing was proposed with external datasets (Smith, Hanson & LoVerde, arXiv:1010.0048) and was demonstrated on BICEP/Keck data with a lensing B-mode template built from SPT, BICEP/Keck and Planck polarisation and the Planck CIB map (arXiv:2011.08163). Planck dust polarisation power spectra (arXiv:1409.5738) found a dust BB/EE amplitude ratio of about 0.5, no dust-free windows anywhere on the sky, and a dust BB power in the BICEP2 field comparable to the BICEP2 signal itself. The Simons Observatory forecasts σ(r) ≈ 0.002–0.003 with its small-aperture telescopes (arXiv:1808.07445). In July 2025 DOE and NSF jointly decided they could no longer support the CMB-S4 project (statement reproduced on the project site and reported by Science), removing the planned σ(r) ≈ 5×10⁻⁴ ground experiment. The best limit is still essentially BK18: a December 2025 combination of the latest CMB and BAO data gives r < 0.034 (Balkenhol et al., arXiv:2512.10613), and SPT-3G alone reaches r < 0.25 (arXiv:2505.02827). BICEP Array and the Simons Observatory small-aperture telescopes have not yet published r constraints; LiteBIRD (planned for the early 2030s) targets σ(r) ≲ 10⁻³. No detection of primordial B-modes has been claimed.

# Applications

A detection at r ≈ 0.01 would establish the energy scale of inflation (about 10¹⁶ GeV), the quantum nature of gravity via the tensor spectrum and select classes of inflation models. Delensing and component separation methods are reused in cosmic-shear and intensity-mapping work. No practical application.

# Resolution criteria

Resolved by a detection of primordial B-modes at ≥5σ with demonstrated foreground-residual robustness across frequency and sky patches, or by an upper limit r < 0.003 at 95% CL with total systematic bias ≤10⁻³.

# Rating rationale

σ(r) ≈ 10⁻³ needs both a demonstrated foreground solution and an instrument, and CMB-S4 was dropped in 2025, so difficulty is slightly above the old 52. Leverage is restored to the old 54: a detection fixes the energy scale of inflation and a bound at r < 0.003 excludes the plateau models that dominate inflation model building. Application value 6.

# Work mix rationale

Instrument building and calibration dominate, with component-separation theory and simulation.

# Verification

Needs new CMB polarisation data: either a primordial B-mode detection at 5 sigma with demonstrated foreground-residual robustness across frequencies and sky patches, or an upper limit r < 0.003 at 95% CL with total systematic bias of 1e-3 or less.

# Plain explanation

One idea about the very first moment of the universe, called inflation, says space expanded extremely fast. If so, most versions predict it also shook space itself and made gravitational waves that still fill the universe, though in some versions they are far too faint to see. But they would leave a faint fingerprint in the polarization of the oldest light in the universe, the cosmic microwave background: a twisting swirl pattern called B modes.

Its strength is measured by a number called r. The present limit says r is below about 0.03, so the signal, if present, is very faint.

It is like reading faint writing through a dirty, scratched window. There are two big obstacles. First, the pattern from primordial waves is mixed with another swirl pattern made by gravity bending the light on its way to us (lensing). Scientists can estimate the bending and subtract it, a process called delensing. Second, dust and charged particles in our own Milky Way also emit polarized light with similar patterns. They are separated by measuring at many colours, since dust and the cosmic glow differ in colour.

An early claim of a detection in 2014 turned out to be consistent with dust. No detection has been made since. The next goal needs delensing that removes most of the lensing signal and very precise dust cleaning.

Where the analogy breaks: cleaning a window removes dirt in one go, but here the dirt has a structure that changes across the sky.

# Student explanation

**The target.** The tensor-to-scalar ratio r measures the strength of primordial gravitational waves relative to density fluctuations. A statistical-plus-systematic precision of σ(r) of about 10⁻³ would allow a 5σ detection of r above about 0.005, or test of Starobinsky-like plateau inflation models, which predict r near 0.004.

**Why B modes.** Polarization maps decompose into E modes (gradient-like) and B modes (curl-like). Density fluctuations produce only E modes at recombination. Primordial gravitational waves also produce B modes, most strongly at multipoles of ℓ around 80 (recombination bump) and ℓ below 10 (reionization bump). Gravitational lensing by matter converts some E into B (the lensing B modes), forming a noise-like background at ℓ of 50 to 150.

**The two halves of the problem.**

1. _Delensing_: remove at least 80 to 90% of the lensing B-mode variance at ℓ of about 50 to 150, by using CMB lensing reconstruction together with tracers like the cosmic infrared background and large-scale structure.
2. _Component separation_: remove Galactic synchrotron and dust polarization, which have spatially varying spectral indices and decorrelate with frequency, to a residual δr below 10⁻³ without bias.

**Required work.** End-to-end simulations with realistic dust and synchrotron models and instrument systematics (beam, gain, bandpass), to find the achievable bias and variance for ground-based experiments (Simons Observatory, BICEP Array, SPT-3G) and space (LiteBIRD).

**State of the art.** BICEP/Keck through the 2018 season gives r < 0.036 (95%), and r < 0.032 with Planck and BAO. Delensing has been demonstrated on BICEP/Keck data using templates built from SPT, BICEP/Keck, Planck polarization and the Planck CIB map. Planck found a dust BB/EE ratio of about 0.5, no dust-free windows on the sky, and a dust B-mode power in the BICEP2 field comparable to the BICEP2 signal. The Simons Observatory forecasts σ(r) of about 0.002 to 0.003. In July 2025 the US DOE and NSF said they could no longer support the CMB-S4 project. LiteBIRD (launch now aimed at the mid-2030s after a 2025 reformulation) targets σ(r) at or below 10⁻³. No detection has been claimed.

**Why it matters.** A detection would reveal the energy scale of inflation.
