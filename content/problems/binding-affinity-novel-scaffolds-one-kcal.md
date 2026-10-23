---
type: problem
slug: binding-affinity-novel-scaffolds-one-kcal
title: Binding affinity within 1 kcal/mol for novel scaffolds across protein families
entry: docking-binding-free-energy
status: OPEN
origin: D3R Grand Challenges (2015-2019), CASP16 ligand affinity category (2024), and long-standing free-energy accuracy targets (Mobley and Gilson 2017)
ratings:
  difficulty: 63
  applicationValue: 76
  leverage: 56
workMix:
  theory: 25
  engineering: 15
  compute: 30
  empirical: 30
verification:
  route: OBSERVATION
sources:
  - title: Ross et al., The maximal and current accuracy of rigorous protein-ligand binding free energy calculations, Commun. Chem. (2023)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10576784/
  - title: Gilson et al., Assessment of pharmaceutical protein-ligand pose and affinity predictions in CASP16
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12750038/
  - title: "Passaro et al., Boltz-2: Towards Accurate and Efficient Binding Affinity Prediction (bioRxiv preprint)"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12262699/
  - title: "OMSF, The Free Energy of Everything: Benchmarking OpenFE"
    url: https://omsf.substack.com/p/the-free-energy-of-everything-benchmarking-openfe
  - title: "Mobley and Gilson, Predicting binding free energies: frontiers and benchmarks, Annu. Rev. Biophys. (2017)"
    url: https://doi.org/10.1146/annurev-biophys-070816-033654
  - title: Accurate physics-based prediction of binding affinities of RNA and DNA targeting ligands (ChemRxiv preprint)
    url: https://chemrxiv.org/engage/chemrxiv/article-details/66c91d13a4e53c48766cf76e
links:
  - to: cofolding-generalisation-unseen-chemotypes-pockets
    kind: BUILDS_ON
    note: Affinity heads on co-folding models inherit pose errors that appear when chemotypes or pockets are unlike the training data.
  - to: boltzmann-ensemble-prediction-multistate-proteins
    kind: BUILDS_ON
    note: Affinity depends on which protein conformations the ligand can select, which an ensemble model would supply.
  - to: protein-ligand-binding-free-energy-sub-kcal
    kind: BUILDS_ON
    note: Physics-based free-energy calculations are both the main non-learned route and the reference learned methods are compared against (Boltz-2 vs OpenFE/FEP+); scaffold hops and charge changes are the failure classes both problems target.
timeline:
  - date: 2015-02-18
    title: FEP+ prospective protocol
    body: Wang et al. report mean unsigned errors near 1 kcal/mol for relative potencies on eight targets.
    source: https://doi.org/10.1021/ja512751q
  - date: 2023-10-01
    title: Maximal accuracy of rigorous FEP
    body: Ross et al. quantify experimental reproducibility (about 0.91 kcal/mol pairwise RMSE) against FEP+ performance (about 1.25).
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC10576784/
  - date: 2025-06-18
    title: Boltz-2 (preprint)
    body: First open co-folding model with an affinity head reporting approach to FEP-level correlation on selected sets; large variance between assays.
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12262699/
  - date: 2025-10-01
    title: CASP16 affinity category
    body: Best Kendall's tau 0.42 over 140 affinities; experimental structures did not help.
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12750038/
explainer:
  oneLine: Predicting, within about a five-fold error, how tightly a brand-new kind of drug molecule sticks to its target.
  flow:
    - Candidate molecule and target
    - Predict pose, then grip strength
    - Compare with lab value
    - Error near five-fold is the goal
    - Needs new chemistry, blind
  glossary:
    - term: ligand
      meaning: A small molecule, such as a drug, that binds to a protein.
      link: https://en.wikipedia.org/wiki/Ligand_(biochemistry)
    - term: dissociation constant
      meaning: A number that says how tightly a drug sticks to its target; smaller means tighter.
      link: https://en.wikipedia.org/wiki/Dissociation_constant
    - term: free energy
      meaning: The energy-like quantity that decides which state a molecular system prefers; differences in it set how tightly a drug binds.
      link: https://en.wikipedia.org/wiki/Gibbs_free_energy
    - term: free-energy perturbation
      meaning: A simulation method that gradually changes one molecule into another on the computer to estimate the difference in binding strength.
      link: /research/docking-binding-free-energy
    - term: docking
      meaning: Computer search for the position and orientation in which a small molecule fits into a protein pocket.
      link: /research/docking-binding-free-energy
    - term: force field
      meaning: A set of formulas and numbers that give the energy of a molecule from the positions of its atoms, used to run simulations.
      link: /research/biomolecular-molecular-dynamics
    - term: data leakage
      meaning: When test examples secretly resemble training examples, making a model look better than it is.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
  readFirst:
    - title: Free energy perturbation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Free_energy_perturbation
      why: The standard physics-based method for relative binding.
    - title: Drug design (Wikipedia)
      url: https://en.wikipedia.org/wiki/Drug_design
      why: Context for why affinity prediction matters in drug discovery.
    - title: OpenFE
      url: https://openfree.energy/
      why: Open-source free-energy tools and benchmarks.
