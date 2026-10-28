---
type: problem
slug: local-smoothing-conjecture
title: Sogge's local smoothing conjecture for the wave equation in ℝⁿ, n ≥ 3
entry: harmonic-analysis
status: IN_PROGRESS
origin: Christopher Sogge, 1991
ratings:
  difficulty: 74
  applicationValue: 12
  leverage: 58
workMix:
  theory: 94
  engineering: 4
  compute: 2
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Guth, Wang, Zhang: A sharp square function estimate for the cone in ℝ³ (Annals of Mathematics 192, 2020)"
    url: https://arxiv.org/abs/1909.10693
  - title: Annals of Mathematics page for the Guth–Wang–Zhang paper
    url: https://annals.math.princeton.edu/2020/192-2/p06
  - title: "Bourgain, Demeter: The proof of the ℓ² decoupling conjecture"
    url: https://arxiv.org/abs/1403.5335
  - title: "Wang, Zahl: Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions"
    url: https://arxiv.org/abs/2502.17655
  - title: "OpenAI: Building scientific understanding with academic communities (26 Oct 2026)"
    url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - title: "OpenAI (AI-generated, not peer-reviewed): Local smoothing for the Euclidean wave equation (openai/math, PDF at 7ef5c0cc5c)"
    url: https://github.com/openai/math/blob/7ef5c0cc5c/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf
  - title: OpenAI Lean scope for the local smoothing release (openai/math lean/docs/079.md)
    url: https://github.com/openai/math/blob/7ef5c0cc5c/lean/docs/079.md
links:
  - to: kakeya-conjecture-r4
    kind: IMPLIES
    note: Local smoothing in ℝ⁴ would give the Kakeya maximal estimate there and so the Hausdorff dimension 4 statement.
  - to: restriction-conjecture-r3
    kind: RELATED
    note: Same wave-packet and decoupling toolkit; local smoothing implies Bochner–Riesz, which implies restriction (Tao, 1999), so OpenAI also claims Stein's restriction conjecture; its Lean scope lists spherical extension bounds only in strict ranges.
timeline:
  - date: 1991-01-01
    title: Sogge's local smoothing conjecture
    body: Sogge formulates the conjecture (month and day not given here).
    source: https://openai.com/index/building-scientific-understanding-with-academic-communities/
  - date: 2014-03-21
    title: Decoupling gives p ≥ 2(n+1)/(n−1)
    body: Bourgain–Demeter ℓ² decoupling yields the conjectured bound for p ≥ 2(n+1)/(n−1) in all dimensions (arXiv March 2014).
    source: https://arxiv.org/abs/1403.5335
  - date: 2019-09-24
    title: "Two dimensions: Guth–Wang–Zhang"
    body: A sharp square function estimate for the cone in ℝ³ proves local smoothing for n = 2 (arXiv September 2019; Annals 2020).
    source: https://arxiv.org/abs/1909.10693
  - date: 2026-10-26
    title: Unrefereed OpenAI claim in every dimension
    body: OpenAI says its models proved the conjecture for all n ≥ 2 via a novel auxiliary PDE, with a Lean formalization dated 19 October; raw AI output released without an organized review group, no independent assessment yet.
    source: https://openai.com/index/building-scientific-understanding-with-academic-communities/
explainer:
  oneLine: Do waves that start spread out get smoother on average over time? Known in 2D; an unchecked 2026 AI claim covers every dimension.
  flow:
    - Waves can focus into sharp spikes
    - Time averaging should soften the spikes
    - "Sogge: smoothing gain of 1/p derivative"
    - Proved in 2D; 3D and up unchecked
  glossary:
    - term: wave equation
      meaning: The equation describing waves such as sound, water ripples and light, linking how a quantity changes in time and in space.
      link: https://en.wikipedia.org/wiki/Wave_equation
    - term: Fourier transform
      meaning: A way to write a function as a sum of pure waves of different frequencies.
      link: https://en.wikipedia.org/wiki/Fourier_transform
    - term: L^p norm
      meaning: A family of rulers measuring a function's size; a larger p weights tall, narrow spikes more heavily.
      link: https://en.wikipedia.org/wiki/Lp_space
    - term: Sobolev space
      meaning: A space of functions whose size is measured together with a number of their derivatives, so it also records roughness.
      link: https://en.wikipedia.org/wiki/Sobolev_space
    - term: Schwartz function
      meaning: A very smooth function that dies out faster than any power far away, often used as safe test data.
      link: https://en.wikipedia.org/wiki/Schwartz_space
    - term: Bochner–Riesz means
      meaning: Smoothly cut-off versions of the Fourier inversion integral, used to ask when Fourier series converge in higher dimensions.
      link: https://en.wikipedia.org/wiki/Bochner%E2%80%93Riesz_mean
    - term: decoupling
      meaning: A theorem saying that waves with different frequencies add up almost as if they were independent, with a controlled loss.
      link: /research/harmonic-analysis
    - term: square function estimate
      meaning: A bound on how the sizes of many wave pieces add up when combined, used to prove sharp smoothing results.
      link: /research/harmonic-analysis
    - term: Kakeya set
      meaning: A set containing a line segment of unit length in every direction.
      link: https://en.wikipedia.org/wiki/Kakeya_set
    - term: Lean
      meaning: "A proof assistant: software that checks a mathematical proof step by step against a small trusted core."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: partial differential equation
      meaning: An equation relating a function to its rates of change in several variables, such as time and position.
      link: https://en.wikipedia.org/wiki/Partial_differential_equation
  readFirst:
    - title: Wave equation - Wikipedia
      url: https://en.wikipedia.org/wiki/Wave_equation
      why: The equation behind the ripples, before any harmonic analysis.
    - title: Kakeya set - Wikipedia
      url: https://en.wikipedia.org/wiki/Kakeya_set
      why: The needle problem that local smoothing would settle.
    - title: Harmonic analysis (research entry)
      url: /research/harmonic-analysis
      why: Where decoupling, restriction and Kakeya fit together.
    - title: "OpenAI: Building scientific understanding with academic communities"
      url: https://openai.com/index/building-scientific-understanding-with-academic-communities/
      why: OpenAI's own account of the 2026 claim and how it was released.
    - title: "Guth, Wang, Zhang: sharp square function estimate for the cone (Annals page)"
      url: https://annals.math.princeton.edu/2020/192-2/p06
      why: The accepted two-dimensional proof, for readers ready for a research paper.
