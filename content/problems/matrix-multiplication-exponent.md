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
  - title: "OpenAI math collection: manuscript map, family 107 (ω ≤ 9/4 claim, unrefereed, at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/CONTENTS.md
  - title: "OpenAI (AI-generated, not peer-reviewed): The matrix multiplication exponent is nine fourths (24 Nov 2026, PDF at 3344da5999)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
  - title: "OpenAI: Lean formalization scope for matrix multiplication (lean/docs/107.md at 3344da5999, unreviewed)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/docs/107.md
  - title: "OpenAI: Comparator challenge MatrixExponent.lean (at 3344da5999, unreviewed)"
    url: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/lean/ComparatorChallenges/MatrixExponent.lean
  - title: "Uznański: Rectangular matrix multiplication from polynomial products (arXiv:2610.10494, unrefereed)"
    url: https://arxiv.org/abs/2610.10494
  - title: "Lü: Polynomial Separation of a Shared Tensor Leg and Matrix Multiplication in Arbitrary Characteristic (arXiv:2610.18914, unrefereed)"
    url: https://arxiv.org/abs/2610.18914
  - title: "Pass: Matrix Multiplication from Polynomial Packings: A Constructive and Elementary Proof of ω ≤ 9/4 (arXiv:2610.28627, unrefereed)"
    url: https://arxiv.org/abs/2610.28627
  - title: "Amanov, van den Berg, Zuiddam: Multiplying matrices via polynomials: exposition and barriers (arXiv:2610.30054, unrefereed)"
    url: https://arxiv.org/abs/2610.30054
  - title: "Shpilka: Exposition of OpenAI's Matrix Multiplication in Exponent 9/4 (and an explicit algorithm), ECCC TR26-281 (unrefereed)"
    url: https://eccc.weizmann.ac.il/report/2026/281/
  - title: "Li: Semidirect sums of tensors and the matrix multiplication exponent (arXiv:2611.04175; ECCC TR26-298, unrefereed)"
    url: https://arxiv.org/abs/2611.04175
  - title: "Doğan, Lysikov, Sakabe, Walter: Tensor value and the 9/4 bound for matrix multiplication (arXiv:2611.09716, unrefereed)"
    url: https://arxiv.org/abs/2611.09716
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
    title: OpenAI release claims ω ≤ 9/4 over ℂ (unrefereed)
    body: OpenAI released an AI-generated manuscript dated 2 October 2026 and an unreviewed Lean formalization claiming ω ≤ 9/4 over ℂ via Strassen's asymptotic spectrum of tensors.
    source: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf
  - date: 2026-10-20
    title: Independent preprints extend and reconstruct the ω ≤ 9/4 upper bound (unrefereed)
    body: Across October and early November 2026, independent preprints extended the 9/4 upper bound to arbitrary fields, rectangular multiplication and explicit algorithms, including Uznański (arXiv:2610.10494), Lü (arXiv:2610.18914), Pass (arXiv:2610.28627, constructive integer algorithms via polynomial packings), Amanov, van den Berg and Zuiddam (arXiv:2610.30054, arbitrary-field exposition and operational barrier), Shpilka (ECCC TR26-281, explicit algorithms), Li (arXiv:2611.04175) and Doğan, Lysikov, Sakabe and Walter (arXiv:2611.09716, via tensor value). None is yet refereed.
    source: https://arxiv.org/abs/2610.28627
  - date: 2026-11-24
    title: OpenAI release claims ω = 9/4 over every field (unrefereed)
    body: OpenAI posted the 111-page AI-generated manuscript "The matrix multiplication exponent is nine fourths" (family 379) claiming a matching lower bound of at least ⌈n^(9/4)/2⌉ nonscalar multiplication or division gates for formal arithmetic circuits and ω = 9/4 over every field, with an unreviewed Lean formalization of ω = 9/4, α = 1/2 and rectangular exponents (the finite-n gate bound remains unformalized). Not peer-reviewed.
    source: https://github.com/openai/math/blob/3344da59991ed94f9ba711217b29c1d760badfa6/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
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

