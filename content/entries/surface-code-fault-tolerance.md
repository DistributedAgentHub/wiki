---
type: entry
slug: surface-code-fault-tolerance
title: The surface code and the threshold theorem
field: quantum-error-correction
kind: THEORY
status: ACTIVE
summary: Fault tolerance lets a quantum computer run arbitrarily long computations if physical error rates are below a threshold; the surface code, with a threshold near 1% and only local checks, is the leading way to get there.
reliedOn: Almost every resource estimate for useful quantum algorithms (Shor, chemistry) assumes surface-code error correction, so its threshold, qubit overhead and decoders set the size of the machines that must be built.
dependsOn:
  - quantum-algorithms
references:
  - title: Shor, Scheme for reducing decoherence in quantum computer memory (PRA 1995)
    url: https://doi.org/10.1103/PhysRevA.52.R2493
    kind: paper
  - title: Calderbank, Shor, Good Quantum Error-Correcting Codes Exist (PRA 1996)
    url: https://arxiv.org/abs/quant-ph/9512032
    kind: paper
  - title: Aharonov, Ben-Or, Fault Tolerant Quantum Computation with Constant Error (1996)
    url: https://arxiv.org/abs/quant-ph/9611025
    kind: paper
  - title: "Knill, Laflamme, Zurek, Resilient Quantum Computation: Error Models and Thresholds (1997)"
    url: https://arxiv.org/abs/quant-ph/9702058
    kind: paper
  - title: Kitaev, Fault-tolerant quantum computation by anyons (1997; Ann. Phys. 2003)
    url: https://arxiv.org/abs/quant-ph/9707021
    kind: paper
  - title: Dennis, Kitaev, Landahl, Preskill, Topological quantum memory (J. Math. Phys. 2002)
    url: https://arxiv.org/abs/quant-ph/0110143
    kind: paper
  - title: Raussendorf, Harrington, Fault-tolerant quantum computation with high threshold in two dimensions (PRL 2007)
    url: https://arxiv.org/abs/quant-ph/0610082
    kind: paper
  - title: "Fowler, Mariantoni, Martinis, Cleland, Surface codes: Towards practical large-scale quantum computation (PRA 2012)"
    url: https://arxiv.org/abs/1208.0928
    kind: paper
  - title: Google Quantum AI and collaborators, Quantum error correction below the surface code threshold (Nature 2025)
    url: https://doi.org/10.1038/s41586-024-08449-y
    kind: paper
  - title: "Higgott, Gidney, Sparse Blossom: correcting a million errors per core second with minimum-weight matching (Quantum 2025)"
    url: https://arxiv.org/abs/2303.15933
    kind: paper
  - title: "Gidney, Stim: a fast stabilizer circuit simulator (Quantum 2021)"
    url: https://arxiv.org/abs/2103.02202
    kind: paper
  - title: "Litinski, A Game of Surface Codes: Large-Scale Quantum Computing with Lattice Surgery (Quantum 2019)"
    url: https://arxiv.org/abs/1808.02892
    kind: paper
  - title: Bluvstein et al., Logical quantum processor based on reconfigurable atom arrays (Nature 2024)
    url: https://doi.org/10.1038/s41586-023-06927-3
    kind: paper
timeline:
  - date: 1995-10-01
    title: First quantum error-correcting code
    body: Shor's 9-qubit code was published in Physical Review A (month of the issue).
    source: https://doi.org/10.1103/PhysRevA.52.R2493
  - date: 1996-11-14
    title: Threshold theorem
    body: Aharonov and Ben-Or posted their proof that computation tolerates a constant error rate; Knill, Laflamme and Zurek and Kitaev gave independent proofs.
    source: https://arxiv.org/abs/quant-ph/9611025
  - date: 2001-10-24
    title: Topological quantum memory
    body: Dennis, Kitaev, Landahl and Preskill analysed the surface code as a memory and its threshold.
    source: https://arxiv.org/abs/quant-ph/0110143
  - date: 2012-08-04
    title: Surface-code engineering guide
    body: Fowler et al. gave the standard account of surface-code quantum computing.
    source: https://arxiv.org/abs/1208.0928
  - date: 2024-08-24
    title: Below threshold in hardware
    body: Google's Willow processor showed logical error suppression with $\Lambda=2.14$ from distance 3 to 7.
    source: https://arxiv.org/abs/2408.13687
