---
type: problem
slug: missense-variant-effect-calibrated-clinical-grade
title: Clinically calibrated missense variant effect prediction that is robust across genes and ancestries
entry: protein-language-models-generative-design
status: OPEN
origin: ACMG/AMP variant classification (Richards et al., 2015); calibration for PP3/BP4 evidence (Pejaver et al., 2022); AlphaMissense (2023)
ratings:
  difficulty: 43
  applicationValue: 66
  leverage: 47
workMix:
  theory: 25
  engineering: 15
  compute: 20
  empirical: 40
verification:
  route: REPRODUCTION
sources:
  - title: Cheng et al., Accurate proteome-wide missense variant effect prediction with AlphaMissense, Science (2023)
    url: https://doi.org/10.1126/science.adg7492
  - title: Pejaver et al., Calibration of computational tools for missense variant pathogenicity classification and ClinGen recommendations for PP3/BP4 criteria, AJHG (2022)
    url: https://doi.org/10.1016/j.ajhg.2022.10.013
  - title: Richards et al., Standards and guidelines for the interpretation of sequence variants (ACMG/AMP), Genet. Med. (2015)
    url: https://doi.org/10.1038/gim.2015.30
  - title: "Frontiers in Genetics (2024): AlphaMissense and VUS reclassification across 59 genes"
    url: https://www.frontiersin.org/articles/10.3389/fgene.2024.1487608/full
  - title: "Imprecision medicine: systematic gaps in reporting VUS and their reclassifications (Genet. Med., 2025)"
    url: https://pubmed.ncbi.nlm.nih.gov/40542645/
  - title: Notin et al., ProteinGym
    url: https://github.com/OATML-Markslab/ProteinGym
links:
  - to: boltzmann-ensemble-prediction-multistate-proteins
    kind: BUILDS_ON
    note: Item (iv) asks to separate loss-of-function, mostly from destabilisation (ΔΔG of folding), from gain-of-function variants that shift conformational equilibria; both are read off population changes that ensemble predictors such as BioEmu aim to give for mutants.
  - to: proteome-scale-ppi-specificity-prediction
    kind: BUILDS_ON
    note: Dominant-negative and many gain-of-function missense variants are mildly destabilising and enriched at protein–protein interfaces (Gerasimavicius et al. 2022), so classifying mechanism needs knowledge of which partners a protein binds and where.
timeline:
  - date: 2015-03-05
    title: ACMG/AMP guidelines
    body: Standard five-tier framework including PP3/BP4 computational evidence criteria.
    source: https://doi.org/10.1038/gim.2015.30
  - date: 2022-11-03
    title: ClinGen calibration of predictors
    body: Pejaver et al. map tool scores to evidence strengths and recommend thresholds.
    source: https://doi.org/10.1016/j.ajhg.2022.10.013
  - date: 2023-09-19
    title: AlphaMissense
    body: Predictions for 71 million variants released with 89% classified.
    source: https://doi.org/10.1126/science.adg7492
  - date: 2024-11-01
    title: Independent AlphaMissense VUS study
    body: Sensitivity 92% and specificity 78%; 56 of 4,085 VUS became likely pathogenic when AlphaMissense was added.
    source: https://www.frontiersin.org/articles/10.3389/fgene.2024.1487608/full
explainer:
  oneLine: Telling whether a single-letter DNA change in a patient is harmful, with probabilities doctors can trust.
  flow:
    - Patient has a protein-altering change
    - Model scores damage
    - Calibrate score to evidence
    - Check on held-out experiments
    - Report equal accuracy for all groups
  glossary:
    - term: missense variant
      meaning: A DNA change that swaps one amino acid in a protein for another.
      link: https://en.wikipedia.org/wiki/Missense_mutation
    - term: variant of uncertain significance
      meaning: A genetic change found in a patient for which doctors cannot yet say whether it causes disease.
      link: https://en.wikipedia.org/wiki/Variant_of_uncertain_significance
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: protein language model
      meaning: A neural network trained to fill in missing letters of protein sequences, which ends up learning what natural proteins look like.
      link: /research/protein-language-models-generative-design
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: mutation
      meaning: A change in the letters of DNA.
      link: https://en.wikipedia.org/wiki/Mutation
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
  readFirst:
    - title: Missense mutation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Missense_mutation
      why: What a missense change is.
    - title: Variant of uncertain significance (Wikipedia)
      url: https://en.wikipedia.org/wiki/Variant_of_uncertain_significance
      why: Why uncertain results are a clinical problem.
    - title: Calibration (statistics) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Calibration_(statistics)
      why: What it means for a probability to be trustworthy.
site:
  aiReviewed: true
---

A large share of missense variants found in patients are classified as variants of uncertain significance (VUS), for which no clinical action is possible. Computational predictors supply supporting evidence (ACMG/AMP criteria PP3 for pathogenic and BP4 for benign), but conversion of a score to a _calibrated_ strength of evidence differs by tool and gene.

**Task.** Produce, for every possible human missense variant, a score with a calibrated posterior probability of pathogenicity that is valid across genes and across genetic ancestry groups, and flag when it is uncertain.

**Concrete target.** On held-out clinical-grade and functional ground truth, not used in training and not circular (new ClinVar submissions with expert-panel review after a cut-off date, plus saturation genome editing / multiplexed assays of variant effect (MAVE) for at least 50 genes): (i) after Bayesian calibration to ACMG/AMP evidence levels (Tavtigian framework), at least 'moderate' evidence strength (odds of pathogenicity $\ge 4.3{:}1$) for $\ge 50\%$ of variants in known disease genes, with an empirically verified false-assertion rate $\le 5\%$ at that threshold; (ii) coverage-adjusted accuracy not differing by more than 3 percentage points between genetic ancestry groups (accounting for ClinVar submission bias); (iii) gene-agnostic: no per-gene retraining; (iv) separation of loss-of-function from gain-of-function and dominant-negative mechanisms for at least 80% of variants in genes where the mechanism is known.

