---
type: problem
slug: leray-hopf-uniqueness-unforced-navier-stokes
title: Uniqueness of Leray–Hopf weak solutions for the unforced 3D Navier–Stokes equations
entry: navier-stokes-equations
status: OPEN
origin: Leray, 1934 (weak solutions); Jia and Šverák, 2013 (programme towards non-uniqueness)
ratings:
  difficulty: 66
  applicationValue: 12
  leverage: 38
verification:
  route: REVIEW
sources:
  - title: "Hou, Qin, Song, Zhang: A Viscous Cascade Construction of Nonunique Leray–Hopf Solutions to the Unforced 3D Navier–Stokes Equations (arXiv:2611.06117, unrefereed preprint)"
    url: https://arxiv.org/abs/2611.06117
  - title: "Jia, Šverák: Are the incompressible 3d Navier–Stokes equations locally ill-posed in the natural energy space? (arXiv:1306.2136)"
    url: https://arxiv.org/abs/1306.2136
  - title: "Buckmaster, Vicol: Nonuniqueness of weak solutions to the Navier–Stokes equation (arXiv:1709.10033; Ann. Math. 189 (2019), DOI 10.4007/annals.2019.189.1.3)"
    url: https://arxiv.org/abs/1709.10033
  - title: "Albritton, Brué, Colombo: Non-uniqueness of Leray solutions of the forced Navier–Stokes equations (arXiv:2112.03116; Ann. Math. 196 (2022), DOI 10.4007/annals.2022.196.1.3)"
    url: https://arxiv.org/abs/2112.03116
links:
  - to: navier-stokes-unforced-regularity
    kind: RELATED
    note: Both concern the unforced equations; the preprint is about non-uniqueness for a datum with a singular point and does not address regularity for smooth data.
  - to: navier-stokes-regularity
    kind: RELATED
    note: Forced Leray non-uniqueness (Albritton–Brué–Colombo) is the forced counterpart of this question, alongside the forced blow-up claim.
timeline:
  - date: 2013-06-10
    title: "Jia–Šverák: non-uniqueness under a spectral condition"
    body: Jia and Šverák reduce non-uniqueness of Leray–Hopf solutions from $L^2$ data to a spectral condition on an operator linked to scale-invariant solutions, suggesting it could be checked numerically.
    source: https://arxiv.org/abs/1306.2136
  - date: 2017-09-28
    title: "Buckmaster–Vicol: non-uniqueness of finite-energy weak solutions"
    body: Convex integration gives distinct finite-energy weak solutions of 3D Navier–Stokes; they are not known to satisfy the energy inequality, so Leray–Hopf uniqueness is untouched.
    source: https://arxiv.org/abs/1709.10033
  - date: 2021-12-06
    title: "Albritton–Brué–Colombo: forced non-uniqueness of Leray solutions"
    body: Two distinct Leray solutions with zero initial velocity and the same force, built on an unstable vortex-ring background as predicted by Jia and Šverák.
    source: https://arxiv.org/abs/2112.03116
  - date: 2026-11-04
    title: Preprint claims non-unique Leray–Hopf solutions without a force
    body: Hou, Qin, Song and Zhang (113 pages, unrefereed) claim an axisymmetric $L^2$ datum, smooth away from the origin and not in $L^3$, with a continuum of distinct suitable Leray–Hopf solutions in $L^\infty_tL^{3,\infty}_x$. Not yet independently checked.
    source: https://arxiv.org/abs/2611.06117
