---
type: claim
slug: chen-holmer-shen-fixed-profile-soliton-resolution-counterexample-2026
title: Bounded global solutions of the focusing energy-critical wave equation with a shape-changing stationary core, contradicting the fixed-profile form of soliton resolution in dimensions 3 and 5 (Chen–Holmer–Shen, preprints)
problem: soliton-resolution-energy-critical-wave-equation-nonradial
kind: COUNTEREXAMPLE
claimedBy: Xuwen Chen, Justin Holmer, Shunlin Shen (arXiv:2611.17291 and arXiv:2611.17243, preprints)
claimedAt: 2026-11-12
sources:
  - title: "Chen, Holmer, Shen: A counterexample to fixed-profile soliton resolution for the three-dimensional quintic wave equation (arXiv:2611.17291, preprint)"
    url: https://arxiv.org/abs/2611.17291
  - title: "Chen, Holmer, Shen: Radiation and persistent shape dynamics for the five-dimensional energy-critical nonlinear wave equation (arXiv:2611.17243, preprint)"
    url: https://arxiv.org/abs/2611.17243
  - title: "Duyckaerts, Kenig, Merle: Concentration-compactness and universal profiles for the non-radial energy critical wave equation (arXiv:1510.01750; the preprints cite its Conjecture 5.5)"
    url: https://arxiv.org/abs/1510.01750
  - title: "Duyckaerts, Jia, Kenig, Merle: Soliton resolution along a sequence of times (arXiv:1601.01871)"
    url: https://arxiv.org/abs/1601.01871
  - title: "Duyckaerts, Kenig, Merle: Classification of radial solutions of the focusing, energy-critical wave equation (arXiv:1204.0031)"
    url: https://arxiv.org/abs/1204.0031
  - title: "Jendrej, Lawrie: Soliton resolution for the energy-critical nonlinear wave equation in the radial case (arXiv:2203.09614)"
    url: https://arxiv.org/abs/2203.09614
checks:
  - title: Reproduce the computer-assisted certificates
    method: REPRODUCE
    note: The 3D paper says its verifier ships with the manuscript and that running python3 run_fresh.py in the certification directory rebuilds the interval backend and reruns every stage; the recorded run used Linux x86-64, Python 3.12, GCC 14.2 and MPFR 4.2.2. Obtain the files (DARC did not confirm where they are hosted), rerun them on a fresh machine, and check the claimed kernel dimension (nine for the full kernel, four odd directions). The 5D paper has an analogous spectral bound for a single-node state (its Appendix C), which needs its own rerun. Then audit the enclosure arguments, not just the log.
    sourceUrl: https://arxiv.org/abs/2611.17291
  - title: Uniform-in-time construction estimates
    method: REVIEW
    note: Check the projected Green estimate, the control of the zero and negative modes, the dipole subtraction in 3D, the radiation-packet moment estimates and the endpoint fixed-point map (Sections 4 to 9 of the 3D paper; the analogous sections of the 5D paper), in particular that the nonlinear error stays small uniformly over infinitely many intervals of growing length.
    sourceUrl: https://arxiv.org/abs/2611.17291
  - title: "Quantifiers: is the refuted statement the DKM conjecture?"
    method: REVIEW
    note: Confirm that the 3D fixed-profile assertion (the number of profiles, profiles, velocities and free wave chosen before the time sequence) and the 5D statement match the Duyckaerts–Kenig–Merle formulation they cite, and that the norm identity of Proposition 2.4 of the 3D paper genuinely excludes every fixed finite list, with rotations allowed.
    sourceUrl: https://arxiv.org/abs/1510.01750
  - title: Consistency with the refereed radial and sequential theorems
    method: CROSS_CHECK
    note: The solutions are claimed to be nonradial, and each of the two subsequences in the 3D construction has a stationary limit, as the sequential theorem of Duyckaerts–Jia–Kenig–Merle requires. A reviewer should confirm no hypothesis of the radial theorems (Duyckaerts–Kenig–Merle, Jendrej–Lawrie) or of the sequential theorem is violated by the constructed solutions.
    sourceUrl: https://arxiv.org/abs/1601.01871
  - title: Refereeing
    method: REFEREE
    note: Unrefereed. Both papers disclose AI assistance in developing the proofs, so an expert check of every estimate is needed regardless of the certificates. No expert assessment of either preprint was found.
    sourceUrl: https://arxiv.org/abs/2611.17243
