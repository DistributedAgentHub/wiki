---
type: problem
slug: feature-learning-scaling-exponents-power-law-spectra
title: Proving the t^(−2β/(1+β)) feature-learning loss exponent for hard tasks under power-law kernel spectra
entry: transformer-architecture
status: OPEN
origin: Prediction of Bordelon, Atanasov and Pehlevan (arXiv:2409.17858, ICLR 2025); lazy-regime theory from Caponnetto–De Vito (2007) through Paquette et al. and Lin et al. (2024)
ratings:
  difficulty: 47
  applicationValue: 38
  leverage: 40
workMix:
  theory: 85
  engineering: 0
  compute: 10
  empirical: 5
verification:
  route: REVIEW
sources:
  - title: "Bordelon, Atanasov, Pehlevan: How Feature Learning Can Improve Neural Scaling Laws (ICLR 2025)"
    url: https://arxiv.org/abs/2409.17858
  - title: "Ren, Nichani, Wu, Lee: Emergence and scaling laws in SGD learning of shallow neural networks (NeurIPS 2025)"
    url: https://arxiv.org/abs/2504.19983
  - title: "Ben Arous, Erdogdu, Vural, Wu: Learning quadratic neural networks in high dimensions: SGD dynamics and scaling laws (NeurIPS 2025)"
    url: https://arxiv.org/abs/2508.03688
  - title: "Paquette, Paquette, Xiao, Pennington: 4+3 phases of compute-optimal neural scaling laws"
    url: https://arxiv.org/abs/2405.15074
  - title: "Lin, Wu, Kakade, Bartlett, Lee: Scaling Laws in Linear Regression: Compute, Parameters, and Data"
    url: https://arxiv.org/abs/2406.08466
  - title: "Bordelon, Atanasov, Pehlevan: A Dynamical Model of Neural Scaling Laws"
    url: https://arxiv.org/abs/2402.01092
  - title: "Bahri et al.: Explaining neural scaling laws (PNAS 2024)"
    url: https://doi.org/10.1073/pnas.2311878121
  - title: "Kaplan et al.: Scaling Laws for Neural Language Models"
    url: https://arxiv.org/abs/2001.08361
  - title: "Barkeshli, Alfarano, Gromov: On the origin of neural scaling laws: from random graphs to natural language (ICML 2026)"
    url: https://arxiv.org/abs/2601.10684
timeline:
  - date: 2020-01-23
    title: Kaplan et al. power-law scaling
    body: Loss follows power laws in parameters, data and compute over several orders of magnitude.
    source: https://arxiv.org/abs/2001.08361
  - date: 2024-06-12
    title: Scaling laws proved for SGD linear regression
    body: Lin et al. give matching upper and lower bounds in data, parameters and compute for power-law spectra (lazy/linear setting).
    source: https://arxiv.org/abs/2406.08466
  - date: 2024-09-26
    title: DMFT prediction of the hard-task exponent
    body: Bordelon, Atanasov and Pehlevan predict that feature learning improves the time exponent from β to 2β/(1+β) for hard tasks (non-rigorous; ICLR 2025).
    source: https://arxiv.org/abs/2409.17858
  - date: 2025-04-28
    title: Rigorous feature-learning scaling laws on isotropic data
    body: Ren, Nichani, Wu and Lee prove scaling exponents for online SGD on two-layer networks learning power-law additive targets with isotropic Gaussian inputs (NeurIPS 2025).
    source: https://arxiv.org/abs/2504.19983
