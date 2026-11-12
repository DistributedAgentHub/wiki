---
type: entry
slug: special-varieties-fundamental-groups
title: Special varieties and their fundamental groups
field: algebra-geometry
kind: THEORY
status: ACTIVE
summary: "Campana's special varieties are those with no map onto an orbifold of general type. They are conjectured to have tame fundamental groups: virtually abelian in the compact case, virtually nilpotent in the quasi-projective one."
reliedOn: Campana's core fibration reduces the study of compact Kähler manifolds to special ones and ones of general type, and the fundamental-group conjectures are the topological test of that picture.
dependsOn:
  - algebraic-geometry
references:
  - title: "Campana: Special varieties and classification theory (Ann. Inst. Fourier 54, 2004; arXiv:math/0110051)"
    url: https://arxiv.org/abs/math/0110051
    kind: paper
  - title: "Cadorel, Deng, Yamanoi: Hyperbolicity and fundamental groups of complex quasi-projective varieties (III): applications (arXiv:2512.20360)"
    url: https://arxiv.org/abs/2512.20360
    kind: paper
  - title: "Cao, Deng, Hacon, Păun: Two-step nilpotent monodromy of local systems on special varieties (arXiv:2603.14539)"
    url: https://arxiv.org/abs/2603.14539
    kind: paper
  - title: "OpenAI (AI-generated, not peer-reviewed): The abelianity conjecture for special compact Kähler manifolds (openai/math family 057, at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-abelianity-conjecture-for-special-compact-Kahler-manifolds-September-23-2026/paper.pdf
    kind: paper
timeline:
  - date: 2004-10-05
    title: Campana defines special varieties and conjectures almost abelian fundamental groups
    body: Campana's paper introduces special compact Kähler manifolds and the core fibration, and proposes that their fundamental groups are almost abelian. The latest arXiv version is dated October 2004.
    source: https://arxiv.org/abs/math/0110051
  - date: 2025-12-23
    title: "Cadorel–Deng–Yamanoi: virtual nilpotency of linear images"
    body: Part III of their series on hyperbolicity and fundamental groups shows the image of every linear representation of the fundamental group of a special quasi-projective variety is virtually nilpotent, and gives examples showing the abelian conjecture needs revising.
    source: https://arxiv.org/abs/2512.20360
  - date: 2026-03-15
    title: "Cao–Deng–Hacon–Păun: class at most two for linear images"
    body: The monodromy of any complex local system on a special quasi-projective variety is virtually nilpotent of class at most two, sharpening the earlier result; the paper states the two-step nilpotency conjecture for the whole fundamental group.
    source: https://arxiv.org/abs/2603.14539
explainer:
  oneLine: Special varieties are polynomial shapes that cannot be squashed onto a more rigid shape; their loop groups are expected to be simple.
  flow:
    - "Campana: slice varieties into rigid pieces"
    - "Special: no rigid quotient exists"
    - "Conjecture: loop patterns are nearly abelian"
    - Open pieces force a nilpotent step
    - "Class two: known for matrices, open in general"
  glossary:
    - term: algebraic variety
      meaning: The set of solutions of polynomial equations, such as a circle or a sphere, here over the complex numbers.
      link: https://en.wikipedia.org/wiki/Algebraic_variety
    - term: quasi-projective variety
      meaning: A projective variety with a closed subset removed, for example the plane with a line deleted.
      link: https://en.wikipedia.org/wiki/Quasi-projective_variety
    - term: fibration
      meaning: A map from a space onto a smaller base whose preimages of points, the fibres, look alike or nearly so.
      link: https://en.wikipedia.org/wiki/Fibration
    - term: general type
      meaning: A variety with so many differential forms that it is geometrically rigid, the opposite extreme from a rational curve.
      link: https://en.wikipedia.org/wiki/Variety_of_general_type
    - term: special variety
      meaning: A variety with no fibration onto an orbifold of general type, in Campana's sense.
      link: https://arxiv.org/abs/math/0110051
    - term: fundamental group
      meaning: The group of loops around a base point, where loops that deform into each other count as equal.
      link: https://en.wikipedia.org/wiki/Fundamental_group
    - term: abelian group
      meaning: A group in which the order of multiplication does not matter.
      link: https://en.wikipedia.org/wiki/Abelian_group
    - term: nilpotent group
      meaning: A group built from abelian layers; class two means commutators of commutators are trivial.
      link: https://en.wikipedia.org/wiki/Nilpotent_group
    - term: virtually (property)
      meaning: A group is virtually P if it has a subgroup of finite index with property P.
      link: https://en.wikipedia.org/wiki/Virtual_property
    - term: linear representation
      meaning: A way of acting by invertible matrices; the image is a group of matrices.
      link: https://en.wikipedia.org/wiki/Group_representation
    - term: Albanese map
      meaning: A canonical map from a variety to a complex torus that captures its one-dimensional loop information.
      link: https://en.wikipedia.org/wiki/Albanese_variety
  readFirst:
    - title: "Wikipedia: Fundamental group"
      url: https://en.wikipedia.org/wiki/Fundamental_group
      why: Loops, the group they form and the standard examples.
    - title: "Wikipedia: Nilpotent group"
      url: https://en.wikipedia.org/wiki/Nilpotent_group
      why: What the class of a nilpotent group means, with the Heisenberg group example.
    - title: "Campana: Special varieties and classification theory (abstract)"
      url: https://arxiv.org/abs/math/0110051
      why: The source of the definition and the abelianity conjecture, for readers ready for the research paper.
