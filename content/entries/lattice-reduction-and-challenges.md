---
type: entry
slug: lattice-reduction-and-challenges
title: Lattice reduction (LLL, BKZ, sieving) and the TU Darmstadt lattice challenges
field: cryptography
kind: ALGORITHM
status: ACTIVE
summary: Algorithms that find short lattice vectors, with fplll and G6K as reference code, and the public SVP and LWE challenges whose records measure the real cost of attacks on lattice cryptography.
reliedOn: The parameters of ML-KEM and ML-DSA are chosen from estimates of lattice-reduction cost; challenge records are the only public, checkable data points for those estimates.
dependsOn:
  - computational-complexity
  - lattice-cryptography
  - lattices-sphere-packing
references:
  - title: Lenstra, Lenstra, Lovász, Factoring polynomials with rational coefficients (Math. Ann. 1982)
    url: https://doi.org/10.1007/BF01457454
    kind: paper
  - title: "Schnorr, Euchner, Lattice basis reduction: improved practical algorithms and solving subset sum problems (Math. Program. 1994)"
    url: https://doi.org/10.1007/BF01581144
    kind: paper
  - title: "Chen, Nguyen, BKZ 2.0: Better Lattice Security Estimates (Asiacrypt 2011)"
    url: https://doi.org/10.1007/978-3-642-25385-0_1
    kind: paper
  - title: Albrecht et al., The General Sieve Kernel and New Records in Lattice Reduction (ePrint 2019/089)
    url: https://eprint.iacr.org/2019/089
    kind: paper
  - title: SVP Challenge (TU Darmstadt)
    url: https://www.latticechallenge.org/svp-challenge/
    kind: docs
  - title: SVP Challenge Hall of Fame
    url: https://www.latticechallenge.org/svp-challenge/halloffame.php
    kind: docs
  - title: LWE Challenge (TU Darmstadt)
    url: https://www.latticechallenge.org/lwe_challenge/challenge.php
    kind: docs
  - title: LWE Challenge Hall of Fame
    url: https://www.latticechallenge.org/lwe_challenge/halloffame.php
    kind: docs
timeline:
  - date: 1982-12-01
    title: LLL
    body: Lenstra, Lenstra and Lovász gave the polynomial-time reduction algorithm; month given as the volume month.
    source: https://doi.org/10.1007/BF01457454
  - date: 2011-12-01
    title: BKZ 2.0
    body: Chen and Nguyen introduced pruned enumeration and simulation for security estimates; month given as the conference month (Asiacrypt 2011).
    source: https://doi.org/10.1007/978-3-642-25385-0_1
  - date: 2019-05-01
    title: G6K
    body: The General Sieve Kernel made sieving practical and set challenge records; month given as the conference month (Eurocrypt 2019).
    source: https://eprint.iacr.org/2019/089
  - date: 2024-07-21
    title: SVP challenge dimension 190
    body: Yao Sun and Shuai Chang entered dimension 190 (norm 3613), solved by sieving.
    source: https://www.latticechallenge.org/svp-challenge/halloffame.php
  - date: 2026-01-01
    title: SVP challenge dimension 210
    body: Jintai Ding and Ziyu Zhao entered dimension 210 (norm 3808) by sieving; the Hall of Fame gives the submission date as 2026-01-1.
    source: https://www.latticechallenge.org/svp-challenge/halloffame.php
  - date: 2026-08-10
    title: LWE challenge n = 100
    body: Jintai Ding solved the n = 100, α = 0.005 LWE challenge with error norm 5009.20.
    source: https://www.latticechallenge.org/lwe_challenge/halloffame.php
