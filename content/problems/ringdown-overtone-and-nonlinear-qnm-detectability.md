---
type: problem
slug: ringdown-overtone-and-nonlinear-qnm-detectability
title: Detectability of overtones and quadratic nonlinear quasinormal modes in binary-black-hole ringdowns
entry: relativistic-binary-dynamics
status: IN_PROGRESS
origin: Giesler et al. (2019) showed numerically that overtones improve the fit from near the merger time; Isi et al. (2019) applied this to GW150914.
ratings:
  difficulty: 40
  applicationValue: 4
  leverage: 38
workMix:
  theory: 35
  engineering: 10
  compute: 40
  empirical: 15
verification:
  route: OBSERVATION
sources:
  - title: Testing the no-hair theorem with GW150914 (Isi et al. 2019)
    url: https://arxiv.org/abs/1905.00869
  - title: Analysis of Ringdown Overtones in GW150914 (Cotesta et al. 2022)
    url: https://arxiv.org/abs/2201.00822
  - title: Nonlinearities in Black Hole Ringdowns (Mitman et al. 2023)
    url: https://arxiv.org/abs/2208.07380
  - title: Black Hole Spectroscopy and Tests of General Relativity with GW250114 (LVK 2025)
    url: https://arxiv.org/abs/2509.08099
  - title: "GWTC-4.0: Tests of General Relativity. III. Tests of the Remnants (2026)"
    url: https://arxiv.org/abs/2603.19021
  - title: Nonlinear effects in black hole ringdown (Cheung et al. 2023)
    url: https://arxiv.org/abs/2208.07374
  - title: A nonlinear voice from GW250114 ringdown (Wang et al. 2026, preprint)
    url: https://arxiv.org/abs/2601.05734
  - title: Spin dependence of black hole ringdown nonlinearities (Redondo-Yuste et al. 2023)
    url: https://arxiv.org/abs/2308.14796
  - title: "GWTC-5.0: Tests of General Relativity (LVK 2026)"
    url: https://arxiv.org/abs/2607.19293
timeline:
  - date: 2019-05-02
    title: Overtone in GW150914
    body: Isi et al. claim a measurement of the first overtone from near the peak.
    source: https://arxiv.org/abs/1905.00869
  - date: 2025-09-09
    title: GW250114 ringdown
    body: LVK find at least two quasinormal modes and a few-percent bound on the fundamental.
    source: https://arxiv.org/abs/2509.08099
  - date: 2026-01-09
    title: Quadratic-mode claim in GW250114
    body: Unrefereed preprint reports a Bayes factor of about 62 for quadratic couplings of the (2,2,n) tones.
    source: https://arxiv.org/abs/2601.05734
  - date: 2026-07-21
    title: GWTC-5.0 GR tests
    body: Tests on 168 events through O4b find no deviation from GR.
    source: https://arxiv.org/abs/2607.19293
explainer:
  oneLine: A merged black hole rings like a bell. Can we hear its extra notes, and do they match Einstein?
  flow:
    - Merged black hole rings down
    - Notes fixed by mass and spin
    - Overtones and combination notes expected
    - Brief signal and noise blur detection
    - Compare notes with Einstein's prediction
  glossary:
    - term: ringdown
      meaning: The final phase of a merger in which the new black hole settles, emitting fading waves.
      link: https://en.wikipedia.org/wiki/Quasinormal_mode
    - term: quasinormal mode
      meaning: A damped oscillation pattern of a black hole, like a bell's note that fades out.
      link: https://en.wikipedia.org/wiki/Quasinormal_mode
    - term: overtone
      meaning: For a black hole, an extra tone with about the same pitch as the main note but fading much faster (unlike a bell’s higher-pitched overtones).
      link: https://en.wikipedia.org/wiki/Overtone
    - term: nonlinear mode
      meaning: A note produced by a ringing wave interacting with itself, at a frequency combining the main ones.
      link: https://en.wikipedia.org/wiki/Quasinormal_mode
    - term: Kerr black hole
      meaning: A spinning, uncharged black hole, described by only a mass and a spin.
      link: https://en.wikipedia.org/wiki/Kerr_metric
    - term: no-hair theorem
      meaning: The statement that a stable black hole is described fully by its mass, spin and charge.
      link: https://en.wikipedia.org/wiki/No-hair_theorem
    - term: strain
      meaning: The fractional stretching of space caused by a gravitational wave.
      link: https://en.wikipedia.org/wiki/Gravitational_wave
    - term: numerical relativity
      meaning: Solving Einstein's equations on supercomputers to simulate mergers.
      link: https://en.wikipedia.org/wiki/Numerical_relativity
    - term: GW150914
      meaning: The first gravitational-wave signal ever detected, from two merging black holes in 2015.
      link: https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves
    - term: Bayesian evidence
      meaning: A number measuring how well a model explains data, used to compare models.
      link: https://en.wikipedia.org/wiki/Bayes_factor
    - term: damped sinusoid
      meaning: A wave that oscillates at a fixed frequency while its size shrinks steadily, like a plucked string.
      link: https://en.wikipedia.org/wiki/Damped_sine_wave
    - term: extremal black hole
      meaning: A black hole spinning at the maximum rate general relativity allows.
      link: https://en.wikipedia.org/wiki/Extremal_black_hole
  readFirst:
    - title: Quasinormal mode (Wikipedia)
      url: https://en.wikipedia.org/wiki/Quasinormal_mode
      why: Defines the ringing of a black hole.
    - title: First observation of gravitational waves (Wikipedia)
      url: https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves
      why: The event that started the field, including its ringdown.
    - title: No-hair theorem (Wikipedia)
      url: https://en.wikipedia.org/wiki/No-hair_theorem
      why: The idea behind the test.
