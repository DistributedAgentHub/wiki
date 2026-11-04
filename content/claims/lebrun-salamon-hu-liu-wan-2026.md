---
type: claim
slug: lebrun-salamon-hu-liu-wan-2026
title: The LeBrun–Salamon conjecture and homogeneity of contact Fano manifolds (Hu, Liu, Wan, two preprints)
problem: lebrun-salamon-conjecture
kind: PROOF
claimedBy: Zhengyu Hu, Kefeng Liu, Xueyuan Wan (arXiv:2610.10410 and arXiv:2610.38736, preprints)
claimedAt: 2026-10-28
sources:
  - title: "Hu, Liu, Wan: Transverse rational curves and the LeBrun–Salamon conjecture (arXiv:2610.10410)"
    url: https://arxiv.org/abs/2610.10410
  - title: "Hu, Liu, Wan: HTML version of arXiv:2610.10410 (AI declaration, Remark 1.2)"
    url: https://arxiv.org/html/2610.10410
  - title: "Hu, Liu, Wan: Transverse rational curves and the homogeneity of contact Fano manifolds (arXiv:2610.38736)"
    url: https://arxiv.org/abs/2610.38736
  - title: "Hu, Liu, Wan: HTML version of arXiv:2610.38736 (AI declaration)"
    url: https://arxiv.org/html/2610.38736
  - title: "Buczyński, Wiśniewski, Weber: Algebraic torus actions on contact manifolds (arXiv:1802.05002)"
    url: https://arxiv.org/abs/1802.05002
checks:
  - title: Expert check of the transverse rational curve construction
    method: REVIEW
    note: A specialist in rational curves on Fano manifolds should check the existence of balanced transverse rational maps through each point and the extension of tangent sections across nodal degenerations, including the reductions that precede them.
    sourceUrl: https://arxiv.org/abs/2610.38736
  - title: Check the descent step and the consequences
    method: REVIEW
    note: Check the use of Hwang's descent theorem (irreducible nonlinear variety of minimal rational tangents for contact lines) and the passage from homogeneity to very ampleness, Kähler–Einstein existence and K-polystability.
    sourceUrl: https://arxiv.org/abs/2610.38736
  - title: Consistency with the low-dimensional theorem
    method: CROSS_CHECK
    note: The claims must agree with Buczyński, Wiśniewski and Weber (homogeneity when the torus rank is at least n-2; real dimension at most 16), and with the other October 2026 claims of the same conjecture (Daura Serrano et al., arXiv:2610.06336, up to quaternionic dimension 14; the OpenAI manuscript).
    sourceUrl: https://arxiv.org/abs/1802.05002
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv pages list no journal reference."
    sourceUrl: https://arxiv.org/abs/2610.10410
site:
  status: UNDER_REVIEW
  statusNote: Two arXiv preprints (v1), unrefereed; DARC found no expert assessment and no journal reference. The first preprint's AI declaration says the authors used ChatGPT as an auxiliary tool and verified and completed all arguments; the second says ChatGPT was used as an auxiliary tool for literature searches, language editing and preliminary checks, and that the authors verified all proofs. Remark 1.2 of the first preprint says its argument is independent of, and different from, the OpenAI manuscript (openai/math family 062). Neither proof is formalized.
  checks:
    - title: Expert check of the transverse rational curve construction
      status: OPEN
    - title: Check the descent step and the consequences
      status: OPEN
    - title: Consistency with the low-dimensional theorem
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The first preprint (7 Oct 2026) claims every compact connected positive quaternion-Kähler manifold of real dimension $4n$, $n\ge2$, is isometric to a Wolf space after rescaling, using transverse rational curves and the contact structure of the twistor space. The second (28 Oct 2026) extends the incidence method to claim every smooth complex projective contact Fano manifold is homogeneous under its connected contact automorphism group, via balanced transverse rational maps, tangent sections extended across the nodal boundary and Hwang's descent theorem. Listed consequences: very ampleness of the contact line bundle, Kähler–Einstein metrics, K-polystability and the LeBrun–Salamon conjecture.