explainer:
  oneLine: Methods for finding short vectors in a grid of points, and public contests that show how fast attackers really are.
  flow:
    - Find a short arrow in a many-dimensional grid
    - Hardness protects post-quantum encryption
    - Contests publish checkable records
    - Records calibrate the security levels
  glossary:
    - term: lattice
      meaning: A regular grid of points made by adding whole-number multiples of a few arrows.
      link: https://en.wikipedia.org/wiki/Lattice_problem
    - term: shortest vector problem
      meaning: Finding the shortest non-zero arrow that ends on a point of the grid.
      link: https://en.wikipedia.org/wiki/Lattice_problem
    - term: lattice reduction
      meaning: Replacing the arrows of a grid with shorter, more perpendicular ones that describe the same grid.
      link: https://en.wikipedia.org/wiki/Lattice_reduction
    - term: sieving
      meaning: Keeping a huge list of grid points and combining pairs to find shorter ones.
      link: https://en.wikipedia.org/wiki/Lattice_problem
    - term: Learning With Errors
      meaning: A puzzle in which a secret must be recovered from noisy linear equations; the basis of lattice cryptography.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: lattice cryptography
      meaning: Encryption and signatures whose security depends on lattice problems being hard.
      link: /research/lattice-cryptography
    - term: basis
      meaning: A set of linearly independent vectors whose integer combinations generate the lattice; one lattice has many bases.
      link: https://en.wikipedia.org/wiki/Basis_(linear_algebra)
    - term: LLL and BKZ
      meaning: "Lattice-reduction algorithms: LLL runs in polynomial time with weak guarantees; BKZ uses exact searches in blocks for shorter vectors at higher cost."
      link: https://en.wikipedia.org/wiki/Lenstra%E2%80%93Lenstra%E2%80%93Lov%C3%A1sz_lattice_basis_reduction_algorithm
    - term: exponential time
      meaning: Running time that multiplies by a constant factor for each unit increase in size, so it explodes as the size grows.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: G6K
      meaning: The General Sieve Kernel, an open-source sieving library used for most recent lattice records.
      link: https://github.com/fplll/g6k
  readFirst:
    - title: Cryptography's Future Will Be Quantum-Safe (Quanta)
      url: https://www.quantamagazine.org/cryptographys-future-will-be-quantum-safe-heres-how-it-will-work-20221109/
      why: A gentle account of lattice-based security.
    - title: SVP Challenge
      url: https://www.latticechallenge.org/svp-challenge/
      why: The rules and the live Hall of Fame.
    - title: Lattice problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Lattice_problem
      why: Definitions of SVP and related problems.
site:
  published: true
  aiReviewed: true
---

## What lattice reduction does

A lattice is the set of integer combinations of basis vectors. The **shortest vector problem** (SVP) asks for a shortest nonzero lattice vector, and lattice-based cryptography is secure only if good approximations are hard to find. **Lattice reduction** takes a basis and returns a better one with shorter, more orthogonal vectors.

- **LLL** (Lenstra, Lenstra and Lovász, 1982) runs in polynomial time and finds vectors within an exponential factor of the shortest.
- **BKZ** (Schnorr and Euchner, 1994) uses an SVP oracle in blocks of dimension β; larger β gives shorter vectors at exponentially higher cost. BKZ 2.0 (Chen and Nguyen, 2011) added pruned enumeration and simulation of basis profiles.
- **Sieving** keeps a large list of lattice vectors and repeatedly combines pairs to shorten them. The **General Sieve Kernel** G6K (Albrecht, Ducas, Herold, Kirshanova, Postlethwaite and Stevens, Eurocrypt 2019) made sieving practical as an SVP oracle and set records in both challenges.

Reference code is in `fplll` (LLL, BKZ and enumeration), `fpylll` (a Python interface) and `g6k`. Security estimates for lattice schemes extrapolate these costs to the dimensions used in standards.

## The challenges

The **SVP challenge** (TU Darmstadt, latticechallenge.org) gives a random lattice basis in a stated dimension generated from a seed. A submission is a lattice vector whose Euclidean norm is below the threshold set by the Gauss heuristic, in a dimension higher than existing entries or shorter than an earlier entry in the same dimension. The submission is short and checkable: integer coordinates over the published basis, and a norm. The Hall of Fame as of October 2026 lists dimension 210 (norm 3808) by Jintai Ding and Ziyu Zhao (submitted 1 January 2026), dimension 200 by Ziyu Zhao and Jintai Ding (March 2025), dimension 192 by Shi Bai and co-authors (September 2026), and dimension 190 by Yao Sun and Shuai Chang (July 2024), all using sieving.

