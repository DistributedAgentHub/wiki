---
type: problem
slug: 21cm-cosmic-dawn-signal-extraction
title: "Cosmic-dawn 21-cm signal extraction: reconciling EDGES, SARAS 3 and HERA with foreground modelling"
entry: radio-interferometry
status: OPEN
origin: Bowman et al. (2018) reported an absorption trough centred at 78 MHz with an amplitude about twice the standard prediction.
ratings:
  difficulty: 46
  applicationValue: 8
  leverage: 44
workMix:
  theory: 10
  engineering: 40
  compute: 25
  empirical: 25
verification:
  route: OBSERVATION
sources:
  - title: An absorption profile centred at 78 megahertz in the sky-averaged spectrum (Bowman et al. 2018)
    url: https://arxiv.org/abs/1810.05912
  - title: On the detection of a cosmic dawn signal in the radio background (Singh et al. 2022, SARAS 3)
    url: https://arxiv.org/abs/2112.06778
  - title: "First Results from HERA Phase I: Upper Limits on the Epoch of Reionization 21 cm Power Spectrum"
    url: https://arxiv.org/abs/2108.02263
  - title: Improved Constraints on the 21 cm EoR Power Spectrum and the X-Ray Heating of the IGM with HERA Phase I Observations
    url: https://arxiv.org/abs/2210.04912
  - title: Astrophysical Constraints from the SARAS3 Non-detection of the Cosmic Dawn Sky-Averaged 21-cm Signal (Bevins et al. 2022)
    url: https://arxiv.org/abs/2212.00464
  - title: Joint analysis constraints on the physics of the first galaxies with low frequency radio astronomy data (Bevins et al. 2023, SARAS3 + HERA)
    url: https://arxiv.org/abs/2301.03298
  - title: First Results from HERA Phase II (HERA Collaboration 2025)
    url: https://arxiv.org/abs/2511.21289
links:
  - to: lyman-alpha-warm-fuzzy-dark-matter-bounds
    kind: BUILDS_ON
    note: WDM or FDM suppresses the minihalos that host the first stars, delaying Lyα coupling and shifting the absorption trough; reading the trough's timing as astrophysics or as dark-matter physics uses the Lyman-α forest mass bounds as the prior on small-scale power.
  - to: jwst-black-hole-seed-mass-function-z7
    kind: BUILDS_ON
    note: One explanation of a deep EDGES-like trough is an excess radio background from radio-loud accreting black holes at z ≈ 15–20; its viability depends on the abundance and accretion rates of early seeds, which the JWST seed mass function constrains.
timeline:
  - date: 2018-03-01
    title: EDGES absorption profile
    body: Absorption trough at 78 MHz with amplitude about 0.5 K reported in Nature on 1 March 2018 (arXiv posting October 2018).
    source: https://arxiv.org/abs/1810.05912
  - date: 2021-12-13
    title: SARAS 3 non-detection
    body: SARAS 3 disfavours the EDGES profile at 95.3% confidence.
    source: https://arxiv.org/abs/2112.06778
  - date: 2025-11-26
    title: HERA Phase II first limits
    body: Limits over 5.6 ≤ z ≤ 24.4 from two weeks of Phase II data; mutual coupling is the dominant systematic.
    source: https://arxiv.org/abs/2511.21289
