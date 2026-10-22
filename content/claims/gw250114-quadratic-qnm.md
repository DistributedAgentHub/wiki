---
type: claim
slug: gw250114-quadratic-qnm
title: Quadratic (nonlinear) quasinormal modes in the GW250114 ringdown at 3.4σ
problem: ringdown-overtone-and-nonlinear-qnm-detectability
kind: MEASUREMENT
claimedBy: Wang, Ma, Khera, Su, Yang (arXiv:2601.05734); related claim by Yang, Shi, Hu (arXiv:2510.16903)
claimedAt: 2026-01-09
sources:
  - title: "Wang et al.: A nonlinear voice from GW250114 ringdown (preprint)"
    url: https://arxiv.org/abs/2601.05734
  - title: "Yang, Shi, Hu: quadratic mode in GW250114 (preprint)"
    url: https://arxiv.org/abs/2510.16903
  - title: "LVK: Black Hole Spectroscopy and Tests of General Relativity with GW250114"
    url: https://arxiv.org/abs/2509.08099
  - title: "Suzuki et al.: orthonormal-mode reanalysis of GW250114"
    url: https://arxiv.org/abs/2605.03576
checks:
  - title: Independent pipeline reproduces the quadratic-mode evidence on public strain
    method: REPRODUCE
    note: Rerun a time-domain ringdown analysis on the public GW250114 data with the same mode content and report the Bayes factor as a function of start time from 0 to $10M_f$.
  - title: Fitted amplitude ratio matches second-order perturbation theory
    method: CROSS_CHECK
    note: Compare the measured $A_{220\times220}/A_{220}^2$ with the prediction for the remnant's spin (about 0.16 at low spin, falling towards 0.08 near extremality, Redondo-Yuste et al.).
  - title: False-alarm rate from noise and overtone-mismodelling injections
    method: CROSS_CHECK
    note: Inject GR waveforms with linear modes only, including higher overtones, into real detector noise and measure how often a 3.4σ quadratic signal appears, as Cotesta et al. did for GW150914.
  - title: Refereeing
    method: REFEREE
    note: Neither preprint is published.
site:
  status: UNVERIFIED
  statusNote: Both are unrefereed preprints below 5σ, with numbers that changed between versions. No independent reanalysis has tested them; Suzuki et al. strengthen the linear overtone but caution that nonlinear modes near the peak are not well established.
  checks:
    - title: Independent pipeline reproduces the quadratic-mode evidence on public strain
      status: OPEN
    - title: Fitted amplitude ratio matches second-order perturbation theory
      status: OPEN
    - title: False-alarm rate from noise and overtone-mismodelling injections
      status: OPEN
    - title: Refereeing
      status: OPEN
---

Starting the fit $4M_f$ after merger, Wang et al. report a Bayes factor of about 62 for including quadratic couplings of the (2,2,n) tones and reject zero quadratic amplitude at 3.4σ; their first version quoted a Bayes factor of 74 at $5M_f$. Yang et al. find a model with the $220\times220$ mode preferred over a linear-only 440 mode, without excluding the latter. A confirmed detection would test second-order Kerr perturbation theory, where $A_{220\times220}/A_{220}^2$ is predicted to be about 0.16 and spin-dependent.
