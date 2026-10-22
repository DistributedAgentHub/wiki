---
type: problem
slug: cosmological-constant-problem
title: "Technical naturalness of the renormalised vacuum energy: stability of Λ under radiative corrections"
entry: lambda-cdm
status: OPEN
origin: Zel'dovich (1967); sharpened by Weinberg's 1989 review and the 1998 discovery of acceleration.
ratings:
  difficulty: 90
  applicationValue: 7
  leverage: 56
workMix:
  theory: 95
  engineering: 0
  compute: 3
  empirical: 2
verification:
  route: REVIEW
sources:
  - title: Weinberg, The cosmological constant problem, Rev. Mod. Phys. 61, 1 (1989)
    url: https://doi.org/10.1103/RevModPhys.61.1
  - title: Martin, Everything You Always Wanted To Know About The Cosmological Constant Problem (2012)
    url: https://arxiv.org/abs/1205.3365
  - title: "Burgess, The Cosmological Constant Problem: Why it's hard to get Dark Energy from Micro-physics (2013)"
    url: https://arxiv.org/abs/1309.4133
links:
  - to: dynamical-dark-energy-desi-dr2
    kind: BUILDS_ON
    note: Proposed mechanisms must reproduce the measured equation of state; a confirmed thawing w(z) ≠ −1 would favour relaxation/quintessence-type mechanisms and rule out ones that predict an exact constant, while a systematic would leave w = −1 as the constraint.
timeline:
  - date: 1989-01-01
    title: Weinberg's review and no-go theorem
    body: Surveys adjustment mechanisms and shows that Lorentz-invariant ones fail.
    source: https://doi.org/10.1103/RevModPhys.61.1
  - date: 2012-05-14
    title: Martin's sharp formulation
    body: The problem is stated as order-by-order tuning of the renormalised vacuum energy.
    source: https://arxiv.org/abs/1205.3365
  - date: 2013-09-17
    title: Burgess lectures
    body: Review of why later proposals fail or relocate the tuning.
    source: https://arxiv.org/abs/1309.4133
explainer:
  oneLine: Why is the energy of empty space so small, and why does it stay small under quantum corrections?
  flow:
    - Quantum fields give empty space energy
    - Gravity feels that energy as dark energy
    - Predicted size far above what we observe
    - Cancellations needed at every order
    - No accepted mechanism explains this
  glossary:
    - term: vacuum energy
      meaning: The energy that remains in empty space according to quantum field theory.
      link: https://en.wikipedia.org/wiki/Vacuum_energy
    - term: cosmological constant
      meaning: A constant energy density of space that drives accelerating expansion.
      link: https://en.wikipedia.org/wiki/Cosmological_constant
    - term: quantum field theory
      meaning: The framework describing particles as ripples in underlying fields, combining quantum mechanics and relativity.
      link: https://en.wikipedia.org/wiki/Quantum_field_theory
    - term: zero-point energy
      meaning: The lowest possible energy of a quantum system, which is never exactly zero.
      link: https://en.wikipedia.org/wiki/Zero-point_energy
    - term: renormalization
      meaning: The procedure for handling infinities in quantum field theory by adjusting parameters to match measurements.
      link: https://en.wikipedia.org/wiki/Renormalization
    - term: fine-tuning
      meaning: The need for parameters to be set to extremely precise values to match observation.
      link: https://en.wikipedia.org/wiki/Fine-tuning_(physics)
    - term: Planck units
      meaning: A natural system of units built from fundamental constants, in which gravity's scale is set to one.
      link: https://en.wikipedia.org/wiki/Planck_units
    - term: no-go theorem
      meaning: A proof that a certain kind of solution cannot work.
      link: https://en.wikipedia.org/wiki/No-go_theorem
    - term: anthropic principle
      meaning: The idea that observed values of constants are limited by the need for observers to exist.
      link: https://en.wikipedia.org/wiki/Anthropic_principle
    - term: supersymmetry
      meaning: A proposed symmetry linking matter and force particles, which would cancel some vacuum-energy contributions.
      link: https://en.wikipedia.org/wiki/Supersymmetry
    - term: loop order
      meaning: The level of detail in a quantum calculation; each higher order adds more complicated virtual-particle effects.
      link: https://en.wikipedia.org/wiki/One-loop_Feynman_diagram
    - term: electroweak phase transition
      meaning: The moment in the early universe when the Higgs field switched on, giving particles mass and shifting the vacuum energy.
      link: https://en.wikipedia.org/wiki/Electroweak_epoch
  readFirst:
    - title: Cosmological constant problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cosmological_constant_problem
      why: Straightforward statement of the puzzle and the proposals.
    - title: Vacuum catastrophe / vacuum energy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Vacuum_energy
      why: Where the naive estimate comes from.
    - title: "Burgess: The cosmological constant problem, lecture notes"
      url: https://arxiv.org/abs/1309.4133
      why: Free, careful lectures that explain why solutions are hard.
site:
  aiReviewed: true
---

