---
title: Knowledge base library rules
description: Naming and metadata standards for knowledge base articles.
---

# KB Library Rules — Launch Profile (April 2026)

This folder contains **Knowledge Base** documents for Forward IT Thinking / FIT Automate.

---

## File Naming (Required)

- Prefix: `📘 KB —`
- Format: `📘 KB — <Title> — <Subtitle>.md`

Examples:
- `📘 KB — AI Readiness Audit — What It Is + What You Get.md`
- `📘 KB — FIT Docs — Offerings & Tiers (Internal).md`

---

## Required Metadata Table (Top of Every File)

```markdown
| Field | Value |
| --- | --- |
| Title | <Clean title; no "KB —"> |
| Type | <Overview / Service / FAQ / Policy / Reference / Glossary> |
| KB_TARGET | <PUBLIC_WEB / INTERNAL> |
| Visibility | <Public / Internal> |
| Publish Ready | <Yes / No> |
| Redaction Needed | <None / Light / Heavy> |
| Version | <0.1 / 1.0> |
| Owner | <Name> |
| Last Updated | <YYYY-MM-DD> |
| Categories | <Optional> |
| Tags | <Optional> |
```

---

## Structure Rules (Required)

- Exactly one H1 per page
- H1 placed **below** the metadata table
- H2 for primary sections, H3 for sub-sections
- Standard sections: `## Overview`, `## Who It Is For`, `## What It Includes`, `## What It Is Not`, `## Next Step / Related Links`

---

## Content Rules

- Plain-language and reusable
- No sensitive internal implementation detail on PUBLIC_WEB pages
- Minimal code snippets
- Images discouraged unless explicitly approved
- No Source Basis or Review Cycle fields in PUBLIC_WEB documents (internal operational detail)

---

## Launch Guardrails — April 2026 (Hard Rules)

### PUBLIC_WEB Launch Scope

Only these three services are in public launch scope:

- AI Readiness Audit
- Intelligent Automation
- AI Enablement

### Banned Terms (PUBLIC_WEB docs)

Do not use:
- `Inbox Guard`
- `Smart Website`
- `Knowledge Core`

### Banned Domain (PUBLIC_WEB docs)

Do not use: `fitautomate.com`

### Banned Route Pattern (PUBLIC_WEB docs)

Do not use: `/solutions` (or any subroute)

### Required Tier Vocabulary

Only: `Lite`, `Pro`, `Premium` — no other tier label variants

### Approved CTA Links (PUBLIC_WEB docs)

Use only:
- `https://forwarditthinking.com/services/ai-readiness-audit`
- `https://forwarditthinking.com/services/intelligent-automation`
- `https://forwarditthinking.com/services/ai-enablement`
- `https://forwarditthinking.com/contact`

---

## Solution Family Rules

- FIT Web, FIT Docs, FIT Knows are **INTERNAL** for launch
- Each solution family supports paired documents:
  - INTERNAL canonical KB (full scope + tier mechanics)
  - PUBLIC_WEB safe companion (no internal detail, no banned terms/routes)

---

## Mixed Visibility Rule

A single KB file must not mix internal-sensitive and public-safe content. If mixed content exists, split into:
- INTERNAL source document
- PUBLIC_WEB redacted/safe version

---

## Archive

Files removed from the active launch set are moved to `_ARCHIVE/`. Archived files are retained as source reference only and must not be published or ingested into a PUBLIC_WEB system.

---

## Pre-Publish Validation Checklist

- [ ] No banned terms in PUBLIC_WEB docs
- [ ] No banned domain in PUBLIC_WEB docs
- [ ] No banned route pattern in PUBLIC_WEB docs
- [ ] Tier labels are only Lite / Pro / Premium
- [ ] Metadata is complete and `Last Updated` uses `YYYY-MM-DD`
- [ ] `KB_TARGET` and `Visibility` are aligned
- [ ] H1 is below the metadata table
- [ ] CTAs use only approved `forwarditthinking.com` routes
