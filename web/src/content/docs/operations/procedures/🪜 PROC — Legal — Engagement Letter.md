---
title: "Legal — Engagement Letter"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Legal — Engagement Letter |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 20–30 min |
| Prereqs | Proposal accepted (verbal or written), SOW prepared (or ready to prepare in parallel), client name and address confirmed |
| Tags | legal, engagement-letter, contract, onboarding, sow |

> ⚠️ **FLAG:** The engagement letter template (`fit-ops/legal/engagement-letter-template.md`) was noted as a starting point pending lawyer review. Treat it as operational until reviewed; update this flag when reviewed.

# Legal — Engagement Letter

## Goal

Prepare the engagement letter and attached Scope of Work, send to the client for confirmation, and file both documents. End state: a signed or email-confirmed engagement letter is on file in `fit-ops/legal/` and the client's SharePoint portal, and the engagement is formally authorized to begin.

## When to Use This

- After the prospect has verbally or in writing accepted a proposal.
- Before any delivery, content, or infrastructure work begins.

Complete this procedure (and receive confirmation) before starting `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`. The signed engagement letter is a required prerequisite for onboarding.

## Prerequisites

- [ ] Proposal has been accepted
- [ ] Client full legal/trading name confirmed
- [ ] Client address confirmed
- [ ] Solution and tier confirmed
- [ ] SOW is prepared or ready to prepare alongside this letter — see `🪜 PROC — Statement of Work — New Engagement`
- [ ] Total investment amount confirmed (from `pricing/scoping-calculator.md` output)

## Procedure

### 1. Copy the engagement letter template

1. Open `fit-ops/legal/engagement-letter-template.md`.
2. Save a copy named: `Engagement-Letter — [Client Name] — [Solution] [Tier] — v1.0 — YYYY-MM-DD`
3. Example: `Engagement-Letter — RB Full Service Salon — FIT Web Lite — v1.0 — 2026-04-18`

### 2. Complete the engagement letter

Replace all `[BRACKETED]` fields:

- **Date** — today's date
- **Client name and address** — full legal or trading name and address
- **Solution and tier** — example: FIT Web Lite
- **Timeline** — approximate number of weeks from engagement start
- **Investment** — total amount in CAD, as calculated in `pricing/scoping-calculator.md`
- **Exhibit A reference** — the SOW prepared in `🪜 PROC — Statement of Work — New Engagement`

Leave all legal clauses (ownership, confidentiality, limitation of liability) as written. Do not modify these without legal review.

### 3. Attach the SOW as Exhibit A

The SOW is Exhibit A to the engagement letter. Complete `🪜 PROC — Statement of Work — New Engagement` and attach the finalized SOW document to the engagement letter before sending.

### 4. Export to PDF and send

1. Export the completed engagement letter (with attached SOW) as a PDF.
2. Do not send an editable version.
3. Email the client:

   > Hi [name], attached is the engagement letter for your [FIT Web Lite / Pro / Premium] engagement, including the full Scope of Work as Exhibit A. Please review and reply to confirm you are happy to proceed — or sign and return if you prefer.

### 5. Receive and log confirmation

When the client replies confirming or signs:

1. Save or archive the confirmation email.
2. Note the confirmation date.
3. The engagement is now authorized to begin.

Do not start `🪜 PROC — Client Onboarding — FIT Infrastructure Setup` until confirmation is received.

### 6. File the confirmed engagement letter

1. Save the signed or email-confirmed version to `fit-ops/legal/` using the naming convention from Step 1.
2. Upload a copy to the client's SharePoint portal → **Terms and Conditions** library once the portal exists.

If the portal does not exist yet (infrastructure is not set up), file locally in `fit-ops/legal/` and upload to SharePoint as Step 2 of `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`.

### 7. Update project tracking

Update `fit-ops/finance/project-tracking.md`:
- Status: `scoping` → `active`
- Add engagement start date and investment amount

## Troubleshooting

**Client wants to negotiate the letter terms**
- Scope and timeline adjustments are fine — update the SOW accordingly and re-send.
- Legal clause changes (ownership, liability) require lawyer review before agreeing. Do not modify these on the fly.

**Client does not respond**
- Follow up once after 2 business days. Do not begin work without confirmation.

**Client prefers not to sign — only email confirmation**
- Email confirmation is a valid approval signal. Archive the confirming email and proceed.

## Related Links

- `🪜 PROC — Statement of Work — New Engagement`
- `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`
- `🪜 PROC — Sales — New Engagement Discovery`
- `fit-ops/legal/engagement-letter-template.md`
- `pricing/scoping-calculator.md`
