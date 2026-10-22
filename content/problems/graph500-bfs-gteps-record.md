---
type: problem
slug: graph500-bfs-gteps-record
title: "Graph500 BFS: exceed 410,266.553 GTEPS on a validated run"
entry: graph-benchmark-suites
status: OPEN
origin: Graph500 BFS list; record set on the November 2025 list by eos-dfw (CoreWeave) and unchanged in June 2026
ratings:
  difficulty: 18
  applicationValue: 22
  leverage: 6
workMix:
  theory: 5
  engineering: 70
  compute: 25
  empirical: 0
verification:
  route: REPRODUCTION
sources:
  - title: Graph500 home page (June 2026 top ten)
    url: https://graph500.org/
  - title: Graph500 benchmark specification
    url: https://graph500.org/?page_id=12
  - title: "NVIDIA blog: H100 GPUs on CoreWeave deliver a record-breaking Graph500 run"
    url: https://blogs.nvidia.com/blog/h100-coreweave-graph500
timeline:
  - date: 2025-11-01
    title: BFS record on the 31st list
    body: eos-dfw reached 410,266.553 GTEPS at scale 41 with 8,192 H100 GPUs; month given as the list month.
    source: https://blogs.nvidia.com/blog/h100-coreweave-graph500
explainer:
  oneLine: Build a computer system that explores a giant graph faster than the current leader on the Graph500 list.
  flow:
    - Generate a huge random graph
    - Explore from 64 start points
    - Validate each answer
    - Score edges traversed per second
  glossary:
    - term: Graph500
      meaning: A list that ranks supercomputers by how fast they traverse graphs.
      link: https://en.wikipedia.org/wiki/Graph500
    - term: BFS
      meaning: "Breadth-first search: exploring a graph in rings outward from a start vertex."
      link: https://en.wikipedia.org/wiki/Breadth-first_search
    - term: GTEPS
      meaning: Billions of traversed edges per second.
      link: https://en.wikipedia.org/wiki/Graph500
    - term: validation
      meaning: An untimed check that the answer is a correct search tree.
      link: https://graph500.org/?page_id=12
    - term: interconnect
      meaning: The network that links the processors of a large computer.
      link: https://en.wikipedia.org/wiki/Graph500
    - term: graph
      meaning: A set of vertices (dots) joined by edges (lines).
      link: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
    - term: harmonic mean
      meaning: "An average of rates that weights slow runs more heavily: n divided by the sum of reciprocals."
      link: https://en.wikipedia.org/wiki/Harmonic_mean
    - term: parent array
      meaning: For each vertex, the vertex from which BFS first reached it; together these form a tree.
      link: https://en.wikipedia.org/wiki/Breadth-first_search
    - term: Graph500 benchmarks
      meaning: The DARC entry on Graph500, GAP and DIMACS benchmark suites.
      link: /research/graph-benchmark-suites
  readFirst:
    - title: Graph500 specification
      url: https://graph500.org/?page_id=12
      why: Short and precise.
    - title: Breadth-first search (Wikipedia)
      url: https://en.wikipedia.org/wiki/Breadth-first_search
      why: The idea behind the benchmark.
site:
  aiReviewed: true
---

On the Graph500 BFS benchmark (Kronecker graph, edge factor 16, 64 search keys, harmonic-mean TEPS, validated parent arrays), achieve a result above the current top entry of 410,266.553 GTEPS by eos-dfw (scale 41, 8,192 H100 GPUs), first on the November 2025 list and still first in June 2026. A second, per-resource version of the question is also of interest: the highest GTEPS per node or per watt at a fixed scale.

# State of the art

June 2026 BFS list: rank 1 eos-dfw (CoreWeave datacentre, Dallas; 8,192 H100 GPUs in just over 1,000 nodes according to NVIDIA; first listed in November 2025), scale 41, 410,266.553 GTEPS; rank 2 LineShine (National Supercomputing Center in Shenzhen), scale 43, 234,827.4293 GTEPS; rank 3 Fugaku (RIKEN R-CCS), scale 43, 204,068 GTEPS; rank 4 Wuhan Supercomputer, scale 41, 115,357.6 GTEPS; rank 5 Lyris (NVIDIA), scale 38, 91,930.1 GTEPS. The next list is due in November 2026. A per-GPU or per-watt comparison would separate algorithmic and software gains from machine size, but the list reports no common normalisation.

