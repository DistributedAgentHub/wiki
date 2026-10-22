---
type: problem
slug: hadwiger-conjecture-k7-six-colourability
title: "Hadwiger's conjecture for t = 7: are K7-minor-free graphs 6-colourable?"
entry: graph-minors-structure
status: OPEN
origin: Hugo Hadwiger, 1943
ratings:
  difficulty: 73
  applicationValue: 2.8
  leverage: 39
workMix:
  theory: 85
  engineering: 0
  compute: 15
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Dvořák, Norin, Rahman: Every graph with no K7^= minor is 6-colorable (preprint)"
    url: https://arxiv.org/abs/2609.17760
  - title: "Norin, Totschnig: Every graph with no K7^∨-minor is 6-colorable (preprint)"
    url: https://arxiv.org/abs/2507.03244
  - title: "Albar, Gonçalves: On triangles in K_r-minor free graphs"
    url: https://arxiv.org/abs/1304.5468
  - title: "Albar: Coloration of K7^−-minor free graphs"
    url: https://arxiv.org/abs/1402.2806
  - title: "Delcourt, Postle: Reducing linear Hadwiger's conjecture to coloring small graphs"
    url: https://arxiv.org/abs/2108.01633
  - title: "Liu, Luo: Beyond halfway to Hadwiger's conjecture (preprint, O(t log log log t))"
    url: https://arxiv.org/abs/2609.06867
  - title: "Norin, Steiner: A proof of the linear Hadwiger conjecture (preprint, unrefereed, AI-assisted)"
    url: https://arxiv.org/abs/2610.05291
  - title: "LinearHadwiger: Lean 4 formalization accompanying Norin–Steiner (unverified)"
    url: https://github.com/snorin239/LinearHadwiger
links:
  - to: erdos-hajnal-long-paths
    kind: RELATED
    note: Both study how excluding a fixed substructure (minor vs induced subgraph) forces structure and colourability in graph classes.
timeline:
  - date: 2013-04-19
    title: K7-minor-free graphs are 8-colourable (new proof)
    body: Albar and Gonçalves re-prove Jakobsen's 1971 bound.
    source: https://arxiv.org/abs/1304.5468
  - date: 2014-02-12
    title: "K7 minus an edge: 7-colourable (new proof)"
    body: Albar gives a new proof of Jakobsen's result for K7⁻-minor-free graphs.
    source: https://arxiv.org/abs/1402.2806
  - date: 2021-08-03
    title: O(t log log t) and reduction to small graphs
    body: Delcourt and Postle prove that K_t-minor-free graphs are O(t log log t)-colourable and reduce linear Hadwiger to graphs of order t·polylog(t).
    source: https://arxiv.org/abs/2108.01633
  - date: 2025-07-04
    title: "K7 minus two adjacent edges: 6-colourable (preprint)"
    body: Norin and Totschnig prove 6-colourability for K7^∨-minor-free graphs.
    source: https://arxiv.org/abs/2507.03244
  - date: 2026-09-06
    title: O(t log log log t) (preprint)
    body: Liu and Luo improve the Delcourt–Postle bound to O(t log log log t) (v2 of their preprint, unrefereed).
    source: https://arxiv.org/abs/2609.06867
  - date: 2026-09-15
    title: "K7 minus two disjoint edges: 6-colourable (preprint)"
    body: Dvořák, Norin and Rahman prove the K7^= case and a 4n−8 edge bound for 5-connected graphs.
    source: https://arxiv.org/abs/2609.17760
  - date: 2026-10-04
    title: Linear Hadwiger claimed (preprint, AI-assisted)
    body: Norin and Steiner claim χ ≤ C·h(G) with C ≈ 10^100, crediting GPT-6 Astra with the proof and releasing a Lean formalization. Unrefereed and not independently verified; no consequence for t = 7.
    source: https://arxiv.org/abs/2610.05291
