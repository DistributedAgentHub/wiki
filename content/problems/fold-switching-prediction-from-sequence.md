---
type: problem
slug: fold-switching-prediction-from-sequence
title: Predicting fold-switching proteins and both of their folds from sequence
entry: biomolecular-structure-prediction
status: OPEN
origin: "Fold-switching ('metamorphic') proteins: Murzin, 2008 (Science, 'Metamorphic proteins'); AlphaFold-era failure documented by Chakravarty and Porter, 2022"
ratings:
  difficulty: 58
  applicationValue: 12
  leverage: 30
workMix:
  theory: 40
  engineering: 10
  compute: 20
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: Chakravarty and Porter, AlphaFold2 fails to predict protein fold switching, Protein Sci. (2022)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9134877
  - title: Chakravarty et al., AlphaFold predictions of fold-switched conformations are driven by structure memorization, Nat. Commun. 15, 7296 (2024)
    url: https://doi.org/10.1038/s41467-024-51801-z
  - title: Wayment-Steele et al., Predicting multiple conformations via sequence clustering and AlphaFold2, Nature (2024)
    url: https://doi.org/10.1038/s41586-023-06832-9
  - title: Schafer et al., Sequence clustering confounds AlphaFold2 (preprint)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10836070/
  - title: Chakravarty and Porter, Fold-switching proteins (review, arXiv:2507.10839)
    url: https://arxiv.org/abs/2507.10839
  - title: Modeling Alternative Conformational States in CASP16 (bioRxiv preprint)
    url: https://www.biorxiv.org/content/10.1101/2025.09.02.673835v1
  - title: Uncovering distinct protein conformations using coevolutionary information and AlphaFold (bioRxiv preprint, Oct 2025)
    url: https://www.biorxiv.org/content/10.1101/2025.10.08.681198
timeline:
  - date: 2022-05-01
    title: AlphaFold2 fails on fold switchers
    body: Chakravarty and Porter test 98 fold-switching proteins and show AF2 mostly predicts a single fold.
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC9134877
  - date: 2024-01-01
    title: AF-Cluster samples alternate states
    body: MSA clustering lets AF2 sample both folds of KaiB, RfaH and others; a later preprint shows false positives on non-switching KaiB homologs.
    source: https://doi.org/10.1038/s41586-023-06832-9
  - date: 2024-08-24
    title: Memorisation explains many AF successes
    body: "Over 280,000 models: 35% success for likely-trained fold switchers, 1 of 7 outside the training set."
    source: https://doi.org/10.1038/s41467-024-51801-z
  - date: 2025-07-14
    title: Annual Review of Biophysics review
    body: Review estimates nearly 100 characterised fold switchers and up to 4% of PDB entries.
    source: https://arxiv.org/abs/2507.10839
  - date: 2025-09-02
    title: CASP16 ensembles experiment
    body: Both states reproduced fully or partly for roughly half of the multi-state targets; enhanced-sampling AF2 variants worked best.
    source: https://www.biorxiv.org/content/10.1101/2025.09.02.673835v1
explainer:
  oneLine: Some proteins can fold into two different shapes; current AI mostly finds only one.
  flow:
    - "Most proteins: one sequence, one fold"
    - Switchers have two stable shapes
    - Evolution clue for second shape is weak
    - AI recalls the common shape
    - Need a test it cannot memorise
  glossary:
    - term: protein
      meaning: A chain of amino acids that folds into a 3D shape and does a job in the cell, such as speeding up a reaction.
      link: https://en.wikipedia.org/wiki/Protein
    - term: protein folding
      meaning: The process by which a protein chain curls up into its working 3D shape.
      link: https://en.wikipedia.org/wiki/Protein_folding
    - term: sequence alignment
      meaning: Lining up related protein or DNA sequences letter by letter so that matching positions can be compared.
      link: https://en.wikipedia.org/wiki/Multiple_sequence_alignment
    - term: coevolution
      meaning: Positions in a protein that touch each other tend to mutate together over evolution, so correlated changes hint at which positions are in contact.
      link: https://en.wikipedia.org/wiki/Direct_coupling_analysis
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: Protein Data Bank
      meaning: The public archive of experimentally determined 3D structures of proteins and other molecules, the training data for structure predictors.
      link: https://en.wikipedia.org/wiki/Protein_Data_Bank
    - term: CASP
      meaning: A blind contest held every two years where groups predict protein structures that experimentalists have solved but not yet published.
      link: https://en.wikipedia.org/wiki/CASP
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
  readFirst:
    - title: "Quanta: Proteins that change shape (metamorphic proteins)"
      url: https://www.quantamagazine.org/
      why: Magazine background on proteins with multiple folds; search for 'metamorphic'.
    - title: Metamorphic protein (Wikipedia)
      url: https://en.wikipedia.org/wiki/Metamorphic_protein
      why: Short definition and key examples.
    - title: Fold-switching proteins review (Chakravarty and Porter)
      url: https://arxiv.org/abs/2507.10839
      why: Open-access review for those ready to read a specialist article.
