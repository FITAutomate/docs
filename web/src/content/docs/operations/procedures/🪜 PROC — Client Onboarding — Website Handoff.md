---
title: "Client Onboarding — Website Handoff"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Client Onboarding — Website Handoff |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Client |
| Estimated Time | 2–3 hours (prep + call) |
| Prereqs | FIT infrastructure setup complete, draft site built and accessible, internal review gates passed |
| Tags | client, handoff, website, content-pack, sharepoint, fit-web |

# Client Onboarding — Website Handoff

## Goal

Pass the internal review gate, deliver the FIT Web draft to the client with a complete content pack and operations guide, run a handoff call, and open the 14-day support window. End state: the client has walked through the delivery, can operate it independently, and knows exactly how to request changes.

## When to Use This

- First delivery of a FIT Web Lite, Pro, or Premium draft to a new client.
- Any significant rebuild or redesign requiring formal client handoff.

Complete `🪜 PROC — Client Onboarding — FIT Infrastructure Setup` before this procedure. Send the handoff email using `🪜 PROC — Client Onboarding — Handoff Email` after the call.

## Prerequisites

- [ ] FIT infrastructure is fully set up (SharePoint portal, GitHub repo, Slack channel)
- [ ] Draft site is deployed and accessible at a staging or live URL
- [ ] `agent-intake.md` is complete with confirmed business facts
- [ ] Content pack scaffold exists in the client repo under `client-content/`

## Procedure

### 1. Run the internal review gate

Before contacting the client, all three checklists must pass:

- [ ] `fit-ops/quality/review-checklist.md` — all items pass
- [ ] `fit-ops/quality/brand-audit.md` — all public-facing content reviewed
- [ ] `fit-ops/quality/launch-checklist.md` — all items pass

Do not proceed to handoff if any gate item fails.

Update `fit-ops/finance/project-tracking.md`: status → `review` when gate work begins.

### 2. Prepare the operations guide

Create `docs/operations.md` in the client repo. This is the client's reference for how to use and maintain what was delivered:

- How to update content (which files, what format)
- How to add or change images
- How to submit a change request (link to `🪜 PROC — Client — Change Request Process`)
- Who to contact at FIT and how
- What is out of scope and requires a new engagement

Commit it:

```bash
git add docs/operations.md
git commit -m "docs: add operations guide for client handoff"
git push origin main
```

### 3. Populate the content pack

Using `agent-intake.md` as the source of truth, populate all content pack files. Do not invent anything not confirmed — leave a `⚠️ NEEDS CLIENT INPUT:` note for any gap.

- **`workbook.md`** — all current draft content organized by page
- **`current/`** — one file per page (example: `home.md`, `services.md`, `contact.md`)
- **`templates/`** — blank versions of each page for future rewrites
- **`guides/ai-content-guide.md`** — AI copy refinement guidance
- **`submission-checklist.md`** — tailored to actual scope

Review `WELCOME.md` and confirm it reflects the correct folder structure and instructions for this client.

Commit the populated pack:

```bash
git add client-content/
git commit -m "feat: populate initial content pack for handoff"
git push origin main
```

### 4. Prepare the access summary

Compile all credentials, URLs, and accounts the client needs to operate independently. Do NOT send this via email — deliver securely (SharePoint, 1Password share, or direct handoff during the call):

- Live site URL
- Domain registrar access (if managed by client)
- Any third-party accounts set up in the client's name (Cal.com, form tools, etc.)
- Operations guide location

Do not include FIT internal credentials, API keys, or infrastructure details.

### 5. Upload content pack and operations guide to SharePoint

1. Go to the client's SharePoint portal → **Current Work** library.
2. Upload all `client-content/` files.
3. Upload `docs/operations.md`.
4. Confirm all files are accessible and readable in the portal.

### 6. Confirm the draft site passes a full walk-through

1. Open the staging or live URL.
2. Walk through every page in scope.
3. Confirm all sections render correctly.
4. Confirm contact forms, booking links, and CTAs are functional.
5. Document any known outstanding items — these must be disclosed on the call.

### 7. Schedule and run the handoff call

Schedule a 30–60 min call with the client.

On the call:
- [ ] Demo the delivered system end-to-end
- [ ] Walk through the operations guide with the client
- [ ] Confirm the client can perform key tasks themselves (update copy, submit a change request)
- [ ] Disclose any known open items
- [ ] Confirm the client can access the SharePoint portal
- [ ] Answer questions
- [ ] Confirm the client knows the 14-day post-handoff support window starts now

### 8. Send the handoff email

After the call, use `🪜 PROC — Client Onboarding — Handoff Email` to send the formal written confirmation with portal link, draft URL, and next steps.

### 9. Update records

Update the client's Airtable record:
- Status: Active → In Review
- Draft URL, handoff date, call date
- Any known open items or commitments made on the call

Update `fit-ops/finance/project-tracking.md`: status → `handoff` (in 14-day support window).

Note the handoff in the Slack client channel.

## Troubleshooting

**Internal review gate fails**
- Do not proceed. Fix the failing item and re-run the checklist before contacting the client.

**Content pack has gaps**
- Leave `⚠️ NEEDS CLIENT INPUT:` notes. Gaps are acceptable at handoff — invented content is not.

**Client cannot make the handoff call**
- Reschedule once. If scheduling remains blocked after two attempts, send the handoff email and offer an async walkthrough recording.

**Draft site has known issues at handoff**
- Disclose on the call and in the handoff email. Minor cosmetic issues do not block handoff; functional failures do.

## Related Links

- `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`
- `🪜 PROC — Client Onboarding — Handoff Email`
- `🪜 PROC — Client — Change Request Process`
- `📘 KB — FIT Web — Offerings & Tiers (Internal)`
