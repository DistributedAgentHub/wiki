---
type: claim
slug: peaked-circuits-advantage-h2
title: Heuristic quantum advantage with peaked circuits on a 56-qubit trapped-ion device
problem: verifiable-quantum-advantage-benchmark
kind: MEASUREMENT
claimedBy: Hrant Gharibyan, Mohammed Zuhair Mullath, Nicholas E. Sherman, Vincent P. Su, Hayk Tepanyan, Yuxuan Zhang
claimedAt: 2025-10-29
sources:
  - title: "Gharibyan et al.: Heuristic Quantum Advantage with Peaked Circuits (preprint)"
    url: https://arxiv.org/abs/2510.25838
  - title: "Kremer, Dupuis: Efficient Classical Simulation of Heuristic Peaked Quantum Circuits (preprint)"
    url: https://arxiv.org/abs/2604.21908
checks:
  - title: Classical simulation of the largest instance is infeasible
    method: CROSS_CHECK
    note: Tensor-network contraction with greedy MPO bond reduction ('unswapping') recovers the peak of the largest instance in about an hour on one GPU, roughly half the quantum runtime.
    sourceUrl: https://arxiv.org/abs/2604.21908
  - title: Peaked-circuit families that resist unswapping
    method: CROSS_CHECK
    note: Design peaked circuits without a mirrored structure and run the Kremer–Dupuis attack and other contraction methods on them. Any new advantage claim should be published together with these attack runs.
site:
  status: REFUTED
  statusNote: Kremer and Dupuis (arXiv:2604.21908, April 2026) simulate the largest instance classically in about an hour on a single GPU by exploiting the mirrored structure and undoing the obfuscating permutation. No reply from the original authors was found.
  checks:
    - title: Classical simulation of the largest instance is infeasible
      status: FAILED
    - title: Peaked-circuit families that resist unswapping
      status: OPEN
---

The preprint ran obfuscated 'peaked' circuits with about 2,000 two-qubit gates on Quantinuum's H2 and recovered the peak bitstring in under two hours, while extrapolating classical simulation to years on exascale systems. The peak bitstring makes the output efficiently checkable, which is why the scheme was proposed as a verifiable advantage benchmark. The authors also prove that deciding peakedness is QCMA-complete; that complexity result is separate from the advantage claim.
