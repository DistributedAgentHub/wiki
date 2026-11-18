---
type: entry
slug: lattice-chiral-gauge-theories
title: Lattice chiral gauge theories
field: physics
kind: THEORY
status: ACTIVE
summary: How to define gauge theories with chiral fermions, the weak force included, on a spacetime lattice despite fermion doubling; overlap fermions and Lüscher's measure construction.
reliedOn: The Standard Model has never had a mathematically controlled nonperturbative definition because its fermions are chiral; lattice methods work for QCD but not directly for the weak interactions, so any such definition runs through this construction.
dependsOn:
  - quantum-field-theory
references:
  - title: "Lüscher: Abelian chiral gauge theories on the lattice with exact gauge invariance (hep-lat/9811032)"
    url: https://arxiv.org/abs/hep-lat/9811032
    kind: paper
  - title: "Lüscher: Weyl fermions on the lattice and the non-abelian gauge anomaly (hep-lat/9904009)"
    url: https://arxiv.org/abs/hep-lat/9904009
    kind: paper
  - title: "Kadoh, Kikukawa: A construction of the Glashow-Weinberg-Salam model on the lattice with exact gauge invariance (JHEP 0805:095, 2008)"
    url: https://arxiv.org/abs/0709.3658
    kind: paper
  - title: "Craig: A gauge-invariant measure for lattice chiral fermions (arXiv:2610.09093, preprint)"
    url: https://arxiv.org/abs/2610.09093
    kind: paper
  - title: Fermion doubling (Wikipedia)
    url: https://en.wikipedia.org/wiki/Fermion_doubling
    kind: article
  - title: Nielsen–Ninomiya theorem (Wikipedia)
    url: https://en.wikipedia.org/wiki/Nielsen%E2%80%93Ninomiya_theorem
    kind: article
timeline:
  - date: 1998-11-25
    title: "Lüscher: exact gauge invariance for abelian chiral lattice theories"
    body: Lüscher constructed the fermion measure for abelian chiral gauge theories with Ginsparg–Wilson fermions, reducing the problem to a condition on a measure current.
    source: https://arxiv.org/abs/hep-lat/9811032
  - date: 1999-04-26
    title: "Lüscher: Weyl fermions and the non-abelian gauge anomaly"
    body: A follow-up paper addressed Weyl fermions on the lattice and the non-abelian gauge anomaly.
    source: https://arxiv.org/abs/hep-lat/9904009
  - date: 2007-09-24
    title: "Kadoh and Kikukawa: a lattice construction of the Glashow–Weinberg–Salam model"
    body: A construction aimed at the electroweak model with exact gauge invariance, published in JHEP in 2008.
    source: https://arxiv.org/abs/0709.3658
  - date: 2026-10-06
    title: "Craig preprint: gauge-invariant measure for overlap fermions (unrefereed)"
    body: Craig claims a smooth, gauge-covariant, exponentially local measure current for overlap fermions on a finite periodic lattice, covering SU(5) with 10 plus 5-bar and, by restriction, the Standard Model gauge group. Unrefereed; the author calls it a result of principle, not practice.
    source: https://arxiv.org/abs/2610.09093
