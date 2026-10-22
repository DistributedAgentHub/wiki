---
type: entry
slug: lean-tactic-automation
title: Lean tactic frameworks and automation (simp, aesop, omega, grind)
field: formal-proof
kind: ALGORITHM
status: ACTIVE
summary: "The proof-search and decision-procedure layer of Lean: rewriting with simp, white-box search with aesop, linear integer arithmetic with omega and SMT-style reasoning with grind."
reliedOn: Human formalizers and AI provers both spend most of their steps in these tactics; their power and speed set how much mathematics a given proof effort can cover.
dependsOn:
  - lean-mathlib
  - lean-type-theory-kernel
references:
  - title: "Limperg and From: Aesop: White-Box Best-First Proof Search for Lean (CPP 2023)"
    url: https://doi.org/10.1145/3573105.3575671
    kind: paper
  - title: "The Lean Language Reference: the grind tactic"
    url: https://lean-lang.org/doc/reference/latest/The--grind--Tactic/
    kind: docs
  - title: "The Lean Language Reference: tactic reference"
    url: https://lean-lang.org/doc/reference/latest/Tactic-Proofs/Tactic-Reference/
    kind: docs
  - title: "leanprover-community/lean-auto: automation bridge to external solvers"
    url: https://github.com/leanprover-community/lean-auto
    kind: code
  - title: "Mathlib documentation: the ring tactic"
    url: https://leanprover-community.github.io/mathlib4_docs/Mathlib/Tactic/Ring/Basic.html
    kind: docs
timeline:
  - date: 2023-01-01
    title: Aesop published at CPP
    body: The white-box best-first proof search framework for Lean 4 is presented at CPP 2023 (month approximate).
    source: https://doi.org/10.1145/3573105.3575671
explainer:
  oneLine: Small programs inside Lean that do routine proof steps for you.
  flow:
    - Goal is too tedious by hand
    - Tactic searches or rewrites
    - It builds a proof term
    - Kernel re-checks the result
  glossary:
    - term: tactic
      meaning: A small program that works on a goal and builds part of a Lean proof.
      link: https://lean-lang.org/doc/reference/latest/Tactic-Proofs/Tactic-Reference/
    - term: goal
      meaning: What is still left to prove at some point in a proof.
      link: https://en.wikipedia.org/wiki/Automated_theorem_proving
    - term: rewriting
      meaning: Replacing part of an expression with an equal one using a known rule.
      link: https://en.wikipedia.org/wiki/Rewriting
    - term: decision procedure
      meaning: An algorithm that always answers yes or no for a whole class of questions.
      link: https://en.wikipedia.org/wiki/Decision_problem
    - term: congruence closure
      meaning: A method that keeps track of which terms must be equal because their parts are equal.
      link: https://en.wikipedia.org/wiki/Congruence_closure
    - term: SMT solver
      meaning: A program that checks logical formulas combined with theories such as arithmetic.
      link: https://en.wikipedia.org/wiki/Satisfiability_modulo_theories
    - term: Lean and Mathlib
      meaning: The proof assistant and its large library of formalized mathematics.
      link: /research/lean-mathlib
  readFirst:
    - title: Aesop (paper)
      url: https://doi.org/10.1145/3573105.3575671
      why: The design of a white-box proof search for Lean.
    - title: "Lean reference: the grind tactic"
      url: https://lean-lang.org/doc/reference/latest/The--grind--Tactic/
      why: What grind does and how to use it.
    - title: "Lean reference: tactic reference"
      url: https://lean-lang.org/doc/reference/latest/Tactic-Proofs/Tactic-Reference/
      why: A catalogue of the built-in tactics.
site:
  published: true
  aiReviewed: true
---

## What a tactic is

A Lean proof is a term, but people write it as a script of **tactics**: programs that inspect the current goal and build part of the term. Tactics are untrusted. They can be arbitrarily clever because the kernel re-checks whatever they produce. That makes Lean an unusually good platform for automation: a wrong heuristic costs time, never soundness.

## The workhorses

