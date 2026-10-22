---
type: problem
slug: kissing-number-dimension-five
title: "The kissing number in dimension 5: is it 40, or can it exceed 40 up to 44?"
entry: lattices-sphere-packing
status: OPEN
origin: Korkine and Zolotareff, 1873 (lattice D5 gives 40); the kissing problem goes back to Newton and Gregory
ratings:
  difficulty: 64
  applicationValue: 4.5
  leverage: 19
workMix:
  theory: 60
  engineering: 0
  compute: 40
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: "Cohn, Rajagopal: Variations on five-dimensional sphere packings"
    url: https://arxiv.org/abs/2412.00937
  - title: "Mittelmann, Vallentin: High accuracy semidefinite programming bounds for kissing numbers"
    url: https://arxiv.org/abs/0902.1105
  - title: "Szöllősi: A note on five dimensional kissing arrangements"
    url: https://arxiv.org/abs/2301.08272
  - title: "Musin: The kissing number in four dimensions"
    url: https://arxiv.org/abs/math/0309430
  - title: "Cohn: Table of kissing number bounds"
    url: https://cohn.mit.edu/kissing-numbers/
links:
  - to: sphere-packing-high-dimensions
    kind: RELATED
    note: Both use Delsarte/Cohn–Elkies-type linear and semidefinite programming bounds, and kissing configurations build sphere packings.
timeline:
  - date: 2009-02-06
    title: SDP bound improved to 44
    body: Mittelmann and Vallentin reduce the upper bound on τ₅ from 45 to 44 (arXiv date).
    source: https://arxiv.org/abs/0902.1105
  - date: 2023-01-19
    title: Third 40-point configuration (Szöllősi)
    body: A new kissing arrangement Q₅, not isometric to D₅ or L₅.
    source: https://arxiv.org/abs/2301.08272
  - date: 2026-03-04
    title: Fourth 40-point configuration, revised paper
    body: Cohn and Rajagopal analyse four non-isometric 40-point configurations; none beats 40.
    source: https://arxiv.org/abs/2412.00937
explainer:
  oneLine: How many equal balls can touch one central ball in five dimensions? Between 40 and 44; nobody knows the exact number.
  flow:
    - Balls must touch one central ball
    - "Dimension 5: 40 balls arranged"
    - "Maths limit: at most 44 can fit"
    - Nobody knows if 41 to 44 are possible
  glossary:
    - term: kissing number
      meaning: The largest number of equal balls that can touch one central ball at the same time.
      link: https://en.wikipedia.org/wiki/Kissing_number
    - term: spherical code
      meaning: A set of points on a sphere with a minimum angle between any two, used for signals and packings.
      link: https://en.wikipedia.org/wiki/Spherical_code
    - term: inner product
      meaning: A number computed from two vectors that measures the angle between them.
      link: https://en.wikipedia.org/wiki/Dot_product
    - term: root lattice D5
      meaning: A five-dimensional regular grid of points whose closest neighbours give 40 touching balls.
      link: https://en.wikipedia.org/wiki/Root_system#Classification_of_root_systems
    - term: semidefinite programming
      meaning: A computer method for optimizing under matrix constraints, used to prove upper bounds on packings.
      link: https://en.wikipedia.org/wiki/Semidefinite_programming
    - term: Delsarte linear programming bound
      meaning: A classical technique giving upper bounds on codes and kissing numbers using pairwise angles.
      link: https://en.wikipedia.org/wiki/Kissing_number#Generalization
    - term: E8 lattice
      meaning: An exceptionally symmetric eight-dimensional lattice with kissing number 240.
      link: https://en.wikipedia.org/wiki/E8_lattice
    - term: Leech lattice
      meaning: A remarkable 24-dimensional lattice with kissing number 196560.
      link: https://en.wikipedia.org/wiki/Leech_lattice
    - term: sphere packing
      meaning: An arrangement of equal, non-overlapping balls in space.
      link: /research/lattices-sphere-packing
  readFirst:
    - title: Kissing number - Wikipedia
      url: https://en.wikipedia.org/wiki/Kissing_number
      why: Table of known values and bounds by dimension.
    - title: "Quanta: Sphere packing solved in higher dimensions"
      url: https://www.quantamagazine.org/sphere-packing-solved-in-higher-dimensions-20160330/
      why: The related packing story in dimensions 8 and 24, where the kissing numbers (240 and 196560) were already settled in 1979.
    - title: Lattices and sphere packing (research entry)
      url: /research/lattices-sphere-packing
      why: The broader packing background.
site:
  aiReviewed: true
---

Let $\tau_5$ be the maximum number of non-overlapping unit spheres in $\mathbb R^5$ that can touch a central unit sphere; equivalently the maximum size of a set of unit vectors in $\mathbb R^5$ with pairwise inner products at most $1/2$ (angular separation at least $60^\circ$). The root lattice $D_5$ gives $\tau_5\ge 40$ and semidefinite programming gives $\tau_5\le 44$. **Problem:** determine $\tau_5$: either prove $\tau_5=40$ or construct a spherical code of size at least $41$ with minimal angle $60^\circ$.

# State of the art

