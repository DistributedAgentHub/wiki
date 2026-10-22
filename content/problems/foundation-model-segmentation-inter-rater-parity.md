---
type: problem
slug: foundation-model-segmentation-inter-rater-parity
title: Segmentation foundation models matching inter-rater variability on unseen anatomies, pathologies and scanners
entry: medical-image-segmentation
status: OPEN
origin: Medical Segmentation Decathlon (2018-2022), SAM (2023) and its medical adaptations (MedSAM, 2024)
ratings:
  difficulty: 41
  applicationValue: 58
  leverage: 37
workMix:
  theory: 15
  engineering: 30
  compute: 25
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: "Isensee et al., nnU-Net Revisited: A Call for Rigorous Validation in 3D Medical Image Segmentation (arXiv:2404.09556)"
    url: https://arxiv.org/abs/2404.09556
  - title: Ma et al., Segment anything in medical images, Nat. Commun. (2024)
    url: https://doi.org/10.1038/s41467-024-44824-z
  - title: "MedicoSAM: Robust improvement of SAM for medical imaging (arXiv:2501.11734)"
    url: https://arxiv.org/abs/2501.11734
  - title: Can foundation models really segment tumors? A benchmarking odyssey in lung CT imaging (arXiv:2505.01239)
    url: https://arxiv.org/abs/2505.01239
  - title: Prompt-based zero-shot segmentation on brain MRI (arXiv:2506.20786)
    url: https://arxiv.org/abs/2506.20786
  - title: Maier-Hein et al., Metrics reloaded, Nat. Methods (2024)
    url: https://doi.org/10.1038/s41592-023-02151-z
timeline:
  - date: 2021-02-02
    title: nnU-Net
    body: Self-configuring segmentation sets state of the art across many public datasets.
    source: https://doi.org/10.1038/s41592-020-01008-z
  - date: 2024-01-22
    title: MedSAM
    body: Foundation model trained on 1.57 million image-mask pairs, evaluated on 146 tasks.
    source: https://doi.org/10.1038/s41467-024-44824-z
  - date: 2024-04-15
    title: nnU-Net Revisited
    body: Scaled CNN U-Nets beat newer architectures in 3D when validated rigorously.
    source: https://arxiv.org/abs/2404.09556
  - date: 2025-05-02
    title: Lung CT tumour benchmark of foundation models
    body: Reports MedSAM 2 outperforming conventional models on tumour delineation (preprint).
    source: https://arxiv.org/abs/2505.01239
explainer:
  oneLine: One AI model that outlines organs and tumours like human experts on unseen scans, and flags its own failures.
  flow:
    - Scans from many hospitals
    - Model outlines structures
    - Compare to several experts
    - Test on unseen scanners and diseases
    - Alarm when the model is unsure
  glossary:
    - term: image segmentation
      meaning: Labelling every pixel or voxel of an image, for example marking which ones belong to a tumour.
      link: /research/medical-image-segmentation
    - term: Dice score
      meaning: A number from 0 to 1 measuring how much two outlined regions overlap; 1 means identical.
      link: https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient
    - term: U-Net
      meaning: A neural network shaped like the letter U that shrinks an image to understand it and then expands it to label each pixel.
      link: https://en.wikipedia.org/wiki/U-Net
    - term: inter-rater variability
      meaning: The disagreement between two experts who label the same image; it sets a ceiling on how accurate any model can look.
      link: https://en.wikipedia.org/wiki/Inter-rater_reliability
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
    - term: neural network
      meaning: A computer program made of many adjustable numbers that learns patterns from examples instead of following hand-written rules.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
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
    - title: Image segmentation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Image_segmentation
      why: Concepts and uses.
    - title: Segment Anything (Meta AI)
      url: https://github.com/facebookresearch/segment-anything
      why: The general-purpose model that inspired medical versions, with examples.
    - title: Medical Segmentation Decathlon
      url: http://medicaldecathlon.com/
      why: Benchmark of ten medical segmentation tasks.
site:
  aiReviewed: true
---

**Task.** Build one segmentation model (prompted by clicks, boxes or text, or fully automatic) that handles CT, MRI, ultrasound and other modalities and generalises to anatomical structures, pathologies, scanners and institutions absent from training, at the accuracy of independent human experts.

**Concrete target.** On a pre-registered, multi-site benchmark of at least 100 tasks (organs and tumours across at least four modalities, at least ten unseen institutions, at least 20 tasks with structures excluded from training) with at least three independent expert annotations per case: (i) the model's agreement with the expert consensus (Dice and normalised surface distance at a clinically justified tolerance) is statistically non-inferior to the mean agreement of a single human expert with the consensus (non-inferiority margin of 0.02 Dice) on $\ge 95\%$ of tasks; (ii) a per-case failure detector (using only the model's outputs, no ground truth) flags cases with Dice below 0.8 with AUROC $\ge 0.95$ and calibrated predicted Dice (mean absolute error $\le 0.03$); (iii) the interaction burden is at most three prompts per 3D structure; (iv) downstream clinical endpoints (e.g. radiotherapy dose plan acceptability, volumetric measurement error) are not worse than manual contouring.

Inter-rater variability itself sets the ceiling and is task-dependent (small tumours with fuzzy boundaries have much larger disagreement than organs).

# State of the art

