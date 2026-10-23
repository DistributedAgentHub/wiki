---
type: problem
slug: mlip-long-range-electrostatics-charge-transfer
title: Transferable ML potentials with non-local charge transfer, variable charge/spin states and long-range electrostatics
entry: machine-learned-interatomic-potentials
status: IN_PROGRESS
origin: Ko, Finkler, Goedecker and Behler, 2021 (4G-HDNNP); Unke et al., 2021 (SpookyNet)
ratings:
  difficulty: 52
  applicationValue: 56
  leverage: 45.5
workMix:
  theory: 35
  engineering: 25
  compute: 30
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Ko, Finkler, Goedecker, Behler, A fourth-generation high-dimensional neural network potential with accurate electrostatics including non-local charge transfer, Nat. Commun. 12, 398 (2021)
    url: https://doi.org/10.1038/s41467-020-20427-2
  - title: Unke et al., SpookyNet, Nat. Commun. 12, 7273 (2021)
    url: https://doi.org/10.1038/s41467-021-27504-0
  - title: Cheng, Latent Ewald summation for machine learning of long-range interactions (arXiv:2408.15165)
    url: https://arxiv.org/abs/2408.15165
  - title: Gao, Yam, Mao, A foundation machine learning potential with polarizable long-range interactions for materials modelling (arXiv:2410.13820)
    url: https://arxiv.org/abs/2410.13820
  - title: Kocer et al., Iterative charge equilibration for fourth-generation high-dimensional neural network potentials (arXiv:2502.07907)
    url: https://arxiv.org/abs/2502.07907
  - title: Meta FAIR, UMA (arXiv:2506.23971)
    url: https://arxiv.org/abs/2506.23971
links:
  - to: mlip-barriers-bond-breaking-pes-softening
    kind: RELATED
    note: Both are gaps in what current universal local potentials can represent.
  - to: xc-functional-free-of-delocalization-and-self-interaction-error
    kind: BUILDS_ON
    note: The target is to reproduce hybrid DFT on charge-transfer complexes and ion pairs separated by 5–20 Å, which is the regime where delocalization error produces spurious fractional charge transfer, so the reference labels inherit the error the functional problem seeks to remove.
timeline:
  - date: 2021-01-20
    title: 4G-HDNNP
    body: Non-local charge transfer introduced into neural-network potentials.
    source: https://doi.org/10.1038/s41467-020-20427-2
  - date: 2021-12-01
    title: SpookyNet
    body: Explicit charge, spin and nonlocal interactions (date approximate).
    source: https://doi.org/10.1038/s41467-021-27504-0
  - date: 2024-08-27
    title: Latent Ewald summation
    body: Learned latent charges with Ewald evaluation (arXiv date).
    source: https://arxiv.org/abs/2408.15165
  - date: 2025-06-30
    title: UMA conditioned on charge and spin
    body: Universal models trained on OMol25 take charge and spin as inputs (arXiv date).
    source: https://arxiv.org/abs/2506.23971
explainer:
  oneLine: Most machine-learned potentials only see nearby atoms, so they miss forces between distant charges and charge moving between atoms.
  flow:
    - Local models see only nearby atoms
    - Charges act at long range
    - Electrons can move far
    - Add learned charges plus Ewald
    - Need broad, transferable tests
  glossary:
    - term: machine-learned potential
      meaning: A neural network trained on quantum calculations to give energies and forces much faster than the original calculation.
      link: /research/machine-learned-interatomic-potentials
    - term: Ewald summation
      meaning: A technique for adding up the long-range Coulomb forces between charges in a repeating box.
      link: https://en.wikipedia.org/wiki/Ewald_summation
    - term: foundation potential
      meaning: A machine-learned potential trained on a huge, varied dataset so it can be used on many materials or molecules without retraining.
      link: /research/machine-learned-interatomic-potentials
    - term: neural network
      meaning: A flexible function with many adjustable numbers, fitted to data by training.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: density functional theory
      meaning: A method that gets a molecule's energy from the electron density instead of the full wavefunction, trading exactness for speed.
      link: /research/density-functional-theory
    - term: molecular dynamics
      meaning: A computer simulation that moves atoms step by step under the forces between them.
      link: /research/classical-force-fields-md
  readFirst:
    - title: Ewald summation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Ewald_summation
      why: The classic trick for long-range Coulomb forces.
    - title: Latent Ewald summation for machine learning of long-range interactions
      url: https://arxiv.org/abs/2408.15165
      why: A clear modern approach.
    - title: Machine Learning Force Fields (Unke et al.)
      url: https://doi.org/10.1021/acs.chemrev.0c01111
      why: Includes sections on long-range and charge effects.
raw:
  body: "Create a universal MLIP architecture whose energy depends correctly on *non-local* electronic degrees of freedom: total molecular charge and spin multiplicity as inputs, charge transfer over distances beyond the cutoff radius (several Å), electrostatics with correct $1/r$ decay, and polarisation response to external fields and electrodes (including constant-potential electrochemical interfaces), while scaling linearly or as $O(N\\log N)$ to $10^5$–$10^6$ atoms.\n\nConcretely it should reproduce a reference method (hybrid DFT or better) to within 1 kcal/mol per-molecule on charge-transfer complexes, zwitterions and ion pairs separated by 5–20 Å, on ionic liquids and aqueous electrolytes (radial distribution functions, dielectric constants within 5%, ionic conductivity within a factor of 1.5), and on metal/electrolyte interfaces, in a *transferable* way, i.e. not retrained for every system."
