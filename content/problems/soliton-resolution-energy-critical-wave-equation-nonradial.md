---
type: problem
slug: soliton-resolution-energy-critical-wave-equation-nonradial
title: "Soliton resolution for the focusing energy-critical wave equation without radial symmetry: which all-time statement is true?"
entry: nonlinear-wave-equations-soliton-resolution
status: PARTIAL
origin: Duyckaerts, Kenig and Merle, 2012–2016 (the nonradial, fixed-profile formulation is cited by Chen–Holmer–Shen as Conjecture 5.5 of arXiv:1510.01750)
ratings:
  difficulty: 72
  applicationValue: 3
  leverage: 38
workMix:
  theory: 88
  engineering: 2
  compute: 10
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Chen, Holmer, Shen: A counterexample to fixed-profile soliton resolution for the three-dimensional quintic wave equation (arXiv:2611.17291, preprint)"
    url: https://arxiv.org/abs/2611.17291
  - title: "Chen, Holmer, Shen: Radiation and persistent shape dynamics for the five-dimensional energy-critical nonlinear wave equation (arXiv:2611.17243, preprint)"
    url: https://arxiv.org/abs/2611.17243
  - title: "Duyckaerts, Kenig, Merle: Classification of radial solutions of the focusing, energy-critical wave equation (arXiv:1204.0031)"
    url: https://arxiv.org/abs/1204.0031
  - title: "Duyckaerts, Jia, Kenig, Merle: Soliton resolution along a sequence of times for the focusing energy critical wave equation (arXiv:1601.01871)"
    url: https://arxiv.org/abs/1601.01871
  - title: "Duyckaerts, Kenig, Merle: Soliton resolution for the radial critical wave equation in all odd space dimensions (arXiv:1912.07664)"
    url: https://arxiv.org/abs/1912.07664
  - title: "Jendrej, Lawrie: Soliton resolution for the energy-critical nonlinear wave equation in the radial case (arXiv:2203.09614)"
    url: https://arxiv.org/abs/2203.09614
  - title: "Duyckaerts, Kenig, Merle: Concentration-compactness and universal profiles for the non-radial energy critical wave equation (arXiv:1510.01750)"
    url: https://arxiv.org/abs/1510.01750
links:
  - to: local-smoothing-conjecture
    kind: RELATED
    note: Both live in the wave-equation analysis of $\mathbb{R}^{1+n}$; Strichartz and local-smoothing type spacetime estimates are the linear tools behind the nonlinear well-posedness and scattering theory that soliton resolution builds on.
  - to: navier-stokes-unforced-regularity
    kind: RELATED
    note: Both ask for a classification of how a bounded-energy solution of a critical nonlinear evolution behaves, and concentration-compactness arguments of the kind developed for critical wave equations are also used in critical Navier–Stokes regularity.
timeline:
  - date: 2012-03-30
    title: Radial 3D classification (DKM)
    body: Duyckaerts, Kenig and Merle classify radial globally defined solutions of the 3D focusing energy-critical wave equation (Camb. J. Math. 2013).
    source: https://arxiv.org/abs/1204.0031
  - date: 2016-01-08
    title: Nonradial resolution along a sequence of times
    body: Duyckaerts, Jia, Kenig and Merle prove resolution along a sequence of times in dimensions 3, 4, 5, with profiles allowed to depend on the sequence (GAFA 2017).
    source: https://arxiv.org/abs/1601.01871
  - date: 2019-12-16
    title: Radial resolution in all odd dimensions
    body: Duyckaerts, Kenig and Merle extend the radial full-time theorem to all odd dimensions (Acta Math. 2023).
    source: https://arxiv.org/abs/1912.07664
  - date: 2022-03-17
    title: Radial resolution in every dimension at least four
    body: Jendrej and Lawrie prove the radial full-time theorem for all $N\ge4$ (Ann. PDE 2023).
    source: https://arxiv.org/abs/2203.09614
  - date: 2026-11-12
    title: Two preprints claim the fixed-profile form fails in dimensions 3 and 5
    body: Chen, Holmer and Shen post arXiv:2611.17291 (3D) and arXiv:2611.17243 (5D, nonradial), each constructing a bounded forward-global solution whose stationary core keeps changing shape. Unrefereed; the 3D paper says its construction agrees with the sequential theorem.
    source: https://arxiv.org/abs/2611.17291
