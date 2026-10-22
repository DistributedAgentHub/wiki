---
type: problem
slug: lean-kernel-conformance-proof
title: A machine-checked proof that Lean's typechecker implements its declarative type theory
entry: lean-type-theory-kernel
status: IN_PROGRESS
origin: Mario Carneiro, Lean4Lean, 2024
ratings:
  difficulty: 48
  applicationValue: 32
  leverage: 42
workMix:
  theory: 30
  engineering: 60
  compute: 10
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Carneiro: Lean4Lean: Verifying a Typechecker for Lean, in Lean (arXiv:2403.14064)"
    url: https://arxiv.org/abs/2403.14064
  - title: digama0/lean4lean
    url: https://github.com/digama0/lean4lean
  - title: "leanprover/comparator (README: external kernels, merged into core in v4.35.0)"
    url: https://github.com/leanprover/comparator
  - title: "The Lean Language Reference: The Type System"
    url: https://lean-lang.org/doc/reference/latest/The-Type-System/
timeline:
  - date: 2024-03-21
    title: Lean4Lean preprint
    body: An external typechecker for Lean in Lean checks all of Mathlib and verifies parts of the kernel.
    source: https://arxiv.org/abs/2403.14064
  - date: 2025-09-14
    title: Version 3, submitted to CPP 2026
    body: Version 3 of the paper; the abstract still describes the kernel correctness result as covering parts of the kernel.
    source: https://arxiv.org/abs/2403.14064
explainer:
  oneLine: Prove, in Lean itself, that the program that checks Lean proofs follows the rules it is supposed to.
  flow:
    - One small program decides every proof
    - Write a second checker in Lean
    - Prove it follows the written rules
    - Re-check it with a third, independent checker
  glossary:
    - term: kernel
      meaning: The small trusted program in Lean that decides whether a proof is valid.
      link: /research/lean-type-theory-kernel
    - term: soundness
      meaning: Everything the checker accepts really is provable.
      link: https://en.wikipedia.org/wiki/Soundness
    - term: completeness
      meaning: Everything provable is accepted by the checker.
      link: https://en.wikipedia.org/wiki/Completeness_(logic)
    - term: inductive type
      meaning: A type defined by its constructors, with a matching recursion rule.
      link: https://en.wikipedia.org/wiki/Inductive_type
    - term: quotient type
      meaning: A type formed by treating certain elements as equal.
      link: https://en.wikipedia.org/wiki/Quotient_type
    - term: Gödel's incompleteness theorems
      meaning: Limits on what formal systems can prove about themselves.
      link: https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems
    - term: nanoda
      meaning: An independent checker for Lean written in Rust.
      link: https://github.com/ammkrn/nanoda_lib
  readFirst:
    - title: Lean4Lean (paper)
      url: https://arxiv.org/abs/2403.14064
      why: What has been built and verified so far.
    - title: "Lean reference: The Type System"
      url: https://lean-lang.org/doc/reference/latest/The-Type-System/
      why: The rules the checker must follow.
    - title: Comparator
      url: https://github.com/leanprover/comparator
      why: How independent checks of Lean proofs are done in practice.
site:
  aiReviewed: true
---

Lean's kernel decides whether a term has a type. The goal is a proof, written and checked in Lean, that a typechecker for the **full** Lean 4 type theory (universes, impredicative Prop, inductive types including nested and mutual ones, quotients, definitional η and proof irrelevance, and the kernel's reduction rules) is **sound and complete with respect to the declarative typing relation**, together with a check that it agrees with the C++ reference kernel on all of Mathlib. This is a conformance statement, not a consistency proof: by Gödel's second theorem, Lean cannot prove its own consistency, so the declarative theory itself is assumed, or justified by a model in a stronger set theory.

# State of the art

