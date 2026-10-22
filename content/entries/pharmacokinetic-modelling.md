---
type: entry
slug: pharmacokinetic-modelling
title: Pharmacokinetic and PBPK modelling
field: computational-medicine
kind: THEORY
status: MATURE
summary: Compartmental and physiologically based models of drug absorption, distribution, metabolism and excretion, used to translate in vitro data and animal studies into human dose.
reliedOn: Dose selection, first-in-human predictions, drug-drug interaction assessment and regulatory submissions all use PK/PBPK models; their predictive error limits how many candidates fail in the clinic for exposure reasons.
references:
  - title: "Rodgers, Leahy, Rowland, Physiologically based pharmacokinetic modeling 1: predicting the tissue distribution of moderate-to-strong bases, J. Pharm. Sci. (2005)"
    url: https://doi.org/10.1002/jps.20322
    kind: paper
  - title: Rowland, Peck, Tucker, Physiologically-based pharmacokinetics in drug development and regulatory science, Annu. Rev. Pharmacol. Toxicol. (2011)
    url: https://doi.org/10.1146/annurev-pharmtox-010510-100540
    kind: paper
  - title: Obach, Prediction of human clearance of twenty-nine drugs from hepatic microsomal intrinsic clearance data, Drug Metab. Dispos. (1997)
    url: https://dmd.aspetjournals.org/content/27/11/1350
    kind: paper
  - title: "Wood, Houston, Hallifax, Clearance prediction methodology needs fundamental improvement: trends common to rat and human hepatocytes/microsomes and implications for experimental methodology, Drug Metab. Dispos. (2017)"
    url: https://dmd.aspetjournals.org/content/45/11/1178
    kind: paper
  - title: Open Systems Pharmacology (PK-Sim / MoBi) documentation
    url: https://www.open-systems-pharmacology.org/
    kind: docs
timeline:
  - date: 1937-01-01
    title: Teorell's two-compartment model
    body: Teorell formulates compartmental distribution of drugs, the origin of modern pharmacokinetics.
  - date: 1997-11-01
    title: IVIVE of microsomal clearance
    body: Obach evaluates prediction of human clearance for 29 drugs from microsomal intrinsic clearance, showing systematic under-prediction.
    source: https://dmd.aspetjournals.org/content/27/11/1350
  - date: 2005-01-01
    title: Mechanistic tissue-partition models
    body: Rodgers and Rowland provide mechanistic prediction of tissue distribution for PBPK.
    source: https://doi.org/10.1002/jps.20322
  - date: 2017-11-01
    title: IVIVE trends quantified
    body: Wood et al. show clearance prediction errors common to rat and human hepatocytes and microsomes.
    source: https://dmd.aspetjournals.org/content/45/11/1178
explainer:
  oneLine: Mathematical models of how a drug travels through the body and how fast it is removed.
  flow:
    - Dose enters the body
    - Spreads to tissues
    - Liver and kidney remove it
    - Clearance sets exposure
    - Exposure sets the dose
  glossary:
    - term: pharmacokinetics
      meaning: "The study of how a drug moves through the body over time: absorption, distribution, metabolism and removal."
      link: /research/pharmacokinetic-modelling
    - term: clearance
      meaning: The volume of blood cleared of a drug per minute; it decides how much drug stays in the body for a given dose.
      link: https://en.wikipedia.org/wiki/Clearance_(pharmacology)
    - term: PBPK model
      meaning: A model that represents organs as connected compartments with real blood flows to predict drug levels in the body.
      link: /research/pharmacokinetic-modelling
    - term: hepatocyte
      meaning: The main liver cell, which breaks down most drugs; lab-grown ones are used to estimate drug breakdown.
      link: https://en.wikipedia.org/wiki/Hepatocyte
    - term: drug metabolism
      meaning: The chemical changes, mostly in the liver, that body enzymes make to a drug so it can be removed.
      link: https://en.wikipedia.org/wiki/Drug_metabolism
    - term: enzyme
      meaning: A protein that speeds up a chemical reaction without being used up.
      link: https://en.wikipedia.org/wiki/Enzyme
    - term: calibration
      meaning: When a model says 80 percent, it is right about 80 percent of the time.
      link: https://en.wikipedia.org/wiki/Calibration_(statistics)
  readFirst:
    - title: Pharmacokinetics (Wikipedia)
      url: https://en.wikipedia.org/wiki/Pharmacokinetics
      why: "Core concepts: absorption, distribution, metabolism, excretion."
    - title: Clearance (pharmacology) (Wikipedia)
      url: https://en.wikipedia.org/wiki/Clearance_(pharmacology)
      why: What clearance means and how it is used for dosing.
    - title: Open Systems Pharmacology
      url: https://www.open-systems-pharmacology.org/
      why: Free PBPK software and documentation.
site:
  published: true
  aiReviewed: true
