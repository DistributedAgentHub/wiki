---
type: problem
slug: yang-mills-mass-gap
title: "Yang–Mills existence and mass gap: a 4D quantum SU(N) gauge theory with Δ > 0"
entry: quantum-field-theory
status: OPEN
origin: Jaffe–Witten, Clay problem statement, 2000
prize: $1M Clay Millennium Prize
ratings:
  difficulty: 93
  applicationValue: 17
  leverage: 52
workMix:
  theory: 87
  engineering: 2
  compute: 11
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Clay Mathematics Institute: Yang–Mills and the mass gap"
    url: https://www.claymath.org/millennium/yang-mills-the-maths-gap/
  - title: "Jaffe, Witten: Quantum Yang–Mills theory (Clay problem description, PDF)"
    url: https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf
  - title: "Chandra, Chevyrev, Hairer, Shen: Stochastic quantisation of Yang–Mills–Higgs in 3D"
    url: https://arxiv.org/abs/2201.03487
  - title: "Shen, Zhu, Zhu: A stochastic analysis approach to lattice Yang–Mills at strong coupling"
    url: https://arxiv.org/abs/2204.12737
  - title: "Chatterjee: A probabilistic mechanism for quark confinement"
    url: https://arxiv.org/abs/2006.16229
  - title: "Nissim: U(N) lattice Yang–Mills in the ’t Hooft regime (preprint)"
    url: https://arxiv.org/abs/2510.22788
timeline:
  - date: 1973-06-01
    title: Asymptotic freedom
    body: Gross–Wilczek and Politzer show non-abelian gauge theories become free at short distances (date approximate).
    source: https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf
  - date: 2022-01-10
    title: 3D Yang–Mills–Higgs state space and dynamics
    body: Chandra–Chevyrev–Hairer–Shen build the gauge-orbit state space and local dynamics.
    source: https://arxiv.org/abs/2201.03487
  - date: 2022-04-26
    title: Strong-coupling lattice mass gap with 't Hooft scaling
    body: Shen–Zhu–Zhu prove a positive gap for SU(N) and SO(N).
    source: https://arxiv.org/abs/2204.12737
  - date: 2026-10-27
    title: Shepherding committee statement on OpenAI's claimed existence proof (unreleased, existence only)
    body: A committee (Douglas, Gross as chair, Jaffe, Klebanov, Nekrasov) published a statement on OpenAI's claimed proof of the existence of quantum Yang-Mills theory, including coupling to fermions, with a continuum limit built on Balaban's renormalization-group work. The statement says confinement and the mass gap remain open, and that the committee will first check the Lean definitions and statement, then release the Lean proof, and later its assessment with the full 1147-page LLM proofs. Nothing has been released or verified yet, and the claim is existence without the mass gap, so the problem stays open.
    source: https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf
explainer:
  oneLine: Build a precise 4D quantum theory of the strong force and prove its particles have a minimum mass.
  flow:
    - Strong force described by Yang-Mills theory
    - Physics predicts a minimum particle mass
    - Maths cannot yet define the theory in 4D
    - Construct it, then prove the gap
  glossary:
    - term: Yang-Mills theory
      meaning: A quantum field theory describing forces such as the strong nuclear force, built from a gauge symmetry.
      link: https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_theory
    - term: gauge group
      meaning: The symmetry group that defines a gauge theory, such as SU(3) for the strong force.
      link: https://en.wikipedia.org/wiki/Gauge_theory
    - term: mass gap
      meaning: A positive minimum energy needed to excite the system above its vacuum state.
      link: https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_existence_and_mass_gap
    - term: confinement
      meaning: The fact that quarks are never found alone but always bound inside larger particles.
      link: https://en.wikipedia.org/wiki/Color_confinement
    - term: asymptotic freedom
      meaning: The property that a force becomes weaker at very short distances.
      link: https://en.wikipedia.org/wiki/Asymptotic_freedom
    - term: lattice gauge theory
      meaning: A version of a gauge theory defined on a grid of points, used for computer simulation and for proofs.
      link: https://en.wikipedia.org/wiki/Lattice_gauge_theory
    - term: Wightman axioms
      meaning: A list of mathematical properties that a quantum field theory should satisfy.
      link: https://en.wikipedia.org/wiki/Wightman_axioms
    - term: path integral
      meaning: A way of computing quantum results by summing over all possible histories of a system.
      link: https://en.wikipedia.org/wiki/Path_integral_formulation
    - term: renormalization
      meaning: A procedure for handling infinities by adjusting parameters as detail is removed or added.
      link: https://en.wikipedia.org/wiki/Renormalization
    - term: Mathematical quantum field theory
      meaning: The research area that tries to define quantum field theories rigorously.
      link: /research/quantum-field-theory
    - term: connection
      meaning: "The basic field of a gauge theory: a rule for comparing internal \"directions\" at nearby points of space-time."
      link: https://en.wikipedia.org/wiki/Connection_(principal_bundle)
    - term: continuum limit
      meaning: What remains of a lattice (grid) theory as the grid spacing shrinks to zero, if a sensible limit exists.
      link: https://en.wikipedia.org/wiki/Continuum_limit
  readFirst:
    - title: Yang-Mills existence and mass gap - Wikipedia
      url: https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_existence_and_mass_gap
      why: A good plain-language statement of the problem.
    - title: "Clay Mathematics Institute: Yang-Mills and Mass Gap"
      url: https://www.claymath.org/millennium/yang-mills-the-maths-gap/
      why: Official problem page.
    - title: Color confinement - Wikipedia
      url: https://en.wikipedia.org/wiki/Color_confinement
      why: The physical phenomenon the mass gap is meant to explain.
    - title: Mathematical quantum field theory (research entry)
      url: /research/quantum-field-theory
      why: The wider landscape of rigorous attempts.
