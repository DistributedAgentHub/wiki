---
type: problem
slug: c12-alpha-gamma-o16-rate-pair-instability-mass-gap
title: The 12C(α,γ)16O S-factor at 300 keV to ±10% and the upper edge of the black-hole pair-instability mass gap
entry: nuclear-reaction-rates
status: OPEN
origin: Fowler and collaborators (1970s–80s) identified 12C(α,γ)16O as the key uncertain reaction of helium burning; mass-gap sensitivity worked out by Farmer et al. (2019–2020)
ratings:
  difficulty: 51
  applicationValue: 7.2
  leverage: 41
workMix:
  theory: 20
  engineering: 25
  compute: 10
  empirical: 45
verification:
  route: OBSERVATION
sources:
  - title: "deBoer et al.: The 12C(α,γ)16O reaction and its implications for stellar helium burning (Rev. Mod. Phys. 89, 035007)"
    url: https://arxiv.org/abs/1709.03144
  - title: "Shen et al.: New determination of the 12C(α,γ)16O reaction rate and its impact on the black-hole mass gap (ApJ 945, 41)"
    url: https://iopscience.iop.org/article/10.3847/1538-4357/acb7de
  - title: "Farmer et al.: Constraints from gravitational-wave detections of binary black hole mergers on the 12C(α,γ)16O rate"
    url: https://arxiv.org/abs/2006.06678
  - title: "Xin et al.: Constraints on the 12C(α,γ)16O and 16O+16O reaction rates from binary black holes detected via gravitational wave signals"
    url: https://arxiv.org/abs/2603.19883
  - title: "Sakstein, Croon: The location of the upper edge of the pair-instability supernovae black hole mass gap (preprint)"
    url: https://arxiv.org/abs/2606.31757
  - title: "Croon, Gerosa, Sakstein: Can GW231123 have a stellar origin?"
    url: https://arxiv.org/abs/2508.10088
timeline:
  - date: 2017-09-10
    title: R-matrix evaluation of the rate
    body: deBoer et al. review all data and give S(300) with about 15–20% uncertainty (arXiv month; day approximate).
    source: https://arxiv.org/abs/1709.03144
  - date: 2020-06-11
    title: GW constraints on the rate forecast
    body: Farmer et al. show the lower edge of the mass gap constrains S(300) and forecast ±10–30 keV·b with O(50) events (arXiv month; day approximate).
    source: https://arxiv.org/abs/2006.06678
  - date: 2023-03-01
    title: New E2 ground-state component
    body: Shen et al. raise S_E2(300) to 70 ± 7 keV·b, lowering the gap edges (publication month; day set to the first).
    source: https://iopscience.iop.org/article/10.3847/1538-4357/acb7de
  - date: 2026-06-30
    title: Rate is the dominant nuclear uncertainty of the upper edge (preprint)
    body: "Sakstein and Croon: about 30 M☉ from 12C(α,γ)16O, versus about 25 from triple-α."
    source: https://arxiv.org/abs/2606.31757
explainer:
  oneLine: One hard-to-measure nuclear reaction in stars decides how heavy black holes can get before a gap in their masses begins.
  flow:
    - Carbon captures helium to make oxygen
    - Too rare to measure at star energies
    - Extrapolate from higher-energy data
    - Rate sets the pair-instability gap edge
    - Compare with merging black-hole masses
  glossary:
    - term: S-factor
      meaning: The slowly varying part of a fusion cross section, used to extrapolate to low energies.
      link: https://en.wikipedia.org/wiki/Gamow_factor
    - term: Gamow window
      meaning: The narrow range of energies where most of the stellar reactions occur.
      link: https://en.wikipedia.org/wiki/Gamow_factor
    - term: R-matrix
      meaning: A framework used to fit reaction data and extrapolate to energies that cannot be measured.
      link: https://en.wikipedia.org/wiki/R-matrix
    - term: helium burning
      meaning: The stage in which a star fuses helium into carbon and oxygen.
      link: https://en.wikipedia.org/wiki/Triple-alpha_process
    - term: pair-instability supernova
      meaning: The explosion of a very massive star that is destroyed completely, leaving no black hole.
      link: https://en.wikipedia.org/wiki/Pair-instability_supernova
    - term: black-hole mass gap
      meaning: A range of masses in which stars do not leave black holes.
      link: https://en.wikipedia.org/wiki/Pair-instability_supernova
    - term: keV
      meaning: A thousand electronvolts; a unit of energy.
      link: https://en.wikipedia.org/wiki/Electronvolt
    - term: asymptotic normalization coefficient
      meaning: A number describing the outer part of a nucleus's wave function, used to constrain capture reactions.
      link: https://en.wikipedia.org/wiki/R-matrix
    - term: GW231123
      meaning: A gravitational-wave event from the merger of two very massive, rapidly spinning black holes.
      link: https://en.wikipedia.org/wiki/Gravitational_wave
    - term: nuclear reaction rates
      meaning: How fast nuclear reactions occur under given conditions.
      link: /research/nuclear-reaction-rates
    - term: barn
      meaning: A unit of area for nuclear cross sections, 10⁻²⁴ cm²; S-factors are quoted in keV·barn.
      link: https://en.wikipedia.org/wiki/Barn_(unit)
    - term: subthreshold state
      meaning: An excited state of the product nucleus lying just below the reaction’s energy threshold, which still boosts the rate.
      link: https://en.wikipedia.org/wiki/R-matrix
  readFirst:
    - title: Triple-alpha process (Wikipedia)
      url: https://en.wikipedia.org/wiki/Triple-alpha_process
      why: The step before the reaction in question.
    - title: Pair-instability supernova (Wikipedia)
      url: https://en.wikipedia.org/wiki/Pair-instability_supernova
      why: Explains the gap in black-hole masses.
    - title: Stellar nucleosynthesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Stellar_nucleosynthesis
      why: The bigger picture of how stars make elements.
