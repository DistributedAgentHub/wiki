---
type: entry
slug: diophantine-approximation-continued-fractions
title: Diophantine approximation and continued fractions
field: number-theory
kind: THEORY
status: ACTIVE
summary: How well irrational numbers can be approximated by fractions. Continued-fraction convergents are the best approximations; the irrationality exponent measures how good they get, and the subspace theorem limits them.
reliedOn: Roth's and Ridout's theorems, the subspace theorem and S-unit equations underlie transcendence proofs and finiteness results across number theory. Continued fractions are the working tool for explicit approximation questions.
dependsOn:
  - analytic-number-theory
references:
  - title: "Marques: A counterexample to the Erdős–Mahler conjecture (arXiv:2611.13604, preprint)"
    url: https://arxiv.org/abs/2611.13604
    kind: paper
  - title: "Marques: A neighboring-denominator variant of the Erdős–Mahler conjecture (arXiv:2608.26455, preprint)"
    url: https://arxiv.org/abs/2608.26455
    kind: paper
  - title: "Bugeaud, Nguyen: Some arithmetical properties of convergents to algebraic numbers (arXiv:2209.07485)"
    url: https://arxiv.org/abs/2209.07485
    kind: paper
  - title: "Wikipedia: Continued fraction"
    url: https://en.wikipedia.org/wiki/Continued_fraction
    kind: article
  - title: "Wikipedia: Irrationality measure"
    url: https://en.wikipedia.org/wiki/Irrationality_measure
    kind: article
  - title: "Wikipedia: Roth's theorem"
    url: https://en.wikipedia.org/wiki/Roth%27s_theorem
    kind: article
  - title: "Wikipedia: Subspace theorem"
    url: https://en.wikipedia.org/wiki/Subspace_theorem
    kind: article
timeline:
  - date: 2026-11-10
    title: A preprint claims a counterexample to the Erdős–Mahler conjecture on convergents
    body: Marques claims, for every real τ ≥ 4, a Cantor set of numbers with irrationality exponent τ, each having infinitely many convergents of the form 2^a/3^b. Unrefereed; a Lean 4 development is linked from the paper.
    source: https://arxiv.org/abs/2611.13604
explainer:
  oneLine: How closely a number can be squeezed by fractions with small denominators, and how continued fractions find the best ones.
  flow:
    - Real numbers have fractions near them
    - Continued fractions find the best ones
    - Exponent μ says how good they get
    - Roth and Ridout cap μ for special numbers
    - "Open: which numbers sit in between"
  glossary:
    - term: continued fraction
      meaning: A way to write a number as a whole part plus one over a whole part plus one over another, and so on.
      link: https://en.wikipedia.org/wiki/Continued_fraction
    - term: convergent
      meaning: The fraction you get by stopping a continued fraction after finitely many steps; it is a best rational approximation.
      link: https://en.wikipedia.org/wiki/Continued_fraction
    - term: irrationality exponent
      meaning: The largest power μ such that a number is within v^(-μ) of infinitely many fractions with denominator v.
      link: https://en.wikipedia.org/wiki/Irrationality_measure
    - term: Liouville number
      meaning: "A number with infinite irrationality exponent: fractions approximate it better than any power of the denominator."
      link: https://en.wikipedia.org/wiki/Liouville_number
    - term: transcendental number
      meaning: A number that is not the root of any nonzero polynomial with whole-number coefficients; every Liouville number is one.
      link: https://en.wikipedia.org/wiki/Liouville_number
    - term: Roth's theorem
      meaning: Every irrational algebraic number has irrationality exponent exactly 2.
      link: https://en.wikipedia.org/wiki/Roth%27s_theorem
    - term: subspace theorem
      meaning: Schmidt's theorem that whole-number points where a product of linear forms is small lie in finitely many flat subspaces.
      link: https://en.wikipedia.org/wiki/Subspace_theorem
    - term: smooth number
      meaning: A whole number all of whose prime factors are small, or taken from a fixed finite set of primes.
      link: https://en.wikipedia.org/wiki/Smooth_number
    - term: Cantor set
      meaning: A set built by repeatedly splitting intervals and removing pieces; uncountable, but with no length.
      link: https://en.wikipedia.org/wiki/Cantor_set
    - term: Erdős–Mahler conjecture
      meaning: The 1939 conjecture that bounded prime factors of numerator times denominator of infinitely many convergents force a Liouville number.
      link: /research/diophantine-approximation-continued-fractions/questions/erdos-mahler-convergents-conjecture
  readFirst:
    - title: "Wikipedia: Continued fraction"
      url: https://en.wikipedia.org/wiki/Continued_fraction
      why: The definition, with the golden ratio as a worked example.
    - title: "Wikipedia: Irrationality measure"
      url: https://en.wikipedia.org/wiki/Irrationality_measure
      why: What the exponent means and which numbers have which value.
    - title: "Wikipedia: Liouville number"
      url: https://en.wikipedia.org/wiki/Liouville_number
      why: The first explicit transcendental numbers and why they are special.
    - title: "Wikipedia: Roth's theorem"
      url: https://en.wikipedia.org/wiki/Roth%27s_theorem
      why: The statement about algebraic numbers and how it was extended.