explainer:
  oneLine: How to describe the weak force's left-handed particles on a computer grid without inventing extra particles or breaking the symmetry.
  flow:
    - Weak force acts on left-handed particles only
    - Naive lattice gives extra copies
    - Overlap fermions keep chiral symmetry
    - Measure must be gauge invariant
    - 2026 preprint claims it, finite box
  glossary:
    - term: lattice gauge theory
      meaning: A gauge theory defined on a spacetime grid, so path integrals become finite and can be simulated or studied rigorously.
      link: https://en.wikipedia.org/wiki/Lattice_gauge_theory
    - term: chirality
      meaning: The left- or right-handedness of a particle's spin relative to its motion, which the weak force treats differently.
      link: https://en.wikipedia.org/wiki/Chirality_(physics)
    - term: fermion doubling
      meaning: The appearance of unwanted extra fermion species when a fermion equation is naively put on a lattice.
      link: https://en.wikipedia.org/wiki/Fermion_doubling
    - term: Nielsen–Ninomiya theorem
      meaning: "A no-go theorem: a nice lattice fermion action cannot have a single chiral fermion without doublers."
      link: https://en.wikipedia.org/wiki/Nielsen%E2%80%93Ninomiya_theorem
    - term: Ginsparg–Wilson relation
      meaning: An equation that a lattice Dirac operator can obey to keep an exact, deformed version of chiral symmetry.
      link: https://en.wikipedia.org/wiki/Ginsparg%E2%80%93Wilson_equation
    - term: gauge anomaly
      meaning: A quantum effect that breaks a gauge symmetry; it must cancel in a consistent theory such as the Standard Model.
      link: https://en.wikipedia.org/wiki/Gauge_anomaly
    - term: reflection positivity
      meaning: A condition on Euclidean theories that lets them be turned into a unitary quantum theory in real time.
      link: https://en.wikipedia.org/wiki/Reflection_positivity
    - term: weak interaction
      meaning: The force behind radioactive beta decay; it acts only on left-handed fermions.
      link: https://en.wikipedia.org/wiki/Weak_interaction
    - term: quantum field theory
      meaning: The framework that treats particles as excitations of fields; the Standard Model is one.
      link: /research/quantum-field-theory
  readFirst:
    - title: Fermion doubling (Wikipedia)
      url: https://en.wikipedia.org/wiki/Fermion_doubling
      why: A short account of why a lattice makes extra fermions.
    - title: Nielsen–Ninomiya theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Nielsen%E2%80%93Ninomiya_theorem
      why: The theorem that forbids the easy fix.
    - title: Chirality (physics) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Chirality_(physics)
      why: What left- and right-handed mean for particles and why the weak force cares.
    - title: "Woit: AI and Chiral Fermions"
      url: https://www.math.columbia.edu/~woit/wordpress/?p=15915
      why: A sceptical physicist's plain-language reading of the 2026 preprint.
