---
title: "SOP 16 — Secure SDLC for Automations"
description: ""
---

# 📚 SOP 16 — Secure SDLC for Automations

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 16 — Secure SDLC for Automations                         |
| Type             | SOP Plan (Engineering / Quality / Security)                  |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal (Optional Public Summary)                           |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Delivery Lead (D)                                            |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘FIT – SOP 2 API Key & Credential Management.pdf (alignment); 📘 SOP 09 — Change & Release Management.md (previous draft); Tool stack list (Next.js/Vercel, n8n, Power Automate, Supabase/Postgres, HubSpot, Airtable, APIs) |

## Purpose and scope boundaries

Establish a lightweight, SaaS-grade SDLC for:

- automation workflows (n8n / Power Automate)
- custom apps and website components (Next.js / Vercel)
- integrations (APIs, databases, webhooks)
- solution pack updates (connects to SOP 09)

Focus: **quality gates, review discipline, testing evidence, and separation of concerns**—without slowing delivery.

Out of scope:

- publishing internal code practices publicly in detail
- tool-specific CI/CD internals (kept as runbooks)

## Trigger events

- New workflow or solution pack build begins
- Any production change (bug fix, tuning, enhancement)
- New integration introduced (touches credentials/data handling)
- Security vulnerability remediation work (SOP 17)
- Partner-facing pack update (SOP 14)

## Inputs → Outputs (required artifacts)

**Inputs**

- Change request or build scope (SOP 09)
- Data handling classification (SOP 12) if client data is involved
- Credential plan (SOP 02) and least-privilege access plan (SOP 01)
- Test cases (normal/edge/failure)

**Outputs**

- Review evidence (peer/self review checklist completed)
- Test evidence (what was validated and how)
- Release record (SOP 09)
- “No secrets in code” confirmation (policy gate)
- Rollback plan (when needed)

**Templates/logs to standardize**

- `CHECKLIST — SDLC Gate (Automations)`
- `CHECKLIST — SDLC Gate (Web/App)`
- `TEMPLATE — Test Plan (Normal/Edge/Failure)`
- `TEMPLATE — Risk/Impact Notes (Public-Safe Summary + Internal Detail)`
- `CHECKLIST — Secrets Hygiene (No Secrets in Code)`

## Minimum quality gates (SaaS-grade, lightweight)

- **Design clarity:** trigger → steps → outputs + exception handling defined
- **Safety:** approvals for sensitive actions; non-destructive defaults unless explicitly approved
- **Least privilege:** access and scopes validated (no overbroad permissions)
- **Testing:** normal + edge + failure cases run
- **Observability:** errors are visible; basic monitoring expectations defined (SOP 08)
- **Documentation:** operator guidance updated; release notes prepared if user-visible (SOP 09)

## RACI

- **R:** Delivery Lead (D)
- **A:** Founder/Exec (E) *(or Product Owner where product releases apply)*
- **C:** Security/Compliance (Sec), Support Lead (S), Documentation Lead (Doc), Product Owner (P)
- **I:** Partner Manager (PM), Finance Ops (Fin)

## KPIs / proof of control

- % production changes with test evidence recorded

- Change failure rate (changes that cause incidents)

- Defect escape rate (bugs found after release)

- # secrets hygiene violations (target: 0)

- Mean cycle time (approved change → safely released)

## Visibility + publishable summary

- **Internal:** checklists, evidence, internal standards, tool runbooks
- **Optional public summary:** “secure-by-design delivery practices” (high level only)
- **Do not publish:** internal tooling details, repo structure, CI secrets, environment config, vendor tokens

------

------

📘 SOP 18 — Business Continuity & Backups.md

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 18 — Business Continuity & Backups                       |
| Type             | SOP Plan (Reliability / Continuity)                          |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal (Optional Public Summary)                           |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Delivery Lead (D)                                            |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 🏛 FIT Core Architecture (Finalized Model – 2025).pdf (high-level); Tool stack list (Supabase/Postgres, vector stores, Next.js/Vercel, automation engines); 📘 SOP 06 — Incident Response & Postmortems.md (previous draft) |

## Purpose and scope boundaries

Ensure FIT can recover from failures affecting:

- critical operational data stores (e.g., Postgres/Supabase)
- knowledge systems (indexes and source registries)
- automation definitions/configs (workflow engines)
- web/app surfaces (website/chat)
- partner delivery artifacts (solution packs, manifests)

Covers: backup inventory, cadence, restore testing, and continuity planning.

Out of scope:

- publishing backup locations, exact schedules, or recovery procedures publicly
- client-specific disaster recovery plans (handled per agreement when required)

## Trigger events

- New system introduced to production scope
- New client/partner onboarded where FIT hosts components
- Quarterly restore test window
- Major incident/outage (SOP 06) requiring recovery action
- Vendor change impacting backup method

## Inputs → Outputs (required artifacts)

**Inputs**

- System inventory (what must be protected)
- Criticality rating (impact of loss/outage)
- Owner mapping (who is responsible for recovery actions)

**Outputs**

- Backup inventory (what is backed up, at what level, owner)
- Restore test report (quarterly or defined cadence)
- RTO/RPO targets (internal targets; contract-defined if promised)
- Continuity plan summary (what happens if a platform is down)
- Evidence of last successful restore test

**Templates/logs to standardize**

- `LOG — Backup Inventory (Systems + Owners)`
- `TEMPLATE — Restore Test Plan`
- `REPORT — Restore Test Results`
- `TEMPLATE — Continuity Plan Summary (Per Critical System)`
- `LOG — Recovery Actions (During Incidents)`

## Continuity principles (public-safe)

- Prefer designs that degrade safely (pause + route to human review)
- Avoid single points of failure where practical
- Ensure critical records are recoverable
- Practice restores (backups you can’t restore don’t count)

## RACI

- **R:** Delivery Lead (D)
- **A:** Founder/Exec (E)
- **C:** Security/Compliance (Sec), Support Lead (S), Product Owner (P)
- **I:** Documentation Lead (Doc), Partner Manager (PM), Finance Ops (Fin)

## KPIs / proof of control

- Backup coverage rate (% critical systems covered)
- Restore test completion rate (per cadence)
- Restore success rate
- Time since last successful restore test (should stay within target window)
- Incident recovery effectiveness (qualitative + MTTR link)

## Visibility + publishable summary

- **Internal:** inventories, schedules, restore evidence, recovery procedures
- **Optional public summary:** “we maintain backups and test recovery for critical systems” (high-level)
- **Do not publish:** locations, provider account details, schedules, credentials, internal diagrams