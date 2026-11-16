---
type: entry
slug: nonlocal-elliptic-equations
title: Nonlocal elliptic equations and fractional energies
field: analysis-pde
kind: THEORY
status: ACTIVE
summary: "Integro-differential operators of order 2s, from the fractional Laplacian to measurable symmetric kernels: energy forms, the Hˢ seminorm, and De Giorgi–Nash–Moser regularity without derivatives."
reliedOn: Regularity for jump processes and for the non-cutoff Boltzmann equation, whose collision operator is a nonlocal operator of this type, rests on this energy and De Giorgi–Nash–Moser theory. Whether ellipticity alone gives control of the fractional Sobolev norm decides which energy methods apply.
dependsOn:
  - harmonic-analysis
  - sobolev-spaces-energy-methods
references:
  - title: "Chaker, Silvestre: Coercivity estimates for integro-differential operators (Calc. Var. PDE 2020)"
    url: https://arxiv.org/abs/1904.13014
    kind: paper
  - title: "Gressman, Strain: Sharp anisotropic estimates for the Boltzmann collision operator and its entropy production (Adv. Math. 2011)"
    url: https://arxiv.org/abs/1007.1276
    kind: paper
  - title: "Imbert, Silvestre: The weak Harnack inequality for the Boltzmann equation without cut-off (J. Eur. Math. Soc. 2020)"
    url: https://arxiv.org/abs/1608.07571
    kind: paper
  - title: "Imbert, Silvestre: Regularity for the Boltzmann equation conditional to macroscopic bounds (survey)"
    url: https://arxiv.org/abs/2005.02997
    kind: paper
  - title: "Di Castro, Kuusi, Palatucci: Nonlocal Harnack inequalities (J. Funct. Anal.)"
    url: https://arxiv.org/abs/1405.7842
    kind: paper
  - title: "Caffarelli, Chan, Vasseur: Regularity theory for nonlinear integral operators (arXiv preprint)"
    url: https://arxiv.org/abs/1003.1699
    kind: paper
  - title: "Dyda, Kassmann: Regularity estimates for elliptic nonlocal operators (Anal. PDE 2020)"
    url: https://arxiv.org/abs/1509.08320
    kind: paper
  - title: "Behn, Colombo, Fernández-Real, Grube, Prasad, Ros-Oton: The coercivity conjecture for nonlocal energies (arXiv:2611.16682, preprint)"
    url: https://arxiv.org/abs/2611.16682
    kind: paper
timeline:
  - date: 2010-03-08
    title: Regularity theory for nonlocal variational integral operators
    body: Caffarelli, Chan and Vasseur post a regularity theory for nonlocal evolution equations of variational type with measurable kernels.
    source: https://arxiv.org/abs/1003.1699
  - date: 2010-07-08
    title: Sharp anisotropic coercivity for the Boltzmann collision operator
    body: Gressman and Strain prove anisotropic fractional-derivative estimates for the non-cutoff Boltzmann collision operator (Adv. Math. 2011).
    source: https://arxiv.org/abs/1007.1276
  - date: 2014-05-30
    title: Nonlocal Harnack inequalities
    body: Di Castro, Kuusi and Palatucci prove Harnack-type inequalities for weak solutions of nonlocal equations, with a tail term for the far-field contribution.
    source: https://arxiv.org/abs/1405.7842
  - date: 2015-09-28
    title: Hölder estimates from local energy comparison
    body: Dyda and Kassmann obtain regularity estimates for elliptic nonlocal operators under comparison of the kernel energy with the Hˢ energy (Anal. PDE 2020).
    source: https://arxiv.org/abs/1509.08320
  - date: 2016-08-26
    title: Weak Harnack inequality for kinetic nonlocal equations
    body: Imbert and Silvestre prove weak Harnack and Hölder estimates for kinetic integro-differential equations and apply them to the Boltzmann equation without cutoff (J. Eur. Math. Soc. 2020).
    source: https://arxiv.org/abs/1608.07571
  - date: 2019-04-30
    title: General coercivity criterion
    body: Chaker and Silvestre give a condition on the kernel under which the energy is comparable to the Hˢ seminorm (Calc. Var. PDE 2020).
    source: https://arxiv.org/abs/1904.13014
  - date: 2026-11-12
    title: A preprint reports that moment-type ellipticity does not imply coercivity
    body: Behn, Colombo, Fernández-Real, Grube, Prasad and Ros-Oton post arXiv:2611.16682 (unrefereed), reporting a counterexample for n > 2s and positive results under cancellation.
    source: https://arxiv.org/abs/2611.16682
