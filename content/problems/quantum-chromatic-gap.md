---
type: problem
slug: quantum-chromatic-gap
title: "The quantum chromatic gap: explicit, direct and quantitative forms of an unbounded gap"
entry: quantum-chromatic-number
status: OPEN
origin: Cameron, Montanaro, Newman, Severini and Winter, 2006
ratings:
  difficulty: 50
  applicationValue: 4
  leverage: 30
verification:
  route: REVIEW
sources:
  - title: Ciardo, Mottet, On the Quantum Chromatic Gap II (arXiv:2610.40571, 29 October 2026; preprint)
    url: https://arxiv.org/abs/2610.40571
  - title: Ciardo, On the Quantum Chromatic Gap (arXiv:2503.23207; SODA 2026)
    url: https://arxiv.org/abs/2503.23207
  - title: Cameron, Montanaro, Newman, Severini, Winter, On the quantum chromatic number of a graph
    url: https://arxiv.org/abs/quant-ph/0608016
  - title: Avis, Hasegawa, Kikuchi, Sasaki, A quantum protocol to win the graph colouring game on all Hadamard graphs
    url: https://arxiv.org/abs/quant-ph/0509047
  - title: Brassard, Cleve, Tapp, The cost of exactly simulating quantum entanglement with classical communication
    url: https://arxiv.org/abs/quant-ph/9901035
links:
  - to: unique-games-conjecture
    kind: RELATED
    note: The proof transfers pseudo-telepathy along reductions from d-to-1 games, Khot's companion to the Unique Games Conjecture; the unique (1-to-1) case is not covered.
timeline:
  - date: 2006-08-01
    title: Quantum chromatic number introduced
    body: Cameron et al. posed the gap question; a gap exists at 4 versus 5 (18 vertices) but not at 2.
    source: https://arxiv.org/abs/quant-ph/0608016
  - date: 2025-03-29
    title: Gap unbounded if a pseudo-telepathy d-to-1 conjecture holds
    body: Ciardo reduced the unbounded-gap question to a pseudo-telepathic strengthening of Khot's d-to-1 games conjecture.
    source: https://arxiv.org/abs/2503.23207
  - date: 2026-10-29
    title: Preprint reports an unbounded gap at quantum value 3
    body: Ciardo and Mottet report the pseudo-telepathy conjecture for every d at least 4 and so graphs with quantum chromatic number 3 and arbitrarily large chromatic number. Unrefereed; the graphs are not explicit.
    source: https://arxiv.org/abs/2610.40571
explainer:
  oneLine: How much can quantum entanglement reduce the colours needed in a colouring game, and can we build the examples explicitly?
  flow:
    - Entangled players win with fewer colours
    - Gap known to be exponential
    - 2026 preprint reports gap unbounded at three
    - Needs expert checking
    - "Open: explicit, quantitative, direct proofs"
  glossary:
    - term: chromatic number
      meaning: The fewest colours that can colour a graph's dots so that joined dots differ.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: quantum chromatic number
      meaning: The fewest colours with which entangled players always win the colouring game.
      link: /research/quantum-chromatic-number
    - term: preprint
      meaning: A paper shared publicly before expert review.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Unique Games Conjecture
      meaning: A conjecture that a certain game-like problem is hard to approximate even when it is nearly satisfiable.
      link: https://en.wikipedia.org/wiki/Unique_games_conjecture
    - term: PCP theorem
      meaning: A theorem that proofs can be checked by reading only a few random places.
      link: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
    - term: Bell's theorem
      meaning: The result that no local hidden-variable theory can reproduce quantum predictions.
      link: https://en.wikipedia.org/wiki/Bell%27s_theorem
    - term: Hilbert space
      meaning: The mathematical space whose vectors describe states of a quantum system; its dimension counts how much entanglement is available.
      link: https://en.wikipedia.org/wiki/Hilbert_space
    - term: bipartite graph
      meaning: A graph whose dots split into two groups with lines only between groups.
      link: https://en.wikipedia.org/wiki/Bipartite_graph
  readFirst:
    - title: Quantum pseudo-telepathy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy
      why: Background on games that entangled players win with certainty.
    - title: Ciardo, Mottet, On the Quantum Chromatic Gap II
      url: https://arxiv.org/abs/2610.40571
      why: The preprint; the introduction is readable without the proofs.
    - title: Ciardo, On the Quantum Chromatic Gap
      url: https://arxiv.org/abs/2503.23207
      why: The earlier paper that reduced the question to a games conjecture.
