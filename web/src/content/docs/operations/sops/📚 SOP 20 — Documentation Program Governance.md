---
title: "SOP 20 — Documentation Program Governance"
description: ""
---

# 📚 SOP 20 — Documentation Program Governance

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 20 — Documentation Program Governance                    |
| Type             | SOP Plan (Documentation / Governance)                        |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Optional Public Summary)                               |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Documentation Lead (Doc)                                     |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 FIT – SOP 5 Knowledge Base & RAG Governance.pdf; 📙 FIT Automate – Public KB Readiness Checks.docx; 📘 KB — Knowledge Base Governance (Public Summary) — Keeping Answers Current.md (previous draft); 📘 KB — Site Directory — Services, Solutions & Links.md (previous draft) |

## Purpose and scope boundaries

Run documentation like a SaaS program:

- consistent templates and metadata
- ownership and review cycles
- publish-ready gates
- deprecation and change control
- alignment between PUBLIC_WEB KB, partner docs, and internal SOPs

Covers all doc types:

- Public KB (website chat)
- Partner enablement docs
- Internal SOPs and runbooks
- Solution pack documentation + release notes

Out of scope:

- legal policy drafting (handled separately where needed)
- deep technical runbooks shared publicly

## Trigger events

- New document created
- Major product/solution pack release (SOP 09)
- New partner onboarding (SOP 10/14)
- Quarterly documentation audit
- Broken link / outdated content report
- Incident postmortem requiring doc updates (SOP 06)

## Inputs → Outputs (required artifacts)

**Inputs**

- Doc request or change request
- Source-of-truth files (policies, SOPs, product notes)
- Public vs internal boundary decisions

**Outputs**

- Doc register entry (owner, version, last updated, review cycle)
- Published doc (PUBLIC_WEB / INTERNAL / partner)
- Deprecation record (what replaced what)
- Quarterly doc audit report (freshness, conflicts, broken links)
- Style guide updates (templates, naming, tone)

**Templates/logs to standardize**

- `LOG — Documentation Register`
- `CHECKLIST — Publish-Ready Gate (PUBLIC_WEB)`
- `TEMPLATE — KB Article (Standard Header + Sections)`
- `LOG — Deprecations & Replacements`
- `REPORT — Quarterly Documentation Audit`

## Program standards (minimum)

- Every doc has: owner, version, last updated, review cycle, source basis
- PUBLIC_WEB docs avoid sensitive details and do not invent SLAs/prices
- Canonical routing lives in one place (Site Directory)
- Release notes exist for solution pack changes (SOP 09)
- Documentation updates are part of incident resolution and postmortems (SOP 06)

## RACI

- **R:** Documentation Lead (Doc)
- **A:** Founder/Exec (E)
- **C:** Product Owner (P), Security/Compliance (Sec), Delivery Lead (D), Support Lead (S), Partner Manager (PM)
- **I:** Finance Ops (Fin)

## KPIs / proof of control

- Freshness: % PUBLIC_WEB docs reviewed within cycle
- Broken link rate (should trend toward 0)
- % docs with complete metadata header
- Time to update docs after major changes/incidents
- Conflict rate (duplicate or contradictory public guidance)

## Visibility + publishable summary

- **Public (optional):** a short “Docs Update Policy” summary (high-level cadence + commitment)
- **Internal:** full governance SOP, doc register, audit reports, deprecation logs
- **Do not publish:** internal-only doc locations, sensitive change histories, client-specific references