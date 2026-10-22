---
type: problem
slug: force-field-folded-and-disordered-proteins
title: One classical force field accurate for folded proteins, disordered proteins and weak protein–protein association
entry: classical-force-fields-md
status: IN_PROGRESS
origin: Best, Lindorff-Larsen, Shaw and others, 2010s; Robustelli, Piana and Shaw, 2018 (a99SB-disp)
ratings:
  difficulty: 51.5
  applicationValue: 62
  leverage: 52
workMix:
  theory: 30
  engineering: 5
  compute: 35
  empirical: 30
verification:
  route: REPRODUCTION
sources:
  - title: Robustelli, Piana, Shaw, Developing a molecular dynamics force field for both folded and disordered protein states, PNAS (2018)
    url: https://doi.org/10.1073/pnas.1800690115
  - title: Piana, Donchev, Robustelli, Shaw, Water dispersion interactions strongly influence simulated structural properties of disordered protein states, J. Phys. Chem. B (2015)
    url: https://doi.org/10.1021/jp508971m
  - title: "Huang et al., CHARMM36m: an improved force field for folded and intrinsically disordered proteins, Nat. Methods (2017)"
    url: https://doi.org/10.1038/nmeth.4067
  - title: Lindorff-Larsen et al., Systematic validation of protein force fields against experimental data, PLoS ONE (2012)
    url: https://doi.org/10.1371/journal.pone.0032131
timeline:
  - date: 2012-01-01
    title: Force-field validation
    body: Eight force fields tested against NMR data (date given as year of publication).
    source: https://doi.org/10.1371/journal.pone.0032131
  - date: 2015-03-01
    title: Water dispersion
    body: Piana et al. show water dispersion strongly affects disordered-state dimensions (date approximate).
    source: https://doi.org/10.1021/jp508971m
  - date: 2017-01-01
    title: CHARMM36m
    body: Improved force field for folded and disordered proteins (date approximate).
    source: https://doi.org/10.1038/nmeth.4067
  - date: 2018-05-01
    title: a99SB-disp
    body: Force field balanced for folded and disordered proteins (date approximate).
    source: https://doi.org/10.1073/pnas.1800690115
explainer:
  oneLine: No single simple force field yet handles both tidy folded proteins and floppy disordered ones correctly.
  flow:
    - Folded and disordered proteins differ
    - Older fields over-compact disordered ones
    - Fixes trade off against folded stability
    - Stickiness between proteins also off
    - Need balanced, benchmarked field
  glossary:
    - term: force field
      meaning: A simple formula that gives the energy of atoms from springs and charges, cheap enough to simulate huge molecules.
      link: /research/classical-force-fields-md
    - term: intrinsically disordered protein
      meaning: A protein with no fixed folded shape that wiggles between many forms.
      link: https://en.wikipedia.org/wiki/Intrinsically_disordered_proteins
    - term: molecular dynamics
      meaning: A computer simulation that moves atoms step by step under the forces between them.
      link: /research/classical-force-fields-md
    - term: dispersion
      meaning: A weak, always-present attraction between molecules from momentary electron fluctuations, which holds layers of graphite together.
      link: https://en.wikipedia.org/wiki/London_dispersion_force
    - term: binding free energy
      meaning: The energy that decides how tightly a drug molecule sticks to its protein target.
      link: https://en.wikipedia.org/wiki/Free_energy_perturbation
    - term: hydrophobic
      meaning: Water-avoiding; oily parts of a protein cluster together away from water.
      link: https://en.wikipedia.org/wiki/Hydrophobic_effect
    - term: free energy
      meaning: The energy that counts at a given temperature, including disorder; it decides which state is stable and how fast things happen.
      link: https://en.wikipedia.org/wiki/Free_energy
  readFirst:
    - title: Intrinsically disordered proteins (Wikipedia)
      url: https://en.wikipedia.org/wiki/Intrinsically_disordered_proteins
      why: What disordered proteins are and why they matter.
    - title: Developing a molecular dynamics force field for both folded and disordered protein states (PNAS)
      url: https://doi.org/10.1073/pnas.1800690115
      why: Open-access description of the benchmark and compromise.
    - title: Force field (chemistry) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Force_field_(chemistry)
      why: Background on the energy terms.
site:
  aiReviewed: true
---

Develop a biomolecular force field (non-polarisable with an explicit water model, or polarisable at comparable cost) that, with no per-system adjustment, simultaneously

1. keeps folded proteins stable and reproduces NMR/SAXS observables over microsecond to millisecond simulations (backbone and side-chain order parameters, J-couplings, residual dipolar couplings),
2. reproduces the global dimensions (radius of gyration within experimental error, about 5%) and secondary-structure propensities (chemical shifts) of intrinsically disordered proteins and unfolded states over a benchmark of at least 30 disordered proteins and peptides,
3. predicts reversible folding free energies of fast-folding proteins and mutational $\Delta\Delta G$ values within 1 kcal/mol, and
4. gives protein–protein, protein–ligand and protein–membrane association constants without systematic over-stabilisation (within 1 kcal/mol of experiment for a set of weakly interacting pairs).

