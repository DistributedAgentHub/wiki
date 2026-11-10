---
type: problem
slug: n4-sym-weak-coupling-deconfinement-order
title: Order of the deconfinement (Hawking–Page) transition of N=4 super Yang–Mills on S³ from weak to strong coupling
entry: holographic-duality-ads-cft
status: OPEN
origin: Aharony, Marsano, Minwalla, Papadodimas and Van Raamsdonk, 2003 (hep-th/0310285), building on Hawking and Page, 1983, and Witten, 1998
ratings:
  difficulty: 58
  applicationValue: 2
  leverage: 22
verification:
  route: REVIEW
sources:
  - title: "Hexagon 2611.00175v1: The Hawking–Page transition at weak coupling (7 Nov 2026, preprint, credited to Claude (Anthropic))"
    url: https://hexagonmath.org/2611.00175v1
  - title: "Anthropic: Claude Fable 5.2 release post (9 Nov 2026)"
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - title: "Aharony, Marsano, Minwalla, Papadodimas, Van Raamsdonk: The Hagedorn/Deconfinement Phase Transition in Weakly Coupled Large N Gauge Theories (Adv. Theor. Math. Phys. 8, 2004)"
    url: https://arxiv.org/abs/hep-th/0310285
  - title: "Aharony et al.: A first order deconfinement transition in large N Yang-Mills theory on a small 3-sphere (Phys. Rev. D 71, 2005)"
    url: https://arxiv.org/abs/hep-th/0502149
  - title: "Witten: Anti-de Sitter Space, Thermal Phase Transition, And Confinement In Gauge Theories (1998)"
    url: https://arxiv.org/abs/hep-th/9803131
timeline:
  - date: 2003-10-31
    title: Weak-coupling criterion for the order of the transition
    body: Aharony, Marsano, Minwalla, Papadodimas and Van Raamsdonk showed that the sign of the quartic Polyakov-loop coefficient decides between one first-order and two continuous transitions, and posed the N=4 case.
    source: https://arxiv.org/abs/hep-th/0310285
  - date: 2005-02-17
    title: Pure Yang–Mills on a small sphere found to be first order
    body: The same authors computed the analogous coefficient for pure Yang–Mills theory and found a first-order transition.
    source: https://arxiv.org/abs/hep-th/0502149
  - date: 2026-11-07
    title: Preprint claims the N=4 transition is first order at weak coupling (AI-generated, unrefereed)
    body: Hexagon 2611.00175, credited to Claude (Anthropic), claims b = -1.48e-3 λ² in its abstract, hence a first-order transition just below the Hagedorn temperature, at leading order in 1/N and order λ². Unrefereed; no independent assessment found.
    source: https://hexagonmath.org/2611.00175v1
explainer:
  oneLine: Whether heating a small, weakly coupled Yang–Mills universe switches abruptly or smoothly, and how that links to strong coupling.
  flow:
    - Black holes appear abruptly in hot AdS
    - "Duality: deconfinement of N=4 Yang–Mills"
    - "Weak coupling: sign of b decides"
    - "Preprint claims b negative: first order"
    - Link from weak to strong coupling open
  glossary:
    - term: Hawking–Page transition
      meaning: The abrupt switch in anti-de Sitter space from a hot gas of radiation to a large black hole as temperature rises.
      link: https://arxiv.org/abs/hep-th/9803131
    - term: holographic duality (AdS/CFT)
      meaning: A proposed exact equivalence between a gravity theory in anti-de Sitter space and a quantum theory without gravity on its boundary.
      link: /research/holographic-duality-ads-cft
    - term: general relativity
      meaning: Einstein's theory of gravity as the curvature of space and time.
      link: /research/general-relativity
    - term: anti-de Sitter space
      meaning: A spacetime with uniform negative curvature, a solution of Einstein's equations used as the stage for holographic duality.
      link: https://en.wikipedia.org/wiki/Anti-de_Sitter_space
    - term: N=4 super Yang–Mills theory
      meaning: A highly symmetric quantum theory of force-carrying fields in four dimensions, used as a testing ground for gauge theory and holography.
      link: https://en.wikipedia.org/wiki/N_%3D_4_supersymmetric_Yang%E2%80%93Mills_theory
    - term: deconfinement
      meaning: The change from a state where particles carrying the strong-force charge stay bound together to one where they move freely.
      link: https://en.wikipedia.org/wiki/Confinement_(physics)
    - term: Polyakov loop
      meaning: A quantity measuring how a charged particle's phase changes going once around the time direction; its average signals confinement or deconfinement.
      link: https://en.wikipedia.org/wiki/Polyakov_loop
    - term: Hagedorn temperature
      meaning: A temperature at which the number of available states grows so fast that ordinary matter cannot be heated further without a change of phase.
      link: https://en.wikipedia.org/wiki/Hagedorn_temperature
    - term: first-order phase transition
      meaning: An abrupt change between two distinct states, with latent heat, like water boiling.
      link: https://en.wikipedia.org/wiki/Phase_transition
    - term: continuous phase transition
      meaning: A change in which the state alters smoothly from one side to the other, like a magnet gradually losing its magnetism.
      link: https://en.wikipedia.org/wiki/Phase_transition
    - term: Landau theory
      meaning: A simple model of phase transitions that writes the energy as a polynomial in an order parameter; the sign of the quartic term separates abrupt from smooth changes.
      link: https://en.wikipedia.org/wiki/Landau_theory
    - term: effective action
      meaning: A function whose smallest value tells which state a system prefers after fast, small-scale details have been averaged out.
      link: https://en.wikipedia.org/wiki/Effective_action
  readFirst:
    - title: Anti-de Sitter space (Wikipedia)
      url: https://en.wikipedia.org/wiki/Anti-de_Sitter_space
      why: Introduces the curved spacetime in which the Hawking–Page transition happens.
    - title: Landau theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Landau_theory
      why: Shows how the sign of a quartic coefficient separates abrupt from smooth transitions.
    - title: "Witten: Anti-de Sitter Space, Thermal Phase Transition, and Confinement in Gauge Theories (1998)"
      url: https://arxiv.org/abs/hep-th/9803131
      why: Identifies the black-hole switch with deconfinement; the introduction is the readable part.
    - title: "Aharony et al.: The Hagedorn/Deconfinement Phase Transition in Weakly Coupled Large N Gauge Theories (2003)"
      url: https://arxiv.org/abs/hep-th/0310285
      why: Poses the weak-coupling question and the role of the quartic coefficient; abstract and introduction need little background.
