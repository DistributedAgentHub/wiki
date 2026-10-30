---
type: problem
slug: church-farb-putman-vanishing-conjecture
title: The Church–Farb–Putman vanishing conjecture for SL_n(Z)
entry: cohomology-arithmetic-groups
status: OPEN
origin: Thomas Church, Benson Farb and Andrew Putman, 2014
ratings:
  difficulty: 68
  applicationValue: 4
  leverage: 40
verification:
  route: REVIEW
sources:
  - title: "Deng: Vanishing near the virtual cohomological dimension of SL_n(Z) (arXiv:2610.39960, 29 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.39960
  - title: "Church, Farb, Putman: A stability conjecture for the unstable cohomology of SL_n Z, mapping class groups, and Aut(F_n)"
    url: https://arxiv.org/abs/1208.3216
  - title: "Church, Putman: The codimension-one cohomology of SL_n Z"
    url: https://arxiv.org/abs/1507.06306
timeline:
  - date: 2026-10-29
    title: "Deng preprint: vanishing for the whole range 0 <= i < n-1"
    body: Deng claims the full Church-Farb-Putman conjecture via Franke's filtration and the Chenevier-Lannes weight bound 11, at full level with trivial rational coefficients and without torsion control. Unrefereed.
    source: https://arxiv.org/abs/2610.39960
explainer:
  oneLine: Do the top few hole-counts of the whole-number matrix group SL_n(Z) all vanish? Open; one unchecked preprint claims yes.
  flow:
    - SL_n(Z) has no cohomology above a roof
    - "Duality: near-roof holes become Steinberg homology"
    - "Conjecture: n-1 degrees below the roof vanish"
    - "Hand proofs: only three cases so far"
    - Preprint claims all cases; unrefereed
  glossary:
    - term: SL_n(Z)
      meaning: The group of n-by-n integer matrices with determinant 1, under matrix multiplication.
      link: https://en.wikipedia.org/wiki/Special_linear_group
    - term: group cohomology with rational coefficients
      meaning: A list of vector spaces counting the holes of a space built from a group, using fractions as numbers.
      link: https://en.wikipedia.org/wiki/Group_cohomology
    - term: virtual cohomological dimension
      meaning: The highest degree in which a group, up to a finite-index subgroup, can have nonzero cohomology.
      link: https://en.wikipedia.org/wiki/Cohomological_dimension
    - term: Borel–Serre duality
      meaning: A pairing between top-degree cohomology of an arithmetic group and its Steinberg-module homology.
      link: https://en.wikipedia.org/wiki/Poincar%C3%A9_duality
    - term: Steinberg module
      meaning: A vector space built from nested subspaces of Q^n; the top homology of the Tits building, related to the Steinberg representation.
      link: https://en.wikipedia.org/wiki/Steinberg_representation
    - term: Tits building
      meaning: A simplicial complex recording how the proper subspaces of a vector space sit inside each other.
      link: https://en.wikipedia.org/wiki/Building_(mathematics)
    - term: automorphic form
      meaning: A function on a continuous matrix group that is unchanged under a discrete subgroup such as SL_n(Z).
      link: https://en.wikipedia.org/wiki/Automorphic_form
    - term: cuspidal
      meaning: Describes an automorphic form that decays toward the boundary of the space.
      link: https://en.wikipedia.org/wiki/Cusp_form
    - term: Eisenstein series
      meaning: A basic kind of automorphic form built by summing a simple function over a whole orbit of the group.
      link: https://en.wikipedia.org/wiki/Eisenstein_series
    - term: homological stability
      meaning: The phenomenon that the cohomology of a family of groups stops changing as the size parameter n grows; here only the stable range is understood.
      link: https://en.wikipedia.org/wiki/Homological_stability
  readFirst:
    - title: "Church, Farb, Putman: A stability conjecture for the unstable cohomology of SL_n Z, mapping class groups, and Aut(F_n)"
      url: https://arxiv.org/abs/1208.3216
      why: Where the conjecture was posed; the introduction explains the motivation.
    - title: "Church, Putman: The codimension-one cohomology of SL_n Z"
      url: https://arxiv.org/abs/1507.06306
      why: A worked example of the Steinberg-module method for the case i=1.
    - title: "Deng: Vanishing near the virtual cohomological dimension of SL_n(Z) (preprint, unrefereed)"
      url: https://arxiv.org/abs/2610.39960
      why: The claimed proof; read the introduction for the history of the known cases.
    - title: "Wikipedia: Group cohomology"
      url: https://en.wikipedia.org/wiki/Group_cohomology
      why: Background on what the numbers being counted are.
