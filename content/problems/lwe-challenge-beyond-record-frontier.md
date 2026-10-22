---
type: problem
slug: lwe-challenge-beyond-record-frontier
title: "LWE challenge: solve an instance beyond the current n and α frontier"
entry: lattice-reduction-and-challenges
status: OPEN
origin: TU Darmstadt LWE challenge, record by Jintai Ding (2026)
ratings:
  difficulty: 27
  applicationValue: 30
  leverage: 20
workMix:
  theory: 15
  engineering: 30
  compute: 55
  empirical: 0
verification:
  route: BOUNDS
sources:
  - title: LWE Challenge Hall of Fame
    url: https://www.latticechallenge.org/lwe_challenge/halloffame.php
  - title: LWE Challenge
    url: https://www.latticechallenge.org/lwe_challenge/challenge.php
  - title: Albrecht et al., The General Sieve Kernel and New Records in Lattice Reduction
    url: https://eprint.iacr.org/2019/089
links:
  - to: lwe-quantum-hardness
    kind: RELATED
    note: Measured classical attack cost on small LWE instances is the empirical side of the LWE hardness assumption behind the standards.
timeline:
  - date: 2026-08-10
    title: n = 100, α = 0.005
    body: Jintai Ding solved the n = 100, α = 0.005 instance with error norm 5009.20.
    source: https://www.latticechallenge.org/lwe_challenge/halloffame.php
explainer:
  oneLine: Recover a hidden secret from noisy equations at a size larger than any solved before.
  flow:
    - Noisy equations hide a secret
    - Embed in a lattice
    - Reduce with BKZ and sieving
    - Check that b − As is small
  glossary:
    - term: Learning With Errors
      meaning: Recovering a secret from linear equations with small random errors.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: secret dimension n
      meaning: The number of unknown numbers in the secret list.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: relative error α
      meaning: How large the noise is compared with the modulus.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: BKZ
      meaning: A lattice-reduction algorithm that improves a basis block by block.
      link: /research/lattice-reduction-and-challenges
    - term: lattice cryptography
      meaning: Cryptography whose security rests on lattice and LWE problems.
      link: /research/lattice-cryptography
    - term: modular arithmetic
      meaning: Arithmetic that wraps around at a fixed number q, like a clock.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: Gaussian elimination
      meaning: The row-reduction method for solving linear systems taught in first-year linear algebra.
      link: https://en.wikipedia.org/wiki/Gaussian_elimination
    - term: normal distribution
      meaning: The bell-shaped curve describing many random quantities; LWE errors are drawn from a discrete version of it.
      link: https://en.wikipedia.org/wiki/Normal_distribution
    - term: lattice
      meaning: "All integer combinations Bc of a set of basis vectors: a regular grid in many dimensions."
      link: https://en.wikipedia.org/wiki/Lattice_(group)
    - term: sieving
      meaning: Finding short lattice vectors by repeatedly subtracting close pairs from a large list.
      link: /research/lattice-reduction-and-challenges
  readFirst:
    - title: LWE Challenge Hall of Fame
      url: https://www.latticechallenge.org/lwe_challenge/halloffame.php
      why: The live record table.
    - title: Learning with errors (Wikipedia)
      url: https://en.wikipedia.org/wiki/Learning_with_errors
      why: A readable definition.
site:
  aiReviewed: true
---

The LWE challenge publishes instances (A, b = As + e mod q) with secret dimension n and relative error α, with a hidden secret s. **Task:** recover s for an instance with n larger than the largest solved n for its α, for example n > 100 at α = 0.005, n > 75 at α = 0.010 or n > 60 at α = 0.020, provided such instances are published (the challenge page notes that some instances are still being regenerated).

# State of the art

The Hall of Fame (October 2026) lists, as the largest n per α: n = 100 at α = 0.005 (Jintai Ding, 10 August 2026, error norm 5009.20); n = 75 at α = 0.010 and n = 65 at α = 0.015 (Ding and Zhao, 19 September 2025); n = 60 at α = 0.020 and n = 55 at α = 0.025 (Ding, 21 July 2026); n = 50 at α = 0.030 (Bai, Chen, Ge, He, Li, Sun and Yu, 16 July 2026); n = 45 at α = 0.035 and 0.040; n = 40 at α = 0.045 and 0.050. The challenge page states that the original instance generation was bugged, that all instances were removed and that the protocol is being rerun, with some (grey) instances still to be added; earlier records, such as the G6K-based ones of Albrecht et al. (2019), refer to the withdrawn set.

