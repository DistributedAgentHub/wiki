---
type: problem
slug: nucleation-rates-ab-initio-accuracy
title: Absolute homogeneous nucleation rates from simulation within an order of magnitude of experiment
entry: free-energy-enhanced-sampling
status: OPEN
origin: Classical nucleation theory, Volmer and Weber, 1926; molecular simulation of nucleation, 1990s onward
ratings:
  difficulty: 62
  applicationValue: 52
  leverage: 48
workMix:
  theory: 30
  engineering: 10
  compute: 55
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: "Sosso et al., Crystal nucleation in liquids: open questions and future challenges in molecular dynamics simulations, Chem. Rev. 116, 7078 (2016)"
    url: https://doi.org/10.1021/acs.chemrev.5b00744
  - title: Piaggi, Weis, Panagiotopoulos, Debenedetti, Car, Homogeneous ice nucleation in an ab initio machine learning model of water (arXiv:2203.01376)
    url: https://arxiv.org/abs/2203.01376
  - title: Zhou and Piaggi, Molecular mechanism of ice nucleation on feldspar (arXiv:2511.13402)
    url: https://arxiv.org/abs/2511.13402
  - title: "Zimmermann, Vorselaars, Quigley, Peters, Nucleation of NaCl from aqueous solution: critical sizes, ion-attachment kinetics, and rates, JACS (2015)"
    url: https://doi.org/10.1021/jacs.5b08098
  - title: Zhu et al., Enhanced sampling in the age of machine learning (arXiv:2509.04291)
    url: https://arxiv.org/abs/2509.04291
links:
  - to: mlip-long-range-electrostatics-charge-transfer
    kind: BUILDS_ON
    note: Salt nucleation from solution requires potentials with correct long-range electrostatics and charge transfer in ionic solutions.
  - to: mlip-calibrated-uncertainty-out-of-distribution
    kind: BUILDS_ON
    note: Error bars on the potential are needed to propagate model error into the predicted rate.
  - to: xc-functional-free-of-delocalization-and-self-interaction-error
    kind: BUILDS_ON
    note: "An 'ab initio' rate is only as good as the reference functional: SCAN-trained water (Piaggi et al.) misplaces the melting point and density, partly from density-driven delocalization error, forcing a shift of the supercooling scale before comparison with experiment."
timeline:
  - date: 2016-06-14
    title: Nucleation simulation reviewed
    body: Sosso et al. summarise the state of simulating nucleation (date approximate).
    source: https://doi.org/10.1021/acs.chemrev.5b00744
  - date: 2022-03-02
    title: Ab initio-ML ice nucleation
    body: Piaggi et al. compute homogeneous ice nucleation in a DFT-trained model of water (arXiv date).
    source: https://arxiv.org/abs/2203.01376
  - date: 2025-09-04
    title: ML and enhanced sampling reviewed
    body: Zhu et al. review ML-based enhanced sampling.
    source: https://arxiv.org/abs/2509.04291
explainer:
  oneLine: Predicting how fast the first crystal seed appears in a liquid, from simulation alone, is still out of reach.
  flow:
    - Seed must form by chance
    - Rare, so plain runs fail
    - Biased sampling estimates barrier
    - Rate depends exponentially on small energies
    - Need accurate potentials with error bars
  glossary:
    - term: nucleation
      meaning: The first tiny seed of a new phase, such as an ice crystal in cold water.
      link: https://en.wikipedia.org/wiki/Nucleation
    - term: free energy
      meaning: The energy that counts at a given temperature, including disorder; it decides which state is stable and how fast things happen.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: enhanced sampling
      meaning: Tricks that push a simulation across barriers it would otherwise take too long to cross.
      link: /research/free-energy-enhanced-sampling
    - term: collective variable
      meaning: A single number, such as a distance or an angle, chosen to track the slow change in a simulation.
      link: /research/free-energy-enhanced-sampling
    - term: machine-learned potential
      meaning: A neural network trained on quantum calculations to give energies and forces much faster than the original calculation.
      link: /research/machine-learned-interatomic-potentials
    - term: polymorph
      meaning: One of several different crystal packings of the same molecule, with different properties.
      link: https://en.wikipedia.org/wiki/Polymorphism_(materials_science)
  readFirst:
    - title: Nucleation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Nucleation
      why: Introduction to classical nucleation theory.
    - title: "Crystal nucleation in liquids: open questions in molecular dynamics (Chem. Rev.)"
      url: https://doi.org/10.1021/acs.chemrev.5b00744
      why: Review of the challenge.
    - title: Supersaturation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Supersaturation
      why: What drives nucleation from solution.
site:
  aiReviewed: true
---

Compute the steady-state homogeneous nucleation rate $J$ (events per m$^3$ per s) of a crystal from its melt or from solution, for at least ice from supercooled water and NaCl (or another simple salt) from aqueous solution, to within one order of magnitude of experiment over a range of supercooling or supersaturation, using a potential of ab initio accuracy (a machine-learned potential trained on, and validated against, a stated reference electronic-structure method, or a force field with demonstrated predictive accuracy for the relevant interfacial and bulk free energies).

This requires (i) reaction coordinates or path-sampling procedures whose results do not depend on the choice of collective variable (the committor distribution at the claimed critical nucleus is peaked at 0.5), (ii) a kinetic prefactor from independent attachment-rate calculations, (iii) finite-size control (box size, periodic images, number of independent nucleation events) and (iv) uncertainty quantification that propagates the potential's error in the solid–liquid interfacial free energy and the chemical-potential difference ($\Delta\mu$) into $\ln J$, since $\ln J \propto -\gamma^3/(\Delta\mu)^2$ amplifies 10% errors in $\gamma$ into several orders of magnitude.

