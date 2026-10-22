---
type: problem
slug: virtual-cell-unseen-perturbation-prediction
title: Predicting transcriptome responses to unseen perturbations in unseen cell contexts (virtual cell models)
entry: single-cell-omics-analysis
status: OPEN
origin: Perturb-seq (Dixit et al. 2016), the virtual-cell programme (Bunne et al. 2024) and the Arc Virtual Cell Challenge (2025, 2026)
prize: "Arc Institute Virtual Cell Challenge prizes (2025: two USD 100,000 grand prizes and a generalist prize; 2026 edition opened August 2026)"
ratings:
  difficulty: 62
  applicationValue: 47
  leverage: 54
workMix:
  theory: 25
  engineering: 15
  compute: 25
  empirical: 35
verification:
  route: REPRODUCTION
sources:
  - title: Ahlmann-Eltze, Huber, Anders, Deep-learning-based gene perturbation effect prediction does not yet outperform simple linear baselines, Nat. Methods 22 (2025)
    url: https://doi.org/10.1038/s41592-025-02772-6
  - title: "Systema: a framework for evaluating genetic perturbation response prediction beyond systematic variation, Nat. Biotechnol. (2025)"
    url: https://doi.org/10.1038/s41587-025-02777-8
  - title: "PertEval-scFM: Benchmarking single-cell foundation models for perturbation effect prediction (bioRxiv preprint)"
    url: https://www.biorxiv.org/content/10.1101/2024.10.02.616248v1
  - title: Arc Institute, Virtual Cell Challenge 2025 announcement
    url: https://arcinstitute.org/news/virtual-cell-challenge-2025
  - title: Arc Institute, The 2026 Virtual Cell Challenge
    url: https://arcinstitute.org/news/virtual-cell-challenge-2026
  - title: Liu et al., Effects of distance metrics and scaling on the perturbation discrimination score (arXiv:2511.16954, preprint)
    url: https://arxiv.org/abs/2511.16954
  - title: "Bunne et al., How to build the virtual cell with artificial intelligence: priorities and opportunities, Cell (2024)"
    url: https://doi.org/10.1016/j.cell.2024.11.015
links:
  - to: single-cell-snapshot-dynamics-identifiability
    kind: BUILDS_ON
    note: "Perturbation screens are destructive snapshots: control and perturbed cells are unpaired, so per-cell response models (e.g. optimal-transport maps such as CellOT) face the same identifiability limits of inferring a map from two marginals."
timeline:
  - date: 2022-05-26
    title: Genome-scale Perturb-seq
    body: Replogle et al. generate genome-scale CRISPRi single-cell data, the training basis for many perturbation models.
    source: https://doi.org/10.1016/j.cell.2022.05.013
  - date: 2025-06-27
    title: Arc Virtual Cell Challenge 2025 announced
    body: 300 CRISPRi perturbations in about 300,000 H1 cells; held-out cell-type test.
    source: https://arcinstitute.org/news/virtual-cell-challenge-2025
  - date: 2025-08-01
    title: Foundation models do not beat linear baselines
    body: Nature Methods paper shows five foundation models and two deep models do not outperform simple baselines.
    source: https://doi.org/10.1038/s41592-025-02772-6
  - date: 2025-11-21
    title: Discrimination-score sensitivity (preprint)
    body: PDS used in Systema and the Challenge is sensitive to distance metric and scale.
    source: https://arxiv.org/abs/2511.16954
  - date: 2026-08-20
    title: Virtual Cell Challenge 2026 opens
    body: Zero-shot prediction of gene knockdown effects across several cell lines with new data.
    source: https://arcinstitute.org/news/virtual-cell-challenge-2026
