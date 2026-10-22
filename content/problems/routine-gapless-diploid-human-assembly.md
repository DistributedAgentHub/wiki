---
type: problem
slug: routine-gapless-diploid-human-assembly
title: Routine automated gapless haplotype-resolved assembly of any human genome, including rDNA arrays
entry: genome-alignment-assembly
status: PARTIAL
origin: Human Genome Project (2003) to T2T-CHM13 (2022); HPRC (2023, 2025); T2T-HG002 (2025-26)
ratings:
  difficulty: 39
  applicationValue: 40
  leverage: 38
workMix:
  theory: 10
  engineering: 45
  compute: 25
  empirical: 20
verification:
  route: REPRODUCTION
sources:
  - title: Nurk et al., The complete sequence of a human genome, Science (2022)
    url: https://doi.org/10.1126/science.abj6987
  - title: Liao et al., A draft human pangenome reference, Nature (2023)
    url: https://doi.org/10.1038/s41586-023-05896-x
  - title: Human Pangenome Reference Consortium, Data Release 2
    url: https://humanpangenome.org/hprc-data-release-2/
  - title: A complete diploid human genome benchmark for personalized genomics (T2T-HG002, bioRxiv preprint)
    url: https://www.biorxiv.org/content/10.1101/2025.09.21.677443v1
  - title: Rautiainen et al., Telomere-to-telomere assembly of diploid chromosomes with Verkko, Nat. Biotechnol. (2023)
    url: https://doi.org/10.1038/s41587-023-01662-6
  - title: Cheng et al., Haplotype-resolved de novo assembly using phased assembly graphs with hifiasm, Nat. Methods (2021)
    url: https://doi.org/10.1038/s41592-020-01056-5
links:
  - to: edit-distance-truly-subquadratic-one-plus-eps-approximation
    kind: RELATED
    note: Sequence alignment inside assembly and variant calling is an edit-distance computation whose worst-case cost is the subject of this problem.
timeline:
  - date: 2022-03-31
    title: T2T-CHM13
    body: First complete human genome sequence (haploid).
    source: https://doi.org/10.1126/science.abj6987
  - date: 2023-05-10
    title: HPRC draft pangenome
    body: 47 phased diploid assemblies at over 99% accuracy.
    source: https://doi.org/10.1038/s41586-023-05896-x
  - date: 2025-05-12
    title: HPRC Release 2
    body: 232 individuals, with large gains in continuity and accuracy.
    source: https://humanpangenome.org/hprc-data-release-2/
  - date: 2025-09-21
    title: T2T-HG002 diploid benchmark
    body: All 46 chromosomes T2T except rDNA array interiors; 99.4% error-free by benchmark metrics.
    source: https://www.biorxiv.org/content/10.1101/2025.09.21.677443v1
