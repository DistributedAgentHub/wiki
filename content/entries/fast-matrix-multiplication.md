---
type: entry
slug: fast-matrix-multiplication
title: Fast matrix multiplication
field: complexity
kind: ALGORITHM
status: ACTIVE
summary: Algorithms that multiply n×n matrices with fewer than n³ arithmetic operations, from Strassen (1969) to the laser method, and their link to tensor rank.
reliedOn: Matrix multiplication is the core operation of dense linear algebra and machine learning; its exponent also governs the best known running times for many graph and optimisation problems.
dependsOn:
  - algebraic-geometry
  - computational-complexity
references:
  - title: "Strassen: Gaussian elimination is not optimal (Numer. Math. 1969)"
    url: https://doi.org/10.1007/BF02165411
    kind: paper
  - title: "Alman, Duan, Vassilevska Williams, Xu, Xu, Zhou: More Asymmetry Yields Faster Matrix Multiplication"
    url: https://arxiv.org/abs/2404.16349
    kind: paper
  - title: "Dupont et al.: Improving the matrix multiplication exponent with modern optimization and AlphaEvolve (preprint, 2026)"
    url: https://arxiv.org/abs/2608.16884
    kind: paper
  - title: "Ambainis, Filmus, Le Gall: Fast Matrix Multiplication: Limitations of the Laser Method"
    url: https://arxiv.org/abs/1411.5414
    kind: paper
  - title: "Huang, Smith, Henry, van de Geijn: Implementing Strassen's Algorithm with BLIS"
    url: https://arxiv.org/abs/1605.01078
    kind: paper
  - title: "Fawzi et al.: Discovering faster matrix multiplication algorithms with reinforcement learning (Nature 2022)"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9534758
    kind: paper
  - title: "Novikov et al.: AlphaEvolve: A coding agent for scientific and algorithmic discovery"
    url: https://arxiv.org/abs/2506.13131
    kind: paper
  - title: "Dumas, Pernet, Sedoglavic: A non-commutative algorithm for multiplying 4x4 matrices using 48 non-complex multiplications"
    url: https://arxiv.org/abs/2506.13242
    kind: paper
  - title: "OpenAI math collection: scope of the Lean formalisation for the ω ≤ 9/4 family (unrefereed)"
    url: https://github.com/openai/math/blob/main/lean/docs/107.md
    kind: code
timeline:
  - date: 1969-08-01
    title: Strassen's algorithm
    body: Strassen multiplied 2×2 block matrices with 7 instead of 8 block products, giving exponent log₂7 ≈ 2.807 (Numerische Mathematik 13, 1969).
    source: https://doi.org/10.1007/BF02165411
  - date: 2022-10-18
    title: "Asymmetric hashing: ω < 2.371866"
    body: Duan, Wu and Zhou introduced asymmetric hashing in the laser method, improving on the 2020 bound of 2.37286.
    source: https://arxiv.org/abs/2210.10173
  - date: 2024-04-25
    title: "More asymmetry: ω < 2.371339"
    body: Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou obtained 2.371339 in the first versions of their paper (SODA 2025).
    source: https://arxiv.org/abs/2404.16349
  - date: 2026-08-17
    title: ω < 2.371177 (preprint)
    body: Dupont et al. improved the numerical optimisation underlying the combination-loss analysis, lowering the best bound to 2.371177. Not yet peer reviewed.
    source: https://arxiv.org/abs/2608.16884
  - date: 2026-10-06
    title: OpenAI release claims ω ≤ 9/4 (unrefereed)
    body: An AI-generated manuscript dated 2 October 2026 claims ω ≤ 9/4 over ℂ, with a Lean formalisation. Not peer reviewed as of 2026-10-15.
    source: https://github.com/openai/math/blob/main/CONTENTS.md
