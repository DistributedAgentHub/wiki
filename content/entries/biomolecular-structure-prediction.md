---
type: entry
slug: biomolecular-structure-prediction
title: Biomolecular structure prediction (AlphaFold-style)
field: computational-medicine
kind: ALGORITHM
status: ACTIVE
summary: Deep networks that predict 3D structures of proteins, nucleic acids and their complexes from sequence, trained on the PDB and coevolution in multiple sequence alignments.
reliedOn: Protein design, docking and co-folding, variant-effect prediction and most structure-guided drug discovery start from predicted or experimentally derived structures and inherit the accuracy and blind spots of these models.
dependsOn:
  - reverse-mode-autodiff
  - transformer-architecture
references:
  - title: Jumper et al., Highly accurate protein structure prediction with AlphaFold, Nature (2021)
    url: https://doi.org/10.1038/s41586-021-03819-2
    kind: paper
  - title: Abramson et al., Accurate structure prediction of biomolecular interactions with AlphaFold 3, Nature (2024)
    url: https://doi.org/10.1038/s41586-024-07487-w
    kind: paper
  - title: Baek et al., Accurate prediction of protein structures and interactions using a three-track neural network (RoseTTAFold), Science (2021)
    url: https://doi.org/10.1126/science.abj8754
    kind: paper
  - title: Lin et al., Evolutionary-scale prediction of atomic-level protein structure with a language model, Science (2023)
    url: https://doi.org/10.1126/science.ade2574
    kind: paper
  - title: Elofsson, AlphaFold3 at CASP16 (Proteins, 2026)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750027/
    kind: paper
  - title: Abriata and Dal Peraro, Practical outcomes from CASP16 for users in need of biomolecular structure prediction (preprint)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750028/
    kind: paper
  - title: "CASP: Critical Assessment of Structure Prediction"
    url: https://predictioncenter.org/
    kind: docs
timeline:
  - date: 2018-12-02
    title: AlphaFold (v1) wins CASP13
    body: DeepMind's distance-prediction network places first at CASP13, the first large step from coevolution-based deep learning.
    source: https://predictioncenter.org/
  - date: 2020-11-30
    title: AlphaFold2 at CASP14
    body: AlphaFold2 reaches median backbone accuracy comparable to experiment on most CASP14 targets; the organisers described the single-chain problem as largely solved.
    source: https://predictioncenter.org/
  - date: 2021-07-15
    title: AlphaFold2 paper and open code
    body: Jumper et al. publish the method and release code; RoseTTAFold appears in Science in the same month.
    source: https://doi.org/10.1038/s41586-021-03819-2
  - date: 2024-05-08
    title: AlphaFold 3 for complexes and ligands
    body: A diffusion-based all-atom model predicts proteins, nucleic acids, ligands and ions together, reporting large gains on protein-ligand and antibody-antigen targets over earlier docking baselines.
    source: https://doi.org/10.1038/s41586-024-07487-w
  - date: 2025-12-01
    title: CASP16 assessments published
    body: The CASP16 special issue reports AF3-class models at or near the state of the art in most categories, with persistent weakness for RNA, ensembles and ligand affinity.
    source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12750028/
explainer:
  oneLine: Computer programs that guess a molecule's 3D shape from its sequence of building blocks.
  flow:
    - Sequence plus relatives
    - Spot correlated positions
    - Network guesses distances and angles
    - Diffusion refines all atoms
    - Confidence flags weak regions
  glossary:
    - term: protein
      meaning: A chain of amino acids that folds into a 3D shape and does a job in the cell, such as speeding up a reaction.
      link: https://en.wikipedia.org/wiki/Protein
    - term: amino acid
      meaning: One of 20 building blocks that are strung together into a protein chain.
      link: https://en.wikipedia.org/wiki/Amino_acid
    - term: sequence alignment
      meaning: Lining up related protein or DNA sequences letter by letter so that matching positions can be compared.
      link: https://en.wikipedia.org/wiki/Multiple_sequence_alignment
    - term: coevolution
      meaning: Positions in a protein that touch each other tend to mutate together over evolution, so correlated changes hint at which positions are in contact.
      link: https://en.wikipedia.org/wiki/Direct_coupling_analysis
    - term: Protein Data Bank
      meaning: The public archive of experimentally determined 3D structures of proteins and other molecules, the training data for structure predictors.
      link: https://en.wikipedia.org/wiki/Protein_Data_Bank
    - term: transformer
      meaning: A neural network design that lets every part of its input look at every other part; it underlies modern language and structure models.
      link: /research/transformer-architecture
    - term: diffusion model
      meaning: A generative model that learns to turn random noise step by step into a realistic output, such as a protein backbone.
      link: https://en.wikipedia.org/wiki/Diffusion_model
    - term: CASP
      meaning: A blind contest held every two years where groups predict protein structures that experimentalists have solved but not yet published.
      link: https://en.wikipedia.org/wiki/CASP
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: ligand
      meaning: A small molecule, such as a drug, that binds to a protein.
      link: https://en.wikipedia.org/wiki/Ligand_(biochemistry)
  readFirst:
    - title: AlphaFold (Wikipedia)
      url: https://en.wikipedia.org/wiki/AlphaFold
      why: Short history of AlphaFold 1, 2 and 3 and what each added.
    - title: Nobel Prize in Chemistry 2024 press release
      url: https://www.nobelprize.org/prizes/chemistry/2024/press-release/
      why: Plain explanation of why predicting protein structure mattered.
    - title: AlphaFold Protein Structure Database
      url: https://alphafold.ebi.ac.uk/
      why: Browse predicted structures and their confidence colouring yourself.
    - title: CASP (Wikipedia)
      url: https://en.wikipedia.org/wiki/CASP
      why: How the blind contests that measure progress work.
