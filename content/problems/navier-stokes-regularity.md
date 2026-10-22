---
type: problem
slug: navier-stokes-regularity
title: Navier–Stokes existence and smoothness (Clay formulation)
entry: navier-stokes-equations
status: RESOLVED
origin: Clay Mathematics Institute, 2000 (Fefferman's statement)
prize: $1M Clay Millennium Prize
ratings:
  difficulty: 9
  applicationValue: 24
  leverage: 48
workMix:
  theory: 45
  engineering: 45
  compute: 10
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Clay Mathematics Institute: Navier–Stokes equation"
    url: https://www.claymath.org/millennium/navier-stokes-equation/
  - title: "Fefferman: Existence and smoothness of the Navier–Stokes equation (Clay, PDF)"
    url: https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf
  - title: "OpenAI: Finite Time Blowup for Navier–Stokes (manuscript, unrefereed)"
    url: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
  - title: OpenAI Lean repository
    url: https://github.com/openai/NavierStokesAndEuler
  - title: "Bastounis, Circelli, Hansen: Navier–Stokes lost in translation (Lean versus prose proof)"
    url: https://arxiv.org/abs/2610.08144
  - title: "Constantin, Ignatova, Vicol: regularity with real-analytic forcing for asymptotically axisymmetric solutions"
    url: https://arxiv.org/abs/2609.20803
  - title: "Tao: Finite time blowup for an averaged 3D Navier–Stokes equation"
    url: https://arxiv.org/abs/1402.0290
  - title: "Quanta Magazine: AI has solved one of math’s $1 million Millennium Prize problems (8 Sep 2026)"
    url: https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/
  - title: "Cao, Chi, Nie: Density of forces producing Navier–Stokes blowup (unrefereed)"
    url: https://arxiv.org/abs/2609.10262
timeline:
  - date: 2014-02-01
    title: Averaged Navier–Stokes blows up
    body: Tao proves blow-up for an averaged equation with the same energy identity.
    source: https://arxiv.org/abs/1402.0290
  - date: 2026-09-08
    title: OpenAI posts a forced blow-up construction
    body: 166 pages plus Lean, claiming alternatives (C)/(D).
    source: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
  - date: 2026-09-11
    title: "Clay responds: evaluation will be unhurried"
    body: Clay welcomes the claim as having apparently settled the problem but awards nothing; prize rules require publication and two years of acceptance.
    source: https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/
  - date: 2026-10-06
    title: Lean certificate questioned
    body: Bastounis–Circelli–Hansen argue that the Lean development does not certify the written proof.
    source: https://arxiv.org/abs/2610.08144
explainer:
  oneLine: "The official million-dollar form of the question: do 3D fluid flows always stay smooth, or can they break?"
  flow:
    - Clay lists four ways to settle the problem
    - Two prove smooth flow lasts forever
    - Two give a force-driven flow that breaks
    - A blow-up claim exists; checking is incomplete
  glossary:
    - term: Navier-Stokes equations
      meaning: The equations of motion for a viscous fluid.
      link: /research/navier-stokes-equations
    - term: smooth solution
      meaning: A solution that has well-defined derivatives of all orders, with no jumps or spikes.
      link: https://en.wikipedia.org/wiki/Smoothness
    - term: finite-time blow-up
      meaning: When a solution becomes infinitely large at some specific moment.
      link: https://en.wikipedia.org/wiki/Mathematical_singularity
    - term: external force
      meaning: A push applied to the fluid from outside, such as stirring or gravity.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
    - term: torus
      meaning: A doughnut-shaped space; in maths, a space where leaving one side brings you back on the opposite side.
      link: https://en.wikipedia.org/wiki/Torus
    - term: Leray weak solution
      meaning: A solution that exists for all time but is only known to satisfy the equations in an averaged sense.
      link: https://en.wikipedia.org/wiki/Weak_solution
    - term: partial regularity
      meaning: A result saying that any bad points of a solution must be very rare.
      link: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
    - term: Millennium Prize Problems
      meaning: Seven problems for each of which the Clay Institute offers one million dollars.
      link: https://en.wikipedia.org/wiki/Millennium_Prize_Problems
    - term: Lean 4
      meaning: A proof assistant that checks mathematical proofs by computer.
      link: /research/lean-mathlib
    - term: a priori estimate
      meaning: A bound on a solution proved assuming it exists, then used to show it really does exist and stays smooth.
      link: https://en.wikipedia.org/wiki/A_priori_estimate
  readFirst:
    - title: Navier-Stokes existence and smoothness - Wikipedia
      url: https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness
      why: Statement of the Clay problem in plain terms.
    - title: "Clay Mathematics Institute: Navier-Stokes"
      url: https://www.claymath.org/millennium/navier-stokes-equation/
      why: The official description and rules.
    - title: The Navier-Stokes equations (research entry)
      url: /research/navier-stokes-equations
      why: Background on the equations and why energy is not enough.
site:
  aiReviewed: true
---

The Clay problem asks for one of four alternatives for the 3D incompressible Navier–Stokes equations ∂\_t u + (u·∇)u = νΔu − ∇p + f, ∇·u = 0, with ν > 0. Alternatives (A) and (B) assert global existence of smooth solutions from smooth data, for f = 0 on ℝ³ (A) and on the 3-torus (B). Alternatives (C) and (D) assert existence of smooth, rapidly decaying (or periodic) data and a smooth force f, with suitable decay and boundedness, such that no smooth bounded-energy solution exists globally, on ℝ³ (C) and on the torus (D). Resolving any one alternative resolves the Clay problem as posed.

# State of the art

**Claimed resolution of alternatives (C)/(D) by forced blow-up; independent verification is incomplete.** Classical results: global smooth solutions in 2D; local smooth solutions and global solutions for small data in 3D; Leray weak solutions with unknown uniqueness; partial regularity (Caffarelli–Kohn–Nirenberg, 1982); regularity criteria such as $L^\infty_tL^3_x$ (Escauriaza–Seregin–Šverák, 2003). Tao (2014) proved blow-up for an averaged equation with the same energy identity, and Albritton–Brué–Colombo (2021) proved non-uniqueness of forced Leray solutions. On 8 September 2026 OpenAI released 'Finite Time Blowup for Navier–Stokes' (166 pages plus a Lean 4 project), attributed to an internal model, constructing for each ν > 0 a smooth force, compactly supported in space and time, and a solution from rest whose velocity blows up in finite time with bounded energy, which targets alternatives (C)/(D). OpenAI said it would not claim the prize. Priority is disputed: Buckmaster and Alpöge had posted related forced blow-up for Euler shortly before. On 11 September 2026 the Clay Institute posted a note, as reported in the press, welcoming the result as having 'apparently' settled the problem while stressing a 'deliberately unhurried' and rigorous evaluation; Clay's rules require publication, a waiting period of two years and general acceptance, and Clay still listed the problem as active in October 2026. Fefferman, author of the official problem statement, told Quanta he was 'thrilled that the problem was solved'. No independent group has published a full check: Bastounis, Circelli and Hansen (arXiv:2610.08144) argue the Lean development does not certify the written proof, and Cao, Chi and Nie (arXiv:2609.10262, unrefereed) build on the construction to show blow-up forces are dense. Constantin, Ignatova and Vicol (arXiv:2609.20803) show that constructions with the same structural features cannot work with real-analytic forcing, so the unforced equations are untouched and form the successor problem.

# Applications

None directly. Blow-up with a rough or compactly supported force says little about physical flows. The methods (computer-assisted and AI-assisted construction of singularities, Lean certificates in analysis) are the main transferable output.

# Resolution criteria

Alternative (C) or (D) is settled when the construction is checked and accepted by experts (journal publication or Clay's own determination) and the Lean statement is shown to match the written theorem. The Clay prize as posed would then be awarded; the unforced problem is tracked separately.

# Resolution

Provisional. This status records a claimed resolution, not a completed verification. OpenAI's 'Finite Time Blowup for Navier–Stokes' (8 September 2026; 166 pages plus Lean 4, produced by an internal model) constructs a smooth, compactly supported force giving finite-time blow-up with bounded energy, i.e. Clay alternatives (C)/(D). On 11 September 2026 the Clay Institute publicly welcomed the result as having apparently settled the problem, but it has awarded nothing, still lists the problem as active, and its rules require journal publication plus two years of general acceptance; OpenAI says it will not claim the prize. As of 15 October 2026 the manuscript is unrefereed, Bastounis–Circelli–Hansen (arXiv:2610.08144) dispute that the Lean code certifies the paper, and priority is contested by Buckmaster and Alpöge. Constantin–Ignatova–Vicol (arXiv:2609.20803) show the mechanism needs non-analytic forcing, so the unforced problem (navier-stokes-unforced-regularity) is open. If verification fails, this entry reverts to OPEN.

# Rating rationale

Graded as RESOLVED by the site owner's decision, so difficulty measures what remains: verifying a complete 166-page construction and reconciling its Lean statement with the prose. That puts it at the top of the 1–9 band, above the formal FLT certificate (3) because no independent check exists yet; the calibration pass graded the same claim at 60 while treating the problem as open, and would restore that if the construction fails. Application value 24 and leverage 48 are unchanged from calibration: forced blow-up reshapes singularity analysis in PDE but no engineering depends on it, and the unforced question (92) carries the remaining weight.

# Work mix rationale

What remains is checking an existing artefact: expert refereeing of the prose proof and aligning the Lean statement and its dependencies with it.

# Verification

Statement: the four Clay alternatives (A)–(D) in [Millennium/NavierStokes.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Millennium/NavierStokes.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)), stated directly with derivatives of smooth functions. The forced breakdown alternatives `navier_stokes_breakdown_R3` (C) and `navier_stokes_breakdown_periodic` (D) are labelled solved there, linking an OpenAI Lean proof (September 2026). Verification: build the linked proof against the pinned statements and pass Comparator with only the standard axioms, then have experts confirm that the Lean statement matches Clay's written formulation (this match has been disputed for the 2026 claim). A computer-assisted blow-up proof needs its interval arithmetic verified inside the same development.

# Plain explanation

The Navier-Stokes equations describe how fluids move. The Clay Institute's prize asks a precise version of a simple-sounding question: if a fluid starts in a smooth, reasonable state, does it stay smooth forever, or can it develop a point where the speed becomes infinite?

The prize offers four ways to win. Two ask you to prove that smooth flow lasts forever with no outside push, either in all of space or in a space that wraps around like a video-game screen. The other two ask you to show that smooth flow can break down, and for these you are allowed to add a smooth outside push, again in all of space or in the wrap-around space. Settling any one of the four is enough.

What is the status? In September 2026 OpenAI released a long claimed proof, with computer-checkable files, that a flow can break down when a carefully designed outside push is applied. That would settle one of the 'break down' options. Independent experts have not finished checking it, one group argues the computer files do not certify the written proof, and the Clay Institute's rules require publication and two years of acceptance.

The pure question, with no outside push at all, is not touched by this claim. It is listed separately in this wiki and remains open.

Think of four doors to one prize: the claim may have opened the easiest door, while the door most people care about stays shut.

# Student explanation

**The Clay formulation.** For the 3D incompressible Navier–Stokes equations $\partial_t u+(u\cdot\nabla)u=\nu\Delta u-\nabla p+f$, $\nabla\cdot u=0$, with viscosity $\nu>0$, the Clay problem lists four alternatives and asks for a proof of any one.

- **(A)** Global existence and smoothness for smooth initial data with $f=0$, on $\mathbb R^3$.
- **(B)** The same on the 3-torus (periodic space, like a video game screen that wraps around).
- **(C)** Existence of smooth, rapidly decaying initial data and a smooth force $f$ (with suitable decay and bounds) such that no smooth bounded-energy solution exists for all time, on $\mathbb R^3$.
- **(D)** The same on the torus.

So the question has two sides: a _positive_ resolution (A or B) and a _negative_ resolution allowing a force (C or D). Because the force is part of the setup in (C) and (D), a forced blow-up does not settle the unforced question, which is why this wiki lists the unforced problem separately.

**What is classical.**

- In two dimensions smooth solutions are global.
- In three dimensions, smooth solutions exist locally in time, and globally if the data is small.
- Leray weak solutions exist globally, but whether they are unique and smooth is unknown.
- Caffarelli–Kohn–Nirenberg (1982) proved partial regularity: the singular set, if any, is tiny.
- Escauriaza–Seregin–Šverák (2003): bounded velocity in the critical norm $L^\infty_tL^3_x$ rules out blow-up.
- Tao (2014) proved blow-up for an averaged equation with the same energy identity, so a proof must use the exact structure of the nonlinearity.
- Albritton–Brué–Colombo (2021) proved non-uniqueness of Leray solutions when a force is allowed.

**The claim.** On 8 September 2026, OpenAI released a document of about 166 pages with a Lean 4 project, claiming a forced finite-time blow-up of the kind in (C)/(D). OpenAI said it would not claim the prize. Independent verification is incomplete: Bastounis, Circelli and Hansen argue the Lean development does not certify the written proof, and Clay's rules require publication, a two-year wait and general acceptance (Clay still listed the problem as active in October 2026). This entry therefore treats the claim as unverified.

**What a resolution looks like.** A result on the 'fail' side requires an explicit initial datum and force whose solution blows up; checking it is largely computation plus rigorous estimates. A result on the 'smooth' side would require a new a priori estimate beyond the energy, which scaling says energy cannot supply.

The companion problem, regularity for the unforced equations, is the version most researchers mean when they speak of the Navier–Stokes problem.
