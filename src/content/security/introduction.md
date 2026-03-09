---
title: Introduction to TLS and mTLS
order: 1
---

Transport Layer Security (TLS) is the fundamental protocol for securing network communications on the internet. As the successor to SSL (Secure Sockets Layer), TLS provides encryption, authentication, and data integrity for connections between clients and servers.

## What is Standard TLS?

In standard TLS, only the server is authenticated to the client. When you visit an HTTPS website, your browser verifies the server's identity using its certificate, but the server doesn't verify who you are. This one-way authentication is sufficient for most public web applications.

## What is Mutual TLS (mTLS)?

Mutual TLS extends standard TLS by adding client authentication. In mTLS, both the client and server verify each other's identities using digital certificates before establishing a secure connection. This two-way authentication provides significantly stronger security for scenarios where both parties need to prove their identity.

## Key Difference

- **Standard TLS:** Server authenticates to client (one-way)
- **mTLS:** Both client and server authenticate to each other (two-way)
