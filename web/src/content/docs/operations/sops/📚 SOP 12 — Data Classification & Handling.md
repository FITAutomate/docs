---
title: "SOP 12 — Data Classification & Handling"
description: ""
---

# 📚 SOP 12 — Data Classification & Handling

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Title            | SOP 12 — Data Classification & Handling                      |
| Type             | SOP Plan (Security / Privacy / Data Handling)                |
| KB_TARGET        | INTERNAL                                                     |
| Visibility       | Internal                                                     |
| Publish Ready    | No                                                           |
| Redaction Needed | Heavy                                                        |
| Version          | 0.1                                                          |
| Owner            | Security/Compliance (Sec)                                    |
| Last Updated     | January 25, 2026                                             |
| Review Cycle     | Quarterly                                                    |
| Source Basis     | 📘 KB — Trust Center Lite — Security & Privacy Overview.md; 📘 KB — Offboarding & Data Deletion — What Happens When You Leave.md; 🏛 FIT Core Architecture (Finalized Model – 2025).pdf (high-level) |

## Purpose and scope boundaries

Define how FIT classifies and handles data across:

- client projects and partner engagements
- Knowledge Core ingestion content
- operational logs and support tickets
- automation inputs/outputs and data stores

Out of scope:

- client-specific DPAs and legal terms (separate legal artifacts)
- deep technical architecture diagrams for public consumption

## Trigger events

- New client onboarding
- New dataset/source introduced (SharePoint/Drive, CRM exports, ticket data, etc.)
- New knowledge base ingestion batch
- New integration/workflow touches client data
- Quarterly data handling audit
- Offboarding / deletion request

## Inputs → Outputs (required artifacts)

**Inputs**

- Data source list (what systems, what types of content)
- Intended use (automation, reporting, KB assistant)
- Access roles/owners

**Outputs**

- Data map (source → classification → allowed uses → retention handling)
- Handling controls checklist (access, storage, logging, sharing rules)
- Exceptions register (if any deviations are approved)
- Deletion request evidence (where applicable)

**Templates/logs to standardize**

- `TEMPLATE — Data Source Intake`
- `TEMPLATE — Data Classification Matrix`
- `LOG — Data Map (Source → Use → Retention)`
- `LOG — Data Handling Exceptions`

## Classification model (recommended baseline)

- **Public:** intended for public sharing
- **Internal:** FIT internal operations, non-client-sensitive
- **Client-Confidential:** client business content, SOPs, process docs, non-public materials
- **Restricted:** sensitive personal data / regulated data (where applicable) — requires explicit handling rules

## RACI

- **R:** Sec
- **A:** E
- **C:** Doc (for KB sources), Delivery Lead (D), Support Lead (S)
- **I:** P, PM, Fin

## KPIs / proof of control

- % engagements with completed data map

- % KB ingestion sources classified before ingestion

- # of data handling exceptions (and closure rate)

- Offboarding deletion request cycle time (tracked)

- Audit completion rate (quarterly)

## Visibility + publishable summary

- **Internal:** full classification + data maps + exceptions
- **Public summary (allowed):** categories and high-level commitments (access control, retention/deletion approach, least privilege)
- **Do not publish:** client source lists, storage locations, internal system names that reveal architecture details