raw:
  student: "**Fractions as approximations.** Every real number $\\xi$ can be written as a **continued fraction**\n$$\\xi=a_0+\\cfrac{1}{a_1+\\cfrac{1}{a_2+\\cfrac{1}{a_3+\\cdots}}}$$\nwith whole numbers $a_0$ and $a_1,a_2,\\dots\\ge1$. You get the $a_i$ by repeating one step: take the whole part, subtract it, flip what is left. For $\\sqrt2$ this gives $[1;2,2,2,\\dots]$. For $\\pi$ it gives $[3;7,15,1,292,\\dots]$.\n\n**Convergents.** Stop after $a_n$ and simplify: you get a fraction $p_n/q_n$ called a **convergent**. For $\\pi$ they are $3$, $22/7$, $333/106$, $355/113$, $103993/33102$. The jump to $355/113$ is large because the next number, $292$, is large: a big $a_{n+1}$ means $p_n/q_n$ is unusually close.\n\n**Best approximations.** Two facts make convergents special. First, $|\\xi-p_n/q_n|<1/q_n^2$. Second (Legendre), if a reduced fraction $u/v$ satisfies $|\\xi-u/v|<1/(2v^2)$, then it is a convergent. So the convergents are exactly the approximations that beat the error $1/v^2$ by a factor of two.\n\n**How good can it get?** For any irrational $\\xi$ there are infinitely many fractions with error below $1/v^2$ (Dirichlet). The **irrationality exponent** $\\mu(\\xi)$ asks for the largest $\\mu$ such that error below $v^{-\\mu}$ happens infinitely often. Almost every number has $\\mu=2$. Roth's theorem (1955) says every irrational *algebraic* number has $\\mu=2$. Numbers with $\\mu=\\infty$ are **Liouville numbers**; they are approximated by fractions better than any power of the denominator, and every one is transcendental.\n\n**Prescribing the primes.** What if the fractions $p_n/q_n$ are built only from a few primes, say only 2 and 3? Ridout's extension of Roth's theorem (1958), and more generally Schmidt's **subspace theorem** with Schlickewei's $p$-adic version, limits how often fractions like $2^a/3^b$ can be close to a number. These are the tools for the problem on this site. Their consequence: if infinitely many denominators of convergents use only a fixed finite set of primes, the number is transcendental. Whether a number must be Liouville when infinitely many convergents have both numerator and denominator built from a fixed finite set of primes is the Erdős–Mahler question.\n\n**Why it matters.** The exponent $\\mu$ is the dial that separates algebraic numbers ($\\mu=2$) from Liouville numbers ($\\mu=\\infty$). Which values in between occur, and for numbers of which kind, is where the tools still have gaps."
site:
  published: true
  aiReviewed: true
---

## Continued fractions and convergents