explainer:
  oneLine: Equations where the value at a point depends on values far away, through a weighting rule called a kernel.
  flow:
    - Faraway points affect each other
    - Kernel K sets the coupling strength
    - Spring-network energy of a function
    - Coercive means at least standard stiffness
    - Coercivity opens the regularity theory
  glossary:
    - term: kernel
      meaning: A weighting rule K(x,y) that says how strongly the value at point x is tied to the value at point y.
      link: https://en.wikipedia.org/wiki/Integral_transform
    - term: fractional Laplacian
      meaning: A nonlocal operator that sits between doing nothing and the ordinary Laplacian; the model case of a kernel of order 2s.
      link: https://en.wikipedia.org/wiki/Fractional_Laplacian
    - term: elliptic equation
      meaning: A steady-state equation, with no time evolution, such as the equation for the equilibrium temperature in a plate.
      link: https://en.wikipedia.org/wiki/Elliptic_partial_differential_equation
    - term: Lévy flight
      meaning: A random walk with occasional very long jumps; its probability density obeys a nonlocal equation.
      link: https://en.wikipedia.org/wiki/L%C3%A9vy_flight
    - term: Boltzmann equation
      meaning: Describes how the distribution of particle positions and velocities in a dilute gas evolves through collisions.
      link: https://en.wikipedia.org/wiki/Boltzmann_equation
    - term: anomalous diffusion
      meaning: Spreading that is faster or slower than ordinary diffusion, where the typical distance does not grow in proportion to the square root of time.
      link: https://en.wikipedia.org/wiki/Anomalous_diffusion
    - term: Sobolev space / norm
      meaning: A way of measuring both the size of a function and how bumpy it is; the standard setting for energy methods.
      link: /research/sobolev-spaces-energy-methods
    - term: energy (Dirichlet-type)
      meaning: A single number measuring how much a function varies; the sum of squared differences weighted by a kernel is the nonlocal version.
      link: https://en.wikipedia.org/wiki/Dirichlet_energy
    - term: coercivity
      meaning: The energy is at least a fixed multiple of a standard size measure, so small energy forces the function to be small.
      link: https://en.wikipedia.org/wiki/Coercive_function
    - term: weak solution
      meaning: A function that satisfies an equation in an averaged sense, without needing all its derivatives to exist.
      link: https://en.wikipedia.org/wiki/Weak_solution
    - term: Harnack inequality
      meaning: A bound saying a positive solution cannot take wildly different values at nearby points.
      link: https://en.wikipedia.org/wiki/Harnack%27s_inequality
    - term: Hölder continuity
      meaning: "A quantitative smoothness: values at two points differ by at most a constant times a power of their distance."
      link: https://en.wikipedia.org/wiki/H%C3%B6lder_condition
  readFirst:
    - title: "Wikipedia: Fractional Laplacian"
      url: https://en.wikipedia.org/wiki/Fractional_Laplacian
      why: The model nonlocal operator, with several equivalent definitions.
    - title: "Wikipedia: Lévy flight"
      url: https://en.wikipedia.org/wiki/L%C3%A9vy_flight
      why: The random-walk picture behind jump processes, with everyday examples.
    - title: "Wikipedia: Anomalous diffusion"
      url: https://en.wikipedia.org/wiki/Anomalous_diffusion
      why: Why ordinary diffusion is sometimes the wrong model.
    - title: "Wikipedia: Boltzmann equation"
      url: https://en.wikipedia.org/wiki/Boltzmann_equation
      why: The gas model whose non-cutoff collision term is nonlocal.