raw:
  body: "For a graph $G$ let $\\chi(G)$ be its chromatic number and $\\chi_q(G)$ its quantum chromatic number (the least $n$ for which two non-communicating players sharing entanglement win the $n$-colouring game on $G$ with certainty).\n\n**Original question** (Cameron et al. 2006; also asked by Mančinska and Roberson and by Lalonde, per Ciardo and Mottet): is there a function $f$ with $\\chi(G)\\le f(\\chi_q(G))$ for all graphs $G$?\n\nCiardo and Mottet (arXiv:2610.40571, unrefereed) report that the answer is no: for every $c$ there is a graph with $\\chi_q=3$ and $\\chi>c$. Since $\\chi_q=2$ forces a bipartite graph, the value 3 is optimal. **What this entry tracks as open** is what the preprint does not provide: (a) independent confirmation of the proof; (b) *explicit* graphs and *quantitative* bounds, namely how fast the number of vertices and the dimension of the shared entanglement must grow with $c$ (the preprint says the dimension must tend to infinity, but gives no tight bound); (c) a *direct* construction that does not pass through PCP and label-cover machinery; (d) the pseudo-telepathic $d$-to-1 conjecture for $d=2,3$, which the preprint does not cover."
  student: "**Setup.** $\\chi(G)$ is the classical chromatic number and $\\chi_q(G)$ the quantum chromatic number (see the topic page). The *gap question* of Cameron, Montanaro, Newman, Severini and Winter (2006) asks whether $\\chi(G)\\le f(\\chi_q(G))$ for some function $f$.\n\n**Known before 2026.** An exponential gap, from a strategy of Brassard, Cleve and Tapp. If the players are restricted to measurements with rank-one projectors, $\\chi$ is at most exponential in the number of colours, which suggested the exponential gap might be the best possible.\n\n**Reported in 2026.** Ciardo (SODA 2026) showed that a strong pseudo-telepathic version of Khot's $d$-to-1 games conjecture would give $\\chi_q=3$ with $\\chi$ arbitrarily large. A $d$-to-1 *label-cover game* is a two-player game where Bob's answer must be the image of Alice's answer under a map that sends $d$ answers to one. Ciardo and Mottet (arXiv:2610.40571) report proving the needed statement for every $d\\ge4$, so the gap would be unbounded. They start with the Mermin–Peres magic square (a perfect quantum strategy that no classical one matches), stretch it so related questions are far apart, use *parallel repetition* (playing many copies at once, which drives the classical winning chance down), and push the game through a chain of reductions from hardness-of-approximation theory, showing each step keeps the perfect quantum strategy.\n\n**What is still open.** (1) Expert checking; the preprint is unrefereed. (2) Explicit graphs and size bounds: the preprint says the entanglement dimension must grow without limit, and gives no tight bound on graph size or dimension. (3) A direct proof: the authors remark that the claim has nothing to do with efficient computation, yet their route uses complexity machinery. (4) The pseudo-telepathy $d$-to-1 conjecture for $d=2$ and $3$.\n\n**Link to computer science.** Khot's $d$-to-1 conjecture is a companion of the Unique Games Conjecture; the unique-games case is not covered."
site:
  aiReviewed: true
---

# State of the art

Status as of 2026-11-01: **the qualitative question is claimed answered by one unrefereed preprint; the remaining items are open.**

