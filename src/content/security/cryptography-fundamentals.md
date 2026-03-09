---
title: Public Key Cryptography Fundamentals
order: 4
---

X.509 certificates rely on asymmetric cryptography, which uses mathematically related key pairs: a public key and a private key.

## How Key Pairs Work

- **Public Key:** Shared openly, used to encrypt data or verify signatures
- **Private Key:** Kept secret, used to decrypt data or create signatures
- **Mathematical Relationship:** The keys are mathematically related, but deriving the private key from the public key is computationally infeasible

## Common Algorithms

- **RSA:** Most widely used, key sizes typically 2048 or 4096 bits
- **ECDSA:** Elliptic Curve Digital Signature Algorithm, smaller keys with equivalent security
- **Ed25519:** Modern elliptic curve algorithm, increasingly popular

## Encryption vs Signing

### Encryption (Confidentiality)

Data encrypted with the public key can only be decrypted with the private key. This ensures only the intended recipient can read the message.

### Digital Signatures (Authenticity and Integrity)

Data signed with the private key can be verified with the public key. This proves the message came from the holder of the private key and hasn't been tampered with.
