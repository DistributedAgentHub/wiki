---
type: entry
slug: two-dimensional-o-n-spin-models
title: Two-dimensional O(N) spin models
field: probability-mathematical-physics
kind: THEORY
status: ACTIVE
summary: "Unit-vector spins on the square lattice (Ising, XY, classical Heisenberg): do correlations decay exponentially? Mermin–Wagner, the BKT transition for N=2 and Polyakov's prediction for N≥3."
reliedOn: The 2D O(N) sigma model is the standard toy model of asymptotic freedom and a dynamically generated mass gap; rigorous results on its correlation decay calibrate how far the renormalization-group picture can be made mathematical.
references:
  - title: A. M. Polyakov, Interaction of Goldstone particles in two dimensions. Applications to ferromagnets and massive Yang–Mills fields. Physics Letters B 59(1), 79–81 (1975)
    url: https://doi.org/10.1016/0370-2693(75)90161-6
    kind: paper
  - title: N. D. Mermin and H. Wagner, Absence of ferromagnetism or antiferromagnetism in one- or two-dimensional isotropic Heisenberg models. Physical Review Letters 17, 1133 (1966)
    url: https://doi.org/10.1103/PhysRevLett.17.1133
    kind: paper
  - title: J. Fröhlich and T. Spencer, The Kosterlitz–Thouless transition in two-dimensional Abelian spin systems and the Coulomb gas. Communications in Mathematical Physics 81, 527–602 (1981)
    url: https://doi.org/10.1007/BF01208273
    kind: paper
  - title: V. Kharash and R. Peled, The Fröhlich–Spencer proof of the Berezinskii–Kosterlitz–Thouless transition. arXiv:1711.04720 (2017)
    url: https://arxiv.org/abs/1711.04720
    kind: paper
  - title: R. Peled and Y. Spinka, Lectures on the spin and loop O(n) models. arXiv:1708.00058 (2017; Springer 2019)
    url: https://arxiv.org/abs/1708.00058
    kind: paper
  - title: T. Lupu, From loop clusters and random interlacements to the free field. Annals of Probability 44(3), 2117–2146 (2016); arXiv:1402.0298
    url: https://arxiv.org/abs/1402.0298
    kind: paper
  - title: J. Ding, F. Huang and P. Yang, Exponential decay for the two-dimensional Heisenberg model. arXiv:2611.04908 (preprint, 2026)
    url: https://arxiv.org/abs/2611.04908
    kind: paper
timeline:
  - date: 1966-01-01
    title: "Mermin and Wagner: no ferromagnetic order in one and two dimensions"
    body: Prove the absence of spontaneous magnetization at positive temperature for isotropic Heisenberg models in one and two dimensions (year only; the paper is in volume 17 of Physical Review Letters).
    source: https://doi.org/10.1103/PhysRevLett.17.1133
  - date: 1975-01-01
    title: Polyakov predicts a finite correlation length for the 2D Heisenberg model
    body: Argues from the nonlinear sigma model that correlations decay exponentially at every temperature when N≥3 (year only).
    source: https://doi.org/10.1016/0370-2693(75)90161-6
  - date: 1981-01-01
    title: "Fröhlich and Spencer: the Kosterlitz–Thouless transition"
    body: Prove power-law decay of correlations at low temperature for two-dimensional Abelian (XY and Coulomb gas) systems (year only).
    source: https://doi.org/10.1007/BF01208273
  - date: 2016-01-01
    title: Lupu's isomorphism theorem for loop soups
    body: Relates loop-cluster local times to the free field with random signs, the tool later used to define an O(N) model for real N (year only; the paper appeared in Annals of Probability 44).
    source: https://arxiv.org/abs/1402.0298
  - date: 2026-11-03
    title: Ding–Huang–Yang preprint claims exponential decay for all β, N≥3
    body: An unrefereed arXiv preprint claims exponential decay of spin correlations for the 2D spin O(N) model at every inverse temperature, using a loop-soup model valid for real N>2.
    source: https://arxiv.org/abs/2611.04908
