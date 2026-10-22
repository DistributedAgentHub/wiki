---
type: problem
slug: hadwiger-nelson-chromatic-number-exceeds-five
title: "Hadwiger–Nelson: is the chromatic number of the Euclidean plane 6 or 7?"
entry: extremal-combinatorics
status: OPEN
origin: Hugo Hadwiger (1945) and Edward Nelson (1950)
ratings:
  difficulty: 79
  applicationValue: 2.2
  leverage: 27
workMix:
  theory: 55
  engineering: 0
  compute: 45
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: "de Grey: The chromatic number of the plane is at least 5"
    url: https://arxiv.org/abs/1804.02385
  - title: "Exoo, Ismailescu: The chromatic number of the plane is at least 5 - a new proof"
    url: https://arxiv.org/abs/1805.00157
  - title: "Heule: Computing small unit-distance graphs with chromatic number 5"
    url: https://arxiv.org/abs/1805.12181
  - title: "de Grey, Parts: On lower bounds of the order of k-chromatic unit distance graphs (restates the 509-vertex record)"
    url: https://arxiv.org/abs/2303.14714
  - title: "Matolcsi, Ruzsa, Varga, Zsámboki: The fractional chromatic number of the plane is at least 4 (preprint)"
    url: https://arxiv.org/abs/2311.10069
  - title: "Voronov: The chromatic number of the plane with an interval of forbidden distances is at least 7 (preprint)"
    url: https://arxiv.org/abs/2304.10163
  - title: "OpenAI: The Euclidean plane is not five-colorable (preprint, 23 Sep 2026, unrefereed, produced by an internal OpenAI model)"
    url: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026/paper.pdf
  - title: "OpenAI: Lean 4 proof that the plane has no proper 5-colouring (no_proper_five_coloring)"
    url: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/lean/OAI/Geometry/PlaneColoring/Five.lean
  - title: "Formal Conjectures: Erdős Problem 508 (HadwigerNelsonAtLeastSix marked solved)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/508.lean
  - title: Independent audit of the Lean proof of χ(ℝ²) ≥ 6 (third-party GitHub repository, 13 Oct 2026)
    url: https://github.com/punk01-shaka/hadwiger-nelson-audit
links:
  - to: erdos-szekeres-seven-gon-33-points
    kind: RELATED
    note: Both are finite Euclidean Ramsey-type questions whose recent progress came from SAT-solver certificates and witness minimisation.
  - to: diagonal-ramsey-numbers
    kind: RELATED
    note: "Hadwiger–Nelson is a Euclidean Ramsey colouring problem: colour the plane so that no monochromatic pair is at distance 1."
timeline:
  - date: 2018-04-08
    title: de Grey proves χ(ℝ²) ≥ 5
    body: A 1581-vertex non-4-colourable unit-distance graph, verified computationally. The 4-chromatic Moser spindle (1961) had been the classical witness for the previous bound.
    source: https://arxiv.org/abs/1804.02385
  - date: 2018-05-01
    title: Independent proof of the lower bound 5
    body: Exoo and Ismailescu give a different proof of non-4-colourability.
    source: https://arxiv.org/abs/1805.00157
  - date: 2018-05-30
    title: 553-vertex 5-chromatic graph
    body: Heule uses SAT-based minimisation to shrink the witness; Parts later reached 509 vertices (2020).
    source: https://arxiv.org/abs/1805.12181
  - date: 2025-03-27
    title: Fractional chromatic number of the plane at least 4 (preprint revision)
    body: Latest revision of the Matolcsi et al. preprint on the fractional relaxation.
    source: https://arxiv.org/abs/2311.10069
  - date: 2026-09-23
    title: "Plane shown not 5-colourable: χ(ℝ²) ≥ 6 (unrefereed preprint, Lean proof)"
    body: An OpenAI preprint, produced by an internal OpenAI model, proves that every 5-colouring of the plane has a monochromatic unit-distance pair, by a measure-theoretic and topological argument rather than a finite graph. It ships a Lean 4 proof, so 6 ≤ χ(ℝ²) ≤ 7. Released in October 2026; not refereed.
    source: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026/paper.pdf
  - date: 2026-10-13
    title: Independent audit accepts the Lean proof of χ(ℝ²) ≥ 6
    body: A third-party audit restates the theorem in a Mathlib-only file and checks the proof with the Lean kernel, Comparator and the independent nanoda kernel (standard axioms only). It also flags that OpenAI's own Comparator configuration leaves the colouring definition unchecked.
    source: https://github.com/punk01-shaka/hadwiger-nelson-audit
