---
type: problem
slug: cerny-conjecture
title: "The Černý conjecture: synchronizing words of length (n−1)²"
entry: extremal-combinatorics
status: OPEN
origin: Ján Černý, 1964 (conjecture stated 1969)
ratings:
  difficulty: 75
  applicationValue: 8
  leverage: 30
workMix:
  theory: 90
  engineering: 0
  compute: 10
  empirical: 0
verification:
  route: LEAN
sources:
  - title: "Formal Conjectures: Černý conjecture (Lean statement)"
    url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Wikipedia/CernyConjecture.lean
  - title: "Volkov: Synchronizing Automata and the Černý Conjecture (LATA 2008, survey)"
    url: https://doi.org/10.1007/978-3-540-88282-4_4
  - title: Synchronizing word (Wikipedia, with Eppstein and Shitov bounds)
    url: https://en.wikipedia.org/wiki/Synchronizing_word
timeline:
  - date: 1964-01-01
    title: Černý's examples
    body: A family of automata whose shortest synchronizing words have length (n-1)^2 (Mat.-fyz. časopis SAV 14).
    source: https://en.wikipedia.org/wiki/Synchronizing_word
  - date: 1990-01-01
    title: Eppstein's algorithm and monotonic automata
    body: Words of length 11n^3/48 + O(n^2) found in polynomial time; the conjecture proved for monotonic automata (SIAM J. Computing 19).
    source: https://en.wikipedia.org/wiki/Synchronizing_word
  - date: 2019-01-01
    title: Shitov's cubic bound
    body: About 0.1654 n^3, the best general upper bound (J. Autom. Lang. Comb. 24; year only known).
    source: https://en.wikipedia.org/wiki/Synchronizing_word
explainer:
  oneLine: Can any n-state automaton that can be reset be reset by a word of at most (n−1)² letters?
  flow:
    - Machine in an unknown state
    - A command word resets every state
    - Černý machines need (n−1)² letters
    - Best proof only gives about 0.165 n³
  glossary:
    - term: automaton
      meaning: A machine with a finite number of states that changes state when it reads symbols.
      link: https://en.wikipedia.org/wiki/Deterministic_finite_automaton
    - term: synchronizing word
      meaning: A word that sends every state of the machine to the same state.
      link: https://en.wikipedia.org/wiki/Synchronizing_word
    - term: alphabet
      meaning: The set of symbols the machine can read.
      link: https://en.wikipedia.org/wiki/Alphabet_(formal_languages)
    - term: Eppstein's algorithm
      meaning: A polynomial-time method that finds reasonably short synchronizing words.
      link: https://en.wikipedia.org/wiki/Synchronizing_word
    - term: monotonic automaton
      meaning: An automaton whose transitions preserve a cyclic order of the states.
      link: https://en.wikipedia.org/wiki/Synchronizing_word
    - term: big-O notation
      meaning: A way to describe how fast a quantity grows.
      link: https://en.wikipedia.org/wiki/Big_O_notation
  readFirst:
    - title: Synchronizing word (Wikipedia)
      url: https://en.wikipedia.org/wiki/Synchronizing_word
      why: Definitions and the known bounds.
    - title: "Volkov: Synchronizing Automata and the Černý Conjecture"
      url: https://doi.org/10.1007/978-3-540-88282-4_4
      why: A survey by a leading researcher.
site:
  aiReviewed: true
---

A complete deterministic finite automaton (DFA) with $n$ states is **synchronizing** if some word sends every state to the same state. Černý conjectured that every synchronizing $n$-state DFA has a synchronizing word of length at most $(n-1)^2$. Černý's own examples show this cannot be lowered.

Lean 4 statement in the Formal Conjectures corpus:

```lean
theorem cerny_conjecture :
    ∀ {α : Type*} {σ : Type*} [Fintype σ] (M : DFA α σ) (hM : M.IsSynchronizing),
    ∃ w : List α, M.IsSynchronizingWord w ∧ w.length ≤ (Fintype.card σ - 1)^2
```

# State of the art

**Cubic upper bounds only.** The classical bound $(n^3-n)/6$ (Pin and Frankl, early 1980s) stood until Szykuła (2018) and then Shitov (2019), who proved about $0.1654\,n^3$, the best general bound. Eppstein (1990) gave an algorithm finding words of length at most $11n^3/48 + O(n^2)$ and proved the conjecture for **monotonic automata** (transitions preserve a cyclic order). The conjecture is also known for several structured classes of automata. **Lower bound:** Černý's family of automata achieves exactly $(n-1)^2$. The gap between quadratic and cubic has not moved in over 40 years apart from the constant.

# Applications

Concrete in automata engineering: a short synchronizing word resets a finite-state device (a protocol machine, a robotic part-orienter, a coded sequence decoder) from an unknown state to a known one without sensing. A quadratic bound would give tighter guarantees for such resets and for testing finite-state systems.

# Resolution criteria

