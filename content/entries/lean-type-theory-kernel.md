---
type: entry
slug: lean-type-theory-kernel
title: Lean 4 kernel and dependent type theory
field: formal-proof
kind: THEORY
status: ACTIVE
summary: "The small trusted core of Lean: a dependent type theory with inductive types, quotients and proof irrelevance, plus the external checkers that re-verify its output."
reliedOn: Every Lean proof, from Mathlib to AI-generated certificates, is accepted or rejected by this core, so the trust in all formal mathematics built on Lean reduces to trust in it.
references:
  - title: "The Lean Language Reference: The Type System"
    url: https://lean-lang.org/doc/reference/latest/The-Type-System/
    kind: docs
  - title: "Carneiro: Lean4Lean: Verifying a Typechecker for Lean, in Lean (arXiv:2403.14064)"
    url: https://arxiv.org/abs/2403.14064
    kind: paper
  - title: "Carneiro: The Type Theory of Lean (thesis and notes)"
    url: https://github.com/digama0/lean-type-theory
    kind: code
  - title: "de Moura and Ullrich: The Lean 4 theorem prover and programming language (CADE 2021)"
    url: https://doi.org/10.1007/978-3-030-79876-5_37
    kind: paper
  - title: "leanprover/comparator: a trustworthy judge for Lean proofs"
    url: https://github.com/leanprover/comparator
    kind: code
timeline:
  - date: 2024-03-21
    title: Lean4Lean preprint
    body: Carneiro posts the first complete external Lean 4 typechecker written in Lean, about 20% to 50% slower than the C++ kernel and able to check all of Mathlib.
    source: https://arxiv.org/abs/2403.14064
  - date: 2025-09-14
    title: Lean4Lean version 3 submitted to CPP 2026
    body: Version 3 of the paper (14 September 2025, submitted to CPP 2026) reports correctness proofs for parts of the kernel and one soundness bug found and fixed through the project.
    source: https://arxiv.org/abs/2403.14064
  - date: 2026-09-04
    title: A 13-million-line certificate is accepted by the kernel
    body: Anthropic reports a Lean proof of Fermat's Last Theorem that uses only the three standard axioms; Comparator matched its statement to Mathlib's, and the repository reports that the independent nanoda kernel accepted an export of all 1,052,234 declarations.
    source: https://github.com/anthropics/fermats-last-theorem
explainer:
  oneLine: The tiny referee inside Lean that checks every proof, whoever or whatever wrote it.
  flow:
    - Untrusted tools produce a proof term
    - Kernel checks it against few rules
    - Independent kernels re-check the export
    - Only the statement must be read by humans
  glossary:
    - term: kernel
      meaning: The small trusted program in Lean that decides whether a proof term has the claimed type.
      link: https://lean-lang.org/doc/reference/latest/The-Type-System/
    - term: dependent type theory
      meaning: A logic where types can depend on values, so statements and programs live in one language.
      link: https://en.wikipedia.org/wiki/Dependent_type
    - term: proof irrelevance
      meaning: The rule that any two proofs of the same proposition are treated as equal.
      link: https://lean-lang.org/doc/reference/latest/The-Type-System/Propositions/
    - term: inductive type
      meaning: A type defined by its constructors, such as the natural numbers, with a matching recursion rule.
      link: https://en.wikipedia.org/wiki/Inductive_type
    - term: definitional equality
      meaning: Equality that the checker can see by pure computation, with no proof needed.
      link: https://en.wikipedia.org/wiki/Type_theory
    - term: axiom
      meaning: A statement accepted without proof; Lean uses only three standard ones for ordinary mathematics.
      link: https://en.wikipedia.org/wiki/Axiom
    - term: Gödel's second incompleteness theorem
      meaning: A strong enough system cannot prove its own consistency.
      link: https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems
  readFirst:
    - title: "Lean reference manual: The Type System"
      url: https://lean-lang.org/doc/reference/latest/The-Type-System/
      why: The official, readable account of what the kernel accepts.
    - title: Lean4Lean (paper)
      url: https://arxiv.org/abs/2403.14064
      why: How a second Lean checker was written and partly verified.
    - title: Type theory (Wikipedia)
      url: https://en.wikipedia.org/wiki/Type_theory
      why: Gentle background on why types can serve as logic.