site:
  aiReviewed: true
---

The rate of $^{12}\mathrm{C}(\alpha,\gamma)^{16}\mathrm{O}$ at helium-burning temperatures (about $0.2\,\mathrm{GK}$; Gamow energy about $300\,\mathrm{keV}$) is parametrised by the astrophysical S-factor $S(300\,\mathrm{keV})$, which sets the carbon-to-oxygen ratio at core helium exhaustion and thus the late evolution of massive stars, including the pair-instability gap in black-hole masses. **Problem:** determine $S_{300}$ with a total (statistical plus extrapolation) uncertainty of at most $10\%$ (1σ), by a direct or indirect measurement in the Gamow window, and quantify its effect on the upper edge of the pair-instability black-hole mass gap, for comparison with gravitational-wave populations (including GW231123).

# State of the art

The cross-section at E ≈ 300 keV is far below what can be measured directly (direct data stop near E_cm ≈ 1 MeV), so S(300) is extrapolated with R-matrix fits; the reference evaluation (deBoer et al., RMP 89, 035007, 2017) gives a total S(300) near 140 keV·b with roughly 15–20% uncertainty. Shen et al. (ApJ 945, 41, 2023) re-determined the ground-state E2 component from a new ANC, S_E2(300) = 70 ± 7 keV·b instead of about 45, raising the total rate by up to 21% and lowering the gap edges by about 12% (lower) and 5% (upper). Underground facilities (LUNA-MV at Gran Sasso, JUNA at Jinping) are pushing direct measurements towards the Gamow window, but no published direct S(300) result had appeared by October 2026. On the gravitational-wave side, Farmer et al. (ApJL 902, L36, 2020) forecast that O(50) events could constrain S(300) to ±10–30 keV·b; Xin et al. (arXiv:2603.19883, RAA 2026) find that a ±3σ rate change moves the predicted gap from about 104–184 to 45–135 M☉ and infer S(300) ≈ 137.6–263.4 keV·b, and Sakstein and Croon (arXiv:2606.31757, June 2026, preprint) find that this rate is the largest nuclear uncertainty in the upper edge, about 30 M☉ (triple-α about 25, 16O+16O about 15). GW231123, with components near 137 and 101 M☉ and high spins (LVK, arXiv:2507.08219), is hard to explain with the rate alone; rotation and overshooting also move the gap (Croon, Gerosa and Sakstein, arXiv:2508.10088, MNRAS 2026). The nuclear uncertainty has not been reduced to 10%.

# Applications

The C/O ratio feeds nucleosynthesis yields (carbon and oxygen in the galaxy), supernova progenitor structure and white-dwarf cooling and composition; a precise rate allows a clean read-out of the pair-instability gap from GW population data and tests stellar-evolution physics.

# Resolution criteria

A measurement or evaluation of S(300 keV) with ≤10% total uncertainty from at least two independent methods (e.g. direct underground measurement plus indirect ANC/β-delayed alpha measurements), and a published propagation to the pair-instability gap edges giving ≤ 10 solar-mass uncertainty from the rate.

# Rating rationale