site:
  aiReviewed: true
---

Determine whether overtones (ℓm n = 220 plus 221, 222) and quadratic nonlinear modes (for example 2×(220) → 440 with frequency twice the fundamental) are detectable in the ringdown of observed binary black holes, at what start time after the peak strain, and with what systematic bias from the start-time and noise-model choices. The goal is a ringdown spectroscopy test of the Kerr hypothesis in which the fundamental frequency and damping time agree with general relativity at the few-percent level and at least one additional mode is measured independently of the fundamental. Open issues are the physical validity of fitting overtones at the peak, the ratio of the quadratic-mode amplitude to the square of the parent 220 amplitude as a function of mass ratio and spin, from numerical relativity (Mitman et al., Cheung et al.) and second-order perturbation theory, and mismatch between ringdown-only and inspiral–merger–ringdown inference.

# State of the art

Isi et al. (arXiv:1905.00869) reported an overtone in GW150914 at 3.6σ; Cotesta et al. (arXiv:2201.00822) found no evidence for it after the peak and showed that noise injections can produce comparable spurious evidence, while Isi & Farr (arXiv:2107.05609) set out the time-domain formalism behind the original claim, so the result depends on start-time and noise-model choices. Mitman et al. (arXiv:2208.07380) and Cheung et al. (arXiv:2208.07374) found quadratic modes in numerical-relativity ringdowns: in the (ℓ,m) = (4,4) harmonic the quadratic (220×220) mode scales as the square of the 220 amplitude, with A₂₂₀ₓ₂₂₀/A₂₂₀² ≈ 0.16 (Cheung et al.) or 0.15–0.20 depending on fit start time (Mitman et al.), and is comparable to or larger than the linear 440 mode. Second-order Kerr perturbation theory shows the ratio is spin dependent, from about 0.16 at a/M = 0.2 to about 0.08 near extremality (Redondo-Yuste et al., arXiv:2308.14796). The LIGO–Virgo–KAGRA analysis of GW250114 (detected 14 January 2025, the loudest signal so far; arXiv:2509.08099, September 2025) found that at least two quasinormal modes are needed after the peak (the more damped one significant for about one cycle), matched the 220 mode and its first overtone to the Kerr pattern to tens of percent, and bounded the 220 frequency to within a few percent of general relativity. The GWTC-4.0 tests of the remnants (arXiv:2603.19021, 2026) test the ringdown on 42 events from early O4 and find overall consistency with general relativity. In one hierarchical analysis the GR value sits at the boundary of the 98.6% credible region for the catalog (up from 93.8% for GWTC-3.0), which the authors attribute largely to finite-catalog variance; including GW250114 lowers this to 92.2%, so there is no strong evidence for a deviation. Since then, two unrefereed preprints claim quadratic modes in GW250114: Yang et al. (arXiv:2510.16903) find a model with the 220×220 mode preferred over a linear-only 440 model, and Wang et al. (arXiv:2601.05734) report a Bayes factor of about 62 and a 3.4σ rejection of zero amplitude for quadratic couplings of the (2,2,n) tones starting 4 M_f after merger (values differ between preprint versions). An orthonormal-mode reanalysis raises support for the first overtone to 99.9% with no deviation from Kerr (Suzuki et al., arXiv:2605.03576). The GWTC-5.0 GR tests (O4b, 168 events; arXiv:2607.19293, July 2026) find no deviation. O4 ended on 18 November 2025; O4c results are expected around the end of 2026. No independent confirmation of a nonlinear mode at ≥5σ exists, and whether the extra post-peak content is an overtone, a nonlinear mode or a modelling artefact is still debated, so the state is IN_PROGRESS.

# Applications

