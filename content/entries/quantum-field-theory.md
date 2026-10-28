---
type: entry
slug: quantum-field-theory
title: Mathematical quantum field theory
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: "The attempt to define interacting quantum fields rigorously: axioms, constructions in low dimensions, and a growing toolkit of stochastic analysis. Four-dimensional gauge theory remains out of reach."
reliedOn: Quantum field theory underlies the Standard Model and much recent mathematics (knot invariants, 4-manifold invariants, mirror symmetry), yet in four dimensions its interacting examples lack a rigorous definition. Constructive results mark what can be made precise and which physical claims (mass gap, confinement) are still heuristics.
dependsOn:
  - harmonic-analysis
  - sobolev-spaces-energy-methods
references:
  - title: A. Jaffe and E. Witten, Quantum Yang-Mills Theory (Clay official problem description)
    url: https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf
    kind: article
  - title: M. Hairer, A theory of regularity structures
    url: https://arxiv.org/abs/1303.5113
    kind: paper
  - title: A. Chandra, I. Chevyrev, M. Hairer, H. Shen, Stochastic quantisation of Yang-Mills-Higgs in 3D
    url: https://arxiv.org/abs/2201.03487
    kind: paper
  - title: H. Shen, R. Zhu, X. Zhu, A stochastic analysis approach to lattice Yang-Mills at strong coupling
    url: https://arxiv.org/abs/2204.12737
    kind: paper
  - title: M. Aizenman and H. Duminil-Copin, Marginal triviality of the scaling limits of critical 4D Ising and phi^4_4 models
    url: https://arxiv.org/abs/1912.07973
    kind: paper
  - title: "A. Kupiainen, R. Rhodes, V. Vargas, Integrability of Liouville theory: proof of the DOZZ formula"
    url: https://arxiv.org/abs/1707.08785
    kind: paper
  - title: OpenAI, mathematics manuscript repository (released 6 October 2026; family 215 claims the 2D O(3) continuum limit; unrefereed)
    url: https://github.com/openai/math
    kind: code
timeline:
  - date: 2013-03-20
    title: Regularity structures
    body: Hairer introduces regularity structures, a framework that gives meaning to a broad class of singular stochastic PDEs, including the dynamics of the three-dimensional $\Phi^4$ field theory (arXiv v1; published in Inventiones, 2014).
    source: https://arxiv.org/abs/1303.5113
  - date: 2022-01-10
    title: Stochastic quantization of Yang-Mills-Higgs in 3D
    body: Chandra, Chevyrev, Hairer and Shen construct a state space of gauge orbits and local-in-time dynamics for the renormalized three-dimensional Yang-Mills-Higgs flow (arXiv v1; Inventiones 2024).
    source: https://arxiv.org/abs/2201.03487
  - date: 2022-04-27
    title: Mass gap for lattice Yang-Mills at strong coupling
    body: Shen, Zhu and Zhu prove a unique infinite-volume measure, functional inequalities and a strictly positive mass gap for SO(N) and SU(N) lattice Yang-Mills under explicit strong-coupling bounds (arXiv v1).
    source: https://arxiv.org/abs/2204.12737
