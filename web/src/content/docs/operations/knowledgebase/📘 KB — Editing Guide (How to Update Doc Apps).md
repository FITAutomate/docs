---
title: "Editing Guide (How to Update Doc Apps)"
description: ""
---

﻿# 📘 KB — Editing Guide (How to Update Doc Apps)

| Field            | Value                                   |
| ---------------- | --------------------------------------- |
| Title            | Editing Guide (How to Update Doc Apps)  |
| Type             | Overview                                |
| KB_TARGET        | INTERNAL                                |
| Visibility       | Internal                                |
| Publish Ready    | Yes                                     |
| Redaction Needed | None                                    |
| Version          | 1.0                                     |
| Owner            | John Bewley                             |
| Last Updated     | 2026-02-05                              |
| Categories       | Documentation                           |
| Tags             | editing, docs, style                    |

# Editing Guide (How to Update Doc Apps)

Use this guide for quick edits without needing a rebuild expert. It covers the common edits and where to make them.
These apply to both FIT Blog and FIT Docs.

## Where to edit

- **General pages:** Find the file under `docs/` and edit directly.
- **SOPs:** `docs/sops/` (folder name lowercase; “SOPs” in documentation)
- **Procedures:** `docs/Procedures/`
- **Knowledge Base:** `docs/Knowledge Base/`
- **Blog posts:** `docs/blog/posts/`

## Quick rules (always follow)

- Keep the **metadata table** at the top of SOP/Procedure/KB pages.
- Use **H1** once for the title, then **H2** for sections.
- Keep code blocks small and labeled (e.g., `bash`, `powershell`).
- Avoid images in KB/SOPs; images are allowed only in Procedures.

## Add a blog post

Create a new file in `docs/blog/posts/` using kebab-case names like:

`2026-02-05-daily-update.md` or `daily-update-2026-02-05.md`

Use this front matter template:

```
---
title: Daily Update - 2026-02-05
description: Short internal update.
date: 2026-02-05
authors:
  - john-bewley
tags:
  - now
  - update
---
```

Write the content below the front matter.

## Add tags to any page

In the front matter, add:

```
tags:
  - example
  - another-tag
```

Tags are listed automatically on the Tags page.

## Common formatting

- Bold: `**important**`
- Lists: use `-` for bullets
- Links: `[title](path-or-url)`
- Tables: keep headers simple and aligned

## If something looks wrong

- Check for a missing closing fence in code blocks.
- Make sure the file is saved as UTF-8.
- Keep titles consistent with the file name and metadata table.
