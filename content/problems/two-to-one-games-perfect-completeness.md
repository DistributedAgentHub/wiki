---
type: problem
slug: two-to-one-games-perfect-completeness
title: Khot's 2-to-1 Games Conjecture with perfect completeness
entry: pcp-hardness-of-approximation
status: OPEN
origin: Subhash Khot, 2002
ratings:
  difficulty: 70
  applicationValue: 14
  leverage: 45
verification:
  route: LEAN
sources:
  - title: "Khot: On the power of unique 2-prover 1-round games (STOC 2002)"
    url: https://doi.org/10.1145/509907.510017
  - title: "Khot, Minzer, Safra: Pseudorandom sets in Grassmann graph have near-perfect expansion (Annals of Mathematics 198, 2023)"
    url: https://doi.org/10.4007/annals.2023.198.1.1
links:
  - to: unique-games-conjecture
    kind: RELATED
    note: Both are label-cover conjectures from Khot's 2002 paper; the 2-to-2 theorem that settled one half of the picture uses the same Grassmann-graph machinery.
raw:
  stateOfArt: "Khot stated the conjecture together with the Unique Games Conjecture (STOC 2002). Khot, Minzer and Safra (Annals of Mathematics 198, 2023), completing work with Dinur and Kindler, proved the 2-to-2 Games theorem with *imperfect* completeness (value $1-\\varepsilon$ versus $\\delta$), which also gives 2-to-1 hardness with imperfect completeness. The perfect-completeness version, which controls hardness for satisfiable instances such as colouring 3-colourable graphs (Dinur–Mossel–Regev), is open in the accepted literature.\n\n**Unverified claim:** openai/math family 105 (October 2026) claims a proof, with OpenAI's own unreviewed Lean formalization. It is on the Verification board."
site:
  aiReviewed: true
---

A **2-to-1 game** is a label-cover instance on a bipartite graph in which each edge constraint is a map sending exactly two labels on one side to each label on the other. Its value is the largest fraction of constraints a labelling satisfies.

**Conjecture (perfect completeness):** for every $\delta>0$ there is an alphabet size $k=k(\delta)$ such that it is NP-hard to distinguish 2-to-1 games of value $1$ from those of value at most $\delta$.

# Applications

Hardness-of-approximation results for satisfiable instances, where imperfect-completeness reductions say nothing, such as approximate colouring. No direct practical use beyond telling algorithm designers which guarantees are impossible.

# Resolution criteria

A proof accepted by PCP experts (refereed publication or broad acceptance), or a Lean proof against a reviewed statement of the gap reduction (polynomial-time, value exactly 1 versus at most δ, 2-to-1 constraint structure).

# Rating rationale

Just beyond the 2-to-2 theorem (imperfect completeness), so slightly easier than the Unique Games Conjecture was. It gates hardness results for satisfiable instances such as approximate colouring, a smaller downstream than UGC's.

# Verification

A Lean 4 proof of the gap reduction from 3SAT, checked with Comparator against a statement file in which polynomial-time computability, the 2-to-1 constraint structure and the game value are checked definitions. A PCP expert confirms the statement is Khot's conjecture with perfect completeness.