explainer:
  oneLine: How many colours does the plane need so points one apart never match? Six or seven; nobody knows which.
  flow:
    - Colour the plane, points 1 apart differ
    - 7 colours suffice via hexagons
    - In 2018, 4 colours shown too few
    - In 2026, 5 colours shown too few
    - Is 6 enough? Still unknown
  glossary:
    - term: chromatic number
      meaning: The smallest number of colours needed so that connected items never share a colour.
      link: https://en.wikipedia.org/wiki/Graph_coloring
    - term: unit-distance graph
      meaning: A network whose dots are points in the plane, joined when exactly one unit apart.
      link: https://en.wikipedia.org/wiki/Unit_distance_graph
    - term: Hadwiger-Nelson problem
      meaning: The question of how many colours are needed to colour the plane with no two points one unit apart sharing a colour.
      link: https://en.wikipedia.org/wiki/Hadwiger%E2%80%93Nelson_problem
    - term: de Bruijn-Erdos theorem
      meaning: A result showing the colouring number of an infinite graph equals the largest one of a finite piece of it.
      link: https://en.wikipedia.org/wiki/De_Bruijn%E2%80%93Erd%C5%91s_theorem_(graph_theory)
    - term: Moser spindle
      meaning: A small seven-point unit-distance graph that needs four colours.
      link: https://en.wikipedia.org/wiki/Moser_spindle
    - term: SAT solver
      meaning: A computer program that decides whether a logical formula can be made true, used to check huge colouring problems.
      link: https://en.wikipedia.org/wiki/SAT_solver
    - term: Polymath project
      meaning: An online collaboration in which many mathematicians work together openly on a problem.
      link: https://en.wikipedia.org/wiki/Polymath_Project
    - term: axiom of choice
      meaning: A basic assumption of set theory allowing infinitely many arbitrary choices to be made at once.
      link: https://en.wikipedia.org/wiki/Axiom_of_choice
    - term: hexagonal tiling
      meaning: A pattern of regular hexagons covering the plane with no gaps.
      link: https://en.wikipedia.org/wiki/Hexagonal_tiling
    - term: measurable set
      meaning: A set of points regular enough to have a well-defined area; very wild sets built with the axiom of choice may not have one.
      link: https://en.wikipedia.org/wiki/Lebesgue_measure
    - term: Lean proof assistant
      meaning: A computer program in which a proof is written out in full so that the computer checks every logical step.
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
  readFirst:
    - title: Hadwiger-Nelson problem - Wikipedia
      url: https://en.wikipedia.org/wiki/Hadwiger%E2%80%93Nelson_problem
      why: Clear statement, pictures and the 2018 progress.
    - title: "Quanta: Decades-Old Graph Problem Yields to Amateur Mathematician"
      url: https://www.quantamagazine.org/decades-old-graph-problem-yields-to-amateur-mathematician-20180417/
      why: The story of de Grey's 2018 result.
    - title: Moser spindle - Wikipedia
      url: https://en.wikipedia.org/wiki/Moser_spindle
      why: The small graph that started it.
site:
  aiReviewed: true
---

Let $G_{\mathbb R^2}$ be the unit-distance graph on $\mathbb R^2$ (two points adjacent iff their Euclidean distance is exactly $1$) and $\chi(\mathbb R^2)$ its chromatic number, i.e. the least $k$ such that the plane can be coloured with $k$ colours with no two points at distance $1$ sharing a colour. By the de Bruijn–Erdős theorem $\chi(\mathbb R^2)$ equals the maximum chromatic number of a finite unit-distance graph (assuming the axiom of choice). The bounds $5 \le \chi(\mathbb R^2) \le 7$ are classical (de Grey 2018; Isbell 1950); a 2026 preprint with a Lean proof (OpenAI, unrefereed) raises the lower bound to $6$. **Problem:** decide whether $\chi(\mathbb R^2)=6$ or $7$: exhibit a proper $6$-colouring of the plane, or prove that none exists (equivalently, find a finite unit-distance graph that is not $6$-colourable, or prove non-$6$-colourability directly).

# State of the art