The balance of water–protein versus protein–protein dispersion and of backbone torsional preferences is the known source of conflict between these targets.

# State of the art

- **Compaction problem.** Earlier generations of force fields produce overly compact disordered states and overly stable protein–protein association (Piana et al., J. Phys. Chem. B 2015, on water dispersion; Lindorff-Larsen et al., PLoS ONE 2012, on folded proteins).
- **Compromise force fields.** a99SB-disp (Robustelli, Piana and Shaw, PNAS 2018) was parametrised with a modified TIP4P-D water and benchmarked on 21 systems with more than 9,000 experimental data points covering folded proteins, peptides and disordered proteins; the authors report that none of the force fields they tested captured all of folded-protein stability, disordered-protein dimensions and secondary-structure propensities at once before their revision. CHARMM36m (Huang et al., Nat. Methods 2017) improves disordered ensembles, but the Robustelli et al. benchmark reports that it does not fully remove over-compaction of disordered proteins.
- **Remaining issues.** Phosphorylated and charged disordered proteins, membrane proteins, nucleic-acid/protein condensates and protein–protein affinities remain error-prone in all fixed-charge force fields; polarisable force fields (AMOEBA, Drude) are costlier and not yet shown to resolve the trade-off.
- **ML-based.** Machine-learned potentials for large proteins are an active direction but not yet validated on this benchmark class.

# Applications

Predictive simulation of disordered regions, condensates and signalling interactions (a large fraction of the human proteome is disordered), and of drug binding in flexible targets; fewer ad hoc force-field choices in structural biology.

# Resolution criteria

A published force field meeting the four targets on a pre-registered benchmark set (at least 30 disordered, 20 folded and 20 association systems), reproduced by an independent group using a different MD engine.

# Rating rationale

Difficulty 51.5: the physical trade-off is understood and revisions keep improving, but the fixed functional form may cap accuracy. Application value 62: structural biology and drug discovery rely on MD of flexible proteins. Leverage 52: all biomolecular MD results depend on the force field.

# Work mix rationale

Force-field functional form and parameter fitting against large NMR and SAXS datasets with long simulations.

# Verification

A published force field must meet the four stated targets on a pre-registered set of at least 30 disordered, 20 folded and 20 association systems, reproduced by an independent group on a different MD engine. Run lengths, sampling-convergence checks and the comparison observables (for example NMR and SAXS) are fixed in the spec.

# Plain explanation

Proteins come in two broad kinds. Many fold into a fixed shape, like a tidy origami. Others have no fixed shape and wriggle among many forms, the so-called disordered proteins. A large share of human proteins have disordered stretches that matter for signalling and disease.

Computer simulations of proteins use a force field, a simple set of rules for how atoms push and pull. Older force fields were tuned on folded proteins and made disordered proteins collapse into compact blobs, and they made proteins stick together too strongly. Newer ones, tuned against experiment, fix some of this, but fixing one thing often breaks another. For example, strengthening the attraction between water and protein makes disordered proteins more open, but can start to unfold folded ones.

The challenge is a single set of rules that gets folded proteins, disordered proteins and the stickiness between proteins right at the same time, for many test cases, without special tuning. It is not clear whether the simple pair-of-charges form can do that.

# Student explanation

**Targets.** A force field that, with one parameter set: (1) keeps folded proteins stable over microsecond to millisecond simulations and matches NMR order parameters, J-couplings and residual dipolar couplings; (2) reproduces radii of gyration (within about 5%) and secondary-structure propensities of disordered proteins, tested on at least 30 systems; (3) gives folding free energies and mutation effects within 1 kcal/mol; (4) gives protein–protein and protein–ligand association without over-stabilisation.

**History.** Lindorff-Larsen et al. (2012) tested eight force fields on folded proteins. Piana et al. (2015) showed water dispersion strongly affects disordered-state dimensions. CHARMM36m (2017) tuned CHARMM for both classes. Robustelli et al. (2018) benchmarked force fields on 21 systems with over 9,000 data points and found none matched folded-protein stability, disordered-protein dimensions and secondary-structure propensities together; their a99SB-disp compromise improved on this.

**Tension.** Making water interact more strongly with the protein (to open disordered chains) can destabilise folded states and change binding strengths; torsion potentials affect helix and sheet propensities. Fixed point charges cannot adapt to different surroundings.

**Open directions.** Polarisable models (AMOEBA, Drude), improved water models, and machine-learned potentials for biomolecules; none yet shows an unambiguous win across this benchmark.

**Practical notes.** Validation observables include NMR chemical shifts, scalar couplings, relaxation rates, SAXS radius of gyration and FRET distances. These averages depend on both the force field and sampling, so long simulations and ensemble reweighting are used, and comparisons need forward models of each observable, which add their own error.

**Things to check yourself.** Why does a stronger water–protein attraction open disordered chains? How would you build a fair benchmark that avoids tuning on the test data?
