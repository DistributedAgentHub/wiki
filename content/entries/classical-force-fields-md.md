---
type: entry
slug: classical-force-fields-md
title: Classical force fields and molecular dynamics
field: computational-chemistry
kind: ALGORITHM
status: MATURE
summary: Parametrised analytic energy functions (bonds, angles, torsions, Lennard-Jones, point charges) integrated with Newton's equations to simulate millions of atoms for microseconds to milliseconds.
reliedOn: Protein, membrane and polymer simulation, drug-binding free energies and most biomolecular MD rest on fixed-functional-form force fields whose accuracy limits every downstream prediction.
dependsOn:
  - born-oppenheimer-pes
references:
  - title: B. J. Alder and T. E. Wainwright, Phase transition for a hard sphere system (1957)
    url: https://doi.org/10.1063/1.1743957
    kind: paper
  - title: L. Verlet, Computer experiments on classical fluids I (1967)
    url: https://doi.org/10.1103/PhysRev.159.98
    kind: paper
  - title: K. Lindorff-Larsen et al., Systematic validation of protein force fields against experimental data (2012)
    url: https://doi.org/10.1371/journal.pone.0032131
    kind: paper
  - title: "J. Huang et al., CHARMM36m: an improved force field for folded and intrinsically disordered proteins (2017)"
    url: https://doi.org/10.1038/nmeth.4067
    kind: paper
  - title: P. Robustelli, S. Piana, D. E. Shaw, Developing a molecular dynamics force field for both folded and disordered protein states (2018)
    url: https://doi.org/10.1073/pnas.1800690115
    kind: paper
timeline:
  - date: 1957-08-01
    title: First molecular dynamics
    body: Alder and Wainwright simulate hard spheres, the first MD.
    source: https://doi.org/10.1063/1.1743957
  - date: 2012-01-01
    title: Systematic force-field validation
    body: Lindorff-Larsen et al. test eight protein force fields against NMR data (date given as the year of publication).
    source: https://doi.org/10.1371/journal.pone.0032131
  - date: 2018-05-01
    title: a99SB-disp
    body: A force field balancing folded and disordered states is published (date given as the year/month of publication).
    source: https://doi.org/10.1073/pnas.1800690115
explainer:
  oneLine: Replaces quantum calculations with simple springs and charges, so millions of atoms can be simulated for long times.
  flow:
    - Atoms as balls, bonds as springs
    - Add charges and weak attractions
    - Cheap energy formula
    - Move atoms in tiny time steps
    - Long movies of biomolecules
  glossary:
    - term: force field
      meaning: A simple formula that gives the energy of atoms from springs and charges, cheap enough to simulate huge molecules.
      link: /research/classical-force-fields-md
    - term: molecular dynamics
      meaning: A computer simulation that moves atoms step by step under the forces between them.
      link: /research/classical-force-fields-md
    - term: intrinsically disordered protein
      meaning: A protein with no fixed folded shape that wiggles between many forms.
      link: https://en.wikipedia.org/wiki/Intrinsically_disordered_proteins
    - term: dispersion
      meaning: A weak, always-present attraction between molecules from momentary electron fluctuations, which holds layers of graphite together.
      link: https://en.wikipedia.org/wiki/London_dispersion_force
    - term: free energy
      meaning: The energy that counts at a given temperature, including disorder; it decides which state is stable and how fast things happen.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: binding free energy
      meaning: The energy that decides how tightly a drug molecule sticks to its protein target.
      link: https://en.wikipedia.org/wiki/Free_energy_perturbation
    - term: Ewald summation
      meaning: A technique for adding up the long-range Coulomb forces between charges in a repeating box.
      link: https://en.wikipedia.org/wiki/Ewald_summation
  readFirst:
    - title: Force field (chemistry) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Force_field_(chemistry)
      why: Overview of the energy terms and families.
    - title: Molecular dynamics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Molecular_dynamics
      why: How simulations are run and what they give.
    - title: Systematic validation of protein force fields against experimental data
      url: https://doi.org/10.1371/journal.pone.0032131
      why: Open-access paper showing how force fields are tested.
