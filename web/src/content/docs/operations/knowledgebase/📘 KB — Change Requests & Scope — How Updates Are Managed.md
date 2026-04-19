---
title: "Change Requests & Scope — How Updates Are Managed"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Change Requests & Scope — How Updates Are Managed |
| Type | Policy |
| KB_TARGET | INTERNAL |
| Visibility | Internal |
| Publish Ready | Yes |
| Redaction Needed | None |
| Version | 1.0 |
| Owner | John Bewley |
| Last Updated | 2026-04-17 |
| Categories | Delivery |
| Tags | change requests, scope, change control, internal |

# Change Requests & Scope — How Updates Are Managed

Automation is not "set-and-forget." Tools change, workflows evolve, and what worked last quarter may need tuning. FIT Automate manages changes using a simple, product-style approach so updates don't create chaos.

This page explains how to request changes, what counts as a bug vs an enhancement, how we keep production changes safe, and how agencies manage versions across multiple clients.

---

## Who It Is For

Internal delivery reference. See `📘 KB — Change Requests & Scope — Public Overview.md` for the client-facing version.

---

## The 3 Change Types

### 1) Bug Fix
Something is not working as designed.
Example: workflow fails unexpectedly; routing is incorrect; an expected output isn't produced.

### 2) Tuning / Adjustment
Small, non-breaking change inside the existing design.
Example: update a rule, modify labels, change an assignment path, tweak formatting.

### 3) Enhancement / Scope Change
New capability or a material change to behavior, systems, or requirements.
Example: add a new app/system; add new workflow branch logic; expand into new departments; introduce new approvals.

Why this matters: **enhancements require scoping** so we don't accidentally break production.

---

## How to Submit a Change Request

For fastest turnaround, include:

- What you want to change (plain language)
- Why (the outcome you want)
- Any examples (screenshots, sample inputs/outputs)
- Priority (low/medium/high)
- Deadline (if real)
- Whether it's safe to deploy immediately or needs a scheduled window

If unsure, just describe the problem—FIT will classify it.

---

## The Change Workflow

### Step 1 — Triage and classification
FIT confirms type: bug fix / tuning / enhancement or scope change.

### Step 2 — Impact check
Downstream impacts, risk level, required testing scenarios, whether approvals are needed.

### Step 3 — Plan the change
Depending on engagement model: hourly work / scoped mini-project / included capacity under ongoing support.
(We do not publish prices in public chat; agreements define billing.)

### Step 4 — Implement and test
Validate normal cases, edge cases, failure cases.

### Step 5 — Deploy safely
For higher-risk changes: defined deployment window, explicit approval, staged rollout for multi-client deployments.

### Step 6 — Document what changed
Simple record of what changed and why.

---

## Emergency Changes (Break/Fix)

- Prioritize mitigation first (stop the bleeding)
- Then implement the safest fix
- Then follow up with documentation and prevention steps

Severity and response expectations depend on the support arrangement.

---

## Agencies: Managing Changes Across Multiple Clients

- Maintain an "approved version" baseline
- Roll changes client-by-client (not all at once)
- Track which client is on which version
- Use a clear escalation path for urgent incidents

This reduces surprise behavior and prevents one client's edge case from affecting others.

---

## What "Out of Scope" Means

Out of scope usually means:

- New systems not originally included
- New business rules that materially change workflow design
- Additional teams/departments not in the original rollout
- Changes that require a redesign rather than a tweak

When scope expands, FIT will propose the cleanest path forward.

---

## Next Step / Related Links

- Client-facing version: `📘 KB — Change Requests & Scope — Public Overview.md`
- Support policy: `📘 KB — Support Policy — How Support Works.md`
