---
type: problem
slug: rohrbach-conjecture-h-bases-finite-groups
title: "Rohrbach's conjecture: thin h-bases of finite groups"
entry: product-decompositions-finite-groups
status: OPEN
origin: Hans Rohrbach, 1937
ratings:
  difficulty: 50
  applicationValue: 3
  leverage: 25
verification:
  route: REVIEW
sources:
  - title: "Yang: Rohrbach's Conjecture for Finite Groups (arXiv:2611.16938, preprint)"
    url: https://arxiv.org/abs/2611.16938
  - title: "Kozma, Lev: Bases and decomposition numbers of finite groups (Arch. Math. 58, 1992)"
    url: https://doi.org/10.1007/BF01190111
  - title: "Kozma, Lev: On H-bases and H-decompositions of the finite solvable and alternating groups (J. Number Theory 49, 1994)"
    url: https://doi.org/10.1006/jnth.1994.1100
  - title: "Jia: Thin bases for finite nilpotent groups (J. Number Theory 41, 1992)"
    url: https://doi.org/10.1016/0022-314X(92)90129-D
timeline:
  - date: 2026-11-12
    title: "Yang preprint: a claimed proof of Rohrbach's conjecture for all finite groups"
    body: Yang claims an absolute constant C with G = A_1⋯A_h, |A_1| ≤ |G|^α_1 and |A_i| ≤ C|G|^α_i, using CFSG and reduction to simple groups. Single author, unrefereed.
    source: https://arxiv.org/abs/2611.16938
explainer:
  oneLine: Can every finite group be built from a near-minimal set? Open; one unrefereed preprint claims yes.
  flow:
    - "Counting: an h-basis needs |G|^(1/h) elements"
    - "Rohrbach 1937: constant multiple should suffice"
    - Known for h = 2 and nilpotent groups
    - Preprint claims all groups; unrefereed
    - Experts must check each simple-group case
  glossary:
    - term: group
      meaning: A set with a combining rule that is associative, has a do-nothing element, and lets every element be undone; clock arithmetic is an example.
      link: https://en.wikipedia.org/wiki/Group_(mathematics)
    - term: finite group
      meaning: A group with only finitely many elements, such as the hours on a clock or the rotations of a square.
      link: https://en.wikipedia.org/wiki/Finite_group
    - term: h-basis
      meaning: A subset A of a group such that every element of the group is a product of h elements of A.
      link: /research/product-decompositions-finite-groups
    - term: additive basis
      meaning: A set of whole numbers such that every number can be written as a sum of at most a fixed count of its elements.
      link: https://en.wikipedia.org/wiki/Additive_basis
    - term: nilpotent group
      meaning: A group built in a tightly layered way from abelian pieces; all groups with prime-power size are of this kind.
      link: https://en.wikipedia.org/wiki/Nilpotent_group
    - term: simple group
      meaning: A group with no proper nontrivial normal subgroup, so it cannot be broken into smaller groups of that kind; a basic building block.
      link: https://en.wikipedia.org/wiki/Simple_group
    - term: classification of finite simple groups
      meaning: "The theorem listing every finite simple group: cyclic, alternating, of Lie type, or one of 26 sporadic groups."
      link: https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups
    - term: alternating group
      meaning: The group of even rearrangements (permutations) of n objects; one infinite family of simple groups.
      link: https://en.wikipedia.org/wiki/Alternating_group
    - term: group of Lie type
      meaning: A finite group built from matrices with entries in a finite field; the largest family of simple groups.
      link: https://en.wikipedia.org/wiki/Group_of_Lie_type
    - term: sporadic group
      meaning: One of 26 finite simple groups that fit none of the infinite families.
      link: https://en.wikipedia.org/wiki/Sporadic_group
  readFirst:
    - title: Group (mathematics) - Wikipedia
      url: https://en.wikipedia.org/wiki/Group_(mathematics)
      why: What a group is, starting from clock arithmetic and symmetries.
    - title: Additive basis - Wikipedia
      url: https://en.wikipedia.org/wiki/Additive_basis
      why: The whole-number question that Rohrbach's conjecture mirrors.
    - title: Classification of finite simple groups - Wikipedia
      url: https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups
      why: The list of building blocks that proofs in this area lean on.
    - title: "Yang: Rohrbach's Conjecture for Finite Groups (arXiv preprint)"
      url: https://arxiv.org/abs/2611.16938
      why: The unrefereed claim; its introduction gives the history of the problem.
