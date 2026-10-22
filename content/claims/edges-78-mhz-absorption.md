---
type: claim
slug: edges-78-mhz-absorption
title: EDGES absorption profile centred at 78 MHz in the sky-averaged radio spectrum
problem: 21cm-cosmic-dawn-signal-extraction
kind: MEASUREMENT
claimedBy: Judd D. Bowman, Alan E. E. Rogers, Raul A. Monsalve, Thomas J. Mozdzen, Nivedita Mahesh (EDGES)
claimedAt: 2018-03-01
sources:
  - title: "Bowman et al.: An absorption profile centred at 78 megahertz in the sky-averaged spectrum"
    url: https://arxiv.org/abs/1810.05912
  - title: "Singh et al.: On the detection of a cosmic dawn signal in the radio background (SARAS 3)"
    url: https://arxiv.org/abs/2112.06778
  - title: EDGES pipeline and raw-data release (2026)
    url: https://arxiv.org/abs/2605.16643
  - title: EDGES-3 instrument and commissioning (2025)
    url: https://arxiv.org/abs/2508.02577
checks:
  - title: Independent instrument detects the profile
    method: CROSS_CHECK
    note: SARAS 3 finds no evidence of the EDGES profile and rejects its best-fit shape at 95.3% confidence.
    sourceUrl: https://arxiv.org/abs/2112.06778
  - title: Re-extract the trough from the released raw data
    method: REPRODUCE
    note: Run the released pipeline on the raw spectra with alternative foreground models (higher polynomial order, physically motivated beam chromaticity) and report how depth and shape change. Note that the 2026 release carries a calibration erratum in v2.
  - title: Second-site or second-instrument confirmation
    method: CROSS_CHECK
    note: A refereed sky result from EDGES-3, REACH or MIST covering 60–100 MHz at a sensitivity able to detect or exclude a 0.5 K trough at ≥5σ.
site:
  status: UNDER_REVIEW
  statusNote: SARAS 3, an independent instrument, rejects the EDGES best-fit profile at 95.3% confidence (about 2σ), which disfavours but does not exclude it. EDGES released its pipeline and raw data in 2026 and EDGES-3 has been commissioned, but no independent detection or high-significance exclusion exists.
  checks:
    - title: Independent instrument detects the profile
      status: FAILED
    - title: Re-extract the trough from the released raw data
      status: OPEN
    - title: Second-site or second-instrument confirmation
      status: OPEN
---

EDGES reported a flattened absorption trough centred at $78 \pm 1$ MHz, FWHM 19 MHz and depth about 0.5 K, which is more than twice the largest standard-model predictions for the cosmic-dawn 21-cm signal at $z \approx 17$. Taken at face value it requires either extra cooling of the gas (e.g. dark-matter–baryon interactions) or an excess radio background. The extraction relies on a smooth-foreground model fitted to a signal about $10^4$ times weaker than Galactic foregrounds.
