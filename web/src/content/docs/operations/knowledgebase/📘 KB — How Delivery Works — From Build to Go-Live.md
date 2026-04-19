---
title: "How Delivery Works — From Build to Go-Live"
description: ""
---

| Field | Value |
| --- | --- |
| Title | How Delivery Works — From Build to Go-Live |
| Type | Overview |
| KB_TARGET | INTERNAL |
| Visibility | Internal |
| Publish Ready | Yes |
| Redaction Needed | None |
| Version | 1.0 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Delivery |
| Tags | delivery, lifecycle, build, go-live, internal |

# How Delivery Works — From Build to Go-Live

FIT Automate delivers automation like a product team, not a "random script shop." Every build follows a repeatable lifecycle designed for safety, clarity, and low maintenance.

This page explains what to expect from **kickoff to go-live**, including what the client owns vs what FIT owns.

---

## Who It Is For

Internal delivery reference. See `📘 KB — How Delivery Works — Public Overview.md` for the client-facing version.

---

## Delivery Principles

- **Safety-first:** non-destructive defaults, approvals where risk is higher
- **Clear ownership:** humans remain accountable for outcomes
- **Auditability:** what happened, when, and why should be explainable
- **Maintainability:** fewer moving parts, stable integrations, clear change paths
- **Fast time-to-value:** quick wins first, then deeper improvements

---

## Delivery Phases

### Phase 1 — Confirm Scope and "What Done Looks Like"

Align on: target outcome, trigger(s) and expected output(s), success criteria and guardrails ("never do X" rules), who approves and who receives results.

**Client provides:** goals, examples, owners/approvers
**FIT provides:** scoped plan + approach

---

### Phase 2 — Design the Workflow (Guardrails Included)

Design: workflow steps and decision points, exception handling, approvals / human-in-the-loop checkpoints, logging/visibility expectations.

**Client provides:** business rules + exceptions
**FIT provides:** workflow map / logic design

---

### Phase 3 — Build and Configure

Implement the automation or solution configuration using client tools and environments, with safe defaults.

**Client provides:** access (least-privilege), test examples
**FIT provides:** configured workflow + initial documentation

---

### Phase 4 — Test with Real Scenarios

Validate using: normal cases (expected), edge cases ("what if…?"), failure cases (tool down, missing data, unexpected format).

Nothing goes live until: outputs match expectations, approvals and routing work correctly, exceptions are visible and handled safely.

---

### Phase 5 — Go-Live (Controlled)

Typically staged: limited scope first (if needed), monitor closely, confirm stability, expand once validated. Prevents "surprise automation."

---

### Phase 6 — Stabilize

Post-launch: address early adjustments, refine routing/edge cases, confirm monitoring and operator clarity. This is where workflows become "quiet and reliable."

---

### Phase 7 — Improve (Optional, Ongoing)

For clients on ongoing support: small improvements, fixes for upstream tool changes, added workflows, periodic reviews and optimization.

---

## What FIT Needs from the Client (to Move Fast)

- An accountable owner who can approve decisions quickly
- Access via least-privilege methods the client controls
- A few real samples (sanitized is fine)
- Fast feedback during testing (so fixes don't drag)

---

## What the Client Gets at Handoff

- A clear "how it works" summary (trigger → process → output)
- What to monitor (if anything)
- What to do if something fails (operator guidance)
- How to request changes safely

---

## Agency Partners: Delivery is the Same, Packaging Differs

- **Powered by FIT:** partner owns client communication by default; FIT supports delivery and escalation
- **White-label (higher tier):** stricter intake, documentation, and entitlement boundaries

The workflow lifecycle stays consistent—what changes is the packaging, governance, and support model.

---

## Change Requests (High Level)

Classified as:
- **Tuning** (minor adjustments)
- **Enhancement** (new capability inside the same scope)
- **Scope expansion** (new systems, major behavior change)

FIT confirms the right path (hourly/project/recurring support) before modifying production behavior.

---

## Next Step / Related Links

- Client-facing version: `📘 KB — How Delivery Works — Public Overview.md`
- Change request process: `📘 KB — Change Requests & Scope — How Updates Are Managed.md`
