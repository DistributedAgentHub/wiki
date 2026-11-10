---
type: entry
slug: holographic-duality-ads-cft
title: Holographic duality (AdS/CFT)
field: physics
kind: THEORY
status: ACTIVE
summary: A conjectured exact equivalence between quantum gravity in anti-de Sitter space and a conformal field theory on its boundary; black holes correspond to thermal states, and bootstrap bounds constrain gravity.
reliedOn: Most modern work on black-hole thermodynamics, quantum gravity in anti-de Sitter space and strongly coupled gauge theories uses the dictionary, and the conformal bootstrap results discussed here are read as bounds on 3D gravity through it.
dependsOn:
  - general-relativity
references:
  - title: "Maldacena: The Large N Limit of Superconformal Field Theories and Supergravity (Adv. Theor. Math. Phys. 2, 1998)"
    url: https://arxiv.org/abs/hep-th/9711200
    kind: paper
  - title: "Witten: Anti De Sitter Space And Holography (Adv. Theor. Math. Phys. 2, 1998)"
    url: https://arxiv.org/abs/hep-th/9802150
    kind: paper
  - title: "Witten: Anti-de Sitter Space, Thermal Phase Transition, And Confinement In Gauge Theories (Adv. Theor. Math. Phys. 2, 1998)"
    url: https://arxiv.org/abs/hep-th/9803131
    kind: paper
  - title: "Aharony, Gubser, Maldacena, Ooguri, Oz: Large N Field Theories, String Theory and Gravity (Phys. Rept. 323, 2000)"
    url: https://arxiv.org/abs/hep-th/9905111
    kind: paper
  - title: "Hellerman: A Universal Inequality for CFT and Quantum Gravity (JHEP 1108:130, 2011)"
    url: https://arxiv.org/abs/0902.2790
    kind: paper
timeline:
  - date: 1997-11-27
    title: Maldacena proposes the AdS/CFT correspondence
    body: Maldacena conjectured that type IIB string theory on AdS5 x S5 is equivalent to N=4 super Yang–Mills theory at large N, the first precise example of holographic duality.
    source: https://arxiv.org/abs/hep-th/9711200
  - date: 1998-02-20
    title: Witten gives the dictionary between bulk and boundary
    body: Witten's papers of February and March 1998 formulated the correspondence in terms of partition functions and identified the Hawking–Page transition with deconfinement of the gauge theory.
    source: https://arxiv.org/abs/hep-th/9802150
  - date: 2003-10-31
    title: Weak-coupling Hagedorn/deconfinement transition analysed
    body: Aharony, Marsano, Minwalla, Papadodimas and Van Raamsdonk showed that the order of the transition of weakly coupled large-N gauge theories on a small sphere depends on the sign of a quartic Polyakov-loop coefficient.
    source: https://arxiv.org/abs/hep-th/0310285
  - date: 2009-02-17
    title: Hellerman bounds the lightest primary of a 2D CFT
    body: Hellerman used modular invariance to show a 2D CFT at large central charge has a non-vacuum primary of dimension at most about c/6, a universal inequality with an interpretation in 3D quantum gravity.
    source: https://arxiv.org/abs/0902.2790
  - date: 2019-05-03
    title: Hartman, Mazáč and Rastelli prove a gap bound of about c/8.503
    body: Using analytic functionals related to sphere packing, they proved that 2D CFTs at large central charge have a non-vacuum primary of dimension at most roughly c/8.503.
    source: https://arxiv.org/abs/1905.01319
  - date: 2026-11-07
    title: Two AI-generated preprints on Hexagon claim results in this area (unrefereed)
    body: Hexagon preprints 2611.00175 and 2611.00174, both credited to Claude (Anthropic) and described as primarily AI-generated text, claim the sign of a three-loop coefficient for N=4 super Yang–Mills and the exact asymptotic slope of the spinless modular bootstrap. Neither is refereed.
    source: https://www.anthropic.com/claude-fable-and-mythos-5-2
