---
type: problem
slug: single-cell-snapshot-dynamics-identifiability
title: When are cell-state dynamics identifiable from single-cell snapshots, and how to estimate them with guarantees
entry: single-cell-omics-analysis
status: OPEN
origin: Weinreb et al., 2018 (fundamental limits); RNA velocity (La Manno et al., 2018); optimal-transport trajectory inference (Schiebinger et al., 2019)
ratings:
  difficulty: 57
  applicationValue: 14
  leverage: 31
workMix:
  theory: 55
  engineering: 5
  compute: 15
  empirical: 25
verification:
  route: REPRODUCTION
sources:
  - title: Weinreb et al., Fundamental limits on dynamic inference from single-cell snapshots, PNAS (2018)
    url: https://doi.org/10.1073/pnas.1714723115
  - title: La Manno et al., RNA velocity of single cells, Nature (2018)
    url: https://doi.org/10.1038/s41586-018-0414-6
  - title: Bergen et al., Generalizing RNA velocity to transient cell states through dynamical modeling, Nat. Biotechnol. (2020)
    url: https://doi.org/10.1038/s41587-020-0591-3
  - title: Schiebinger et al., Optimal-transport analysis of single-cell gene expression identifies developmental trajectories in reprogramming, Cell (2019)
    url: https://doi.org/10.1016/j.cell.2019.01.006
  - title: Weinreb et al., Lineage tracing on transcriptional landscapes links state to fate during differentiation, Science (2020)
    url: https://doi.org/10.1126/science.aaw3381
  - title: "Sabbioni et al., Analyzing RNA data with scVelo: identifiability issues and a Bayesian implementation"
    url: https://core.ac.uk/works/153710357
  - title: "BayVel: A Bayesian Framework for RNA Velocity Estimation in Single-Cell Transcriptomics (arXiv:2505.03083, preprint)"
    url: https://arxiv.org/abs/2505.03083
timeline:
  - date: 2018-03-06
    title: Non-identifiability of dynamics from snapshots
    body: Weinreb et al. prove that snapshot distributions do not determine dynamics without further assumptions.
    source: https://doi.org/10.1073/pnas.1714723115
  - date: 2018-08-08
    title: RNA velocity
    body: La Manno et al. use unspliced/spliced RNA to estimate cell-state velocities.
    source: https://doi.org/10.1038/s41586-018-0414-6
  - date: 2020-02-06
    title: Lineage tracing on transcriptional landscapes
    body: LARRY barcodes give ground-truth clonal fate for evaluating inference methods.
    source: https://doi.org/10.1126/science.aaw3381
  - date: 2025-05-05
    title: BayVel (preprint)
    body: Reports scVelo parameter-recovery failures even on simulated data from its model.
    source: https://arxiv.org/abs/2505.03083
explainer:
  oneLine: Can you tell how cells change over time from a single frozen snapshot of many cells?
  flow:
    - Cells are destroyed on measurement
    - Only snapshots of many cells
    - Different stories fit same photo
    - Methods add assumptions
    - Need guarantees and warnings
  glossary:
    - term: single-cell RNA sequencing
      meaning: Measuring which genes are active in each individual cell, rather than averaging over a whole tissue.
      link: /research/single-cell-omics-analysis
    - term: RNA velocity
      meaning: An estimate, from the ratio of unprocessed to processed RNA in a cell, of which way that cell's gene activity is heading.
      link: https://en.wikipedia.org/wiki/RNA_velocity
    - term: stem cell
      meaning: A cell that can still develop into several kinds of specialised cells.
      link: https://en.wikipedia.org/wiki/Stem_cell
    - term: baseline
      meaning: A simple method used as a yardstick; a fancy model only counts as progress if it beats it.
      link: https://en.wikipedia.org/wiki/Baseline_(configuration_management)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
  readFirst:
    - title: RNA velocity (Wikipedia)
      url: https://en.wikipedia.org/wiki/RNA_velocity
      why: What the arrows in single-cell plots mean.
    - title: Single-cell sequencing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Single-cell_sequencing
      why: Why snapshots arise.
    - title: Fundamental limits on dynamic inference from single-cell snapshots
      url: https://doi.org/10.1073/pnas.1714723115
      why: The theoretical paper that states the problem (technical, but the introduction is readable).
site:
  aiReviewed: true
---

Single-cell sequencing destroys the cell, so one observes independent snapshots $\{x_i\}$ drawn from time-varying distributions $p_t$ of cell states. Methods infer the direction and speed of cell-state change (RNA velocity, pseudotime, optimal transport, neural SDEs) and fate probabilities, but different dynamics can produce the same marginals $p_t$.

**Problem.** Characterise the minimal assumptions under which the drift field $b(x,t)$, the diffusion/noise, and cell-fate probabilities of a stochastic model $dX_t = b(X_t,t)\,dt + \sigma\,dW_t$ (with birth and death) are identifiable from time-resolved or static snapshots with spliced/unspliced counts, and provide estimators with consistency or finite-sample error bounds and diagnostics that detect when the assumptions fail.

