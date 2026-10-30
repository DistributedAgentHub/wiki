---
type: entry
slug: pure-semisimple-rings
title: "Pure semisimple rings: modules that are direct sums of finitely generated modules"
field: algebra-geometry
kind: THEORY
status: EMERGING
summary: A ring is right pure semisimple when every right module is a direct sum of finitely generated ones. Whether this forces finite representation type has been open for decades.
reliedOn: The conjecture ties purity and direct-sum decompositions of arbitrary modules to the classical representation type of a ring; reductions to hereditary rings and division ring extensions make it a concrete question about skew fields.
references:
  - title: "Ren: A counterexample to the pure semisimplicity conjecture (arXiv:2610.39883, preprint)"
    url: https://arxiv.org/abs/2610.39883
    kind: paper
  - title: "Ren: pure-semisimplicity-lean (Lean 4 formalization of the main theorem)"
    url: https://github.com/oasisss6666/pure-semisimplicity-lean
    kind: code
  - title: "Ren: A counterexample to the pure semisimplicity conjecture, HTML version with the introduction and bibliography"
    url: https://arxiv.org/html/2610.39883v1
    kind: paper
timeline:
  - date: 2026-10-29
    title: A preprint claims a counterexample to the pure semisimplicity conjecture
    body: Ren claims a division ring extension with right dimension sequence (1,2,2,2,...) and infinite left dimension, giving a triangular ring that is right pure semisimple but neither left pure semisimple nor of finite representation type. A Lean 4 formalization is linked; unrefereed.
    source: https://arxiv.org/abs/2610.39883
explainer:
  oneLine: Rings whose every module breaks into small pieces. Whether that forces a short list of pieces is open.
  flow:
    - Modules over a ring can be huge
    - "Pure semisimple: all break into small pieces"
    - "Conjecture: then only finitely many kinds of piece"
    - Known for Artin algebras and PI rings
    - Preprint claims a counterexample; unchecked
  glossary:
    - term: ring
      meaning: A set where you can add, subtract and multiply; the integers and square matrices are examples, and multiplication need not commute.
      link: https://en.wikipedia.org/wiki/Ring_(mathematics)
    - term: division ring
      meaning: A ring in which every nonzero element has a multiplicative inverse, so you can divide, though multiplication may not commute.
      link: https://en.wikipedia.org/wiki/Division_ring
    - term: module
      meaning: Like a vector space, but with scalars taken from a ring instead of a field such as the real numbers.
      link: https://en.wikipedia.org/wiki/Module_(mathematics)
    - term: direct sum
      meaning: Splitting an object into independent blocks so that each element is exactly one piece from each block.
      link: https://en.wikipedia.org/wiki/Direct_sum_of_modules
    - term: finitely generated
      meaning: A module in which finitely many elements are enough to build every other element by adding and scaling.
      link: https://en.wikipedia.org/wiki/Finitely_generated_module
    - term: indecomposable module
      meaning: A nonzero module that cannot be written as a direct sum of two smaller nonzero modules.
      link: https://en.wikipedia.org/wiki/Indecomposable_module
    - term: representation type
      meaning: Whether a ring has only finitely many indecomposable finitely generated modules (finite type) or infinitely many.
      link: https://en.wikipedia.org/wiki/Representation_theory
    - term: pure submodule
      meaning: A submodule that sits inside a module so that equations solvable in the big module can be solved inside it.
      link: https://en.wikipedia.org/wiki/Pure_submodule
    - term: Artin algebra
      meaning: Roughly, a finite-dimensional algebra over a field, generalised to a commutative base; the setting of Auslander's 1976 theorem.
      link: https://en.wikipedia.org/wiki/Artin_algebra
    - term: bimodule
      meaning: A module with a left action by one ring and a right action by another, compatible with each other.
      link: https://en.wikipedia.org/wiki/Bimodule
    - term: triangular matrix ring
      meaning: A ring of 2x2 matrices with a zero in one corner, whose entries come from two rings and a bimodule.
      link: https://en.wikipedia.org/wiki/Triangular_matrix
    - term: Lean 4
      meaning: "A proof assistant: a program that checks that a formal proof follows from stated axioms by logical rules."
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
  readFirst:
    - title: Module (mathematics) - Wikipedia
      url: https://en.wikipedia.org/wiki/Module_(mathematics)
      why: "Start here: what a module is, with examples built from vector spaces and the integers."
    - title: Division ring - Wikipedia
      url: https://en.wikipedia.org/wiki/Division_ring
      why: The quaternions and other number systems where the order of multiplication matters.
    - title: Direct sum of modules - Wikipedia
      url: https://en.wikipedia.org/wiki/Direct_sum_of_modules
      why: What it means to take a module apart into independent pieces.
    - title: Semisimple module - Wikipedia
      url: https://en.wikipedia.org/wiki/Semisimple_module
      why: The classic well-behaved case that pure semisimplicity weakens.
    - title: "Ren: A counterexample to the pure semisimplicity conjecture (arXiv preprint)"
      url: https://arxiv.org/abs/2610.39883
      why: The unrefereed claim itself; the introduction summarises the history.