raw:
  student: "**The question.** In a finite group $G$ (for example the integers mod 9 with addition, or the rotations and flips of a square), a subset $A$ is an **$h$-basis** if multiplying any $h$ elements of $A$ together, repeats allowed, reaches every element: $A^h = G$. Counting gives a floor: there are at most $|A|^h$ products, so $|A| \\ge |G|^{1/h}$. **Rohrbach's conjecture** (1937) says that for each $h \\ge 2$ there is a constant $c_h$ such that every finite group has an $h$-basis with\n$$|A| \\le c_h\\,|G|^{1/h}.$$\nIn words: you can always get within a constant factor of the counting floor, and the constant depends on $h$ but never on the group.\n\n**Where it comes from.** For whole numbers, an additive basis is a set where every number is a sum of $h$ of its elements; Rohrbach studied how small these can be, and the conjecture asks the same for group products.\n\n**What is known.** Kozma and Lev proved the case $h=2$ in 1992, using the classification of finite simple groups. Jia proved all $h$ for nilpotent groups in the same year, as the new paper reports. In 1994 Kozma and Lev gave a stronger weighted result when every simple building block is cyclic or alternating. According to the same paper, Babai, Gál, Kimmel and Lokam (2003) posed a modified problem asking for one absolute constant, and reported a partial extension to groups with linear and symplectic factors, credited to Pyber as a private communication. Outside these cases the general conjecture has been open.\n\n**Why it is hard.** A finite group can be broken into simple groups, and the classification lists them: cyclic, alternating, of Lie type, and 26 sporadic ones. A proof must work for each family, and glue the pieces so constants do not blow up. The Lie-type family is the hardest because it has many subfamilies.\n\n**The new claim.** A preprint, arXiv:2611.16938, posted on 12 November 2026 by Yong Yang, claims the conjecture in a stronger weighted form. For any split of the exponent $1=\\alpha_1+\\dots+\\alpha_h$ it claims sets $A_1,\\dots,A_h$ with $G=A_1A_2\\cdots A_h$ and each $|A_i|$ at most a universal constant times $|G|^{\\alpha_i}$. Setting every $\\alpha_i=1/h$ and taking the union gives the conjecture. The strategy reduces to simple groups, then treats cyclic, alternating (via Kozma and Lev), sporadic (finitely many), and Lie-type groups in turn, the last using Bruhat decompositions, a way of cutting a matrix group into standard pieces.\n\n**Status, plainly.** The preprint is not peer-reviewed and nobody independent has reported checking it. It is 13 pages long, with eight sections and ten references, which is short for a result covering all finite groups. The author says ChatGPT was used for exploration and editing, and that he checked the final arguments himself. DARC therefore lists the conjecture as open, and the preprint as a claim under review."
site:
  aiReviewed: true
---

Rohrbach's conjecture: for every $h\ge2$ there is a constant $c_h$ such that every finite group $G$ has a subset $A\subseteq G$ with $A^h=G$ and $|A|\le c_h\,|G|^{1/h}$. Since $A^h=G$ forces $|A|\ge|G|^{1/h}$, the conjecture says the counting bound is attained up to a factor depending only on $h$. A stronger weighted form asks for $G=A_1A_2\cdots A_h$ with $|A_i|\le C|G|^{\alpha_i}$ for prescribed exponents $\alpha_i\ge0$ summing to $1$.

# State of the art