explainer:
  oneLine: Training AI to predict how a cell's genes respond to a change it has never seen.
  flow:
    - Perturb genes, read all genes
    - Train a model on known cases
    - Predict unseen gene or cell type
    - Compare with simple averages
    - Count only perturbation-specific wins
  glossary:
    - term: single-cell RNA sequencing
      meaning: Measuring which genes are active in each individual cell, rather than averaging over a whole tissue.
      link: /research/single-cell-omics-analysis
    - term: CRISPR
      meaning: A gene-editing tool that can switch off or alter a chosen gene; used in screens to see what each gene does.
      link: https://en.wikipedia.org/wiki/CRISPR
    - term: perturbation
      meaning: A deliberate change to a cell, such as turning off one gene or adding a drug, to see how the cell responds.
      link: https://en.wikipedia.org/wiki/Perturb-seq
    - term: baseline
      meaning: A simple method used as a yardstick; a fancy model only counts as progress if it beats it.
      link: https://en.wikipedia.org/wiki/Baseline_(configuration_management)
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: stem cell
      meaning: A cell that can still develop into several kinds of specialised cells.
      link: https://en.wikipedia.org/wiki/Stem_cell
  readFirst:
    - title: "Arc Institute: Virtual Cell Challenge 2025"
      url: https://arcinstitute.org/news/virtual-cell-challenge-2025
      why: Announcement describing the data and scoring.
    - title: Single-cell sequencing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Single-cell_sequencing
      why: Background on the measurement technology.
    - title: CRISPR (Wikipedia)
      url: https://en.wikipedia.org/wiki/CRISPR
      why: How genes are switched off in screens.
site:
  aiReviewed: true
---

**Task.** A model $f$ trained on single-cell perturbation screens (CRISPRi/CRISPRa/knockout/drug, scRNA-seq readout) must predict the post-perturbation expression distribution of a perturbation $p$ in a cell context $c$ (cell type, line, donor, state) that was not seen in training: unseen $p$ in seen $c$, seen $p$ in unseen $c$, or both.

**Why baselines matter.** Perturbation datasets contain a large systematic component: perturbed cells differ from controls in the same way regardless of which gene was knocked down (cell-cycle, stress and selection effects). A model that predicts the mean perturbed profile, or an additive combination of training effects, can score well on naive metrics. A real model must capture _perturbation-specific_ effects.

**Concrete target.** On at least three independent held-out screens (new cell lines or primary cells; at least 200 unseen perturbations each; measured with at least two biological replicates), a single model (no per-dataset fine-tuning on the test cell type) achieves, on perturbation-specific effects after subtracting the dataset-wide mean perturbation effect (Systema-style): (i) Pearson correlation of predicted versus observed expression change (over the top 20 differentially expressed genes) of at least 0.8 times the replicate-to-replicate correlation, for at least 50% of perturbations with a strong effect; (ii) better than the best of (a) the perturbed-mean baseline, (b) a linear/additive model, and (c) a $k$-nearest-neighbour baseline by a pre-registered margin, on both an expression-error metric and a discrimination metric that is robust to distance-metric and scale choices; (iii) calibrated predictive distributions (not only means), and (iv) correct sign and rank for at least 70% of true differentially expressed regulators of the perturbed gene validated by orthogonal assays.

# State of the art

- **Linear baselines (Nature Methods 2025).** Ahlmann-Eltze, Huber and Anders compared five single-cell foundation models (including scGPT and scFoundation) and two other deep-learning models (GEARS, CPA) with deliberately simple baselines for single and double genetic perturbations and found none outperformed the baselines; for unseen genes a linear model performed about as well as the deep models. A pre-review noted that different linear models were used for single and double perturbations, so details of the comparison are debated.
- **Systematic variation (Systema, Nature Biotechnology 2025).** Simple baselines perform comparably to existing methods because of systematic differences between perturbed and control cells; predicting responses to unseen perturbations is substantially harder than standard metrics suggest.
- **PertEval-scFM (preprint, 2024).** Single-cell foundation model embeddings give no consistent improvement over baselines, especially under distribution shift, and all models struggle with strong or atypical perturbation effects.
- **Arc Virtual Cell Challenge 2025.** About 300,000 H1 human embryonic stem cells with 300 CRISPRi perturbations; models trained on other cell types had to predict held-out responses. Participation was reported in the thousands of registrants and hundreds of final submissions (organiser figures). The winning and prize-winning entries are reported (in challenge announcements and press coverage, not a refereed analysis) to have combined deep learning with protein embeddings, public perturbation data and statistical features; team names and prize categories here follow those announcements and were not verified against a refereed report. Reports of the challenge state that no model consistently beat naive baselines on every metric; a statistics preprint (Liu et al., arXiv:2511.16954) shows the perturbation discrimination score is highly sensitive to the distance measure and scaling, so metric design is itself open.
- **Arc Virtual Cell Challenge 2026.** Opened in August 2026 with a zero-shot design (no training set released; new data in multiple cell lines); no results were available as of October 2026.
- **Not shown.** No model satisfies the target above under baseline-controlled metrics.

