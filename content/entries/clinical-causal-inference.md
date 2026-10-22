---
type: entry
slug: clinical-causal-inference
title: Causal inference for clinical and observational data
field: computational-medicine
kind: THEORY
status: ACTIVE
summary: Potential-outcomes and graphical frameworks, propensity and doubly robust estimators, target trial emulation and sensitivity analysis for estimating treatment effects from EHR and registry data.
reliedOn: Real-world evidence, regulatory use of observational data, treatment-effect heterogeneity and learning clinical policies all require identification assumptions and estimators from this theory.
references:
  - title: Rosenbaum and Rubin, The central role of the propensity score in observational studies for causal effects, Biometrika (1983)
    url: https://doi.org/10.1093/biomet/70.1.41
    kind: paper
  - title: Chernozhukov et al., Double/debiased machine learning for treatment and structural parameters, Econometrics J. (2018)
    url: https://doi.org/10.1111/ectj.12097
    kind: paper
  - title: Wager and Athey, Estimation and inference of heterogeneous treatment effects using random forests, JASA (2018)
    url: https://doi.org/10.1080/01621459.2017.1319839
    kind: paper
  - title: Hernan and Robins, Using big data to emulate a target trial when a randomized trial is not available, Am. J. Epidemiol. (2016)
    url: https://doi.org/10.1093/aje/kwv254
    kind: paper
  - title: Wang et al., Emulation of randomized clinical trials with nonrandomized database analyses (RCT-DUPLICATE), JAMA (2023)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10130954
    kind: paper
  - title: Dorn, Guo, Kallus, Doubly-valid/doubly-sharp sensitivity analysis for causal inference with unmeasured confounding
    url: https://arxiv.org/abs/2112.11449
    kind: paper
  - title: "Jin, Ren, Candes, Sensitivity analysis of individual treatment effects: a robust conformal inference approach, PNAS (2023)"
    url: https://arxiv.org/abs/2111.12161
    kind: paper
timeline:
  - date: 1974-10-01
    title: Potential-outcomes framework
    body: Rubin formalises causal effects as comparisons of potential outcomes in randomised and non-randomised studies.
    source: https://doi.org/10.1037/h0037350
  - date: 1983-04-01
    title: Propensity score
    body: Rosenbaum and Rubin show balancing the propensity score removes confounding by measured covariates.
    source: https://doi.org/10.1093/biomet/70.1.41
  - date: 2016-04-15
    title: Target trial emulation
    body: Hernan and Robins propose specifying and emulating the target randomised trial as a design discipline for observational data.
    source: https://doi.org/10.1093/aje/kwv254
  - date: 2018-02-01
    title: Double machine learning
    body: Chernozhukov et al. give conditions for valid inference when nuisance functions are estimated by flexible ML.
    source: https://doi.org/10.1111/ectj.12097
  - date: 2023-04-25
    title: RCT-DUPLICATE results
    body: 32 trials emulated in claims data; agreement depended strongly on how closely the trial design could be emulated (later corrected to 72 percent significance agreement).
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC10130954
explainer:
  oneLine: Statistical methods for working out what a treatment really does from messy real-world patient data.
  flow:
    - Observational patient records
    - Sicker patients differ in treatment
    - Adjust for recorded confounders
    - Emulate the ideal trial
    - Bound the effect of hidden ones
  glossary:
    - term: causal inference
      meaning: Statistical methods that ask what would have happened under a different choice, not just what goes with what.
      link: /research/clinical-causal-inference
    - term: confounding
      meaning: When a hidden third factor, such as how sick a patient is, affects both who gets a treatment and how they do, faking an effect.
      link: https://en.wikipedia.org/wiki/Confounding
    - term: potential outcomes
      meaning: The idea that each patient has an outcome they would have under each possible treatment, though only one is ever seen.
      link: https://en.wikipedia.org/wiki/Rubin_causal_model
    - term: propensity score
      meaning: The probability that a patient with given features receives a treatment; used to compare similar treated and untreated patients.
      link: https://en.wikipedia.org/wiki/Propensity_score_matching
    - term: electronic health record
      meaning: "The digital chart a hospital keeps for each patient: diagnoses, lab results, prescriptions and notes."
      link: https://en.wikipedia.org/wiki/Electronic_health_record
    - term: randomized controlled trial
      meaning: An experiment in which chance decides who gets the treatment, so the groups are comparable apart from the treatment.
      link: https://en.wikipedia.org/wiki/Randomized_controlled_trial
    - term: sensitivity analysis
      meaning: Asking how strong a hidden factor would have to be to overturn a conclusion.
      link: https://en.wikipedia.org/wiki/Sensitivity_analysis
    - term: conformal prediction
      meaning: A way to wrap any predictor so its error ranges come with a guaranteed hit rate, such as covering the truth 90 percent of the time.
      link: https://en.wikipedia.org/wiki/Conformal_prediction
  readFirst:
    - title: Causal inference (Wikipedia)
      url: https://en.wikipedia.org/wiki/Causal_inference
      why: Short map of the main frameworks.
    - title: "Causal Inference: What If (Hernan and Robins), free book"
      url: https://miguelhernan.org/whatifbook
      why: The standard free textbook, readable without much mathematics in early chapters.
    - title: Confounding (Wikipedia)
      url: https://en.wikipedia.org/wiki/Confounding
      why: Examples of how hidden factors fake effects.
