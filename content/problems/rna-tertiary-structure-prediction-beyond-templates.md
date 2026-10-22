---
type: problem
slug: rna-tertiary-structure-prediction-beyond-templates
title: De novo RNA tertiary structure prediction for targets without templates
entry: biomolecular-structure-prediction
status: OPEN
origin: RNA-Puzzles (2012 onward) and the CASP15/CASP16 RNA categories (2022, 2024)
ratings:
  difficulty: 56
  applicationValue: 24
  leverage: 33
workMix:
  theory: 30
  engineering: 15
  compute: 15
  empirical: 40
verification:
  route: REPRODUCTION
sources:
  - title: Abriata and Dal Peraro, Practical outcomes from CASP16 for users in need of biomolecular structure prediction (preprint)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750028/
  - title: Elofsson, AlphaFold3 at CASP16 (Proteins, 2026)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750027/
  - title: Modeling Alternative Conformational States in CASP16 (bioRxiv preprint)
    url: https://www.biorxiv.org/content/10.1101/2025.09.02.673835v1
  - title: Template-based RNA structure prediction advanced through a blind code competition (Stanford RNA 3D Folding, preprint)
    url: https://mdsoar.org/items/6f08dadb-2f2e-4d7a-9068-8b2b2cc7922d/full
  - title: "Das lab news (Stanford): RNA 3D folding competition and Ribonanza"
    url: https://daslab.stanford.edu/news/
  - title: Abramson et al., Accurate structure prediction of biomolecular interactions with AlphaFold 3, Nature (2024)
    url: https://doi.org/10.1038/s41586-024-07487-w
links:
  - to: boltzmann-ensemble-prediction-multistate-proteins
    kind: RELATED
    note: CASP16 lists RNA and multi-state assemblies as the shared failure point of structure and ensemble prediction.
timeline:
  - date: 2024-12-01
    title: CASP16 RNA assessments
    body: AF3-class models do not clearly surpass template-based or expert-guided approaches on RNA; clashes are common in multimer outputs.
    source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750027/
  - date: 2025-09-02
    title: "CASP16 ensembles: RNA among hardest targets"
    body: Three RNA targets and oligomeric RNA states stayed below TM-score 0.75.
    source: https://www.biorxiv.org/content/10.1101/2025.09.02.673835v1
  - date: 2025-12-30
    title: Kaggle RNA 3D folding, part 1 analysed (preprint)
    body: 1,700+ teams, 43 unreleased structures; top template-based strategies matched CASP16 winners within error.
    source: https://mdsoar.org/items/6f08dadb-2f2e-4d7a-9068-8b2b2cc7922d/full
  - date: 2026-01-07
    title: Kaggle RNA 3D folding, part 2 opens
    body: Hidden targets include cryo-EM structures of new-to-nature RNA folds, small-molecule and protein complexes, and assemblies up to 6,000 nt; closed 25 March 2026.
    source: https://daslab.stanford.edu/news/
explainer:
  oneLine: Predicting the 3D shape of an RNA molecule when no similar shape has been seen before.
  flow:
    - RNA chain folds around ions
    - Few solved shapes to learn from
    - Models copy known templates
    - New folds expose the weakness
    - Need template-free accuracy
  glossary:
    - term: RNA
      meaning: A chain of nucleotides related to DNA that carries genetic messages and also folds into 3D shapes that do jobs of their own.
      link: https://en.wikipedia.org/wiki/RNA
    - term: Protein Data Bank
      meaning: The public archive of experimentally determined 3D structures of proteins and other molecules, the training data for structure predictors.
      link: https://en.wikipedia.org/wiki/Protein_Data_Bank
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: CASP
      meaning: A blind contest held every two years where groups predict protein structures that experimentalists have solved but not yet published.
      link: https://en.wikipedia.org/wiki/CASP
    - term: cryo-EM
      meaning: A microscope technique that freezes molecules and images them in thousands of copies to reconstruct their 3D shape.
      link: https://en.wikipedia.org/wiki/Cryogenic_electron_microscopy
    - term: coevolution
      meaning: Positions in a protein that touch each other tend to mutate together over evolution, so correlated changes hint at which positions are in contact.
      link: https://en.wikipedia.org/wiki/Direct_coupling_analysis
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
  readFirst:
    - title: RNA (Wikipedia)
      url: https://en.wikipedia.org/wiki/RNA
      why: Background on RNA types and functions.
    - title: Riboswitch (Wikipedia)
      url: https://en.wikipedia.org/wiki/Riboswitch
      why: A key example of structured RNA that senses small molecules.
    - title: "Das lab, Stanford: RNA 3D folding news"
      url: https://daslab.stanford.edu/news/
      why: Updates on the RNA folding competitions from the lab that runs them.
site:
  aiReviewed: true
---

**Task.** For an RNA (or protein-free RNA complex) of 50 to 500 nucleotides whose 3D fold has no detectable homolog or structural template in the PDB (a "new-to-nature" fold), predict the all-atom tertiary structure from sequence, including the non-canonical base pairs, multi-helix junction geometry and long-range tertiary contacts.

**Concrete target.** On a blind set of at least 30 targets released after the training cut-off and filtered so that no template with TM-score(RNA) $> 0.45$ against the target (US-align) exists in the training data, a single method achieves median RMSD $\le 5$ Å over all heavy atoms (or equivalently median TM-score $\ge 0.6$) and an interaction network fidelity (INF-all) of at least 0.7 for at least 50% of targets, while producing physically valid models (no steric clashes, bond lengths/angles in range) for at least 95% of predictions without relaxation.