explainer:
  oneLine: A conjecture that quantum gravity in one kind of curved universe equals an ordinary quantum theory on its edge.
  flow:
    - Gravity inside anti-de Sitter space
    - Equals quantum theory on its boundary
    - Dictionary maps gravity questions to field-theory ones
    - Black hole equals hot plasma
    - Hard strong-coupling problems become geometry
  glossary:
    - term: anti-de Sitter (AdS) space
      meaning: A spacetime with constant negative curvature and a boundary at infinity; the 'bowl' on the gravity side of the duality.
      link: https://en.wikipedia.org/wiki/Anti-de_Sitter_space
    - term: conformal field theory (CFT)
      meaning: A quantum field theory with no preferred length scale; it looks the same when zoomed in or out. It lives on the boundary of AdS.
      link: https://en.wikipedia.org/wiki/Conformal_field_theory
    - term: general relativity
      meaning: Einstein's theory of gravity as curved spacetime; the classical gravity that appears at large N.
      link: /research/general-relativity
    - term: N=4 super Yang–Mills
      meaning: A highly symmetric four-dimensional quantum force theory, related to the strong force, that is the boundary partner of string theory on AdS5 × S5.
      link: https://en.wikipedia.org/wiki/N_%3D_4_supersymmetric_Yang%E2%80%93Mills_theory
    - term: large N limit
      meaning: Letting the number of colours N grow large, so that quantum corrections shrink like powers of 1/N and a simpler classical description emerges.
      link: https://en.wikipedia.org/wiki/1/N_expansion
    - term: string theory
      meaning: A proposed theory of quantum gravity in which particles are tiny vibrating strings; the gravity side of the best-known duality is a string theory.
      link: https://en.wikipedia.org/wiki/String_theory
    - term: holographic principle
      meaning: The idea that all the information in a region of space can be encoded on its lower-dimensional boundary; AdS/CFT is its main example.
      link: https://en.wikipedia.org/wiki/Holographic_principle
    - term: Bekenstein–Hawking entropy
      meaning: The entropy of a black hole, equal to its horizon area divided by 4G in natural units. It counts hidden microscopic states.
      link: https://en.wikipedia.org/wiki/Black_hole_thermodynamics
    - term: Hawking–Page transition
      meaning: A change at a critical temperature in which a black hole, rather than hot empty AdS space, becomes the preferred state.
      link: https://en.wikipedia.org/wiki/Hawking%E2%80%93Page_phase_transition
    - term: deconfinement
      meaning: The change from colour charges bound in colourless clumps to moving freely as a plasma; the field-theory partner of the Hawking–Page transition.
      link: https://en.wikipedia.org/wiki/Color_confinement
    - term: central charge
      meaning: A number that counts the kinds of excitations in a two-dimensional CFT; in AdS3 it measures the AdS radius in Planck units.
      link: https://en.wikipedia.org/wiki/Central_charge
    - term: modular invariance
      meaning: A symmetry of a two-dimensional CFT's thermal behaviour; it restricts the allowed energies and underlies the modular bootstrap.
      link: https://en.wikipedia.org/wiki/Modular_invariance
  readFirst:
    - title: Gravity Seems Holographic. What Does That Mean for Reality? (Quanta Magazine)
      url: https://www.quantamagazine.org/gravity-seems-holographic-what-does-that-mean-for-reality-20260925/
      why: A recent, readable tour of holography, black-hole entropy and AdS/CFT, including the debate over what is fundamental.
    - title: AdS/CFT correspondence (Wikipedia)
      url: https://en.wikipedia.org/wiki/AdS/CFT_correspondence
      why: A broad overview of the duality, its dictionary and its main examples.
    - title: Hawking–Page transition (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hawking%E2%80%93Page_phase_transition
      why: Explains the black-hole-versus-hot-AdS switch and why it matters for the duality.
    - title: "Maldacena: TASI 2003 Lectures on AdS/CFT"
      url: https://arxiv.org/abs/hep-th/0309246
      why: A short primer by the originator, for readers ready to move past popular articles.
raw:
  body: "## What the duality says\n\nThe AdS/CFT correspondence (Maldacena, 1997) is a conjectured exact equivalence between two theories. On one side is a quantum theory of gravity in a $(d+1)$-dimensional anti-de Sitter (AdS) spacetime, a negatively curved universe with a boundary at infinity; the original example is type IIB string theory on $\\mathrm{AdS}_5\\times S^5$. On the other is a quantum field theory without gravity living on that boundary, a conformal field theory (CFT) in $d$ dimensions; in the original example it is $\\mathcal N=4$ super Yang–Mills theory with gauge group $SU(N)$. Witten (1998) and Gubser, Klebanov and Polyakov gave the precise rule: the gravitational partition function with given boundary data equals the generating function of CFT correlators.\n\n## The dictionary\n\nThe parameters map onto each other. The rank $N$ of the gauge group controls quantum corrections in the gravity theory ($G_N\\sim 1/N^2$), so large $N$ means weak quantum gravity. The 't Hooft coupling $\\lambda=g^2N$ sets the curvature radius in string units, so strong coupling $\\lambda\\gg1$ corresponds to a weakly curved spacetime where classical gravity applies, while weak coupling is a highly stringy regime. In two dimensions the CFT has a central charge $c$, and for 3D gravity $c=3\\ell/2G_N$ (Brown–Henneaux), so large $c$ again means weak quantum gravity. Thermal states of the CFT correspond to black holes: the CFT at temperature $T$ on a sphere is dual to either thermal AdS (a gas of particles) or an AdS black hole, whichever has lower free energy. A 2D CFT state with dimension $\\Delta$ above the vacuum becomes a BTZ black hole once $\\Delta>c/12$.\n\n## Hawking–Page and deconfinement\n\nHawking and Page (1983) found that thermal AdS and an AdS black hole exchange dominance at a critical temperature, a first-order transition. Witten (1998) identified it with the confinement/deconfinement transition of the gauge theory on a sphere. At zero coupling the gauge theory on a small sphere has a transition at its Hagedorn temperature, and at weak coupling Aharony, Marsano, Minwalla, Papadodimas and Van Raamsdonk (2003) showed that the order of the transition is decided by the sign of a quartic coefficient in the effective action of the Polyakov loop. Whether the first-order line seen in gravity continues unbroken to weak coupling is a question about a large-$N$ gauge theory, not about gravity, and it tests the correspondence at the point where the two descriptions are hardest to compare.\n\n## The bootstrap as a constraint on gravity\n\nBecause a 3D quantum gravity with a CFT dual must have a modular-invariant torus partition function, modular invariance gives constraints that hold for any such theory. Hellerman (2009) showed that this forces a non-vacuum primary of dimension at most about $c/6$ at large $c$, and linear-functional methods have since improved the constant. The lightest primary is the lightest non-vacuum state in the gravity theory, so the bound says how heavy a gravity theory's lightest excitation can be. A gap that reached $c/12$ would put the lightest state at the black-hole threshold.\n\n## Rigorous versus conjectural\n\nThe correspondence itself is a conjecture with a very large body of consistency checks (integrability computations, supersymmetric localization, the conformal bootstrap) and no proof. The dictionary holds in specific, well-tested examples; it is not established for generic gravity theories. The modular bootstrap bounds are rigorous theorems about 2D CFTs once a functional is proved to have the needed positivity, and only their interpretation as statements about gravity depends on the conjecture. Two 2026 results claimed in this area are credited to an AI system and are, as of November 2026, unrefereed preprints.\n"
  student: "**The puzzle.** General relativity (gravity as curved spacetime) and quantum mechanics do not yet combine into one theory. Holographic duality, also called AdS/CFT, was proposed by Juan Maldacena in 1997 (arXiv hep-th/9711200). It is a precise case where they do, in a universe that is not ours.\n\n**Two descriptions of one thing.** Anti-de Sitter (AdS) space is a spacetime with constant negative curvature and a boundary at infinity, which light reaches in finite time. The conjecture says a quantum gravity theory inside AdS is *exactly* equivalent to a conformal field theory (CFT) on that boundary, one dimension lower. A CFT is a quantum field theory with no preferred length scale and no gravity. The best-known pair is type IIB string theory on AdS5 × S5 and N=4 super Yang–Mills theory with gauge group SU(N), a relative of the theory of the strong nuclear force. N counts how many \"colours\" the force carriers have.\n\n**The dictionary.**\n- *Large N is classical gravity.* Quantum corrections on the gravity side shrink as N grows, so the gravity there behaves classically.\n- *Strong coupling is a large, gently curved universe.* The 't Hooft coupling λ (the interaction strength times N) measures how strongly the field theory interacts. When λ is large, the AdS radius is much bigger than the string length, so ordinary geometry works well. When λ is small, the universe is tiny and highly curved. Hard strong-coupling calculations become geometry.\n- *A black hole is a hot plasma.* A black hole in AdS has entropy $S = A/4G$ (natural units): the horizon area A divided by four times Newton's constant G. Entropy grows with area, not volume. The same number is the entropy of a hot plasma in the field theory.\n- *The Hawking–Page transition is deconfinement.* In AdS at low temperature, hot empty space is the preferred state. Above a critical temperature $T_c \\sim 1/R$ (R is the AdS radius), a black hole is preferred (Hawking and Page, 1983). Witten (1998) matched this to the deconfinement transition: below $T_c$ the colour charges are bound into colourless clumps; above it they move freely as a plasma.\n- *Two-dimensional CFTs and 3D gravity.* The central charge c, a number counting the CFT's kinds of excitations, is proportional to R in Planck units. Modular invariance (a symmetry of the CFT's thermal behaviour) restricts which energies are allowed. The modular bootstrap (Hellerman, 2009) turns this into bounds, which become statements about gravity.\n\n**How firm is it?** It is a conjecture, not a theorem. A very large body of checks supports it, but there is no general proof. Our universe is not anti-de Sitter, so the duality is a theoretical laboratory for quantum gravity and for strongly coupled systems. On 7 Nov 2026 two unrefereed, AI-generated preprints from Anthropic claimed results on two such questions (the order of the transition at weak coupling; the exact limit of the spinless modular bootstrap). They have not been independently checked."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Gravity and quantum physics do not yet fit into one theory. Holographic duality is a worked example where they do, though only in an imaginary universe. In 1997 Juan Maldacena proposed that a universe with gravity, shaped like the inside of a bowl, is exactly equivalent to a quantum theory without any gravity that lives on the bowl's surface, one dimension lower.

Think of a hologram. A flat plate carries a pattern, and when light hits it, you see a three-dimensional object. Everything about the object is stored in the flat pattern. Here, the flat plate is an ordinary quantum theory of particles and forces, and the three-dimensional object is a universe with gravity, black holes included.

The two sides are a translation, not a copy. A hard question about one side becomes an easier question about the other. A black hole in the bowl matches a hot soup of particles on the surface. When the soup is strongly interacting and very hard to calculate, the matching universe is large and gently curved, which is easy to calculate.

Where the analogy breaks: a real hologram only stores a picture, while this duality is claimed to match every detail of the physics. Also, nobody has proved it. It passes a very large number of checks, but it is a conjecture. And our universe is not shaped like the bowl, so it is used as a laboratory for ideas about quantum gravity, not as a description of our own world.
