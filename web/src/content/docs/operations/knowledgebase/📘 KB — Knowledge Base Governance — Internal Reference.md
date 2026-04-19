---
title: "Knowledge Base Governance — Internal Reference"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Knowledge Base Governance — Internal Reference |
| Type | Policy |
| KB_TARGET | INTERNAL |
| Visibility | Internal |
| Publish Ready | Yes |
| Redaction Needed | None |
| Version | 1.0 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Governance |
| Tags | KB governance, content management, review cycles, internal |

# Knowledge Base Governance — Internal Reference

A knowledge base is only useful if it stays current. FIT Automate treats documentation like a product: it has owners, review cycles, and rules for publishing, updating, and deprecating content.

This is the internal reference for KB governance including specific product-level details. See `📘 KB — Knowledge Base Governance — Public Overview.md` for the client-facing summary.

---

## Who It Is For

Internal KB owners and delivery staff responsible for maintaining FIT's public and internal KB corpus.

---

## Content Types We Govern

| Type | Description |
| --- | --- |
| Overview | What something is |
| How-to | Steps and instructions |
| Reference | Lists, definitions, compatibility |
| Policy | Rules, boundaries, expectations |
| FAQ | Common questions |

---

## KB_TARGET Values

| Value | Meaning |
| --- | --- |
| PUBLIC_WEB | Approved for public website chat and visitors. Must pass all launch validation gates. |
| INTERNAL | Internal operations only. Never surface through customer-facing channels. |

---

## Ownership

Every KB document must have:
- An **Owner** (accountable for accuracy)
- A **Review Cycle** (how often it is checked — quarterly default)
- A **Version** and `Last Updated` date in `YYYY-MM-DD` format
- A defined `KB_TARGET` (PUBLIC_WEB or INTERNAL)

---

## Publish-Ready Gates

Before a document is marked `Publish Ready = Yes` for PUBLIC_WEB:

- Clear scope (what it covers and what it doesn't)
- Accurate language (no guesses or draft disclaimers)
- Safe boundaries (no sensitive internal details)
- Consistent naming and terminology
- No conflicting claims across documents
- Validated against launch guardrails (banned terms, domain, routes, tier labels)

If a policy detail is still being finalized, set `Publish Ready = No` until confirmed.

---

## Launch Validation Gates (PUBLIC_WEB)

Before any PUBLIC_WEB document is published or ingested:

- No `Inbox Guard`, `Smart Website`, `Knowledge Core` references
- No `fitautomate.com` domain references
- No `/solutions` route references
- Tier vocabulary only: `Lite`, `Pro`, `Premium`
- CTAs use only approved `forwarditthinking.com` routes

---

## Knowledge System Governance (FIT Knows / AI Assistants)

When FIT deploys AI knowledge assistants (FIT Knows), documents are treated as governed sources of truth:

- Documents have naming/versioning standards
- Content is reviewed for sensitive data before ingestion
- PUBLIC_WEB and INTERNAL content are separated by design — never mix in a single assistant channel
- Customer-facing assistants use only PUBLIC_WEB-approved content
- Updates follow a review cycle to reduce "stale knowledge" risk
- CTA links embedded in assistant responses use only the approved routing allowlist

---

## Change Control and Deprecation

When content changes:
- Update the canonical document
- Mark older versions as deprecated where applicable
- Prevent outdated content from being treated as current guidance

This reduces "two truths" and keeps AI assistant answers consistent.

---

## Mixed Visibility Rule

A single KB file must not mix internal-sensitive and public-safe content. If mixed content exists:
1. Create an INTERNAL canonical document (full detail)
2. Create a PUBLIC_WEB safe companion (redacted/safe version)

---

## Review Cadence

| Risk Level | Recommended Cycle |
| --- | --- |
| Critical (compliance, pricing, trust) | Monthly |
| Standard (services, how-to, policy) | Quarterly |
| Low-change (glossary, reference) | Semi-annual |

---

## Next Step / Related Links

- Public-facing summary: `📘 KB — Knowledge Base Governance — Public Overview.md`
- FIT Knows tier detail: `📘 KB — FIT Knows — Offerings & Tiers (Internal).md`
- FIT Docs tier detail: `📘 KB — FIT Docs — Offerings & Tiers (Internal).md`
