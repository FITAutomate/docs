---
title: "Statement of Work — New Engagement"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Statement of Work — New Engagement |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 30–60 min |
| Prereqs | Engagement scope confirmed, client name and tier confirmed |
| Tags | client, sow, contract, scope, sharepoint |

# Statement of Work — New Engagement

## Goal

Create a Statement of Work for a new client engagement, get email confirmation from the client, and file the approved SOW in the client's SharePoint portal. End state: a versioned SOW exists in SharePoint as the read-only scope reference for the engagement, and the client's email confirmation is on record.

## When to Use This

- Every new client engagement before any work begins.
- When scope changes materially enough to warrant an updated SOW.

The SOW is FIT's scope control mechanism. It does not require a formal signature — email confirmation from the client is the approval signal. Keep it simple and enforce it.

## Prerequisites

- [ ] Engagement scope is agreed in principle (solution, tier, deliverables, timeline)
- [ ] Client name, slug, and tier are confirmed
- [ ] SharePoint client portal exists (see `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`)

## Procedure

### 1. Copy the SOW template

1. Open `fit-ops/legal/scope-of-work.md`.
2. Save a copy named: `SOW — [Client Name] — [Solution] [Tier] — v1.0 — YYYY-MM-DD`
3. Example: `SOW — RB Full Service Salon — FIT Web Lite — v1.0 — 2026-04-18`

### 2. Complete the SOW

Fill in all sections:

- **Client:** full legal or trading name
- **Engagement:** solution and tier (example: FIT Web Lite)
- **Deliverables:** specific list of what is included
- **Not included:** explicit list of what is out of scope
- **Timeline:** start date, key milestones, expected delivery
- **Change request process:** reference `🪜 PROC — Client — Change Request Process`
- **Payment terms:** as agreed (if applicable)
- **Version:** `1.0`
- **Date:** today

Be specific about deliverables. Vague SOWs create scope disputes.

### 3. Send the SOW to the client for confirmation

Email the SOW to the client:

> Hi [name], attached is the Statement of Work for your [FIT Web Lite / Pro / Premium] engagement. Please review and reply to confirm you are happy with the scope and we will get started.

Attach the SOW as a PDF. Do not send an editable version.

### 4. Receive and log email confirmation

When the client replies confirming the SOW:

1. Save or archive the confirmation email.
2. Note the confirmation date in Airtable.
3. The engagement is now authorized to begin.

Do not begin work before confirmation is received.

### 5. File the approved SOW in SharePoint

1. Upload the SOW PDF to the client's SharePoint portal → **Terms and Conditions** library.
2. Set the file to read-only for the client (they can view, not edit).
3. This is the client's reference copy for the life of the engagement.

### 6. Version SOW amendments

If scope changes materially during the engagement:

1. Copy the current SOW.
2. Increment version: `v1.1`, `v2.0`, etc.
3. Update only the changed sections. Document what changed and why at the top.
4. Send to client for email confirmation again.
5. Upload the new version to SharePoint. Keep the previous version — do not delete it.

## Troubleshooting

**Client wants to negotiate scope after confirming**
- Reference the confirmed SOW. If a new scope is agreed, create a v1.1 amendment.

**Client does not respond to the SOW email**
- Follow up once after 2 business days. If no response after a second follow-up, hold off starting work and contact the client directly.

**Scope is unclear during the engagement**
- Default to the most recent confirmed SOW. If the request is outside the SOW, flag it as a potential scope addition before committing.

## Related Links

- `🪜 PROC — Legal — Engagement Letter`
- `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`
- `🪜 PROC — Client — Change Request Process`
- `🪜 PROC — Client Offboarding`
- `fit-ops/legal/scope-of-work.md`
