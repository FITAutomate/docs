---
title: "n8n — New Workflow Setup"
description: ""
---

| Field | Value |
| --- | --- |
| Title | n8n — New Workflow Setup |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | n8n |
| Estimated Time | 15–30 min |
| Prereqs | n8n running in Docker, credentials pre-configured in n8n credential store |
| Tags | n8n, workflow, automation, naming-convention, credentials |

# n8n — New Workflow Setup

## Goal

Create a new n8n workflow following FIT naming conventions, connect credentials using the named credential pattern, test the workflow end-to-end, and activate it. End state: workflow is named correctly, uses no hardcoded credentials, passes a test run, and is active in the correct n8n environment.

## When to Use This

- Creating any new automation workflow in FIT n8n.
- Any time a trigger, integration, or scheduled job needs to be built in n8n.

Do not activate a workflow before it has passed a test run. Do not hardcode credentials in workflow nodes — use the n8n credential store exclusively.

## Prerequisites

- [ ] n8n is running (`docker compose ps` shows n8n as `Up`)
- [ ] Access to the n8n UI at `http://localhost:5678` (or the configured URL)
- [ ] Required credentials already exist in the n8n credential store
- [ ] Workflow purpose and trigger type are decided

## Procedure

### 1. Name the workflow before building

Follow the FIT n8n naming convention before creating the workflow:

**Format:** `{CATEGORY} — {Description} ({Trigger or I/O})`

| Category Prefix | Use For |
| --- | --- |
| `FIT DEV` | Internal dev tooling and automation |
| `FIT OPS` | Operations and infrastructure workflows |
| `UTIL` | Reusable utility workflows (no business context) |
| `PROD` | Production-facing client or marketing workflows |

Examples:
- `FIT DEV — Export n8n Workflows → Airtable`
- `FIT OPS — Automation Run Logger (Webhook)`
- `UTIL — Resolve OneDrive Folder ID (path|url|id → id)`
- `PROD Marketing — Early Access Lead Capture (Webhook)`

> ⚠️ **FLAG:** Separator style — use `—` (em dash) consistently. Some existing workflows use `-` (hyphen). Standardize to `—` when editing.

### 2. Create the workflow in n8n

1. Open n8n UI → **Workflows** → **New workflow**.
2. Immediately rename it using the correct name from Step 1. Do not leave it as "My workflow" or untitled.

### 3. Add and configure the trigger node

1. Add the trigger node appropriate for the workflow type:
   - **Webhook** — for HTTP-triggered workflows
   - **Schedule** — for time-based jobs
   - **n8n Form Trigger** — for form intake
   - Other built-in triggers as appropriate
2. Configure the trigger settings. Note the webhook URL if applicable.

### 4. Build the workflow nodes

1. Add nodes in execution order.
2. For every node that requires authentication:
   - Open the **Credential** dropdown.
   - Select the pre-existing named credential from the store.
   - Never paste API keys, tokens, or passwords directly into node fields.
3. Use **Expression** mode for dynamic values, not hardcoded strings where data should flow.

### 5. Run a test execution

1. Click **Test workflow** (or use **Execute workflow** with sample input for webhook-triggered workflows).
2. Verify each node executes without error.
3. Confirm output data matches expectations at each step.
4. Fix any errors before proceeding. Do not activate an untested workflow.

### 6. Activate the workflow

Once the test run passes:

1. Toggle **Active** to on (top right of the workflow editor).
2. Confirm the workflow appears in the **Workflows** list with status **Active**.

### 7. Document the workflow

Add a **Sticky Note** node to the workflow canvas with:

```
Purpose: [What this workflow does]
Trigger: [What triggers it]
Owner: FIT Automate
Created: YYYY-MM-DD
```

## Troubleshooting

**Workflow activates but does not trigger**
- Confirm the trigger is correctly configured (webhook URL registered, schedule is active).
- For webhook triggers: confirm the external system is sending to the correct URL.

**Credential error on execution**
- Open the failing node and reselect the credential from the dropdown.
- If the credential does not exist, create it in **Settings** → **Credentials** before returning to the workflow.

**Node output is empty or unexpected**
- Use the **pin data** feature on the preceding node to inspect what data is flowing.
- Check expression syntax — common issue is referencing the wrong node name.

**Workflow shows as Active but is not running on schedule**
- Confirm the n8n Docker container is running: `docker compose ps`.
- Check n8n logs for scheduler errors: `docker compose logs n8n`.

## Related Links

- [n8n workflow documentation](https://docs.n8n.io/workflows/)
- [n8n credentials documentation](https://docs.n8n.io/credentials/)
- `🪜 PROC — n8n — Deployment — Docker + Cloudflare`
