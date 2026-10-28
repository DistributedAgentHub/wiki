---
type: claim
slug: mason-tensor-product-tyomkyn-2026
title: "Generic tensor products are not maximal: counterexample to the uniform form of Mason's conjecture"
problem: mason-tensor-product-conjecture
kind: DISPROOF
claimedBy: Mykhaylo Tyomkyn (arXiv:2610.37616, preprint)
claimedAt: 2026-10-27
sources:
  - title: "Tyomkyn: Generic tensor products are not maximal (arXiv:2610.37616)"
    url: https://arxiv.org/abs/2610.37616
  - title: "Tyomkyn: Linear matroid products: a synthetic approach (arXiv:2609.16747)"
    url: https://arxiv.org/abs/2609.16747
  - title: "Bulavka, Tancer: Maximal matroids and counterexamples (arXiv:2606.14663)"
    url: https://arxiv.org/abs/2606.14663
checks:
  - title: Expert check of the construction
    method: REVIEW
    note: A matroid theorist should check that the relaxed circuit-hyperplane gives a matroid, that it is a tensor product of the two uniform matroids, and that it is strictly freer than the generic tensor product.
    sourceUrl: https://arxiv.org/abs/2610.37616
  - title: Non-representability over every field
    method: REVIEW
    note: Check the argument that applies Tyomkyn's representability theorem (arXiv:2609.16747) to show the new matroids are non-representable over any field.
    sourceUrl: https://arxiv.org/abs/2609.16747
  - title: Jackson-Tanigawa counterexamples in every dimension
    method: CROSS_CHECK
    note: Compare the claimed d >= 2 counterexamples with the independent Bulavka-Tancer counterexamples (described as d >= 3) and with the evidence in arXiv:2609.16747 that representable 2-rigidity matroids are classified.
    sourceUrl: https://arxiv.org/abs/2606.14663
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.37616
site:
  status: UNDER_REVIEW
  statusNote: A preprint posted on arXiv on 27 Oct 2026, unrefereed. DARC found no expert assessment of it yet. The same author's earlier preprint (arXiv:2609.16747) proves the conjecture for linearly representable matroids, which is consistent with a non-representable counterexample. The paper's AI-use statement says the counterexamples were found by ChatGPT 6 while the author was working with it, hence origin MIXED.
  checks:
    - title: Expert check of the construction
      status: OPEN
    - title: Non-representability over every field
      status: OPEN
    - title: Jackson-Tanigawa counterexamples in every dimension
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims tensor products of uniform matroids that are strictly freer than their generic linear tensor products: the generic tensor product of two copies of U(7,9) (and of U(s,s+a), U(s,s+b) with s = 4k−1, k ≥ 2 and a, b ≥ 2) is not maximal, obtained by relaxing one circuit-hyperplane. It says this disproves the uniform tensor-product version of Mason's conjecture, that the matroids are non-representable over every field, and that it gives full-rank counterexamples to the Jackson–Tanigawa hyperconnectivity conjecture in every dimension d ≥ 2.
