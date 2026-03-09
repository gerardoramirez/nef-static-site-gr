---
title: Certificate Authorities and Public Key Infrastructure
order: 3
---

## What is a Certificate Authority (CA)?

A Certificate Authority is a trusted third-party organization authorized to issue digital certificates. CAs verify the identity of entities requesting certificates and digitally sign those certificates to establish trust. Major public CAs include DigiCert, Let's Encrypt, GlobalSign, and Sectigo.

### CA Responsibilities

- **Identity Verification:** Validating the identity of certificate applicants
- **Certificate Issuance:** Signing and issuing certificates after verification
- **Certificate Revocation:** Maintaining Certificate Revocation Lists (CRLs) and OCSP responders
- **Compliance:** Following CA/Browser Forum Baseline Requirements and undergoing annual audits

## Certificate Hierarchy and Chain of Trust

Certificates exist in a hierarchical structure that forms a chain of trust:

- **Root CA Certificate:** Self-signed certificate at the top of the hierarchy, embedded in operating systems and browsers
- **Intermediate CA Certificate:** Signed by the root CA, used to issue end-entity certificates while protecting the root
- **End-Entity (Leaf) Certificate:** The certificate issued to a specific server, client, or individual

When a client verifies a certificate, it follows the chain from the end-entity certificate up through intermediate CAs to a trusted root CA in its trust store.

## Certificate Validation Levels

- **Domain Validated (DV):** Verifies domain ownership only, issued quickly
- **Organization Validated (OV):** Verifies domain and organization identity, standard for commercial websites
- **Extended Validation (EV):** Highest verification level, used by financial institutions and government agencies