raw:
  body: "Some proteins reversibly remodel their secondary and/or tertiary structure in response to a cellular stimulus (ligand, redox state, oligomerisation, temperature, a binding partner): examples are RfaH (an alpha-helical C-terminal domain that refolds to a beta-barrel), KaiB, lymphotactin, and the bacterial transcription factor NusG family. Nearly 100 have been characterised experimentally, and an estimated up to 4% of PDB entries may switch folds.\n\n**Task.** Given only the amino-acid sequence (and its homologs), (i) decide whether the protein has two or more stable, functionally distinct folds that differ in secondary structure or topology, and (ii) predict the atomic structure of each, with qualitative population/trigger information.\n\n**A concrete benchmark.** Let $\\mathcal F$ be experimentally confirmed fold switchers whose second fold was first deposited after the model's training cut-off *and* that have no homologous fold-switcher in training (for example no sequence identity above 30% to any training chain with either fold). Let $\\mathcal N$ be a matched set of single-fold proteins that includes close homologs of fold switchers that are known not to switch (KaiB-like sequences are a documented trap for MSA-clustering methods). The problem is solved when one method, run without target-specific tuning or knowledge of the alternative fold, recovers both folds (TM-score $\\ge 0.8$ to each experimental structure for the correct fold pair) for at least 70% of $\\mathcal F$ while flagging no more than 5% of $\\mathcal N$ as switchers.\n\nThe difficulty is that current co-evolution-based predictors encode the dominant fold of a sequence family, and the alternative fold often leaves only a weak evolutionary signal that is hard to separate from noise or from the dominant fold's signal."
site:
  aiReviewed: true
---

# State of the art

- **AlphaFold2 default behaviour.** Chakravarty and Porter (Protein Science, 2022) tested 98 fold-switching proteins and found AlphaFold2 predicts only one of the two folds for most; confidence scores favoured the wrong state ("AlphaFold2 fails to predict protein fold switching").
- **MSA manipulation.** Wayment-Steele et al. (Nature 2024) showed that clustering the MSA by sequence similarity (AF-Cluster) lets AF2 sample alternate states of known metamorphic proteins (KaiB, RfaH, others). Schafer et al. (preprint, 2024) reported the method also predicts spurious switches for KaiB homologs that experimentally do not switch, and other groups found random sampling can match clustering.
- **Memorisation.** Chakravarty et al. (Nature Communications 2024) pooled over 280,000 AF2 and AF3 models: for fold switchers likely present in the training set the success rate was 35%, but AlphaFold captured only 1 of 7 experimentally confirmed fold switchers outside its training sets despite extensive sampling; AF3 was reported to mis-assign coevolutionary restraints.
- **CASP16 (2024).** In the first ensemble-style experiment with multiple conformational states, full or partial success on both states was reached for about half of the targets, and the best groups ran many AlphaFold2 models with enhanced MSAs and sampling (bioRxiv preprint; the AlphaFold3 server also did well on several targets).
- **Reviews and preprints.** A 2025 review by Chakravarty and Porter (arXiv:2507.10839) summarises that evolution has selected for dual-folding in some families and that the models fail even when coevolutionary signal for both folds is present in the MSA. A bioRxiv preprint (Oct 2025) proposes modifying AF2's coevolutionary input to uncover distinct conformations; it has not been refereed.
- **No method meets the benchmark above** as of October 2026 in sources reviewed; reported successes depend on known examples or on training-set overlap.