Quantum field theory coupled to gravity predicts that the effective cosmological constant receives corrections from every massive field at every loop order. The observed dark-energy density is about 10⁻¹²³ in Planck units, and the problem is to find a mechanism (or a calculable framework) in which the renormalised vacuum energy is small and stays small order by order in perturbation theory after electroweak, QCD and any new-physics thresholds are integrated out. This is the sharp form identified by Martin: not the naive zero-point sum but the fine-tuning of the bare constant against radiative corrections at each order. An acceptable solution must evade Weinberg's no-go theorem on Lorentz-invariant adjustment mechanisms and be compatible with the observed w ≈ −1 (and with any evolution suggested by DESI).

# State of the art

A Planck-scale cutoff gives a mismatch of about 10¹²⁰ (the power depends on the cutoff convention); the electroweak phase transition alone contributes roughly 10⁵⁵ times too much. Weinberg's 1989 review gives a no-go analysis of adjustment mechanisms and surveys five classes of proposals; Burgess's lectures (arXiv:1309.4133) explain why most later proposals fail or move the tuning elsewhere. Martin's review (arXiv:1205.3365) clarifies the order-by-order tuning formulation. The anthropic (landscape) argument predicted a small nonzero Λ of roughly the observed order (Weinberg 1987) but is not a mechanism and remains contested. Supersymmetry cancels contributions only where unbroken. DESI DR2's hint of evolving dark energy (2025, unresolved) would not by itself address the size of Λ. No proposed solution is accepted.

# Applications

There is no near-term practical application. Progress would reshape the interface of quantum field theory and gravity and the interpretation of dark-energy measurements.

# Resolution criteria

Resolved by a framework that predicts or explains the observed vacuum energy without order-by-order tuning, makes testable predictions, and is accepted by experts as satisfying Weinberg's no-go constraints (for example through a controlled quantum-gravity calculation).

# Rating rationale

Kept at the calibrated 90/7/56: the defining open problem of the field, probably needing quantum gravity, and the only non-mathematical problem in the 90s. Leverage 56 stays below dark matter (70) because few concrete results are stated conditionally on a solution. No practical application.

# Work mix rationale

The barrier is conceptual. A new framework is needed; data can only exclude evolution of Λ.

# Verification

No measurement can settle it; a proposed framework must predict or explain the observed vacuum energy without order-by-order tuning, make testable predictions, and satisfy Weinberg's no-go constraints. Experts judge the argument, for example a controlled quantum-gravity calculation, and no Lean statement exists for it.

# Plain explanation

Quantum physics says that empty space is not really empty. It is full of fields that jiggle all the time, and that jiggling carries energy. Gravity feels all energy, so this energy of empty space should push the universe to expand faster.

Astronomers have measured how fast the universe is speeding up, and the energy of empty space needed to explain it is tiny. When physicists try to add up what quantum theory suggests it should be, the guess is too large by a huge factor, about one followed by 120 zeros in the most naive estimate.

The sharper form of the puzzle is not about the naive sum, because that sum depends on choices that physicists argue about. The sharp form is this: each kind of particle seems to add its own contribution to the energy of empty space, at every level of calculation. To end up with the tiny measured value, those contributions would have to cancel against a starting value to an extremely precise degree, and cancel again and again at each order. It is like balancing a pencil on its tip, and having it stay balanced while someone keeps nudging the table. Nothing in known physics explains why.

Any solution must avoid some famous no-go arguments, and so far none has convinced the community.

Where the analogy breaks: balancing a pencil on its tip is a fine picture of fine-tuning, but nature balanced it without being told how.

# Student explanation

**The puzzle.** In quantum field theory (QFT), every field has zero-point energy, and every massive particle contributes to the vacuum energy at every loop order in perturbation theory. Combined with gravity, the effective cosmological constant is the sum of a bare term and these corrections. The observed dark-energy density is about 10⁻¹²³ in Planck units.

**Naive and sharp versions.** If you cut off the zero-point sum at the Planck scale, you get a prediction too large by about 10¹²⁰; the exact power depends on the cutoff convention, so this number should not be taken too literally. A cleaner statement, emphasised by Martin, is _technical naturalness_: after integrating out the electroweak, QCD and any new-physics thresholds, the bare constant has to be adjusted against radiative corrections order by order. The electroweak phase transition alone contributes something like 10⁵⁵ times the observed value.

**What a solution must do.** Find a mechanism, or a calculable framework, where the renormalised vacuum energy is small and _stays_ small under quantum corrections. It must evade Weinberg's no-go theorem (1989), which shows that adjustment mechanisms based on Lorentz-invariant fields face a basic obstruction: the field has to adjust to cancel the constant, but the cancellation needs the field to be fine-tuned.

**Past attempts.** Weinberg's review surveys five classes of proposals. Burgess's lectures explain why most later proposals fail or move the fine-tuning elsewhere. Candidates include supersymmetry (which cancels contributions only while it is unbroken, and it must be broken at the energies we can observe), anthropic reasoning with a string-theory landscape (which Weinberg used in 1987 to predict a small nonzero value, but which is not a mechanism and remains contested), sequestering, and modified gravity. None is accepted.

**Why it matters.** The problem sits at the border between QFT and general relativity. If dark energy turns out to vary with time (see the DESI entry), that could change which kinds of solution are viable.

**What this is not.** It is not a prediction of the _value_ of dark energy. The goal is a mechanism that explains why the value is small, or a reason the usual calculation does not apply.
