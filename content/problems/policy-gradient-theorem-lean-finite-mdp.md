---
type: problem
slug: policy-gradient-theorem-lean-finite-mdp
title: Formalise the policy gradient theorem for finite discounted MDPs in Lean 4
entry: policy-gradient-ppo
status: OPEN
origin: Sutton, McAllester, Singh and Mansour (1999); Lean 4 and Mathlib
ratings:
  difficulty: 18
  applicationValue: 6
  leverage: 15
workMix:
  theory: 5
  engineering: 85
  compute: 0
  empirical: 10
verification:
  route: LEAN
sources:
  - title: Sutton et al. (1999). Policy gradient methods with function approximation
    url: https://proceedings.neurips.cc/paper/1999/hash/464d828b85b0bed98e80ade0a5c43b0f-Abstract.html
  - title: Zhang (2025). Towards Formalizing Reinforcement Learning Theory (arXiv preprint)
    url: https://arxiv.org/abs/2511.03618
  - title: rl-theory-in-lean (GitHub)
    url: https://github.com/ShangtongZhang/rl-theory-in-lean
  - title: "Mathlib: Contracting.lean"
    url: https://github.com/leanprover-community/mathlib4/blob/master/Mathlib/Topology/MetricSpace/Contracting.lean
timeline:
  - date: 2025-11-05
    title: Q-learning and TD convergence in Lean
    body: Zhang formalises almost-sure convergence of Q-learning and linear TD (preprint).
    source: https://arxiv.org/abs/2511.03618
explainer:
  oneLine: Have a computer proof checker verify the basic formula behind policy-gradient learning.
  flow:
    - Define a small decision world
    - Show rule value is well defined
    - Compare two rules exactly
    - Prove the gradient formula
    - Machine checks every step
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: Lean
      meaning: A programming language and proof assistant in which mathematical proofs are checked by computer.
      link: /research/lean-mathlib
    - term: Mathlib
      meaning: The large community library of formalised mathematics for Lean.
      link: /research/lean-mathlib
    - term: fixed point
      meaning: A value that a function maps to itself.
      link: https://en.wikipedia.org/wiki/Fixed_point_(mathematics)
    - term: contraction mapping
      meaning: A function that always brings any two points closer together by a fixed factor below 1.
      link: https://en.wikipedia.org/wiki/Banach_fixed-point_theorem
    - term: policy gradient theorem
      meaning: The formula giving the slope of expected reward with respect to a policy's parameters.
      link: /research/policy-gradient-ppo
    - term: MDP
      meaning: "Markov decision process: the standard model of acting in a changing world with rewards."
      link: https://en.wikipedia.org/wiki/Markov_decision_process
    - term: Bellman equation
      meaning: The recursive equation saying a state's value equals the expected immediate reward plus the discounted value of the next state.
      link: https://en.wikipedia.org/wiki/Bellman_equation
    - term: proof assistant
      meaning: Software that checks every step of a mathematical proof written in a formal language.
      link: https://en.wikipedia.org/wiki/Proof_assistant
    - term: expected value
      meaning: The probability-weighted average of all possible outcomes.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: differentiable
      meaning: Having a well-defined derivative (here, a gradient) at every point considered.
      link: https://en.wikipedia.org/wiki/Differentiable_function
  readFirst:
    - title: Towards Formalizing Reinforcement Learning Theory (arXiv preprint)
      url: https://arxiv.org/abs/2511.03618
      why: Existing Lean work on RL convergence.
    - title: "Lean: Theorem Proving in Lean 4"
      url: https://lean-lang.org/theorem_proving_in_lean4/
      why: How Lean proofs work.
    - title: "Spinning Up: policy optimization"
      url: https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html
      why: A derivation of the formula on paper.
site:
  aiReviewed: true
---

State and prove in Lean 4 with Mathlib, for a finite discounted MDP $(S,A,P,r,\gamma)$ with $0\le\gamma<1$, (1) the Bellman operator of a stationary policy is a $\gamma$-contraction in the sup norm and has a unique fixed point $V^\pi$; (2) the performance difference lemma; (3) the policy gradient theorem for softmax policies: the map $\theta\mapsto J(\pi_\theta)$ is differentiable and its gradient equals $\sum_s d^{\pi_\theta}_\mu(s)\sum_a \pi_\theta(a\mid s)\,Q^{\pi_\theta}(s,a)\,\nabla_\theta\log\pi_\theta(a\mid s)$, where $d^{\pi}_\mu$ is the discounted state-visitation measure.

# State of the art

Mathlib has the Banach fixed-point theorem for contracting maps (Mathlib/Topology/MetricSpace/Contracting.lean, ContractingWith.fixedPoint), so step (1) reduces to showing the Bellman operator contracts. Zhang's rl-theory-in-lean project (arXiv 2511.03618, RL Journal 2026) formalises almost-sure convergence of Q-learning and linear TD with the Robbins-Siegmund theorem in Lean 4 on Mathlib. Bellman optimality for finite MDPs has been formalised in other provers (Isabelle/AFP, Coq), and Zhang's paper describes earlier Lean work as dynamic programming rather than RL. No public Lean 4 formalisation of the performance difference lemma or of the policy gradient theorem was found in Mathlib, in rl-theory-in-lean or by a search on 2026-10-17; anyone starting should check the Lean Zulip first.

# Applications

A verified base for later formal proofs of convergence of policy optimisation (natural policy gradient, PPO-style updates), and a test bed for AI theorem provers on RL theory.

# Resolution criteria

A Lean 4 development, compiled against a stated Mathlib version with no sorry and no new axioms, proving all three statements, accepted into a public repository or Mathlib-style library.

