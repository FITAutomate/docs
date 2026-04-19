---
title: "Client — Change Request Process"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Client — Change Request Process |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 15–30 min (FIT assessment) + client submission time |
| Prereqs | Active FIT engagement, confirmed SOW on file |
| Tags | client, change-request, process, scope |

# Client — Change Request Process

## Goal

Give every out-of-scope client request a consistent, documented response. End state: the request is either handled within scope or converted to a formal change request with written client confirmation before any work begins.

## When to Use This

- A client asks for something that may be outside the confirmed SOW.
- A client submits a content update that touches pages or features not in the original scope.
- Any request that would extend the delivery timeline.

## What IS a change request

A change request is required when the client asks for:
- Additional pages, sections, or features not in the SOW
- A different technology or platform than agreed
- Significant content restructuring after delivery has started
- New integrations not scoped in the original engagement
- Anything that would extend the delivery timeline

## What is NOT a change request

Do NOT treat these as change requests:
- **Bugs** — something that was delivered incorrectly. Fix it, do not charge for it.
- **Minor copy edits** — small changes within already-agreed sections (wording, hours, phone number).
- **Configuration adjustments** within the agreed scope.

When in doubt: if fixing it takes under 30 minutes and is clearly within what was agreed, it is not a CR.

## Prerequisites

- [ ] Active FIT engagement exists
- [ ] Confirmed SOW is on file in the client's SharePoint portal

## Procedure

### 1. Acknowledge the request within 1 business day

Reply to the client within **1 business day** of receiving any request that may be out of scope:

> Thanks for flagging this. I need to review whether this falls within our current scope or requires a change request. I'll get back to you by [date].

Do not commit to doing the work or give a timeline until the scope assessment is complete.

### 2. Assess whether it is in scope

- [ ] Does this change what was agreed in the SOW?
- [ ] Does it add time? How much?
- [ ] Does it change the tier or solution?
- [ ] Run `fit-ops/pricing/scoping-calculator.md` for the change

If it is within scope: proceed. No further steps required.

If it is out of scope: continue to Step 3.

### 3. Present the change request to the client

Send a short written change request summary via email:

- What is being requested
- Whether it is in or out of scope
- If out of scope: estimated cost and timeline addition
- What the client needs to confirm before work begins

**Client must confirm in writing before any work begins.** Do not start work on an out-of-scope request based on a verbal agreement.

### 4. Update records if the change request is approved

Once written confirmation is received:

- [ ] Update the SOW with a change request addendum (version the SOW: `v1.1`, `v2.0`, etc.)
- [ ] Update the project tracking entry in `fit-ops/finance/project-tracking.md`
- [ ] Update timeline and invoice plan
- [ ] Upload the new SOW version to the client's SharePoint → **Terms and Conditions** library

### 5. Deliver and confirm

Deliver the approved change. Send a delivery confirmation to the client and confirm the update is correct.

---

## Client-facing submission instructions

Share this section with clients who need to submit a change request.

---

### How to submit a change request

Be as specific as you can:
- Which page or section?
- What is there now?
- What should it say or show instead?

**Run through this checklist before sending:**

- [ ] Business name is correct
- [ ] Phone and email are correct
- [ ] Hours and availability are correct
- [ ] Service names are correct
- [ ] No pricing added unless explicitly approved
- [ ] No placeholder text left in sections you edited
- [ ] Image files are clearly named if sending new photos
- [ ] Notes are clear about what should be replaced, removed, or added

**Option A — Edit the content pack directly**

1. Open the file you want to change in your client portal Current Work.
2. Make your edits or leave notes.
3. Reply to your FIT handoff email to flag changes are ready for review.

**Option B — Send by email**

Reply to your FIT handoff email with:
- What you want changed (page, section, and description)
- New content, new photos, or clear notes
- Any deadline if applicable

---

## Troubleshooting

**Client requests work verbally without written confirmation**
- Do not start. Respond: "Happy to get started — can you send a quick reply to confirm so I have it in writing?"

**Client is not sure if their request is a change request**
- Have them submit it anyway with a note that they are unsure. You assess scope, not them.

**Request is a bug, not a CR**
- Fix it. Do not raise a change request for a delivery error.

**Client has not confirmed receipt of the change request summary**
- Follow up once after 2 business days. Do not begin work without written confirmation.

## Related Links

- `🪜 PROC — Client — Ongoing Communication Cadence`
- `🪜 PROC — Statement of Work — New Engagement`
- `fit-ops/pricing/scoping-calculator.md`
- [forwarditthinking.com/contact](https://forwarditthinking.com/contact)
