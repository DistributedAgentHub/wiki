---
type: problem
slug: erdos-hajnal-long-paths
title: "Erdős–Hajnal for long induced paths: polynomial homogeneous sets in P_k-free graphs for every k"
entry: extremal-combinatorics
status: OPEN
origin: Erdős and Hajnal, 1977/1989
ratings:
  difficulty: 69
  applicationValue: 5
  leverage: 38
workMix:
  theory: 92
  engineering: 3
  compute: 5
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Nguyen, Scott, Seymour: Induced subgraph density V. All paths approach Erdős–Hajnal"
    url: https://arxiv.org/abs/2307.15032
  - title: "Nguyen, Scott, Seymour: Induced subgraph density VII. The five-vertex path"
    url: https://arxiv.org/abs/2312.15333
  - title: "Huang, Ju, Zhou: Erdős–Hajnal conjecture beyond five-vertex graphs"
    url: https://arxiv.org/abs/2606.06258
  - title: The Erdős–Hajnal property for the six-vertex path (Claude Opus 5.5; unrefereed, with Lean 4)
    url: https://github.com/machine-qed/erdos-hajnal-six-vertex-path
  - title: "Nguyen: Fractionally colouring P5-free graphs"
    url: https://arxiv.org/abs/2510.05724
links:
  - to: diagonal-ramsey-numbers
    kind: RELATED
    note: Erdős–Hajnal asks when forbidding an induced subgraph lifts the logarithmic Ramsey bound for homogeneous sets to a polynomial one.
timeline:
  - date: 2023-07-27
    title: All paths approach Erdős–Hajnal
    body: Quasi-polynomial homogeneous sets in P_k-free graphs.
    source: https://arxiv.org/abs/2307.15032
  - date: 2023-12-23
    title: The five-vertex path
    body: Completes the conjecture for all five-vertex graphs.
    source: https://arxiv.org/abs/2312.15333
  - date: 2026-09-27
    title: Claimed proof for P_6 (unrefereed)
    body: AI-produced paper with a Lean formalization; says the method stops at P_7.
    source: https://github.com/machine-qed/erdos-hajnal-six-vertex-path
explainer:
  oneLine: A network that avoids one small pattern must contain a big group of mutual friends or mutual strangers. Prove it when the pattern is a long path.
  flow:
    - Forbid one small pattern H in a network
    - Ramsey only promises about log n
    - "Conjecture: a power of n is guaranteed"
    - Proved up to 5 vertices; long paths open
  glossary:
    - term: Erdos-Hajnal conjecture
      meaning: The conjecture that forbidding one induced pattern forces a clique or independent set of polynomial size.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Hajnal_conjecture
    - term: induced subgraph
      meaning: A group of dots together with exactly the lines among them in the original network.
      link: https://en.wikipedia.org/wiki/Induced_subgraph
    - term: clique
      meaning: A set of dots in a network in which every pair is joined by a line.
      link: https://en.wikipedia.org/wiki/Clique_(graph_theory)
    - term: independent set
      meaning: A set of dots with no lines between any two of them.
      link: https://en.wikipedia.org/wiki/Independent_set_(graph_theory)
    - term: path graph
      meaning: A network whose dots lie in a row, each joined only to its neighbours.
      link: https://en.wikipedia.org/wiki/Path_graph
    - term: Ramsey theory
      meaning: The study of how large a structure must be before some regular pattern is guaranteed to appear.
      link: https://en.wikipedia.org/wiki/Ramsey_theory
    - term: quasi-polynomial
      meaning: Growing faster than any power of the input's logarithm but slower than any power of the input.
      link: https://en.wikipedia.org/wiki/Time_complexity#Quasi-polynomial_time
    - term: preprint
      meaning: A paper posted publicly before it has been reviewed by other experts.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: Graph minors and structural graph theory
      meaning: The background on how graph structure theorems are proved.
      link: /research/graph-minors-structure
    - term: homogeneous set
      meaning: A set of vertices that is either a clique or an independent set.
      link: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Hajnal_conjecture
  readFirst:
    - title: Erdos-Hajnal conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Hajnal_conjecture
      why: Statement and a summary of known cases.
    - title: Ramsey's theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Ramsey%27s_theorem
      why: The weaker guarantee the conjecture improves on.
    - title: Induced subgraph - Wikipedia
      url: https://en.wikipedia.org/wiki/Induced_subgraph
      why: Makes the key word 'induced' precise.
site:
  aiReviewed: true
---

The Erdős–Hajnal conjecture asserts that for every graph H there is c(H) > 0 such that every n-vertex graph with no induced copy of H has a clique or a stable set of size at least $n^{c(H)}$. Let P_k be the path on k vertices. The problem is to prove the conjecture for H = P_k for every k, or for the first open lengths k = 7, 8. The conjecture is proved for every graph on at most five vertices, the last case being P_5 (Nguyen–Scott–Seymour); for P_6 there is an unrefereed claimed proof, and for every k a quasi-polynomial bound $2^{(\log n)^{1-o(1)}}$ is known.

# State of the art

