---
type: problem
slug: proteome-scale-ppi-specificity-prediction
title: Proteome-scale prediction of which protein pairs directly interact
entry: biomolecular-structure-prediction
status: OPEN
origin: Binary interactome mapping (HuRI, Luck et al. 2020) and AlphaFold-Multimer screens (2021 onward); Predictomes (Schmid and Walter, 2025)
ratings:
  difficulty: 54
  applicationValue: 38
  leverage: 44
workMix:
  theory: 25
  engineering: 15
  compute: 30
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: Schmid and Walter, Predictomes, a classifier-curated database of AlphaFold-modeled protein-protein interactions, Mol. Cell (2025)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11931459/
  - title: Predictomes bioRxiv preprint (2024)
    url: https://www.biorxiv.org/content/10.1101/2024.04.09.588596v1
  - title: Luck et al., A reference map of the human binary protein interactome, Nature (2020)
    url: https://doi.org/10.1038/s41586-020-2188-x
  - title: Abramson et al., AlphaFold 3, Nature (2024)
    url: https://doi.org/10.1038/s41586-024-07487-w
links:
  - to: cofolding-generalisation-unseen-chemotypes-pockets
    kind: BUILDS_ON
    note: Deciding whether two proteins bind requires structure predictors that respond to physics rather than recall known interfaces.
timeline:
  - date: 2020-04-08
    title: HuRI human binary interactome
    body: Luck et al. screen about 17,500 human ORFs systematically and report roughly 53,000 binary interactions among about 8,300 proteins.
    source: https://doi.org/10.1038/s41586-020-2188-x
  - date: 2024-04-09
    title: Predictomes preprint
    body: Shows that AF-Multimer confidence metrics rank true partners poorly against decoys and introduces SPOC.
    source: https://www.biorxiv.org/content/10.1101/2024.04.09.588596v1
  - date: 2025-02-26
    title: Predictomes in Molecular Cell
    body: "Peer-reviewed version: SPOC reaches 50.4% recall at 5% FDR at 128:1 negative-to-positive in a curated test."
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11931459/
explainer:
  oneLine: Working out which pairs of proteins really touch each other, among hundreds of millions of possible pairs.
  flow:
    - Pairs of proteins, millions of them
    - AI draws a complex for each
    - Real contacts are very rare
    - Scores mix real and false ones
    - Add evidence and calibrate
  glossary:
    - term: interactome
      meaning: The map of all physical contacts between proteins in a cell.
      link: https://en.wikipedia.org/wiki/Interactome
    - term: false discovery rate
      meaning: The share of the things a method flags as positive that are actually wrong.
      link: https://en.wikipedia.org/wiki/False_discovery_rate
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: protein
      meaning: A chain of amino acids that folds into a 3D shape and does a job in the cell, such as speeding up a reaction.
      link: https://en.wikipedia.org/wiki/Protein
    - term: Protein Data Bank
      meaning: The public archive of experimentally determined 3D structures of proteins and other molecules, the training data for structure predictors.
      link: https://en.wikipedia.org/wiki/Protein_Data_Bank
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
  readFirst:
    - title: Interactome (Wikipedia)
      url: https://en.wikipedia.org/wiki/Interactome
      why: What a protein interaction map is and how they are measured.
    - title: Predictomes database
      url: https://predictomes.org/
      why: Browse AlphaFold-predicted interactions with confidence classifiers.
    - title: AlphaFold (Wikipedia)
      url: https://en.wikipedia.org/wiki/AlphaFold
      why: Background on the tool whose complex predictions are being screened.
site:
  aiReviewed: true
---

**Task.** For two proteins from a proteome (human, a pathogen, a microbiome), predict whether they form a direct, physiologically relevant physical interaction, and if so the interface, without a known complex or experimental interaction evidence for that pair.

**Why it is not solved by complex structure prediction.** AlphaFold-Multimer and AlphaFold 3 predict the structure of a complex given that the proteins interact. Deciding _whether_ they interact is a classification problem with extreme class imbalance: a human proteome of about 20,000 proteins has about $2\times10^{8}$ unordered pairs, while the number of true direct binary interactions is orders of magnitude smaller. At that prior probability a classifier with a 1% false-positive rate yields thousands of false calls for each true one.

**Concrete target.** On a held-out proteome-wide benchmark with experimentally validated positives (for example systematic binary assays such as Y2H/HuRI-style, cross-linking MS or co-fractionation) and carefully constructed negatives (random pairs plus non-interacting members of the same complexes), a method achieves at least 50% recall at at most 5% false discovery rate at a realistic prevalence (at least 100 negatives per positive), on proteins from species and families excluded from training, and gives calibrated probabilities.

# State of the art

