---
type: entry
slug: free-energy-enhanced-sampling
title: Free-energy methods and enhanced sampling
field: computational-chemistry
kind: ALGORITHM
status: MATURE
summary: Alchemical perturbation, umbrella sampling, metadynamics and path sampling compute free energies and rates that straightforward MD cannot reach in accessible time.
reliedOn: Binding affinities, solvation energies, polymorph stability, phase equilibria and nucleation rates are free-energy quantities; MD alone cannot sample their rare events.
dependsOn:
  - classical-force-fields-md
references:
  - title: R. W. Zwanzig, High-temperature equation of state by a perturbation method (1954)
    url: https://doi.org/10.1063/1.1740409
    kind: paper
  - title: C. H. Bennett, Efficient estimation of free energy differences from Monte Carlo data (1976)
    url: https://doi.org/10.1016/0021-9991(76)90078-4
    kind: paper
  - title: A. Laio and M. Parrinello, Escaping free-energy minima (2002)
    url: https://doi.org/10.1073/pnas.202427399
    kind: paper
  - title: P. G. Bolhuis et al., Transition path sampling (2002)
    url: https://doi.org/10.1146/annurev.physchem.53.082301.113146
    kind: paper
  - title: K. Zhu et al., Enhanced sampling in the age of machine learning (arXiv:2509.04291)
    url: https://arxiv.org/abs/2509.04291
    kind: paper
timeline:
  - date: 1954-03-01
    title: Free-energy perturbation
    body: Zwanzig's formula for free-energy differences (date given as the year/month of publication).
    source: https://doi.org/10.1063/1.1740409
  - date: 2002-10-29
    title: Metadynamics
    body: Laio and Parrinello introduce history-dependent bias for exploring free-energy landscapes (date given as approximate).
    source: https://doi.org/10.1073/pnas.202427399
  - date: 2015-02-01
    title: FEP+ prospective accuracy
    body: Wang et al. report relative binding free energies with errors near 1 kcal/mol on curated sets (date given as the year/month of publication).
    source: https://doi.org/10.1021/ja512751q
explainer:
  oneLine: Techniques that compute stability and rates of rare events that a plain simulation would never reach.
  flow:
    - Rare events are never seen in plain runs
    - Choose slow variables or a morph path
    - Add bias or follow the transformation
    - Recover the unbiased free energy
    - Compare with experiment
  glossary:
    - term: free energy
      meaning: The energy that counts at a given temperature, including disorder; it decides which state is stable and how fast things happen.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: collective variable
      meaning: A single number, such as a distance or an angle, chosen to track the slow change in a simulation.
      link: /research/free-energy-enhanced-sampling
    - term: enhanced sampling
      meaning: Tricks that push a simulation across barriers it would otherwise take too long to cross.
      link: /research/free-energy-enhanced-sampling
    - term: free-energy perturbation
      meaning: A way to compute energy differences by gradually transforming one molecule into another in a simulation.
      link: https://en.wikipedia.org/wiki/Free_energy_perturbation
    - term: umbrella sampling
      meaning: A technique that holds a simulation near successive points along a path so rare states are sampled evenly.
      link: https://en.wikipedia.org/wiki/Umbrella_sampling
    - term: binding free energy
      meaning: The energy that decides how tightly a drug molecule sticks to its protein target.
      link: https://en.wikipedia.org/wiki/Free_energy_perturbation
    - term: nucleation
      meaning: The first tiny seed of a new phase, such as an ice crystal in cold water.
      link: https://en.wikipedia.org/wiki/Nucleation
    - term: molecular dynamics
      meaning: A computer simulation that moves atoms step by step under the forces between them.
      link: /research/classical-force-fields-md
  readFirst:
    - title: Metadynamics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Metadynamics
      why: Intuitive description of filling in energy valleys.
    - title: Free energy perturbation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Free_energy_perturbation
      why: The morphing method behind binding free-energy calculations.
    - title: Enhanced sampling in the age of machine learning (Zhu et al.)
      url: https://arxiv.org/abs/2509.04291
      why: A recent review of how machine learning is changing the field.
site:
  published: true
  aiReviewed: true
---

## What it is

Thermodynamic observables are free energies, $A=-k_BT\ln Z$, not energies. Unbiased MD crosses barriers of height $\Delta F^\ddagger$ only at rate $\sim e^{-\Delta F^\ddagger/k_BT}$, so events with $\Delta F^\ddagger\gtrsim 15\,k_BT$ are out of reach.

## Method families

