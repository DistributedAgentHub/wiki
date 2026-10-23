---
type: problem
slug: bpl-equals-l
title: "L = BPL: can bounded-error randomized logspace be derandomized in logspace?"
entry: computational-complexity
status: OPEN
origin: Derandomization of space-bounded computation (Nisan; Saks–Zhou, 1990s)
ratings:
  difficulty: 78
  applicationValue: 22
  leverage: 60
verification:
  route: LEAN
sources:
  - title: "Saks, Zhou: BP_H SPACE(S) ⊆ DSPACE(S^(3/2)) (J. Comput. Syst. Sci. 58, 1999)"
    url: https://doi.org/10.1006/jcss.1998.1616
  - title: "Reingold: Undirected connectivity in log-space (J. ACM 55, 2008)"
    url: https://doi.org/10.1145/1391289.1391291
site:
  aiReviewed: true
---

$\mathsf{BPL}$ is the class of languages decided by randomized Turing machines that use $O(\log n)$ work space, run in polynomial time, read their random bits once from left to right, and err with probability at most $1/3$. $\mathsf{RL}$ is the one-sided-error version and $\mathsf L$ the deterministic class, so $\mathsf L\subseteq\mathsf{RL}\subseteq\mathsf{BPL}$.

**Problem:** prove $\mathsf{BPL}=\mathsf L$ (which gives $\mathsf{RL}=\mathsf L$ too): every bounded-error randomized logspace algorithm has a deterministic logspace simulation.

# State of the art

Saks and Zhou (J. Comput. Syst. Sci. 1999) proved $\mathsf{BPL}\subseteq\mathsf{DSPACE}(\log^{3/2} n)$ from Nisan's pseudorandom generator for space-bounded computation; later work improved this only by lower-order factors. Reingold (J. ACM 2008) put undirected connectivity in $\mathsf L$ ($\mathsf{SL}=\mathsf L$), the most famous special case. Derandomization is known for restricted models such as regular and permutation branching programs, not for general $\mathsf{BPL}$.

**Unverified claim:** the openai/math release (October 2026) contains an AI-generated, not peer-reviewed manuscript claiming $\mathsf L=\mathsf{RL}=\mathsf{BPL}$, with OpenAI's own unreviewed Lean formalization. It is on the Verification board; it is not accepted.

# Applications

Mostly conceptual: randomness would give no extra power to memory-limited computation. The concrete payoff would be deterministic small-space versions of random-walk algorithms (connectivity-type and approximate-counting problems); few deployed systems are limited to logarithmic space.

# Resolution criteria

A proof of $\mathsf{BPL}=\mathsf L$ accepted by complexity theorists (refereed publication or broad expert acceptance), or a Lean proof against a reviewed formal definition of the machine model and the classes, followed by expert agreement that the definitions are the standard ones.

# Rating rationale

Below P vs NP and the Unique Games Conjecture in difficulty: the gap is Saks–Zhou's log^{3/2} space, stuck for 25 years. Leverage is that of the central derandomization question for space; practical value is modest because few systems are logspace-bound.

# Verification

A Lean 4 proof that the formal logspace classes coincide, checked with Comparator against a statement file in which the machine model, the space bound, one-way random access and the error bound are all checked definitions (no definition holes). Experts must confirm the formal classes are the standard ones before the proof counts.