# Rating rationale

Difficulty 18: textbook mathematics; the work is building finite-MDP infrastructure (occupancy measures, softmax derivatives) in Mathlib, more than PutnamBench reproduction (8) but far below a kernel-conformance proof (52). Application value 6. Leverage 15: a base for later formal RL theory.

# Work mix rationale

Formalisation effort; the mathematics is classical.

# Verification

Route: Lean 4 + Mathlib, checked by `lake build` against a stated Mathlib commit with zero `sorry` and `#print axioms` showing only `propext`, `Classical.choice` and `Quot.sound`. Mathlib has the fixed-point theorem (`ContractingWith.fixedPoint` in Mathlib/Topology/MetricSpace/Contracting.lean) but no MDP, policy-value or occupancy-measure library; rl-theory-in-lean provides stochastic-approximation tools but not this theorem. **Sketch only, not type-checked** (the formaliser fixes the final form):

```lean
structure FiniteMDP (S A : Type) [Fintype S] [Fintype A] where
  P : S → A → S → ℝ        -- transition probabilities, nonneg, rows sum to 1
  r : S → A → ℝ
  γ : ℝ
  hγ : 0 ≤ γ ∧ γ < 1

-- softmax policy, value V^π as the fixed point of the Bellman operator, J θ = Σ_s μ s * V^{π_θ} s
theorem policy_gradient (M : FiniteMDP S A) (μ : S → ℝ) (θ : S → A → ℝ) :
    HasFDerivAt (fun θ => J M μ θ) (pgGradient M μ θ) θ := by
  sorry
```

where `pgGradient` is the occupancy-weighted sum $\sum_s d^{\pi_\theta}_\mu(s)\sum_a \pi_\theta(a\mid s)Q^{\pi_\theta}(s,a)\nabla_\theta\log\pi_\theta(a\mid s)$, and the contraction and performance-difference lemmas are proved as separate theorems.

# Plain explanation

Many AI systems that learn by practice rely on one mathematical formula. It says how to change a decision rule so that the expected reward goes up. The formula has been in textbooks since 1999. Everyone trusts it. But it has not yet been written in a language that a computer proof checker can verify step by step.

Lean is such a language. A theorem written in Lean is accepted only if every logical step is checked by the machine. A large library called Mathlib already contains much of ordinary mathematics in Lean, including a theorem that says certain shrinking maps have exactly one fixed point. That theorem is the key to showing that the value of a decision rule is well defined.

This problem asks for a team to write the definitions of a small decision world, prove the value of a rule is well defined, prove a lemma comparing two rules, and finally prove the policy gradient formula.

Why bother? A checked foundation lets people prove, with machine certainty, that learning algorithms such as natural policy gradient converge. It is also a good test for AI systems that try to write proofs. The mathematics is not new; the work is making it formal.

# Student explanation

**Why it matters.** RL theory papers contain long calculations, and errors in published proofs do occur. A proof assistant such as Lean checks every step of a proof mechanically, and Mathlib is its large shared library of formalised mathematics. Formalising the basic theorems of RL would give a checked foundation on which later results, such as convergence of PPO-style methods, can be built and machine-verified, and a test set for AI theorem provers.

**The objects.** A finite discounted MDP has finitely many states and actions, transition probabilities $P(s'\mid s,a)$, rewards $r(s,a)$ and a discount $0\le\gamma<1$. A stationary policy gives probabilities $\pi(a\mid s)$. Its value $V^\pi(s)$, the expected discounted reward when starting from $s$ (an expected value is a probability-weighted average), satisfies the Bellman equation
$V^\pi=T^\pi V^\pi,\qquad (T^\pi V)(s)=\sum_a\pi(a\mid s)\Big[r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)\,V(s')\Big].$
In words: the value of a state is the expected immediate reward plus the discounted value of wherever you land next.

**The three statements to formalise.**

1. $T^\pi$ is a contraction: applying it to two value vectors brings them closer by a factor $\gamma$ in the largest-entry (sup) distance. By the Banach fixed-point theorem a contraction has exactly one fixed point, and repeated application converges to it, so $V^\pi$ exists and is unique.
2. The performance difference lemma: the value gap between two policies equals a weighted sum of one policy's advantages, weighted by how often the other policy visits each state.
3. The policy gradient theorem for softmax policies: $J(\theta)$ is differentiable and its gradient is $\sum_s d^{\pi}(s)\sum_a\pi(a\mid s)\,Q^{\pi}(s,a)\,\nabla\log\pi(a\mid s)$, where $d^\pi$ is the discounted state-visitation measure, how often (with discounting) each state is visited.

**What exists.** Mathlib has the Banach fixed-point theorem (ContractingWith.fixedPoint), so step 1 reduces to proving the contraction inequality. Zhang's rl-theory-in-lean, published in the Reinforcement Learning Journal, formalises almost-sure convergence of Q-learning and linear TD learning in Lean 4. No Lean 4 formalisation of the performance difference lemma or of the policy gradient theorem is known, and Mathlib has no library for MDPs, policy values or occupancy measures.

**Why it is laborious rather than deep.** The mathematics is textbook, but differentiating softmax inside nested finite sums, handling the infinite discounted sum and choosing definitions that later results can reuse all take real formalisation effort.

**The target.** A Lean 4 development that compiles against a stated Mathlib version with no _sorry_ (a placeholder for a missing proof) and only the standard axioms (propext, Classical.choice, Quot.sound), proving all three statements. The statement skeleton given with the problem is a sketch that has not been type-checked.
