---
title: "Finance — Invoice + Project Tracking"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Finance — Invoice + Project Tracking |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Finance |
| Estimated Time | 15–20 min per invoice |
| Prereqs | Engagement confirmed, investment amount confirmed from scoping calculator |
| Tags | finance, invoice, billing, project-tracking |

# Finance — Invoice + Project Tracking

## Goal

Issue invoices at the correct engagement milestones and keep `fit-ops/finance/project-tracking.md` current. End state: invoices are sent on time, payments are tracked, and project status accurately reflects where each engagement stands.

## When to Use This

- At engagement start (deposit invoice — 50%)
- At delivery (balance invoice — 50%)
- When a change request adds billable work (supplemental invoice)
- Any time an engagement status changes

## Invoice schedule

Every FIT engagement follows a two-payment structure:

| Invoice | When to send | Amount |
| --- | --- | --- |
| Invoice 1 — Deposit | On engagement confirmation (before work begins) | 50% of total |
| Invoice 2 — Balance | On delivery (at or after the handoff call) | 50% of total |

Do not begin delivery work until the deposit invoice is paid.

## Prerequisites

- [ ] Total investment confirmed from `pricing/scoping-calculator.md`
- [ ] Engagement letter confirmed by client (see `🪜 PROC — Legal — Engagement Letter`)
- [ ] Client name and address confirmed

## Procedure

### 1. Create the invoice

1. Open `fit-ops/finance/invoice-template.md`.
2. Save a copy named: `INV-[YYYY]-[NNN] — [Client Name]`
   - Example: `INV-2026-001 — RB Full Service Salon`
   - Increment the invoice number from the last invoice issued.
3. Replace all `[BRACKETED]` fields:
   - Invoice number, date, due date (date + 14 days)
   - Client name and address
   - Solution family and tier, brief description of services
   - Amount — 50% of total for deposit, 50% for balance
   - Payment method and reference
4. Export as PDF. Do not send an editable version.

### 2. Send the invoice

Email the invoice to the client's primary contact with a brief note:

> Hi [name], please find attached Invoice [INV-YYYY-NNN] for [description]. Payment is due by [due date]. Please use [payment method] with reference [INV-YYYY-NNN].

### 3. Update project tracking

Open `fit-ops/finance/project-tracking.md` and update the client's row:

- **Deposit invoice sent** → add invoice number and date to the Invoice column
- **Balance invoice sent** → update Invoice column with balance invoice details
- **Payment received** → note in the row

**Status definitions to use consistently:**

| Status | When to set it |
| --- | --- |
| `scoping` | Proposal sent, not yet signed |
| `active` | Engagement signed, deposit received, delivery in progress |
| `review` | Delivery complete, internal review gate in progress |
| `handoff` | Client handoff complete, in 14-day support window |
| `complete` | Support window closed, balance invoice paid, fully done |
| `paused` | On hold by mutual agreement |

### 4. Follow up on unpaid invoices

If an invoice is not paid by the due date:

1. Send a single polite follow-up after 3 business days:
   > Hi [name], just following up on Invoice [INV-YYYY-NNN] which was due [date]. Please let me know if you have any questions.
2. If still unpaid after 7 further days, follow up by phone or direct message.
3. Do not begin the next phase of work (deposit unpaid = no delivery; balance unpaid = no offboarding).

## Troubleshooting

**Client requests a different payment structure**
- A different split (e.g. 100% upfront, installments) requires a note in the engagement letter. Do not deviate from 50/50 without updating the letter.

**Invoice numbering out of sequence**
- Check the most recent invoice in `fit-ops/finance/` before creating a new one. Keep numbers sequential across all clients.

**Project tracking is out of date**
- Update it now. Stale status leads to missed milestones and billing gaps.

## Related Links

- `🪜 PROC — Legal — Engagement Letter`
- `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`
- `🪜 PROC — Client Onboarding — Website Handoff`
- `🪜 PROC — Client Offboarding`
- `fit-ops/finance/invoice-template.md`
- `fit-ops/finance/project-tracking.md`
- `pricing/scoping-calculator.md`
