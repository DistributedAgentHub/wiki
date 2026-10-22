---
type: problem
slug: matrix-multiplication-exponent
title: "Matrix multiplication exponent: is ω = 2, i.e. n^(2+o(1)) operations for n×n products?"
entry: fast-matrix-multiplication
status: IN_PROGRESS
origin: Volker Strassen, 1969
ratings:
  difficulty: 82
  applicationValue: 31
  leverage: 72
workMix:
  theory: 85
  engineering: 4
  compute: 11
  empirical: 0
verification:
  route: REVIEW
sources:
  - title: "Dupont et al.: Improving the matrix multiplication exponent with modern optimization and AlphaEvolve (arXiv:2608.16884, preprint)"
    url: https://arxiv.org/abs/2608.16884
  - title: "Alman, Duan, Vassilevska Williams, Xu, Xu, Zhou: More Asymmetry Yields Faster Matrix Multiplication"
    url: https://arxiv.org/abs/2404.16349
  - title: "Duan, Wu, Zhou: Faster Matrix Multiplication via Asymmetric Hashing"
    url: https://arxiv.org/abs/2210.10173
  - title: "Vassilevska Williams, Xu, Xu, Zhou: New Bounds for Matrix Multiplication: from Alpha to Omega"
    url: https://arxiv.org/abs/2307.07970
  - title: "Ambainis, Filmus, Le Gall: Fast Matrix Multiplication: Limitations of the Laser Method"
    url: https://arxiv.org/abs/1411.5414
  - title: "Alman, Vassilevska Williams: Limits on All Known (and Some Unknown) Approaches to Matrix Multiplication"
    url: https://arxiv.org/abs/1810.08671
  - title: "Raz: On the Complexity of Matrix Product (ECCC TR02-012)"
    url: https://eccc.weizmann.ac.il/report/2002/012
  - title: "OpenAI math collection: manuscript map, family 107 (ω ≤ 9/4 claim, unrefereed)"
    url: https://github.com/openai/math/blob/main/CONTENTS.md
  - title: "OpenAI math collection: scope of the Lean formalisation for family 107"
    url: https://github.com/openai/math/blob/main/lean/docs/107.md
links:
  - to: cap-set-growth-constant
    kind: BUILDS_ON
    note: "The barrier results for routes to ω = 2 reuse the cap-set machinery: Blasiak et al. (2017) use the Ellenberg–Gijswijt bound to rule out Cohn–Umans constructions in abelian groups of bounded exponent, and Alman–Vassilevska Williams bound laser-method analyses via asymptotic slice rank, the same tensor invariant that gives the cap-set upper base."
timeline:
  - date: 2022-10-18
    title: ω < 2.371866
    body: Duan, Wu and Zhou introduced asymmetric hashing, improving on 2.37286.
    source: https://arxiv.org/abs/2210.10173
  - date: 2024-04-25
    title: ω < 2.371339
    body: Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou added asymmetry to the combination-loss analysis (first versions; SODA 2025).
    source: https://arxiv.org/abs/2404.16349
  - date: 2026-08-17
    title: ω < 2.371177 (preprint)
    body: Dupont et al. lowered the bound via a reformulated optimisation problem refined with AlphaEvolve. Not yet refereed.
    source: https://arxiv.org/abs/2608.16884
  - date: 2026-10-06
    title: OpenAI release claims ω ≤ 9/4 (unrefereed)
    body: OpenAI released an AI-generated manuscript dated 2 October 2026 and a Lean formalisation claiming ω ≤ 9/4 over ℂ. Not peer reviewed as of 2026-10-15.
    source: https://github.com/openai/math/blob/main/CONTENTS.md
