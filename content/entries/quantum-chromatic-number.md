---
type: entry
slug: quantum-chromatic-number
title: Quantum chromatic number and pseudo-telepathy colouring games
field: quantum-complexity
kind: THEORY
status: ACTIVE
summary: In the colouring game two entangled players try to convince a verifier that a graph is n-colourable; the least n that works is the quantum chromatic number, and it can be far below the classical one.
reliedOn: It is the cleanest setting for asking how much stronger entangled players are than classical ones, and it links Bell-type nonlocality to graph theory and to the reductions of hardness-of-approximation theory.
dependsOn:
  - pcp-hardness-of-approximation
references:
  - title: Cameron, Montanaro, Newman, Severini, Winter, On the quantum chromatic number of a graph (EJC 2007)
    url: https://arxiv.org/abs/quant-ph/0608016
    kind: paper
  - title: Avis, Hasegawa, Kikuchi, Sasaki, A quantum protocol to win the graph colouring game on all Hadamard graphs
    url: https://arxiv.org/abs/quant-ph/0509047
    kind: paper
  - title: Brassard, Cleve, Tapp, The cost of exactly simulating quantum entanglement with classical communication (PRL 1999)
    url: https://arxiv.org/abs/quant-ph/9901035
    kind: paper
  - title: Ciardo, On the Quantum Chromatic Gap (SODA 2026)
    url: https://arxiv.org/abs/2503.23207
    kind: paper
  - title: Ciardo, Mottet, On the Quantum Chromatic Gap II (preprint, 2026)
    url: https://arxiv.org/abs/2610.40571
    kind: paper
timeline:
  - date: 1999-01-15
    title: Entanglement-simulation lower bound
    body: Brassard, Cleve and Tapp showed that exactly simulating n Bell pairs classically needs communication growing exponentially in n. Ciardo and Mottet credit this paper with the first graphs where the classical chromatic number is exponential in the quantum one.
    source: https://arxiv.org/abs/quant-ph/9901035
  - date: 2006-08-01
    title: Quantum chromatic number defined
    body: Cameron, Montanaro, Newman, Severini and Winter defined the quantum chromatic number, proved no gap exists at value 2, and gave an 18-vertex graph with chromatic number 5 and quantum chromatic number 4.
    source: https://arxiv.org/abs/quant-ph/0608016
  - date: 2025-03-29
    title: Conditional unbounded gap
    body: Ciardo proposed a pseudo-telepathic version of Khot's d-to-1 games conjecture and showed it would give graphs with quantum chromatic number 3 and arbitrarily large chromatic number.
    source: https://arxiv.org/abs/2503.23207
  - date: 2026-10-29
    title: Preprint reports the conjecture for d at least 4
    body: Ciardo and Mottet report proving the pseudo-telepathy d-to-1 conjecture for every d at least 4, hence an unconditional unbounded gap. The preprint is unrefereed.
    source: https://arxiv.org/abs/2610.40571
