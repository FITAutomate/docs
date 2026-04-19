---
title: "Client Onboarding — Handoff Email"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Client Onboarding — Handoff Email |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 10–15 min |
| Prereqs | Draft site is live, content pack is uploaded to SharePoint portal |
| Tags | client, email, handoff, onboarding, communication |

# Client Onboarding — Handoff Email

## Goal

Send the standard FIT handoff email to the client with their draft URL, SharePoint portal link, content pack orientation, and a clear explanation of how to request changes. End state: the client knows where their stuff is, what to review, and exactly how to submit changes.

## When to Use This

- Immediately after completing `🪜 PROC — Client Onboarding — Website Handoff`.
- Any time a significant new delivery is made that requires the client to review and respond.

## Prerequisites

- [ ] Draft site is live and accessible
- [ ] Content pack is uploaded to the client's SharePoint portal under Current Work
- [ ] SharePoint portal URL is confirmed
- [ ] Any known open items are documented so they can be disclosed in the email

## Procedure

### 1. Draft the email using the template below

Replace all `[bracketed]` fields before sending. Do not send with placeholders remaining.

---

**To:** [Client email]
**Subject:** Your [FIT Web Lite / Pro / Premium] Draft Is Ready — [Client Name]

---

Hi [Client first name],

Your draft is live. Here is everything you need.

**Your draft site:**
[Draft URL]

Take a look and let me know your overall impression before getting into the details.

---

**Your client portal:**
[SharePoint portal URL]

This is where your content pack lives. Inside you will find:

- **Current Work** — your content pack with the current draft copy organized by page
- **Past Work** — previous versions and deliverables once changes are made
- **Terms and Conditions** — your SOW for reference

---

**How to review the content pack:**

Start with `WELCOME.md` in the Current Work folder — it explains what is there and how to use it.

The easiest way to submit changes is to:
1. Open `workbook.md` to see all the current copy in one place
2. Edit directly or write notes about what to change
3. Use `submission-checklist.md` before sending anything back
4. Reply to this email with your changes or notes

---

**What I handle — you do not need to worry about:**
- Code
- Layout and design decisions
- Deployment

**What helps me most from you:**
- Correct business details (hours, services, contact info)
- Your own words where the copy doesn't sound like you
- Any photos you want to use or swap out

---

**What happens when you send changes:**

1. I acknowledge receipt within [24 / 48] hours
2. I implement and deliver back within [agreed turnaround]
3. We repeat until you are happy and ready to go live

---

Let me know if you have any questions before diving in.

[Your name]
[Your email]
[forwarditthinking.com]

---

### 2. Review the email before sending

Check:
- [ ] All `[bracketed]` fields replaced
- [ ] Draft URL is correct and accessible from outside your network
- [ ] SharePoint portal URL is correct and the client has been added as a guest
- [ ] Turnaround times match the SOW
- [ ] No internal detail, internal URLs, or FIT infrastructure references included

### 3. Send and log it

1. Send the email from `jb@forwarditthinking.com`.
2. Update the Airtable record: add the handoff date and set status to **In Review**.
3. Note the email send in the Slack client channel.

## Troubleshooting

**Client cannot open the SharePoint portal link**
- Confirm the client's email has been added as a guest to the SharePoint site.
- Send a separate test link and ask them to confirm access before the full handoff email.

**Draft URL not accessible externally**
- Confirm the staging or live environment is not IP-restricted or behind a login.

**Turnaround time is uncertain**
- Default to the turnaround in the SOW. If the SOW is vague, use: 2 business days for minor changes, 5 business days for substantial revisions.

## Related Links

- `🪜 PROC — Client Onboarding — Website Handoff`
- `🪜 PROC — Client — Change Request Process`
- `🪜 PROC — Client — Ongoing Communication Cadence`
