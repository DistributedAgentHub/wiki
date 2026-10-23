---
type: problem
slug: dm-electron-scattering-solar-neutrino-floor
title: Sub-GeV dark-matter–electron scattering to the solar-neutrino floor with skipper-CCD and qubit sensors
entry: lambda-cdm
status: OPEN
origin: Essig, Mardon & Volansky (2012) proposed electron-recoil detection of sub-GeV dark matter; skipper CCDs reached single-electron resolution in 2017–2020.
ratings:
  difficulty: 44
  applicationValue: 14
  leverage: 46
workMix:
  theory: 10
  engineering: 45
  compute: 15
  empirical: 30
verification:
  route: OBSERVATION
sources:
  - title: "SENSEI: Direct-Detection Results on sub-GeV Dark Matter from a New Skipper-CCD (2020)"
    url: https://arxiv.org/abs/2004.11378
  - title: Confirmation of the spectral excess in DAMIC at SNOLAB with skipper CCDs (DAMIC Collaboration 2023)
    url: https://arxiv.org/abs/2306.01717
  - title: Solar Neutrinos as a Signal and Background in Direct-Detection Experiments Searching for sub-GeV DM with Electron Recoils (Essig et al. 2018)
    url: https://arxiv.org/abs/1801.10159
  - title: Searches for Light Dark Matter and Evidence of Coherent Elastic Neutrino-Nucleus Scattering of Solar Neutrinos with the LUX-ZEPLIN (LZ) Experiment (2025)
    url: https://arxiv.org/abs/2512.08065
  - title: "SENSEI: First Direct-Detection Results on sub-GeV Dark Matter from SENSEI at SNOLAB (2023)"
    url: https://arxiv.org/abs/2312.13342
  - title: Probing Benchmark Models of Hidden-Sector Dark Matter with DAMIC-M (2025)
    url: https://arxiv.org/abs/2503.14617
links:
  - to: sidm-subhalo-lensing-velocity-dependence
    kind: RELATED
    note: Both address non-gravitational interactions of dark matter, from particle detectors and from halo structure.
timeline:
  - date: 2023-06-02
    title: Bulk low-energy excess confirmed with skipper CCDs
    body: DAMIC at SNOLAB confirms an unexplained excess of about 7 events per kg-day near 80 eVee.
    source: https://arxiv.org/abs/2306.01717
  - date: 2025-03-18
    title: DAMIC-M hidden-sector limits
    body: About 1.3 kg-day with 50× lower single-electron rate excludes benchmark freeze-in/freeze-out models over part of the MeV range.
    source: https://arxiv.org/abs/2503.14617
  - date: 2025-12-08
    title: LZ light-DM search
    body: No excess at 3–9 GeV/c² in 5.7 tonne-years; ⁸B solar-neutrino CEνNS seen at 4.5σ.
    source: https://arxiv.org/abs/2512.08065
explainer:
  oneLine: Build detectors sensitive enough to see light dark matter bumping electrons, down to where solar neutrinos become the limit.
  flow:
    - Light dark matter can kick an electron
    - "Detect one electron: skipper CCDs"
    - Background mimics the same tiny signal
    - Remove noise and unexplained excesses
    - Reach solar-neutrino floor
  glossary:
    - term: dark matter
      meaning: Invisible matter that shows itself only through gravity; about five times more than ordinary matter.
      link: https://en.wikipedia.org/wiki/Dark_matter
    - term: cross section
      meaning: A measure of how likely a collision is, pictured as the size of a target.
      link: https://en.wikipedia.org/wiki/Cross_section_(physics)
    - term: skipper CCD
      meaning: A light sensor chip that measures each pixel's charge many times, so it can count single electrons.
      link: https://en.wikipedia.org/wiki/Charge-coupled_device
    - term: direct detection
      meaning: Experiments that look for dark-matter particles hitting detectors in a laboratory.
      link: https://en.wikipedia.org/wiki/Direct_detection_of_dark_matter
    - term: solar neutrinos
      meaning: Neutrinos produced by fusion in the Sun's core; they reach Earth in huge numbers.
      link: https://en.wikipedia.org/wiki/Solar_neutrino
    - term: neutrino floor
      meaning: The sensitivity level at which neutrino signals begin to mimic dark matter, making further progress hard.
      link: https://en.wikipedia.org/wiki/Direct_detection_of_dark_matter
    - term: coherent elastic neutrino–nucleus scattering
      meaning: A process in which a neutrino scatters off a whole nucleus at once, giving a small recoil.
      link: https://en.wikipedia.org/wiki/Coherent_elastic_neutrino-nucleus_scattering
    - term: mediator
      meaning: A hypothetical particle that carries the force between dark matter and ordinary matter.
      link: https://en.wikipedia.org/wiki/Force_carrier
    - term: electronvolt
      meaning: A tiny unit of energy (and, via E = mc², of mass). An MeV is a million and a GeV a billion of them; a proton is about 1 GeV.
      link: https://en.wikipedia.org/wiki/Electronvolt
    - term: SENSEI
      meaning: An experiment using skipper CCDs to search for light dark matter.
      link: https://en.wikipedia.org/wiki/Direct_detection_of_dark_matter
    - term: dark counts
      meaning: Signals a sensor produces with nothing hitting it, from heat or electronics; here, stray single electrons.
      link: https://en.wikipedia.org/wiki/Dark_current_(physics)
    - term: qubit
      meaning: A tiny quantum circuit used in quantum computers; its extreme sensitivity also makes it a candidate particle detector.
      link: https://en.wikipedia.org/wiki/Qubit
  readFirst:
    - title: Direct detection of dark matter (Wikipedia)
      url: https://en.wikipedia.org/wiki/Direct_detection_of_dark_matter
      why: Overview of how labs search for dark matter.
    - title: Coherent elastic neutrino–nucleus scattering (Wikipedia)
      url: https://en.wikipedia.org/wiki/Coherent_elastic_neutrino-nucleus_scattering
      why: The neutrino process that sets the irreducible floor for these searches.
    - title: Charge-coupled device (Wikipedia)
      url: https://en.wikipedia.org/wiki/Charge-coupled_device
      why: How the sensor chips work.
