---
type: problem
slug: xc-functional-free-of-delocalization-and-self-interaction-error
title: A transferable exchange–correlation functional free of delocalization and self-interaction error
entry: density-functional-theory
status: OPEN
origin: Perdew, Parr, Levy and Balduz, 1982 (piecewise-linear E(N)); Cohen, Mori-Sánchez and Yang, 2008
ratings:
  difficulty: 72
  applicationValue: 78
  leverage: 78
workMix:
  theory: 55
  engineering: 5
  compute: 25
  empirical: 15
verification:
  route: REPRODUCTION
sources:
  - title: Cohen, Mori-Sánchez, Yang, Insights into current limitations of density functional theory, Science 321, 792 (2008)
    url: https://doi.org/10.1126/science.1158722
  - title: Medvedev et al., Density functional theory is straying from the path toward the exact functional, Science 355, 49 (2017)
    url: https://doi.org/10.1126/science.aah5975
  - title: Kirkpatrick et al., Pushing the frontiers of density functionals by solving the fractional electron problem, Science (2021)
    url: https://doi.org/10.1126/science.abj6511
  - title: Microsoft Research, Accurate and scalable exchange-correlation with deep learning (Skala), arXiv:2506.14665 (preprint)
    url: https://arxiv.org/abs/2506.14665
  - title: Goerigk et al., A look at the density functional theory zoo with the advanced GMTKN55 database (2017)
    url: https://doi.org/10.1039/C7CP04913G
  - title: Schuch and Verstraete, Computational complexity of interacting electrons and fundamental limitations of DFT (2009)
    url: https://doi.org/10.1038/nphys1370
links:
  - to: ccsd-t-vs-dmc-noncovalent-reference-100-atoms
    kind: BUILDS_ON
    note: Training and testing a functional needs reference energies whose own errors are known.
timeline:
  - date: 2008-07-25
    title: Delocalization and static-correlation errors named
    body: Cohen, Mori-Sánchez and Yang tie the main failures of approximate DFT to the fractional-charge and fractional-spin energy curves.
    source: https://doi.org/10.1126/science.1158722
  - date: 2009-10-11
    title: Exact functional is QMA-hard
    body: Schuch and Verstraete prove computing the universal functional is QMA-hard (date approximate).
    source: https://doi.org/10.1038/nphys1370
  - date: 2017-01-06
    title: Functionals drifting from the exact density
    body: Medvedev et al. show that many recent functionals improve energies while worsening densities.
    source: https://doi.org/10.1126/science.aah5975
  - date: 2021-12-10
    title: DM21
    body: A neural functional trained with fractional-charge and fractional-spin constraints.
    source: https://doi.org/10.1126/science.abj6511
  - date: 2025-06-17
    title: Skala preprint
    body: Deep-learned semi-local-cost functional reporting chemical accuracy on main-group atomization energies (preprint).
    source: https://arxiv.org/abs/2506.14665
explainer:
  oneLine: Nobody has a single, fast energy recipe for electrons that is free of the known systematic mistakes of density functional theory.
  flow:
    - Exact energy recipe unknown
    - Approximations smear charge, mis-handle ties
    - Exact rules can guide the design
    - Learned recipes show promise
    - Need metals, solids and independent tests
  glossary:
    - term: density functional theory
      meaning: A method that gets a molecule's energy from the electron density instead of the full wavefunction, trading exactness for speed.
      link: /research/density-functional-theory
    - term: exchange–correlation functional
      meaning: The unknown formula inside density functional theory that accounts for all the subtle electron-electron effects; every practical version is an approximation.
      link: /research/density-functional-theory
    - term: delocalization error
      meaning: A flaw in approximate functionals that smears electric charge out too much, spoiling barriers, band gaps and charge transfer.
      link: /research/density-functional-theory
    - term: self-interaction error
      meaning: A flaw where an approximate method lets an electron partly repel itself.
      link: /research/density-functional-theory
    - term: hybrid functional
      meaning: A density functional that mixes in a fraction of the exact exchange energy from Hartree–Fock theory; more accurate and more expensive.
      link: https://en.wikipedia.org/wiki/Density_functional_theory
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
    - term: neural network
      meaning: A flexible function with many adjustable numbers, fitted to data by training.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
  readFirst:
    - title: Insights into current limitations of density functional theory (Science 2008)
      url: https://doi.org/10.1126/science.1158722
      why: Clear account of why approximate functionals fail.
    - title: Density functional theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Density_functional_theory
      why: Background on the method.
    - title: Accurate and scalable exchange-correlation with deep learning (preprint)
      url: https://arxiv.org/abs/2506.14665
      why: The recent learned-functional claim, read with its scope in mind.
