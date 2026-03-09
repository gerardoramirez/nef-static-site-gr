---
title: Common Issues and Troubleshooting
order: 9
---

## Certificate Chain Issues

### Problem: Incomplete certificate chain

**Solution:** Ensure all intermediate certificates are included in the certificate bundle. The chain should go from end-entity certificate through all intermediates to a root CA.

### Problem: Untrusted root CA

**Solution:** For private PKI, ensure client trust stores include your root CA certificate. For public PKI, verify you're using a publicly trusted CA.

## Certificate Validation Errors

### Problem: Certificate expired

**Solution:** Renew certificates before expiration. Implement automated renewal and monitoring.

### Problem: Hostname mismatch

**Solution:** Ensure the certificate's Common Name (CN) or Subject Alternative Names (SANs) match the hostname being accessed. Use wildcard certificates for multiple subdomains.

### Problem: Certificate revoked

**Solution:** Investigate why the certificate was revoked, issue a new certificate, and update systems.

## mTLS-Specific Issues

### Problem: Client certificate not sent

**Solution:** Verify the client has the certificate and private key properly configured. Ensure the certificate chains to a CA trusted by the server.

### Problem: Server rejects client certificate

**Solution:** Check that the client certificate was issued by a CA the server trusts. Verify the certificate's EKU includes Client Authentication.

## Performance Considerations

- **Session Resumption:** Enable TLS session resumption to reduce handshake overhead
- **OCSP Stapling:** Use OCSP stapling to avoid client-side revocation checks
- **Hardware Acceleration:** Use hardware acceleration for cryptographic operations
- **Certificate Size:** Keep certificate chains as short as possible
