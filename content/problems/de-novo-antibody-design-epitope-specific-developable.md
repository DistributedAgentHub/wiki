---
type: problem
slug: de-novo-antibody-design-epitope-specific-developable
title: Zero-shot de novo antibody design to a chosen epitope with sub-nanomolar affinity and drug-like developability
entry: protein-language-models-generative-design
status: OPEN
origin: Computational antibody design (RosettaAntibody and successors); generative era with RFantibody (2024-25) and Chai-2 (2025)
ratings:
  difficulty: 50
  applicationValue: 74
  leverage: 43
workMix:
  theory: 20
  engineering: 25
  compute: 15
  empirical: 40
verification:
  route: OBSERVATION
sources:
  - title: Bennett et al., Atomically accurate de novo design of antibodies with RFdiffusion, Nature 649, 183-193 (2026)
    url: https://doi.org/10.1038/s41586-025-09721-5
  - title: Chai Discovery Team, Zero-shot antibody design in a 24-well plate (bioRxiv preprint, 2025)
    url: https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1
  - title: What does AlphaFold3 learn about antigen and nanobody docking, and what remains unsolved? (bioRxiv/PMC)
    url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11838198/
  - title: "IPD: Teaching AI to build antibodies from scratch (RFantibody)"
    url: https://www.ipd.uw.edu/2025/11/rfantibody-in-nature
links:
  - to: cofolding-generalisation-unseen-chemotypes-pockets
    kind: RELATED
    note: Both turn on whether learned all-atom models extrapolate beyond interfaces memorised from the PDB.
  - to: proteome-scale-ppi-specificity-prediction
    kind: BUILDS_ON
    note: In-silico filtering of designed binders uses the same complex-structure confidence scores (ipTM-type) that fail as interaction classifiers; deciding whether a given pair binds, with calibrated probabilities, is the ranking step that limits per-design hit rates.
timeline:
  - date: 2024-09-24
    title: AlphaFold 3 antibody docking limits
    body: High-accuracy antibody/nanobody docking succeeds in roughly 9-13% of cases (single seed); CDR H3 modelling is the bottleneck.
    source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11838198/
  - date: 2025-07-05
    title: Chai-2 technical report (preprint)
    body: Claims 16% per-design hit rate over 52 targets and about 50% of targets with a binder in one round; no K_D or developability detail in the abstract.
    source: https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1
  - date: 2025-11-05
    title: RFantibody in Nature
    body: Epitope-targeted VHH, scFv and antibody designs; structures confirm atomic accuracy; OrthoRep maturation to single-digit nM.
    source: https://doi.org/10.1038/s41586-025-09721-5
explainer:
  oneLine: Using AI to write an antibody from scratch that sticks to a chosen spot on a target.
  flow:
    - Pick target and spot
    - AI writes antibody loops
    - Computer filters designs
    - Lab tests binding and stability
    - "Goal: drug-quality in one round"
  glossary:
    - term: antibody
      meaning: A Y-shaped immune protein that sticks to a specific target; many modern drugs are engineered antibodies.
      link: https://en.wikipedia.org/wiki/Antibody
    - term: epitope
      meaning: The exact patch on a target that an antibody recognises and binds.
      link: https://en.wikipedia.org/wiki/Epitope
    - term: diffusion model
      meaning: A generative model that learns to turn random noise step by step into a realistic output, such as a protein backbone.
      link: https://en.wikipedia.org/wiki/Diffusion_model
    - term: dissociation constant
      meaning: A number that says how tightly a drug sticks to its target; smaller means tighter.
      link: https://en.wikipedia.org/wiki/Dissociation_constant
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: protein language model
      meaning: A neural network trained to fill in missing letters of protein sequences, which ends up learning what natural proteins look like.
      link: /research/protein-language-models-generative-design
    - term: directed evolution
      meaning: A lab method that improves a protein by making many random variants and repeatedly keeping the best.
      link: https://en.wikipedia.org/wiki/Directed_evolution
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
  readFirst:
    - title: Antibody (Wikipedia)
      url: https://en.wikipedia.org/wiki/Antibody
      why: Structure and function of antibodies, including the variable loops.
    - title: "IPD: Teaching AI to build antibodies from scratch"
      url: https://www.ipd.uw.edu/2025/11/rfantibody-in-nature
      why: Institute for Protein Design summary of the Nature paper.
    - title: Monoclonal antibody (Wikipedia)
      url: https://en.wikipedia.org/wiki/Monoclonal_antibody
      why: How therapeutic antibodies are made today.
site:
  aiReviewed: true
---

**Task.** Given only a target antigen structure (or sequence) and a chosen epitope, generate antibody variable domains (VHH, scFv or Fab/IgG) that bind that epitope with high affinity, directly from the generative model, without immunisation, large display libraries or affinity maturation.

**Concrete target.** On a pre-registered panel of at least 50 diverse targets without antibody structures in the training data, including targets with flexible loops and glycans and at least ten multi-pass or membrane proteins, with at most 24 designs tested per target in a single round: (i) a binder with $K_D \le 1$ nM for $\ge 60\%$ of targets; (ii) binding at the intended epitope confirmed structurally (crystal or cryo-EM) for a representative subset with CDR-H3 and interface heavy-atom RMSD $\le 2$ Å; (iii) developability comparable to clinical antibodies: monomeric expression in mammalian cells at $\ge$ 1 g/L scale-up potential, no polyreactivity (non-specific binding panel), $T_m \ge 65$ °C, low self-association; and (iv) function (e.g. neutralisation or receptor blocking) in at least a third of binders when relevant.

Why hard: CDR H3 loops are long, flexible and have limited coevolutionary signal; epitope-specific docking of antibody to antigen is a well-known failure mode of structure predictors; and binding is only one of the properties required for a drug.

