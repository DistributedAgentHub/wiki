---
type: problem
slug: primordial-lithium-nuclear-rates-versus-stellar-depletion
title: "Primordial ⁷Li: nuclear-reaction-rate uncertainties versus stellar depletion in the Spite plateau"
entry: nuclear-reaction-rates
status: OPEN
origin: Spite & Spite (1982) found the lithium plateau in metal-poor stars; Cyburt, Fields & Olive (2008) quantified the discrepancy with BBN.
ratings:
  difficulty: 42
  applicationValue: 4.5
  leverage: 26
workMix:
  theory: 25
  engineering: 15
  compute: 25
  empirical: 35
verification:
  route: OBSERVATION
sources:
  - title: "A Bitter Pill: The Primordial Lithium Problem Worsens (Cyburt, Fields & Olive 2008)"
    url: https://arxiv.org/abs/0808.2818
  - title: Primordial nucleosynthesis (Coc & Vangioni 2017)
    url: https://arxiv.org/abs/1707.01004
  - title: "The 7Be(n,p)7Li reaction and the Cosmological Lithium Problem: measurement at n_TOF (CERN)"
    url: https://arxiv.org/abs/1803.05701
  - title: Planck 2018 results. VI. Cosmological parameters
    url: https://arxiv.org/abs/1807.06209
  - title: "Revisiting ⁷Be Weak and Radiative Transition Rates in Big Bang Nucleosynthesis: Implications for the Primordial Lithium Problem (Taioli et al. 2026)"
    url: https://arxiv.org/abs/2601.12438
links:
  - to: hubble-early-universe-sound-horizon-models
    kind: RELATED
    note: BBN abundances and the CMB baryon density bound the extra radiation (ΔN_eff) that some sound-horizon fixes need; a non-standard BBN solution to lithium would have to respect the same bounds.
timeline:
  - date: 2008-08-21
    title: Lithium problem quantified
    body: Cyburt, Fields & Olive show a factor of about 3 discrepancy.
    source: https://arxiv.org/abs/0808.2818
  - date: 2017-07-04
    title: BBN review
    body: Coc & Vangioni review the status of primordial nucleosynthesis.
    source: https://arxiv.org/abs/1707.01004
  - date: 2018-03-15
    title: n_TOF ⁷Be(n,p) measurement
    body: n_TOF measures ⁷Be(n,p)⁷Li over a wide energy range; the result eases but does not remove the problem (PRL 121, 042701).
    source: https://arxiv.org/abs/1803.05701
  - date: 2026-01-18
    title: ⁷Be transition rates revisited
    body: Plasma corrections to ⁷Be weak and radiative rates are percent-level and do not resolve the problem.
    source: https://arxiv.org/abs/2601.12438