raw:
  student: "**Local versus nonlocal.** In first-year physics, heat flow and diffusion are *local*: how fast the temperature at a point changes depends on how sharply the temperature curves right there, which involves only a point's immediate surroundings. A *nonlocal* equation lets every point talk to every other point, with a weight that says how strongly. In an equation of the form $Lu(x)=\\int (u(x)-u(y))\\,K(x,y)\\,dy$, the weight $K(x,y)$ is called the **kernel**: a rule that assigns a number to each pair of points. Large $K$ means those two points are tightly coupled. (The integral is a continuous sum over all points $y$.) \"Elliptic\" is the name for the steady-state, no-time-dependence kind of equation, like the steady temperature in a metal plate.\n\n**The model case.** Take $K(x,y)=|x-y|^{-n-2s}$, where $n$ is the dimension and $0<s<1$ is a fixed number. Then $L$ is, up to a constant factor $c_{n,s}$, the **fractional Laplacian** $(-\\Delta)^s$, an operator of order $2s$. With that constant included, letting $s\\to1$ recovers $-\\Delta$, minus the ordinary Laplacian, which measures curvature.\n\n**Where this comes from.** (1) *Jump processes.* A particle that does a random walk with occasional long jumps, a Lévy flight, has a nonlocal equation for its probability density, and the kernel is the jump rate from $y$ to $x$. (2) *Gas dynamics.* The Boltzmann equation describes a dilute gas. If you keep all the tiny-angle collisions (the non-cutoff case), the collision term acts like a nonlocal operator in the velocity variable. (3) *Anomalous diffusion*: spreading unlike ordinary diffusion.\n\n**Energy, and a picture to hold on to.** Picture a function as heights at a very large number of grid points, with a spring joining every pair of points. The spring between $x$ and $y$ has stiffness $K(x,y)$, and its stored energy is stiffness times the square of the height difference. Adding up over all pairs gives the **energy**\n$$\\mathcal E_K(u)=\\int\\!\\!\\int (u(x)-u(y))^2\\,K(x,y)\\,dx\\,dy.$$\nIn words: the total spring energy of the whole network. The analogy breaks: there are infinitely many springs.\n\n**A yardstick.** For the model kernel, the energy is the squared **Gagliardo seminorm**, written $[u]_{H^s}^2$. A *norm* is a way to measure the size of a function; \"semi\" means that constants have size zero. $[u]_{H^s}$ measures roughly how bumpy $u$ is, with $s$ playing the role of \"how many derivatives\".\n\n**Ellipticity and coercivity.** A kernel of order $2s$ is called *uniformly elliptic* if it is not too small in any direction and not too large at any scale, so that its stiffness looks, scale by scale, like the model kernel. **Coercivity** asks for the energy to be at least a fixed multiple of the standard yardstick: $[u]_{H^s}^2\\le C\\,\\mathcal E_K(u)$. In spring terms, your springs are at least as stiff overall as the standard network.\n\n**Why it matters.** Coercivity is the first step in the theory of how smooth solutions are. The classical De Giorgi–Nash–Moser argument shows that solutions of local equations with merely bounded measurable coefficients are automatically continuous. Its nonlocal versions start by using the energy to control a Sobolev-type norm; the later steps (Harnack-type inequalities, Hölder continuity) build on that. Without coercivity those steps have nothing to stand on."
site:
  published: true
  aiReviewed: true
---

## The operators

For $0<s<1$ the **fractional Laplacian** is $(-\Delta)^s u(x)=c_{n,s}\,\mathrm{P.V.}\!\int_{\mathbb{R}^n}\frac{u(x)-u(z)}{|x-z|^{n+2s}}\,dz$; its Fourier symbol is $|\xi|^{2s}$. Its negative, $-(-\Delta)^s$, is the generator of the rotationally symmetric $2s$-stable Lévy process. More generally an **integro-differential operator** has the form $Lu(x)=\mathrm{P.V.}\!\int (u(x)-u(z))\,K(x,z)\,dz$ with a measurable kernel $K\ge0$. It has **order $2s$** when $K$ behaves like $|x-z|^{-n-2s}$ near the diagonal. Stable operators, $K(x,x+h)=a(h/|h|)\,|h|^{-n-2s}$, let the angular weight $a$ vary; letting $a$ also depend on $x$ gives the variable-direction kernels that appear in kinetic theory.

## Energy forms and the $H^s$ seminorm

