---
type: problem
slug: neural-wavefunction-vmc-large-molecules-transferable
title: Neural-network wavefunctions at chemical accuracy for 100+ electron molecules with transferable, amortised training
entry: quantum-monte-carlo
status: IN_PROGRESS
origin: Pfau, Spencer, Matthews and Foulkes, 2019 (FermiNet); Hermann, Schätzle and Noé, 2019 (PauliNet)
ratings:
  difficulty: 54
  applicationValue: 36
  leverage: 49.5
workMix:
  theory: 30
  engineering: 25
  compute: 40
  empirical: 5
verification:
  route: REPRODUCTION
sources:
  - title: Pfau et al., Ab initio solution of the many-electron Schrödinger equation with deep neural networks, Phys. Rev. Research 2, 033429 (2020)
    url: https://doi.org/10.1103/physrevresearch.2.033429
  - title: von Glehn and Spencer, A self-attention ansatz for ab-initio quantum chemistry (arXiv:2211.13672)
    url: https://arxiv.org/abs/2211.13672
  - title: "Li et al., Forward Laplacian: a new computational framework for neural network-based variational Monte Carlo (arXiv:2307.08214)"
    url: https://arxiv.org/abs/2307.08214
  - title: Scherbela, Gerard, Grohs, Towards a transferable fermionic neural wavefunction for molecules, Nat. Commun. (2024)
    url: https://doi.org/10.1038/s41467-023-44216-9
  - title: Ren et al., Towards the ground state of molecules via diffusion Monte Carlo on neural networks, Nat. Commun. (2023)
    url: https://doi.org/10.1038/s41467-023-37609-3
  - title: Hermann et al., Ab initio quantum chemistry with neural-network wavefunctions, Nat. Rev. Chem. (2023)
    url: https://doi.org/10.1038/s41570-023-00516-8
timeline:
  - date: 2019-09-05
    title: FermiNet
    body: Neural-network ansatz for molecular ground states (arXiv date).
    source: https://arxiv.org/abs/1909.02487
  - date: 2022-11-24
    title: Psiformer
    body: Self-attention ansatz reaches higher accuracy on larger molecules (arXiv date).
    source: https://arxiv.org/abs/2211.13672
  - date: 2023-07-16
    title: Forward Laplacian / LapNet
    body: Up to 20 times cheaper optimisation (arXiv date).
    source: https://arxiv.org/abs/2307.08214
  - date: 2024-01-02
    title: Transferable neural wavefunction
    body: One wavefunction across many molecules.
    source: https://doi.org/10.1038/s41467-023-44216-9
explainer:
  oneLine: Neural networks can solve the electron problem very accurately for small molecules, but not yet cheaply for big ones.
  flow:
    - Neural network represents quantum state
    - Sample electrons, lower the energy
    - Accurate for small molecules
    - Cost grows steeply with size
    - "Aim: reusable, cheap, certified"
  glossary:
    - term: neural network
      meaning: A flexible function with many adjustable numbers, fitted to data by training.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: quantum Monte Carlo
      meaning: Methods that solve the electron problem by random sampling, trading exact answers for statistical error bars.
      link: /research/quantum-monte-carlo
    - term: variational principle
      meaning: The rule that any trial wavefunction gives an energy at or above the true ground-state energy, so lower is better.
      link: https://en.wikipedia.org/wiki/Variational_Monte_Carlo
    - term: wavefunction
      meaning: The mathematical object that holds everything quantum mechanics can say about a system, such as where its electrons are likely to be.
      link: https://en.wikipedia.org/wiki/Wave_function
    - term: CCSD(T)
      meaning: A coupled-cluster method nicknamed the gold standard of quantum chemistry for ordinary molecules; accurate but costs grow steeply with size.
      link: /research/coupled-cluster-theory
    - term: chemical accuracy
      meaning: An error of about 1 kcal/mol (4 kJ/mol), roughly what is needed to predict reaction outcomes reliably.
      link: /research/coupled-cluster-theory
    - term: fixed-node approximation
      meaning: A trick in diffusion Monte Carlo that avoids the sign problem by fixing where the wavefunction changes sign, at the price of a bias.
      link: /research/quantum-monte-carlo
  readFirst:
    - title: Ab initio quantum chemistry with neural-network wavefunctions (Nat. Rev. Chem.)
      url: https://doi.org/10.1038/s41570-023-00516-8
      why: Accessible review for chemists.
    - title: Variational Monte Carlo (Wikipedia)
      url: https://en.wikipedia.org/wiki/Variational_Monte_Carlo
      why: Background on the training principle.
    - title: Towards a transferable fermionic neural wavefunction for molecules (Nat. Commun.)
      url: https://doi.org/10.1038/s41467-023-44216-9
      why: Open-access paper on sharing one network across molecules.
raw:
  body: "Show that a neural-network wavefunction ansatz optimised by variational Monte Carlo (or combined with DMC) delivers\n\n1. total energies within 1 mHa (about 0.6 kcal/mol) of near-exact references, and *relative* energies (reaction, conformer, noncovalent interaction) within 0.5 kcal/mol, for molecules with at least 100 electrons, including second-row and first-row transition-metal atoms, at a total cost not exceeding about ten times that of CCSD(T) in the same basis for the same molecule, and\n2. a *transferable* pretrained model: one network (or a family of networks with shared parameters) trained once over a chemically diverse set of molecules and geometries, then applied to unseen molecules and geometries with fine-tuning costing at most a few percent of from-scratch training, with energy errors of the same size.\n\nAlso required: a way to certify the variational error independent of the reference (for example via variance extrapolation or an improved variational bound), because VMC energies are upper bounds without an error bar."
