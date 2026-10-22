---
type: problem
slug: cate-hidden-confounding-valid-coverage-ehr
title: Valid and non-conservative treatment-effect intervals from EHR under unmeasured confounding
entry: clinical-causal-inference
status: OPEN
origin: Rosenbaum sensitivity analysis (1987); marginal sensitivity model (Tan, 2006); conformal sensitivity analysis (Jin, Ren and Candes 2023; Yin et al. 2022)
ratings:
  difficulty: 55
  applicationValue: 57
  leverage: 49
workMix:
  theory: 65
  engineering: 5
  compute: 10
  empirical: 20
verification:
  route: REPRODUCTION
sources:
  - title: Dorn, Guo, Kallus, Doubly-valid/doubly-sharp sensitivity analysis for causal inference with unmeasured confounding (arXiv:2112.11449; JASA 2025)
    url: https://arxiv.org/abs/2112.11449
  - title: Frauen, Melnychuk, Feuerriegel, Sharp bounds for generalized causal sensitivity analysis, NeurIPS 2023
    url: https://arxiv.org/abs/2305.16988
  - title: "Jin, Ren, Candes, Sensitivity analysis of individual treatment effects: a robust conformal inference approach, PNAS (2023)"
    url: https://arxiv.org/abs/2111.12161
  - title: Yin, Shi, Wang, Blei, Conformal sensitivity analysis for individual treatment effects
    url: https://arxiv.org/abs/2112.03493
  - title: Wang et al., Emulation of randomized clinical trials with nonrandomized database analyses (RCT-DUPLICATE), JAMA (2023)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10130954
  - title: Tan, A distributional approach for causal inference using propensity scores, JASA (2006)
    url: https://doi.org/10.1198/016214506000000023
timeline:
  - date: 2006-12-01
    title: Marginal sensitivity model
    body: Tan introduces a bound on the odds-ratio between propensity scores with and without the unmeasured confounder.
    source: https://doi.org/10.1198/016214506000000023
  - date: 2021-11-23
    title: Conformal sensitivity analysis for ITEs (preprint)
    body: Jin, Ren and Candes give marginally valid intervals for individual treatment effects under the marginal sensitivity model.
    source: https://arxiv.org/abs/2111.12161
  - date: 2023-05-26
    title: Sharp CATE bounds (NeurIPS)
    body: Frauen et al. derive sharp bounds for CATEs and other quantities under a generalised sensitivity model.
    source: https://arxiv.org/abs/2305.16988
  - date: 2025-01-01
    title: Doubly valid and sharp bounds in JASA
    body: Dorn, Guo and Kallus' estimators published in the Journal of the American Statistical Association.
    source: https://arxiv.org/abs/2112.11449
