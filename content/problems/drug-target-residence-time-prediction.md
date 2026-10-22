---
type: problem
slug: drug-target-residence-time-prediction
title: Predicting drug-target residence times (koff) from structure within a factor of three
entry: biomolecular-molecular-dynamics
status: OPEN
origin: Copeland, Pompliano and Meek, 2006 (residence time as a determinant of in vivo efficacy); simulation methods such as tauRAMD (Kokh et al., 2018)
ratings:
  difficulty: 61
  applicationValue: 42
  leverage: 28
workMix:
  theory: 15
  engineering: 10
  compute: 55
  empirical: 20
verification:
  route: OBSERVATION
sources:
  - title: Kokh et al., Machine learning analysis of tauRAMD trajectories to decipher molecular determinants of drug-target residence times
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6543870/
  - title: Review of simulation methods for drug binding kinetics, Front. Mol. Biosci. (2022)
    url: https://www.frontiersin.org/journals/molecular-biosciences/articles/10.3389/fmolb.2022.899805/full
  - title: Kinetics of drug binding and residence time, Annu. Rev. Phys. Chem. (2019)
    url: https://pubmed.ncbi.nlm.nih.gov/30786217/
  - title: Predicting residence time of GPCR ligands with machine learning (HITS KBBox)
    url: https://kbbox.h-its.org/toolbox/examples/predicting-residence-time-of-gpcr-ligands-with-machine-learning/
links:
  - to: boltzmann-ensemble-prediction-multistate-proteins
    kind: BUILDS_ON
    note: Unbinding paths pass through rare protein conformations that an accurate ensemble model would have to supply.
  - to: binding-affinity-novel-scaffolds-one-kcal
    kind: BUILDS_ON
    note: Rates reuse the force fields, protonation and water treatment that limit affinity prediction.
  - to: force-field-folded-and-disordered-proteins
    kind: BUILDS_ON
    note: k_off depends exponentially on the unbinding barrier (1 kcal/mol ≈ 5.4×), and absolute rate predictions are reported to depend strongly on force field and water model, so a factor-3 accuracy target needs a force field without systematic over-stabilisation of association.
timeline:
  - date: 2006-01-01
    title: Residence time as a drug property
    body: Copeland, Pompliano and Meek argue that drug-target residence time rather than affinity can determine in vivo duration of action.
    source: https://doi.org/10.1038/nrd2082
  - date: 2019-01-01
    title: ML on tauRAMD trajectories
    body: Trajectory features from random-acceleration MD improve residence-time models for GPCR and HSP90 ligands.
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6543870/
  - date: 2022-06-01
    title: Review of koff simulation methods
    body: Frontiers review surveys simulation methods, force-field effects and HPC/ML prospects for computing dissociation rates.
    source: https://www.frontiersin.org/journals/molecular-biosciences/articles/10.3389/fmolb.2022.899805/full
explainer:
  oneLine: Predicting how long a drug stays stuck to its target before it lets go.
  flow:
    - Drug sits in pocket
    - "Rare event: drug escapes"
    - Extra push speeds up simulation
    - Convert to real-world rate
    - Compare with measured residence time
  glossary:
    - term: residence time
      meaning: How long a drug stays stuck to its target before letting go.
      link: https://en.wikipedia.org/wiki/Receptor%E2%80%93ligand_kinetics
    - term: dissociation constant
      meaning: A number that says how tightly a drug sticks to its target; smaller means tighter.
      link: https://en.wikipedia.org/wiki/Dissociation_constant
    - term: molecular dynamics
      meaning: Computer simulation that moves every atom according to forces, step by tiny step, to watch a molecule wiggle and change shape.
      link: /research/biomolecular-molecular-dynamics
    - term: enhanced sampling
      meaning: Tricks that push a simulation over high energy barriers so rare events such as a drug leaving its pocket can be seen in reasonable time.
      link: /research/biomolecular-molecular-dynamics
    - term: force field
      meaning: A set of formulas and numbers that give the energy of a molecule from the positions of its atoms, used to run simulations.
      link: /research/biomolecular-molecular-dynamics
    - term: free energy
      meaning: The energy-like quantity that decides which state a molecular system prefers; differences in it set how tightly a drug binds.
      link: https://en.wikipedia.org/wiki/Gibbs_free_energy
    - term: binding pocket
      meaning: A cavity on a protein surface whose shape and chemistry fit a particular small molecule.
      link: https://en.wikipedia.org/wiki/Binding_site
    - term: ligand
      meaning: A small molecule, such as a drug, that binds to a protein.
      link: https://en.wikipedia.org/wiki/Ligand_(biochemistry)
  readFirst:
    - title: Receptor-ligand kinetics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Receptor%E2%80%93ligand_kinetics
      why: Explains on-rates, off-rates and why residence time matters.
    - title: Metadynamics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Metadynamics
      why: A common way to speed up rare events in simulations.
    - title: Molecular dynamics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Molecular_dynamics
      why: Background on the simulations being accelerated.
site:
  aiReviewed: true
---

**Task.** For a drug-like ligand bound to a protein target of known or predicted structure, predict the dissociation rate constant $k_\mathrm{off}$ (residence time $\tau = 1/k_\mathrm{off}$), including the slow regime $\tau > 1$ hour, which governs duration of target engagement for many drugs.

**Concrete target.** On a prospective, blinded set of at least 100 ligands across at least 6 target classes (kinases, GPCRs, HSP90-like ATPases, proteases, ...), with $\tau$ ranging from seconds to hours, a method run without target-specific kinetic training data predicts $\log_{10} k_\mathrm{off}$ within 0.5 (a factor of about 3) for $\ge 80\%$ of compounds, with Spearman $\rho \ge 0.7$ within each target series, and at a cost of at most a few GPU-hours per compound (so that lead-optimisation programmes can use it).

