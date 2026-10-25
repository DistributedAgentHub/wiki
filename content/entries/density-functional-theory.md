---
type: entry
slug: density-functional-theory
title: Density functional theory and exchange–correlation functionals
field: computational-chemistry
kind: THEORY
status: MATURE
summary: Reformulates the many-electron problem in terms of the electron density; exact in principle, but accuracy hinges on one unknown functional that all practical calculations approximate.
reliedOn: DFT supplies the energies, forces and training labels behind most molecular and materials simulation, including most machine-learned potentials.
dependsOn:
  - born-oppenheimer-pes
references:
  - title: P. Hohenberg and W. Kohn, Inhomogeneous electron gas (1964)
    url: https://doi.org/10.1103/PhysRev.136.B864
    kind: paper
  - title: W. Kohn and L. J. Sham, Self-consistent equations including exchange and correlation effects (1965)
    url: https://doi.org/10.1103/PhysRev.140.A1133
    kind: paper
  - title: A. J. Cohen, P. Mori-Sánchez, W. Yang, Insights into current limitations of density functional theory, Science 321, 792 (2008)
    url: https://doi.org/10.1126/science.1158722
    kind: paper
  - title: N. Mardirossian and M. Head-Gordon, Thirty years of density functional theory in computational chemistry (2017)
    url: https://doi.org/10.1080/00268976.2017.1333644
    kind: paper
  - title: N. Schuch and F. Verstraete, Computational complexity of interacting electrons and fundamental limitations of density functional theory (2009)
    url: https://doi.org/10.1038/nphys1370
    kind: paper
timeline:
  - date: 1964-11-09
    title: Hohenberg–Kohn theorems
    body: The density is shown to determine the ground state.
    source: https://doi.org/10.1103/PhysRev.136.B864
  - date: 1965-11-15
    title: Kohn–Sham equations
    body: A practical orbital-based scheme with a single unknown functional.
    source: https://doi.org/10.1103/PhysRev.140.A1133
  - date: 1993-04-01
    title: Hybrid functionals
    body: Becke shows that mixing exact exchange greatly improves thermochemistry; B3LYP follows.
    source: https://doi.org/10.1063/1.464913
  - date: 2021-12-10
    title: DM21 learned functional
    body: DeepMind trains a neural functional on fractional-charge and fractional-spin data to reduce delocalization and static-correlation error.
    source: https://doi.org/10.1126/science.abj6511
  - date: 2025-06-17
    title: Skala preprint
    body: Microsoft Research posts a deep-learned functional of semi-local cost reporting chemical accuracy on main-group atomization energies (preprint).
    source: https://arxiv.org/abs/2506.14665
explainer:
  oneLine: Gets a molecule's energy from where its electrons are, not from the full quantum state, which is far cheaper.
  flow:
    - Density fixes the energy in principle
    - Exact formula for the energy is unknown
    - Approximate the exchange–correlation piece
    - Fast, usually good answers
    - "Known failures: charge smearing, strong correlation"
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
    - term: dispersion
      meaning: A weak, always-present attraction between molecules from momentary electron fluctuations, which holds layers of graphite together.
      link: https://en.wikipedia.org/wiki/London_dispersion_force
    - term: strong correlation
      meaning: A situation where many electron arrangements matter at once, so simple one-configuration pictures fail.
      link: /research/strongly-correlated-multireference-methods
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
  readFirst:
    - title: Density functional theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Density_functional_theory
      why: Overview of the method and its approximations.
    - title: Thirty years of density functional theory in computational chemistry (Mardirossian and Head-Gordon)
      url: https://doi.org/10.1080/00268976.2017.1333644
      why: A readable review of the functional zoo and benchmarks.
    - title: Insights into current limitations of density functional theory (Science 2008)
      url: https://doi.org/10.1126/science.1158722
      why: The classic explanation of delocalization and static-correlation errors.
