---
type: entry
slug: analytic-number-theory
title: "Analytic number theory: Dirichlet series and the explicit formula"
field: number-theory
kind: THEORY
status: ACTIVE
summary: Dirichlet series, Euler products and contour integration turn questions about primes into questions about zeros of zeta and L-functions; the toolkit includes large sieve, zero-density bounds and sieves.
reliedOn: "It is the working toolkit behind the Riemann zeta entry and the problems hosted there: the Riemann Hypothesis, zero-density beyond Guth–Maynard, the Lindelöf exponent, bounded prime gaps and the parity barrier, and even-order logarithmic Chowla. It also supplies the L-function analysis used for Birch–Swinnerton-Dyer."
dependsOn:
  - harmonic-analysis
references:
  - title: H. Davenport, Multiplicative Number Theory (3rd ed., rev. H. L. Montgomery), Springer GTM 74
    url: https://link.springer.com/book/10.1007/978-1-4757-5927-3
    kind: book
  - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory I: Classical Theory, Cambridge University Press"
    url: https://doi.org/10.1017/CBO9780511618314
    kind: book
  - title: H. Iwaniec and E. Kowalski, Analytic Number Theory, AMS Colloquium Publications 53
    url: https://doi.org/10.1090/coll/053
    kind: book
  - title: E. Bombieri, On the large sieve, Mathematika 12 (1965)
    url: https://doi.org/10.1112/S0025579300005313
    kind: paper
  - title: Y. Zhang, Bounded gaps between primes, Annals of Mathematics 179 (2014)
    url: https://doi.org/10.4007/annals.2014.179.3.7
    kind: paper
  - title: J. Maynard, Small gaps between primes, Annals of Mathematics 181 (2015)
    url: https://doi.org/10.4007/annals.2015.181.1.7
    kind: paper
  - title: K. Matomäki and M. Radziwiłł, Multiplicative functions in short intervals, Annals of Mathematics 183 (2016)
    url: https://doi.org/10.4007/annals.2016.183.3.6
    kind: paper
  - title: L. Guth and J. Maynard, New large value estimates for Dirichlet polynomials (arXiv:2405.20552)
    url: https://arxiv.org/abs/2405.20552
    kind: paper
timeline:
  - date: 1965-12-01
    title: Bombieri's large sieve and the Bombieri–Vinogradov theorem
    body: Bombieri's large-sieve inequality gives primes in progressions with level of distribution 1/2 on average over moduli, which is GRH strength on average.
    source: https://doi.org/10.1112/S0025579300005313
  - date: 2013-11-19
    title: Maynard's multidimensional sieve weights
    body: Maynard (and independently Tao) introduced multidimensional Selberg weights. Bombieri–Vinogradov alone then gives bounded gaps, and m consecutive primes lie in bounded windows.
    source: https://arxiv.org/abs/1311.4600
  - date: 2014-05-01
    title: "Zhang: bounded gaps between primes"
    body: Zhang extended Bombieri–Vinogradov beyond level 1/2 for smooth moduli and proved liminf (p_{n+1} − p_n) < 7·10^7.
    source: https://doi.org/10.4007/annals.2014.179.3.7
  - date: 2015-09-17
    title: Logarithmic two-point Chowla
    body: Tao proved the logarithmically averaged two-point Chowla and Elliott conjectures. The proof combines the Matomäki–Radziwiłł theorem with an entropy-decrement argument.
    source: https://arxiv.org/abs/1509.05422
  - date: 2024-05-31
    title: Guth–Maynard zero-density estimate
    body: New large-value estimates for Dirichlet polynomials give N(σ,T) ≤ T^{30(1−σ)/13+o(1)}. The first improvement on Ingham's exponent near σ = 3/4, and asymptotics for primes in intervals of length x^{17/30+o(1)}.
    source: https://arxiv.org/abs/2405.20552