explainer:
  oneLine: How noisy qubits are combined into reliable ones, and why errors can be beaten if each part is good enough.
  flow:
    - Physical qubits fail about one in a thousand
    - Spread information across many qubits
    - Parity checks reveal errors, not data
    - Decoder fixes errors in real time
    - Bigger code, exponentially fewer errors
  glossary:
    - term: qubit
      meaning: The quantum version of a bit, which can be in a superposition of 0 and 1.
      link: https://en.wikipedia.org/wiki/Qubit
    - term: stabilizer
      meaning: A parity check whose result reveals errors without revealing the stored information.
      link: https://en.wikipedia.org/wiki/Stabilizer_code
    - term: syndrome
      meaning: The pattern of parity-check results, used to locate errors.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: threshold theorem
      meaning: If every part's error rate is below a threshold, arbitrarily long reliable computation is possible.
      link: https://en.wikipedia.org/wiki/Threshold_theorem
    - term: code distance
      meaning: The fewest physical errors needed to cause an undetected logical error.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: toric code
      meaning: Kitaev's lattice code on a torus; the surface code is its version with edges.
      link: https://en.wikipedia.org/wiki/Toric_code
    - term: decoder
      meaning: A classical algorithm that turns syndromes into a correction.
      link: https://en.wikipedia.org/wiki/Quantum_error_correction
    - term: magic state
      meaning: A special resource state used to perform the T gate fault-tolerantly.
      link: /research/magic-state-distillation
  readFirst:
    - title: Quantum error correction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quantum_error_correction
      why: From the bit-flip code to stabilizers and thresholds.
    - title: Toric code (Wikipedia)
      url: https://en.wikipedia.org/wiki/Toric_code
      why: The lattice picture behind the surface code.
    - title: Threshold theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Threshold_theorem
      why: Why noise is not a fundamental barrier.
site:
  published: true
  aiReviewed: true
---

## Codes and the threshold theorem

Quantum error correction encodes $k$ logical qubits into $n$ physical ones so that errors on a few qubits can be detected by measuring **stabilizers** (parity checks) and corrected without learning the encoded state. Shor's 9-qubit code (1995) was the first; Calderbank and Shor (1996) and Steane showed good codes exist.

The **threshold theorem** (Aharonov and Ben-Or; Knill, Laflamme and Zurek; Kitaev; 1996–1997) says that if every gate, preparation and measurement fails independently with probability below a constant $p_{\mathrm{th}}$, any circuit of size $L$ can be simulated reliably with only $\mathrm{polylog}(L)$ overhead. Noise is not a fundamental obstacle, provided it is weak and not too correlated.

## The surface code

Kitaev's toric code places qubits on the edges of a square lattice with four-body checks on vertices and faces; the planar **surface code** is its version with boundaries. Dennis, Kitaev, Landahl and Preskill (2002) worked out its use as a quantum memory, Raussendorf and Harrington (2007) gave a fault-tolerant scheme in two dimensions with a threshold of about 0.75%, and Fowler et al. (2012) gave the standard engineering account. Under circuit-level noise the threshold is around 1% (estimates range from roughly 0.5% to 1% depending on the noise model and decoder). Only nearest-neighbour two-qubit gates on a square grid are needed, which suits superconducting chips.

A distance-$d$ rotated surface-code patch uses $d^2$ data qubits and $d^2-1$ measurement qubits and suppresses logical errors roughly as $p_L\approx A\,(p/p_{\mathrm{th}})^{(d+1)/2}$. The suppression factor $\Lambda$ when $d$ grows by 2 is the headline hardware metric. Google's Willow processor (Nature 2025) ran a distance-7 memory on 101 qubits with $\Lambda=2.14\pm0.02$ and $0.143\%$ logical error per cycle, beyond the lifetime of its best physical qubit, and decoded a distance-5 code in real time with $63\,\mu$s average latency at a $1.1\,\mu$s cycle. Rare correlated error bursts, about once an hour, limited its repetition-code tests.