explainer:
  oneLine: If a network cannot be squeezed down to seven mutually linked dots, can it be coloured with six colours? Unknown.
  flow:
    - Colour a network so linked dots differ
    - No K_t minor should need t-1 colours
    - True up to 6; 5 equals Four Colour Theorem
    - "First open case: seven"
  glossary:
    - term: Hadwiger's conjecture
      meaning: The conjecture that a graph with no K_t minor needs at most t-1 colours.
      link: https://en.wikipedia.org/wiki/Hadwiger_conjecture_(graph_theory)
    - term: graph minor
      meaning: A graph obtained from another by deleting vertices or edges and contracting edges.
      link: https://en.wikipedia.org/wiki/Graph_minor
    - term: Four Colour Theorem
      meaning: Any map can be coloured with four colours so that neighbouring regions have different colours.
      link: https://en.wikipedia.org/wiki/Four_color_theorem
    - term: complete graph
      meaning: A graph in which every pair of dots is joined by a line.
      link: https://en.wikipedia.org/wiki/Complete_graph
    - term: proper colouring
      meaning: Giving each dot a colour so that dots joined by a line never share one.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: Wagner's theorem
      meaning: A characterization of planar graphs by forbidden minors; it links Hadwiger's case 5 to the Four Colour Theorem.
      link: https://en.wikipedia.org/wiki/Wagner%27s_theorem
    - term: contraction
      meaning: Merging two joined dots into a single dot.
      link: https://en.wikipedia.org/wiki/Edge_contraction
    - term: chromatic number
      meaning: The smallest number of colours needed so that connected items never share a colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: preprint
      meaning: A paper posted publicly before it has been reviewed by other experts.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Graph minors and structural graph theory
      meaning: The background on minors, tree-width and colouring.
      link: /research/graph-minors-structure
  readFirst:
    - title: Hadwiger conjecture (graph theory) - Wikipedia
      url: https://en.wikipedia.org/wiki/Hadwiger_conjecture_(graph_theory)
      why: Statement and a summary of known cases.
    - title: Four color theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Four_color_theorem
      why: The famous case t = 5.
    - title: Graph minor - Wikipedia
      url: https://en.wikipedia.org/wiki/Graph_minor
      why: Explains the squeezing operation.
    - title: Graph minors and structural graph theory (research entry)
      url: /research/graph-minors-structure
      why: The surrounding theory.
site:
  aiReviewed: true
---

Hadwiger's conjecture asserts that every graph with no $K_t$ minor is $(t-1)$-colourable. It is known for $t\le 6$ ($t=5$ is equivalent to the Four Colour Theorem by Wagner's theorem, and $t=6$ was reduced to it by Robertson, Seymour and Thomas, 1993). **Problem (first open case):** prove that every graph with no $K_7$ minor is $6$-colourable. It is not even known whether $K_7$-minor-free graphs are $7$-colourable.

# State of the art

Jakobsen (1971) proved that K7-minor-free graphs are 8-colourable and that K7⁻-minor-free graphs (K7 minus an edge) are 7-colourable; these were re-proved by Albar and Gonçalves (arXiv:1304.5468; J. Graph Theory 2018) and Albar (arXiv:1402.2806). It is still not known whether K7-minor-free graphs are even 7-colourable, as Dvořák, Norin and Rahman state explicitly. Two recent preprints settle the target statement for K7 with two edges deleted: Norin and Totschnig (arXiv:2507.03244, July 2025) show every graph with no K7^∨ minor (two deleted edges sharing an endpoint) is 6-colourable, and Dvořák, Norin and Rahman (arXiv:2609.17760, September 2026) do the same for K7^= (two disjoint deleted edges), together with an edge bound of 4n−8 for 5-connected K7^=-minor-free graphs; both are unrefereed. For general t, Delcourt and Postle (arXiv:2108.01633) proved χ = O(t log log t) and reduced the linear bound to graphs on at most about t·(log t)^5 vertices; Liu and Luo (arXiv:2609.06867, September 2026, unrefereed) improved this to O(t log log log t). **Unverified claim (general t only).** Norin and Steiner (arXiv:2610.05291, 4 October 2026, unrefereed) claim the linear Hadwiger conjecture: an absolute constant C with χ(G) ≤ C·h(G) for every graph. The paper states that the proof was found by an OpenAI model (GPT-6 Astra) following the authors' directions, that the human authors wrote the exposition and take responsibility for correctness, and that a Lean 4 formalization of the full proof and its external inputs (Delcourt–Postle reduction, Reed–Seymour fractional bound) was produced with OpenAI Codex and is public. The argument combines a (4+ε)t bound for graphs of order at most t(log t)^{1/2−ε} with a bootstrap that raises the admissible order exponent, then invokes the Delcourt–Postle reduction. The authors estimate C ≈ 10^100, so even if correct the result says nothing about t = 7; no independent check of the paper or the Lean build was found as of 16 October 2026 (see the Verification board). The K7 case remains open.

# Applications

None practical. Hadwiger's conjecture is the central problem in structural graph colouring, and its methods (density of minor-free graphs, contraction-critical graphs) feed graph minor theory.

# Resolution criteria

A refereed proof that every K7-minor-free graph is 6-colourable, or a K7-minor-free graph with chromatic number at least 7.

# Rating rationale