raw:
  body: "For every compact simple gauge group G (for example SU(N)), construct a non-trivial quantum Yang–Mills theory on ℝ^4 satisfying the Wightman or Osterwalder–Schrader axioms, and prove it has a mass gap: there is Δ > 0 such that every excited state has energy at least Δ above the vacuum. The classical theory is that of a connection A with curvature F = dA + A∧A and action (1/4g²)∫Tr F∧*F. The quantum theory is meant to be the continuum limit of a measure on connections defined by a lattice or regularized path integral, with the bare coupling tuned by asymptotic freedom."
site:
  aiReviewed: true
---

# State of the art

**Open in four dimensions.** In two dimensions the Yang–Mills measure has been constructed; in three dimensions Chandra, Chevyrev, Hairer and Shen (2022, Inventiones 2024) built a state space of gauge orbits and local-in-time stochastic dynamics for the renormalized Yang–Mills–Higgs equation, but no full axiomatic theory is known in d = 3 or 4. On the lattice, Shen, Zhu and Zhu (2022) proved a unique infinite-volume measure and a positive mass gap for SU(N) and SO(N) gauge theory at strong coupling with 't Hooft scaling; Nissim (arXiv, October 2025, preprint) extended this to U(N). Chatterjee (2020) gave a rigorous link between unbroken center symmetry and confinement. These results hold at fixed lattice spacing and strong coupling, while the continuum theory needs weak coupling at short distances. Balaban's 1980s multiscale analysis handled ultraviolet stability in part but was never completed in d = 4. OpenAI's 6 October 2026 manuscript release (github.com/openai/math) claims a construction of the 2D asymptotically free O(3) sigma model with a mass gap and Lean files; it is unrefereed and does not address four-dimensional gauge theory. No claimed solution of the Clay problem is accepted, and Clay lists it as unsolved. Physical evidence is strong: lattice QCD shows a mass gap, and asymptotic freedom (Gross–Wilczek, Politzer 1973) is established at the physics level.

# Applications

None for engineering in the near term. A rigorous construction would put the Standard Model's strong sector on a mathematical footing and would supply constructive-QFT technology (rigorous renormalization, gauge-orbit state spaces) for other theories. Rigorous bounds could in principle calibrate non-perturbative lattice methods.

# Resolution criteria

A construction of 4D Yang–Mills theory for every compact simple G satisfying the OS or Wightman axioms, with a proof of Δ > 0, accepted by experts after refereeing. Results for d = 2, 3, lattice theories at strong coupling, or large-N limits do not count.

# Rating rationale

Constructive QFT has not produced any interacting four-dimensional theory and Balaban's programme stopped short of d = 4, so difficulty 93 sits just below Riemann (96) and just above the unforced Navier–Stokes problem (92). Application value 17 is indirect (rigorous renormalization technology), above abc (13) but well below RH (30). Leverage 52 is moderate because physics already uses the theory through lattice QCD and few theorems are conditional on it.