explainer:
  oneLine: Start a fluid in a rough way and leave it alone. Is there only one physically sensible way it can evolve?
  flow:
    - Rough start, no outside stirring
    - "Leray: a finite-energy solution exists"
    - Energy inequality may not pick one future
    - "Forced case: two futures proved (2022)"
    - "Unforced claim: many futures, unchecked"
  glossary:
    - term: Navier-Stokes equations
      meaning: The equations of motion for a viscous fluid.
      link: /research/navier-stokes-equations
    - term: Leray–Hopf solution
      meaning: A global weak solution of Navier–Stokes that attains its starting value and obeys the energy inequality.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
    - term: weak solution
      meaning: A solution that satisfies the equation only after averaging against smooth test functions, so it need not be differentiable.
      link: https://en.wikipedia.org/wiki/Weak_solution
    - term: distribution
      meaning: A generalised function that lets derivatives and equations make sense for rough objects by testing against smooth functions.
      link: https://en.wikipedia.org/wiki/Distribution_(mathematics)
    - term: energy inequality
      meaning: Kinetic energy plus energy lost to viscosity never exceeds the initial kinetic energy.
      link: /research/sobolev-spaces-energy-methods
    - term: $L^p$ space
      meaning: The set of functions whose $p$-th power has a finite integral; it measures how large a function is overall.
      link: https://en.wikipedia.org/wiki/Lp_space
    - term: weak $L^3$ ($L^{3,\infty}$)
      meaning: A Lorentz space slightly larger than $L^3$, allowing a function to blow up at a point at the borderline rate.
      link: https://en.wikipedia.org/wiki/Lorentz_space
    - term: convex integration
      meaning: A technique that builds wild solutions by adding ever finer oscillations step by step.
      link: https://en.wikipedia.org/wiki/Nash%E2%80%93Kuiper_theorem
    - term: axisymmetric
      meaning: Unchanged when rotated about a fixed axis, like a spinning top or a smoke ring.
      link: https://en.wikipedia.org/wiki/Axial_symmetry
    - term: scaling
      meaning: Zooming a solution in space and time so that it still solves the same equation.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
    - term: preprint
      meaning: A paper posted publicly before peer review, so its claims are not yet checked by independent experts.
      link: https://en.wikipedia.org/wiki/Preprint
  readFirst:
    - title: Mathematicians Find Wrinkle in Famed Fluid Equations (Quanta)
      url: https://www.quantamagazine.org/mathematicians-find-wrinkle-in-famed-fluid-equations-20171221/
      why: Plain account of the Buckmaster–Vicol non-uniqueness result and what it does and does not mean.
    - title: Mathematicians Coax Fluid Equations Into Nonphysical Solutions (Quanta)
      url: https://www.quantamagazine.org/mathematicians-coax-fluid-equations-into-nonphysical-solutions-20220502/
      why: The 2022 forced non-uniqueness result, the closest predecessor of the new claim.
    - title: Navier–Stokes existence and smoothness (Wikipedia)
      url: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
      why: Clay problem, weak solutions and partial results in one place.
    - title: Finite time blowup for an averaged three-dimensional Navier-Stokes equation (Tao)
      url: https://terrytao.wordpress.com/2014/02/04/finite-time-blowup-for-an-averaged-three-dimensional-navier-stokes-equation/
      why: Tao's blog summary of why energy alone cannot settle Navier–Stokes questions.
