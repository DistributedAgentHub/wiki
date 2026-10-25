---
type: entry
slug: ml-kem-implementations
title: ML-KEM (Kyber) implementations and their formal verification
field: cryptography
kind: LIBRARY
status: ACTIVE
summary: The NIST post-quantum key encapsulation standard FIPS 203, with the CRYSTALS-Kyber reference code and mlkem-native, a C implementation with machine-checked memory-safety and assembly proofs.
reliedOn: ML-KEM protects key exchange in TLS and other protocols against future quantum attacks; whether implementations are correct and constant-time decides whether deployment is safe.
dependsOn:
  - lattice-cryptography
references:
  - title: "NIST FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"
    url: https://csrc.nist.gov/pubs/fips/203/final
    kind: docs
  - title: "Bos et al., CRYSTALS-Kyber: a CCA-secure module-lattice-based KEM (ePrint 2017/634)"
    url: https://eprint.iacr.org/2017/634
    kind: paper
  - title: mlkem-native (PQCA)
    url: https://github.com/pq-code-package/mlkem-native
    kind: code
  - title: pq-crystals/kyber reference repository
    url: https://github.com/pq-crystals/kyber
    kind: code
timeline:
  - date: 2024-08-13
    title: FIPS 203 published
    body: NIST published FIPS 203, the ML-KEM standard derived from CRYSTALS-Kyber.
    source: https://csrc.nist.gov/pubs/fips/203/final
explainer:
  oneLine: The new standard way to agree on a secret key that quantum computers should not break, and the code that implements it.
  flow:
    - Quantum computers threaten today's key exchange
    - NIST standardises ML-KEM (FIPS 203)
    - Implementations must be correct and constant-time
    - Machine-checked proofs back the code
  glossary:
    - term: ML-KEM
      meaning: The NIST standard for agreeing on a secret key, designed to resist quantum computers.
      link: https://csrc.nist.gov/pubs/fips/203/final
    - term: key encapsulation
      meaning: A way for one side to create a secret key and send it safely wrapped to the other.
      link: https://en.wikipedia.org/wiki/Key_encapsulation_mechanism
    - term: constant-time code
      meaning: Code whose running time does not depend on secret values, so timing cannot leak them.
      link: https://en.wikipedia.org/wiki/Timing_attack
    - term: formal verification
      meaning: Proving with a computer that a program meets its specification.
      link: https://en.wikipedia.org/wiki/Formal_verification
    - term: post-quantum cryptography
      meaning: Encryption designed to stay secure when large quantum computers exist.
      link: https://en.wikipedia.org/wiki/Post-quantum_cryptography
    - term: lattice cryptography
      meaning: Cryptography based on hard problems about point grids.
      link: /research/lattice-cryptography
    - term: modular arithmetic
      meaning: Arithmetic that wraps around at a fixed number q, like a clock; ML-KEM uses q = 3329.
      link: https://en.wikipedia.org/wiki/Modular_arithmetic
    - term: Learning With Errors
      meaning: Recover a secret vector from linear equations that each carry a small random error; believed hard even for quantum computers.
      link: https://en.wikipedia.org/wiki/Learning_with_errors
    - term: Shor's algorithm
      meaning: A quantum algorithm that factors integers and computes discrete logarithms efficiently, breaking RSA and elliptic-curve cryptography.
      link: https://en.wikipedia.org/wiki/Shor%27s_algorithm
    - term: timing attack
      meaning: Recovering secrets by measuring how long operations take when the time depends on secret data.
      link: https://en.wikipedia.org/wiki/Timing_attack
  readFirst:
    - title: Cryptography's Future Will Be Quantum-Safe (Quanta)
      url: https://www.quantamagazine.org/cryptographys-future-will-be-quantum-safe-heres-how-it-will-work-20221109/
      why: Why a new standard is needed.
    - title: NIST FIPS 203
      url: https://csrc.nist.gov/pubs/fips/203/final
      why: The standard itself.
    - title: mlkem-native README
      url: https://github.com/pq-code-package/mlkem-native
      why: What is proved, and how, in plain terms.
site:
  published: true
  aiReviewed: true
---

## The standard

**ML-KEM** is the module-lattice-based key-encapsulation mechanism standardised by NIST as **FIPS 203**. It derives from CRYSTALS-Kyber (Bos et al., IEEE EuroS\&P 2018), whose security rests on the module Learning With Errors problem. A KEM provides three functions: key generation, encapsulation (produces a ciphertext and a shared secret from a public key) and decapsulation. ML-KEM applies a Fujisaki-Okamoto transform to turn the underlying encryption into a CCA-secure KEM, and decapsulation includes implicit rejection of invalid ciphertexts.