**Unrefereed upper-bound claims ($\omega \le 9/4$, October–November 2026).** OpenAI's 6 October 2026 release included "An Upper Bound of 9/4 for the Matrix Multiplication Exponent" (13 pages, dated 2 October 2026, AI-generated, not peer-reviewed), claiming $\omega \le 9/4$ over $\mathbb{C}$ by applying Strassen's asymptotic spectrum of tensors to polynomial-multiplication tensors with a non-constructive existence step, alongside companions claiming $\omega < 2.258$ in characteristic zero, $\alpha > 0.465$, and $\omega < 2.371054886$ over every field; see [the October upper-bound claim](../claims/omega-nine-quarters-openai.md). Because this route does not use the laser method, the Ambainis–Filmus–Le Gall and Alman–Vassilevska Williams barriers do not apply. Between October and early November 2026, several independent research groups posted unrefereed preprints giving expositions, extensions to every field, rectangular bounds and constructive algorithms for the $9/4$ upper bound: Uznański (arXiv:2610.10494, claiming $\omega(1,k,1) \le 2$ for $k \le 1/2$ and $\alpha \ge 1/2$), Lü (arXiv:2610.18914, extending shared-leg separation to arbitrary characteristic), Pass (arXiv:2610.28627, giving a self-contained constructive argument via polynomial packings and explicit Strassen-style block-recursive algorithms multiplying $n \times n$ integer matrices in $O(n^{9/4+\gamma})$ integer operations), Amanov, van den Berg and Zuiddam (arXiv:2610.30054, extending $\omega_{\mathbb{F}} \le 9/4$ and rectangular bounds to every field and presenting an operational barrier showing those degeneration ingredients cannot beat $9/4$), Shpilka (ECCC TR26-281, giving explicit algorithms with exponent below $9/4+\varepsilon$), Li (arXiv:2611.04175 / ECCC TR26-298, formulating an untwisting lemma for semidirect sums) and Doğan, Lysikov, Sakabe and Walter (arXiv:2611.09716, giving an arbitrary-field exposition using a fractional symmetrized Coppersmith–Winograd tensor value rather than spectral points). None of these preprints is yet refereed.