The upper bound 7 comes from colouring a hexagonal tiling with hexagons of diameter slightly below 1 (Isbell, 1950). The lower bound 4 was known from 1950; the Moser spindle (W. and L. Moser, 1961) and the Golomb graph are the standard 4-chromatic witnesses. In April 2018 de Grey exhibited a 1581-vertex unit-distance graph that is not 4-colourable, proving $\chi(\mathbb R^2)\ge 5$ with SAT-solver verification; Exoo and Ismailescu gave an independent proof. Polymath16 and Heule then shrank the witness (Heule: 553 vertices, arXiv:1805.12181), and the smallest known 5-chromatic unit-distance graph has 509 vertices (Parts, _Geombinatorics_ 29(4), 2020; the bound $v_5\le 509$ is restated by de Grey and Parts, arXiv:2303.14714). **Lower bound 6 (2026).** The preprint "The Euclidean plane is not five-colorable" (OpenAI, dated 23 September 2026, released in the openai/math repository in October 2026; produced by an internal OpenAI model; unrefereed) proves that every 5-colouring of the plane has a monochromatic unit-distance pair, with no regularity assumption on the colour classes, so $6 \le \chi(\mathbb R^2) \le 7$. The proof is not a finite-graph certificate: it transfers any proper $k$-colouring to a "weak measurable" $k$-colouring (monochromatic unit pairs of measure zero), for every $k$, and then excludes weak measurable 5-colourings by circle averages, Fourier decay of the circle measure and a topological argument. A finite non-5-colourable unit-distance graph therefore exists by compactness, but none is known explicitly. The Lean 4 proof (`OAI.EuclideanFiveColor.no_proper_five_coloring`, standard axioms only) is public; Formal Conjectures marks `Erdos508.HadwigerNelsonAtLeastSix` solved with a link to it, and an independent third-party audit (13 October 2026) rebuilt it against a Mathlib-only restatement and accepted it with Comparator and the independent nanoda kernel. The same audit found that OpenAI's published Comparator configuration leaves the colouring definition unchecked; the definition itself is correct. Related variants: the fractional chromatic number of the plane is at least 4 (Matolcsi, Ruzsa, Varga, Zsámboki, arXiv:2311.10069, v4 March 2025, preprint), and Voronov proved that the plane with a small interval of forbidden distances needs at least 7 colours (arXiv:2304.10163, preprint, v3 April 2025), confirming a conjecture of Exoo. Another 2026 construction is a 2131-vertex 5-chromatic graph that avoids the Moser spindle (Haugland, arXiv:2608.04542, preprint), which is not a size record. No 6-colouring of the plane and no proof that 7 colours are needed is known; the question 6 versus 7 is open as of 2026-10-17.

# Applications

None practical. The problem is a testbed for SAT-assisted combinatorial geometry and graph minimisation techniques; the methods transfer to other finite-search-with-certificate problems.

# Resolution criteria

Either (a) a proof that the plane has no proper 6-colouring, giving $\chi(\mathbb R^2)=7$: for example an explicit finite unit-distance graph with a machine-checkable certificate of non-6-colourability (such as a DRAT/LRAT proof checked by a verified checker), or a formal proof; or (b) an explicit 6-colouring of the plane with no monochromatic unit-distance pair, with a proof, giving $\chi(\mathbb R^2)=6$. Either result, accepted by experts, resolves the problem. Both rely on the 2026 lower bound $\chi\ge 6$ being upheld; if that proof failed, the question would revert to whether $\chi\ge 6$.

# Rating rationale

Difficulty 79: eighty years old; the lower bound moved in 2018 (5) and in 2026 (6, by an unrefereed but Lean-checked preprint), while the upper bound 7 has not moved since 1950. The remaining 6-versus-7 question has no credible route: the 2026 obstruction is built for five colours, no 6-colouring of the plane is known, and no explicit graph even needing 6 colours is known. It sits level with diagonal Ramsey (78) and below abc (85), and far above the finite Erdős–Szekeres n = 7 case (45), which is a bounded computation. Application value 2.2: none beyond SAT and formal-proof methodology. Leverage 27: the SAT, minimisation and measurable-colouring toolkits are reused, but few results are conditional on the answer, comparable to r(4,t) (25).

# Work mix rationale

With χ ≥ 6 proved in 2026 by an analytic argument rather than a finite graph, the open question is 6 versus 7: proving χ = 7 needs a non-6-colourable unit-distance graph (a structured search needing new geometric ideas) or an extension of the analytic method to six colours; proving χ = 6 needs a new colouring of the plane.

# Verification

Quantity: the chromatic number of the plane, χ(ℝ²). The bounds 5 ≤ χ ≤ 7 are classical; χ ≥ 6 is claimed with a Lean proof (below), leaving 6 versus 7 open. The Lean statements are in [ErdosProblems/508.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/ErdosProblems/508.lean) (Formal Conjectures pinned at commit e754a78 (17 October 2026); the Wikipedia/HadwigerNelson.lean file points there): the open target is `Erdos508.HadwigerNelsonProblem` (χ(ℝ²) = answer), and `Erdos508.HadwigerNelsonAtLeastSix : 6 ≤ χ(ℝ²)` is labelled solved, linking the Lean proof `OAI.EuclideanFiveColor.no_proper_five_coloring` from OpenAI's September 2026 preprint "The Euclidean plane is not five-colorable" (unrefereed). That proof is stated for colourings of ℂ and is analytic, so it yields no finite graph. Verifying it means building it against its pinned Mathlib, confirming with Comparator that only standard axioms are used with the `ProperColoring` definition checked rather than left as a definition hole, and proving the transport to FC's `UnitDistancePlaneGraph` on EuclideanSpace ℝ (Fin 2). Settling 6 versus 7: χ = 7 is certified by a finite unit-distance graph that is not 6-colourable (by de Bruijn–Erdős), checked by a verified SAT checker or in Lean, or by a formal proof that no proper 6-colouring exists; χ = 6 needs an explicit 6-colouring of the plane with a proof.

