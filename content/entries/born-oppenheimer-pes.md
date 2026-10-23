---
type: entry
slug: born-oppenheimer-pes
title: Born–Oppenheimer approximation and potential energy surfaces
field: computational-chemistry
kind: THEORY
status: MATURE
summary: Treating electrons as instantly adapting to slow nuclei gives a potential energy surface on which chemistry happens; its failure at conical intersections is where photochemistry lives.
reliedOn: Every electronic-structure method, force field, ML potential and reaction-rate theory in this field computes or fits a Born–Oppenheimer surface; nonadiabatic dynamics is what is left when it fails.
references:
  - title: M. Born and R. Oppenheimer, Zur Quantentheorie der Molekeln (1927)
    url: https://doi.org/10.1002/andp.19273892002
    kind: paper
  - title: D. R. Yarkony, Diabolical conical intersections, Rev. Mod. Phys. 68, 985 (1996)
    url: https://doi.org/10.1103/RevModPhys.68.985
    kind: paper
  - title: J. C. Tully, Molecular dynamics with electronic transitions, J. Chem. Phys. 93, 1061 (1990)
    url: https://doi.org/10.1063/1.459170
    kind: paper
timeline:
  - date: 1927-01-01
    title: Born–Oppenheimer approximation
    body: Born and Oppenheimer derive the separation of electronic and nuclear motion by an expansion in the mass ratio (date given as the year of publication).
    source: https://doi.org/10.1002/andp.19273892002
  - date: 1990-07-01
    title: Fewest-switches surface hopping
    body: Tully introduces trajectory surface hopping, still the workhorse of excited-state molecular dynamics.
    source: https://doi.org/10.1063/1.459170
  - date: 1996-07-01
    title: Conical intersections reviewed
    body: Yarkony's review establishes conical intersections as generic features of polyatomic PESs.
    source: https://doi.org/10.1103/RevModPhys.68.985
