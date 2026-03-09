---
title: How Mutual TLS Works
order: 5
---

Mutual TLS authentication occurs during the TLS handshake, where both parties present and verify certificates before establishing an encrypted connection.

## The mTLS Handshake Process

### Step 1: Client Hello

The client initiates the connection and sends supported TLS versions, cipher suites, and random data to the server.

### Step 2: Server Hello and Certificate

The server responds with its chosen TLS version and cipher suite, then presents its certificate chain. The client verifies the server certificate against its trust store.

### Step 3: Certificate Request (mTLS-specific)

The server sends a Certificate Request message, indicating it requires client authentication. This message includes a list of trusted Certificate Authority distinguished names that the server accepts.

### Step 4: Client Certificate

The client responds with its own certificate (and any necessary intermediate certificates) that chains to one of the CAs listed in the server's Certificate Request.

### Step 5: Certificate Verify

The server verifies the client certificate's signature, validity period, revocation status, and that it chains to a trusted CA. The client must also prove possession of the private key.

### Step 6: Key Exchange and Encrypted Communication

Once both parties are authenticated, they complete the key exchange and establish an encrypted channel for secure communication.

## Authentication vs Authorization

It's crucial to understand that mTLS provides **authentication** (verifying identity) but not **authorization** (granting access). After mTLS authentication succeeds, your application must implement access control to determine what resources the authenticated client can access.
