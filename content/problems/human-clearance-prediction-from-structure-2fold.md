---
type: problem
slug: human-clearance-prediction-from-structure-2fold
title: Predicting human clearance of new compounds from structure within 2-fold for most compounds
entry: pharmacokinetic-modelling
status: OPEN
origin: In vitro-in vivo extrapolation (Houston 1994; Obach 1997) and QSAR-based ADME prediction; recurring industry benchmarking
ratings:
  difficulty: 49
  applicationValue: 54
  leverage: 27
workMix:
  theory: 20
  engineering: 10
  compute: 15
  empirical: 55
verification:
  route: OBSERVATION
sources:
  - title: Wood, Houston, Hallifax, Clearance prediction methodology needs fundamental improvement, Drug Metab. Dispos. 45, 1178 (2017)
    url: https://dmd.aspetjournals.org/content/45/11/1178
  - title: Obach, Prediction of human clearance of twenty-nine drugs from hepatic microsomal intrinsic clearance data, Drug Metab. Dispos. (1997)
    url: https://dmd.aspetjournals.org/content/27/11/1350
  - title: Review of IVIVE underprediction in human hepatic clearance (PMC)
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7515557
  - title: "FLEX-SSS: rat allometry plus random forest for human clearance (ChemRxiv preprint, 2025)"
    url: https://chemrxiv.org/engage/chemrxiv/article-details/6840f5e03ba0887c33c934b9
timeline:
  - date: 1997-11-01
    title: Microsomal IVIVE of 29 drugs
    body: Obach documents systematic under-prediction of human clearance.
    source: https://dmd.aspetjournals.org/content/27/11/1350
  - date: 2017-11-01
    title: Clearance prediction methodology needs fundamental improvement
    body: Wood et al. show the majority of predictions fall outside 2-fold for both microsomes and hepatocytes.
    source: https://dmd.aspetjournals.org/content/45/11/1178
  - date: 2025-06-01
    title: FLEX-SSS preprint
    body: Hybrid allometric and random-forest approach reaches about 42% within 2-fold on an external set of 62 compounds.
    source: https://chemrxiv.org/engage/chemrxiv/article-details/6840f5e03ba0887c33c934b9
explainer:
  oneLine: Predicting from a molecule's structure alone how fast a person's body will clear it, to within a factor of two.
  flow:
    - New molecule, no human data
    - Lab and AI estimate clearance
    - Compare with real human value
    - Most estimates off by 2x or more
    - "Aim: 4 in 5 within 2x"
  glossary:
    - term: clearance
      meaning: The volume of blood cleared of a drug per minute; it decides how much drug stays in the body for a given dose.
      link: https://en.wikipedia.org/wiki/Clearance_(pharmacology)
    - term: pharmacokinetics
      meaning: "The study of how a drug moves through the body over time: absorption, distribution, metabolism and removal."
      link: /research/pharmacokinetic-modelling
    - term: hepatocyte
      meaning: The main liver cell, which breaks down most drugs; lab-grown ones are used to estimate drug breakdown.
      link: https://en.wikipedia.org/wiki/Hepatocyte
    - term: drug metabolism
      meaning: The chemical changes, mostly in the liver, that body enzymes make to a drug so it can be removed.
      link: https://en.wikipedia.org/wiki/Drug_metabolism
    - term: PBPK model
      meaning: A model that represents organs as connected compartments with real blood flows to predict drug levels in the body.
      link: /research/pharmacokinetic-modelling
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
    - term: benchmark
      meaning: A fixed test set and scoring rule that lets different methods be compared fairly.
      link: https://en.wikipedia.org/wiki/Benchmark_(computing)
    - term: enzyme
      meaning: A protein that speeds up a chemical reaction without being used up.
      link: https://en.wikipedia.org/wiki/Enzyme
  readFirst:
    - title: Clearance (pharmacology) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clearance_(pharmacology)
      why: Definition and use in dosing.
    - title: Drug metabolism (Wikipedia)
      url: https://en.wikipedia.org/wiki/Drug_metabolism
      why: How the body changes and removes drugs.
    - title: Physiologically based pharmacokinetic modelling (Wikipedia)
      url: https://en.wikipedia.org/wiki/Physiologically_based_pharmacokinetic_modelling
      why: The mechanistic modelling approach.
raw:
  ratingRationale: "Decades of IVIVE work and growing ML data have not moved most predictions inside 2-fold; sparse human PK data and mechanism diversity cap accuracy, so difficulty (49) sits between segmentation (41) and residence time (61). Application value 54 for R&D efficiency and animal reduction, a specific industry benefit; leverage 27 as it is confined to drug-development pipelines."
site:
  aiReviewed: true
---

Total body clearance $CL$ (mL/min/kg) determines steady-state exposure ($AUC=\text{Dose}/CL$) and hence dose. In discovery, human clearance is estimated from in vitro hepatic stability assays, animal PK and allometry, which cost time and animals.

**Task.** Predict human clearance for new chemical matter from structure (plus optional cheap in vitro data) before any human or animal in vivo data exist for the compound.

