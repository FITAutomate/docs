---
title: Marketing library rules
description: Rules and structure for the Marketing documentation library.
---

# 👮 Marketing Library Rules

This folder contains **Service** pages.



**NEEDS EDITING**

## Purpose

Services describe advisory, enablement, and done-with-you offerings.

## File Naming (Required)

- Preferred format: `🏢 <Service Name>.md`
- Keep names short and client-readable.
- Do not include `DRAFT` in published filenames.

Examples:
- `🏢 AI Enablement.md`
- `🏢 AI Readiness Audit.md`
- `🏢 Intelligent Automation.md`

## Minimum Service Skeleton (Required)

```markdown
| Field | Value |
| --- | --- |
| Service | <Service Name> |
| Audience | <Primary Buyer/User> |
| Publish Ready | <Yes / No> |
| Last Updated | <YYYY-MM-DD> |

# <Service Name>

## What This Service Does
## Who It Is For
## What You Get
## How It Works
## Outcomes
## FAQ
## Next Step
```

## Heading Rule (Required)

- Exactly one H1 per page.
- H1 is placed below the metadata table.
- Use H2/H3 structure consistently for TOC.

## Testing Policy

- `docs/Services/` is approved for ongoing promote/rollback testing.
- For testing sessions, keep scope to Services/Solutions only.
- Other top-level libraries are read-only during testing unless explicitly approved.
