---
type: problem
slug: two-step-nilpotency-conjecture-special-varieties
title: The two-step nilpotency conjecture for special quasi-projective varieties
entry: special-varieties-fundamental-groups
status: OPEN
origin: Cao, Deng, Hacon and Păun, 2026 (arXiv:2603.14539, Conjecture 2.7), refining the virtual nilpotency conjecture of Cadorel, Deng and Yamanoi and Campana's abelianity conjecture (2004)
ratings:
  difficulty: 55
  applicationValue: 3
  leverage: 40
verification:
  route: REVIEW
sources:
  - title: "Jiang, Li: Virtual Two-Step Nilpotency of the Fundamental Groups of Special Quasi-Projective Varieties (arXiv:2611.14283, preprint)"
    url: https://arxiv.org/abs/2611.14283
  - title: "Cao, Deng, Hacon, Păun: Two-step nilpotent monodromy of local systems on special varieties (arXiv:2603.14539)"
    url: https://arxiv.org/abs/2603.14539
  - title: "Cadorel, Deng, Yamanoi: Hyperbolicity and fundamental groups of complex quasi-projective varieties (III): applications (arXiv:2512.20360)"
    url: https://arxiv.org/abs/2512.20360
  - title: "Campana: Special varieties and classification theory (arXiv:math/0110051)"
    url: https://arxiv.org/abs/math/0110051
  - title: "OpenAI (AI-generated, not peer-reviewed): The abelianity conjecture for special compact Kähler manifolds (openai/math family 057, at 1581d4c)"
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-abelianity-conjecture-for-special-compact-Kahler-manifolds-September-23-2026/paper.pdf
timeline:
  - date: 2026-11-10
    title: "Jiang–Li preprint: a claimed proof of the two-step nilpotency conjecture"
    body: Jiang and Li claim the fundamental group of every smooth connected special quasi-projective variety is virtually nilpotent of class at most two, via a canonical second Albanese map on a finite étale cover, good minimal models and meridian groups. 56 pages, unrefereed; its AI disclosure credits ChatGPT-6 Astra and two unrefereed OpenAI manuscripts.
    source: https://arxiv.org/abs/2611.14283
explainer:
  oneLine: Must the loop group of every special quasi-projective variety be almost nilpotent of class two? Known for matrix images; a preprint claims all.
  flow:
    - "Special variety: no rigid quotient"
    - "Compact case: group nearly abelian (conjecture)"
    - Removing divisors forces a nilpotent step
    - "Linear images: class two, proved"
    - "Full group: claimed, unrefereed"
  glossary:
    - term: special variety
      meaning: A variety with no fibration onto an orbifold of general type, in Campana's sense.
      link: /research/special-varieties-fundamental-groups
    - term: fundamental group
      meaning: The group of loops around a base point, where loops that deform into each other count as equal.
      link: https://en.wikipedia.org/wiki/Fundamental_group
    - term: commutator
      meaning: For group elements a and b, the element aba⁻¹b⁻¹; it is trivial exactly when a and b commute.
      link: https://en.wikipedia.org/wiki/Commutator
    - term: nilpotent group
      meaning: A group built from abelian layers; class two means commutators of commutators are trivial.
      link: https://en.wikipedia.org/wiki/Nilpotent_group
    - term: finite-index subgroup
      meaning: A subgroup such that the group is covered by finitely many translates of it; virtually P means some such subgroup has P.
      link: https://en.wikipedia.org/wiki/Index_of_a_subgroup
    - term: quasi-projective variety
      meaning: A projective variety with a closed subset removed, for example the plane with a line deleted.
      link: https://en.wikipedia.org/wiki/Quasi-projective_variety
    - term: étale cover
      meaning: A covering map between varieties that is a local isomorphism, with no branching.
      link: https://en.wikipedia.org/wiki/%C3%89tale_morphism
    - term: Albanese map
      meaning: A canonical map from a variety to a complex torus that captures its one-dimensional loop information.
      link: https://en.wikipedia.org/wiki/Albanese_variety
    - term: Iitaka dimension
      meaning: A number measuring how fast the sections of powers of a line bundle grow; maximal means the bundle is big.
      link: https://en.wikipedia.org/wiki/Iitaka_dimension
    - term: logarithmic differential form
      meaning: A differential form allowed to have simple poles along a removed divisor.
      link: https://en.wikipedia.org/wiki/Logarithmic_form
    - term: meridian
      meaning: A small loop around a removed divisor; such loops generate part of the fundamental group.
      link: https://en.wikipedia.org/wiki/Knot_group
    - term: good minimal model
      meaning: A birational model with nef canonical class whose multiples have enough sections.
      link: https://en.wikipedia.org/wiki/Minimal_model_program
  readFirst:
    - title: "Cao, Deng, Hacon, Păun: Two-step nilpotent monodromy of local systems on special varieties"
      url: https://arxiv.org/abs/2603.14539
      why: States the conjecture and proves the linear case.
    - title: "Cadorel, Deng, Yamanoi (III): applications"
      url: https://arxiv.org/abs/2512.20360
      why: The virtual nilpotency result and the examples that force revising Campana's conjecture.
    - title: "Jiang, Li: the preprint claiming the full conjecture"
      url: https://arxiv.org/abs/2611.14283
      why: The claim itself; unrefereed, and the introduction outlines the method.
