---
title: "Glossary — Terms Used in FIT Automate"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Glossary — Terms Used in FIT Automate |
| Type | Reference |
| KB_TARGET | PUBLIC_WEB |
| Visibility | Public |
| Publish Ready | Yes |
| Redaction Needed | None |
| Version | 1.0 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Reference |
| Tags | glossary, terms, definitions |

# Glossary — Terms Used in FIT Automate

This glossary defines the most common terms you'll see across FIT Automate's website and knowledge base.

---

## A

**AI Enablement**
A service focused on helping teams adopt AI safely and consistently—through training, playbooks, governance frameworks, and operational scaffolding.

**AI Readiness Audit**
A structured review that identifies where AI and automation can realistically help, what to do first, what to avoid, and what readiness gaps exist.

**Approval Gate**
A step where a human must approve before an automation can proceed. Common for sensitive actions like sending messages, updating records, or making irreversible changes.

**Async Support**
Support provided through email or ticket (not live phone). Most modern early-stage service providers begin here and add premium real-time coverage at higher tiers.

**Automation**
A repeatable process that performs work across tools and systems with defined rules (trigger → steps → outputs).

**Automation Engine**
A platform that runs automations (e.g., n8n, Power Automate). It handles triggers, logic, and connectors to other tools.

---

## B

**Breaking Change**
An update that requires action—a configuration change, new prerequisite, or behavior change. Breaking changes are rare and should be clearly communicated.

**Business Rule**
A decision rule your workflow follows (e.g., "if the sender is a client, route to account owner," or "if amount > X, require approval").

---

## C

**Change Request**
A request to modify an existing automation or knowledge system. Typically classified as bug fix, tuning, or enhancement/scope change.

**Changelog**
A record of updates and changes, often published as release notes.

**Compatibility Update**
A change required due to upstream tool changes (API updates, permission model updates, connector behavior changes).

**Connector**
A built-in integration inside an automation tool that communicates with another system (e.g., HubSpot connector, Microsoft 365 connector).

**Co-branded ("Powered by FIT")**
A partner model where FIT supports delivery under a shared brand arrangement. The agency remains the relationship owner by default.

**Content Boundary**
Rules defining what an assistant or KB is allowed to answer (e.g., public vs. internal content separation).

**Customer-Facing Assistant**
An AI assistant designed for external users (e.g., website chat). Must be limited to approved public content (PUBLIC_WEB target only).

---

## D

**Data Retention**
How long data is kept. In public terms: what categories are kept, for how long, and why. Exact timelines are typically contract-defined.

**Deprecation**
Marking content or a workflow version as outdated and no longer recommended. Deprecation prevents conflicting "two truths" in a system.

**Discovery Call**
A short call to confirm fit, outcomes, scope, and the recommended next step (audit, assessment, or pilot).

**Document Type (KB)**
A label such as Overview / How-to / Reference / Policy / FAQ—used to keep KB content organized and predictable.

---

## E

**Entitlements**
What a client or partner tier includes: support coverage, scope boundaries, and escalation rights. Entitlements prevent scope confusion.

**Exception Handling**
What the system does when something unexpected happens—missing information, a tool being unavailable, or an uncertain classification. FIT prefers "pause and route to human" over guessing.

**Exception Queue**
A place where uncertain or failed items are routed for human review instead of being processed automatically.

---

## F

**Fixed Project**
A scoped engagement with defined outcomes and deliverables. Used when requirements are clear and stable.

---

## G

**Governance**
Rules and roles that keep systems reliable over time—owners, review cycles, change control, and deprecation.

**Guardrails**
Constraints that prevent risky behavior: approvals, safe defaults, scope boundaries, and restricted actions.

---

## H

**Human-in-the-Loop (HITL)**
A workflow design where humans review or approve critical steps. Common for anything sensitive or irreversible.

---

## I

**Idempotency**
A design property where running the same workflow more than once does not create duplicate or unintended results. Helps with reliability.

