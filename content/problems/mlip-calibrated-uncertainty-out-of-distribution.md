---
type: problem
slug: mlip-calibrated-uncertainty-out-of-distribution
title: Machine-learned interatomic potentials with calibrated, guaranteed error bounds outside the training distribution
entry: machine-learned-interatomic-potentials
status: OPEN
origin: Behler and Parrinello, 2007; uncertainty quantification for MLIPs, 2018 onward
ratings:
  difficulty: 60
  applicationValue: 58
  leverage: 62
workMix:
  theory: 40
  engineering: 10
  compute: 40
  empirical: 10
verification:
  route: REPRODUCTION
sources:
  - title: Farris et al., Bayesian neural networks versus deep ensembles for uncertainty quantification in MLIPs (arXiv:2509.19180)
    url: https://arxiv.org/abs/2509.19180
  - title: Kurniawan, Wen, Tadmor, Comparative study of ensemble-based uncertainty quantification methods for neural network interatomic potentials (arXiv:2508.06456)
    url: https://arxiv.org/abs/2508.06456
  - title: Zaghen et al., Uncertainty-aware machine learning interatomic potentials via learned functional perturbations (arXiv:2605.19939, preprint)
    url: https://arxiv.org/abs/2605.19939
  - title: Deng et al., Systematic softening in universal machine learning interatomic potentials, npj Comput. Mater. (2025)
    url: https://doi.org/10.1038/s41524-024-01500-6
  - title: Riebesell et al., Matbench Discovery (arXiv:2308.14920)
    url: https://arxiv.org/abs/2308.14920
  - title: Meta FAIR, OMol25 dataset, evaluations and models (arXiv:2505.08762)
    url: https://arxiv.org/abs/2505.08762
timeline:
  - date: 2007-04-02
    title: Neural-network potentials
    body: The MLIP paradigm is introduced.
    source: https://doi.org/10.1103/PhysRevLett.98.146401
  - date: 2023-08-28
    title: Matbench Discovery
    body: A leaderboard for foundation-potential stability prediction (arXiv date).
    source: https://arxiv.org/abs/2308.14920
  - date: 2025-08-08
    title: Ensemble UQ comparison
    body: Kurniawan et al. compare ensemble-based UQ methods for NN potentials (arXiv date).
    source: https://arxiv.org/abs/2508.06456
  - date: 2026-05-19
    title: Learned functional perturbations (preprint)
    body: Zaghen et al. propose uncertainty via learned functional perturbations.
    source: https://arxiv.org/abs/2605.19939
explainer:
  oneLine: Machine-learned potentials give no reliable warning when they leave familiar territory and become wrong.
  flow:
    - Model trained on familiar structures
    - Simulation drifts to new ones
    - Confident wrong answer
    - Errors feed back into the run
    - Need cheap, honest error bars
  glossary:
    - term: machine-learned potential
      meaning: A neural network trained on quantum calculations to give energies and forces much faster than the original calculation.
      link: /research/machine-learned-interatomic-potentials
    - term: out-of-distribution
      meaning: Different from anything the model was trained on, where its answers can be badly wrong without warning.
      link: https://en.wikipedia.org/wiki/Uncertainty_quantification
    - term: uncertainty calibration
      meaning: Making a model's stated error bars match how often it is actually wrong.
      link: https://en.wikipedia.org/wiki/Uncertainty_quantification
    - term: conformal prediction
      meaning: A statistical recipe for giving predictions with error ranges that are right a stated fraction of the time.
      link: https://en.wikipedia.org/wiki/Conformal_prediction
    - term: foundation potential
      meaning: A machine-learned potential trained on a huge, varied dataset so it can be used on many materials or molecules without retraining.
      link: /research/machine-learned-interatomic-potentials
    - term: molecular dynamics
      meaning: A computer simulation that moves atoms step by step under the forces between them.
      link: /research/classical-force-fields-md
    - term: neural network
      meaning: A flexible function with many adjustable numbers, fitted to data by training.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
  readFirst:
    - title: Uncertainty quantification (Wikipedia)
      url: https://en.wikipedia.org/wiki/Uncertainty_quantification
      why: Background on error bars for models.
    - title: Conformal prediction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conformal_prediction
      why: A statistical route to guaranteed coverage and its assumptions.
    - title: Machine Learning Force Fields (Unke et al.)
      url: https://doi.org/10.1021/acs.chemrev.0c01111
      why: Overview of the models whose errors we want to bound.
site:
  aiReviewed: true
---

Build an MLIP (foundation-scale or system-specific) whose predicted uncertainty $\hat\sigma(E,\mathbf F)$ is calibrated and, ideally, backed by a finite-sample guarantee: for a stated class of covariate shifts (new compositions, unseen bonding motifs, higher temperature or pressure, longer trajectories), the true error against the reference method exceeds $\hat\sigma$-scaled bounds with probability at most $\alpha$ (for example 5%), and large errors are flagged before they corrupt a molecular-dynamics run.

Required: (i) coverage of at least 90% of reference errors across held-out chemically distinct test splits (new elements, charge and spin states, reaction classes); (ii) cost at most twice that of the underlying point-prediction model; (iii) usable for active learning and for propagating error to downstream observables (phonons, free energies, diffusion coefficients, reaction rates) rather than only to per-structure energies; (iv) the guarantee must survive the self-consistent feedback of MD, where errors compound along the trajectory.