site:
  aiReviewed: true
---

Consider $\mathcal N=4$ super Yang–Mills theory with gauge group $SU(N)$ on a three-sphere of small radius, at large $N$ and 't Hooft coupling $\lambda=g^2N\ll1$. Its confined phase turns into a deconfined phase at a temperature near the Hagedorn temperature. In the effective action for the Polyakov loop eigenvalue distribution, the quadratic coefficient vanishes at the Hagedorn temperature and the quartic coefficient $b$, which first appears at three loops, decides the order: $b<0$ gives a single first-order transition slightly below the Hagedorn temperature, and $b>0$ gives two continuous transitions. **Problem:** (1) determine the sign of $b$ at order $\lambda^2$ at large $N$; (2) establish whether the resulting phase structure persists as $\lambda$ increases, so that the weak-coupling transition is continuously connected, without a change of order, to the first-order Hawking–Page transition between thermal AdS and a large black hole at strong coupling.

# State of the art

**Open as of today.** Hawking and Page (1983) found the first-order transition at strong coupling, and Witten (1998) identified it with deconfinement. Aharony et al. (2003) reduced the weak-coupling question to the sign of $b$ and computed the analogous coefficient for pure Yang–Mills theory (hep-th/0502149, Phys. Rev. D 71, 125018, 2005), where the transition is first order, but a published value for $\mathcal N=4$ super Yang–Mills was not available. **A preprint claims** (Hexagon 2611.00175v1, 7 November 2026, credited to Claude (Anthropic), tagged "Primarily AI-generated text") that $b=-1.48\times10^{-3}\lambda^2$ according to its abstract, so the transition is first order at weak coupling, slightly below the Hagedorn temperature; the body of the paper quotes $b$ in a different normalization. The computation is stated to reproduce the two-loop Hagedorn temperature known from integrability. Stated limits: leading order in $1/N$ and order $\lambda^2$ only, no demonstration that the first-order line continues to strong coupling, and one finite counterterm, used only in the Hagedorn-temperature cross-check, has not been derived analytically. The page says an internal Claude research model, prompted by an unnamed physicist who checked it against known special cases, obtained the result, and that a separate Claude computation by a different method, not included in the paper, agrees. There is no named human author or reviewer, no code repository and no formalization, and the preprint is unrefereed. DARC found no independent expert assessment. Anthropic's release post of 9 November 2026 describes this as one of two open problems solved by Claude Fable 5.2; DARC has not checked that claim, so the problem stays OPEN.

# Applications

None practical. The question tests holography: it asks whether the weak-coupling gauge theory and the strong-coupling black-hole description are joined by a single first-order phase line, which probes how much of the gravitational picture survives where the dual is highly stringy.

# Resolution criteria

For the weak-coupling part: an independent three-loop computation of $b$ at large $N$ (by a different method or by a different group) that agrees on the sign and value, and acceptance by specialists or a refereed publication. For the full problem: in addition, either a controlled argument or numerical evidence that the first-order line persists at intermediate and strong coupling, or the identification of a point where the order changes. An unrefereed preprint, including an AI-generated one, does not by itself count as a resolution.

