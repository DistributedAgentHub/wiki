---
type: problem
slug: euler-blowup-axisymmetric-no-swirl-threshold
title: Is C^{1,1/3} the sharp regularity threshold for finite-time blow-up of unforced axisymmetric Euler flow without swirl?
entry: euler-equations-singularity-formation
status: OPEN
origin: Follows from the Beale–Kato–Majda continuation criterion (1984) and the axisymmetric theory of Ukhovskii–Yudovich (1968) and Danchin (2007); blow-up for small exponents by Elgindi (2021). The sharp-range blow-up results are 2026 preprints.
ratings:
  difficulty: 34
  applicationValue: 6
  leverage: 28
verification:
  route: REVIEW
sources:
  - title: "Bang, Cheskidov: Sharp Finite-Time Blow-Up for Unforced Axisymmetric Euler Without Swirl via Multiscale Data (arXiv:2611.18151, preprint)"
    url: https://arxiv.org/abs/2611.18151
  - title: "Shkoller: Incompressible Euler Blowup at the C^{1,1/3} Threshold (arXiv:2603.10945, preprint)"
    url: https://arxiv.org/abs/2603.10945
  - title: "Chen: Asymptotically Self-Similar Blowup for 3D Incompressible Euler with C^{1,1/3-} Velocity I (arXiv:2605.15149, preprint)"
    url: https://arxiv.org/abs/2605.15149
  - title: "Shao, Wei, Zhang, Zhang: Self-similar blow-up solutions of d-dimensional incompressible Euler equations with C^{1,(1-2/d)-} velocity (arXiv:2605.19716, preprint)"
    url: https://arxiv.org/abs/2605.19716
  - title: "Danchin: Axisymmetric incompressible flows with bounded vorticity (Russian Math. Surveys 62 (2007))"
    url: https://www.mathnet.ru/eng/rm6761
  - title: "Elgindi: Finite-time singularity formation for C^{1,α} solutions to the incompressible Euler equations on R^3 (Annals of Mathematics 194 (2021))"
    url: https://annals.math.princeton.edu/2021/194-3/p02
  - title: "OpenAI: Finite time blowup for the Euler equation (preprint, September 2026)"
    url: https://cdn.openai.com/pdf/315b36cd-ec98-4023-8342-93345194ece1/euler.pdf
links:
  - to: navier-stokes-unforced-regularity
    kind: RELATED
    note: Euler is the zero-viscosity limit of unforced Navier–Stokes; this problem concerns rough axisymmetric Euler data and says nothing about smooth-data regularity, either inviscid or viscous.
timeline:
  - date: 2021-11-02
    title: Blow-up for small Hölder exponents
    body: Elgindi proves finite-time singularity for axisymmetric C^{1,α} velocity on R^3 for sufficiently small α>0 (Annals of Mathematics; online publication date).
    source: https://annals.math.princeton.edu/2021/194-3/p02
  - date: 2026-03-11
    title: "Shkoller: Type I blow-up for every α<1/3 (preprint)"
    body: A preprint reports finite-time Type I blow-up for finite-energy axisymmetric no-swirl C^{1,α} data, every 0<α<1/3 (arXiv v1 date).
    source: https://arxiv.org/abs/2603.10945
  - date: 2026-05-19
    title: Self-similar blow-up below the threshold in all dimensions d≥3 (preprint)
    body: Shao, Wei, Zhang and Zhang report self-similar blow-up for every exponent below 1−2/d and, via finite-codimensional stability added in v2 (22 July 2026), finite-energy solutions with compactly supported vorticity (date is arXiv v1).
    source: https://arxiv.org/abs/2605.19716
  - date: 2026-11-13
    title: One datum for all α<1/3 (preprint)
    body: Bang and Cheskidov report a single datum, with compactly supported vorticity, in every C^{1,α} for α<1/3 whose unforced solution blows up in finite time, by a forward multiscale cascade. Unrefereed.
    source: https://arxiv.org/abs/2611.18151