explainer:
  oneLine: Does every bounded nonradial wave settle into lasting lumps plus ripples? The version with a fixed list of lumps is now claimed to fail.
  flow:
    - Fixed lump list claimed to suffice
    - Stationary lumps form a conformal family
    - Weaker, rarer waves push lump sideways
    - Two limits in different shape classes
    - "No fixed list fits: claimed, unrefereed"
  glossary:
    - term: soliton resolution
      meaning: The expectation that a bounded solution of a nonlinear wave equation eventually splits into separating solitary waves and free radiation.
      link: https://en.wikipedia.org/wiki/Soliton
    - term: stationary solution
      meaning: A solution that does not change in time, so the wave equation reduces to the elliptic equation $-\Delta Q=Q^5$.
      link: https://en.wikipedia.org/wiki/Wave_equation
    - term: free wave
      meaning: A solution of the ordinary linear wave equation $u_{tt}=\Delta u$ that just spreads out and carries energy away.
      link: https://en.wikipedia.org/wiki/Wave_equation
    - term: Lorentz boost
      meaning: The transformation that turns a still object into one moving at constant speed below the speed of light.
      link: https://en.wikipedia.org/wiki/Lorentz_transformation
    - term: conformal transformation
      meaning: An angle-preserving change of space; it maps stationary solutions to stationary solutions but is not a symmetry of the wave evolution.
      link: https://en.wikipedia.org/wiki/Conformal_group
    - term: radial symmetry
      meaning: Looking the same in all directions around a centre, so the solution depends only on distance $|x|$.
      link: https://en.wikipedia.org/wiki/Spherical_symmetry
    - term: energy space
      meaning: The space of pairs $(u,u_t)$ with finite energy norm; see the entry on Sobolev spaces.
      link: /research/sobolev-spaces-energy-methods
    - term: kernel of the linearization
      meaning: The set of directions in which a stationary solution can be nudged at no first-order cost; here it consists of the conformal symmetry directions.
      link: https://en.wikipedia.org/wiki/Kernel_(linear_algebra)
    - term: interval arithmetic
      meaning: A way to compute with ranges instead of single numbers so rounding errors are tracked and results can serve as proofs.
      link: https://en.wikipedia.org/wiki/Interval_arithmetic
    - term: computer-assisted proof
      meaning: A proof in which part of the argument is a computation, checked by running specified software.
      link: https://en.wikipedia.org/wiki/Computer-assisted_proof
    - term: Hopf fibration
      meaning: A way to slice the 3-sphere into circles, one over each point of an ordinary sphere; used to build the stationary solution in 3D.
      link: https://en.wikipedia.org/wiki/Hopf_fibration
    - term: preprint
      meaning: A paper shared publicly before peer review; its claims have not yet been checked by independent referees.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: "Chen, Holmer, Shen: A counterexample to fixed-profile soliton resolution for the three-dimensional quintic wave equation (arXiv:2611.17291)"
      url: https://arxiv.org/abs/2611.17291
      why: Section 1.1 states precisely which assertion is excluded and what is left untouched; unrefereed.
    - title: "Chen, Holmer, Shen: Radiation and persistent shape dynamics for the five-dimensional energy-critical nonlinear wave equation (arXiv:2611.17243)"
      url: https://arxiv.org/abs/2611.17243
      why: The 5D companion, which also claims a continuum of limit shapes; its title does not mention the counterexample. Unrefereed.
    - title: "Duyckaerts, Kenig, Merle: Classification of radial solutions of the focusing, energy-critical wave equation (arXiv:1204.0031)"
      url: https://arxiv.org/abs/1204.0031
      why: The refereed starting point for the radial 3D theory; graduate level.
    - title: "Duyckaerts, Jia, Kenig, Merle: Soliton resolution along a sequence of times for the focusing energy critical wave equation (arXiv:1601.01871)"
      url: https://arxiv.org/abs/1601.01871
      why: The refereed nonradial theorem, including the statement of what is proved along a sequence.
    - title: "Wikipedia: Soliton"
      url: https://en.wikipedia.org/wiki/Soliton
      why: Everyday examples of waves that keep their shape.
