---
title: Public PKI vs Private PKI
order: 6
---

## Public PKI

Public PKI refers to certificates issued by publicly trusted Certificate Authorities that are recognized by web browsers, operating systems, and other platforms. These certificates are used for public-facing services like websites.

### Characteristics

- Universally trusted by browsers and devices
- Governed by CA/Browser Forum Baseline Requirements
- Subject to strict validation and audit requirements
- Certificate validity periods limited (currently 397 days for TLS, reducing to 47 days by 2029)
- All issuances logged in Certificate Transparency logs

## Private PKI

Private PKI uses an internal Certificate Authority to issue certificates for use within an organization's network. These certificates are not trusted by external browsers or systems unless explicitly configured.

### Characteristics

- Complete control over certificate policies and validity periods
- No external validation requirements
- Ideal for internal services, IoT devices, and corporate networks
- Lower cost for high certificate volumes
- Requires managing and securing your own CA infrastructure

## The Dual-EKU Deprecation Challenge

Historically, organizations could use public TLS certificates for both server and client authentication. However, starting in 2025, major browsers led by Google Chrome are deprecating certificates with both Server Authentication and Client Authentication EKUs.

### Timeline

- **October 2025:** DigiCert stopped including Client Authentication EKU by default
- **May 2026:** Client Authentication EKU will be completely removed from public TLS certificates

### Solutions for mTLS after dual-EKU deprecation

- **Private PKI:** Deploy an internal CA for client certificates
- **DigiCert X9 PKI:** A purpose-built public PKI for client authentication, governed by ASC X9 standards
- **Managed PKI Services:** Use CA providers' managed private PKI offerings
