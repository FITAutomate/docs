---
title: "SOP 08 — Monitoring & Alerting Standards"
description: ""
---

# 📚 SOP 08 — Monitoring & Alerting Standards

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 08 — Monitoring & Alerting Standards                     |
| Type             | SOP Plan (Reliability / Operations)                          |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal (Optional Public Summary)                           |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Delivery Lead (D)                                            |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 FIT – SOP 3 Workflow Registry Standards & Maintenance.pdf; 📘 KB — Monitoring & Reliability — How We Keep Automations Stable.md; Tool stack list (M365/Google/HubSpot/n8n/Power Automate/Supabase/Postgres/Pinecone/Qdrant/Vercel/Next.js) |

## Purpose and scope boundaries

Define what must be monitored for:

- production workflows
- solution packs deployed at clients/partners
- critical integrations and data pipelines
- customer-facing web/chat surfaces (where applicable)

Out of scope:

- publishing monitor names, endpoints, vendor dashboards, or alert routing details publicly
- tool-specific runbooks (kept as internal runbooks)

## Trigger events

- New workflow/solution pack moves to production
- Material workflow change/release (links to SOP 09)
- New integration/vendor dependency introduced
- New client/partner onboarding (production scope expands)
- Quarterly monitoring coverage review

## Monitoring coverage model (standard)

For each workflow/pack, define at minimum:

- **Health:** success/failure rate, run completion
- **Exceptions:** queue growth, stuck approvals, repeated “unknown” classifications
- **Data integrity:** duplicates, missing required fields, schema/format drift
- **Dependency signals:** vendor outage alerts, rate limits, auth failures
- **Volume/backlog:** throughput and aging of pending items

## Inputs → Outputs (required artifacts)

**Inputs**

- Workflow registry entry (owner, criticality, triggers, outputs)
- Dependency list (apps/APIs touched)
- Severity/criticality rating (impact of failure)

**Outputs**

- Monitoring Matrix per workflow/pack
- Alert routing map (who gets what, when)
- Runbooks for top alert types (“what to do first”)
- Quarterly monitoring review report (coverage + improvements)

**Templates/logs to standardize**

- `TEMPLATE — Monitoring Matrix (Per Workflow)`
- `TEMPLATE — Alert Routing & Escalation Map`
- `TEMPLATE — Alert Runbook (One Page)`
- `REPORT — Quarterly Monitoring Coverage Review`

## Alert quality standards (reduce noise)

- Alerts must be actionable (avoid “FYI spam”)
- Target low false-positive rate
- Use thresholds/windows to prevent flapping
- Group related failures to avoid alert storms
- Route Sev1-style signals differently than Sev3 signals (entitlement-based)

## RACI

- **R:** Delivery Lead (D)
- **A:** Founder/Exec (E)
- **C:** Support Lead (S), Security/Compliance (Sec), Documentation Lead (Doc), Product Owner (P)
- **I:** Partner Manager (PM), Finance Ops (Fin)

## KPIs / proof of control

- Monitoring coverage rate: % production workflows with monitoring matrix completed
- Alert noise ratio (non-actionable alerts / total alerts)
- Mean time to detect (MTTD) for Sev1/Sev2 classes
- % alerts with runbooks (target increases over time)
- Quarterly review completion rate

## Visibility + publishable summary

- **Internal:** full monitoring matrix, routing maps, runbooks
- **Optional public summary:** high-level “we monitor health/exceptions and use safe-by-default escalation”
- **Do not publish:** specific tools, dashboards, thresholds, endpoints, or alert recipients