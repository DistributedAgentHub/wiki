---
type: entry
slug: mathlib-algebraic-hierarchy
title: Mathlib's algebraic and order hierarchy
field: formal-proof
kind: LIBRARY
status: ACTIVE
summary: How Mathlib organizes groups, rings, fields, orders, topologies and modules as typeclasses so that one theorem applies everywhere it is true.
reliedOn: Every definition and theorem added to Mathlib, and every formalization project built on it, must fit this hierarchy, so its design decides what can be stated cheaply and reused.
dependsOn:
  - lean-mathlib
  - lean-type-theory-kernel
references:
  - title: "The mathlib Community: The Lean mathematical library (arXiv:1910.09336)"
    url: https://arxiv.org/abs/1910.09336
    kind: paper
  - title: "Baanen: Use and abuse of instance parameters in the Lean mathematical library (arXiv:2202.01629)"
    url: https://arxiv.org/abs/2202.01629
    kind: paper
  - title: "Mathlib documentation: Algebra.Ring.Defs"
    url: https://leanprover-community.github.io/mathlib4_docs/Mathlib/Algebra/Ring/Defs.html
    kind: docs
  - title: Mathlib statistics
    url: https://leanprover-community.github.io/mathlib_stats.html
    kind: docs
timeline:
  - date: 2019-10-01
    title: Mathlib community paper
    body: The Lean mathematical library is described in a CPP 2020 paper (arXiv, October 2019), including its approach to the algebraic hierarchy.
    source: https://arxiv.org/abs/1910.09336
  - date: 2022-02-01
    title: Instance-parameter design written up
    body: Baanen documents the typeclass design choices and pitfalls of the Lean 3 to Lean 4 era library (arXiv, February 2022).
    source: https://arxiv.org/abs/2202.01629
  - date: 2023-07-17
    title: Mathlib port to Lean 4 completed
    body: The hierarchy was ported to Lean 4 with its design largely intact; development continues in mathlib4.
    source: https://github.com/leanprover-community/mathlib4
explainer:
  oneLine: How Mathlib arranges groups, rings and fields so one proof works for all of them.
  flow:
    - Write each rule family once
    - Extend families like a family tree
    - Lean finds the right instance
    - One proof serves every example
  glossary:
    - term: typeclass
      meaning: A named bundle of operations and laws that a type can satisfy, used by Lean to reuse theorems.
      link: https://lean-lang.org/doc/reference/latest/
    - term: instance
      meaning: A proof that a particular type satisfies a typeclass, which Lean finds on its own.
      link: https://lean-lang.org/doc/reference/latest/
    - term: group
      meaning: A set with an operation that has an identity and inverses, such as the integers under addition.
      link: https://en.wikipedia.org/wiki/Group_(mathematics)
    - term: ring
      meaning: A set where you can add, subtract and multiply, such as the integers or polynomials.
      link: https://en.wikipedia.org/wiki/Ring_(mathematics)
    - term: field
      meaning: A ring where every nonzero element can be divided by, such as the rational or real numbers.
      link: https://en.wikipedia.org/wiki/Field_(mathematics)
    - term: diamond
      meaning: Two different inheritance routes to the same structure that fail to agree by definition.
      link: https://arxiv.org/abs/2202.01629
    - term: Mathlib
      meaning: The community-maintained library of formalized mathematics for Lean.
      link: /research/lean-mathlib
  readFirst:
    - title: The Lean mathematical library (paper)
      url: https://arxiv.org/abs/1910.09336
      why: A readable overview of how Mathlib is organised.
    - title: Use and abuse of instance parameters in the Lean mathematical library
      url: https://arxiv.org/abs/2202.01629
      why: The design trade-offs, explained by a maintainer.
    - title: "Mathlib documentation: Algebra.Ring.Defs"
      url: https://leanprover-community.github.io/mathlib4_docs/Mathlib/Algebra/Ring/Defs.html
      why: See the actual definitions of a ring in Lean.
site:
  published: true
  aiReviewed: true
---

## The problem it solves

Mathematics reuses structure constantly. A statement about commutative rings applies to the integers, to polynomials over a field and to continuous real functions. A library has to let one proof serve all of them without a human re-proving it each time and without the checker getting lost in the search for the right instance.

## How Mathlib does it

Mathlib encodes structures as **typeclasses**. `Group G`, `CommRing R`, `Field K`, `NormedSpace 𝕜 E` and `TopologicalSpace X` are classes, and a theorem is stated for any type with the needed instances. When a theorem about a ring is applied to the integers, Lean's instance search finds the `Ring ℤ` instance on its own. The hierarchy is deliberately layered ([Mathlib.Algebra.Group.Defs](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Algebra/Group/Defs.html), [Mathlib.Algebra.Ring.Defs](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Algebra/Ring/Defs.html), [Mathlib.Algebra.Field.Defs](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Algebra/Field/Defs.html)): a ring extends an additive commutative group and a monoid, a field extends a commutative ring, and so on.