Difficulty 73: t = 6 needed the Four Colour Theorem, and for t = 7 even 7-colourability has been open since Jakobsen's 8-colour bound of 1971; the 2025–26 two-edge-deleted cases show the density method advancing, but the full K7 case needs new structure. That places it above restriction in ℝ³ (72) and Erdős–Hajnal paths (69), below diagonal Ramsey (78). Application value 2.8: none. Leverage 39: the first open case of the central conjecture of graph colouring, just above Erdős–Hajnal paths (38).

# Work mix rationale

Needs new structural and density theorems for minor-free graphs; computation assists with discharging-style case checks.

# Verification

The statement is that every K7-minor-free graph is 6-colourable. Neither Mathlib nor Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)) defines graph minors or states Hadwiger's conjecture, so the statement cannot be written without new definitions, and a proof is expected to be long and computer-assisted. A counterexample graph with chromatic number at least 7 could be verified by checking minor-freeness and non-6-colourability, which is hard but finite. Referees check any proof.

# Plain explanation

Colouring a map so that neighbouring countries differ is a classic puzzle. The Four Colour Theorem says four colours always suffice. More generally you can colour any network of dots and lines so that dots joined by a line get different colours, and ask how many colours are needed.

Hadwiger's conjecture ties colouring to a structural property. A network contains a certain smaller network as a minor if you can get it by deleting some parts and squeezing connected clumps of dots into single dots. The conjecture says: if a network contains no clump-squeeze that yields t dots all linked to each other, then t minus one colours are enough.

For t equal to four, five and six, the conjecture is known, and the case of five is the same as the Four Colour Theorem. The first unknown case is seven: if a network cannot be squeezed to seven mutually linked dots, is it six-colourable?

It is not even known whether such networks can be coloured with seven colours. What is known is that eight colours suffice.

Two recent preprints, not yet refereed, show that six colours are enough for networks that avoid certain slightly smaller relatives of the seven-dot configuration, namely the seven-dot configuration with two links removed. This is progress toward the full case, but the full seven-dot case remains out of reach.

The map picture helps with intuition, but general networks can be wilder than maps.

# Student explanation

**Statement.** **Hadwiger's conjecture** (1943) asserts that every graph with no $K_t$ minor is $(t-1)$-colourable. A graph $H$ is a _minor_ of $G$ if $H$ can be obtained from a subgraph of $G$ by contracting edges, and $K_t$ is the complete graph on $t$ vertices. It is known for $t\le6$: $t=5$ is equivalent to the **Four Colour Theorem** by Wagner's theorem, and $t=6$ was reduced to the Four Colour Theorem by Robertson, Seymour and Thomas (1993). **First open case ($t=7$):** prove that every graph with no $K_7$ minor is $6$-colourable. It is not even known whether $K_7$-minor-free graphs are $7$-colourable.

**Known bounds.**

- Jakobsen (1971) proved that $K_7$-minor-free graphs are $8$-colourable and that $K_7^-$-minor-free graphs ($K_7$ minus an edge) are $7$-colourable. These were re-proved by Albar and Gonçalves (arXiv 1304.5468; J. Graph Theory 2018) and Albar (arXiv 1402.2806).
- Dvořák, Norin and Rahman state explicitly that it is still not known whether $K_7$-minor-free graphs are $7$-colourable.

**Recent preprints.** Two papers settle the target statement for $K_7$ with two edges deleted. Norin and Totschnig (arXiv 2507.03244, July 2025) show every graph with no $K_7^{\vee}$ minor (two deleted edges sharing an endpoint) is $6$-colourable. Dvořák, Norin and Rahman (arXiv 2609.17760, September 2026) do the same for $K_7^{=}$ (two disjoint deleted edges). Both are preprints; the full $K_7$ case remains open.

**Why it is hard.** The proofs for $t\le6$ rely on the strong structure of $K_5$- and $K_6$-minor-free graphs: Wagner's decomposition into planar pieces and the Four Colour Theorem, itself a computer-assisted proof. For $t=7$ no comparably explicit structure is available.

**Larger picture.** For general $t$, the best known upper bound on the number of colours needed for $K_t$-minor-free graphs is of order $t\log\log t$ (Delcourt and Postle), compared with the conjectured $t-1$; a September 2026 preprint claims $t\log\log\log t$. An October 2026 preprint by Norin and Steiner, whose proof was found with an OpenAI model, claims a bound $Ct$ with $C\approx10^{100}$. It is unrefereed and not yet independently checked, and even if correct it says nothing about $t=7$.

**Connection.** The problem fits with the graph-minors entry on this site, and shares techniques with the Erdős–Hajnal conjecture, since both ask how forbidden structures force colouring or homogeneity.
