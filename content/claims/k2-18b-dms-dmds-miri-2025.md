---
type: claim
slug: k2-18b-dms-dmds-miri-2025
title: Evidence for dimethyl sulfide and/or dimethyl disulfide in K2-18 b from JWST MIRI
problem: jwst-retrieval-degeneracies-temperate-sub-neptunes
kind: MEASUREMENT
claimedBy: Nikku Madhusudhan, Savvas Constantinou, Måns Holmberg, Subhajit Sarkar, Anjali A. A. Piette, Julianne I. Moses
claimedAt: 2025-04-16
sources:
  - title: "Madhusudhan et al.: New Constraints on DMS and DMDS in the Atmosphere of K2-18 b from JWST MIRI"
    url: https://arxiv.org/abs/2504.12267
  - title: "Luque et al.: Insufficient evidence for DMS and DMDS in the atmosphere of K2-18 b"
    url: https://arxiv.org/abs/2505.13407
  - title: "Welbanks et al.: Challenges in the detection of gases in exoplanet atmospheres"
    url: https://arxiv.org/abs/2504.21788
  - title: "Stevenson et al.: K2-18b Does Not Meet The Standards of Evidence For Life"
    url: https://arxiv.org/abs/2508.05961
  - title: "Hu et al.: A water-rich interior in the temperate sub-Neptune K2-18 b revealed by JWST"
    url: https://arxiv.org/abs/2507.12622
  - title: "Lavvas et al. (2026): hazy high-metallicity model of K2-18 b"
    url: https://arxiv.org/abs/2603.26474
checks:
  - title: Joint NIRISS+NIRSpec+MIRI retrieval recovers DMS/DMDS
    method: CROSS_CHECK
    note: Luque et al. find insufficient evidence in a joint 0.6–12 µm fit, with ethane and other methyl-bearing species fitting equally well.
    sourceUrl: https://arxiv.org/abs/2505.13407
  - title: Signal is robust to MIRI data reduction and binning
    method: REPRODUCE
    note: Stevenson et al. find binning-dependent red noise dominates the MIRI spectrum and 87.5% of retrievals with their preferred binning do not favour DMS/DMDS.
    sourceUrl: https://arxiv.org/abs/2508.05961
  - title: Preference survives an expanded model comparison
    method: REVIEW
    note: Welbanks et al. show the claimed evidence disappears once a broader set of atmospheric models is compared.
    sourceUrl: https://arxiv.org/abs/2504.21788
  - title: Dedicated MIRI campaign at the depth needed for a 3σ test
    method: CROSS_CHECK
    note: Luque et al. estimate about 25 more MIRI transits would be needed. No new JWST observations of K2-18 b had been published by October 2026.
site:
  status: REFUTED
  statusNote: "Independent reanalyses of the same public data (Luque et al.; Welbanks et al.; Stevenson et al.; Schmidt et al.; Lavvas et al.) find no statistically significant DMS/DMDS: the signal depends on binning, red noise and the set of molecules considered, and hazy models fit without DMS. The original authors have not withdrawn the claim; a follow-up co-authored by Madhusudhan (Hu et al., four new NIRSpec transits) finds DMS below 3σ."
  checks:
    - title: Joint NIRISS+NIRSpec+MIRI retrieval recovers DMS/DMDS
      status: FAILED
    - title: Signal is robust to MIRI data reduction and binning
      status: FAILED
    - title: Preference survives an expanded model comparison
      status: FAILED
    - title: Dedicated MIRI campaign at the depth needed for a 3σ test
      status: OPEN
---

From the JWST MIRI LRS transmission spectrum (5–12 µm) the paper reports a deviation from a featureless spectrum at 3.4σ and 'evidence for DMS and/or DMDS' at about 3σ, with at least one at $\gtrsim 10$ ppmv. On Earth these gases are produced predominantly by life, so the claim was presented as a possible biosignature. A robust detection would require reproducing the attribution across data reductions, retrieval frameworks and alternative molecules.
