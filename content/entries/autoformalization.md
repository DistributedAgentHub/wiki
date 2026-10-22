---
type: entry
slug: autoformalization
title: Autoformalization
field: formal-proof
kind: FRONTIER
status: EMERGING
summary: Translating informal mathematics, statements and whole proofs, into checked Lean code with machine learning.
reliedOn: Formal libraries only grow as fast as people can write Lean; AI-driven formalization is the route by which large papers and AI-found proofs get machine-checked.
dependsOn:
  - ai-theorem-proving
  - lean-mathlib
references:
  - title: "Wu et al.: Autoformalization with Large Language Models (arXiv:2205.12615)"
    url: https://arxiv.org/abs/2205.12615
    kind: paper
  - title: "Firsching et al.: Formal Conjectures (arXiv:2605.13171, preprint)"
    url: https://arxiv.org/abs/2605.13171
    kind: paper
  - title: "Hariharan et al.: Progress in Formalizing Sphere Packing in Dimension 8 (arXiv:2604.23468, preprint)"
    url: https://arxiv.org/abs/2604.23468
    kind: paper
  - title: "Anthropic: Formalizing Fermat's Last Theorem"
    url: https://www.anthropic.com/news/formalizing-fermats-last-theorem
    kind: article
timeline:
  - date: 2022-05-25
    title: Few-shot autoformalization with language models
    body: Wu et al. report that a large language model translates 25.3% of competition problems into correct Isabelle/HOL statements.
    source: https://arxiv.org/abs/2205.12615
  - date: 2026-02-01
    title: Dimension-8 sphere packing proof verified in Lean
    body: The project's human formalizers and Math, Inc.'s Gauss complete the formal proof of the dimension-8 theorem (February 2026, month only; the paper describing it was first posted on 25 April 2026).
    source: https://arxiv.org/abs/2604.23468
  - date: 2026-09-04
    title: FLT certificate by coordinated agents
    body: Anthropic reports about 13 million lines of Lean, about 30,300 machine-checked theorems (29,500 used in the final proof) and roughly six billion output tokens.
    source: https://www.anthropic.com/news/formalizing-fermats-last-theorem
explainer:
  oneLine: Teaching a computer to turn maths written for people into proofs a computer can check.
  flow:
    - Paper proof in plain language
    - AI drafts Lean statements and steps
    - Kernel accepts or rejects
    - People check the statement says the right thing
  glossary:
    - term: formalization
      meaning: Writing mathematics in a strict language a computer can check completely.
      link: https://en.wikipedia.org/wiki/Formal_proof
    - term: misformalization
      meaning: A formal statement that compiles but does not say what the author meant.
      link: /research/formal-conjectures-corpus
    - term: language model
      meaning: An AI trained on text to predict and generate the next words.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: Mathlib
      meaning: The community library of formalized mathematics for Lean.
      link: /research/lean-mathlib
    - term: sphere packing
      meaning: The problem of packing equal balls as densely as possible.
      link: https://en.wikipedia.org/wiki/Sphere_packing
    - term: benchmark
      meaning: A fixed set of tasks used to compare systems.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: Comparator
      meaning: A Lean tool that checks a solution file proves exactly the statement in a challenge file.
      link: https://github.com/leanprover/comparator
  readFirst:
    - title: Autoformalization with Large Language Models
      url: https://arxiv.org/abs/2205.12615
      why: The 2022 paper that showed the idea worked at all.
    - title: "Anthropic: Formalizing Fermat's Last Theorem"
      url: https://www.anthropic.com/news/formalizing-fermats-last-theorem
      why: A recent account of an agent-built formalization and its caveats.
    - title: Formal Conjectures
      url: https://github.com/google-deepmind/formal-conjectures
      why: A living collection of formal statements of open problems.
site:
  published: true
  aiReviewed: true
---

## The task

**Autoformalization** turns mathematics written for humans into code a proof assistant accepts. It comes in two layers that fail in different ways.

1. **Statement formalization.** Given "every even integer greater than 2 is a sum of two primes", write the Lean statement. The output is checked only for type-correctness, so a wrong but valid statement passes. This is the **fidelity** problem, and it is the hard part to certify.
2. **Proof formalization.** Given a statement and a paper proof, produce a Lean proof. Here the kernel is the judge, so a result is simply right or wrong.

## History in brief

