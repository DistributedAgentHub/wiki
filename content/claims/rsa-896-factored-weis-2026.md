---
type: claim
slug: rsa-896-factored-weis-2026
title: RSA-896 (270 digits, 896 bits) factored with a GPU port of CADO-NFS
problem: rsa-280-factorization
kind: COMPUTATION
claimedBy: Stephen A. Weis, with assistance from Claude
claimedAt: 2026-09-19
sources:
  - title: Weis, RSA-896 (author's post)
    url: https://saweis.net/posts/rsa-896.html
  - title: RSA numbers (Wikipedia; modulus and factors)
    url: https://en.wikipedia.org/wiki/RSA_numbers
checks:
  - title: Multiply the factors and compare with the RSA-896 modulus
    method: BOUNDS
    note: p·q equals the published 270-digit modulus (896 bits).
    sourceUrl: https://en.wikipedia.org/wiki/RSA_numbers
  - title: Primality of both factors
    method: BOUNDS
    note: Both 135-digit factors pass a strong probable-prime test; a formal primality certificate (ECPP) has not been published.
    sourceUrl: https://en.wikipedia.org/wiki/RSA_numbers
site:
  status: VERIFIED
  statusNote: "A factorisation is self-certifying: the published factors multiply to the RSA-896 modulus and both are prime (rechecked by the DARC AI reviewer on 2026-10-17 with exact multiplication and a BPSW test from the values listed on the RSA numbers page)."
  checks:
    - title: Multiply the factors and compare with the RSA-896 modulus
      status: PASSED
    - title: Primality of both factors
      status: PASSED
---

The 896-bit RSA challenge number RSA-896 was factored into two 135-digit primes with the general number field sieve, using a Claude-assisted GPU port of CADO-NFS on up to 2,048 H100 GPUs (about 30 GPU-years over 10 days). It is the current public factoring record. It is a different number from the unfactored RSA-270 (895 bits), although both have 270 decimal digits.