# Applications

Challenge records calibrate the cost estimators that justify the parameters of ML-KEM, ML-DSA and homomorphic encryption schemes. Standard parameters are far outside the reach of current attacks.

# Resolution criteria

A solution accepted by the LWE challenge submission page for an instance beyond the current frontier at its α, with the algorithm, hardware and time reported.

# Rating rationale

Difficulty 27: the frontier advanced by several steps in 2025–26 with known BKZ and sieving attacks, so the next instance is mainly compute; marginally harder than the SVP record (25) because primal attacks need larger blocksizes at small α. Application value 30: calibration of LWE cost models. Leverage 20: one instance family, and the instance set is still being regenerated.

# Work mix rationale

Attacks combine BKZ/sieving subroutines with careful parameter choices; resources decide the frontier.

# Verification

Quantity: the largest secret dimension n solved per relative error α; frontier n = 100 at α = 0.005 (Ding, 2026-08-10). A solution is the secret vector s of an instance published at latticechallenge.org; the check is that b − As reduces to an error vector of the expected small Gaussian norm modulo q, which the submission page performs. State instance, algorithm, hardware and wall time. The challenge page does not describe the verification procedure in detail, and its instance list is subject to regeneration.

# Plain explanation

Suppose someone picks a secret list of numbers and gives you many equations about it, but each equation has a small random error added. Without the errors you could solve them with school algebra. With the errors, once the list is long enough, it becomes extremely hard. This puzzle is called Learning With Errors, and much of the encryption designed to resist quantum computers rests on it.

A public contest at TU Darmstadt publishes such puzzles of growing size. The largest one solved so far has a secret of 100 numbers with a small noise level; Jintai Ding solved it in August 2026. For other noise levels the solved sizes are smaller, for example 75 at one level and 60 at another.

The challenge is to solve a puzzle of a larger size than any listed for its noise level. A submitted answer can be checked directly because the secret must reproduce the noisy equations up to a small error.

The caveat: the contest sizes are far smaller than real encryption, and the organisers say some earlier puzzles were flawed and are being regenerated.

# Student explanation

**The puzzle.** Pick a secret vector $s$ of $n$ whole numbers. Publish a random matrix $A$ and the vector $b = As + e \bmod q$, where "mod $q$" means clock arithmetic that wraps round at $q$, and $e$ is a vector of small random errors. Without $e$ you could recover $s$ by Gaussian elimination, exactly as in first-year linear algebra. With $e$, elimination amplifies the errors until the answer is meaningless, and for large enough $n$ no efficient method is known. This is **Learning With Errors** (LWE), the problem behind ML-KEM, ML-DSA and homomorphic encryption.

**Two knobs.** The difficulty depends mainly on the secret dimension $n$ and the **relative error** $\alpha$, the size of the typical error divided by $q$ (the errors follow a bell-shaped Gaussian distribution, the familiar normal curve). Larger $n$ or larger $\alpha$ make the problem harder.

**The frontier.** The TU Darmstadt LWE challenge publishes instances on a grid of $n$ (40 to 120) and $\alpha$ (0.005 to 0.070). Its Hall of Fame (October 2026) lists the largest solved $n$ for each $\alpha$: $n = 100$ at $\alpha = 0.005$ (Jintai Ding, 10 August 2026), $n = 75$ at $\alpha = 0.010$ and $n = 65$ at $\alpha = 0.015$ (Ding and Zhao, 2025), $n = 60$ at $\alpha = 0.020$ and $n = 55$ at $\alpha = 0.025$ (Ding, 2026), and $n = 50$ at $\alpha = 0.030$ (Bai and co-authors, 2026). The task is to solve any instance beyond the frontier for its $\alpha$, for example $n > 100$ at $\alpha = 0.005$. The organisers found a bug in how the original instances were generated, removed them and are regenerating the set, so some instances are still being added.

**How attacks work.** The equations are rewritten as a lattice, a grid of points $Bc$ with integer vectors $c$, in which the error vector $e$ corresponds to an unusually short point. Lattice reduction (BKZ) and sieving then search for that short point. Their cost grows exponentially with the lattice dimension, and smaller $\alpha$ only partly compensates, so each step in $n$ needs substantially more GPU time.

**How a claim is checked.** A solution is the secret $s$. A checker computes $b - As \bmod q$ and confirms that the result is a short error vector of the expected size; the challenge's submission page performs this check and lists accepted solutions. Reports should state the instance, algorithm, hardware and wall time.
