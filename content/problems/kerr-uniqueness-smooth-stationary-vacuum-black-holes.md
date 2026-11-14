---
type: problem
slug: kerr-uniqueness-smooth-stationary-vacuum-black-holes
title: "Black hole uniqueness: is every smooth, stationary, asymptotically flat vacuum black hole exterior a Kerr exterior, without analyticity?"
entry: general-relativity
status: PARTIAL
origin: Israel 1967 (static case); Carter 1971 and Robinson 1975 (axisymmetric case); Hawking 1972 (rigidity, analytic case); the smooth case without analyticity has been studied by Ionescu and Klainerman since 2007 (arXiv:0711.0040)
ratings:
  difficulty: 64
  applicationValue: 3
  leverage: 45
verification:
  route: REVIEW
sources:
  - title: "Huang, Li, Li, Zhu: The uniqueness of smooth stationary black holes (arXiv:2611.16853v1, 12 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.16853
  - title: "Ionescu, Klainerman: On the uniqueness of smooth, stationary black holes in vacuum (arXiv:0711.0040; Invent. Math. 175, 2009)"
    url: https://arxiv.org/abs/0711.0040
  - title: "Alexakis, Ionescu, Klainerman: Uniqueness of smooth stationary black holes in vacuum: small perturbations of the Kerr spaces (Commun. Math. Phys. 299, 2010)"
    url: https://arxiv.org/abs/0904.0982
  - title: "Chruściel, Costa, Heusler: Stationary Black Holes: Uniqueness and Beyond (Living Rev. Relativ. 15, 2012)"
    url: https://arxiv.org/abs/1205.6112
  - title: "Radu: On rigidity of stationary black holes under a nontrapping assumption (arXiv:2609.23872, preprint)"
    url: https://arxiv.org/abs/2609.23872
  - title: "Radu: Rigidity of stationary black holes with small ADM angular momentum (arXiv:2610.09729, preprint)"
    url: https://arxiv.org/abs/2610.09729
  - title: "Han, Khuri, Weinstein, Xiong: Kerr Black Hole Uniqueness (arXiv:2608.23325, preprint)"
    url: https://arxiv.org/abs/2608.23325
links:
  - to: photon-ring-subring-detection-kerr-test
    kind: RELATED
    note: Photon-ring tests probe whether the observed geometry is Kerr, the statement that the uniqueness theorem would prove for vacuum black holes.
  - to: ringdown-overtone-and-nonlinear-qnm-detectability
    kind: RELATED
    note: Ringdown tests of the no-hair theorem compare measured mode frequencies with the Kerr spectrum, which presumes the Kerr end state this problem concerns.
timeline:
  - date: 1972-01-01
    title: Hawking's rigidity theorem (analytic case)
    body: Hawking showed that a rotating non-degenerate stationary black hole has a horizon Killing field, and that in the real-analytic case it extends to an axial symmetry of the exterior; Carter and Robinson's axisymmetric uniqueness theorems then give Kerr. Year only is known here; the date is set to 1 January.
    source: https://arxiv.org/abs/2611.16853
  - date: 2007-11-01
    title: "Ionescu–Klainerman: conditional uniqueness for smooth spacetimes"
    body: A smooth regular stationary vacuum exterior is locally isometric to Kerr if a technical identity between the Ernst potential and the Killing scalar holds on the bifurcate sphere.
    source: https://arxiv.org/abs/0711.0040
  - date: 2009-04-06
    title: "Alexakis–Ionescu–Klainerman: uniqueness near Kerr"
    body: Smooth stationary vacuum black holes sufficiently close to a Kerr solution are isometric to it (published in Commun. Math. Phys. 2010).
    source: https://arxiv.org/abs/0904.0982
  - date: 2026-09-20
    title: "Preprint: rigidity under a nontrapping assumption (unrefereed)"
    body: Radu claims Kerr rigidity when no null geodesic orthogonal to the stationary Killing field is trapped, answering a conjecture of Alexakis, Ionescu and Klainerman. Unrefereed.
    source: https://arxiv.org/abs/2609.23872
  - date: 2026-10-07
    title: "Preprint: rigidity for small angular momentum via a Harrison transform (unrefereed)"
    body: Radu claims Kerr rigidity when the ADM angular momentum is small, mapping the vacuum metric to a family of Einstein–Maxwell metrics and comparing null focusing with an area–charge inequality. Unrefereed.
    source: https://arxiv.org/abs/2610.09729
  - date: 2026-11-12
    title: Preprint claims uniqueness without analyticity or smallness (unrefereed)
    body: Huang, Li, Li and Zhu claim, for regular non-degenerate stationary vacuum spacetimes with a smooth bifurcation sphere and a maximal slice, that the Ionescu–Klainerman identity always holds, so the exterior is Kerr. Unrefereed; the paper carries an AI-use disclosure; no independent assessment is cited.
    source: https://arxiv.org/abs/2611.16853