raw:
  body: "**Task.** Given a protein target and a drug-like ligand whose chemical scaffold is not represented among known binders of that target (and is dissimilar from the training data), predict the binding free energy $\\Delta G = RT\\ln K_d$ with an error comparable to the experimental noise floor.\n\n**Concrete target.** On a prospective blinded set of at least 200 compounds spanning at least 10 protein families (kinases, GPCRs, proteases, nuclear receptors, bromodomains, ...), in which each compound's scaffold has Tanimoto similarity $< 0.4$ to every training compound, the method, applied *without per-target retraining, fine-tuning or tuning on target assay data*, achieves RMSE $\\le 1.2$ kcal/mol, median unsigned error $\\le 1.0$ kcal/mol, and Kendall's $\\tau \\ge 0.6$ (about 80% of the CASP16 experimental-noise ceiling of about 0.73) within each target, at a cost that permits at least $10^4$ compounds per target (that is, well below current alchemical free-energy cost).\n\nThe accuracy bar is set by assay reproducibility: public data give a pairwise inter-lab RMSE of about 0.91 kcal/mol, and 1 kcal/mol corresponds to a factor of about 5.4 in $K_d$."
site:
  aiReviewed: true
---

# State of the art

- **Physics-based relative FEP.** On the curated FEP+ benchmark, FEP+ achieves pairwise RMSE of about 1.25 kcal/mol, against 0.91 kcal/mol for experimental reproducibility in public data (Ross et al., Communications Chemistry 2023). It performs well for congeneric series on well-behaved targets, much less well for charge-changing perturbations, scaffold hops, flexible loops, membrane proteins, and nucleic-acid targets (about 1.39 kcal/mol RMSE for DNA/RNA binders in a vendor-sponsored preprint). Open implementations (OpenFE) are somewhat less accurate than FEP+ in a 59-dataset comparison by OMSF, with atom-mapping failures producing outliers.
- **CASP16 (2024).** In the first large blind affinity test in the CASP series, 30 groups predicted 140 affinities on two targets: the best Kendall's $\tau$ was 0.42, below the noise ceiling of about 0.73; providing experimental structures did not help, which the assessors take as evidence that scoring functions are the limiting factor.
- **Learned affinity heads.** Boltz-2 (preprint, June 2025) reports average Pearson 0.66 on a four-target FEP+ subset and approaches OpenFE on 876 measurements at more than 1,000 times lower cost, outperforming all CASP16 participants out of the box; on eight blinded internal industrial assays it exceeded Pearson 0.55 on only three, and the authors state that performance "varies strongly between assays". These are developer-reported numbers without independent prospective replication in sources reviewed.
- **Hit discovery.** The same preprint reports an enrichment factor of 18.4 at the top 0.5% in a retrospective screen (MF-PCBA); this measures ranking against decoys, not accurate ΔG on scaffolds.
- **Not shown.** No method meets the benchmark above prospectively across families without target-specific information.

# Applications

Accurate scaffold-agnostic affinity prediction would let medicinal chemists rank virtual compounds before synthesis, cut the number of design-make-test cycles in lead optimisation, make large virtual screens reliable, and allow design of selectivity (predicting off-target binding). It would also be the scoring function needed for generative chemistry.

