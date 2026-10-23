---
type: problem
slug: csp-flexible-organic-molecules-polymorph-ranking
title: "Crystal structure prediction for flexible organic molecules: complete landscapes with sub-kJ/mol free-energy ranking"
entry: free-energy-enhanced-sampling
status: IN_PROGRESS
origin: CCDC blind tests of organic crystal structure prediction, 1999 onward
ratings:
  difficulty: 56
  applicationValue: 72
  leverage: 46.5
workMix:
  theory: 20
  engineering: 5
  compute: 70
  empirical: 5
verification:
  route: OBSERVATION
sources:
  - title: "The seventh blind test of crystal structure prediction: structure ranking methods, Acta Cryst. B (2024)"
    url: https://doi.org/10.1107/S2052520624008679
  - title: CCDC, Overcoming pharmaceutical and other materials issues before they exist (blind test announcement)
    url: https://www.ccdc.cam.ac.uk/discover/blog/overcoming-pharmaceutical-and-other-materials-issues-before-they-exist/
  - title: Kapil and Engel, A complete description of thermodynamic stabilities of molecular crystals, PNAS (2022)
    url: https://doi.org/10.1073/pnas.2111769119
  - title: Cruz-Cabeza, Feeder, Davey, Open questions in organic crystal polymorphism, Commun. Chem. (2020)
    url: https://doi.org/10.1038/s42004-020-00388-9
  - title: Shi et al., Efficient first-principles modeling of complex molecular crystals at sub-chemical accuracy (arXiv:2603.02180, preprint)
    url: https://arxiv.org/abs/2603.02180
links:
  - to: ccsd-t-vs-dmc-noncovalent-reference-100-atoms
    kind: BUILDS_ON
    note: Sub-kJ/mol lattice energies for organics rely on knowing whether CCSD(T)-level references are right for large polarisable molecules.
  - to: nucleation-rates-ab-initio-accuracy
    kind: BUILDS_ON
    note: Which polymorph actually forms depends on nucleation kinetics, not only stability.
  - to: xc-functional-free-of-delocalization-and-self-interaction-error
    kind: BUILDS_ON
    note: Workhorse DFT-D ranking errors (2–4 kJ/mol) partly come from delocalization error, which over-stabilises conjugated conformers; ROY is the documented case where it misorders polymorphs (Greenwell and Beran), so a delocalization-free functional would directly cut the ranking error.
  - to: mlip-long-range-electrostatics-charge-transfer
    kind: BUILDS_ON
    note: Finite-temperature, anharmonic free energies are computed by MD with machine-learned potentials, and lattice energies of polar, salt and multicomponent crystals are dominated by long-range electrostatics and induction beyond a local cutoff.
timeline:
  - date: 2020-10-01
    title: Open questions in polymorphism
    body: Cruz-Cabeza, Feeder and Davey set out what is unknown about organic polymorphism (date approximate).
    source: https://doi.org/10.1038/s42004-020-00388-9
  - date: 2022-03-01
    title: Finite-temperature stability
    body: Kapil and Engel show that anharmonic and quantum effects can reorder polymorph stabilities (date approximate).
    source: https://doi.org/10.1073/pnas.2111769119
  - date: 2024-10-01
    title: Seventh blind test published
    body: Generation and ranking results published in Acta Cryst. B (date approximate).
    source: https://doi.org/10.1107/S2052520624008679
  - date: 2026-03-02
    title: Sub-chemical-accuracy lattice energies (preprint)
    body: Shi et al. report correlated wavefunction-quality lattice energies for drug-like crystals.
    source: https://arxiv.org/abs/2603.02180
