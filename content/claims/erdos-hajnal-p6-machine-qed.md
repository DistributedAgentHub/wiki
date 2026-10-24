---
type: claim
slug: erdos-hajnal-p6-machine-qed
title: Erdős–Hajnal property for P6-free graphs, with a Lean proof conditional on three published theorems
problem: erdos-hajnal-long-paths
kind: PROOF
claimedBy: Repository machine-qed/erdos-hajnal-six-vertex-path (produced by Claude Opus 5.5)
claimedAt: 2026-09-27
formal: true
sources:
  - title: The Erdős–Hajnal property for the six-vertex path (repository, unrefereed)
    url: https://github.com/machine-qed/erdos-hajnal-six-vertex-path
  - title: "Nguyen, Scott, Seymour: Induced subgraph density VII. The five-vertex path"
    url: https://arxiv.org/abs/2312.15333
checks:
  - title: The three Lean axioms match the published NSS VII results
    method: REVIEW
    note: Compare `RodlCoP6`, `EhP5` and `NssComb` with Theorem 1.3, Theorem 1.2 and Lemma 4.3 of arXiv:2312.15333, including quantifier order and all constants.
  - title: Independent Lean build and axiom audit
    method: FORMAL
    note: Rebuild against the pinned Mathlib and confirm that `#print axioms` on the main theorem shows only the three named axioms plus the standard ones.
  - title: Human read of the 24-page argument
    method: REVIEW
    note: A structural graph theorist should check the iterative sparsification step specific to $P_6$ and the reason the repository gives for its failure at $P_7$.
site:
  status: UNDER_REVIEW
  statusNote: Explicitly unrefereed. The repository reports its own axiom audit and Comparator checks, but no external assessment was found as of 16 Oct 2026.
  checks:
    - title: The three Lean axioms match the published NSS VII results
      status: OPEN
    - title: Independent Lean build and axiom audit
      status: OPEN
    - title: Human read of the 24-page argument
      status: OPEN
---

A 24-page manuscript claims a $\tau > 0$ (with $\tau < 10^{-15}$) such that every $P_6$-free graph on $n$ vertices has a clique or stable set of size $n^{\tau}$, in fact the polynomial Rödl property. The Lean 4 formalization takes three results of Nguyen–Scott–Seymour (Induced subgraph density VII) as axioms and proves the rest. The repository states that the method does not extend to $P_7$, so the long-path problem stays open for $k \ge 7$.