raw:
  body: "## What it is\n\nLean separates a large, untrusted **elaborator** (parsing, unification, tactics, automation) from a small **kernel**. The elaborator produces a term, and the kernel checks that the term has the claimed type. If the kernel accepts it, the theorem counts, however the term was found. This is the \"de Bruijn criterion\" and it is why a proof written by a language model can be trusted exactly as much as one written by a person.\n\n## The type theory\n\nLean's logic is a dependent type theory in the family of the calculus of inductive constructions. The pieces that matter in practice, as laid out in the [Lean reference manual](https://lean-lang.org/doc/reference/latest/The-Type-System/):\n\n- **Terms and types are the same kind of thing.** Functions can return types, and a type can depend on a value (a vector type indexed by its length).\n- **Universes.** Types live in a hierarchy `Sort u`. `Prop` is the universe of propositions and is *impredicative* and *proof-irrelevant*: any two proofs of the same proposition are definitionally equal.\n- **Inductive types** with recursors, which cover natural numbers, lists, structures such as groups and rings, and logical connectives.\n- **Quotients** (`Quot`) as a primitive with its own reduction rule, used to build objects such as quotient groups and the reals' Cauchy completion.\n- **Definitional equality** closes terms under β, δ (unfolding), ι (recursor on a constructor), ζ (let), quotient reduction, η for functions and structures, and proof irrelevance. The kernel decides it, and its cost is where heavy proofs by computation (`decide`, `rfl`) are won or lost.\n- **Three standard axioms** sit on top: `propext`, `Quot.sound` and `Classical.choice`. Checking a theorem with `#print axioms` shows which of them it uses.\n\n## Why it is load-bearing\n\nA soundness bug in the kernel would break every theorem at once, and a performance cliff in it limits what can be proved by computation. Two lines of work follow from that.\n\n1. **Independent re-checking.** Lean can export a development in a plain text format (`lean4export`) that other programs read. Independent kernels such as [nanoda](https://github.com/ammkrn/nanoda_lib) and [Lean4Lean](https://github.com/digama0/lean4lean) re-verify the result. Lean's [Comparator](https://github.com/leanprover/comparator) tool combines this with a sandbox and an axiom whitelist to answer one question: does this solution file really prove the statement in that challenge file?\n2. **Verifying the checker itself.** Carneiro's [Lean4Lean](https://arxiv.org/abs/2403.14064) is a second typechecker written in Lean. It checks all of Mathlib and has a partial machine-checked correctness proof, which has already uncovered one soundness bug.\n\n## Limits to keep in mind\n\nThe kernel guarantees that a term has a type, not that the type says what the author meant. Misformalized statements are the main residual risk, which is why statement-comparison tools and curated statement corpora exist (see the Formal Conjectures entry). Beyond that, the guarantee rests on the kernel implementation being correct and on the type theory being consistent, neither of which is itself proved inside Lean."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine a chess tournament with a very small, very strict referee. Players can use coaches, computers and notebooks, but only the referee decides whether a move is legal. Lean works the same way. Most of Lean is large and clever: it reads what you write, guesses missing pieces and runs search programs. None of that is trusted. At the very end, a small program called the kernel checks the finished proof step by step against a short list of rules.

This is why a proof written by a computer program can be trusted as much as one written by a person. If the kernel says yes, the proof holds, no matter how it was found. The kernel is also the one place where a mistake would be serious, so people have written second checkers in other programs to double-check it.

The picture breaks in one place: the kernel only checks that the proof matches the statement that was typed in. It cannot tell whether the statement says what the mathematician meant.

# Student explanation

**What a proof checker does.** In a maths course a proof is a chain of steps that a reader checks by eye. A proof assistant such as Lean checks the chain with a program instead. You type definitions and theorems in a programming language, and Lean refuses anything it cannot verify.

**Statements are types.** Lean is built on _type theory_. Every object has a type, just as in Python `3` is an `int` and `"hi"` is a `str`. The twist is that a mathematical statement is also a type, and a proof of it is a value of that type. A proof of "for every natural number $n$, $n + 0 = n$" is a function: give it any `n` and it returns evidence that `n + 0 = n`. Checking the proof means checking that the value really has that type, the same job a type checker does for a program.

**The kernel.** Lean has two parts. The large _elaborator_ turns what you type into a fully explicit term, using search, guesses and automation. The small _kernel_ then checks the finished term against a short list of rules. Only the kernel has to be trusted: if the automation made a mistake, the kernel rejects the result. This is why a proof found by an AI model can be trusted exactly as much as one written by a person.

**What the rules cover.** A type may depend on a value: "vectors of length $n$" is a type that depends on the number $n$. Data such as the natural numbers are built from constructors (`0` and "one more than"), and the kernel can compute with them, so `2 + 2 = 4` is checked by evaluation. Statements live in a special type called `Prop`, where any two proofs of the same statement count as equal. On top of the rules sit three standard axioms, one of them the axiom of choice; the command `#print axioms` lists the ones a theorem uses.

**Checking the checker.** The kernel is a program of a few thousand lines of C++, so it could have a bug. There are two defences. First, Lean can export a finished development to a plain text file that independent kernels read again: nanoda (written in Rust) and Lean4Lean (written in Lean). If they all accept, one bug is unlikely to explain it. Second, because Lean4Lean is written in Lean, theorems about its correctness can be proved in Lean, and parts of that proof exist.

**The limit.** A checker confirms that the proof matches the statement as written. It cannot tell you that the statement says what the author meant. And by Gödel's second incompleteness theorem the system cannot prove that its own logic is free of contradictions, so a small amount of trust always remains.
