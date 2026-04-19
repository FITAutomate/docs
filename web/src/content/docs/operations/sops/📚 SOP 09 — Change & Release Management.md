---
title: "SOP 09 — Change & Release Management"
description: ""
---

# 📚 SOP 09 — Change & Release Management

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 09 — Change & Release Management                         |
| Type             | SOP Plan (Release Discipline / Versioning)                   |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Dual (Public Release Notes + Internal SOP)                   |
| Publish Ready    | No                                                           |
| Redaction Needed | Light                                                        |
| Version          | 0.1                                                          |
| Owner            | Product Owner (P)                                            |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 FIT – SOP 3 Workflow Registry Standards & Maintenance.pdf; 📘 KB — Release Notes & Updates — How Solution Packs Evolve.md; 📘 KB — Change Requests & Scope — How Updates Are Managed.md; 📗 FIT Automate - Automation Playbooks.docx |

## Purpose and scope boundaries

Ensure changes to workflows, solution packs, and website/chat surfaces are:

- reviewed and tracked
- tested before production impact
- reversible when practical
- communicated appropriately (especially to partners)

Covers:

- versioning and release records
- approvals and testing gates
- rollback planning (when applicable)
- release notes publication (public-safe)

Out of scope:

- deep CI/CD or infrastructure implementation details (handled in Secure SDLC / architecture runbooks)

## Trigger events

- New workflow/pack deployment
- Change request accepted (bug fix / tuning / enhancement)
- Vendor dependency change requiring update
- Security-driven patch/change (links to vuln mgmt / incident response)
- Partner packaging update (links to SOP 14)

## Inputs → Outputs (required artifacts)

**Inputs**

- Change request (scope + intent)
- Registry metadata (workflow/pack affected)
- Risk classification (breaking vs non-breaking; Sev impact)
- Test scenarios (normal/edge/failure cases)

**Outputs**

- Change record (who/what/why/when)
- Test evidence (what was verified)
- Release note entry (public-safe where applicable)
- Rollback plan (for higher-risk changes)
- Updated documentation (KB updates where needed)

**Templates/logs to standardize**

- `TEMPLATE — Change Request Intake`
- `CHECKLIST — Pre-Release Checklist`
- `TEMPLATE — Test Plan (Normal/Edge/Failure)`
- `TEMPLATE — Release Record`
- `TEMPLATE — Rollback Plan (When Needed)`
- `TEMPLATE — Release Notes (Public-Safe)`

## Release gates (minimum)

Before production release:

- scope and success criteria confirmed
- risk assessed (breaking vs non-breaking)
- test plan executed (at least core scenarios)
- owner approval captured (especially for breaking changes)
- documentation updated (or queued for update)

## Versioning approach (high level)

Use a simple version system for:

- solution packs
- workflows (where meaningful)
- KB policies

Track:

- current “approved” version
- compatibility notes (if any)
- client/partner deployment notes (internal)

## RACI

- **R:** Delivery Lead (D) *(implementation)*
- **A:** Product Owner (P) *(release decision)*
- **C:** Security/Compliance (Sec), Documentation Lead (Doc), Support Lead (S), Partner Manager (PM)
- **I:** Founder/Exec (E), Finance Ops (Fin)

## KPIs / proof of control

- Change failure rate (changes that cause incidents)
- % releases with test evidence
- Rollback success rate (when used)
- % releases with associated release notes (where applicable)
- Time from approved change → deployed change (cycle time)

## Visibility + publishable summary

- **Public:** release notes & update behavior (no sensitive details)
- **Internal:** full change log, testing evidence, rollback plans, impacted client list
- **Do not publish:** internal system names/paths, client identifiers, technical vulnerability details