**Incident**
An unplanned disruption or degradation of an automation or system. Handled via severity levels and defined communication patterns.

**Intelligent Automation**
A service covering the design, build, and deployment of reliable workflow automations—connected to your tools, with guardrails and human-in-the-loop steps where needed.

**Integration**
Connecting systems so data and actions flow automatically via connectors, APIs, webhooks, or databases.

---

## K

**KB (Knowledge Base)**
A curated set of documents designed to answer questions consistently for customers, staff, or partners.

**KB_TARGET**
A label that indicates the intended audience or system usage:
- **PUBLIC_WEB** — public website chat and visitors
- **INTERNAL** — internal operations only

---

## L

**Least Privilege**
Access is granted only to what is necessary. Reduces risk and limits blast radius.

**Lifecycle (Delivery)**
The phases from design → build → test → go-live → stabilize → improve.

**Lite / Pro / Premium**
The three standard service tiers used across FIT solution families. Each tier defines scope, support coverage, and included features. Use only these three labels—no other tier naming variants.

---

## M

**MFA (Multi-Factor Authentication)**
A security control requiring a second factor in addition to a password. Referenced at a high level only in public-facing content.

**Monitoring**
Observing workflow health and exceptions so issues are detected quickly.

---

## N

**n8n**
An automation platform used to orchestrate workflows across tools and APIs.

---

## O

**Offboarding**
The process of revoking access, stopping workflows if requested, and handling data deletion requests. Covered at a high level in the public KB.

**Operator Guidance**
Simple instructions for the human owner or operator: what to check, what failures look like, and what to do next.

---

## P

**Partner Enablement**
Materials and processes that help agencies sell and deliver consistently—intake templates, delivery checklists, and scope boundaries.

**Policy (KB)**
A KB document type that defines rules and expectations—support policy, trust overview, and offboarding terms.

**Postmortem**
A structured review after a significant incident to identify root causes and prevent recurrence. Internal discipline; public summaries may be shared at a high level where appropriate.

**Power Automate**
Microsoft-native workflow automation platform commonly used in Microsoft 365-heavy organizations.

**Postgres**
A relational database commonly used for systems of record and structured operational data.

---

## R

**RAG (Retrieval-Augmented Generation)**
An approach where an AI assistant retrieves relevant documents first, then generates an answer grounded in that content.

**Release Notes**
A log of what changed in a service offering or system—fixes, improvements, and compatibility notes.

**Reliability**
The ability for automations to operate consistently over time—supported by good design, monitoring, and change control.

**Review Cycle**
How often a document or policy must be reviewed to remain current (e.g., quarterly).

**Routing**
Sending an item (email, lead, request) to the right owner or queue based on defined rules.

---

## S

**Scope**
The boundaries of what a project includes. Scope control prevents endless "can it also do…" expansion.

**Severity (Sev1/Sev2/Sev3)**
A classification for impact and urgency used in support and incident handling.

**SLA (Service Level Agreement)**
Contracted response or uptime commitments. Severity-based response targets may apply; exact SLAs are agreement-defined.

**Supabase**
A platform built on Postgres often used for app backends and operational data.

---

## T

**Template**
A reusable asset—intake form, checklist, document template, standard response—that makes delivery consistent.

**Trust Center Lite**
Public-safe overview of security and privacy commitments at a high level, without sensitive implementation detail.

---

## U

**Uptime**
Availability of a system. Exact uptime commitments, if any, are agreement-defined.

---

## V

**Vercel**
A hosting and deployment platform commonly used for Next.js applications.

**Versioning**
Tracking changes to workflows, solution families, or KB documents over time to prevent surprise updates.

---

## W

**Webhook**
A method where one system sends an event to another when something happens (e.g., form submitted → workflow triggered).

**White-label**
A partner model where FIT delivers behind the scenes under the partner's brand, requiring stricter governance and entitlement boundaries.

---

## Next Step / Related Links

If you see a term on the site that isn't in this glossary: [https://forwarditthinking.com/contact](https://forwarditthinking.com/contact)
