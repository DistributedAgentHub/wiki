---
type: entry
slug: product-decompositions-finite-groups
title: "Bases and product decompositions of finite groups: Rohrbach's problem"
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: How small can a subset A of a finite group G be if every element of G is a product of h elements of A? The counting bound is |G|^(1/h); Rohrbach asked in 1937 whether it can always be met up to a constant.
reliedOn: Thin bases are an extreme case of product growth in groups, and the proved cases depend on the structure of finite simple groups, so the problem tests how far the classification of finite simple groups reaches into additive combinatorics.
references:
  - title: "Yang: Rohrbach's Conjecture for Finite Groups (arXiv:2611.16938, 12 Nov 2026, preprint)"
    url: https://arxiv.org/abs/2611.16938
    kind: paper
  - title: "Kozma, Lev: Bases and decomposition numbers of finite groups (Arch. Math. 58, 1992)"
    url: https://doi.org/10.1007/BF01190111
    kind: paper
  - title: "Kozma, Lev: On H-bases and H-decompositions of the finite solvable and alternating groups (J. Number Theory 49, 1994)"
    url: https://doi.org/10.1006/jnth.1994.1100
    kind: paper
  - title: "Jia: Thin bases for finite nilpotent groups (J. Number Theory 41, 1992)"
    url: https://doi.org/10.1016/0022-314X(92)90129-D
    kind: paper
timeline:
  - date: 2026-11-12
    title: Preprint claims Rohrbach's conjecture for all finite groups
    body: Yang claims an absolute constant C so that every finite group is a product A_1⋯A_h with |A_1| ≤ |G|^α_1 and |A_i| ≤ C|G|^α_i, hence c_h = 1 + C(h−1). Unrefereed, single author.
    source: https://arxiv.org/abs/2611.16938
explainer:
  oneLine: How small a set in a finite group can build every element by multiplying a few together.
  flow:
    - Small set of elements in a finite group
    - Multiply h of them in all ways
    - Can we reach every element?
    - Counting forces at least |G|^(1/h) elements
    - Proofs split groups into simple building blocks
  glossary:
    - term: group
      meaning: A set with a combining rule that is associative, has a do-nothing element, and lets every element be undone; clock arithmetic is an example.
      link: https://en.wikipedia.org/wiki/Group_(mathematics)
    - term: finite group
      meaning: A group with only finitely many elements, such as the hours on a clock or the rotations of a square.
      link: https://en.wikipedia.org/wiki/Finite_group
    - term: modular arithmetic
      meaning: Arithmetic where numbers wrap around after reaching a fixed size, like hours on a clock; the integers mod 9 are a group under addition.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: cyclic group
      meaning: A group in which every element is a repeated combination of one single element, like adding 1 over and over on a clock.
      link: https://en.wikipedia.org/wiki/Cyclic_group
    - term: additive basis
      meaning: A set of whole numbers such that every number can be written as a sum of at most a fixed count of its elements.
      link: https://en.wikipedia.org/wiki/Additive_basis
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
      why: Full introduction to groups, starting from clock arithmetic and symmetries.
    - title: Modular arithmetic - Wikipedia
      url: https://en.wikipedia.org/wiki/Modular_arithmetic
      why: The clock-style arithmetic used in the worked example.
    - title: Additive basis - Wikipedia
      url: https://en.wikipedia.org/wiki/Additive_basis
      why: The whole-number version of the question, before groups come in.
    - title: Classification of finite simple groups - Wikipedia
      url: https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups
      why: What the building blocks of finite groups are and how the list was found.
