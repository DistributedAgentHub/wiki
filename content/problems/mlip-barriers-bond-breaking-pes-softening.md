---
type: problem
slug: mlip-barriers-bond-breaking-pes-softening
title: Universal ML potentials accurate on bond breaking, transition states and high-energy configurations
entry: machine-learned-interatomic-potentials
status: IN_PROGRESS
origin: Deng et al. 2024 (systematic softening); Transition1x, Schreiner et al. 2022
ratings:
  difficulty: 48
  applicationValue: 64
  leverage: 50
workMix:
  theory: 20
  engineering: 15
  compute: 45
  empirical: 20
verification:
  route: REPRODUCTION
sources:
  - title: Deng et al., Systematic softening in universal machine learning interatomic potentials, npj Comput. Mater. (2025)
    url: https://doi.org/10.1038/s41524-024-01500-6
  - title: Deng et al., Overcoming systematic softening in universal MLIPs by fine-tuning (arXiv:2405.07105)
    url: https://arxiv.org/abs/2405.07105
  - title: Meta FAIR, OMol25 dataset, evaluations and models (arXiv:2505.08762)
    url: https://arxiv.org/abs/2505.08762
  - title: "Meta FAIR, UMA: a family of universal models for atoms (arXiv:2506.23971)"
    url: https://arxiv.org/abs/2506.23971
  - title: Fu et al., Learning smooth and expressive interatomic potentials for physical property prediction (arXiv:2502.12147)
    url: https://arxiv.org/abs/2502.12147
  - title: Schreiner et al., Transition1x, Sci. Data 9, 779 (2022)
    url: https://doi.org/10.1038/s41597-022-01870-w
  - title: "De Breuck et al., Pressure-transferable universal machine-learning potentials: the WBM-MatPES benchmark and Tuga-FF (arXiv:2610.14891, preprint)"
    url: https://arxiv.org/abs/2610.14891
links:
  - to: xc-functional-free-of-delocalization-and-self-interaction-error
    kind: BUILDS_ON
    note: The MLIP is judged against its DFT reference, and barrier heights and stretched bonds are where delocalization and static-correlation error are largest (several kcal/mol), so the reference functional caps what 1 kcal/mol barrier accuracy means.
  - to: mlip-calibrated-uncertainty-out-of-distribution
    kind: BUILDS_ON
    note: Softening is a distribution-shift failure on high-energy structures; collecting transition-state and bond-breaking data by active learning, and flagging soft regions in reactive MD, relies on uncertainty estimates that stay calibrated out of distribution.
timeline:
  - date: 2022-12-01
    title: Transition1x
    body: A dataset of reaction pathways for training reactive ML potentials (date approximate).
    source: https://doi.org/10.1038/s41597-022-01870-w
  - date: 2024-05-12
    title: Softening identified
    body: Deng et al. document systematic PES softening in universal potentials (arXiv date).
    source: https://arxiv.org/abs/2405.07105
  - date: 2025-05-13
    title: OMol25
    body: A very large molecular dataset including distorted and reactive structures.
    source: https://arxiv.org/abs/2505.08762
  - date: 2026-10-10
    title: Pressure-transfer benchmark (preprint)
    body: De Breuck et al. introduce WBM-MatPES and Tuga-FF.
    source: https://arxiv.org/abs/2610.14891
explainer:
  oneLine: Universal machine-learned potentials tend to be too soft away from equilibrium, so reaction barriers come out wrong.
  flow:
    - Training sets show relaxed structures
    - Strained bonds are rare in data
    - Model too soft on hills
    - Rates are exponentially sensitive
    - More data or fine-tuning helps
  glossary:
    - term: machine-learned potential
      meaning: A neural network trained on quantum calculations to give energies and forces much faster than the original calculation.
      link: /research/machine-learned-interatomic-potentials
    - term: foundation potential
      meaning: A machine-learned potential trained on a huge, varied dataset so it can be used on many materials or molecules without retraining.
      link: /research/machine-learned-interatomic-potentials
    - term: reaction barrier
      meaning: The energy hill a reaction must climb; its height controls how fast the reaction runs.
      link: https://en.wikipedia.org/wiki/Transition_state_theory
    - term: potential energy surface
      meaning: A map giving a molecule's energy for every arrangement of its atoms; valleys are stable molecules, passes between valleys are reaction barriers.
      link: /research/born-oppenheimer-pes
    - term: density functional theory
      meaning: A method that gets a molecule's energy from the electron density instead of the full wavefunction, trading exactness for speed.
      link: /research/density-functional-theory
    - term: kcal/mol
      meaning: A unit of energy per mole of molecules; 1 kcal/mol changes a reaction rate by about a factor of five at room temperature.
      link: https://en.wikipedia.org/wiki/Calorie
    - term: out-of-distribution
      meaning: Different from anything the model was trained on, where its answers can be badly wrong without warning.
      link: https://en.wikipedia.org/wiki/Uncertainty_quantification
  readFirst:
    - title: Overcoming systematic softening in universal MLIPs by fine-tuning
      url: https://arxiv.org/abs/2405.07105
      why: The paper that identified the problem.
    - title: Transition state theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Transition_state_theory
      why: Why barriers control rates.
    - title: Matbench Discovery
      url: https://arxiv.org/abs/2308.14920
      why: How foundation potentials are benchmarked.
