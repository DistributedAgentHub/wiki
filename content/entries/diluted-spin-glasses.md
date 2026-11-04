---
type: entry
slug: diluted-spin-glasses
title: Diluted spin glasses and the cavity method
field: probability-mathematical-physics
kind: THEORY
status: ACTIVE
summary: Spin glasses on sparse random graphs (Viana–Bray, diluted p-spin, random K-SAT), whose free energy physicists predict by the Mézard–Parisi cavity method.
reliedOn: Satisfiability thresholds of random CSPs, the analysis of message-passing algorithms and the rigorous theory of replica symmetry breaking on sparse graphs all depend on this programme.
references:
  - title: Amin Coja-Oghlan and Will Perkins, Bethe states of random factor graphs. arXiv:1709.03827 (2017)
    url: https://arxiv.org/abs/1709.03827
    kind: paper
  - title: Amin Coja-Oghlan and Will Perkins, Spin systems on Bethe lattices. Communications in Mathematical Physics 372 (2019); arXiv:1808.03440
    url: https://arxiv.org/abs/1808.03440
    kind: paper
  - title: Dmitry Panchenko and Michel Talagrand, Bounds for diluted mean-fields spin glass models. Probability Theory and Related Fields 130 (2004); arXiv:math/0405357
    url: https://arxiv.org/abs/math/0405357
    kind: paper
  - title: Dmitry Panchenko, Structure of 1-RSB asymptotic Gibbs measures in the diluted p-spin models. Journal of Statistical Physics 155 (2014); arXiv:1308.1944
    url: https://arxiv.org/abs/1308.1944
    kind: paper
  - title: Dmitry Panchenko, Structure of finite-RSB asymptotic Gibbs measures in the diluted spin glass models. Journal of Statistical Physics 162 (2016); arXiv:1406.4702
    url: https://arxiv.org/abs/1406.4702
    kind: paper
  - title: Marc Mezard and Giorgio Parisi, The Bethe lattice spin glass revisited. The European Physical Journal B 20 (2001); arXiv:cond-mat/0009418
    url: https://arxiv.org/abs/cond-mat/0009418
    kind: paper
  - title: Ratul Biswas, Wei-Kuo Chen and Arnab Sen, On the Replica Symmetric Solution in General Diluted Spin Glasses. arXiv:2410.15599 (2024)
    url: https://arxiv.org/abs/2410.15599
    kind: paper
  - title: Silvio Franz and Michele Leone, Replica bounds for optimization problems and diluted spin systems. arXiv:cond-mat/0208280 (2002)
    url: https://arxiv.org/abs/cond-mat/0208280
    kind: paper
  - title: Dmitry Panchenko, The Mézard–Parisi formula. arXiv:2610.39545 (2026, preprint)
    url: https://arxiv.org/abs/2610.39545
    kind: paper
  - title: OpenAI, The Mézard–Parisi formula for diluted spin glasses (openai/math family 221; AI-generated, unrefereed; pinned at 1581d4c)
    url: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf
    kind: paper
timeline:
  - date: 2026-10-06
    title: OpenAI releases a claimed proof for even-arity Ising models
    body: The openai/math release (family 221) claims the Mézard–Parisi formula for Poisson-diluted even-arity Ising models in the Panchenko–Talagrand class. AI-generated and unrefereed.
    source: https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/221.md
  - date: 2026-10-29
    title: Panchenko preprint claims the matching lower bound
    body: A preprint claims the lower bound of the Mézard–Parisi formula for a general class of diluted models, and the full formula for diluted even K-spin and random K-SAT, via an approximate reproducibility result without finite-support overlaps. Unrefereed.
    source: https://arxiv.org/abs/2610.39545
