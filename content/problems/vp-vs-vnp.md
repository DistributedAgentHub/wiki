---
type: problem
slug: vp-vs-vnp
title: "Valiant's VP versus VNP conjecture: is VP ≠ VNP?"
entry: computational-complexity
status: OPEN
origin: Leslie Valiant (STOC 1979; L'Enseignement Mathématique 1982)
ratings:
  difficulty: 92
  applicationValue: 18
  leverage: 75
workMix:
  theory: 96
  engineering: 0
  compute: 4
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Valiant: Completeness classes in algebra (STOC 1979)"
    url: https://doi.org/10.1145/800135.804419
  - title: "Mulmuley, Sohoni: Geometric complexity theory I (SIAM J. Comput. 2001)"
    url: https://doi.org/10.1137/S009753970038715X
  - title: "Shpilka, Yehudayoff: Arithmetic circuits: a survey of recent results and open questions"
    url: https://doi.org/10.1561/0400000039
  - title: "Kabanets, Impagliazzo: Derandomizing Polynomial Identity Tests Means Proving Circuit Lower Bounds (ECCC TR02-055)"
    url: https://eccc.weizmann.ac.il/report/2002/055/
  - title: "Mignon, Ressayre: A quadratic bound for the determinant and permanent problem (IMRN 2004)"
    url: https://doi.org/10.1155/S1073792804142566
  - title: "Landsberg, Manivel, Ressayre: Hypersurfaces with degenerate duals and the Geometric Complexity Theory program (arXiv:1004.4802)"
    url: https://arxiv.org/abs/1004.4802
  - title: "Limaye, Srinivasan, Tavenas: Superpolynomial Lower Bounds Against Low-Depth Algebraic Circuits (ECCC TR21-081; FOCS 2021)"
    url: https://eccc.weizmann.ac.il/report/2021/081/
  - title: "Anthropic (AI-generated, not peer-reviewed): VP ≠ VNP over every field (anthropics/formal-math at 11b6c7e3)"
    url: https://github.com/anthropics/formal-math/tree/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp
  - title: "Anthropic (AI-generated, not peer-reviewed): VP ≠ VNP over every field (Hexagon preprint 2611.00954v1, 23 Nov 2026)"
    url: https://hexagonmath.org/2611.00954v1
  - title: "OpenAI (AI-generated, not peer-reviewed): VP and VNP are different (23 Nov 2026, openai/math at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf
  - title: "OpenAI (AI-generated, not peer-reviewed): Paths, trees and grids separate Valiant's hierarchy (24 Nov 2026, openai/math at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Paths-trees-and-grids-separate-Valiants-hierarchy-November-24-2026/paper.pdf
  - title: "OpenAI (AI-generated, not peer-reviewed): Circuit lower bounds for Hamiltonian cycle and the permanent (24 Nov 2026, openai/math at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/Circuit-lower-bounds-for-Hamiltonian-cycle-and-the-permanent-November-24-2026/paper.pdf
  - title: "OpenAI: Lean formalization scope for family 379 (unreviewed, openai/math at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/379.md
  - title: "Fortnow: VP ≠ VNP (Computational Complexity blog, 24 November 2026)"
    url: https://blog.computationalcomplexity.org/2026/11/vp-vnp.html
links:
  - to: permanent-determinantal-complexity-superquadratic
    kind: IMPLIES
    note: Over ℂ, showing that the permanent is not in VP implies its determinantal complexity grows superpolynomially, hence faster than n²; the border strengthening VNP ⊄ border-VP similarly implies a superpolynomial lower bound on border determinantal complexity.
  - to: p-vs-np
    kind: RELATED
    note: Valiant's conjecture is the algebraic analogue of P ≠ NP. Separating VP from VNP over a field is not known to imply P ≠ NP (arithmetic circuits must compute formal polynomials over the field and its extensions, not just Boolean values), whereas in the reverse direction NP ⊄ P/poly implies VP ≠ VNP over ℂ assuming the Generalized Riemann Hypothesis (Bürgisser, 2000).
  - to: blackbox-pit-constant-depth-polynomial-time
    kind: RELATED
    note: By Kabanets and Impagliazzo (2003/2004), derandomizing polynomial identity testing implies either NEXP ⊄ P/poly or that the permanent lacks polynomial-size arithmetic circuits, and sufficiently strong explicit algebraic lower bounds yield deterministic PIT algorithms.
timeline:
  - date: 1979-04-30
    title: Valiant defines VP and VNP and proves completeness of the permanent
    body: Leslie Valiant introduced algebraic complexity classes of polynomial families and showed that the permanent is VNP-complete outside characteristic 2 (STOC 1979; algebraic projection formulation in 1982).
    source: https://doi.org/10.1145/800135.804419
  - date: 2001-01-01
    title: Mulmuley and Sohoni launch Geometric Complexity Theory
    body: Mulmuley and Sohoni proposed an algebraic-geometric and representation-theoretic programme aimed at proving the border version of permanent versus determinant (SIAM J. Comput. 2001; month approximate).
    source: https://doi.org/10.1137/S009753970038715X
  - date: 2021-07-06
    title: Superpolynomial lower bounds for constant-depth algebraic circuits
    body: Limaye, Srinivasan and Tavenas proved the first superpolynomial lower bounds against general constant-depth arithmetic circuits in characteristic zero or large characteristic (ECCC TR21-081; FOCS 2021; extended to all fields by Forbes, CCC 2024).
    source: https://eccc.weizmann.ac.il/report/2021/081/
  - date: 2026-11-23
    title: Anthropic posts an AI-generated VP ≠ VNP claim with Lean 4 formalization (unrefereed)
    body: Anthropic published a 70-page paper by Claude and 324 Lean 4 files in anthropics/formal-math (and Hexagon 2611.00954v1) claiming an m^(c(log m)^(1/3)) gate lower bound for exact and approximating circuits computing the Hamiltonian cycle polynomial over every field and the permanent outside characteristic 2. Repository CI passed; no human mathematician has checked the proof.
    source: https://github.com/anthropics/formal-math/tree/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp
  - date: 2026-11-23
    title: OpenAI posts an AI-generated VP ≠ VNP claim with Lean formalization (unrefereed)
    body: "Hours after Anthropic's release (PR #5 merged 2026-11-24 01:30 UTC; history.md states the result was obtained on 6 November 2026), OpenAI added the 30-page manuscript \"VP and VNP are different\" and an unreviewed Lean formalization of exact VP ≠ VNP over every field, claiming a border-circuit lower bound of exp(Ω((log n)^(5/4))). Unrefereed."
    source: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf
  - date: 2026-11-24
    title: OpenAI posts follow-up preprints on Valiant's hierarchy and permanent/HC bounds (unrefereed)
    body: OpenAI added family 379 (Euclidean tensor geometry), including "Paths, trees and grids separate Valiant's hierarchy" (claiming VF ⊊ VBP ⊊ VP ⊊ VNP over every field) and "Circuit lower bounds for Hamiltonian cycle and the permanent" (claiming exp(c(log N)^2/(log log N)^2) degree-component border circuit size), stating that these subsume the November 23 manuscript. Unrefereed.
    source: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/history.md
explainer:
  oneLine: Can every algebra formula whose terms are easy to specify and sum over exponentially many choices also be computed quickly with additions and multiplications alone?
  flow:
    - "VP: small addition-and-multiplication circuits"
    - "VNP: exponential sums of VP formulas"
    - Permanent is VNP-complete; determinant is in VP
    - "Conjecture: VP ≠ VNP (permanent needs huge circuits)"
    - "Nov 2026: Anthropic and OpenAI post AI claims"
  glossary:
    - term: arithmetic circuit
      meaning: A network of addition, subtraction and multiplication gates that computes a formal polynomial in its input variables over a field.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: VP
      meaning: Valiant's class of polynomial families with polynomially many variables, polynomial degree and polynomial-size arithmetic circuits.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: VNP
      meaning: Valiant's class of polynomial families obtained by summing a VP family over all 0/1 assignments to polynomially many auxiliary variables.
      link: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
    - term: permanent
      meaning: The determinant formula without minus signs; VNP-complete outside characteristic 2, whereas the determinant lies in VP.
      link: https://en.wikipedia.org/wiki/Permanent_(mathematics)
    - term: Hamiltonian cycle polynomial
      meaning: The sum over all single-cycle permutations of products of matrix entries; VNP-complete over every field, including characteristic 2.
      link: https://en.wikipedia.org/wiki/Hamiltonian_path
    - term: border complexity
      meaning: Circuit size when a polynomial only needs to be approximated arbitrarily closely as a coefficientwise limit (Zariski closure or formal Laurent series).
      link: https://en.wikipedia.org/wiki/Geometric_complexity_theory
    - term: determinantal complexity
      meaning: The smallest matrix size m such that a polynomial equals the determinant of an m×m matrix of affine-linear forms.
      link: /research/computational-complexity
    - term: asymptotic spectrum of tensors
      meaning: Strassen's space of monotone, multiplicative, additive functionals on tensors, used to prove lower bounds and dualities for tensor networks.
      link: /research/fast-matrix-multiplication
    - term: Lean
      meaning: "A computer proof assistant: software that checks every logical step of a formal proof mechanically, though humans must still check the definitions."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
  readFirst:
    - title: Arithmetic circuit complexity (Wikipedia)
      url: https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity
      why: Concise overview of arithmetic circuits, VP, VNP and the permanent versus determinant problem.
    - title: "Fortnow: VP ≠ VNP (Computational Complexity blog)"
      url: https://blog.computationalcomplexity.org/2026/11/vp-vnp.html
      why: Accessible explanation of what VP ≠ VNP asks, why it matters and why it does not settle P vs NP.
    - title: "Anthropic: VP ≠ VNP over every field (README)"
      url: https://github.com/anthropics/formal-math/tree/11b6c7e3c927df2658f513b6b68ea7f8929c62c5/vp-vnp
      why: Primary source for Anthropic's November 2026 claim and its explicit caveats on verification.
    - title: "OpenAI: history of November 23–24, 2026 releases (openai/math)"
      url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/history.md
      why: Primary changelog summarizing OpenAI's November 23 VP ≠ VNP preprint and November 24 family 379 follow-ups.
---

Fix a field $\mathbb{F}$. An **arithmetic circuit** over $\mathbb{F}$ computes formal polynomials from input variables and field scalars using addition, subtraction and multiplication gates (with unrestricted fan-out and depth). Valiant's class $\mathsf{VP}_{\mathbb{F}}$ consists of families $(f_n)$ of multivariate polynomials over $\mathbb{F}$ whose variable count, total degree and minimum arithmetic circuit size are all bounded by polynomials in $n$. The class $\mathsf{VNP}_{\mathbb{F}}$ consists of families $(f_n)$ of the form

$$
f_n(x) = \sum_{e \in \{0,1\}^{r(n)}} g_n(x, e)
$$

for some polynomially bounded $r(n)$ and some family $(g_n) \in \mathsf{VP}_{\mathbb{F}}$. Clearly $\mathsf{VP}_{\mathbb{F}} \subseteq \mathsf{VNP}_{\mathbb{F}}$. **Valiant's conjecture** asks whether $\mathsf{VP}_{\mathbb{F}} \ne \mathsf{VNP}_{\mathbb{F}}$ over a given field $\mathbb{F}$ (or over every field).

Because the directed Hamiltonian cycle polynomial $\mathrm{HC}_n$ is $\mathsf{VNP}$-complete under algebraic projections over every field, and the $n \times n$ permanent $\mathrm{PERM}_n$ is $\mathsf{VNP}$-complete whenever $\operatorname{char}(\mathbb{F}) \ne 2$, the conjecture is equivalent to asking whether $\mathrm{HC}_n$ (and $\mathrm{PERM}_n$ outside characteristic $2$) requires superpolynomial-size arithmetic circuits. A stronger geometric form asks whether $\mathsf{VNP}_{\mathbb{F}} \not\subseteq \overline{\mathsf{VP}}_{\mathbb{F}}$, where $\overline{\mathsf{VP}}_{\mathbb{F}}$ allows approximating (border) circuits whose outputs converge coefficientwise to $f_n$ (formally, circuits over $\mathbb{F}((\varepsilon))$ outputting $f_n + \varepsilon g$, or membership in the Zariski closure over $\overline{\mathbb{F}}$).

# State of the art

**Accepted lower bounds.** For general arithmetic circuits with no restrictions on depth, cancellations or constants, the strongest accepted lower bound for an explicit degree-$d$ polynomial in $n$ variables is $\Omega(n \log d)$ (Strassen, 1973; Baur and Strassen, 1983), which gives only $\Omega(m^2 \log m)$ for the $m \times m$ permanent ($m^2$ variables, degree $m$). Stronger accepted bounds require restrictions on the model: exponential bounds for monotone circuits (Jerrum and Snir, 1982; Yehudayoff, 2019), noncommutative formulas and branching programs (Nisan, 1991), and homogeneous depth-4 circuits (Kayal, Limaye, Saha and Srinivasan; Kumar and Saraf); superpolynomial bounds for multilinear formulas (Raz, 2009) and for circuits of every constant depth (Limaye, Srinivasan and Tavenas, ECCC TR21-081 / FOCS 2021; extended to all fields by Forbes, CCC 2024). On the closely related [permanent determinantal complexity problem](../problems/permanent-determinantal-complexity-superquadratic.md), the accepted lower bound is quadratic: $\mathrm{dc}(\mathrm{perm}_m) \ge m^2/2$ (Mignon and Ressayre, 2004; Cai, Chen and Li, 2010; border version by Landsberg, Manivel and Ressayre, 2013), with an unrefereed October 2026 OpenAI claim of a cubic border bound. Mulmuley and Sohoni's Geometric Complexity Theory (GCT) programme targets the border permanent-versus-determinant separation via representation theory, though occurrence obstructions alone were shown insufficient (Ikenmeyer and Panova, 2017; Bürgisser, Ikenmeyer and Panova, 2019).

**Unrefereed AI-generated claims (November 2026).** Two AI labs posted independent, AI-generated, unrefereed claims of $\mathsf{VP} \ne \mathsf{VNP}$ over every field within hours of each other, each accompanied by a Lean 4 formalization:

- **Anthropic (23 November 2026).** In `anthropics/formal-math` (pinned at `11b6c7e3`; also Hexagon `2611.00954v1`), Anthropic released a 70-page paper (_VP ≠ VNP over every field_, authored by an internal research Claude model) and 324 Lean 4 files. It claims that over every field of characteristic $p$, every exact or approximating (formal Laurent series) arithmetic circuit for $\mathrm{HC}_m$—and for $\mathrm{PERM}_m$ when $p \ne 2$—requires more than $m^{c(\log_2 m)^{1/3}} = 2^{c(\log_2 m)^{4/3}}$ gates for all sufficiently large $m$, hence $\mathsf{VP} \subsetneq \mathsf{VNP}$ and $\mathsf{VNP} \not\subseteq \overline{\mathsf{VP}}$ over every field. Its argument uses a generalized variant of Strassen's spectral points and CAT(0) "price spaces" to set up a non-effective dichotomy between a _flat case_ (Euclidean metrics are prices) and a _contracting case_ (giving a Poincaré inequality on unitriangular groups $U_h(\mathbb{F}_2)$, tensor-network cutting into trees, and indirect diagonalization). The paper states that no human mathematician has checked the argument or the statement file, and notes that four machine/program constructions in the contracting case rely on the Lean code rather than printed proofs. The repository's own CI job (`verify (vp-vnp)`, Comparator plus `nanoda`) succeeded; DARC has not rebuilt it. See [the Anthropic claim page](../claims/vp-ne-vnp-anthropic-2026.md).
- **OpenAI (23–24 November 2026).** Less than four hours after Anthropic's GitHub merge (PR #5 merged 24 November 2026 at 01:30 UTC; OpenAI's `history.md` dates the edition 23 November 2026 and states the result was obtained on 6 November 2026), OpenAI added the 30-page manuscript _VP and VNP are different_ and a Lean formalization of exact $\mathsf{VP} \ne \mathsf{VNP}$ over every field to `openai/math`. That manuscript claims a border-circuit lower bound of $\exp(\Omega((\log n)^{5/4}))$ for an explicit $\mathsf{VNP}$ family, transferring to $\mathrm{HC}_m$ over every field, $\mathrm{PERM}_m$ outside characteristic $2$, and border determinantal complexity. On 24 November 2026 (PR #6 merged `2026-11-25 00:18 UTC`, pinned at `3344da5999`), OpenAI added family 379 (_Euclidean tensor geometry and its applications to complexity and combinatorics_), whose papers _Euclidean geometry in the asymptotic spectrum of tensors_ (86 pages), _Paths, trees and grids separate Valiant's hierarchy_ (21 pages) and _Circuit lower bounds for Hamiltonian cycle and the permanent_ (80 pages) subsume the 23 November preprint, claiming $\mathsf{VF} \subsetneq \mathsf{VBP} \subsetneq \mathsf{VP} \subsetneq \mathsf{VNP}$ over every field (with an $n \times n$ grid state sum needing $n^{\Omega((\log n)^{1/12})}$ degree-component border gates) and a degree-component border lower bound of $\exp(c(\log N)^2/(\log\log N)^2)$ for $\mathrm{HC}_N$ and (outside characteristic $2$) $\mathrm{Per}_N$. OpenAI's repository has no Lean CI workflow, marks `review.status: unchecked` in `formalization.yaml`, leaves the quantitative border bounds unformalized (formalizing exact class separations and eventual superpolynomial exact lower bounds), and has no published external expert review. See [the OpenAI claim page](../claims/vp-ne-vnp-openai-2026.md).

Because neither claim has been peer-reviewed or independently audited by complexity theorists, the problem stays `OPEN` here.

# Applications

No direct practical or cryptographic applications are affected: arithmetic circuits compute formal polynomials over fields and their extensions rather than Boolean functions on bit strings, so $\mathsf{VP} \ne \mathsf{VNP}$ does not settle [P versus NP](../problems/p-vs-np.md) or break or secure any deployed cryptosystem. Its impact is foundational within theoretical computer science: it is the central lower-bound problem of algebraic complexity, directly settles the asymptotic permanent-versus-determinant question (and, in its border form, the target of Mulmuley and Sohoni's GCT programme), and interacts with derandomization of polynomial identity testing via the Kabanets–Impagliazzo hardness–randomness bridge (though both November 2026 claims give quasipolynomial rather than exponential lower bounds, and Anthropic's paper notes it has not worked out what its bound gives for PIT).

# Resolution criteria

A proof separating $\mathsf{VP}_{\mathbb{F}}$ from $\mathsf{VNP}_{\mathbb{F}}$ (or showing equality, though separation is overwhelmingly expected) over a standard field such as $\mathbb{C}$—or, as both November 2026 claims target, over every field—accepted by algebraic-complexity experts after refereeing or thorough community verification. For a claim backed by a Lean formalization, resolution also requires an independent sandboxed rebuild, an axiom and `sorry` audit, and human expert confirmation that the formalized definitions of arithmetic circuits, $\mathsf{VP}$, $\mathsf{VNP}$ and (where claimed) border approximation faithfully match the standard literature.

# Rating rationale

Rated against the accepted literature, not the unrefereed November 2026 claims. Difficulty 92: the algebraic counterpart of P vs NP, open since 1979 with only $\Omega(n \log d)$ lower bounds accepted for unrestricted arithmetic circuits, sitting above the superquadratic permanent determinantal complexity problem (74), matrix multiplication exponent (82) and ETH (90), and below P vs NP (100). Application value 18: primarily conceptual and structural, with indirect links to PIT derandomization, above permanent determinantal complexity (12) and ETH (15). Leverage 75: the organizing conjecture of algebraic complexity theory, permanent versus determinant and GCT, below ETH (80) and P vs NP (100).

# Work mix rationale

Separating VP from VNP is almost entirely theoretical: general circuit lower bounds resist naive rank methods and require new algebraic, geometric or diagonalization techniques. Computation enters only through proof assistants (Lean 4) checking formalizations of candidate proofs.

# Verification

Route: expert review of the two independent November 2026 manuscripts and independent audits of their Lean 4 formalizations. Neither Mathlib nor DeepMind's Formal Conjectures corpus currently provides a community-audited statement of $\mathsf{VP} \ne \mathsf{VNP}$, so both labs supply self-contained statement files (`Statement.lean` in `anthropics/formal-math`, importing only Mathlib; `ComparatorChallenges/VPVNP.lean` and `ComparatorChallenges/ArithmeticHierarchy.lean` in `openai/math`, importing only Mathlib). Verification requires: (1) independent clean-machine rebuilds at the pinned commits with Comparator and an independent second kernel such as `nanoda`, checking for `sorry`, `native_decide` and non-standard axioms; (2) line-by-line human audits of the formal definitions of circuits, formal Laurent-series border approximation, $\mathsf{VP}$, $\mathsf{VNP}$, $\mathrm{PERM}_m$ and $\mathrm{HC}_m$; and (3) expert mathematical review of the written arguments, especially Anthropic's non-effective flat/contracting dichotomy and Lean-only contracting-case machine constructions, and OpenAI's Euclidean spectral-flat existence argument, curve-slicing/Cartier-operator boundary evaluation, and follow-up hierarchy and permanent/HC bounds.

# Plain explanation

In algebra, you can build a formula by starting with variables and numbers and repeatedly adding and multiplying intermediate results. The size of the formula—allowing you to reuse earlier results—is called its arithmetic circuit size.

Two famous matrix formulas look almost identical on paper: the determinant and the permanent. Both sum over all ways of picking one entry from each row and column, multiplying those entries together. The only difference is that the determinant puts minus signs on half the terms, while the permanent adds them all up. Because of those minus signs, the determinant has clever shortcuts that compute it quickly. Nobody has ever found a fast shortcut for the permanent.

In 1979 Leslie Valiant turned this contrast into a general question: VP is the family of polynomial formulas that can be computed with a manageable number of additions and multiplications, and VNP is the family of formulas built by adding up exponentially many easy pieces (the permanent is the hardest member of VNP). Asking whether VP differs from VNP is the algebra version of the famous P versus NP question.

Crucially, answering VP versus VNP does not answer P versus NP. An arithmetic circuit has to give the right algebra formula for every number—even complex numbers—using only additions and multiplications, whereas a normal computer can inspect and manipulate individual bits.

For nearly fifty years, mathematicians could prove strong lower bounds only for restricted kinds of arithmetic circuits, such as shallow circuits or formulas without subtraction. In late November 2026, within hours of each other, Anthropic and OpenAI each released AI-generated manuscripts and computer-checked Lean 4 code claiming that VP does not equal VNP over every field, and OpenAI followed up a day later with broader preprints claiming to separate Valiant's entire hierarchy and strengthen the bounds for the permanent and Hamiltonian cycle. Neither lab's proof has been checked by human mathematicians or peer-reviewed yet, so the problem remains open until experts audit both the arguments and the computer-checked definitions.

# Student explanation

**Definitions.** Over a field $\mathbb{F}$, an _arithmetic circuit_ is a directed acyclic graph whose inputs are variables $x_1,\dots,x_n$ and field constants, and whose internal gates perform addition, subtraction or multiplication, outputting a formal polynomial in $\mathbb{F}[x_1,\dots,x_n]$. The class $\mathsf{VP}_{\mathbb{F}}$ contains families $(f_n)$ whose number of variables, total degree and circuit size all grow at most polynomially in $n$. The class $\mathsf{VNP}_{\mathbb{F}}$ contains families expressible as $f_n(x)=\sum_{e\in\{0,1\}^{r(n)}} g_n(x,e)$ for polynomially bounded $r(n)$ and $(g_n)\in\mathsf{VP}_{\mathbb{F}}$.

**Permanent versus determinant.** By Berkowitz's division-free algorithm, the $m\times m$ determinant lies in $\mathsf{VP}_{\mathbb{F}}$ over every field. By contrast, Valiant (1979) proved that the $m\times m$ permanent $\mathrm{PERM}_m=\sum_{\sigma\in S_m}\prod_{i=1}^m x_{i,\sigma(i)}$ is $\mathsf{VNP}$-complete whenever $\operatorname{char}(\mathbb{F})\ne 2$, and the directed Hamiltonian cycle polynomial $\mathrm{HC}_m$ is $\mathsf{VNP}$-complete over every field (including characteristic 2, where permanent and determinant coincide). Thus $\mathsf{VP}_{\mathbb{F}}\ne\mathsf{VNP}_{\mathbb{F}}$ is equivalent to a superpolynomial arithmetic circuit lower bound for $\mathrm{HC}_m$ (and for $\mathrm{PERM}_m$ when $\operatorname{char}(\mathbb{F})\ne 2$).

**Border complexity and GCT.** Allowing circuits whose constants depend on a formal parameter $\varepsilon$ (over $\mathbb{F}((\varepsilon))$) and output $f_n+\varepsilon g$ with $g$ having coefficients in $\mathbb{F}[[\varepsilon]]$—equivalently, taking Zariski closures over $\overline{\mathbb{F}}$—defines the border class $\overline{\mathsf{VP}}_{\mathbb{F}}$. Separating $\mathsf{VNP}$ from $\overline{\mathsf{VP}}$ (and specifically excluding padded permanents from determinant orbit closures) is the target of Mulmuley and Sohoni's Geometric Complexity Theory (GCT).

**Relation to P versus NP.** Separating $\mathsf{VP}$ from $\mathsf{VNP}$ does _not_ imply $\mathsf{P}\ne\mathsf{NP}$, because arithmetic circuits must compute formal polynomials over arbitrary field elements and extensions rather than merely matching Boolean truth tables on $\{0,1\}$. In the opposite direction, Bürgisser (2000) showed that $\mathsf{NP}\not\subseteq\mathsf{P/poly}$ implies $\mathsf{VP}\ne\mathsf{VNP}$ over $\mathbb{C}$ assuming the Generalized Riemann Hypothesis for Dedekind zeta functions.

**Accepted progress before late 2026.** For unrestricted circuits, only Baur and Strassen's $\Omega(n\log d)$ bound (1983) was accepted ($\Omega(m^2\log m)$ for $\mathrm{PERM}_m$). Major breakthroughs came in restricted models, notably superpolynomial lower bounds for multilinear formulas (Raz, 2009) and for arbitrary constant-depth circuits (Limaye, Srinivasan and Tavenas, 2021; Forbes, 2024).

**Unrefereed AI claims (November 2026).** On 23 November 2026 Anthropic released a 70-page paper by Claude and a 324-file Lean 4 development claiming an $m^{c(\log_2 m)^{1/3}}$ lower bound for exact and approximating circuits computing $\mathrm{HC}_m$ (and $\mathrm{PERM}_m$ for $p\ne 2$) over every field, via a non-effective flat-versus-contracting dichotomy on CAT(0) tensor "price spaces". Hours later, OpenAI released a 30-page preprint claiming an $\exp(\Omega((\log n)^{5/4}))$ border-circuit lower bound and a Lean proof of exact $\mathsf{VP}\ne\mathsf{VNP}$, followed on 24 November by family 379 preprints claiming to construct Euclidean spectral flats in every dimension, separate the full hierarchy $\mathsf{VF}\subsetneq\mathsf{VBP}\subsetneq\mathsf{VP}\subsetneq\mathsf{VNP}$, and raise the degree-component border bound for $\mathrm{HC}_N$ and $\mathrm{Per}_N$ to $\exp(c(\log N)^2/(\log\log N)^2)$. Neither lab's proof has been vetted by human experts yet, so both are treated as unverified claims.
