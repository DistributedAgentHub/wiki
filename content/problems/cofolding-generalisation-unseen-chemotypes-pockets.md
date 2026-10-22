---
type: problem
slug: cofolding-generalisation-unseen-chemotypes-pockets
title: Physically valid protein-ligand co-folding for unseen chemotypes and pockets
entry: docking-binding-free-energy
status: OPEN
origin: AlphaFold 3 (2024) and its open successors; generalisation critiques by Masters et al. (2025), Skrinjar et al. (Runs N' Poses, 2025) and PoseBusters (2024)
ratings:
  difficulty: 47
  applicationValue: 60
  leverage: 46
workMix:
  theory: 25
  engineering: 25
  compute: 25
  empirical: 25
verification:
  route: REPRODUCTION
sources:
  - title: Masters, Mahmoud, Lill, Investigating whether deep learning models for co-folding learn the physics of protein-ligand interactions, Nat. Commun. 16, 8854 (2025)
    url: https://doi.org/10.1038/s41467-025-63947-5
  - title: Skrinjar et al., Have protein-ligand cofolding methods moved beyond memorisation? (Runs N' Poses, bioRxiv preprint)
    url: https://www.biorxiv.org/content/10.1101/2025.02.03.636309v1
  - title: Buttenschoen, Morris, Deane, PoseBusters, Chem. Sci. (2024)
    url: https://doi.org/10.1039/D3SC04185A
  - title: Gilson et al., Assessment of pharmaceutical protein-ligand pose and affinity predictions in CASP16
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12750038/
  - title: Isomorphic Labs (company site; IsoDDE described by the company, figures not independently verified)
    url: https://www.isomorphiclabs.com/
links:
  - to: protein-ligand-binding-free-energy-sub-kcal
    kind: BUILDS_ON
    note: "Criterion (iii) is defined against physics: the ligand must be displaced when a pocket mutation 'would abolish binding in a free-energy calculation', so the test of physical generalisation presupposes reliable binding free energies."
timeline:
  - date: 2023-08-01
    title: PoseBusters
    body: Introduces physical-validity checks and shows many deep-learning poses are implausible.
    source: https://doi.org/10.1039/D3SC04185A
  - date: 2025-02-05
    title: Runs N' Poses (preprint)
    body: "2,600 post-cut-off systems: accuracy falls with similarity to the training set."
    source: https://www.biorxiv.org/content/10.1101/2025.02.03.636309v1
  - date: 2025-10-06
    title: Adversarial co-folding tests published
    body: AlphaFold 3 and three other models keep poses after binding-site removal; metadynamics shows they are not bound.
    source: https://doi.org/10.1038/s41467-025-63947-5
  - date: 2026-02-10
    title: IsoDDE described by Isomorphic Labs (company claim)
    body: Isomorphic Labs reports a closed co-folding and design engine with large gains over AlphaFold 3 on internal generalisation benchmarks. No model, weights or refereed report are available, and the circulating figures were not confirmed from a primary source.
    source: https://www.isomorphiclabs.com/
explainer:
  oneLine: Do AI models that draw a protein with a drug understand the physics, or just recall what they have seen?
  flow:
    - Model predicts protein with drug
    - Works near training examples
    - Pocket destroyed, pose stays
    - Accuracy drops on unfamiliar chemistry
    - Need physics-aware, calibrated models
  glossary:
    - term: ligand
      meaning: A small molecule, such as a drug, that binds to a protein.
      link: https://en.wikipedia.org/wiki/Ligand_(biochemistry)
    - term: binding pocket
      meaning: A cavity on a protein surface whose shape and chemistry fit a particular small molecule.
      link: https://en.wikipedia.org/wiki/Binding_site
    - term: AlphaFold
      meaning: A family of neural networks from Google DeepMind that predict 3D structures of proteins and, later, their complexes with other molecules.
      link: /research/biomolecular-structure-prediction
    - term: diffusion model
      meaning: A generative model that learns to turn random noise step by step into a realistic output, such as a protein backbone.
      link: https://en.wikipedia.org/wiki/Diffusion_model
    - term: docking
      meaning: Computer search for the position and orientation in which a small molecule fits into a protein pocket.
      link: /research/docking-binding-free-energy
    - term: Protein Data Bank
      meaning: The public archive of experimentally determined 3D structures of proteins and other molecules, the training data for structure predictors.
      link: https://en.wikipedia.org/wiki/Protein_Data_Bank
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
  readFirst:
    - title: AlphaFold (Wikipedia)
      url: https://en.wikipedia.org/wiki/AlphaFold
      why: Background on AlphaFold 3 and its co-folding approach.
    - title: PoseBusters
      url: https://github.com/maabuu/posebusters
      why: Open tool that checks whether a predicted pose is chemically valid.
    - title: Docking (molecular) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Docking_(molecular)
      why: Classical background for what co-folding competes with.
site:
  aiReviewed: true
---

**Task.** A co-folding model maps (protein sequence, ligand graph) to an all-atom complex. It generalises _physically_ if (a) pose accuracy holds on pockets and ligands unlike any training example, (b) its predictions respond to chemistry as the physics requires, and (c) its confidence is calibrated.

**Concrete target.** On a post-cut-off benchmark stratified by similarity to the training set (ligand Tanimoto $< 0.4$ and pocket structure or sequence identity $< 30\%$ to any training complex, and no training ligand in the same pose), a single open model achieves (i) $\ge 70\%$ of ligand RMSD $< 2$ Å, a rate within 10 percentage points of its rate on the most-similar stratum; (ii) PoseBusters validity (bond geometry, no clashes, no internal strain) on $\ge 95\%$ of poses without post-hoc minimisation; (iii) on adversarial binding-site perturbations (residues mutated to glycine or to bulky or charge-inverting residues, or pocket removal) the ligand is displaced or confidence collapses in $\ge 90\%$ of cases where the mutation would abolish binding in a free-energy calculation; and (iv) expected-calibration error on pose confidence $< 0.05$.

# State of the art

- **Physics tests.** Masters, Mahmoud and Lill (Nature Communications 2025) tested AlphaFold 3, RoseTTAFold All-Atom, Chai-1 and Boltz-1 with binding-site mutagenesis. On CASF-2016 (n = 285), for AlphaFold 3 predictions that were initially correct (RMSD < 2 Å), more than half kept the same pose after the pocket was disrupted, and among high-confidence complexes (confidence > 80) 42-52% kept an unaltered pose depending on the disruption versus 78% without disruption. Funnel-metadynamics on CDK2 gave a bound probability of 0 for packed or inverted pockets, so the retained poses are physically unsupported.
- **Training-set similarity.** Skrinjar et al. ("Runs N' Poses", bioRxiv 2025) built 2,600 post-cut-off protein-ligand systems and found AlphaFold 3, Chai-1, Protenix and Boltz-1 degrade as similarity to the training set falls, including when the ligand is only moved slightly from a training position; pockets are often correct while ligand placement is not, and the effect is strongest for ligands seen in only one pocket. Their conclusion is that these models largely recall ligand poses.
- **Validity.** PoseBusters (Buttenschoen et al., 2024) showed that many deep-learning docking poses are physically invalid despite low RMSD; newer co-folding models are better on pose validity but not uniformly.
- **Industry claims.** Isomorphic Labs has described a closed drug-design engine (IsoDDE) and reports substantial gains over AlphaFold 3 on internal generalisation benchmarks. The specific figures circulating in secondary coverage could not be confirmed against a primary technical report for this entry and are therefore not quoted; the model and weights are not released, so no independent verification exists. Any such numbers are company claims, not measured results.
- **CASP16.** AlphaFold 3 baselines scored mean LDDT-PLI of about 0.8 against 0.69 for the best CASP participants, so pose prediction for in-distribution ligands is strong.

# Applications

Reliable co-folding on new chemistry would turn structure-based design from a retrospective into a prospective tool for novel targets and chemotypes, allow rapid pose generation to initialise free-energy calculations, and make learned structure models safe to use in generative design loops without constant physical re-validation.

# Resolution criteria

A refereed, independent benchmark (with code, time-split data and adversarial perturbation set released) in which a publicly available model meets all four criteria above, with the same evaluation protocol applied to AlphaFold 3 and at least two other models for comparison, reproduced by a group not involved in building the model.

# Rating rationale

Hard but with a visible path: in-distribution accuracy is already strong (AF3 baseline LDDT-PLI about 0.8 in CASP16), and open models plus company claims are improving generalisation quickly, so it is easier than affinity prediction (63) and comparable to hardware engineering problems such as CFET (52). Application value 60 as every structure-based pipeline uses these models; leverage 46 as it gates affinity prediction and generative design but docking baselines remain.

# Work mix rationale

Both modelling work (physics-aware training, validity constraints) and benchmark engineering are needed; new experimental structures of novel chemotypes provide test data.

# Verification

A publicly available model must meet all four criteria on an independent benchmark (code, time-split data and adversarial perturbation set released), with the same protocol applied to AlphaFold 3 and at least two other models, reproduced by a group not involved in building the model.

# Plain explanation

Newer AI programs, such as AlphaFold 3, draw a protein and a small molecule together as a complex. They are very good when the protein and drug resemble ones in their training data.

A key worry is whether they actually understand the physics of binding, or have simply memorised which drug sits where. Researchers tested this in a few ways. In one test, they changed the pocket on the protein so that the drug could no longer fit, for example by replacing its surroundings with bulky parts. A model that understood the physics should move the drug away or lose confidence. Instead, in many cases the model drew the drug in the same place anyway. A computer simulation confirmed that the drug would not actually stay there.

Another test used thousands of newer structures and found that accuracy fell as the examples became less like the training data.

Companies say new versions generalise much better, but their models are closed, so outsiders cannot check. The open problem is a model that is reliable on new chemistry, obeys basic chemical rules and knows when it is guessing.

# Student explanation

**What co-folding is.** A single neural network (AlphaFold 3, Boltz, Chai-1, Protenix, OpenFold3) takes protein sequence and ligand structure and outputs the complex, using diffusion to generate coordinates. It beats classical docking on in-distribution pose accuracy (in CASP16 a baseline AlphaFold 3 reached mean LDDT-PLI about 0.8 versus 0.69 for the best participants).

**Evidence of memorisation.** Masters, Mahmoud and Lill (Nature Communications 2025) mutated binding-site residues to destroy binding. For AlphaFold 3 predictions that were initially correct on CASF-2016 (285 systems), more than half kept the same ligand pose after the pocket was disrupted; among high-confidence predictions, 42 to 52 percent kept an unaltered pose against 78 percent without disruption; metadynamics showed the ligand did not stay bound in the packed or inverted pockets. Skrinjar and coworkers (Runs N' Poses preprint) built 2,600 post-cut-off systems and found accuracy declined with similarity to training complexes, and often the pocket was right while the ligand placement was not.

**Physical validity.** PoseBusters tests bond lengths, clashes and strain; many learned poses fail some checks.

**What counts as generalising.** The DARC statement asks for pose accuracy within 10 percentage points of in-distribution accuracy on pockets and ligands dissimilar to training, at least 95 percent valid poses, collapse of confidence when binding is physically abolished, and calibrated confidence.

**Caveats.** Companies report large improvements for closed models (Isomorphic Labs' IsoDDE, 2026), but with no released weights and no refereed report these are claims, not measurements; treat any quoted success rate from such a source with care.

**Reading a result.** Check how the test set was split from the training set (by date, by ligand similarity, by pocket similarity), whether poses were checked for physical validity, and whether the authors tried perturbations that should break binding.
