---
type: claim
slug: modular-existential-closedness-aslanyan-2026
title: Modular Existential Closedness for the j-function extended by Schwarz reflection (claimed proof)
problem: modular-existential-closedness
kind: PROOF
claimedBy: Vahagn Aslanyan (preprint, not peer-reviewed)
claimedAt: 2026-10-26
sources:
  - title: "Aslanyan: Modular Existential Closedness (arXiv:2610.35409, v1)"
    url: https://arxiv.org/abs/2610.35409
  - title: "Aslanyan, Kirby: Blurrings of the j-function"
    url: https://arxiv.org/abs/2005.10167
  - title: "Pila, Tsimerman: Ax-Schanuel for the j-function"
    url: https://arxiv.org/abs/1412.8255
checks:
  - title: Counterexample to the upper-half-plane formulation
    method: REVIEW
    note: The system z1 = z3 + iR, z2 = z4 + iR, j(z1)j(z2) = 1 forces Im z1, Im z2 ≥ R when z3, z4 lie in the upper half-plane, and |j(z)| → ∞ as Im z → ∞, so for large R the product exceeds 1 in modulus. This is why the claim is stated for the Schwarz-reflection extension.
    sourceUrl: https://arxiv.org/abs/2610.35409
  - title: Simultaneous Möbius approximation theorem (Ratner step)
    method: REVIEW
    note: An expert in homogeneous dynamics should check Theorem 1.8 and its proof in Section 5, which feeds the construction of the approximating sequence of systems.
    sourceUrl: https://arxiv.org/abs/2610.35409
  - title: "Ax–Schanuel step: non-degeneracy and isolated limiting solution"
    method: REVIEW
    note: Check that Ax–Schanuel for j keeps the constructed analytic functions inside the domains of the algebraic functions and makes the solution of the limiting system isolated, so that Rouché's theorem applies.
    sourceUrl: https://arxiv.org/abs/2610.35409
  - title: Peer review
    method: REFEREE
    note: No journal reference is listed on arXiv, so no refereed version is known yet.
    sourceUrl: https://arxiv.org/abs/2610.35409
site:
  status: UNDER_REVIEW
  statusNote: A 36-page arXiv v1 posted 2026-10-26; no journal reference and no formalisation. No independent confirmation or rebuttal known at the time of writing. The counterexample to the old formulation is elementary and checks out; the main proof has not been checked by anyone outside the author. A footnote in the preprint says the counterexample was spotted by ChatGPT 5.6 Sol.
  checks:
    - title: Counterexample to the upper-half-plane formulation
      status: PASSED
    - title: Simultaneous Möbius approximation theorem (Ratner step)
      status: OPEN
    - title: "Ax–Schanuel step: non-degeneracy and isolated limiting solution"
      status: OPEN
    - title: Peer review
      status: OPEN
---

The preprint claims that for $j$ extended to $\mathbb C\setminus\mathbb R$ by Schwarz reflection, every broad and free irreducible variety $V\subseteq\mathbb C^n\times\mathbb C^n$ contains a point $(z_1,\dots,z_n,j(z_1),\dots,j(z_n))$ with all $z_i$ off the real line, and that such points are even Zariski dense in $V$. Informally, a system of equations in field operations and $j$ has a solution unless it is overdetermined. The proof uses Ratner's theorems to prove a simultaneous Möbius approximation theorem for analytic maps, Ax–Schanuel to build a limiting system with an isolated solution, and Rouché's theorem to lift a solution to the original system. The preprint also states that the earlier upper-half-plane formulation of the conjecture is false.