raw:
  body: "Let $n\\ge2$ and let $u(x,t)=e^{it\\sqrt{-\\Delta}}f(x)$ solve the half-wave equation with initial data $f$. At a fixed time the solution loses $(n-1)(1/2-1/p)$ derivatives in $L^p$ (Peral, Miyachi). Sogge's conjecture says that averaging in time over $[1,2]$ recovers an extra $1/p$ of a derivative at the critical exponent and above: for every $p\\ge 2n/(n-1)$ and every $\\varepsilon>0$,\n\n$$\\|u\\|_{L^p(\\mathbb R^n\\times[1,2])}\\le C_{p,\\varepsilon}\\,\\|f\\|_{W^{s,p}(\\mathbb R^n)},\\qquad s=\\frac{n-1}{2}-\\frac np+\\varepsilon .$$\n\nFor $2\\le p\\le 2n/(n-1)$ the sharp exponent is $\\varepsilon$ (interpolation with $L^2$). The ε-loss is part of the conjectured statement. The case $n=2$ is a theorem (Guth–Wang–Zhang); the open problem is $n\\ge3$."
  student: "**The setting.** In first-year physics you met the wave equation $\\partial_t^2u=\\Delta u$. Here $\\Delta u=\\partial_{x_1}^2u+\\dots+\\partial_{x_n}^2u$ is the sum of second derivatives in each space direction, so $n$ is the number of space dimensions. Splitting a wave into sines and cosines (the **Fourier transform**) turns each frequency into its own travelling ripple. The one-directional half of the solution is $u(x,t)=e^{it\\sqrt{-\\Delta}}f(x)$, where $f$ is the starting shape.\n\n**Measuring size.** The $L^p$ norm $\\|g\\|_p=(\\int|g|^p)^{1/p}$ measures how big a function is; large $p$ punishes tall narrow spikes. A **Sobolev norm** $\\|f\\|_{W^{s,p}}$ is the $L^p$ norm after taking $s$ derivatives, so it also measures how rough $f$ is: rough starting shapes have large Sobolev norm.\n\n**What is known at one instant.** At a fixed time $t$, the wave can be rougher than the start by $(n-1)(1/2-1/p)$ derivatives. This loss is real: waves spreading from a sphere can focus at a point.\n\n**The conjecture.** Sogge's conjecture says that if we measure $u$ over space *and* time $x\\in\\mathbb R^n$, $t\\in[1,2]$, the loss is smaller by $1/p$ of a derivative, for $p\\ge2n/(n-1)$:\n\n$$\\|u\\|_{L^p(\\mathbb R^n\\times[1,2])}\\le C_{p,\\varepsilon}\\|f\\|_{W^{s,p}},\\qquad s=\\tfrac{n-1}{2}-\\tfrac np+\\varepsilon.$$\n\nThis says the wave over a time window is smoother, on average, than its snapshot, up to a loss $\\varepsilon$ that may be taken as small as you like (but not zero). The reason is that focusing at one time is paid for by spreading at other times.\n\n**Status.** For $n=2$ it was proved by Guth, Wang and Zhang (Annals of Mathematics, 2020) by a sharp bound on how pieces of the wave travelling in different directions add up (a square function estimate for the cone). For $n\\ge3$, Bourgain and Demeter's decoupling theorem gives it only when $p\\ge2(n+1)/(n-1)$. The range between $2n/(n-1)$ and that number has been open since 1991.\n\n**Why it matters.** It is known to imply the Bochner–Riesz conjecture (when does a smoothly truncated Fourier series converge) and the Kakeya maximal conjecture, the needle-turning problem of this site's Kakeya entry.\n\n**The 2026 claim.** OpenAI says its models proved the statement for all $n\\ge2$ and every $p$ via a new auxiliary partial differential equation, formalized the argument in Lean on 19 October 2026, and released it on 26 October as raw output on an expert's advice, with no organized review. It also says the proof gives Kakeya and restriction in all dimensions. DARC has not seen a Lean build, and its Lean statements have strict ranges and ε-losses that must be compared with the original conjectures. Until experts check it, the problem stays open."