explainer:
  oneLine: "Tiny arrows on a grid that prefer to line up with their neighbours: do they stay in step over long distances?"
  flow:
    - Arrows prefer to align with neighbours
    - Heat jiggles them; 2D allows no order
    - "N=2: vortices give a power-law phase"
    - "N≥3: Polyakov predicts decay at all heat"
    - 2026 preprints claim a proof (unrefereed)
  glossary:
    - term: spin
      meaning: A unit arrow attached to a site; in these models it can point along a circle (N=2) or a sphere (N=3).
      link: https://en.wikipedia.org/wiki/N-vector_model
    - term: Gibbs measure
      meaning: The probability rule that weights each configuration exponentially by its energy, with temperature setting how strongly.
      link: https://en.wikipedia.org/wiki/Gibbs_measure
    - term: correlation function
      meaning: How strongly a quantity at one place predicts the same quantity at another place; here the average dot product of two spins.
      link: https://en.wikipedia.org/wiki/Correlation_function_(statistical_mechanics)
    - term: correlation length
      meaning: The distance over which spins still influence each other; beyond it their agreement fades away exponentially.
      link: https://en.wikipedia.org/wiki/Correlation_length
    - term: classical Heisenberg model
      meaning: The model where each site has a unit arrow free to point anywhere on a sphere, aligning with its neighbours.
      link: https://en.wikipedia.org/wiki/Classical_Heisenberg_model
    - term: XY model
      meaning: The model where each arrow is restricted to a circle, so it is described by a single angle.
      link: https://en.wikipedia.org/wiki/Classical_XY_model
    - term: Mermin–Wagner theorem
      meaning: In one and two dimensions a continuous-symmetry magnet cannot stay ordered at any positive temperature.
      link: https://en.wikipedia.org/wiki/Mermin%E2%80%93Wagner_theorem
    - term: Kosterlitz–Thouless transition
      meaning: The XY-model change from fast exponential to slow power-law decay of correlations, driven by vortex pairs binding.
      link: https://en.wikipedia.org/wiki/Kosterlitz%E2%80%93Thouless_transition
    - term: asymptotic freedom
      meaning: A theory whose effective interaction gets weaker at short distances and stronger at long ones, as Polyakov argued for these models.
      link: https://en.wikipedia.org/wiki/Asymptotic_freedom
    - term: nonlinear sigma model
      meaning: The continuum field theory of unit vectors that describes the long-distance behaviour of these spin models.
      link: https://en.wikipedia.org/wiki/Nonlinear_sigma_model
    - term: preprint
      meaning: A paper made public before peer review; other experts have not yet checked it.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Classical Heisenberg model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Classical_Heisenberg_model
      why: Short definition of the model and its energy.
    - title: Mermin–Wagner theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Mermin%E2%80%93Wagner_theorem
      why: Why order is impossible in two dimensions, with the heuristic.
    - title: Kosterlitz–Thouless transition (Wikipedia)
      url: https://en.wikipedia.org/wiki/Kosterlitz%E2%80%93Thouless_transition
      why: The vortex-pair picture for the N=2 case.
    - title: "Peled and Spinka: Lectures on the spin and loop O(n) models"
      url: https://arxiv.org/abs/1708.00058
      why: Graduate-level survey of what is rigorously known; skim the introduction.
site:
  published: true
  aiReviewed: true
---

## The models

A classical spin $O(N)$ model puts a unit vector $\sigma_v\in S^{N-1}\subset\mathbb R^N$ at every site $v$ of a lattice, here $\mathbb Z^2$. The energy is $H(\sigma)=-\sum_{u\sim v}\sigma_u\cdot\sigma_v$ over neighbouring sites, and the Gibbs measure weights a configuration by $e^{-\beta H(\sigma)}$, where $\beta>0$ is the inverse temperature. The cases $N=1$, $N=2$ and $N=3$ are the Ising model, the XY model (spins are angles) and the classical Heisenberg model. The basic observable is the two-point function $\langle\sigma_u\cdot\sigma_v\rangle$ as $|u-v|\to\infty$: exponential decay means a finite correlation length (a "massive" phase), power-law decay means a "massless" one, and a non-zero limit means long-range order.

## Dimension two

For a continuous symmetry, the Mermin–Wagner theorem (Mermin and Wagner 1966, for the classical models Mermin 1967) rules out spontaneous magnetization at positive temperature in dimensions one and two. In dimensions three and up the $O(N)$ models do order at low temperature (Fröhlich–Simon–Spencer 1976, via infrared bounds and reflection positivity). The two-dimensional case is the borderline, and it splits by $N$.

For $N=2$ the Berezinskii–Kosterlitz–Thouless (BKT) picture predicts a transition between exponential decay at high temperature and power-law decay at low temperature, caused by the binding of vortex–antivortex pairs. The low-temperature power-law lower bound was proved by Fröhlich and Spencer (1981), with a streamlined account by Kharash and Peled (2017).

For $N\ge3$ there are no vortices of this kind. Polyakov (1975) argued from the renormalization group for the nonlinear sigma model that the coupling grows at large distances (asymptotic freedom), so correlations should decay exponentially at every temperature, with a correlation length that becomes huge at low temperature. Brézin and Zinn-Justin (1976) gave a renormalization-group analysis of the same model. This is a physics prediction; Patrascioiu and Seiler have argued from percolation considerations that a massless phase might exist, so the prediction was not universally accepted. Peled and Spinka's lecture notes survey the rigorous state of the subject.