explainer:
  oneLine: The framework of modern particle physics, which mathematicians still cannot define rigorously in the real 4D world.
  flow:
    - Physics recipes predict nature accurately
    - Recipes use steps not rigorously defined
    - Axioms say what a true theory must be
    - 4D gauge theory is still unbuilt
  glossary:
    - term: quantum field theory
      meaning: The framework in which particles are excitations of fields that fill space, combining quantum mechanics and relativity.
      link: https://en.wikipedia.org/wiki/Quantum_field_theory
    - term: renormalization
      meaning: A procedure for handling infinities in calculations by adjusting parameters as detail is removed or added.
      link: https://en.wikipedia.org/wiki/Renormalization
    - term: perturbation theory
      meaning: Computing an answer as a series of successively smaller corrections to a simple solvable case.
      link: https://en.wikipedia.org/wiki/Perturbation_theory_(quantum_mechanics)
    - term: Wightman axioms
      meaning: A list of mathematical properties that a quantum field theory should satisfy.
      link: https://en.wikipedia.org/wiki/Wightman_axioms
    - term: Hilbert space
      meaning: The mathematical space in which the possible states of a quantum system live.
      link: https://en.wikipedia.org/wiki/Hilbert_space
    - term: reflection positivity
      meaning: A key condition on a Euclidean theory that lets it be turned back into a genuine quantum theory.
      link: https://en.wikipedia.org/wiki/Reflection_positivity
    - term: lattice gauge theory
      meaning: A version of a gauge theory defined on a grid of points, used for computer simulation and for proofs.
      link: https://en.wikipedia.org/wiki/Lattice_gauge_theory
    - term: Yang-Mills theory
      meaning: The type of quantum field theory describing the strong force and other gauge forces.
      link: https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_theory
    - term: mass gap
      meaning: A positive minimum energy needed to excite the system above its vacuum state.
      link: https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_existence_and_mass_gap
    - term: asymptotic freedom
      meaning: The property that a force becomes weaker at very short distances.
      link: https://en.wikipedia.org/wiki/Asymptotic_freedom
    - term: Osterwalder-Schrader axioms
      meaning: The version of the QFT axioms in "imaginary time", where a theory becomes a probability measure on random fields.
      link: https://en.wikipedia.org/wiki/Osterwalder%E2%80%93Schrader_axioms
    - term: continuum limit
      meaning: What remains of a lattice (grid) theory as the grid spacing shrinks to zero, if a sensible limit exists.
      link: https://en.wikipedia.org/wiki/Continuum_limit
  readFirst:
    - title: Quantum field theory - Wikipedia
      url: https://en.wikipedia.org/wiki/Quantum_field_theory
      why: A broad introduction to the physics idea.
    - title: Yang-Mills existence and mass gap - Wikipedia
      url: https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_existence_and_mass_gap
      why: The prize problem in accessible terms.
    - title: Renormalization - Wikipedia
      url: https://en.wikipedia.org/wiki/Renormalization
      why: Explains the central technique and why it is awkward for mathematicians.
    - title: "Clay Mathematics Institute: Yang-Mills and Mass Gap"
      url: https://www.claymath.org/millennium/yang-mills-the-maths-gap/
      why: The official problem page.
raw:
  body: "## The problem of definition\n\nPhysicists compute with quantum field theories by perturbation theory, renormalization and lattice simulation, with extraordinary numerical success. Mathematically, though, an interacting QFT in four spacetime dimensions is not a defined object. Mathematical QFT asks what the right definitions are, whether the examples that physics uses satisfy them, and what can be proved about them.\n\n## Axioms\n\nTwo axiom systems are standard. The **Wightman axioms** describe fields as operator-valued distributions on a Hilbert space with a Poincaré-invariant vacuum, locality and a spectrum condition. The **Osterwalder-Schrader axioms** describe the Euclidean version: a measure (or family of correlation functions) on fields on $\\mathbb{R}^d$ with Euclidean invariance and *reflection positivity*, from which a Wightman theory can be reconstructed. Working in Euclidean signature turns QFT into a problem in probability and statistical mechanics, a measure on a space of distributions such as\n$$d\\mu(\\varphi)\\;\\propto\\; e^{-S(\\varphi)}\\,D\\varphi .$$\nMaking sense of this expression requires an ultraviolet cutoff (a lattice, say) and a renormalized limit as the cutoff is removed.\n\n## Constructive QFT\n\nIn the 1960s-80s Glimm, Jaffe and others constructed interacting scalar theories in two and three spacetime dimensions ($\\varphi^4_2$, $\\varphi^4_3$) satisfying the axioms. Aizenman and Duminil-Copin (2021) proved that the corresponding four-dimensional $\\varphi^4$ model is \"trivial\": its continuum limit is Gaussian, so no non-trivial scalar example of that form exists in $d=4$. Gauge theories are the natural four-dimensional candidates, being asymptotically free, and Balaban's multi-scale work in the 1980s made partial progress on their ultraviolet behaviour. Conformal field theory in two dimensions has seen rigorous breakthroughs of a different type, such as the proof of the DOZZ formula for Liouville theory by Kupiainen, Rhodes and Vargas using Gaussian multiplicative chaos.\n\n## Stochastic quantization and singular SPDEs\n\nA newer route realizes the Euclidean measure as the stationary state of a stochastic partial differential equation (Parisi-Wu stochastic quantization). The equations involve products of distributions, which Hairer's theory of regularity structures (2013-14) and the paracontrolled calculus make meaningful after renormalization. Chandra, Chevyrev, Hairer and Shen built a state space and Markov dynamics for the two-dimensional Yang-Mills measure (2020) and for the Yang-Mills-Higgs equation in three dimensions (2022, Inventiones 2024). These constructions give local-in-time solutions with gauge covariance, but they do not yet give a complete, infinite-volume, global-in-time theory with all the axioms.\n\n## Lattice gauge theory\n\nOn a lattice the Yang-Mills measure is a well-defined measure on products of compact Lie group elements. At strong coupling, a Langevin-dynamics and functional-inequality approach (Shen, Zhu and Zhu, 2022) gives a unique infinite-volume measure and a positive mass gap in the 't Hooft scaling, and Chatterjee (2020) gave a rigorous mechanism relating unbroken center symmetry to confinement. These are statements at fixed lattice spacing and strong coupling; the continuum limit at weak coupling is the hard part. A related two-dimensional test case is the $O(3)$ nonlinear sigma model, which is asymptotically free like four-dimensional Yang–Mills theory and is expected to have a mass gap. OpenAI's 6 October 2026 manuscript release includes a claimed construction of its continuum limit with a positive mass gap, with Lean files. The claim is unrefereed and had not been independently assessed by mid-October 2026.\n\n## Open directions\n\nThe open central question is the existence of four-dimensional non-abelian gauge theory with a mass gap (see the Yang-Mills mass gap problem). Other targets include controlling the continuum limit of lattice gauge theories, rigorous renormalization-group methods in the gauge case, and non-perturbative definitions of QFTs with fermions. The rich mathematical by-products, such as Donaldson and Seiberg-Witten invariants, the Jones polynomial and conformal field theory, are often applied without a rigorous definition of the QFT that motivated them."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Particle physics works astonishingly well. Calculations in quantum field theory predict some quantities to many decimal places, matching experiments. The idea is that every kind of particle is a ripple in a field that fills all of space, like waves on a pond, except that the waves come in lumps that act like particles.

