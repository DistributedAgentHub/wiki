---
type: entry
slug: policy-gradient-ppo
title: Policy gradient methods and PPO
field: reinforcement-learning
kind: ALGORITHM
status: MATURE
summary: Methods that improve a policy directly by following a sampled estimate of the gradient of expected return. Proximal Policy Optimization (PPO) is the default on-policy variant in games, robotics and language models.
reliedOn: PPO is the optimiser behind OpenAI Five, the original RLHF pipelines for instruction-following models, and most RL baselines; GRPO and other reasoning-model recipes are modifications of its clipped objective.
dependsOn:
  - reverse-mode-autodiff
references:
  - title: Williams (1992). Simple statistical gradient-following algorithms for connectionist reinforcement learning
    url: https://doi.org/10.1007/BF00992696
    kind: paper
  - title: Sutton et al. (1999). Policy gradient methods for reinforcement learning with function approximation
    url: https://proceedings.neurips.cc/paper/1999/hash/464d828b85b0bed98e80ade0a5c43b0f-Abstract.html
    kind: paper
  - title: Schulman et al. (2015). Trust Region Policy Optimization (arXiv)
    url: https://arxiv.org/abs/1502.05477
    kind: paper
  - title: Schulman et al. (2015). Generalized Advantage Estimation (arXiv)
    url: https://arxiv.org/abs/1506.02438
    kind: paper
  - title: Schulman et al. (2017). Proximal Policy Optimization Algorithms (arXiv)
    url: https://arxiv.org/abs/1707.06347
    kind: paper
  - title: Engstrom et al. (2020). Implementation Matters in Deep Policy Gradients (arXiv)
    url: https://arxiv.org/abs/2005.12729
    kind: paper
  - title: The 37 implementation details of PPO (ICLR blog track, 2022)
    url: https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/
    kind: article
  - title: "Spinning Up: policy optimization introduction"
    url: https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html
    kind: docs
  - title: Agarwal et al. (2019). On the Theory of Policy Gradient Methods (arXiv)
    url: https://arxiv.org/abs/1908.00261
    kind: paper
timeline:
  - date: 1992-05-01
    title: REINFORCE
    body: Williams publishes the likelihood-ratio gradient estimator for stochastic policies. Month is known, day approximated.
    source: https://doi.org/10.1007/BF00992696
  - date: 1999-11-29
    title: Policy gradient theorem with function approximation
    body: Sutton, McAllester, Singh and Mansour prove the gradient formula for parametrised policies (NeurIPS 1999 proceedings; date approximate).
    source: https://proceedings.neurips.cc/paper/1999/hash/464d828b85b0bed98e80ade0a5c43b0f-Abstract.html
  - date: 2015-02-19
    title: TRPO
    body: Trust Region Policy Optimization introduces a KL-constrained surrogate objective with a monotonic-improvement argument.
    source: https://arxiv.org/abs/1502.05477
  - date: 2017-07-20
    title: PPO
    body: Proximal Policy Optimization introduces the clipped surrogate objective that allows several epochs of updates per batch.
    source: https://arxiv.org/abs/1707.06347
  - date: 2020-05-25
    title: Implementation matters
    body: Engstrom et al. attribute much of PPO's gain over TRPO on MuJoCo tasks to code-level optimisations rather than the clipping rule.
    source: https://arxiv.org/abs/2005.12729
  - date: 2021-02-22
    title: Exponential-time lower bound for softmax policy gradient
    body: Li, Wei, Chi, Gu and Chen construct a three-action MDP on which exact-gradient softmax policy gradient needs a number of iterations doubly exponential in the effective horizon (COLT 2021; Mathematical Programming).
    source: https://arxiv.org/abs/2102.11270
