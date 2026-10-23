---
type: problem
slug: sidorenko-conjecture
title: "Sidorenko's conjecture: every bipartite graph has at least its random density of copies"
entry: extremal-combinatorics
status: OPEN
origin: Erdős–Simonovits (1980s); Sidorenko (1993)
ratings:
  difficulty: 62
  applicationValue: 8
  leverage: 45
verification:
  route: LEAN
sources:
  - title: "Conlon, Fox, Sudakov: An approximate version of Sidorenko's conjecture (arXiv:1004.4236)"
    url: https://arxiv.org/abs/1004.4236
  - title: "Conlon, Kim, Lee, Lee: Some advances on Sidorenko's conjecture (arXiv:1510.06533)"
    url: https://arxiv.org/abs/1510.06533
site:
  aiReviewed: true
---

For graphs $H$ and $G$, let $t(H,G)$ be the probability that a uniformly random map $V(H)\to V(G)$ sends every edge of $H$ to an edge of $G$.

**Conjecture:** for every bipartite graph $H$ and every graph $G$, $t(H,G)\ge t(K_2,G)^{e(H)}$: a graph of given edge density contains at least as many copies of $H$ as a random graph of that density.

# State of the art

Known for trees, even cycles, complete bipartite graphs, hypercubes, bipartite graphs with a vertex joined to every vertex of the other side (Conlon, Fox and Sudakov, arXiv:1004.4236), and further families built by gluing and tensor-type operations (Conlon, Kim, Lee and Lee, arXiv:1510.06533, and later work). The smallest open case usually cited is $K_{5,5}$ minus a Hamiltonian cycle. The related forcing conjecture (Skokan–Thoma) asks that some such $H$ forces quasirandomness.

**Unverified claim:** openai/math family 161 (October 2026) claims a counterexample, a connected bipartite graph with 35 vertices and 66 edges, which would also disprove the forcing conjecture. It comes with OpenAI's own unreviewed Lean formalization and is on the Verification board.

# Applications

None directly; Sidorenko-type inequalities are used in extremal combinatorics, quasirandomness and the analysis of graph limits.

# Resolution criteria

A counterexample with an independently checked witness graph and density computation, accepted by experts or verified in Lean; or a proof for all bipartite graphs.

# Rating rationale

Central in extremal graph theory with many partial families proved; a counterexample would be a finite checkable object. Leverage covers graph limits and quasirandomness.

# Verification

For a counterexample: the explicit bipartite graph H and host graph G, with t(H,G) < t(K₂,G)^e(H) checked by exact rational arithmetic in an independent program and proved in Lean with homomorphism density as a checked definition.