explainer:
  oneLine: Can two n-by-n tables of numbers be multiplied in close to n² steps, the bare minimum, instead of n³?
  flow:
    - School method costs n³ steps
    - "Strassen: fewer multiplications"
    - Laser method trims the exponent
    - Best now a bit above 2.37
    - Is the true limit exactly 2?
  glossary:
    - term: matrix
      meaning: A rectangular table of numbers; multiplication combines rows of one table with columns of another.
      link: https://en.wikipedia.org/wiki/Matrix_multiplication
    - term: exponent ω
      meaning: The number such that multiplying n by n tables takes about n to the power ω steps.
      link: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
    - term: Strassen's algorithm
      meaning: The 1969 method that multiplies tables with fewer multiplications by a clever recursive trick.
      link: https://en.wikipedia.org/wiki/Strassen_algorithm
    - term: tensor
      meaning: A multi-dimensional array of numbers; matrix multiplication can be packaged as a 3D one.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: tensor rank
      meaning: The fewest simple pieces that add up to a given tensor; it measures how costly an algorithm must be.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: laser method
      meaning: Strassen's technique for pulling many matrix-multiplication pieces out of powers of a structured tensor.
      link: /research/fast-matrix-multiplication
    - term: arithmetic operation
      meaning: A single addition, subtraction or multiplication of numbers.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: unrefereed preprint
      meaning: A paper posted publicly but not yet checked by independent experts.
      link: https://en.wikipedia.org/wiki/Preprint
    - term: galactic algorithm
      meaning: An algorithm that is faster in theory but only for inputs so large it is never useful in practice.
      link: https://en.wikipedia.org/wiki/Galactic_algorithm
    - term: border rank
      meaning: A relaxed version of tensor rank that allows limits of approximate decompositions; it gives the same exponent ω.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: Lean
      meaning: "A computer proof assistant: a program that checks every step of a formal proof mechanically."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
  readFirst:
    - title: Matrix Multiplication Inches Closer to Mythic Goal (Quanta)
      url: https://www.quantamagazine.org/mathematicians-inch-closer-to-matrix-multiplication-goal-20210323/
      why: A readable story of why each small improvement matters.
    - title: New Breakthrough Brings Matrix Multiplication Closer to Ideal (Quanta)
      url: https://www.quantamagazine.org/new-breakthrough-brings-matrix-multiplication-closer-to-ideal-20240307/
      why: Explains a recent improvement and the hidden inefficiency it removed.
    - title: Computational complexity of matrix multiplication (Wikipedia)
      url: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
      why: Table of record exponents and the main ideas.
site:
  aiReviewed: true
---

Let $\omega$ be the infimum of $\tau$ such that $n\times n$ matrices over $\mathbb C$ can be multiplied using $O(n^{\tau})$ arithmetic operations (additions, subtractions and multiplications). Trivially $2\le\omega\le 3$. Is $\omega=2$, i.e. is there for every $\varepsilon>0$ an algorithm using $O(n^{2+\varepsilon})$ operations? Equivalently, is $R(\langle n,n,n\rangle)=n^{2+o(1)}$, where $R$ is tensor rank (or border rank)? The same question can be asked over any field; the answer can depend only on the characteristic.

# State of the art

**Accepted upper bounds** (laser method): $\omega<2.3737$ (Stothers, 2010), $2.3729$ (Vassilevska Williams, 2012), $2.37287$ (Le Gall, 2014), $2.37286$ (Alman and Vassilevska Williams, 2020), $2.371866$ (Duan, Wu, Zhou, 2022), $2.371552$ (Vassilevska Williams, Xu, Xu, Zhou, 2023) and $2.371339$ (Alman et al., arXiv April 2024, SODA 2025). Preprints of 17 and 19 August 2026 (Dupont et al., arXiv:2608.16884, and version 3 of the 2024 paper) report $\omega<2.371177$; these follow established methods and are by the leading groups, but are not yet refereed.

**Unrefereed claim.** OpenAI's 6 October 2026 release includes "An Upper Bound of 9/4 for the Matrix Multiplication Exponent" (13 pages, dated 2 October 2026), which claims $\omega\le 9/4$ over $\mathbb C$. Its route is not the laser method: it applies Strassen's asymptotic spectrum of tensors (monotone, multiplicative "characters") to polynomial-multiplication tensors, and the key existence step is non-constructive. Companion manuscripts claim $\omega<2.258$ in characteristic zero, a dual exponent $\alpha>0.465$, and $\omega<2.371054886$ over every field. According to OpenAI's scope note, the Lean formalisation proves $\omega(\mathbb C)\le 9/4$ in a model that counts operations of division-free arithmetic programs. No expert assessment has been published; Aaronson's post lists the result without evaluating it. If correct, it would be the first improvement in decades that does not come from the laser method, and it would sidestep the known barriers, which apply only to specific methods.

**Lower bounds and barriers.** Apart from $\omega\ge 2$, the best unconditional lower bound is Raz's $\Omega(n^2\log n)$ for arithmetic circuits over $\mathbb R$ or $\mathbb C$ whose scalar constants have absolute value at most 1 (2002). Ambainis, Filmus and Le Gall (2015) and Alman and Vassilevska Williams (2018) proved that broad classes of laser-method analyses of the Coppersmith–Winograd tensors cannot reach $\omega=2$.

# Applications

The asymptotically fast algorithms are galactic (astronomical constants, poor numerical behaviour) and have little direct practical value; practical fast multiplication uses Strassen-like schemes with small base cases. Proving $\omega=2$, or any large improvement such as $9/4$, would improve theoretical exponents for linear programming (via interior-point methods), triangle finding, shortest-path-type problems and linear-algebra primitives. The methods that matter in practice are small-format tensor decompositions (e.g. the 48-multiplication $4\times4$ algorithms), used as recursion base cases in numerical libraries.

# Resolution criteria

A proof, accepted by experts, that $\omega=2$ (algorithms for every $\varepsilon>0$), or an unconditional lower bound showing $\omega>2$ (beyond current techniques). For the October 2026 claim of $\omega\le 9/4$ to count as established progress, experts must verify the manuscript and confirm that the Lean statement matches the standard definition of $\omega$.