raw:
  body: "## Why the Standard Model is hard to put on a computer\n\nLattice gauge theory defines a quantum field theory by replacing continuous spacetime with a grid of spacing $a$ and the path integral with a finite-dimensional integral that can be studied rigorously or by Monte Carlo. It is how QCD is computed from first principles. The Standard Model contains something QCD does not: **chiral** gauge couplings. The weak force acts only on left-handed fermions, so the left- and right-handed parts of a quark or lepton carry different gauge charges. A mass term would join the two and break the gauge symmetry, which is why the Higgs mechanism is needed.\n\n## Fermion doubling and the no-go theorem\n\nWriting the Dirac equation on a lattice in the most direct way produces extra, unwanted fermions: in four dimensions, $2^4=16$ species per field (fermion doubling). The Nielsen–Ninomiya theorem (1981) says this is not an accident: a lattice fermion action that is local, translation invariant, hermitian and chirally symmetric must have equal numbers of left- and right-handed species. The usual workaround (Wilson fermions) gives the extra species large masses by breaking chiral symmetry explicitly. That is acceptable for QCD, where left and right behave alike, but a chiral gauge theory cannot afford it: the broken symmetry is a gauge symmetry, and restoring it in the continuum limit by fine-tuning is not a definition.\n\n## Ginsparg–Wilson fermions and the overlap operator\n\nGinsparg and Wilson (1982) proposed that the lattice Dirac operator $D$ need not anticommute with $\\gamma_5$; it is enough that\n\n$$\\gamma_5 D + D \\gamma_5 = a\\, D \\gamma_5 D .$$\n\nOperators obeying this relation keep an exact, slightly deformed chiral symmetry (Lüscher 1998) and evade Nielsen–Ninomiya because the deformation is nonlocal in a controlled way. Narayanan and Neuberger's **overlap operator** is an explicit solution, built from the Wilson operator by a sign function. Overlap fermions are standard in vector-like lattice QCD. They define a left-handed projector $\\hat P_-$ that depends on the gauge field, and that dependence is where the trouble starts for chiral theories.\n\n## The measure problem\n\nFor a Weyl (chiral) fermion in a gauge background $U$, the fermion integral needs a *measure* on the left-handed components. Because $\\hat P_-$ depends on $U$, a measure cannot be chosen once and for all. A gauge-invariant choice exists only if a consistency condition holds (Lüscher's integrability condition on a measure current), and for non-abelian groups the obstruction is the gauge anomaly, which cancels in the Standard Model. Lüscher (1998) solved this for abelian groups with exact lattice gauge invariance. A follow-up (hep-lat/9904009) addressed Weyl fermions and the non-abelian anomaly, and Kadoh and Kikukawa (2007) reported a construction for the Glashow–Weinberg–Salam model. A smooth, local, gauge-invariant measure for the Standard Model's non-abelian group, as a mathematical statement, was still not in the literature as an accepted result.\n\n## The October 2026 preprint\n\nCraig's preprint (arXiv:2610.09093, 6 Oct 2026, prepared for JHEP) claims such a measure for overlap fermions on a finite periodic 4D lattice, for gauge fields whose plaquettes are all within a volume-independent distance of the identity, for $SU(5)$ with the $\\mathbf{10}\\oplus\\bar{\\mathbf 5}$ content and, by restriction, the Standard Model gauge group with any number of generations. The author states the limits: the result is \"one of principle, rather than practice\", reflection positivity is not established, and a definition of the interacting continuum theory remains open. The paper is unrefereed, acknowledges OpenAI's GPT-6 Astra as essential to the proof, and comes with a Lean 4 archive on Zenodo whose correspondence with the paper was, per the paper, reviewed by AI agents. Follow-up preprints by Witten, Hsu and Liu (Oct–Nov 2026) give variants and comparisons; none is a line-by-line check.\n\n## Where this sits in DARC\n\nThe continuum Yang–Mills problem is tracked under [Quantum field theory](/research/quantum-field-theory). The chiral problem here is a separate question about *regularization*, not about the continuum limit. See the open problem [a nonperturbative lattice definition of the Standard Model](/research/lattice-chiral-gauge-theories/questions/standard-model-nonperturbative-lattice-definition)."
  student: "**Setting.** To define a quantum field theory carefully, we can put it on a grid (a *lattice*) of spacing $a$ in four dimensions, so that the infinite number of variables in the path integral becomes a finite number. Gauge fields live on the links between grid points; a gauge transformation is a rotation (an element of a group such as $SU(3)$) applied at each point. This is how QCD is simulated.\n\n**What goes wrong for fermions.** Discretizing the Dirac equation naively gives $2^4=16$ copies of each fermion, the *doubling problem*. The Nielsen–Ninomiya theorem says it cannot be avoided if the action is local, translation invariant, hermitian and has *chiral symmetry*, the symmetry that acts differently on left- and right-handed parts. The common fix, adding a Wilson term, makes the extra copies heavy but breaks chiral symmetry. For QCD that is manageable. For the weak force it is not, because the left-handed and right-handed parts carry different gauge charges, so the broken symmetry is a gauge symmetry.\n\n**A better lattice operator.** Ginsparg and Wilson (1982) noticed that chiral symmetry can be kept in a modified form if the lattice Dirac operator $D$ satisfies\n\n$$\\gamma_5 D + D\\gamma_5 = a\\,D\\gamma_5 D.$$\n\nHere $\\gamma_5$ is the matrix that distinguishes left from right, and the right side vanishes as $a\\to0$, giving ordinary chiral symmetry. The *overlap operator* is an explicit solution, so it has exactly one species and a lattice version of chiral symmetry.\n\n**The remaining difficulty: the measure.** A fermion integral also needs a way to decide what counts as a left-handed fermion in a given gauge background. In the overlap formalism the projector onto left-handed states depends on the gauge field, so the integration measure does as well. If you go around a closed loop in the space of gauge fields, the measure can come back with the wrong complex phase, and the result is not gauge invariant. Lüscher showed that a gauge-invariant measure exists exactly when a certain *current* built from the gauge field satisfies an integrability condition. He did this for abelian groups in 1998. A 2026 preprint by Craig claims a construction for the non-abelian Standard Model case on a finite periodic lattice, using a refinement scheme that compares projectors on grids of spacing $1/3, 1/9,\\dots$. It is unrefereed and AI-assisted, does not establish reflection positivity (the property needed for a sensible quantum theory), and does not define the continuum limit."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Physicists study the forces of nature by chopping space and time into a fine grid, like pixels, and then letting a computer work out what happens. This works well for the strong force that holds atomic nuclei together. It is much harder for the weak force, which is involved in radioactive decay and in how the Sun burns.

The reason is that the weak force treats left-handed and right-handed particles differently. Think of a screw: a particle spinning one way is like a right-handed screw and the other way like a left-handed one. The weak force only grabs the left-handed ones. When you put such a particle on a grid, two things go wrong. First, a grid tends to make extra copies of the particle that should not be there. Second, the usual cure for the copies destroys the very left-right difference you wanted to keep.

A long line of work since the 1980s found ways around this, and a 2026 preprint claims a way that works for the full Standard Model of particle physics, in a box of finite size. That preprint has not been checked by other experts yet, and its author says it is an answer in principle, not something to compute with.

Where the picture breaks down: the grid is only a stand-in for real, smooth space. The hard question is what happens when the grid is made infinitely fine.