site:
  aiReviewed: true
---

# State of the art

**Open in the accepted literature for n ≥ 3; a full all-dimension claim is unrefereed.** Sogge formulated the conjecture in 1991. Guth, Wang and Zhang (arXiv:1909.10693, Annals of Mathematics 192 (2020)) proved it in two spatial dimensions through a sharp square function estimate for the cone in ℝ³. In higher dimensions the accepted result comes from Bourgain–Demeter ℓ² decoupling (arXiv:1403.5335), which gives the conjectured bound for $p\ge 2(n+1)/(n-1)$; the range $2n/(n-1)<p<2(n+1)/(n-1)$ is open for every $n\ge3$. Local smoothing implies the Bochner–Riesz conjecture, which in turn implies the restriction conjecture (Tao, 1999) and hence the Kakeya conjecture; OpenAI's post and paper rely on this chain. The Kakeya set conjecture is a theorem in ℝ³ (Wang–Zahl, 2025). On 26 October 2026 OpenAI announced that its models produced a proof of the local smoothing conjecture in every dimension via a novel auxiliary PDE, obtained on 18 October 2026 and formalized in Lean on 19 October, and that this also gives the Kakeya and Stein restriction conjectures in all dimensions. The paper (dated 25 October 2026) and the Lean scope are in openai/math. OpenAI released it as raw AI output on an expert's advice and without an organized review group. The Lean file claims the bound for every $n\ge2$ and $2\le p<\infty$ for Schwartz data, uniform Bochner–Riesz bounds, spherical extension and Stein square-function bounds in their strict ranges, a Kakeya maximal $L^n$ bound with $\delta^{-\varepsilon}$ loss, and Hausdorff dimension $n$ for Kakeya sets. DARC has not seen a build (the repository has no Lean CI) and no independent expert assessment has appeared, so none of this is accepted.

# Applications

Local smoothing gives sharper Strichartz-type and spacetime estimates for the wave equation, with consequences for the well-posedness of nonlinear wave equations and for sharp convergence of Bochner–Riesz means of Fourier series and integrals. There is no direct engineering application.

# Resolution criteria

A proof of the $L^p$ bound with ε-loss for every $p\ge2n/(n-1)$ in each dimension $n\ge3$ (or a counterexample), accepted by experts or checked by a formalization whose statement has been audited against the conjecture. A machine-checked proof counts only if the Lean statement matches the conjecture above, including the ε-loss and the full range of $p$. Partial ranges of $p$ (decoupling) do not resolve it.

# Rating rationale

Difficulty 74: open for 35 years in every dimension n ≥ 3 after the 2D proof of 2019, and at least as hard as Kakeya in ℝ⁴ (62) and restriction in ℝ³ (72) because it implies both, though decoupling already settles the range p ≥ 2(n+1)/(n−1). The unrefereed all-dimension claim is not credited. Application value 12: indirect, through wave-equation estimates. Leverage 58: it gates Bochner–Riesz, Kakeya maximal bounds and sharp space-time estimates.

# Work mix rationale

The work is analytic (wave packets, square functions, decoupling); formal verification of any proof is the minor engineering share.

# Verification

Experts referee the proof in each dimension n ≥ 3, with the new auxiliary-PDE step identified and checked independently. OpenAI's Lean formalization (openai/math, lean/docs/079.md) is an additional FORMAL check, not a status: rebuild it with Comparator and audit that the Lean statement is the ε-loss bound for all p ≥ 2n/(n−1), not a weaker range. DARC has no Formal Conjectures statement for it.

# Plain explanation

When a wave travels, such as a ripple on a pond or sound in a room, it can focus. Sometimes the energy piles up in one spot for a moment. The question is how bad that pile-up can be.

Imagine a pond where you toss in a stone that makes a rough, jagged splash. At any single instant, the ripples can still look rough. Mathematicians expect something better if you watch over a stretch of time instead of one instant: the focusing at different moments gets in each other's way, and on average the wave becomes a bit smoother than the splash that made it. This is called local smoothing, and the conjecture says exactly how much smoother it gets.

Christopher Sogge stated the conjecture in 1991. In two dimensions, like the pond surface, Larry Guth, Hong Wang and Ruixiang Zhang proved it in 2019. Nobody had an accepted proof for three dimensions or more, where sound and light live.

On 26 October 2026 OpenAI said its models proved it in every dimension, and that this settles two other famous problems, the Kakeya and restriction conjectures. The proof is unrefereed computer output. It comes with a version written for a computer proof checker that nobody outside OpenAI has reported building yet, so mathematicians have not yet decided whether it is right.

The analogy has a limit: a pond is a calm picture, while the real statement measures wave size with precise mathematical rulers that a picture cannot show.
