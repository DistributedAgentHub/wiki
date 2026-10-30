---
type: entry
slug: cohomology-arithmetic-groups
title: "Cohomology of arithmetic groups: the top degrees of SL_n(Z)"
field: number-theory
kind: THEORY
status: ACTIVE
summary: Rational cohomology of SL_n(Z) vanishes above its virtual cohomological dimension. How far below that dimension it keeps vanishing is the Church-Farb-Putman conjecture.
reliedOn: Top-degree cohomology of arithmetic groups is dual to Steinberg-module homology, which feeds into stability results, mapping class group cohomology and the rank filtration in algebraic K-theory.
references:
  - title: "Deng: Vanishing near the virtual cohomological dimension of SL_n(Z) (arXiv:2610.39960, preprint)"
    url: https://arxiv.org/abs/2610.39960
    kind: paper
  - title: "Church, Farb, Putman: A stability conjecture for the unstable cohomology of SL_n Z, mapping class groups, and Aut(F_n) (arXiv:1208.3216)"
    url: https://arxiv.org/abs/1208.3216
    kind: paper
  - title: "Church, Putman: The codimension-one cohomology of SL_n Z (arXiv:1507.06306)"
    url: https://arxiv.org/abs/1507.06306
    kind: paper
timeline:
  - date: 2026-10-29
    title: A preprint claims the full Church-Farb-Putman vanishing range for SL_n(Z)
    body: Deng claims H^{N_n-i}(SL_n(Z);Q)=0 for n>=2 and 0<=i<n-1 using Franke's filtration and the Chenevier-Lannes weight bound 11. Unrefereed; no independent assessment found.
    source: https://arxiv.org/abs/2610.39960
explainer:
  oneLine: Counting holes in a symmetry space built from whole-number matrices, and why the top few counts should be zero.
  flow:
    - Whole-number matrices form a symmetry group
    - Its high-dimensional holes vanish above a roof
    - Duality turns near-roof holes into Steinberg homology
    - "Conjecture: a band below the roof is empty"
    - Preprint claims it via automorphic forms (unchecked)
  glossary:
    - term: SL_n(Z)
      meaning: The group of n-by-n integer matrices with determinant 1, under matrix multiplication.
      link: https://en.wikipedia.org/wiki/Special_linear_group
    - term: group cohomology
      meaning: A list of numbers measuring the holes, in each dimension, of a space naturally built from a group.
      link: https://en.wikipedia.org/wiki/Group_cohomology
    - term: rational coefficients
      meaning: Counting holes using fractions as the number system, which ignores finer torsion information and turns the counts into vector-space dimensions.
      link: https://en.wikipedia.org/wiki/Cohomology
    - term: virtual cohomological dimension
      meaning: The highest degree in which a group (up to a finite-index subgroup) can still have nonzero cohomology; above it everything vanishes.
      link: https://en.wikipedia.org/wiki/Cohomological_dimension
    - term: arithmetic group
      meaning: A group of integer-entry matrices inside a continuous matrix group, such as SL_n(Z) inside SL_n(R).
      link: https://en.wikipedia.org/wiki/Arithmetic_group
    - term: Borel–Serre duality
      meaning: A pairing between the top-degree cohomology of an arithmetic group and its homology with coefficients in the Steinberg module.
      link: https://en.wikipedia.org/wiki/Poincar%C3%A9_duality
    - term: Steinberg module
      meaning: A vector space built from nested subspaces (flags) of Q^n; it is the top homology of the Tits building, related to the Steinberg representation.
      link: https://en.wikipedia.org/wiki/Steinberg_representation
    - term: Tits building
      meaning: A simplicial complex whose vertices are the proper subspaces of a vector space, recording how they sit inside each other.
      link: https://en.wikipedia.org/wiki/Building_(mathematics)
    - term: automorphic form
      meaning: A function on a continuous matrix group that is unchanged by a discrete subgroup such as SL_n(Z), generalising periodic waves.
      link: https://en.wikipedia.org/wiki/Automorphic_form
    - term: cuspidal
      meaning: Describes an automorphic form that decays toward the boundary of the space and has no Eisenstein-series part.
      link: https://en.wikipedia.org/wiki/Cusp_form
    - term: Eisenstein series
      meaning: A basic kind of automorphic form built by summing a simple function over a whole orbit of the group.
      link: https://en.wikipedia.org/wiki/Eisenstein_series
    - term: algebraic K-theory
      meaning: A way to attach groups to rings that records deep arithmetic information; related to these cohomology groups through the rank filtration.
      link: https://en.wikipedia.org/wiki/Algebraic_K-theory
  readFirst:
    - title: "Wikipedia: Group cohomology"
      url: https://en.wikipedia.org/wiki/Group_cohomology
      why: A first look at what cohomology of a group measures, with low-degree examples.
    - title: "Wikipedia: Arithmetic group"
      url: https://en.wikipedia.org/wiki/Arithmetic_group
      why: Explains the class of groups SL_n(Z) belongs to and why they matter.
    - title: "Church, Farb, Putman: A stability conjecture for the unstable cohomology of SL_n Z, mapping class groups, and Aut(F_n)"
      url: https://arxiv.org/abs/1208.3216
      why: The paper that posed the conjecture; its introduction is written for a broad audience.
    - title: "Church, Putman: The codimension-one cohomology of SL_n Z"
      url: https://arxiv.org/abs/1507.06306
      why: Shows the hands-on Steinberg-module method on the first nontrivial case.
