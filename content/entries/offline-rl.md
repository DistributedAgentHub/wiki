---
type: entry
slug: offline-rl
title: Offline reinforcement learning
field: reinforcement-learning
kind: ALGORITHM
status: ACTIVE
summary: "Learning a policy from a fixed dataset of past interactions with no further data collection. The central difficulty is distribution shift: the learned policy queries actions the data never covered."
reliedOn: Offline RL is what makes RL usable where exploration is costly or unsafe, such as healthcare, recommendation and robotics logs, and its pessimism principle also appears in language-model alignment.
dependsOn:
  - policy-gradient-ppo
references:
  - title: "Levine et al. (2020). Offline RL: Tutorial, Review, and Perspectives on Open Problems (arXiv)"
    url: https://arxiv.org/abs/2005.01643
    kind: paper
  - title: Fujimoto, Meger, Precup (2018). Off-Policy Deep RL without Exploration (arXiv)
    url: https://arxiv.org/abs/1812.02900
    kind: paper
  - title: Kumar et al. (2020). Conservative Q-Learning (arXiv)
    url: https://arxiv.org/abs/2006.04779
    kind: paper
  - title: Kostrikov et al. (2021). Implicit Q-Learning (arXiv)
    url: https://arxiv.org/abs/2110.06169
    kind: paper
  - title: Chen et al. (2021). Decision Transformer (arXiv)
    url: https://arxiv.org/abs/2106.01345
    kind: paper
  - title: Fu et al. (2020). D4RL (arXiv)
    url: https://arxiv.org/abs/2004.07219
    kind: paper
  - title: Fu et al. (2021). Benchmarks for Deep Off-Policy Evaluation (arXiv)
    url: https://arxiv.org/abs/2103.16596
    kind: paper
  - title: Paine et al. (2020). Hyperparameter Selection for Offline RL (arXiv)
    url: https://arxiv.org/abs/2007.09055
    kind: paper
  - title: Li et al. (2022). Settling the Sample Complexity of Model-Based Offline RL (arXiv)
    url: https://arxiv.org/abs/2204.05275
    kind: paper
  - title: Xiong et al. (2022). Nearly Minimax Optimal Offline RL with Linear Function Approximation (arXiv)
    url: https://arxiv.org/abs/2205.15512
    kind: paper
timeline:
  - date: 2018-12-07
    title: Extrapolation error and BCQ
    body: Fujimoto et al. show standard off-policy agents fail on fixed datasets and propose batch-constrained learning.
    source: https://arxiv.org/abs/1812.02900
  - date: 2020-04-15
    title: D4RL
    body: Benchmark datasets for offline RL released.
    source: https://arxiv.org/abs/2004.07219
  - date: 2020-05-04
    title: Offline RL tutorial
    body: Levine et al. survey the field and its open problems.
    source: https://arxiv.org/abs/2005.01643
  - date: 2020-06-08
    title: Conservative Q-Learning
    body: CQL learns a lower-bound value function through a conservative regulariser.
    source: https://arxiv.org/abs/2006.04779
  - date: 2022-04-11
    title: Minimax-optimal tabular offline RL
    body: Li et al. show a pessimistic model-based method is minimax optimal for the entire accuracy range in tabular MDPs.
    source: https://arxiv.org/abs/2204.05275
  - date: 2022-05-31
    title: Nearly minimax optimal linear offline RL
    body: Xiong et al. give an efficient algorithm matching a lower bound up to log factors in linear MDPs.
    source: https://arxiv.org/abs/2205.15512
explainer:
  oneLine: Learning to act well from a pile of past records, without trying anything new.
  flow:
    - Collect logged decisions
    - Learn without new trials
    - Stay cautious about untried actions
    - Pick the best learned version
    - Deploy and monitor
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
    - term: distribution shift
      meaning: When the situations a model meets differ from the ones it was trained on.
      link: https://en.wikipedia.org/wiki/Concept_drift
    - term: Q-value
      meaning: An estimate of how much total reward follows from taking a given action in a given situation.
      link: https://en.wikipedia.org/wiki/Q-learning
    - term: pessimism
      meaning: In offline RL, deliberately lowering value estimates where data is scarce.
      link: https://arxiv.org/abs/2005.01643
    - term: off-policy evaluation
      meaning: Estimating how well a policy would do using data collected by a different policy.
      link: https://arxiv.org/abs/2103.16596
    - term: D4RL
      meaning: A standard set of datasets for testing offline RL.
      link: https://arxiv.org/abs/2004.07219
    - term: expected value
      meaning: The probability-weighted average of all possible outcomes.
      link: https://en.wikipedia.org/wiki/Expected_value
    - term: hyperparameter
      meaning: A setting chosen before training, such as the learning rate or penalty strength, rather than learned from data.
      link: https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)
    - term: extrapolation
      meaning: Predicting values outside the range covered by the data, where errors can be large.
      link: https://en.wikipedia.org/wiki/Extrapolation
    - term: discount factor
      meaning: A number γ slightly below 1 that makes rewards further in the future count less.
      link: https://en.wikipedia.org/wiki/Markov_decision_process
  readFirst:
    - title: Offline RL tutorial (Levine et al., arXiv)
      url: https://arxiv.org/abs/2005.01643
      why: Standard introduction with open problems.
    - title: "Wikipedia: Reinforcement learning"
      url: https://en.wikipedia.org/wiki/Reinforcement_learning
      why: Background for newcomers.
    - title: "CORL: single-file offline RL implementations"
      url: https://github.com/corl-team/CORL
      why: Readable reference code.
