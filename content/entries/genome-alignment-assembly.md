---
type: entry
slug: genome-alignment-assembly
title: Genome sequence alignment and assembly
field: computational-medicine
kind: ALGORITHM
status: MATURE
summary: Dynamic-programming alignment, seed-and-extend read mapping, and de Bruijn / overlap-graph assembly that turn sequencer output into reference-anchored variants and complete genomes.
reliedOn: Every variant call, clinical genome report, pangenome and reference genome rests on aligners and assemblers; their errors in repeats and structural variants propagate into medicine.
dependsOn:
  - fine-grained-complexity
references:
  - title: Nurk et al., The complete sequence of a human genome, Science (2022)
    url: https://doi.org/10.1126/science.abj6987
    kind: paper
  - title: Liao et al., A draft human pangenome reference, Nature (2023)
    url: https://doi.org/10.1038/s41586-023-05896-x
    kind: paper
  - title: "Li, Minimap2: pairwise alignment for nucleotide sequences, Bioinformatics (2018)"
    url: https://doi.org/10.1093/bioinformatics/bty191
    kind: paper
  - title: Cheng et al., Haplotype-resolved de novo assembly using phased assembly graphs with hifiasm, Nat. Methods (2021)
    url: https://doi.org/10.1038/s41592-020-01056-5
    kind: paper
  - title: Rautiainen et al., Telomere-to-telomere assembly of diploid chromosomes with Verkko, Nat. Biotechnol. (2023)
    url: https://doi.org/10.1038/s41587-023-01662-6
    kind: paper
  - title: Pevzner, Tang, Waterman, An Eulerian path approach to DNA fragment assembly, PNAS (2001)
    url: https://doi.org/10.1073/pnas.171285098
    kind: paper
  - title: Backurs and Indyk, Edit distance cannot be computed in strongly subquadratic time (unless SETH is false)
    url: https://arxiv.org/abs/1412.0348
    kind: paper
  - title: A complete diploid human genome benchmark for personalized genomics (T2T-HG002, bioRxiv)
    url: https://www.biorxiv.org/content/10.1101/2025.09.21.677443v1
    kind: paper
  - title: "Human Pangenome Reference Consortium: Data Release 2"
    url: https://humanpangenome.org/hprc-data-release-2/
    kind: docs
timeline:
  - date: 1970-03-01
    title: Needleman-Wunsch alignment
    body: Dynamic programming for global alignment of protein sequences.
    source: https://doi.org/10.1016/0022-2836(70)90057-4
  - date: 1990-10-05
    title: BLAST
    body: Seed-and-extend local search makes database-scale homology search practical.
    source: https://doi.org/10.1016/S0022-2836(05)80360-2
  - date: 2022-03-31
    title: T2T-CHM13
    body: The first complete, gapless human genome sequence, adding about 200 Mb to GRCh38, reported by the T2T Consortium.
    source: https://doi.org/10.1126/science.abj6987
  - date: 2023-05-10
    title: Draft human pangenome
    body: 47 phased diploid assemblies covering more than 99 percent of the expected sequence at over 99 percent accuracy.
    source: https://doi.org/10.1038/s41586-023-05896-x
  - date: 2025-05-12
    title: HPRC Release 2
    body: 232 individuals assembled from HiFi and ultra-long nanopore reads with deep-learning polishing, many chromosomes complete telomere to telomere (pre-publication).
    source: https://humanpangenome.org/hprc-data-release-2/
  - date: 2025-09-21
    title: T2T-HG002 diploid benchmark (preprint, later in Cell)
    body: Telomere-to-telomere continuity for all 46 chromosomes except the interior of rDNA arrays, with 99.4 percent of the diploid genome free of detectable errors.
    source: https://www.biorxiv.org/content/10.1101/2025.09.21.677443v1
explainer:
  oneLine: Methods that line up DNA reads against a reference or stitch them into a complete genome.
  flow:
    - Sequencer outputs reads
    - Align to a reference
    - Or find overlaps and assemble
    - Resolve repeats with long reads
    - Both parental copies phased
  glossary:
    - term: genome
      meaning: The complete set of DNA instructions of an organism.
      link: https://en.wikipedia.org/wiki/Genome
    - term: DNA sequencing
      meaning: Reading the order of the A, C, G and T letters in DNA, usually as many short or long pieces called reads.
      link: https://en.wikipedia.org/wiki/DNA_sequencing
    - term: genome assembly
      meaning: Stitching millions of overlapping DNA reads back into the long sequences of the chromosomes, like reassembling a shredded book.
      link: /research/genome-alignment-assembly
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
    - title: Sequence assembly (Wikipedia)
      url: https://en.wikipedia.org/wiki/Sequence_assembly
      why: How reads are assembled into genomes, with the main algorithm families.
    - title: Human Genome Project (Wikipedia)
      url: https://en.wikipedia.org/wiki/Human_Genome_Project
      why: Background on the first human genome and why gaps remained.
    - title: Human Pangenome Reference Consortium
      url: https://humanpangenome.org/
      why: The project building a many-person human reference.
site:
  published: true
  aiReviewed: true
---

