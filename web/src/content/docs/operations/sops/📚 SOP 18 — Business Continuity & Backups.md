---
title: "SOP 18 — Business Continuity & Backups"
description: ""
---

# 📚 SOP 18 — Business Continuity & Backups

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