site:
  published: true
  aiReviewed: true
---

## What it is

Estimating what would happen under a treatment from data in which treatment was not randomly assigned. Each patient has potential outcomes $Y(1), Y(0)$; the individual effect $Y(1)-Y(0)$ is never observed, so we target the average effect $\tau=\mathbb E[Y(1)-Y(0)]$ or the conditional effect $\tau(x)=\mathbb E[Y(1)-Y(0)\mid X=x]$ (CATE).

## Identification

Under **unconfoundedness** ($Y(a)\perp A\mid X$), **positivity** ($0<P(A=1\mid X)<1$) and consistency, $\tau$ is identified by the g-formula $\mathbb E[\mathbb E[Y\mid A=1,X]-\mathbb E[Y\mid A=0,X]]$. Each assumption can fail in electronic health records: hidden confounders (frailty, indication, unrecorded behaviour), near-deterministic treatment rules, and time-varying confounders affected by past treatment.

## Estimators

Outcome regression; inverse-probability weighting with the propensity score $e(x)=P(A=1\mid X=x)$ (Rosenbaum-Rubin 1983); **doubly robust** augmented IPW and targeted maximum likelihood; **double/debiased machine learning** (Chernozhukov et al. 2018), which uses cross-fitting so flexible ML can estimate nuisance functions while $\hat\tau$ stays root-n consistent; meta-learners (S, T, X, R) and causal forests (Wager-Athey 2018) for CATE. For longitudinal treatment, Robins' g-methods (marginal structural models, g-computation, structural nested models).

## Design layer

**Target trial emulation** (Hernán and Robins 2016) writes the hypothetical randomised trial (eligibility, time zero, strategies, outcome, follow-up) and emulates it in the data, avoiding immortal-time and selection biases. The RCT-DUPLICATE initiative emulated 32 trials in claims databases: significance agreement was 72 percent after a 2023 correction, and correlation was high (r about 0.94) when emulation was close.

## Sensitivity analysis

Because unconfoundedness is untestable, one bounds the effect under a stated violation: Rosenbaum bounds, the marginal sensitivity model (Tan 2006), E-values, and recent sharp bounds with statistical guarantees (Dorn-Guo-Kallus; Frauen et al.; Jin-Ren-Candès conformal individual-effect intervals).

## Techniques to master

Directed acyclic graphs and the backdoor criterion, semiparametric efficiency theory, cross-fitting, overlap diagnostics, conformal prediction, negative controls and benchmarking against trials.

## Where it bites

The open problem here is honest, tight, valid uncertainty for individual or subgroup treatment effects from EHR when unmeasured confounding cannot be ruled out.

# Plain explanation

Doctors would like to know whether a drug helps patients like the one in front of them. The gold standard is a randomised trial, where a coin toss decides who gets the drug, but trials are slow, costly and cover few kinds of patients. Hospitals meanwhile hold millions of records of what was actually done and what happened.

The danger is that sicker patients usually get different treatments from healthier ones, so a naive comparison can make a good drug look harmful, or the other way round. This mixing-up of reasons is called confounding.

Causal inference supplies tools to fix it. If we have recorded everything that influenced the doctor's choice, we can compare like with like, for example by weighting patients so treated and untreated groups look alike. A careful design, called target trial emulation, writes down the trial we wish we had run and copies it from the data.

The hard problem is what we did not record. Methods can say how strong a hidden factor would need to be to change the answer, but making those statements precise, honest and not uselessly vague for individual patients is still open.

# Student explanation

**Setup.** Each patient has potential outcomes $Y(1)$ and $Y(0)$ under treatment and no treatment. We never see both. The average effect is $\tau=E[Y(1)-Y(0)]$; the conditional effect $\tau(x)$ depends on patient features $x$.

**Identification.** If treatment is as good as random given recorded features (no hidden confounding), if every kind of patient could have received either treatment (positivity), and outcomes are consistent, then $\tau$ equals the difference between the outcome averages when we standardise to the same patient mix. Each condition can fail in hospital data.

**Estimators.** Regression of outcome on treatment and features; inverse-probability weighting by the propensity score $e(x)=P(A=1\mid X=x)$; doubly robust estimators that are right if either of the two models is right; double machine learning, which uses sample splitting so flexible algorithms can model the nuisance parts without spoiling inference; causal forests and meta-learners for effects that vary between patients. For treatments that change over time, Robins' g-methods handle feedback between treatment and health.

**Design.** Target trial emulation fixes eligibility, the start of follow-up, treatment strategies and outcomes, which removes common biases such as immortal time. In the RCT-DUPLICATE project, emulations of 32 trials agreed in statistical significance in about 72 percent of cases and agreed closely when the trial design was copied well.

**Sensitivity analysis.** Because no data can prove there is no hidden confounder, we bound the effect assuming confounding up to a stated strength. Recent work gives sharp bounds and conformal prediction ranges, but calibrating the strength remains open.

**Skills.** Graphs and the backdoor rule, semiparametric efficiency, cross-fitting, overlap diagnostics.