The kissing number is known exactly only in dimensions 1, 2, 3, 4, 8 and 24; τ₄ = 24 is due to Musin (Annals 2008). In dimension 5 the bounds 40 ≤ τ₅ ≤ 44 have not moved since the Mittelmann–Vallentin high-accuracy SDP computation (arXiv:0902.1105; Experiment. Math. 2010), which brought the Bachoc–Vallentin three-point bound from 45 to 44 (the SDP value is 44.998…). Four non-isometric 40-point kissing configurations are now known: D₅ (Korkine–Zolotareff, 1873), L₅ (Leech, 1967), Q₅ (Szöllősi, arXiv:2301.08272, 2023) and R₅, found by Cohn and Rajagopal (arXiv:2412.00937, revised March 2026), who say τ₅ appears to be 40. Recent SDP advances (Leijenhorst–de Laat, arXiv:2202.12077) and AI-driven searches improved bounds in other dimensions, not in dimension 5; Cohn's table still lists 40–44 as of October 2026. The coexistence of several inequivalent 40-point configurations, unlike the unique optima in dimensions 8 and 24, is a structural puzzle.

# Applications

Kissing configurations are optimal spherical codes, relevant to code design for continuous channels and quantisation; a determination of tau_5 would have no direct deployment impact but would test SDP and polynomial-optimisation hierarchies.

# Resolution criteria

A proof (with rigorous exact certificate, e.g. an exact SDP or exclusion argument) that tau_5 = 40, or an explicit set of at least 41 unit vectors in R^5 with pairwise inner products at most 1/2, which can be verified exactly.

# Rating rationale

Difficulty 64: the SDP bound has stalled at 44 for 17 years and no extension of Musin's dimension-4 technique is known, but the question is finite and concrete with active configuration work; it sits below union-closed sets (66) and well below high-dimensional sphere packing (76), above cap sets (58). Application value 4.5: spherical codes matter for channel coding, but τ₅ itself would not change practice, far below sphere packing (26). Leverage 19: little depends on the value, though a four-point SDP method would transfer to other dimensions.

# Work mix rationale

Either a new bounding technique (theory) or a heavy exact SDP and rounding computation; configuration searches are also computational.

# Verification

Quantity: the kissing number tau_5, currently between 40 and 44. An improved lower bound is an explicit set of at least 41 unit vectors in R^5 with pairwise inner products at most 1/2, verified in exact arithmetic; an upper bound of 40 needs an exact semidefinite-programming or exclusion certificate. Record the vectors or certificate and the exact checker.

# Plain explanation

Take a coin and place identical coins around it so that each touches the middle coin. Six fit exactly. In three dimensions, with balls, the answer is twelve, which is the number of oranges that can touch a central orange. This number is called the kissing number.

The kissing number is known exactly in only a few dimensions: one, two, three, four, eight and twenty-four. Dimension five is the smallest case where the answer is unknown. Mathematicians have found arrangements that give 40 touching balls. They have also proved, by heavy computer calculation, that more than 44 is impossible.

So the answer is somewhere from 40 to 44. Nobody has found 41, and nobody has proved 40 is the limit.

The 40-ball arrangements are well studied. Four different ones are known, and the researchers who found the latest one said the true answer appears to be 40, though this is a hunch, not a proof.

Why does anyone care? Kissing arrangements are the same as good codes for sending messages: each touching ball is a message, and the angle between balls says how easily messages can be mixed up.

Our picture of oranges stops at three dimensions, but the maths goes on, and the five-dimensional picture can only be explored by calculation.

# Student explanation

**Statement.** Let $\tau_5$ be the maximum number of non-overlapping unit spheres in $\mathbb R^5$ that can touch a central unit sphere. Equivalently, it is the maximum size of a set of unit vectors in $\mathbb R^5$ with pairwise inner products at most $1/2$, i.e. angular separation at least $60^\circ$ (a _spherical code_). The root lattice $D_5$ gives $\tau_5\ge40$ and semidefinite programming gives $\tau_5\le44$. **Problem:** determine $\tau_5$: either prove $\tau_5=40$ or construct a spherical code of size at least $41$ with minimal angle $60^\circ$.

**Known kissing numbers.** The kissing number is known exactly in dimensions $1,2,3,4,8$ and $24$. In dimension 3 it is 12 (the question of whether 13 is possible was settled in the 1950s); in dimension 4 it is 24, due to Musin (Annals 2008); in dimensions 8 and 24 the answers (240 and 196560) come from the $E_8$ and Leech lattices, with proofs by Odlyzko–Sloane and Levenshtein.

**Bounds in dimension 5.** Upper bounds come from **semidefinite programming (SDP)** relaxations: Delsarte's linear programming bound uses pairwise angle information, and Bachoc and Vallentin's three-point SDP bound refines it using triples of points. The 40–44 range has not moved since the Mittelmann–Vallentin high-accuracy SDP computation (arXiv 0902.1105; Experiment. Math. 2010), which lowered the three-point bound from 45 to 44 (the SDP value is $44.998\ldots$, so no integer above 44 survives).

**Lower bounds.** Four non-isometric 40-point kissing configurations are known: $D_5$ (Korkine–Zolotareff, 1873), $L_5$ (Leech, 1967), $Q_5$ (Szöllősi, arXiv 2301.08272, 2023) and $R_5$, found by Cohn and Rajagopal (arXiv 2412.00937, revised March 2026), who say $\tau_5$ appears to be $40$. Recent SDP advances (Leijenhorst and de Laat, arXiv 2202.12077) have not lowered the upper bound, and no 41-point configuration is known.

**Why it is hard.** A tight upper bound of 40 would need a stronger relaxation (higher-order SDP, which grows quickly in size) or a clever geometric argument analogous to Musin's in dimension 4, which used a tailored polynomial. A configuration of 41 would be unlike all known ones, which are well-structured; searches may be missing an irregular arrangement.

**Connections.** The kissing number is a local version of sphere packing: a dense packing has many neighbours around each ball. Spherical codes with large minimum angle correspond to error-correcting codes, so the number also measures how many well-separated signals one can use.
