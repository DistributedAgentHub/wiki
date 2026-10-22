---
type: entry
slug: single-cell-omics-analysis
title: Single-cell omics analysis
field: computational-medicine
kind: ALGORITHM
status: ACTIVE
summary: "Statistical and deep-learning pipelines for scRNA-seq and related assays: normalisation, integration, clustering, trajectory inference and perturbation modelling."
reliedOn: Cell atlases, Perturb-seq screens, target discovery and the 'virtual cell' programme all depend on how single-cell counts are modelled, integrated and validated.
dependsOn:
  - pytorch
references:
  - title: "Luecken and Theis, Current best practices in single-cell RNA-seq analysis: a tutorial, Mol. Syst. Biol. (2019)"
    url: https://doi.org/10.15252/msb.20188746
    kind: paper
  - title: "Wolf, Angerer, Theis, SCANPY: large-scale single-cell gene expression data analysis, Genome Biol. (2018)"
    url: https://doi.org/10.1186/s13059-017-1382-0
    kind: paper
  - title: Lopez et al., Deep generative modeling for single-cell transcriptomics (scVI), Nat. Methods (2018)
    url: https://doi.org/10.1038/s41592-018-0229-2
    kind: paper
  - title: La Manno et al., RNA velocity of single cells, Nature (2018)
    url: https://doi.org/10.1038/s41586-018-0414-6
    kind: paper
  - title: Weinreb et al., Fundamental limits on dynamic inference from single-cell snapshots, PNAS (2018)
    url: https://doi.org/10.1073/pnas.1714723115
    kind: paper
  - title: Ahlmann-Eltze, Huber, Anders, Deep-learning-based gene perturbation effect prediction does not yet outperform simple linear baselines, Nat. Methods (2025)
    url: https://doi.org/10.1038/s41592-025-02772-6
    kind: paper
  - title: Replogle et al., Mapping information-rich genotype-phenotype landscapes with genome-scale Perturb-seq, Cell (2022)
    url: https://doi.org/10.1016/j.cell.2022.05.013
    kind: paper
timeline:
  - date: 2015-05-21
    title: Drop-seq
    body: Droplet microfluidics profiles tens of thousands of single-cell transcriptomes in one experiment.
    source: https://doi.org/10.1016/j.cell.2015.05.002
  - date: 2018-03-06
    title: Fundamental limits on dynamic inference from snapshots
    body: Weinreb et al. show that distinct dynamics can generate the same snapshot distribution.
    source: https://doi.org/10.1073/pnas.1714723115
  - date: 2018-08-08
    title: RNA velocity
    body: La Manno et al. use spliced/unspliced counts to estimate the direction of cell-state change.
    source: https://doi.org/10.1038/s41586-018-0414-6
  - date: 2022-05-26
    title: Genome-scale Perturb-seq
    body: Replogle et al. profile CRISPRi knockdown of every expressed gene in K562 cells and a subset in RPE1 cells.
    source: https://doi.org/10.1016/j.cell.2022.05.013
  - date: 2025-08-01
    title: Foundation models do not beat linear baselines
    body: Five foundation models and two other deep models fail to outperform simple baselines on single and double perturbation prediction.
    source: https://doi.org/10.1038/s41592-025-02772-6
explainer:
  oneLine: Statistics and AI for measuring which genes are active in each individual cell.
  flow:
    - Sequence RNA from single cells
    - Count table, noisy and sparse
    - Group, batch-correct, label
    - Perturb genes, read responses
    - Test models against simple baselines
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
    - term: RNA velocity
      meaning: An estimate, from the ratio of unprocessed to processed RNA in a cell, of which way that cell's gene activity is heading.
      link: https://en.wikipedia.org/wiki/RNA_velocity
    - term: baseline
      meaning: A simple method used as a yardstick; a fancy model only counts as progress if it beats it.
      link: https://en.wikipedia.org/wiki/Baseline_(configuration_management)
    - term: neural network
      meaning: A computer program made of many adjustable numbers that learns patterns from examples instead of following hand-written rules.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: stem cell
      meaning: A cell that can still develop into several kinds of specialised cells.
      link: https://en.wikipedia.org/wiki/Stem_cell
  readFirst:
    - title: Single-cell sequencing (Wikipedia)
      url: https://en.wikipedia.org/wiki/Single-cell_sequencing
      why: Overview of the technologies and uses.
    - title: Human Cell Atlas
      url: https://www.humancellatlas.org/
      why: The international effort to map every human cell type.
    - title: Single-cell best practices book
      url: https://www.sc-best-practices.org/
      why: Free online guide to doing single-cell analysis well.
site:
  published: true
  aiReviewed: true
---

## What it is

