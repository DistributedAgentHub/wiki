---
type: problem
slug: erdos-mahler-convergents-conjecture
title: The Erdős–Mahler conjecture on convergents with bounded prime factors
entry: diophantine-approximation-continued-fractions
status: OPEN
origin: Paul Erdős and Kurt Mahler, 1939
ratings:
  difficulty: 20
  applicationValue: 50
  leverage: 12
verification:
  route: REVIEW
sources:
  - title: "Marques: A counterexample to the Erdős–Mahler conjecture (arXiv:2611.13604, 10 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.13604
  - title: "Marques: A neighboring-denominator variant of the Erdős–Mahler conjecture (arXiv:2608.26455, preprint)"
    url: https://arxiv.org/abs/2608.26455
  - title: "Bugeaud, Nguyen: Some arithmetical properties of convergents to algebraic numbers (arXiv:2209.07485)"
    url: https://arxiv.org/abs/2209.07485
  - title: "Marques: Erdos-Mahler Lean 4 formalization repository"
    url: https://github.com/DiegoMarquesMath/Erdos-Mahler
timeline:
  - date: 2026-11-10
    title: "Marques preprint: Cantor sets of numbers with exponent τ ≥ 4 and convergents 2^a/3^b"
    body: "Marques claims a counterexample to the Erdős–Mahler conjecture: for every real τ ≥ 4 a Cantor set of numbers with irrationality exponent τ, each with infinitely many convergents of the form 2^a/3^b. Unrefereed; Lean 4 formalization linked, conditional on two cited classical theorems."
    source: https://arxiv.org/abs/2611.13604
explainer:
  oneLine: Must a number be extremely well approximated if its best fractions use few primes? A preprint claims not.
  flow:
    - Best fractions with only primes 2 and 3
    - "1939: expected to force extreme closeness"
    - Pick intervals around 2^a/3^b, two ways each time
    - Count and rule out closer rivals
    - "Preprint claims moderate closeness: conjecture fails"
  glossary:
    - term: convergent
      meaning: The fraction from stopping a continued fraction early; the best rational approximation for its denominator size.
      link: https://en.wikipedia.org/wiki/Continued_fraction
    - term: continued fraction
      meaning: A way to write a number as a whole part plus one over a whole part plus one over another, and so on.
      link: https://en.wikipedia.org/wiki/Continued_fraction
    - term: irrationality exponent
      meaning: The largest power μ such that a number is within v^(-μ) of infinitely many fractions with denominator v.
      link: https://en.wikipedia.org/wiki/Irrationality_measure
    - term: Liouville number
      meaning: "A number with infinite irrationality exponent: fractions approximate it better than any power of the denominator."
      link: https://en.wikipedia.org/wiki/Liouville_number
    - term: largest prime factor P(m)
      meaning: The biggest prime that divides m; for example P(12) = 3 and P(99) = 11.
      link: https://en.wikipedia.org/wiki/Smooth_number
    - term: Cantor set
      meaning: A set built by repeatedly splitting intervals into two smaller ones and continuing forever; uncountable but with no length.
      link: https://en.wikipedia.org/wiki/Cantor_set
    - term: Roth's theorem
      meaning: Every irrational algebraic number has irrationality exponent exactly 2.
      link: https://en.wikipedia.org/wiki/Roth%27s_theorem
    - term: subspace theorem
      meaning: Schmidt's theorem that whole-number points where a product of linear forms is small lie in finitely many flat subspaces.
      link: https://en.wikipedia.org/wiki/Subspace_theorem
    - term: preprint
      meaning: A paper posted publicly before peer review; its claims have not yet been checked by independent referees.
      link: https://arxiv.org/abs/2611.13604
  readFirst:
    - title: "Wikipedia: Continued fraction"
      url: https://en.wikipedia.org/wiki/Continued_fraction
      why: How the best-approximation fractions are produced, step by step.
    - title: "Wikipedia: Irrationality measure"
      url: https://en.wikipedia.org/wiki/Irrationality_measure
      why: What the exponent measures and which numbers have which value.
    - title: "Marques: A counterexample to the Erdős–Mahler conjecture (preprint, unrefereed)"
      url: https://arxiv.org/abs/2611.13604
      why: The claimed counterexample; the introduction states the conjecture and its history.
    - title: "Bugeaud, Nguyen: Some arithmetical properties of convergents to algebraic numbers"
      url: https://arxiv.org/abs/2209.07485
      why: Earlier work on prime factors of convergents; the preprint cites its Question 4.1.