raw:
  student: "**Setting.** We look at $u_{tt}-\\Delta u=u^5$ in 3D (and the analogous equation in 4D and 5D) for solutions whose energy norm $\\|\\vec u(t)\\|=\\big(\\int|\\nabla u|^2+u_t^2\\,dx\\big)^{1/2}$ stays bounded for all $t\\ge0$, but which do not simply spread out like a free wave. A **stationary profile** is a time-independent solution $Q$ of $-\\Delta Q=Q^5$. Moving it at velocity $\\ell$ (with $|\\ell|<1$, a Lorentz boost) gives a travelling solution. Soliton resolution says that for large $t$,\n$$\\vec u(t)\\approx\\vec v_L(t)+\\sum_{j=1}^{J}(\\text{boosted, shifted, rescaled, rotated }Q_j),$$\nwhere $v_L$ is a free wave and the $Q_j$ move far apart relative to their sizes. The sum has finitely many terms.\n\n**Three formulations.** (1) *Full-time and radial:* if $u$ is round-symmetric, this is a theorem, with $Q_j=\\pm W$ the ground state. (2) *Sequential:* without symmetry, for each solution there is **some** sequence of times $t_n\\to\\infty$ along which the decomposition holds; the number of profiles and the profiles may depend on the sequence (Duyckaerts–Jia–Kenig–Merle). (3) *Fixed-profile:* the list $J$, $Q_j$, $\\ell_j$ and the free wave is chosen first, and then it must work for **any** sequence $t_n\\to\\infty$, with only the shifts, scales and rotations changing with the sequence. This is how Chen, Holmer and Shen read the conjecture of Duyckaerts, Kenig and Merle.\n\n**What the new preprints claim.** Stationary solutions come in a family: besides shifting and rescaling, conformal transformations (angle-preserving maps of space) move one stationary solution into another that need not be a shifted, rescaled or rotated copy of it. The authors pick a sign-changing stationary solution $Q$ and send in a sequence of incoming wave packets whose energy is summable (so it stays small overall). Each packet gives the lump a small push in a chosen direction inside the conformal family; the packets get weaker but are separated by longer and longer times, so each pair of pushes moves the lump by the same fixed amount $\\approx d$. The lump then shuttles between $Q$ and a different shape $q_{de}$ forever. At two sequences of times the solution has two different stationary limits, and a short argument with the energy norm shows no fixed list can describe both. The 3D paper does this in 3D with odd symmetry (so not radial); the 5D paper claims even a continuum of limit shapes.\n\n**What is not claimed.** The 3D paper says its construction agrees with the sequential theorem: along each of the two time sequences a single stationary limit exists. Its solution has an odd symmetry, so it is not round-symmetric and the radial theorems do not apply to it. They do not claim the correct nonradial statement; that remains open.\n\n**Computer assistance.** The construction needs the exact list of directions in which the chosen stationary solution can be nudged without cost (the kernel of its linearization). The authors prove this with a computer-assisted certificate using interval arithmetic, which tracks rounding errors rigorously. Both papers also disclose that an AI system assisted in developing the proofs. All of this is unrefereed."
site:
  aiReviewed: true
---

Consider $u_{tt}-\Delta u=|u|^{4/(N-2)}u$ on $\mathbb{R}^{1+N}$ with $N\in\{3,4,5\}$, and write $H=\dot H^1\times L^2$ for the energy space. Let $u$ be a forward-global solution with $\sup_{t\ge0}\|\vec u(t)\|_H<\infty$. Soliton resolution asks for a description of $\vec u(t)$ as $t\to\infty$ as a free wave plus finitely many travelling stationary solutions $Q_j$ (Lorentz-boosted with velocities $\ell_j$, $|\ell_j|<1$, and moved by translations, dilations and rotations $a_{j,n},\lambda_{j,n},O_{j,n}$) separating from one another, up to an error tending to $0$ in $H$.

The quantifier order matters. In the **fixed-profile form**, as stated by Chen–Holmer–Shen following Duyckaerts–Kenig–Merle, the number $J$, the profiles $Q_j$, the velocities $\ell_j$ and the free wave $v_L$ are chosen before an arbitrary time sequence $t_n\to\infty$, and only the spatial parameters may depend on the sequence. In the **sequential form** the profiles may depend on the sequence. A **full-time** (continuous-time) statement holds for all large $t$ rather than along sequences.

**Problem.** Determine, for nonradial bounded solutions, which all-time statement is true: prove a resolution theorem in a correct form (for example one that lets the profiles move inside a family of stationary solutions), or settle which forms fail. The fixed-profile form is the one claimed to fail in dimensions 3 and 5 by two unrefereed preprints of November 2026; whether a full-time statement holds in some other precise form, and in which dimensions, is not settled in anything we found refereed.

# State of the art

**Refereed.** For radial data, full-time resolution into ground states plus radiation holds: Duyckaerts–Kenig–Merle in dimension 3 (Camb. J. Math. 2013, arXiv:1204.0031) and in all odd dimensions (Acta Math. 2023, arXiv:1912.07664), and Jendrej–Lawrie in every dimension $N\ge4$ (Ann. PDE 2023, arXiv:2203.09614). For nonradial data, Duyckaerts–Jia–Kenig–Merle (GAFA 2017, arXiv:1601.01871) prove resolution along a sequence of times in dimensions 3, 4 and 5, with the profiles allowed to depend on the sequence. Chen–Holmer–Shen's 3D preprint also cites a refereed result of Collot–Duyckaerts–Kenig–Merle (Discrete Contin. Dyn. Syst. 2026) for compactly supported nonradial data in dimensions 3 to 5 whose sequential profiles are ground-state travelling waves with distinct velocities: a resolution/collision dichotomy, and full-time resolution when there are at most two such profiles. DARC has not opened that paper.

