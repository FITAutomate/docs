---
title: "SOP 06 — Incident Response & Postmortems"
description: ""
---

# 📚 SOP 06 — Incident Response & Postmortems

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 06 — Incident Response & Postmortems                     |
| Type             | SOP Plan (Support / Reliability / Security Response)         |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Internal SOP + Public Comms Summary)                   |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Support Lead (S)                                             |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 KB — Support Policy — How Support Works.md; 📘 KB — Trust Center Lite — Security & Privacy Overview.md; 📘 FIT – SOP 4 Automation Audit Workflow.pdf (alignment); 📘 FIT – SOP 3 Workflow Registry Standards & Maintenance.pdf (alignment) |

## Purpose and scope boundaries

Provide a repeatable process to detect, triage, communicate, resolve, and learn from incidents affecting:

- Solution Packs (Inbox Guard, Knowledge Core, Smart Website, etc.)
- Managed automations and integrations
- Client-facing website/chat surfaces (where applicable)
- Data/security events (in coordination with Security/Compliance)

Out of scope:

- detailed technical playbooks per vendor/tool (kept as internal runbooks)
- public disclosure of sensitive technical details

## Trigger events

- Monitoring alert indicates failure/degradation
- Client/partner reports a critical issue
- Vendor outage impacts workflow dependencies
- Suspected security event (credential exposure, unauthorized access indicator)
- Repeated automation failures (pattern indicates systemic issue)

## Severity model (public-safe definitions)

- **Sev1 (Critical):** major outage or high-risk impact; business-critical workflows down or unsafe behavior possible
- **Sev2 (High):** significant degradation; partial outage; important workflows failing with workaround available
- **Sev3 (Medium/Low):** non-critical bug, minor degradation, cosmetic/reporting issues, or “how-to” guidance

> Response targets are defined by Support Policy and/or partner entitlements. Do not publish exact SLA numbers unless finalized.

## Inputs → Outputs (required artifacts)

**Inputs**

- Incident signal (alert, customer report, internal detection)
- Affected workflow/pack identification (from Workflow Registry)
- Impact summary (who/what/when/extent)
- Current mitigation options (pause, reroute, approval gate)

**Outputs**

- Incident record (log entry with severity + timeline)
- Customer/partner communications record (what was said, when)
- Resolution notes (root cause + fix + verification)
- Postmortem (for Sev1 and selected Sev2)
- Corrective actions backlog (prevention work items)

**Templates/logs to standardize**

- `LOG — Incident Register`
- `TEMPLATE — Incident Triage Sheet`
- `TEMPLATE — Customer Update (Status Message)`
- `TEMPLATE — Postmortem (Blameless)`
- `TEMPLATE — Corrective Action Tracker`

## Incident lifecycle (high level)

1. **Detect & acknowledge** (confirm signal is real; assign incident owner)
2. **Classify severity** (Sev1/Sev2/Sev3)
3. **Stabilize / mitigate** (safe-by-default: pause risky actions, route to human review)
4. **Communicate** (customer-facing updates if impact is client-visible)
5. **Resolve** (fix + validate with real scenarios)
6. **Close & learn** (postmortem + corrective actions)

## RACI

- **R:** Support Lead (S)
- **A:** Founder/Exec (E)
- **C:** Security/Compliance (Sec), Delivery Lead (D), Documentation Lead (Doc), Product Owner (P)
- **I:** Partner Manager (PM), Finance Ops (Fin)

## KPIs / proof of control

- MTTA (mean time to acknowledge) by severity
- MTTR (mean time to restore) by severity
- % Sev1 incidents with completed postmortem (target: 100%)
- Repeat incident rate (same root cause recurring)
- Corrective actions closure rate (within defined window)

## Visibility + publishable summary

- **Internal:** full incident log, timelines, technical notes, corrective actions
- **Public summary:** high-level incident communications approach (severity-based handling, customer updates, post-incident review)
- **Do not publish:** root-cause technical details that reveal architecture, vendor configs, client identifiers, or security-sensitive information