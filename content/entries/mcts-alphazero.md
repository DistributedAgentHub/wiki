---
type: entry
slug: mcts-alphazero
title: Monte Carlo tree search and AlphaZero
field: reinforcement-learning
kind: ALGORITHM
status: MATURE
summary: Planning by growing a search tree from simulated rollouts, guided by a learned policy and value network that is itself trained on the search results. It produced superhuman Go, chess and shogi from self-play.
reliedOn: AlphaZero-style search-plus-learning is the template for game-playing agents (KataGo, Leela), for learned-model planners such as MuZero, and for search over language-model reasoning steps.
dependsOn:
  - policy-gradient-ppo
  - reverse-mode-autodiff
references:
  - title: Kocsis, Szepesvári (2006). Bandit based Monte-Carlo planning
    url: https://doi.org/10.1007/11871842_29
    kind: paper
  - title: Coulom (2006). Efficient selectivity and backup operators in Monte-Carlo tree search
    url: https://doi.org/10.1007/978-3-540-75538-8_7
    kind: paper
  - title: Silver et al. (2016). Mastering the game of Go with deep neural networks and tree search
    url: https://doi.org/10.1038/nature16961
    kind: paper
  - title: Silver et al. (2017). Mastering the game of Go without human knowledge
    url: https://doi.org/10.1038/nature24270
    kind: paper
  - title: Silver et al. (2017). Mastering Chess and Shogi by Self-Play (arXiv)
    url: https://arxiv.org/abs/1712.01815
    kind: paper
  - title: Wu (2019). Accelerating Self-Play Learning in Go (arXiv)
    url: https://arxiv.org/abs/1902.10565
    kind: paper
  - title: Danihelka et al. (2022). Policy improvement by planning with Gumbel (ICLR 2022)
    url: https://openreview.net/forum?id=bERaNdoegnO
    kind: paper
  - title: "mctx: MCTS in JAX (README)"
    url: https://github.com/google-deepmind/mctx
    kind: code
timeline:
  - date: 2006-09-01
    title: UCT and MCTS
    body: Kocsis and Szepesvári publish UCT; Coulom names Monte Carlo tree search. Month approximate.
    source: https://doi.org/10.1007/11871842_29
  - date: 2016-01-27
    title: AlphaGo
    body: Nature publishes AlphaGo, combining policy and value networks with MCTS.
    source: https://doi.org/10.1038/nature16961
  - date: 2017-10-19
    title: AlphaGo Zero
    body: Self-play from scratch without human data (publication date approximate within October 2017).
    source: https://doi.org/10.1038/nature24270
  - date: 2017-12-05
    title: AlphaZero
    body: The same algorithm masters chess and shogi as well as Go (arXiv preprint; later in Science, 2018).
    source: https://arxiv.org/abs/1712.01815
  - date: 2019-02-27
    title: KataGo
    body: Open-source engine reports a 50x compute reduction over comparable methods (arXiv preprint).
    source: https://arxiv.org/abs/1902.10565
explainer:
  oneLine: A program that thinks ahead by trying many imagined games and learns from its own matches.
  flow:
    - Imagine many games from here
    - Focus on promising moves
    - Network guesses moves and winner
    - Search improves the guess
    - Train network on search results
  glossary:
    - term: reinforcement learning
      meaning: "Learning by trial and error: an agent acts, gets rewards, and adjusts its behaviour to collect more reward over time."
      link: https://en.wikipedia.org/wiki/Reinforcement_learning
    - term: policy
      meaning: The rule an agent uses to choose an action in each situation. In deep RL it is usually a neural network.
      link: https://en.wikipedia.org/wiki/Reinforcement_learning#Policy
    - term: Monte Carlo tree search
      meaning: A planning method that tries many simulated move sequences and focuses on the promising ones.
      link: https://en.wikipedia.org/wiki/Monte_Carlo_tree_search
    - term: self-play
      meaning: An agent improving by playing against copies of itself.
      link: https://en.wikipedia.org/wiki/Self-play
    - term: neural network
      meaning: A function made of many adjustable numbers that is trained to produce useful outputs.
      link: https://en.wikipedia.org/wiki/Neural_network_(machine_learning)
    - term: value network
      meaning: A network that estimates how likely a position is to be a win.
      link: https://en.wikipedia.org/wiki/AlphaGo
    - term: upper confidence bound
      meaning: A rule that picks options by their average result plus a bonus for being tried rarely.
      link: https://en.wikipedia.org/wiki/Multi-armed_bandit
    - term: branching factor
      meaning: The number of moves available in a typical position; larger means harder search.
      link: https://en.wikipedia.org/wiki/Branching_factor
    - term: Monte Carlo method
      meaning: Estimating a quantity by averaging the results of many random trials.
      link: https://en.wikipedia.org/wiki/Monte_Carlo_method
    - term: gradient descent
      meaning: Repeatedly adjusting a model's parameters a small step against the slope of its error, so the error decreases.
      link: https://en.wikipedia.org/wiki/Gradient_descent
    - term: Go
      meaning: A two-player board game on a 19×19 grid with a very large number of possible positions.
      link: https://en.wikipedia.org/wiki/Go_(game)
    - term: TPU
      meaning: "Tensor Processing Unit: Google's chip specialised for neural-network arithmetic."
      link: https://en.wikipedia.org/wiki/Tensor_Processing_Unit
  readFirst:
    - title: "Wikipedia: Monte Carlo tree search"
      url: https://en.wikipedia.org/wiki/Monte_Carlo_tree_search
      why: Short overview of the four steps.
    - title: "Wikipedia: AlphaZero"
      url: https://en.wikipedia.org/wiki/AlphaZero
      why: History and results.
    - title: Mastering the game of Go without human knowledge (Nature)
      url: https://doi.org/10.1038/nature24270
      why: The AlphaGo Zero paper.