**Open for k ≥ 7; P_6 claimed but unrefereed.** Nguyen, Scott and Seymour proved that every P_k-free graph has a homogeneous set of size $2^{(\log n)^{1-o(1)}}$ (arXiv:2307.15032), and proved the conjecture for P_5 (arXiv:2312.15333, Proc. LMS 2026), which completes all five-vertex graphs. Huang, Ju and Zhou (arXiv:2606.06258, preprint) generalized the iterative-sparsification framework and proved the conjecture for two new six-vertex graphs (the E-graph and the bird graph), recovering P_5 and the bull. On 27 September 2026 a repository produced by Claude Opus 5.5 (github.com/machine-qed/erdos-hajnal-six-vertex-path) posted a 24-page proof for P_6 with a Lean 4 formalization that assumes three refereed imported theorems; it is unrefereed and states that the method does not extend to P_7. Nguyen (arXiv:2510.05724) proved that every P_5-free graph G has at most α(G)ω(G)^d vertices, so its fractional chromatic number is polynomial in its clique number. For general H the best bound remains $e^{c\sqrt{\log n}}$ (Erdős–Hajnal 1989). Many six-vertex graphs besides P_6 remain open.

# Applications

None directly. Polynomial homogeneous sets in P_k-free graphs would feed structural graph theory and algorithms for graph classes with forbidden induced paths (colouring, independent set).

# Resolution criteria

A refereed proof that for every k (or for k = 7) there is c_k > 0 such that every P_k-free graph on n vertices has a clique or stable set of size n^(c_k). Verification of the P_6 claim is partial progress.

# Rating rationale

P_5 needed a new sparsification framework, P_6 is claimed with a method its authors say stops there, and the quasi-polynomial bound for all paths shows the target is near; so 69, just below even-order Chowla (70) and below diagonal Ramsey (78). Application value 5 is indirect. Leverage 38: paths are the key test family for the full Erdős–Hajnal conjecture.

# Work mix rationale

New structural arguments are needed; formal proofs (as for P_5 and P_6) and computer case analysis are small shares.

# Verification

Statement: the Erdős–Hajnal conjecture is `Erdos61.erdos_61` in [ErdosProblems/61.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/61.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026)), stated for every graph H with `IsErdosHajnalLowerBound H (fun n => n ^ c)`; the same file states the solved path case as `erdos_61.variants.p5` with H = `pathGraph 5`. The target here is the same statement with `pathGraph k` for k = 6, 7 or for every k, which is a direct substitution into that definition. Accept a Lean proof that compiles against the pinned corpus and passes Comparator against the substituted statement; a verified P_6 proof counts as partial progress.

# Plain explanation

Picture a social network. A group of mutual friends is a clique. A group of people none of whom know each other is an independent set. Ramsey theory says any big enough network has a large one of these, but the guaranteed size is small: only about the logarithm of the network's size.

The Erdős-Hajnal conjecture says this changes dramatically if you forbid one small pattern. Pick any small network H, and consider only networks in which H never appears as an induced piece, meaning a group of people whose acquaintances form exactly the shape H. Then you are always guaranteed a clique or an independent set whose size is a fixed power of the whole network, such as its square root or cube root. That is far larger than a logarithm.

The conjecture is open in general. It is proved for all patterns with at most five people. This problem looks at the pattern that is a chain: person one knows person two, who knows person three, and so on, with no other acquaintances.

For the five-person chain, the proof arrived only recently. For six, there is an unrefereed claimed proof. For seven or more, nobody knows. For every chain length, a weaker guarantee is known, between a logarithm and a power.

The party picture hides the main difficulty: forbidding an exact (induced) pattern is a much weaker restriction than it sounds, so the networks allowed can still be very wild.

# Student explanation

**The conjecture.** The **Erdős–Hajnal conjecture** asserts that for every graph $H$ there is a constant $c(H)>0$ such that every $n$-vertex graph with no _induced_ copy of $H$ has a clique or a stable (independent) set of size at least $n^{c(H)}$. Here _induced_ means the copy uses edges and non-edges exactly as in $H$. By comparison, Ramsey theory alone guarantees a clique or stable set of size only about $\log n$ for general graphs; the conjecture says that forbidding any single $H$ gives polynomial size. The conjecture was posed in 1977.

**The paths $P_k$.** Let $P_k$ be the path on $k$ vertices. The problem is to prove the conjecture for $H=P_k$ for every $k$, or at least for the first open lengths $k=7,8$. It is proved for every graph on at most five vertices, the last case being $P_5$ (Nguyen, Scott and Seymour). For $P_6$ there is an unrefereed claimed proof. For every $k$, a **quasi-polynomial** bound is known: every $P_k$-free graph has a homogeneous set (clique or stable set) of size $2^{(\log n)^{1-o(1)}}$.

**State of the art.**

- Nguyen, Scott and Seymour proved the quasi-polynomial bound for all $P_k$ (arXiv 2307.15032), and the conjecture for $P_5$ (arXiv 2312.15333, Proc. LMS 2026), completing all five-vertex graphs.
- Huang, Ju and Zhou (arXiv 2606.06258, preprint) generalized an iterative-sparsification framework and proved the conjecture for two new six-vertex graphs, the E-graph and the bird graph, recovering $P_5$ and the bull graph.
- On 27 September 2026 a repository produced by an AI system posted a 24-page proof for $P_6$ with a Lean 4 formalization that assumes three refereed imported theorems. It is unrefereed, states that its method does not extend to $P_7$, and this entry treats it as a claim, not a result.

**Techniques.** The proofs use structural graph theory: they show that a $P_k$-free graph either has a large homogeneous set directly or can be broken into sparser pieces to which the argument is applied again.

**Why it matters.** The conjecture says that forbidden-pattern graph classes are very non-random: they have large, highly structured pieces. It relates to Ramsey theory. Paths are among the simplest graphs there are, which makes it striking that the conjecture is open for them from length 7.

The problem is open for $k\ge7$.