# State of the art

- **Review of the problem.** Sosso et al. (Chem. Rev. 2016) catalogue open questions in simulating nucleation: dependence on force field, collective variables, finite size, and the gap between simulated and measured rates (often many orders of magnitude).
- **Ab initio-quality ice nucleation.** Piaggi, Weis, Panagiotopoulos, Debenedetti and Car (arXiv:2203.01376, published 2022) computed homogeneous ice nucleation in a DFT-trained machine-learned model of water using enhanced sampling, an important step but for one DFT functional whose water properties (melting point, density) differ from experiment, so absolute comparison with measured rates needs an offset of the supercooling scale.
- **Heterogeneous nucleation.** Zhou and Piaggi (arXiv:2511.13402) study the molecular mechanism of ice nucleation on feldspar with first-principles-trained models.
- **Salts.** Zimmermann, Vorselaars, Quigley and Peters (JACS 2015) computed NaCl nucleation rates, critical sizes and attachment kinetics from classical-force-field simulation; rates depend sensitively on the force field and on the solubility it predicts.
- **ML for sampling.** Zhu et al. (arXiv:2509.04291, 2025 review) survey ML-learned collective variables and sampling methods for rare events, including nucleation, and note lack of rigorous convergence tests.
- **Not shown.** To this entry's knowledge no study has computed absolute nucleation rates for a standard system with an ab initio-accurate potential and quantified uncertainty from the potential to agree with experiment within an order of magnitude.

# Applications

Controlling crystallisation of pharmaceuticals, polymorph selection, atmospheric ice formation in clouds (climate models), cement and mineral scaling, protein crystallisation and metallurgical grain refinement all rely on nucleation rates that current theory cannot predict.

# Resolution criteria

A peer-reviewed study (reproduced by an independent group) giving absolute $J(T)$ or $J(S)$ for ice and at least one salt in the stated range, with a documented uncertainty budget including potential error, agreeing with the bulk of experimental measurements to within a factor of 10 and sharing input files.

# Rating rationale

Difficulty 62: needs accurate potentials, rare-event sampling free of collective-variable bias and error propagation through an exponential sensitivity at once; no consensus approach. Application value 52: crystallisation control, polymorph selection and cloud ice. Leverage 48: a validated method transfers to other first-order transitions.

# Work mix rationale

Large-scale rare-event sampling with accurate potentials; theory for reaction coordinates and error propagation.

# Verification

A peer-reviewed study, reproduced by an independent group, must give absolute nucleation rates J(T) or J(S) for ice and at least one salt in the stated range, agree with the bulk of experimental measurements within a factor of 10, include an uncertainty budget with the potential error, and share its input files.

# Plain explanation

Crystals do not appear instantly when water is cooled below freezing or when salt water is concentrated. First a tiny seed has to form by chance, and only after that does it grow. That first step is called nucleation and is a rare event: it may take seconds per cubic metre of liquid, but in a computer simulation of a few thousand molecules it would take far longer than any run.

Special simulation tricks make it possible to estimate nucleation rates. But the answer depends exponentially on a few hard-to-compute energies, so even a 10 percent error in the energy of the crystal surface turns into an error of many orders of magnitude in the rate. Different models often disagree with each other and with experiment by many powers of ten.

Machine-learned potentials trained on quantum calculations have recently allowed an ice nucleation simulation with quantum-based accuracy. But the quantum calculation used still gets properties like the melting point wrong, so a direct comparison to experiment is not clean.

The challenge is to compute rates for ice and a salt within a factor of ten of experiment, with honest error bars.

# Student explanation

**Setting.** Classical nucleation theory gives a rate $J=J_0\exp(-\Delta G^*/k_BT)$ with a barrier $\Delta G^*=16\pi\gamma^3/(3\rho^2|\Delta\mu|^2)$, where $\gamma$ is the crystal–liquid interface free energy, $\rho$ the crystal density and $\Delta\mu$ the chemical-potential driving force. Because $\gamma$ enters cubed and $\Delta\mu$ squared in the denominator, small errors become huge errors in $\ln J$.

**Computational approach.** Rare-event methods (metadynamics with a nucleus-size variable, forward-flux sampling, transition path sampling) are used to compute the free-energy profile and attachment kinetics. The prefactor $J_0$ requires the rate at which molecules attach at the critical size. Finite-size effects and the number of independent events must be controlled.

**State of play.** Review work (Sosso et al., 2016) lists force-field dependence, collective-variable dependence and finite-size problems. Piaggi et al. (2022) computed ice nucleation in a DFT-trained ML model of water, a first for ab initio-level accuracy, but the underlying DFT functional has its own offset in melting point. NaCl nucleation studies with classical force fields report rates sensitive to the force field and its solubility.

**What is needed.** Potentials accurate enough in $\gamma$ and $\Delta\mu$; validated reaction coordinates (committor test); uncertainty budgets that include model error.

**Practical notes.** A usual workflow estimates the free-energy profile along a nucleus-size variable, verifies it with committor analysis, computes the attachment frequency from unbiased runs at the critical size, and repeats in several box sizes. Direct observation of nucleation in simulation is possible only at very large supercooling, far from experimental conditions, which is why extrapolation by theory is needed.

**Things to check yourself.** Why is the committor equal to 0.5 at the critical nucleus? How does a 10% error in $\gamma$ change $\ln J$?