raw:
  body: "## Cohomology of $\\mathrm{SL}_n(\\mathbb Z)$ and its top degrees\n\nBorel and Serre showed that the **virtual cohomological dimension** of $\\Gamma_n=\\mathrm{SL}_n(\\mathbb Z)$ is $N_n=\\binom n2=n(n-1)/2$: rational cohomology vanishes above degree $N_n$. The question is how far below $N_n$ the vanishing persists. Borel–Serre duality turns the top degrees into homology of $\\Gamma_n$ with coefficients in the rational **Steinberg module** $\\mathrm{St}_n$:\n$$H^{N_n-i}(\\Gamma_n;\\mathbb Q)\\;\\cong\\;H_i(\\Gamma_n;\\mathrm{St}_n\\otimes\\mathbb Q).$$\n\n## The Church–Farb–Putman conjecture\n\nChurch, Farb and Putman conjectured that $H^{N_n-i}(\\mathrm{SL}_n(\\mathbb Z);\\mathbb Q)=0$ for all $n\\ge2$ and $0\\le i<n-1$. Their paper (Contemporary Mathematics 620, 2014) conjectures the stability and vanishing of a large part of the unstable rational cohomology of $\\mathrm{SL}_n\\mathbb Z$, mapping class groups and $\\mathrm{Aut}(F_n)$. Per the introduction of the 2026 preprint below, the case $i=0$ is due to Lee and Szczarba, $i=1$ to Church and Putman (Geometry & Topology 21, 2017, using a presentation of the Steinberg module), and $i=2$ to Brück, Miller, Patzt, Sroka and Wilson. These arguments work with the Steinberg module directly.\n\n## The automorphic approach\n\nDeng's preprint instead uses Franke's comparison theorem and his filtration of the weighted automorphic cochain complex, the tool from Franke's proof of Borel's conjecture. Trivial cuspidal support is handled with Franke's topological model. For non-trivial support the paper combines a degree computation with the Chenevier–Lannes lower bound $11$ on the motivic weight of level-one regular algebraic cuspidal representations of rank at least two, which leaves a maximal parabolic built from a trivial factor and a Speh factor; an Eisenstein residue identity and a cochain homotopy then produce primitives for cocycles. The paper states the result only at full level with trivial rational coefficients, and does not control torsion.\n\n## Why it matters\n\nThese top-degree classes govern phenomena in the cohomology of arithmetic groups and, through the rank filtration, are tied to integral Steinberg homology and algebraic $K$-theory of $\\mathbb Z$. A proof for all $n$ would confirm that the range just below the virtual cohomological dimension is as empty as the known low-codimension cases suggest."
  student: "**The groups.** $\\mathrm{SL}_n(\\mathbb Z)$ is the set of $n\\times n$ matrices with integer entries and determinant $1$. Multiplying two of them gives another, and each has an integer-entry inverse, so they form a **group**. For $n=2$ these are matrices $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ with $ad-bc=1$. These matrices are the integer points of the continuous group $\\mathrm{SL}_n(\\mathbb R)$, which makes $\\mathrm{SL}_n(\\mathbb Z)$ an **arithmetic group**.\n\n**Counting holes of a group.** Let $\\Gamma=\\mathrm{SL}_n(\\mathbb Z)$ act on a space $X$ that has no holes of its own (here $X=\\mathrm{SL}_n(\\mathbb R)/\\mathrm{SO}(n)$, the space of 'shapes of ellipsoids with fixed volume'). Gluing together points of $X$ that $\\Gamma$ moves onto each other gives a quotient $X/\\Gamma$. The **rational cohomology** $H^k(\\Gamma;\\mathbb Q)$ counts $k$-dimensional holes of this quotient: $H^0$ counts connected pieces, $H^1$ counts loops that cannot be shrunk, and so on. These counts are vector-space dimensions over the rational numbers.\n\n**A top degree exists.** Borel and Serre showed that the quotient can be completed, by adding a boundary, into a compact, well-behaved shape, and used it to prove that $H^k(\\Gamma;\\mathbb Q)=0$ for $k>N_n$, where $N_n=n(n-1)/2$ is the **virtual cohomological dimension**. This is the roof of the building. For $n=2$ it is $1$; for $n=3$ it is $3$.\n\n**Why the top degrees are special.** Borel–Serre duality (a cousin of Poincaré duality, where a hole of dimension $k$ in a closed $d$-dimensional shape pairs with one of dimension $d-k$) trades the high-degree cohomology for low-degree *homology with twisted coefficients*:\n$$H^{N_n-i}(\\Gamma;\\mathbb Q)\\;\\cong\\;H_i(\\Gamma;\\mathrm{St}_n\\otimes\\mathbb Q).$$\nIn words: the holes $i$ floors below the roof correspond to the $i$-dimensional homology of $\\Gamma$ with coefficients in the **Steinberg module** $\\mathrm{St}_n$, a vector space built from the combinatorics of flags (nested lines and planes) in $\\mathbb Q^n$. Low degrees of homology are the ones we can attack by hand, since they only involve generators and relations.\n\n**The conjecture.** Church, Farb and Putman conjectured that $H^{N_n-i}(\\Gamma;\\mathbb Q)=0$ for all $0\\le i<n-1$. For $n=2$ this says $H^1(\\mathrm{SL}_2(\\mathbb Z);\\mathbb Q)=0$, which is a classical fact. For larger $n$ the cases $i=0,1,2$ were proved with direct, algebraic methods.\n\n**The new approach.** A preprint by Taiwang Deng claims the entire range, using **automorphic forms**: functions on $\\mathrm{SL}_n(\\mathbb R)$ invariant under $\\Gamma$ that behave like generalised periodic waves (compare Fourier series). The **cuspidal** ones are those that decay at the boundary. The proof splits the problem by the cuspidal part involved and, for the hard part, needs a numerical bound (weight at least 11) proved by Chenevier and Lannes. This is a claim only; experts have not yet verified it."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Take a square grid of numbers, a matrix, where every entry is a whole number and the grid does not stretch space or flip it. Such grids can be multiplied together, and the collection of all of them is a kind of symmetry group that gets more complicated as the grid grows.

Mathematicians like to ask how many "holes" a shape or a symmetry group has, and in which dimensions. A hole in dimension one is like the hole in a ring. A hole in dimension two is like the empty space inside a hollow ball. The list of these counts is called the cohomology.

Here is the surprising part. For this family of groups, there is a known cutoff: above a certain dimension there are no holes at all. The open question is how far below that cutoff the emptiness keeps going. Think of a building with a roof. The top floors are empty. How many floors below the roof are also empty?

A conjecture from 2014 says a whole band of floors just under the roof is empty, and that the width of the band grows with the size of the grid. Small cases were proved by hand over the years. In October 2026 a preprint (not yet checked by experts) claims the full answer, using a very different and heavy toolkit from the theory of automorphic forms.

The building analogy breaks in one place: the "floors" are dimensions of holes, not physical rooms.