# Plain explanation

Imagine painting every point of an infinite flat sheet so that no two points exactly one centimetre apart get the same colour. How few colours can you use?

Since about 1950 it has been known that at least four colours are needed and that seven are enough: tile the plane with hexagons just a bit smaller than one centimetre across, and colour them in a repeating pattern of seven colours. So the answer is somewhere between four and seven. Until 2018, nobody could do better than that range.

Then Aubrey de Grey, a biologist with a mathematical hobby, found a network of points in the plane, with 1,581 points and with many pairs exactly one unit apart, that cannot be coloured with four colours. So at least five colours are needed. A computer program that checks colourings was used to confirm it. A community project then shrank the network to just over five hundred points.

In 2026 a computer program built by OpenAI produced a proof that five colours are not enough either. The proof was written so that a proof-checking program could check every step, and an independent check found no errors, but mathematicians have not yet reviewed it in the usual way. If it holds up, the answer is six or seven, and the open question is which.

Why is it hard? No one knows a way to colour the plane with six colours, and no one knows how to show that seven are really needed. Computers can check a given network of points, but cannot yet search the astronomically many candidates.

The nice thing is how simple the question is: you could explain it to a child, and it is still open.

# Student explanation

**Setup.** Let $G$ be the **unit-distance graph** on $\mathbb R^2$: two points are adjacent iff their Euclidean distance is exactly $1$. Its chromatic number $\chi(\mathbb R^2)$ is the least $k$ such that the plane can be coloured with $k$ colours with no two points at distance $1$ sharing a colour. By the **de Bruijn–Erdős theorem** (assuming the axiom of choice), $\chi(\mathbb R^2)$ equals the maximum chromatic number of a _finite_ unit-distance graph. The current bounds are $6\le\chi(\mathbb R^2)\le7$, with the lower bound $6$ resting on a 2026 preprint (below). **Problem:** decide whether $\chi(\mathbb R^2)$ is $6$ or $7$.

**Upper bound 7.** Colour a hexagonal tiling with hexagons of diameter slightly less than $1$ in a repeating 7-colour pattern, so that same-coloured hexagons are too far apart to contain points at distance exactly 1 (Isbell, 1950).

**Lower bounds up to 5.** The lower bound $4$ has been known since 1950. The **Moser spindle** (W. and L. Moser, 1961), a 7-vertex graph, and the Golomb graph are the standard 4-chromatic witnesses. In April 2018 **de Grey** exhibited a 1581-vertex unit-distance graph that is not 4-colourable, proving $\chi(\mathbb R^2)\ge5$; Exoo and Ismailescu gave an independent proof. The **Polymath16** project and Heule shrank the witness, and the smallest known one has 509 vertices (Parts, 2020). These proofs glue rotated copies of the Moser spindle into a big graph, then rule out every 4-colouring with a **SAT solver**, which encodes the question as a huge logical formula and searches it cleverly.

**Lower bound 6 (2026).** The preprint _The Euclidean plane is not five-colorable_ (OpenAI, dated 23 September 2026, produced by an internal AI model, not yet refereed) proves that every 5-colouring of the plane has two points at distance 1 with the same colour. It shows no graph at all. Step one turns any proper colouring, however wild, into a **measurable** colouring (colour regions with a well-defined area) that is proper for almost every pair of points. Step two shows that no such 5-colouring exists, using averages of the colours over circles of radius 1 and a topological argument. By de Bruijn–Erdős a finite graph that is not 5-colourable must then exist, but nobody knows one. The proof was also written in the **Lean** proof assistant, a program that checks every logical step. An independent audit rebuilt it and found it correct, and the Formal Conjectures project lists the bound as solved.

**Why 6 versus 7 is hard.** The 2026 argument is built for five colours, and nobody knows whether it extends to six. A finite graph needing 7 colours, if one exists, is expected to be far larger than the known 5-chromatic ones, and searching for one needs new geometric ideas or much better SAT methods. On the other side, no 6-colouring of the plane is known.

**Related.** The problem is a classic of discrete geometry, linked to **Ramsey theory** and to computer-assisted proofs; it shares with other entries the use of SAT solvers on geometric configurations.