explainer:
  oneLine: Settled black holes should all be Kerr black holes, fixed by mass and spin. Proving it without extra assumptions is partly open.
  flow:
    - "Settled black hole should be Kerr: mass and spin"
    - Classic proofs need analytic smoothness
    - Smooth case known only near Kerr
    - "Harrison transform: vacuum to Einstein–Maxwell family"
    - Area squeeze forces Ionescu–Klainerman identity
    - 2026 preprint claims Kerr, unrefereed
  glossary:
    - term: Kerr black hole
      meaning: The exact solution of Einstein's vacuum equations for a rotating black hole, described by its mass and spin only.
      link: https://en.wikipedia.org/wiki/Kerr_metric
    - term: no-hair theorem
      meaning: The statement that a settled black hole is characterised by a few numbers (mass, spin, charge) and nothing else.
      link: https://en.wikipedia.org/wiki/No-hair_theorem
    - term: event horizon
      meaning: The boundary of the region from which nothing, not even light, can escape to far away.
      link: https://en.wikipedia.org/wiki/Event_horizon
    - term: Killing field
      meaning: A direction in spacetime along which the metric never changes; a stationary spacetime has one for time, a rotation-symmetric one has another.
      link: https://en.wikipedia.org/wiki/Killing_vector_field
    - term: stationary spacetime
      meaning: A spacetime whose geometry does not change with time, though it may rotate, like a spinning black hole.
      link: https://en.wikipedia.org/wiki/Stationary_spacetime
    - term: ergoregion
      meaning: A region outside a rotating black hole where nothing can stay at rest relative to far-away observers.
      link: https://en.wikipedia.org/wiki/Ergosphere
    - term: analytic function
      meaning: A function equal to its Taylor series locally, so its values near one point determine it everywhere it extends.
      link: https://en.wikipedia.org/wiki/Analytic_function
    - term: surface gravity
      meaning: A measure of how strongly a horizon pulls, set by how a certain null direction accelerates; zero for extremal black holes.
      link: https://en.wikipedia.org/wiki/Surface_gravity
    - term: Raychaudhuri equation
      meaning: An equation telling how a bundle of light rays or free-falling paths spreads out or focuses, driven by curvature.
      link: https://en.wikipedia.org/wiki/Raychaudhuri_equation
    - term: Ernst potential
      meaning: A complex function built from a stationary spacetime's Killing field that packages its gravitational field in a simpler form.
      link: https://en.wikipedia.org/wiki/Ernst_equation
    - term: Einstein field equations
      meaning: The equations of general relativity linking spacetime curvature to the matter and energy in it.
      link: https://en.wikipedia.org/wiki/Einstein_field_equations
    - term: general relativity
      meaning: Einstein's theory describing gravity as the curvature of spacetime; the foundation behind black holes.
      link: /research/general-relativity
  readFirst:
    - title: No-hair theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/No-hair_theorem
      why: Short statement of what the uniqueness question is, and which cases are proved.
    - title: Kerr metric (Wikipedia)
      url: https://en.wikipedia.org/wiki/Kerr_metric
      why: The rotating black hole solution that every exterior is supposed to match.
    - title: Ergosphere (Wikipedia)
      url: https://en.wikipedia.org/wiki/Ergosphere
      why: Explains the region around a spinning black hole where the usual time symmetry breaks, the main difficulty for the proof.
    - title: "Stationary Black Holes: Uniqueness and Beyond (Living Reviews abstract)"
      url: https://arxiv.org/abs/1205.6112
      why: The standard review of what is proved, for readers who want the specialist version.