- **Confidence scores are poor classifiers.** Schmid and Walter ("Predictomes", Molecular Cell 2025) show that standard AlphaFold-Multimer confidence metrics (ipTM, pDockQ, avg_models) "do not reliably separate relevant PPIs from an abundance of false positive predictions". In their curated test at a 128:1 negative-to-positive ratio, at 5% FDR the best conventional metric (pDockQ2) recalled 11.3% of positives, their structure-only classifier 42.6% and the SPOC classifier (which adds omics features such as co-expression and localisation) 50.4%. After correcting for AF-Multimer's roughly 40% true-positive rate they estimate an absolute recall of about 20% across all PPIs. About 25% of random protein pairs were predicted to contact each other by their definition, which illustrates the false-positive problem.
- **Ranking within a controlled screen is easier.** Their SPOC classifier ranked a known partner at median rank 1 among about 1,000 decoys, and recovered the functional partners of selected genome-maintenance proteins from proteome-wide screens of more than 20,000 pairs.
- **Experimental validation of novel predictions is limited.** The authors state that large-scale experimental validation of novel predicted pairs is still needed; published follow-ups that test batches of high-confidence predicted pairs in cell-free or cell-based assays report that only a minority validate, but no systematic, independently reported validation rate across methods was confirmed from a primary source for this entry.
- **Experimental baseline.** The largest experimental human binary interactome (HuRI, Luck et al. 2020) screened about 17,500 ORFs and reports roughly 53,000 interactions among about 8,300 proteins; assay sensitivity is itself well below 100%, so ground truth for recall is uncertain.
- **Not shown.** No method reaches the benchmark above with calibration across species in a blind test.

# Applications

Proteome-scale interaction maps would prioritise targets for disrupting host-pathogen interactions, find missing partners of disease proteins, annotate orphan proteins, and filter candidates in proximity-labelling and AP-MS experiments. Even partial progress (higher-precision ranking within a screened subset) is already used to design follow-up experiments.

# Resolution criteria

A refereed, blind benchmark with held-out species or protein families and experimentally generated positives and negatives, in which one method gives at least 50% recall at no more than 5% FDR at a prevalence of at most 1 in 100, with reliability curves showing calibration, and the predicted interfaces agree with experimental structures (DockQ $\ge 0.23$) for most true positives.

# Rating rationale

Research-grade: extreme class imbalance and uncertain ground truth mean the best published classifier reaches about 50% recall at 5% FDR only in curated tests; it is somewhat easier than fold switching (58) because the metric is clear and data are plentiful. Application value 38 (interactome mapping and target biology, concrete for a community but not a deployed industry workflow) and leverage 44 because it would reshape how protein networks are built.

# Work mix rationale

Classification under extreme imbalance needs better statistics, bigger compute for pairwise folding of hundreds of millions of pairs, and validated binary interaction data.

# Verification

One method must reach at least 50% recall at no more than 5% FDR at a prevalence of 1 in 100 or less on a refereed blind benchmark with held-out species or protein families and experimentally generated positives and negatives, with calibration curves and interfaces agreeing with experimental structures.

# Plain explanation

Inside a cell, proteins act in teams and pass messages by touching. Knowing which proteins touch is like having a phone book of who talks to whom, and it helps scientists find disease mechanisms and drug targets.

The AI that predicts protein shapes can also predict how two proteins would fit together. But it is much better at showing how a pair fits if they do touch than at deciding whether they touch at all. Given two random proteins, it will often draw a plausible-looking contact anyway.

That matters because of the numbers. There are about 20,000 human proteins, which makes around 200 million pairs, but only a tiny fraction truly meet. Even a method that is wrong on just one pair in a hundred would produce millions of false alarms and bury the true ones.

Researchers have added extra clues, such as whether two proteins are active in the same cells, and that helps. In one careful test, the best method found about half of the real pairs while keeping false alarms low, but only in a curated test. The goal here is a method that does this across the whole proteome and says how sure it is.

# Student explanation

**Setup.** For proteins $a$ and $b$, predict whether they bind directly in the cell. This is a classification problem with a very low base rate: roughly $2\times10^8$ unordered human pairs versus a true binary interactome that is orders of magnitude smaller. In such a regime, precision is dominated by the false-positive rate; a classifier with a 1 percent false-positive rate generates about two million false calls.

**What AlphaFold-style scores do.** Confidence numbers such as ipTM and pDockQ rank known partners well when compared with a handful of decoys but behave poorly across a whole proteome. In the Predictomes study (Schmid and Walter 2025), about a quarter of random pairs were predicted to make contact, and at a 128-to-1 ratio of negatives to positives the best conventional metric recovered only 11 percent of true interactions at 5 percent false discovery rate. A classifier (SPOC) that added non-structural evidence, such as co-expression and localisation, reached about 50 percent in the same curated test.

**Why ground truth is hard.** Experimental interactome maps miss many true interactions and contain artefacts, so recall cannot be measured exactly. Negatives are not truly known; two proteins that were never observed together may still interact.

**The DARC target.** Calibrated probabilities, at least 50 percent recall at 5 percent false discovery rate at a realistic prevalence (100 or more negatives per positive), on species and families unseen in training, and agreement with experimental interfaces.

**Why it is useful before it is solved.** Even a good ranking within a smaller list of candidates tells experimentalists which pairs to test first.