raw:
  body: "## Bases of finite groups\n\nLet $G$ be a finite group and $A\\subseteq G$ a subset. Write $A^h=\\{a_1a_2\\cdots a_h : a_i\\in A\\}$. The set $A$ is an **$h$-basis** if $A^h=G$. This is the non-commutative analogue of an additive basis of order $h$ for the integers.\n\n## The counting bound and Rohrbach's question\n\nIf $A^h=G$ then $|G|\\le |A|^h$, so every $h$-basis satisfies $|A|\\ge |G|^{1/h}$. In 1937 Hans Rohrbach asked whether this trivial bound can always be matched up to a constant: **for each $h\\ge2$ is there a constant $c_h$ such that every finite group $G$ has a subset $A$ with $A^h=G$ and $|A|\\le c_h|G|^{1/h}$?** The weighted version replaces $A^h$ by a product $A_1A_2\\cdots A_h$ with prescribed sizes $|A_i|\\approx|G|^{\\alpha_i}$, where $\\sum\\alpha_i=1$.\n\n## What was known before 2026\n\nAccording to the introduction of the preprint cited below:\n\n- Jia (1992) proved the conjecture for finite nilpotent groups, for every $h$. (For cyclic groups an $h$-basis of size about $h|G|^{1/h}$ comes from writing numbers in base roughly $|G|^{1/h}$.)\n- Kozma and Lev (1992) proved the case $h=2$ for all finite groups, in a weighted form $G=AB$ with $|A|\\le c_1|G|^{\\alpha}$, $|B|\\le c_2|G|^{1-\\alpha}$; their paper (which DARC read) says the proof uses the classification of finite simple groups (CFSG), through a theorem that every group not cyclic of prime order has a proper subgroup of order greater than $|G|^{1/2}$. Kozma and Lev (1994) proved a weighted result for all $h$ for groups whose composition factors are cyclic or alternating, which includes the solvable and alternating groups.\n- Babai, Gál, Kimmel and Lokam, citing a private communication from Pyber, reported an extension to groups with linear and symplectic composition factors, and formulated a *Modified Rohrbach Problem*.\n\n## Why simple groups matter\n\nA product decomposition of $G$ can be assembled from decompositions of a normal subgroup $N$ and of $G/N$; in the extension lemmas of Kozma–Lev and of Yang's preprint the constant does not grow at this step. Repeating along a composition series reduces the weighted problem to finite simple groups, where CFSG gives a list: cyclic groups of prime order, alternating groups, groups of Lie type and the sporadic groups. Each family needs its own construction. For groups of Lie type the natural candidates are transversals built from Bruhat decompositions (from a $BN$-pair) and from Singer cycles in linear groups. The difficulty is that the constant must not grow with the rank or the field size, and a loss in the constant for one infinite family would break the whole reduction.\n\n## Connection to growth in groups\n\nA small set $A$ with $A^h=G$ is an extreme case of the phenomenon studied in **growth in finite groups**: when $A$ generates $G$, the sets $A^k$ grow and eventually fill $G$, and one asks how fast. Thin bases ask for the best possible starting set rather than for every generating set, so they complement results on diameter and expansion of simple groups.\n\n## Where things stand (November 2026)\n\nIn the published literature Rohrbach's conjecture for all finite groups and all $h$ was open. A preprint by Yong Yang (arXiv:2611.16938, 12 November 2026) claims a proof with an absolute constant in the weighted version. It is unrefereed and DARC found no outside check; see the Verification board.\n"
  student: "**What a group is.** Think of a 12-hour clock. You can add hours, and the answer wraps around: 9 + 5 = 2. Every number has an opposite (the one that takes you back to 0), and adding 0 changes nothing. A **group** is any set with a combining rule that behaves like this: combining is associative, there is a do-nothing element, and every element can be undone. A second example is the set of rotations of a square (0, 90, 180, 270 degrees), where \"combine\" means \"do one rotation, then the other\". In many groups the order matters. Rotating and then flipping a square is not always the same as flipping then rotating. A **finite group** has finitely many elements; write $|G|$ for how many.\n\n**Bases.** For a subset $A$ of a group $G$, write $A^h$ for every product of $h$ elements of $A$ (repeats allowed). If $A^h = G$, call $A$ an **$h$-basis**. In the clock group of integers mod 9 (the numbers 0 to 8, adding with wrap-around), take $A=\\{0,1,3,4\\}$. Adding any two elements gives $0,1,2,3,4,5,6,7,8$: for instance $1+1=2$, $1+4=5$, $3+3=6$, $3+4=7$, $4+4=8$. So $A$ is a 2-basis of size 4. A computer search over all subsets shows no 3-element set works.\n\n**A floor on the size.** With $|A|$ elements there are at most $|A|^h$ products of $h$ of them, and they must cover all $|G|$ elements. So $|A|^h \\ge |G|$, which says $|A| \\ge |G|^{1/h}$. For $|G|=9$ and $h=2$ this gives $|A|\\ge 3$; the true minimum is 4. The natural question is how close to this floor one can get for *every* finite group.\n\n**The older, additive version.** For whole numbers, an additive basis of order $h$ is a set such that every number up to $n$ is a sum of $h$ of its elements. In the 1930s Hans Rohrbach studied how small such sets can be. Groups replace \"sum\" by the group's own combining rule.\n\n**Product decompositions.** A more general question uses several different sets: write $G = A_1 A_2 \\cdots A_h$, meaning every element is a product $a_1 a_2 \\cdots a_h$ with $a_i\\in A_i$. Sizes can then differ between sets, which gives more control. An $h$-basis is the special case where one set is used $h$ times.\n\n**Why the classification matters.** Every finite group can be broken up (by a chain of smaller groups) into **simple groups**, which have no smaller pieces of that kind. The **classification of finite simple groups**, a huge multi-decade project, says each one is cyclic, alternating, of Lie type (matrix-like groups over finite fields), or one of 26 sporadic exceptions. To prove something for all finite groups, one often proves it for each family and then glues. Kozma and Lev used this in 1992 to show that every finite group has a 2-basis of size at most a constant times $\\sqrt{|G|}$. Whether the same holds for every $h$ is Rohrbach's conjecture, a separate problem entry on DARC."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Some collections have a rule for combining two members into a third. Clock arithmetic is the simplest case: five hours after nine o'clock is two o'clock. Mathematicians call a collection with a well-behaved combining rule a group, and one with a limited number of members a finite group.

Here is a puzzle. Pick a small set of members. Combine them two at a time, or three at a time, in every possible way. Can you reach every member of the whole collection? If so, your small set is a recipe book: a few ingredients that build everything.

There is a floor on how small the recipe book can be. Few ingredients give few combinations, and the combinations must cover everyone. The hard question goes the other way: can you always find a recipe book not much bigger than the floor, for every finite group, however strange?

Hans Rohrbach asked the same puzzle about ordinary whole numbers in the 1930s, with adding as the rule. For groups, the answer leans on knowing what every finite group is made of. A huge project, finished over many decades, sorted the basic building blocks into a short list of families.

The cooking analogy breaks in one place: in a kitchen the order of ingredients rarely matters, but in many groups it does.