- **Alchemical free-energy perturbation (FEP) and thermodynamic integration**: a parameter $\lambda$ morphs one Hamiltonian into another, $\Delta A=\int_0^1\langle\partial H/\partial\lambda\rangle_\lambda d\lambda$; estimators are Zwanzig exponential averaging, Bennett acceptance ratio and MBAR. Used for relative and absolute binding free energies.
- **Biased sampling along collective variables (CVs)**: umbrella sampling with WHAM/MBAR, metadynamics, well-tempered metadynamics and OPES, adaptive biasing force. Quality depends on choosing CVs that capture the slow degrees of freedom.
- **Path and rare-event methods**: transition path sampling, forward-flux sampling, milestoning, string method; they estimate rates without bias.
- **Replica exchange / parallel tempering** and generalized-ensemble methods.
- **Learned approaches**: CV discovery by neural networks, Boltzmann generators, normalising-flow reweighting and ML potentials as the engine.

## Limits

Convergence is rarely provable: a bad CV gives a smooth but wrong free-energy surface (hysteresis). Force-field error propagates directly into the free energy, and quantum nuclear effects, polarisation and protonation are usually ignored. Good practice demands replicate runs and overlap diagnostics.

## Why it is foundational

Nearly every quantity compared with experiment in solution and in crystals is a free energy. Rate theories for nucleation, protein folding and catalysis depend on correct barriers and prefactors.

## Worth understanding

- Why error scales with the overlap of neighbouring $\lambda$ windows
- The committor and what makes a good reaction coordinate
- Metadynamics bias deposition and convergence

## Current frontier

Developments include machine-learned collective variables and committor estimation, normalising-flow and diffusion-model samplers, machine-learned potential/molecular-mechanics free-energy calculations, automated absolute binding free-energy workflows, and rigorous convergence diagnostics. Whether learned methods give provably unbiased results with better efficiency is under study.

# Plain explanation

Whether a drug sticks to a protein, or a crystal forms, depends on free energy, which is energy corrected for disorder. A plain simulation spends its time rattling around in one comfortable spot and almost never crosses to the next. Waiting for a rare event could take longer than the age of the universe on a computer.

Enhanced sampling gets around this. One family adds a gentle push that fills up valleys, like pouring sand into a valley until the walker can climb out. Another gradually turns one molecule into another on the computer, like a movie morph, and adds up the cost of each step. A third family follows only the successful rare trajectories.

All of these need a chosen 'view', a handful of numbers that track the slow change. A poor choice can make the answer look smooth but wrong, and the results cannot easily be proven converged.

These methods are the bridge from simulation to numbers chemists compare with experiment, such as binding strength, solubility and nucleation rate. Any error in the underlying model is passed straight into the free energy.

# Student explanation

**Why free energy.** Equilibrium and rates depend on $A=-k_BT\ln Z$. A barrier $\Delta F^\ddagger$ is crossed at a rate proportional to $e^{-\Delta F^\ddagger/k_BT}$, so barriers beyond about $15\,k_BT$ are inaccessible to direct molecular dynamics.

**Alchemical methods.** Define a Hamiltonian $H(\lambda)$ that morphs state A ($\lambda=0$) into state B ($\lambda=1$). Then $\Delta A=\int_0^1\langle\partial H/\partial\lambda\rangle_\lambda\,d\lambda$, estimated from simulations at several $\lambda$ values with estimators such as Zwanzig's exponential average, BAR and MBAR. In words: add up the average force needed to morph one molecule into the other. This gives relative and absolute binding free energies.

**Collective-variable methods.** Choose variables $s(\mathbf r)$ believed to describe the slow process. Umbrella sampling holds the system near successive values of $s$ and combines windows (WHAM or MBAR); metadynamics adds history-dependent hills to flatten the landscape; OPES and adaptive biasing force are modern relatives.

**Path methods.** Transition path sampling and forward-flux sampling collect reactive trajectories and compute rates without biasing.

**Pitfalls.** If $s$ misses an important slow variable, the sampling stalls (hysteresis). Overlap between neighbouring $\lambda$ windows controls the variance. Force-field errors enter directly; quantum nuclear effects and protonation are usually ignored.

**Learned methods.** Neural networks find collective variables or reweight data; this area is changing quickly.

**Practical notes.** Relative binding free-energy workflows run 10 to 20 lambda windows per perturbation, each for a few nanoseconds, and compare forward and reverse transformations as a consistency check. Packages include PLUMED for collective-variable biasing and OpenFE. Reports should include replicate runs, overlap matrices and cycle-closure errors.

**Things to check yourself.** Why does metadynamics converge to the negative free-energy surface? What makes a good reaction coordinate (hint: the committor)?