- **`simp`**: a rewriting engine that applies a set of lemmas tagged `@[simp]` (and any you pass) left to right until nothing applies. It is the default way to clean up a goal. Its strength comes from the very large library of simp lemmas in Mathlib, so the quality of that tagging is part of the tool.
- **`omega`**: a decision procedure for linear arithmetic over `ℤ` and `ℕ` (with the usual operations on literals such as division and remainder by numerals). It ships in Lean core and produces a checkable proof term.
- **`aesop`**: a configurable best-first proof search for Lean. Rule sets are registered per project, and the search tree is inspectable, which is why the authors call it white-box. The paper is Limperg and From, [Aesop: White-Box Best-First Proof Search for Lean](https://doi.org/10.1145/3573105.3575671) (CPP 2023), and the code is at [leanprover-community/aesop](https://github.com/leanprover-community/aesop).
- **`grind`**: an SMT-style procedure in Lean core that combines congruence closure, E-matching and theory solvers; see the [reference manual section](https://lean-lang.org/doc/reference/latest/The--grind--Tactic/).
- **Mathlib tactics**: `ring`, `linarith`, `positivity`, `norm_num`, `field_simp` and others live in [Mathlib.Tactic](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Tactic/Ring/Basic.html) and prove most routine algebra and inequalities. Bridges to external solvers, for example [lean-auto](https://github.com/leanprover-community/lean-auto), hand goals to SMT solvers and reconstruct the proof inside Lean.

## Why it is load-bearing

1. **Cost of formalization.** Most of the line count in a formalization project is routine steps. Better automation shrinks projects directly, and the record of large projects shows it.
2. **AI proof search.** Neural provers emit tactic sequences, so their effective branching factor and success rate depend on which tactics close goals in one call. A system that calls `grind` or `aesop` at a leaf can prove in one step what used to take dozens.
3. **Proof by reflection.** Decision procedures such as `omega` and `decide` lean on the kernel's evaluation (see the kernel entry), so kernel speed and tactic design are coupled.

## Open design questions

Automation is judged on speed, robustness to library changes (a new simp lemma can break old proofs) and the readability of what it produces. Producing short, maintainable proofs from heavy automation, and doing so without slowing Mathlib's build, is an active engineering concern rather than a solved one.

# Plain explanation

Proving a theorem on a computer is like solving a very long puzzle, and most steps are boring: moving terms around, simplifying, checking that one number is smaller than another. Tactics are helper programs that do these steps. You write a short command and Lean builds the whole detailed step behind the scenes.

Some helpers rewrite expressions using a big collection of known rules, a bit like tidying a messy sum into a standard form. Some are decision procedures that settle a whole kind of question, such as simple whole-number inequalities, with a guaranteed method. Some search through many possible proof steps, trying the most promising first. The newest ones act like a small automated reasoner that combines several tricks.

These helpers are not trusted. Whatever they produce is checked again by the kernel, so a wrong guess wastes time but cannot create a false theorem. That is also why they matter for AI: a language model that calls one of these tools at the right moment can finish in one step what used to take many.

# Student explanation

**Goals and tactics.** When you prove something in Lean you see a _goal_: the hypotheses you have and the statement still to prove. A _tactic_ is a command that changes the goal, for example by rewriting an expression or by splitting "A and B" into two goals. A proof is a list of tactics that ends with no goals left. Each tactic also writes part of the proof term that the kernel checks at the end, so a tactic may use any trick it likes: if the trick is wrong, the kernel rejects the result.

**A small example.** To prove $n + 0 = n$ and $2n = n + n$ for natural numbers you might type `simp` for the first and `omega` for the second, and never write the low-level steps.

**The main tools.**

- **`simp`** rewrites the goal with a large list of simplification lemmas, such as $x\cdot 1 = x$, always from the complicated side to the simpler side, until nothing changes. It is the everyday clean-up tool, and its power comes from Mathlib's thousands of tagged lemmas.
- **`omega`** decides linear arithmetic over integers and natural numbers: statements built from $+$, $-$, comparisons and multiplication by constants. It either proves the goal or reports that it cannot.
- **`ring`**, **`linarith`** and **`norm_num`** prove polynomial identities, linear inequalities and numerical facts.
- **`aesop`** is a search: it tries registered rules (lemmas and tactics) in best-first order over a tree of goals, like a search algorithm from a programming course, and the tree can be inspected afterwards.
- **`grind`** works like an SMT solver, the kind of tool used to verify software and chips: it collects known equalities, merges terms that must be equal, instantiates general lemmas that match the goal and combines this with arithmetic reasoning.

**Why it matters.** Most lines of a formal proof are routine steps, so better automation makes projects shorter and cheaper. AI provers also emit tactics, so a tool that closes a whole class of goals in one call shrinks the search they must do.

**Trade-offs.** Heavy automation can be slow, and a proof that relies on `simp` can break when someone adds a new simp lemma to the library. Tool designers balance power against speed and stability, and that balance is still an active engineering question.