# State of the art

- **RFantibody (Nature 2025-26).** Bennett et al. fine-tuned RFdiffusion to design VHHs, scFvs and full antibodies to user-specified epitopes, screened by yeast display. Initial designs bound with modest affinity (tens to hundreds of nM); OrthoRep-based affinity maturation reached single-digit nM; cryo-EM and crystal structures confirmed atomic-level agreement for selected designs. Success rates per design are low and the work needed library-scale screening. An unreviewed commentary on Zenodo disputes the accuracy claims; it should be weighed as a non-refereed critique.
- **Chai-2 (bioRxiv preprint, July 2025).** A company technical report claims a 16% per-design hit rate in fully de novo antibody and nanobody design across 52 targets with no antibody or nanobody in the PDB, at most 20 designs per target in a 24-well-plate format, and at least one hit for about 50% of targets in one round; the abstract states hits "often" have strong affinity and favourable drug-like profiles but does not give K_D values or developability data. Not peer reviewed in sources reviewed; the model is not openly released.
- **Structure prediction baseline.** AlphaFold 3 antibody-nanobody docking had high-accuracy success rates of roughly 9-13% with single-seed sampling and about 60% outright failure for docking in a 2024 study (Proteins/bioRxiv), limited by CDR H3 modelling; Isomorphic Labs reports better high-accuracy antibody-antigen prediction than AlphaFold 3 for its closed IsoDDE engine; this is a company claim with no released model and no independent replication, and the reported margin could not be confirmed from a primary source for this entry.
- **Not shown.** Sub-nanomolar zero-shot binders with documented developability at the target success rates have not been reported in a peer-reviewed study.

# Applications

Antibodies are the largest class of biologic drugs; zero-shot epitope-targeted design would shorten discovery from months to weeks, enable targeting of conserved or poorly immunogenic epitopes and membrane proteins, and cut animal use. It would also provide a general interface-design method for other biologics (minibinders, bispecifics).

# Resolution criteria

A peer-reviewed study (or an independent replication of a company result) satisfying criteria (i)-(iv) on a pre-registered panel of at least 50 targets, with sequences, affinity data and developability assays released, and with at least one independent group reproducing the pipeline on new targets.

# Rating rationale

Hit rates rose by orders of magnitude in 2024-25 and company reports claim about half of targets yield binders in one round, so a path is visible and difficulty (50) sits below de novo enzymes (66) and scaffold-agnostic affinity (63); the open part is sub-nanomolar affinity, epitope fidelity and developability together, demonstrated outside company reports. Application value 74 is second in this area, just below general affinity prediction (76): therapeutic antibodies are a core pharmaceutical modality, but the capability is confined to one modality, where affinity prediction serves every structure-based programme; 74 places it above cryo-CMOS control (60) and near the surface-code milestone (70). Leverage 43 because it reshapes antibody discovery without other fields depending on the answer, comparable to secure speculation (40).

# Work mix rationale

Most of the remaining work is experimental: affinity, epitope confirmation and developability data on many targets, with model improvements guided by them.

# Verification

Needs new binding and developability assays: a peer-reviewed study (or an independent replication of a company result) must meet criteria (i) to (iv) on a pre-registered panel of at least 50 targets, with sequences, affinity data and assay data released and at least one independent group reproducing the pipeline on new targets.

# Plain explanation

Antibodies are the Y-shaped proteins of the immune system, and engineered antibodies are among the most important medicines, used against cancers, autoimmune disease and infections. Finding a good one normally means immunising animals or screening huge libraries, which takes months.

AI design tools now try to skip that step: you give the program the target and say which patch to stick to, and it writes the antibody. In 2025 two reports showed real progress. A university team published in Nature a method that designs small antibody fragments and full antibodies to chosen spots, confirmed with detailed structures, though the first designs bound only moderately and needed lab improvement. A company reported, in a report not yet peer-reviewed, that about one in six designs bound across 52 targets and about half of the targets got at least one binder.

A good drug needs more than sticking. It must stick very tightly, at the intended spot, be easy to make in cells, not clump or stick to everything and work in the body. The aim here is to achieve all this from the computer alone, for most targets, in one round.

# Student explanation

**Antibody structure.** The antigen-binding part consists of variable domains with six loops, the complementarity-determining regions (CDRs). CDR-H3 is long, varied and flexible, which makes it the hardest to model and the main driver of specificity.

**Design pipeline.** A generative model (such as RFdiffusion fine-tuned for antibodies) places CDR loops against a specified epitope, an inverse-folding model proposes sequences, and filters based on predicted structure remove poor designs. Candidates are expressed (for example on yeast) and sorted by binding.

**Evidence.** Bennett and colleagues (Nature 2025-26) reported VHH, scFv and full-antibody designs to user-specified epitopes, validated with structures at atomic accuracy; initial affinities were tens to hundreds of nM and OrthoRep affinity maturation brought several to single-digit nM. A company technical report (Chai-2, bioRxiv 2025, not peer-reviewed) claims a 16 percent per-design hit rate across 52 targets, at most 20 designs per target, and at least one binder for about 50 percent of targets; the abstract gives no K_D values or developability data.

**Structure-prediction baseline.** In a 2024 study AlphaFold 3 docked antibodies and nanobodies with high accuracy only in roughly 9 to 13 percent of cases using a single seed, and failed in about 60 percent. Newer models report better numbers on newer benchmarks (company and preprint reports).

**What the DARC target requires.** 50 diverse targets; at most 24 designs each; a binder with K_D at most 1 nM for at least 60 percent of targets; structural confirmation of epitope and CDR-H3 within 2 angstroms; clinical-grade expression, stability and low non-specific binding.