Early evidence that language models could do this at all came from Wu, Jiang, Li and others, [Autoformalization with Large Language Models](https://arxiv.org/abs/2205.12615) (May 2022): few-shot prompting translated 25.3% of competition problems into formally correct Isabelle/HOL statements, and using those to train a prover raised the miniF2F proof rate from 29.6% to 35.2% in that setup. Since then the field has moved from competition statements to research mathematics:

- **Corpora of formal statements.** The [Formal Conjectures](https://arxiv.org/abs/2605.13171) project reports 2,615 formalized statements in Lean 4, of which 1,029 are open conjectures and 836 are solved problems used for proof autoformalization.
- **Whole-project formalization with AI.** The dimension-8 sphere packing project (Viazovska's theorem) reports that its Lean proof was completed in February 2026, with the final stages done by Math, Inc.'s autoformalization model Gauss alongside a human team ([arXiv:2604.23468](https://arxiv.org/abs/2604.23468)). In September 2026 Anthropic reported a 13-million-line Lean proof of Fermat's Last Theorem produced by Claude agents working largely autonomously for over eleven days ([Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem)); the Imperial College project that aims at a Mathlib-integrated formalization of the modern proof is separate and continues.

## What makes it hard

- **Library gaps.** Research papers use definitions Mathlib lacks. The agent must either build them (with unclear design standards) or prove the result in a weaker setting, and the second option silently changes the theorem.
- **Fidelity.** A formalization that compiles can still state the wrong thing. Remedies are human review, round-trip translation, adversarial proving of the negation, and tools such as Comparator that fix the statement in advance.
- **Scale and maintenance.** A generated proof that is five times the size of Mathlib and compiles far slower than it is hard to merge or maintain, so the next bottleneck is quality of structure, not correctness.
- **Evaluation.** Benchmarks of statements and proofs are saturating quickly (see the benchmarks entry), so credible evaluation now means open problems and unpublished papers.

## Why it matters beyond Lean

Computer-checked proofs let a reader trust an AI-produced argument without trusting the AI. The same translation step is what would let a mathematician state a conjecture once and have it enter every machine's problem list.

# Plain explanation

Mathematicians write proofs in ordinary language, with phrases like "it is easy to see". A proof assistant needs every step spelled out in a strict code. Translating one into the other is slow expert work. Autoformalization tries to have an AI do the translation.

There are two jobs. The first is turning a statement into code, such as "every even number above two is a sum of two primes". The tricky part is that a wrong translation can still look fine to the computer, so someone has to check that the code says what the person meant. The second job is turning a whole proof into code. Here the computer's checker is the judge, so a result is simply right or wrong.

In 2026, AI systems were reported to finish very large formalizations, including the sphere packing proof in eight dimensions and Fermat's Last Theorem. The picture hides a trap: a huge machine-made proof can be correct but too big and slow for people to maintain or merge into the shared library.

# Student explanation

**The task.** _Autoformalization_ means turning mathematics written for people into Lean code that the proof checker accepts, using machine learning. A human-written proof skips steps and relies on the reader; Lean needs every definition and step spelled out.

**Two layers.** _Statement formalization_ maps an informal claim to a Lean statement. It is only checked for type-correctness, so it can compile and still be wrong (a _misformalization_); typical failures are the wrong quantifier order, a missing hypothesis, natural-number subtraction truncating at zero (in Lean `3 - 5 = 0` for natural numbers, so a statement that writes `n - 1` silently changes meaning when `n = 0`), or a definition that differs in an edge case. _Proof formalization_ maps a given informal proof to a Lean proof of a fixed statement, and the kernel judges it.

**Evidence.** Wu et al. (2022) showed that a language model prompted with a few examples could turn 25.3% of competition problems into formally correct Isabelle statements, and that training on the translations improved a prover's miniF2F score from 29.6% to 35.2%. Since then work has moved to research-level material. The Formal Conjectures project reports 2,615 formal statements, of which 1,029 are open conjectures and 836 are solved problems used for testing proof formalization. Large agent-built formalizations include the dimension-8 sphere packing proof (completed in February 2026 by a human team, with Math, Inc.'s Gauss model doing the final stages) and a 13-million-line Lean certificate of Fermat's Last Theorem (September 2026).

**Failure modes.** (1) _Library gaps_: papers use notions Mathlib lacks, so the agent must build them or silently change the theorem. (2) _Fidelity_: only people, adversarial proving of the negation, or round-trip translation can check meaning. (3) _Scale_: generated developments can be much larger than Mathlib and compile far slower. (4) _Evaluation_: older benchmarks saturate, so credible tests use open problems and new papers.

**Why it matters.** A checked proof lets one trust an AI result without trusting the AI.