explainer:
  oneLine: Sparse random magnets whose energy physicists predict by the cavity method; mathematicians are still proving it.
  flow:
    - Sparse random network of spins
    - "Remove one spin: study the cavity"
    - Clusters of states need nested levels
    - Free energy = best value over all levels
    - Upper bound proved; lower bound claimed 2026
  glossary:
    - term: spin glass
      meaning: A magnet with random, conflicting interactions between its tiny magnetic moments, so it cannot settle into a simple ordered pattern.
      link: https://en.wikipedia.org/wiki/Spin_glass
    - term: Ising spin
      meaning: A variable that is either +1 or -1, like a compass needle pointing up or down.
      link: https://en.wikipedia.org/wiki/Ising_model
    - term: Hamiltonian
      meaning: A function giving the energy of each configuration of the system.
      link: https://en.wikipedia.org/wiki/Ising_model
    - term: Gibbs measure
      meaning: The probability rule that weights each configuration exponentially by its energy, with the temperature setting how strongly.
      link: https://en.wikipedia.org/wiki/Gibbs_measure
    - term: free energy
      meaning: The quantity combining energy and entropy that determines a system's equilibrium behaviour.
      link: https://en.wikipedia.org/wiki/Free_energy
    - term: Poisson distribution
      meaning: The pattern of how many rare, independent events occur in a fixed stretch, here the number of random clauses.
      link: https://en.wikipedia.org/wiki/Poisson_distribution
    - term: random graph
      meaning: A network whose connections are chosen by chance; sparse means each node has only a few links.
      link: https://en.wikipedia.org/wiki/Random_graph
    - term: cavity method
      meaning: A technique that removes one site from a system and studies how the rest respond, to derive self-consistent equations.
      link: https://en.wikipedia.org/wiki/Cavity_method
    - term: Belief Propagation
      meaning: An algorithm that passes messages between neighbours on a graph to estimate each variable's probabilities.
      link: https://en.wikipedia.org/wiki/Belief_propagation
    - term: replica symmetry breaking
      meaning: The spin-glass phenomenon where the equilibrium splits into many states arranged in a hierarchy; described using copies (replicas) of the system.
      link: https://en.wikipedia.org/wiki/Replica_trick
    - term: random K-SAT
      meaning: A random logic puzzle made of clauses, each involving K variables, which may or may not be satisfiable all at once.
      link: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
    - term: SAT solving
      meaning: The DARC page on algorithms that decide whether such logic puzzles can be satisfied.
      link: /research/sat-solving
  readFirst:
    - title: Spin glass (Wikipedia)
      url: https://en.wikipedia.org/wiki/Spin_glass
      why: A readable overview of the physics, the Sherrington–Kirkpatrick model and Parisi's solution.
    - title: Cavity method (Wikipedia)
      url: https://en.wikipedia.org/wiki/Cavity_method
      why: Short description of the technique at the heart of the Mézard–Parisi approach.
    - title: Boolean satisfiability problem (Wikipedia)
      url: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem
      why: Background on the logic puzzles that random K-SAT is built from.
raw:
  student: "**The model.** Take $N$ spins $\\sigma_i=\\pm1$, like tiny compass needles that point up or down. A *Hamiltonian* $H(\\sigma)$ assigns an energy to each configuration. In a *diluted* spin glass the energy is a sum of random terms (\"clauses\"), each depending on only $K$ spins chosen at random, and the number of terms is random with mean proportional to $N$ (a *Poisson* number). So every spin sits in a bounded number of terms on average. Random $K$-SAT is the same idea with a clause that is satisfied or violated.\n\n**Free energy.** At inverse temperature $\\beta$ the *Gibbs measure* gives configuration $\\sigma$ probability proportional to $e^{\\beta H(\\sigma)}$. The quantity physicists want is the free energy per spin,\n$$F_N=\\frac1N\\,\\mathbb E\\log\\sum_\\sigma e^{\\beta H(\\sigma)},$$\nthe average over the randomness of the logarithm of the sum over all $2^N$ configurations. It encodes the typical energy and entropy. $\\mathbb E$ means \"average over the random couplings\", an idea from probability.\n\n**The cavity method.** Remove one spin and look at the \"cavity\" left behind. Because the graph is sparse and locally tree-like, the neighbours of the removed spin are nearly independent, so you can write a recursion for how a spin's average value depends on its neighbours'. In the simple case this is *Belief Propagation*. In the spin-glass phase the Gibbs measure breaks into many clusters (\"pure states\"), and the recursion has to be run hierarchically: clusters inside clusters. The number of levels is the depth of *replica symmetry breaking*, and the answer is the infimum over all depths and over all choices of the trial distributions. That infimum is the **Mézard–Parisi formula**.\n\n**What is proved.** An interpolation argument (Franz–Leone, 2002; Panchenko–Talagrand, 2004) shows that $F_N$ is at most the Mézard–Parisi infimum for every $N$. For the matching lower bound one must show that the real Gibbs measure has the structure the formula assumes, the \"reproducibility\" property: correlations among many replicas are fixed by correlations between pairs. Panchenko proved this for one and finitely many levels of symmetry breaking (2013 and 2014). The remaining step was to allow any overlap distribution.\n\n**October 2026.** OpenAI's openai/math release (family 221) claims the formula for even-arity Poisson-diluted Ising models under stated assumptions. Panchenko's preprint (arXiv:2610.39545) claims the lower bound for a broad class and the full formula for even $K$-spin and random $K$-SAT, via an approximate reproducibility result. Both are unrefereed, so DARC lists the question as open."
