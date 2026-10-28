---
type: entry
slug: lattices-sphere-packing
title: Lattices and sphere packing
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: How densely can equal balls be packed in ℝ^d? Solved in dimensions 1, 2, 3, 8 and 24; elsewhere open, with large gaps between bounds, and tied to error-correcting codes and lattice cryptography.
reliedOn: Lattices and packings underlie error-correcting codes for the Gaussian channel, quantization, and the geometry of lattice-based cryptography, where the shortest-vector problem is the central hard task. Fourier-analytic bounds for packings (Cohn-Elkies) are also a model for linear-programming methods in coding theory.
dependsOn:
  - harmonic-analysis
  - linear-programming
references:
  - title: H. Cohn, A conceptual breakthrough in sphere packing
    url: https://arxiv.org/abs/1611.01685
    kind: paper
  - title: M. Viazovska, The sphere packing problem in dimension 8
    url: https://arxiv.org/abs/1603.04246
    kind: paper
  - title: H. Cohn, A. Kumar, S. Miller, D. Radchenko, M. Viazovska, The sphere packing problem in dimension 24
    url: https://arxiv.org/abs/1603.06518
    kind: paper
  - title: H. Cohn and N. Elkies, New upper bounds on sphere packings I
    url: https://arxiv.org/abs/math/0110009
    kind: paper
  - title: M. Campos, M. Jenssen, M. Michelen, J. Sahasrabudhe, A new lower bound for sphere packing
    url: https://arxiv.org/abs/2312.10026
    kind: paper
  - title: B. Klartag, Lattice packing of spheres in high dimensions using a stochastically evolving ellipsoid
    url: https://arxiv.org/abs/2504.05042
    kind: paper
  - title: S. Hariharan et al., Progress in formalizing sphere packing in dimension 8
    url: https://arxiv.org/abs/2604.23468
    kind: paper
timeline:
  - date: 2016-03-14
    title: Viazovska proves optimality of E8
    body: Using a modular-form construction of a function for the Cohn-Elkies linear program, Viazovska shows that no packing in $\mathbb{R}^8$ is denser than the $E_8$ lattice packing.
    source: https://arxiv.org/abs/1603.04246
  - date: 2016-03-21
    title: Cohn, Kumar, Miller, Radchenko and Viazovska solve dimension 24
    body: The Leech lattice packing is shown to be optimal in $\mathbb{R}^{24}$, and the unique optimal periodic packing.
    source: https://arxiv.org/abs/1603.06518
  - date: 2023-12-15
    title: First asymptotic improvement to Rogers' 1947 lower bound
    body: Campos, Jenssen, Michelen and Sahasrabudhe prove existence of packings of density at least $(1-o(1))\,d\log d/2^{d+1}$.
    source: https://arxiv.org/abs/2312.10026
  - date: 2025-04-07
    title: "Klartag: lattice packings of density c·d²·2^(−d)"
    body: Klartag exhibits, in every dimension, an ellipsoid of volume of order $d^2$ with no nonzero lattice points inside, improving the best lattice lower bound by a factor of order $d/\log d$ (arXiv; v2 January 2026).
    source: https://arxiv.org/abs/2504.05042
  - date: 2026-02-01
    title: Dimension-8 optimality formally verified in Lean
    body: The Hariharan–Viazovska Lean project completes a formal verification of the dimension-8 result, with the final stages done by Math Inc.'s Gauss (month only; day not asserted).
    source: https://arxiv.org/abs/2604.23468
