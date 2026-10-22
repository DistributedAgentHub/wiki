---
type: problem
slug: softmax-policy-gradient-iteration-complexity
title: Tight iteration complexity of exact softmax policy gradient in tabular discounted MDPs
entry: policy-gradient-ppo
status: OPEN
origin: Mei et al. (2020) upper bound; Li, Wei, Chi, Gu and Chen (2021) exponential lower bound
ratings:
  difficulty: 45
  applicationValue: 8
  leverage: 18
workMix:
  theory: 85
  engineering: 0
  compute: 10
  empirical: 5
verification:
  route: BOUNDS
sources:
  - title: Mei et al. (2020). On the Global Convergence Rates of Softmax Policy Gradient Methods (arXiv)
    url: https://arxiv.org/abs/2005.06392
  - title: Li et al. (2021). Softmax Policy Gradient Methods Can Take Exponential Time to Converge (COLT 2021; Math. Programming)
    url: https://arxiv.org/abs/2102.11270
  - title: Agarwal et al. (2019). On the Theory of Policy Gradient Methods (arXiv)
    url: https://arxiv.org/abs/1908.00261
timeline:
  - date: 2020-05-13
    title: O(1/t) rate
    body: Mei et al. prove a sublinear rate with problem-dependent constants.
    source: https://arxiv.org/abs/2005.06392
  - date: 2021-02-22
    title: Exponential lower bound
    body: Li et al. exhibit a three-action MDP requiring exponentially many iterations (preprint).
    source: https://arxiv.org/abs/2102.11270
explainer:
  oneLine: How many small steps does the most basic way of improving a decision rule need, in the worst case?
  flow:
    - Step uphill on expected reward
    - Tiny probabilities slow the gradient
    - Delays pile up across states
    - Slowdown grows with horizon
    - Is the bound tight?
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts to collect more reward."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: MDP
      meaning: "Markov decision process: the standard mathematical model of an agent choosing actions in a changing world with rewards."
      link: https://en.wikipedia.org/wiki/Markov_decision_process
    - term: softmax
      meaning: A function that turns a list of scores into probabilities that add up to one.
      link: https://en.wikipedia.org/wiki/Softmax_function
    - term: policy gradient
      meaning: A method that improves a policy by following the slope of expected reward.
      link: /research/policy-gradient-ppo
    - term: discount factor
      meaning: A number below 1 that makes later rewards count less.
      link: https://en.wikipedia.org/wiki/Markov_decision_process
    - term: effective horizon
      meaning: Roughly how many steps ahead the agent must plan, 1 divided by (1 minus the discount factor).
      link: https://en.wikipedia.org/wiki/Markov_decision_process
    - term: lower bound
      meaning: A proof that no method (or this method) can do better than a stated amount.
      link: https://en.wikipedia.org/wiki/Upper_and_lower_bounds
    - term: gradient
      meaning: "The vector of partial derivatives of a function: the slope in every parameter direction at once, pointing uphill."
      link: https://en.wikipedia.org/wiki/Gradient
    - term: big O / Omega notation
      meaning: "Shorthand for growth rates: O(x) means at most a constant times x, Ω(x) at least a constant times x."
      link: https://en.wikipedia.org/wiki/Big_O_notation
  readFirst:
    - title: On the Global Convergence Rates of Softmax Policy Gradient Methods (arXiv)
      url: https://arxiv.org/abs/2005.06392
      why: The upper bound and its limits.
    - title: Softmax Policy Gradient Methods Can Take Exponential Time to Converge (arXiv preprint)
      url: https://arxiv.org/abs/2102.11270
      why: The lower-bound construction.
    - title: "Spinning Up: policy optimization"
      url: https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html
      why: Background on policy gradients.
site:
  aiReviewed: true
---

For a $\gamma$-discounted tabular MDP with $|\mathcal{S}|$ states and effective horizon $1/(1-\gamma)$, consider gradient ascent on the softmax-parametrised policy with exact gradients and step size $\eta$, from the uniform policy. Determine the worst-case number of iterations needed to reach an $\varepsilon$-optimal policy as an explicit function of $|\mathcal{S}|$, $|\mathcal{A}|$, $1/(1-\gamma)$, $1/\varepsilon$ and $1/\eta$, with matching upper and lower bounds.

# State of the art

Mei et al. (2020) prove an $O(1/t)$ rate with constants depending on the problem and initialisation. Li et al. (COLT 2021; Mathematical Programming) show that the iteration count can be at least $\frac{1}{\eta}|\mathcal{S}|^{2^{\Omega(1/(1-\gamma))}}$ for some MDP with three actions, even with a benign initialisation and an initial distribution amenable to exploration, so the dependence on horizon can be doubly exponential in the exponent. Whether this is tight, and what is the worst case from uniform initialisation with explicit constants, is not settled. Regularised and natural policy gradient methods avoid the lower bound.

# Applications