---

## What it is

Pharmacokinetics (PK) describes how drug concentration $C(t)$ in blood or tissue evolves after dosing. The one-compartment model with first-order elimination is $C(t)=\frac{D}{V}e^{-kt}$ with clearance $CL=kV$; exposure (AUC) is $\text{Dose}/CL$ for intravenous dosing. Clearance and volume of distribution are the two numbers that drive dose and dosing interval.

## The core machinery

**Compartmental and population PK.** Mamillary compartment models, nonlinear mixed-effects modelling (NONMEM, Monolix) with inter-individual variability and covariates; population PK/PD links exposure to response.

**PBPK.** Organs are compartments with real volumes and blood flows, connected by the circulation; tissue partitioning is predicted from physicochemical properties (Rodgers-Rowland), and metabolism is scaled from in vitro assays to the whole liver. The well-stirred liver model gives $CL_H = \frac{Q_H f_u CL_{int}}{Q_H + f_u CL_{int}}$ for hepatic blood flow $Q_H$, unbound fraction $f_u$ and intrinsic clearance $CL_{int}$.

**In vitro-in vivo extrapolation (IVIVE).** Intrinsic clearance from microsomes or hepatocytes is scaled by cell/enzyme content per gram liver; transporters and extrahepatic metabolism add steps. Systematic under-prediction by 3- to 10-fold is common, forcing empirical scaling factors, and reviews report most predictions falling outside 2-fold.

**Biologics and special cases.** Target-mediated drug disposition for antibodies, FcRn recycling, nanoparticles, and paediatric or organ-impairment scaling need different model structures.

**Machine learning.** Models trained on measured human or animal PK from structure predict clearance, volume and half-life; reported 2-fold accuracy of structure-only models is typically about 40-60 percent, validated mostly retrospectively.

## Techniques to master

ODE modelling, nonlinear mixed-effects estimation, identifiability and sensitivity analysis, allometric scaling, IVIVE assumptions, model qualification and the regulatory (FDA/EMA) framework for PBPK.

## Where it bites

The open problem is to predict human clearance for new chemical matter before synthesis, within 2-fold for most compounds, reliably enough to remove an assay stage, and to say honestly when it cannot.

# Plain explanation

After you swallow a pill, the drug is absorbed, spreads through the blood to tissues, is changed by enzymes (mostly in the liver) and finally leaves in urine or bile. Pharmacokinetics describes this journey with numbers. Two matter most: how fast the body clears the drug, and how widely it spreads. They determine how much to give and how often.

The simplest picture treats the body as a single bathtub with a drain: drug goes in, and the water level falls at a rate proportional to the level. More detailed models draw the organs as connected tanks with realistic blood flows. These are used to plan the first dose in people and to predict what happens when two medicines are taken together.

Before a new molecule has ever been given to a person, scientists estimate its clearance from lab tests with liver cells and from animal studies. These estimates are often wrong by a factor of two or more, and they tend to underestimate. A major goal is to predict clearance directly from the molecule's structure, accurately enough to skip some experiments and to say when the prediction cannot be trusted.

# Student explanation

**One-compartment model.** If the body is a single well-mixed volume $V$ and the drug is removed at a rate proportional to its concentration with constant $k$, then after an intravenous dose $D$ the concentration is $C(t)=(D/V)e^{-kt}$. Clearance is $CL=kV$ and the total exposure (area under the concentration curve) is $AUC=D/CL$, so clearance sets the dose needed for a target exposure.

**Population models.** Nonlinear mixed-effects models (NONMEM and others) estimate typical values and between-patient variability, and how covariates such as weight or kidney function shift them.

**PBPK.** Physiologically based models give each organ a volume and blood flow and predict tissue distribution from the molecule's properties. For the liver, the well-stirred model gives hepatic clearance $CL_H=\frac{Q f_u CL_{int}}{Q+f_u CL_{int}}$, where $Q$ is liver blood flow, $f_u$ the fraction of drug not bound to protein and $CL_{int}$ the enzymes' intrinsic capacity.

**IVIVE.** In vitro-in vivo extrapolation measures $CL_{int}$ in liver microsomes or hepatocytes and scales it up. Systematic under-prediction of 3 to 10 fold is common, and most predictions miss by more than a factor of two. Transporters, non-liver metabolism and enzymes such as aldehyde oxidase (which differs strongly between species) are common causes.

**Machine learning.** Models trained on measured clearances of known drugs typically report 40 to 60 percent of predictions within two-fold, mostly in retrospective tests.

**Skills.** Ordinary differential equations, mixed-effects estimation, identifiability, enzyme kinetics, regulatory model qualification.

**Try it.** Simulate the one-compartment model in a spreadsheet for two clearances differing by a factor of two and compare the exposure after a fixed dose; this shows concretely why a two-fold error in predicted clearance is the usual yardstick.