explainer:
  oneLine: How tightly can identical balls be packed in space, in any number of dimensions?
  flow:
    - Equal balls must not overlap
    - Codes and messages are packings
    - Exact answers only in 1, 2, 3, 8, 24
    - "High dimensions: big gap remains"
  glossary:
    - term: sphere packing
      meaning: An arrangement of equal, non-overlapping balls in space.
      link: https://en.wikipedia.org/wiki/Sphere_packing
    - term: packing density
      meaning: The fraction of space covered by the balls in a packing.
      link: https://en.wikipedia.org/wiki/Sphere_packing#Dense_packing
    - term: lattice
      meaning: A regularly repeating grid of points in space generated from a few basic vectors.
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: Kepler conjecture
      meaning: The statement that the stacking used for oranges is the densest packing of balls in three dimensions.
      link: https://en.wikipedia.org/wiki/Kepler_conjecture
    - term: E8 lattice
      meaning: An exceptionally symmetric eight-dimensional lattice that gives the densest packing in eight dimensions.
      link: https://en.wikipedia.org/wiki/E8_lattice
    - term: Leech lattice
      meaning: A remarkable 24-dimensional lattice that gives the densest packing in 24 dimensions.
      link: https://en.wikipedia.org/wiki/Leech_lattice
    - term: linear programming bound
      meaning: An upper limit on packing density found by constructing a special function satisfying certain inequalities.
      link: https://en.wikipedia.org/wiki/Sphere_packing#Upper_bounds
    - term: error-correcting code
      meaning: A way of adding structure to messages so that errors from noise can be detected and fixed.
      link: https://en.wikipedia.org/wiki/Error_correction_code
    - term: kissing number
      meaning: The largest number of equal balls that can touch one central ball at the same time.
      link: https://en.wikipedia.org/wiki/Kissing_number
    - term: lattice-based cryptography
      meaning: Encryption whose security relies on how hard it is to find short vectors in a lattice.
      link: https://en.wikipedia.org/wiki/Lattice-based_cryptography
    - term: Fourier transform
      meaning: A way of splitting a function into waves of different frequencies.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: modular form
      meaning: A highly symmetric complex function; Viazovska built her special function out of them.
      link: https://en.wikipedia.org/wiki/Modular_form
  readFirst:
    - title: "Quanta: Sphere packing solved in higher dimensions"
      url: https://www.quantamagazine.org/sphere-packing-solved-in-higher-dimensions-20160330/
      why: A clear news-style account of the 2016 breakthrough.
    - title: Sphere packing - Wikipedia
      url: https://en.wikipedia.org/wiki/Sphere_packing
      why: Overview of results by dimension.
    - title: Kepler conjecture - Wikipedia
      url: https://en.wikipedia.org/wiki/Kepler_conjecture
      why: The three-dimensional story and its computer proof.
    - title: Kissing number - Wikipedia
      url: https://en.wikipedia.org/wiki/Kissing_number
      why: A close cousin of sphere packing.
raw:
  body: "## The problem\n\nA sphere packing in $\\mathbb{R}^d$ is a set of non-overlapping unit balls. Its density is the fraction of space covered; $\\Delta_d$ denotes the supremum over all packings. A *lattice packing* centres the balls at the points of a lattice $\\Lambda=\\mathbb{Z}b_1\\oplus\\cdots\\oplus\\mathbb{Z}b_d$, which is the structure most used in coding and cryptography. The lattice and non-lattice optima may differ: the best known packings in some dimensions are not lattices.\n\n## Exact solutions\n\n- $d=1$ is trivial. $d=2$ is the hexagonal lattice (Thue, with a complete proof by L. Fejes Tóth in 1940).\n- $d=3$: Kepler's conjecture, proved by Hales (with Ferguson; published 2005); the formal proof (the Flyspeck project, in HOL Light and Isabelle) was completed in 2014 and published in 2017.\n- $d=8$ and $d=24$: the $E_8$ lattice and the Leech lattice are optimal. Viazovska proved the case $d=8$ (arXiv, March 2016), and Cohn, Kumar, Miller, Radchenko and Viazovska proved $d=24$ a week later.\n\nNo other dimension is solved. Lattice-only optima are known up to dimension 8 and in dimension 24.\n\n## The linear programming method\n\nCohn and Elkies (2003) showed that if a real Schwartz function $f$ on $\\mathbb{R}^d$ satisfies $f(0)>0$, $\\hat f\\ge0$ everywhere and $f(x)\\le0$ for $|x|\\ge1$, then\n$$\\Delta_d\\le \\frac{v_d}{2^d}\\,\\frac{f(0)}{\\hat f(0)},$$\nwhere $v_d$ is the volume of the unit ball, by applying the Poisson summation formula. Numerics suggested that the bound is tight in dimensions 8 and 24; Viazovska and then Cohn et al. constructed explicit \"magic functions\" through modular forms to prove it. The same method gives upper bounds in all dimensions, and it is a Fourier-analytic cousin of Delsarte's linear programming bound for codes.\n\n## High dimensions\n\nIn large $d$ the picture is exponential. Lower bounds come from the probabilistic method: Minkowski and Hlawka showed $\\Delta_d\\ge 2\\zeta(d)2^{-d}$, and for a century the improvements were by polynomial factors in $d$ (Rogers, Ball, Venkatesh). Campos, Jenssen, Michelen and Sahasrabudhe (2023) obtained $(1-o(1))\\,d\\log d\\,/2^{d+1}$ for general packings, and Klartag (2025) showed that lattice packings of density at least $c\\,d^2 2^{-d}$ exist. Upper bounds have an exponentially different shape: the Kabatiansky-Levenshtein bound of 1978 has the form $2^{-0.599\\,d+o(d)}$. An OpenAI manuscript released on 1 August 2026 (unrefereed) claims to determine the exact asymptotic strength of the Cohn–Elkies bound, $\\mathrm{LP}_d^{1/d}\\to\\sqrt{e/(2\\pi)}$, as conjectured in 2020 by Afkhami-Jeddi, Cohn, Hartman, de Laat and Tajdini. This would give the upper-bound exponent $\\tfrac12\\log_2(2\\pi/e)\\approx0.6044$, and it would show that the method cannot go further. See the problem page.\n\n## Connections\n\n- **Coding theory.** Packings in $\\mathbb{R}^d$ correspond to codes for the Gaussian channel, and spherical codes to codes on the sphere. Sphere-packing bounds give limits on code performance at a given rate and dimension.\n- **Cryptography.** Lattice problems such as the shortest vector problem (SVP) and learning with errors are the basis of post-quantum cryptography. Densest lattices, kissing numbers and spherical-code bounds enter the cost analyses of sieving algorithms for SVP.\n- **Fourier analysis.** Sign-uncertainty principles (Bourgain-Clozel-Kahane; Cohn-Goncalves) and Fourier interpolation formulas (Radchenko-Viazovska) are closely tied to linear programming bounds for packings.\n- **Formalization.** A Lean formalization of Viazovska's dimension-8 proof, launched by Hariharan and Viazovska in March 2024, was completed in February 2026. Math Inc.'s autoformalization system Gauss did the final stages."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Stack oranges at a fruit stall and you naturally make layers where each orange sits in the dip between three below. That is the densest way to pack equal balls in ordinary three-dimensional space. Kepler guessed this in 1611; Thomas Hales proved it in 1998 with heavy computer help (published 2005), and a fully computer-checked proof followed in 2014.