# State of the art

- **Heuristic uncertainty.** Deep ensembles, dropout, last-layer Bayesian and Gaussian-process-style approaches, and committee disagreement are standard for active learning. Comparative studies find ensembles generally calibrate better than single-network Bayesian approximations but cost several-fold more and are overconfident under distribution shift (Farris et al., arXiv:2509.19180; Kurniawan, Wen and Tadmor, arXiv:2508.06456).
- **Conformal and learned perturbations.** Conformal prediction gives marginal coverage for exchangeable data only; learned functional-perturbation approaches are the topic of recent preprints (Zaghen et al., arXiv:2605.19939, 2026).
- **Foundation potentials.** Models such as MACE-MP-0, UMA and Orb give accurate average-case results on in-domain benchmarks (Matbench Discovery; OMol25 evaluations) but no per-structure certificate; documented failure modes include systematic softening of the PES (Deng et al., npj Comput. Mater. 2025) and degraded extrapolation to high-energy or out-of-domain structures.
- **Not shown.** No published MLIP offers distribution-shift-robust coverage guarantees validated on chemically held-out data together with MD-trajectory error control, to the knowledge of this entry.

# Applications

Trustworthy MLIPs allow ab initio-quality simulation to be automated in drug discovery, battery electrolytes, catalysis and crystal structure prediction without re-validating against DFT at every step; error bars on predictions would make results publishable and auditable.

# Resolution criteria

A method whose coverage is demonstrated at the stated level on pre-registered out-of-distribution splits (including at least one chemically held-out split of OMol25 or an equivalent) and in long MD runs, with ablations against ensembles, reproduced independently, plus (preferably) a proof of coverage under a stated shift assumption.

# Rating rationale

Difficulty 60: guarantees under covariate shift are an open problem in statistics itself, and the MD feedback loop makes it harder; similar to fp4-training-convergence-theory (62) in being a theory-versus-practice gap. Application value 58: it removes the main barrier to unsupervised use of foundation potentials in industry. Leverage 62: every downstream use of universal potentials is conditional on it.

# Work mix rationale

Statistical theory for distribution shift and a lot of large-scale benchmarking.

# Verification

Coverage must be demonstrated at the stated level on pre-registered out-of-distribution splits (including a chemically held-out split of OMol25 or equivalent) and in long MD runs, with ablations against ensembles, reproduced independently. Datasets, splits and the coverage metric are fixed in the spec; a proof of coverage under a stated shift assumption is preferred.

# Plain explanation

Machine-learned potentials are fast stand-ins for quantum calculations. A model is trained on many examples, and it is usually accurate for atom arrangements that resemble them. But when a simulation wanders into an arrangement it has never seen, it can give a confident wrong answer. The error then feeds back, because the simulation uses the answer to decide where to go next.

A good model should say how sure it is, and when it says 90 percent sure, it should be right about 90 percent of the time. That is called calibration. Today's tricks, such as asking several models to vote, cost several times more computing time and still fail when everything shifts at once, because all the models share the same blind spot.

Statisticians have methods that offer guarantees if the new data looks like the old data in a certain way, but chemistry violates those assumptions.

The task is to build error warnings that stay trustworthy when the chemistry changes, are cheap, and also work over long simulations.

# Student explanation

**Problem.** Given an MLIP $E_\theta$, produce uncertainty estimates $\hat\sigma(\mathbf x)$ such that $P(|E_\theta(\mathbf x)-E_{ref}(\mathbf x)|>c\,\hat\sigma(\mathbf x))\le\alpha$ holds under covariate shift to new compositions, bonding motifs, temperatures or pressures, and remains useful for forces, trajectories and downstream properties.

**Current methods.** Deep ensembles train several models and use their disagreement; they calibrate best among common methods but cost several-fold more. Bayesian neural networks, dropout and last-layer approximations are cheaper but are often overconfident. Conformal prediction gives coverage guarantees when calibration and test points are exchangeable, which fails under shift. Learned-perturbation approaches (preprints, 2026) try to reduce cost.

**Why it is hard.**

1. _Shift._ Chemistry changes gradually along a simulation, and errors are largest exactly where training data are sparse.
2. _Feedback._ Molecular dynamics uses predictions to generate the next input, so small errors compound.
3. _Shared bias._ Systematic failures such as PES softening affect all ensemble members equally and are invisible to disagreement.
4. _Propagation._ Errors in energies must be turned into error bars on free energies, rates or phonons.

**What success looks like.** Coverage near the nominal level on held-out chemistry splits and in long simulations, at modest cost, with released benchmarks.

**Practical notes.** In active learning, uncertainty decides which structures are sent to the expensive reference calculation, so a miscalibrated estimate wastes budget or misses failures. Metrics include expected calibration error, coverage at fixed confidence levels, and the correlation between predicted uncertainty and actual error (necessary but not sufficient for coverage).

**Things to check yourself.** Why does ensemble disagreement underestimate systematic bias? How would you build a held-out chemistry split?