site:
  aiReviewed: true
---

# State of the art

- **Ansätze.** FermiNet (Pfau et al., 2020) and PauliNet (Hermann et al., Nat. Chem. 2020) started the field; Psiformer (von Glehn and Spencer, arXiv:2211.13672) uses self-attention and improved accuracy on larger molecules; LapNet with the Forward Laplacian (Li et al., arXiv:2307.08214) reports similar accuracy at up to 20 times lower cost and was applied to larger molecules than earlier ansätze.
- **Transferability.** Scherbela, Gerard and Grohs (Nat. Commun. 2024) trained one wavefunction across many small molecules; fine-tuning pre-trained neural wavefunctions reduces cost (arXiv:2307.09337). A transferable "foundation model" called Orbformer, trained on about 22,000 structures with up to 24 electrons, was presented at the March 2026 APS meeting (abstract only; preprint status not verified by this entry).
- **Excited and larger systems.** Pfau et al. (Science 2024) computed excited states with neural networks; Ren et al. (Nat. Commun. 2023) used DMC on neural-network trial wavefunctions to improve on VMC energies for larger systems.
- **Gap.** Published demonstrations at chemical accuracy remain mostly limited to molecules with up to a few tens of electrons or isolated larger examples at large computational cost (GPU-weeks); transition-metal and heavier-element systems are scarcely covered, and amortised transfer to unseen molecules above about 30 electrons has not been shown at 1 mHa.

# Applications

Independent, wavefunction-level reference energies for noncovalent interactions, reaction barriers and open-shell systems where CCSD(T) is unreliable; labels for training DFT functionals and MLIPs; if transferable, a fast near-exact solver for medium-sized molecules.

# Resolution criteria

Peer-reviewed demonstrations on a benchmark of molecules with 100 or more electrons (published geometries) meeting the energy criteria against converged references, and a pretrained model released with reproducible transfer results on at least 20 unseen molecules above 50 electrons.

# Rating rationale

Difficulty 54: rapid progress and clear scaling paths, but cost, transition-metal coverage and transferability remain open. Application value 36: mainly reference data and labels. Leverage 49.5: an independent standard for CC and DFT that also bounds fixed-node error.

# Work mix rationale

New ansätze and optimisers plus extensive GPU runs.

# Verification

Peer-reviewed demonstrations on molecules with 100 or more electrons (published geometries) must meet the energy criteria against converged references, and a released pretrained model must reproduce transfer results on at least 20 unseen molecules above 50 electrons. Compute budget, seeds and reference energies are fixed in the spec.

# Plain explanation

One way to get near-exact energies is to describe the electrons' quantum state with a neural network, the kind of tool behind image and language software, and then train it by trial and error until the energy cannot be lowered further. For small and medium molecules this has reached accuracy that rivals the best conventional methods, and has no need for chemists to pick tricky settings.

The difficulty is cost. Training the network for one molecule can take days or weeks on many graphics chips, and the cost grows quickly as the molecule gets larger. A network trained for one molecule cannot be reused for another, so every new molecule starts from scratch.

Researchers are working on networks that learn across many molecules and can be adapted cheaply to new ones, a bit like a language model adapted for a new task. Early results work for small molecules.

The target is near-exact energies for molecules with a hundred or more electrons, including metals, at a cost not far above the gold-standard conventional method, and with a way to trust the answer.

# Student explanation

**Method.** The wavefunction is $\Psi_\theta(\mathbf r_1,\dots,\mathbf r_N)$, a neural network built to change sign when two electrons are swapped (FermiNet, PauliNet, Psiformer, LapNet). Energy $E[\Psi_\theta]$ is estimated by Monte Carlo sampling and minimised by gradient-based optimisers designed for this task, such as natural-gradient variants (KFAC). Because of the variational principle, the result is an upper bound on the true ground-state energy.

**Scaling and cost.** Each step needs the Laplacian of $\Psi_\theta$ with respect to all electron coordinates, which is expensive; the Forward Laplacian (Li et al.) reduces this considerably. Total training cost grows roughly as the 4th to 5th power in electron number, and a molecule with 100 electrons needs far more compute than one with 20.

**Transferability.** Scherbela et al. (2024) trained one network across many molecules; fine-tuning pre-trained wavefunctions reduces the cost per new molecule; a 2026 conference abstract describes a larger transferable model (Orbformer) trained on about 22,000 geometries with up to 24 electrons.

**Gaps.** Chemical accuracy (0.6 kcal/mol or 1 mHa) for 100+ electron molecules at modest cost; heavier atoms and transition metals; error certificates; amortisation over molecules.

**Why it matters.** An independent reference for the dispute between coupled cluster and diffusion Monte Carlo, and labels for ML potentials and functionals.

**Things to check yourself.** Why is the variational energy an upper bound, and why does that not give an error bar? What makes an antisymmetric network different from an ordinary one?