site:
  aiReviewed: true
---

# State of the art

- **Charge-equilibration and fourth generation.** Ko et al. (Nat. Commun. 2021; arXiv:2009.06484) introduce a fourth-generation high-dimensional neural network potential with non-local charge transfer; Kocer et al. (arXiv:2502.07907) extend with iterative charge equilibration. SpookyNet (Unke et al., Nat. Commun. 2021) includes explicit charge, spin and nonlocal interactions.
- **Long-range kernels.** Latent Ewald summation (Cheng, arXiv:2408.15165) learns latent charges and evaluates them by Ewald, avoiding supervised charge labels; Gao, Yam and Mao (arXiv:2410.13820) report a foundation-style potential with polarisable long-range interactions for materials.
- **Foundation models.** UMA (arXiv:2506.23971) accepts total charge and spin as conditioning information but is built on a local, cutoff-based message-passing architecture, so explicit long-range effects beyond the cutoff are not handled by construction; the demo notes the training data are aperiodic and periodic systems should be treated cautiously.
- **Gap.** Evidence for transferable accuracy on electrolytes and electrified interfaces at scale, with non-local charge transfer correct across charge states, is limited to specific systems.

# Applications

Battery electrolytes and interphases, supercapacitors, electrocatalysis under potential, ionic liquids, proteins with charged residues and membranes all depend on long-range electrostatics and charge transfer; current local MLIPs cannot represent them faithfully.

# Resolution criteria

Publicly released model(s) achieving the stated accuracy on a pre-registered benchmark set of electrolytes, charge-transfer complexes and electrochemical interfaces (including an out-of-element test), with demonstrated linear-scaling inference on at least $10^5$ atoms, verified independently.

# Rating rationale

Difficulty 52: several architectures exist, but transfer across charge states and to interfaces at scale needs data and validation not yet available. Application value 56: electrolytes, electrochemistry and biomolecules. Leverage 45.5: it extends one method class and enables a subfield, not a discipline.

# Work mix rationale

New architectures plus implementation for linear-scaling long-range terms and systematic data.

# Verification

Publicly released models must reach the stated accuracy on a pre-registered benchmark of electrolytes, charge-transfer complexes and electrochemical interfaces (including an out-of-element test), with linear-scaling inference demonstrated on at least 1e5 atoms and independent verification.

# Plain explanation

Most machine-learned potentials judge each atom by looking at neighbours within a few ångströms. That works for many things but fails when forces reach farther. Electric charges pull on each other across the whole system, and the pull falls off slowly. In salt water, in a battery electrolyte or in a protein with charged parts, those distant forces decide how things behave.

Another weakness is that electrons can move from one part of a molecule to another far away. A local model cannot represent that, because it never sees the far end. Likewise, a model usually cannot tell the difference between a neutral molecule and the same molecule with an extra electron unless told.

Researchers have proposed fixes: networks that also predict an electric charge on each atom, or that learn hidden charges and add up their long-range pull using the same mathematics that classical simulations use.

The open goal is one general model that handles charge, spin and long-range effects reliably across many systems, including electrode surfaces, and runs fast on very large systems.

# Student explanation

**Limitation.** A local MLIP writes $E=\sum_i\varepsilon_i(\text{neighbours within } r_c)$ with $r_c\approx$ 5-6 Å. Coulomb interactions decay as $1/r$, and polarisation, charge transfer and applied potentials act over larger distances, so cutoff models cannot reproduce them in principle.

**Strategies.**

1. _Charge equilibration (4G-HDNNP, SpookyNet)._ Neural networks predict atomic electronegativities or charges from the whole system, charges are solved with a global constraint on the total charge, and electrostatics are computed with them. This handles non-local charge transfer.
2. _Latent Ewald summation._ Local networks output hidden charges that are summed with Ewald's method for the long-range part; no charge labels are needed.
3. _Conditioning on charge and spin._ UMA takes total charge and spin as input but remains local.
4. _Polarisable long-range models._ Foundation-style potentials with learned polarisabilities (2024 preprint).

**Requirements.** Correct $1/r$ tails; charge-state dependence; linear or $N\log N$ scaling; transferability across elements and environments; handling of electrodes at constant potential.

**Evidence gap.** Most demonstrations are on specific systems; broad, independent benchmarks on electrolytes, interfaces and charge-transfer complexes at scale are lacking.

**Practical notes.** For periodic systems, Ewald or particle-mesh sums add roughly $N\log N$ cost; for charged molecules in vacuum, the model must be told the total charge. Benchmarks should include dimers pulled apart to 20 Å, ion pairs, zwitterions, and electrolytes whose dielectric constants and conductivities can be compared with measurement.

**Things to check yourself.** Why is the 'atomic charge' not a measurable quantity, and how do models cope? What does Ewald summation do?
