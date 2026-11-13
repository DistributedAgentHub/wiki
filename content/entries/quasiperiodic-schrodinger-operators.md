---
type: entry
slug: quasiperiodic-schrodinger-operators
title: Quasiperiodic Schrödinger operators and Cantor spectrum
field: probability-mathematical-physics
kind: THEORY
status: ACTIVE
summary: One-frequency operators with a quasiperiodic potential, from the almost Mathieu operator and Hofstadter’s butterfly to Avila’s global theory of the Lyapunov exponent and the Ten Martini Problem.
reliedOn: A model of electrons in quasicrystals and of Bloch electrons in a magnetic field (the integer quantum Hall setting); its spectral theory (Lyapunov exponent, reducibility, duality) is a testbed for dynamical-systems methods in mathematical physics.
references:
  - title: Avila and Jitomirskaya, The Ten Martini Problem. arXiv:math/0503363 (2005); Annals of Mathematics 170 (2009), 303–342
    url: https://arxiv.org/abs/math/0503363
    kind: paper
  - title: Annals of Mathematics page for Avila–Jitomirskaya, The Ten Martini Problem (vol. 170, 2009)
    url: https://annals.math.princeton.edu/2009/170-1/p08
    kind: paper
  - title: Puig, Cantor spectrum for the almost Mathieu operator. arXiv:math-ph/0309004 (2003)
    url: https://arxiv.org/abs/math-ph/0309004
    kind: paper
  - title: Avila, Global theory of one-frequency Schrödinger operators I. arXiv:0905.3902 (2009)
    url: https://arxiv.org/abs/0905.3902
    kind: paper
  - title: Ge, Jitomirskaya and You, Kotani theory, Puig’s argument, and stability of the Ten Martini Problem. arXiv:2308.09321 (2023, preprint)
    url: https://arxiv.org/abs/2308.09321
    kind: paper
  - title: Ge and Jitomirskaya, Intrinsic symplectic structure and sharp arithmetic universality. arXiv:2407.08866 (2024, preprint)
    url: https://arxiv.org/abs/2407.08866
    kind: paper
  - title: Ge, Jitomirskaya and You, The Robust Ten Martini Problem. arXiv:2609.15812 (2026, preprint)
    url: https://arxiv.org/abs/2609.15812
    kind: paper
  - title: Ge, Jitomirskaya and You, The Supercritical Ten Martini Problem. arXiv:2611.13068 (2026, preprint)
    url: https://arxiv.org/abs/2611.13068
    kind: paper
  - title: Almost Mathieu operator (Wikipedia)
    url: https://en.wikipedia.org/wiki/Almost_Mathieu_operator
    kind: article
  - title: Hofstadter’s butterfly (Wikipedia)
    url: https://en.wikipedia.org/wiki/Hofstadter%27s_butterfly
    kind: article