**Unrefereed claims (November 2026).** Chen, Holmer and Shen report in arXiv:2611.17291 (3D, 57 pages) and arXiv:2611.17243 (5D, 60 pages) a forward-global bounded solution, starting arbitrarily close to a sign-changing stationary state, that is asymptotic to a time-varying stationary profile plus one free wave. In 3D the core has two limits in different similarity classes, which they say excludes every fixed finite list of profiles and Lorentz velocities along the time sequence $T_n=4^n d^{-5}$. In 5D the limit set of the core is said to contain a continuum of similarity classes, which excludes even a resolution with a bounded number of active profiles chosen with time dependence from a fixed finite family. The 3D solution has an odd symmetry, so it is not radial. The 3D preprint says each of its two subsequences has a stationary limit, in agreement with the refereed sequential theorem, and the 5D preprint distinguishes its fixed-family conclusion from that theorem; the 3D solution is not radial, so the radial theorems do not apply to it. Each paper has a computer-assisted spectral certificate for its stationary state, and each carries an AI-use disclosure (see the claim). If correct, the fixed-profile formulation is false in dimensions 3 and 5, and the remaining question is the correct all-time statement; the preprints leave that open.

# Applications

None practical. The result is a classification of long-time behaviour for a model nonlinear wave equation. Its value is conceptual: it fixes what a soliton-resolution theorem can look like for critical equations, and its methods (profile decomposition, modulation, rigorous spectral bounds) are reused for wave maps and other critical equations.

# Resolution criteria

A refereed proof or a community-accepted verification of one of: (a) a full-time soliton-resolution theorem for nonradial bounded solutions in a precisely stated form that is consistent with the counterexamples, in at least one dimension $N\ge3$; or (b) a refereed confirmation of the November 2026 counterexamples together with an accepted statement of what replaces the fixed-profile form. A radial result, a sequential-time result, or an unrefereed preprint does not count.

# Rating rationale

Difficulty 72: the radial case took a decade (2012 to 2022) and the nonradial all-time problem has no accepted formulation or method yet, so it is a major open problem needing new ideas, level with the restriction conjecture in R^3 (72) and just above the Erdős similarity problem (70), but well below the Clay problems since modulation theory and profile analysis give a visible path. Application value 3: no foreseeable practical use. Leverage 38: it reshapes the subfield of critical dispersive equations (what a soliton-resolution statement should be) and a few results in wave maps and related models hinge on the answer, but little outside it does.

# Work mix rationale

The open work is mostly new analysis: formulating and proving a correct all-time statement beyond sequences of times. The compute share is rigorous computer-assisted spectral bounds on stationary states; there is no experiment.

# Verification

Specialists in nonlinear dispersive PDE referee the two November 2026 preprints and decide which forms of soliton resolution survive. A reviewer checks: (1) that the quantifier structure of the fixed-profile assertion in the preprints matches the Duyckaerts–Kenig–Merle conjecture it claims to contradict, and does not contradict the radial theorems or the sequential theorem of Duyckaerts–Jia–Kenig–Merle; (2) the uniform-in-time estimates of the construction (projected Green estimate, control of the nonlinear error over all time intervals, the fixed-point selection of endpoints); (3) the computer-assisted spectral certificates, which the 3D preprint says can be rerun with its supplied verifier (python3 run_fresh.py) and which should be reproduced independently; and (4) because both papers disclose AI assistance in the proofs, that a human expert checks every estimate. A correct all-time statement for nonradial data would be a separate theorem.

# Plain explanation

Picture a self-attracting wave that never quite blows up. Mathematicians expect that after a long time it looks like two things: a few lumps that keep their shape and slowly drift apart, and ordinary ripples spreading outward. This expectation is called soliton resolution.

For waves with perfect round symmetry, this has been proved, over about ten years by several research teams. Without that symmetry, we only know it for a specially chosen list of moments in time, and there the lump shapes are allowed to depend on which moments you pick.

A stricter version says you first fix the list of lump shapes and then look at any moments you like. In November 2026, three mathematicians posted two papers claiming that this stricter version is false, with an example in three dimensions and another in five. In their example the main lump never settles: it keeps changing between shapes that are not just copies of each other, pushed along by ripples that get weaker and weaker.

Nobody has yet checked these papers, so the stricter version is not officially disproved. And even if they are right, nobody knows what the correct statement for waves without round symmetry should be. That is the open problem: find the right statement and prove it.