The **LWE challenge** gives instances (A, b = As + e) of Learning With Errors with dimension n and relative error α, to be solved by recovering the secret s. The organisers state that the original instance generation was bugged, removed all instances and are regenerating them, so the current Hall of Fame lists only solutions from 2025 onwards; earlier records (including the G6K-based ones of 2019) refer to the withdrawn instance set. In the current list the largest solved case is n = 100, α = 0.005 by Jintai Ding on 10 August 2026; for α = 0.010 the largest is n = 75 and for α = 0.020 it is n = 60.

## Why this matters

Records are lower bounds on attacker ability: a challenge solved at dimension d shows that dimension is feasible with the resources used. They calibrate estimators of the cost of attacks, which in turn justify security levels. They do not break the standardised parameters, which are far larger.

## Limits

Challenge instances are random, whereas deployed lattices have structure (module, ring); structured attacks are a separate research question. Records depend on hardware (GPU clusters) and on engineering effort, so a record can say more about compute than about algorithms.

# Plain explanation

Imagine a grid of points in many dimensions, built from a few arrows that you can add and subtract in whole-number amounts. Some arrows are long and awkward. The question is whether you can find the shortest arrow that points to a non-zero grid point. In two dimensions this is easy. In hundreds of dimensions it is very hard.

Modern encryption designed to resist quantum computers is built on the belief that this is hard. So researchers keep trying to break it, and they record how far they get. The best known methods repeatedly improve a set of arrows (lattice reduction) or build a huge list of points and combine pairs to find shorter ones (sieving).

There are public contests, run at the TU Darmstadt, with fixed puzzles. One asks for a short vector in a grid of a stated dimension; the record is dimension 210. Another hides a secret under noise (a problem called Learning With Errors) and the biggest one solved has 100 unknowns.

These records do not break real encryption, which uses much bigger sizes. They are measurements of how expensive attacks are, which is what security levels are based on.

# Student explanation

**What a lattice is.** Take a few linearly independent vectors $b_1,\dots,b_n$ in $n$ dimensions and put them as columns of a matrix $B$. The **lattice** is every point $Bc$ where $c$ is a vector of whole numbers, positive or negative: a regular grid, possibly slanted. In two dimensions with $b_1=(1,0)$ and $b_2=(0,1)$ it is the ordinary integer grid. The same lattice has many bases: $(1,0)$ and $(7,1)$ generate exactly the same grid, but the second basis is long and nearly parallel, which hides the short vector $(0,1)=(7,1)-7(1,0)$.

**The hard problem.** The **shortest vector problem** (SVP) asks for the shortest nonzero lattice point. In two dimensions a few subtractions find it. In a few hundred dimensions, given a bad basis, every known algorithm takes time that grows exponentially with the dimension: each extra dimension multiplies the work by a roughly constant factor, unlike polynomial-time algorithms, where doubling the input multiplies the work by a fixed amount. Post-quantum encryption such as ML-KEM is built on the belief that such problems stay hard even for quantum computers.

**Lattice reduction.** LLL (1982) improves a basis using operations like the subtraction above, in polynomial time, but only gets within an exponential factor of the shortest vector. BKZ applies an exact shortest-vector routine to blocks of $\beta$ consecutive basis vectors; larger blocks give shorter vectors at exponentially higher cost. **Sieving** keeps a huge list of lattice vectors and repeatedly subtracts pairs that are close, keeping the shorter result; the General Sieve Kernel (G6K) is the main open-source implementation and runs on GPUs.

**The challenges.** TU Darmstadt publishes a random lattice basis in each dimension. A submission is the integer vector $c$; checking it is one matrix-vector product and a length computation, so anyone can verify a record. The SVP record is dimension 210 (Ding and Zhao, January 2026). The LWE challenge hides a secret vector behind noisy linear equations; its record is $n=100$ at noise level $\alpha=0.005$ (Ding, August 2026), and its instance set is being regenerated after a generation bug.

**Why it matters.** Standards choose key sizes from estimates of attack cost, and these records are the public, checkable data points those estimates are calibrated against. Deployed parameters correspond to far larger dimensions than any record.
