---
title: "FIT Docs — Offerings & Tiers"
description: ""
---

| Field | Value |
| --- | --- |
| Title | FIT Docs — Offerings & Tiers |
| Type | Overview |
| KB_TARGET | INTERNAL |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Heavy |
| Version | 0.1 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Solution Families |
| Tags | FIT Docs, tiers, internal, document management, Lite, Pro, Premium |

# FIT Docs — Offerings & Tiers

**FIT Docs** is FIT's document management and editing app solution family. It covers the design, build, and governance of client-facing document systems—structured KB libraries, editing apps, document templates, and the processes that keep content accurate and current over time.

This document is INTERNAL. Do not use content from this page in public chat responses or PUBLIC_WEB KB pages. A public-safe companion page exists for external-facing use.

---

## Overview

FIT Docs is structured around three tiers: Lite, Pro, and Premium. Each tier defines scope, included document infrastructure, governance depth, and support entitlements.

---

## Tiers

### Lite

**Purpose:** A clean, structured document library with standardized templates and basic KB authoring rules.

**Includes:**
- KB library setup: file naming conventions, required metadata fields, folder structure
- Up to 10 KB documents authored or migrated to standard format
- Standard KB skeleton applied: metadata table, H1 structure, section headings
- Authoring ruleset documentation (internal README)
- Go-live checklist and handoff documentation
- 30-day post-launch stabilization support (async)

**Not included:**
- Ongoing KB authoring or content updates beyond initial set
- Automated document routing or processing
- AI-assisted document retrieval (requires FIT Knows integration)
- Visibility-split documents (PUBLIC_WEB / INTERNAL separation)

**Support coverage:** Async (email/ticket), Sev1 response within 1 business day

---

### Pro

**Purpose:** A governed document system with visibility-controlled publishing, structured review cycles, and change management.

**Includes everything in Lite, plus:**
- Up to 30 KB documents authored, migrated, or split by visibility target
- PUBLIC_WEB / INTERNAL visibility separation enforced across the corpus
- Review cycle tracking: Last Updated fields, scheduled review reminders
- Change request workflow: submitted → reviewed → approved → published
- Banned-term and routing validation checks (pre-publish gate)
- Quarterly KB health report: coverage gaps, stale documents, visibility mismatches
- Change request allowance: 4 document updates or additions per quarter

**Not included:**
- AI-assisted document retrieval (FIT Knows integration required)
- Automated document generation from templates
- Multi-site or multi-client document libraries under a single contract

**Support coverage:** Async + scheduled sync (monthly), Sev1 same business day

---

### Premium

**Purpose:** A fully governed, AI-ready document infrastructure with automated validation, AI retrieval integration, and ongoing editorial governance.

**Includes everything in Pro, plus:**
- Unlimited KB document scope (within governance-defined corpus size)
- AI retrieval integration: documents prepared and chunked for FIT Knows or equivalent RAG pipeline
- Automated validation gates: banned terms, domain restrictions, routing allowlist checks run pre-publish
- Document lifecycle automation: review reminders, deprecation notices, version tracking
- Editorial governance: owner assignment, review cycle enforcement, change approval workflow
- Monthly governance report: publish-ready status, review queue, validation failures
- Change request allowance: unlimited document updates within governance framework; scoped enhancements by request

**Not included:**
- Bespoke CMS or publishing platform integrations beyond defined stack
- External-facing document hosting (requires FIT Web integration)

**Support coverage:** Async + scheduled sync (bi-weekly), Sev1 same business day, Sev2 within 2 business days

---

## Tier Comparison Summary

| Capability | Lite | Pro | Premium |
| --- | --- | --- | --- |
| KB library setup | Yes | Yes | Yes |
| Initial document authoring | Up to 10 | Up to 30 | Unlimited |
| PUBLIC/INTERNAL visibility split | No | Yes | Yes |
| Review cycle tracking | No | Yes | Yes |
| Banned-term validation gates | No | Yes | Yes (automated) |
| AI retrieval readiness | No | No | Yes |
| Document lifecycle automation | No | No | Yes |
| Monthly governance report | No | No | Yes |
| Change requests/quarter | 0 | 4 docs | Unlimited (governed) |
| Support level | Async | Async + monthly sync | Async + bi-weekly sync |

---

## Governance Notes

- Tier labels are locked: Lite, Pro, Premium only. No variants.
- All PUBLIC_WEB documents must pass the launch validation gate before publish: no banned terms, no banned domain, no banned route patterns, tier vocabulary compliant.
- INTERNAL documents must never be surfaced through customer-facing channels or PUBLIC_WEB KB responses.
- Dual-doc pattern applies to any document with mixed visibility: produce an INTERNAL canonical version and a separate PUBLIC_WEB safe companion.

---

## Related Internal Documents

- FIT Web — Offerings & Tiers (Internal)
- FIT Knows — Offerings & Tiers (Internal)
- KB Governance — Keeping Answers Current (Internal)