explainer:
  oneLine: Using calculus and complex numbers to count primes and other whole-number patterns.
  flow:
    - Encode a sequence in one function
    - Primes become zeros of that function
    - Zero locations bound the prime count error
    - Sieves and estimates handle what is unproven
  glossary:
    - term: prime number
      meaning: A whole number bigger than 1 divisible only by 1 and itself.
      link: https://en.wikipedia.org/wiki/Prime_number
    - term: Dirichlet series
      meaning: An infinite sum of the form a1/1^s + a2/2^s + a3/3^s + ..., turning a sequence into a function.
      link: https://en.wikipedia.org/wiki/Dirichlet_series
    - term: Euler product
      meaning: A way of writing a sum over all whole numbers as a product over primes.
      link: https://en.wikipedia.org/wiki/Euler_product
    - term: Riemann zeta function
      meaning: The function whose zeros control how the primes are spread out.
      link: /research/riemann-zeta-function
    - term: L-function
      meaning: A zeta-like function built from a character or a more general arithmetic object; used to study primes in progressions and more.
      link: https://en.wikipedia.org/wiki/L-function
    - term: explicit formula
      meaning: An exact formula that writes the prime count as a main term plus a sum over zeta zeros.
      link: https://en.wikipedia.org/wiki/Explicit_formulae_(L-function)
    - term: contour integration
      meaning: Integrating a complex function along a path in the complex plane, which can pick up residues at special points.
      link: https://en.wikipedia.org/wiki/Contour_integration
    - term: sieve theory
      meaning: Methods that count numbers surviving the removal of multiples of small primes.
      link: https://en.wikipedia.org/wiki/Sieve_theory
    - term: parity problem
      meaning: "The limit of sieves: they cannot tell numbers with an even number of prime factors from an odd number."
      link: https://en.wikipedia.org/wiki/Parity_problem_(sieve_theory)
    - term: zero-density estimate
      meaning: A bound on how many zeta zeros can lie away from the critical line.
      link: https://en.wikipedia.org/wiki/Density_hypothesis
    - term: Dirichlet character
      meaning: A function on whole numbers that repeats with a fixed period and multiplies nicely; used to pick out primes in one progression.
      link: https://en.wikipedia.org/wiki/Dirichlet_character
    - term: zero-free region
      meaning: A part of the complex plane proved to contain no zeros of zeta, close to the line where real part is 1.
      link: https://en.wikipedia.org/wiki/Prime_number_theorem
  readFirst:
    - title: Analytic number theory - Wikipedia
      url: https://en.wikipedia.org/wiki/Analytic_number_theory
      why: Short survey of the main ideas and results.
    - title: But what is the Riemann zeta function? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/zeta
      why: A visual explanation of how the zeta function extends beyond its obvious range.
    - title: Prime number theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Prime_number_theorem
      why: The first major success of the analytic method.
    - title: Sieve theory - Wikipedia
      url: https://en.wikipedia.org/wiki/Sieve_theory
      why: Explains sieves and their limits in plain terms.