raw:
  body: "## The setting\n\nIn offline (batch) RL the agent receives a dataset $\\mathcal{D}$ of transitions collected by some behaviour policy and must output a policy with no environment access. Off-policy algorithms such as DQN or DDPG fail here: their value estimates overestimate actions absent from the data, and the policy then exploits those errors. Fujimoto, Meger and Precup (2018) named this *extrapolation error* and proposed Batch-Constrained Q-learning (BCQ), restricting the policy to actions near the data.\n\n## Main algorithm families\n\n- **Policy constraint methods** (BCQ, BEAR, TD3+BC) keep the learned policy close to the behaviour policy.\n- **Conservative value methods** such as Conservative Q-Learning (Kumar et al., 2020) add a regulariser that lowers Q-values for out-of-distribution actions, so the learned value lower-bounds the true one.\n- **Implicit methods** such as Implicit Q-Learning (Kostrikov et al., 2021) avoid evaluating out-of-dataset actions by fitting value functions with expectile regression.\n- **Sequence-model approaches** such as Decision Transformer (Chen et al., 2021) treat RL as conditional sequence prediction on returns-to-go.\n\nLevine et al. (2020) give the standard tutorial and list open problems, including offline hyperparameter selection and evaluation.\n\n## Benchmarks\n\nD4RL (Fu et al., 2020) provides datasets for locomotion, navigation (AntMaze), manipulation and driving with normalised scores, and became the default benchmark. CORL provides single-file reference implementations. Evaluating a policy without running it requires off-policy evaluation; the DOPE benchmark (Fu et al., 2021) tests this. Paine et al. (2020) study offline hyperparameter selection and report that, with the algorithm and Q-estimator controlled, policies can be ranked well enough to choose close to the best of a set.\n\n## Theory\n\nPessimism, subtracting an uncertainty penalty from value estimates, is the theoretical principle. For tabular MDPs, Li et al. (2022) show that a pessimistic model-based method attains minimax-optimal sample complexity under single-policy clipped concentrability, of order $H^4 S C^\\star_{\\text{clipped}}/\\varepsilon^2$ in the finite-horizon case. For linear MDPs, Xiong et al. (2022) give a computationally efficient algorithm nearly matching a lower bound up to logarithmic factors. Beyond linear function approximation the picture is less complete.\n\n## Practice\n\nOffline pretraining followed by online fine-tuning, offline data in robotics, and logged-feedback learning in recommendation are the main uses. Unlike online RL, results are sensitive to dataset quality and to choosing hyperparameters without environment access."
site:
  published: true
  aiReviewed: true
---

# Plain explanation

Imagine you want to train an AI to help doctors choose treatments. You cannot let it experiment on patients. But hospitals have years of records: what was done and what happened. Offline reinforcement learning tries to learn a better strategy from such records alone.

This is harder than it sounds. In the records, doctors only tried some options. If the AI is allowed to wonder "what if I did something nobody tried?", it has no data to answer, and it will tend to be over-optimistic about those untried options. It may then choose them and fail.

The main idea to deal with this is caution. Offline methods are built to be pessimistic about anything the data does not cover. They either keep the AI's choices close to what was done in the records, or they lower their estimates for untried actions.

Another headache: how do you know which trained version is best? Normally you would test each one, but that is exactly what you cannot do. Finding ways to judge a strategy using only the old records is an active research problem.

# Student explanation

**What it is for.** Ordinary RL learns by trying things, including bad things. A hospital cannot try random drug doses on patients and a self-driving car cannot crash in order to learn, but both have large logs of past decisions and outcomes. Offline RL learns a policy from such a fixed dataset, with no new interaction allowed.

**Example.** A dataset holds a million recorded steps of a walking robot, collected by an earlier, mediocre controller. Can a better controller be learned from those records alone?

**Why the obvious method fails.** Q-learning estimates $Q(s,a)$, the expected future reward of taking action $a$ in state $s$ (an expected value: a probability-weighted average of outcomes), and then picks the action with the highest $Q$. Its update is
$Q(s,a)\leftarrow r+\gamma\max_{a'}Q(s',a'),$
the reward just received plus the discounted value of the best next action. The $\max$ looks at every possible next action, including ones that never appear in the data. For those, the network's estimate is pure extrapolation, and some extrapolated values are too high by chance. The max picks exactly those errors, the policy follows them, and no new data ever corrects them. Fujimoto, Meger and Precup (2018) called this extrapolation error; the general name for the mismatch between the data's actions and the learned policy's actions is distribution shift.

**The fix: pessimism.** Successful methods stay cautious where data is thin.

- _Policy constraints_ (BCQ, TD3+BC) keep the new policy close to the actions in the data.
- _Conservative Q-Learning_ (CQL, 2020) adds a penalty that pushes down $Q$ for actions outside the data, so the learned value underestimates rather than overestimates.
- _Implicit Q-Learning_ (IQL, 2021) never evaluates actions outside the data at all.
- _Decision Transformer_ (2021) treats the problem as predicting the next action in a sequence, conditioned on the return wanted.

Theory backs the idea: for small (tabular) problems, a pessimistic model-based method needs the fewest samples possible up to constant factors (Li et al., 2022), provided the data covers the states a good policy visits.

**Benchmarks and the open gap.** D4RL (2020) provides standard datasets for simulated robots and mazes, scored so that 0 is a random policy and 100 an expert. A persistent practical problem is choosing hyperparameters (settings such as learning rate or penalty strength) without testing candidates in the real environment, which defeats the purpose of going offline. That requires off-policy evaluation, estimating how well a policy would do from logged data alone, which has no general guarantee when the policy takes actions the log rarely contains.