# Work mix rationale

Constructing the continuum 4D theory is a problem in mathematical physics. Lattice computation supplies evidence and guidance but no proof.

# Verification

The Clay problem needs a rigorous construction of 4D quantum Yang-Mills theory satisfying the OS or Wightman axioms, which has no formal statement in Mathlib or Formal Conjectures today. It cannot be formalised yet because the axiomatic framework (Euclidean field measures, reflection positivity) is not built. Experts referee the construction and the proof of Delta > 0.

# Plain explanation

Inside every atom's nucleus, a force far stronger than electricity holds quarks together. Physicists describe it with a theory called Yang-Mills theory. The theory predicts something striking: the particles it produces always have some minimum mass; there is a gap between the empty state and the lightest particle. That is why the strong force acts only at nuclear distances rather than reaching across the universe.

Physicists have strong evidence for this from computer simulations, and the theory underlies the Standard Model, which matches experiments extremely well. But mathematicians ask for more: a precise construction of the theory, in the real four-dimensional world, with a proof that the gap exists.

This has not been done. The recipes physicists use are not fully defined mathematically. In simpler worlds, with fewer dimensions, parts of the theory have been built. In four dimensions, nobody has made a complete construction.

There is no analogy that shows the whole difficulty, but here is one: it is like having a trusted calculator that always gives good answers, and being asked to prove, from first principles, exactly what the calculator is computing and that its answers are always sensible.

Solving it would not change what physicists compute. It would give a solid mathematical foundation for a huge part of modern physics, and might need new mathematics. It is a Millennium Prize Problem.

# Student explanation

**The task.** For each compact simple gauge group $G$ (for instance $SU(N)$), construct a non-trivial quantum Yang–Mills theory on four-dimensional spacetime $\mathbb R^4$ that satisfies the **Wightman** or **Osterwalder–Schrader** axioms, and prove it has a **mass gap**: a number $\Delta>0$ such that every state other than the vacuum has energy at least $\Delta$ above it.

**Classical theory.** The field is a connection $A$ (think of it as a rule for comparing internal 'directions' at nearby points) with curvature $F=dA+A\wedge A$, and the action is $\frac{1}{4g^2}\int \mathrm{Tr}\,F\wedge *F$. The quantum version is supposed to be a measure on connections obtained as the continuum limit of a **lattice** or otherwise regularized path integral. The bare coupling $g$ must be tuned as the lattice spacing shrinks; the property that makes this possible in principle is **asymptotic freedom**: at short distances the interaction becomes weak.

**What is known.**

- In two dimensions, the Yang–Mills measure has been constructed.
- In three dimensions, Chandra, Chevyrev, Hairer and Shen (2022; Inventiones 2024) built a state space of gauge orbits and local-in-time stochastic dynamics for the renormalized Yang–Mills–Higgs equation. There is still no full axiomatic theory in $d=3$.
- On the lattice, Shen, Zhu and Zhu (2022) proved a unique infinite-volume limit and a positive mass gap for $SU(N)$ and $SO(N)$ gauge theory at strong coupling with a 't Hooft scaling; Nissim (preprint, 2025) extended this to $U(N)$.
- Chatterjee (2020) gave a rigorous link between unbroken center symmetry and confinement.

The lattice results are in the regime of _strong coupling_, which is the opposite of the continuum limit that is needed (the continuum limit has weak coupling at short distance). So they are suggestive, not close to a solution.

**Why it is hard.** Two ingredients must come together: a rigorous _construction_ (existence of the continuum limit of a theory with infinitely many degrees of freedom, with renormalization and gauge invariance), and a _spectral estimate_ (the gap). Even in the abelian theory in four dimensions, non-trivial interacting examples are not known to exist; for non-abelian gauge theory asymptotic freedom suggests it does, which is why the problem is considered meaningful rather than hopeless.

**Claims.** No claimed solution of the Clay problem is accepted, and Clay lists it as unsolved. An October 2026 OpenAI manuscript claims a mass gap for a two-dimensional model (the $O(3)$ sigma model); it is unrefereed and does not address four-dimensional gauge theory.

**Why people care.** The gap is the mathematical form of _confinement_, the fact that quarks are never seen alone. Resolving the problem would make a big part of the Standard Model mathematically rigorous. Many experts expect any solution to require new methods that could be used in other quantum field theories.