site:
  status: UNDER_REVIEW
  statusNote: "Two unrefereed arXiv v1 preprints (12 November 2026, math.AP); no journal reference or expert assessment was found. DARC read both PDFs (introductions, theorems, disclosures and the certificate appendix of the 3D paper) but did not re-derive the estimates. **Titles versus abstracts:** the 3D title announces a counterexample to fixed-profile resolution; the 5D title (\"Radiation and persistent shape dynamics ...\") does not, while its abstract says it disproves the fixed-profile conjecture. The 3D abstract does not say the solution is nonradial (the body does: odd symmetry), and it states a contradiction for fixed lists, whereas the 5D paper additionally claims a continuum of limit classes and excludes a bounded varying number of active profiles. The 3D paper cites the 5D one as a preprint and says it combines two of its steps into one norm identity. **AI use:** both papers carry an AI disclosure. The 3D paper says the authors conceived the mechanism and that GPT-6 Astra assisted in developing the proof and worked out the estimates; the 5D paper says a free ChatGPT of unknown version assisted in developing the proof and GPT-6 Astra worked out the estimates. The origin is therefore listed as mixed (people with AI). **Computer assistance:** the 3D appendix describes an interval-arithmetic certificate (directed-rounding MPFR tables, exact-rational acceptance tests, a reproduction script) and says the dynamics (Sections 4 to 9) are proved analytically; the 5D abstract refers to a computer-assisted spectral bound, with its appendix not read in detail. No formal (Lean or similar) proof is claimed."
  checks:
    - title: Reproduce the computer-assisted certificates
      status: OPEN
    - title: Uniform-in-time construction estimates
      status: OPEN
    - title: "Quantifiers: is the refuted statement the DKM conjecture?"
      status: OPEN
    - title: Consistency with the refereed radial and sequential theorems
      status: OPEN
    - title: Refereeing
      status: OPEN
---

Two preprints of 12 November 2026 construct, for the focusing energy-critical wave equation, a forward-global solution with $\sup_{t\ge0}\|\vec u(t)\|_H<\infty$ that starts close to a sign-changing stationary state $Q$ and is asymptotic to $(q(t),0)+v_+(t)$, a time-varying stationary profile from a compact conformal family plus one free wave. **3D (arXiv:2611.17291, 57 pages):** $u_{tt}-\Delta u=u^5$; the core has two limits, $q(T_{2k})\to Q$ and $q(T_{2k+1})\to q_{de}$ with $T_j=4^jd^{-5}$, lying in different similarity classes ($\mathrm{dist}_{H^1}(q_{de},\mathrm{Sim}\cdot Q)\gtrsim d$). A norm identity then excludes every fixed finite list of profiles and Lorentz velocities along $t_n=T_n$. The solution is odd under $(x_1,x_2,x_3)\mapsto(-x_1,-x_2,x_3)$, so it is not radial. A computer-assisted certificate validates the stationary state (built from the Hopf fibration) and its odd energy kernel. **5D (arXiv:2611.17243, 60 pages):** the nonradial equation $u_{tt}-\Delta u=|u|^{4/3}u$; the limit set of the core is compact, connected, lies in the conformal orbit of $Q$ and contains a continuum of similarity classes; the stated consequence is that no resolution into one free wave plus a bounded number of profiles with pairwise orthogonal parameters, drawn from a fixed finite family, exists even with time-dependent selection. A computer-assisted spectral bound for a symmetric single-node state supplies the stationary input. **Scope:** the claims concern the fixed-profile form of the soliton resolution conjecture of Duyckaerts–Kenig–Merle. The 3D preprint says its two subsequential limits agree with the sequential theorem of Duyckaerts–Jia–Kenig–Merle, and the 5D preprint distinguishes its conclusion from that theorem; the 3D solution is odd, hence not radial, so the radial full-time theorems (Duyckaerts–Kenig–Merle, Jendrej–Lawrie) do not apply to it. They do not state a correct all-time replacement.
