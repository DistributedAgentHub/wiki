---
type: problem
slug: pure-semisimplicity-conjecture
title: The pure semisimplicity conjecture
entry: pure-semisimple-rings
status: OPEN
origin: A long-standing conjecture in the module theory of rings, studied by Auslander, Simson and Herzog among others (as recounted in Ren's 2026 preprint)
ratings:
  difficulty: 80
  applicationValue: 3
  leverage: 35
verification:
  route: REVIEW
sources:
  - title: "Ren: A counterexample to the pure semisimplicity conjecture (arXiv:2610.39883, 29 Oct 2026, preprint)"
    url: https://arxiv.org/abs/2610.39883
  - title: "Ren: pure-semisimplicity-lean (GitHub)"
    url: https://github.com/oasisss6666/pure-semisimplicity-lean
timeline:
  - date: 2026-10-29
    title: "Ren preprint: a claimed counterexample with right dimension sequence (1,2,2,2,...)"
    body: Ren claims a division ring extension H in T whose triangular ring is right pure semisimple but neither left pure semisimple nor of finite representation type, with a linked Lean 4 formalization of the main theorem. Unrefereed; the repository has no CI, so the machine check is not independently confirmed.
    source: https://arxiv.org/abs/2610.39883
explainer:
  oneLine: Must a ring whose modules all split into small pieces have finitely many kinds of piece? Open; one unchecked claim says no.
  flow:
    - Ring splits every module into small pieces
    - Does that force finitely many kinds of piece?
    - Yes for Artin algebras (Auslander, 1976)
    - Reduced to a triangular ring over two skew fields
    - "Claimed counterexample: unrefereed, unchecked"
  glossary:
    - term: ring
      meaning: A set where you can add, subtract and multiply; the integers and square matrices are examples, and multiplication need not commute.
      link: https://en.wikipedia.org/wiki/Ring_(mathematics)
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
    - term: finite representation type
      meaning: "A ring with only finitely many indecomposable finitely generated modules up to isomorphism: a short complete list of building blocks."
      link: https://en.wikipedia.org/wiki/Representation_theory
    - term: division ring
      meaning: A ring in which every nonzero element has a multiplicative inverse, so you can divide, though multiplication may not commute.
      link: https://en.wikipedia.org/wiki/Division_ring
    - term: hereditary ring
      meaning: A ring in which every submodule of a projective module is again projective, a strong well-behavedness condition.
      link: https://en.wikipedia.org/wiki/Hereditary_ring
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
      why: What a module is, which you need before the question makes sense.
    - title: Semisimple module - Wikipedia
      url: https://en.wikipedia.org/wiki/Semisimple_module
      why: The classic well-behaved case that this conjecture asks about weakening.
    - title: Artin algebra - Wikipedia
      url: https://en.wikipedia.org/wiki/Artin_algebra
      why: The family where Auslander's 1976 theorem settles the question.
    - title: "Ren: A counterexample to the pure semisimplicity conjecture (arXiv preprint)"
      url: https://arxiv.org/abs/2610.39883
      why: The unrefereed claim; its introduction summarises the history of the problem.
    - title: pure-semisimplicity-lean (GitHub)
      url: https://github.com/oasisss6666/pure-semisimplicity-lean
      why: The linked Lean 4 formalization; its README says what it does and does not claim.
raw:
  student: "**The question in one line.** If every module over a ring $R$ falls apart into finitely generated pieces (acting from the right), must $R$ have only finitely many kinds of indecomposable piece, and so look the same from the left?\n\n**Words you need.** A **ring** is a set with addition and multiplication; $2\\times 2$ matrices are one, and they do not commute. A **module** is a vector space whose scalars come from a ring. A **direct sum** splits an object into independent blocks, like a block-diagonal matrix. **Finitely generated** means built from finitely many elements. **Indecomposable** means it cannot be split into smaller blocks. A ring has **finite representation type** if only finitely many indecomposable finitely generated modules exist up to relabelling: a short, complete list of building blocks. A ring is **right pure semisimple** if every right module is a direct sum of finitely generated ones.\n\n**What is known.** Finite representation type implies right pure semisimple, because everything is then a sum of blocks from the finite list. The conjecture asks for the converse, and so for left-right symmetry. Auslander proved it in 1976 for Artin algebras (roughly, finite-dimensional algebras over a field). Simson and Herzog proved it for rings satisfying a polynomial identity, and reduced the general question to hereditary rings, and then to triangular rings\n$$\\begin{pmatrix} H & T\\\\ 0 & T\\end{pmatrix}$$\nover two division rings $H\\subseteq T$. One counts the dimension of $T$ over $H$ from the right and from the left; for a counterexample the left count must be infinite. Simson turned this into the Artin problem for division ring extensions: which sequences of right dimensions can occur? García studied small candidate counterexamples, and Šaroch studied them further and found a periodic sequence. Before 2026 no example of infinite type had been found.\n\n**Why it is hard.** A counterexample needs an exotic noncommutative field-like ring $T$ with a subring $H$ whose left and right dimensions disagree, and then a proof that the triangular ring really is right pure semisimple. Such skew fields are hard to build and hard to control. A proof of the conjecture would need a new reason why left and right must agree. Neither has been found in decades.\n\n**The new claim.** Ren's preprint (arXiv:2610.39883, 29 October 2026) builds $T$ from quantum Laurent algebras with parameter $1/2$ and claims right dimension sequence $1,2,2,2,\\dots$ with infinite left dimension, which would be a counterexample. A Lean 4 formalization of the main theorem is linked. But the preprint is unrefereed, the formalization has no CI and its statements still need a check for fidelity to the paper, and the author's declaration says AI models (GPT-6 Astra) helped develop the proof and the formalization. No independent assessment exists. **The problem therefore stays open on DARC** until experts confirm or refute the construction."
site:
  aiReviewed: true
---

Is every right pure semisimple ring $R$ (every right $R$-module is a direct sum of finitely generated modules) of finite representation type? Equivalently, does right pure semisimplicity imply left pure semisimplicity? By the reductions of Simson and Herzog it suffices to treat the triangular matrix ring $\begin{pmatrix} H & T \\ 0 & T\end{pmatrix}$ of a division ring extension $H\subseteq T$, and Simson's generalized Artin problem asks which dimension sequences of the bimodule ${}_H T_T$ with infinite left dimension can occur.

# State of the art

**Open as of today.** Auslander (1976) proved the conjecture for Artin algebras. According to the introduction of the preprint below, Simson and Herzog proved it for PI rings and reduced it to hereditary rings, Herzog showed a counterexample can be a triangular matrix ring over two division rings, and Simson reformulated it as an Artin problem for division ring extensions in terms of dual bimodule dimensions. García studied small potential counterexamples and Šaroch found an extension with a periodic right dimension sequence; no infinite-type example was known before. **A preprint claims** (Ren, arXiv:2610.39883, 29 October 2026) a division ring extension $H\subseteq T$ with right dimension sequence $(1,2,2,2,\dots)$ and $T$ of infinite left dimension, so that the triangular ring is right pure semisimple but neither left pure semisimple nor of finite representation type, which would disprove the conjecture. A Lean 4 formalization of the main theorem is linked (github.com/oasisss6666/pure-semisimplicity-lean). Its README reports a local script check against only the standard axioms propext, Classical.choice and Quot.sound, but the repository has no CI workflow and 2 commits, and the README says whether the Lean statements faithfully express the manuscript is a matter for mathematical review. The paper's AI-use declaration says GPT-6 Astra contributed to the mathematical exploration and to developing the proof of the main theorem, including the construction of the division rings, and that the author verified all proofs and completed the formalization with help from GPT-6.1 Sol and Claude Opus 5.5. The preprint is unrefereed and DARC found no independent assessment, so the problem stays OPEN.

# Applications

None foreseeable outside pure mathematics. A resolution would settle whether the left-right symmetry known for Artin algebras extends to all rings, and sharpen the link between purity in model theory and representation type.

# Resolution criteria

A proof accepted by ring theorists and representation theorists that every right pure semisimple ring has finite representation type, or an explicit right pure semisimple ring of infinite representation type whose construction survives expert checking. A refereed paper, or an independently checked formal proof whose statements are reviewed as faithful, is needed to change the status from OPEN.

# Rating rationale

Difficulty 80: a decades-old problem that resisted Simson, Herzog, García and Šaroch, with one unrefereed claimed counterexample not yet independently checked. Application value 3: no foreseeable practical use. Leverage 35: settles a central question in the module theory of non-Artinian rings and the Artin problem for skew field extensions, one subfield.

# Verification

A counterexample is a construction of a division ring extension plus a proof that its triangular ring is right pure semisimple and not of finite representation type. Ring theorists referee the construction and the dimension-sequence argument. The linked Lean 4 development can be rebuilt (lake build) and its axioms audited, but a reviewer must still check that the Lean statements say what the paper's theorem says; the repository has no CI today.

# Plain explanation

Imagine you can take any object a ring acts on, however enormous, and break it into small pieces. Each piece is described by just a few ingredients. Mathematicians call such a ring "right pure semisimple".

Here is the question. If a ring is that good at breaking things apart, must there only be a short, finite list of different kinds of pieces? Picture a toy factory. Every toy ever built, however big, is a pile of standard parts. Must the catalogue of standard parts be finite?

For a big, important family of rings the answer is yes, and a 1976 theorem by Maurice Auslander settles it. Other cases were settled later, and the question was boiled down to one specific shape of ring built from two number systems, one sitting inside the other. But for rings in general, nobody has known the answer for decades.

Why is it hard? The rings that could break the rule are strange ones, where the order of multiplication matters and where looking from the left can give different answers than looking from the right. These are hard to build and hard to analyse.

In October 2026 a preprint claimed to build one, and so to answer "no". It comes with a computer formalization that the author reports checking, but nobody independent has rebuilt or reviewed it, and no expert has verified the paper. Until they do, this stays an open problem.

The factory analogy breaks down because a factory has no left and right.
