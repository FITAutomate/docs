---
title: "Client Onboarding — FIT Infrastructure Setup"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Client Onboarding — FIT Infrastructure Setup |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 45–60 min |
| Prereqs | Signed engagement letter and SOW, client name/slug/solution/tier confirmed |
| Tags | client, onboarding, sharepoint, github, airtable, slack, infrastructure |

# Client Onboarding — FIT Infrastructure Setup

## Goal

Provision the full FIT infrastructure stack for a new client engagement and send the initial briefing. End state: SharePoint portal, GitHub repo, local dev folder, Airtable record, Slack channel, and project tracking entry all exist — cross-referenced so any team member or agent can locate full client context from any starting point — and the client has received and acknowledged the briefing document.

## When to Use This

- Trigger: client has signed the engagement letter and SOW.
- Run this before any delivery, content, or development work begins.

Complete this procedure in full before starting `🪜 PROC — Client Onboarding — Website Handoff`.

## Prerequisites

- [ ] Signed engagement letter filed in `fit-ops/legal/`
- [ ] SOW confirmed (email confirmation received)
- [ ] Client name confirmed
- [ ] Client slug confirmed (lowercase, short, no spaces — example: `rb`)
- [ ] Solution confirmed: `fit-web`, `fit-docs`, or `fit-knows`
- [ ] Tier confirmed: `lite`, `pro`, or `premium`
- [ ] Scoping calculator completed (`fit-ops/pricing/scoping-calculator.md`)
- [ ] SharePoint admin access to `https://fitt.sharepoint.com`
- [ ] GitHub account accessible with SSH configured
- [ ] Airtable base accessible
- [ ] Slack workspace accessible

## Procedure

### 1. Create the SharePoint client portal

1. Go to `https://fitt.sharepoint.com` → **+ Create site**.
2. Select **Communication site**.
3. Select the **FIT Client Site** design.
4. Site name: `[Client Name] Client Portal` (example: `RB Full Service Salon Client Portal`).
5. Site address: use the client slug (example: `https://fitt.sharepoint.com/sites/RBFullServiceSalon`).
6. Click **Finish**.

Confirm the site was created with:
- FIT Core theme applied
- Hub navigation present
- Libraries: Current Work, Past Work, Terms and Conditions

### 2. Upload SOW to the SharePoint portal

1. Go to the new portal → **Terms and Conditions** library.
2. Upload the confirmed SOW document.
3. Set library permissions to read-only for the client.

The approval signal is the client's email confirmation — not a signature workflow.

### 3. Create the GitHub client repo

Follow `🪜 PROC — GitHub — New Client Repo Setup` in full.

Repo name: `client-[slug]-[solution]-[tier]`

Confirm the repo exists on GitHub, `.agent/CONTEXT.md` is populated, and the initial scaffold is pushed before continuing.

### 4. Confirm local dev folder

Confirm the cloned repo exists at:

```
D:\fit-clients\client-[slug]-[solution]-[tier]\
```

### 5. Create the Airtable record

Add a new record to the FIT client tracking Airtable base:
- Client name, slug, solution + tier
- Start date
- Status: Active
- SharePoint URL, GitHub repo name, live URL (if known)

### 6. Create the Slack channel

1. Create channel: `client-[slug]` (example: `client-rb`).
2. Add relevant team members.
3. Pin the SharePoint portal URL and GitHub repo URL.

### 7. Update clients.yaml

Add an entry to `fit-solutions/registry/clients.yaml`:

```yaml
- client: [Client Name]
  slug: [slug]
  solution: [fit-web|fit-docs|fit-knows]
  tier: [lite|pro|premium]
  repo: client-[slug]-[solution]-[tier]
  start_date: YYYY-MM-DD
  status: active
  notes: "Local: D:/fit-clients/client-[slug]-[solution]-[tier]. Live: [URL]"
  portals:
    - type: sharepoint
      name: "[Client Name] Client Portal"
      url: "https://fitt.sharepoint.com/sites/[SiteSlug]"
```

### 8. Create project tracking entry

Add an entry to `fit-ops/finance/project-tracking.md`:
- Client name and slug
- Solution + tier
- Start date and milestone dates
- Status: Active
- Any known risks or dependencies

### 9. Prepare and send the briefing document

Using `fit-ops/sales/proposal-template.md` as a base, prepare a short briefing covering:
- What FIT is delivering and at what tier
- What the client needs to provide (content, assets, access) and by when
- Timeline with key milestones
- How to reach FIT during the engagement
- How changes outside scope are handled (reference `🪜 PROC — Client — Change Request Process`)

Send to the client and confirm acknowledgement before proceeding.

### 10. Confirm all components exist and briefing is acknowledged

- [ ] Signed engagement letter in `fit-ops/legal/`
- [ ] SharePoint portal created with FIT Client Site design
- [ ] SOW uploaded to Terms and Conditions library
- [ ] GitHub repo exists, `.agent/CONTEXT.md` populated, initial scaffold pushed
- [ ] Local clone exists under `D:\fit-clients\`
- [ ] Airtable record created and populated
- [ ] Slack channel created with portal and repo URLs pinned
- [ ] `fit-solutions/registry/clients.yaml` entry added
- [ ] `fit-ops/finance/project-tracking.md` entry created
- [ ] Briefing document sent and client has acknowledged

### 11. Write the VAULT LOG entry

```
## VAULT LOG
date: YYYY-MM-DD
repo: fit-ops
agent: onboarding-sop
action: Client [name] onboarded to [solution] [tier]
status: implemented
next: First content delivery or discovery session
open_questions: []
```

## Troubleshooting

**FIT Client Site design not available in SharePoint**
- The site design has not been registered. See `🪜 PROC — SharePoint — FIT Client Site Design Setup`.

**GitHub repo name conflict**
- Confirm the slug is unique. Append a differentiator if needed (example: `client-acme2-fit-web-lite`).

**Client does not acknowledge the briefing**
- Follow up after 2 business days. Do not begin delivery work until the briefing is acknowledged.

## Related Links

- `🪜 PROC — GitHub — New Client Repo Setup`
- `🪜 PROC — Statement of Work — New Engagement`
- `🪜 PROC — Client Onboarding — Website Handoff`
- `🪜 PROC — Client Onboarding — Handoff Email`
- `fit-solutions/registry/clients.yaml`