Now ask the same question in four, five, or a hundred dimensions. Mathematicians do this because many practical problems have the same shape. Sending a message over a noisy channel can be described as choosing points in a high-dimensional space so that the little balls around them do not overlap. Packing balls tightly means packing messages efficiently.

The answer is known exactly in only five cases: dimensions 1, 2, 3, 8 and 24. The last two were solved in 2016. In eight and twenty-four dimensions there are strikingly symmetric arrangements called the E8 lattice and the Leech lattice, and Maryna Viazovska and coauthors showed nothing denser exists. In every other dimension, the best packing is unknown, and in high dimensions there is still a big gap between the best arrangement known and the best proven limit.

A lattice is a packing where the centres form a regular repeating grid, like the dots in graph paper. The best known packings in some dimensions are not lattices.

The orange-stall picture gets harder to trust in high dimensions: shapes behave very differently there, and our intuition from three dimensions can mislead.

# Student explanation

A **sphere packing** in $\mathbb R^d$ is a set of non-overlapping balls of equal size. Its **density** is the fraction of space the balls cover, and $\Delta_d$ is the largest possible density. A **lattice packing** places ball centres at the points of a lattice $\Lambda=\mathbb Z b_1\oplus\dots\oplus\mathbb Z b_d$, a regularly repeating grid generated by $d$ basis vectors. Lattices are the structure used most in coding and cryptography. Lattice and non-lattice optima may differ, and in some dimensions the best known packings are not lattices.

**Exact solutions.**

- $d=1$ is trivial and $d=2$ is the hexagonal arrangement (Thue; complete proof by L. Fejes Tóth, 1940).
- $d=3$: **Kepler's conjecture**, proved by Hales and Ferguson (published 2005). A fully formal proof (the Flyspeck project, in the HOL Light and Isabelle proof assistants) was completed in 2014 and published in 2017.
- $d=8$ and $d=24$: the **$E_8$ lattice** and the **Leech lattice** are optimal. Viazovska proved the case $d=8$ in 2016, and Cohn, Kumar, Miller, Radchenko and Viazovska proved $d=24$ a week later.

The $d=8,24$ proofs use the **linear programming bound** of Cohn and Elkies (2003). The idea is to find a special function $f$ on $\mathbb R^d$ with two properties on $f$ and its Fourier transform $\hat f$; any such function gives an upper bound on the density. The challenge was to find the exact function that makes the bound match the known packing, and Viazovska built it from modular forms.

**High dimensions.** For general $d$ the question is the _exponential rate_ of $\Delta_d$, roughly how fast the best density decays as $d$ grows. A classical lower bound (Minkowski, Rogers) is of order $2^{-d}$ up to polynomial factors, and recent work (Campos, Jenssen, Michelen and Sahasrabudhe; Klartag) improved the polynomial factor. The best upper bound for decades has been Kabatiansky–Levenshtein (1978), with density at most $2^{-0.599d}$ up to lower-order terms. Closing the gap between exponent $1$ and exponent $0.599$ is a major open problem. An unrefereed manuscript from August 2026 claims the exact limit of the Cohn–Elkies method, which would nudge the upper exponent to about $0.604$ and show that method can go no further.

**Connections.** Packings correspond to **error-correcting codes**, where points are codewords and balls represent noise tolerance. Lattices also underlie **lattice-based cryptography**, whose security rests on the hardness of finding short vectors, and the related **kissing number** problem asks how many balls can touch one central ball.
