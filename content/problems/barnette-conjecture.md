---
type: problem
slug: barnette-conjecture
title: "Barnette's conjecture: every cubic bipartite planar 3-connected graph is Hamiltonian"
entry: graph-minors-structure
status: OPEN
origin: David Barnette, 1969
ratings:
  difficulty: 52
  applicationValue: 6
  leverage: 18
verification:
  route: LEAN
sources:
  - title: "Holton, Manvel, McKay: Hamiltonian cycles in cubic 3-connected bipartite planar graphs (J. Combin. Theory Ser. B 38, 1985)"
    url: https://doi.org/10.1016/0095-8956(85)90072-3
  - title: "Alt, Payne, Schmidt, Wood: Thoughts on Barnette's conjecture (arXiv:1312.3783)"
    url: https://arxiv.org/abs/1312.3783
site:
  aiReviewed: true
---

**Conjecture:** every finite simple graph that is cubic (3-regular), bipartite, planar and 3-vertex-connected has a Hamiltonian cycle.

# State of the art

Each hypothesis is needed: Tutte (1946) found non-Hamiltonian cubic planar 3-connected graphs, and Horton found non-Hamiltonian cubic bipartite 3-connected graphs that are not planar. Holton, Manvel and McKay (J. Combin. Theory Ser. B, 1985) verified the conjecture by computer for graphs with up to 64 vertices, and later searches went further; it is known for several subclasses. Alt, Payne, Schmidt and Wood (arXiv:1312.3783) survey reformulations and approaches. The general conjecture is open in the accepted literature.

**Unverified claim:** openai/math family 180 (October 2026) claims a proof, with OpenAI's own unreviewed Lean formalization. It is on the Verification board.

# Applications

None directly; Hamiltonicity of planar cubic graphs is a classic structural question with links to graph colouring.

# Resolution criteria

A proof accepted by graph theorists (refereed publication or broad acceptance), or a Lean proof against a reviewed statement in which planarity and 3-connectivity are checked definitions.

# Rating rationale

A classic Hamiltonicity conjecture verified for small graphs; research-grade, with consequences limited to structural graph theory.

# Verification

A Lean 4 proof for all finite simple cubic bipartite planar 3-connected graphs, checked with Comparator. Planarity is the hard definition to state formally: experts must confirm the formal notion is the usual combinatorial one.
