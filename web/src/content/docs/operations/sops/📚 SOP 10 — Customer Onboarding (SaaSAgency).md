---
title: "SOP 10 — Customer Onboarding (SaaS/Agency)"
description: ""
---

# 📚 SOP 10 — Customer Onboarding (SaaS/Agency)

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 10 — Customer Onboarding (SaaS/Agency)                   |
| Type             | SOP Plan (Delivery / Customer Lifecycle)                     |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Public Overview + Internal SOP)                        |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Delivery Lead (D)                                            |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 FIT Automate – Quick Start Guide for New FIT Clients.docx; 📄 FIT Automate - Discovery Call Explained.docx; 📘 FIT Automate - Core Automation Services Overview.docx; 📘 KB — Onboarding — Quick Start for New Clients.md (previous draft); 📘 KB — Discovery Call — What to Expect.md (previous draft) |

## Purpose and scope boundaries

Standardize onboarding so every client (and agency partner) experiences:

- fast time-to-value
- clear ownership and approvals
- safe access practices (least privilege)
- predictable delivery milestones
- a clean handoff into support/operations

Covers onboarding for:

- SMB clients (services + solution packs)
- Agency partners (Powered by FIT / White-label) *(partner-specific steps connect to SOP 14)*

Out of scope:

- pricing specifics (handled in agreements; not public KB)
- tool-by-tool configuration details (kept in internal runbooks)

## Trigger events

- New client signed (services or solution pack)
- New agency partner signed
- Expansion (new department/tool added; “onboarding v2” for existing customer)
- Contract renewal that changes entitlements/support model

## Inputs → Outputs (required artifacts)

**Inputs**

- Signed agreement / scope summary
- Primary contacts (business owner + technical owner)
- Target outcome(s) and success criteria
- Tool stack list (M365/Google/HubSpot/n8n/Power Automate/Supabase/etc.)
- Access request needs (least privilege)
- Risk boundaries (“never do this” rules)

**Outputs**

- Onboarding checklist completion record
- Project brief (scope + guardrails + acceptance criteria)
- Access grant log references (SOP 01) + credential metadata references (SOP 02)
- Delivery plan (phases + test scenarios + go-live approach)
- Support handoff record (how to request changes; severity handling)
- Initial “success baseline” (what will be measured post-launch)

**Templates/logs to standardize**

- `CHECKLIST — Client Onboarding (Standard)`
- `TEMPLATE — Project Brief (Scope + Guardrails + Success Criteria)`
- `TEMPLATE — Access Request Summary (Least Privilege)`
- `TEMPLATE — Go-Live Readiness Checklist`
- `TEMPLATE — Support Handoff Summary`

## Onboarding flow (high level)

1. **Kickoff + outcome alignment** (what “done” means)
2. **Confirm guardrails + approvals** (human-in-the-loop decisions)
3. **Access setup** (least privilege; MFA expectations; no shared passwords)
4. **Environment + data readiness** (sources, quality, system-of-record decisions)
5. **Build/test plan** (normal/edge/failure scenarios)
6. **Go-live plan** (staged if needed; rollback considerations)
7. **Support handoff** (how support works, how changes are requested)

## RACI

- **R:** Delivery Lead (D)
- **A:** Founder/Exec (E)
- **C:** Support Lead (S), Security/Compliance (Sec), Documentation Lead (Doc), Partner Manager (PM)
- **I:** Product Owner (P), Finance Ops (Fin)

## KPIs / proof of control

- Time-to-value (kickoff → first successful outcome in production)

- Onboarding completion rate (checklist fully completed)

- % onboardings with explicit guardrails + acceptance criteria documented

- # of preventable support tickets in first 14 days (trend down)

- Onboarding CSAT / qualitative “launch confidence” signal

## Visibility + publishable summary

- **Public:** a simplified “Onboarding — What to Expect” overview (already in PUBLIC_WEB KB)
- **Internal:** full checklist, access evidence references, environment details, client-specific notes
- **Do not publish:** internal tool/workspace structure, client identifiers, access specifics, credential handling steps

------