explainer:
  oneLine: For rough axisymmetric flows without swirl, is 1/3 the exact roughness below which an ideal fluid can break down in finite time?
  flow:
    - Axisymmetric flow, no swirl
    - "Smooth enough (α≥1/3): global"
    - "Rougher (α<1/3): blow-up reported"
    - One datum with a cascade of rings
    - Unrefereed; smooth case still open
  glossary:
    - term: Euler equations
      meaning: "The equations for a fluid with no friction: how its velocity and pressure change in time while the fluid cannot be compressed."
      link: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
    - term: vorticity
      meaning: A measure of how fast the fluid is spinning at each point, found from how the velocity varies from place to place.
      link: https://en.wikipedia.org/wiki/Vorticity
    - term: singularity
      meaning: A point where a quantity becomes infinite or stops behaving smoothly, here a solution whose velocity gradient grows without bound.
      link: https://en.wikipedia.org/wiki/Mathematical_singularity
    - term: Hölder continuity
      meaning: "A way to measure roughness: a function is C^α if its changes over a distance d are at most a constant times d to the power α."
      link: https://en.wikipedia.org/wiki/H%C3%B6lder_condition
    - term: axisymmetric flow without swirl
      meaning: A flow that looks the same when rotated around an axis and has no motion around the axis, so every particle moves in a plane through it.
      link: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
    - term: vortex ring
      meaning: A doughnut-shaped region of spinning fluid, like a smoke ring.
      link: https://en.wikipedia.org/wiki/Vortex_ring
    - term: compact support
      meaning: Zero outside some bounded region, so the vorticity lives in a finite region of space.
      link: https://en.wikipedia.org/wiki/Support_(mathematics)
    - term: Navier–Stokes equations
      meaning: The fluid equations with viscosity (internal friction), the real-fluid counterpart of the Euler equations.
      link: /research/navier-stokes-equations
    - term: Lorentz space
      meaning: A refinement of the usual size classes for functions, finer than L^p, used to state sharp conditions on how a quantity decays or concentrates.
      link: https://en.wikipedia.org/wiki/Lorentz_space
  readFirst:
    - title: Euler equations (fluid dynamics) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)
      why: The equations and why singularities are a live question.
    - title: Vortex ring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Vortex_ring
      why: What the rings in the construction look like in real fluids.
    - title: Hölder condition (Wikipedia)
      url: https://en.wikipedia.org/wiki/H%C3%B6lder_condition
      why: The roughness scale that the one-third threshold is measured on.
    - title: Bang and Cheskidov, arXiv:2611.18151 (preprint)
      url: https://arxiv.org/abs/2611.18151
      why: The abstract and introduction explain the threshold, the earlier results and the cascade.
raw:
  body: "Consider the unforced incompressible Euler equations on $\\mathbb{R}^3$, and the class $\\mathcal{A}_\\alpha$ of divergence-free axisymmetric velocity fields without swirl, $u_0\\in L^2(\\mathbb{R}^3)\\cap C^{1,\\alpha}(\\mathbb{R}^3)$, whose vorticity $\\omega_0=\\nabla\\times u_0$ has compact support.\n\n**Question.** Is the threshold $\\alpha=1/3$ sharp? That is: (i) for every $\\alpha\\ge 1/3$ the classical solution from every datum in $\\mathcal{A}_\\alpha$ is global, and (ii) for every $0<\\alpha<1/3$ some datum in $\\mathcal{A}_\\alpha$ has a classical solution with $\\int_0^T\\|\\omega(t)\\|_{L^\\infty}\\,dt=\\infty$ for some finite $T$ (finite-time blow-up, by the Beale–Kato–Majda criterion).\n\nPart (i) is, according to the Bang–Cheskidov preprint, known: Danchin (2007) for $1/3<\\alpha<1$ and Shao–Wei–Zhang for the endpoint $\\alpha=1/3$. Part (ii) is the content of 2026 preprints by Chen, Shao–Wei–Zhang–Zhang and Bang–Cheskidov; Shkoller's 2026 preprint reports blow-up for every $\\alpha<1/3$ from finite-energy data whose vorticity is not compactly supported (per the Bang–Cheskidov comparison table). The open parts are: (a) *verification* of part (ii) by refereeing or independent re-derivation; (b) *quantitative and structural questions*: stability of the blow-up under perturbation of the data, the blow-up rate (Shkoller, Chen and Shao–Wei–Zhang–Zhang obtain Type I, $\\|\\omega\\|_{L^\\infty}\\sim(T-t)^{-1}$; the Bang–Cheskidov construction prescribes no rate), and whether the same threshold governs data without compact vorticity support.\n\n**This is not the smooth-data Euler problem.** The blow-up data in these preprints are not smooth: they have a cusp on the symmetry axis or are smooth only away from the origin. Whether *smooth* finite-energy data on $\\mathbb{R}^3$ can blow up, in particular in the axisymmetric class with swirl, is a different and still open question, which the Bang–Cheskidov preprint names as the outstanding goal."