raw:
  body: "## What it is\n\nAnalytic number theory studies arithmetic functions through their Dirichlet series $F(s)=\\sum_{n\\ge1}a_n n^{-s}$ and the analytic continuation of these series. For multiplicative $a_n$ there is an Euler product, the model case being $\\zeta(s)=\\sum_n n^{-s}=\\prod_p(1-p^{-s})^{-1}$ for $\\Re s>1$. The logarithmic derivative $-\\zeta'/\\zeta(s)=\\sum_n\\Lambda(n)n^{-s}$ turns counting primes into a problem about the zeros of $\\zeta$. This entry collects the toolkit that the Riemann zeta entry relies on.\n\n## The core machinery\n\n- **Perron's formula / Mellin inversion.** For $c>1$, $\\psi(x)=\\sum_{n\\le x}\\Lambda(n)=\\frac{1}{2\\pi i}\\int_{c-iT}^{c+iT}\\big(-\\tfrac{\\zeta'}{\\zeta}(s)\\big)\\frac{x^s}{s}\\,ds+O\\big(\\tfrac{x\\log^2 x}{T}\\big)$. Smoothed versions trade this for a Mellin transform of a test function.\n- **Functional equation.** Poisson summation applied to the theta function gives $\\xi(s)=\\xi(1-s)$, where $\\xi(s)=\\tfrac12 s(s-1)\\pi^{-s/2}\\Gamma(s/2)\\zeta(s)$. The function $\\xi$ is entire of order 1, so it has a Hadamard product over the nontrivial zeros $\\rho$. Counting zeros gives $N(T)=\\frac{T}{2\\pi}\\log\\frac{T}{2\\pi e}+O(\\log T)$.\n- **Convexity.** Phragmén–Lindelöf interpolation between $\\Re s=1+\\epsilon$ and the reflected line gives $\\zeta(\\tfrac12+it)\\ll|t|^{1/4+\\epsilon}$. The Lindelöf hypothesis replaces the exponent $1/4$ by $0$.\n- **Explicit formula.** For $x>1$ not a prime power, $\\psi(x)=x-\\sum_\\rho\\frac{x^\\rho}{\\rho}-\\log 2\\pi-\\tfrac12\\log(1-x^{-2})$, where the sum over zeros is taken symmetrically.\n- **Zero-free regions and the PNT.** The inequality $3+4\\cos\\theta+\\cos2\\theta\\ge0$ gives the de la Vallée Poussin region $\\sigma>1-c/\\log(|t|+2)$, and hence $\\psi(x)=x+O\\big(x e^{-c\\sqrt{\\log x}}\\big)$. Vinogradov–Korobov improves the exponent to $(\\log x)^{3/5}(\\log\\log x)^{-1/5}$.\n- **Dirichlet L-functions.** Characters $\\chi\\bmod q$, orthogonality, $L(s,\\chi)$ and its functional equation lead to primes in progressions. Siegel's ineffective bound $L(1,\\chi)\\gg_\\epsilon q^{-\\epsilon}$ gives Siegel–Walfisz: $\\psi(x;q,a)=\\frac{x}{\\varphi(q)}+O_A\\big(x(\\log x)^{-A}\\big)$ uniformly for $q\\le(\\log x)^A$.\n- **Large sieve and Bombieri–Vinogradov.** $\\sum_{q\\le Q}\\frac{q}{\\varphi(q)}\\sum_{\\chi}^{*}\\big|\\sum_{n\\le N}a_n\\chi(n)\\big|^2\\le(N+Q^2)\\sum|a_n|^2$. This yields level of distribution $1/2$ on average over moduli: $\\sum_{q\\le x^{1/2}(\\log x)^{-B}}\\max_{(a,q)=1}\\big|\\psi(x;q,a)-\\frac{x}{\\varphi(q)}\\big|\\ll_A x(\\log x)^{-A}$. Elliott–Halberstam conjectures any level $\\theta<1$.\n- **Mean values and zero density.** $\\int_0^T\\big|\\sum_{n\\le N}a_n n^{-it}\\big|^2dt=(T+O(N))\\sum|a_n|^2$. Large-value estimates for Dirichlet polynomials give $N(\\sigma,T)\\ll T^{A(1-\\sigma)+\\epsilon}$, with $A=3$ (Ingham), $12/5$ (Huxley) and $30/13$ (Guth–Maynard). The density hypothesis is $A=2$.\n- **Sieves and parity.** Brun's sieve, Selberg's $\\Lambda^2$ sieve and the fundamental lemma are the basic tools. Selberg's parity barrier says that sieve weights alone cannot tell integers with an even number of prime factors from those with an odd number. Producing primes therefore needs extra bilinear (Type II) input.\n\n## Techniques to master\n\nComplex analysis (Hadamard factorization, Jensen's formula, Borel–Carathéodory, contour shifting), partial summation, Gauss sums, the approximate functional equation, Vaughan's and Heath-Brown's identities, the van der Corput and Weyl differencing bounds for exponential sums, and the duality principle behind the large sieve.\n\n## Standard references / Reading path\n\nPrerequisites are graduate complex analysis and Fourier analysis on $\\mathbb{R}$ and $\\mathbb{Z}/q\\mathbb{Z}$ (see the harmonic analysis entry). Read Davenport, *Multiplicative Number Theory* (GTM 74), for the classical core; then Montgomery–Vaughan, *Multiplicative Number Theory I*, for elementary and analytic methods side by side; Titchmarsh, *The Theory of the Riemann Zeta-Function*, for $\\zeta$ itself; and Iwaniec–Kowalski, *Analytic Number Theory* (AMS Colloquium 53), for sieves, exponential sums and automorphic methods.\n\n## Where it bites\n\n- The **Riemann Hypothesis** is equivalent to $\\psi(x)=x+O(x^{1/2+\\epsilon})$, through the explicit formula.\n- The **zero-density problem beyond Guth–Maynard** asks to lower $30/13$ toward $2$. The bottleneck is how often Dirichlet polynomials of length $N$ reach values near $N^{3/4}$.\n- The **Lindelöf exponent** problem asks to improve Bourgain's $\\mu(1/2)\\le13/84$ over convexity.\n- **Bounded prime gaps** use Bombieri–Vinogradov, or Zhang's extension of it to smooth moduli, together with Maynard–Tao weights. The parity barrier is why sieves stop short of twin primes.\n- **Chowla's conjecture** for the Liouville function $\\lambda$ remains open for even orders $k\\ge4$, even with logarithmic averaging. Tao's entropy-decrement argument and the Matomäki–Radziwiłł short-interval theorem are the entry points.\n- **Birch–Swinnerton-Dyer** concerns the order of vanishing of $L(E,s)$ at $s=1$. Studying it requires analytic continuation by modularity, functional equations and explicit formulae for $L(E,s)$."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Whole numbers look like a topic for counting, not for calculus. But the primes, the numbers divisible only by 1 and themselves, are strangely irregular, and counting them exactly is very hard. Analytic number theory gets a grip by turning the problem into a smooth one.