It is difficult because unbinding is a rare event over high free-energy barriers (multiples of $k_BT$), the rate depends exponentially on the barrier ($k \propto e^{-\Delta G^\ddagger/k_BT}$, so 1 kcal/mol is a factor of about 5.4), the dominant pathway may involve slow protein rearrangements, water displacement and induced fit, and the available experimental kinetics data are sparse and heterogeneous compared with affinity data.

# State of the art

- **Enhanced-sampling MD.** Residence times are typically orders of magnitude longer than directly simulable timescales, so methods use biased or accelerated dynamics. tauRAMD (random acceleration MD; Kokh et al.) estimates relative residence times from the time to dissociation under a small random force, and is reported to give useful rank correlations within congeneric series for targets such as HSP90 and GPCRs (no single correlation value is quoted here, as reported performance varies by target and protocol); metadynamics, weighted-ensemble and milestoning variants give pathways and absolute rates in favourable systems (reviewed in Frontiers in Molecular Biosciences 2022 and the Annual Review of Physical Chemistry 2019).
- **Absolute rates.** Absolute predictions within a factor of three remain rare and depend strongly on force-field and water-model choice; most successful reports are retrospective, on one or a few targets, and with protocols tuned on those targets.
- **Machine learning.** ML on tauRAMD trajectory features and on structure-based descriptors improves correlation in-series (Kokh et al., 2019), but, as reviewed for GPCRs, scarce kinetics data are the main bottleneck.
- **Generative ensemble emulators** (BioEmu, AlphaFlow) sample equilibrium ensembles, not transition kinetics; no emulator is known to predict unbinding rates.
- **Not shown.** No prospective, multi-target blinded evaluation has demonstrated the target accuracy; no community benchmark analogous to D3R for kinetics is in wide use as of October 2026.

# Applications

Residence time often tracks in vivo efficacy and duration of action better than equilibrium affinity, particularly for slowly dissociating covalent-like or induced-fit inhibitors; predicting it would enable kinetics-guided optimisation (selectivity via off-rates, durable target occupancy at lower dose, safety) before synthesis.

# Resolution criteria

A refereed prospective evaluation, with experimental $k_\mathrm{off}$ measured after predictions were frozen (SPR, TR-FRET, jump dilution) for at least 100 ligands on at least 6 target classes, in which a single protocol (not tuned per target) satisfies the factor-of-three and rank-correlation criteria above at a stated compute cost.

# Rating rationale

Rare-event sampling plus force-field error and no prospective benchmark make this harder than co-folding generalisation (47) and close to scaffold-agnostic affinity (63) in difficulty. Application value 42: concrete benefit to kinetics-driven optimisation, much smaller than affinity (76) because koff is usually measured. Leverage 28 as a drug-discovery-specific capability that reuses rather than unlocks other methods.

# Work mix rationale

Rare-event simulation cost dominates, with force-field accuracy and scarce kinetics data as the other walls.

# Verification

Needs new k_off measurements (SPR, TR-FRET or jump dilution) taken after predictions are frozen, for at least 100 ligands across at least 6 target classes: a single untuned protocol must meet the factor-of-three and rank-correlation criteria at a stated compute budget.

# Plain explanation

Most pictures of drugs focus on how tightly they hold on. But what also matters for many medicines is how long they stay on. A drug that releases quickly may stop working soon after the blood level falls, while one that lets go slowly can keep working for much longer.

This staying time is called residence time, and it is the inverse of the rate at which the drug leaves, usually written koff. For some drugs it is minutes, for others many hours.

Predicting it on a computer is hard. Watching a drug leave in a simulation is like waiting for a rare event: ordinary simulations cover only a short time, much shorter than the real hours. Scientists add extra pushes to make the molecule leave sooner, then work out what the natural time would have been. Tiny errors in the energy rules turn into big errors in time, because the time depends exponentially on the energy barrier.

The aim is to predict residence times within a factor of three for new drugs on different targets, at a cost that a drug company can afford for many molecules.

# Student explanation

**Kinetics versus thermodynamics.** Binding strength is $K_d=k_{off}/k_{on}$. Two drugs with the same $K_d$ can have different $k_{off}$. Residence time $\tau=1/k_{off}$ has been linked to duration of action in vivo (Copeland and colleagues, 2006).

**Why it is hard to compute.** Dissociation is an activated process: rate $\propto e^{-\Delta G^\ddagger/k_BT}$. A 1 kcal/mol error in the barrier is about a factor of 5 in rate. Typical $\tau$ from minutes to hours sit many orders of magnitude beyond direct molecular dynamics timescales (microseconds to milliseconds), so methods rely on enhanced sampling. tauRAMD applies a small random force and measures the time to escape; metadynamics, weighted ensembles and milestoning compute escape paths and rates. Pathways can involve slow motions of the protein and of water.

**Current status.** Methods give good rank orders within a series of similar molecules on selected targets (HSP90, GPCRs), often using protocols tuned for those targets, and typically retrospectively. Absolute rates to a factor of 3 are rare. Machine learning on simulation features helps but is limited by a lack of kinetic data compared with affinity data.

**DARC target.** Prospective, blinded: at least 100 ligands on 6 target classes; 80 percent within 0.5 log units (factor 3) of measured $k_{off}$ and rank correlation of 0.7 within each target; with a cost of a few GPU-hours per compound.

**Connection.** It depends on the same force fields and free-energy tools as affinity prediction and on the correct protein conformations.

**Reading a result.** Ask whether the protocol was tuned on the same targets it is evaluated on, whether absolute rates or only rankings are reported, how many replicate simulations back each number, and whether the experimental rates were measured by comparable assays.
