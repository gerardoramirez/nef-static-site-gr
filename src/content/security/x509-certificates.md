---
title: Understanding X.509 Certificates
order: 2
---

X.509 is an International Telecommunication Union (ITU) standard that defines the format of digital certificates. First introduced in 1988, X.509 certificates are the foundation of modern public key infrastructure (PKI) and are used in TLS/SSL, email encryption, code signing, and many other security protocols.

## What is an X.509 Certificate?

An X.509 certificate is a digital document that binds an identity (such as a website, organization, or individual) to a public key using a digital signature. It enables secure, authenticated communications by providing cryptographic proof of identity.

## Key Components of an X.509 Certificate

- **Version:** Indicates the X.509 version (v1, v2, or v3)
- **Serial Number:** Unique identifier issued by the Certificate Authority
- **Subject:** The entity the certificate represents (domain name, organization, individual)
- **Issuer:** The Certificate Authority that signed and issued the certificate
- **Public Key:** The public cryptographic key used for encryption and signature verification
- **Validity Period:** Start and end dates defining when the certificate is valid
- **Signature Algorithm:** The cryptographic algorithm used to sign the certificate
- **Digital Signature:** The CA's signature proving authenticity
- **Extensions:** Additional attributes like Extended Key Usage (EKU), Subject Alternative Names (SAN)

## Extended Key Usage (EKU)

The Extended Key Usage extension defines the specific purposes for which a certificate can be used. Common EKU values include:

- **Server Authentication (1.3.6.1.5.5.7.3.1):** For TLS server certificates
- **Client Authentication (1.3.6.1.5.5.7.3.2):** For mTLS client certificates
- **Code Signing (1.3.6.1.5.5.7.3.3):** For signing software and code

> **Important:** As of 2025, major browsers and certificate authorities are deprecating dual-EKU certificates (those with both server and client authentication). This change significantly impacts mTLS implementations using public certificates.