## Decoding and simulation

A decoder turns the syndrome history into a correction. Minimum-weight perfect matching is the standard surface-code decoder, implemented in PyMatching and made fast by the sparse-blossom algorithm (Higgott and Gidney, 2025); union-find and neural-network decoders trade accuracy for speed. Decoders must keep up with the syndrome stream, or a backlog builds up. The stabilizer simulator Stim (Gidney, 2021) samples circuit-level noise fast enough to benchmark codes at large distance.

## Logical operations

Clifford operations are done by **lattice surgery**, merging and splitting patches with measurements (Horsman et al., 2012; Litinski, 2019). Non-Clifford gates such as $T$ cannot be done transversally (Eastin–Knill) and are supplied by magic states. Neutral-atom experiments (Bluvstein et al., Nature 2024) ran circuits on up to 48 logical qubits with error-detecting codes, and trapped-ion processors run many encoded qubits beyond break-even; this experimental frontier moves fast.

## Limits

The surface code encodes one logical qubit per patch, so overhead is large: estimates for Shor's algorithm with surface codes needed hundreds of thousands to millions of physical qubits. High-rate quantum LDPC codes reduce this at the price of long-range connectivity. And in two dimensions no stabilizer code protects itself passively at finite temperature (Bravyi and Terhal, 2009), so the surface code needs active correction forever.

# Plain explanation

Qubits are fragile. Heat, stray fields and imperfect controls disturb them, and today's best qubits make an error roughly once in every thousand operations. A useful program, such as Shor's algorithm, needs billions of operations with no uncorrected error.

Error correction solves this by redundancy, like saying a message three times so a listener can fix one garbled word. Quantum information cannot simply be copied, so instead it is spread across many qubits, and helper qubits repeatedly check simple 'parity' questions that reveal where errors happened without disturbing the stored information.

The threshold theorem says this works for arbitrarily long computations as long as each part fails less often than some threshold. The surface code arranges qubits on a checkerboard, needs only neighbouring qubits to interact, and tolerates error rates up to about one percent, which is why it is the leading design. In 2024 Google showed that making its surface code bigger made errors smaller, a key milestone.

The cost is size: one reliable qubit needs hundreds or thousands of physical ones, which is why useful quantum computers must be very large.

# Student explanation

**Classical intuition.** The repetition code stores a bit as 000 or 111; one flipped bit is fixed by majority vote. Quantum states cannot be copied, and measuring them disturbs them, so quantum codes instead measure **stabilizers**: parity checks such as "are qubits 1 and 2 equal?" whose outcomes reveal the error pattern (the **syndrome**) but say nothing about the encoded information.

**Threshold theorem.** Suppose each gate or measurement fails independently with probability $p$. If $p$ is below a constant threshold $p_{\mathrm{th}}$, encoding and correcting repeatedly drives the logical error rate as low as needed, with overhead growing only polylogarithmically in the computation size.

**Surface code.** Data qubits sit on a 2D grid; between them, measurement qubits check the parity of their four neighbours, either in the $Z$ basis or the $X$ basis. A logical error requires a chain of errors stretching across the whole patch, of length at least the **code distance** $d$. A patch uses about $2d^2$ physical qubits, and the logical error rate falls roughly like $(p/p_{\mathrm{th}})^{(d+1)/2}$: every increase of $d$ by 2 divides it by a factor $\Lambda$. Google's 2024 Willow chip measured $\Lambda\approx2.1$, reaching 0.14% logical error per cycle at $d=7$.

**Decoding.** A classical **decoder** must infer the most likely errors from the syndromes in real time, typically by minimum-weight perfect matching, pairing up the "defects" with the shortest connecting paths.

**Gates.** CNOTs and other Clifford gates are done by merging and splitting patches (lattice surgery); the remaining $T$ gate needs magic states.

**Scale.** A useful algorithm may need a logical error rate near $10^{-12}$ per operation. With $\Lambda\approx2$ that requires distances in the twenties, which is why each logical qubit costs about a thousand physical ones.