- **Specialist models remain strong in 3D.** Isensee et al. ("nnU-Net Revisited", arXiv:2404.09556) found that CNN U-Nets in the nnU-Net framework, scaled, outperform transformer and Mamba architectures, and that many claimed superiority results do not survive rigorous validation.
- **Promptable foundation models.** MedSAM (Nature Communications 2024) trained on about 1.57 million image-mask pairs across 10 modalities and was evaluated on 86 internal and 60 external tasks, reporting better accuracy and robustness than modality-specific specialists. Later systems (MedSAM2, BiomedParse, nnInteractive, SAM-Med3D) extend to 3D and text prompts.
- **Mixed head-to-head evidence.** A comparison in MedicoSAM (arXiv:2501.11734) found SAM-derived models competitive with or slightly better than nnU-Net in 2D while nnU-Net was best in 3D, with SAM-based models failing on two datasets. A lung-CT tumour benchmark (arXiv:2505.01239) reported that foundation models, especially MedSAM 2, outperform conventional models for tumour delineation. A brain MRI study (arXiv:2506.20786) found SAM and SAM 2 reach high Dice only with accurate box prompts and concluded nnU-Net remains dominant because accurate prompts are impractical. All of these are preprints or secondary reports in the sources reviewed.
- **Evaluation gaps.** Metrics Reloaded (Nature Methods 2024) shows that metric choice changes rankings; inter- and intra-observer variability complicates the use of human annotations as a reference (a 2025 Journal of Imaging paper proposes blinded validation designs).
- **Not shown.** No model has been shown non-inferior to inter-rater variability on a broad pre-registered benchmark of unseen tasks with a validated failure detector.

# Applications

A reliable general segmenter would remove the annotation bottleneck for radiotherapy contouring, surgical planning, longitudinal tumour tracking and imaging biomarkers, and make quantitative imaging usable at sites without machine-learning teams. Failure detection is as important as accuracy for safe clinical deployment.

# Resolution criteria

A refereed, pre-registered, multi-site evaluation (organised by a challenge platform such as Grand Challenge or MICCAI) meeting criteria (i)-(iii) with released data, code and annotator-level labels, and a prospective study showing criterion (iv) in at least one clinical workflow.

# Rating rationale

Strong specialist baselines and well-defined tasks make it a hard-but-visible-path problem (41), easier than most others here; what is unproven is generalisation to unseen conditions with reliable failure detection. Application value 58 across oncology and surgical workflows, similar to the IGZO DRAM problem (59); leverage 37 for annotation practice and downstream radiomics.

# Work mix rationale

Needs large annotated multi-site data with multiple raters and engineering for failure detection.

# Verification

A refereed, pre-registered, multi-site evaluation (Grand Challenge or MICCAI) must show criteria (i) to (iii) with released data, code and annotator-level labels; criterion (iv) additionally needs a prospective study in a clinical workflow.

# Plain explanation

Outlining a tumour on a scan is slow work for a doctor, and different doctors outline slightly differently. Computer programs have learned to do it, and the best-known approach, a programme called nnU-Net, is still hard to beat.

The new idea is a general-purpose model that can outline almost anything: you click on a spot or draw a box, and it returns the outline. Several such models, built on Meta's Segment Anything, have been trained on millions of medical images.

The honest picture is mixed. They are strong on flat pictures and handy when a person guides them. On full 3D scans, careful specialist programmes often do as well or better, and the general models can fail on hospitals, scanners or diseases they have not seen, with no warning.

What is needed is a model proven, in a big fair test, to agree with an expert consensus as well as individual experts agree with it, even on new conditions, plus a reliable alarm that flags its own mistakes, so that clinicians can trust it.

# Student explanation

**Task and metrics.** A segmentation assigns a label to each voxel. Overlap is measured by the Dice score $2|A\cap B|/(|A|+|B|)$, and boundary accuracy by surface distances. Because small structures make Dice unstable and annotators disagree, comparison to human variability is essential: a model is 'at human level' if its agreement with the consensus matches what a single expert achieves.

**Specialists.** nnU-Net configures a U-Net automatically for each dataset. Isensee et al. (2024) found that scaled CNN U-Nets beat transformer and Mamba variants in 3D when validated carefully.

**Promptable models.** MedSAM (Nature Communications 2024) trained on about 1.57 million image-mask pairs across 10 modalities and tested on 86 internal and 60 external tasks. MedSAM2, BiomedParse, SAM-Med3D and nnInteractive extend to 3D, text and interactive use. Independent comparisons (preprints) are mixed: SAM-derived models matched nnU-Net in 2D but nnU-Net was best in 3D (MedicoSAM); a lung-CT study reported foundation models, especially MedSAM 2, did better for tumours; a brain MRI study found accurate box prompts were needed and nnU-Net stayed dominant.

**Reliability.** Per-case quality estimation, calibration and out-of-distribution detection are separate research topics: a model can be right on average and still occasionally confidently wrong.

**DARC target.** At least 100 tasks across four modalities and ten unseen institutions, three or more expert labels per case; non-inferior to a single human expert on 95 percent of tasks (margin 0.02 Dice); failure detection AUROC at least 0.95; and no worse clinical endpoints (for example radiotherapy plans).

**Reading a result.** Ask whether test cases came from institutions absent in training, how many prompts were used, whether the comparison included a well-tuned nnU-Net, and whether human variability was measured on the same cases.