raw:
  body: "## Why \"special\" varieties\n\nA smooth complex projective variety (or compact Kähler manifold) $X$ is, roughly, either \"of general type\", where holomorphic maps and rational points are expected to be scarce, or it is built from pieces that are not. Campana's idea (*Special varieties and classification theory*, Annales de l'Institut Fourier, 2004) is to make this precise with orbifold bases. A fibration $X \\dashrightarrow Y$ has a *base orbifold*, the base $Y$ together with multiplicities recording the multiple fibres. $X$ is **special** if it admits no surjective meromorphic map onto a positive-dimensional orbifold of general type. Rational curves and elliptic curves are special, and so are rationally connected manifolds and manifolds of Kodaira dimension zero. Every compact Kähler manifold has a canonical fibration, its **core**, whose general fibres are special and whose base is conjecturally of general type. That reduces the study of arbitrary manifolds to the special ones and to those of general type.\n\nThe same definition makes sense for a smooth quasi-projective variety $U = \\bar X \\setminus D$, using a log-smooth compactification $(\\bar X, D)$, logarithmic differential forms and the log Kodaira (Iitaka) dimension of subsheaves of $\\Omega^p_{\\bar X}(\\log D)$. In this language $U$ is special when no rank-one saturated subsheaf of $\\Omega^p_{\\bar X}(\\log D)$ has Iitaka dimension $p$ (a log Bogomolov sheaf).\n\n## Fundamental groups\n\nSpecial varieties are expected to be topologically tame. **Campana's abelianity conjecture** says that the fundamental group of a special compact Kähler manifold is **virtually abelian**: it has an abelian subgroup of finite index. Campana proved the corresponding statement for the image of any finite-dimensional complex linear representation of $\\pi_1$ (Theorem 7.8 of the 2004 paper, as cited by Jiang and Li). An AI-generated, unrefereed OpenAI manuscript of 23 September 2026 claims the full conjecture in all dimensions; it has not been independently checked.\n\nThe quasi-projective case is different. Cadorel, Deng and Yamanoi (2025) showed that the abelian statement fails there: they construct special quasi-projective varieties, including a surface, whose fundamental group is nilpotent but not virtually abelian. They proposed virtual nilpotency as the replacement and proved that the image of every complex linear representation of $\\pi_1(U)$ is virtually nilpotent when $U$ is special (or h-special, a variant defined using entire curves). Cao, Deng, Hacon and Păun (2026) sharpened this: such images are virtually nilpotent of **class at most two**, meaning a finite-index subgroup $\\Gamma_0$ satisfies $[\\Gamma_0,[\\Gamma_0,\\Gamma_0]] = 1$. They conjectured the same for the whole fundamental group, not only its linear images: the **two-step nilpotency conjecture**. The examples of Cadorel, Deng and Yamanoi show that class two cannot be lowered to class one in general.\n\n## Tools\n\nThe proofs combine several strands: Hodge theory and non-abelian Hodge theory for local systems, which is why linear representations are tractable; Albanese-type maps from the variety to abelian varieties or torus bundles; good minimal models and the Iitaka fibration, which turn specialness into statements about log differential forms; and Nevanlinna theory for entire curves. A statement about all of $\\pi_1$ is harder than the linear results because a non-linear group can hide information that no matrix representation sees.\n\n## Where this sits on DARC\n\nThe entry is background for one open problem, the two-step nilpotency conjecture, together with an unrefereed 2026 preprint that claims to prove it; that preprint's AI disclosure says it was inspired by the OpenAI abelianity manuscript and uses another unrefereed OpenAI result. See the problem page for its status and the claim on the verification board."
  student: "**The setting.** A *complex algebraic variety* is the set of solutions of polynomial equations over the complex numbers. *Projective* means it is closed up and has no missing points at infinity; *quasi-projective* means it is a projective variety with some part removed, for example the plane minus a line.\n\n**Special varieties.** Campana asked when a variety can be sliced into pieces of a rigid kind. A map from $X$ onto a lower-dimensional base $Y$ is a *fibration*; the fibres are the preimages of points. Some fibres may be multiple, and Campana records these multiplicities in an *orbifold base*. If the base is of *general type* (loosely, it has many differential forms and is geometrically rigid), the fibration is a sign that $X$ has a rigid quotient. $X$ is **special** if there is no such fibration. Lines and elliptic curves (doughnut surfaces) are special.\n\n**Fundamental groups.** Pick a base point and consider loops that start and end there. Two loops are the same if one can be deformed into the other. Following one loop and then another gives a group, written $\\pi_1(X)$. For a doughnut it is $\\mathbb{Z}^2$, where order does not matter: the group is *abelian*.\n\n**The conjectures.** For compact special manifolds Campana conjectured that $\\pi_1$ is *virtually abelian*: some subgroup of finite index is abelian. The commutator of two elements $a,b$ is $[a,b]=aba^{-1}b^{-1}$, equal to 1 exactly when they commute. A group is *nilpotent of class at most two* if commutators of commutators vanish: $[a,[b,c]]=1$ for all $a,b,c$. Abelian means class at most one. A standard example of class two is the $3\\times 3$ upper triangular matrices with ones on the diagonal.\n\nWhen you remove a divisor (a curve in a surface, say), new loops appear that wind around the removed part, and the answer changes. Cadorel, Deng and Yamanoi built special examples whose group is nilpotent but not virtually abelian. They proved that any *linear representation*, i.e. any way of writing group elements as invertible matrices, has an image that is virtually nilpotent, and Cao, Deng, Hacon and Păun sharpened this to class at most two. The two-step nilpotency conjecture asks for the whole group, where non-linear behaviour is possible.\n\n**Honest status.** The linear case is proved in the cited papers. For compact Kähler manifolds, an AI-generated OpenAI manuscript (September 2026) claims Campana's abelianity conjecture in full, and a November 2026 preprint by Jiang and Li claims the quasi-projective two-step conjecture; neither is refereed."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Mathematicians study shapes cut out by polynomial equations. Some of these shapes are rigid, with few curves drawn on them. Others are flexible: you can find many curves running through them, a little like a sheet of rubber.

A French mathematician, Frédéric Campana, singled out a class he called special shapes. Roughly, a shape is special if you can never squash it down onto a rigid shape of the first kind. He conjectured that special shapes are simple in a second way too: if you walk loops around them, the pattern of those loops, called the fundamental group, is very tidy.

Think of a loop of string on a surface. On a doughnut, loops combine in a simple way: going round the hole and then the other way round gives the same result in either order. For special shapes the expectation was something very close to that.

In 2025 and 2026 researchers found that for shapes with pieces removed, the pattern can be one step more tangled than that, but not much more. The open question is whether the tangle always stops at that one step. A new preprint claims yes, but experts have not checked it yet.