# Applications

Better BFS and SSSP at scale benefits graph analytics, network analysis and bioinformatics workloads that are memory- and communication-bound. The benchmark mainly measures interconnect and memory systems, so the practical value is in system design.

# Resolution criteria

A Graph500-conformant run, validated by the reference validator and accepted on the official list, with TEPS above 410,266.553 GTEPS, or a reproduction of a list entry by an independent party on the same hardware class.

# Rating rationale

Difficulty 18: a record is set by whoever runs a well-engineered BFS on a larger GPU fleet, as eos-dfw did with 8,192 H100s, so access to hardware matters more than new ideas; comparable to the GPU-kernel parity problems (24–30) but less algorithmic. Application value 22: indirect, through interconnect and graph-analytics system design. Leverage 6: nothing depends on the record.

# Work mix rationale

The work is system engineering: communication-efficient BFS on a large machine and access to the hardware.

# Verification

Benchmark: Graph500 BFS (Kernel 2) per the specification at graph500.org: Kronecker generator, edgefactor 16, up to 64 search keys, harmonic-mean TEPS, untimed validation of each parent array. Threshold: 410,266.553 GTEPS (eos-dfw, scale 41; November 2025 list, unchanged in June 2026). A claim must state scale, node count, interconnect and software (the reference code is graph500/graph500), include validator output for all keys, and be reproducible on the same machine class; the official list is the final authority.

# Plain explanation

Graph500 measures how fast a computer can wander through a huge network. The network is a made-up random one with billions of connections, and the machine must find, from a starting dot, all the dots it can reach. A checking program then makes sure the answer is correct. The score is how many connections the machine follows per second.

The top machine, first on the November 2025 list and still first in June 2026, follows about 410 trillion connections per second, which is far beyond what a single computer can do. It is a big datacentre where thousands of processors share the work and pass messages to each other.

The challenge is to beat that number, in a run that the standard check accepts. Mostly that is a question of building and tuning the machine and the network between its parts, not of new mathematics.

The caveat: the test uses a random graph, and real networks look different. A high score shows that a machine is good at moving small pieces of data around.

# Student explanation

**What is measured.** Graph500 ranks computers on how fast they explore a huge graph, a set of vertices joined by edges, rather than on arithmetic speed. The graph is generated by a fixed random recipe with $2^{\text{SCALE}}$ vertices and on average 16 edges per vertex; at scale 41 that is about 2.2 trillion vertices and 35 trillion edges. The machine runs **breadth-first search** (BFS) from up to 64 random start vertices: visit the start, then all its neighbours, then all their unvisited neighbours, layer by layer, recording each vertex's parent. In Python a BFS is a queue and a loop of about ten lines; the difficulty here is that the graph is spread over thousands of processors.

**The score.** The rate is **TEPS**, traversed edges per second, and the reported figure is the harmonic mean over the searches (GTEPS means billions). Each search's output then goes through an untimed **validation**: the parent array must form a tree, and every tree edge must join vertices whose BFS layers differ by exactly one. A run that skips work produces an invalid tree and is rejected, which makes the number checkable.

**The record.** The top BFS entry is eos-dfw, a CoreWeave datacentre system in Dallas with 8,192 NVIDIA H100 GPUs in just over 1,000 nodes: 410,266.553 GTEPS at scale 41. It took first place on the November 2025 list and still led in June 2026, ahead of LineShine in Shenzhen (234,827 GTEPS at scale 43) and Fugaku (204,068 GTEPS at scale 43). The next list is due in November 2026.

**Why it is hard to beat.** BFS does almost no arithmetic per edge; it is limited by memory access and by the network between nodes, because most edges of a random graph cross from one processor's memory to another's. Gains come from compressing and batching messages, avoiding work on vertices already visited (direction-optimising BFS switches from pushing out of the current layer to pulling from unvisited vertices), and from having a larger, better-connected machine. Hardware access is therefore the main barrier, more than new ideas.

**How a claim is checked.** A submission states the scale, node count, interconnect and software (the reference code is graph500/graph500), includes the validator output for every search, and is accepted onto the official list; an independent rerun on the same class of machine is the stronger check.