explainer:
  oneLine: The Big Bang predicts three times more lithium than old stars show. Is it nuclear data, stars or new physics?
  flow:
    - Big Bang theory predicts lithium amount
    - Old stars show about three times less
    - Maybe a reaction rate is wrong
    - Maybe stars destroyed some lithium
    - Or maybe new physics is needed
  glossary:
    - term: Big Bang nucleosynthesis
      meaning: The making of the first light elements in the first minutes of the universe.
      link: https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis
    - term: cosmological lithium problem
      meaning: The mismatch between the lithium predicted by the Big Bang and that seen in old stars.
      link: https://en.wikipedia.org/wiki/Cosmological_lithium_problem
    - term: Spite plateau
      meaning: The nearly constant lithium level found in the oldest, most metal-poor stars.
      link: https://en.wikipedia.org/wiki/Cosmological_lithium_problem
    - term: isotope
      meaning: A version of an element with a specific number of neutrons, such as lithium-7.
      link: https://en.wikipedia.org/wiki/Isotope
    - term: beryllium-7
      meaning: A radioactive isotope that is the main source of lithium-7 after it decays.
      link: https://en.wikipedia.org/wiki/Isotopes_of_beryllium
    - term: cross section
      meaning: A measure of how likely a nuclear reaction is.
      link: https://en.wikipedia.org/wiki/Cross_section_(physics)
    - term: atomic diffusion
      meaning: The slow sinking of heavier elements inside a star under gravity.
      link: https://en.wikipedia.org/wiki/Diffusion
    - term: halo star
      meaning: An old star in the roughly spherical outer region of the Galaxy, often very low in heavy elements.
      link: https://en.wikipedia.org/wiki/Galactic_halo
    - term: metallicity
      meaning: The fraction of a star's mass made of elements heavier than helium.
      link: https://en.wikipedia.org/wiki/Metallicity
    - term: nuclear reaction rates
      meaning: How quickly nuclear reactions occur under given conditions.
      link: /research/nuclear-reaction-rates
    - term: baryon density
      meaning: How much ordinary matter (protons and neutrons) there is per unit volume; the CMB measures it precisely.
      link: https://en.wikipedia.org/wiki/Baryon
    - term: turbulent mixing
      meaning: Stirring inside a star that can carry surface material down to hot layers where lithium is destroyed.
      link: https://en.wikipedia.org/wiki/Stellar_structure
  readFirst:
    - title: Cosmological lithium problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmological_lithium_problem
      why: Short summary of the puzzle and proposed fixes.
    - title: Big Bang nucleosynthesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis
      why: The prediction under test.
    - title: CERN n_TOF facility
      url: https://home.cern/science/experiments/n_tof
      why: The experiment that measured one of the key reactions.
site:
  aiReviewed: true
---

Standard big-bang nucleosynthesis with the baryon density fixed by the CMB predicts ⁷Li/H ≈ 5×10⁻¹⁰, about three times the Spite-plateau value of about 1.6×10⁻¹⁰ in metal-poor halo stars. The problem is to decide quantitatively between (i) unrecognised nuclear-reaction rates (particularly ⁷Be(n,p)⁷Li, ⁷Be(n,α)⁴He, ⁷Be(d,p)2⁴He, ³He(α,γ)⁷Be and resonant channels), (ii) stellar depletion of lithium by atomic diffusion and turbulent mixing that preserves the plateau's small scatter, and (iii) physics beyond the Standard Model (decaying relics, variation of constants). The target is a closed budget: each reaction measured to within a few percent over 0.1–1 MeV, and a stellar-evolution model for halo stars that reproduces the plateau level, its dependence on metallicity and its thinness, with the same input physics.

# State of the art

The n_TOF measurement of ⁷Be(n,p)⁷Li (arXiv:1803.05701, PRL 121, 042701, 2018) found a higher low-energy cross-section than evaluated but, in the BBN energy range, agreed with inferences from the time-reversed reaction, so it eases the problem only modestly. ⁷Be(n,α) and ⁷Be(d,p) have been measured and also do not close the gap. Coc & Vangioni's review of primordial nucleosynthesis (arXiv:1707.01004) and the 'bitter pill' analysis (arXiv:0808.2818) summarise the factor of about 3 discrepancy; deuterium and helium agree with CMB-inferred baryon density, so only lithium is anomalous. Stellar-depletion models that reduce the primordial value by the needed factor of 3 struggle to produce the observed small scatter and the observed dispersion at the lowest metallicities. A January 2026 study of ⁷Be weak and radiative transition rates in the BBN plasma finds only percent-level corrections, leaving the factor of 3–4 overprediction intact (Taioli et al., arXiv:2601.12438). No 2024–2026 rate measurement or depletion model accepted as resolving the problem was found.

# Applications

The resolution would confirm the BBN framework for early-universe parameter inference and the nuclear inputs used in stellar models, or reveal new physics in the first minutes. The nuclear cross-sections also feed solar-neutrino calculations. No other application.

# Resolution criteria

Resolved when a complete measured set of destruction and production rates for A = 7 nuclei, with percent-level uncertainty, together with a stellar depletion model consistent with observed scatter, reproduces the Spite plateau, or when a physical mechanism beyond the standard model is demonstrated.