Droplet and plate methods (Drop-seq, 10x Genomics, Smart-seq) measure thousands of RNA transcripts in each of up to millions of individual cells, giving a matrix $X \in \mathbb{N}^{n_\text{cells}\times n_\text{genes}}$ that is sparse (most entries zero), noisy and batch-dependent. Companion assays measure chromatin accessibility (scATAC), surface proteins (CITE-seq), spatial position, and, with CRISPR guides, perturbations (Perturb-seq).

## The core machinery

**Count models.** Counts are overdispersed; negative-binomial or zero-inflated models (scVI, a variational autoencoder with a negative-binomial likelihood; $\text{count}_{ig}\sim \text{NB}(\ell_i\,\rho_{ig},\theta_g)$ with library size $\ell_i$) learn a latent space that accounts for depth and batch.

**Standard pipeline.** Quality control, normalisation, selection of highly variable genes, PCA, k-nearest-neighbour graph, Leiden clustering, UMAP visualisation, marker-gene annotation (Seurat, Scanpy, Bioconductor). **Integration** removes batch effects across studies (Harmony, scVI, scANVI, Seurat anchors) while trying to keep biology.

**Dynamics from snapshots.** Cells are destroyed on measurement, so trajectories must be inferred: pseudotime (Monocle, diffusion maps), RNA velocity (spliced/unspliced ratios; La Manno 2018, scVelo), optimal transport between time points (Waddington-OT) and CellRank-style fate probabilities. Weinreb et al. (2018) proved that population snapshots do not in general determine dynamics without assumptions.

**Foundation models and perturbation prediction.** Transformers pretrained on tens of millions of cells (Geneformer, scGPT, scFoundation) and graph/latent models for perturbations (GEARS, CPA) aim to predict the effect of unseen genetic or chemical perturbations. Independent benchmarks in 2025 found that deliberately simple linear baselines match or beat them on current datasets.

## Techniques to master

Negative-binomial generalised linear models, dimensionality reduction, kNN graph methods, optimal transport, variational inference, experimental design for perturbation screens, and evaluation with metrics that cannot be gamed by predicting the mean.

## Where it bites

Two problems: predicting transcriptome responses to unseen perturbations in unseen cell types better than simple baselines (the virtual-cell problem), and stating when cell-state dynamics are identifiable at all from snapshot data.

# Plain explanation

Your body has trillions of cells of hundreds of types. For a long time, biologists had to grind up a piece of tissue and measure the average, which hides the variety. Single-cell sequencing reads the active genes in each cell separately, so a sample of a million cells becomes a huge table with a row for each cell and a column for each gene.

That table is noisy and mostly empty, because each cell yields only a small sample of its molecules. Computer methods group similar cells together, correct differences caused by different days or machines, and draw maps where each dot is a cell.

A newer idea is to knock out genes one at a time with gene editing and read out how each cell reacts. The hope is to train a model, sometimes called a virtual cell, that predicts what any change would do without an experiment. So far, simple averaging tricks match or beat the fancy AI models on this, which shows how carefully such claims must be tested.

Another challenge is that measuring a cell destroys it, so we only get snapshots and must guess how cells change over time.

# Student explanation

**The data.** A matrix of counts $X$ with one row per cell and one column per gene. Counts are discrete, overdispersed (variance larger than the mean) and depend on how many molecules were captured per cell (library size). A common model is the negative binomial, as in scVI, a variational autoencoder that learns a low-dimensional state per cell while accounting for depth and batch.

**Standard analysis.** Quality control; normalisation; choose highly variable genes; principal component analysis; build a nearest-neighbour graph; cluster (Leiden algorithm); visualise (UMAP); label clusters with marker genes. Integration methods remove batch effects between experiments while trying to keep real biological differences.

**Time and fate.** Because cells are destroyed, dynamics must be inferred. Pseudotime orders cells along a trajectory; RNA velocity uses the ratio of unspliced to spliced RNA to give each cell a direction; optimal transport links snapshots at different times. A theorem by Weinreb and colleagues shows that snapshots alone cannot determine dynamics without extra assumptions.

**Perturbation screens.** CRISPR guides plus single-cell readout (Perturb-seq) measure the transcriptome response to each gene knockout. Models try to predict responses to knockouts not seen in training. Careful benchmarks in 2025 found that linear baselines match deep and foundation models, partly because many perturbations share a common stress response.

**Skills.** Count models, graph methods, optimal transport, variational inference, evaluation design.

**Try it.** Download a small public dataset (for example the 3k PBMC data used in Scanpy tutorials), run the standard pipeline, and then change the number of neighbours or the highly variable gene count; watching clusters merge and split shows how much of a figure is a modelling choice rather than biology.