explainer:
  oneLine: Heavy nuclei move slowly, so electrons can be solved for each fixed arrangement, giving an energy map for chemistry.
  flow:
    - Nuclei are heavy and slow
    - Electrons adjust instantly
    - Solve electrons for each geometry
    - Energies form a landscape
    - Chemistry is motion on that landscape
  glossary:
    - term: potential energy surface
      meaning: A map giving a molecule's energy for every arrangement of its atoms; valleys are stable molecules, passes between valleys are reaction barriers.
      link: /research/born-oppenheimer-pes
    - term: Born–Oppenheimer approximation
      meaning: The shortcut of treating heavy nuclei as standing still while the light electrons settle, which produces the energy map used throughout chemistry.
      link: /research/born-oppenheimer-pes
    - term: conical intersection
      meaning: A point where two energy surfaces of a molecule touch, letting an excited molecule fall to a lower state within femtoseconds.
      link: https://en.wikipedia.org/wiki/Conical_intersection
    - term: wavefunction
      meaning: The mathematical object that holds everything quantum mechanics can say about a system, such as where its electrons are likely to be.
      link: https://en.wikipedia.org/wiki/Wave_function
    - term: reaction barrier
      meaning: The energy hill a reaction must climb; its height controls how fast the reaction runs.
      link: https://en.wikipedia.org/wiki/Transition_state_theory
    - term: surface hopping
      meaning: A simulation trick where atoms follow classical paths and randomly jump between energy surfaces to mimic quantum transitions.
      link: https://en.wikipedia.org/wiki/Potential_energy_surface
    - term: kcal/mol
      meaning: A unit of energy per mole of molecules; 1 kcal/mol changes a reaction rate by about a factor of five at room temperature.
      link: https://en.wikipedia.org/wiki/Calorie
  readFirst:
    - title: Born–Oppenheimer approximation (Wikipedia)
      url: https://en.wikipedia.org/wiki/Born%E2%80%93Oppenheimer_approximation
      why: Short introduction to the idea and its derivation.
    - title: Potential energy surface (Wikipedia)
      url: https://en.wikipedia.org/wiki/Potential_energy_surface
      why: Pictures of surfaces, minima and transition states.
    - title: Conical intersection (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conical_intersection
      why: Why surfaces touching matters for photochemistry.
raw:
  body: "## What it is\n\nThe molecular Hamiltonian couples electrons (mass $m_e$) and nuclei (mass $M \\gg m_e$). Born and Oppenheimer (1927) expanded in $\\kappa=(m_e/M)^{1/4}$ and showed that, to leading order, the electronic problem can be solved at fixed nuclear positions $\\mathbf{R}$:\n$$\\hat H_{el}(\\mathbf R)\\,\\Phi_k(\\mathbf r;\\mathbf R)=E_k(\\mathbf R)\\,\\Phi_k(\\mathbf r;\\mathbf R).$$\nThe eigenvalue $E_k(\\mathbf R)$ is the **potential energy surface (PES)** of electronic state $k$. Nuclei then move as classical or quantum particles on $E_k$: minima are stable molecules, first-order saddle points are transition states, and the curvature gives vibrational frequencies.\n\n## The adiabatic expansion and where it fails\n\nWriting the full wavefunction as $\\Psi=\\sum_k \\chi_k(\\mathbf R)\\Phi_k(\\mathbf r;\\mathbf R)$ produces **nonadiabatic couplings** $\\mathbf d_{jk}=\\langle\\Phi_j|\\nabla_R\\Phi_k\\rangle = \\langle\\Phi_j|\\nabla_R \\hat H_{el}|\\Phi_k\\rangle/(E_k-E_j)$. They are negligible when states are well separated and diverge where surfaces touch. Surfaces of the same spin and symmetry touch on a $(3N-8)$-dimensional seam called a **conical intersection**; these funnel excited molecules back to the ground state in femtoseconds (vision, DNA photostability, photochemical damage). Related breakdowns: the geometric (Berry) phase, spin–orbit-driven intersystem crossing, proton and hydrogen tunnelling, and non-adiabatic electron transfer.\n\n## Why it is foundational\n\n- Almost all of computational chemistry is the problem \"compute $E_0(\\mathbf R)$ and its gradient accurately and cheaply\".\n- Methods that go beyond one surface (surface hopping, multiple spawning, MCTDH, exact factorization) need several surfaces, their couplings and a way to propagate nuclei.\n- Machine-learned potentials are regression models for $E_k(\\mathbf R)$.\n\n## Worth understanding\n\n- Why the adiabatic and diabatic representations differ and why diabatization is not unique\n- Why the electronic gap controls validity, and why metals and near-degenerate radicals are awkward\n- The diagonal Born–Oppenheimer correction as the first systematic improvement\n\n## Current frontier\n\nBeyond-Born–Oppenheimer work includes exact-factorization theory, which writes the full electron-nuclear wavefunction as a product of a nuclear part and a conditional electronic part, multiconfigurational nuclear wavepacket methods (MCTDH, ab initio multiple spawning), and quantum-simulator experiments on trapped ions that probe conical-intersection dynamics. Machine-learned potentials for several coupled surfaces, including their couplings and phases, are an active and incomplete area."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Atoms are made of heavy nuclei and very light electrons. Because electrons are thousands of times lighter, they react almost instantly when a nucleus moves. So we can pretend the nuclei are frozen, work out the electrons' energy for that one arrangement, and repeat for every arrangement. Joining those energies gives a landscape, called a potential energy surface.

Think of a hilly map. A stable molecule sits in a valley. A chemical reaction is a walk from one valley to another over a mountain pass, and the height of the pass tells you how fast the reaction goes. Almost all of computational chemistry is about computing this map accurately and cheaply.

The idea fails where the landscape has two floors that touch. Light-driven chemistry, like what happens in your eye when light hits it, passes through such touching points and cannot be understood on a single map. Handling those cases is a separate, hard problem.

The map is only an analogy: the real landscape has thousands of dimensions, one for every way the atoms can move, and several floors stacked on top of each other.

# Student explanation

**The approximation.** The full molecular Schrödinger equation involves electron coordinates $\mathbf r$ and nuclear coordinates $\mathbf R$. Since nuclei are at least 1836 times heavier than electrons, one first solves the electronic equation with the nuclei held fixed:

$\hat H_{el}(\mathbf R)\Phi_k(\mathbf r;\mathbf R)=E_k(\mathbf R)\Phi_k(\mathbf r;\mathbf R).$

The energy $E_k(\mathbf R)$ as a function of nuclear positions is the potential energy surface (PES) of electronic state $k$. In words: for each arrangement of the atoms, find the best electron cloud and record its energy.

**What you do with the surface.** Minima are stable structures; first-order saddle points are transition states; second derivatives give vibrational frequencies; the barrier height gives reaction rates through transition-state theory. Molecular dynamics moves nuclei under the force $-\nabla_{\mathbf R}E$.

**When it fails.** Expanding the full wavefunction in the electronic states gives coupling terms between surfaces, the nonadiabatic couplings. They are large when two surfaces come close. Surfaces of the same symmetry cross at conical intersections, funnels through which excited molecules relax in femtoseconds. Photochemistry, vision and many radiation-damage processes need several surfaces at once. Other breakdowns include hydrogen tunnelling, spin-orbit transitions in heavy elements and some electron-transfer reactions.

**Why it matters for the rest of the field.** Density functional theory, coupled cluster, quantum Monte Carlo and quantum computers are different ways to solve the electronic equation; force fields and machine-learned potentials are cheap fits to the resulting surface.

**Things to check yourself.** Why does the mass ratio control the validity? Why is the surface for a given spin state smooth almost everywhere? How does a surface-hopping simulation use several surfaces?
