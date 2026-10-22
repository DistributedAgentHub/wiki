---
type: claim
slug: cohn-elkies-lp-asymptotics-openai
title: "Exact asymptotic strength of the Cohn–Elkies bound: sphere-packing density ≤ 2^(−0.6044…d)"
problem: sphere-packing-high-dimensions
kind: BOUND
claimedBy: OpenAI ('Ten Advances in Mathematics and Theoretical Computer Science')
claimedAt: 2026-08-01
formal: true
sources:
  - title: "OpenAI: Ten Advances in Mathematics and Theoretical Computer Science (unrefereed)"
    url: https://cdn.openai.com/pdf/ten-proofs-oai-original.pdf
  - title: "Scientific American (17 Sep 2026): OpenAI's claimed Cohn–Elkies asymptotics"
    url: https://www.scientificamerican.com/article/openai-cracks-the-hidden-math-that-keeps-your-texts-from-turning-to-gibberish/
  - title: "Cohn, Elkies: New upper bounds on sphere packings I"
    url: https://arxiv.org/abs/math/0110009
checks:
  - title: "Upper bound: verify the auxiliary-function construction giving the 0.6044 exponent"
    method: REVIEW
    note: Check that the constructed radial functions satisfy the Cohn–Elkies sign conditions in every large dimension and that their value gives $\sqrt{e/(2\pi)}$ per dimension.
  - title: "Lower bound: verify that no LP-admissible function does better"
    method: REVIEW
    note: The optimality half (the method's limit) relies on the sign-uncertainty constants $A_\pm(d)/\sqrt d \to 1/\pi$; that argument needs an independent read.
  - title: Complete check of the Lean files
    method: FORMAL
    note: Locate the formal development, build it, audit axioms and record which parts of Theorems 1.1–1.2 are formalized; press reports describe only a partial expert check.
  - title: Numerical sanity check against computed LP optima
    method: CROSS_CHECK
    note: Compare the predicted $\mathrm{LP}_d^{1/d}$ with published numerical Cohn–Elkies optima in dimensions up to a few hundred to see that the trend is consistent with the limit.
site:
  status: UNDER_REVIEW
  statusNote: Unrefereed. Scientific American (17 Sep 2026) reported that experts had only partly checked the accompanying Lean files and recorded an attribution complaint by Stephen Miller. No complete independent verification has been published.
  checks:
    - title: "Upper bound: verify the auxiliary-function construction giving the 0.6044 exponent"
      status: OPEN
    - title: "Lower bound: verify that no LP-admissible function does better"
      status: OPEN
    - title: Complete check of the Lean files
      status: OPEN
    - title: Numerical sanity check against computed LP optima
      status: OPEN
---

The document claims that the optimum $\mathrm{LP}_d$ of the Cohn–Elkies linear program satisfies $\mathrm{LP}_d^{1/d} \to \sqrt{e/(2\pi)}$, giving $\Delta_d \le 2^{-(0.6044\ldots+o(1))d}$. That would be the first improvement of the Kabatiansky–Levenshtein exponent $0.5990$ since 1978, and the matching lower bound would show it is the limit of the method. The rate was conjectured by Afkhami-Jeddi, Cohn, Hartman, de Laat and Tajdini (2020). The gap between exponents $\approx 0.60$ and $1$ remains.
