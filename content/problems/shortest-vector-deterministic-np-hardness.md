---
type: problem
slug: shortest-vector-deterministic-np-hardness
title: Unconditional deterministic NP-hardness of Euclidean (ℓ₂) shortest vector problem, and at polynomial factors
entry: lattice-cryptography
status: PARTIAL
origin: van Emde Boas (1981) conjectured NP-hardness; Ajtai (1998) randomised hardness; Hair and Sahai (STOC 2026) deterministic hardness for p > 2
ratings:
  difficulty: 45
  applicationValue: 11
  leverage: 26
workMix:
  theory: 95
  engineering: 0
  compute: 5
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Hair, Sahai: SVP_p is Deterministically NP-Hard for all p > 2, Even to Approximate Within a Factor of 2^(log^(1−ε) n) (STOC 2026)"
    url: https://arxiv.org/abs/2511.04125
  - title: "Hair, Sahai: Deterministic Hardness of Approximation For SVP in all Finite ℓp Norms (arXiv April 2026, unrefereed)"
    url: https://arxiv.org/abs/2604.01451
  - title: "Hair, Sahai: Polynomial-Factor Deterministic NP-Hardness for SVP in Every ℓp Norm with p > 2 (arXiv August 2026, unrefereed)"
    url: https://arxiv.org/abs/2608.14529
  - title: "Micciancio: Inapproximability of the Shortest Vector Problem: Toward a Deterministic Reduction (Theory of Computing 2012)"
    url: https://theoryofcomputing.org/articles/v008a022/
  - title: "Bennett, Peikert: Hardness of the (Approximate) Shortest Vector Problem: A Simple Proof via Reed-Solomon Codes"
    url: https://arxiv.org/abs/2202.07736
  - title: "Ajtai: The shortest vector problem in L2 is NP-hard for randomized reductions (STOC 1998)"
    url: https://doi.org/10.1145/276698.276705
links:
  - to: lwe-quantum-hardness
    kind: RELATED
    note: "Both concern the complexity of GapSVP: Regev’s reduction bases LWE on GapSVP at polynomial factors, where NP-hardness is ruled out by NP ∩ coNP membership, while this problem asks for deterministic NP-hardness at smaller factors."
timeline:
  - date: 1998-05-23
    title: SVP is NP-hard under randomised reductions
    body: Ajtai proved the Euclidean SVP NP-hard for randomised reductions (STOC 1998).
    source: https://doi.org/10.1145/276698.276705
  - date: 2012-01-01
    title: One-sided-error reduction and derandomisation route
    body: Micciancio proved hardness within any constant by reductions with one-sided error and suggested derandomisation as a route to deterministic hardness.
    source: https://theoryofcomputing.org/articles/v008a022/
  - date: 2025-11-06
    title: Deterministic NP-hardness of SVP_p for p > 2
    body: Hair and Sahai gave the first deterministic NP-hardness proof for finite ℓp norms, p > 2 (STOC 2026).
    source: https://arxiv.org/abs/2511.04125
  - date: 2026-04-01
    title: Conditional deterministic hardness including ℓ2
    body: Hair and Sahai obtained deterministic hardness within 2^((log n)^(1−o(1))) for all finite ℓp, including ℓ2, under the assumption NP ⊄ ∩_δ DTIME(exp(n^δ)) (preprint, unrefereed).
    source: https://arxiv.org/abs/2604.01451