site:
  aiReviewed: true
---

Probe the cross-section σ_e for scattering of dark matter of mass 1 MeV–1 GeV off bound electrons, for heavy- and light-mediator form factors (F_DM = 1 and 1/q²), down to the irreducible background from solar neutrinos (coherent elastic neutrino–nucleus scattering yielding few-electron ionisation, plus neutrino–electron scattering), in targets with eV or sub-eV thresholds (silicon and germanium skipper CCDs, superconducting and qubit-based sensors, 2D materials). The experimental problem is to reach a background of well below 1 event per gram-year in the one- to few-electron bins, where the dominant 'dark counts' and unexplained low-energy excesses currently limit sensitivity by orders of magnitude relative to the neutrino floor. The theoretical problem is the in-medium response, including screening, band-structure effects and Migdal-type processes, to the 10–30% accuracy needed to interpret limits. A resolution is a limit (or a detection with an independent target and a modulation or directional signature) that reaches the neutrino floor across the full mass window.

# State of the art

SENSEI set world-leading limits in 2020 with a single \~2 g skipper CCD and 24 days of data in the MINOS cavern (arXiv:2004.11378), and SENSEI at SNOLAB followed with 100.72 g-days after masking and blinding (arXiv:2312.13342; the 534.9 g-day figure in its first version is the pre-masking total), adding a daily-modulation search in 2025 (arXiv:2510.20889). DAMIC at SNOLAB, upgraded to skipper readout, confirmed an unexplained bulk excess of about 7 events per kg-day near 80 eVee in a 3.25 kg-day exposure (arXiv:2306.01717), so low-energy backgrounds in silicon are not understood. The DAMIC-M prototype at Modane reached about 1.3 kg-day with a 50 times lower single-electron rate and excluded the freeze-in and freeze-out hidden-sector benchmarks over parts of the MeV mass range (arXiv:2503.14617, 2025). Essig et al. (arXiv:1801.10159) showed that coherent elastic scattering of solar neutrinos off nuclei, which yields one- to few-electron ionisation signals, is an irreducible background for sub-GeV electron-recoil searches above roughly kilogram-year exposures. At the nuclear-recoil end, LZ reached the neutrino fog for 3–9 GeV masses, seeing ⁸B CEνNS at 4.5σ in 5.7 tonne-years (arXiv:2512.08065; PRL 137, 091806, 2026). No candidate signal is accepted. Multi-kilogram skipper-CCD (Oscura) and qubit- or TES-based (TESSERACT) programmes had published no dark-matter–electron results by October 2026, so current limits remain several orders of magnitude above the floor over most of the 1 MeV–1 GeV range.

# Applications

A signal would be the first non-gravitational evidence for dark matter and fix its mass scale, while a null result to the floor would exclude thermal-relic freeze-in and freeze-out benchmarks. The skipper-CCD and quantum-sensor technology feeds low-light imaging, X-ray spectroscopy and qubit-based sensing.

