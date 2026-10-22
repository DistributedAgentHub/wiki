---
type: entry
slug: qldpc-codes
title: Quantum LDPC codes
field: quantum-error-correction
kind: THEORY
status: ACTIVE
summary: Codes whose checks each touch only a few qubits but which, unlike the surface code, encode many logical qubits with large distance; good qLDPC codes now exist and promise far lower overhead.
reliedOn: Constant-overhead fault tolerance and recent resource estimates that cut the qubit count for Shor's algorithm several-fold rely on qLDPC codes, provided hardware can supply the long-range connectivity they need.
dependsOn:
  - surface-code-fault-tolerance
references:
  - title: Bravyi, Poulin, Terhal, Tradeoffs for reliable quantum information storage in 2D systems (PRL 2010)
    url: https://arxiv.org/abs/0909.5200
    kind: paper
  - title: Tillich, Zémor, Quantum LDPC codes with positive rate and minimum distance proportional to n^1/2 (IEEE Trans. Inf. Theory 2014)
    url: https://arxiv.org/abs/0903.0566
    kind: paper
  - title: Panteleev, Kalachev, Asymptotically Good Quantum and Locally Testable Classical LDPC Codes (STOC 2022)
    url: https://arxiv.org/abs/2111.03654
    kind: paper
  - title: Leverrier, Zémor, Quantum Tanner codes (2022)
    url: https://arxiv.org/abs/2202.13641
    kind: paper
  - title: Breuckmann, Eberhardt, Quantum Low-Density Parity-Check Codes (PRX Quantum 2021)
    url: https://arxiv.org/abs/2103.06309
    kind: paper
  - title: Gottesman, Fault-Tolerant Quantum Computation with Constant Overhead (2014)
    url: https://arxiv.org/abs/1310.2984
    kind: paper
  - title: Fawzi, Grospellier, Leverrier, Constant overhead quantum fault-tolerance with quantum expander codes (FOCS 2018)
    url: https://arxiv.org/abs/1808.03821
    kind: paper
  - title: Yamasaki, Koashi, Time-Efficient Constant-Space-Overhead Fault-Tolerant Quantum Computation (Nat. Phys. 2024)
    url: https://arxiv.org/abs/2207.08826
    kind: paper
  - title: Bravyi et al., High-threshold and low-overhead fault-tolerant quantum memory (Nature 2024)
    url: https://doi.org/10.1038/s41586-024-07107-7
    kind: paper
  - title: Panteleev, Kalachev, Degenerate Quantum LDPC Codes With Good Finite Length Performance (Quantum 2021)
    url: https://arxiv.org/abs/1904.02703
    kind: paper
  - title: Cohen, Kim, Bartlett, Brown, Low-overhead fault-tolerant quantum computing using long-range connectivity (Sci. Adv. 2022)
    url: https://arxiv.org/abs/2110.10794
    kind: paper
  - title: Han, Liu, Purely-logarithmic-time- and constant-space-overhead fault-tolerant quantum computation (preprint, 2026)
    url: https://arxiv.org/abs/2609.28461
    kind: paper
timeline:
  - date: 2009-03-03
    title: Hypergraph product codes
    body: Tillich and Zémor gave constant-rate qLDPC codes with distance proportional to $\sqrt n$.
    source: https://arxiv.org/abs/0903.0566
  - date: 2013-10-10
    title: Constant-overhead fault tolerance
    body: Gottesman showed qLDPC codes allow a constant ratio of physical to logical qubits.
    source: https://arxiv.org/abs/1310.2984
  - date: 2021-11-05
    title: Good qLDPC codes exist
    body: Panteleev and Kalachev proved the qLDPC conjecture with lifted product codes.
    source: https://arxiv.org/abs/2111.03654
  - date: 2023-08-15
    title: Bivariate bicycle codes
    body: Bravyi et al. proposed high-rate codes with a 0.8% threshold and a two-layer planar layout.
    source: https://arxiv.org/abs/2308.07915
  - date: 2026-09-23
    title: Logarithmic time overhead (preprint)
    body: Han and Liu claimed constant space overhead with strictly logarithmic time overhead.
    source: https://arxiv.org/abs/2609.28461
explainer:
  oneLine: Error-correcting codes that protect many qubits at once with far fewer physical qubits than the surface code.
  flow:
    - "Surface code: one logical qubit per patch"
    - "qLDPC: many logical qubits per block"
    - Needs some long-range connections
    - Good codes proven to exist in 2021
    - Fewer physical qubits per useful qubit
  glossary:
    - term: LDPC code
      meaning: A code whose parity checks each involve only a few bits; widely used in classical communication.
      link: https://en.wikipedia.org/wiki/Low-density_parity-check_code
    - term: code rate
      meaning: The fraction k/n of physical qubits that carry logical information.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: code distance
      meaning: The fewest errors that can change the stored information undetected.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: good code
      meaning: A code family whose rate and relative distance both stay above a constant as it grows.
      link: https://en.wikipedia.org/wiki/Low-density_parity-check_code
    - term: surface code
      meaning: The standard 2D code with one logical qubit per patch.
      link: /research/surface-code-fault-tolerance
    - term: decoder
      meaning: The classical algorithm that infers errors from check results.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
  readFirst:
    - title: Low-density parity-check code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Low-density_parity-check_code
      why: The classical codes these generalise.
    - title: Quantum error correction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_error_correction
      why: Background on stabilizer codes and distance.