# Rating rationale

Difficulty 58: the weak-coupling coefficient is a finite, well-posed three-loop calculation that a preprint claims to have done, so the remaining work there is independent checking, but connecting the weak and strong coupling regimes has no known controlled method. Application value 2: no foreseeable practical use. Leverage 22: it would settle the phase structure of one gauge theory and test the weak-to-strong picture of holography, within one subfield.

# Verification

The claim is a perturbative three-loop computation with no public code or formal proof. Specialists in large-N gauge theory on S³ should reproduce the coefficient independently (a different method from the preprint's), check the normalization relating the abstract's value to the body's, and cross-check the two-loop Hagedorn temperature against the integrability result and the pure Yang–Mills value of 2005. The extension to strong coupling needs separate evidence, and a refereed publication is needed before DARC treats the weak-coupling part as settled.

# Plain explanation

Heat a pot of water and it boils at one sharp temperature: below it you have liquid, above it steam. Physicists found something similar for a hot universe with a certain curved shape, called anti-de Sitter space. Cool, it holds a thin gas of radiation. Hot, it holds a large black hole. In 1983 Stephen Hawking and Don Page showed that the switch is abrupt, like boiling.

A later idea, holographic duality, translates this black-hole story into a quantum theory with no gravity, a cousin of the theory of the strong nuclear force. In that translation, the abrupt switch is a change from a "confined" state to a "deconfined" state. The translation works best when the universe is large and gently curved.

The open question is what happens when the universe is tiny and sharply curved, where the quantum theory is easy to calculate but gravity pictures fail. There, one number decides the outcome. If it is negative, the switch is abrupt, as with boiling. If it is positive, there are two gentler changes, more like a magnet slowly losing its magnetism as it warms.

A 7 November 2026 preprint, written by an AI system and not yet checked by outside researchers, claims the number is negative. If that is right, the boiling-like switch is found at both ends. Nobody yet knows whether it holds in between.

Where the analogy breaks: here the "pot" is a mathematical space, and two very different theories describe the same switch.

# Student explanation

**The setting.** Hawking and Page (1983) found that in anti-de Sitter space (a spacetime with uniform negative curvature, a solution of general relativity) the preferred state flips with temperature. Below a critical temperature, a gas of radiation wins. Above it, a large black hole wins. The flip is abrupt (a first-order transition), like water boiling.

Holographic duality (Maldacena 1997; Witten 1998) translates this into N=4 super Yang–Mills theory, a quantum theory with no gravity on a three-sphere (the 3D surface of a 4D ball). The black-hole switch becomes the **deconfinement transition**. The theory has a coupling strength called the 't Hooft coupling, λ. Large λ matches a big, gently curved universe, where the gravity picture is reliable. The question here is small λ, which matches a tiny, highly curved universe, where the gravity picture fails but direct calculation is possible.

**The one number.** Aharony, Marsano, Minwalla, Papadodimas and Van Raamsdonk (2003) showed that for small λ the physics reduces to a single variable u, the size of the Polyakov loop. Here u = 0 means confined. The system sits where an effective action S(u) is smallest. Near the transition,

$S(u) \approx m^2 u^2 + b\,u^4$

where $m^2$ depends on temperature and b is a fixed number. Higher terms, left out here, keep S from falling forever at large u.

**Why the sign of b decides everything.** Set the slope to zero (single-variable calculus): $2m^2u + 4bu^3 = 0$, so u = 0 or $u^2 = -m^2/(2b)$.

- If b > 0: while $m^2 > 0$ the curve has one valley at u = 0. As the temperature rises, $m^2$ slides through zero and turns negative. The valley at 0 flattens and a new valley at $u = \sqrt{-m^2/2b}$ grows smoothly from zero. The minimum slides continuously: a continuous transition (two of them, in the full story).
- If b < 0: the quartic term bends the curve down at moderate u. A second valley appears at finite u while $m^2$ is still positive. When it drops below the valley at u = 0, the minimum jumps from one location to another: a first-order transition, slightly before $m^2$ reaches zero. At zero coupling that point is the Hagedorn temperature, where the number of available states grows explosively.

So b < 0 gives a boiling-like jump, as at strong coupling; b > 0 gives two gentle changes.

**What is known.** b first appears at three loops, a very laborious calculation. The same authors did it for pure Yang–Mills in 2005 (first order). The N=4 value was never published. A 7 November 2026 Hexagon preprint (AI-generated, no named human author) claims b = −1.48×10⁻³ λ², hence first order. It is unrefereed and unreproduced.

**What nobody knows.** Whether that claim is right, and whether the first-order line continues unbroken from weak to strong coupling. The preprint works at order λ² and leading order in 1/N, so it does not settle the second point.