## What it is

A sequencer returns millions of short (100-300 bp Illumina) or long (10-100 kb PacBio HiFi / Oxford Nanopore) reads. **Alignment** places reads on a known reference; **assembly** reconstructs a genome without one. Both are string problems with a biological twist: genomes are repetitive, diploid, and differ between individuals.

## The core machinery

**Pairwise alignment.** Needleman-Wunsch (global, 1970) and Smith-Waterman (local, 1981) fill an $O(mn)$ dynamic-programming table with scores for matches, mismatches and gaps. Fine-grained complexity results (Backurs-Indyk 2015) show that edit distance cannot be computed in truly sub-quadratic time unless the Strong Exponential Time Hypothesis fails, so practical tools use heuristics, banding and bit-parallelism instead.

**Read mapping.** Seed-and-extend with an index: BLAST (1990), then Burrows-Wheeler / FM-index tools (BWA-MEM), and minimizer-based long-read mappers (minimap2) that sample k-mers to keep the index small. Variant calling then looks at pileups of aligned reads (GATK, DeepVariant).

**Assembly.** Overlap-layout-consensus for long reads; **de Bruijn graphs** (nodes are k-mers, edges overlaps; an assembly is an Eulerian-like path, Pevzner et al. 2001) for short reads. Modern long-read assemblers (hifiasm, Verkko, Flye) build string graphs with haplotype-aware phasing using parental data, Hi-C, or ultra-long reads, resolving segmental duplications, satellite arrays and the short arms of acrocentric chromosomes that earlier references left as gaps.

**Pangenomes.** The linear reference is replaced by a graph of many haplotypes (vg, minigraph-cactus, Giraffe). Reads are mapped to a graph; structural variants and highly polymorphic loci (MHC, KIR, LPA) become tractable.

## Milestones

The 2001 draft human genome; GRCh38; T2T-CHM13 (2022) closing the remaining 8 percent; the Human Pangenome Reference Consortium releases (47 assemblies in 2023, 232 individuals in release 2, 2025); and the complete diploid T2T-HG002 benchmark (2025-26).

## Techniques to master

Suffix arrays and FM-indexes, minimizers, graph algorithms (Eulerian paths, bubble popping), error correction and consensus, phasing, QV and completeness metrics (Merqury, Inspector), benchmarking against truth sets (GIAB, T2T-HG002).

## Where it bites

Routine, automated, gapless diploid assemblies of any individual (including ribosomal DNA arrays) at clinical cost and turnaround, plus accurate genotyping of tandem repeats and structural variants against pangenomes, are the open engineering-and-algorithms frontier.

# Plain explanation

A DNA sequencing machine does not read a whole genome in one go. It reads millions of short pieces, like a shredded newspaper where every page was fed through the shredder many times. Two jobs follow.

Alignment places each piece against an existing reference genome, the way you would match scraps to a known copy of the paper. Differences between the scrap and the copy show a person's genetic variants, which can explain a disease.

Assembly has no reference. It looks for overlaps between pieces and glues them together, hoping to rebuild the original text. This is hard because genomes contain long stretches that repeat almost exactly, so a piece from one repeat can fit in many places. Longer reads help, because a single read can span a whole repeat.

In 2022 scientists finally produced the first truly complete human genome, and new projects are now assembling both copies of the genome of many individuals. What is still hard is doing this automatically and cheaply for anyone, especially for the long, near-identical repeat regions near the ends of some chromosomes.

# Student explanation

**Alignment.** To compare two sequences we fill a table: entry $(i,j)$ holds the best score for aligning the first $i$ letters of one with the first $j$ letters of the other, allowing matches, mismatches and gaps. This dynamic programme (Needleman-Wunsch for global, Smith-Waterman for local alignment) costs time proportional to $m\times n$. For whole genomes that is far too slow, so tools use _seed and extend_: find short exact matches using an index (an FM-index based on the Burrows-Wheeler transform, or sampled "minimizers" for long reads), then align only around those seeds. Under a widely believed conjecture (SETH), alignment cannot be made much faster than quadratic in the worst case.

**Assembly.** Short-read assemblers build a _de Bruijn graph_, whose nodes are short words of length $k$ and whose edges link words overlapping by $k-1$ letters; the genome corresponds to a path through the graph. Long-read assemblers (hifiasm, Verkko) build overlap graphs and use extra information to separate the two parental copies, called haplotypes.

**Quality.** Completeness is measured by gaps, by correct chromosome ends (telomeres) and by error rates such as QV (quality value; QV60 means one error per million letters).

**Pangenomes.** Replacing one reference with a graph that includes many people's sequences reduces bias against people unlike the reference.

**Remaining difficulty.** Repeats longer than the reads, such as the ribosomal DNA arrays and centromeres.

**Where it bites.** DARC lists the goal of routine, gapless, haplotype-resolved assembly of any person's genome.

**Try it.** Take two short strings, such as GATTACA and GCATGCU, and fill the alignment table by hand with match +1, mismatch -1 and gap -1; tracing back from the bottom-right corner shows how one optimal alignment is read off, and why long genomes need indexes rather than full tables.
