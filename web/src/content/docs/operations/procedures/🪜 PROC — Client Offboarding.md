---
title: "Client Offboarding"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Client Offboarding |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 1–2 hours |
| Prereqs | Engagement confirmed as complete or concluded, client is aware |
| Tags | client, offboarding, archive, credentials, closeout |

# Client Offboarding

## Goal

Close out a completed or concluded client engagement cleanly: deliver the final handoff package, rotate or revoke credentials, archive all deliverables, update records, and close communication channels. End state: nothing client-related is left open or active in FIT systems, and the client has everything they need to operate independently.

## When to Use This

- A project is complete and the client is moving to self-managed operation.
- An engagement is concluded early or paused indefinitely.
- A retainer ends.

## Prerequisites

- [ ] Client and John have agreed the engagement is ending
- [ ] 14-day post-handoff support window has ended (see `🪜 PROC — Client Onboarding — Website Handoff`)
- [ ] All outstanding deliverables are complete or explicitly deferred
- [ ] Final invoice has been sent (if applicable)

## Procedure

### 1. Compile the final handoff package

Assemble everything the client needs to operate independently:

- Live site URL (confirmed working)
- Access credentials they own (domain registrar, hosting if applicable)
- Final content pack from the GitHub repo (`client-content/` folder)
- Operations guide (`docs/operations.md`) — how to update content and request changes
- Link to their SharePoint portal for SOW and document reference
- Any third-party accounts set up in their name (Cal.com, form tools, etc.)

Do not include FIT internal credentials, API keys, or infrastructure details.

### 2. Send the final handoff to the client

Email the client with the handoff package:

> Hi [name], the engagement is now complete. Here is everything you need going forward: [list]. Your portal will remain accessible at [SharePoint URL] for your reference. If anything comes up down the road, you can reach me at [contact].

### 3. Rotate or revoke FIT-held credentials

For every credential or access token FIT holds on behalf of the client or that gives FIT access to client systems:

1. Rotate or revoke the credential.
2. Confirm with the client that their own access still works after rotation.
3. Remove the credential from any FIT credential stores (n8n, 1Password, environment files).

For every credential that gives the client access to FIT systems (example: SharePoint guest access):
- Leave in place for 30 days post-offboarding for reference access.
- Archive or revoke after 30 days.

### 4. Archive GitHub repo deliverables

1. Create a final release or tag on the GitHub repo: `v-final-YYYY-MM-DD`.
2. Move the repo to archived state on GitHub: **Settings** → **Danger Zone** → **Archive this repository**.

Archived repos are read-only. They are not deleted.

### 5. Move SharePoint portal to Past Work state

1. Move all files in **Current Work** to **Past Work** in the client's SharePoint portal.
2. Remove or downgrade client guest access (read-only reference access may remain for 30 days).

### 6. Update Airtable record

Update the client's Airtable record:
- Status: `active` → `complete`
- End date: today's date
- Notes: brief summary of what was delivered

### 7. Update clients.yaml

Open `fit-solutions/registry/clients.yaml` and update:

```yaml
status: complete
```

Add any relevant end-of-engagement notes.

### 8. Archive the Slack channel

1. In the FIT Slack workspace, archive the `client-[slug]` channel.
2. Do not delete — archived channels are retained for reference.

### 9. Final internal review

Before considering the offboarding complete:

- [ ] Final handoff package sent to client
- [ ] All FIT-held client credentials rotated or revoked
- [ ] GitHub repo archived
- [ ] SharePoint Current Work moved to Past Work
- [ ] Airtable record updated to complete
- [ ] `clients.yaml` updated
- [ ] Slack channel archived
- [ ] No open deliverables or outstanding commitments remain

## Troubleshooting

**Client requests continued access after offboarding**
- Clarify scope. Read-only portal access is fine to leave in place for 30 days. Active change requests after offboarding require a new SOW.

**Credential rotation breaks client's live site**
- If FIT holds credentials that the live site depends on (example: API keys in environment variables), hand these off to the client before rotating FIT's copy.

**Client has not confirmed receipt of handoff package**
- Follow up once after 3 business days. If still no response, send a final notice and log it in Airtable.

## Related Links

- `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`
- `🪜 PROC — Client — Ongoing Communication Cadence`
- `🪜 PROC — Statement of Work — New Engagement`