timeline:
  - date: 1976-01-01
    title: Hofstadter’s butterfly
    body: Hofstadter plots the energy levels of Bloch electrons on a square lattice against the magnetic flux, in Physical Review B 14 (year only).
    source: https://en.wikipedia.org/wiki/Hofstadter%27s_butterfly
  - date: 2003-09-01
    title: "Puig: Cantor spectrum for Diophantine frequencies"
    body: Puig’s preprint proves Cantor spectrum of the almost Mathieu operator for Diophantine frequencies and couplings $b\ne0,\pm2$ in its normalization $b\cos$ (that is, $\lambda\ne0,\pm1$), using reducibility, localization and Aubry duality.
    source: https://arxiv.org/abs/math-ph/0309004
  - date: 2005-03-17
    title: "Avila–Jitomirskaya: the Ten Martini Problem for the almost Mathieu operator"
    body: The preprint shows the spectrum is a Cantor set for every nonzero coupling and every irrational frequency; it appeared in Annals of Mathematics 170 (2009).
    source: https://arxiv.org/abs/math/0503363
  - date: 2009-05-25
    title: Avila’s global theory
    body: Avila’s preprint introduces the stratified analyticity of the Lyapunov exponent under complexified phase, used to separate subcritical, critical and supercritical energies.
    source: https://arxiv.org/abs/0905.3902
  - date: 2023-08-18
    title: "Ge–Jitomirskaya–You: all-frequency Cantor spectrum for a large class"
    body: The preprint reports the Ten Martini Problem for a large class of one-frequency analytic operators beyond the almost Mathieu family. Unrefereed on its arXiv page.
    source: https://arxiv.org/abs/2308.09321
  - date: 2024-07-11
    title: "Ge–Jitomirskaya: intrinsic symplectic structure of the dual problem"
    body: The preprint shows that the formal eigenvalue equation of an analytic one-frequency operator has an intrinsic analytic symplectic structure, a tool later used in the supercritical Ten Martini preprint.
    source: https://arxiv.org/abs/2407.08866
  - date: 2026-09-14
    title: "Ge–Jitomirskaya–You: the robust Ten Martini Problem"
    body: The preprint reports Cantor spectrum for every irrational frequency throughout the open class of Type I analytic one-frequency operators. Unrefereed on its arXiv page.
    source: https://arxiv.org/abs/2609.15812
  - date: 2026-11-09
    title: Preprint on the supercritical Ten Martini Problem
    body: Ge, Jitomirskaya and You report Cantor spectrum on the positive-Lyapunov part of the spectrum for every nonconstant real-analytic potential and every irrational frequency. Unrefereed.
    source: https://arxiv.org/abs/2611.13068