**Concrete target.** On a prospective, blinded set of at least 200 compounds from at least five chemical series and at least five clearance mechanisms (CYP, UGT, aldehyde oxidase, renal, transporter-mediated hepatic uptake), with clinical clearance measured after the models were frozen: (i) $\ge 80\%$ of compounds within 2-fold of observed clearance; (ii) geometric mean fold error (GMFE) $\le 1.5$; (iii) no systematic bias (mean log error within $\pm 0.1$); (iv) calibrated prediction intervals (nominal 90% intervals cover 85-95%) so that uncertain predictions can be routed to experiments; and (v) mechanism attribution, identifying the dominant clearance route correctly in $\ge 80\%$ of compounds.

Challenges: sparse human PK data (hundreds to a few thousand compounds in public sets), species differences, transporter-enzyme interplay (extended clearance), non-CYP routes such as aldehyde oxidase (large species differences), and in vitro system variability.

# State of the art

- **IVIVE accuracy.** Reviews report that most hepatic IVIVE predictions miss by more than 2-fold: a weighted analysis found about 66.5% of predictions fell outside 2-fold of the observed in vivo clearance for both microsomes and hepatocytes, and Wood et al. (Drug Metab. Dispos. 2017) reported about 75% outside 2-fold; systematic under-prediction of 3- to 10-fold is common, corrected empirically by regression offsets. For aldehyde-oxidase substrates the reported geometric mean fold errors are large (roughly five- to ten-fold depending on the in vitro system), and empirical scaling factors are reported to raise the share of predictions within 2-fold substantially; the exact values are review-reported and were not re-checked against the underlying datasets for this entry.
- **Machine learning.** Reported within-2-fold rates for structure-based models are typically 40-60%, usually from retrospective cross-validation on public data: one published multivariate model on several hundred compounds reported roughly 60% within 2-fold (figures as reported by the authors, retrospective). A 2025 ChemRxiv preprint (FLEX-SSS, rat-based allometry plus random forest) reported about 42% within 2-fold and GMFE 2.7 on an external set of 62 compounds. These studies differ in inputs and are not comparable, and none was a large prospective blinded test.
- **Not shown.** No published method meets the target above prospectively; no standard blinded community challenge for human clearance prediction is established as of October 2026.

# Applications

Accurate prediction would let teams prioritise compounds with human-appropriate clearance before synthesis, reduce animal studies, improve first-in-human dose selection and reduce late exposure-related attrition. Even calibrated uncertainty would be valuable in deciding which experiments to run.

# Resolution criteria

A refereed, prospective, blinded study (for example a consortium challenge with undisclosed clinical clearance values) in which one method meets criteria (i)-(v) across at least 200 compounds and the five mechanism classes, with the method reproducible by outside groups.

# Work mix rationale

Limited by the scarcity and variability of human PK data; models are comparatively cheap.

# Verification

Needs undisclosed clinical clearance values: one method must meet criteria (i) to (v) across at least 200 compounds and the five mechanism classes in a refereed, prospective, blinded study (for example a consortium challenge), reproducible by outside groups.

# Plain explanation

When a new medicine is tested in people, researchers must pick the first dose. If the body clears the drug much faster than expected, the dose is useless; if more slowly, it can be unsafe. So they try to estimate clearance, the speed of removal, before any person has taken the drug.

Today, they measure how fast liver cells in a dish break down the molecule, scale up to a whole liver, and compare with animal studies. These estimates are often off by two-fold or more, and usually in the same direction: the real clearance in people is faster than predicted.

AI models trained on past drugs can predict clearance directly from the molecule's structure, which would be a big time-saver. Reported accuracy is that roughly half of predictions land within a factor of two, mostly in tests that look back at old data. Few tests have been blind and forward-looking, and data on humans are scarce.

The goal is a method that lands within a factor of two for four in five new molecules, covers different ways the body removes drugs, and tells you when it is unsure.

# Student explanation

**Definitions.** Clearance $CL$ (mL/min/kg) is the plasma volume cleared of drug per unit time; for an intravenous dose $D$, the exposure is $AUC=D/CL$. The 'fold error' of a prediction is $\max(pred/obs,obs/pred)$; 'within 2-fold' means this is at most 2; the geometric mean fold error (GMFE) averages fold errors on a log scale.

**Mechanistic route.** Intrinsic clearance $CL_{int}$ is measured in liver microsomes or hepatocytes, scaled to the whole liver, and inserted into the well-stirred model $CL_H=Q f_u CL_{int}/(Q+f_u CL_{int})$ with liver blood flow $Q$ and unbound fraction $f_u$. Reviews report that most predictions are more than 2-fold off (about 66 percent in one weighted analysis, about 75 percent in Wood et al. 2017), with systematic under-prediction of 3 to 10 fold; empirical scaling factors are applied. For aldehyde oxidase substrates, GMFE can be above 10 without empirical scaling.

**ML route.** Models use structure-derived descriptors or learned embeddings, sometimes plus in vitro or animal data. Reported within-2-fold shares are roughly 40 to 60 percent, almost always retrospective, on different datasets and with different inputs, so the numbers are not comparable across studies.

**Obstacles.** Few compounds have reliable human clearance (hundreds to thousands); mechanisms vary (CYP, UGT, aldehyde oxidase, kidney, transporters) and interact; species differences; variability in lab systems.

**DARC target.** Prospective and blinded, at least 200 compounds, five series and five mechanisms: 80 percent within 2-fold, GMFE at most 1.5, no bias, calibrated intervals, and correct dominant route 80 percent of the time.
