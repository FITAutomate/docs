---
title: "Client — Ongoing Communication Cadence"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Client — Ongoing Communication Cadence |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | Ongoing |
| Prereqs | Active client engagement |
| Tags | client, communication, cadence, SLA, check-in |

> ⚠️ **WIP:** This is a starter draft. Cadence specifics — particularly tier-differentiated touchpoints and SLA commitments — need to be confirmed and locked in. Review and update before first use with a client.

# Client — Ongoing Communication Cadence

## Goal

Define how FIT communicates with active clients throughout an engagement: what we send proactively, how quickly we respond to inbound requests, and how cadence scales by tier. End state: clients never have to wonder what is happening — they hear from us on a predictable schedule, and we respond within committed timeframes.

## When to Use This

- Reference this during the engagement to stay on cadence.
- Use when a client asks how communication works.
- Review at the start of each new engagement to confirm the tier-appropriate cadence is in place.

This is an operational document, not a marketing document. It describes how FIT actually works, not how we want to be perceived.

## Prerequisites

- [ ] Active client engagement with a confirmed tier (Lite, Pro, or Premium)
- [ ] Handoff email sent and client has acknowledged

## Procedure

### 1. Confirm the cadence for the client's tier

> ⚠️ **FLAG:** The specific cadence per tier below is a suggested starting point. Confirm and adjust before committing to a client.

**FIT Web Lite**
- Proactive check-in: once per project phase (handoff → review → launch)
- Response SLA: 2 business days for change requests, 1 business day for questions
- Primary channel: email
- Standing calls: none (ad hoc only)

**FIT Web Pro**
- Proactive check-in: weekly during active build; monthly post-launch
- Response SLA: 1 business day for change requests, same business day for urgent questions
- Primary channel: email + Slack client channel
- Standing calls: optional monthly review

**FIT Web Premium / Retainer**
- Proactive check-in: biweekly during active work; weekly during high-activity periods
- Response SLA: same business day for all requests; 4-hour acknowledgement for urgent issues
- Primary channel: Slack + email
- Standing calls: biweekly or as agreed in SOW

> ⚠️ **FLAG:** FIT Docs and FIT Knows cadences are not defined yet. Add when those services are in active delivery.

### 2. Send proactive updates on schedule

Do not wait for the client to ask what is happening. Send a brief proactive update:

- When a phase is complete (example: "Draft is live for review")
- When there is a delay (example: "Implementation will be delivered Thursday instead of Tuesday")
- When a question arises that requires client input before work can continue

Keep updates short. One paragraph or a short bullet list is enough. Do not pad with filler.

### 3. Acknowledge inbound requests within the SLA

When a client sends a change request or question:

1. Reply within the SLA window even if the work is not done yet.
2. Confirmation message format:

   > Got it. I will [implement / look into / respond to] this by [specific date or timeframe]. I will follow up when it is done.

3. Deliver by the stated timeframe. If you cannot, send a heads-up before the deadline, not after.

### 4. Log all client communication touchpoints

After each client interaction (email, call, or Slack message that involves a commitment or decision):

1. Update the Airtable client record with the date, type of interaction, and any commitments made.
2. If a decision or scope change was discussed, note it and confirm in writing to the client.

### 5. Handle silence proactively

If a client goes quiet for longer than expected at a review stage:

- Lite: follow up after 5 business days with a gentle nudge.
- Pro/Premium: follow up after 2–3 business days.

Nudge format:

> Hi [name], just checking in — wanted to make sure you received the draft and everything is accessible. Let me know if you have any questions or if you are still reviewing.

## Troubleshooting

**Client is unresponsive for an extended period**
- Follow up twice over the appropriate window (see Step 5).
- If still no response after a second follow-up, send a formal "check-in or pause" email noting that work is on hold pending their input.

**Client is contacting outside agreed channels**
- Acknowledge the message and redirect: "Got it — I will track this in our email thread so nothing gets missed."

**Scope is creeping into requests**
- Acknowledge the request and flag it before committing: "This looks like it may be outside the original scope. Let me confirm and come back to you."

## Related Links

- `🪜 PROC — Client — Change Request Process`
- `🪜 PROC — Client Offboarding`
- `🪜 PROC — Statement of Work — New Engagement`