explainer:
  oneLine: Waves moving through a pattern that almost, but never exactly, repeats, and whether their allowed energies form a fractal.
  flow:
    - Never-repeating potential on a chain
    - Spectrum of allowed energies
    - Lyapunov exponent sorts the regimes
    - "Cantor spectrum: solved for cosine in 2005"
    - Preprint extends to analytic, positive exponent
  glossary:
    - term: quasiperiodic
      meaning: A pattern with several incompatible periods, so it never repeats exactly but is not random.
      link: https://en.wikipedia.org/wiki/Quasiperiodicity
    - term: spectrum
      meaning: For an operator, the set of numbers E for which the operator minus E times the identity has no bounded inverse; the analogue of eigenvalues of a matrix.
      link: https://en.wikipedia.org/wiki/Spectrum_(functional_analysis)
    - term: almost Mathieu operator
      meaning: The chain operator with potential 2λ cos(2π(θ+nα)); the standard model for electrons in a magnetic field on a lattice.
      link: https://en.wikipedia.org/wiki/Almost_Mathieu_operator
    - term: Hofstadter butterfly
      meaning: The picture of the allowed energies of the almost Mathieu operator plotted against the magnetic flux α.
      link: https://en.wikipedia.org/wiki/Hofstadter%27s_butterfly
    - term: Cantor set
      meaning: A closed set with no isolated points that contains no interval, like the middle-thirds set.
      link: https://en.wikipedia.org/wiki/Cantor_set
    - term: Lyapunov exponent
      meaning: The average exponential rate at which solutions grow or shrink along the chain, or at which nearby trajectories separate.
      link: https://en.wikipedia.org/wiki/Lyapunov_exponent
    - term: irrational number
      meaning: A real number that is not a fraction of two whole numbers, such as the square root of 2.
      link: https://en.wikipedia.org/wiki/Irrational_number
    - term: quantum Hall effect
      meaning: The stepwise quantization of the Hall resistance of a two-dimensional electron system at low temperature in a strong magnetic field.
      link: https://en.wikipedia.org/wiki/Quantum_Hall_effect
    - term: quasicrystal
      meaning: A material whose atoms are ordered but never form a repeating pattern.
      link: https://en.wikipedia.org/wiki/Quasicrystal
  readFirst:
    - title: Almost Mathieu operator (Wikipedia)
      url: https://en.wikipedia.org/wiki/Almost_Mathieu_operator
      why: The model, the Ten Martini Problem and its history in one page.
    - title: Hofstadter’s butterfly (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hofstadter%27s_butterfly
      why: The picture that started the question, and its link to the quantum Hall effect.
    - title: Cantor set (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cantor_set
      why: The fractal that the spectrum is expected to resemble.
raw:
  body: "## The operators\n\nA one-frequency quasiperiodic Schrödinger operator acts on sequences $\\psi=(\\psi_n)_{n\\in\\mathbb Z}$ by\n$$(H_{v,\\alpha,\\theta}\\psi)_n=\\psi_{n+1}+\\psi_{n-1}+v(\\theta+n\\alpha)\\psi_n,$$\nwhere $v:\\mathbb R/\\mathbb Z\\to\\mathbb R$ is a periodic potential (here real analytic, nonconstant), $\\alpha$ is the frequency and $\\theta$ the phase. For irrational $\\alpha$ the potential never repeats, and the spectrum $\\Sigma_{v,\\alpha}$ does not depend on $\\theta$. The standard model is the almost Mathieu operator $v(x)=2\\lambda\\cos 2\\pi x$ (also called Harper's operator), where $\\lambda$ is the coupling. It describes an electron on a square lattice in a magnetic field, with $\\alpha$ the magnetic flux through a lattice cell in units of the flux quantum. Plotting its spectrum against $\\alpha$ gives Hofstadter's butterfly (Hofstadter, 1976).\n\n## Lyapunov exponent and the global theory\n\nSolutions of $H\\psi=E\\psi$ are generated by the transfer-matrix cocycle $\\begin{pmatrix}E-v(x)&-1\\\\1&0\\end{pmatrix}$, and the Lyapunov exponent $L(E)\\ge0$ is its average exponential growth rate. For the almost Mathieu operator, $L(E)=\\max\\{0,\\log\\lambda\\}$ on the spectrum (Aubry–André formula, proved by Bourgain and Jitomirskaya). Avila's global theory (2009 preprint) studies $L$ after complexifying the phase, $\\theta\\mapsto\\theta+iy$. The acceleration, the slope of $L$ in $y$ at $y=0$, is a quantized integer. Energies with $L>0$ are called supercritical. Energies where $L=0$ and the exponent stays zero under small complex shifts of the phase are subcritical, and the borderline cases are critical. For the almost Mathieu operator these are $\\lambda>1$, $\\lambda<1$ and $\\lambda=1$.\n\n## Cantor spectrum and the Ten Martini Problem\n\nHofstadter's picture suggests that for irrational $\\alpha$ the spectrum is a Cantor set: closed, nowhere dense and without isolated points. For continuous $v$ and irrational $\\alpha$ the spectrum is already known to be perfect, so the content is that it contains no interval. Mark Kac offered ten martinis for a proof for the almost Mathieu operator; Barry Simon named it the Ten Martini Problem and popularized it. Early results by Bellissard–Simon and Helffer–Sjöstrand and the zero-measure result of Last at $\\lambda=1$ for almost every $\\alpha$ preceded Puig's 2003 preprint, which proved Cantor spectrum for Diophantine $\\alpha$ and $\\lambda\\ne0,1$. Avila and Jitomirskaya (preprint 2005, Annals of Mathematics 170, 2009) proved it for all irrational $\\alpha$ and all $\\lambda\\ne0$. The Dry Ten Martini Problem asks that every gap allowed by gap labelling be open; a preprint of Avila, You and Zhou (arXiv:2306.16254) reports it for the noncritical almost Mathieu operator.\n\n## Beyond the cosine\n\nInterest then turned to robustness: does Cantor spectrum survive for other potentials? Before 2023 there were perturbative results (Sinai, Eliasson), a generic-in-$v$ result (Avila–Bochi–Damanik) and a result for positive Lyapunov exponent under a Diophantine condition on $\\alpha$ (Goldstein–Schlag), but none valid for all irrational $\\alpha$. Ge, Jitomirskaya and You introduced a large class of \"Type I\" operators (T-acceleration one) and report all-frequency Cantor spectrum throughout it, first for even trigonometric polynomials (2023 preprint, arXiv:2308.09321, using dual cocycles, Kotani theory and an all-frequency version of Puig's argument) and then for general analytic Type I potentials (The Robust Ten Martini Problem, arXiv:2609.15812, September 2026 preprint). The Argentieri–Avila examples, announced as reported in the 2026 preprint below, are small analytic subcritical potentials whose spectrum contains intervals, so no statement for all analytic $v$ can be expected without a restriction to positive Lyapunov exponent.\n\n## 2026\n\nGe, Jitomirskaya and You posted a 60-page preprint (arXiv:2611.13068, 9 Nov 2026) reporting Cantor spectrum on the positive-Lyapunov part of the spectrum of every nonconstant real-analytic one-frequency operator, for every irrational frequency. It is unrefereed. See the open problem."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Picture an electron hopping along a row of sites, where each site pushes on it by an amount that follows a repeating wave, but the wave's period does not fit the spacing of the sites. The pattern never repeats exactly, yet it is not random either. Physicists call this quasiperiodic. It models electrons in certain crystals that have no repeating unit, and electrons on a grid in a magnetic field.

The question mathematicians ask is: which energies can the electron have? For a normal repeating crystal the answer is a few wide bands. For these never-repeating patterns, the picture drawn by the physicist Douglas Hofstadter in 1976 showed something stranger: the allowed energies look like dust, with gaps inside gaps, at every zoom level. That kind of set is called a Cantor set.

Showing that the dust picture is exactly true took decades. The mathematician Mark Kac offered ten martinis for a proof, and the problem was named after the offer. It was solved for the standard model in 2005 by Artur Avila and Svetlana Jitomirskaya. Since then, researchers have asked how much of this depends on the exact wave shape. In November 2026 a new preprint, not yet checked by outside experts, claimed an answer for much of the general case.

The analogy has limits: the electron is a mathematical model, and the result is about the model, not about a particular material.

# Student explanation

**The operator.** Think of a particle on integer sites $n$ with wave amplitude $\psi_n$. The equation $\psi_{n+1}+\psi_{n-1}+v(\theta+n\alpha)\psi_n=E\psi_n$ says: hop to neighbours, plus a potential $v$ at each site. Here $v$ is a periodic function (for example a cosine), and the potential at site $n$ is that function evaluated at $\theta+n\alpha$. If $\alpha$ is irrational, the sequence of potential values never repeats; it is quasiperiodic. The set of energies $E$ for which the equation has a usable solution is the **spectrum**, the analogue of the eigenvalues of a matrix. With $v(x)=2\lambda\cos 2\pi x$ this is the **almost Mathieu operator**, and plotting its spectrum against $\alpha$ gives Hofstadter's butterfly.

**Cantor spectrum.** For a periodic potential, the spectrum is a union of a few bands. For irrational $\alpha$ the expectation is a **Cantor set**: a closed set with no intervals in it and no isolated points, like the middle-thirds set you get by removing the middle third of an interval over and over. The statement "the spectrum is a Cantor set for every irrational $\alpha$ and every nonzero coupling" is the **Ten Martini Problem**, named by Barry Simon after a challenge of Mark Kac. Avila and Jitomirskaya proved it for the almost Mathieu operator (preprint 2005, published 2009), after Puig and others had handled many frequencies.

**The tool: Lyapunov exponent.** Solutions of the equation can be built step by step with a $2\times2$ matrix that you multiply along the chain. The **Lyapunov exponent** $L(E)\ge0$ is the average exponential growth rate of these products; if you have seen how $e^{\gamma n}$ grows, this is $\gamma$. Avila's global theory sorts energies into three regimes by how $L$ behaves when the phase is made complex: **supercritical** ($L>0$, solutions grow or decay exponentially), **subcritical** ($L=0$ robustly), and **critical** (the boundary between them). For the almost Mathieu operator, $L=\max\{0,\log\lambda\}$ on the spectrum, so $\lambda>1$ is supercritical.

**Beyond the cosine.** Does Cantor spectrum depend on the cosine? Ge, Jitomirskaya and You reported that it holds for a large class of analytic potentials (preprints of 2023 and September 2026). In their November 2026 preprint they report it for every nonconstant analytic $v$ on the part of the spectrum where $L>0$. They use **Aubry duality**, which swaps the roles of the potential and the hopping, so that a hard question about $v$ becomes a question about a dual operator.

**What is not covered.** The subcritical and critical parts of the spectrum. The preprint reports that examples of analytic potentials with intervals in the spectrum have been announced, so no such statement is expected for all analytic $v$.