Indirect: sharpens understanding of why practical policy optimisation needs regularisation, natural gradients or trust regions, which are used in PPO and GRPO.

# Resolution criteria

A proved matching upper and lower bound, with the hard MDP family given explicitly and its gradient dynamics recomputed numerically for small cases by an independent referee.

# Rating rationale

Difficulty 45: a precise theory question with strong partial results on both sides (an O(1/t) upper bound with problem-dependent constants, a doubly exponential lower bound); comparable to simplex-smoothed-complexity-dimension-dependence (38) but less studied. Application value 8: practice uses regularised or clipped variants. Leverage 18: policy-optimisation theory only.

# Work mix rationale

A proof problem; small numerical experiments on the hard MDP family only check lower-bound dynamics.

# Verification

Quantity: worst-case iterations $T(\varepsilon)$ of exact-gradient softmax policy gradient from uniform initialisation. Current record: lower bound $\frac{1}{\eta}|\mathcal{S}|^{2^{\Omega(1/(1-\gamma))}}$ (Li et al., 2021, arXiv 2102.11270); upper bounds with problem-dependent constants (Mei et al., arXiv 2005.06392). Certificate for an improvement: a written proof of a matching upper bound or of a strictly stronger lower bound, plus the explicit MDP transition and reward tables for the hard family so that a referee can integrate the gradient flow or iterate the update in exact rational or high-precision arithmetic for small $|\mathcal{S}|$ and compare iteration counts with the claimed bound.

# Plain explanation

Think of a hiker trying to reach the top of a hill by always stepping uphill. On a smooth hill she gets there quickly. On a hill with a long flat plateau before the slope, she barely moves for ages, because the ground looks flat.

The simplest method for training a decision rule, called policy gradient with a softmax, behaves a bit like that hiker. It always takes small steps that raise the expected reward. For small problems it reaches the best rule. But how long does it take in the worst case?

A 2020 result showed it always gets there, at a speed that depends on constants nobody could easily bound. In 2021, researchers built a tricky example where the number of steps is enormous: growing faster than any simple exponential in how far ahead the rule must plan. That tells us the basic method can be extremely slow even when the problem looks friendly.

The open question is the exact worst-case speed: matching a lower bound with an upper bound. It is a pure maths question, not about how well practical AI works, since real systems add extra tricks that avoid the slow cases.

# Student explanation

**Why it matters.** Policy-gradient methods, the family behind PPO and GRPO, are used everywhere, yet basic questions about how fast they converge are open even in the simplest setting. This problem asks for the exact worst-case speed there.

**The setting.** A Markov decision process (MDP) has a finite set of states $S$ and actions $A$; in each state the agent picks an action, receives a reward and moves to a next state with given probabilities. Future rewards are discounted by $\gamma<1$, and the effective horizon $1/(1-\gamma)$ is roughly how many steps ahead the agent cares about ($\gamma=0.99$ gives 100). The policy is a softmax: each state-action pair has a parameter $\theta_{s,a}$, and
$\pi_\theta(a\mid s)=\frac{e^{\theta_{s,a}}}{\sum_b e^{\theta_{s,b}}},$
which turns arbitrary numbers into positive probabilities summing to 1. The algorithm is plain gradient ascent with the exact gradient (no sampling noise): $\theta\leftarrow\theta+\eta\nabla_\theta V^{\pi_\theta}$ with step size $\eta$, where the gradient is the vector of partial derivatives of the value with respect to every parameter.

**What is known.** Agarwal et al. (2019) proved that this converges to an optimal policy. Mei et al. (ICML 2020) proved the error falls like $1/t$ after $t$ iterations, but with constants that depend on the specific problem and the starting point and can be enormous. Li, Wei, Chi, Gu and Chen (COLT 2021; Mathematical Programming) built a three-action MDP on which the method needs at least $\frac{1}{\eta}|S|^{2^{\Omega(1/(1-\gamma))}}$ iterations, even from a benign start. In words: the number of states raised to a power that itself grows exponentially with the horizon, a doubly exponential slowdown. ($\Omega(x)$ means "at least a constant times $x$".) The cause is plateaus: when the optimal action has a small probability, the softmax makes its gradient tiny, so that probability grows very slowly.

**What is unknown.** Whether this lower bound is tight, meaning a matching upper bound holds for every MDP, and what the worst case is from the natural uniform starting policy, written as an explicit function of $|S|$, $|A|$, the horizon, the accuracy $\varepsilon$ and the step size.

**Why practice cares.** Regularised versions (adding an entropy bonus that rewards keeping some randomness) and natural policy gradient avoid the bad lower bound, which is part of why practical algorithms use trust regions, clipping or KL penalties.

**What counts as a solution.** A written proof of matching upper and lower bounds, together with the explicit transition and reward tables of the hard MDP family, so that a referee can run the exact update on small cases (in exact fractions or high-precision arithmetic) and compare the iteration counts with the claimed formula.
