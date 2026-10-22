---
type: entry
slug: nuclear-reaction-rates
title: Thermonuclear reaction rates and nucleosynthesis
field: physics
kind: THEORY
status: ACTIVE
summary: How charged-particle reaction rates are computed, measured and extrapolated to stellar energies, and how they set Big Bang abundances, stellar burning, the C/O ratio and the black-hole mass gap.
reliedOn: Big Bang nucleosynthesis, stellar-evolution codes such as MESA, supernova yields and population synthesis all take rate libraries as input. Downstream it underlies the primordial lithium problem (nuclear rates versus stellar depletion) and the problem relating the 12C(α,γ)16O rate to the pair-instability black-hole mass gap.
dependsOn:
  - lambda-cdm
  - radiation-hydrodynamics
references:
  - title: "Iliadis 2015: Nuclear Physics of Stars, 2nd edition (Wiley-VCH)"
    url: https://doi.org/10.1002/9783527692668
    kind: book
  - title: "Clayton 1983: Principles of Stellar Evolution and Nucleosynthesis (University of Chicago Press)"
    url: https://press.uchicago.edu/ucp/books/book/chicago/P/bo24324962.html
    kind: book
  - title: "deBoer et al. 2017: The 12C(α,γ)16O reaction and its implications for stellar helium burning (Rev. Mod. Phys. 89, 035007)"
    url: https://arxiv.org/abs/1709.03144
    kind: paper
  - title: "Fields, Olive, Yeh and Young 2020: Big-Bang nucleosynthesis after Planck"
    url: https://arxiv.org/abs/1912.01132
    kind: paper
  - title: "Farmer et al. 2020: Constraints from gravitational-wave detections of binary black hole mergers on the 12C(α,γ)16O rate"
    url: https://arxiv.org/abs/2006.06678
    kind: paper
  - title: "Xu et al. 2013: NACRE II, an update of the NACRE compilation of charged-particle-induced thermonuclear reaction rates"
    url: https://arxiv.org/abs/1310.7099
    kind: paper
  - title: "Cyburt et al. 2010: The JINA REACLIB database (ApJS 189, 240)"
    url: https://doi.org/10.1088/0067-0049/189/1/240
    kind: paper
  - title: "Mossa et al. 2020: The baryon density of the Universe from an improved rate of deuterium burning (Nature 587, 210)"
    url: https://doi.org/10.1038/s41586-020-2878-4
    kind: paper
timeline:
  - date: 2013-10-26
    title: NACRE II compilation
    body: An updated evaluated compilation of charged-particle reaction rates for light nuclei, with potential-model extrapolations to low energy, replaces the 1999 NACRE tables.
    source: https://arxiv.org/abs/1310.7099
  - date: 2017-09-10
    title: 12C(α,γ)16O review
    body: deBoer and colleagues review the experimental and R-matrix status of the reaction and judge that about 10% uncertainty at stellar energies may be within reach.
    source: https://arxiv.org/abs/1709.03144
  - date: 2019-10-28
    title: Mass-gap edge robust except to 12C(α,γ)
    body: MESA models put the lower edge of the pair-instability gap near 45 M☉. It is robust to metallicity, mixing and winds but moves between about 40 and 56 M☉ within the 1σ 12C(α,γ)16O uncertainty.
    source: https://arxiv.org/abs/1910.12874
  - date: 2020-11-11
    title: LUNA deuterium-burning rate
    body: An underground measurement of d(p,γ)3He at BBN energies sharpens the predicted primordial D/H and gives a baryon density consistent with the CMB.
    source: https://doi.org/10.1038/s41586-020-2878-4
  - date: 2024-05-10
    title: Solar Fusion III
    body: A community evaluation updates pp-chain and CNO-cycle cross sections and their uncertainties for hydrogen-burning stars.
    source: https://arxiv.org/abs/2405.06470