raw:
  student: "**Setting.** In general relativity (GR), gravity is encoded by a metric $g$, a rule for measuring distances and times in spacetime. A vacuum solution obeys $\\mathrm{Ric}(g)=0$: the Einstein equations with no matter. A black hole is a region from which nothing escapes, bounded by an event horizon. We look at *stationary* solutions: there is a time-translation symmetry, a vector field $T$ (a Killing field) along which the metric does not change. Far away the metric is *asymptotically flat*, which means it approaches the flat spacetime of special relativity.\n\n**The expected answer.** Schwarzschild's black hole has a mass $M$ only. Kerr's has a mass $M$ and an angular momentum $J = Ma$, with $|a| < M$ in the *subextremal* case. The *uniqueness conjecture* says that these are all: any regular stationary vacuum black hole is Kerr from the outside. This matters because a black hole formed in a merger is expected to settle down to a stationary state, and the conjecture says that state has just two numbers.\n\n**What is proved.** If the horizon does not rotate relative to $T$, the exterior is Schwarzschild (Israel; Bunting and Masood-ul-Alam; Chruściel and Costa). If it rotates, Hawking showed there is an extra Killing field $K$ on the horizon. If the spacetime is also *real-analytic* (it equals its Taylor series, so values near one point fix it everywhere, like a first-year Taylor expansion), then $K$ extends to the whole exterior as a rotation symmetry, and Carter and Robinson show that an axisymmetric exterior is Kerr. Smoothness alone does not give this extension. Ionescu and Klainerman (2007) proved that the exterior is Kerr if an identity holds on the bifurcate sphere, where the future and past horizons cross. Alexakis, Ionescu and Klainerman (2009) proved uniqueness for black holes already near Kerr.\n\n**The 2026 approach.** Radu's October 2026 preprint maps the vacuum metric through a *Harrison transform* to a one-parameter family $g_q$ of Einstein–Maxwell solutions (gravity plus an electromagnetic field), and uses two tools. The *Raychaudhuri equation* says that, when matter has non-negative energy, a bundle of light rays can only focus more as it travels, never spread apart on its own, which lets one compare the areas of spheres along a light front. An *area–charge inequality* says that a suitably stable sphere carrying electric flux $\\Phi$ has area at least $\\Phi^2/(4\\pi)$ in the paper's units. Radu combined these but needed small angular momentum. In the Huang–Li–Li–Zhu version they squeeze the area of the bifurcate sphere to exactly $4\\pi$ in the limiting metric when the mass is normalised to 1, and equality forces constant flux densities. The Huang–Li–Li–Zhu preprint of 12 November 2026 claims to remove that, by comparing the area of a far sphere with the horizon sphere by shifting it along $T$, even where $T$ is not timelike (inside the *ergoregion*). The resulting identities are exactly what Ionescu–Klainerman needs, which then gives Kerr.\n\n**What it assumes.** A smooth bifurcation sphere, completeness of the exterior, a maximal slice (a spatial slice of zero mean curvature) and $T$ not vanishing on that sphere. It is an unrefereed claim, with an AI-use disclosure in the paper. Degenerate (extremal) black holes and several black holes remain open without analyticity."
site:
  aiReviewed: true
---

Let $(M,g)$ be a smooth four-dimensional Lorentzian manifold with $\mathrm{Ric}(g)=0$ and a smooth Killing field $T$ ($\mathcal L_T g=0$) that is timelike near infinity, where the metric is asymptotically flat. Suppose it contains a regular, non-degenerate (surface gravity $\kappa>0$) black hole with a connected horizon. **Problem:** show that the domain of outer communications is isometric to the exterior of a subextremal Kerr solution with mass $M$ and angular momentum $J$, $|J|<M^2$ (Schwarzschild when $J=0$), assuming only smoothness: no real-analyticity, no closeness to Kerr and no smallness of the angular momentum. The known routes need an extra Killing field $K$ (the Hawking field, defined on the horizon) to extend to the whole exterior. In the analytic case Hawking's rigidity theorem gives that, and Carter–Robinson then give Kerr. Without analyticity, extending $K$ is the open step, and the obstruction is a pseudo-convexity condition that is not known to hold when the ergoregion (where $T$ is spacelike) is present. The problem is stated here for the non-degenerate, single-horizon case. Degenerate (extremal) rotating horizons and several horizon components are separate questions.

# State of the art

**Refereed results.** Static case (non-rotating horizon): the exterior is Schwarzschild (Israel 1967; Bunting and Masood-ul-Alam 1987; Chruściel and Costa 2008). Analytic case: Hawking's rigidity theorem (1972) extends the horizon Killing field to an axial symmetry of the whole exterior, and Carter (1971) and Robinson (1975) then show an axisymmetric exterior is Kerr, as treated in Chruściel–Costa–Heusler's Living Review (arXiv:1205.6112). Smooth case: Ionescu and Klainerman (Invent. Math. 2009, arXiv:0711.0040) proved that the exterior is locally isometric to Kerr if an algebraic identity linking the Ernst potential and the Killing scalar holds on the bifurcate sphere; Alexakis, Ionescu and Klainerman (Commun. Math. Phys. 2010, arXiv:0904.0982) proved uniqueness for black holes close enough to Kerr, and later extended the Hawking field under smallness hypotheses on the bifurcate sphere (Duke Math. J. 2014). **Unrefereed 2026 preprints (all unrefereed, none assessed here).** Radu (arXiv:2609.23872, 20 Sep 2026) claims uniqueness if no null geodesic orthogonal to $T$ is trapped; Radu (arXiv:2610.09729, 7 Oct 2026) claims it for sufficiently small ADM angular momentum, using a Harrison transform to Einstein–Maxwell, null-area comparison and an area–charge inequality; Han, Khuri, Weinstein and Xiong (arXiv:2608.23325) claim that no regular axially symmetric equilibrium configuration has more than one horizon component. **The 12 Nov 2026 claim.** Huang, Li, Li and Zhu (arXiv:2611.16853, 31 pages, unrefereed, with an AI-use disclosure) claim to remove the smallness assumption and prove that, for a regular non-degenerate stationary vacuum spacetime whose horizon has a smooth bifurcation sphere on which $T$ does not vanish identically, and with a maximal slice, the Ionescu–Klainerman identity holds, so the exterior is Kerr with $0<|J|<M^2$. If it is correct, the non-degenerate single-horizon problem under those hypotheses would be settled; it has not been checked by anyone DARC cites. **Still open in any case:** degenerate (extremal) rotating horizons without analyticity, several horizon components without analyticity or symmetry, and whether the global hypotheses of the theorem (smooth bifurcation sphere, completeness, a maximal slice) can be weakened or derived.

