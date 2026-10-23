---
type: entry
slug: riemann-zeta-function
title: The Riemann zeta function and prime distribution
field: number-theory
kind: THEORY
status: ACTIVE
summary: The analytic function ζ(s) whose zeros encode the fluctuations in how primes are distributed; the object behind the Riemann Hypothesis and most of analytic number theory.
reliedOn: Quantitative statements about primes (the prime number theorem and its error terms, primes in short intervals and in progressions) are proved by controlling $\zeta$ and its $L$-function relatives. Sieve methods, explicit prime bounds and conditional algorithms all cite its zero-free regions and zero-density estimates.
dependsOn:
  - analytic-number-theory
references:
  - title: "Clay Mathematics Institute: The Riemann Hypothesis"
    url: https://www.claymath.org/millennium/riemann-hypothesis/
    kind: docs
  - title: "E. Bombieri, Problems of the Millennium: The Riemann Hypothesis (Clay official description)"
    url: https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf
    kind: article
  - title: D. Platt and T. Trudgian, The Riemann hypothesis is true up to 3·10^12
    url: https://arxiv.org/abs/2004.09765
    kind: paper
  - title: L. Guth and J. Maynard, New large value estimates for Dirichlet polynomials
    url: https://arxiv.org/abs/2405.20552
    kind: paper
  - title: D. Goldston, J. Pintz, C. Yıldırım, Primes in tuples I
    url: https://arxiv.org/abs/math/0508185
    kind: paper
timeline:
  - date: 1859-11-01
    title: Riemann's memoir on the number of primes below a given size
    body: Riemann continues $\zeta$ to the complex plane, derives the functional equation and the explicit formula, and states that the non-trivial zeros are very probably all on the critical line. Date given is the month of the Berlin Academy report; the day is not asserted.
    source: https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf
  - date: 2020-04-21
    title: Rigorous verification to height $3\cdot 10^{12}$
    body: Platt and Trudgian verify, with interval arithmetic, that all non-trivial zeros with imaginary part up to $3\cdot 10^{12}$ have real part $\tfrac12$ (arXiv preprint; published in the Bulletin of the LMS, 2021).
    source: https://arxiv.org/abs/2004.09765
  - date: 2024-05-31
    title: Guth and Maynard improve the zero-density exponent
    body: New large-value estimates for Dirichlet polynomials lower the zero-density exponent for $\zeta$ from $12/5$ to $30/13$, the first improvement of Huxley's 1972 estimate, and give an asymptotic for primes in short intervals $[x,x+x^{17/30+\varepsilon}]$.
    source: https://arxiv.org/abs/2405.20552
explainer:
  oneLine: A function built from all whole numbers whose zeros control how the primes are spread.
  flow:
    - Primes look irregular
    - Zeta turns primes into a smooth function
    - Its zeros add waves to the prime count
    - All zeros on one line gives smallest waves
  glossary:
    - term: prime number
      meaning: A whole number bigger than 1 divisible only by 1 and itself.
      link: https://en.wikipedia.org/wiki/Prime_number
    - term: complex number
      meaning: A number with a real part and an imaginary part, which can be drawn as a point in a plane.
      link: https://en.wikipedia.org/wiki/Complex_number
    - term: Euler product
      meaning: A formula writing a sum over all whole numbers as a product over primes.
      link: https://en.wikipedia.org/wiki/Euler_product
    - term: analytic continuation
      meaning: Extending a function from the region where its formula works to a larger region in a unique natural way.
      link: https://en.wikipedia.org/wiki/Analytic_continuation
    - term: functional equation
      meaning: A relationship between a function's values at two different inputs, here s and 1-s.
      link: https://en.wikipedia.org/wiki/Functional_equation
    - term: critical strip
      meaning: The band of the complex plane between real part 0 and 1 where all the interesting zeros lie.
      link: https://en.wikipedia.org/wiki/Riemann_zeta_function#Zeros,_the_critical_line,_and_the_Riemann_hypothesis
    - term: explicit formula
      meaning: An exact formula that writes the prime count as a main term plus a sum over zeta zeros.
      link: https://en.wikipedia.org/wiki/Explicit_formulae_(L-function)
    - term: prime number theorem
      meaning: The result that the number of primes up to x is about x divided by the natural logarithm of x.
      link: https://en.wikipedia.org/wiki/Prime_number_theorem
    - term: Riemann Hypothesis
      meaning: The conjecture that every non-trivial zero of zeta has real part one half.
      link: https://en.wikipedia.org/wiki/Riemann_hypothesis
    - term: L-function
      meaning: A zeta-like function built from a character or a more general arithmetic object.
      link: https://en.wikipedia.org/wiki/L-function
    - term: pole
      meaning: A point where a function blows up to infinity.
      link: https://en.wikipedia.org/wiki/Pole_(complex_analysis)
    - term: critical line
      meaning: The vertical line in the complex plane where the real part equals one half.
      link: https://en.wikipedia.org/wiki/Riemann_hypothesis
  readFirst:
    - title: But what is the Riemann zeta function? (3Blue1Brown)
      url: https://www.3blue1brown.com/lessons/zeta
      why: The best visual introduction to what the function is and why zeros matter.
    - title: Riemann hypothesis - Wikipedia
      url: https://en.wikipedia.org/wiki/Riemann_hypothesis
      why: Overview of the statement, evidence and consequences.
    - title: "Clay Mathematics Institute: Riemann Hypothesis"
      url: https://www.claymath.org/millennium/riemann-hypothesis/
      why: The official problem description.
    - title: Prime number theorem - Wikipedia
      url: https://en.wikipedia.org/wiki/Prime_number_theorem
      why: The result that the zeros' location already helps prove.