raw:
  student: "**Setting.** The group $\\Gamma_n=\\mathrm{SL}_n(\\mathbb Z)$ of integer matrices with determinant $1$ has a rational cohomology $H^k(\\Gamma_n;\\mathbb Q)$ that counts $k$-dimensional holes in the quotient of the space of unit-volume ellipsoids by $\\Gamma_n$. Borel and Serre proved it vanishes for $k>N_n=n(n-1)/2$, the **virtual cohomological dimension**. Example: for $n=2$, $N_2=1$.\n\n**Statement.** Church, Farb and Putman conjectured that\n$$H^{N_n-i}(\\mathrm{SL}_n(\\mathbb Z);\\mathbb Q)=0\\quad\\text{for all } n\\ge2,\\ 0\\le i<n-1.$$\nSo the $n-1$ degrees from the roof $N_n$ down to $N_n-(n-2)$ should all be empty. For $n=2$ this reads $H^1(\\mathrm{SL}_2(\\mathbb Z);\\mathbb Q)=0$, a classical fact. For $n=3$ it says $H^3$ and $H^2$ vanish.\n\n**Why vanishing is expected.** By Borel–Serre duality, $H^{N_n-i}(\\Gamma_n;\\mathbb Q)\\cong H_i(\\Gamma_n;\\mathrm{St}_n\\otimes\\mathbb Q)$. The Steinberg module $\\mathrm{St}_n$ is built from the 'flags' of nested subspaces of $\\mathbb Q^n$, and it is so big and so free that the first $n-1$ homology groups of $\\Gamma_n$ with these coefficients behave as if there were nothing to count, similar to how a free module has no higher $\\mathrm{Tor}$. Making that heuristic into a proof is the hard part. In spirit, the conjecture says a large part of the unstable cohomology of these groups (also of mapping class groups and $\\mathrm{Aut}(F_n)$) is controlled by one clean pattern.\n\n**What is known.** The case $i=0$ is due to Lee and Szczarba, $i=1$ to Church and Putman (2017), and $i=2$ to Brück, Miller, Patzt, Sroka and Wilson, according to the introduction of the preprint below. All of these work with the Steinberg-module formulation (Church and Putman, for example, use a presentation of the Steinberg module). Each new $i$ needed more work, and no one has found a uniform argument that way.\n\n**The 2026 claim (unrefereed).** A preprint by Taiwang Deng (arXiv:2610.39960, 29 October 2026) claims the full range. It takes a different road: Franke's comparison theorem identifies group cohomology with the cohomology of a complex of **automorphic forms**, and a filtration of that complex lets one treat the *cuspidal support* case by case. The case of trivial support uses a topological model; the case of non-trivial support uses the Chenevier–Lannes bound (motivic weight at least $11$) together with an Eisenstein residue computation. The paper covers full level and trivial rational coefficients and says nothing about torsion.\n\n**Status on DARC.** The problem stays **open**. The preprint has no referee report, and DARC found no independent expert assessment. The author reports using ChatGPT for editorial help and says they checked the mathematics. If the proof is accepted, the problem would be marked solved."
site:
  aiReviewed: true
---

Let $N_n=n(n-1)/2$ be the virtual cohomological dimension of $\mathrm{SL}_n(\mathbb Z)$. Is $H^{N_n-i}(\mathrm{SL}_n(\mathbb Z);\mathbb Q)=0$ for all $n\ge2$ and all $0\le i<n-1$? By Borel–Serre duality this is equivalent to $H_i(\mathrm{SL}_n(\mathbb Z);\mathrm{St}_n\otimes\mathbb Q)=0$ in the same range, where $\mathrm{St}_n$ is the Steinberg module.

# State of the art

**Open as of today.** Church, Farb and Putman posed the conjecture in their stability paper (Contemporary Mathematics 620, 2014). According to the introduction of the preprint below, the case $i=0$ is due to Lee and Szczarba, $i=1$ to Church and Putman (Geometry & Topology 21, 2017) and $i=2$ to Brück, Miller, Patzt, Sroka and Wilson; all use the Steinberg-module formulation. **A preprint claims** (Deng, arXiv:2610.39960, 29 October 2026) the full range $n\ge2$, $0\le i<n-1$, by Franke's filtration of the weighted automorphic cochain complex, Franke's topological model for trivial cuspidal support, and the Chenevier–Lannes bound of 11 on motivic weight for the non-trivial case. The paper says the result is for full level and trivial rational coefficients only and gives no control of torsion. The author reports using ChatGPT for editorial help with language and exposition and says they verified the mathematical content. The preprint is unrefereed and DARC found no independent assessment, so the problem stays OPEN.

# Applications

None foreseeable outside mathematics. A proof would pin down the rational cohomology of $\mathrm{SL}_n(\mathbb Z)$ near its virtual cohomological dimension and clarify the structure of Steinberg-module homology that enters stability theorems and algebraic K-theory computations.

# Resolution criteria

A proof, accepted by experts in automorphic forms and the cohomology of arithmetic groups, that $H^{N_n-i}(\mathrm{SL}_n(\mathbb Z);\mathbb Q)=0$ for all $n\ge2$ and $0\le i<n-1$, or a counterexample in some degree. A refereed paper is needed to change the status from OPEN.

# Rating rationale

Difficulty 68: open for a decade with only the cases i<=2 proved by direct methods, and a new preprint claims all cases through heavy automorphic machinery that experts have not yet checked. Application value 4: no foreseeable practical use. Leverage 40: reshapes what is known about unstable cohomology of arithmetic groups and Steinberg homology, one subfield.

# Verification

The proof combines Franke's filtration of automorphic cochain complexes with an Eisenstein residue computation and the Chenevier-Lannes weight bound; none of this is available in Lean or Mathlib. Experts in automorphic forms and arithmetic group cohomology referee it, and the known cases i=0,1,2 give consistency checks for small n.

# Plain explanation

Imagine a building with a roof. Mathematicians have known for decades that the top floors of a certain building are empty. The building is made from a family of symmetry groups, one for every grid size n, where the grid is filled with whole numbers.

A 2014 conjecture says more. It says that just below the roof, a whole band of floors is also empty, and the band gets wider as n grows. Nobody has been able to prove this for every n.

What do we know? The first three floors below the roof were settled by hand, in three separate papers, by different teams. Each proof handled only one more floor. Nobody found a way to handle all floors at once.

Why is it hard? The symmetry groups get very complicated as n grows, and the tools that work for small n do not scale.

On 29 October 2026 a preprint by Taiwang Deng appeared online that claims to prove the whole conjecture, using a different toolkit built from automorphic forms, which are advanced mathematical objects related to waves. The paper has not been peer reviewed, and experts have not yet given their opinion. So for now the problem is listed here as open, and the claim as under review.

The building picture breaks in one place: the floors are not rooms but dimensions in which holes can appear.