explainer:
  oneLine: How fast nuclei fuse inside stars and the early universe, setting what the cosmos is made of.
  flow:
    - Nuclei repel; fusion needs quantum tunnelling
    - Reactions are rare at stellar energies
    - Measure at higher energy, extrapolate down
    - Rates decide stellar fuel and products
    - Same rates predict Big Bang abundances
  glossary:
    - term: nuclear fusion
      meaning: Joining of light atomic nuclei into heavier ones, releasing energy.
      link: https://en.wikipedia.org/wiki/Nuclear_fusion
    - term: cross section
      meaning: A measure of how likely a reaction is, pictured as the size of a target the particle must hit.
      link: https://en.wikipedia.org/wiki/Cross_section_(physics)
    - term: Coulomb barrier
      meaning: The electric repulsion between two positively charged nuclei that has to be overcome for them to fuse.
      link: https://en.wikipedia.org/wiki/Coulomb_barrier
    - term: quantum tunnelling
      meaning: A quantum effect in which a particle passes through a barrier it classically lacks the energy to climb.
      link: https://en.wikipedia.org/wiki/Quantum_tunnelling
    - term: astrophysical S-factor
      meaning: The slowly changing part of a fusion cross section left after dividing out the steep tunnelling dependence.
      link: https://en.wikipedia.org/wiki/Gamow_factor
    - term: Gamow peak
      meaning: The narrow energy window where most fusion reactions in a star actually happen.
      link: https://en.wikipedia.org/wiki/Gamow_factor
    - term: resonance
      meaning: A sharp rise in reaction probability when the collision energy matches an excited state of the product nucleus.
      link: https://en.wikipedia.org/wiki/Resonance_(particle_physics)
    - term: R-matrix
      meaning: A theory framework used to fit measured reaction data and extrapolate to energies that cannot be measured.
      link: https://en.wikipedia.org/wiki/R-matrix
    - term: Big Bang nucleosynthesis
      meaning: The making of the first light elements, mainly hydrogen, helium and a little lithium, in the first minutes of the universe.
      link: https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis
    - term: triple-alpha process
      meaning: The fusion of three helium nuclei into carbon inside stars.
      link: https://en.wikipedia.org/wiki/Triple-alpha_process
    - term: Maxwell–Boltzmann distribution
      meaning: "The spread of particle speeds in a gas at a given temperature: most are near average, a few are much faster."
      link: https://en.wikipedia.org/wiki/Maxwell%E2%80%93Boltzmann_distribution
    - term: electron screening
      meaning: Nearby electrons partly hide the nuclei’s charge, lowering the barrier and speeding reactions.
      link: https://en.wikipedia.org/wiki/Coulomb_barrier
  readFirst:
    - title: Stellar nucleosynthesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Stellar_nucleosynthesis
      why: Gives the big picture of how stars build elements.
    - title: Big Bang nucleosynthesis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis
      why: Shows how reaction rates feed into a testable prediction.
    - title: Gamow factor (Wikipedia)
      url: https://en.wikipedia.org/wiki/Gamow_factor
      why: Explains the tunnelling chance that makes the Gamow peak.
site:
  published: true
  aiReviewed: true
---

## What it is

For a reaction $a + X \to Y + b$ in a plasma at temperature $T$, the rate per unit volume is $r = n_a n_X \langle\sigma v\rangle/(1+\delta_{aX})$, with
$\langle\sigma v\rangle = \sqrt{\frac{8}{\pi\mu}}\,(kT)^{-3/2}\int_0^\infty \sigma(E)\,E\,e^{-E/kT}\,dE.$
For charged particles the Coulomb barrier makes $\sigma$ fall steeply. It is factored as $\sigma(E) = S(E)\,E^{-1}e^{-2\pi\eta}$, with Sommerfeld parameter $\eta = Z_aZ_Xe^2/\hbar v$ and a slowly varying astrophysical S-factor $S(E)$.

## Core results

**Gamow peak.** For a non-resonant $S$, the integrand peaks at $E_0 = [(\pi\alpha Z_aZ_X kT)^2 \mu c^2/2]^{1/3}$ with width $\Delta = 4\sqrt{E_0kT/3}$. Rates therefore scale as steep powers of $T$, and only a narrow energy window matters. For $^{12}$C(α,γ)$^{16}$O in core helium burning this window is near 300 keV, where the cross section is far too small to measure directly.

**Resonances.** A narrow resonance contributes $\langle\sigma v\rangle = (2\pi/\mu kT)^{3/2}\hbar^2 (\omega\gamma) e^{-E_r/kT}$, with resonance strength $\omega\gamma$. Broad and subthreshold resonances (for $^{12}$C(α,γ), the $1^-$ and $2^+$ states of $^{16}$O below the α threshold) interfere with direct capture. R-matrix fits are the standard tool for joint E1/E2 extrapolation to stellar energies.

**Screening.** Plasma electrons lower the barrier. In the weak-screening limit the rate is enhanced by $f = \exp(Z_aZ_Xe^2/\lambda_D kT)$, and intermediate and strong regimes need other prescriptions. Laboratory measurements also carry atomic electron screening, which must be removed before use in stars.

**Big Bang nucleosynthesis.** Given $\eta_b = n_b/n_\gamma$ (fixed by the CMB to under 1%), $N_{\rm eff}$ and the neutron lifetime, a network of about a dozen reactions predicts $Y_p$, D/H, $^3$He/H and $^7$Li/H. D/H agrees with observation. Predicted $^7$Li/H exceeds the Spite-plateau value by a factor of about three, the lithium problem. Fields et al. (2020) conclude that nuclear-rate updates do not remove it.

**Stellar burning.** The pp chains and CNO cycle (Solar Fusion III, 2024) govern hydrogen burning. The triple-α and $^{12}$C(α,γ)$^{16}$O reactions govern helium burning. The second sets the post-helium C/O ratio and hence the carbon- and oxygen-burning history of massive stars.

## Techniques to master