explainer:
  oneLine: Giving honest, usable error bars on a treatment's effect for a patient when some important factors were never recorded.
  flow:
    - Treatment given for hidden reasons
    - Assume bounded hidden influence
    - Compute range of possible effects
    - Make it hold for each patient type
    - Choose the bound strength honestly
  glossary:
    - term: causal inference
      meaning: Statistical methods that ask what would have happened under a different choice, not just what goes with what.
      link: /research/clinical-causal-inference
    - term: confounding
      meaning: When a hidden third factor, such as how sick a patient is, affects both who gets a treatment and how they do, faking an effect.
      link: https://en.wikipedia.org/wiki/Confounding
    - term: sensitivity analysis
      meaning: Asking how strong a hidden factor would have to be to overturn a conclusion.
      link: https://en.wikipedia.org/wiki/Sensitivity_analysis
    - term: conformal prediction
      meaning: A way to wrap any predictor so its error ranges come with a guaranteed hit rate, such as covering the truth 90 percent of the time.
      link: https://en.wikipedia.org/wiki/Conformal_prediction
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
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
  readFirst:
    - title: Sensitivity analysis (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sensitivity_analysis
      why: The general idea of testing how conclusions change with assumptions.
    - title: "Causal Inference: What If (free book)"
      url: https://miguelhernan.org/whatifbook
      why: Chapters on confounding and target trial emulation.
    - title: Conformal prediction (Wikipedia)
      url: https://en.wikipedia.org/wiki/Conformal_prediction
      why: Where the guarantee-carrying intervals come from.
site:
  aiReviewed: true
---

**Setting.** From electronic health records for $n$ patients, covariates $X$ (labs, diagnoses, medications), a binary or multi-level treatment $A$ chosen by clinicians and outcome $Y$. Unconfoundedness $Y(a)\perp A\mid X$ is not guaranteed: clinicians use information not recorded in $X$ (frailty, patient preference, gestalt). Let the marginal sensitivity model with parameter $\Gamma \ge 1$ bound the odds ratio between the true propensity $P(A=1\mid X,U)$ and $e(X)=P(A=1\mid X)$ by $\Gamma$.

**Task.** Produce for each covariate value $x$ (a) a partial-identification interval $[\tau^-(x),\tau^+(x)]$ for the conditional average treatment effect, and (b) a prediction interval for the individual effect $Y(1)-Y(0)$, such that:

1. **Validity.** Coverage is at least $1-\alpha$ for the true effect whenever the real confounding is within $\Gamma$, in finite samples or uniformly over $x$ (not only marginally over $X$);
2. **Sharpness.** Width is within a factor of 1.2 of the oracle sharp bound, rather than the worst-case widths produced by conservative relaxations;
3. **Calibrated $\Gamma$.** A data-driven procedure (negative-control outcomes, trial anchoring, or external benchmarks) chooses $\Gamma$ with stated error guarantees, because $\Gamma$ is not identifiable from observational data alone;
4. **Weak overlap and high dimension.** The guarantees survive near-violations of positivity and $p \gg n$ covariates, which typify EHR.

The deep difficulty is item 3 plus item 2: the sensitivity parameter is an assumption, and intervals that are valid for every $\Gamma$ are often too wide to be useful.

# State of the art

- **Sharp bounds for averages.** Dorn, Guo and Kallus (arXiv:2112.11449; JASA 2025) derive sharp bounds on the average treatment effect under the marginal sensitivity model and estimators that are "doubly valid" (bounds valid even if most nuisance functions are wrong) and "doubly sharp" (efficient when they are right).
- **Sharp bounds for conditional effects.** Frauen, Melnychuk and Feuerriegel (NeurIPS 2023, arXiv:2305.16988) generalise the marginal sensitivity model and derive sharp bounds for CATEs, mediation and distributional effects with a scalable estimator; guarantees are asymptotic and rely on correctly specified or sufficiently accurate nuisance estimators.
- **Individual effects.** Jin, Ren and Candes (PNAS 2023; arXiv:2111.12161) give a conformal prediction method with marginal coverage under the marginal sensitivity model, and a Gamma-value per unit (the minimum confounding that explains the effect away). Their guarantees are marginal over covariates, not conditional on $x$, and a concurrent method by Yin, Shi, Wang and Blei (arXiv:2112.03493) is reported as equivalent.
- **Anchoring to trials.** RCT-DUPLICATE (JAMA 2023) emulated 32 trials in claims data: significance agreement was 75% originally and 72% after a published correction, with correlation about 0.94 for closely emulated trials; this supplies empirical but dataset-specific information about how large real-world confounding is.
- **Not shown.** No procedure combines conditional validity, near-oracle sharpness and a principled choice of $\Gamma$ in EHR-scale data with weak overlap in sources reviewed (October 2026).

# Applications

Clinicians and regulators need to know how far a data-driven recommendation for a specific patient group can be trusted. Valid, informative intervals would support real-world evidence submissions, guide which subgroups merit a trial, and prevent harmful policy learning from confounded records.

# Resolution criteria

A refereed method with theorems for items 1-4 and an empirical validation on at least five trial-anchored EHR emulations (where the RCT effect is the hidden truth) showing nominal coverage for the individual-effect and CATE intervals and widths within 1.2 times the oracle bound where computable, together with open software.

# Rating rationale

Strong partial results exist for averages (doubly valid, doubly sharp bounds) and marginal coverage, but conditional validity, near-oracle sharpness and a principled choice of Gamma together are unsolved, and Gamma is fundamentally non-identifiable: research-grade at 55, below the virtual-cell problem (62). Application value 57 for real-world evidence and personalised decisions, below affinity (76); leverage 49 as it shapes causal ML for health data.

# Work mix rationale

A statistics-theory problem, validated with trial-anchored EHR emulations.

# Verification

A refereed method with theorems for items 1 to 4 must show nominal coverage for individual-effect and CATE intervals on at least five trial-anchored EHR emulations (the RCT effect is the hidden truth), with widths within 1.2 times the oracle bound where computable, and release open software.

# Plain explanation

Hospital records could tell us which treatment works best for which kind of patient. But the records only hold what someone typed in. If doctors gave a drug to patients who looked frail in ways not recorded, a comparison can wrongly make the drug seem harmful.

Since we can never be sure nothing is missing, researchers ask a what-if question: suppose there is a hidden factor that could change the odds of getting the treatment by at most some amount. What range of effects is then possible? This gives a range instead of a single number.

The trouble is making the range both honest and useful. Some methods give ranges that are guaranteed to contain the truth but are so wide they say nothing. Others are tight but only right on average across patients, not for the particular kind of patient being asked about. And the hidden-factor strength must be chosen by someone, because the data cannot tell us.

The open problem is a method whose ranges are correct for every kind of patient, as narrow as mathematics allows, and based on a sensible way to pick the hidden-factor strength.

# Student explanation

**Setup.** Observe $(X,A,Y)$ with covariates, treatment and outcome. Potential outcomes $Y(0),Y(1)$; target $\tau(x)=E[Y(1)-Y(0)\mid X=x]$ or the individual effect $Y(1)-Y(0)$.

**Marginal sensitivity model (Tan 2006).** Let $U$ be an unmeasured confounder. The odds of treatment given $(X,U)$ differ from the odds given $X$ alone by a factor within $[1/\Gamma,\Gamma]$. With $\Gamma=1$ there is no hidden confounding. For each $\Gamma$, the set of effects consistent with the data is an interval (partial identification).

**Existing results.** Dorn, Guo and Kallus give sharp bounds for the average effect with estimators that are valid if most nuisance models are wrong. Frauen, Melnychuk and Feuerriegel (NeurIPS 2023) give sharp bounds for conditional effects under a generalised model, using asymptotic arguments. Jin, Ren and Candes (PNAS 2023) apply conformal prediction to give intervals for individual effects with coverage on average over patients, and a Gamma-value per patient: the smallest confounding that could explain away the effect.

**Gaps.** (1) Coverage conditional on $x$ is much harder than marginal coverage. (2) Valid bounds often become conservative. (3) $\Gamma$ is not identified from the data; it must come from domain knowledge, negative controls or trial benchmarks. In RCT-DUPLICATE, 72 percent of 32 emulated trials matched the trial's significance (after a correction), which gives some empirical sense of the size of real confounding, but only for claims data.

**DARC target.** Conditional validity, width within 1.2 times the oracle, a data-driven $\Gamma$ with guarantees, and robustness to weak overlap and many covariates, shown on trial-anchored emulations.

**Reading a result.** Ask whether the coverage guarantee is for a typical patient or for each patient group, whether the strength of hidden confounding was chosen or calibrated, and whether the method was checked against trials where the true effect is known.
