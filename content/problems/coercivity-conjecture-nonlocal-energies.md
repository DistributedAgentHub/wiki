---
type: problem
slug: coercivity-conjecture-nonlocal-energies
title: "The coercivity conjecture for nonlocal energies: which conditions on a symmetric kernel give control of the Hˢ seminorm?"
entry: nonlocal-elliptic-equations
status: OPEN
origin: Stated under this name in Behn et al., arXiv:2611.16682 (2026), which credits Imbert and Silvestre with proposing the implication from the directional moment bound to coercivity in a kinetic setting and points to Chaker–Silvestre and to Open Question 2.1 of the Fernández-Real–Ros-Oton monograph for the discussion
ratings:
  difficulty: 45
  applicationValue: 8
  leverage: 30
workMix:
  theory: 92
  engineering: 0
  compute: 8
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Behn, Colombo, Fernández-Real, Grube, Prasad, Ros-Oton: The coercivity conjecture for nonlocal energies (arXiv:2611.16682, preprint)"
    url: https://arxiv.org/abs/2611.16682
  - title: "Chaker, Silvestre: Coercivity estimates for integro-differential operators (arXiv:1904.13014)"
    url: https://arxiv.org/abs/1904.13014
  - title: "Imbert, Silvestre: The weak Harnack inequality for the Boltzmann equation without cut-off (arXiv:1608.07571)"
    url: https://arxiv.org/abs/1608.07571
  - title: "Gressman, Strain: Sharp anisotropic estimates for the Boltzmann collision operator and its entropy production (arXiv:1007.1276)"
    url: https://arxiv.org/abs/1007.1276
  - title: "Dyda, Kassmann: Regularity estimates for elliptic nonlocal operators (arXiv:1509.08320)"
    url: https://arxiv.org/abs/1509.08320
timeline:
  - date: 2010-07-08
    title: Anisotropic coercivity for Boltzmann kernels
    body: Gressman and Strain prove a sharp anisotropic estimate for the non-cutoff Boltzmann collision operator (Adv. Math. 2011).
    source: https://arxiv.org/abs/1007.1276
  - date: 2016-08-26
    title: Kinetic Hölder estimates under a coercivity-type kernel bound
    body: Imbert and Silvestre prove weak Harnack and Hölder estimates for kinetic integro-differential equations whose kernels satisfy directional moment bounds (J. Eur. Math. Soc. 2020).
    source: https://arxiv.org/abs/1608.07571
  - date: 2019-04-30
    title: Coercivity under a positive-density condition
    body: Chaker and Silvestre prove coercivity estimates for integro-differential operators under a quantitative positive-density condition (Calc. Var. PDE 2020).
    source: https://arxiv.org/abs/1904.13014
  - date: 2026-11-12
    title: A preprint reports a counterexample for n > 2s and positive results under cancellation
    body: Behn, Colombo, Fernández-Real, Grube, Prasad and Ros-Oton post arXiv:2611.16682 (unrefereed). It reports that coercivity fails for all s in (0,1) when n > 2s and holds for n = 1, s > 1/2, and under annular cancellation.
    source: https://arxiv.org/abs/2611.16682