## Implementations

- **pq-crystals/kyber** is the reference repository of the Kyber team, with portable C code and optimised AVX2 code.
- **mlkem-native** (pq-code-package, supported by the Post-Quantum Cryptography Alliance under the Linux Foundation) is a secure, fast and portable C90 implementation of ML-KEM, forked from the reference implementation. Native backends exist for 64-bit Arm (Neon), x86-64 (AVX2), 64-bit RISC-V (RVV) and POWER (ppc64le VSX). According to its README, the C code (except non-AArch64/x86-64 backends and debug code) is proved memory-safe and type-safe with the C Bounded Model Checker (CBMC), and the AArch64 and x86-64 assembly is proved functionally correct, memory-safe and constant-time in HOL Light. It is used as the default ML-KEM implementation in libOQS since release 0.13.0, in AWS-LC since v1.50.0 and, through AWS-LC, in rustls since 0.23.28.

## What can be machine-checked

Three properties matter for a KEM implementation. _Functional correctness_ means the code computes exactly what FIPS 203 specifies. _Memory and type safety_ means no overflow or undefined behaviour. _Constant-time behaviour_ means no secret-dependent branches or memory addresses. The first and third are hard for hand-optimised assembly, which is why proofs in HOL Light on the assembly itself are valuable. Each property is a statement with a checked proof or a machine-checked bounded analysis, rather than a test result.

## Limits

Proofs hold against a model of the CPU and of the specification; they do not remove risks such as fault injection or microarchitectural side channels outside the model. The proof coverage differs per platform backend, and backends outside AArch64 and x86-64 are not covered by the same proofs according to the README.

# Plain explanation

When your browser connects to a website, the two sides first agree on a secret key. Today the key agreement relies on mathematics that a large quantum computer could break. ML-KEM is a replacement chosen by the US standards body NIST. It is based on a hard problem about grids of points, and it is believed to resist quantum computers.

A standard on paper is not enough: the code that implements it must be correct, must not crash or leak memory, and must take the same time whatever the secret is, because tiny timing differences can give secrets away.

One open-source implementation, mlkem-native, tries to prove these things. Computer-checked proofs show that its C code does not overflow memory or numbers, and that its hand-written assembly for common processors computes the right answer and runs in constant time. The code is used by several cryptography libraries.

The caveat: a proof always holds against a model of the processor and the standard. Attacks that physically disturb a chip are outside that model.

# Student explanation

**What problem it solves.** Before your browser and a website can encrypt traffic, they must agree on a shared secret key over a channel anyone can read. Today this usually relies on elliptic-curve mathematics, which a large quantum computer running Shor's algorithm could break. Recordings made now could be decrypted later, so the replacement has to be deployed before such computers exist. **ML-KEM**, standardised by NIST in 2024 as FIPS 203, is that replacement.

**What a KEM does.** A key-encapsulation mechanism has three functions. _KeyGen_ makes a public and a private key. _Encaps_ takes the public key and outputs a short ciphertext plus a random shared secret. _Decaps_ takes the private key and the ciphertext and recovers the same secret. In Python terms: `pk, sk = keygen(); ct, k1 = encaps(pk); k2 = decaps(sk, ct)`, and correctness means `k1 == k2`.

**Why it is believed secure.** ML-KEM works with vectors and matrices of polynomials whose coefficients are taken modulo $q = 3329$, that is, in clock arithmetic where 3329 wraps round to 0. The public key is roughly $t = As + e$, where $A$ is a public random matrix, $s$ is the secret and $e$ is a small random error. Without $e$, recovering $s$ is Gaussian elimination from first year; with $e$ it is the **module Learning With Errors** problem, believed hard even for quantum computers because it reduces to finding short vectors in lattices.

**Why implementations need proofs.** A correct standard can still be broken by its code. Three properties matter: _functional correctness_ (the code computes exactly what FIPS 203 says), _memory safety_ (no reading or writing outside arrays, no integer overflow) and _constant time_ (the running time and memory addresses do not depend on the secret, since an attacker who can time operations can otherwise recover key bits). Tests cannot establish any of these for every possible input.

**mlkem-native.** This open-source C implementation, supported by the Post-Quantum Cryptography Alliance, uses the C Bounded Model Checker (CBMC) to prove its C code memory-safe and type-safe, and the HOL Light theorem prover to prove its hand-written AArch64 and x86-64 assembly functionally correct, memory-safe and constant-time. It is the default ML-KEM implementation in liboqs and is used in AWS-LC and, through it, rustls.

**Limits.** The proofs hold for a model of the processor; power analysis, fault injection and speculative-execution attacks are outside that model, and the RISC-V and POWER backends are not covered by the same proofs.