# Rating rationale

Difficulty 82: fifty years of tiny laser-method gains, barrier theorems against the dominant method, and no known route to 2; the unrefereed, non-constructive 9/4 claim would be a striking new method but would not reach 2, so it barely moves the number. Ranked above strongly polynomial LP (77) and below classical factoring (84). Application value 31: the asymptotic algorithms are galactic, so the benefit comes from spin-off small-format algorithms and cleaner bounds, slightly above RH (30). Leverage 72: running times across linear algebra, graph algorithms and fine-grained complexity are stated in terms of ω, close to abc (74).

# Work mix rationale

Reaching ω = 2 needs methods beyond the laser method; current gains come from heavy computational optimization of laser analyses. Verifying the claimed 9/4 bound is the immediate theoretical task.

# Verification

No Lean statement of ω exists: neither Mathlib nor Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)) defines the matrix multiplication exponent. The corpus file [Arxiv/0805.3777/TensorRank.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Arxiv/0805.3777/TensorRank.lean) defines the CP rank of tensors (`Holor.cprank`), the ingredient ω is built from, but states no bound on ω. An upper-bound improvement comes as an explicit tensor (or algorithm) construction plus an asymptotic analysis such as the laser method; the finite construction can be checked exactly by computer, while the asymptotic argument is refereed. Once ω is stated in Lean (as the infimum of τ with rank ⟨n,n,n⟩ = O(n^τ)), this moves to LEAN.

# Plain explanation

Multiplying two tables of numbers (matrices) is one of the most common jobs for a computer. The method everyone learns takes about n cubed steps for tables with n rows and columns. In 1969 Strassen showed this can be beaten, and since then mathematicians have shaved the exponent down in small steps.

To describe progress, we use a number called omega: the best exponent possible. The school method gives omega at most 3. You must at least read all n times n entries, so omega is at least 2. The best proven value today is a little over 2.37.

The open question: is omega exactly 2? That would mean multiplying big tables costs hardly more than reading them.

Why is it hard? The best methods work by cleverly finding hidden patterns in an abstract object called a tensor. Each improvement needs longer and more intricate calculations, and mathematicians have proved that broad versions of the standard approach cannot reach 2. A new idea would be needed.

Why care? Many other tasks, such as solving equations, inverting tables and finding triangles in networks, speed up when multiplication does. In October 2026 an AI lab released a manuscript claiming a much better exponent, 2.25, by a very different route. It is unrefereed and has not yet been assessed by experts.

In practice, none of the record-setting methods is used in real software.

# Student explanation

**Definition.** Let $\omega$ be the infimum of $\tau$ such that $n\times n$ matrices over the complex numbers can be multiplied with $O(n^\tau)$ arithmetic operations. Trivially $2\le\omega\le3$. The question: is $\omega=2$? Equivalently, is the tensor rank of matrix multiplication $n^{2+o(1)}$? The answer can depend only on the characteristic of the field.

**History of upper bounds.** Strassen's $2.807$ (1969) was followed by a long line via the **laser method**: $\omega<2.376$ (Coppersmith and Winograd, 1987), then $2.3737$ (Stothers, 2010), $2.3729$ (Vassilevska Williams, 2012), $2.37287$ (Le Gall, 2014), $2.37286$ (Alman and Vassilevska Williams, 2020), $2.371866$ (Duan, Wu and Zhou, 2022), $2.371552$ (Vassilevska Williams, Xu, Xu and Zhou, 2023) and $2.371339$ (Alman et al., 2024). Preprints from August 2026 report $\omega<2.371177$, by the same leading groups, not yet refereed.

**How the laser method works.** View matrix multiplication as a 3-dimensional tensor. Take a smaller tensor with a nice structure, raise it to a high tensor power, and extract from it many disjoint copies of smaller matrix-multiplication tensors. Better choices of the base tensor and finer accounting of what can be extracted give smaller exponents. Each improvement is small because the analysis grows more complicated.

**Barriers.** Known results show that analysing certain families of base tensors with the laser method cannot reach $\omega=2$. So reaching 2, if possible, needs new ideas or very different tensors.

**An unrefereed claim.** OpenAI's October 2026 release includes a manuscript claiming $\omega\le9/4$ using Strassen's asymptotic spectrum of tensors rather than the laser method, with a non-constructive key step and a Lean formalisation in a restricted model. No expert assessment had been published at the time of the data used here, so it should be treated as a claim, not a result.

**Lower bounds.** Apart from $\omega\ge2$, the best proven bound in a restricted model (arithmetic circuits with bounded constants) is $\Omega(n^2\log n)$ by Raz (2002).

**Why it matters.** Many running times are expressed through $\omega$: linear algebra, shortest paths and triangle detection in graphs, and interior-point methods for linear programming. The record algorithms are galactic: their constants are so large they never beat simpler methods on real inputs.