site:
  published: true
  aiReviewed: true
---

## The function

For $\operatorname{Re}(s)>1$ the zeta function is the Dirichlet series
$\zeta(s)=\sum_{n\ge 1} n^{-s}=\prod_{p\text{ prime}}\left(1-p^{-s}\right)^{-1}.$
The equality of the sum and the product (Euler, 1737) is unique factorization in analytic form. Riemann (1859) showed that $\zeta$ extends to a meromorphic function on $\mathbb{C}$ whose only singularity is a simple pole at $s=1$, and that it satisfies a functional equation relating $s$ and $1-s$: with $\xi(s)=\tfrac12 s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$ one has $\xi(s)=\xi(1-s)$.

The zeros of $\zeta$ come in two kinds. The "trivial" zeros are at $s=-2,-4,-6,\dots$, forced by the Gamma factor. The "non-trivial" zeros $\rho$ lie in the critical strip $0<\operatorname{Re}(s)<1$, are symmetric about the real axis and about the line $\operatorname{Re}(s)=\tfrac12$, and there are infinitely many of them.

## Why zeros control primes

Riemann's explicit formula expresses the prime-counting function through the zeros. In the Chebyshev form, for $x>1$ not a prime power,
$\psi(x)=\sum_{n\le x}\Lambda(n)=x-\sum_{\rho}\frac{x^{\rho}}{\rho}-\log 2\pi-\tfrac12\log\left(1-x^{-2}\right),$
where $\Lambda$ is the von Mangoldt function and the sum over zeros is taken symmetrically, as $\lim_{T\to\infty}\sum_{|\gamma|<T}$. Each zero $\rho=\beta+i\gamma$ contributes an oscillation of size $x^{\beta}$. The main term $x$ comes from the pole at $s=1$. Consequently the real parts of the zeros set the size of the error in the prime number theorem: the theorem itself ($\pi(x)\sim x/\log x$, Hadamard and de la Vallée Poussin, 1896) is equivalent to $\zeta(s)\neq 0$ on $\operatorname{Re}(s)=1$, and the Riemann Hypothesis (all non-trivial zeros have $\beta=\tfrac12$) is equivalent to the sharpest possible error term, $\pi(x)=\operatorname{li}(x)+O(\sqrt{x}\log x)$ (von Koch, 1901).

## What is proved unconditionally

- Zero-free regions: the classical region $\beta<1-c/\log(|\gamma|+2)$ was sharpened by Vinogradov and Korobov to roughly $1-c(\log|\gamma|)^{-2/3}(\log\log|\gamma|)^{-1/3}$. Nothing close to $\beta=\tfrac12$ is known.
- Positive proportion of zeros on the critical line: Selberg (1942); more than one third (Levinson, 1974); more than two fifths (Conrey, 1989); the current record is just over five twelfths (Pratt, Robles, Zaharescu and Zeindler, 2020).
- Zero-density estimates: bounds on $N(\sigma,T)$, the number of zeros with $\beta\ge\sigma$ and $|\gamma|\le T$. These are "RH on average" and are often sufficient for applications. Huxley's 1972 bound $N(\sigma,T)\ll T^{12(1-\sigma)/5+\varepsilon}$ stood for over fifty years until Guth and Maynard (2024) proved $N(\sigma,T)\le T^{30(1-\sigma)/13+o(1)}$.
- Numerical verification: every non-trivial zero with $|\gamma|\le 3\cdot 10^{12}$ lies on the critical line, rigorously, by interval arithmetic (Platt and Trudgian). Earlier non-rigorous computations by Gourdon (2004) checked roughly the first $10^{13}$ zeros.

