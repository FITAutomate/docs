---
title: "SOP 01 — Account Management & Identity Standards"
description: ""
---

# 📚 SOP 01 — Account Management & Identity Standards

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 01 — Account Management & Identity Standards             |
| Type             | SOP Plan (Security / Identity)                               |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal                                                     |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Security/Compliance (Sec)                                    |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘FIT – SOP 1 Account Management & Identity Standards.pdf; 📘 KB — Trust Center Lite — Security & Privacy Overview.md; 📘 KB — Offboarding & Data Deletion — What Happens When You Leave.md |

## Purpose and scope boundaries

Establish FIT’s identity baseline for **all tools and environments** (SaaS, automation platforms, hosting, data stores). Covers:

- account creation and lifecycle (join/move/leave)
- role-based access control (RBAC) expectations
- MFA requirements
- privileged/admin access controls
- shared account prohibitions and exceptions process

Out of scope:

- tenant-specific configuration details (kept in internal runbooks)
- vendor-specific deep setup guides (separate tool runbooks)

## Trigger events

- New tool/vendor adoption
- New user added (employee/contractor)
- New client or partner environment access required
- Privilege elevation request
- Quarterly access review
- Offboarding event (client/partner/staff)

## Inputs → Outputs (required artifacts)

**Inputs**

- Access request (who/what/why/duration)
- Role definitions (standard roles + least-privilege mapping)
- Tool inventory (from vendor register / workflow registry)

**Outputs**

- Access grant log (who granted what, when, justification)
- Role assignment record (RBAC mapping)
- Quarterly access review report (findings + remediation)
- Offboarding evidence (revocation confirmations)

**Templates/logs to standardize**

- `TEMPLATE — Access Request Form`
- `LOG — Access Grant & Changes Register`
- `TEMPLATE — Privileged Access Justification`
- `REPORT — Quarterly Access Review`
- `CHECKLIST — Offboarding Access Revocation`

## RACI (standardized roles)

- **R (Responsible):** Sec
- **A (Accountable):** Founder/Exec (E)
- **C (Consulted):** Delivery Lead (D), Support Lead (S), Documentation Lead (Doc)
- **I (Informed):** Product Owner (P), Partner Manager (PM), Finance Ops (Fin)

## KPIs / proof of control

- MFA coverage (target: all privileged accounts; then all user accounts)

- % tools with documented RBAC mapping

- Quarterly access review completion rate

- Time to revoke access on offboarding (tracked)

- # of privileged access exceptions (and closure rate)

## Visibility + publishable summary

- **Internal:** full SOP + logs + review evidence
- **Public summary (allowed):** high-level commitments only (MFA, least privilege, access reviews) → aligns to “Trust Center Lite” KB page
- **Do not publish:** tool-specific role names, screenshots, tenant IDs, admin lists, internal escalation paths