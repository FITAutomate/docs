---
title: "SOP 07 — Support Intake & Ticket Lifecycle"
description: ""
---

# 📚 SOP 07 — Support Intake & Ticket Lifecycle

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 07 — Support Intake & Ticket Lifecycle                   |
| Type             | SOP Plan (Support Operations)                                |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Public Support Policy + Internal SOP)                  |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Support Lead (S)                                             |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 KB — Support Policy — How Support Works.md; 📄 FIT Automate – Frequently Asked Questions.docx; 📘 FIT Automate – Quick Start Guide for New FIT Clients.docx; 📘 FIT – SOP 4 Automation Audit Workflow.pdf (alignment) |

## Purpose and scope boundaries

Standardize how FIT receives, triages, tracks, escalates, and resolves support requests across:

- solution packs
- managed workflows and integrations
- partner/agency delivery (Powered by FIT / White-label)

Out of scope:

- detailed internal tooling configuration (ticket system setup)
- public publication of internal escalation paths or staff availability

## Trigger events

- New support request received (email/ticket form)
- Partner escalation request
- Monitoring alert (auto-generates ticket)
- Incident response initiation (links to SOP 06)
- Repeat issue detected (pattern → reliability improvement)

## Intake channels (baseline)

- **Async email/ticket** is the default intake channel
- Optional premium channels (e.g., Sev1 on-call) are entitlement-based and defined in partner tiers/support agreements

## Ticket classification (minimum required fields)

Every ticket must capture:

- Request type: **Bug / Question / Change Request / Access / Billing / Incident**
- Severity: **Sev1/Sev2/Sev3**
- Affected pack/workflow (name + environment)
- Business impact description
- Examples/screenshots/log snippets (if available)
- Requester + preferred contact method
- Any deadlines (if real)

## Inputs → Outputs (required artifacts)

**Inputs**

- Support request details (from intake)
- Workflow/pack metadata (from registry)
- Any recent changes (from release log)

**Outputs**

- Ticket record with classification + owner assigned
- Resolution notes (what changed + verification)
- Customer communication record
- KB update request (if answer should be documented)
- Postmortem initiation (if Sev1; selected Sev2)

**Templates/logs to standardize**

- `TEMPLATE — Support Intake Form (Email Structure)`
- `LOG — Ticket Register (if tool lacks export)`
- `TEMPLATE — Resolution Notes`
- `TEMPLATE — “Need KB Update” Submission`
- `TEMPLATE — Escalation Request (Partner)`

## Ticket lifecycle (simple, SaaS-friendly)

1. **New** → intake captured
2. **Triaged** → severity + category + owner assigned
3. **In progress** → investigation + mitigation
4. **Waiting on customer** → missing info/approval
5. **Resolved** → fix delivered + verified
6. **Closed** → documentation updated + follow-up complete

## Escalation rules (high level)

Escalate to incident response (SOP 06) when:

- Sev1 is declared
- repeated failures indicate systemic issue
- security risk is suspected

Escalate to Delivery Lead when:

- change requires build work or new scope
- dependency integration changes are required

## RACI

- **R:** Support Lead (S)
- **A:** Founder/Exec (E)
- **C:** Delivery Lead (D), Documentation Lead (Doc), Security/Compliance (Sec), Partner Manager (PM)
- **I:** Product Owner (P), Finance Ops (Fin)

## KPIs / proof of control

- First response time (by severity; internal targets)
- Time to resolution (by severity/type)
- Reopen rate
- % tickets that result in KB improvement (where applicable)
- Customer satisfaction signal (simple thumbs-up/CSAT follow-up)

## Visibility + publishable summary

- **Public:** “Support Policy — How Support Works” KB article
- **Internal:** full lifecycle SOP, triage rules, tooling, exports, internal escalation routing
- **Do not publish:** internal staffing/on-call specifics unless explicitly offered and finalized