raw:
  body: "For the unforced 3D incompressible Navier–Stokes equations $\\partial_t u + (u\\cdot\\nabla)u = \\nu\\Delta u - \\nabla p$, $\\nabla\\cdot u = 0$, $\\nu>0$, on $\\mathbb{R}^3$, a *Leray–Hopf* solution from $u_0\\in L^2_\\sigma$ lies in $C_w([0,T];L^2)\\cap L^2(0,T;H^1)$, solves the equations in the sense of distributions, attains $u_0$ and satisfies the energy inequality. Decide whether Leray–Hopf solutions are unique for every divergence-free $u_0\\in L^2$ with $f\\equiv0$, or whether some datum admits two distinct Leray–Hopf solutions. Uniqueness is known when the solution is additionally bounded in $L^\\infty_tL^3_x$ (Escauriaza–Seregin–Šverák, 2003) and for small data in critical spaces; the question is what happens for large or rough data. Non-uniqueness with a force $f\\neq0$, and non-uniqueness of weak solutions that are not Leray–Hopf, do not answer it."
  student: "**Setting.** The unforced incompressible Navier–Stokes equations on $\\mathbb R^3$ are $\\partial_t u+(u\\cdot\\nabla)u=\\nu\\Delta u-\\nabla p$ with $\\nabla\\cdot u=0$. Here $u(x,t)$ is the velocity (a vector at each point and time), $p$ is pressure, and $\\nu>0$ is the viscosity. The first term on the left is acceleration, the second is the fluid carrying its own motion along, and $\\nu\\Delta u$ is the smoothing effect of stickiness. \"Unforced\" means nobody stirs the fluid.\n\n**Weak solutions.** If $u_0$ is rough, we cannot expect derivatives to exist, so we ask the equation to hold only after integrating against smooth test functions (a *distributional* solution). Leray (1934) proved that for any $u_0$ of finite energy, $\\|u_0\\|_{L^2}^2=\\int|u_0|^2\\,dx<\\infty$, there is a global weak solution with the energy inequality $\\tfrac12\\|u(t)\\|_{L^2}^2+\\nu\\int_0^t\\|\\nabla u\\|_{L^2}^2\\,ds\\le\\tfrac12\\|u_0\\|_{L^2}^2$. In words: kinetic energy plus the energy burned by viscosity never exceeds what you started with. Solutions with this property are called *Leray–Hopf*.\n\n**The question.** For a given $u_0$, is the Leray–Hopf solution unique? If not, the energy inequality does not single out a physical future.\n\n**What is known.**\n- If a solution also stays bounded in $L^\\infty_tL^3_x$ (the size $\\big(\\int|u|^3dx\\big)^{1/3}$ stays bounded), it is unique (Escauriaza–Seregin–Šverák, 2003). The $L^3$ size has the same scaling as the equations, so it is the natural borderline.\n- Buckmaster–Vicol (2019) built many weak solutions from the same data by *convex integration*, but these are not known to satisfy the energy inequality, so they say nothing about Leray–Hopf.\n- Jia and Šverák (2013) argued non-uniqueness would follow if a certain linearised operator around a self-similar solution has an unstable direction, and suggested checking it by computer.\n- Albritton–Brué–Colombo (2022) proved non-uniqueness of Leray–Hopf solutions *with a force* by using an unstable vortex ring.\n\n**The new claim.** Hou, Qin, Song and Zhang (arXiv:2611.06117, 113 pages, 4 November 2026) report an axisymmetric $L^2$ datum, smooth except at the origin, that is in $L^{3,\\infty}$ (a slightly weaker version of \"in $L^3$\") but not in $L^3$. They claim a continuum of different solutions from it, each smooth for $t>0$ and satisfying the energy equalities, and they say the proof is analytic with no computer eigenvalue check. This is unrefereed and unverified. Notice that the datum sits just outside the Escauriaza–Seregin–Šverák borderline, which fits the known theory.\n\n**Relation to the Clay problem.** The prize asks whether *smooth* data can blow up. This datum is singular at a point from the start, so even a correct proof would not settle it."
site:
  aiReviewed: true
---

# State of the art

**Open; a 4 November 2026 preprint claims a negative answer (unrefereed, not independently verified).** Leray (1934) built global weak solutions for $L^2$ data; whether they are unique has been open since. Jia and Šverák (arXiv:1306.2136, 2013) showed that non-uniqueness of Leray–Hopf solutions would follow from a spectral condition on a linearised operator around a scale-invariant solution; the condition was left to be checked numerically and was not established in that paper. Buckmaster and Vicol (Ann. Math. 189, 2019) proved non-uniqueness of finite-energy weak solutions by convex integration, but these are not known to satisfy the energy inequality, so they are not Leray–Hopf. Albritton, Brué and Colombo (Ann. Math. 196, 2022) proved non-uniqueness of Leray–Hopf solutions **with a force**, in the Jia–Šverák picture with a vortex-ring background. For the unforced equations the question remained open. On 4 November 2026 Hou, Qin, Song and Zhang posted a 113-page preprint (arXiv:2611.06117) reporting an axisymmetric, divergence-free datum in $L^2$, smooth away from the origin, in $L^{3,\infty}$ and every $L^q$ with $1\le q<3$ but not in $L^3$, together with a continuum of pairwise distinct solutions on a common interval $[0,T]$. According to the preprint each solution is smooth for $t>0$, attains the datum strongly in $L^2$, satisfies the global and local energy equalities (so is Leray–Hopf and suitable), and lies in $L^\infty_tL^{3,\infty}_x$ but not in $L^\infty_tL^{3,r}_x$ for finite $r$. The argument is described as purely analytic, with no numerical eigenvalue computation. It is a single unrefereed preprint and no independent check exists yet. If correct it answers the uniqueness question negatively, but for a datum with a singular point, so it does not touch the Clay question of global regularity for smooth data (see navier-stokes-unforced-regularity).