explainer:
  oneLine: Teach a decision-maker by nudging it toward actions that worked, in small safe steps.
  flow:
    - Try actions, collect rewards
    - Estimate which actions beat average
    - Nudge policy toward better actions
    - Clip the change to stay safe
    - Repeat with fresh experience
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts its behaviour to collect more reward over time."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: policy
      meaning: The rule an agent uses to choose an action in each situation. In deep RL it is usually a neural network.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning#Policy
    - term: reward
      meaning: A number the environment gives after each action, telling the agent how well it is doing.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: gradient
      meaning: The direction in which a number changes fastest. Training follows it to improve the model a little at a time.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: KL divergence
      meaning: A measure of how different one probability distribution is from another. Used to keep a new policy close to an old one.
      link: https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence
    - term: advantage
      meaning: How much better an action was than the typical action in the same situation.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning#Value_function
    - term: baseline
      meaning: A reference value subtracted from rewards to make gradient estimates less noisy without changing their average.
      link: https://en.wikipedia.org/wiki/Policy_gradient_method
    - term: discount factor
      meaning: A number below 1 that makes rewards sooner count more than rewards later.
      link: https://en.wikipedia.org/wiki/Markov_decision_process
    - term: neural network
      meaning: A large function with many adjustable numbers (weights), fitted to data by gradient descent; it maps inputs such as a game screen to outputs such as action probabilities.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: expected value
      meaning: The probability-weighted average of all possible outcomes, i.e. the long-run average if the experiment were repeated many times.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: REINFORCE
      meaning: "The simplest policy-gradient method: weight the log-probability gradient of each taken action by the return that followed it."
      link: https://en.wikipedia.org/wiki/Policy_gradient_method
  readFirst:
    - title: "Spinning Up: Intro to policy optimization"
      url: https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html
      why: Clear derivation of the policy gradient with code pointers.
    - title: "Wikipedia: Policy gradient method"
      url: https://en.wikipedia.org/wiki/Policy_gradient_method
      why: Short summary of REINFORCE and variants.
    - title: The 37 implementation details of PPO
      url: https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/
      why: Shows how many small choices make up 'PPO' in practice.
site:
  published: true
  aiReviewed: true
---

## The problem they solve

A reinforcement learning agent picks actions $a$ in states $s$ with a policy $\pi_\theta(a\mid s)$ and receives rewards. The goal is to maximise the expected discounted return $J(\theta)=\mathbb{E}_{\pi_\theta}\left[\sum_t \gamma^t r_t\right]$. Value-based methods such as Q-learning learn how good actions are and act greedily on that. Policy gradient methods instead adjust the parameters $\theta$ of the policy itself, which handles continuous actions and stochastic policies naturally.

## The policy gradient theorem

Sutton, McAllester, Singh and Mansour (NeurIPS 1999) showed that the gradient of $J$ can be written without differentiating the unknown state distribution:

$\nabla_\theta J(\theta)=\mathbb{E}_{\pi_\theta}\left[\nabla_\theta \log \pi_\theta(a\mid s)\, Q^{\pi_\theta}(s,a)\right].$

Williams's REINFORCE (1992) is the Monte Carlo estimator of this expression, using sampled returns in place of $Q$. Its variance is high. Subtracting a state-dependent baseline, usually a learned value function $V(s)$, leaves the gradient unbiased and reduces variance; the weight on $\nabla\log\pi$ becomes an _advantage_ $A(s,a)=Q(s,a)-V(s)$. Generalised Advantage Estimation (Schulman et al., 2015) trades bias against variance with a parameter $\lambda$ and is the standard advantage estimator in actor-critic code.

## Trust regions and PPO

A plain gradient step can change the policy so much that performance collapses and the data collected under the old policy no longer describes the new one. Trust Region Policy Optimization (TRPO, Schulman et al., 2015) maximises a surrogate objective subject to a bound on the KL divergence between old and new policy, with a monotonic-improvement argument behind it. PPO (Schulman et al., 2017) replaces the constrained problem with a cheap clipped surrogate. With the probability ratio $\rho_t(\theta)=\pi_\theta(a_t\mid s_t)/\pi_{\theta_{\text{old}}}(a_t\mid s_t)$ it maximises

$L^{\text{CLIP}}(\theta)=\mathbb{E}_t\left[\min\left(\rho_t A_t,\ \operatorname{clip}(\rho_t,1-\epsilon,1+\epsilon)A_t\right)\right],$

which removes the incentive to move the ratio outside $[1-\epsilon,1+\epsilon]$, so several epochs of minibatch updates can reuse one batch of rollouts. The paper's experiments used $\epsilon=0.2$ as the best-performing value.

## What the algorithm really is

