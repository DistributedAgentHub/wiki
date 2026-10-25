---
type: entry
slug: protein-language-models-generative-design
title: Protein language models and generative protein design
field: computational-medicine
kind: FRONTIER
status: ACTIVE
summary: "Sequence models trained on evolutionary data and diffusion/inverse-folding models that propose new proteins: binders, enzymes and antibodies, tested in the wet lab."
reliedOn: De novo binder, enzyme and antibody design, zero-shot variant-effect prediction and clinical missense interpretation all use these models and their benchmarks.
dependsOn:
  - biomolecular-structure-prediction
  - transformer-architecture
references:
  - title: Watson et al., De novo design of protein structure and function with RFdiffusion, Nature (2023)
    url: https://doi.org/10.1038/s41586-023-06415-8
    kind: paper
  - title: Dauparas et al., Robust deep learning-based protein sequence design using ProteinMPNN, Science (2022)
    url: https://doi.org/10.1126/science.add2187
    kind: paper
  - title: Hayes et al., Simulating 500 million years of evolution with a language model (ESM3), Science (2025)
    url: https://doi.org/10.1126/science.ads0018
    kind: paper
  - title: Cheng et al., Accurate proteome-wide missense variant effect prediction with AlphaMissense, Science (2023)
    url: https://doi.org/10.1126/science.adg7492
    kind: paper
  - title: "Notin et al., ProteinGym: Large-Scale Benchmarks for Protein Fitness Prediction and Design (NeurIPS 2023)"
    url: https://papers.neurips.cc/paper_files/paper/2023/file/cac723e5ff29f65e3fcbb0739ae91bee-Paper-Datasets_and_Benchmarks.pdf
    kind: paper
  - title: Bennett et al., Atomically accurate de novo design of antibodies with RFdiffusion, Nature (2026)
    url: https://doi.org/10.1038/s41586-025-09721-5
    kind: paper
  - title: ProteinGym repository and leaderboard
    url: https://github.com/OATML-Markslab/ProteinGym
    kind: code
timeline:
  - date: 2022-09-15
    title: ProteinMPNN
    body: Message-passing inverse folding raises native-sequence recovery and experimental success of designed backbones.
    source: https://doi.org/10.1126/science.add2187
  - date: 2023-07-11
    title: RFdiffusion
    body: Diffusion over backbones yields experimentally validated binders, symmetric assemblies and motif scaffolds.
    source: https://doi.org/10.1038/s41586-023-06415-8
  - date: 2023-09-19
    title: AlphaMissense
    body: Predictions released for 71 million human missense variants, classifying about 89 percent as likely benign or likely pathogenic.
    source: https://doi.org/10.1126/science.adg7492
  - date: 2024-10-09
    title: Nobel Prize in Chemistry for computational protein design and structure prediction
    body: Awarded to David Baker for computational protein design and to Demis Hassabis and John Jumper for protein structure prediction.
    source: https://www.nobelprize.org/prizes/chemistry/2024/summary/
  - date: 2025-07-05
    title: Chai-2 zero-shot antibody design (preprint)
    body: A company technical report claims a 16 percent per-design hit rate across 52 targets without known antibody binders, and at least one binder for about half of targets; not peer reviewed.
    source: https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1
  - date: 2025-11-05
    title: RFantibody published in Nature
    body: Fine-tuned RFdiffusion designs VHHs, scFvs and antibodies to chosen epitopes; initial designs bind with tens to hundreds of nM and OrthoRep maturation reaches single-digit nM.
    source: https://doi.org/10.1038/s41586-025-09721-5
explainer:
  oneLine: AI models that read protein sequences like text and design new proteins, which are then tested in the lab.
  flow:
    - Learn from natural sequences
    - Specify a target or reaction
    - Generate backbones and sequences
    - Filter with predictors
    - Test in the lab
  glossary:
    - term: protein language model
      meaning: A neural network trained to fill in missing letters of protein sequences, which ends up learning what natural proteins look like.
      link: /research/protein-language-models-generative-design
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
    - term: diffusion model
      meaning: A generative model that learns to turn random noise step by step into a realistic output, such as a protein backbone.
      link: https://en.wikipedia.org/wiki/Diffusion_model
    - term: antibody
      meaning: A Y-shaped immune protein that sticks to a specific target; many modern drugs are engineered antibodies.
      link: https://en.wikipedia.org/wiki/Antibody
    - term: enzyme
      meaning: A protein that speeds up a chemical reaction without being used up.
      link: https://en.wikipedia.org/wiki/Enzyme
    - term: directed evolution
      meaning: A lab method that improves a protein by making many random variants and repeatedly keeping the best.
      link: https://en.wikipedia.org/wiki/Directed_evolution
    - term: missense variant
      meaning: A DNA change that swaps one amino acid in a protein for another.
      link: https://en.wikipedia.org/wiki/Missense_mutation
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
  readFirst:
    - title: Nobel Prize in Chemistry 2024 popular information
      url: https://www.nobelprize.org/prizes/chemistry/2024/popular-information/
      why: Explains computational protein design (Baker) and prediction in plain language.
    - title: Protein design (Wikipedia)
      url: https://en.wikipedia.org/wiki/Protein_design
      why: Overview of rational and computational design methods.
    - title: ProteinGym
      url: https://github.com/OATML-Markslab/ProteinGym
      why: See the benchmark and leaderboard for variant-effect predictors.