# Resolution criteria

Resolved when experiments report 90% CL limits (or a ≥5σ signal with confirmation in a second target) reaching the solar-neutrino floor (CEνNS-induced few-electron events) for 1 MeV–1 GeV masses, for both heavy and light mediators, with background models validated in sideband data.

# Rating rationale

Limits sit orders of magnitude above the floor and an unexplained low-energy excess in silicon is not understood, but the route is engineering and background control, so difficulty 44 is well below dark-matter identity (73). Application value 14 equals the old dark-matter entry's, which was justified by exactly this sensor spin-off (skipper CCDs, qubit and TES sensors). Leverage 46 because the problem decides the thermal sub-GeV dark-matter benchmarks that a large share of the light-dark-matter programme targets; it is below dark-matter identity (70) because it covers one mass window.

# Work mix rationale

Engineering and background characterisation dominate: bigger skipper arrays, lower dark counts, deeper sites. Theory is in-medium response and empirical share is the measurement itself.

# Verification

Needs new detector data: experiments must report 90% CL limits reaching the solar-neutrino floor for masses from 1 MeV to 1 GeV (heavy and light mediators), or a signal at 5 sigma or more confirmed in a second target, with background models validated in sideband data.

# Plain explanation

Most of the matter in the universe is dark matter, which we have not detected directly. Decades of searches for heavy dark-matter particles have found nothing. Now many scientists are looking for lighter ones, from about the mass of a proton down to a thousand times lighter.

A light particle could kick loose a single electron in a crystal. To catch that, you need a detector that can notice one electron. A special kind of camera chip, called a skipper CCD, can count single electrons by measuring each pixel's charge over and over to cancel noise.

The hard part is background. Tiny signals of one or a few electrons also arise from heat, from light leaking in, from stray radioactivity, and from unexplained sources. It is like trying to hear a single pin drop in a building whose pipes creak for reasons nobody understands. Present detectors see more of these events than we can explain, which limits what they can find.

If every other background were removed, there would still be one that cannot be shielded: neutrinos from the Sun. They pass through any shielding and can make the same tiny signals. Where that background begins to dominate is called the solar-neutrino floor.

The goal is to push detectors down to that floor. Whether it can be done depends on understanding and removing the unexplained excess events.

Where the analogy breaks: a floor in sensitivity is not a wall. Smarter analysis can sometimes see past it.

# Student explanation

**The target.** Dark matter with mass between about 1 MeV and 1 GeV is too light to produce a detectable nuclear recoil in standard experiments. But it can scatter off bound electrons, which are lighter and more easily excited, ionizing atoms and freeing a few electrons. The quantity to constrain is the scattering cross-section σ_e as a function of mass. Two cases are considered: a heavy mediator (the interaction acts like contact, form factor F_DM = 1) and a light mediator (the interaction is long-range, F_DM ∝ 1/q²).

**Detectors.** Targets with an energy threshold of an eV or less: silicon and germanium skipper CCDs (which read out each pixel many times to reach sub-electron noise), superconducting sensors, qubit-based sensors, and two-dimensional materials.

**Background and the floor.** The goal is a background well below 1 event per gram-year in the one-to-few-electron bins. Sources include:

- _Dark counts_: thermally or electrically generated electrons.
- _Unexplained low-energy excesses_, seen by many experiments. These currently limit sensitivity by orders of magnitude.
- _Solar neutrinos_: the irreducible background, from coherent elastic neutrino–nucleus scattering (which can produce few-electron ionization) and neutrino–electron scattering.

**State of the art.** SENSEI set leading limits in 2020 with a single skipper CCD of about 2 g, and later ran at SNOLAB with more exposure. DAMIC at SNOLAB, upgraded to skipper readout, confirmed an unexplained bulk excess of about 7 events per kg-day near 80 eV. The DAMIC-M prototype (2025) cut the single-electron rate 50-fold and excluded some benchmark models over parts of the MeV range. No signal is accepted, and current limits remain several orders of magnitude above the solar-neutrino floor over most of the mass window. Other experiments (EDELWEISS, CDMS-type, and cryogenic detectors) see low-energy excesses with different spectra.

**What the problem asks.** Get from today's sensitivity to the solar-neutrino floor: understand the origin of the dark counts and the excesses, shield or veto them, scale the detectors, and show that both heavy- and light-mediator cases are covered.

**Why it matters.** It is one of the few routes to test light dark-matter models, and reaching the floor would itself mean seeing solar-neutrino signals in these tiny detectors.