Engstrom et al. (2020) found that much of PPO's advantage over TRPO on continuous-control benchmarks comes from code-level choices such as value-function clipping, reward scaling, orthogonal initialisation and learning-rate annealing, not from the clipping rule itself. Huang et al. documented 37 implementation details that affect results. The consequence is that "PPO" in a paper and "PPO" in a library can differ materially, and reproduction claims need the code, not only the objective.

## Where it is used

PPO trained OpenAI Five (Dota 2, 2019) and was the reinforcement-learning stage of InstructGPT. Open reference implementations include CleanRL and Stable-Baselines3. Theory lags practice: tabular and softmax policy gradient have global convergence guarantees under assumptions on distribution mismatch (Agarwal et al., 2019), and softmax policy gradient can need exponentially many iterations in the effective horizon (Li et al., 2021), but guarantees for the clipped objective used in practice with neural networks are limited to overparametrised variants (Liu et al., 2019).

# Plain explanation

Imagine learning to throw darts. You throw, see where the dart lands, and adjust your arm a little for the next throw. If a throw was good you do more of what you did; if it was bad you do less. You never need a full theory of physics. You only need feedback and a willingness to adjust.

Policy gradient methods do the same for a computer. The computer has a "policy", which is its way of choosing what to do. It tries things, gets a score, and changes the policy so that actions that led to good scores become more likely.

There is a catch. If you change your arm too much after one lucky throw, you may get worse. So modern methods limit how big each change can be. The most widely used one is called PPO. It lets the program learn from the same batch of experience a few times, but gently stops it from changing too much.

PPO has been used to train game-playing programs and to fine-tune chatbots with human feedback. It is popular because it is simple and usually works without much fuss.

The analogy breaks in one place: dart throwing gives quick, clear feedback, while many computer tasks give a reward only at the very end, which makes it hard to know which earlier step deserves credit.

# Student explanation

**What it is for.** Reinforcement learning (RL) trains an agent, a program that picks actions, by trial and error: it acts, receives a number called a reward, and adjusts itself to collect more reward over time. A robot arm learning to grasp or a game agent learning to win are typical cases. The **policy** is the agent's rule for choosing actions. Here it is a neural network, a large function with adjustable parameters $\theta$ fitted by gradient descent, that outputs a probability for each action.

**The goal.** The agent maximises the expected discounted return $J(\theta)=\mathbb{E}[\sum_t \gamma^t r_t]$. An expected value is a probability-weighted average over everything that could happen. The discount factor $\gamma$ (slightly below 1) makes rewards far in the future count a little less, like interest in reverse.

**The policy gradient.** Gradient ascent climbs $J$ by moving $\theta$ along the gradient, the vector of partial derivatives (the slope in every parameter direction at once). The difficulty is that $J$ depends on the environment, which cannot be differentiated. The policy gradient theorem (Sutton et al., 1999) avoids this:
$\nabla_\theta J=\mathbb{E}\big[\nabla_\theta\log\pi_\theta(a\mid s)\,A(s,a)\big].$
In words: for each action actually taken, nudge the parameters to make that action more likely if it turned out better than expected (positive advantage $A$) and less likely if worse. The advantage is the action's return minus a baseline, an estimate $V(s)$ of how good the situation was anyway. Subtracting the baseline leaves the average direction unchanged but makes the noisy estimate much steadier. REINFORCE (Williams, 1992) is the simplest version, using sampled returns.

**Why PPO.** A step that is too large can change the policy so much that performance collapses, and the data collected under the old policy no longer describes the new one. TRPO (2015) limits each step by the KL divergence, a measure of how different two probability distributions are. PPO (Schulman et al., 2017) gets a similar effect cheaply: it computes the ratio $\rho$ between the new and old probability of each action and clips it to $[1-\epsilon,1+\epsilon]$ (the paper used $\epsilon=0.2$), so the update gains nothing by moving further. Several passes of updates can then reuse one batch of experience.

**In practice.** Engstrom et al. (2020) found that much of PPO's advantage over TRPO on robot-control benchmarks came from code-level details (reward scaling, initialisation, learning-rate schedules) rather than the clipping rule. PPO trained OpenAI Five and the RL stage of InstructGPT; CleanRL and Stable-Baselines3 hold reference implementations.