site:
  aiReviewed: true
---

Find an explicit, computable functional $E_{xc}[n]$ (or $E_{xc}[\{\phi_i\}]$ in a generalized Kohn–Sham scheme) that simultaneously satisfies three requirements.

1. **Exact conditions.** The total energy is piecewise linear in fractional electron number between integers, $E(N_0+\omega)=(1-\omega)E(N_0)+\omega E(N_0+1)$ (no delocalization error), it is free of one-electron self-interaction, and it has the correct fractional-spin behaviour, so that $E$ is constant in the spin polarisation of a stretched $\mathrm{H_2}$ (no static-correlation error).
2. **Accuracy.** A weighted mean absolute deviation on the full GMTKN55 database (WTMAD-2) at or below the level of the best double hybrids (about 2 kcal/mol), together with errors under 1 kcal/mol on main-group atomization energies and reaction barriers, and under 3 kcal/mol on 3d transition-metal reaction energies and spin-state splittings, without a system-specific parameter.
3. **Cost and scope.** Self-consistent evaluation at the cost of a hybrid or cheaper ($O(N^3)$–$O(N^4)$), applicable to molecules, surfaces and periodic solids (including band gaps within about 0.2 eV of experiment for semiconductors and insulators).

The problem is not "find the exact functional", which is believed intractable (the universal functional is QMA-hard, Schuch and Verstraete 2009), but to find an approximation that removes the known qualitative failures at once and is validated out of distribution.

# State of the art

- **Hand-designed functionals.** On the GMTKN55 benchmark the WTMAD-2 error falls steadily up the rungs: the best range-separated hybrids and meta-GGAs (for example $\omega$B97M-V) sit a few kcal/mol above the best double hybrids, which are the most accurate general-purpose functionals tested (Goerigk et al. 2017; Mardirossian and Head-Gordon 2017; exact WTMAD-2 values should be read from the primary tables, which are periodically extended). None removes delocalization error without system-dependent tuning: optimally tuned range-separated hybrids and Koopmans-compliant or localized orbital scaling corrections fix the fractional-charge curve for a given system, not universally (Cohen, Mori-Sánchez and Yang 2008; Medvedev et al. 2017 argue that recent functionals fit energies while drifting from the exact density).
- **Learned functionals.** DM21 (DeepMind, Science 2021) trained a neural local-hybrid functional on molecular data plus fractional-charge and fractional-spin constraints and reduced delocalization error on small systems, but is not size-consistent in all tests and was not built for periodic systems or transition metals.
- **Skala (preprint).** Microsoft Research (arXiv:2506.14665, June 2025, preprint; later versions revised) reports a deep-learned functional with semi-local cost that reaches chemical accuracy (about 1 kcal/mol) on atomization energies of small main-group molecules, trained on a large new set of wavefunction reference data, and that is competitive with hybrids on general main-group chemistry after extra data. The reported domain is main-group, closed-shell thermochemistry; performance on transition-metal chemistry, strong correlation, fractional-charge curves, charged and periodic systems has not been established in independent benchmarks that this entry has seen.
- **Exact-condition status.** No published functional is known to satisfy piecewise linearity, many-electron self-interaction freedom and the fractional-spin condition simultaneously while remaining accurate on GMTKN55.

# Applications

DFT is the workhorse for catalysis screening, battery and semiconductor materials, drug-target modelling and the labels used to train machine-learned potentials. A functional without delocalization error would improve barrier heights, charge-transfer and polaron energetics, band alignments and redox potentials, and would reduce the systematic errors that machine-learned potentials inherit from their DFT labels.

