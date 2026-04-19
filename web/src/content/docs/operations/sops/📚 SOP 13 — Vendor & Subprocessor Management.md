---
title: "SOP 13 — Vendor & Subprocessor Management"
description: ""
---

# 📚 SOP 13 — Vendor & Subprocessor Management

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 13 — Vendor & Subprocessor Management                    |
| Type             | SOP Plan (Security / Procurement)                            |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal                                                     |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Security/Compliance (Sec)                                    |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | Tool stack list (Supabase, Pinecone, Qdrant, Postgres, M365, Google, n8n, Power Automate, HubSpot, Airtable, Vercel); 📘 KB — Trust Center Lite — Security & Privacy Overview.md |

## Purpose and scope boundaries

Ensure FIT evaluates and tracks vendors that could affect:

- client data handling
- service availability and reliability
- security posture
- contractual obligations (DPAs/subprocessors)

Includes: vendor intake, risk tiering, approvals, periodic reviews, subprocessors transparency decision.

Out of scope:

- client-specific vendor mandates (handled per engagement)
- detailed security questionnaires published publicly

## Trigger events

- New vendor/tool adoption
- New integration introduces a new subprocessor
- Annual/quarterly vendor review
- Vendor security incident affecting FIT or clients
- Contract renewal

## Inputs → Outputs (required artifacts)

**Inputs**

- Vendor request (purpose, data touched, criticality)
- Data classification impacts (from SOP 12)
- Service dependency assessment (availability impact)

**Outputs**

- Vendor register entry (owner, purpose, tier, data touched)
- Approval record (go/no-go + conditions)
- Review record (security/availability changes)
- Subprocessor list (optional public-facing artifact)

**Templates/logs to standardize**

- `LOG — Vendor Register`
- `TEMPLATE — Vendor Intake & Risk Tiering`
- `TEMPLATE — Vendor Review Checklist`
- `DECISION — Subprocessor Disclosure (Yes/No + conditions)`

## Risk tiering (recommended baseline)

- **Tier 1 (Critical):** core platform dependencies (identity, hosting, data stores)
- **Tier 2 (Important):** operational tooling (automation engines, CRM)
- **Tier 3 (Low):** build tools and non-production utilities

## RACI

- **R:** Sec
- **A:** E
- **C:** Fin (contract/billing), D (delivery impact), P (product impact), Doc (public disclosures)
- **I:** PM, S

## KPIs / proof of control

- % vendors in register with risk tier assigned

- Review cadence completion rate

- # of unapproved vendors discovered in audits (target: 0)

- Time to assess/respond to vendor incidents impacting clients

## Visibility + publishable summary

- **Internal:** vendor register + review evidence
- **Public summary (optional):** “subprocessors list” or “tooling categories” (only if you choose)
- **Do not publish:** internal risk scores, negotiation notes, detailed security review results

------