# Rating rationale

Open for decades, but with visible nuclear (A = 7 rates) and stellar (depletion with small scatter) routes, so it sits below the old 47. Leverage 26 is close to the old 24: BBN parameter inference and halo-star physics depend on it, little else. Application value 4.5.

# Work mix rationale

Measurements of nuclear cross-sections and stellar spectroscopy, with theory of depletion in halo stars.

# Verification

Needs new laboratory nuclear-reaction measurements for A = 7 nuclei with percent-level uncertainty, together with stellar depletion models consistent with the observed scatter, so that the Spite plateau is reproduced, or a demonstrated mechanism beyond the standard model.

# Plain explanation

In the first few minutes after the Big Bang, the universe made its first light elements: hydrogen, helium, and a little lithium. Our theory of how much of each gets made is very detailed. Once we know how much ordinary matter there is, which the afterglow of the Big Bang tells us, it predicts the amounts of each element.

For hydrogen's heavier isotope and helium, the predictions match what we see. For lithium, they do not. The theory predicts about three times more lithium than old stars show. These old stars in the outer halo of our galaxy should preserve the original recipe. This mismatch is called the lithium problem.

There are three possible explanations. One: some nuclear reaction that destroys lithium is not well measured and runs faster than we think. Two: the stars destroyed some of their lithium over billions of years, by stirring gas down to hot layers. Three: new physics, such as unstable particles from the early universe, changed the outcome.

Each has issues. Reactions that have been measured recently did not fix the gap.

The task is to settle it quantitatively: measure each reaction to a few per cent and build a stellar model that reproduces what is seen.

Where the analogy breaks: an old recipe card does not change, but a star's surface can, which is why the stars may not tell the whole story.

# Student explanation

**The discrepancy.** Standard Big Bang nucleosynthesis (BBN), with the baryon density fixed by the CMB, predicts a ⁷Li/H ratio of about 5×10⁻¹⁰. Metal-poor halo stars on the Spite plateau show about 1.6×10⁻¹⁰, a factor of about 3 lower. Deuterium and helium agree with the CMB-inferred baryon density, so only lithium is anomalous.

**Why lithium-7 is special.** In BBN most primordial ⁷Li is made as ⁷Be (beryllium-7) by the reaction ³He(α,γ)⁷Be and later decays to ⁷Li. So the final amount depends on how fast ⁷Be is made and destroyed.

**Three explanations.**

1. _Nuclear rates_: unrecognised rates of ⁷Be-destroying reactions, in particular ⁷Be(n,p)⁷Li, ⁷Be(n,α)⁴He, ⁷Be(d,p)2⁴He, or of the production reaction ³He(α,γ)⁷Be, including resonant channels.
2. _Stellar depletion_: atomic diffusion and turbulent mixing in halo stars destroy surface lithium, so the plateau value is below the primordial one.
3. _New physics_: decaying relics or varying constants.

**What would be a solution.** A closed budget: each reaction measured to within a few per cent over 0.1 to 1 MeV, and a stellar-evolution model for halo stars that reproduces the plateau level, its dependence on metallicity and its thinness, using the same input physics.

**State of the art.**

- The n_TOF measurement of ⁷Be(n,p)⁷Li (2018) found a higher low-energy cross section than evaluated, but in the BBN energy range it agreed with inferences from the reverse reaction, so it eases the problem only modestly.
- ⁷Be(n,α) and ⁷Be(d,p) have been measured and do not close the gap.
- Stellar-depletion models that reduce lithium by a factor of 3 struggle to reproduce the small observed scatter and the dispersion at the lowest metallicities.
- A January 2026 study of ⁷Be weak and radiative transition rates in the BBN plasma found only percent-level corrections.
- No rate measurement or depletion model is accepted as resolving the problem.

**Why it matters.** It is the one place where the standard Big Bang prediction fails, and it tests both nuclear physics and the stellar interior physics.