Ringdown spectroscopy tests the no-hair theorem and general relativity in the strong field, and its pipelines apply to future detectors (Cosmic Explorer, Einstein Telescope, LISA) where SNR is above 1,000. No practical application.

# Resolution criteria

Resolved when a high-SNR event (or a stack) shows a second mode with an amplitude and frequency consistent with theory, identified as an overtone or nonlinear mode with a start-time-robust analysis at ≥5σ, and the Kerr no-hair relation is tested at the percent level on multiple events.

# Rating rationale

GW250114 and O4 provide loud events and NR amplitudes are known, but start-time systematics and unrefereed quadratic-mode claims leave the identification open; difficulty 40 is slightly above the old ringdown entry (35) for the sharper target. Leverage 38: a percent-level no-hair test underpins strong-field GR tests for LIGO, CE, ET and LISA. Application value 4.

# Work mix rationale

Waveform modelling, simulation and Bayesian analysis dominate, with detector sensitivity as the empirical part.

# Verification

Needs a high-SNR gravitational-wave event or stack showing a second ringdown mode with amplitude and frequency consistent with theory, identified at 5 sigma or more with a start-time-robust analysis, plus percent-level Kerr no-hair tests on multiple events.

# Plain explanation

When two black holes merge, the single black hole that results is lopsided at first and then settles down. As it settles it gives off gravitational waves in a pattern that fades quickly, a bit like a bell after being struck. This last part of the signal is called the ringdown.

Einstein's theory makes a precise prediction: the ringing should be built from a set of notes whose pitches and fade-out times depend only on the black hole's mass and spin. Besides the main note there are fainter extra tones, called overtones, which die away even faster. Other notes appear when the waves interact with themselves (a nonlinear effect), at pitches that combine the main ones.

If we could hear several of these notes clearly, we could check that they fit Einstein's prediction for a black hole.

The difficulty is that the signal is brief, the notes fade fast, and noise is large. Scientists disagree about when the ringing starts, and the result depends on that choice.

So far, no extra note has been confirmed beyond doubt. The task is to find out whether they can be, and how confident a claim can be.

Where the analogy breaks: a bell’s overtones are higher notes, but a black hole’s overtones have nearly the same pitch as the main note and just fade faster. And a bell has a clear instant of striking, but a merger blurs the start of the ringing, which is what makes the analysis delicate.

# Student explanation

**Quasinormal modes.** A perturbed Kerr black hole relaxes by emitting a sum of damped sinusoids, quasinormal modes (QNMs). Each is labelled by angular numbers (ℓ, m) and an overtone number n, and each has a frequency and damping time fixed entirely by the black hole's mass and spin. The no-hair theorem says that these are the only parameters.

**What to detect.** (1) Overtones: the fundamental 220 mode plus its overtones 221, 222, which decay faster. (2) Quadratic nonlinear modes: for example two 220 modes combining to produce a mode with twice the fundamental frequency in the (4,4) harmonic ("2×220 → 440"). The goal is a ringdown-spectroscopy test of the Kerr hypothesis, in which the fundamental frequency and damping time agree with general relativity at the few-percent level and at least one extra mode is measured independently of the fundamental.

**Open issues.**

- _Start time._ Is it physically valid to fit overtones at the time of peak strain? Different start times give different conclusions.
- _Noise and bias._ Results depend on noise-model choices.
- _Nonlinear amplitude._ The ratio of the quadratic mode amplitude to the square of the parent 220 amplitude as a function of mass ratio and spin, from numerical relativity and second-order perturbation theory.
- _Mismatch_ between ringdown-only inference and inspiral–merger–ringdown inference.

**State of the art.** Isi and collaborators reported an overtone in GW150914 at 3.6σ; Cotesta and collaborators found no evidence after the peak and showed that noise injections could produce comparable spurious evidence. Mitman et al. and Cheung et al. found quadratic modes in numerical-relativity ringdowns, with an amplitude ratio of about 0.15 to 0.20 depending on start time. Second-order Kerr perturbation theory shows the ratio decreases with spin, from about 0.16 at a/M of 0.2 to about 0.08 near extremality. The LIGO–Virgo–KAGRA analysis of GW250114 (the loudest signal so far, detected January 2025) found at least two modes were needed after the peak, matched the 220 mode and first overtone to the Kerr pattern to tens of percent, and bounded the 220 frequency to a few percent of general relativity. Two unrefereed preprints (2025–26) claim a quadratic mode in GW250114, one at about 3.4σ; no independent confirmation at 5σ exists, and catalogue tests through GWTC-5.0 find no deviation from general relativity. Whether the extra post-peak content is an overtone, a nonlinear mode or a modelling artefact is still debated.

**Why it matters.** A clean multi-mode measurement tests whether remnants are Kerr black holes or something else.