site:
  published: true
  aiReviewed: true
---

## Monte Carlo tree search

MCTS builds a game tree incrementally. Each iteration (a _simulation_) selects a path from the root using statistics stored in the tree, expands a leaf, evaluates it, and backs the result up the path. Kocsis and Szepesvári (2006) introduced UCT, which treats each node's choice as a bandit problem and picks children by an upper confidence bound, and Coulom (2006) introduced the term Monte Carlo tree search. Before neural networks, MCTS with random rollouts was the strongest approach to Go, though still below top professionals.

## AlphaGo, AlphaGo Zero and AlphaZero

AlphaGo (Silver et al., Nature 2016) combined MCTS with a policy network trained on human games and a value network, and beat a professional player. AlphaGo Zero (Nature 2017) removed human data: a single network outputs move probabilities $p$ and a value $v$, MCTS using them produces improved move distributions, and the network is trained to match the search's visit-count distribution and the game outcome. Search therefore acts as a _policy improvement operator_ and the network distils its result, repeated in a self-play loop. AlphaZero (Silver et al., 2017; Science 2018) applied the same algorithm unchanged to chess and shogi.

Selection uses a PUCT rule, roughly

$a^*=\arg\max_a\left[Q(s,a)+c\,P(s,a)\frac{\sqrt{\sum_b N(s,b)}}{1+N(s,a)}\right],$

where $Q$ is the mean backed-up value, $P$ the network prior and $N$ visit counts.

## Efficiency work

AlphaZero used thousands of TPUs. KataGo (Wu, 2019) reports a 50-fold computation reduction over comparable methods and surpassing the final ELF OpenGo model after 19 days on fewer than 30 GPUs, using non-domain-specific changes such as auxiliary targets and playout-cap randomisation. Gumbel AlphaZero/MuZero (Danihelka, Guez, Schrittwieser and Silver, ICLR 2022) replaces the root selection with sampling without replacement via the Gumbel-top-$k$ trick, which gives a policy-improvement guarantee even with few simulations; it is implemented in DeepMind's mctx library.

## Limits

Search needs a simulator (or a learned model; see model-based RL) and a clear terminal reward. Branching factor and stochasticity raise cost. Using the same machinery for open-ended language reasoning is an active but unsettled area.

## Practice

Reference code: DeepMind's JAX library mctx for batched search, OpenSpiel for game environments, and KataGo, the strongest open Go engine.

# Plain explanation

When you play chess you think: if I move here, they might move there, then I could do this. You do not look at every possibility. You look more closely at the lines that seem promising. Monte Carlo tree search is a way for a computer to do the same. It plays out many imagined games from the current position and spends most of its effort on the moves that seem to be winning.

AlphaZero added learning. A neural network gives a first guess of which moves look good and who is winning. The search then improves on that guess by looking ahead. After the game, the network is trained to match what the search found, and the improved network makes the next search better. The program plays against itself again and again.

Starting with only the rules, this reached better-than-human play in Go, chess and shogi. The earlier AlphaGo had learned partly from human games, but AlphaGo Zero showed it was not required.

A limit: the program needs a way to try moves, such as the rules of the game, and a clear win or loss at the end. It works best in tidy worlds. Applying the same idea to messy tasks such as open-ended reasoning is still being explored.

# Student explanation

**What it is for.** In board games an agent can think ahead: imagine its moves, the opponent's replies, and so on. Go has about 250 legal moves in a typical position, so the full tree of possible games is far too large to search. Monte Carlo tree search (MCTS) searches only the promising parts, and AlphaZero adds a neural network that tells the search where to look.

**MCTS.** The search grows a tree from the current position. Each simulation (1) walks down the tree choosing moves by stored statistics, (2) adds a new position at the bottom, (3) evaluates it, and (4) sends the result back up, updating the average value $Q$ and the visit count $N$ of every move on the path. After many simulations the most-visited move is played. Early versions evaluated a position by playing random moves to the end of the game, a Monte Carlo estimate (an average over random trials).

**Choosing where to look.** Selection must balance exploiting moves that look good with exploring moves tried rarely. AlphaZero's PUCT rule picks
$a^*=\arg\max_a\Big[Q(s,a)+c\,P(s,a)\frac{\sqrt{\sum_b N(s,b)}}{1+N(s,a)}\Big].$
The first term is the move's average result so far. The second is a bonus that is large when the network's prior $P$ favours the move and the move has few visits $N$, and that shrinks as visits accumulate; $c$ sets the balance. It is the upper-confidence-bound idea from slot-machine (bandit) problems.

**The self-play loop.** One network takes a position and outputs move probabilities $p$ and a value $v$, its estimate of who will win. The program plays itself; at each move MCTS guided by the network produces a sharper move distribution than the network alone. The network is then trained by gradient descent to predict the search's move distribution and the final result. Search acts as a teacher, the network learns to imitate it, and the improved network makes the next search stronger. AlphaGo Zero (2017) learned Go this way with no human games, and AlphaZero applied the same algorithm to chess and shogi.

**Cost and efficiency.** AlphaZero used thousands of TPUs. KataGo (Wu, 2019) reported a 50-fold reduction in computation, surpassing ELF OpenGo's final model after 19 days on about 27 V100 GPUs, mainly through general changes such as extra prediction targets. Gumbel AlphaZero (ICLR 2022) changes how moves are chosen at the root so that search still improves the policy with very few simulations; it is implemented in DeepMind's mctx library.

**Limits.** The method needs a simulator with known rules (or a learned model, see world models) and a clear win-or-loss signal.