site:
  aiReviewed: true
---

For an irrational real number $\xi$ with regular continued-fraction convergents $p_n/q_n$, let $P(m)$ denote the largest prime factor of a nonzero integer $m$, with $P(\pm1)=1$. Erdős and Mahler (J. London Math. Soc. 14, 1939) proved that if $P(q_{n-1}q_nq_{n+1})$ is bounded for infinitely many $n$, then $\xi$ is a Liouville number (irrationality exponent $\mu(\xi)=\infty$). They conjectured that **if $P(p_nq_n)$ is bounded for infinitely many $n$, then $\xi$ is a Liouville number.** Equivalently: if numerators and denominators of infinitely many convergents are built from the same finite set of primes, must $\xi$ be Liouville?

# State of the art

**Open as of today.** Statement as quoted in Marques's preprint (arXiv:2611.13604), which also reports the history; DARC could not open the 1939 paper itself. By Ridout's $p$-adic form of Roth's theorem, bounded prime factors of the denominators of infinitely many convergents already force $\xi$ to be transcendental. According to that preprint's introduction, Fraenkel constructed Liouville numbers with infinitely many convergents under such restrictions; Fraenkel and Borosh obtained non-Liouville examples by allowing extra cofactors in numerators and denominators (with Hausdorff dimension zero when both cofactors are bounded); Lelis and Marques proved the conjectured conclusion under an extra spacing condition on the indices of the chosen convergents; and Bugeaud and Nguyen (Pacific J. Math. 326, 2023, Question 4.1) constructed further examples with restricted prime factors but left open whether they are Liouville. Bugeaud's 2004 book lists the conjecture as Problem 43. A separate unrefereed preprint by Marques (arXiv:2608.26455, August 2026) claims the Liouville conclusion when $P(p_nq_nq_{n+1})$ is bounded infinitely often, and gives a quantitative growth bound for $q_{n+1}$.

**A preprint claims a counterexample.** Marques (arXiv:2611.13604, v1, 10 November 2026, 15 pages) claims that for every real $\tau\ge4$ there is a Cantor set $K_\tau\subset(1,2)$ such that every $\xi\in K_\tau$ has irrationality exponent exactly $\tau$ and infinitely many convergents of the form $2^a/3^b$. Such a number has $P(p_nq_n)\le3$ infinitely often yet is not Liouville, so it would contradict the conjecture. The proof counts exceptional approximations using the $p$-adic subspace theorem, Matveev's lower bound for linear forms in logarithms, and a Plünnecke–Ruzsa-type counting argument. The paper links a Lean 4 formalization that, per its repository status page, takes the subspace theorem and Matveev's bound as explicit hypotheses. The paper's AI-use declaration says ChatGPT and Codex were used to improve exposition and to review arguments and references. The result is unrefereed and DARC found no independent expert assessment, so the problem stays OPEN.

# Applications

None foreseeable outside mathematics. The question probes how arithmetic restrictions on convergents interact with the irrationality exponent, and the methods (subspace theorem, linear forms in logarithms, Cantor-set constructions) are standard transcendence tools.

# Resolution criteria