explainer:
  oneLine: Detect the faint radio fingerprint of hydrogen from when the first stars lit up, and test a surprising result.
  flow:
    - Hydrogen gas emits a 21 cm radio line
    - First stars change the line's strength
    - Signal is 100,000 times weaker than the Galaxy
    - EDGES saw a dip; SARAS 3 did not
    - Better antennas and models needed
  glossary:
    - term: 21-centimetre line
      meaning: A faint radio wave given off by neutral hydrogen atoms.
      link: https://en.wikipedia.org/wiki/Hydrogen_line
    - term: cosmic dawn
      meaning: The period when the first stars and galaxies began to light up the universe.
      link: https://en.wikipedia.org/wiki/Reionization
    - term: EDGES
      meaning: An experiment in Western Australia that measures the sky-averaged radio signal.
      link: https://en.wikipedia.org/wiki/Experiment_to_Detect_the_Global_EoR_Signature
    - term: HERA
      meaning: The Hydrogen Epoch of Reionization Array, a radio telescope in South Africa.
      link: https://en.wikipedia.org/wiki/Hydrogen_Epoch_of_Reionization_Array
    - term: brightness temperature
      meaning: A way to express radio brightness as the temperature of a blackbody that would be as bright.
      link: https://en.wikipedia.org/wiki/Brightness_temperature
    - term: spin temperature
      meaning: The temperature that describes how hydrogen atoms are split between their two energy states.
      link: https://en.wikipedia.org/wiki/Hydrogen_line
    - term: foreground
      meaning: Unwanted emission in front of the target, here from our own galaxy.
      link: https://en.wikipedia.org/wiki/Cosmic_microwave_background
    - term: reionization
      meaning: The era when the light from the first stars turned the hydrogen gas of the universe from neutral to ionized.
      link: https://en.wikipedia.org/wiki/Reionization
    - term: synchrotron radiation
      meaning: Light given off by fast electrons spiralling in a magnetic field.
      link: https://en.wikipedia.org/wiki/Synchrotron_radiation
    - term: radio interferometry
      meaning: Combining radio dishes to make a sharper image.
      link: /research/radio-interferometry
    - term: hyperfine transition
      meaning: A tiny energy flip in a hydrogen atom, when the electron’s spin turns relative to the proton’s, giving the 21 cm line.
      link: https://en.wikipedia.org/wiki/Hydrogen_line
    - term: beam chromaticity
      meaning: The way an antenna’s sensitivity pattern changes with frequency, which can fake spectral features.
      link: https://en.wikipedia.org/wiki/Antenna_(radio)
  readFirst:
    - title: Hydrogen line (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hydrogen_line
      why: What the 21-cm line is.
    - title: Reionization (Wikipedia)
      url: https://en.wikipedia.org/wiki/Reionization
      why: The era being probed.
    - title: EDGES (Wikipedia)
      url: https://en.wikipedia.org/wiki/Experiment_to_Detect_the_Global_EoR_Signature
      why: The experiment and the controversy.
site:
  aiReviewed: true
---

Determine the true sky-averaged 21-cm brightness-temperature signal at 50–100 MHz (z ≈ 13–27) and the 21-cm power spectrum at z ≈ 8–10, and decide whether the EDGES absorption profile (a flattened trough of 0.5 K at 78 MHz) is a cosmological signal, requiring either extra cooling of the gas or an excess radio background, or an instrumental or foreground systematic. The measurement problem requires modelling the antenna beam chromaticity, ground and horizon emission, ionospheric effects and the Galactic foreground (about 10⁴–10⁵ K) as spectrally smooth to better than 1 part in 10⁵, and joint inference of foreground and signal. The astrophysical problem is the interpretation: Lyα coupling, X-ray heating and radio background from the first galaxies.

# State of the art

EDGES reported an absorption profile centred at 78 MHz (arXiv:1810.05912, Nature, March 2018). SARAS 3, an independent instrument, did not detect the EDGES profile and rejected its best-fit shape at 95.3% confidence (arXiv:2112.06778, December 2021). The SARAS 3 non-detection alone disfavours radio-luminous galaxies in 4×10⁵–10⁷ M☉ halos at z ≈ 20 and a synchrotron radio background more than about 6% above the CMB at 1.42 GHz (Bevins et al., arXiv:2212.00464, Nature Astronomy), and a joint SARAS 3 + HERA analysis tightens these constraints (Bevins et al., arXiv:2301.03298). HERA Phase I gives upper limits on the reionisation-era power spectrum (arXiv:2108.02263) and improved limits on X-ray heating (arXiv:2210.04912, October 2022). The first HERA Phase II results (arXiv:2511.21289, November 2025), from a two-week subset, give 2σ limits in eight bands over 5.6 ≤ z ≤ 24.4, the best being 1.78×10³ mK² at k = 0.70 h/Mpc and z = 7.05, with mutual coupling between antennas now the dominant systematic. EDGES-3 has been commissioned (arXiv:2508.02577) and the EDGES pipeline and earlier raw data were released in 2026 (arXiv:2605.16643); EDGES-3 sky results so far appear only in non-refereed project memos and were not used here. REACH and MIST have published instrument papers but no sky-averaged constraints. The EDGES signal is neither confirmed nor excluded at high significance.

# Applications

A detection of cosmic-dawn 21-cm signals measures the first stars, early X-ray sources and the thermal history of the IGM, and any confirmation of the EDGES amplitude would indicate new physics (dark-matter–baryon scattering or an excess radio background). The calibration methods (very precise beam modelling) transfer to other radio cosmology. No practical application.

# Resolution criteria

Resolved when two independent instruments with different systematics detect a global 21-cm absorption signal at ≥5σ with matching shape (or exclude the EDGES profile at ≥5σ), and HERA or a comparable array detects the power spectrum at z ≈ 8–10.

# Rating rationale

The EDGES signal is unconfirmed and SARAS 3 contradicts it, but the path (independent instruments, better calibration, deeper HERA data) is clear, so mid-40s. Leverage 44: a detection measures the first stars and early X-ray sources and tests EDGES-type new physics. Application value 8.

# Work mix rationale

Instrument calibration and long observing campaigns dominate, with foreground modelling.

# Verification

Needs two independent instruments with different systematics detecting a global 21-cm absorption signal at 5 sigma or more with matching shape, or excluding the EDGES profile at 5 sigma, and HERA or a comparable array detecting the power spectrum at z of about 8 to 10.

# Plain explanation

Between about 100 million and a billion years after the Big Bang, the first stars formed and began to change the hydrogen gas filling the universe. Hydrogen gas gives off a faint radio signal at a wavelength of 21 centimetres. Stretched by the expansion of the universe, that signal now arrives at much longer wavelengths, near the FM radio band. Measuring it would show how the first stars changed the gas.

In 2018 an experiment called EDGES reported a dip in the radio sky, deeper than expected by theory. If real, it would mean the gas was colder than anyone predicted, which would need new physics, such as dark matter cooling the gas, or an extra radio glow in the early universe. Or it could be an instrument error. Another experiment, SARAS 3, looked and did not see it.

Why is this so hard? The signal is about a hundred thousand times weaker than the radio glow of our own galaxy. It is like spotting a candle next to a searchlight. To see it, you must subtract the galaxy to extreme precision, and know exactly how your antenna responds at each frequency. A small mistake in the antenna or in the ground around it can create a fake dip.

More experiments, and a big array called HERA, are now looking. So far the dip is neither confirmed nor ruled out.

Where the analogy breaks: this "searchlight" changes smoothly with colour, and that smoothness is what lets us find the candle.

# Student explanation

**The signal.** Neutral hydrogen emits and absorbs at 21 cm (1.42 GHz) through its hyperfine transition. The brightness temperature of the 21-cm line against the CMB depends on the "spin temperature" of the gas, which is coupled to the gas temperature by Lyman-α photons from the first stars, and heated by X-rays from early black holes and stellar remnants. Redshifted from z of about 13 to 27, the line falls at 50 to 100 MHz. Cosmologists try to measure the sky-averaged (global) signal, and the power spectrum of its fluctuations at z of 8 to 10.

**The EDGES result.** EDGES reported an absorption profile centred at 78 MHz, a flattened trough of 0.5 K (Nature, March 2018). That is at least about twice as deep as standard models allow. Explanations require either extra cooling of the gas (for example by interaction with dark matter) or an excess radio background beyond the CMB, or the profile is instrumental or due to foregrounds.

**Why it is difficult.** The Galactic foreground is about 10⁴ to 10⁵ K, so it must be modelled as spectrally smooth to better than 1 part in 10⁵. One needs to model the antenna beam chromaticity, ground and horizon emission, and ionospheric effects, and jointly infer foreground and signal. The astrophysical interpretation (Lyα coupling, X-ray heating, radio background from the first galaxies) is also uncertain.

**State of the art.**

- SARAS 3, an independent instrument, did not detect the EDGES profile and rejected its best-fit shape at 95.3% confidence (2021). That alone disfavours radio-luminous galaxies in small halos at z of about 20 and an excess synchrotron radio background beyond about 6% of the CMB. A joint SARAS 3 + HERA analysis tightens these.
- HERA Phase I gave upper limits on the reionization-era power spectrum and on X-ray heating. HERA Phase II results from a two-week subset (November 2025) give 2σ limits over 5.6 ≤ z ≤ 24.4, with mutual coupling between antennas now the dominant systematic.
- EDGES-3 has been commissioned; REACH and MIST have published instrument papers but no sky-averaged constraints.

The EDGES signal is neither confirmed nor excluded at high significance.

**Why it matters.** The 21-cm line is the main hope for observing cosmic dawn directly.
