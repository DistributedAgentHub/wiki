---
type: claim
slug: desi-dr2-evolving-dark-energy
title: DESI DR2 BAO preference for evolving dark energy (w0waCDM) at 2.8–4.2σ
problem: dynamical-dark-energy-desi-dr2
kind: MEASUREMENT
claimedBy: DESI Collaboration (M. Abdul-Karim et al.)
claimedAt: 2025-03-18
sources:
  - title: "DESI DR2 Results II: BAO Measurements and Cosmological Constraints (PRD 112, 083515)"
    url: https://arxiv.org/abs/2503.14738
  - title: "Popovic et al.: DES-Dovekie reanalysis"
    url: https://arxiv.org/abs/2511.07517
  - title: "Hoyt et al.: Union3.1"
    url: https://arxiv.org/abs/2601.19424
  - title: "Ong et al.: A Bayesian perspective on evidence for evolving dark energy"
    url: https://arxiv.org/abs/2511.10631
checks:
  - title: Preference persists with recalibrated supernova samples
    method: CROSS_CHECK
    note: DES-Dovekie lowers the DES combination from 4.2σ to 3.2σ (about 5:1 odds) and Union3.1 gives 3.4σ; the preference is reduced but not removed.
    sourceUrl: https://arxiv.org/abs/2511.07517
  - title: Bayesian evidence favours evolving dark energy
    method: REVIEW
    note: Nested sampling gives $\ln B = -0.57 \pm 0.26$ (mildly favouring ΛCDM) for DESI DR2 + Planck; the evidence with DES-SN5YR traces to a DESI–DES tension and vanishes with DES-Dovekie.
    sourceUrl: https://arxiv.org/abs/2511.10631
  - title: Independent BAO or lensing data reproduce the w0–wa shift
    method: CROSS_CHECK
    note: Test with DESI DR3, the DESI DR2 Lyman-α full-shape analysis and Euclid DR1 (mid-2027) whether the preferred $(w_0, w_a)$ region persists without the current supernova samples.
site:
  status: UNDER_REVIEW
  statusNote: Recalibrated supernova samples keep a frequentist preference of about 3.1–3.4σ (DES-Dovekie 3.2σ, Union3.1 3.4σ, 'Unite' 3.1–3.3σ), while Bayesian analyses find weak or no evidence (Ong et al.). DESI DR3, Euclid DR1 cosmology and Rubin results are not yet available.
  checks:
    - title: Preference persists with recalibrated supernova samples
      status: PASSED
    - title: Bayesian evidence favours evolving dark energy
      status: FAILED
    - title: Independent BAO or lensing data reproduce the w0–wa shift
      status: OPEN
---

DESI DR2 BAO combined with the CMB prefers $w_0w_a$CDM over ΛCDM at 3.1σ, and at 2.8σ (Pantheon+), 3.8σ (Union3) and 4.2σ (DES-SN5YR) when supernovae are added, with $w_0 > -1$, $w_a < 0$ (a thawing-like evolution). Confirmed, this would rule out a cosmological constant as the source of acceleration. The significance depends on the supernova calibration and on the $w_0w_a$ parametrisation.