Here is the odd part. Physicists get their answers using recipes that are clever but, from a strict mathematical view, not fully justified. In the simplest recipe, you add up an infinite series of corrections, and some terms are infinite until you subtract other infinite terms in a controlled way. It works, but a mathematician would say the thing being computed is not defined.

Mathematical quantum field theory asks: what is the right precise definition, and do the theories physicists use really satisfy it? So far it can be done for simpler cases with fewer dimensions of space and time, where researchers have built real examples. In our real four-dimensional world, for the kind of force that binds quarks inside protons and neutrons (Yang-Mills theory), nobody has built one.

The Clay prize problem on Yang-Mills and the mass gap is about exactly this.

A useful comparison is early calculus: it gave right answers long before it had a rigorous basis. The analogy is imperfect, because we do not yet know whether the missing foundation will be a modest repair or a deep new theory.

# Student explanation

Physicists compute with quantum field theories (QFTs) using **perturbation theory**, **renormalization** and **lattice simulations**, with extraordinary numerical success. Mathematically, however, an interacting QFT in four spacetime dimensions is not a defined object. Mathematical QFT asks for the right definitions, whether the physical examples satisfy them, and what can be proved.

**Axioms.** Two axiom systems are standard.

- The **Wightman axioms** describe fields as operator-valued distributions acting on a Hilbert space (the space of quantum states), with a vacuum state invariant under relativistic symmetry, a locality condition (fields at spacelike-separated points commute) and a spectrum condition (energy is non-negative).
- The **Osterwalder–Schrader axioms** are the Euclidean version, using imaginary time. They describe a probability measure on fields over $\mathbb R^d$ with Euclidean symmetry and _reflection positivity_, from which a Wightman theory can be reconstructed. This turns QFT into probability and statistical mechanics: one wants a measure of the form $d\mu(\varphi)\propto e^{-S(\varphi)}D\varphi$, which is not directly meaningful because there is no uniform measure on infinitely many variables.

**Constructive QFT.** In the 1960s–80s, mathematicians constructed interacting examples in two and three spacetime dimensions, such as the $P(\varphi)_2$ models and the $\varphi^4$ theory in three dimensions, by starting from a lattice or cutoff theory and proving the limit exists as the cutoff is removed. The key difficulty is **renormalization**: the parameters of the cutoff theory must be adjusted as the cutoff is removed. In four dimensions, the free (non-interacting) theory is easy, and Aizenman and Duminil-Copin (2021) proved that the natural lattice approximations to $\varphi^4$ become trivial (non-interacting) in the continuum limit, so that route gives no interacting example. For gauge theories the situation is different, because of _asymptotic freedom_: the interaction becomes weak at short distances, which makes a construction conceivable but still unproven.

**Newer tools.** Over the last decade, ideas from stochastic analysis, such as Hairer's regularity structures and the paracontrolled calculus of Gubinelli, Imkeller and Perkowski, allowed rigorous treatment of singular stochastic PDEs and gave new constructions of $\varphi^4_3$ and, recently, progress on the Yang–Mills-Higgs equations in three dimensions. Lattice gauge theory has also produced rigorous results about confinement at strong coupling.

**What is open.** A rigorous four-dimensional Yang–Mills theory with a **mass gap**: a positive lower bound on the energy of every excited state above the vacuum. This is a Clay Millennium Prize Problem.

The entry gives the mathematical landscape; the problem page sets out the precise question.
