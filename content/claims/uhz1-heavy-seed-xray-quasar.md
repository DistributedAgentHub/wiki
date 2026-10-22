---
type: claim
slug: uhz1-heavy-seed-xray-quasar
title: Heavy-seed origin from a z ≈ 10 X-ray quasar (UHZ1)
problem: jwst-black-hole-seed-mass-function-z7
kind: MEASUREMENT
claimedBy: Ákos Bogdán, Andy D. Goulding, Priyamvada Natarajan et al.
claimedAt: 2023-05-24
sources:
  - title: "Bogdán et al.: Evidence for heavy-seed origin of early supermassive black holes from a z≈10 X-ray quasar (Nature Astronomy 2024)"
    url: https://arxiv.org/abs/2305.15458
  - title: "Zou et al.: Revisiting the Claim for a Direct-Collapse Black Hole in UHZ1 at z=10.05"
    url: https://arxiv.org/abs/2603.24893
  - title: "Goulding et al.: UNCOVER spectroscopic confirmation of UHZ1"
    url: https://arxiv.org/abs/2308.02750
checks:
  - title: X-ray detection reproduces in the full Chandra data
    method: REPRODUCE
    note: With the full 2.2 Ms exposure the source significance is 2.0–2.9σ, below the original 4.4σ, and depends on the astrometric registration.
    sourceUrl: https://arxiv.org/abs/2603.24893
  - title: Independent AGN signature at other wavelengths
    method: CROSS_CHECK
    note: No MIRI detection (buried AGN $L_{bol} < 1.3\times10^{45}$ erg/s) and no AGN lines in the JWST spectra.
    sourceUrl: https://arxiv.org/abs/2603.24893
  - title: Independent astrometric registration of Chandra and JWST frames
    method: CROSS_CHECK
    note: Re-register the Chandra events to JWST with an independent set of reference sources and publish the resulting source significance, since the two analyses differ mainly here.
site:
  status: UNDER_REVIEW
  statusNote: Zou et al. (arXiv:2603.24893, accepted to ApJ) analyse the full 2.2 Ms of Chandra data and find only 2.0–2.9σ, dependent on the astrometric alignment, with no MIRI or JWST spectroscopic AGN signature; they favour a low-mass star-forming galaxy. No reply from the original authors was found as of 16 Oct 2026.
  checks:
    - title: X-ray detection reproduces in the full Chandra data
      status: FAILED
    - title: Independent AGN signature at other wavelengths
      status: FAILED
    - title: Independent astrometric registration of Chandra and JWST frames
      status: OPEN
---

A Chandra X-ray source at about 4.4σ, coincident with the JWST galaxy UHZ1 (spectroscopic $z = 10.07$), was interpreted as an accreting black hole of $10^7$–$10^8\,M_\odot$ with bolometric luminosity about $5\times10^{45}$ erg/s, comparable to its host's stellar mass. That ratio was presented as evidence for heavy direct-collapse seeds. The interpretation rests entirely on the X-ray detection and its association with the JWST source.