**Proved before 2026** (as summarised in Yang's preprint): the case $h=2$ for all finite groups (Kozma and Lev, 1992, using the classification of finite simple groups, which DARC confirmed in the paper itself), finite nilpotent groups for every $h$ (Jia, 1992), a weighted result for groups whose composition factors are cyclic or alternating (Kozma and Lev, 1994), and an extension to groups with linear and symplectic composition factors reported by Babai, Gál, Kimmel and Lokam as a private communication from Pyber. For Jia (1992), Kozma–Lev (1994) and Babai et al., DARC checked only bibliographic records and relies on Yang's summary.

**A 2026 preprint.** Yang (arXiv:2611.16938, v1, 12 November 2026, single author, no journal reference) claims an absolute constant $C$ such that for every finite group $G$, every $h$ and all $\alpha_1,\dots,\alpha_h\ge0$ with $\sum\alpha_i=1$, $G=A_1\cdots A_h$ with $|A_1|\le|G|^{\alpha_1}$ and $|A_i|\le C|G|^{\alpha_i}$ for $i\ge2$, which gives $c_h=1+C(h-1)$. The argument reduces along a normal series to finite simple groups and treats groups of Lie type through $BN$-pair Bruhat decompositions and Singer-cycle transversals, alternating groups through Kozma–Lev, and the finitely many sporadic groups by absorbing them into the constant; it depends on the classification. The text is short for the scope claimed (13 pages) and has ten references. Its acknowledgements say ChatGPT was used for mathematical exploration and editorial assistance and that the author checked the final arguments. It is unrefereed and no outside check was found, so the problem stays OPEN.

# Applications

None practical. A confirmed proof would show that every finite group has product-set bases as thin as counting allows, a structural statement about finite groups used mainly inside additive combinatorics and growth in groups.

# Resolution criteria

A refereed proof for all finite groups and all h ≥ 2, or independent verification by experts in finite group theory and group growth of the preprint, in particular the uniformity of the constant over infinite families of groups of Lie type. No formalization is mentioned.

# Rating rationale

Difficulty 50: open since 1937, with the cases h = 2, nilpotent, solvable and alternating groups settled and a standard reduction to finite simple groups, so a path is visible; a short single-author preprint now claims the full result, unchecked, which keeps it a little below the two-step nilpotency conjecture (55). Application value 3: no foreseeable use outside additive combinatorics. Leverage 25: a few results in the combinatorics of finite groups depend on it.

# Verification

Experts in finite group theory and product-set combinatorics referee the preprint. Key points: the reduction lemmas for products, quotients by normal subgroups and subgroups of index d (and that the constant does not accumulate along a composition series), the uniform constant for each family of groups of Lie type via BN-pair Bruhat transversals and Singer-cycle transversals including the determinant correction, the exceptional groups via a reduced word for the longest Weyl element, and the case h = 2 against Kozma and Lev (1992). A computational sanity check is to find, for small simple groups, sets A_1, A_2, A_3 of the claimed sizes with A_1A_2A_3 = G.

# Plain explanation

Take a finite collection of things that combine in pairs by a fixed rule, like the hours on a clock. Choose a few members and ask: if I combine h of them in every possible way, do I reach every member? A set that does is a recipe book for the whole collection.

Counting says the recipe book cannot be tiny. Rohrbach's conjecture, asked in 1937, says it can be nearly as small as counting allows: for each h there is one fixed number such that every finite collection has a recipe book at most that many times the minimum.

Some cases are known. Kozma and Lev proved the two-at-a-time case in 1992. Jia proved it for a well-behaved family called nilpotent groups. The general case has stayed open since 1937, because finite groups come in a huge variety and a proof must handle every family of building blocks.

On 12 November 2026 a single-author preprint on arXiv claimed to prove the conjecture, in a stronger form. A preprint is a paper posted before other experts have checked it. This one is not refereed, and nobody independent has reported checking it. It is short for such a broad claim, and the author says an AI chatbot helped with exploring ideas and editing. Treat it as a claim under review, and the problem as open.

The recipe analogy breaks in one place: order matters in many groups, and it does not in a cookbook.