explainer:
  oneLine: Predicting every way a floppy drug molecule can pack into a crystal, and which is stable, from its drawing alone.
  flow:
    - Floppy molecule, many packings
    - Generate candidate crystals
    - Energies differ by few kJ/mol
    - Temperature changes ranking
    - Blind tests measure progress
  glossary:
    - term: polymorph
      meaning: One of several different crystal packings of the same molecule, with different properties.
      link: https://en.wikipedia.org/wiki/Polymorphism_(materials_science)
    - term: dispersion
      meaning: A weak, always-present attraction between molecules from momentary electron fluctuations, which holds layers of graphite together.
      link: https://en.wikipedia.org/wiki/London_dispersion_force
    - term: free energy
      meaning: The energy that counts at a given temperature, including disorder; it decides which state is stable and how fast things happen.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: machine-learned potential
      meaning: A neural network trained on quantum calculations to give energies and forces much faster than the original calculation.
      link: /research/machine-learned-interatomic-potentials
    - term: density functional theory
      meaning: A method that gets a molecule's energy from the electron density instead of the full wavefunction, trading exactness for speed.
      link: /research/density-functional-theory
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
    - term: kcal/mol
      meaning: A unit of energy per mole of molecules; 1 kcal/mol changes a reaction rate by about a factor of five at room temperature.
      link: https://en.wikipedia.org/wiki/Calorie
  readFirst:
    - title: Open questions in organic crystal polymorphism (Commun. Chem.)
      url: https://doi.org/10.1038/s42004-020-00388-9
      why: Open-access overview of what is unknown.
    - title: Polymorphism (materials science) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Polymorphism_(materials_science)
      why: Background on polymorphs.
    - title: CCDC blog on the seventh blind test
      url: https://www.ccdc.cam.ac.uk/discover/blog/overcoming-pharmaceutical-and-other-materials-issues-before-they-exist/
      why: Plain summary of the test and its findings.
raw:
  body: "Given only a 2D molecular diagram, predict the experimentally observable crystal forms of a flexible, drug-like organic molecule (at least 6 rotatable bonds, possibly multiple components, salts or Z$'>1$ forms) by (i) generating a search space that contains every experimentally known polymorph, (ii) ranking structures by *free energy at the relevant temperature* (including lattice vibrations, anharmonicity and conformational entropy) with an accuracy of about 1 kJ/mol on relative stabilities (the typical energy gap between polymorphs), and (iii) predicting kinetic accessibility and disorder, with the blind success criterion that the observed form(s) are within the top few ranked structures and unobserved low-energy structures are rationalised.\n\nThe crux is the ranking accuracy: polymorph energy differences are often below 2 kJ/mol while workhorse dispersion-corrected DFT has errors of 2–4 kJ/mol and flexible molecules multiply the number of competitive conformers."
site:
  aiReviewed: true
---

# State of the art

- **Blind tests.** The seventh CCDC blind test (Acta Cryst. B, 2024; two papers on structure generation and structure ranking; 22 groups for ranking) found that many methods reproduced the structure of a small flexible agrochemical, few succeeded on the more complex targets (copper complex, cocrystal, flexible drug candidate, salt), periodic DFT-D methods broadly matched experiment within expected error, an AIMNet-based machine-learned approach matched in many cases, and two groups predicted disorder blindly for the first time. The released database holds 171,679 structures from 207 landscapes.
- **Free energies.** Kapil and Engel (PNAS 2022) show that finite-temperature and anharmonic effects can reverse polymorph stability orders computed from static lattice energies. Cruz-Cabeza, Feeder and Davey (Commun. Chem. 2020) catalogue open questions about polymorph occurrence.
- **Beyond DFT energies (preprint).** Shi, Herman, Della Pia, Kapil, Zen and Nagy (arXiv:2603.02180, March 2026, preprint) report a correlated wavefunction plus many-body-expansion workflow with lattice energies within experimental uncertainty for 23 organic molecules and 13 ice polymorphs, and sub-chemical accuracy for relative energies of drug-like polymorphs including axitinib and ROY at cost close to hybrid DFT; this has not been through blind testing.
- **Open.** A blind, prospective demonstration across flexible drug-like molecules with free-energy ranking and disorder, and agreement between independent workflows, is still missing; the search space for large, flexible molecules is still incompletely sampled.

