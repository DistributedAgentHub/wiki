---
type: entry
slug: medical-image-segmentation
title: Medical image segmentation
field: computational-medicine
kind: ALGORITHM
status: ACTIVE
summary: Labelling organs, lesions and structures in CT, MRI, ultrasound and pathology images with U-Nets, self-configuring pipelines and promptable foundation models.
reliedOn: Radiotherapy planning, volumetry, surgical planning, radiomics and quantitative imaging biomarkers all depend on segmentations whose reliability must be known.
dependsOn:
  - pytorch
  - transformer-architecture
references:
  - title: "Ronneberger, Fischer, Brox, U-Net: Convolutional Networks for Biomedical Image Segmentation"
    url: https://arxiv.org/abs/1505.04597
    kind: paper
  - title: "Isensee et al., nnU-Net: a self-configuring method for deep learning-based biomedical image segmentation, Nat. Methods (2021)"
    url: https://doi.org/10.1038/s41592-020-01008-z
    kind: paper
  - title: "Isensee et al., nnU-Net Revisited: A Call for Rigorous Validation in 3D Medical Image Segmentation"
    url: https://arxiv.org/abs/2404.09556
    kind: paper
  - title: Ma et al., Segment anything in medical images (MedSAM), Nat. Commun. (2024)
    url: https://doi.org/10.1038/s41467-024-44824-z
    kind: paper
  - title: "Wasserthal et al., TotalSegmentator: robust segmentation of 104 anatomic structures in CT images, Radiol. Artif. Intell. (2023)"
    url: https://doi.org/10.1148/ryai.230024
    kind: paper
  - title: "Maier-Hein et al., Metrics reloaded: recommendations for image analysis validation, Nat. Methods (2024)"
    url: https://doi.org/10.1038/s41592-023-02151-z
    kind: paper
  - title: Antonelli et al., The Medical Segmentation Decathlon, Nat. Commun. (2022)
    url: https://doi.org/10.1038/s41467-022-30695-9
    kind: paper
timeline:
  - date: 2015-05-18
    title: U-Net
    body: Skip-connected encoder-decoder trained with heavy augmentation on very few annotated images.
    source: https://arxiv.org/abs/1505.04597
  - date: 2021-02-02
    title: nnU-Net
    body: Self-configuring segmentation pipeline outperforms bespoke methods across 23 public datasets.
    source: https://doi.org/10.1038/s41592-020-01008-z
  - date: 2024-01-22
    title: MedSAM
    body: SAM fine-tuned on about 1.57 million image-mask pairs across 10 modalities, evaluated on 86 internal and 60 external tasks.
    source: https://doi.org/10.1038/s41467-024-44824-z
  - date: 2024-04-15
    title: nnU-Net Revisited
    body: Rigorous comparison finds that scaled CNN U-Nets beat transformer and Mamba variants in 3D medical segmentation.
    source: https://arxiv.org/abs/2404.09556
explainer:
  oneLine: Teaching computers to outline organs and tumours in medical scans.
  flow:
    - Scan from CT or MRI
    - Network labels each voxel
    - Compare with expert outline
    - Check on unseen hospitals
    - Flag cases where it fails
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
    - term: neural network
      meaning: A computer program made of many adjustable numbers that learns patterns from examples instead of following hand-written rules.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: inter-rater variability
      meaning: The disagreement between two experts who label the same image; it sets a ceiling on how accurate any model can look.
      link: https://en.wikipedia.org/wiki/Inter-rater_reliability
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
  readFirst:
    - title: Image segmentation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Image_segmentation
      why: Concepts and methods, including medical uses.
    - title: U-Net (Wikipedia)
      url: https://en.wikipedia.org/wiki/U-Net
      why: Why this network shape suits small medical datasets.
    - title: Medical Segmentation Decathlon
      url: http://medicaldecathlon.com/
      why: The multi-task benchmark that shaped general medical segmentation.
site:
  published: true
  aiReviewed: true
---

## What it is

Assign a class to every pixel or voxel of a medical image. Targets range from organs (CT multi-organ) to tumours and sub-structures (MRI brain), to cells in histology. Quality is measured against human reference annotations, which themselves differ between annotators (inter-rater variability), so the practical ceiling is not 100 percent overlap.

