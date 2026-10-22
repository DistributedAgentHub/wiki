---
type: problem
slug: ccsd-t-vs-dmc-noncovalent-reference-100-atoms
title: "Converged reference interaction energies for 100-atom noncovalent complexes: reconciling CCSD(T) and diffusion Monte Carlo"
entry: coupled-cluster-theory
status: IN_PROGRESS
origin: Al-Hamdani, Nagy, Barton, Kállay, Brandenburg and Tkatchenko, 2021 (reported disagreement)
ratings:
  difficulty: 40
  applicationValue: 34
  leverage: 46
workMix:
  theory: 30
  engineering: 10
  compute: 50
  empirical: 10
verification:
  route: BOUNDS
sources:
  - title: Al-Hamdani et al., Interactions between large molecules pose a puzzle for reference quantum mechanical methods, Nat. Commun. 12, 3927 (2021)
    url: https://doi.org/10.1038/s41467-021-24119-3
  - title: Al-Hamdani et al., arXiv:2009.08927
    url: https://arxiv.org/abs/2009.08927
  - title: Schäfer, Irmler, Gallo, Grüneis, Understanding discrepancies of wavefunction theories for large molecules (arXiv:2407.01442)
    url: https://arxiv.org/abs/2407.01442
  - title: Lambie, Kats, Usyvat, Alavi, On the applicability of CCSD(T) for dispersion interactions in large conjugated systems (arXiv:2411.13986)
    url: https://arxiv.org/abs/2411.13986
  - title: Masios et al., Averting the infrared catastrophe in the gold standard of quantum chemistry, Phys. Rev. Lett. 131, 186401 (2023)
    url: https://doi.org/10.1103/PhysRevLett.131.186401
  - title: Shi et al., Efficient first-principles modeling of complex molecular crystals at sub-chemical accuracy (arXiv:2603.02180, preprint)
    url: https://arxiv.org/abs/2603.02180
links:
  - to: neural-wavefunction-vmc-large-molecules-transferable
    kind: BUILDS_ON
    note: The DMC side of the discrepancy is fixed-node error set by the trial nodal surface; neural-network trial wavefunctions (VMC, and DMC on neural trials) improve the nodes and are named as the independent third method needed to arbitrate.
timeline:
  - date: 2020-09-18
    title: Discrepancy reported
    body: Al-Hamdani et al. post the CCSD(T) versus DMC disagreement for large complexes (arXiv date; published 2021).
    source: https://arxiv.org/abs/2009.08927
  - date: 2023-11-03
    title: Infrared catastrophe of (T) analysed
    body: Masios et al. analyse the divergence of the perturbative triples term in large polarisable systems (date approximate).
    source: https://doi.org/10.1103/PhysRevLett.131.186401
  - date: 2024-07-01
    title: Triples proposed as the cause
    body: Schäfer et al. attribute the discrepancy to the (T) treatment and propose modified methods (preprint).
    source: https://arxiv.org/abs/2407.01442
  - date: 2024-11-21
    title: Model-Hamiltonian test supports CCSD(T)
    body: Lambie et al. find no CCSD(T) overbinding in PPP-model stacks up to dibenzocoronene dimers (preprint).
    source: https://arxiv.org/abs/2411.13986