**Concrete target.** (i) Theory: necessary and sufficient identifiability conditions for the velocity-style model with transcription, splicing and degradation kinetics and time-varying rates, extending the known non-identifiability of gene-wise kinetic time scales; (ii) Estimation: an estimator that, on benchmark systems with clonal lineage tracing (LARRY-type barcodes, which supply ground-truth fate) and metabolic-labelling data (which supply ground-truth velocity), predicts held-out clonal fate with AUROC $\ge 0.9$ and recovers velocity direction with cosine similarity $\ge 0.8$ versus labelling-derived velocity in at least five tissues; (iii) Diagnostics: a test that flags datasets (for example with multiple kinetic regimes, transcriptional boosts or no splicing signal) where velocity estimates are not interpretable, with false-alarm and miss rates reported.

# State of the art

- **Fundamental limits.** Weinreb et al. (PNAS 2018) showed that multiple dynamics are consistent with the same snapshot distribution, so extra assumptions (or additional data such as lineage barcodes) are needed.
- **RNA velocity.** Models of splicing kinetics (La Manno 2018; scVelo, Bergen 2020) often give plausible fields, but critiques show identifiability problems: a Bayesian re-analysis (Sabbioni, Bibbona, Mastrantonio, Sanguinetti) reports that the model's time parameter is not identifiable in simulations; a preprint (BayVel, arXiv:2505.03083) reports that scVelo fails to recover parameters even for data simulated from its own assumptions and that its pancreatic results are strongly influenced by post-processing; the reliability and direction on human embryonic forebrain data have been questioned in a separate analysis. The BayVel and forebrain results are preprint-level and partly by competing-method authors.
- **Optimal transport and lineage tracing.** Waddington-OT (Schiebinger 2019) gives couplings between time points; lineage barcoding (Weinreb et al., Science 2020) provides clonal ground truth and shows that state alone predicts fate only partially.
- **No general guarantee.** In sources reviewed no estimator has proven consistency for general velocity-style dynamics under realistic noise, nor a validated detector of unidentifiable regimes.

# Applications

Reliable dynamics from snapshots would let researchers read developmental and disease trajectories from patient tissue samples, identify fate decision points for differentiation protocols and cell therapies, and decide which datasets support trajectory claims. Presently, trajectory arrows in published figures are often not interpretable as dynamics.

# Resolution criteria

A refereed theorem (identifiability conditions and consistency of an estimator) combined with a benchmark on at least five datasets that have independent ground truth (lineage barcodes or metabolic labelling) in which the estimator meets the accuracy thresholds above and the diagnostic reliably flags failing datasets.

# Rating rationale

Mixed theory and data: a known impossibility result plus noisy practice means progress needs new assumptions and measurement types, at a difficulty (57) near fold switching (58). Application value 14 because it mainly changes how trajectories are interpreted; leverage 31 as a widely used family of analyses depends on it.

# Work mix rationale

Largely a statistical-theory problem about identifiability, with benchmark data from lineage tracing and metabolic labelling.

# Verification

A refereed theorem (identifiability conditions and estimator consistency) must be combined with a benchmark on at least five datasets with independent ground truth (lineage barcodes or metabolic labelling), where the estimator meets the accuracy thresholds and the diagnostic flags failing datasets.

# Plain explanation

Measuring the genes in a single cell destroys it. So scientists never see one cell changing over time. They see a snapshot of many different cells at one moment, some young, some mature, and must guess the story of how young ones become mature ones.

It is like looking at one photo of a city park and trying to say which way each person is walking. Often you can guess from context: someone with a ball is heading to the field. Computer methods do something similar. A popular one compares the amount of freshly made and mature messenger molecules inside each cell to say where the cell is heading, giving the arrows seen in many figures.

But mathematics shows that a snapshot alone is not enough: very different stories can give exactly the same photograph. And tests show the popular arrow method sometimes points the wrong way or gives answers that change with the settings.

The open problem is to say exactly what assumptions make the arrows trustworthy, to design methods that come with guarantees, and to have a warning light for datasets where they should not be believed.

# Student explanation

**Model.** Suppose cell state follows $dX_t=b(X_t,t)\,dt+\sigma\,dW_t$ with possible birth and death. We observe samples from the distributions $p_t$ at one or a few times. Weinreb et al. (PNAS 2018) showed that distinct dynamics can give the same $p_t$ (for example, a stationary cloud can come from a flow with noise or from no flow), so extra assumptions are needed.

**RNA velocity.** Models of transcription, splicing and degradation say that the rate of change of spliced RNA $s$ is $ds/dt=\beta u-\gamma s$, where $u$ is unspliced RNA. Estimating $\beta,\gamma$ per gene gives a velocity vector per cell (La Manno 2018; scVelo 2020). The estimates depend on steady-state assumptions, shared timing across genes and data processing.

**Critiques.** A Bayesian reanalysis found that the 'time' parameter is not identifiable in simulations; a preprint (BayVel) reported that scVelo fails to recover parameters even for data simulated from its own model; another analysis found reversed trajectories in human forebrain data. These are partly preprint or competitor claims and need independent replication.

**Ground truth.** Lineage barcoding (LARRY) tracks clones to give true fate; metabolic labelling gives true RNA turnover.

**Optimal transport.** Waddington-OT couples cells at consecutive times using a minimal-cost transport; this needs time series, with assumptions on the cost.

**DARC target.** A theorem giving identifiability conditions, an estimator with guarantees, and benchmarks with ground truth (fate AUROC at least 0.9; velocity cosine similarity at least 0.8) plus a test that flags datasets where velocity is not interpretable.

**Reading a result.** A trajectory figure is only as good as its assumptions. Look for independent ground truth (barcodes or labelling), sensitivity to preprocessing choices, and whether the authors state when their model should not be applied.