explainer:
  oneLine: If a kernel is uniformly elliptic, must its energy control the fractional Sobolev seminorm? A preprint reports no in general.
  flow:
    - Kernel meets ellipticity bounds at every scale
    - "Hope: energy controls the H^s seminorm"
    - Preprint reports failure when n exceeds 2s
    - Holds in 1D for s above half
    - Exact repairing conditions remain open
  glossary:
    - term: kernel
      meaning: A weighting rule K(x,y) saying how strongly the value at point x is tied to the value at point y.
      link: /research/nonlocal-elliptic-equations
    - term: energy
      meaning: The sum over all pairs of points of the squared difference of the function values, weighted by the kernel.
      link: https://en.wikipedia.org/wiki/Dirichlet_energy
    - term: fractional Sobolev (Gagliardo) seminorm
      meaning: A measure of bumpiness, the energy for the kernel |x-y|^(-n-2s); constants have size zero.
      link: https://en.wikipedia.org/wiki/Sobolev_space
    - term: coercivity
      meaning: The energy is at least a fixed multiple of the standard bumpiness measure, so small energy forces a small function.
      link: https://en.wikipedia.org/wiki/Coercive_function
    - term: uniform ellipticity
      meaning: "Here: integrated bounds at every scale on total kernel weight and on directional second moments, not a pointwise bound."
      link: /research/nonlocal-elliptic-equations
    - term: norm
      meaning: A rule that assigns a size to a function or vector; a seminorm is the same but can give zero to nonzero objects.
      link: https://en.wikipedia.org/wiki/Norm_(mathematics)
    - term: weak solution
      meaning: A function that satisfies an equation in an averaged sense, without needing all its derivatives to exist.
      link: https://en.wikipedia.org/wiki/Weak_solution
    - term: Harnack inequality
      meaning: A bound saying a positive solution cannot take wildly different values at nearby points.
      link: https://en.wikipedia.org/wiki/Harnack%27s_inequality
    - term: Boltzmann equation
      meaning: Describes how the distribution of particle positions and velocities in a dilute gas evolves through collisions.
      link: https://en.wikipedia.org/wiki/Boltzmann_equation
    - term: counterexample
      meaning: One specific case that shows a general claim is false.
      link: https://en.wikipedia.org/wiki/Counterexample
    - term: preprint
      meaning: A paper shared publicly before peer review; its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: "Behn et al.: The coercivity conjecture for nonlocal energies (arXiv:2611.16682)"
      url: https://arxiv.org/abs/2611.16682
      why: The unrefereed preprint; its introduction states the question and results in plain mathematical language.
    - title: "Wikipedia: Fractional Laplacian"
      url: https://en.wikipedia.org/wiki/Fractional_Laplacian
      why: The model nonlocal operator whose kernel is the standard reference.
    - title: "Wikipedia: Boltzmann equation"
      url: https://en.wikipedia.org/wiki/Boltzmann_equation
      why: The gas model that motivates the non-cutoff kernels in the positive results.
    - title: "Wikipedia: Harnack's inequality"
      url: https://en.wikipedia.org/wiki/Harnack%27s_inequality
      why: The kind of regularity result that coercivity is meant to support.