explainer:
  oneLine: Two trusted methods give different answers for how strongly large flat molecules stick together; which is right?
  flow:
    - Gold-standard and Monte Carlo disagree
    - Large flat molecules, up to 8 kcal/mol
    - Triples? nodes? model?
    - Need a third, stronger calculation
    - References for cheaper methods depend on it
  glossary:
    - term: CCSD(T)
      meaning: A coupled-cluster method nicknamed the gold standard of quantum chemistry for ordinary molecules; accurate but costs grow steeply with size.
      link: /research/coupled-cluster-theory
    - term: quantum Monte Carlo
      meaning: Methods that solve the electron problem by random sampling, trading exact answers for statistical error bars.
      link: /research/quantum-monte-carlo
    - term: fixed-node approximation
      meaning: A trick in diffusion Monte Carlo that avoids the sign problem by fixing where the wavefunction changes sign, at the price of a bias.
      link: /research/quantum-monte-carlo
    - term: dispersion
      meaning: A weak, always-present attraction between molecules from momentary electron fluctuations, which holds layers of graphite together.
      link: https://en.wikipedia.org/wiki/London_dispersion_force
    - term: kcal/mol
      meaning: A unit of energy per mole of molecules; 1 kcal/mol changes a reaction rate by about a factor of five at room temperature.
      link: https://en.wikipedia.org/wiki/Calorie
    - term: electron correlation
      meaning: The way electrons dodge each other because they repel; leaving this out of a calculation is the main source of error in simple methods.
      link: https://en.wikipedia.org/wiki/Electron_correlation
    - term: basis set
      meaning: The set of simple mathematical building blocks used to write an electron's orbital; bigger sets are more accurate and costlier.
      link: https://en.wikipedia.org/wiki/Basis_set_(chemistry)
  readFirst:
    - title: Interactions between large molecules pose a puzzle for reference quantum mechanical methods
      url: https://doi.org/10.1038/s41467-021-24119-3
      why: The open-access paper that reported the disagreement.
    - title: London dispersion force (Wikipedia)
      url: https://en.wikipedia.org/wiki/London_dispersion_force
      why: What the interaction is.
    - title: Coupled cluster (Wikipedia)
      url: https://en.wikipedia.org/wiki/Coupled_cluster
      why: Background on the method in question.
site:
  aiReviewed: true
---

For supramolecular complexes of 50–200 atoms with large, polarisable π systems (the coronene dimer, the C$_{60}$@\[6]CPPA ball-and-socket complex, the C$_{60}$ buckycatcher, circumcoronene and larger stacks), localized CCSD(T) in the complete-basis limit and fixed-node DMC disagree by several kcal/mol, which corresponds to orders of magnitude in association constants. Determine the error of each method and produce reference interaction energies with a demonstrated uncertainty of at most 0.5 kcal/mol (about 2 kJ/mol) for a benchmark set of such complexes.

Concretely: (i) identify which approximation is responsible for the discrepancy (the perturbative triples (T) and its missing screening in large, small-gap systems; the fixed-node approximation and time-step or locality errors in DMC; local-correlation or basis-set truncation) and quantify it with independent higher-level methods, e.g. CCSDT(Q), CCSDTQ or full-triples treatments on tractable representatives, AFQMC, or neural-network VMC/DMC; (ii) provide an affordable correction that makes CCSD(T)-level cost methods reliable for this class (as opposed to defining them away with a model Hamiltonian).

# State of the art

- **The discrepancy.** Al-Hamdani et al. (Nat. Commun. 2021; arXiv:2009.08927) found that LNO-CCSD(T) and DMC interaction energies for large supramolecular complexes differ by up to about 8 kcal/mol; the coronene dimer is the best-known case. Basis-set incompleteness and local approximations were examined and did not remove it.
- **Argument that (T) is at fault.** Schäfer, Irmler, Gallo and Grüneis (arXiv:2407.01442, preprint at the time of writing; check for the published version) report that they pinpoint the source of the discrepancy in the perturbative treatment of triples in CCSD(T) for large, highly polarisable systems and propose modified coupled-cluster methods that improve noncovalent interaction energies on the hundred-atom scale. Related earlier work (Masios et al., Phys. Rev. Lett. 131, 186401, 2023) analysed how the (T) correction diverges in the limit of large polarisable systems and proposed a repair.
- **Argument that CCSD(T) is adequate.** Lambie, Kats, Usyvat and Alavi (arXiv:2411.13986) use a Pariser–Parr–Pople model Hamiltonian with CCSDTQ and CCSDT(Q) benchmarks for stacks up to the dibenzocoronene dimer and find no sign that CCSD(T) overestimates the interaction energy; they therefore place the burden on the DMC side or on other approximations. Model-Hamiltonian conclusions may not transfer to the all-electron case.
- **Status.** Not settled: as of October 2026 the two readings above coexist in the literature and no all-electron higher-order coupled-cluster or independent QMC benchmark that the community regards as decisive has been established for the largest complexes. Recent crystal-lattice work (Shi et al., arXiv:2603.02180, preprint) uses correlated wavefunction theory with a many-body expansion for molecular crystals and assumes CCSD(T)-type reliability for polarisable organics.

