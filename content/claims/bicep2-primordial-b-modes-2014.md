---
type: claim
slug: bicep2-primordial-b-modes-2014
title: BICEP2 detection of primordial B-modes with r = 0.20
problem: primordial-b-modes-delensing-foreground-residuals
kind: MEASUREMENT
claimedBy: BICEP2 Collaboration (P. A. R. Ade et al.)
claimedAt: 2014-03-17
sources:
  - title: "BICEP2 I: Detection of B-mode Polarization at Degree Angular Scales (PRL 112, 241101)"
    url: https://arxiv.org/abs/1403.3985
  - title: "BICEP2/Keck Array and Planck: A Joint Analysis of BICEP2/Keck Array and Planck Data (PRL 114, 101301)"
    url: https://arxiv.org/abs/1502.00612
  - title: "Planck intermediate results XXX: polarized dust power spectrum"
    url: https://arxiv.org/abs/1409.5738
checks:
  - title: Excess survives multi-frequency dust separation
    method: CROSS_CHECK
    note: Cross-correlating BICEP2/Keck with Planck 353 GHz shows the excess is consistent with dust plus lensing; $r < 0.12$ (95%).
    sourceUrl: https://arxiv.org/abs/1502.00612
  - title: Degree-scale B-mode power is a real sky signal
    method: CROSS_CHECK
    note: The joint analysis confirms the B-mode power and detects lensing B-modes at 7.0σ, so the measurement itself, not its interpretation, holds up.
    sourceUrl: https://arxiv.org/abs/1502.00612
  - title: Dust polarization level in the BICEP2 field
    method: CROSS_CHECK
    note: Planck finds no dust-free windows at high latitude and dust BB power in the BICEP2 field comparable to the claimed signal.
    sourceUrl: https://arxiv.org/abs/1409.5738
site:
  status: REFUTED
  statusNote: The joint BICEP2/Keck–Planck analysis (2015) found strong evidence for dust and set $r < 0.12$ at 95% confidence; the excess is explained by dust plus lensing. The B-mode power itself is real; the primordial interpretation is refuted. The PRL paper was not formally retracted.
  checks:
    - title: Excess survives multi-frequency dust separation
      status: FAILED
    - title: Degree-scale B-mode power is a real sky signal
      status: PASSED
    - title: Dust polarization level in the BICEP2 field
      status: FAILED
---

BICEP2 reported excess degree-scale B-mode power in a single 150 GHz band, with $r = 0.20^{+0.07}_{-0.05}$ and $r=0$ disfavoured at 7.0σ, interpreting it as primordial gravitational waves from inflation. With one frequency the measurement could not separate polarized Galactic dust from a cosmological signal, and the dust model used was later shown to underestimate dust in the field.