# Applications

None directly. Non-uniqueness of Leray–Hopf solutions would show that the energy inequality does not single out a flow from rough initial data, which bears on how numerical schemes and turbulence models select physical solutions (for example vanishing-viscosity or admissibility criteria). Whether data of the claimed type matter in practice is unclear, so any engineering impact is speculative.

# Resolution criteria

Either a proof that Leray–Hopf solutions from every $u_0\in L^2_\sigma$ are unique, or an explicit $L^2$ datum with two distinct Leray–Hopf solutions, in both cases for the unforced equations on $\mathbb{R}^3$ (or the torus) and accepted by experts. A non-uniqueness claim counts as settled when the construction is refereed or independently checked in full. Forced equations, convex-integration weak solutions without the energy inequality, and model equations do not count.

# Rating rationale

Difficulty 66: a classical open question (Leray, 1934) with a visible programme (Jia–Šverák, 2013) and a forced version proved in 2022, now with a full claimed construction from a leading group, so the remaining work is verifying a 113-page unrefereed argument; it sits well below the Clay-level unforced regularity question (92). Application value 12: indirect, through selection criteria for rough-data solutions. Leverage 38: would reshape weak-solution theory for Navier–Stokes, one subfield, without settling smooth-data regularity.

# Verification

Refereeing of the paper version (arXiv:2611.06117, 113 pages) by PDE specialists. A reviewer checks: (1) the datum is axisymmetric, divergence-free, in $L^2\cap L^{3,\infty}$ and not in $L^3$; (2) each solution is smooth for $t>0$, attains $u_0$ strongly in $L^2$ and satisfies the global and local energy equalities through $t=0$, so is Leray–Hopf and suitable; (3) the solutions are pairwise distinct (a positive pairing against a test field at a fixed positive time); (4) the growth of the linearisation, the sign of the full quadratic stress, and the uniform energy, moment and transfer estimates that give a common initial trace; (5) consistency with the Escauriaza–Seregin–Šverák $L^\infty_tL^3_x$ criterion. The preprint states that no numerical eigenvalue computation is needed, so there is no computer step to reproduce.

# Plain explanation

Imagine pouring milk into coffee and letting it swirl with nobody touching it. If you knew exactly how the liquid was moving at the start, you would expect only one possible future. That expectation is called uniqueness, and for the equations that describe fluids, nobody has been able to prove it in three dimensions.

In 1934 Jean Leray showed that these equations always have at least one solution that lasts forever, as long as the starting motion has finite energy. The catch is that his solutions are allowed to be a bit rough, and for rough solutions the question is open: could the same start lead to two different, equally allowed futures?

In 2022 three mathematicians showed this can happen if someone keeps stirring the fluid in a carefully chosen way. The harder question is what happens with no stirring at all.

On 4 November 2026 four mathematicians posted a very long paper claiming the answer is yes: a particular starting motion, spiky at one point, that allows many different futures. This is a single paper that no other expert has checked yet, so it may turn out to have a gap.

Even if it is right, it would not win the famous million-dollar prize problem. That problem asks about smooth starts that never develop a spike. This one is about starts that already have a spike.