explainer:
  oneLine: A game where two far-apart players, helped by quantum entanglement, prove a map can be coloured with fewer colours than is possible.
  flow:
    - Entangled players share no messages
    - They win colouring games with fewer colours
    - Quantum number never exceeds classical number
    - "Old best gap: exponential"
    - "2026 preprint: unbounded at three colours"
  glossary:
    - term: chromatic number
      meaning: The fewest colours that can colour a graph's dots so that joined dots differ.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: quantum pseudo-telepathy
      meaning: Winning a game with certainty using shared entanglement where no classical strategy can.
      link: https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy
    - term: entanglement
      meaning: A quantum link between particles whose measurement results are correlated beyond classical explanation.
      link: https://en.wikipedia.org/wiki/Quantum_entanglement
    - term: Bell's theorem
      meaning: The result that no local hidden-variable theory can reproduce quantum predictions.
      link: https://en.wikipedia.org/wiki/Bell%27s_theorem
    - term: bipartite graph
      meaning: A graph whose dots split into two groups with lines only between groups; exactly the two-colourable graphs.
      link: https://en.wikipedia.org/wiki/Bipartite_graph
    - term: Unique Games Conjecture
      meaning: A conjecture that a certain game-like problem is hard to approximate even when it is nearly satisfiable.
      link: https://en.wikipedia.org/wiki/Unique_games_conjecture
    - term: PCP theorem
      meaning: A theorem that proofs can be checked by reading only a few random places.
      link: https://en.wikipedia.org/wiki/Probabilistically_checkable_proof
    - term: hypergraph
      meaning: A graph whose lines may join more than two dots.
      link: https://en.wikipedia.org/wiki/Hypergraph
    - term: Kochen–Specker theorem
      meaning: A result that quantum measurement outcomes cannot all be fixed in advance independent of context.
      link: https://en.wikipedia.org/wiki/Kochen%E2%80%93Specker_theorem
    - term: Deutsch–Jozsa algorithm
      meaning: An early quantum algorithm that beats every exact classical method on a toy problem.
      link: https://en.wikipedia.org/wiki/Deutsch%E2%80%93Jozsa_algorithm
    - term: Hadamard matrix
      meaning: A square grid of +1 and -1 entries whose rows are mutually orthogonal; it underlies the Hadamard graphs.
      link: https://en.wikipedia.org/wiki/Hadamard_matrix
  readFirst:
    - title: Quantum pseudo-telepathy (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy
      why: Gentle introduction to games that entangled players win and classical players cannot, including the magic square.
    - title: Graph coloring (Wikipedia)
      url: https://en.wikipedia.org/wiki/Graph_coloring
      why: Chromatic number and why colouring is hard.
    - title: Cameron et al., On the quantum chromatic number of a graph
      url: https://arxiv.org/abs/quant-ph/0608016
      why: The paper that defined the quantity; readable for a first-year student with some graph theory.
raw:
  student: "**Chromatic number.** The chromatic number $\\chi(G)$ of a graph (dots joined by lines) is the fewest colours needed so that joined dots get different colours.\n\n**The game.** A referee picks two dots $u$ and $v$ (sometimes the same dot, sometimes neighbours) and sends one to each of two players, Alice and Bob, who cannot communicate. Each answers with a colour. They win if the colours are equal when $u=v$ and different when $u,v$ are adjacent. A strategy using only shared random numbers can win every round exactly when the graph has a proper colouring with that many colours.\n\n**Entanglement.** Two particles can be prepared so that measuring them gives results that are random individually but correlated, in ways no shared random numbers can copy (Bell's theorem). A *measurement* on a quantum system is described by a set of matrices called projectors, one for each possible outcome. Alice and Bob choose which measurement to do from their dot and answer with the outcome. Sometimes this wins every round on graphs that need more colours classically. The smallest number of colours for which this works is the **quantum chromatic number** $\\chi_q(G)$, and always $\\chi_q(G)\\le\\chi(G)$.\n\n**The gap question.** Is $\\chi(G)$ at most some function of $\\chi_q(G)$? The first example of a gap came from a Deutsch–Jozsa-based quantum strategy of Brassard, Cleve and Tapp; combined with a combinatorial theorem it gives $\\chi$ exponential in $\\chi_q$. Nobody found a larger gap for over twenty years. A graph with $\\chi_q=2$ is bipartite, so no gap occurs there.\n\n**What is new.** Ciardo (2025) linked the question to *label-cover* games from hardness-of-approximation theory, and Ciardo and Mottet (2026 preprint) report building such games with a perfect quantum strategy but tiny classical winning chance, which would give graphs with $\\chi_q=3$ and $\\chi$ as large as desired. Their starting point is the Mermin–Peres magic square, a small game that quantum players win perfectly and classical players cannot. The preprint is unrefereed."
site:
  published: true
  aiReviewed: true
---

## The colouring game

Two players, Alice and Bob, share an entangled quantum state but cannot communicate once the game starts. A verifier gives each of them a vertex of a graph $G$, and they must each answer with one of $n$ colours. They win a round if they give the same colour when the two vertices are equal and different colours when the vertices are adjacent. Without entanglement a strategy that wins every round exists exactly when $G$ has a proper $n$-colouring, that is, when $\chi(G)\le n$. With entanglement the players may win every round even when $\chi(G)>n$; this is **quantum pseudo-telepathy** and it gives an inequality-free proof of Bell's theorem. The least $n$ for which a perfect quantum strategy exists is the **quantum chromatic number** $\chi_q(G)$, introduced by Cameron, Montanaro, Newman, Severini and Winter (arXiv quant-ph/0608016; Electron. J. Combin. 14(1), 2007). Always $\chi_q(G)\le\chi(G)$.

## Known behaviour

Cameron et al. show that there is no gap when $\chi_q=2$ (a graph with $\chi_q=2$ is bipartite), and none for 3 in a restricted quantum model, and give an 18-vertex graph with $\chi=5$ and $\chi_q=4$. Avis, Hasegawa, Kikuchi and Sasaki (arXiv quant-ph/0509047) gave a winning protocol on all Hadamard graphs, shrinking the smallest known pseudo-telepathy colouring example. According to Ciardo and Mottet (arXiv:2610.40571), the Deutsch–Jozsa-based strategy of Brassard, Cleve and Tapp (Phys. Rev. Lett. 83, 1874, 1999) shows $\chi_q\le n$ for the Hadamard graph on $n$-bit strings when $n$ is a power of 2, while a theorem of Frankl and Rödl gives $\chi=2^{\Omega(n)}$, so $\chi$ can be exponential in $\chi_q$. That exponential gap was the largest known for more than twenty years.

## The quantum chromatic gap

The **quantum chromatic gap** question is whether $\chi(G)$ is bounded by a function of $\chi_q(G)$. Ciardo (arXiv:2503.23207, SODA 2026) tied it to hardness of approximation: a strong pseudo-telepathic form of Khot's $d$-to-1 games conjecture would give graphs with $\chi_q=3$ and arbitrarily large $\chi$. The 2026 preprint of Ciardo and Mottet reports a proof of that form for every $d\ge4$, and hence an unbounded gap; as of 2026-11-01 it is unrefereed. See the problem page for what remains open.

## Why the reductions matter

A quantum strategy must survive each step of a chain of reductions (label cover, hypergraph colouring, $d$-to-1 games, graph colouring). The reductions are the ones developed to prove NP-hardness, and quantum completeness of each step is the technical content. The authors of the preprint note that the only route to their result known to them goes through this machinery, although the statement itself has nothing to do with computational efficiency.

# Plain explanation

Imagine a map where neighbouring countries must get different colours. Two friends are kept in separate rooms and each is asked about one country. Together they claim the map can be coloured with, say, three colours. A referee checks only that their answers agree when asked about the same country and differ for neighbours.

If the friends can only plan ahead, they win every time only if a real three-colouring exists. But if they share a pair of entangled particles, a strange link that quantum physics allows, they sometimes win every time even when no three-colouring exists. They cannot talk, and no hidden plan explains it. That is why the effect is called pseudo-telepathy: it looks like mind reading but is not.

The smallest number of colours that lets entangled friends always win is the quantum chromatic number. Researchers ask how far apart it can be from the ordinary number of colours. For more than 25 years the biggest known difference was exponential. A 2026 preprint reports that the difference can be as large as you like, even when the friends need only three colours. That claim has not yet been checked by other experts.