Design points that experts argue about, and that new contributors must learn:

- **Bundled versus unbundled.** Operations such as `+` and `*` come from small classes (`Add`, `Mul`), and structures extend them. The community's account of the trade-offs is in Baanen, [Use and abuse of instance parameters in the Lean mathematical library](https://arxiv.org/abs/2202.01629).
- **Diamonds.** If two instance paths give the same structure two different ways, they must agree definitionally, or proofs break in confusing places. Much of the review of a new instance is checking that no bad diamond appears.
- **Order and topology mixed with algebra.** Ordered fields, normed spaces and topological groups combine several hierarchies, and the combination classes (for example ordered rings or topological rings) are where most of the design friction is.
- **Naming.** Strict naming conventions make lemmas findable by guessing, which in a library of this size is part of the interface.

## Why this entry is load-bearing

Projects that formalize research mathematics, such as the Fermat's Last Theorem project and the Liquid Tensor Experiment, spend a large share of their effort extending this hierarchy: Hecke algebras, deformation rings, condensed abelian groups. Tactics such as `ring` and `linarith` work by instance search on these classes. And AI provers read it: a model that proposes `exact mul_comm a b` is relying on this structure being there to find. The scale is large: the [Mathlib statistics page](https://leanprover-community.github.io/mathlib_stats.html) listed 139,391 definitions and 290,502 theorems when read on 17 October 2026.

## What to understand first

- What an instance is, and how Lean searches for one.
- Why a structure is declared as extending another rather than containing it.
- What a diamond is and why `rfl` between two instance paths matters.
- The overview in the Mathlib community paper, [The Lean mathematical library](https://arxiv.org/abs/1910.09336).

# Plain explanation

Think of a big family tree of mathematical objects. Whole numbers, fractions, polynomials and matrices all share some rules: you can add them, and adding in a different order gives the same result. A smart library does not prove that fact again for each kind of object. It states the rule once, for any object that follows the right family of rules, and then lets every member of the family use it.

Mathlib, the big shared library of Lean, is built this way. Each family, such as groups or rings or fields, is written down as a short list of rules, and one family can extend another, like a child inheriting from a parent. When you use a fact about rings on the whole numbers, Lean quietly finds the proof that the whole numbers are a ring.

The hard part is keeping the tree consistent. If two routes through the tree give the same object in two different ways, proofs can break in confusing places. The picture breaks where families overlap, for example numbers that are both ordered and fields.

# Student explanation

**Structures you already use.** The same algebra rules work for integers, real numbers, polynomials and square matrices: you can add and multiply, and $a(b+c)=ab+ac$. Mathematicians name such bundles of rules. A _group_ is a set with one operation that has an identity element, inverses and associativity (the integers under $+$, or the invertible $n\times n$ matrices under multiplication). A _ring_ has $+$ and $\times$ with the usual laws, but division may fail (integers, polynomials, square matrices). A _field_ is a ring in which every nonzero element can be divided by (rationals, reals, complex numbers).

**Typeclasses.** Mathlib, Lean's main library, encodes each bundle as a _class_: `Group G`, `CommRing R`, `Field K`. A theorem is written once for any type with the needed class, for example `theorem foo [CommRing R] (a b : R) : ...`. The square brackets hold the hypotheses on the structure. When you use the theorem on the integers, Lean searches for an _instance_, a registered proof that ℤ is a commutative ring, and fills it in. It is like duck typing in Python, except the duck must come with proofs of the laws.

**Layers.** Classes extend one another: a field extends a commutative ring, which extends a ring, which is built from an additive group and a multiplicative _monoid_ (a monoid is a group without inverses). Every theorem proved at one layer is inherited by everything above it.

**A concrete payoff.** The `ring` tactic proves $(a+b)^2=a^2+2ab+b^2$ in one line, and the same line works for integers, reals, polynomials and any commutative ring, because the tactic asks only for the class. A library without this design would need a copy of every algebra lemma for each number system, and a fix in one copy would not reach the others.

**Diamonds.** If a type reaches the same structure along two paths (say the reals as a field and as a normed space, each supplying an addition), the two versions must agree by definition, or proofs break in confusing places. Such conflicts are called _diamonds_, and spotting them is a large part of reviewing new library code.

**Why it is load-bearing.** Research formalizations such as the Fermat's Last Theorem project spend much of their effort adding classes to this hierarchy, and AI provers depend on its lemmas being findable. In October 2026 the library held about 139,000 definitions and 290,000 theorems.
