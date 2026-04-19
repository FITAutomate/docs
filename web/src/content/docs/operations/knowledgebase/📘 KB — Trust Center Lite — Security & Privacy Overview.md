---
title: "Trust Center Lite — Security & Privacy Overview"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Trust Center Lite — Security & Privacy Overview |
| Type | Policy |
| KB_TARGET | PUBLIC_WEB |
| Visibility | Public |
| Publish Ready | Yes |
| Redaction Needed | None |
| Version | 1.0 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Trust |
| Tags | security, privacy, trust, data handling |

# Trust Center Lite — Security & Privacy Overview

This page is a **high-level overview** of FIT Automate's security and privacy approach—designed to be transparent without exposing sensitive internal configurations.

> This is a "Trust Center Lite" overview. It does not represent a formal certification (e.g., SOC 2). Final wording on retention defaults and vendor lists should be confirmed in your service agreement.

---

## Who It Is For

Prospective clients, procurement contacts, and security reviewers who need a plain-language summary of FIT's security and privacy posture.

---

## What It Includes

### Security Principles

FIT Automate is built around "human-in-the-loop" and "guardrails by design":

- Sensitive actions are **reviewable** and **approvable**
- Systems are designed to be **auditable**
- Access is **least-privilege**
- Knowledge and documentation is **governed and versioned**

### Identity and Access Control

FIT uses Microsoft 365 / Entra ID as the core identity platform and enforces MFA for FIT-owned identities.

High-level access practices:
- Separate identities for admin vs automation use-cases (reduces risk and improves auditability)
- Access is granted based on role and need
- Automation credentials are managed to avoid "credential sprawl"

### Secrets and Credential Management

FIT does not store secrets in plain text documentation. Credential practices:
- Credentials stored in a dedicated credential vault
- Encrypted credential storage in automation tooling where supported
- Rotation and revocation on a schedule and on suspicion of exposure

### Data Handling and Privacy

**What data FIT Automate may process:**
Depending on the engagement, FIT may process: operational metadata (workflow status, run results), business documents you provide for AI knowledge systems, and communications content (e.g., support requests) when needed to deliver support.

**Data minimization:**
FIT collects and processes only what is required to deliver the agreed service.

**Client data boundaries:**
FIT does not intentionally publish or train public-facing systems on your confidential data. AI knowledge systems built for public experiences are sanitized and separated from internal materials.

### AI Knowledge System Governance: Public vs Internal

When FIT deploys AI knowledge assistants and knowledge systems:
- Documents have naming and versioning standards
- Content is reviewed for sensitive data before ingestion
- Public and internal knowledge is **separated by design** — internal documents are never surfaced through customer-facing channels
- Updates follow a review cycle to reduce "stale knowledge" risk

### Logging and Auditability

FIT designs automations to be observable:
- Workflow run outcomes can be logged
- Exceptions can be routed to humans
- Critical paths can be monitored so failures are visible quickly

Exact logging implementation depends on the selected plan and engagement.

### Incident Response

If a security incident is suspected or confirmed, FIT follows a basic lifecycle:
1. Triage and contain
2. Assess scope and impact
3. Eradicate and recover
4. Communicate appropriately (based on severity and contractual terms)
5. Document learnings and prevention steps

### Data Retention and Deletion

Retention and deletion depend on the plan/tier selected, the type of engagement, and any contractual or regulatory needs.

When requested and feasible, FIT can:
- Delete provided documents from FIT-managed systems used for your engagement
- Remove material from indexed retrieval systems (where applicable)

Exact defaults and timelines are confirmed in your service agreement.

### Subprocessors and Third-Party Services

FIT uses reputable third-party platforms to deliver services (examples may include productivity, automation, and knowledge tooling). The specific list and data flows depend on your solution and tier. If you need a formal subprocessor list for procurement, request it via email.

---

## What It Is Not

- A formal SOC 2 or ISO 27001 certification
- A complete technical security specification
- A substitute for reviewing your specific service agreement

---

## Next Step / Related Links

For security, privacy, or trust questions: [https://forwarditthinking.com/contact](https://forwarditthinking.com/contact)