raw:
  body: "Train or construct a universal MLIP that matches its reference electronic-structure method on the parts of the potential energy surface away from equilibrium: reaction barrier heights and transition-state geometries (mean absolute error at most 1 kcal/mol over a held-out set of at least 10,000 reactions spanning organic, organometallic and heterogeneous catalysis), bond dissociation curves, surface and defect energies, ion-migration barriers and high-pressure or high-temperature configurations, while retaining accuracy near equilibrium (phonons and elastic constants within about 3% of the reference).\n\nThe failure to remove is *systematic softening*: universal models trained on near-equilibrium data underpredict energies, forces and curvature on high-energy structures by a roughly constant scale factor, and generalise worse to pressure and bond-breaking regimes."
site:
  aiReviewed: true
---

# State of the art

- **Softening.** Deng et al. (npj Comput. Mater. 2025; arXiv:2405.07105) show that M3GNet, CHGNet and MACE-MP-0 systematically underpredict curvature on surfaces, defects, migration barriers, phonons and high-energy states, which they trace to pre-training data dominated by near-equilibrium structures; modest fine-tuning on high-energy data largely corrects it.
- **Larger and more diverse data.** OMol25 (over 100 million ωB97M-V/def2-TZVPD calculations, Meta FAIR, arXiv:2505.08762) and UMA (arXiv:2506.23971) include reactive and distorted structures, and eSEN/UMA report strong results on reaction and conformer benchmarks. MatPES-type datasets and pressure-transfer benchmarks target the materials side; a WBM-MatPES pressure benchmark preprint appeared in October 2026 (arXiv:2610.14891).
- **Reaction data.** Transition1x (Schreiner et al., Sci. Data 2022) provides about 10 million DFT calculations along nudged-elastic-band paths for small organic reactions; generalisation of models trained on it to reaction classes outside the dataset's chemistry is limited.
- **Open.** To this entry's knowledge, no universal model has been demonstrated, on independent held-out benchmarks, at barrier-height errors near 1 kcal/mol across organic, organometallic and heterogeneous reaction classes, and reference functional error itself (several kcal/mol for DFT barriers) limits what "accuracy" means.

# Applications

Reactive MD for combustion, atmospheric and catalytic chemistry, battery interphase formation and mechanochemistry needs barriers accurate enough for rates (1 kcal/mol is about a factor of 5 at room temperature); transition-state searches and automated reaction-network exploration with MLIPs depend on it.

# Resolution criteria

A model with released weights evaluated on a pre-registered benchmark of at least 10,000 reactions and a materials benchmark (migration barriers, surface energies, high-pressure equations of state), achieving the stated error levels against the reference method in independent evaluation, plus comparison against fine-tuned baselines.

# Rating rationale

Difficulty 48: the failure mode is diagnosed and fine-tuning or more diverse data largely fixes it in tests, but 1 kcal/mol barrier accuracy across chemistries is not shown, and reference-functional error caps the target. Application value 64: reactive simulation, catalysis and battery interphases. Leverage 50: it changes how foundation potentials are built and benchmarked.

# Work mix rationale

Mainly data coverage and training at scale, plus reference-method accuracy for barriers.

# Verification

A model with released weights must be evaluated on a pre-registered benchmark of at least 10,000 reactions and a materials benchmark (migration barriers, surface energies, high-pressure equations of state) and meet the stated error levels against the reference method in independent evaluation, with fine-tuned baselines compared.

# Plain explanation

A machine-learned potential learns from examples. Most of the examples in big collections show molecules and crystals in comfortable, relaxed arrangements, because those were easy to compute. Reactions, though, involve stretched and broken bonds, which sit at the top of energy hills. If a model has seen few such cases, it underestimates the hills, as if the atoms were attached by weaker springs than they really are. Researchers call this softening.

That matters because the speed of a reaction depends exponentially on the barrier height. An error of 1 kcal/mol changes a rate by roughly a factor of five at room temperature, and softening can cause errors much larger than that.

Fixes are known in some cases: give the model more examples of strained structures, or fine-tune it with a few extra calculations. What is not yet shown is a single model that gets reaction barriers right across organic, metal-based and surface chemistry, without special treatment.

And there is a limit: the reference calculations the model learns from can themselves be off by several kcal/mol for barriers.

# Student explanation

**Observation.** Deng et al. showed that universal MLIPs (M3GNet, CHGNet, MACE-MP-0) underpredict the curvature of the potential energy surface: energies and forces on surfaces, defects, phonons, migration barriers and high-energy states are systematically too low by a roughly constant factor. They attribute this to training sets dominated by near-equilibrium configurations; fine-tuning with a modest number of high-energy structures largely removes it.

**Target.** A model with mean absolute error at most 1 kcal/mol on a held-out set of at least 10,000 reaction barriers across organic, organometallic and heterogeneous catalysis, without losing near-equilibrium accuracy (phonons, elastic constants within about 3%).

**Data side.** Datasets with strained or reactive structures: OMol25 (over 100 million molecular DFT calculations), Transition1x (reaction paths), and pressure-diverse materials sets (a 2026 preprint proposes a pressure benchmark). Models like UMA and eSEN trained on OMol25 report improved results on reaction benchmarks, but independent evidence for 1 kcal/mol across classes is lacking.

**Reference limit.** Barrier heights from DFT are themselves uncertain by several kcal/mol depending on functional; so the accuracy that a model can claim is relative to its label.

**Why it matters.** Reaction rates and selectivity, battery interphase growth and catalysis simulations need barriers, and automated reaction searches depend on them.

**Things to check yourself.** How does a rate depend on barrier error, via $e^{-\Delta E^\ddagger/k_BT}$? How would you build a test set that is not biased toward easy reactions?
