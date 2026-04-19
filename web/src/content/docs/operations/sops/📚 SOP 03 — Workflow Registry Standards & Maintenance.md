---
title: "SOP 03 — Workflow Registry Standards & Maintenance"
description: ""
---

# 📚 SOP 03 — Workflow Registry Standards & Maintenance

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 03 — Workflow Registry Standards & Maintenance           |
| Type             | SOP Plan (Operations / Inventory / Governance)               |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal                                                     |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Delivery Lead (D)                                            |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 FIT – SOP 3 Workflow Registry Standards & Maintenance.pdf; 📘 SOP 09 — Change & Release Management.md; 📘 SOP 08 — Monitoring & Alerting Standards.md |

## Purpose and scope boundaries

Maintain a single, trustworthy inventory of all workflows and automation assets so FIT can operate like a SaaS company:

- know what exists, who owns it, and what it touches
- track versions and changes
- support incident response and monitoring
- prevent “orphaned” workflows and silent drift

Includes:

- n8n workflows
- Power Automate flows
- scheduled jobs / scripts used in delivery
- solution-pack “instances” per client/partner

Out of scope:

- publishing registry contents publicly
- storing secrets in the registry (metadata only)

## Trigger events

- New workflow/flow created
- Any production change (bug fix/tuning/enhancement)
- New client/partner deployment (new instance)
- Incident involving a workflow (postmortem action)
- Quarterly registry audit

## Inputs → Outputs (required artifacts)

**Inputs**

- Workflow definition (name, purpose, trigger, outputs)
- Tool/integration list (systems touched)
- Data classification impact (SOP 12)
- Monitoring plan (SOP 08)
- Release record (SOP 09)

**Outputs**

- Registry entry created/updated (metadata)
- Change log entry (links to release record)
- Ownership confirmation (who is responsible)
- Audit report (quarterly: completeness + drift)

**Registry minimum fields (metadata)**

- Workflow ID (unique), Name, Status (dev/test/prod)
- Owner (person/role), Primary purpose
- Trigger type and frequency
- Systems touched (apps/APIs/dbs)
- Data classification level (high-level)
- Criticality (Sev impact if it fails)
- Monitoring coverage status
- Last changed date + change reference
- Version / pack version (if applicable)

**Templates/logs to standardize**

- `TEMPLATE — Workflow Registry Entry`
- `LOG — Workflow Change Log (Registry-linked)`
- `REPORT — Quarterly Registry Audit`
- `CHECKLIST — Production Promotion (Registry + Monitoring + Release)`

## RACI

- **R:** Delivery Lead (D)
- **A:** Founder/Exec (E)
- **C:** Support Lead (S), Documentation Lead (Doc), Security/Compliance (Sec), Product Owner (P)
- **I:** Partner Manager (PM), Finance Ops (Fin)

## KPIs / proof of control

- % production workflows registered (target: 100%)
- % registry entries with owner + criticality + monitoring status filled
- Drift rate (workflows found in prod not in registry) — target: 0
- Time from “workflow created” → “registry entry complete”
- Quarterly audit completion rate

## Visibility + publishable summary

- **Internal:** full SOP + registry + audit reports
- **Public summary (optional):** a high-level statement that FIT maintains an inventory and change control (no details)