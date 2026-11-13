---
type: problem
slug: ten-martini-problem-analytic-one-frequency
title: Ten Martini Problem for analytic one-frequency Schrödinger operators
entry: quasiperiodic-schrodinger-operators
status: PARTIAL
origin: Mark Kac’s challenge and Barry Simon’s naming for the almost Mathieu operator; the supercritical analytic form is stated as a conjecture of J. You in the 2026 preprint’s introduction
ratings:
  difficulty: 30
  applicationValue: 3
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Ge, Jitomirskaya, You: The Supercritical Ten Martini Problem (arXiv:2611.13068, preprint of 9 Nov 2026)"
    url: https://arxiv.org/abs/2611.13068
  - title: "Ge, Jitomirskaya, You: Kotani theory, Puig’s argument, and stability of the Ten Martini Problem (arXiv:2308.09321)"
    url: https://arxiv.org/abs/2308.09321
  - title: "Ge, Jitomirskaya: Intrinsic symplectic structure and sharp arithmetic universality (arXiv:2407.08866)"
    url: https://arxiv.org/abs/2407.08866
  - title: "Ge, Jitomirskaya, You: The Robust Ten Martini Problem (arXiv:2609.15812, preprint)"
    url: https://arxiv.org/abs/2609.15812
  - title: "Avila, Jitomirskaya: The Ten Martini Problem (Annals of Mathematics 170, 2009)"
    url: https://annals.math.princeton.edu/2009/170-1/p08
  - title: "Avila: Global theory of one-frequency Schrödinger operators I (arXiv:0905.3902)"
    url: https://arxiv.org/abs/0905.3902
  - title: Almost Mathieu operator (Wikipedia)
    url: https://en.wikipedia.org/wiki/Almost_Mathieu_operator
timeline:
  - date: 2003-09-01
    title: "Puig: Cantor spectrum for Diophantine frequencies"
    body: Cantor spectrum of the almost Mathieu operator for Diophantine frequencies and couplings $b\ne0,\pm2$ in Puig's normalization $b\cos$ (that is, $\lambda\ne0,\pm1$).
    source: https://arxiv.org/abs/math-ph/0309004
  - date: 2005-03-17
    title: Avila–Jitomirskaya solve the almost Mathieu case
    body: Cantor spectrum for every nonzero coupling and irrational frequency; published in Annals of Mathematics 170 (2009).
    source: https://arxiv.org/abs/math/0503363
  - date: 2023-08-18
    title: All-frequency Cantor spectrum for a large class
    body: Ge, Jitomirskaya and You report the problem for a large class of analytic one-frequency operators beyond the almost Mathieu family. Unrefereed on its arXiv page.
    source: https://arxiv.org/abs/2308.09321
  - date: 2026-09-14
    title: The robust Ten Martini Problem for Type I operators
    body: Ge, Jitomirskaya and You report Cantor spectrum for every irrational frequency throughout the open class of Type I analytic operators, the two-dimensional-center case that the November preprint extends. Unrefereed on its arXiv page.
    source: https://arxiv.org/abs/2609.15812
  - date: 2026-11-09
    title: "Preprint: Cantor spectrum on the whole positive-Lyapunov part"
    body: Ge, Jitomirskaya and You report Cantor spectrum of Σ ∩ {L>0} for every nonconstant real-analytic potential and every irrational frequency (60 pages, v1). Unrefereed; subcritical and critical parts not covered.
    source: https://arxiv.org/abs/2611.13068
explainer:
  oneLine: Is the spectrum of a never-repeating chain a Cantor set? A 2026 preprint claims yes where the exponent is positive.
  flow:
    - "Cosine chain: Cantor spectrum, 2005"
    - Does the cosine matter?
    - Weak analytic potentials can fill intervals
    - "Preprint: Cantor where exponent is positive"
    - Subcritical and critical cases remain
  glossary:
    - term: Cantor set
      meaning: A closed set with no isolated points that contains no interval, like the middle-thirds set.
      link: https://en.wikipedia.org/wiki/Cantor_set
    - term: Lyapunov exponent
      meaning: The average exponential rate at which solutions grow or shrink along the chain; positive means exponential growth or decay.
      link: https://en.wikipedia.org/wiki/Lyapunov_exponent
    - term: spectrum
      meaning: For an operator, the set of numbers E for which the operator minus E times the identity has no bounded inverse; the analogue of eigenvalues.
      link: https://en.wikipedia.org/wiki/Spectrum_(functional_analysis)
    - term: almost Mathieu operator
      meaning: The chain operator with a cosine potential, the model case of the Ten Martini Problem.
      link: https://en.wikipedia.org/wiki/Almost_Mathieu_operator
    - term: irrational number
      meaning: A real number that is not a fraction of two whole numbers.
      link: https://en.wikipedia.org/wiki/Irrational_number
    - term: quasiperiodic
      meaning: A pattern with incompatible periods that never repeats exactly but is not random.
      link: https://en.wikipedia.org/wiki/Quasiperiodicity
    - term: Hofstadter butterfly
      meaning: The plot of the allowed energies of the almost Mathieu operator against the magnetic flux.
      link: https://en.wikipedia.org/wiki/Hofstadter%27s_butterfly
    - term: quantum Hall effect
      meaning: The stepwise quantization of the Hall resistance of a two-dimensional electron system at low temperature in a strong magnetic field.
      link: https://en.wikipedia.org/wiki/Quantum_Hall_effect
  readFirst:
    - title: Almost Mathieu operator (Wikipedia)
      url: https://en.wikipedia.org/wiki/Almost_Mathieu_operator
      why: The Ten Martini Problem for the cosine, with its history.
    - title: "Ge, Jitomirskaya, You: The Supercritical Ten Martini Problem (arXiv abstract)"
      url: https://arxiv.org/abs/2611.13068
      why: The preprint’s one-paragraph abstract, with the full text linked; the introduction is readable by a specialist.
    - title: Hofstadter’s butterfly (Wikipedia)
      url: https://en.wikipedia.org/wiki/Hofstadter%27s_butterfly
      why: Where the Cantor-spectrum question comes from physically.
