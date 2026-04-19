---
title: "SOP 02 — API Key & Credential Management"
description: ""
---

# 📚 SOP 02 — API Key & Credential Management

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 02 — API Key & Credential Management                     |
| Type             | SOP Plan (Security / Secrets)                                |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal                                                     |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Security/Compliance (Sec)                                    |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘FIT – SOP 2 API Key & Credential Management.pdf; 📘 KB — Trust Center Lite — Security & Privacy Overview.md; Tool set list (Supabase, Pinecone, Qdrant, Postgres, M365, Google, n8n, Power Automate, HubSpot, Airtable, Vercel, Next.js, custom APIs) |

## Purpose and scope boundaries

Define the lifecycle for credentials and secrets used across:

- automation engines (n8n, Power Automate)
- data systems (Supabase/Postgres, Pinecone, Qdrant)
- business platforms (Microsoft 365, Google, HubSpot, Airtable)
- hosting/app layer (Vercel/Next.js)
- custom API integrations

Covers: creation, storage, access, rotation, revocation, incident handling.

Out of scope:

- specific secret values, vault paths, tenant/app IDs (never documented in PUBLIC content)
- code implementation details (covered in Secure SDLC SOP)

## Trigger events

- New integration/workflow requires authentication
- Credential rotation schedule reached
- Suspected credential exposure
- User offboarding (employee/contractor)
- Vendor change requiring re-auth
- Quarterly secrets audit

## Inputs → Outputs (required artifacts)

**Inputs**

- Integration request (system, scope, permissions needed)
- Identity owner and approver
- Least-privilege requirements

**Outputs**

- Secrets register entry (metadata only: owner, purpose, systems, rotation policy)
- Rotation evidence (date, who approved, confirmation)
- Revocation evidence (especially on offboarding)
- “No secrets in code” check record (from SDLC controls)

**Templates/logs to standardize**

- `LOG — Secrets Register (Metadata Only)`
- `TEMPLATE — Integration Credential Request`
- `CHECKLIST — Rotation Procedure (Vendor-Agnostic)`
- `CHECKLIST — Emergency Revocation Steps (Vendor-Agnostic)`

## RACI

- **R:** Sec
- **A:** E
- **C:** Delivery Lead (D), Product Owner (P)
- **I:** Doc, Support Lead (S), Partner Manager (PM)

## KPIs / proof of control

- % integrations with a secrets register entry

- Rotation completion rate (per policy)

- Mean time to revoke on exposure/offboarding

- # of “secrets in code” findings (target: 0)

- # of stale/unknown credentials discovered in quarterly audit

## Visibility + publishable summary

- **Internal:** full SOP + register + evidence
- **Public summary (allowed):** “how we protect secrets” at a commitment level (least privilege, MFA, controlled storage, rotation, revocation)
- **Do not publish:** vault specifics, integration credentials, scopes/permissions lists per client, screenshots, internal tooling names if sensitive