explainer:
  oneLine: Prove, with no random tricks, that finding the shortest arrow in a lattice is NP-hard in ordinary geometry.
  flow:
    - "Lattice: regular grid of points"
    - Find the point nearest the origin
    - NP-hard, but proof needs randomness
    - Want a proof with no randomness
    - Open for ordinary distance
  glossary:
    - term: lattice
      meaning: A regular grid of points made from whole-number combinations of a few basic arrows.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: shortest vector problem
      meaning: Finding the nonzero lattice point closest to the origin.
      link: https://en.wikipedia.org/wiki/Shortest_vector_problem
    - term: NP-hard
      meaning: At least as hard as every problem in NP.
      link: https://en.wikipedia.org/wiki/NP-hardness
    - term: randomised reduction
      meaning: A translation between problems that uses random choices and works with high probability.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: deterministic reduction
      meaning: A translation between problems that uses no randomness at all.
      link: https://en.wikipedia.org/wiki/Reduction_(complexity)
    - term: ℓp norm
      meaning: A way of measuring the length of an arrow; p = 2 is the usual straight-line length.
      link: https://en.wikipedia.org/wiki/Shortest_vector_problem
    - term: approximation factor
      meaning: How far from the true shortest length an answer is allowed to be.
      link: https://en.wikipedia.org/wiki/Hardness_of_approximation
    - term: lattice-based cryptography
      meaning: Encryption whose security is based on hard lattice problems.
      link: /research/lattice-cryptography
    - term: coNP
      meaning: Problems whose no answers have short, quickly checkable proofs.
      link: https://en.wikipedia.org/wiki/Complexity_class
    - term: basis (of a lattice)
      meaning: A set of arrows whose whole-number combinations produce every point of the lattice.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: polynomial hierarchy
      meaning: A tower of complexity classes built on top of NP; its "collapse" would be a surprising result that experts believe false.
      link: https://en.wikipedia.org/wiki/Polynomial_hierarchy
  readFirst:
    - title: Shortest vector problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Shortest_vector_problem
      why: Defines the problem and its variants.
    - title: Lattice (group) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lattice_(group)
      why: A first picture of what a lattice is.
    - title: Lattice-based cryptography (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lattice-based_cryptography
      why: Why the problem matters for security.
raw:
  body: "The shortest vector problem SVP asks, given a basis of a lattice $\\mathcal L\\subset\\mathbb Z^n$, for a nonzero vector of minimum $\\ell_p$ norm $\\lambda_1^{(p)}(\\mathcal L)$; $\\mathrm{GapSVP}_\\gamma$ asks to decide $\\lambda_1\\le1$ versus $\\lambda_1>\\gamma(n)$. SVP in $\\ell_2$ is NP-hard under *randomised* reductions (Ajtai 1998), and $\\mathrm{GapSVP}_\\gamma$ is NP-hard under randomised reductions for every constant $\\gamma$ (Khot 2005; Micciancio 2012) and for $\\gamma=2^{(\\log n)^{1-\\varepsilon}}$ (Haviv and Regev 2007, under $\\mathsf{NP}\\not\\subset\\mathsf{RTIME}(2^{\\mathrm{polylog}\\,n})$). Deterministic NP-hardness for finite $\\ell_p$ was open until Hair and Sahai (STOC 2026) proved it for all $p>2$; for the Euclidean norm only a conditional result is known. *Problem: prove, from $\\mathsf P\\ne\\mathsf{NP}$ alone, that exact SVP in $\\ell_2$ (and $\\mathrm{GapSVP}_\\gamma$ for a constant $\\gamma>1$) is NP-hard under deterministic polynomial-time reductions; then extend to polynomial factors $\\gamma=n^{c}$ with $c<1/2$.* The $\\sqrt n$ ceiling is forced: $\\mathrm{GapSVP}_{\\sqrt n}\\in\\mathsf{NP}\\cap\\mathsf{coNP}$ (Aharonov and Regev 2005)."
site:
  aiReviewed: true
---

# State of the art

**Randomised hardness.** Ajtai (STOC 1998) proved SVP NP-hard under randomised reductions; Micciancio (2001) extended hardness to factors below $\sqrt2$; Khot (J. ACM 2005) to every constant under randomised reductions; Haviv and Regev (STOC 2007) to $2^{(\log n)^{1-\varepsilon}}$ by tensoring; Micciancio (Theory of Computing 2012, doi:10.4086/toc.2012.v008a022) gave reductions with one-sided error and no false positives and suggested derandomisation as the route to deterministic hardness. Bennett and Peikert (arXiv:2202.07736, 2022) gave a simpler proof via Reed–Solomon codes for all $\ell_p$ norms.

**Deterministic hardness.** Hair and Sahai (arXiv:2511.04125; STOC 2026) proved that $\mathrm{SVP}_p$ is NP-hard under deterministic reductions for all $p>2$, even to approximate within $2^{\log^{1-\varepsilon}n}$, and that exact $\mathrm{SVP}_p$ is NP-hard for finite $p>2$. Their April 2026 preprint (arXiv:2604.01451, unrefereed) obtains deterministic hardness within $2^{(\log n)^{1-o(1)}}$ for every finite $\ell_p$ norm, including $p=2$, but only under the assumption $\mathsf{NP}\not\subset\bigcap_{\delta>0}\mathsf{DTIME}(\exp(n^{\delta}))$, which is stronger than $\mathsf P\neq\mathsf{NP}$. A further Hair–Sahai preprint (arXiv:2608.14529, August 2026, unrefereed) proves deterministic NP-hardness within $M^{\varepsilon}$ for lattices of rank $M$, every $2<p<\infty$ and $0<\varepsilon<\min\{(p-2)/(4p),1/8\}$ (polynomial factors), building on an AI-generated OpenAI 2026 polynomial-gap CVP construction that is itself unrefereed; it does not cover $p=2$. No unconditional deterministic NP-hardness result for $\ell_2$ was found as of October 2026 (an absence-of-evidence statement based on arXiv, ECCC and the 2026 OpenAI manuscript list).

**Limits.** Goldreich and Goldwasser (2000) put $\mathrm{GapSVP}_{\sqrt{n/\log n}}$ in $\mathsf{coAM}$, and Aharonov and Regev (2005) put $\mathrm{GapSVP}_{\sqrt n}$ in $\mathsf{NP}\cap\mathsf{coNP}$, so NP-hardness at factors $\Omega(\sqrt n)$ would collapse the polynomial hierarchy. Cryptographic lattice problems operate at $\gamma\approx n$.

# Applications

Deterministic NP-hardness for $\ell_2$ would settle a 45-year-old question and remove the last randomness and assumption caveats from the foundations of lattice complexity. It concerns worst-case complexity, not cryptographic security, so it does not change deployed lattice cryptography; the proof techniques (explicit Reed–Solomon and Vandermonde gadgets) may inform reductions for related lattice and code problems.

# Resolution criteria

A deterministic polynomial-time reduction from an NP-complete problem to exact SVP in $\ell_2$, or to $\mathrm{GapSVP}_\gamma$ in $\ell_2$ for some constant $\gamma>1$, with proof from $\mathsf P\neq\mathsf{NP}$ alone. Extending to $\gamma=n^{c}$ for some $c>0$ in $\ell_2$ would be a further result.

# Rating rationale

Difficulty 45: a precise 45-year-old question whose neighbours fell in 2025–26 (unconditional for p > 2 at STOC 2026, conditional for p = 2 in an unrefereed preprint), so the remaining gap is to remove a subexponential-time assumption for ℓ2; momentum is strong but the p > 2 gadgets do not transfer directly. Placed above the smoothed simplex exponent (38) and below the feature-learning exponent (47). Application value 11: worst-case hardness with no effect on deployed lattice cryptography. Leverage 26: foundations of lattice complexity.

# Work mix rationale

Reduction-design proof work.

# Verification

The result is a deterministic polynomial-time reduction from an NP-complete problem to exact SVP in l_2 (or constant-factor GapSVP) assuming only P != NP. Mathlib has lattices as modules but no reduction or hardness framework, so experts verify the reduction. Checking the gadget construction on small instances can catch errors, but it is not a proof.

# Plain explanation

A lattice is a regular grid of points, like the corners of tiles on a floor, possibly slanted and in many dimensions. The shortest vector problem asks: given a description of the grid, which grid point other than the origin is closest to the origin?

In two dimensions this is easy. In hundreds of dimensions it seems extremely hard, and modern encryption designed to resist quantum computers relies on that. So people want to know how hard it is, in the strongest mathematical sense: is it NP-hard, as hard as the hardest puzzles in the NP class?

In 1998 Ajtai proved it is, but with a catch. His reduction uses random choices, so the conclusion is slightly weaker than a standard NP-hardness proof: it says the problem is hard unless random computation is surprisingly powerful. Researchers want a version with no randomness, and with the ordinary notion of distance.

For some other ways of measuring distance, a deterministic proof exists. For the usual straight-line distance, only conditional results are known: results that rely on a stronger assumption than P differs from NP.

There is also a ceiling on what to expect. For approximations to within roughly the square root of the dimension, the problem cannot be NP-hard unless the whole hierarchy of complexity classes collapses.

A proof would make the foundation of lattice problems cleaner, but it would not directly show that lattice encryption is secure, since that relies on average-case difficulty.

# Student explanation

**Definitions.** The **shortest vector problem (SVP)**: given a basis of a lattice $\mathcal L\subset\mathbb Z^n$, find a nonzero vector of minimum $\ell_p$ norm $\lambda_1^{(p)}(\mathcal L)$. $\mathrm{GapSVP}_\gamma$ is the decision version: decide whether $\lambda_1\le1$ or $\lambda_1>\gamma(n)$.

**Randomised hardness known.** SVP in $\ell_2$ is NP-hard under _randomised_ reductions (Ajtai, 1998). $\mathrm{GapSVP}_\gamma$ is NP-hard under randomised reductions for every constant $\gamma$ (Khot, 2005; Micciancio, 2012) and for $\gamma=2^{(\log n)^{1-\varepsilon}}$ (Haviv and Regev, 2007, under a stronger assumption on randomised subexponential time). Micciancio (2012) gave reductions with one-sided error and suggested derandomisation as the route to deterministic hardness.

**Deterministic hardness known.** Hair and Sahai (STOC 2026) proved that SVP in the $\ell_p$ norm is NP-hard under deterministic reductions for every finite $p>2$ (and hard to approximate within $2^{\log^{1-\varepsilon}n}$). Bennett and Peikert (2022) had given a simpler randomised-reduction proof via Reed–Solomon codes. For the Euclidean norm $p=2$, only a conditional result is known.

**The problem.** Prove, from $\mathsf P\ne\mathsf{NP}$ alone, that exact SVP in $\ell_2$ (and $\mathrm{GapSVP}_\gamma$ for a constant $\gamma>1$) is NP-hard under deterministic polynomial-time reductions; then extend to polynomial factors $\gamma=n^{c}$ with $c<1/2$.

**Newer partial results (unrefereed).** A 2026 preprint obtains deterministic hardness within $2^{(\log n)^{1-o(1)}}$ for every finite $\ell_p$ norm including $p=2$, but only under a stronger assumption than $\mathsf P\ne\mathsf{NP}$ (that NP is not contained in a subexponential deterministic time class). Another (Hair–Sahai, August 2026) proves deterministic NP-hardness within polynomial factors for $2<p<\infty$, building on an AI-generated construction for a related problem, and does not cover $p=2$. No unconditional deterministic hardness for $\ell_2$ was found as of October 2026.

**Limits.** Goldreich and Goldwasser (2000) put $\mathrm{GapSVP}_{\sqrt{n/\log n}}$ in coAM, and Aharonov and Regev (2005) put $\mathrm{GapSVP}_{\sqrt n}$ in $\mathsf{NP}\cap\mathsf{coNP}$. So NP-hardness at factors around $\sqrt n$ would collapse the polynomial hierarchy; that is why the problem stops at $c<1/2$.

**Context.** Cryptography uses _average-case_ problems like LWE, so worst-case NP-hardness does not directly justify security. But a clean deterministic proof would settle a long-standing foundational question.