raw:
  stateOfArt: "**Open as of today.** Campana's abelianity conjecture (2004) predicts that the fundamental group of a special compact Kähler manifold is virtually abelian; Campana proved the corresponding statement for the images of finite-dimensional complex linear representations (Theorem 7.8 of his 2004 paper, as cited by Jiang and Li). An AI-generated, unrefereed OpenAI manuscript of 23 September 2026 (openai/math family 057) claims the full abelianity conjecture in all dimensions; the same family includes a second OpenAI manuscript (24 September 2026) giving an independent proof of the linear class-two result of Cao, Deng, Hacon and Păun. For smooth quasi-projective varieties the abelian statement fails: Cadorel, Deng and Yamanoi (arXiv:2512.20360, final version October 2026) give special examples, including a surface, whose fundamental group is nilpotent but not virtually abelian, and prove that the image of every linear representation of the fundamental group of a special (or h-special) quasi-projective variety is virtually nilpotent. Cao, Deng, Hacon and Păun (arXiv:2603.14539, 2026) prove such images are virtually nilpotent of class at most two and state, as Conjecture 2.7, that the whole fundamental group of a smooth special quasi-projective variety is virtually nilpotent of class at most two. Class two is sharp because of the Cadorel–Deng–Yamanoi examples. Before the preprint below, the linear case was therefore known and the general fundamental group, which can be non-linear, was not controlled.\n\n**A preprint claims** (Jiang and Li, arXiv:2611.14283, 10 November 2026, 56 pages) the full conjecture: that a smooth connected complex quasi-projective special variety has a finite-index subgroup $\\Gamma_0$ of its fundamental group with $[\\Gamma_0,[\\Gamma_0,\\Gamma_0]]=1$. According to its abstract and introduction, the method builds a canonical second Albanese map on a finite étale cover, reduces to showing a certain kernel on fundamental groups is finite, and rules out an infinite kernel by producing a rank-one subsheaf of logarithmic differentials whose Iitaka dimension contradicts specialness, using good minimal models and meridian groups. Its AI disclosure says the argument was inspired by OpenAI's unrefereed abelianity manuscript, that the minimal model program step uses OpenAI's unrefereed theorem on good log minimal models (*Log abundance in characteristic zero*, 24 September 2026, Theorem 11.1), and that ChatGPT-6 Astra helped with discussion and revision, while the human authors conceived the new ideas. The preprint is unrefereed, it rests in part on an unrefereed AI-generated result, and DARC found no independent assessment, so the problem stays OPEN."
  student: "**The question.** For a smooth, connected, complex quasi-projective variety $U$ that is *special* (see the research entry), does $\\pi_1(U)$ have a finite-index subgroup $\\Gamma_0$ with $[\\Gamma_0,[\\Gamma_0,\\Gamma_0]]=1$? Here $[a,b]=aba^{-1}b^{-1}$ is the commutator, equal to $1$ if and only if $a$ and $b$ commute. The condition says that commutators are central, so $\\Gamma_0$ is *nilpotent of class at most two*.\n\n**Why two steps.** If $U$ were a compact Kähler manifold, Campana conjectured virtual abelianity: $[a,b]=1$ in a finite-index subgroup. For quasi-projective varieties, Cadorel, Deng and Yamanoi showed this cannot hold, with a special surface whose group is nilpotent and not virtually abelian. A model of a class-two group is the set of $3\\times3$ upper-triangular integer matrices with ones on the diagonal, where the commutator of two elements is not trivial but commutes with everything.\n\n**What is proved.** A *linear representation* $\\rho:\\pi_1(U)\\to GL_N(\\mathbb{C})$ assigns a matrix to each loop class. Cadorel–Deng–Yamanoi proved the image is virtually nilpotent. Cao, Deng, Hacon and Păun sharpened it to class at most two (arXiv:2603.14539, Theorem B), and conjectured the same for $\\pi_1(U)$ itself (Conjecture 2.7). The gap matters: a group can have no faithful matrix description, in which case representations may not see its structure.\n\n**The claimed route.** The preprint (arXiv:2611.14283) takes a finite étale cover (a finite covering with no branching), builds a *second Albanese map* (the first Albanese map records abelian information; the second sees the next layer of the commutator series) and reduces the claim to finiteness of a kernel of the induced map on $\\pi_1$. If the kernel were infinite, the authors say good minimal models and meridian groups, the loops around the removed divisor, give a logarithmic differential form whose Iitaka dimension contradicts specialness.\n\n**Status.** Unrefereed 56-page preprint; no independent assessment found. Its AI disclosure says the argument was inspired by an unrefereed OpenAI manuscript claiming Campana's abelianity conjecture for compact Kähler manifolds, that one step uses another unrefereed OpenAI result on minimal models, and that the AI model ChatGPT-6 Astra helped with discussion and revision. The answer on DARC remains open until specialists check it."
