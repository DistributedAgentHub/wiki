---
type: entry
slug: biomolecular-molecular-dynamics
title: Molecular dynamics for biomolecules
field: computational-medicine
kind: ALGORITHM
status: MATURE
summary: Classical atomistic simulation of proteins, nucleic acids and ligands with force fields and enhanced sampling, now joined by learned ensemble generators and ML potentials.
reliedOn: Binding free energies, conformational ensembles, drug-target kinetics and cryptic-pocket discovery depend on MD or on models trained on MD; the limits of force fields and sampling bound what they can claim.
dependsOn:
  - n-body-simulation
references:
  - title: Lindorff-Larsen et al., How fast-folding proteins fold, Science (2011)
    url: https://doi.org/10.1126/science.1208351
    kind: paper
  - title: Shaw et al., Atomic-level characterization of the structural dynamics of proteins, Science (2010)
    url: https://doi.org/10.1126/science.1187409
    kind: paper
  - title: "Eastman et al., OpenMM 7: Rapid development of high performance algorithms for molecular dynamics, PLoS Comput. Biol. (2017)"
    url: https://doi.org/10.1371/journal.pcbi.1005659
    kind: paper
  - title: "Tian et al., ff19SB: amino-acid-specific protein backbone parameters trained against quantum mechanics energy surfaces in solution, JCTC (2020)"
    url: https://doi.org/10.1021/acs.jctc.9b00591
    kind: paper
  - title: Lewis et al., Scalable emulation of protein equilibrium ensembles with generative deep learning (BioEmu), Science (2025)
    url: https://www.biorxiv.org/content/10.1101/2024.12.05.626885
    kind: paper
  - title: Jing et al., AlphaFold meets flow matching for generating protein ensembles (AlphaFlow), ICML 2024
    url: https://arxiv.org/abs/2402.04845
    kind: paper
  - title: "OpenMM: high-performance molecular simulation toolkit"
    url: https://openmm.org/
    kind: code
timeline:
  - date: 1977-06-16
    title: First MD simulation of a protein
    body: McCammon, Gelin and Karplus simulate bovine pancreatic trypsin inhibitor for a few picoseconds.
    source: https://doi.org/10.1038/267585a0
  - date: 2010-10-15
    title: Millisecond-scale protein MD on Anton
    body: Shaw et al. report all-atom trajectories reaching the millisecond regime on special-purpose hardware.
    source: https://doi.org/10.1126/science.1187409
  - date: 2011-10-28
    title: Folding of 12 fast-folding proteins in atomistic simulation
    body: Lindorff-Larsen et al. fold twelve small proteins, showing both achievements and force-field biases.
    source: https://doi.org/10.1126/science.1208351
  - date: 2013-10-09
    title: Nobel Prize in Chemistry for multiscale models
    body: Karplus, Levitt and Warshel recognised for multiscale models of complex chemical systems.
    source: https://www.nobelprize.org/prizes/chemistry/2013/summary/
  - date: 2025-07-10
    title: BioEmu in Science
    body: A generative emulator trained on over 200 ms of MD plus experimental stabilities draws thousands of independent protein conformations per GPU-hour and predicts folding free energies with correlations above 0.6.
    source: https://www.biorxiv.org/content/10.1101/2024.12.05.626885
explainer:
  oneLine: Simulating every atom of a protein on a computer to watch how it moves and binds.
  flow:
    - Atoms and a force field
    - Compute forces, step in time
    - Rare events need extra push
    - Ensemble of shapes and energies
    - AI emulators learn from it
  glossary:
    - term: molecular dynamics
      meaning: Computer simulation that moves every atom according to forces, step by tiny step, to watch a molecule wiggle and change shape.
      link: /research/biomolecular-molecular-dynamics
    - term: force field
      meaning: A set of formulas and numbers that give the energy of a molecule from the positions of its atoms, used to run simulations.
      link: /research/biomolecular-molecular-dynamics
    - term: free energy
      meaning: The energy-like quantity that decides which state a molecular system prefers; differences in it set how tightly a drug binds.
      link: https://en.wikipedia.org/wiki/Gibbs_free_energy
    - term: Boltzmann distribution
      meaning: "The rule that says how likely each shape or state is at a given temperature: low-energy states are common, high-energy ones rare."
      link: https://en.wikipedia.org/wiki/Boltzmann_distribution
    - term: conformational ensemble
      meaning: The collection of different shapes a flexible molecule switches between, each with its own probability.
      link: https://en.wikipedia.org/wiki/Protein_dynamics
    - term: enhanced sampling
      meaning: Tricks that push a simulation over high energy barriers so rare events such as a drug leaving its pocket can be seen in reasonable time.
      link: /research/biomolecular-molecular-dynamics
    - term: protein folding
      meaning: The process by which a protein chain curls up into its working 3D shape.
      link: https://en.wikipedia.org/wiki/Protein_folding
    - term: ligand
      meaning: A small molecule, such as a drug, that binds to a protein.
      link: https://en.wikipedia.org/wiki/Ligand_(biochemistry)
    - term: binding pocket
      meaning: A cavity on a protein surface whose shape and chemistry fit a particular small molecule.
      link: https://en.wikipedia.org/wiki/Binding_site
  readFirst:
    - title: Molecular dynamics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Molecular_dynamics
      why: Clear overview of the method, force fields and applications.
    - title: Nobel Prize in Chemistry 2013 popular information
      url: https://www.nobelprize.org/prizes/chemistry/2013/popular-information/
      why: The prize for multiscale simulation of molecules, written for non-specialists.
    - title: OpenMM
      url: https://openmm.org/
      why: Free toolkit and tutorials if you want to run a simulation yourself.
