---
type: entry
slug: ai-theorem-proving
title: Machine-assisted theorem proving
field: formal-proof
kind: FRONTIER
status: EMERGING
summary: Using learned models to search for formal proofs that a proof assistant can verify.
reliedOn: If it matures, formal verification of mathematics, software and hardware all get dramatically cheaper.
dependsOn:
  - lean-mathlib
timeline:
  - date: 2024-07-25
    title: Olympiad-level formal proofs
    body: DeepMind reported AlphaProof and AlphaGeometry 2 solving four of six IMO 2024 problems, with AlphaProof's proofs checked in Lean.
explainer:
  oneLine: AI models guess proof steps and a strict checker accepts only the correct ones.
  flow:
    - A model proposes a proof step
    - A proof checker accepts or rejects it
    - Search keeps only the accepted steps
    - A full verified proof is assembled
  glossary:
    - term: proof assistant
      meaning: Software in which you write a proof and the computer checks that every step is logically valid.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: Lean and Mathlib
      meaning: A proof assistant and its large shared library of already-checked mathematics.
      link: /research/lean-mathlib
    - term: tactic
      meaning: A single step of a proof in a proof assistant, such as rewriting with an equation.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: language model
      meaning: An AI system trained on large amounts of text to predict what comes next, which can also be used to write code and proofs.
      link: https://en.wikipedia.org/wiki/Large_language_model
    - term: reinforcement learning
      meaning: A way of training an AI by giving it rewards for successes, such as a proof the checker accepts.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: autoformalization
      meaning: Automatically translating a statement or proof from everyday mathematical language into a form a proof assistant accepts.
      link: https://en.wikipedia.org/wiki/Automated_theorem_proving
    - term: benchmark contamination
      meaning: When test problems or their answers appear in the training data, so a high score may reflect memory rather than ability.
      link: https://en.wikipedia.org/wiki/Leakage_(machine_learning)
    - term: automated theorem proving
      meaning: The long-standing field of getting computers to find mathematical proofs automatically.
      link: https://en.wikipedia.org/wiki/Automated_theorem_proving
    - term: goal
      meaning: The statement that still has to be proved at the current point of a proof.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: proof search
      meaning: Exploring many possible sequences of proof steps, keeping promising branches and dropping dead ends.
      link: https://en.wikipedia.org/wiki/Search_tree
  readFirst:
    - title: Automated theorem proving - Wikipedia
      url: https://en.wikipedia.org/wiki/Automated_theorem_proving
      why: Background on how computers have searched for proofs for decades.
    - title: Proof assistant - Wikipedia
      url: https://en.wikipedia.org/wiki/Proof_assistant
      why: Explains the checker half of the story.
    - title: Lean community home page
      url: https://leanprover-community.github.io/
      why: See the library and tools most AI provers work with.
site:
  published: true
  aiReviewed: true
---

## The idea

A model proposes proof steps; a proof assistant (e.g. Lean) checks each one. The checker makes hallucination harmless: a wrong step is simply rejected.

## State of play

Systems combining language models with formal search have reached competition-level performance on some olympiad problems. Research-level mathematics remains largely out of reach.

## What's open

- Autoformalization: turning informal statements into correct formal ones
- Long-horizon proof planning
- Benchmarks that aren't contaminated by training data

# Plain explanation

Imagine a student who is very fast at guessing but sometimes confidently wrong, paired with a teacher who never makes a mistake. The student suggests the next step of a proof. The teacher checks it. If the step is wrong, it is thrown away and the student tries again. Over many tries, the pair can find proofs that neither the guesses nor the checks could find alone.

That is machine-assisted theorem proving. The 'student' is an AI model. The 'teacher' is a proof assistant such as Lean, a program that accepts a proof only if every step is valid. This pairing is attractive because the checker makes lying harmless. An AI can write nonsense, but nonsense is simply rejected, and anything accepted is correct.

The approach has already worked on school-olympiad-level problems, which are hard but short. Research-level mathematics is a different story: proofs are long, need new definitions, and rest on large amounts of background.

Three things are still hard. First, turning a plain-language statement into a correct formal one, since the checker cannot tell if the question was asked correctly. Second, planning a long proof with many stages. Third, testing honestly: if a test problem was in the AI's training data, the score means little.

The analogy breaks because real proof search is not just guessing: good systems also learn from the checker's feedback and keep a search tree of partial proofs.

# Student explanation

The basic setup has two parts. A **proof assistant** (such as Lean) holds a _goal_, the statement still to be proved. A **model** proposes a _tactic_ (a proof step). The assistant applies it, and either reports an error or returns the new, smaller goals. The model then proposes the next step, and so on until no goals remain. Because the assistant checks every step, an incorrect proposal cannot slip into a final proof.

This is a _search problem_. At each state there are many possible next steps, and a proof may need dozens or hundreds of them in the right order. Systems typically combine a language model, which suggests promising tactics, with a search procedure (for example best-first search or a tree search) that explores several branches and prunes the dead ends. Some systems are also trained with _reinforcement learning_: they attempt problems, receive a reward when the checker accepts a proof, and improve from that signal. Others work in the _whole-proof_ style, where the model writes a complete proof at once and the checker accepts or rejects it.

A useful consequence of formal checking is that data can be generated at scale: any proof the checker accepts is a new, verified training example.

There are three open problems the entry highlights.

1. **Autoformalization.** Most mathematics is written in informal language. To use a proof assistant, a statement must first be translated into formal syntax. A translation that is _slightly wrong_ (too strong, too weak, or about a different object) produces a verified but meaningless result. Checking that a formal statement matches the intent is mostly a human task today.
2. **Long-horizon planning.** Competition problems may need a few clever ideas; research papers need chains of lemmas, new definitions and organisation across many pages. Current systems struggle to decompose a large goal into the right sub-goals.
3. **Clean benchmarks.** If problems or their solutions appear in the training data, a high score may reflect memory rather than reasoning. Constructing new, unseen test problems is itself a research task.

The field is also tied to the Lean library Mathlib, since the model needs a large store of known lemmas to apply. Progress in AI proving therefore depends partly on progress in formalization.