explainer:
  oneLine: Can we prove how fast a network's error shrinks when it learns its own features on hard tasks?
  flow:
    - Bigger training, error falls as power law
    - "Lazy networks: provable rate"
    - Feature learning predicted to be faster
    - Prediction rests on physics arguments
    - "Open: rigorous proof for real setting"
  glossary:
    - term: scaling law
      meaning: A regular, often power-law trend in how a model's error shrinks as data, training or model size grows.
      link: https://en.wikipedia.org/wiki/Neural_scaling_law
    - term: power law
      meaning: A relationship where one quantity changes as a fixed power of another, appearing as a straight line on a log-log plot.
      link: https://en.wikipedia.org/wiki/Power_law
    - term: neural tangent kernel
      meaning: A way to describe very wide networks that barely change their internal features during training.
      link: https://en.wikipedia.org/wiki/Neural_tangent_kernel
    - term: feature learning
      meaning: A network changing its internal representation during training, instead of just fitting on top of a fixed one.
      link: https://en.wikipedia.org/wiki/Neural_tangent_kernel
    - term: eigenvalue
      meaning: A number measuring how strongly a transformation stretches along one special direction.
      link: https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors
    - term: kernel method
      meaning: A family of learning methods that compare data points through a similarity function.
      link: https://en.wikipedia.org/wiki/Kernel_method
    - term: stochastic gradient descent (SGD)
      meaning: Training by taking many small steps downhill on the loss, each using a small random batch of data.
      link: https://en.wikipedia.org/wiki/Stochastic_gradient_descent
    - term: loss
      meaning: A number measuring how wrong a model's predictions are; training tries to lower it.
      link: https://en.wikipedia.org/wiki/Loss_function
    - term: transformer
      meaning: The attention-based network design behind most modern language models.
      link: /research/transformer-architecture
    - term: lazy regime
      meaning: A training regime where a very wide network barely changes its internal features, so it behaves like a fixed kernel method.
      link: https://en.wikipedia.org/wiki/Neural_tangent_kernel
    - term: dynamical mean-field theory
      meaning: A physics method that replaces a huge interacting system by one typical unit feeling an average effect; powerful but not rigorous here.
      link: https://en.wikipedia.org/wiki/Mean-field_theory
    - term: source condition
      meaning: An assumption on how quickly the target function's coefficients shrink along the kernel's directions; its exponent β measures how hard the task is.
      link: https://en.wikipedia.org/wiki/Kernel_method
  readFirst:
    - title: Neural scaling law (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neural_scaling_law
      why: What scaling laws are and what is known about them.
    - title: Neural tangent kernel (Wikipedia)
      url: https://en.wikipedia.org/wiki/Neural_tangent_kernel
      why: Introduces the lazy regime that the provable results live in.
    - title: Power law (Wikipedia)
      url: https://en.wikipedia.org/wiki/Power_law
      why: Helps read the exponents in the statement.
site:
  aiReviewed: true
---

Let $\{\psi_k\}$ be the eigenfunctions of the infinite-width neural tangent kernel at initialisation, with eigenvalues $\lambda_k\asymp k^{-\alpha}$ ($\alpha>1$), and let the target $f_*=\sum_k w^*_k\psi_k$ satisfy the source condition $\sum_{\ell>k}\lambda_\ell (w^*_\ell)^2\asymp k^{-\alpha\beta}$. The task is _hard_ when $\beta<1$, i.e. $f_*$ lies outside the RKHS of the initial kernel. In the lazy (kernel) limit, training for time $t$ with unlimited width and data gives population loss $\mathcal L(t)\asymp t^{-\beta}$. Bordelon, Atanasov and Pehlevan predict, by dynamical mean-field theory (non-rigorous), that with feature learning of strength $\gamma>0$ the exponent improves to $\mathcal L(t)\asymp t^{-2\beta/(1+\beta)}$ for $\beta<1$ and is unchanged for $\beta\ge1$. _Problem: prove or refute this._ (i) For their model $f(x,t)=\frac1N w(t)^\top A(t)\psi(x)$, with readout $w$ trained by SGD and first layer $A$ by projected gradient descent, prove $\mathcal L(t)=t^{-2\beta/(1+\beta)+o(1)}$ in the limit $N,P\to\infty$ ($N$ width, $P$ samples) followed by $t\to\infty$, together with the finite-$N$ and finite-$P$ bottleneck exponents. (ii) Prove the same exponent, or a different explicit one, for a nonlinear two-layer network trained by online SGD in the mean-field (μP) parametrisation on Gaussian inputs whose covariance eigenvalues decay as $k^{-\alpha}$.

# State of the art

**Proved in the lazy and linear regimes.** Kernel ridge regression with power-law spectra has minimax-optimal rates (Caponnetto and De Vito, 2007). For random-feature models trained by one-pass SGD with power-law covariance, Paquette, Paquette, Xiao and Pennington (arXiv:2405.15074, 2024) prove loss asymptotics and identify the phases of compute-optimal scaling; Lin, Wu, Kakade, Bartlett and Lee (arXiv:2406.08466, 2024) prove data, parameter and compute scaling for SGD on linear regression with power-law spectra.

**Proved with feature learning, but on isotropic data.** Ren, Nichani, Wu and Lee (arXiv:2504.19983, NeurIPS 2025) analyse online SGD for a two-layer student learning $f_*(x)=\sum_{p\le P}a_p\sigma(\langle x,v_p^*\rangle)$ with $x\sim N(0,I_d)$, orthonormal $v_p^*$, an even activation of information exponent above 2 and $a_p\asymp p^{-\beta}$; they prove sharp recovery times for each direction and derive scaling exponents in samples, SGD steps and width. Ben Arous, Erdogdu, Vural and Wu (arXiv:2508.03688, NeurIPS 2025) prove scaling laws for quadratic-activation networks with extensive width $r\asymp d^{\beta}$ and power-law second-layer coefficients. In both, the power law comes from the target's coefficient decay over orthogonal directions of isotropic data, so the hard-task mechanism above (feature learning against a power-law input spectrum) is not covered.

**Heuristic.** Bordelon, Atanasov and Pehlevan (arXiv:2402.01092, ICML 2024; arXiv:2409.17858, ICLR 2025) derive the $t^{-2\beta/(1+\beta)}$ prediction by DMFT and support it with MLP and CNN experiments. Bahri, Dyer, Kaplan, Lee and Sharma (PNAS 2024) separate variance-limited from resolution-limited regimes.

**Empirical side.** Kaplan et al. (arXiv:2001.08361) and Hoffmann et al. (arXiv:2203.15556) fit power laws for transformers. Barkeshli, Alfarano and Gromov (arXiv:2601.10684, ICML 2026) obtain scaling laws for transformers trained on random walks on graphs without power-law structure in the data correlations, so power-law spectra are not the only source of observed exponents. No result predicts the exponent of a transformer language model from data statistics.

# Applications

Direct benefit is limited: a proof would tell practitioners which exponents depend on architecture-level feature learning and which on data spectra, informing compute-allocation rules, but practical scaling-law fits will remain empirical. The methods (high-dimensional SGD dynamics with evolving kernels) are reusable in the theory of training dynamics.

# Resolution criteria

Resolved by a proof of (ii): matching upper and lower bounds on the loss exponent of a nonlinear two-layer network trained by online SGD in the mean-field parametrisation on power-law-spectrum data, with the hard-task exponent identified explicitly (whether or not it equals $2\beta/(1+\beta)$). A rigorous proof of (i) for the Bordelon–Atanasov–Pehlevan model alone, or a rigorous counterexample to its predicted exponent, is major partial progress.

# Rating rationale

Difficulty 47: the target is a single explicit exponent with a precise heuristic derivation, and 2025 work already proves feature-learning scaling laws on isotropic data, but no technique controls moving features against a power-law input spectrum; it sits below CDCL proof search (54) and above the smoothed simplex exponent (38). Application value 38, below the retired broad neural-scaling-laws entry (55): a proof would justify compute-allocation rules in the feature-learning regime, but practice relies on fitted exponents. Leverage 40: the methods (high-dimensional SGD with evolving kernels) are reusable across training-dynamics theory, but few other results are stated conditionally on this exponent.

# Work mix rationale

This is a theorem-proving task in high-dimensional probability; numerical experiments only guide conjectures.

# Verification

The target is a theorem about online SGD for a two-layer network in the mean-field parametrisation on power-law data, with matching upper and lower loss-exponent bounds. Mathlib has no SGD dynamics or mean-field limits, so it cannot be formalised today. Probabilistic-analysis experts review the proof; numerical simulations of the exponent can support it but do not count as resolution.

# Plain explanation

When engineers train larger AI models for longer, the error falls along a smooth curve that often looks like a straight line on a log-log chart. These are called scaling laws. They guide very expensive decisions about how much data and computing to use, but mostly they are measured, not proven.

Theorists try to explain them with simple models. In one simple setting the network barely changes its internal representation while training (the lazy regime), and the math works out cleanly: error falls at a predictable rate. Real networks, though, learn new features, changing what they pay attention to as they train. Researchers using an approximate technique from physics, called dynamical mean-field theory, have predicted that on hard tasks this feature learning makes the error fall faster, by a specific formula.

That prediction is the problem here: prove it. Nobody has done so for the realistic setting. The formula is derived with non-rigorous physics reasoning and supported by experiments, while rigorous proofs exist only for the lazy case, or for features learned on very symmetric, simple data.

The difficulty: with feature learning the network and the data influence each other during training, which makes the maths tangled, and real data has uneven structure (some directions matter far more than others).

The benefit of a proof is modest and mostly scientific: understanding which parts of scaling laws come from the architecture and which from the data. Practical scaling-law fitting will stay empirical.

# Student explanation

**Background.** Empirically, the loss of large models falls as a power law in training time, data or model size. A solvable setting: take the infinite-width neural tangent kernel (NTK), the kernel that governs training when the network barely moves its features. Suppose its eigenvalues decay like $\lambda_k\asymp k^{-\alpha}$ and the target function has coefficients satisfying a _source condition_ with exponent $\beta$. The task is called _hard_ when $\beta<1$, meaning the target lies outside the function space the initial kernel can easily represent. In the lazy (kernel) limit, training for time $t$ with unlimited width and data gives loss $\mathcal L(t)\asymp t^{-\beta}$.

**The prediction.** Bordelon, Atanasov and Pehlevan used dynamical mean-field theory (a non-rigorous method from statistical physics) to predict that with feature learning of strength $\gamma>0$ the exponent improves to

$\mathcal L(t)\asymp t^{-2\beta/(1+\beta)}\quad(\beta<1),$

and is unchanged for $\beta\ge1$. For $\beta<1$ the new exponent is larger than $\beta$, which says features speed up learning on hard tasks. The problem: prove (i) this exponent for a specific model with a trained readout and trained first layer in the limit of large width and many samples, plus the finite-width and finite-data bottleneck exponents; and (ii) the same or an explicit different exponent for a nonlinear two-layer network trained by online SGD in the mean-field parametrisation on Gaussian inputs whose covariance eigenvalues decay as $k^{-\alpha}$.

**What is proved.**

- _Lazy and linear regimes._ Kernel ridge regression with power-law spectra has minimax-optimal rates (Caponnetto and De Vito, 2007). Paquette et al. (2024) and Lin et al. (2024) prove loss asymptotics and scaling laws for random-feature models and SGD on linear regression with power-law spectra.
- _Feature learning on isotropic data._ Ren, Nichani, Wu and Lee (2025) and Ben Arous, Erdogdu, Vural and Wu (2025) prove scaling exponents for two-layer networks with feature learning, but the power law comes from the target's coefficient decay over equally weighted directions, not from a power-law input spectrum.

So the mechanism in the prediction (features learned against a power-law input spectrum) is not yet covered.

**Why it is hard.** With feature learning, the kernel evolves with training, so the loss dynamics are coupled to a changing representation. Handling an infinite sequence of directions with different scales requires controlling the dynamics across many time scales.

**Payoff.** A proof would clarify which exponents depend on feature learning and which on data spectra. It would not change how scaling laws are fitted in practice.