Deriving and numerically evaluating $\langle\sigma v\rangle$, including the reverse rates from detailed balance. Extrapolating S-factors and fitting R-matrix models. Using rate libraries and their Monte Carlo uncertainty bands: NACRE II, STARLIB (lognormal rate distributions) and the JINA REACLIB seven-parameter fits $\lambda = \exp[a_0 + \sum_{i=1}^5 a_i T_9^{(2i-5)/3} + a_6\ln T_9]$. Stiff reaction-network integration. Running MESA with modified rates.

## Experiment

Underground accelerators (LUNA at Gran Sasso, and newer facilities) cut the cosmic-ray background enough to measure near Gamow energies. LUNA's $d(p,\gamma)^3$He measurement (Mossa et al. 2020) fixed the main deuterium-destruction rate in BBN. Inverse kinematics, recoil separators and indirect methods (ANC, Trojan horse) fill the remaining gaps.

## Reading path

Iliadis, _Nuclear Physics of Stars_ (2nd ed.), is the core text, and Clayton, _Principles of Stellar Evolution and Nucleosynthesis_, gives the classical derivations. After those read deBoer et al. (2017) on $^{12}$C(α,γ)$^{16}$O, Fields et al. (2020) on BBN, and the MESA instrument papers.

## Where it bites

The lithium problem asks whether residual uncertainty in $^7$Be destruction rates, or stellar depletion in halo dwarfs, explains the factor-of-three discrepancy. For the mass gap, Farmer et al. found the lower edge near $45\,M_\odot$ to be robust against metallicity, mixing and winds but to shift between about 40 and 56 $M_\odot$ within the 1σ $^{12}$C(α,γ)$^{16}$O uncertainty. Over a wider rate range the maximum black-hole mass below the gap spans 40–90 $M_\odot$. Gravitational-wave populations can therefore constrain $S_{300}$, and the downstream problem asks whether that constraint can reach ±10%.

# Plain explanation

Stars shine because atomic nuclei fuse together. How quickly each of these fusions happens controls how long a star lives, what it makes, and how it dies.

Yet fusion is hard. Nuclei are all positively charged, so they push each other away. Even in a star's centre, the nuclei are usually too slow to overcome that push. Fusion still happens because of a strange effect from quantum physics: a nucleus can sometimes sneak through the barrier rather than climb over it. Picture rolling balls at a hill too high for any of them: almost all roll back, but very rarely one turns up on the far side. The chance is tiny. A small number of fast-enough nuclei with just the right energy do nearly all of the work.

This causes a problem. The most important energies in a star are so low that the reactions are extremely rare. In a laboratory on Earth, they can be too rare to measure. So scientists measure at higher energies and extrapolate downward with theory. Small errors in that extrapolation can change what stars produce.

The same physics, applied to a different set of reactions, also explains the first minutes after the Big Bang, when the universe made its first helium and a little lithium.

Where the analogy breaks: a real ball never passes through a hill. Tunnelling comes from the wave-like nature of matter, and no everyday object does it.

# Student explanation

**The rate.** For a reaction between particles a and X at temperature T, the number of reactions per volume per time is proportional to the number densities times the thermally averaged product ⟨σv⟩, where σ is the cross section (the effective target size) and v the relative speed. To compute it, average σ over the Maxwell–Boltzmann distribution of energies.

**The Coulomb barrier and the S-factor.** Two nuclei with charges Z₁ and Z₂ repel one another. At stellar energies they can only fuse by quantum tunnelling, which gives a cross section that drops steeply with falling energy. Physicists remove that steep part by writing σ(E) = S(E) × (1/E) × exp(−2πη), where η (the Sommerfeld parameter) measures the barrier strength. What is left, the astrophysical S-factor S(E), changes slowly with energy, so it is the quantity that is measured and extrapolated.

**The Gamow peak.** The thermal average has two competing factors: plenty of slow particles but little tunnelling at low energy; few fast particles but easy tunnelling at high energy. Their product peaks at an energy E₀, the Gamow peak, which is much higher than typical thermal energy but much lower than the barrier. Only a narrow window around E₀ matters. For ¹²C(α,γ)¹⁶O in helium burning, E₀ is about 300 keV (kilo-electronvolts, a unit of particle energy), where the reaction is too rare to measure directly.

**Resonances.** Sometimes the energy matches an excited state of the product nucleus, and the cross section jumps. Narrow resonances add to the rate in a simple way; broad or just-below-threshold ones interfere with the smooth background. The standard tool for extrapolation is R-matrix fitting.

**Screening.** In a plasma, nearby electrons partly cancel the repulsion, which enhances the rate. Laboratory targets also have atomic electrons that enhance the rate, which must be corrected.

**Where it matters.**

- _Big Bang nucleosynthesis_: with the baryon density known from the cosmic microwave background, about a dozen reactions predict the primordial helium, deuterium and lithium.
- _Stellar burning_: the carbon-to-oxygen ratio left by helium burning depends mostly on one reaction, ¹²C(α,γ)¹⁶O, and that in turn affects late stellar evolution and the mass of the black holes formed.