# Applications

A reliable virtual cell would let researchers triage CRISPR and drug screens in silico, predict combination effects, prioritise therapeutic targets and anticipate off-target transcriptional effects, reducing experimental cost. Today's models are not reliable enough for these uses, and the main current value of the problem is establishing honest benchmarks.

# Resolution criteria

A pre-registered, prospective evaluation (for example a later Arc challenge or an independent benchmark with newly generated data) in which one model meets criteria (i)-(iv) on at least three held-out screens, reported with the baselines above and with a metric analysis showing the result is not an artefact of systematic variation or distance-metric choice, then confirmed by a refereed publication.

# Rating rationale

Independent 2025 benchmarks show deep and foundation models do not beat simple linear baselines and even the evaluation metrics are contested, so it is research-grade (62) with no consensus approach, above the single-snapshot dynamics problem (57) because it also needs cross-context generalisation. Application value 47 (screen triage and target prioritisation, conditional on reliability); leverage 54 as the stated goal of large programmes and a prerequisite for in-silico cell biology.

# Work mix rationale

Needs better evaluation theory, new modelling ideas and much more diverse perturbation data from new cell contexts.

# Verification

One model must meet criteria (i) to (iv) on at least three held-out screens in a pre-registered prospective evaluation (for example a later Arc challenge or an independent benchmark with newly generated data), reported against the stated baselines with a metric analysis ruling out systematic-variation artefacts.

# Plain explanation

Biologists often ask: if I switch off gene X in this kind of cell, what happens to all the other genes? Answering takes an experiment. A virtual cell would answer on a computer, saving time and money, and letting scientists try thousands of what-ifs.

To train such a model, scientists switch off many genes, one per cell, and measure all active genes in each cell. The model must then predict the result for a gene switched off that it has not seen, or in a type of cell it has not seen.

Careful tests in 2025 gave a sobering answer: fancy AI models, including big ones trained on millions of cells, did not beat very simple recipes, such as guessing the average response or adding up effects known from training. Part of the reason is that most knocked-out cells change in similar ways, so guessing the average already scores well. Even the scoring rules are debated.

The Arc Institute ran a contest in 2025, with a new, harder one in 2026, to push the field. The goal here is a model that beats the simple recipes where it counts: on effects that are specific to each perturbation.

# Student explanation

**Task.** Learn $f(\text{perturbation }p,\text{context }c)\to$ post-perturbation expression distribution, trained on screens such as Perturb-seq (CRISPR guides plus single-cell RNA sequencing). Test settings: unseen perturbation in a seen cell type; seen perturbation in unseen cell type; both unseen.

**Why simple baselines are strong.** Perturbed cells often share a common shift from controls (stress, cell-cycle changes, selection of guides). Predicting this average, or adding single-gene effects for a double perturbation, can look good on common metrics. Systema (Nature Biotechnology 2025) formalised this as systematic variation and proposed metrics that focus on perturbation-specific effects.

**Benchmarks.** Ahlmann-Eltze, Huber and Anders (Nature Methods 2025) found that five foundation models (including scGPT and scFoundation) and two other deep models did not outperform simple linear baselines for single and double gene perturbations. PertEval-scFM reported that foundation-model embeddings give no consistent gain, especially under distribution shift. In the Arc Virtual Cell Challenge 2025 (300 CRISPRi perturbations in H1 stem cells; over 1,200 teams), the winner combined deep learning with statistical features; coverage reports said no entry consistently beat naive baselines on every metric. A preprint (arXiv 2511.16954) shows the discrimination score depends strongly on the distance measure used. The 2026 challenge is zero-shot with new data; results were not available in October 2026.

**DARC target.** On three or more held-out screens, correlation of predicted and observed change on top differentially expressed genes at least 0.8 times replicate-to-replicate agreement for 50 percent of strong perturbations, beating the best of three baselines, with calibrated uncertainty.

**Reading a result.** Check whether the paper compares against the perturbed-mean and linear baselines, whether metrics remove the shared response, and whether the held-out split is by perturbation, by cell type or both.