# State of the art

- **AlphaMissense (Science 2023).** Scores all 71 million possible human missense variants and classifies 89% as likely benign or likely pathogenic, trained without human clinical labels. Independent evaluations are mixed: in a 2024 study of 5,845 missense variants in 59 genes, a manual ACMG review yielded 4,085 VUS; AlphaMissense had sensitivity 92% and specificity 78% for pathogenicity, adding it as evidence changed the evidence quantification for 878 variants, 56 of which became likely pathogenic. A calibration study summarised by the Broad Institute found AlphaMissense can reach strong evidence for pathogenicity, though for few variants, and at best modest improvements over previously recommended tools in the trade-off between evidence strength and false positives.
- **Calibration framework.** Pejaver et al. (AJHG 2022) set ClinGen-endorsed calibrations for PP3/BP4 for several tools; only a limited set reach moderate or strong evidence.
- **Zero-shot protein language models.** On ProteinGym, a standard suite of deep mutational scanning assays and clinical substitution sets, leading zero-shot models reach only moderate rank correlation with measured effects (the leaderboard is live and no single figure is quoted here); performance degrades for higher-order epistasis and for orphan proteins with shallow alignments.
- **Disparity.** The burden of VUS differs across groups: a 2025 Genetics in Medicine analysis found the ratio of VUS to pathogenic variants varied about 3-fold by self-reported race and over 14-fold by testing indication. This describes reporting patterns, not predictor error by ancestry, which has not been established.
- **Not shown.** No predictor has met the calibration, gene-agnostic and ancestry-robust criteria in a held-out evaluation in sources reviewed.

# Applications

Reclassifying VUS would change clinical management for cancer predisposition, cardiomyopathy, epilepsy and other monogenic disorders, reduce diagnostic odysseys, and shrink the inequity in how many patients receive a definitive result. It also guides which variants to test experimentally.

# Resolution criteria

A ClinGen-endorsed (or equivalent) calibration of a single predictor showing at least moderate evidence strength for at least 50% of missense variants in known disease genes at the verified false-assertion rate, validated on post-cut-off expert-reviewed and MAVE data, with ancestry-stratified accuracy reported and within 3 percentage points.

# Rating rationale

Much of the machinery exists (AlphaMissense, ClinGen calibration), and the remaining work is calibration, circularity control and equity, so difficulty (43) is lower than the structure problems. Application value 66 reflects clinical genetics decisions for millions of patients, broad impact on a deployed practice; leverage 47 because it reshapes guideline-level variant interpretation more than other computational fields.

# Work mix rationale

Calibration needs high-quality, non-circular clinical and functional ground truth across genes and ancestries, plus methodology for mechanism-aware predictions.

# Verification

A single predictor must receive a ClinGen-endorsed (or equivalent) calibration giving at least moderate evidence strength for at least 50% of missense variants in known disease genes at the verified false-assertion rate, validated on post-cutoff expert-reviewed and MAVE data, with ancestry-stratified accuracy reported.

# Plain explanation

When doctors sequence a patient's genes, they often find a change that swaps one building block of a protein for another. Many of these changes are harmless, some cause disease, and for a large share nobody knows. Those are called variants of uncertain significance, and they leave patients without an answer.

Computer programs can score how damaging each possible change is. One of the best known, AlphaMissense, rated every possible swap in human proteins and sorted 89 percent of them as likely harmless or likely harmful. But a doctor needs more than a rank: they need to know how much weight a score deserves, and whether it is equally reliable for every gene and every ancestry.

Studies show the scores help but are uneven. They make strong statements for only some variants, and the research data used to test them are biased towards well-studied genes and towards people of European ancestry.

The aim is a score that is honest about its confidence: when it says 90 percent harmful, it is right about 90 percent of the time, for all genes and for all groups of people.

# Student explanation

**Clinical context.** The ACMG/AMP guidelines classify variants as pathogenic, likely pathogenic, uncertain, likely benign or benign by combining criteria. Computational predictions count as supporting evidence (PP3 for damaging, BP4 for benign). Tavtigian and colleagues expressed the framework as Bayesian: each evidence level corresponds to a likelihood ratio, with 'moderate' at about 4.3 to 1 odds of pathogenicity.

**Calibration.** A score only becomes evidence after mapping it to a likelihood ratio using variants of known status. Pejaver and colleagues (2022) did this for several tools for ClinGen. Calibrating on ClinVar labels raises two problems: the labels may themselves have used the predictors (circularity), and ClinVar over-represents some genes and ancestries.

**AlphaMissense.** An AlphaFold-based model fine-tuned on population frequency data to predict pathogenicity, with predictions for 71 million possible variants. Independent evaluation on 5,845 variants in 59 genes found sensitivity of 92 percent and specificity of 78 percent, and using it as evidence moved 56 of 4,085 uncertain variants to likely pathogenic. A calibration study found it reaches strong evidence for only a limited number of variants.

**Other tools.** Protein language models score variants zero-shot without clinical labels; on the ProteinGym benchmark (deep mutational scans plus clinical sets) the leading models reach only moderate rank correlation with measured effects, and the live leaderboard is the place to check current numbers.

**Equity.** Rates of uncertain results differ by about three-fold across self-reported race categories in one study; this reflects reporting patterns, and the effect on predictor accuracy is not established.

**DARC target.** At least moderate evidence for at least half of missense variants in disease genes, false assertion rate at most 5 percent on held-out expert-reviewed and experimental data, and ancestry differences within 3 percentage points.