For a symmetric kernel, $K(x,z)=K(z,x)$, the natural object is the energy
$\mathcal{E}_K(u)=\iint |u(x)-u(z)|^2\,K(x,z)\,dz\,dx,$
and a weak solution of $Lu=f$ satisfies $\mathcal{E}_K(u,\varphi)=\int f\varphi$ for test functions $\varphi$. For $K=|x-z|^{-n-2s}$ this is the squared Gagliardo seminorm $[u]_{H^s}^2$, the fractional counterpart of $\int|\nabla u|^2$. Two inequalities matter. An upper bound $\mathcal{E}_K(u)\le C[u]_{H^s}^2$ follows from a bound on the mass of the kernel at each scale. The reverse, **coercivity** $[u]_{H^s}^2\le C\,\mathcal{E}_K(u)$, is what turns energy estimates into Sobolev control, and it is the nonlocal replacement for the lower ellipticity bound $A\ge\lambda\,\mathrm{Id}$. For kernels comparable pointwise to $|x-z|^{-n-2s}$ both hold at once; for translation-invariant kernels coercivity is equivalent to the symbol being comparable to $|\xi|^{2s}$.

## Ellipticity without pointwise bounds

Pointwise two-sided bounds are too strong for applications: the kernels of interest vanish in large sets of directions. A weaker ellipticity condition asks, at each point $x$ and scale $r$, for a bound on the total jump mass in the annulus $B_{2r}\setminus B_r$ and for a definite second moment of the kernel in every direction. Whether such moment bounds, together with symmetry, force coercivity has been an open question in the subject (see the problem attached to this entry).

## De Giorgi–Nash–Moser theory

For $-\operatorname{div}(A\nabla u)=0$ with measurable coefficients $\lambda\,\mathrm{Id}\le A\le\Lambda\,\mathrm{Id}$, De Giorgi, Nash and Moser proved Hölder continuity and a Harnack inequality. Nonlocal analogues for measurable kernels were developed by Kassmann (a priori estimates for integro-differential operators with measurable kernels, 2009), by Caffarelli, Chan and Vasseur for nonlocal variational evolution equations, and by Di Castro, Kuusi and Palatucci (nonlocal Harnack inequalities, 2014). A new feature is the **tail**: the equation at $x$ sees $u$ everywhere, so the estimates carry a term controlling $u$ far from the point. Dyda and Kassmann gave a general framework in which Hölder estimates follow from a comparison of $\mathcal{E}_K$ with the $H^s$ energy; that comparison is exactly the coercivity discussed above.

## The Boltzmann connection

For the Boltzmann equation without angular cutoff, with the velocity distribution frozen, the collision operator is a nonlocal operator of order $2s$ in the velocity variable. Its kernel depends on the distribution, and its directions of diffusion move with it. Gressman and Strain proved a sharp anisotropic coercivity estimate for it. Imbert and Silvestre developed weak Harnack and Hölder estimates for kinetic integro-differential equations with measurable kernels, and their theory takes a coercivity assumption on the kernel as input. Chaker and Silvestre gave a general sufficient condition on the kernel for coercivity.

## Current state

Coercivity is known in the classes above. In November 2026 an unrefereed preprint (Behn, Colombo, Fernández-Real, Grube, Prasad, Ros-Oton) reports that the moment-type ellipticity bounds and symmetry alone do not imply coercivity when $n>2s$, and that they do in dimension one for $s>1/2$; it also reports coercivity under additional cancellation hypotheses. If this holds up under review, the question becomes which extra structure on the kernel is the right one.

# Plain explanation

Most equations in physics are local. The temperature at a spot in a metal bar changes only because of the temperature right next to it. Heat creeps from neighbour to neighbour.

Now imagine something that jumps. A dust grain that sometimes leaps a long way, a foraging animal that now and then crosses the whole valley, or particles in a gas that graze each other and veer off by a tiny angle. For these, what happens at one spot depends on what is going on far away as well as close by. Equations that capture this are called nonlocal. They add up the influence of every other point, with a weighting rule that says how much a faraway point counts. That rule is called the kernel.

Think of gossip. A local equation is gossip passed only over the garden fence. A nonlocal one also allows phone calls to anyone in town, with nearby people called more often.

The best-known example is the fractional Laplacian, an "in-between" version of ordinary spreading. These equations show up in random jumping motion, gas dynamics, and models of unusually fast spreading.

The big question mathematicians ask is how smooth the answers are. Without any assumptions, a solution could be very jagged. They want to know which weighting rules still guarantee well-behaved solutions. A key first step is showing that the weighting rule gives a solid measure of how bumpy a function is. That property is called coercivity.