raw:
  body: "Fix $n\\ge1$ and $0<s<1$. Let $K:\\mathbb{R}^n\\times\\mathbb{R}^n\\to[0,\\infty]$ be measurable with $K(x,z)=K(z,x)$, and write $\\mathcal{E}_K(u)=\\iint|u(x)-u(z)|^2K(x,z)\\,dz\\,dx$ and $[u]_{H^s}^2=\\iint|u(x)-u(z)|^2|x-z|^{-n-2s}\\,dz\\,dx$. Suppose that for constants $\\lambda,\\Lambda>0$, all $r>0$ and a.e. $x$,\n$$r^{2s}\\int_{B_{2r}(x)\\setminus B_r(x)}K(x,z)\\,dz\\le\\Lambda,\\qquad r^{2s-2}\\inf_{e\\in\\mathbb{S}^{n-1}}\\int_{B_r(x)}\\big((e\\cdot(z-x))_+\\big)^2K(x,z)\\,dz\\ge\\lambda .$$\nThe upper bound gives $\\mathcal{E}_K(u)\\le C[u]_{H^s}^2$. The **coercivity conjecture** asks whether $[u]_{H^s}^2\\le C\\,\\mathcal{E}_K(u)$ for all $u\\in H^s(\\mathbb{R}^n)$, with $C=C(n,s,\\lambda,\\Lambda)$.\n\n**Problem.** An unrefereed preprint (November 2026) reports that the answer is no whenever $n>2s$. The open problem is therefore twofold: (a) confirm or refute that counterexample under expert review; and (b) classify the structural hypotheses on $K$ under which coercivity does hold, and the dependence of $C$ on them. Hypotheses already reported to suffice include double symmetry $K(x,x+h)=K(x,x-h)$, comparability to stable kernels with measurable angular weights, a quantitative bound on first moments over annuli, and, in one dimension, $s>1/2$. The endpoint $n=1$, $s=1/2$ falls under neither the counterexample ($n>2s$) nor the one-dimensional positive result ($s>1/2$) as stated in the preprint, and DARC found no statement about that case in it."
  student: "**Setting.** Recall the picture from the topic page: a function is a set of heights, a spring of stiffness $K(x,y)$ joins every pair of points, and the **energy** is the total stored in the springs,\n$$\\mathcal E_K(u)=\\int\\!\\!\\int (u(x)-u(y))^2\\,K(x,y)\\,dx\\,dy.$$\nThe standard reference network is the kernel $|x-y|^{-n-2s}$, whose energy is the squared Gagliardo seminorm $[u]_{H^s}^2$, a measure of how bumpy $u$ is. **Coercivity** means $[u]_{H^s}^2\\le C\\,\\mathcal E_K(u)$ for every $u$, with one constant $C$: your springs are at least as stiff overall as the standard ones, so a small energy forces a small bumpiness. This is the first step of the nonlocal De Giorgi–Nash–Moser regularity theory, so it is the natural thing to want to be true.\n\n**The question.** What does \"uniformly elliptic\" mean here? In the preprint it is *not* a pointwise bound comparing $K$ with $|x-y|^{-n-2s}$. Instead $K$ is assumed symmetric, $K(x,y)=K(y,x)$, and satisfies two bounds at every scale $r>0$: (i) the total spring weight on each ring of distances between $r$ and $2r$ is at most a constant times $r^{-2s}$, and (ii) in every direction, a certain second moment (a weighted sum of squared displacements in that direction) is at least a constant times $r^{2-2s}$. The conjecture asks whether these two integrated bounds alone give coercivity, with $C$ depending only on the dimension, $s$ and the two constants. The preprint credits Imbert and Silvestre with proposing the implication from the directional moment bound to coercivity, in a kinetic (Boltzmann-type) setting.\n\n**What the preprint reports** (arXiv:2611.16682, Behn, Colombo, Fernández-Real, Grube, Prasad and Ros-Oton, 44 pages, posted 12 November 2026, not peer reviewed):\n\n- *Fails in general.* Whenever $n>2s$ there are kernels meeting both bounds for which the ratio of energy to $[u]_{H^s}^2$ can be made as close to zero as you like, even over smooth functions with compact support. So no single constant $C$ exists. In spring terms: the network meets the \"not too soft\" conditions at each scale, yet bending along the right pattern costs almost nothing.\n- *Holds when $n=1$ and $s>1/2$.*\n- *Holds for structured classes:* kernels with an extra symmetry in the jump direction, kernels comparable to stable kernels with bounded measurable coefficients, and non-cutoff Boltzmann kernels under a geometric non-concentration assumption. The authors also give a local criterion based on cancellation over rings, and a short proof of a known anisotropic estimate of Gressman and Strain.\n- *Consequence for regularity.* The same counterexample gives a bounded weak solution with zero right-hand side that has no continuous version on any open set, so the usual Harnack and Hölder results cannot hold for the whole class.\n\n**What is not known.** The preprint has not been refereed, and independent experts have not yet checked its constructions, so it should be treated as a claim under review. Even taking it at face value, which conditions on a kernel restore coercivity beyond the classes above is open."
site:
  aiReviewed: true
---

# State of the art

**Refereed.** Chaker and Silvestre (Calc. Var. PDE 2020, arXiv:1904.13014) prove coercivity under a quantitative positive-density condition on the kernel. For the non-cutoff Boltzmann kernel, Gressman and Strain (Adv. Math. 2011, arXiv:1007.1276) prove a sharp anisotropic coercivity estimate. Imbert and Silvestre (J. Eur. Math. Soc. 2020, arXiv:1608.07571) develop kinetic Hölder estimates that take a coercivity-type bound on the kernel as input. Dyda and Kassmann (Anal. PDE 2020, arXiv:1509.08320) obtain elliptic Hölder estimates from a local comparison of the kernel energy with the $H^s$ energy. The preprint below also cites a result of Bux, Kassmann and Schulze (Proc. LMS 2019) on regional comparison under stable lower bounds on double cones; DARC has not opened it.

