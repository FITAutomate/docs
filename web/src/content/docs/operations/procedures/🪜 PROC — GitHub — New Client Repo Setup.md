---
title: "GitHub — New Client Repo Setup"
description: ""
---

| Field | Value |
| --- | --- |
| Title | GitHub — New Client Repo Setup |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | GitHub |
| Estimated Time | 15–20 min |
| Prereqs | Git installed, SSH key configured, client slug confirmed, solution and tier confirmed, FIT template repo available in FITAutomate org |
| Tags | github, repo, client, setup, naming-convention, template |

# GitHub — New Client Repo Setup

## Goal

Generate a new client GitHub repository from the appropriate FIT solution template, clone it to the correct local client root, populate the agent context file, and replace all placeholders. End state: a private repo exists on GitHub, cloned locally under `D:/fit-clients/`, with `.agent/CONTEXT.md` populated and an initial commit pushed.

## When to Use This

- Any new client engagement that involves a deliverable managed in a GitHub repo (FIT Web, FIT Docs, or FIT Knows).
- Run this as part of `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`.

## Prerequisites

- [ ] Client slug is confirmed (lowercase, short, no spaces — example: `rb`)
- [ ] Solution confirmed — check `fit-solutions/registry/solutions.yaml` to confirm the solution and tier are available
- [ ] Tier confirmed: `lite`, `pro`, or `premium`
- [ ] FIT template repo exists in the FITAutomate org for this solution and tier
- [ ] GitHub account is accessible and SSH key is configured
- [ ] `D:/fit-clients/` directory exists on the local machine

## Procedure

### 1. Confirm the repo name

Client repo naming format: `client-[slug]-[solution]-[tier]`

Examples:
- `client-rb-fit-web-lite`
- `client-acme-fit-docs-pro`

### 2. Generate from the FIT template

1. Go to the template repo in the FITAutomate org (example: `FITAutomate/fit-docs-lite`).
2. Click **Use this template** → **Create a new repository**.
3. Set **Owner** to the client's GitHub account (preferred) or the FITAutomate org.
4. **Repository name:** `client-[slug]-[solution]-[tier]`.
5. Set visibility to **Private**.
6. Click **Create repository**.

### 3. Clone to the FIT client root

```bash
cd D:/fit-clients
git clone git@github.com:<owner>/client-[slug]-[solution]-[tier].git
cd client-[slug]-[solution]-[tier]
```

### 4. Populate `.agent/CONTEXT.md`

Open `.agent/CONTEXT.md` and fill in the client block:

```yaml
client_name: [Client Name]
solution: [FIT Web | FIT Docs | FIT Knows]
tier: [Lite | Pro | Premium]
start_date: YYYY-MM-DD
delivery_lead: John
```

### 5. Replace all placeholders

Search for placeholder tokens across all files and replace with actual client values:

| Token | Replace with |
| --- | --- |
| `[CLIENT NAME]` | Full client name |
| `[CLIENT SLUG]` | Client slug (lowercase) |
| `[DOMAIN]` | Client domain |

```bash
grep -r "\[CLIENT NAME\]\|\[CLIENT SLUG\]\|\[DOMAIN\]" .
```

Replace every occurrence before the initial commit.

### 6. Verify clean state

Before committing, confirm:

- [ ] No FIT Automate internal content remains in the repo
- [ ] No real credentials in any file (only `.env.example` with placeholder values)
- [ ] `README.md` describes this client engagement accurately
- [ ] `.agent/CONTEXT.md` is fully populated
- [ ] All placeholder tokens are replaced

### 7. Initial commit and push

```bash
git add .
git commit -m "chore: initialise client repo from fit-[solution]-[tier] template"
git push -u origin main
```

### 8. Register in clients.yaml

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

## Troubleshooting

**Template repo not available for this solution/tier**
- Do not use a blank repo as a substitute. Build the template first. See `🪜 PROC — GitHub — Dev to Template Promotion`.

**D:/fit-clients/ does not exist**
- Create it: `mkdir D:/fit-clients`

**Naming conflict on GitHub**
- Confirm the slug is unique. If a conflict exists, append a differentiator (example: `client-acme2-fit-web-lite`).

**Placeholders missed after initial commit**
- Run the grep command again, fix remaining occurrences, and create a follow-up commit.

## Related Links

- `🪜 PROC — Client Onboarding — FIT Infrastructure Setup`
- `🪜 PROC — GitHub — Dev to Template Promotion`
- `🪜 PROC — GitHub — Clone Workflow`
- `fit-solutions/registry/clients.yaml`
- `fit-solutions/registry/solutions.yaml`