raw:
  body: "## What it is\n\nTwo linked toolkits. **Protein language models (pLMs)** such as ESM-2 and ESM3 are transformers trained by masked-token prediction on hundreds of millions of natural sequences; their likelihoods and embeddings encode fitness and structure. **Generative design models** produce new backbones and sequences: *RFdiffusion* (a diffusion model fine-tuned from RoseTTAFold that denoises backbone coordinates under conditions such as a target surface or a catalytic motif), *ProteinMPNN* (inverse folding: given a backbone, sample sequences), hallucination/gradient-based pipelines such as *BindCraft* that back-propagate through AlphaFold-class predictors, and multimodal generative models such as ESM3 and Chai-2. Prerequisites: biomolecular structure prediction, diffusion models, and basic protein biophysics.\n\n## The standard design loop\n\n1. Specify a target (a binding epitope, a catalytic geometry, a symmetry).\n2. Generate backbones by diffusion or hallucination.\n3. Design sequences with inverse folding.\n4. **Filter in silico** with an independent structure predictor (self-consistency: predicted vs. designed structure, confidence metrics such as ipAE/ipTM) and physics scores.\n5. Express and test hundreds to thousands of designs by yeast display, binding assays or kinetics; optionally affinity-mature.\n\nStep 4 is the weak point: in-silico success metrics are imperfect proxies for binding or catalysis, so reported \"hit rates\" depend heavily on what is counted and how many designs per target are tested.\n\n## Zero-shot fitness prediction\n\npLM log-likelihood ratios and MSA-based models predict the effect of point mutations. The ProteinGym benchmark (about 217 deep mutational scanning assays and clinical variant sets) tracks Spearman correlation; leaders in 2026 sit near 0.5 average Spearman on substitutions, and performance is much worse for higher-order epistasis and for out-of-distribution proteins. AlphaMissense (2023) adapts AlphaFold to score human missense variants for pathogenicity.\n\n## Techniques to master\n\nDiffusion on SE(3), inverse folding, display-library screening and NGS readout, assay design (kcat/KM, K_D by SPR or BLI), reporting honest hit rates and controls, leakage and memorisation in pLMs.\n\n## Where it bites\n\nOpen problems here: de novo enzymes with native-like kcat/KM and no directed evolution, de novo antibodies to a chosen epitope with drug-like affinity and developability, and clinical-grade calibration of missense-effect predictors."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A protein language model reads huge numbers of natural protein sequences, the way a text model reads books. By practising a fill-in-the-blank game, it learns which amino acid is likely at each spot. That turns out to carry real biological information: spots that the model finds surprising when changed are often the spots where a mutation hurts the protein.

Design models go a step further and invent new proteins. Some start from noise and gradually shape it into a backbone that wraps around a target, like a sculptor chipping a mould for a key. Others take a backbone and propose a sequence that should fold into it.

The catch is testing. A designed protein is only a computer guess until someone makes it in the lab and measures whether it sticks, cuts or folds. Reports of "success rates" depend on how many designs were tested and how success was defined, so they are hard to compare.

The analogy to a sculptor breaks because proteins are not rigid; a design must also move correctly. Open problems here include enzymes as fast as natural ones, antibodies designed to a chosen spot, and telling harmful from harmless genetic changes in patients.

# Student explanation

**Language models for proteins.** A model such as ESM is a transformer trained to predict masked amino acids across hundreds of millions of natural sequences. Its probabilities act like a fitness estimate: the log-likelihood ratio between a mutant and the original residue correlates with experimental measurements of mutational effects, with no task-specific training ("zero-shot"). The ProteinGym benchmark collects over 200 mutational scans to compare such predictors; average rank correlations are only moderate (around 0.5) and fall for combinations of mutations and unusual proteins.

**Generative design.** _RFdiffusion_ is a diffusion model: starting from random coordinates, it repeatedly denoises toward a backbone that satisfies a request (wrap this surface, scaffold this active site). _ProteinMPNN_ performs the reverse of folding, proposing sequences for a given backbone. Other pipelines (BindCraft) tune a sequence by gradient steps through a structure predictor. Typical loop: generate thousands of candidates, filter them with an independent structure predictor and physics scores, then test hundreds in the lab (for example by displaying them on yeast and sorting those that bind a fluorescent target).

**Why evaluation is tricky.** In-silico filters are not the same as binding or catalysis, and a hit rate of 16 percent with 20 designs per target is a different claim from one binder per thousand designs. Memorisation of training proteins can inflate apparent novelty.

**Clinical use.** AlphaMissense adapts a structure model to score every possible single amino-acid change in human proteins; turning scores into evidence that a doctor can rely on needs _calibration_.

**Skills.** Diffusion models, inverse folding, display screening, K_D and kinetics measurements, honest reporting of hit rates and controls.