A proof of the conjecture, or a counterexample, accepted by experts in Diophantine approximation. For the claimed counterexample this means refereed publication or independent verification of the construction, together with a formalization whose external premises (the $p$-adic subspace theorem and Matveev's bound) are discharged or checked against the published statements. A refereed paper is needed to change the status from OPEN.

# Rating rationale

Difficulty 20: open since 1939, but a complete construction with a linked Lean development is claimed, so what remains is verification; had no counterexample existed the problem would rate far higher. Application value 3: pure number theory. Leverage 12: a niche question about convergents, little else depends on it.

# Verification

Experts in Diophantine approximation referee the 15-page construction. The linked Lean 4 development (final declaration Gate16.erdos_mahler_main) takes the p-adic subspace theorem and a Matveev-type lower bound as explicit hypotheses, so a check must also compare those two hypotheses with the published theorems. A truncated numerical example (two prescribed fractions 2^a/3^b and the continued fraction of a number in the corresponding nested intervals) gives a sanity check of the convergent property.

# Plain explanation

Every number that is not a fraction can still be squeezed between fractions that get closer and closer. A method called a continued fraction picks out the best of these fractions, one after another.

Now imagine a strange restriction. Suppose the top and the bottom of those best fractions are built only from a couple of building-block numbers, say only twos and threes, like 16 over 9 or 128 over 81. Such fractions are rare, so a number that keeps finding them among its best fractions must be very special.

In 1939 Paul Erdős and Kurt Mahler guessed how special. They guessed that such a number must be extraordinarily well approximated, closer to fractions than any power of the bottom number would suggest. Numbers like that are called Liouville numbers, and they are very unusual.

In November 2026 a mathematician, Diego Marques, put online a paper that claims the guess is false. It says there are numbers, a whole fuzzy dust of them, that keep finding fractions of the form two-to-a-power over three-to-a-power among their best fractions, but are only moderately well approximated. The paper has not been peer reviewed, and other experts have not yet checked it. A computer-checked version is linked, but it relies on two big older theorems taken as given.

So the guess stays listed as open for now, with a claim under review.

The dust analogy breaks down in one place: the numbers are built on purpose, digit by digit, not found by chance.

# Student explanation

**Setting.** A real number $\xi$ has convergents $p_n/q_n$, its best rational approximations (see the topic page). Take $\sqrt2=[1;2,2,2,\dots]$: the convergents are $1$, $3/2$, $7/5$, $17/12$, $41/29$, $99/70$, and $|\sqrt2-99/70|\approx7\times10^{-5}$, below $1/70^2\approx2\times10^{-4}$. Here the primes in $p_nq_n$ keep growing (for example $99\cdot70=2\cdot3^2\cdot5\cdot7\cdot11$), which is the usual situation.

**The restriction.** Let $P(m)$ be the largest prime factor of $m$. The Erdős–Mahler conjecture (1939) says: if $P(p_nq_n)$ stays below some fixed bound for infinitely many $n$, then $\xi$ is a **Liouville number**, that is $\mu(\xi)=\infty$, where the **irrationality exponent** $\mu$ is the largest $\mu$ such that $|\xi-u/v|<v^{-\mu}$ has infinitely many solutions. Erdős and Mahler proved the analogous statement for $P(q_{n-1}q_nq_{n+1})$.

**What a convergent $2^a/3^b$ looks like.** Between 1 and 2 there is exactly one fraction $2^a/3^b$ for each $b$, such as $4/3$, $16/9$, $32/27$, $128/81$. They are sparse. As an example, $\xi=1.7780064\ldots$ has the continued fraction $[1;1,3,1,1,53,\dots]$, its convergents are $1$, $2$, $7/4$, $9/5$, $16/9$, and then comes the large $53$. So $16/9=2^4/3^2$ is a convergent of $\xi$.

**Why one expects it to be rare.** To have $2^a/3^b$ as a convergent, $\xi$ must lie within $1/9^b$ of it (and lying within $1/(2\cdot9^b)$ is enough), and many such fractions must appear, one for infinitely many $b$. Ridout's and Schlickewei's theorems already imply that such a $\xi$ is transcendental, and the subspace theorem says that other fractions cannot be much closer than the prescribed ones in a controlled way. The conjecture goes one step further and says $\mu$ must jump to infinity.

**The claimed counterexample.** In an unrefereed preprint (arXiv:2611.13604, 10 November 2026), Diego Marques claims that for every real $\tau\ge4$ there is a **Cantor set** $K_\tau\subset(1,2)$ of numbers $\xi$, each with $\mu(\xi)=\tau$ exactly and infinitely many convergents of the form $2^a/3^b$. The construction goes in stages. At stage $t$ one has a fraction $r=2^a/3^t$ and an interval just to its right, of length about $3^{-\tau t}$. Any $\xi$ in this interval has $r$ as a convergent, since its error is below $1/(2\cdot9^t)$. Inside the interval one looks for a later fraction $2^{a'}/3^{b}$ with $b\gg t$, and puts a smaller interval beside it. If there are two such choices every time, the nested intervals form a Cantor set, as when you choose left or right at each step. The hard part is to prevent other fractions with unrelated denominators from coming even closer, which would make $\mu$ bigger than $\tau$. The paper counts the bad choices and shows there are few, using the subspace theorem and a bound for linear forms in logarithms.

**Status.** The problem is listed as **open**: a preprint is not a refereed result. The author links a computer-checked Lean version, which takes two classical theorems as assumptions. The paper's declaration says ChatGPT and Codex helped with exposition and review of references.