Every real number $\xi$ has a **regular continued fraction** $\xi=a_0+\cfrac{1}{a_1+\cfrac{1}{a_2+\cdots}}$ with $a_0\in\mathbb Z$ and $a_i\ge 1$ integers. It stops after finitely many terms exactly when $\xi$ is rational. Cutting it off after $a_n$ gives the **convergents** $p_n/q_n$ in lowest terms, computed by $p_n=a_np_{n-1}+p_{n-2}$ and $q_n=a_nq_{n-1}+q_{n-2}$. They satisfy $|\xi-p_n/q_n|<1/q_n^2$, and by Legendre's criterion any reduced fraction $u/v$ with $|\xi-u/v|<1/(2v^2)$ is a convergent. Convergents are the best rational approximations in the sense that no fraction with a smaller denominator is closer to $\xi$ than a convergent is, up to the usual caveats about intermediate fractions. A very large partial quotient $a_{n+1}$ means that $p_n/q_n$ is an unusually good approximation.

## The irrationality exponent

The **irrationality exponent** $\mu(\xi)$ is the supremum of the $\mu$ for which $0<|\xi-u/v|<v^{-\mu}$ has infinitely many solutions in reduced fractions $u/v$. Dirichlet's theorem gives $\mu(\xi)\ge 2$ for every irrational $\xi$, and $\mu(\xi)=2$ for almost every real number (Lebesgue measure). A **Liouville number** is one with $\mu(\xi)=\infty$. Liouville showed in 1844 that algebraic numbers of degree $d$ cannot be approximated better than exponent $d$, and used this to write down the first explicit transcendental numbers. The set of Liouville numbers has measure zero (indeed Hausdorff dimension $0$) but is dense and uncountable.

## Roth, Ridout and the subspace theorem

Thue (1909), Siegel (1921) and finally **Roth** (1955) improved Liouville's bound: every irrational algebraic number has $\mu=2$. **Ridout** (1958) proved a $p$-adic version, in which one is allowed to also make the numerator and denominator divisible only by primes from a fixed finite set $S$ and the approximation is measured with $p$-adic absolute values. A far-reaching extension is Schmidt's **subspace theorem** (1972) and its $S$-adic form by Schlickewei (1977): integer points where a product of linearly independent linear forms is small lie in finitely many proper subspaces. It yields finiteness for the **$S$-unit equation** $x+y=1$ (solutions in numbers composed only of primes in $S$) and for many questions on fractions of the form $2^a/3^b$.

## Prescribed prime factors in convergents

A recurring question is what the arithmetic of the convergents $p_n/q_n$ tells us about $\xi$. A consequence of Ridout's theorem is that if infinitely many denominators $q_n$ have all prime factors in a fixed finite set, then $\xi$ is transcendental. Erdős and Mahler (1939) proved that if the largest prime factor of $q_{n-1}q_nq_{n+1}$ stays bounded for infinitely many $n$, then $\xi$ is a Liouville number, and conjectured the same conclusion when the largest prime factor of $p_nq_n$ stays bounded. Whether that conjecture holds is the problem treated below.

## Why it matters

The exponent $\mu$ separates the algebraic numbers ($\mu=2$) from the Liouville numbers ($\mu=\infty$), and the numbers in between are where the structure of the real line is least understood. Methods developed here (the subspace theorem, linear forms in logarithms, Cantor-set constructions with prescribed $\mu$) are standard tools in transcendence theory.

# Plain explanation

Some numbers, like one third, are fractions. Others, like the square root of two, are not. But a number that is not a fraction can still be very close to one. The decimal 3.14159 is not a fraction of small whole numbers, yet 22 over 7 is already near it.

Mathematicians ask a precise question: how close can a fraction get, if we limit how big its bottom number is? A tool called a continued fraction produces the best fractions step by step, a bit like zooming in on a map: each step gives a sharper picture.

Some numbers are hard to approximate. Others have fractions that are astonishingly close. The numbers with unbeatable fractions at every scale were the first ones ever proved to be impossible to write as the answer to a school-style equation. One famous theorem says that numbers that do come from such equations are never approximated too well.

That contrast, between numbers that are close to fractions only a little and numbers that are close to fractions extremely well, is the heart of the field. Many open questions ask which kinds of numbers can be in between.

The map analogy breaks down because there is no scale on the map: how good an approximation is depends on how large the denominator is, and that trade-off is the whole subject.
