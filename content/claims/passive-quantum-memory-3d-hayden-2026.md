---
type: claim
slug: passive-quantum-memory-3d-hayden-2026
title: Stability of a variant of the Balasubramanian-Davydova-Lin 3D quantum memory, Part I (preprint by Hayden)
problem: self-correcting-quantum-memory-3d
kind: PROOF
claimedBy: Patrick Hayden (Stanford University and Google DeepMind), preprint, not peer-reviewed; the paper's AI statement says Gemini 4 Argon did most of the detailed mathematical reasoning and proof construction under the author's direction
claimedAt: 2026-11-16
sources:
  - title: "Hayden: Robust Passive Quantum Memory in Three Dimensions, Part I: Thermal and Zero-Temperature Perturbative Stability (arXiv:2611.21749, v1)"
    url: https://arxiv.org/abs/2611.21749
  - title: "Hayden: HTML version of arXiv:2611.21749"
    url: https://arxiv.org/html/2611.21749
  - title: "Hayden: Lean 4 repository passive-quantum-memory (README, workflow and CI status read; not rebuilt)"
    url: https://github.com/pmhayden/passive-quantum-memory
  - title: "Balasubramanian, Davydova, Lin: A passive self-correcting quantum memory in three dimensions (arXiv:2605.10943, v1)"
    url: https://arxiv.org/abs/2605.10943
checks:
  - title: Preprint publicly available with stated theorems
    method: REVIEW
    note: arXiv:2611.21749v1, 84 pages and 25 figures, submitted 16 November 2026; the abstract and introduction state the thermal and zero-temperature results above and defer the T>0, V!=0 regime to Part II.
    sourceUrl: https://arxiv.org/abs/2611.21749
  - title: Referee the zero-temperature stability proof (uniform gap, splitting, dressed-observable lifetime)
    method: REFEREE
    note: Needs experts in quasi-adiabatic continuation and local topological quantum order. The paper uses a relaxed condition it calls Linear TQO-2 and states very large explicit constants (for example 5.4×10^24 in Proposition 2.4); neither has been checked by DARC.
    sourceUrl: https://arxiv.org/abs/2611.21749
  - title: Referee the thermal stability proof and the free-energy barrier
    method: REFEREE
    note: Check that the barrier of order N^eta for the three-layer variant follows from the local filling property, and that the stretched-exponential time holds for the full stated bath class (single-site couplings, detailed balance, bounded rates) and all T below T_c.
    sourceUrl: https://arxiv.org/abs/2611.21749
  - title: Cross-check the dependence on the BDL construction
    method: CROSS_CHECK
    note: Compare the three-layer variant (three horizontal layers per cylinder and star gadget, where BDL used two) with the original construction in arXiv:2605.10943, itself unrefereed, and confirm which BDL statements are reused versus reproved.
    sourceUrl: https://arxiv.org/abs/2605.10943
  - title: Run the Lean development and audit the specification
    method: FORMAL
    note: The repository README says to run 'lake build Defs Proofs Challenge Solution' and 'lake comparator --config comparator.json' with Lean 4.35.0, and claims Solution.lean has no sorry and uses only the standard axioms. The repository's one CI run (16 Nov 2026) shows these steps passing; DARC has not rerun them. Run it, then read Challenge.lean to confirm its minimal spin-lattice definitions faithfully capture the physical claims.
    sourceUrl: https://github.com/pmhayden/passive-quantum-memory
  - title: "Part II: the rest of the perturbed positive-temperature phase diagram"
    method: REVIEW
    note: Part I defers T>0 with V!=0 to Part II. Find Part II, check that it covers the windows the paper describes, and only then compare the combined results with the problem's resolution criteria.
    sourceUrl: https://arxiv.org/abs/2611.21749
site:
  status: UNDER_REVIEW
  statusNote: "Single unrefereed arXiv version (v1) submitted 2026-11-16; no journal reference. DARC read the arXiv abstract page and the HTML version (the full text, in two parts, through an automated reader), the repository README, and the abstract page of the BDL preprint. DARC verified nothing: it did not check the proofs, did not build or run the Lean files, and did not open Part II or the reference list. DARC found no expert assessment, confirmation or rebuttal. The thermal result depends on the free-energy barrier of the code, which the paper derives from a homological condition it calls Relative Cone Acyclicity; the BDL preprint it builds on is itself a single unrefereed 102-page arXiv version (2026-05-11). The paper says standalone existential formulations of its main theorem (Theorem 7.5, thermal and zero-temperature) and of the Part II stability theorem are machine-checked in Lean 4 (v4.35.0) on Mathlib, stated in Challenge.lean, and that other parts remain on paper only. The repository's single GitHub Actions run (16 Nov 2026, on its only commit) shows the 'Build & Comparator Audit' job passing; DARC did not rebuild it and has not checked that the Lean statements faithfully capture the paper's claims. Origin is MIXED: the paper's AI statement describes the work as human-AI collaboration, the author setting the research direction, problem formulation and overall proof strategy, Gemini 4 Argon performing most of the detailed mathematical reasoning and proof construction, and the Argon and Carbon versions of Gemini 4 assisting in drafting. Part I does not cover positive temperature together with perturbations, so even if correct it does not settle the whole phase diagram; whether it counts as a self-correcting 3D memory in the sense of the problem statement (Davies dynamics, all low temperatures, efficient decoder) is for experts to judge."
  checks:
    - title: Preprint publicly available with stated theorems
      status: PASSED
    - title: Referee the zero-temperature stability proof (uniform gap, splitting, dressed-observable lifetime)
      status: OPEN
    - title: Referee the thermal stability proof and the free-energy barrier
      status: OPEN
    - title: Cross-check the dependence on the BDL construction
      status: OPEN
    - title: Run the Lean development and audit the specification
      status: OPEN
    - title: "Part II: the rest of the perturbed positive-temperature phase diagram"
      status: OPEN
---

An 84-page preprint (arXiv:2611.21749, v1, quant-ph with cond-mat.str-el and math-ph) studies a three-layer variant of the recursively defined 3D Pauli stabilizer Hamiltonian of Balasubramanian, Davydova and Lin (BDL; arXiv:2605.10943), on open cubic lattices with bounded check weight and qubit degree. It claims two results. (1) **Thermal:** for $0<T<T_c$ and a local Markovian (Davies-type) thermal bath with single-site system-bath couplings, detailed balance and bounded rates, the encoded qubit survives for a stretched-exponential time $\exp(\Omega(N^{\eta}))$ in the number of qubits $N$; this uses a macroscopic equilibrium free-energy barrier. (2) **Zero temperature:** under weak static perturbations $V$ with superpolynomial spatial decay there is a uniform $\Omega(1)$ bulk gap, a ground-space splitting smaller than any inverse power of $N$, and a superpolynomially long closed-system lifetime for quasi-locally dressed logical observables. The interior of the phase diagram, with $T>0$ and $V\neq0$ together, is deferred to a companion Part II. It is a specific code family under stated noise models, not a statement about all 3D codes.