raw:
  body: "## What it is\n\nHohenberg and Kohn (1964) proved that the ground-state density $n(\\mathbf r)$ determines all ground-state properties, so there exists an energy functional $E[n]$ minimised by the true density. Kohn and Sham (1965) made this practical by introducing a fictitious non-interacting system with the same density:\n$$E[n]=T_s[n]+\\int v_{ext}n\\,d\\mathbf r+E_H[n]+E_{xc}[n],$$\nwhere $T_s$ is the non-interacting kinetic energy, $E_H$ the classical Coulomb (Hartree) energy and $E_{xc}[n]$ the **exchange–correlation functional**, which collects everything else. Solving the Kohn–Sham equations costs $O(N^3)$ with plane waves or Gaussians, and less with linear-scaling tricks.\n\n## The functional zoo\n\n$E_{xc}$ is unknown and approximated. \"Jacob's ladder\" orders approximations by the ingredients used: local density (LDA), gradient (GGA), kinetic-energy density (meta-GGA), a fraction of exact Hartree–Fock exchange (hybrids, e.g. B3LYP, $\\omega$B97M-V), and virtual orbitals (double hybrids, RPA). Dispersion is added by pairwise (D3/D4), many-body (MBD) or non-local (VV10) corrections. Machine-learned functionals (DM21, Skala) replace the hand-built form with a neural network.\n\n## Known systematic failures\n\n- **Delocalization error**: approximate functionals produce an energy that is convex rather than piecewise-linear in fractional electron number, so charge spreads too much (underestimated barriers, band gaps, charge-transfer excitations).\n- **Static correlation error**: wrong energies for stretched bonds and near-degenerate d/f shells, where fractional-spin behaviour is wrong.\n- **Self-interaction error**: an electron partly repels itself.\n- **Dispersion** and **strong correlation** in transition-metal systems.\n\nSchuch and Verstraete (2009) showed that computing the exact universal functional is QMA-hard, so approximations are unavoidable in the worst case.\n\n## Why it is foundational\n\nDFT is the most-used electronic-structure method in chemistry and materials science. Its reference energies for MLIP training sets (OMol25, MPtrj, MatPES), high-throughput screening and ab initio MD all inherit its errors.\n\n## Worth understanding\n\n- The adiabatic-connection formula and exact conditions (Lieb–Oxford bound, uniform scaling, piecewise linearity)\n- Why hybrids cost more in plane-wave codes\n- How benchmarks such as GMTKN55 define \"good enough\" "
site:
  published: true
  aiReviewed: true
---

# Plain explanation

To predict how a molecule behaves we need its energy. Doing that exactly means tracking every electron and how it dodges every other electron, which gets impossible quickly. Density functional theory takes a clever shortcut. A theorem says that knowing only how thick the electron cloud is at each point is enough in principle to get the energy.

The catch is that the recipe for turning the cloud into an energy is not known exactly. A small piece of it, called the exchange–correlation functional, has to be approximated. Chemists have invented hundreds of approximations, from quick rough ones to slower, better ones. Most computer studies of new materials, catalysts and drug molecules use this method because it strikes a useful balance between speed and accuracy.

Think of estimating a city's electricity use from a map of population density instead of counting every home. It works well most of the time but fails in unusual places.

The known failures are specific: some approximations smear electric charge out too much, and some mishandle atoms whose electrons are in near-tie arrangements, such as many metal atoms.

# Student explanation

**Kohn–Sham DFT.** The Hohenberg–Kohn theorems show that the ground-state electron density $n(\mathbf r)$ determines all ground-state properties. Kohn and Sham replaced the interacting electrons by non-interacting ones that reproduce the same density, which leads to the energy expression

$E[n]=T_s[n]+\int v_{ext}n\,d\mathbf r+E_H[n]+E_{xc}[n].$

Here $T_s$ is the kinetic energy of the fictitious non-interacting system, the next term is the attraction to the nuclei, $E_H$ is the classical repulsion of the electron cloud with itself, and $E_{xc}$ collects every remaining quantum effect. Everything hard sits in $E_{xc}$. Solving the resulting one-electron equations costs about $N^3$ in the number of electrons.

**Approximations.** Jacob's ladder ranks them: LDA (uses the density), GGA (adds its gradient), meta-GGA (adds kinetic-energy density), hybrids (mix in some exact Hartree–Fock exchange), double hybrids (add a perturbative correlation term). Dispersion attraction is usually added as a separate correction.

**Systematic failures.** Delocalization error: the energy of a system with a fractional number of electrons should follow straight lines between integers but approximate functionals curve, so charge spreads too much. Static-correlation error: stretched bonds and metals with several near-equal electron arrangements are described poorly. Self-interaction error: an electron partially repels itself.

**Why it matters here.** DFT energies are the training labels for most machine-learned potentials, so functional errors propagate into large simulations. Machine-learned functionals are a new attempt to reduce these errors, but need independent testing.

**Things to check yourself.** Why does a hybrid functional reduce self-interaction? What does the term GMTKN55 measure? Why can the exact functional not be computed efficiently in general?