# Applications

None direct. The result is the mathematical content of the no-hair statement behind the standard modelling of black holes: waveform models, ringdown tests and horizon-scale imaging all assume the final state of a merger is a Kerr black hole described by two numbers, mass and spin. A proof would justify that assumption inside the theory but would not change any measurement. The methods (Carleman-type unique continuation, Harrison transformations, area-charge inequalities) are used in other geometric analysis problems.

# Resolution criteria

A proof, accepted by specialists or published in a refereed journal, that every smooth, regular, asymptotically flat, stationary vacuum spacetime with a single non-degenerate black hole has a Kerr exterior, with all global hypotheses stated and checked, and without analyticity or a smallness condition. The 12 Nov 2026 preprint, like the other 2026 preprints above, is unrefereed and does not by itself count. A full resolution would also settle which of the degenerate and multi-horizon cases follow.

# Rating rationale

Rated against the accepted literature, not the unrefereed claims. Difficulty 64: open since Hawking's 1972 analytic rigidity theorem, with the smooth case proved only conditionally (Ionescu–Klainerman) or near Kerr (Alexakis–Ionescu–Klainerman); three 2026 preprints attack the general case with a shared Harrison-transform framework, so a path is visible, but none is verified and the pseudo-convexity obstruction in the ergoregion stood for over a decade, which puts it just below Leray–Hopf uniqueness (66). Application value 3: it justifies the Kerr assumption inside GR but changes no measurement or technology. Leverage 45: the no-hair theorem underpins black-hole tests of gravity and numerical-relativity end-state assumptions, and the methods feed a subfield of geometric analysis.

# Verification

The claim is a 31-page proof with no formalization, so verification is expert refereeing. Specialists in mathematical relativity should check, in order: (1) that the hypotheses of Theorem 1.1 (regularity, completeness, smooth bifurcation sphere, tangency of $T$, maximal slice) are the ones used throughout; (2) the construction of asymptotically flat maximal slices with boundary for every metric of the Harrison family, including the estimates at infinity; (3) the null-area comparison in the ergoregion, where $T$ is not timelike, and the limit as the parameter $q\to0$; (4) the area–charge inequality for the stable marginally outer trapped surface and its equality case; (5) that the resulting identities on the bifurcate sphere are exactly hypothesis (1.2) needed in Ionescu–Klainerman. A refereed publication, or independent confirmation by the authors of the related 2026 Harrison-transform preprints, is the bar for treating the result as settled.

# Plain explanation

A black hole is a region of space that nothing can leave. Physicists think that once a black hole settles down, it looks the same as any other settled black hole with the same mass and spin. Everything else about how it formed is forgotten. A spinning black hole of this kind is called a Kerr black hole.

This "no-hair" idea is a mathematical theorem only under extra assumptions. The classic proofs assume the black hole is perfectly smooth in a very strong sense, the kind of smoothness where knowing a shape near one point fixes it everywhere, like a pattern that continues the same way forever. Nothing in nature forces that. A newer line of work, from 2007 on, drops that assumption but could only handle black holes already close to Kerr, or spinning slowly.

On 12 November 2026, four mathematicians posted a preprint claiming the general case for a single spinning black hole. A preprint is a paper that experts have not yet checked. The authors state conditions they need, and they say they used AI tools to help check calculations and some technical arguments.

Nobody outside the team has confirmed it yet, and at least two other 2026 preprints attack the same question. Even if it holds, spinning holes at their limit and systems with more than one black hole stay open without the strong smoothness assumption.

Where the analogy breaks: a pattern continuing forever is a picture. The real obstacle is an equation whose solutions can change behaviour in a region without changing elsewhere.
