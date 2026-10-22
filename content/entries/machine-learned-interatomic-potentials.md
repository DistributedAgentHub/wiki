---
type: entry
slug: machine-learned-interatomic-potentials
title: Machine-learned interatomic potentials and foundation potentials
field: computational-chemistry
kind: ALGORITHM
status: ACTIVE
summary: Neural or kernel models trained on quantum-chemical energies and forces that reproduce a potential energy surface at near-classical cost, now extended to universal 'foundation' models over most of the periodic table.
reliedOn: Ab initio-quality molecular dynamics, materials discovery screening and crystal structure ranking increasingly run on these models rather than on DFT directly.
dependsOn:
  - classical-force-fields-md
  - coupled-cluster-theory
  - density-functional-theory
  - reverse-mode-autodiff
references:
  - title: J. Behler and M. Parrinello, Generalized neural-network representation of high-dimensional PES (2007)
    url: https://doi.org/10.1103/PhysRevLett.98.146401
    kind: paper
  - title: O. T. Unke et al., Machine Learning Force Fields, Chem. Rev. (2021)
    url: https://doi.org/10.1021/acs.chemrev.0c01111
    kind: paper
  - title: I. Batatia et al., A foundation model for atomistic materials chemistry (MACE-MP-0)
    url: https://arxiv.org/abs/2401.00096
    kind: paper
  - title: Meta FAIR, The Open Molecules 2025 (OMol25) dataset, evaluations and models
    url: https://arxiv.org/abs/2505.08762
    kind: paper
  - title: "Meta FAIR, UMA: a family of universal models for atoms"
    url: https://arxiv.org/abs/2506.23971
    kind: paper
  - title: J. Riebesell et al., Matbench Discovery
    url: https://arxiv.org/abs/2308.14920
    kind: paper
timeline:
  - date: 2007-04-02
    title: Neural-network potentials
    body: Behler and Parrinello introduce high-dimensional neural-network PESs.
    source: https://doi.org/10.1103/PhysRevLett.98.146401
  - date: 2023-12-29
    title: MACE-MP-0
    body: A foundation potential for 89 elements trained on Materials Project data (arXiv date).
    source: https://arxiv.org/abs/2401.00096
  - date: 2025-05-13
    title: OMol25
    body: Meta FAIR releases OMol25 (over 100 million DFT calculations); UMA models trained on it follow in June 2025 (arXiv 2506.23971).
    source: https://arxiv.org/abs/2505.08762
explainer:
  oneLine: Neural networks trained on quantum calculations that predict atomic energies and forces much faster.
  flow:
    - Quantum calculations make training data
    - Network learns energy from atom positions
    - Forces come by differentiation
    - Fast ab initio-like simulation
    - Errors hide outside the training data
  glossary:
    - term: machine-learned potential
      meaning: A neural network trained on quantum calculations to give energies and forces much faster than the original calculation.
      link: /research/machine-learned-interatomic-potentials
    - term: foundation potential
      meaning: A machine-learned potential trained on a huge, varied dataset so it can be used on many materials or molecules without retraining.
      link: /research/machine-learned-interatomic-potentials
    - term: neural network
      meaning: A flexible function with many adjustable numbers, fitted to data by training.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: out-of-distribution
      meaning: Different from anything the model was trained on, where its answers can be badly wrong without warning.
      link: https://en.wikipedia.org/wiki/Uncertainty_quantification
    - term: density functional theory
      meaning: A method that gets a molecule's energy from the electron density instead of the full wavefunction, trading exactness for speed.
      link: /research/density-functional-theory
    - term: potential energy surface
      meaning: A map giving a molecule's energy for every arrangement of its atoms; valleys are stable molecules, passes between valleys are reaction barriers.
      link: /research/born-oppenheimer-pes
    - term: uncertainty calibration
      meaning: Making a model's stated error bars match how often it is actually wrong.
      link: https://en.wikipedia.org/wiki/Uncertainty_quantification
  readFirst:
    - title: Machine Learning Force Fields (Unke et al., Chem. Rev.)
      url: https://doi.org/10.1021/acs.chemrev.0c01111
      why: Comprehensive review; the introduction is readable.
    - title: Interatomic potential (Wikipedia)
      url: https://en.wikipedia.org/wiki/Interatomic_potential
      why: Context on classical potentials that MLIPs replace.
    - title: Matbench Discovery
      url: https://arxiv.org/abs/2308.14920
      why: Shows how foundation potentials are compared.
site:
  published: true
  aiReviewed: true
---

## What it is