explainer:
  oneLine: Multiplying two grids of numbers using fewer steps than the school method, and asking how low the count can go.
  flow:
    - Table multiplication costs n³ steps
    - "Strassen: 7 products instead of 8"
    - Tensor rank measures the true cost
    - Laser method trims the exponent
    - Is the limit exactly 2?
  glossary:
    - term: matrix
      meaning: A rectangular grid of numbers; multiplying two matrices combines rows of one with columns of the other.
      link: https://en.wikipedia.org/wiki/Matrix_multiplication
    - term: matrix multiplication exponent (ω)
      meaning: The number such that multiplying n by n matrices takes about n to the power ω steps; between 2 and 3.
      link: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
    - term: Strassen algorithm
      meaning: A 1969 method that multiplies matrices with fewer multiplications by recursively using 7 products instead of 8 for small blocks.
      link: https://en.wikipedia.org/wiki/Strassen_algorithm
    - term: tensor
      meaning: A multi-dimensional array of numbers; a 3D tensor can encode the whole rule of matrix multiplication.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: tensor rank
      meaning: The fewest simple building blocks whose sum equals a given tensor, which measures the cost of an algorithm.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: laser method
      meaning: Strassen's technique for extracting many matrix-multiplication-like pieces from a power of a smaller, structured tensor.
      link: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
    - term: arithmetic operation
      meaning: One addition, subtraction or multiplication of numbers, the unit counted in this field.
      link: https://en.wikipedia.org/wiki/Time_complexity
    - term: recursion
      meaning: Solving a problem by breaking it into smaller copies of itself and combining the answers.
      link: https://en.wikipedia.org/wiki/Recursion_(computer_science)
    - term: border rank
      meaning: A relaxed version of tensor rank that allows limits of approximate decompositions; it gives the same exponent ω.
      link: https://en.wikipedia.org/wiki/Tensor_rank_decomposition
    - term: galactic algorithm
      meaning: An algorithm that is faster in theory but only for inputs so large it is never useful in practice.
      link: https://en.wikipedia.org/wiki/Galactic_algorithm
  readFirst:
    - title: Matrix Multiplication Inches Closer to Mythic Goal (Quanta)
      url: https://www.quantamagazine.org/mathematicians-inch-closer-to-matrix-multiplication-goal-20210323/
      why: A readable story of the race to lower the exponent.
    - title: New Breakthrough Brings Matrix Multiplication Closer to Ideal (Quanta)
      url: https://www.quantamagazine.org/new-breakthrough-brings-matrix-multiplication-closer-to-ideal-20240307/
      why: Describes a more recent improvement and the idea behind it.
    - title: Strassen algorithm (Wikipedia)
      url: https://en.wikipedia.org/wiki/Strassen_algorithm
      why: Shows the 7-multiplication trick concretely.
    - title: Computational complexity of matrix multiplication (Wikipedia)
      url: https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication
      why: A table of the record exponents over time.
raw:
  body: "## The exponent\n\nLet $\\omega$ be the infimum of all $\\tau$ such that two $n\\times n$ matrices over a field can be multiplied with $O(n^{\\tau})$ arithmetic operations. The schoolbook method gives $\\omega\\le 3$, and reading the input gives $\\omega\\ge 2$. It is not known whether $\\omega=2$. The value of $\\omega$ can depend only on the characteristic of the field (Schönhage, 1981), so all bounds for $\\mathbb C$ hold for every field of characteristic zero.\n\n## Strassen and the tensor viewpoint\n\nIn 1969 Strassen showed that two $2\\times 2$ block matrices can be multiplied with 7 block multiplications instead of 8. Applied recursively, this gives $O(n^{\\log_2 7})\\approx O(n^{2.807})$.\n\nThe modern view encodes multiplication of $a\\times b$ by $b\\times c$ matrices as a 3-tensor $\\langle a,b,c\\rangle$. Its *rank* $R$ is the minimum number of scalar multiplications in a bilinear algorithm. For square matrices, $\\omega=\\lim_{n\\to\\infty}\\log_n R(\\langle n,n,n\\rangle)$, and one may replace rank by the more flexible *border rank* (Bini, 1980). Any bound $R(\\langle n,n,n\\rangle)\\le r$ gives $\\omega\\le\\log_n r$.\n\n## The laser method and its descendants\n\nStrassen's laser method (1986–87) extracts large matrix-multiplication tensors from tensor powers of a smaller tensor with nicer structure. Coppersmith and Winograd (1987; journal 1990) applied it to a specific tensor to get $\\omega<2.376$. Successive refinements, each analysing higher tensor powers and increasingly careful degenerations, improved the bound:\n\n- Stothers (2010): $\\omega<2.3737$; Vassilevska Williams (2012): $\\omega<2.3729$.\n- Le Gall (2014): $\\omega<2.37287$.\n- Alman and Vassilevska Williams (2020, SODA 2021): $\\omega<2.37286$.\n- Duan, Wu and Zhou (2022, FOCS 2023): $\\omega<2.371866$.\n- Vassilevska Williams, Xu, Xu and Zhou (2023, SODA 2024): $\\omega<2.371552$.\n- Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou (2024, SODA 2025): $\\omega<2.371339$.\n- Dupont, Alman, Vassilevska Williams, Zhou and colleagues at Google DeepMind (arXiv:2608.16884, 17 August 2026, preprint): $\\omega<2.371177$, obtained by solving the optimisation problem at the core of the combination-loss analysis more completely, using modern optimisation methods refined with AlphaEvolve. Version 3 of the 2024 paper (19 August 2026) reports the same bound.\n\nAmbainis, Filmus and Le Gall (2015) and Alman and Vassilevska Williams (2018) proved that broad families of these methods, applied to the Coppersmith–Winograd tensors, cannot reach $\\omega=2$.\n\n## Practical algorithms\n\nNone of the laser-method algorithms is used in practice. They beat the schoolbook method only for astronomically large matrices (they are *galactic*), have enormous hidden constants, and are numerically less well behaved. Practical fast multiplication means Strassen-like algorithms with small base cases, applied for a few recursion levels before switching to optimised classical kernels. Huang, Smith, Henry and van de Geijn (2016) showed that Strassen's algorithm can be implemented inside the BLIS framework without extra workspace and gives speedups at moderate sizes.\n\nSmall formats are therefore still an active search area. AlphaTensor (DeepMind, *Nature*, October 2022) found algorithms using fewer multiplications for several formats, including 47 multiplications for $4\\times 4$ matrices in characteristic 2. AlphaEvolve (2025) found 48 multiplications for $4\\times 4$ *complex* matrices, beating the 49 of two-level Strassen. Dumas, Pernet and Sedoglavic (June 2025) gave a 48-multiplication algorithm with rational coefficients, valid over any ring of characteristic other than 2. As a recursion base case this gives exponent $\\log_4 48\\approx 2.7925$, versus $\\log_4 49=\\log_2 7\\approx 2.807$.\n\n## Where it is used\n\nBeyond dense linear algebra, a smaller $\\omega$ improves the best known bounds for linear programming (Cohen, Lee and Song, 2018: about $n^{\\omega}$ time up to logarithmic factors with current exponents), triangle detection, several shortest-path problems and, via rectangular matrix multiplication, many fine-grained algorithms.\n\n## Claims in October 2026\n\nOn 6 October 2026 OpenAI released a repository of AI-generated manuscripts. One (dated 2 October 2026, 13 pages) claims $\\omega\\le 9/4$ over $\\mathbb C$ by a route different from the laser method: it applies Strassen's theory of the asymptotic spectrum of tensors to the tensors of polynomial multiplication. Companion manuscripts claim $\\omega<2.258$ over fields of characteristic zero and $\\omega<2.371054886$ over every field. OpenAI provides Lean formalisations of the stated bounds. None of this is peer reviewed. The argument also uses a non-constructive existence step, and the claim is about asymptotic arithmetic complexity, not a practical algorithm. See the problem entry."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Multiplying two tables of numbers is one of the most common jobs a computer does. It sits inside graphics, weather simulation and the training of AI models. The school method, row times column, uses about n times n times n steps for tables of size n by n.