site:
  aiReviewed: true
---

Let $v:\mathbb R/\mathbb Z\to\mathbb R$ be real analytic and nonconstant, let $\alpha$ be irrational, and let $H_{v,\alpha,\theta}$ act on $\ell^2(\mathbb Z)$ by $(H\psi)_n=\psi_{n+1}+\psi_{n-1}+v(\theta+n\alpha)\psi_n$. The spectrum $\Sigma_{v,\alpha}$ does not depend on $\theta$. The Ten Martini Problem for this family asks whether $\Sigma_{v,\alpha}$ is a Cantor set for all irrational $\alpha$. It was posed for the almost Mathieu operator $v(x)=2\lambda\cos2\pi x$ (Kac's challenge, named by Simon) and is solved there. In the 2026 preprint's introduction, the version for general analytic $v$ is: with $L(E)$ the Lyapunov exponent and $O=\{E:L(E)>0\}$, the set $\Sigma_{v,\alpha}\cap O$ is a Cantor set for every nonconstant analytic $v$ and every irrational $\alpha$ (the preprint attributes this as a conjecture to You). For the subcritical and critical parts of the spectrum, the preprint reports that the corresponding statement cannot be expected for all analytic $v$.

# State of the art

**Partly solved; the main remaining claim is an unrefereed preprint.** Solved and refereed for the almost Mathieu operator: Avila–Jitomirskaya (preprint 2005, Annals of Mathematics 170, 2009) for every nonzero coupling and every irrational frequency, building on Puig's Diophantine-frequency result (2003 preprint), Last's zero-measure result at $\lambda=1$ for almost every frequency and the Liouville-frequency argument of Choi–Elliott–Yui, as described in the 2026 preprint. Beyond the cosine, the preprint's introduction lists perturbative results (Sinai; Eliasson), a Baire-generic result (Avila–Bochi–Damanik) and the Goldstein–Schlag theorem for positive Lyapunov exponent under a strong Diophantine condition on the frequency, none covering all irrational frequencies. Ge–Jitomirskaya–You report all-frequency Cantor spectrum for a large "Type I" class, first for even trigonometric polynomials (arXiv:2308.09321, 2023) and then for general analytic potentials in the class (arXiv:2609.15812, September 2026); both are preprints. **Claimed on 9 Nov 2026:** Ge, Jitomirskaya and You (arXiv:2611.13068, 60 pages, v1) report Theorem 1.1: for every nonconstant analytic $v$ and every irrational $\alpha$, $\Sigma_{v,\alpha}\cap O$ is a Cantor set (when nonempty). By Sorets–Spencer this covers the whole spectrum of $\lambda v$ for all sufficiently large $|\lambda|$. Their proof extends the Kotani and almost-reducibility argument of arXiv:2609.15812 from two-dimensional to arbitrary finite-dimensional dual centers, using the symplectic structure of arXiv:2407.08866. **Not covered:** the subcritical and critical parts of the spectrum. The preprint reports that Argentieri and Avila have announced examples of small analytic (subcritical) potentials whose spectrum contains intervals, so Cantor spectrum for all analytic potentials is not expected; which analytic potentials do have Cantor spectrum at subcritical and critical energies is not settled by the preprint. The Dry Ten Martini Problem (every gap allowed by gap labelling is open) is a separate, stronger question; the preprint cites a supercritical Type II counterexample to the dry statement by Ge, Wang, Xu and Zhao (in preparation), so the dry statement cannot hold for all supercritical potentials.

# Applications

Essentially none beyond modelling. The almost Mathieu and related operators are tight-binding models of electrons in a magnetic field and of quasicrystal-like structures, and a Cantor spectrum means the allowed energy bands form a fractal set with gaps at every scale. That is a statement about a mathematical model; no device or engineering method depends on it.

# Resolution criteria

For the supercritical statement: a refereed proof (or an expert-reviewed formal proof) that $\Sigma_{v,\alpha}\cap\{L>0\}$ is a Cantor set for every nonconstant analytic $v$ and every irrational $\alpha$. For the full family question: in addition, a classification of the subcritical and critical cases. A preprint does not change the status.

# Rating rationale

Difficulty 30: the almost Mathieu case is solved and the supercritical analytic case is reported solved by the leading group in a 60-page preprint that builds step by step on their 2023 and 2024 work, so verification and the subcritical and critical cases remain; the Mézard–Parisi problem next to it sits at 50 and Polyakov’s prediction at 40, where the claims are newer in method. Application value 3: a model of electrons and quasicrystals, no practical use. Leverage 25: it completes a robustness programme in one subfield of spectral theory and does not gate results elsewhere.

# Verification

Expert reading of arXiv:2611.13068: the intrinsic finite-dimensional dual center and its analytic injective solution frame (Proposition 3.1), the Kotani-type reflectionless identity and compact reduction (Theorem 4.1), the opposite energy monotonicity of the two unitary blocks (Proposition 4.1), almost reducibility on a fixed strip (Proposition 5.1), the resonance construction (Proposition 6.1) and the final scalar contradiction that excludes intervals in the spectrum (Section 7). Check that the earlier two-dimensional-center case reproduces arXiv:2609.15812 and that nothing contradicts the announced subcritical counterexamples or the reported Type II dry counterexample. Wait for refereeing.

# Plain explanation

Imagine an electron on a chain of sites, nudged at each site by a wave pattern that never repeats exactly. The electron can only have certain energies, and the question is what that set of energies looks like. The expected answer is dust: no solid stretch of allowed energies anywhere, only specks with gaps at every scale. Mathematicians call such a set a Cantor set.

For the standard textbook version of this chain, built from a cosine wave, this was proved by Artur Avila and Svetlana Jitomirskaya, published in 2009. The problem is named after a challenge: the mathematician Mark Kac offered ten martinis for a proof.

The open question is whether the cosine matters. Is the dust picture true for almost any smooth, repeating wave shape? The answer cannot be a plain yes: the authors of the new work report that examples have been announced where, for a weak wave, the energies do fill an interval. In November 2026, Lingrui Ge, Svetlana Jitomirskaya and Jiangong You posted a preprint claiming the dust picture for every wave shape, but only for the energies in the strong regime, where the electron's wave dies away exponentially. The preprint has not been checked by outside experts, so the problem is marked as partly solved here.

No device depends on this. It is a statement about a mathematical model.

# Student explanation

**The statement.** Let $v$ be a nonconstant real-analytic periodic function (a smooth function given by a convergent power series), let $\alpha$ be irrational, and consider the chain operator $\psi_{n+1}+\psi_{n-1}+v(\theta+n\alpha)\psi_n$. Its spectrum does not depend on $\theta$. The original Ten Martini Problem asks for this spectrum to be a Cantor set for the cosine $v$, for all irrational $\alpha$; it is solved. The general question asks it for other analytic $v$.

**Why it is not a plain yes.** The Lyapunov exponent $L(E)$ is the average exponential growth rate of solutions at energy $E$. Where $L(E)>0$ the energy is supercritical. The 2026 preprint reports that Argentieri and Avila have announced small analytic potentials whose spectrum contains intervals. Those examples are subcritical, with $L=0$. So the natural precise conjecture is only about the set $O=\{E:L(E)>0\}$: that the spectrum intersected with $O$ is a Cantor set. The preprint credits this conjecture to You.

**The claimed result.** Ge, Jitomirskaya and You report (Theorem 1.1) that for every nonconstant analytic $v$ and every irrational $\alpha$, the spectrum intersected with $O$ is a Cantor set. For a large coupling constant, $L>0$ on the whole spectrum of $\lambda v$ (Sorets–Spencer), so then the whole spectrum is Cantor.

**How the argument goes, in outline.** Cantor means no intervals, so assume the spectrum contains an interval $I$ in $O$ and look for a contradiction. Aubry duality turns the chain into a dual chain. At such energies the dual transfer dynamics split into a hyperbolic part and a "center" part of some finite dimension $2k$. The authors extend a Kotani-type argument, which says that where the center exponents vanish on an interval, the dynamics are reflectionless. They then use almost reducibility (conjugating the dynamics close to constant matrices) and vary the energy until two eigenphases from two blocks of the center match. That resonance produces two approximate solutions at one phase, which contradicts a Wronskian bound. The step that is new is carrying this out for centers of any finite dimension, not only dimension 2.

**What remains.** The subcritical and critical parts of the spectrum. The preprint is an unrefereed v1 of 60 pages; this site treats the problem as partly solved until experts accept it.
