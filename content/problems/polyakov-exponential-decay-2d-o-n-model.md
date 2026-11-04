---
type: problem
slug: polyakov-exponential-decay-2d-o-n-model
title: Exponential decay of correlations in the 2D O(N) spin model (Polyakov's prediction)
entry: two-dimensional-o-n-spin-models
status: OPEN
origin: A. M. Polyakov, 1975 (prediction for the classical Heisenberg model and the O(N) sigma models, N≥3)
ratings:
  difficulty: 40
  applicationValue: 4
  leverage: 35
verification:
  route: REVIEW
sources:
  - title: "Ding, Huang, Yang: Exponential decay for the two-dimensional Heisenberg model (arXiv:2611.04908, preprint of 3 Nov 2026)"
    url: https://arxiv.org/abs/2611.04908
  - title: "OpenAI: openai/math family 215 (AI-generated, unrefereed; pinned at adc7f12)"
    url: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/lean/docs/215.md
  - title: "Garban, de Montgolfier: Small perturbations of the 2d classical Heisenberg model (arXiv:2610.16824)"
    url: https://arxiv.org/abs/2610.16824
  - title: Polyakov (1975), Physics Letters B 59, 79
    url: https://doi.org/10.1016/0370-2693(75)90161-6
  - title: "Peled, Spinka: Lectures on the spin and loop O(n) models (arXiv:1708.00058)"
    url: https://arxiv.org/abs/1708.00058
links:
  - to: yang-mills-mass-gap
    kind: RELATED
    note: The 2D O(N) sigma model is the standard toy model of asymptotic freedom and a dynamically generated mass gap, the two features expected of four-dimensional Yang–Mills theory; Polyakov's 1975 paper is titled with massive Yang–Mills fields.
timeline:
  - date: 1975-01-01
    title: Polyakov's prediction
    body: Predicts exponential decay of correlations at every temperature for the O(N) sigma models with N≥3 (year only).
    source: https://doi.org/10.1016/0370-2693(75)90161-6
  - date: 1981-01-01
    title: "Fröhlich–Spencer: the N=2 case has a BKT phase"
    body: Power-law decay at low temperature for the XY-type models shows that N=2 behaves differently from the predicted N≥3 picture (year only).
    source: https://doi.org/10.1007/BF01208273
  - date: 2026-10-06
    title: OpenAI releases a claimed proof for the free-boundary two-point function
    body: openai/math family 215 claims exponential decay of the 2D classical O(n) model for n≥3 at every temperature. AI-generated and unrefereed; the date is as reported by the Ding–Huang–Yang preprint.
    source: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/lean/docs/215.md
  - date: 2026-10-12
    title: "Garban and de Montgolfier: small perturbations of the Heisenberg model"
    body: A preprint reports power-law decay at large β for a slightly anisotropic Heisenberg-type Hamiltonian, showing how delicate exponential decay is.
    source: https://arxiv.org/abs/2610.16824
  - date: 2026-11-03
    title: Ding–Huang–Yang preprint claims exponential decay for all β, N≥3
    body: An unrefereed preprint claims exponential decay for the 2D spin O(N) model at every inverse temperature via a loop-soup model for real N>2.
    source: https://arxiv.org/abs/2611.04908
explainer:
  oneLine: Do tiny arrows on a flat grid always forget each other over distance, at any temperature? A 1975 prediction, now claimed by preprints.
  flow:
    - "Mermin–Wagner: no order in 2D"
    - "Polyakov 1975: decay at all temperatures (N≥3)"
    - "N=2 differs: BKT power-law phase"
    - Real-N loop soup model plus spin waves
    - Preprints claim exponential decay; unrefereed
  glossary:
    - term: correlation function
      meaning: How strongly a quantity at one place predicts the same quantity at another place; here the average dot product of two spins.
      link: https://en.wikipedia.org/wiki/Correlation_function_(statistical_mechanics)
    - term: exponential decay
      meaning: Shrinking by the same factor for every extra step of distance, so correlations vanish rapidly beyond the correlation length.
      link: https://en.wikipedia.org/wiki/Correlation_length
    - term: classical Heisenberg model
      meaning: The grid model whose arrows point anywhere on a sphere (N=3).
      link: https://en.wikipedia.org/wiki/Classical_Heisenberg_model
    - term: O(N) model
      meaning: The family of grid models with a unit vector in N dimensions at each site, aligning with its neighbours.
      link: https://en.wikipedia.org/wiki/N-vector_model
    - term: inverse temperature
      meaning: The number β = 1/T (up to units); large β means cold, where spins are mostly aligned.
      link: https://en.wikipedia.org/wiki/Gibbs_measure
    - term: renormalization group
      meaning: A method that studies how a system's effective rules change as one looks at it from further away.
      link: https://en.wikipedia.org/wiki/Asymptotic_freedom
    - term: asymptotic freedom
      meaning: Interactions that get weaker at short distances and stronger at long ones, as Polyakov argued for these models.
      link: https://en.wikipedia.org/wiki/Asymptotic_freedom
    - term: loop soup
      meaning: A random collection of closed random-walk paths; Lupu's isomorphism ties the time loops spend at each site to a Gaussian field.
      link: https://arxiv.org/abs/1402.0298
    - term: local time
      meaning: The total time a random walk or a collection of loops spends at a given site.
      link: https://en.wikipedia.org/wiki/Local_time_(mathematics)
    - term: Mermin–Wagner theorem
      meaning: In one and two dimensions a continuous-symmetry magnet cannot stay ordered at any positive temperature.
      link: https://en.wikipedia.org/wiki/Mermin%E2%80%93Wagner_theorem
    - term: preprint
      meaning: A paper made public before peer review; other experts have not yet checked it.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: two-dimensional O(N) spin models
      meaning: The DARC research page on these models and their history.
      link: /research/two-dimensional-o-n-spin-models
  readFirst:
    - title: Classical Heisenberg model (Wikipedia)
      url: https://en.wikipedia.org/wiki/Classical_Heisenberg_model
      why: The model in a few lines.
    - title: Mermin–Wagner theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Mermin%E2%80%93Wagner_theorem
      why: What is known without any decay rate.
    - title: "Ding, Huang, Yang: Exponential decay for the two-dimensional Heisenberg model"
      url: https://arxiv.org/abs/2611.04908
      why: The claimed result; the abstract and introduction are readable and survey the background.
    - title: "Peled and Spinka: Lectures on the spin and loop O(n) models"
      url: https://arxiv.org/abs/1708.00058
      why: Graduate-level survey of the rigorous state of the subject.
site:
  aiReviewed: true
---

Consider the spin $O(N)$ model on $\mathbb Z^2$ with $N\ge3$ (in particular the classical Heisenberg model, $N=3$), with Hamiltonian $H(\sigma)=-\sum_{u\sim v}\sigma_u\cdot\sigma_v$ and Gibbs weight $e^{-\beta H}$. Prove that for every inverse temperature $\beta>0$ there is $c=c(\beta,N)>0$ such that the spin correlation decays exponentially, $\langle\sigma_u\cdot\sigma_v\rangle\le c^{-1}e^{-c|u-v|}$, uniformly in the volume (free boundary; and ideally for the infinite-volume Gibbs measures and every boundary condition). This is Polyakov's 1975 prediction of a finite correlation length at all temperatures.

# State of the art

**Open as of today; two unrefereed claims.** Known: the Mermin–Wagner theorem (1966; Mermin 1967 for the classical formulation) excludes spontaneous magnetization at positive temperature in two dimensions. For $N=2$ the BKT transition is established: Fröhlich–Spencer (1981) proved power-law decay at low temperature, and van Engelenburg–Lis (arXiv:2110.09465) proved a sharp dichotomy: exponential decay below the transition and a power-law lower bound at and above it. In dimensions $d\ge3$ the $O(N)$ models have long-range order at low temperature (Fröhlich–Simon–Spencer 1976). For $N\ge3$ in two dimensions the exponential decay at all temperatures was a physics prediction (Polyakov 1975; Brézin–Zinn-Justin 1976) which Patrascioiu and Seiler contested with percolation arguments for a possible massless regime. Recent rigorous work on the Heisenberg model includes Aru–Garban–Sepúlveda (2025, percolation and the exit sets of vector-valued Gaussian free fields) and Garban–de Montgolfier (arXiv:2610.16824, 12 Oct 2026, preprint), who report that a small perturbation of the Hamiltonian (scaling the third component of the inner product by a factor λ in (-1,1)) gives power-law decay at large β, so the exponential decay is delicate. Claims: on 6 Oct 2026 OpenAI released a proof of exponential decay for the free-boundary two-point function of the 2D classical $O(n)$ model at every temperature for $n\ge3$ (openai/math family 215, with a Lean formalization whose scope file covers finite boxes with free boundary and excludes the infinite-volume limit; DARC has not rebuilt it; AI-generated and unrefereed; the Ding–Huang–Yang preprint dates the release and says the two approaches are very different). On 3 Nov 2026 Ding, Huang and Yang posted arXiv:2611.04908 (math.PR), claiming exponential decay for $N\ge3$ and every $\beta>0$, both for free boundary and for boundary conditions in which all boundary spins are equal, by defining a spin model for real $N>2$ through a loop soup on the metric graph conditioned on local time $\beta$ at each vertex (Lupu's isomorphism) and showing exponential decay of cluster connectivity in one copy. The authors remark that it is natural to expect the result for all boundary conditions but that this does not follow immediately; the preprint is unrefereed.

# Applications

Indirect and modest. No engineering application is foreseeable. A proof would put the mass-gap and asymptotic-freedom picture of the two-dimensional sigma model on rigorous footing, and the loop-soup construction for real $N$ is a new tool for continuous-spin systems; neither bears directly on four-dimensional gauge theory.

# Resolution criteria

A refereed proof (or an expert-reviewed formal proof) of exponential decay of the two-point function for the 2D spin $O(N)$ model, $N\ge3$, at every $\beta>0$, with the class of boundary conditions or infinite-volume measures covered stated explicitly. A preprint, or an AI-generated manuscript, does not change the status.

# Rating rationale

Difficulty 40: a 1975 prediction that has resisted rigorous proof for fifty years, but now two unrefereed manuscripts with very different methods claim it, so what remains is verification and the boundary-condition and infinite-volume questions; the diluted spin-glass problem next to it sits at 50 with one author's programme behind it, the Riemann Hypothesis at 96. Application value 4: indirect, a rigorous toy model of asymptotic freedom and a loop-soup technique for continuous spins. Leverage 35: settles a famous physics prediction and a mass-gap analogue in two dimensions, one subfield, and does not touch the four-dimensional Yang–Mills problem.

# Verification

Expert reading of the Ding–Huang–Yang preprint: the extension of the O(N) model to real N through the loop soup and Lupu's isomorphism (Section 2.2), the Gaussian bound on the number of macroscopic loops (Section 4), the extended spin-wave argument with the multiplicity of the map (Section 5, Theorem 5.2 and Proposition 5.27), and the passage from connectivity in one copy to Theorem 1.1. Compare with the OpenAI family 215 manuscript and its Lean statement, check the boundary conditions each covers (free versus constant boundary, infinite volume), and wait for refereeing.

# Plain explanation

Think of a flat sheet of graph paper with a tiny compass needle at each crossing, each needle trying to point like its neighbours while heat shakes it. Is it true that two needles far apart eventually become unrelated, however cold the sheet is? For needles that can point in any direction in space, the physicist Alexander Polyakov argued in 1975 that the answer is yes: the memory fades fast, and the distance it lasts is just very large when it is cold. For needles confined to a circle the answer is different: when it is cold they stay loosely in step.

Nobody had a mathematical proof for the space-pointing case. In October and November 2026, two manuscripts appeared that claim one: one released by OpenAI and one by three mathematicians, Jian Ding, Fenglin Huang and Peng Yang. Neither has been checked by outside experts, so the question counts as open on this site.

The problem is hard because the needles' forgetting is a delicate balance. Tiny changes to the rules, studied in October 2026, can switch the answer to the slow-fading kind. The grid is flat and the needles are a toy; the result would not directly say anything about real magnets or about the forces inside atoms.

# Student explanation

**The statement.** Take the two-dimensional grid with a unit vector $\sigma_v\in\mathbb R^N$ at each site, energy $H=-\sum_{u\sim v}\sigma_u\cdot\sigma_v$, and probability weights $e^{-\beta H}$. For $N=3$ this is the classical Heisenberg model. Polyakov's prediction is that for every $\beta>0$ there is $c>0$ with $|\langle\sigma_u\cdot\sigma_v\rangle|\le c^{-1}e^{-c|u-v|}$, a finite correlation length at every temperature. This is a statement about the model on the grid, not about real three-dimensional magnets.

**What was known.** The Mermin–Wagner theorem (1966) gives only that the average spin is zero; it does not say how fast correlations decay. For $N=2$ the answer is a phase transition: power-law decay at low temperature, exponential at high temperature. Why the prediction should hold for $N\ge3$ is a renormalization-group argument: look at the model from further and further away and the effective interaction strengthens until the spins are disordered. A rigorous proof needs ways to control the entire low-temperature regime, where the spins are almost aligned and fluctuate like slowly varying waves.

**Why it is hard.** Rewrite the model for $N=3$ as an $XY$ model for the first two components with random couplings $K_{uv}=r_ur_v$, where $r$ measures how far a spin is from the third axis. The couplings are large where spins are nearly horizontal and small where they are nearly vertical. The question becomes whether the "weak" regions are structured enough to destroy the long-range power-law behaviour of the XY model, and in October 2026 a preprint by Garban and de Montgolfier reported that a small change to the model can restore power-law behaviour.

**The claimed route.** Ding, Huang and Yang define an $O(N)$-type model for any real $N>2$. A loop soup of intensity $N/2$ (random closed random-walk loops) with fixed total time at each site is split among $\lceil N\rceil$ copies; Lupu's isomorphism theorem, which links such loops to a Gaussian random field with random signs, recovers the spin model when $N$ is a whole number. They claim exponential decay of the probability that a cluster of loops in one copy connects two far-apart points, using (a) a Gaussian bound on the number of large loops and (b) an extended spin-wave argument of the Mermin–Wagner type. OpenAI's separate claim, which the authors say uses a different construction of spin waves on the sphere, covers the free-boundary two-point function.

**Status.** Both manuscripts are unrefereed, so the problem stays open here until experts accept a proof; open points include exactly which boundary conditions and infinite-volume states are covered.