# Applications

Reference energies for dispersion-bound systems calibrate DFT dispersion corrections, semi-empirical methods and machine-learned potentials, and decide crystal polymorph rankings, host–guest binding and π-stacking in drug design. A resolved method choice would also tell practitioners when CCSD(T) can be trusted for nanoscale π systems.

# Resolution criteria

Peer-reviewed benchmark values for at least five complexes of 100 or more atoms with an uncertainty of at most 0.5 kcal/mol, supported by agreement between two independent high-level approaches (for example higher-order coupled cluster with an extrapolated or corrected triples treatment and a converged-nodes QMC or AFQMC calculation), together with an explanation of the sign and size of the earlier disagreement.

# Rating rationale

Difficulty 40: partial explanations exist (the perturbative triples), and decisive calculations with higher-order coupled cluster or converged QMC are feasible but costly. Application value 34: it improves reference data for dispersion-bound systems rather than a deployed technology. Leverage 46: the answer decides how much trust a main reference method for large molecules deserves, which affects DFT dispersion fitting and ML datasets.

# Work mix rationale

Mostly large calculations with higher-order coupled cluster and QMC; theory is needed to interpret and correct (T).

# Verification

Quantity: interaction energies of noncovalent complexes of 100 or more atoms with uncertainty of at most 0.5 kcal/mol for at least five complexes. The record is checked by agreement between two independent high-level approaches (higher-order coupled cluster with extrapolated or corrected triples, and a converged-nodes QMC or AFQMC calculation) with the geometries, basis sets and error budgets published.

# Plain explanation

Flat, carbon-rich molecules stick to each other through weak attractions. How strongly they stick matters for graphene-like materials, drug binding and crystals. For small molecules, two of the most trusted calculation methods, one called the gold standard and one based on random sampling, agree very closely. For large molecules of about a hundred atoms they do not: in some cases they differ by 8 kcal/mol, which would change the predicted stickiness by a factor of a million.

Nobody has an experiment that settles it, because the gas-phase binding of these big molecules is hard to measure. So scientists have to work out which calculation has the error. One camp says the gold-standard method over-counts a correction for large molecules. Another camp has tested a simplified model and found the gold standard fine. A third notes that the random-sampling method has its own approximations.

What is needed is a stronger calculation that can be done on a hundred-atom molecule, or a simple, convincing explanation. Until then, the references used to tune cheaper methods for large molecules carry hidden uncertainty.

# Student explanation

**The discrepancy.** Al-Hamdani et al. (2021) computed interaction energies for supramolecular complexes (coronene dimer, C$_{60}$ in a ball-and-socket host, a buckycatcher) with local natural orbital CCSD(T) and with fixed-node diffusion Monte Carlo (DMC). For several complexes the two disagree by up to about 8 kcal/mol, much larger than the claimed uncertainties of either method. Since association constants depend exponentially on energy, the gap amounts to orders of magnitude.

**Candidate explanations.**

1. _(T) is too large._ In CCSD(T) the triples are added in perturbation theory. For large polarisable systems with small HOMO-LUMO gaps, the infinite-order screening of triples is missing, so (T) can overbind. Schäfer et al. (2024) and Masios et al. (2023) argue this.
2. _CCSD(T) is fine._ Lambie et al. (2024) used a Pariser–Parr–Pople model, where more complete coupled-cluster levels (CCSDT, CCSDT(Q), CCSDTQ) can be run, and found no sign of overbinding.
3. _DMC has errors._ Fixed-node bias, finite time step or incomplete localisation may shift DMC energies.
4. _Numerical details._ Basis-set and local-approximation errors were checked and did not remove the gap.

**What would settle it.** Higher-order coupled cluster or an independent approach (AFQMC, neural-network VMC) on the real molecules with controlled error, or a validated correction to (T).

**Why it matters.** These energies calibrate dispersion corrections in DFT, machine-learned potentials and crystal energies.

**Things to check yourself.** Why does a small HOMO-LUMO gap make perturbation theory risky? How does the fixed-node error scale with the node error?
