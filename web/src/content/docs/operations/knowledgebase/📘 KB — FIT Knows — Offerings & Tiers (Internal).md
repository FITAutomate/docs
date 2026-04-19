---
title: "FIT Knows — Offerings & Tiers"
description: ""
---

| Field | Value |
| --- | --- |
| Title | FIT Knows — Offerings & Tiers |
| Type | Overview |
| KB_TARGET | INTERNAL |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Heavy |
| Version | 0.1 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Solution Families |
| Tags | FIT Knows, tiers, internal, AI assistant, knowledge base, Lite, Pro, Premium |

# FIT Knows — Offerings & Tiers

**FIT Knows** is FIT's AI knowledge assistant solution family. It covers the design, build, and governance of source-backed AI assistants—systems that answer questions using your approved documents, with public/internal content boundaries, retrieval accuracy controls, and ongoing governance.

This document is INTERNAL. Do not use content from this page in public chat responses or PUBLIC_WEB KB pages. A public-safe companion page exists for external-facing use.

---

## Overview

FIT Knows is structured around three tiers: Lite, Pro, and Premium. Each tier defines assistant scope, document corpus size, retrieval configuration, governance depth, and support entitlements.

---

## Tiers

### Lite

**Purpose:** A scoped AI assistant grounded in a small, curated document corpus—built for a single internal or customer-facing use case.

**Includes:**
- Single assistant deployment (one channel: internal chat, web widget, or API)
- Up to 10 approved source documents ingested and prepared for retrieval
- Content boundary enforcement: assistant restricted to approved document scope only
- Basic retrieval configuration (semantic search, no hybrid or re-ranking)
- Fallback handling: out-of-scope queries routed to a defined fallback response or human
- Go-live validation: sample query set tested against configured corpus
- Handoff documentation: what the assistant covers, what it doesn't, how to update documents
- 30-day post-launch stabilization support (async)

**Not included:**
- Multi-channel deployment
- INTERNAL / PUBLIC_WEB visibility-split content routing
- Ongoing document corpus updates beyond initial set
- Custom retrieval tuning or hybrid search

**Support coverage:** Async (email/ticket), Sev1 response within 1 business day

---

### Pro

**Purpose:** A governed, multi-use assistant with visibility-split content routing, structured document update cycles, and retrieval quality monitoring.

**Includes everything in Lite, plus:**
- Up to 30 approved source documents
- Dual content boundary: PUBLIC_WEB scope for customer-facing queries, INTERNAL scope for staff-facing queries (configured separately or via routing logic)
- Retrieval quality monitoring: answer accuracy spot-checks, fallback rate tracking
- Document update workflow: approved update path for adding, modifying, or deprecating source documents
- Change request allowance: 4 document updates per quarter (ingestion + reindex included)
- Monthly quality report: fallback rate, scope-breach attempts, top query themes, document coverage gaps
- Escalation path: queries that exceed assistant scope are logged and routed to a defined owner

**Not included:**
- Advanced retrieval (hybrid search, re-ranking, multi-hop)
- Custom UI or branding beyond defined widget configuration
- Automated document ingestion pipelines

**Support coverage:** Async + scheduled sync (monthly), Sev1 same business day

---

### Premium

**Purpose:** A full-governance AI assistant infrastructure with advanced retrieval, automated document pipelines, multi-channel support, and continuous quality management.

**Includes everything in Pro, plus:**
- Unlimited approved source documents (within corpus governance framework)
- Advanced retrieval: hybrid search (semantic + keyword), re-ranking, and multi-hop where needed
- Automated document ingestion pipeline: source document updates trigger automatic re-ingestion and reindex
- Multi-channel deployment: web widget, internal chat, API endpoint, email routing integration
- Custom UI configuration: branding, response formatting, escalation messaging
- Governance dashboard: document health, retrieval coverage, answer quality trends, fallback analysis
- Quarterly governance review: corpus accuracy, scope alignment, content boundary audit, CTA routing validation
- Change request allowance: unlimited document updates within governance framework; enhancement requests by scoping call

**Not included:**
- Bespoke LLM fine-tuning or custom model training
- Real-time data integrations (live database queries, live CRM lookups)

**Support coverage:** Async + scheduled sync (bi-weekly), Sev1 same business day, Sev2 within 2 business days

---

## Tier Comparison Summary

| Capability | Lite | Pro | Premium |
| --- | --- | --- | --- |
| Source documents | Up to 10 | Up to 30 | Unlimited |
| Content boundary enforcement | Yes | Yes | Yes |
| PUBLIC/INTERNAL content routing | No | Yes | Yes |
| Retrieval quality monitoring | No | Yes | Yes |
| Monthly quality report | No | Yes | Yes |
| Automated document pipeline | No | No | Yes |
| Advanced retrieval (hybrid/re-rank) | No | No | Yes |
| Multi-channel deployment | No | No | Yes |
| Quarterly governance review | No | No | Yes |
| Document updates/quarter | 0 | 4 | Unlimited (governed) |
| Support level | Async | Async + monthly sync | Async + bi-weekly sync |

---

## Governance Notes

- Tier labels are locked: Lite, Pro, Premium only. No variants.
- Content boundary rules are non-negotiable: INTERNAL documents must never be surfaced through a PUBLIC_WEB or customer-facing assistant channel.
- Any assistant that uses PUBLIC_WEB content must pass the launch validation gate: no banned terms, no banned domain, no banned route patterns, tier vocabulary compliant.
- CTA links embedded in assistant responses must use the approved routing allowlist only.

---

## Related Internal Documents

- FIT Web — Offerings & Tiers (Internal)
- FIT Docs — Offerings & Tiers (Internal)
- KB Governance — Keeping Answers Current (Internal)
