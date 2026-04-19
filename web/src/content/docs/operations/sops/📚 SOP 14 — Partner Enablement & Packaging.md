---
title: "SOP 14 — Partner Enablement & Packaging"
description: ""
---

# 📚 SOP 14 — Partner Enablement & Packaging

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 14 — Partner Enablement & Packaging                      |
| Type             | SOP Plan (Partner Program / Solution Packaging)              |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Public Partner Guide + Internal SOP)                   |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Partner Manager (PM)                                         |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 KB — Partner / Agency Program — Powered by FIT vs White-Label.md (previous draft); 📘 KB — Partner Entitlements (Public Overview) — What’s Included by Tier.md (previous draft); 📘 KB — Solution Packs — What They Are + What’s Included.md (previous draft); 📘 KB — Release Notes & Updates — How Solution Packs Evolve.md (previous draft); 📗 FIT Automate - Automation Playbooks.docx |

## Purpose and scope boundaries

Enable partners to sell and deliver consistently by standardizing:

- what is in a “Solution Pack”
- what enablement materials partners receive
- how partner tiers affect entitlements and support
- how updates and compatibility are communicated
- how co-branded vs white-label delivery is governed

Out of scope:

- internal build steps, internal repo structure, deployment secrets
- pricing and margins
- partner-by-partner custom exceptions (tracked separately if approved)

## Trigger events

- New partner onboarding starts (connects to SOP 10)
- New solution pack released or updated (connects to SOP 09)
- Partner tier change (upgrade/downgrade)
- Repeated partner support issues (enablement gap)
- New “agency-facing” feature/tool added to the stack

## Inputs → Outputs (required artifacts)

**Inputs**

- Partner tier/entitlements (SOP 15; public overview allowed, no pricing)
- Solution pack definition + manifest (per pack)
- Compatibility notes (tools supported + prerequisites)
- Support expectations and escalation boundaries (SOP 07/06)
- Brand track (Powered by FIT vs White-label)

**Outputs**

- Partner enablement kit (versioned)
- Partner onboarding checklist and “pilot client” plan
- Pack manifest(s) + implementation checklist (partner-safe version)
- Sales enablement one-pager per pack (public-safe)
- Release notes routing + partner update notices
- Partner operating rules (what partners can promise / cannot promise)

**Templates/logs to standardize**

- `TEMPLATE — Partner Enablement Kit Index (Versioned)`
- `TEMPLATE — Partner Pilot Plan (First Client)`
- `TEMPLATE — Solution Pack Manifest (Partner-Safe)`
- `TEMPLATE — Compatibility Notes (High-Level)`
- `TEMPLATE — Partner Escalation Request`

## Tier/track boundaries (public-safe)

- **Powered by FIT:** co-branded; lighter enablement requirements; partner owns client relationship by default
- **White-label:** stricter enablement and operating requirements; controlled rollout discipline; clearer entitlement boundaries

## RACI

- **R:** Partner Manager (PM)
- **A:** Product Owner (P)
- **C:** Delivery Lead (D), Support Lead (S), Security/Compliance (Sec), Documentation Lead (Doc)
- **I:** Founder/Exec (E), Finance Ops (Fin)

## KPIs / proof of control

- Time to first successful partner delivery (onboarding → first pilot go-live)
- % partners using standard intake and templates (adoption)
- Support burden per partner (tickets per client per month)
- % partner deliveries using approved pack versions (version discipline)
- Partner satisfaction / retention signal

## Visibility + publishable summary

- **Public:** partner overview + tier summaries (already started in PUBLIC_WEB KB)
- **Internal:** enablement kit contents, operational rules, packaging workflows, partner quality scoring
- **Do not publish:** internal delivery mechanics, tool configs, private partner notes, incident details by partner