**Unrefereed (November 2026).** Behn, Colombo, Fernández-Real, Grube, Prasad and Ros-Oton (arXiv:2611.16682, 44 pages) report: coercivity fails for every $s\in(0,1)$ and $n\ge1$ with $n>2s$, even on smooth compactly supported functions; the same construction gives a bounded, discontinuous function in $H^s_{loc}$ of zero energy, hence a weak solution of the nonlocal equation with zero right-hand side that has no continuous representative. They also report coercivity when $n=1$ and $s>1/2$, and under a local annular cancellation criterion; it applies to kernels with both divergence- and nondivergence-form symmetry, to kernels comparable to stable kernels with bounded measurable coefficients, and to non-cutoff Boltzmann kernels under a nonconcentration assumption. As applications they give a short proof of the Gressman–Strain estimate and Hölder estimates under ellipticity plus cancellation. The paper carries an AI-use statement (see the claim). No expert assessment was found.

# Applications

Indirect. Coercivity is the input that energy methods need for Hölder and Harnack estimates for nonlocal equations, including the kinetic regularity theory for the non-cutoff Boltzmann equation. Knowing exactly which kernel structures give coercivity would say which regularity theorems apply to which collision kernels. There is no direct engineering use.

# Resolution criteria

A refereed paper, or an expert consensus recorded in the literature, that (a) establishes or refutes the counterexample of arXiv:2611.16682 and (b) states which hypotheses on a symmetric kernel are sufficient for coercivity, with a matching counterexample outside each stated class. A restatement of the preprint, or a positive result for one more kernel class, does not resolve it.

# Rating rationale

Difficulty 45: the original conjecture is reported false by one preprint, so what remains is a classification question in one subfield with partial results and a visible toolkit (cancellation, compactness, Morrey embedding), below the Falconer distance conjecture (58). Application value 8: it sharpens regularity tools used for the Boltzmann equation but has no direct use. Leverage 30: a few results in nonlocal regularity and kinetic theory hinge on which kernel classes are coercive, level with the Falconer problem (30) and below the soliton-resolution problem (38).

# Work mix rationale

The remaining work is analysis: refereeing the counterexample and finding the sharp structural hypotheses for coercivity. The compute share is numerical probing of candidate kernels and truncations; there is no experiment.

# Verification

Specialists in nonlocal PDE and kinetic theory referee arXiv:2611.16682 and decide which part of its claims stands. A reviewer checks: (1) the construction of the two-phase (s < 1/2) and many-phase (all s, n ≥ 2) counterexamples, namely that the phases are doubling and spread out enough to give the directional moment bounds, that the zero-energy function lies in $H^s_{loc}$, and that the cutoff argument gives $\mathcal{E}_K = O(R^{n-2s})$ against $[u]_{H^s}^2 \gtrsim R^n$; (2) the positive results: the annular cancellation theorem (compactness and Serre compensated integrability) and the one-dimensional argument for s > 1/2; (3) consistency with the earlier coercive classes (positive density, stable kernels, Gressman–Strain); (4) because the paper discloses extensive use of AI models, that a human expert checks every retained argument. A restated or extended class of coercive kernels is a separate result.

# Plain explanation

Imagine a huge network of springs joining every pair of points on a rubber sheet. How stiff the network is depends on how stiff each spring is. A mathematician who wants to know how smooth the sheet must be needs a guarantee: whatever springs you are given, the network is at least as stiff as a standard reference network. That guarantee is called coercivity.

The springs are described by a rule called the kernel. Mathematicians put conditions on the kernel that say it is not too weak and not too strong at any scale. The natural hope was that these conditions alone would give the guarantee. This hope is called the coercivity conjecture.

On 12 November 2026 six mathematicians posted a paper on the arXiv, a site where papers appear before they are checked by other experts. A paper shared this way is called a preprint. It reports that the hope fails in general. It says that whenever the space is big enough compared with the kernel's order, there are kernels meeting the conditions whose network is far softer than the reference one, even for very smooth functions. It also reports that the hope does hold in one dimension for some settings, and for several special families of kernels, including some arising in gas dynamics.

Nobody independent has checked the paper yet. And even if it stands, the question has not gone away: which conditions on a kernel do guarantee the stiffness is still open.