**Unrefereed lower-bound claim ($\omega = 9/4$, 24 November 2026).** On 24 November 2026 OpenAI posted a 111-page AI-generated manuscript, "The matrix multiplication exponent is nine fourths" (family 379, pinned at `3344da5999`), claiming a matching lower bound over every field $F$—hence $\omega_F = 9/4$, which would refute $\omega = 2$; see [the November 24 ω = 9/4 claim](../claims/omega-equals-nine-quarters-openai-2026.md). For every $n \ge 2$ and every field $F$, Corollary 1.2 claims geometric border rank $\ge n^{9/4}$ and asymptotic rank $n^{9/4}$ for the $n \times n$ matrix multiplication tensor $T_n$ (which would also refute Strassen's conjecture on tight tensors), at least $\lceil n^{9/4} \rceil$ products for exact bilinear algorithms, and at least $\lceil n^{9/4}/2 \rceil$ nonscalar multiplication or division gates for formal arithmetic circuits. The argument specializes a hypothetical $\omega_F < 9/4$ algorithm to a finite field, uses sphere-tensor prices and fermionic contractions to compress trivalent tensor networks, and aims to derive a contradiction with a batched list-distinctness volume lower bound from companion family 379 papers. OpenAI's unreviewed Lean formalization (`ComparatorChallenges/MatrixExponent.lean`, `review.status: unchecked`, no Lean CI) states `formalOmega F 1 1 1 = 9/4`, `formalAlpha F = 1/2` and an exact rectangular exponent formula in a division-free formal-polynomial model, while `lean/docs/379.md` notes that the finite-$n$ lower bound of $\lceil n^{9/4}/2 \rceil$ nonscalar gates remains unformalized (and Corollary 1.3 of the manuscript itself states only $1/2 \le \alpha_F \le 2/3$). None of the independent October–November preprints addresses this lower bound, and no expert assessment has been published.

**Accepted lower bounds and barriers.** Apart from $\omega\ge 2$, the best accepted unconditional lower bound is Raz's $\Omega(n^2\log n)$ for arithmetic circuits over $\mathbb R$ or $\mathbb C$ whose scalar constants have absolute value at most 1 (2002); for tensor rank and border rank of $T_n$, accepted bounds are linear in $n^2$ (Bläser $5n^2/2 - 3n$; Landsberg $3n^2 - o(n^2)$ over $\mathbb{C}$; Landsberg–Michałek border rank $2n^2 - \lceil \log_2 n \rceil - 1$), which do not raise $\omega$ above $2$. Ambainis, Filmus and Le Gall (2015) and Alman and Vassilevska Williams (2018) proved that broad classes of laser-method analyses of the Coppersmith–Winograd tensors cannot reach $\omega=2$.

# Applications

The asymptotically fast algorithms are galactic (astronomical constants, poor numerical behaviour) and have little direct practical value; practical fast multiplication uses Strassen-like schemes with small base cases. Proving $\omega=2$, or establishing a large upper-bound drop such as $\omega \le 9/4$, improves theoretical exponents for linear programming (via interior-point methods), triangle finding, shortest-path-type problems and linear-algebra primitives; conversely, establishing a lower bound $\omega = 9/4$ would pin down the exact asymptotic complexity of matrix multiplication and set an unconditional ceiling on algorithms derived from it. The methods that matter in practice are small-format tensor decompositions (e.g. the 48-multiplication $4\times4$ algorithms), used as recursion base cases in numerical libraries.

# Resolution criteria

A proof, accepted by experts, that $\omega=2$ (algorithms for every $\varepsilon>0$), or an unconditional lower bound showing $\omega>2$ (beyond current accepted techniques). For the October–November 2026 upper-bound claims ($\omega \le 9/4$) to count as established progress, experts must referee OpenAI's manuscript or one of the independent constructive/arbitrary-field preprints; for OpenAI's 24 November 2026 lower-bound claim ($\omega = 9/4$) to resolve the problem negatively, experts must verify the 111-page manuscript and its companion tensor-geometry dependencies, rebuild the Lean development independently, and confirm that `formalOmega` matches the standard definition of $\omega$.

# Rating rationale

Rated against the accepted literature, not the unrefereed autumn 2026 claims. Difficulty 82: fifty years of tiny laser-method gains, barrier theorems against the dominant method, and until November 2026 no accepted lower bound above $\omega \ge 2$; neither the unrefereed $\omega \le 9/4$ upper-bound preprints nor OpenAI's unrefereed 24 November $\omega = 9/4$ lower-bound claim is counted until experts accept them. Ranked above strongly polynomial LP (77) and below classical factoring (84). Application value 31: the asymptotic algorithms are galactic, so the benefit comes from spin-off small-format algorithms and cleaner bounds, slightly above RH (30). Leverage 72: running times across linear algebra, graph algorithms and fine-grained complexity are stated in terms of ω, close to abc (74).

# Work mix rationale

Settling $\omega$ needs methods beyond the laser method; earlier gains came from heavy computational optimization of laser analyses. Verifying the independent $\omega \le 9/4$ upper-bound preprints and auditing OpenAI's 24 November 2026 $\omega = 9/4$ lower-bound manuscript and Lean formalization are the immediate theoretical tasks.

# Verification

No community-audited Lean statement of ω exists in Mathlib or Formal Conjectures (Formal Conjectures pinned at commit e754a78 (17 October 2026)): [Arxiv/0805.3777/TensorRank.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Arxiv/0805.3777/TensorRank.lean) defines CP rank (`Holor.cprank`) but states no bound on ω. OpenAI's `openai/math` repository (pinned at `3344da5999`) now supplies `ComparatorChallenges/MatrixExponent.lean` stating `formalOmega F 1 1 1 = 9/4`, `formalAlpha F = 1/2` and an exact rectangular exponent formula for division-free formal straight-line programs, but the repository has no Lean CI workflow and marks `review.status: unchecked`. Verification requires: independent expert refereeing of the upper-bound preprints and of the 24 November lower-bound manuscript (plus its companion tensor-geometry papers), a clean-machine Lean rebuild with Comparator and an independent kernel such as `nanoda`, an audit that `formalOmega` matches the standard definition of $\omega$, and reconciliation of the differences between the Lean theorems and the 111-page manuscript (which leaves the finite-$n$ $\lceil n^{9/4}/2 \rceil$ gate bound unformalized while Lean states stronger rectangular/dual equalities than Corollary 1.3).

# Plain explanation

Multiplying two tables of numbers (matrices) is one of the most common jobs for a computer. The method everyone learns takes about n cubed steps for tables with n rows and columns. In 1969 Strassen showed this can be beaten, and since then mathematicians have shaved the exponent down in small steps.

To describe progress, we use a number called omega: the best exponent possible. The school method gives omega at most 3. You must at least read all n times n entries, so omega is at least 2. The best peer-reviewed upper bound today is a little over 2.37.

The open question: is omega exactly 2? That would mean multiplying big tables costs hardly more than reading them.

Why is it hard? For decades the best methods worked by finding hidden patterns in an abstract object called a tensor, and mathematicians proved that broad versions of the standard laser approach cannot reach 2—while proving any lower bound strictly above 2 stayed completely out of reach.

Why care? Many other tasks, such as solving equations, inverting tables and finding triangles in networks, speed up when multiplication does. In October 2026 OpenAI released an AI-generated manuscript claiming a much better upper bound, 9/4 (2.25), by a very different route, and several independent researchers soon posted their own preprints extending the upper bound to all fields and turning it into explicit algorithms. On 24 November 2026 OpenAI went much further and released a 111-page AI-generated manuscript with Lean code claiming a matching lower bound—that omega is _exactly_ 9/4 over every field, which would mean omega is not 2. None of these autumn 2026 preprints has been peer-reviewed yet, and independent experts have not checked the November lower-bound claim, so the problem stays open here.

In practice, none of the record-setting methods is used in real software.

# Student explanation

**Definition.** Let $\omega$ be the infimum of $\tau$ such that $n\times n$ matrices over a field can be multiplied with $O(n^\tau)$ arithmetic operations. Trivially $2\le\omega\le3$. The question: is $\omega=2$? Equivalently, is the tensor rank of matrix multiplication $n^{2+o(1)}$? The answer can depend only on the characteristic of the field.

**History of upper bounds.** Strassen's $2.807$ (1969) was followed by a long line via the **laser method**: $\omega<2.376$ (Coppersmith and Winograd, 1987), then $2.3737$ (Stothers, 2010), $2.3729$ (Vassilevska Williams, 2012), $2.37287$ (Le Gall, 2014), $2.37286$ (Alman and Vassilevska Williams, 2020), $2.371866$ (Duan, Wu and Zhou, 2022), $2.371552$ (Vassilevska Williams, Xu, Xu and Zhou, 2023) and $2.371339$ (Alman et al., 2024; SODA 2025). Preprints from August 2026 report $\omega<2.371177$, by the same leading groups, not yet refereed.

**How the laser method works.** View matrix multiplication as a 3-dimensional tensor. Take a smaller tensor with a nice structure, raise it to a high tensor power, and extract from it many disjoint copies of smaller matrix-multiplication tensors. Better choices of the base tensor and finer accounting of what can be extracted give smaller exponents. Each improvement is small because the analysis grows more complicated.

**Barriers.** Known results show that analysing certain families of base tensors with the laser method cannot reach $\omega=2$. So reaching 2, if possible, needs new ideas or very different tensors.

**Unrefereed upper-bound claims ($\omega \le 9/4$).** OpenAI's October 2026 release included a manuscript claiming $\omega\le 9/4$ over $\mathbb{C}$ using Strassen's asymptotic spectrum of tensors applied to polynomial multiplication rather than the laser method. During October and early November 2026, several independent unrefereed preprints reconstructed, simplified and extended this upper bound to every field and to explicit algorithms—notably Rafael Pass (arXiv:2610.28627, constructive integer algorithms via polynomial packings), Amanov, van den Berg and Zuiddam (arXiv:2610.30054, arbitrary-field exposition and an operational barrier at $9/4$), Amir Shpilka (ECCC TR26-281, explicit algorithms), and Doğan, Lysikov, Sakabe and Walter (arXiv:2611.09716, via tensor value). None of these preprints is yet peer-reviewed.

**Unrefereed lower-bound claim ($\omega = 9/4$).** On 24 November 2026 OpenAI posted a 111-page AI-generated manuscript claiming the matching lower bound over every field: $\omega_F = 9/4$, with every formal arithmetic circuit for $n \times n$ matrix multiplication needing at least $\lceil n^{9/4}/2 \rceil$ nonscalar multiplication or division gates for all $n \ge 2$. The argument uses tensor-network compression aiming to derive a contradiction with a batched list-distinctness lower bound. An unreviewed Lean formalization states $\omega = 9/4$, $\alpha = 1/2$ and an exact rectangular exponent formula, while leaving the finite-$n$ gate bound unformalized. No independent expert assessment has been published, so this remains an unverified claim, not an accepted resolution.

**Accepted lower bounds.** Apart from $\omega\ge2$, the best accepted bound in a restricted model (arithmetic circuits with bounded constants) is $\Omega(n^2\log n)$ by Raz (2002).

**Why it matters.** Many running times are expressed through $\omega$: linear algebra, shortest paths and triangle detection in graphs, and interior-point methods for linear programming. The record algorithms are galactic: their constants are so large they never beat simpler methods on real inputs.