An MLIP represents the Born–Oppenheimer energy as a learned function $E_\theta(\{\mathbf r_i,Z_i\})$, typically a sum of atomic contributions that depend on local environments within a cutoff radius $r_c$ (about 5–6 Å). Forces come from automatic differentiation, $\mathbf F_i=-\nabla_iE_\theta$. Invariance or equivariance to rotations, translations and permutations is built in.

## Generations

- Descriptor-based: Behler–Parrinello networks (2007), Gaussian approximation potentials (2010), moment tensor potentials.
- Message-passing and equivariant: SchNet, NequIP, Allegro, MACE, eSEN, which are more data-efficient.
- Foundation potentials: M3GNet, CHGNet, MACE-MP-0 (trained on Materials Project trajectories), Orb, SevenNet, and UMA/eSEN trained on OMol25 (more than 100 million $\omega$B97M-V/def2-TZVPD calculations, Meta FAIR, 2025) and other Open Molecules/Materials sets. MACE-OFF targets organic molecules.
- Beyond locality: models with learned charges or long-range kernels (4G-HDNNP, SpookyNet, latent Ewald summation).

## Failure modes

Extrapolation outside the training distribution; "softening", the systematic under-prediction of PES curvature and barriers by models trained on near-equilibrium data; no guaranteed error bars; energy-conservation violations in non-smooth architectures; sensitivity to the underlying DFT functional (a model cannot be more accurate than its labels); cutoff-limited electrostatics and charge transfer.

## Why it is foundational

MLIPs turn the bottleneck from per-step electronic structure into dataset generation and active learning. Their quality is bounded by the labels (DFT, CC) and by benchmark design, e.g. Matbench Discovery.

## Worth understanding

- Equivariant tensor products and body order
- Active learning and committee uncertainty
- Why cheap per-atom cost still hides dataset-generation cost

## Current frontier

Open directions include calibrated uncertainty, systematic softening away from equilibrium, long-range electrostatics and charge transfer, labels more accurate than a single DFT functional (coupled-cluster-quality data, multi-fidelity training), and efficiency: distillation of large foundation models into fast specialised ones, and inference at millions of atoms. Benchmarks for stability, thermal conductivity, reactions and molecular dynamics stability are evolving.

# Plain explanation

Quantum calculations give accurate energies for a given arrangement of atoms but each one takes minutes to hours. A machine-learned potential is a neural network that has studied thousands to hundreds of millions of such calculations and learned to predict the answer in a fraction of a second. After training, it can run simulations that would otherwise be impossible.

The newest models, called foundation potentials, are trained on huge collections of molecules and materials covering most of the periodic table. They can be used out of the box for many tasks, from screening battery materials to simulating liquids.

They also have clear weaknesses. A network can only be as accurate as the calculations it learned from, it can be confidently wrong on atom arrangements unlike its training data, and early models turned out to be systematically too 'soft', underestimating how stiffly atoms resist being pushed. Most models only look at neighbours within a few ångströms, so they miss forces acting over longer distances, like those between charged ions.

Because a model gives no warning when it is wrong, researchers are working on error bars and better training data.

# Student explanation

**Idea.** An MLIP learns a function $E_\theta(\{\mathbf r_i,Z_i\})$ from the positions and element types of atoms to the energy, usually written as a sum of atomic contributions that depend on neighbours within a cutoff of about 5-6 Å. Forces follow by differentiation, $\mathbf F_i=-\nabla_{\mathbf r_i}E_\theta$, which is why automatic differentiation is central. The model must respect symmetry: the energy cannot change if the system is rotated, translated or if identical atoms are relabelled.

**Architectures.** Early models (Behler–Parrinello networks, Gaussian approximation potentials) used hand-built descriptors of local environments. Modern ones (NequIP, Allegro, MACE, eSEN, UMA) use equivariant message passing, in which features transform predictably under rotations; this makes them more data-efficient.

**Foundation potentials.** MACE-MP-0 was trained on Materials Project calculations; OMol25 provides over 100 million DFT calculations of molecules, and UMA models are trained on it and other datasets. Benchmarks such as Matbench Discovery compare models.

**Known issues.** (1) Bound by labels: a model trained on a DFT functional inherits its errors. (2) Softening: training sets dominated by near-equilibrium geometries make the model too flat on distorted structures. (3) No built-in error bars. (4) Local cutoffs omit long-range electrostatics and charge transfer. (5) Dataset generation, not inference, becomes the expensive part.

**Role here.** Three problems in this pack concern uncertainty, barriers and long-range physics. Several others (nucleation, crystal structure prediction) rely on these models.

**Things to check yourself.** Why does equivariance help? Why can a model fit its data perfectly but still be unsafe in a simulation?