explainer:
  oneLine: Reading a person's entire genome, both parental copies, from end to end with no gaps, automatically.
  flow:
    - Long reads from sequencer
    - Overlaps become a graph
    - Parental copies separated
    - Long repeats must be spanned
    - Gapless, curated by software
  glossary:
    - term: genome
      meaning: The complete set of DNA instructions of an organism.
      link: https://en.wikipedia.org/wiki/Genome
    - term: genome assembly
      meaning: Stitching millions of overlapping DNA reads back into the long sequences of the chromosomes, like reassembling a shredded book.
      link: /research/genome-alignment-assembly
    - term: DNA sequencing
      meaning: Reading the order of the A, C, G and T letters in DNA, usually as many short or long pieces called reads.
      link: https://en.wikipedia.org/wiki/DNA_sequencing
    - term: haplotype
      meaning: The set of DNA variants inherited together on one copy of a chromosome, from one parent.
      link: https://en.wikipedia.org/wiki/Haplotype
    - term: pangenome
      meaning: A reference that holds the DNA of many people at once instead of one person's sequence.
      link: https://en.wikipedia.org/wiki/Pan-genome
    - term: ribosomal DNA
      meaning: Hundreds of near-identical repeats of the genes for ribosomes, packed into long arrays that are very hard to read.
      link: https://en.wikipedia.org/wiki/Ribosomal_DNA
    - term: mutation
      meaning: A change in the letters of DNA.
      link: https://en.wikipedia.org/wiki/Mutation
  readFirst:
    - title: Human Genome Project (Wikipedia)
      url: https://en.wikipedia.org/wiki/Human_Genome_Project
      why: Why the first human genome left gaps.
    - title: Human Pangenome Reference Consortium
      url: https://humanpangenome.org/
      why: Project news and data releases.
    - title: Sequence assembly (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sequence_assembly
      why: How assemblers work.
site:
  aiReviewed: true
---

**Task.** From a single run of sequencing data (for example one PacBio HiFi plus one ultra-long Oxford Nanopore flow cell, with or without parental or Hi-C phasing), produce a fully automated, haplotype-resolved, gapless telomere-to-telomere (T2T) assembly of a human genome, with no manual curation.

**Concrete target.** On at least 100 genetically diverse individuals (including admixed genomes with high heterozygosity and individuals with unusual structural rearrangements): (i) at least 95% of the 46 chromosomes (counted per haplotype) assembled as a single gapless contig from telomere to telomere; (ii) base accuracy at least QV 60 (one error per megabase) and phase-switch error rate at most 1 per 10 Mb, assessed with k-mer and orthogonal methods (Merqury, T2T-HG002 benchmark); (iii) rDNA arrays on the acrocentric short arms (chromosomes 13, 14, 15, 21, 22), which carry hundreds of near-identical 45 kb repeat units, resolved with correct copy number and unit-level variants, validated against orthogonal methods (e.g. optical mapping, FISH, or ultra-long reads spanning the array); (iv) centromeric higher-order-repeat arrays correct in length and order; (v) cost and time compatible with clinical use (at most USD 1,000 consumables for the sequencing and less than 24 hours of compute).

The unsolved parts are the longest near-identical repeats: rDNA arrays (megabase scale, copy number varies between people and even cells) and satellite arrays, where read length and accuracy limit uniqueness of overlaps.

# State of the art

- **T2T-CHM13 (Science 2022).** The first gapless human genome, from a haploid hydatidiform mole, finished with extensive manual effort and multiple technologies.
- **HPRC Release 1 (Nature 2023).** 47 phased diploid assemblies covering more than 99% of the expected sequence at more than 99% accuracy.
- **HPRC Release 2 (announced 12 May 2025, pre-publication).** 232 individuals from HiFi and ultra-long nanopore data with trio or Hi-C phasing and DeepConsensus plus deep-learning polishing; misassemblies reduced about 3-fold, single-base and short-indel errors about 2-fold (below one base error per 500 kb), and a substantial number of complete T2T chromosomes, but the release is not entirely gapless and the exact complete-chromosome fraction was not stated on the release page reviewed.
- **T2T-HG002 (bioRxiv preprint, 2025; a journal version is reported but was not verified for this entry).** A complete diploid benchmark with T2T continuity for all 46 chromosomes except the interior of the rDNA arrays, with 99.4% of the diploid genome free of detectable errors and 701.4 Mb autosomal sequence plus 216.8 Mb on sex chromosomes absent from previous benchmarks. It required extensive curation; the abstract notes state-of-the-art de novo assembly resolves 2-7% more sequence than earlier approaches and has about one error per 100 kb in 99.9% of benchmark regions.
- **Gap.** Fully automated, curation-free T2T assembly of arbitrary individuals, with validated rDNA arrays, has not been demonstrated at population scale.

# Applications

Complete personal diploid genomes would reveal structural variants, repeat expansions and haplotype-specific regulation missed by short-read pipelines, improve diagnosis of rare disease, enable population-scale pangenome references that reduce reference bias, and make rDNA and satellite variation a measurable trait.

# Resolution criteria

A refereed demonstration meeting criteria (i)-(v) across at least 100 individuals, using released assembler software and standard sequencing data, with independent validation of rDNA copy number and with the assemblies deposited in public archives.

# Rating rationale

A complete diploid human genome now exists and HPRC Release 2 delivers 232 assemblies, so what remains is automation, rDNA arrays and curation: engineering-heavy and the easiest problem in the area (39), comparable to the verified-multiplier problem (41). Application value 40 (rare disease and pangenomics, with short-read pipelines already serving most clinics); leverage 38 as reference quality underpins variant calling.

# Work mix rationale

Mostly sequencing and assembler engineering plus validation of the hardest repeats.

# Verification

Released assembler software on standard sequencing data must meet criteria (i) to (v) across at least 100 individuals, with independent validation of rDNA copy number and the assemblies deposited in public archives.

# Plain explanation

Every person carries two copies of their genome, one from each parent. Reading DNA in short snippets and stitching them together leaves holes at repetitive parts that look the same from many places. For years the human reference had around 8 percent missing for that reason.

In 2022 scientists completed the first truly gapless human genome, from a special cell type with only one copy. Since then projects have assembled both copies from many people, and a 2025 benchmark covers every chromosome end to end except the inside of one very repetitive region, the genes that build ribosomes.

But these achievements needed expensive sequencing and human experts patching trouble spots. The goal is for any lab to take one run of long-read sequencing and get both copies from end to end by computer, quickly and cheaply, including the repetitive ribosomal DNA with its correct number of copies.

Why does it matter? Hidden stretches contain variants linked to disease and differences between populations. A complete genome would show them to doctors.

# Student explanation

**State of play.** T2T-CHM13 (2022) completed a haploid human genome. The Human Pangenome Reference Consortium's first release had 47 phased diploid assemblies; Release 2 (May 2025, pre-publication) has 232 individuals made from PacBio HiFi and Oxford Nanopore ultra-long reads, phased with parental or Hi-C data, with machine-learning polishing and errors below about one per 500 kb. A bioRxiv benchmark (T2T-HG002, 2025; reported in Cell 2026) is telomere-to-telomere for all 46 chromosomes except inside the rDNA arrays, with 99.4 percent of the genome free of detectable errors.

**What makes repeats hard.** Assemblers look for overlaps between reads. If a repeat unit is 45 kb long and occurs hundreds of times in near-identical copies, only reads longer than the whole array (megabases) can span it. Small differences between units give weak signals for ordering them.

**Quality measures.** Gapless contigs from telomere to telomere; base accuracy as a quality value (QV60 means one error per million bases); switch errors in phasing; k-mer based completeness (Merqury); validation by other methods such as optical mapping.

**DARC target.** For 100 or more diverse individuals: 95 percent of chromosomes gapless without manual curation, QV at least 60, correct rDNA copy number and variation, correct centromeric repeats, at clinical cost and speed (consumables at most USD 1,000, under 24 hours compute).

**Why it matters.** Structural variants and repeat expansions underlie many rare diseases, and reference bias disadvantages populations poorly represented in the reference.

**Reading a result.** Look for whether manual curation was used, how errors were measured (k-mer based or against an independent truth set), whether the rDNA arrays were fully resolved or only bridged, and how many different individuals were assembled.
