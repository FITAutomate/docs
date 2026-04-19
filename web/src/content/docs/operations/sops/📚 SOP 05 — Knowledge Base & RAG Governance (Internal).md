---
title: "SOP 05 — Knowledge Base & RAG Governance (Internal)"
description: ""
---

# 📚SOP 05 — Knowledge Base & RAG Governance (Internal)

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 05 — Knowledge Base & RAG Governance (Internal)          |
| Type             | SOP Plan (Knowledge Systems / Governance / Quality)          |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal (Public Summary Exists)                             |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Documentation Lead (Doc)                                     |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 FIT – SOP 5 Knowledge Base & RAG Governance.pdf; 📙 FIT Automate – Public KB Readiness Checks.docx; 🏛 FIT Core Architecture (Finalized Model – 2025).pdf (high-level); 📘 KB — Knowledge Base Governance (Public Summary) — Keeping Answers Current.md (previous draft) |

## Purpose and scope boundaries

Operate Knowledge Core and all KB content with SaaS-grade discipline:

- content taxonomy and metadata
- ingestion rules (what can be indexed, what cannot)
- evaluation and quality gates
- public vs internal boundaries
- deprecation and change control
- safety: prevent unauthorized leakage and reduce incorrect answers

Includes:

- PUBLIC_WEB KB (website chat)
- partner enablement docs (tier-dependent)
- INTERNAL SOPs and runbooks
- client-specific knowledge bases (Client-Confidential)

Out of scope:

- publishing ingestion internals, embeddings/vector-store details publicly
- indexing sensitive sources without explicit approval and classification

## Trigger events

- New KB content created or updated
- New ingestion source proposed (SharePoint/Drive/CRM exports, etc.)
- New solution pack release affecting docs
- Model/tooling change that can impact retrieval quality
- Quarterly governance audit
- Incident/postmortem indicates KB contributed to confusion

## Inputs → Outputs (required artifacts)

**Inputs**

- Source documents + classification (SOP 12)
- Doc ownership + review cycle (SOP 20)
- Approved KB_TARGET assignment (PUBLIC_WEB / INTERNAL / Client-Confidential / DOCLING_EVAL)
- Ingestion request (what/why/who approves)

**Outputs**

- KB index register (what’s indexed, for what audience, who approved)
- Ingestion log (batch record; metadata only)
- Eval results (retrieval quality checks, contradiction checks)
- Publish-ready status updates (PUBLIC_WEB)
- Deprecation records (what replaced what)

**Templates/logs to standardize**

- `LOG — KB Index Register (By KB_TARGET)`
- `TEMPLATE — Ingestion Request & Approval`
- `LOG — Ingestion Batch Record (Metadata Only)`
- `TEMPLATE — KB Eval Checklist (Quality + Safety)`
- `LOG — Deprecations & Replacements`

## Governance rules (internal standards)

- PUBLIC_WEB content must be standalone, safe, and not rely on private docs
- No secrets, no tenant-specific architecture, no client identifiers in indexable public docs
- Every KB doc must have: owner, version, last updated, review cycle, source basis
- Conflicts/duplicates must be resolved (one canonical doc)
- If a policy isn’t finalized: mark Publish Ready = No and add an acceptance criterion

## RACI

- **R:** Documentation Lead (Doc)
- **A:** Founder/Exec (E)
- **C:** Security/Compliance (Sec), Product Owner (P), Delivery Lead (D), Support Lead (S), Partner Manager (PM)
- **I:** Finance Ops (Fin)

## KPIs / proof of control

- Freshness: % docs reviewed within cycle (by KB_TARGET)
- Contradiction rate (conflicting public guidance discovered)
- Answer quality signals (e.g., “couldn’t answer” vs “confident answer” ratios)
- “Escalate to human” capture rate when sources are insufficient (good behavior)
- Time to update KB after releases/incidents

## Visibility + publishable summary

- **Internal:** full SOP, registers, eval results, ingestion approval evidence
- **Public:** the governance summary already drafted (commitments + categories only)
- **Do not publish:** ingestion mechanics, evaluation datasets, tool configs, internal prompts, client KB contents