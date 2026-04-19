---
title: "SOP 11 — Offboarding & Data Deletion (Internal Proof & Controls)"
description: ""
---

# 📚 SOP 11 — Offboarding & Data Deletion (Internal Proof & Controls)

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 11 — Offboarding & Data Deletion (Internal Proof & Controls) |
| Type             | SOP Plan (Security / Operations / Customer Lifecycle)        |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Public Policy + Internal Proof)                        |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Security/Compliance (Sec)                                    |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 KB — Offboarding & Data Deletion — What Happens When You Leave.md; 📘FIT – SOP 1 Account Management & Identity Standards.pdf; 📘FIT – SOP 2 API Key & Credential Management.pdf; 📘 FIT – SOP 5 Knowledge Base & RAG Governance.pdf |

## Purpose and scope boundaries

Define a consistent, auditable offboarding process for:

- clients (services/solution packs)
- agency partners (Powered by FIT / White-label)
- internal users/contractors (access removal)

Includes:

- access revocation
- workflow shutdown (if requested)
- credential revocation/rotation (if applicable)
- data deletion request handling (where applicable)
- handoff artifacts and closure

Out of scope:

- legal contract terms and jurisdiction-specific requirements (handled by agreement and legal counsel)
- public disclosure of internal storage locations or system architecture details

## Trigger events

- Client or partner termination / end of engagement
- Pause request (temporarily disable workflows)
- Data deletion request
- Internal staff/contractor offboarding
- Security event requiring credential revocation

## Inputs → Outputs (required artifacts)

**Inputs**

- Offboarding request (scope + effective date)
- Systems list in scope (tools, workflows, knowledge sources)
- Data classification map (SOP 12)
- Access inventory (SOP 01)
- Credential inventory metadata (SOP 02)

**Outputs**

- Offboarding checklist completion record
- Access revocation evidence (who/what/when)
- Credential revocation/rotation evidence (metadata only)
- Workflow disablement record (what was stopped)
- Knowledge base source removal record (where applicable)
- Data deletion request evidence (where applicable)
- Handoff pack (if requested/contracted)

**Templates/logs to standardize**

- `CHECKLIST — Offboarding (Client/Partner)`
- `CHECKLIST — Access Revocation`
- `CHECKLIST — Credential Revocation / Rotation (Metadata Only)`
- `LOG — Offboarding Register`
- `TEMPLATE — Deletion Request Record`
- `TEMPLATE — Handoff Pack Index`

## Offboarding flow (high level)

1. **Confirm scope** (full exit vs pause; what systems/workflows are included)
2. **Freeze risky operations** if needed (stop high-impact workflows first)
3. **Revoke access** (accounts/roles/tokens per agreed method)
4. **Disable workflows** (if requested) and verify no triggers remain active
5. **Handle data deletion request** (where applicable) with evidence tracking
6. **Provide handoff artifacts** (docs, summaries, operator guidance) if requested
7. **Close out** (final confirmation + records stored)

## RACI

- **R:** Security/Compliance (Sec)
- **A:** Founder/Exec (E)
- **C:** Delivery Lead (D), Support Lead (S), Documentation Lead (Doc), Partner Manager (PM)
- **I:** Product Owner (P), Finance Ops (Fin)

## KPIs / proof of control

- Time to revoke access (from request to completion)

- % offboardings with complete evidence package

- Deletion request cycle time (tracked; targets defined internally/contractually)

- # of offboarding-related incidents (should trend down)

- % workflows disabled/removed as requested (verification logged)

## Visibility + publishable summary

- **Public:** Offboarding & Data Deletion KB policy (high-level commitments)
- **Internal:** evidence logs, system lists, verification steps, approvals
- **Do not publish:** client identifiers, system paths, storage locations, deletion scripts, credential details, internal check results