# Resolution criteria

A prospective, pre-registered, blinded evaluation (a D3R/CASP-style or industry-sponsored challenge with unpublished measured affinities) in which one method, with no target-specific data, meets the RMSE, unsigned-error and Kendall's $\tau$ thresholds above on at least 10 protein families and at least 200 compounds with novel scaffolds, with the analysis published in a refereed journal and the method accessible to independent groups.

# Rating rationale

Decades of effort and an experimental noise floor close to the target (about 0.9 kcal/mol assay reproducibility in public data) make scaffold-agnostic 1 kcal/mol accuracy research-grade and harder than the neighbouring drug-discovery problems (co-folding generalisation 47, residence time 61), though well below the defining open problems of mathematics. Application value 76 is the highest in this area because affinity ranking is the central economic lever of structure-based discovery and would serve antibody design (74) and generative chemistry alike; it sits above near-memory LLM decode (66) and below LWE (80). Leverage 56 since virtual screening, co-folding and generative chemistry all wait on a trustworthy scoring function, comparable to magic-state cultivation (55).

# Work mix rationale

Gains need better energy functions and sampling, much more compute-efficient free-energy protocols, and prospective blinded data for scaffold-diverse compounds.

# Verification

Needs unpublished measured affinities: one method with no target-specific data must meet the RMSE, unsigned-error and Kendall tau thresholds on at least 10 protein families and 200 compounds with novel scaffolds, in a prospective, pre-registered, blinded challenge (D3R/CASP-style or industry-sponsored).

# Plain explanation

To make a drug, chemists test thousands of molecules and keep those that stick tightly to the disease-causing protein. Each test costs time and money. If a computer could predict grip strength accurately, many bad molecules could be skipped.

The accuracy that matters is about one kilocalorie per mole of energy, which corresponds to a five-fold change in grip. Computer methods that change one molecule into a close cousin step by step can reach this for well-behaved cases. But for a molecule with a new overall shape on an unfamiliar protein, nothing reliable exists. In a 2024 blind contest, the best predictions correlated only modestly with the lab values.

Another twist: even the lab measurements disagree with each other by roughly this much, so there is a floor under what any prediction can achieve.

Fast AI methods that predict grip strength directly have been announced, and some give encouraging numbers, but they are mostly tested by their developers and vary a lot from one protein to another. The goal here is a method that works on new molecules, across protein families, without being tuned to each target.

# Student explanation

**Why 1 kcal/mol.** Binding free energy $\Delta G=RT\ln K_d$. At 298 K, $RT\approx0.59$ kcal/mol, so an error of 1 kcal/mol changes the predicted $K_d$ by $e^{1/0.59}\approx5.4$. Experimental reproducibility between laboratories is about 0.9 kcal/mol pairwise RMSE in public data, so a target of 1 to 1.2 kcal/mol RMSE is close to the limit.

**Current methods.** Relative free-energy perturbation (FEP) changes ligand A into B in the protein and in water; the difference of the two legs gives $\Delta\Delta G$. On a curated benchmark FEP+ has pairwise RMSE around 1.25 kcal/mol (Ross et al. 2023), but it needs similar ligands, careful setup (charge states, water, protein flexibility) and hours of GPU time per pair. Open implementations are somewhat less accurate. For nucleic-acid targets errors are larger.

**Blind tests.** In CASP16, 140 affinities on two targets were predicted by 30 groups; the best Kendall rank correlation was 0.42 against a noise ceiling near 0.73; giving experimental structures did not improve results, which points to the scoring function as the bottleneck.

**Learned models.** Boltz-2 (preprint, 2025) reports an average Pearson correlation of 0.66 on a four-target FEP+ subset and near-OpenFE performance on another set at over 1000 times lower cost, but also states that performance varies strongly between assays.

**DARC target.** At least 200 compounds across 10 protein families, scaffolds unlike the training data, RMSE at most 1.2 kcal/mol and Kendall tau at least 0.6, with no per-target tuning, prospectively.

**Reading a result.** When a paper reports a correlation or an RMSE, ask four questions: were the test molecules similar to the training ones, was it prospective, was any per-target tuning allowed, and how does the error compare with experimental repeatability.