raw:
  body: "## What it is\n\nGiven the amino-acid sequence of a protein (or sequences of several chains, nucleic acids, ligands and ions), predict the 3D coordinates of every heavy atom. The modern recipe is a neural network trained on the Protein Data Bank (PDB, roughly 200,000 entries) that exploits **coevolution**: residues in contact mutate in a correlated way across homologous sequences, so a multiple sequence alignment (MSA) carries distance information. A student should know basic protein chemistry (backbone, side-chain torsions, secondary structure), the idea of homology, and the attention mechanism of transformers.\n\n## The core machinery\n\n**AlphaFold2 (2020-21).** An *Evoformer* trunk passes information between an MSA representation and a pairwise residue representation with triangular attention and multiplication updates, which softly enforce triangle-inequality-like consistency. A *structure module* then predicts per-residue rigid frames with an SE(3)-equivariant (invariant point attention) update, trained with a frame-aligned point error (FAPE) loss. Outputs include per-residue confidence (pLDDT) and predicted aligned error (PAE). At CASP14 (2020) the median backbone accuracy was near experimental resolution for most single-domain targets.\n\n**AlphaFold 3 (2024).** Replaces the structure module by a *diffusion* model over atom coordinates conditioned on a smaller \"Pairformer\" trunk, and handles proteins, DNA, RNA, small-molecule ligands, ions and modifications in a single \"co-folding\" model. Open reimplementations and variants followed: Boltz-1/Boltz-2, Chai-1, Protenix, OpenFold3 and, from industry, closed models such as Isomorphic Labs' IsoDDE (technical report, February 2026).\n\n**Language-model route.** ESMFold predicts structure from a protein language model (ESM-2) without an MSA, trading some accuracy for speed on orphan sequences.\n\n## What the models are good and bad at\n\nSingle-chain, well-sampled folds: close to solved. Weaker or open: alternative conformations and fold switching, RNA tertiary structure, protein-protein interaction specificity (as opposed to the structure of a known complex), antibody-antigen interfaces (CDR H3), and generalisation to chemistry unlike the training set. The CASP16 assessment (2024) found AF3-class models at or near the state of the art in nearly all categories, with the gap to AF2 narrowing when AF2 is heavily sampled.\n\n## Techniques to master\n\nMSA construction and its limits, SE(3) equivariance and diffusion models, confidence calibration (pLDDT, ipTM, PAE), evaluation metrics (GDT_TS, lDDT, DockQ, TM-score) and leakage control by time-split and sequence-identity splits.\n\n## Reading path\n\nJumper et al. (2021), Abramson et al. (2024), then the CASP16 assessment papers and a benchmark such as PoseBusters or Runs N' Poses to see where models fail.\n\n## Where it bites\n\nDownstream problems here: predicting fold switching and multi-state ensembles, RNA 3D structure, proteome-scale interaction specificity, and whether protein-ligand co-folding generalises beyond memorised pockets."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Proteins are long chains of building blocks that fold up into a 3D shape, and the shape decides what the protein does. For decades the only way to learn a shape was to freeze the protein into a crystal or image it with a very expensive microscope, which could take months or years.

Structure prediction programs try to skip that. You give them the chain, and they return a guess for where every atom sits. The best ones, starting with AlphaFold, learned from the public archive of known shapes and from a clever hint: if two spots on the chain touch in the folded protein, they tend to change together over evolution, so comparing many related chains reveals which spots touch.

Think of solving a jigsaw puzzle after seeing hundreds of other people's finished, slightly different puzzles of the same picture. The hints make it much easier. The analogy breaks when the puzzle has no relatives to compare, or when the piece can snap into two different pictures.

Today the programs are very good for single, well-studied protein chains. They are much weaker for proteins that switch shape, for RNA, for telling which proteins really meet each other, and for chemistry unlike what they were trained on.

# Student explanation

**The task.** Given amino-acid sequences (and optionally RNA, DNA, ions and drug-like molecules), output 3D coordinates of all heavy atoms, plus a confidence for each part. Accuracy is scored by comparing against experimental structures solved later, using measures such as lDDT (local distance agreement) and TM-score (global fold similarity), and DockQ for the interface between chains.

**Why it works.** Evolution constrains proteins: residues that touch must remain compatible, so mutations in one are compensated in the other. A _multiple sequence alignment_ of related proteins therefore contains a statistical record of contacts. AlphaFold2 feeds the alignment and a table of residue-pair features into a transformer called the Evoformer, which repeatedly updates both with attention, including a "triangle" rule that keeps distances geometrically consistent. A second module turns these features into rotations and positions of each residue, trained to match known structures.

**AlphaFold 3 and successors.** AlphaFold 3 predicts the whole complex, including DNA, RNA and small molecules, by using a _diffusion model_: it starts from noisy atom positions and denoises them into a structure. Open and company models followed (Boltz, Chai, OpenFold3 and others).

**What goes wrong.** (1) The model learned from the Protein Data Bank, so it tends to reproduce shapes it has seen; for ligands, RNA and unusual folds this can mean memorising rather than understanding. (2) A structure is a single snapshot; real proteins are ensembles. (3) Predicting _what_ a complex looks like is easier than predicting _whether_ two proteins bind. (4) Confidence scores can be miscalibrated.

**Where the open problems are.** DARC lists problems on fold switching, RNA tertiary structure, proteome-wide interaction prediction and how well co-folding models generalise to new drug-like chemistry.

**Skills.** Protein chemistry, attention and diffusion models, evaluation without leakage (time and similarity splits), reading CASP assessments.