raw:
  body: "## What it is\n\nA **force field** approximates the Born–Oppenheimer surface by a sum of cheap terms:\n$$E=\\sum_{bonds}k_b(r-r_0)^2+\\sum_{angles}k_\\theta(\\theta-\\theta_0)^2+\\sum_{dihedrals}V_n[1+\\cos(n\\phi-\\gamma)]+\\sum_{i<j}\\Big[4\\epsilon_{ij}\\Big(\\tfrac{\\sigma_{ij}^{12}}{r_{ij}^{12}}-\\tfrac{\\sigma_{ij}^6}{r_{ij}^6}\\Big)+\\tfrac{q_iq_j}{4\\pi\\varepsilon_0 r_{ij}}\\Big].$$\n**Molecular dynamics (MD)** integrates $m_i\\ddot{\\mathbf r}_i=-\\nabla_iE$ with a symplectic integrator (velocity Verlet, 1–4 fs steps, constraints on hydrogens) plus thermostats and barostats. Long-range electrostatics use particle-mesh Ewald.\n\n## Families\n\nFixed-charge biomolecular force fields (AMBER ff19SB, CHARMM36m, OPLS-AA/OPLS4, GROMOS), polarisable models (AMOEBA, Drude), coarse-grained models (Martini) and general small-molecule force fields (GAFF, OpenFF, CGenFF) with automated parametrisation. Water models (TIP3P, TIP4P-D, OPC) are part of the force field and strongly affect protein ensembles.\n\n## Limits\n\n- Fixed point charges ignore polarisation and charge transfer.\n- Pairwise additivity ignores many-body dispersion.\n- Parameters are fitted to a mix of quantum-chemical data and condensed-phase experiment, so transferability across environments is uncertain.\n- No bond breaking, and no protonation changes without special methods.\n\n## Why it is foundational\n\nGPU codes (GROMACS, OpenMM, AMBER) and special-purpose hardware (Anton) make microsecond to millisecond trajectories possible; the force field, not the integrator, is the dominant error source in many biomolecular predictions.\n\n## Worth understanding\n\n- How force-field validation against NMR, SAXS and calorimetry works\n- Why dispersion-water balance matters for disordered proteins\n- Reaction-field vs Ewald treatment of electrostatics\n\n## Current frontier\n\nCurrent directions are better balance between folded and disordered protein ensembles, polarisable and charge-transfer-aware models, automated and data-driven parametrisation of small-molecule force fields, and hybrid machine-learning/molecular-mechanics schemes in which a small region is treated with a machine-learned potential and the rest with a classical force field."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A protein has tens of thousands of atoms, and its wiggling takes microseconds or longer. Quantum calculations are far too slow for that. A force field is a shortcut: it treats atoms as balls and bonds as springs, adds electric charges on the atoms and a weak attraction between all non-bonded pairs. The energy is then a simple formula, evaluated in microseconds.

With a force field you can run a molecular dynamics simulation: compute the forces on every atom, move all atoms a tiny step (a few femtoseconds), and repeat billions of times. This gives a movie of a protein folding, a drug binding or a membrane flexing.

The simplicity has costs. The charges are fixed and cannot respond to their surroundings, bonds cannot break, and the many parameters were fitted to a mixture of calculations and experiments. Small errors add up. For example, many force fields once made disordered proteins too compact, which shows that tiny imbalances in the water-protein attraction matter.

Even so, force fields drive most simulations in biology and drug design, and improving them is a research field of its own.

# Student explanation

**Energy function.** A typical force field is

$E=\sum_{bonds}k_b(r-r_0)^2+\sum_{angles}k_\theta(\theta-\theta_0)^2+\sum_{dihedrals}V_n[1+\cos(n\phi-\gamma)]+\sum_{i<j}\Big[4\epsilon_{ij}\Big(\frac{\sigma^{12}}{r^{12}}-\frac{\sigma^{6}}{r^{6}}\Big)+\frac{q_iq_j}{4\pi\varepsilon_0 r}\Big].$

The first three terms model bonds as springs, angles as bending springs and rotations around bonds as periodic barriers. The last term has the Lennard-Jones attraction and repulsion between non-bonded atoms and Coulomb interactions between fixed point charges $q_i$.

**Dynamics.** Newton's equation $m_i\ddot{\mathbf r}_i=-\nabla_i E$ is integrated with a symplectic scheme such as velocity Verlet; time steps of 2-4 fs are used with constraints on bonds to hydrogen. Thermostats and barostats keep temperature and pressure. Long-range electrostatics are handled with particle-mesh Ewald summation.

**Variants.** Biomolecular families (AMBER, CHARMM, OPLS, GROMOS), polarisable force fields (AMOEBA, Drude) that let charges respond, coarse-grained models (Martini) that merge atoms, and small-molecule force fields (GAFF, OpenFF) with automatic parameter assignment. Water models such as TIP3P, TIP4P-D and OPC are part of the force field.

**Limits.** No polarisation (in fixed-charge models), no many-body dispersion, no bond breaking, parameters that transfer imperfectly. Errors are checked against NMR, scattering and thermodynamic experiments.

**Role here.** Force-field error limits binding free energies and protein ensembles; machine-learned potentials are one proposed replacement.

**Practical notes.** Production runs use GPU codes such as GROMACS, OpenMM and AMBER; a typical protein-in-water box has 50,000 to 200,000 atoms and reaches hundreds of nanoseconds per day on one GPU. Special-purpose machines and enhanced sampling extend this to milliseconds. Force-field parameters are validated, not derived: when one is changed, others shift, so each release is re-tested against dozens of proteins.

**Things to check yourself.** Why must the time step be smaller than the fastest vibration? What would a polarisable model change?