## Loop soups and real $N$

A loop soup (a random collection of closed random-walk paths) on a graph, together with Lupu's isomorphism theorem (2016), links the local times of random loops to squares of a Gaussian free field with random signs. Applied to $N$ copies of the field with a constraint on the total local time at each vertex, it reproduces the spin $O(N)$ model for integer $N$ and suggests a model for real $N$.

## Why it matters

The two-dimensional $O(N)$ sigma model is the standard toy model of asymptotic freedom and a dynamically generated mass gap, the same two features expected of four-dimensional Yang–Mills theory. A rigorous proof for $N\ge3$ would not touch the four-dimensional problem, but it would give a mathematically controlled example of the mechanism.

## Recent preprints

In October 2026 OpenAI released a claimed proof of exponential decay for the free-boundary two-point function at all temperatures for $N\ge3$, and Garban and de Montgolfier posted a result on small perturbations of the Heisenberg model. On 3 November 2026 Ding, Huang and Yang posted a preprint claiming exponential decay for every real $N>2$ via the loop-soup construction. All of these are unrefereed; see the linked problem for their status.

# Plain explanation

Imagine a huge sheet of graph paper with a tiny compass needle at every crossing. Each needle likes to point the same way as its neighbours, but heat keeps shaking them. Physicists want to know: if you look at two needles far apart, do they still point roughly the same way?

On a flat sheet, there is a famous answer for needles that can only spin in a circle: at low heat they stay loosely in step over long distances, and above a certain heat they forget each other quickly. For needles that can point anywhere in space, like real magnets, a physicist named Polyakov argued in 1975 that they always forget each other quickly, at any heat, though at low heat the forgetting distance is enormous.

This matters because the same kind of reasoning is used for the forces that hold atomic nuclei together, and the sheet of needles is a small model where such ideas can be tested. The analogy is imperfect: a real magnet is three-dimensional, and this sheet is a flat toy.

# Student explanation

**The model.** Put a unit vector $\sigma_v$ at every point $v$ of a square grid. With $N=2$ the vector is an angle on a circle (the XY model); with $N=3$ it points anywhere on a sphere (the classical Heisenberg model). Neighbouring vectors lower the energy when they align: $H=-\sum_{u\sim v}\sigma_u\cdot\sigma_v$, where $\sigma_u\cdot\sigma_v$ is the dot product from first-year linear algebra. At temperature $T$, a configuration has probability proportional to $e^{-\beta H}$ with $\beta=1/T$ (up to units). This is a Gibbs measure: low-energy configurations are likelier, and the more heat, the more random.

**The question.** The two-point function $\langle\sigma_u\cdot\sigma_v\rangle$ is the average dot product of two spins far apart. There are three possible behaviours: it stays above some positive number (long-range order, the grid behaves like a permanent magnet), it decays like a power $|u-v|^{-a}$ (slowly, correlations on every scale), or it decays like $e^{-|u-v|/\xi}$ (fast; $\xi$ is the correlation length).

**Two dimensions is the borderline.** A slow twist of the spins costs energy roughly proportional to $\int|\nabla\theta|^2$, where $\theta$ is the local direction and $\nabla\theta$ (the gradient) says how fast it changes. In two dimensions the thermal wiggles of these slow twists add up to a quantity that grows without bound with the size of the grid, so the average direction cannot stay fixed: this is the Mermin–Wagner theorem (1966), and long-range order is impossible at any positive temperature. In three dimensions the wiggles stay bounded and magnets exist.

**N=2 versus N≥3.** For $N=2$ the angles can have vortices, points around which the angle winds once. At low temperature vortices come in tightly bound pairs and the correlations decay as a power (the Berezinskii–Kosterlitz–Thouless transition, proved by Fröhlich and Spencer in 1981); at high temperature free vortices destroy the correlations and the decay is exponential. For $N\ge3$ a vortex can always be unwound by tilting the spins out of the plane, so there is no such pairing. Polyakov's argument says that the effective interaction strength grows at large distances (asymptotic freedom), so correlations always decay exponentially. This was not rigorously proved for decades, and a few physicists contested it.

**A new tool.** A loop soup is a random collection of closed paths of random walks on the grid. Lupu's isomorphism theorem (2016) turns the time the loops spend at each site into a Gaussian random field with random signs. Using $N$ copies of this field reproduces the spin model, and it makes sense for non-integer $N$ too, which lets one study $N$ just above 2. In October and November 2026, two unrefereed manuscripts (one from OpenAI, one by Ding, Huang and Yang using the loop soup) claimed to prove the exponential decay for $N\ge3$ at all temperatures; neither has been accepted by the community yet.