site:
  aiReviewed: true
---

# State of the art

**Global regularity side.** For smooth decaying axisymmetric flow without swirl, global existence goes back to Ukhovskii–Yudovich (1968), with refinements by Saint-Raymond and by Shirota–Yanagisawa (1994), per the preprint. Danchin (2007) extended it to bounded vorticity with suitable decay and relative vorticity $\omega_\theta/r$ in $L^{3,1}$; for finite-energy data with compactly supported vorticity this gives global classical solutions for $u_0\in C^{1,\alpha}$, $1/3<\alpha<1$. The preprint states that the endpoint $C^{1/3}$ vorticity class is covered under the same assumptions by Shao, Wei and Zhang (Acta Mathematica Sinica, English Series 42 (2026)). DARC could not open that paper or Danchin's text beyond the abstract, so these statements are reported from the Bang–Cheskidov introduction.

**Blow-up side.** Elgindi (Annals of Mathematics, 2021) proved finite-time singularities for axisymmetric no-swirl $C^{1,\alpha}$ velocity for sufficiently small $\alpha>0$; Elgindi–Ghoul–Masmoudi gave stability and finite-energy versions. Córdoba, Martínez-Zoroa and Zheng (Annals of PDE, 2025) introduced a multiscale construction of blow-up with infinitely many interacting vorticity regions, again for a small positive exponent. In 2026 four preprints reach the full range below $1/3$: Shkoller (arXiv v1 11 March 2026, a Lagrangian argument for finite-energy $C^{1,\alpha}$ data, with vorticity that is not compactly supported according to the Bang–Cheskidov comparison table), Chen (arXiv v1 14 May 2026 for Part I, asymptotically self-similar solutions built from profiles anchored to a numerically computed approximate profile), Shao–Wei–Zhang–Zhang (arXiv v1 19 May 2026, self-similar solutions in every dimension $d\ge3$ with threshold $1-2/d$) and Bang–Cheskidov (arXiv v1 13 November 2026, 57 pages). The last differs in giving one compactly-supported-vorticity datum in every $C^{1,\alpha}$, $\alpha<1/3$ simultaneously, by a forward multiscale cascade of vortex-ring pairs, and in controlling large self-deformation near the threshold by a lower bound for strain from angular redistribution. OpenAI's September 2026 preprint, which Bang and Cheskidov cite, reports smooth-data unforced blow-up in a non-axisymmetric construction and also lists Chen and Shkoller for every $\alpha<1/3$.

**Not known.** Whether the 2026 preprints are correct (none is recorded as refereed; DARC read the abstracts and, for Bang–Cheskidov, the abstract and introduction only), the stability of these blow-ups, the dependence on the support and decay assumptions, and smooth-data axisymmetric blow-up with swirl.

# Applications

Mostly conceptual. A sharp threshold clarifies which vortex-stretching mechanisms are possible in an ideal fluid and supplies test cases for numerical schemes that must resolve singular vorticity growth. There is no direct engineering use, since real fluids have viscosity and the data in question are not smooth.

# Resolution criteria

For part (a): refereed publication of, or an independent re-derivation of the key estimates for, at least one blow-up construction for each $\alpha<1/3$ together with acceptance of the global-regularity statements at $\alpha\ge1/3$ under the stated hypotheses; a formal proof would count as strong evidence. If an error is found in the preprints, the problem reverts to the state of the 2021 literature. For part (b): a stated stability theorem, a blow-up rate for the multiscale solution, or a matching global-regularity result in a larger class.

# Rating rationale

Difficulty 34: four independent 2026 preprints report blow-up in the sharp range and the regularity side is published, so the remaining work is mainly verification of long unrefereed arguments plus stability and rate questions; it sits far below smooth-data Euler blow-up. Application value 6: conceptual, no foreseeable use beyond benchmarks for singular flow. Leverage 28: sharpens the regularity picture for one class and tools (multiscale cascades) that feed attempts at smooth-data blow-up, but does not resolve Euler or Navier–Stokes regularity.

# Verification