# Applications

Reliable fold-switch detection would flag drug targets whose binding pockets exist only in one state (as for the KaiB clock protein or some transcription factors), improve annotation of unannotated genomes (a switched fold changes function), and give a testbed for any method that claims to model protein energy landscapes. No near-term clinical deployment is claimed.

# Resolution criteria

A peer-reviewed, prospective blind evaluation (CASP/CAMEO-style, or a pre-registered test on newly solved structures) in which a single method meets the benchmark above: both folds correct (TM-score $\ge 0.8$) for at least 70% of held-out fold switchers with at most 5% false positives among single-fold controls, with code and weights released.

# Rating rationale

Research-grade (50-69): the leading predictors are documented to fail outside memorised examples, and workarounds are disputed, but benchmarks are clear and progress is active. It sits above the 3D core-collapse explosion-energy problem (50) because no method works prospectively, and far below the defining open problems of other fields. Application value 12 matches niche target biology (compare dark-matter detection spin-offs at 14); leverage 30 reflects that success would mostly inform multi-state prediction rather than gate a programme.

# Work mix rationale

The central need is a model of why a sequence can encode two folds and how to detect weak coevolutionary signal for the minor fold, plus more experimentally verified fold switchers to train and test on.

# Verification

A single method must pass a prospective blind evaluation (CASP/CAMEO-style or a pre-registered test on newly solved structures) with both folds correct (TM-score 0.8 or higher) for at least 70% of held-out fold switchers and at most 5% false positives among single-fold controls, with code and weights released so the evaluation can be rerun.

# Plain explanation

Usually one protein chain folds into one shape. A small number of proteins are different: they can switch between two quite different shapes depending on conditions, such as temperature or what they are bound to, and each shape does a different job. One famous example in bacteria is a protein whose tail is a coil in one state and a flat sheet in another.

AlphaFold-style programs are trained to give the single most likely shape. Tests on dozens of known switching proteins showed they usually return just one of the two, and when they seem to find both, the protein is often one they had memorised from their training data.

The open problem is to look at an unfamiliar sequence and say: this protein probably switches, here are both shapes. Nobody can do that reliably yet.

Why is it hard? The evolutionary clues the programs rely on are mostly about the common shape. The clue for the second shape is weak and mixed in with the first. And there are only around a hundred confirmed examples to learn from and test on, so it is easy to fool oneself.

# Student explanation

**What is being asked.** A fold-switching protein populates two or more folds that differ in secondary structure or topology, with a trigger such as a ligand, redox state or binding partner (examples: RfaH, KaiB, lymphotactin). The task is to decide from sequence alone whether a protein switches and to predict both folds.

**Why predictors miss them.** AlphaFold models read an alignment of related sequences. The pairs of residues that co-vary tell which contacts exist, but the co-variation signal of a rare second fold is faint compared with the dominant one. Tests (Chakravarty and Porter 2022; Chakravarty et al. 2024) found that default AlphaFold2 mostly returns one fold; pooling over 280,000 models, success was 35 percent for switchers likely present in the training set, but only 1 of 7 for switchers outside it, suggesting memorisation.

**Workarounds and their cost.** Clustering the alignment by similarity (AF-Cluster) lets AlphaFold2 produce the alternative folds for several known switchers, but a follow-up found that it also predicts a spurious switch for a protein family that does not switch. This is the trade-off between finding real switchers (sensitivity) and avoiding false alarms (specificity). At the blind CASP16 experiment, groups that sampled AlphaFold2 many times with modified alignments did best, and both states were reproduced for roughly half of the targets.

**Why a clean benchmark is hard.** A test needs switchers whose second fold was published after the model's training cut-off, with no close relatives in training, plus non-switching close relatives as negatives.

**A target.** The DARC statement asks for at least 70 percent of held-out switchers correct (both folds) with at most 5 percent false positives.