site:
  aiReviewed: true
---

Let $U$ be a smooth connected complex quasi-projective variety that is special in Campana's sense. Is $\pi_1(U)$ virtually nilpotent of class at most two, that is, is there a finite-index subgroup $\Gamma_0\le\pi_1(U)$ with $[\Gamma_0,[\Gamma_0,\Gamma_0]]=1$? For compact Kähler manifolds the analogous prediction is Campana's abelianity conjecture: $\pi_1$ is virtually abelian. The conjecture concerns the full fundamental group, not only the images of its linear representations, where the answer is known.

# Applications

None foreseeable outside pure mathematics. A resolution would complete the topological picture of Campana's special varieties and give a structure theorem for the fundamental groups of non-hyperbolic quasi-projective varieties.

# Resolution criteria

A proof accepted by specialists in birational geometry and fundamental groups of algebraic varieties, ideally a refereed paper, or a counterexample: a special smooth quasi-projective variety whose fundamental group is not virtually nilpotent of class at most two.

# Rating rationale

Difficulty 55: a precisely stated conjecture from 2026 with strong partial results (the linear case) and one long preprint claiming a full proof that experts have not yet checked. Application value 3: no foreseeable practical use. Leverage 40: completes the fundamental-group side of Campana's special-variety programme, one subfield of complex algebraic geometry.

# Verification

A claimed proof is a long argument in birational and complex-analytic geometry. Specialists in Campana's theory, non-abelian Hodge theory and fundamental groups of quasi-projective varieties should referee it. Concrete points to check: that the kernel of the canonical second Albanese map on the étale cover is finitely generated and FAb; the step showing an infinite kernel yields a rank-one subsheaf of logarithmic differentials with Iitaka dimension contradicting specialness, including the use of good minimal models and meridian groups; and consistency with the proven linear case (arXiv:2603.14539, Theorem B) and the Cadorel–Deng–Yamanoi examples. No machine-checkable artifact applies.

# Plain explanation

A fundamental group is a way of recording all the ways you can walk a loop in a shape and come back to where you started. Mathematicians conjecture that for a nice class of shapes, called special, these loop patterns are unusually tidy.

For closed-up shapes the guess was that the pattern is almost commutative, meaning the order of two loops hardly matters. For shapes with pieces cut out, researchers found that this is slightly too much to hope for, and the right guess is one step more relaxed: the failure of commuting is itself well behaved. That is the two-step nilpotency conjecture, stated in 2026.

The analogy: swapping two moves may give a different result, as with turning a cube, but swapping the fixes to those differences never does.

What is proved? If you describe the loops using matrices, the two-step statement is known. What nobody knew was whether loop groups that cannot be described by matrices at all could break the rule.

On 10 November 2026 two authors posted a 56-page preprint claiming to prove it in full. It has not been refereed and nobody independent has checked it. Until experts do, DARC lists this as open.

The analogy fails because real loop groups are far larger than any toy example.