Route: expert review of the 57-page preprint (arXiv:2611.18151). A reviewer should (1) check that the datum of Theorem 1.2 (rings $q_{j,0}$ with the stated scales $R_{j,0}$, $H_{j,0}$, amplitudes and exponents $\alpha_j\uparrow1/3$) is divergence-free, axisymmetric without swirl, in $L^2$ and in $C^{1,\alpha}$ for every $\alpha<1/3$ with compactly supported vorticity; (2) restate and check the large strain estimate obtained from angular redistribution (Sections 3 to 5) and the support and interaction bounds (Sections 6 and 7), including that no smallness of self-deformation is assumed; (3) follow the induction over scales (Section 8) to the conclusion that $\int_0^T\|\omega\|_{L^\infty}\,dt=\infty$ for a finite $T$; and (4) check the hypotheses under which the global-regularity results at $\alpha\ge1/3$ (Danchin; Shao–Wei–Zhang) apply, to confirm that nothing contradicts the stated sharpness. A cheap cross-check is to compare the exponent ranges with the independent constructions of Shkoller, Chen and Shao–Wei–Zhang–Zhang. An implementation of the evolution of one vortex-ring pair (the preprint shows a regularised numerical illustration, not a proof) would test the self-deformation picture.

# Plain explanation

Think of an ideal fluid arranged in rings, like many smoke rings around one line. How smooth does the starting flow have to be to guarantee that nothing ever goes infinitely wrong? Mathematicians measure smoothness with a number, and for this kind of flow the dividing line is believed to be one third. If the flow is at least that smooth, it stays well behaved forever. If it is even slightly rougher, a starting flow can be found that blows up, with the spin becoming infinite after a finite time.

The first half of that was proved in published work. The second half is the news: in 2026 four groups posted papers that reach the whole range below one third. The newest one builds a single starting flow out of an endless series of ever smaller, ever more stretched rings that feed each other, so that each ring makes the next one spin faster.

None of these papers has been refereed yet, so DARC keeps the question open until experts have checked them.

This is not the famous question about perfectly smooth starting flows. The flows in these papers are slightly rough on purpose, and the smooth-flow question is still open. Whether the one-third line is the end of the story for more general flows is also unknown.

# Student explanation

**Setting.** Work with the Euler equations on $\mathbb{R}^3$ and with flows that are axisymmetric (the same around an axis) without swirl (no motion around the axis). Write the vorticity as $\omega=\omega_\theta e_\theta$ in cylindrical coordinates. The quantity $q=\omega_\theta/r$ is transported along the flow, while $\omega_\theta$ itself changes as particles move toward or away from the axis. Hölder continuity of $\omega_\theta$ does not give a bound on $q$ near the axis, which is why rough data can blow up.

**The threshold.** Take velocities that are $C^{1,\alpha}$ (the gradient is Hölder continuous with exponent $\alpha$), have finite energy and have vorticity supported in a bounded region. Danchin (2007) proved global classical solutions for $1/3<\alpha<1$ by working with bounded vorticity and with $q$ in a Lorentz space; the latest preprint says the endpoint $\alpha=1/3$ was settled by Shao–Wei–Zhang. So any blow-up must live strictly below $1/3$.

**What was missing.** Elgindi proved blow-up only for small $\alpha$. In 2026 four preprints reach every $\alpha<1/3$: Shkoller (a Lagrangian argument: the nonlocal pressure Hessian cannot cancel the compressive strain, which his abstract connects to the value $1/3$), Chen and Shao–Wei–Zhang–Zhang (self-similar profiles, where the solution keeps its shape while shrinking), and Bang–Cheskidov.

**The new construction.** Instead of a self-similar solution, Bang and Cheskidov write down one explicit initial vorticity: an infinite series of thin vortex-ring pairs of shrinking size, accumulating at the origin and all inside the support. The outer rings, by the stretching they cause near the axis, make the next ring thinner and stronger. The solution blows up in a cascade through smaller and smaller scales. The hard step near $1/3$ is that each ring pair also deforms itself a lot; they prove a lower bound for the strain at the origin by tracking how the ring's mass redistributes in angle. Since the same datum lies in every $C^{1,\alpha}$ with $\alpha<1/3$, it is a single counterexample for all of them.

**What remains.** The proofs are long and unrefereed. Stability of the blow-up under perturbation is not claimed. The paper also says smooth-data blow-up for axisymmetric flow with swirl is still open; that is a separate, much harder question.