raw:
  body: "## Rings whose modules are sums of small pieces\n\nA ring $R$ is **right pure semisimple** if every right $R$-module is a direct sum of finitely generated modules. It is of **finite representation type** if it has only finitely many indecomposable finitely generated right modules up to isomorphism, which forces every module to be such a sum. For Artin algebras the two notions agree (Auslander, 1976), and finite representation type is left-right symmetric. The **pure semisimplicity conjecture** asks whether the same holds for all rings: is every right pure semisimple ring of finite representation type? Equivalently, is right pure semisimplicity automatically left-right symmetric?\n\n## Reductions\n\nAccording to the introduction of the preprint below, Simson and Herzog proved the conjecture for PI rings and reduced it to hereditary rings, and Herzog showed that a counterexample can be sought among triangular matrix rings $\\begin{pmatrix} H & T \\\\ 0 & T\\end{pmatrix}$ over two division rings. Simson recast this as an **Artin problem for division ring extensions**: for a division ring extension $H\\subseteq T$ one looks at the bimodule ${}_H T_T$ and the sequence of right dimensions of its iterated duals, the *right dimension sequence*, and asks which sequences can occur when the left dimension is infinite. García studied small potential counterexamples of this kind and Šaroch studied them further, finding an extension with periodic right dimension sequence of period $(1,2,2,2,1,4)$. Before the 2026 preprint no extension of infinite representation type of this kind was known.\n\n## The 2026 claim\n\nRen's preprint constructs a division ring extension $H\\subseteq T$ with right dimension sequence $(1,2,2,2,\\dots)$ whose left dimension is infinite. $T$ is a union of fraction division rings of nearest-neighbour quantum Laurent algebras with parameter $1/2$, and $H$ is the image of $T$ under a compatible family of conjugations. The paper claims that the triangular ring is then right pure semisimple but neither left pure semisimple nor of finite representation type, which would disprove the conjecture. A Lean 4 formalization of the main theorem is linked from the paper; at the time of writing the repository has no continuous-integration workflow, so DARC treats the machine check as the author's own report.\n\n## Why it matters\n\nPure semisimplicity connects module decompositions to model theory (purity, the Ziegler spectrum) and to representation type. A genuine counterexample would show that the left-right asymmetry visible in dimension sequences can be realised by an honest ring, and would end a question open for decades."
  student: "**The setting: rings and modules.** A **ring** is a set where you can add, subtract and multiply, with the usual rules. The integers are a ring; so are the $2\\times 2$ matrices from first-year linear algebra, where $AB\\neq BA$ in general, so multiplication need not commute. A **division ring** is a ring where every nonzero element can also be divided by (real and complex numbers, quaternions). A **module** over a ring $R$ is a vector space whose scalars come from $R$ instead of from the real numbers. A module is **finitely generated** if finitely many of its elements are enough to build all the others by adding and scaling.\n\n**Taking modules apart.** A **direct sum** $M=A\\oplus B$ means every element of $M$ splits in exactly one way as a piece of $A$ plus a piece of $B$, like a block-diagonal matrix. Over a division ring every module is a direct sum of copies of the ring itself, the way every vector space has a basis. Over other rings that fails. Over the integers, the rationals $\\mathbb Q$ are not a direct sum of finitely generated pieces.\n\n**The definition.** A ring is **right pure semisimple** if *every* right module, however huge, is a direct sum of finitely generated modules. It has **finite representation type** if only finitely many different *indecomposable* finitely generated modules exist, where indecomposable means it cannot be split further as a direct sum. Finite type means a short, complete list of building blocks. For rings that are finite-dimensional algebras over a field (Artin algebras), Auslander proved in 1976 that the two notions agree, and that it does not matter whether you use right or left modules.\n\n**The conjecture.** For arbitrary rings, nobody has shown the two properties agree. The **pure semisimplicity conjecture** asks: does right pure semisimple always imply finite representation type, and so left pure semisimple too? It has been open for decades.\n\n**What the reductions say.** Simson and Herzog reduced the question to a special family: a *triangular* matrix ring, a $2\\times 2$ matrix ring with a zero in the lower left corner,\n$$\\begin{pmatrix} H & T\\\\ 0 & T\\end{pmatrix},$$\nbuilt from two division rings $H\\subseteq T$. The off-diagonal piece $T$ is a *bimodule*: it has a left action by $H$ and a right action by $T$ at once. The dimension of $T$ as a vector space over $H$ can be counted from the left or from the right; a counterexample needs these counts to behave differently, with the left dimension infinite.\n\n**The claim, and its status.** A preprint by Junpeng Ren (arXiv:2610.39883, 29 October 2026) claims such a pair $H\\subseteq T$ with right dimension sequence $1,2,2,2,\\dots$ and infinite left dimension, which would disprove the conjecture. It links a Lean 4 formalization of the main theorem. The preprint has not been refereed. The repository has no continuous-integration build, so the machine check is only the author's report, and no independent expert has assessed the work yet. DARC treats the conjecture as open."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

A whole number breaks into primes. Algebraists like to know when a whole system can be taken apart into small, simple parts.

Here is the picture. A ring is a kind of number system, where you can add and multiply, but the order of multiplying may matter. A module is a collection of things the ring can act on, a bit like a set of arrows that you can stretch using the numbers of that ring. Some rings are well behaved: every such collection, however large, falls apart into small pieces.

For such a ring, there is a natural question. Is the list of different small pieces always short, a finite menu? Think of a kitchen where every meal ever cooked is a combination of dishes from one menu. Is the menu always finite?

For a well-studied family of rings the answer is yes, and it does not matter whether you look at things from the left or from the right. Maurice Auslander proved this in 1976. For rings in general, nobody knows. It has been open for decades.

In October 2026 a preprint claimed a ring where the answer is no. It has not been through peer review and nobody independent has checked it, so it is only a claim for now.

The kitchen analogy breaks down in one place: a kitchen has no left and right, while for a ring the left and right views can really differ.
