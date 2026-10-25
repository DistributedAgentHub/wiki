---
type: entry
slug: lean-mathlib
title: Lean 4 & Mathlib
field: formal-proof
kind: LIBRARY
status: ACTIVE
summary: A proof assistant and the community library of formalized mathematics built on it.
reliedOn: Most current formalization projects and AI theorem-proving systems use Mathlib as their ground truth and source of lemmas.
references:
  - title: Lean community
    url: https://leanprover-community.github.io/
    kind: blog
  - title: leanprover-community/mathlib4
    url: https://github.com/leanprover-community/mathlib4
    kind: code
timeline:
  - date: 2023-07-17
    title: Mathlib port to Lean 4 completed
    body: The community finished porting Mathlib from Lean 3 to Lean 4, after which development moved to mathlib4.
explainer:
  oneLine: A programming language that checks math proofs line by line, plus a huge shared library of proofs it has already checked.
  flow:
    - A proof is written as a program
    - A small kernel checks every step
    - Mathlib shares definitions and results
    - New proofs build on old ones safely
  glossary:
    - term: proof assistant
      meaning: Software in which you write a proof and the computer checks that every step is logically valid.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: Lean
      meaning: A programming language and proof assistant, used to write machine-checked mathematics.
      link: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    - term: type theory
      meaning: A foundation for mathematics in which every object has a type; statements are types and proofs are objects of those types.
      link: https://en.wikipedia.org/wiki/Type_theory
    - term: propositions as types
      meaning: The idea that a proof of a statement is the same kind of thing as a program of a certain type.
      link: https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence
    - term: tactic
      meaning: A short command that helps build a proof, for example rewriting with an equation or simplifying an expression.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: typeclass
      meaning: A way to say 'any type with this structure', such as any field, so results are proved once and reused everywhere.
      link: https://en.wikipedia.org/wiki/Type_class
    - term: formalization
      meaning: Rewriting a mathematical statement and its proof in a precise form a computer can check.
      link: https://en.wikipedia.org/wiki/Formal_proof
    - term: Mathlib
      meaning: The shared, community-built library of formalized mathematics for Lean.
      link: https://leanprover-community.github.io/
    - term: kernel
      meaning: The small, trusted core of a proof assistant that re-checks every finished proof; everything else can be buggy without breaking correctness.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: dependent type
      meaning: A type that can depend on a value, such as "lists of length n"; it lets statements about numbers be written as types.
      link: https://en.wikipedia.org/wiki/Dependent_type
  readFirst:
    - title: Lean (proof assistant) - Wikipedia
      url: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
      why: A short overview of what Lean is and where it came from.
    - title: Lean community home page
      url: https://leanprover-community.github.io/
      why: Entry point to Mathlib, tutorials and the community.
    - title: Proof assistant - Wikipedia
      url: https://en.wikipedia.org/wiki/Proof_assistant
      why: Puts Lean next to other systems such as Coq and Isabelle.
    - title: Formal proof - Wikipedia
      url: https://en.wikipedia.org/wiki/Formal_proof
      why: Explains what 'every step checked' really means.
site:
  published: true
  aiReviewed: true
---

## What it is

**Lean 4** is a dependently-typed functional language and interactive theorem prover. **Mathlib** is a single, unified, community-maintained library covering algebra, analysis, topology, number theory and more.

## Why it is foundational

A machine-checked proof removes a whole class of doubt. Because Mathlib is _one_ coherent library, new results can reuse everything beneath them, which makes it a shared substrate rather than a collection of isolated proofs.

## What to understand first

- Tactics vs. term-mode proofs
- Typeclass hierarchy (how `Ring`, `Field`, `NormedSpace` relate)
- Why naming conventions are strict: discoverability _is_ the library

# Plain explanation

Mathematicians write proofs in words, and other mathematicians read them and decide whether they are convincing. That works, but long proofs can hide small mistakes, and reading them takes months. Lean fixes this by turning a proof into something a computer can check, step by step, with no step taken on trust.

Think of a very strict teacher who marks your homework. You may only use facts that are already on the approved list, and every step must follow from them by an allowed rule. If any step is wrong, the teacher refuses the whole page. If the page is accepted, you can be sure it is correct.

Mathlib is the approved list. It is a huge library, written by hundreds of volunteers, that already contains large parts of algebra, geometry, analysis and number theory in a form Lean understands. When someone proves a new result, they can build on everything already in the library instead of starting from scratch.

The analogy breaks in one place: the teacher only checks that your proof is valid, not that you stated the right question. Writing the statement of a theorem in Lean correctly is a human job, and mistakes there are still possible.

This matters beyond pure maths. The same kind of checking is used for software and hardware, and it is the safety net that lets AI systems propose proofs without anyone having to trust them.

# Student explanation

**Lean 4** is both a functional programming language and an _interactive theorem prover_. In Lean, a theorem is a type, and a proof is a program of that type. This is the _propositions-as-types_ idea: the statement 'for every natural number $n$, $n + 0 = n$' is a type, and any term that inhabits it is a proof. The Lean _kernel_ is a small piece of trusted code that type-checks every term. If the kernel accepts it, the theorem is established, however clever or messy the proof-writing process was.

You rarely write proof terms by hand. Instead you use **tactics**: short commands such as `intro`, `rw` (rewrite using an equation), `simp` (simplify), `linarith` (solve linear inequalities) and `ring` (prove polynomial identities). Tactics build the underlying term for you, and the kernel checks the result. The alternative is _term mode_, where you write the term directly. Tactics are usually faster for people; term mode is more compact when it works.

**Mathlib** is the community library on top of Lean. Its main design choice is that it is _one_ library with one set of definitions. A group, a ring or a metric space is defined once, and everything else reuses it. This works because of the **typeclass** system: a statement such as 'in any `Field`, every nonzero element has an inverse' is proved once, and Lean automatically finds it whenever you work in a field such as the real numbers. The hierarchy (`Ring`, `Field`, `NormedSpace`, ...) is organised so that more specialised structures inherit the results of more general ones.

Because the library must stay coherent, naming is strict. Lemma names follow conventions (for example, a name describes the shape of the statement), so that people and tools can _guess_ what a lemma is called. In a library with hundreds of thousands of facts, discoverability is the difference between a usable library and a pile.

Formalization is not free. A paper proof that takes five lines may take hundreds in Lean, because every 'clearly' has to be spelled out. Some areas are well covered; others lack basic definitions. Large projects (for example formalizing the proof of Fermat's Last Theorem) are partly about adding missing infrastructure to Mathlib.

What Lean does _not_ check is whether your formal statement says what you meant. If you define a concept slightly wrongly, you can prove a true but irrelevant theorem. Careful definitions, and reading the formal statement by a human, remain essential.
