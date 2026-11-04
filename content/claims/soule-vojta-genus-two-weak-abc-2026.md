---
type: claim
slug: soule-vojta-genus-two-weak-abc-2026
title: A weak form of abc and a Vojta-type height bound for genus-2 curves (Soulé, preprint)
problem: abc-conjecture
kind: PROOF
claimedBy: Christophe Soulé (CNRS and IHÉS; arXiv:2611.05217, preprint)
claimedAt: 2026-11-03
sources:
  - title: "Soulé: On the abc conjecture (arXiv:2611.05217, v1 preprint)"
    url: https://arxiv.org/abs/2611.05217
  - title: "Moret-Bailly: Hauteurs et classes de Chern sur les surfaces arithmétiques (Astérisque 183, 1990)"
    url: https://www.numdam.org/item/AST_1990__183__37_0/
  - title: "Vojta: Diophantine approximations and value distribution theory (LNM 1239)"
    url: https://link.springer.com/book/10.1007/BFb0072989
checks:
  - title: Expert check of the adelic intersection argument (Theorem 1)
    method: REVIEW
    note: "An expert in Arakelov and adelic intersection theory should check the upper bound for $\\overline{\\omega}_P^2$ in terms of $\\log|\\Delta_F|$ (Theorem 1: $(36+\\varepsilon)$ times the log discriminant plus $O(d)$), which rests on the Kodaira fibration, Minkowski's theorem on successive minima and the sup-norm result in Proposition 1."
    sourceUrl: https://arxiv.org/abs/2611.05217
  - title: Deduction of Theorem A and the weak abc from Theorem 1
    method: CROSS_CHECK
    note: Check that the passage from the bound on Y to heights on the genus-2 curve C, and from Theorem A to the exponent $24+\varepsilon$, follows Moret-Bailly's argument with the constants stated in Section 7.
    sourceUrl: https://arxiv.org/abs/2611.05217
  - title: Consistency with known weak abc and Szpiro-type bounds
    method: CROSS_CHECK
    note: "The claimed exponent $24+\\varepsilon$ should be compared with the best known unconditional bounds (Stewart–Yu type, exponent $1/3$ inside the exponential) to see what is new: an explicit power of the radical in place of an exponential-type bound."
    sourceUrl: https://arxiv.org/abs/2611.05217
  - title: Refereeing
    method: REFEREE
    note: "Unrefereed: the arXiv page lists no journal reference."
    sourceUrl: https://arxiv.org/abs/2611.05217
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed arXiv v1 (3 Nov 2026), the day before this entry; no journal reference and no author comments on the arXiv page. Soulé is an established arithmetic geometer at IHÉS, but DARC found no expert assessment yet, so nothing is accepted or refuted. Even if correct, it proves abc only with exponent 24+ε, which is far weaker than the conjecture and does not by itself settle it. The acknowledgements thank a list of mathematicians and credit no AI use; the paper cites other recent preprints on Landau-Siegel zeros (Kerr; OpenAI) for context on Theorem 5.
  checks:
    - title: Expert check of the adelic intersection argument (Theorem 1)
      status: OPEN
    - title: Deduction of Theorem A and the weak abc from Theorem 1
      status: OPEN
    - title: Consistency with known weak abc and Szpiro-type bounds
      status: OPEN
    - title: Refereeing
      status: OPEN
---

The preprint claims two things, neither of which is the abc conjecture. Theorem A: for a smooth projective genus-2 curve $C$ over a number field $K_0$ and any $\varepsilon>0$ there is a constant $c(\varepsilon)$ such that every point $P\in C(F)$, for every number field $F\supseteq K_0$, satisfies $h(P)\le(12+\varepsilon)\,\log|\Delta_F|/[F:\mathbb Q]+c(\varepsilon)$, where $h$ is a logarithmic height for the canonical bundle and $\Delta_F$ the discriminant; the author calls it an effective Mordell-type result and a weak form of Vojta's conjecture (Conj. 5.2.6 in Vojta's 1987 Springer Lecture Notes in Mathematics 1239). Theorem B (weak abc): for coprime positive integers with $a+b=c$, $c\le A(\varepsilon)\,N^{24+\varepsilon}$ with $N$ the product of the primes dividing $abc$. The exponent is $24+\varepsilon$, not the conjectured $1+\varepsilon$. Theorem 4 gives a uniform version over number fields (exponent $24+\varepsilon$ on the radical plus a $(30+\varepsilon)$ discriminant term), and the paper deduces a Szpiro-type bound (Theorem 3) and a no-Siegel-zero statement for quadratic Dirichlet L-functions (Theorem 5). The method follows Parshin and Moret-Bailly, using adelic intersection theory on a Kodaira fibration. This is a separate approach from the inter-universal Teichmüller route of the Mochizuki claim (abc-iut-mochizuki).