## The core machinery

**U-Net** (Ronneberger et al. 2015): an encoder-decoder with skip connections and a per-pixel loss, typically Dice plus cross-entropy, where $\text{Dice}=2|A\cap B|/(|A|+|B|)$. **nnU-Net** (Isensee et al. 2021) automates the pipeline (preprocessing, patch size, architecture, training, post-processing) from dataset statistics and has won or tied most public challenges; the 2024 "nnU-Net Revisited" study found that newer transformer and Mamba architectures did not beat a well-tuned, scaled CNN U-Net in 3D.

**Foundation models.** SAM (2023) introduced promptable segmentation; MedSAM, SAM-Med3D, MedSAM2, BiomedParse and nnInteractive adapt this to medical data with box, click or text prompts, aiming at a single model that works across modalities and anatomies. Whole-body CT labelling (TotalSegmentator) is the best-established general-purpose product.

## Evaluation is half the field

Overlap (Dice) and boundary metrics (Hausdorff, NSD) behave differently for small lesions; Metrics Reloaded (Maier-Hein et al. 2024) gives principles for metric choice. Leakage across patients, scanners and sites, annotation drift and prevalence shift produce optimistic results. Reliable systems also need per-case quality estimates and out-of-distribution detection.

## Techniques to master

Convolutional and transformer segmentation networks, loss design for class imbalance, data augmentation, domain adaptation, uncertainty quantification and calibration, conformal prediction for set-valued segmentations, and clinical endpoint validation (e.g. dose planning impact).

## Where it bites

One open problem: a single model that, on previously unseen anatomies, pathologies, scanners and modalities, performs within the range of expert inter-rater variability, with reliable detection of its own failures.

# Plain explanation

When a radiologist looks at a scan, they mentally separate organs, vessels and tumours. For many tasks the outline must be drawn precisely: a radiotherapy team needs to know exactly where a tumour ends so the beam avoids healthy tissue. Drawing these outlines by hand can take hours per patient.

Segmentation software colours every tiny dot of the image with a label such as liver, tumour or background. Modern programs learn from many scans that experts have outlined. A design called U-Net, and its self-tuning version nnU-Net, became the workhorse. More recently, general-purpose models, inspired by Meta's Segment Anything, let a user click or draw a box and get an outline on almost any image.

How good is good enough? Two experts rarely draw the same outline, especially for fuzzy tumours, so a perfect score is not even meaningful. A key question is whether one model can be trusted on scanners, hospitals and diseases it has never seen, and whether it can warn us when it is wrong. Careful tests show that older, carefully tuned programs are still hard to beat in 3D scans.

# Student explanation

**The task.** Assign a class to every pixel (2D) or voxel (3D). The loss is typically cross-entropy plus a Dice term. The Dice score between predicted region $A$ and reference $B$ is $2|A\cap B|/(|A|+|B|)$; for boundary quality one also uses surface distances. Small lesions make Dice unstable, so metric choice matters (the Metrics Reloaded recommendations).

**Architectures.** U-Net: an encoder reduces resolution while increasing feature channels; a decoder upsamples, with skip connections passing fine detail across. nnU-Net automatically configures preprocessing, patch size, network depth and post-processing from dataset statistics and won many challenges. The 2024 "nnU-Net Revisited" study concluded that scaled CNN U-Nets still beat transformer and Mamba-based alternatives in 3D when validated rigorously.

**Foundation models.** SAM shows that a promptable model can segment anything in natural images; MedSAM and relatives fine-tune it on medical images with box, click or text prompts. Results are mixed: strong in 2D and for prompted tumours, weaker than nnU-Net in several 3D tasks, and they need accurate prompts.

**Evaluation traps.** Patients appearing in both training and test sets; different scanners; annotators who disagree; models that confidently fail on unseen conditions. Reliable per-case failure detection, using uncertainty and calibration, is as important as average accuracy.

**Skills.** Convolutional and transformer networks, class imbalance, augmentation, domain shift, calibration, clinical validation.

**Try it.** Run the free TotalSegmentator tool on a public CT scan, then compare its organ outlines with a second tool using the Dice score; you will see that agreement is high for large organs and much lower for thin or small structures.