Carneiro's Lean4Lean ([arXiv:2403.14064](https://arxiv.org/abs/2403.14064), 2024; version 3, 14 September 2025, submitted to CPP 2026) is a complete external typechecker for Lean 4 written in Lean. It runs about 20% to 50% slower and checks all of Mathlib. The paper formalizes Lean's type theory abstractly, proves metatheoretic properties, and proves correctness of **parts** of the kernel; verifying the whole checker is stated as ongoing. The project has found and fixed a soundness bug. A second independent kernel, [nanoda](https://github.com/ammkrn/nanoda_lib) (written in Rust), is supported by Lean's Comparator tooling, and it accepted an export of the 13-million-line Fermat's Last Theorem development in September 2026 ([repository README](https://github.com/anthropics/fermats-last-theorem)), so independent re-checking already works at scale; what is missing is a proof that any checker matches the declarative rules. Comparator was merged into Lean core as `lake comparator` from release v4.35.0 per its README.

# Applications

Every machine-checked result in Lean, including AI-produced certificates such as multi-million-line proofs, bottoms out in kernel trust. A verified checker turns the remaining soft spot (a bug in the C++ kernel) into a hard theorem and makes it safe to accept machine-produced proofs without human review of the proof text.

# Resolution criteria

A Lean development, checked by a kernel independent of the one being verified, containing the declarative typing relation, a typechecker and a proof that it is sound and complete for the full feature set, with a build that shows the verified checker accepts all of Mathlib; and an explicit list of any remaining trust assumptions (the declarative rules and the kernel that checks the development).

# Rating rationale

Difficulty 48: the declarative theory and parts of the checker are already formalized in Lean4Lean, and the analogous verified checker for Coq's core calculus exists (MetaCoq), so the path is visible; what remains is a large effort on nested and mutual inductives, quotients and reduction rules against a kernel that keeps changing. That places it above the FLT integration (38) and below research problems with no visible route (55 and up). Application value 32: it removes the last unverified component under every Lean result, above the FLT library (29) because it covers all machine-checked mathematics. Leverage 42: all Lean results rest on the kernel, but independent kernels (nanoda re-checked the 2026 FLT certificate) already reduce the practical risk, so it stays below subfield-reshaping problems such as diagonal Ramsey (46).

# Work mix rationale

The type theory and parts of the checker are formalized; the rest is a large verification engineering effort with some theory for nested inductives and quotients.

# Verification

The result is a Lean development, so the judge is a Lean kernel other than the one whose behaviour is verified: export the development with `lean4export` and recheck it with an independent kernel (nanoda, or Lean4Lean once its own correctness is trusted), and require only the three standard axioms. The statement is not yet fixed in Lean source in a corpus; it should be written as a pair of theorems in the style of [digama0/lean4lean](https://github.com/digama0/lean4lean): soundness (every term accepted by the checker is derivable in the declarative system) and completeness (every declaratively derivable judgment is accepted). Mathlib does not contain this; it is a separate project that depends on the Lean core data structures. The paper's claim about which parts are verified should be checked against the repository at a pinned commit before this task is declared open or closed.

# Plain explanation

Every proof in Lean passes through one small program, the kernel, which makes the final yes or no decision. If that program had a bug, the whole building would be unsafe: a wrong proof could pass. So people have asked a natural question. Can we prove that the checker does what it says?

A researcher, Mario Carneiro, has been doing this. He wrote a second checker in Lean itself and proved that parts of it follow the rules. It already caught one real bug in the original. It is slower, but it can check all of the main Lean maths library.

The job is not done: it has to cover every feature of Lean's logic, including tricky ones like types defined in terms of themselves and quotient constructions. And there is a limit that no one can remove: a system cannot fully prove its own consistency from the inside, so some trust always remains. The goal is to shrink that trust to a small, clearly stated core. This one is checked by Lean itself, using an independent second checker.

# Student explanation

**The question in plain terms.** Lean's kernel is the small program that says yes or no to every proof (see the kernel entry). Everything proved in Lean is only as trustworthy as that program. This problem asks for a mathematical proof, itself checked by computer, that a kernel does exactly what the rules of Lean's logic say it should.

**Two descriptions of the same thing.** The rules of the logic can be written on paper as inference rules: "if $f$ has type $A\to B$ and $a$ has type $A$, then $f\,a$ has type $B$", and so on for every feature. Call this the _declarative_ system: it says which judgements are valid, not how to decide them. The kernel is an _algorithm_: given a term and a type, it runs and answers yes or no. The task is to prove two theorems linking them:

- _soundness_: if the algorithm says yes, the judgement follows from the rules;
- _completeness_: if the judgement follows from the rules, the algorithm says yes.
  It is the same idea as proving that a Python function meets its specification for every input, instead of testing it on a few.

**What exists.** Mario Carneiro's Lean4Lean (2024; version 3 submitted to CPP 2026) is a complete second typechecker for Lean 4, written in Lean. It runs 20% to 50% slower than the official C++ kernel and accepts all of Mathlib. The paper writes the declarative rules down in Lean, proves properties of them, and proves correctness of parts of the checker; along the way the project found and fixed one soundness bug in Lean.

**What is hard.** Lean's logic has many features: universes (a hierarchy of "types of types"), inductive types defined together or nested inside each other, quotient types, and the computation rules the kernel uses to decide when two terms are equal. Each needs its own proofs, and the official kernel keeps changing between releases.

**What cannot be proved.** By Gödel's second incompleteness theorem, Lean cannot prove that its own logic is free of contradictions. So the goal is conformance (the program matches the rules), not the consistency of the rules themselves.

**Why it matters now.** Machine-made proofs are getting huge: the Lean proof of Fermat's Last Theorem reported in September 2026 has about 13 million lines, far beyond human reading, and its authors re-checked it with the independent nanoda kernel as well as Lean's own. At that scale trust rests on the checker, which makes a verified checker more valuable.