RNA is hard because (i) there are far fewer experimental structures than for proteins (a few thousand non-redundant ones), (ii) structure is driven by base stacking and non-canonical pairing as well as by Watson-Crick pairs, so coevolution is a weak guide, (iii) RNAs are conformationally heterogeneous and ion-dependent, and (iv) the available data are dominated by a few families (ribosomal RNA, tRNA, riboswitches).

# State of the art

- **CASP16 (2024).** The practical-outcomes analysis (Abriata and Dal Peraro, preprint 2025) reports that nucleic-acid prediction "lags considerably", relies heavily on 3D templates and expert human intervention, and that even AlphaFold 3 shows substantial limitations; Elofsson's assessment found that 72% (309 of 420) of the multimeric RNA models his group generated with AF3 had steric clashes and were discarded. The Das-lab assessment concluded that deep learning has fuelled limited progress in RNA and RNA-complex modelling.
- **CASP16 ensembles.** The CASP16 multi-conformation assessment (preprint) found three RNA targets and several oligomeric RNA states consistently below TM-score 0.75, naming RNA and large multimeric assemblies as the main open challenges.
- **Stanford RNA 3D Folding Kaggle competition, part 1 (2025).** Over 1,700 teams predicted 43 previously unreleased structures. The top three entries matched the CASP16 winners within statistical error, and the best strategy was a template-discovery pipeline rather than deep learning; a combined model, RNAPro, was reported to retrospectively outperform the individual entries (preprint, not peer reviewed). Part 2 ran January to March 2026 with hidden targets including new-to-nature folds, small-molecule and protein complexes; no peer-reviewed analysis of its results had been located as of October 2026.
- **Not shown.** No method has demonstrated the benchmark above on template-free targets in a blind test.

# Applications

Template-free RNA modelling would speed up structure-guided design of riboswitch- and RNA-targeting small molecules, mRNA therapeutics and vaccines (stability, translation), guide RNAs and aptamers, and the annotation of the large number of non-coding RNAs of unknown structure. It would also test whether physics-informed or data-driven models can capture the energetics that coevolution does not.

# Resolution criteria

A blinded evaluation (CASP, RNA-Puzzles or a pre-registered Kaggle-style benchmark with held-out experimental structures solved after the training cut-off) in which a method meets the median RMSD / INF-all / physical-validity criteria above on at least 30 template-free targets, with the analysis published in a refereed venue and the method openly reproducible.

# Rating rationale

Research-grade: blind assessments through 2025 show template reliance and frequent clashes, while data and cryo-EM RNA structures are growing quickly, so it is slightly easier than fold switching (58). Application value 24 is indirect: RNA therapeutics and RNA-targeting drugs are a growing but small slice of discovery, below the ADME and antibody problems here. Leverage 33 because RNA structure blocks one subfield, not protein-centred pipelines.

# Work mix rationale

Data scarcity and measurement are the dominant limits; modelling choices matter, but there are only a few thousand non-redundant RNA structures and chemical-probing data are indirect.

# Verification

A method must meet the stated median RMSD, INF-all and physical-validity criteria on at least 30 template-free targets in a blinded evaluation (CASP, RNA-Puzzles or a pre-registered benchmark with structures solved after the training cutoff), published in a refereed venue and reproducible with released code.

# Plain explanation

RNA is the molecule that carries genetic messages from DNA, but many RNAs also fold into compact shapes and act like tiny machines. Some switch genes on and off when they sense a small molecule. Knowing their shape would help scientists design drugs that target RNA and design better RNA medicines and vaccines.

Protein shape prediction has become very good. RNA has not followed, and the surprise is that the best methods in recent contests still lean on copying shapes of known, similar RNAs. When the RNA has no known relative, accuracy falls a lot. Some AI-generated RNA models even have atoms crashing into each other.

Why is RNA harder? There are far fewer solved RNA shapes to learn from, perhaps a few thousand different ones, compared with hundreds of thousands for proteins. RNA shapes depend on magnesium ions and on odd ways bases pair up, and the evolutionary clues that help proteins are weaker.

The aim of this problem is a program that gets the shape of brand-new RNAs about right most of the time, without peeking at templates.

# Student explanation

**The task.** For RNAs of 50 to 500 nucleotides whose fold has no template in the PDB, predict all-atom coordinates, including non-Watson-Crick pairs and long-range contacts. Accuracy is measured by RMSD (average atom distance after superposition), TM-score adapted to RNA, and interaction network fidelity (INF), which scores whether the right base pairs and stacks are present.

**Why proteins and RNA differ.** Protein predictors exploit coevolution plus a large structure archive. RNA has four letters rather than twenty, so correlated mutations are less informative; tertiary contacts depend on stacking, non-canonical pairs and divalent ions such as Mg2+; and the structure archive is dominated by a few families such as ribosomal RNA and tRNA.

**What blind tests show.** In CASP16 (2024), reviewers found that nucleic-acid prediction relied heavily on templates and human expertise, and that AlphaFold 3 had substantial limitations; in one analysis 72 percent of AlphaFold 3 multi-chain RNA models had steric clashes. In the Stanford RNA 3D Folding Kaggle competition (2025, preprint analysis) over 1,700 teams predicted 43 unreleased structures; the winning approach discovered 3D templates and did not use deep learning, and matched the CASP16 winners.

**What would count as progress.** Median RMSD under 5 angstroms and INF above 0.7 for at least half of 30 or more template-free targets, with physically valid models. Likely routes: more structures (cryo-EM), chemical-probing data as constraints, and physics-informed or ensemble models.

**Why template-free matters.** Template copying works only for RNA families already solved. New drug targets, such as newly found viral or bacterial structured RNAs, are exactly the cases without templates, so a blind test on unseen folds is the fair measure of progress.