A Lean proof of `cerny_conjecture` as stated for all alphabets and state types, or a Lean-checked counterexample: a finite DFA with $n$ states whose shortest synchronizing word is longer than $(n-1)^2$.

# Rating rationale

Difficulty 75: sixty years, and the upper bound is still cubic, with only the constant improved (Pin–Frankl, then Szykuła 2018 and Shitov 2019) against a quadratic conjecture that is tight; harder than sunflowers (71), where one log factor remains, and just below deterministic prime construction (76) and diagonal Ramsey (78). Application value 8: reset sequences for finite-state devices and testing are a real, specific use. Leverage 30: the central open problem of synchronizing automata, with a large literature of special classes.

# Work mix rationale

Small cases are verified by computer, but the conjecture is about all n and needs a new proof technique; the bound has not changed exponent in decades.

# Verification

Statement: `CernyConjecture.cerny_conjecture` in [formal-conjectures](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjectures/Wikipedia/CernyConjecture.lean) (quoted above). Mathlib has `DFA` and `DFA.evalFrom` ([Computability.DFA](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Computability/DFA.html)); the predicates `DFA.IsSynchronizingWord` and `DFA.IsSynchronizing` are defined in the corpus' [DFA.lean](https://github.com/google-deepmind/formal-conjectures/blob/e754a78c74a3f2bbc38e4f2063b5f6eed51bde39/FormalConjecturesForMathlib/Computability/DFA.lean), not in Mathlib itself, so a submission must import the corpus' definitions unchanged. A counterexample is a concrete finite DFA plus a Lean proof that no synchronizing word of length at most $(n-1)^2$ exists (a finite check over words or subsets of states). A proof must cover every alphabet and state type with `Fintype σ`. Judge with Comparator.

# Plain explanation

Imagine a machine with a few states, say a robot arm that could be in any of several positions. You cannot see which one it is in. You can feed it commands, and each command moves every possible position to some new position in a fixed way. A reset word is a list of commands that brings the machine to the same position no matter where it started.

If a reset word exists at all, how long might the shortest one need to be for a machine with n positions? Ján Černý found machines that need exactly n minus one, squared, commands. He guessed in 1969 that nothing is worse than that. The conjecture is still open.

What is proved is only that a reset word of length about n cubed always exists, which for a hundred states is roughly seventeen times longer than the guess. Smaller machines can be checked by computer and also particular kinds of machine, but nobody can prove the guess for all.

It is practical: resetting finite machines is used in testing and in controlling parts and protocols. Here the exact statement is in Lean.

# Student explanation

**Finite-state machines.** A _deterministic finite automaton_ (DFA) is the simplest model of a digital controller: a finite set of $n$ states, an alphabet of input letters, and a rule that says, for each state and letter, which state comes next. You may have drawn one as a state diagram for a vending machine or a traffic light.

**Resetting without looking.** Suppose you do not know the machine's current state and cannot observe it. A _synchronizing word_ (or reset word) is a sequence of letters that sends every possible starting state to the same final state, so after feeding it in you know exactly where the machine is. A DFA is _synchronizing_ if such a word exists. Černý conjectured that whenever one exists, there is one of length at most $(n-1)^2$.

**The bound would be tight.** Černý's automata on states $0,\dots,n-1$ use two letters: $a$ moves every state $i$ to $i+1 \bmod n$, and $b$ sends state $n-1$ to $0$ and leaves the others alone. Their shortest reset word has length exactly $(n-1)^2$; for $n=4$ that is 9, which a brute-force search over words confirms.

**What is proved.** The classical bound is $(n^3-n)/6$ (Frankl and Pin, early 1980s). Szykuła (2018) and Shitov (2019) improved the constant, reaching about $0.1654\,n^3$. Eppstein (1990) gave a fast algorithm that finds reset words of length at most $11n^3/48+O(n^2)$ and proved the conjecture for _monotonic_ automata, whose letters preserve a cyclic order of the states. The conjecture also holds for several other special classes and has been checked by computer for small $n$.

**Why the proofs give $n^3$.** Track the set $S$ of states the machine might be in; at the start $S$ is all $n$ states. The argument repeatedly finds a short word that makes $S$ smaller by at least one state. Linear algebra enters by treating $S$ as a 0/1 vector of length $n$ and each letter as a matrix acting on it. In the classical analysis, shrinking a set of $k$ states costs at most about $k^2/2$ letters; adding this up over $k$ from $n$ down to 2 gives about $n^3/6$. A quadratic bound would need shrinking steps of about $2n$ letters on average, and nobody knows how to guarantee that.

**Lean and checking.** `M.IsSynchronizing → ∃ w, M.IsSynchronizingWord w ∧ w.length ≤ (Fintype.card σ - 1)^2`, where Mathlib provides `DFA` and the corpus defines the two synchronizing predicates. A proof must cover every automaton; a counterexample would be one concrete automaton plus a finite check that no short reset word exists.