The trick is to bundle a whole sequence of numbers into one function, a bit like storing a song as a single wave instead of a list of notes. Once the sequence lives inside a function, you can use the tools for smooth functions, and in particular you can ask where the function is zero. Those zeros turn out to act like hidden notes: each one adds a small wobble to the count of primes. If you know where the zeros are, you know how large the wobbles can be.

The most famous function of this kind is the Riemann zeta function. The big open question, the Riemann Hypothesis, is about exactly where its zeros sit.

Another part of the toolkit is sieving: removing numbers that have unwanted factors, the way you strain pasta. Sieves are good at counting numbers with few prime factors, but they have a famous blind spot called the parity problem, so they cannot by themselves isolate primes.

The analogy breaks because the 'song' picture is only a picture; the real objects are complex-valued functions with precise properties. Still, it explains why a question about whole numbers ends up being a question about the zeros of a function.

# Student explanation

The central object is a **Dirichlet series** $F(s)=\sum_{n\ge1} a_n n^{-s}$, which encodes a sequence $a_n$ in a function of a complex variable $s$. The model case is the zeta function $\zeta(s)=\sum_n n^{-s}$ for $\Re s>1$. Euler noticed that unique factorization into primes gives an **Euler product** $\zeta(s)=\prod_p (1-p^{-s})^{-1}$, over all primes $p$. In words: the sum over all whole numbers equals a product over primes, and that is the bridge between the additive world of integers and the multiplicative world of primes.

Taking the logarithmic derivative of $\zeta$ produces a series whose coefficients $\Lambda(n)$ are $\log p$ at prime powers and $0$ elsewhere. So summing $\Lambda(n)$ up to $x$ (called $\psi(x)$) counts primes weighted by size. A contour-integral identity, **Perron's formula**, expresses $\psi(x)$ as an integral of $\zeta'/\zeta$ in the complex plane. Shifting the contour picks up _residues_ at the poles of $\zeta'/\zeta$, which are the zeros of $\zeta$, giving the **explicit formula**: $\psi(x)=x-\sum_\rho x^\rho/\rho+\dots$. The sum runs over the non-trivial zeros $\rho$. Each term has size about $x^{\Re\rho}$, so the farther left the zeros are, the smaller the error. That is why the real part of the zeros governs how well primes are counted.

The **functional equation** (from Poisson summation applied to a theta function) says $\zeta$ behaves symmetrically under $s\mapsto1-s$, forcing zeros to be symmetric about the line $\Re s=1/2$. The same machinery extends to **L-functions**, which twist the series by characters and detect primes in arithmetic progressions.

No one can prove the best location of the zeros, so the field proves _partial_ statements: **zero-free regions** (no zeros very near $\Re s=1$), **zero-density estimates** (few zeros far from the line), and **large sieve** inequalities that bound sums over many characters at once. These are enough to give strong unconditional results, for example primes in short intervals.

**Sieves** (Brun, Selberg and others) bound how many integers in a set survive removing small prime factors. Their built-in limit is the **parity problem**: a sieve cannot tell whether a number has an even or odd count of prime factors, so it can find numbers with at most two prime factors but not primes. Recent breakthroughs (Maynard and Tao on bounded prime gaps, Guth and Maynard on zero densities) refine both parts of the toolkit.