Difficulty 51: a half-century-old nuclear-astrophysics measurement whose Gamow-window cross-section cannot be reached directly, so a 10% result needs both new underground data and converged R-matrix extrapolation; harder than the primordial lithium rates (42), where the relevant energies are accessible, and level with core-collapse explosion energetics (50). Application value 7.2: nucleosynthesis and stellar-model inputs, no technology. Leverage 41: massive-star evolution, white-dwarf composition and the GW read-out of the pair-instability gap depend on it, above the GW spin-origin problem (38) that uses it.

# Work mix rationale

Needs new low-energy measurements and detectors, with R-matrix and stellar-model analysis.

# Verification

Needs new nuclear measurements: S(300 keV) to 10% total uncertainty or better from at least two independent methods (a direct underground measurement plus indirect ANC or beta-delayed alpha measurements), propagated to the pair-instability gap edges with at most 10 solar masses of uncertainty from the rate.

# Plain explanation

Inside a star, helium is burned into carbon, and then carbon can capture another helium nucleus to become oxygen. At the end of the star's helium-burning stage, how much carbon is left compared to oxygen depends on how fast that second step goes. That ratio acts like a thermostat setting for the star's later life: it shapes what the star does afterward, how it explodes, and what it leaves behind.

At a star's temperatures the reaction is so rare that, in the lab, its signal would be lost in the background. Instead, scientists measure it at higher energies and extrapolate, and the extrapolation leaves an uncertainty of 15 to 20%.

Why does this matter beyond nuclear physics? Very massive stars can blow themselves apart completely when they run out of fuel, leaving no black hole at all. So there should be a gap in the masses of black holes: stars above a certain size do not leave black holes, until you reach even heavier stars. The edges of that gap depend on this reaction.

Gravitational-wave detectors are now measuring black-hole masses, so in principle they can tell us about this reaction.

The task is to measure the reaction to within 10% and find out how the gap edge moves.

Where the analogy breaks: a thermostat is set from outside, but here the "setting" is given by a nuclear rate we can only infer.

# Student explanation

**The reaction.** ¹²C(α,γ)¹⁶O, the capture of a helium nucleus by carbon-12, at helium-burning temperatures (about 0.2 GK, i.e. 200 million kelvin) has a Gamow energy of about 300 keV. The rate is parametrised by the astrophysical S-factor S(300 keV). It sets the carbon-to-oxygen ratio at core helium exhaustion and so the late evolution of massive stars, including the pair-instability gap in black-hole masses.

**The problem.** Determine S(300) with a total (statistical plus extrapolation) uncertainty of at most 10% (1σ), by a direct or indirect measurement in the Gamow window, and quantify its effect on the upper edge of the pair-instability black-hole mass gap, for comparison with gravitational-wave populations (including GW231123).

**Why it is hard.** The cross-section at 300 keV is far below what can be measured directly: direct data stop near a centre-of-mass energy of 1 MeV. So S(300) is extrapolated with R-matrix fits, which have to describe the interference of several contributions (the E1 and E2 components and subthreshold states). The reference evaluation (deBoer et al., 2017) gives a total S(300) near 140 keV·b with roughly 15 to 20% uncertainty.

**Why it matters for black holes.** Stars with helium cores in a certain mass range reach temperatures where electron–positron pair production reduces pressure support; they collapse and explode (pair-instability supernova) leaving no remnant. This creates a gap in the mass spectrum of black holes formed from single stars. The C/O ratio sets the burning that follows, and so shifts the gap edges.

**State of the art.**

- Shen et al. (2023) redetermined the ground-state E2 component from a new asymptotic normalisation coefficient, S_E2(300) = 70 ± 7 keV·b instead of about 45, raising the total rate by up to 21% and lowering the gap edges by about 12% (lower) and 5% (upper).
- Underground facilities (LUNA-MV at Gran Sasso, JUNA at Jinping) are pushing direct measurements towards the Gamow window, but no published direct S(300) result had appeared by October 2026.
- Farmer et al. (2020) forecast that about 50 gravitational-wave events could constrain S(300) to ±10 to 30 keV·b.
- Recent analyses show that a ±3σ rate change moves the predicted gap from about 104 to 184 into 45 to 135 solar masses, and one preprint finds that this rate is the largest nuclear uncertainty in the upper edge.
- GW231123, with components near 137 and 101 solar masses and high spins, is hard to explain with the rate alone; rotation and overshooting also move the gap.

**Why it matters.** It links a laboratory nuclear measurement to gravitational-wave astronomy.