# Resolution criteria

A published functional (with code in at least two independent electronic-structure packages) whose exact-condition tests (fractional-charge and fractional-spin curves for a stated test set of at least 20 atoms and molecules) are satisfied to within 1 kcal/mol, and which meets the accuracy targets above on GMTKN55, a transition-metal benchmark such as MOR41 or SSE17, and a periodic benchmark set, as reproduced by independent groups on data not used in training or tuning.

# Rating rationale

Difficulty 72: the exact functional is QMA-hard and decades of attempts have not removed delocalization error without tuning, though learned functionals (DM21, the Skala preprint) show a path for restricted domains; this sits above the 50 to 60 band of engineering-limited problems such as the Matbench-style MLIP gaps and well below the defining problems of mathematics. Application value 78: DFT labels underpin catalysis, battery and semiconductor screening and most ML-potential training sets, comparable to the surface-code problem (70) but broader. Leverage 78: every DFT-derived dataset and downstream model inherits its errors.

# Work mix rationale

Mostly new functional forms and exact-condition theory, with large reference datasets and training compute for learned functionals.

# Verification

A published functional with code in at least two independent electronic-structure packages must satisfy fractional-charge and fractional-spin exact-condition tests to 1 kcal/mol on a stated test set of at least 20 atoms and molecules, and meet the accuracy targets on GMTKN55 and the transition-metal benchmarks in the pack. Anyone can rerun the benchmarks with the released code and basis sets.

# Plain explanation

Density functional theory is used everywhere in chemistry because it is fast. It relies on a recipe for the part of the energy caused by electrons dodging one another. The exact recipe is unknown, so we use approximations, and every one of them has known blind spots.

Two of the blind spots are well understood. In one, an electron partially repels itself, which is nonsense. In another, electric charge gets smeared over too many atoms, so energies of reactions where charge moves, and the heights of reaction hills, come out wrong. A third problem appears when electrons have near-tie arrangements, like in many metal atoms.

The open question is whether one approximation can be found that obeys the exact rules that theory tells us the true answer must follow, is accurate on a broad collection of tests, and is still cheap. Machine learning is now being used to design such recipes, and a 2025 preprint reports chemical accuracy for small molecules. But for metals, charged systems and solids this is untested.

Nobody knows if this is possible in full: a theorem says that finding the exact recipe is hard even for a quantum computer.

# Student explanation

**What is asked.** An exchange–correlation functional $E_{xc}[n]$ that (1) obeys exact constraints, (2) reaches near-chemical accuracy across broad benchmarks and (3) costs no more than a hybrid functional.

**The exact conditions.** The energy of a system with a fractional electron number $N_0+\omega$ should be linear between integers: $E(N_0+\omega)=(1-\omega)E(N_0)+\omega E(N_0+1)$. Approximate functionals bend below the line, which is delocalization error, and it makes charge spread out too much. Fractional-spin conditions fix the dissociation of $\mathrm H_2$-like bonds. And a one-electron system should have no electron-electron repulsion at all (no self-interaction).

**Where we stand.** Hybrids and meta-GGAs get a weighted error of about 3-4 kcal/mol on the GMTKN55 collection, and double hybrids about 2. DM21 added fractional-charge data to its training. In June 2025 Microsoft posted Skala, a neural functional reporting chemical accuracy for small main-group molecules at semi-local cost; as a preprint, its performance for metals, charged systems and solids is not yet independently established.

**Why it is hard.** The exact functional cannot be computed efficiently even in principle (QMA-hard), constraints conflict in simple forms, and learned functionals only know the chemistry in their training data.

**Why it matters.** DFT labels train machine-learned potentials and drive materials and catalyst screening.

**Practical notes.** Standard test sets are GMTKN55 (about 1500 reaction and interaction energies), W4-17 for atomization energies, and MOR41 for organometallic reactions. A new functional should also be tested on densities and on fractional-charge curves, not only on energies, because a functional can fit energies for the wrong reasons.

**Things to check yourself.** Why is piecewise linearity related to band gaps? How would you test whether a neural functional extrapolates?