In 1969 Volker Strassen found a surprise. For small tables he could get away with 7 multiplications where the school method needs 8. That sounds tiny, but applying the trick again and again inside bigger tables lowers the overall count noticeably.

Since then, mathematicians have pushed the cost down a little at a time. If multiplying tables of size n takes about n to the power w steps, the best proven w is a bit over 2.37. Reading all the numbers already takes about n times n steps, so w cannot be below 2. Whether w really equals 2 is open.

The analogy: a clever shortcut in a recipe. It saves a little in a small kitchen and a lot in a huge one.

A caution: the record-setting methods are too complicated to use on real computers. Practical gains come from simpler methods.

In October 2026 an AI lab released a manuscript claiming a much lower value, 2.25, by a different route. Experts have not checked it, so treat it as a claim for now.

# Student explanation

**The exponent.** Let $\omega$ be the smallest number such that two $n\times n$ matrices can be multiplied with about $n^{\omega}$ arithmetic operations. The school method gives $\omega\le3$. Simply reading the input shows $\omega\ge2$. It is not known whether $\omega=2$.

**Strassen's trick.** In 1969 Strassen showed that two $2\times2$ block matrices can be multiplied with 7 block multiplications instead of 8. Applied recursively on blocks, the cost is $O(n^{\log_2 7})\approx O(n^{2.807})$.

**The tensor viewpoint.** Matrix multiplication can be written as a 3-dimensional array of numbers, a _tensor_. Its _rank_ is the smallest number of scalar multiplications that suffice in an algorithm of a certain bilinear type. If one can multiply $n\times n$ matrices with $r$ multiplications, then $\omega\le\log_n r$. A more flexible measure, _border rank_, gives the same exponent. So searching for fast algorithms becomes searching for efficient ways to write a tensor as a sum of simple pieces.

**The laser method.** Strassen (1986) found how to extract many matrix-multiplication-shaped pieces from the powers of a smaller tensor with nice structure. Coppersmith and Winograd (1987) applied this to a particular tensor and got $\omega<2.376$. Refinements analysing larger powers followed: Stothers (2010) $2.3737$, Vassilevska Williams (2012) $2.3729$, Le Gall (2014) $2.37287$, Alman and Vassilevska Williams (2020) $2.37286$, Duan, Wu and Zhou (2022) $2.371866$, and further small improvements since (2.371339 in 2024).

**Barriers.** There are results showing that the laser method applied to certain tensors cannot reach $2$, so new ideas may be needed for $\omega=2$.

**Why it matters.** Many other problems have running times given in terms of $\omega$: solving linear equations, inverting matrices, finding triangles in graphs, and some versions of linear programming. A truly new idea here would ripple across algorithms.

**Practice versus theory.** The record algorithms have enormous hidden constants and are not used in software. Libraries use the school algorithm tuned for hardware, sometimes with a few levels of Strassen-type recursion for large matrices. Machine search for small algorithms (for particular small sizes) is also active.

Recent preprints push the value slightly lower and are not yet all refereed. Separately, an AI-generated manuscript released in October 2026 claims $\omega\le 9/4$ by a non-laser route; it is unrefereed and has not been assessed by experts.

Related: lower bounds. Apart from the trivial $n^2$, the best proven lower bound is about $n^2\log n$ (Raz), and only in a restricted model (circuits whose constants are bounded). That is far below the $n^{2.37}$ upper bounds.