# Applications

Late-appearing polymorphs have caused pharmaceutical withdrawals (ritonavir) and cost the industry heavily in patents and bioavailability; computational polymorph screening would reduce experimental screening and enable the design of organic semiconductors, explosives and agrochemicals with the desired packing.

# Resolution criteria

A blind-test result (CCDC or equivalent) in which at least one method predicts all experimentally observed forms within the top 5 ranked structures, including free-energy ordering, for at least five drug-like targets with 6+ rotatable bonds, with independent reproduction on a following round.

# Rating rationale

Difficulty 56: generation and ranking each have visible paths and recent progress, but sub-kJ/mol free-energy ranking of flexible molecules is not demonstrated blind. Application value 72: polymorph risk is a major pharmaceutical cost, comparable to the best-valued items in the hardware packs. Leverage 46.5: it reshapes how solid-state free energies and ML potentials are validated.

# Work mix rationale

Compute-heavy generation and ranking; the new part is accurate, affordable energy models and sampling.

# Verification

Settled by a blind test (CCDC or equivalent) against newly determined experimental crystal forms: at least one method must place all observed forms in its top 5, with correct free-energy ordering, for at least five drug-like targets with six or more rotatable bonds, and reproduce this in a following round.

# Plain explanation

Many medicines are sold as crystals, and the same molecule can pack in several different ways, called polymorphs. The ways differ in how fast they dissolve and how stable they are. Famous cases exist where a new, more stable form appeared after a drug was on the market and made the old form unmakeable, forcing a recall.

Crystal structure prediction tries to work out all plausible packings by computer, using only the molecule's drawing. Two things are hard. First, floppy molecules can twist into many shapes, so the list of candidate packings is enormous. Second, the energy differences between competing forms are often smaller than the typical error of the calculations, a few kilojoules per mole or less, and temperature changes the ranking.

Regular blind tests run by the Cambridge Crystallographic Data Centre show progress: small molecules are often predicted right, hard cases are rarely solved. In the 2024 report, machine-learned potentials did well in places and some groups predicted disorder for the first time.

The open task is to do this reliably for flexible drug-like molecules, including temperature effects.

# Student explanation

**Task.** From a 2D molecular diagram, predict the observable crystal forms of a flexible molecule. This involves (1) generating candidate structures (random or evolutionary searches over cell parameters, orientations and conformers), (2) ranking them by free energy, and (3) judging kinetics and disorder.

**Why ranking is the bottleneck.** Polymorph energy differences are commonly under 2 kJ/mol. Dispersion-corrected DFT has errors of 2-4 kJ/mol. Static lattice energies omit zero-point energy, lattice vibrations and anharmonic and entropic effects, which can reorder the stability (Kapil and Engel, 2022). Flexible molecules add many conformers and, in some crystals, multiple molecules per asymmetric unit.

**Blind tests.** In the seventh CCDC blind test (published 2024), 22 groups took part in the ranking part. Many methods found the form of a small agrochemical, few succeeded for the harder targets (a copper complex, a cocrystal, a flexible drug candidate, a salt). Periodic DFT-D methods did broadly as expected; an ML-potential method matched in many cases; two groups predicted disorder blindly for the first time.

**New approaches.** A 2026 preprint (Shi et al.) combines correlated wavefunction methods with a many-body expansion to get lattice energies within experimental uncertainty for 23 molecules and sub-chemical accuracy for hard drug polymorphs, at cost near hybrid DFT. It has not been tested blind.

**What would count as solved.** Blind rankings with the observed forms in the top few for several flexible drug-like targets, including finite-temperature free energies.

**Things to check yourself.** Why can temperature reorder polymorphs? Which errors cancel in comparing two polymorphs of the same molecule?