site:
  published: true
  aiReviewed: true
---

## Models

A diluted spin glass has Ising spins on the vertices of a sparse random (hyper)graph, with random couplings on its edges. Examples are the Viana–Bray model, diluted $p$-spin models and random $K$-SAT viewed as a spin system at positive temperature. In the standard rigorous setting the number of interactions is Poisson with mean proportional to the number of spins $N$, and each interaction involves $K$ spins chosen uniformly at random. Unlike the Sherrington–Kirkpatrick model, each spin interacts with only a bounded number of others on average, so the local tree-like geometry matters.

## The cavity method

Mézard and Parisi (2001) proposed a solution of the Bethe lattice spin glass by the cavity method, at a level of approximation equivalent to one-step replica symmetry breaking. In the physics picture the Gibbs measure splits into many pure (Bethe) states, each described by Belief Propagation, and the free energy is the value of a variational functional over hierarchies of distributions (replica symmetry breaking, with any number of levels). For random $K$-SAT the one-step version predicts the satisfiability threshold, which Ding–Sly–Sun confirmed for large $K$.

## Rigorous progress

Franz–Leone and Panchenko–Talagrand proved, by Guerra-type interpolation, that the Mézard–Parisi functional gives a one-sided bound on the free energy (the free energy is at most its infimum). Panchenko showed that, after a small perturbation of the Hamiltonian, finite-RSB asymptotic Gibbs measures obey the Mézard–Parisi ansatz; what was missing was a way to pass from finitely many levels to a general overlap distribution. Coja-Oghlan and Perkins established the Bethe-state decomposition for broad classes of models, and replica symmetric regimes have been identified (e.g. Biswas–Chen–Sen). The matching lower bound, and so the formula with the infimum over all levels of symmetry breaking, had remained open in general.

## 2026

Two unrefereed manuscripts claim to close the gap. OpenAI's release (family 221, AI-generated, with an unreviewed Lean formalization listed) claims the formula for Poisson-diluted even-arity Ising models in the Panchenko–Talagrand class, under factorization, independence, integrability and positivity assumptions. Panchenko's preprint of 29 October 2026 (arXiv:2610.39545) claims the lower bound for a broader class of diluted models and the full formula for diluted even $K$-spin and random $K$-SAT models, by proving an approximate form of the Mézard–Parisi reproducibility hypothesis without assuming a finite-support overlap distribution. Neither has been refereed; see the open problem.

# Plain explanation

Imagine a huge party where each guest talks to only a handful of others. Every pair has a random relationship: some pairs want to agree, some want to disagree. Each guest must pick a side, yes or no, and no choice can keep everyone happy at once. A material whose tiny magnets behave like this is called a spin glass. When each magnet feels only a few neighbours, we call it "diluted".

Physicists want to know how low the total "unhappiness" can go when the party is enormous. A famous method, worked out by Marc Mézard and Giorgio Parisi, gives a recipe for the answer. It treats the party as a tree: you remove one guest, look at the hole they leave, and work out how the rest react. The recipe has many layers, like nested boxes, and the answer is the best score you can get over all the boxes.

The same maths describes puzzles such as random logic problems, where you need to satisfy many small rules at once. That is why it matters outside physics.

For years mathematicians could prove only half of the recipe: the true answer cannot be worse than the recipe says. Showing it cannot be better is the hard half. In late 2026 two manuscripts, one from OpenAI and one by Dmitry Panchenko, claimed to prove it. Neither has been checked by independent experts yet.

The party picture breaks down in one place: real spins do not choose, they settle by physics.