## Generalizations

Dirichlet $L$-functions, Dedekind zeta functions of number fields and automorphic $L$-functions have the same structure and the same conjectural location of zeros (the Generalized Riemann Hypothesis). Over finite fields the analogue is a theorem: Weil proved it for curves (1948) and Deligne for higher-dimensional varieties (1974). That result is evidence that the phenomenon is real, but the proofs rely on cohomology and Frobenius, with no known counterpart for $\zeta$ itself.

## Uses

Beyond pure number theory, $\zeta$-based estimates feed into explicit prime bounds, error analysis in sieve theory, and conditional algorithms (for example, Miller's deterministic primality test is polynomial-time under GRH; the unconditional AKS test covers that need). Statistics of the zeros match random matrix theory (Montgomery, Odlyzko), an observation that connects the subject to quantum chaos.

# Plain explanation

Prime numbers are the atoms of whole numbers: 2, 3, 5, 7, 11 and so on, each divisible only by 1 and itself. They thin out as numbers get bigger, but not smoothly. Sometimes two primes sit side by side, and sometimes there are long empty stretches.

In 1859 Bernhard Riemann noticed that this uneven behaviour is hidden inside a single function, now called the Riemann zeta function. It starts from a simple idea: add up one over each whole number, each raised to some power. Euler had already shown that this sum can also be written using only primes. So the function is a bridge between adding up all numbers and multiplying primes.

Riemann extended the function far beyond where this simple sum works, and found that its zeros, the inputs where the function equals zero, tell you exactly how much the prime count wobbles away from a smooth average. Each zero adds one wave to the count, like each note in a chord.

The Riemann Hypothesis says all the interesting zeros lie on one straight line. If true, the waves are as small as they can be, so primes are spread as evenly as the theory allows. Computers have checked trillions of zeros and all lie on the line, yet nobody has a proof.

The chord analogy breaks in that the 'notes' are not chosen by anyone; they are forced by the numbers themselves, and why they line up is the mystery.

# Student explanation

For a complex number $s$ with real part greater than $1$, the **zeta function** is $\zeta(s)=\sum_{n\ge1} n^{-s}$. **Euler** observed that unique factorization of integers into primes turns this sum into a product over primes, $\zeta(s)=\prod_p (1-p^{-s})^{-1}$. This single identity is the link between ζ and primes: take a logarithm and the primes appear as terms.

**Riemann** showed that $\zeta$ continues to the whole complex plane, with one pole (a point where it blows up) at $s=1$, and satisfies a **functional equation** relating the values at $s$ and $1-s$. This equation forces the zeros into two types. The **trivial zeros** are at $-2,-4,-6,\dots$. The **non-trivial zeros** lie in the **critical strip** $0<\Re s<1$, in a pattern symmetric about the real axis and about the vertical line $\Re s=1/2$ (the _critical line_). There are infinitely many.

The **explicit formula** shows how the zeros govern primes. Let $\psi(x)$ be the sum of $\log p$ over prime powers up to $x$. Then, roughly,
$\psi(x)=x-\sum_\rho \frac{x^\rho}{\rho}+\text{(small terms)},$
where $\rho$ runs over the non-trivial zeros. The main term $x$ says that primes occur with density about $1/\log x$ (the **prime number theorem**). Each zero contributes an oscillation of size $x^{\Re\rho}$. The closer $\Re\rho$ is to $1$ the larger the oscillation. Knowing there are no zeros with $\Re\rho=1$ gives the prime number theorem (Hadamard and de la Vallée Poussin, 1896). Knowing every zero has $\Re\rho=1/2$ would give an error term of size about $\sqrt{x}\log x$ in the count of primes, which is essentially the best possible.

The **Riemann Hypothesis** (RH) is the statement that every non-trivial zero has real part exactly $1/2$. It is one of the Clay Millennium Prize Problems. What is known: infinitely many zeros are on the line (Hardy, 1914), a positive proportion (Selberg, 1942), and more than five twelfths (2020); numerically, all zeros up to a height of $3\cdot10^{12}$ have been rigorously checked. The best known zero-free regions shrink toward the line $\Re s=1$ as the height grows, so they fall far short of RH.

It also has natural generalizations. **Dirichlet L-functions** and other L-functions have their own versions of the hypothesis (the Generalized Riemann Hypothesis), which underlie many results about primes in progressions and some algorithms.

The entry connects with the problem pages on zero-density estimates, the Lindelöf hypothesis and the parity barrier for prime gaps, which all study partial or conditional versions of the same picture.