site:
  published: true
  aiReviewed: true
---

## What it is

Integrate Newton's equations for all atoms of a solvated biomolecule, $m_i\,\ddot{\mathbf r}_i = -\nabla_i U(\mathbf r)$, with a **force field** $U$ made of bonded terms (bonds, angles, torsions) and non-bonded terms (Lennard-Jones and Coulomb, handled with particle-mesh Ewald). Time steps of 2-4 fs mean that a microsecond costs $10^8$-$10^9$ steps. The mathematics and parallel algorithms overlap with N-body simulation (neighbour lists, FFT-based long-range electrostatics); the biomedical framing is what to sample and what to trust.

## The core machinery

**Force fields.** AMBER (ff14SB, ff19SB), CHARMM36m, OPLS4 and the Open Force Field (Sage, Rosemary) families for ligands, with water models TIP3P/OPC. Accuracy limits come from fixed charges, missing polarisation and imperfect torsions; intrinsically disordered proteins and RNA are particularly sensitive.

**Hardware and software.** GPU codes (OpenMM, GROMACS, AMBER, NAMD) reach microseconds per day for 10^5-atom systems; the special-purpose Anton machines reached millisecond trajectories (Shaw et al., 2010).

**Enhanced sampling.** Rare events (folding, ligand unbinding, cryptic-pocket opening) occur far beyond direct-simulation timescales, so bias or restart schemes are used: umbrella sampling, metadynamics, replica exchange, Markov state models, weighted ensemble, random-acceleration MD (tauRAMD). Free-energy methods (thermodynamic integration, free-energy perturbation, Bennett acceptance ratio) build on the Zwanzig identity $\Delta A = -k_BT\ln\langle e^{-\Delta U/k_BT}\rangle_0$.

**Learning-based layers.** Machine-learned interatomic potentials (MACE, AIMNet, Allegro-style equivariant networks) approach quantum accuracy at reduced cost; generative ensemble emulators (AlphaFlow, BioEmu, MDGen) are trained on MD and experimental stability data to draw independent conformations without trajectories.

## Techniques to master

Statistical mechanics of ensembles, integrators and constraints, thermostats/barostats, convergence diagnostics (autocorrelation, block averaging), Markov state models, reweighting, and honest uncertainty quantification.

## Where it bites

Two open problems: predicting drug-target residence times (unbinding rates) within a factor of a few, and predicting Boltzmann-weighted conformational ensembles of multi-state proteins that agree with experiment. Both are limited by force-field error and sampling, not by lack of compute alone.

# Plain explanation

A protein is not a statue. Its atoms jiggle, and parts of it open and close millions of times a second. Molecular dynamics tries to film this on a computer. The program knows how atoms push and pull on each other, then moves every atom a tiny step forward in time, over and over, billions of times.

Why does this matter for medicine? A drug has to find a pocket on the protein, fit, and stay. Whether it does so depends on motion: pockets open only some of the time, and water has to be pushed out of the way. Simulation can show this in a way a single frozen picture cannot.

The trouble is time. Interesting events such as a drug leaving its pocket can take seconds or hours, but the simulation can only cover microseconds or milliseconds in a reasonable time, and the rule book for how atoms interact is only approximate. It is like trying to learn how a city works by watching a few minutes of traffic camera footage with slightly wrong speed limits.

Researchers now combine simulation with tricks that speed up rare events and with AI models trained on simulations.

# Student explanation

**The method.** Treat atoms as classical particles. A _force field_ assigns each configuration an energy $U$ from bonded terms (stretching, bending and twisting of bonds) and non-bonded terms (van der Waals and electric charges). Newton's law $m\,\ddot{r}=-\nabla U$ is integrated with time steps of about 2 femtoseconds, so one microsecond needs 500 million steps. Water and ions are included explicitly; long-range electric forces are handled with fast Fourier transforms. GPU programs (OpenMM, GROMACS, AMBER) reach microseconds per day for a typical protein; special machines such as Anton reached milliseconds.

**What it gives.** An _ensemble_: not one structure but a set of shapes weighted by the Boltzmann rule, where states with lower free energy are more probable. From this you can compute binding free energies, find hidden pockets and estimate how proteins fold.

**The sampling problem.** Rare events cross high energy barriers. _Enhanced sampling_ (metadynamics, umbrella sampling, replica exchange, weighted ensemble) adds bias or restarts to make them happen, and statistics is used to remove the bias afterwards.

**The accuracy problem.** Force fields are approximate: charges are fixed, and small errors of 1 kcal/mol change a state's probability by a factor of 5. Flexible disordered proteins and RNA are especially sensitive.

**New tools.** Machine-learned potentials aim for quantum accuracy at lower cost. Generative models such as BioEmu and AlphaFlow learn from simulations to draw many independent conformations quickly, but are usually checked against simulation, not directly against experiment.

**Where it bites.** DARC lists problems on predicting how long drugs stay bound and on predicting full conformational ensembles.