site:
  published: true
  aiReviewed: true
---

## Parameters and the locality barrier

A code is written $[[n,k,d]]$: $n$ physical qubits, $k$ logical qubits, distance $d$. It is **low-density parity-check** (LDPC) if every check acts on a bounded number of qubits and every qubit is in a bounded number of checks. The surface code is LDPC with $k=1$ and $d\sim\sqrt n$, so its rate $k/n$ goes to zero. Bravyi, Poulin and Terhal (2010) proved that codes with local checks in two dimensions obey $kd^2=O(n)$, so a better code needs long-range connections.

## Good codes

Tillich and Zémor's hypergraph product (2009; IEEE Trans. Inf. Theory 2014) gave constant rate with $d=\Theta(\sqrt n)$. Whether **good** qLDPC codes exist, with $k=\Theta(n)$ and $d=\Theta(n)$, was a long-standing conjecture. Panteleev and Kalachev (2021; STOC 2022) proved it with lifted products over non-abelian groups, which also gave good locally testable classical codes. Leverrier and Zémor's quantum Tanner codes (2022) are a simpler family, and linear-time decoders followed.

## Fault tolerance with constant overhead

Gottesman (2014) showed that qLDPC codes allow fault-tolerant computation with a constant ratio of physical to logical qubits, and Fawzi, Grospellier and Leverrier (FOCS 2018) did it with quantum expander codes. Time overhead is the catch: Yamasaki and Koashi (Nat. Phys. 2024) achieved constant space with quasi-polylogarithmic time overhead using concatenated codes, Tamiya, Koashi and Yamasaki (2024 preprint) polylogarithmic time with qLDPC codes, and Han and Liu (2026 preprint) logarithmic time.

## Practical codes

Bravyi et al. (Nature 2024) proposed **bivariate bicycle** codes, including the $[[144,12,12]]$ "gross" code, with a threshold of about 0.8% under circuit noise, close to the surface code. They estimate that 12 logical qubits can be kept for nearly a million syndrome cycles with 288 physical qubits at a 0.1% error rate, where the surface code would need nearly 3,000. The price is degree-6 connectivity made of two planar layers. Decoders such as belief propagation with ordered-statistics post-processing (Panteleev and Kalachev, 2019) work well but are slower than matching. Logical gates on qLDPC codes are harder than on the surface code and are an active topic (code surgery, Cohen et al., 2022). Architecture studies built on these codes estimate RSA-2048 with fewer than 100,000 physical qubits (Webster et al., 2026 preprint).

## Beyond memories

Good qLDPC codes also gave the proof of the NLTS conjecture (Anshu, Breuckmann and Nirkhe, 2023), a step towards quantum PCP, and they are the input to layer codes, the leading three-dimensional candidates for self-correcting memories.

# Plain explanation

The surface code protects one reliable qubit with hundreds or thousands of physical qubits. That is a lot of overhead, and it is why estimates for useful quantum computers run to hundreds of thousands or millions of qubits.

Quantum LDPC codes are a family of codes in which each check still involves only a few qubits, but one block of qubits protects many reliable qubits at once. Classical versions of these codes already protect data in Wi-Fi and 5G. For quantum codes, whether the best possible kind ('good' codes, which keep both efficiency and protection high as they grow) even existed was an open question until 2021, when it was answered yes.

The catch is wiring. On a flat chip where qubits can only talk to neighbours, there is a proven limit on how good a code can be. qLDPC codes need some long-distance connections between qubits. Some hardware, such as neutral atoms that can be moved around, or chips with two layers of wiring, can provide them. Designs using these codes have cut estimates for breaking RSA encryption to around 100,000 physical qubits.

# Student explanation

**Code parameters.** A code $[[n,k,d]]$ uses $n$ physical qubits to protect $k$ logical qubits, where the distance $d$ is the fewest physical errors that can cause an undetected logical change. The surface code has $k=1$ and $d\approx\sqrt{n/2}$, so the fraction $k/n$ goes to zero as codes grow.

**LDPC** (low-density parity-check) means each check involves a bounded number of qubits and each qubit is in a bounded number of checks, like a sparse matrix. Sparse checks keep the measurement circuits short.

**The locality limit.** Bravyi, Poulin and Terhal proved that if checks act only on nearby qubits in 2D, then $kd^2\le c\,n$ for a constant $c$. The surface code already saturates this, so doing better needs long-range checks.

**Good codes.** A code family is _good_ if both $k$ and $d$ grow in proportion to $n$. Hypergraph products (2009) gave $k\propto n$ with $d\propto\sqrt n$; in 2021 Panteleev and Kalachev built good qLDPC codes, settling a long-open conjecture.

**Practical codes.** IBM's bivariate bicycle codes, such as $[[144,12,12]]$, protect 12 logical qubits with 288 physical qubits (including check qubits), where surface codes would need about 3,000 for similar protection, and have an error threshold near 0.8%. They need each qubit to connect to six others through two layers of wiring.

**Costs.** Decoding is slower than for the surface code, and logical gates between qubits in the same block are harder to perform.

**Hardware.** Neutral-atom machines can move atoms with optical tweezers to create long-range connections, and superconducting chips can add a second wiring layer. Both are being developed specifically so that qLDPC codes can be used in practice.