**Before 2026.** Cameron, Montanaro, Newman, Severini and Winter (2006) defined $\chi_q$, showed no gap at value 2, and showed that if the players use only rank-one projective measurements, $\chi$ is at most exponential in the number of colours. Avis, Hasegawa, Kikuchi and Sasaki (2005) gave a protocol winning on all Hadamard graphs. Per Ciardo and Mottet, the Brassard–Cleve–Tapp (1999) Deutsch–Jozsa strategy with the Frankl–Rödl theorem gives $\chi$ exponential in $\chi_q$, and no larger gap had been found since.

**Ciardo (SODA 2026, arXiv:2503.23207).** Conjectured a strong pseudo-telepathic form of Khot's $d$-to-1 games conjecture (perfect finite-dimensional quantum strategy with large measurement contexts, classical value below any $\varepsilon$) and proved that it implies graphs with $\chi_q=3$ and arbitrarily large $\chi$.

**Ciardo and Mottet (arXiv:2610.40571, 29 October 2026).** Report proving the conjecture for every $d\ge4$ and hence an unbounded gap. The proof stretches the Mermin–Peres magic square, applies parallel repetition, converts the result into a pseudo-telepathic multi-layered Kneser hypergraph with the Dinur–Guruswami–Khot–Regev PCP construction, and feeds it to the Fei–Minzer–Wang reduction to 4-to-1 games, for which they establish quantum completeness. They state that the graphs are not given explicitly, that the entanglement dimension must tend to infinity with $c$, and that, by a result of Banakh, Ciardo, Kozik and Tułowiecki quoted in the preprint, a fixed dimension bounds $\chi$ in terms of it. They also note that the statement is of a kind one would expect to have a direct proof, yet the only known route is through hardness-of-approximation reductions. The preprint's acknowledgements say Claude Opus 5.5 helped with the technical machinery and proofreading, with the authors taking responsibility for correctness. No refereed version, independent check or formal verification was found as of 2026-11-01.

# Applications

None foreseeable. The problem is about the power of entanglement in a mathematical game, not about a device. Methodologically, it shows hardness-of-approximation reductions transferring pseudo-telepathy, which may help study other nonlocal games.

# Resolution criteria

For (a), expert acceptance of the preprint or a refereed version. For (b) to (d), an explicit family of graphs with $\chi_q=3$ and unbounded $\chi$ with proved size and dimension bounds, a proof of the unbounded gap that avoids PCP machinery, or the pseudo-telepathic conjecture for $d=2,3$, each accepted by experts.

# Rating rationale

Difficulty: the qualitative question is claimed answered by a preprint awaiting checking; the explicit, quantitative and direct forms are open with no known approach. Application value: no foreseeable practical use. Leverage: reshapes one subfield (nonlocal games and quantum CSP) and ties it to hardness of approximation.

# Verification

Expert refereeing of the proof chain: the stretched magic square, parallel repetition, the multi-layered Kneser hypergraph construction, quantum completeness and context-radius preservation of the Fei–Minzer–Wang reduction, and the d-to-1 conversion, plus the implication from Ciardo's SODA paper. Small checks (the magic-square strategy and the stretched wires) can be run numerically but do not test the asymptotic argument.

# Plain explanation

In the colouring game, two separated players use shared quantum particles to claim a map needs fewer colours than it really does. The question is how big the difference can be.

The old question was whether the true number of colours is always limited by some formula in terms of the quantum number. Until this year, the best known examples showed the true number can be exponentially bigger. A preprint posted in October 2026 by Lorenzo Ciardo and Antoine Mottet reports that there is no limit: the quantum players need only three colours while the true number can be as large as you like. Three is the best possible, because two colours means the map has a simple two-sided structure that classical players handle too.

This claim has not been refereed. Even if it is right, a lot is open. The authors do not give the maps explicitly, their proof borrows heavy machinery built to show certain problems are hard for computers, and the amount of entanglement it needs is not pinned down. Whether a simpler, direct proof exists is also unknown.
