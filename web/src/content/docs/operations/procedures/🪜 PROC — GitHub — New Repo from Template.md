---
title: "GitHub — New Repo from Template"
description: ""
---

| Field | Value |
| --- | --- |
| Title | GitHub — New Repo from Template |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | GitHub |
| Estimated Time | 10–15 min |
| Prereqs | Git installed, SSH key configured, target template repo identified |
| Tags | github, repo, template, setup |

> ⚠️ **FLAG:** Keep the template table in Step 1 current. Add each new template as it is promoted to the FITAutomate org.

# GitHub — New Repo from Template

## Goal

Create a new GitHub repository from an existing FIT template, clone it locally, and complete the post-clone configuration. End state: a new repo exists with the template's scaffold in place, customized for the new project.

## When to Use This

- A FIT template exists that matches the project type (example: a standard Astro site template, an n8n project scaffold, a client content pack template).
- You want consistent structure and boilerplate without starting from scratch.

Use `🪜 PROC — GitHub — New Blank Repo Setup` when no matching template exists. Use `🪜 PROC — GitHub — New Client Repo Setup` for all client work.

## Prerequisites

- [ ] GitHub account is accessible
- [ ] SSH key is configured
- [ ] Target FIT template repository is identified
- [ ] New project name is decided following the `fit-` naming convention

## Procedure

### 1. Identify the correct FIT template

FIT template repos live in the **FITAutomate org** on GitHub. Local copies are under `D:\FIT-AUTOMATE-ORG\`.

| Template Repo | Use For | Local Path |
| --- | --- | --- |
| `FITAutomate/fit-docs-lite` | FIT Docs Lite client deployments | `D:\FIT-AUTOMATE-ORG\fit-docs-lite` |
| *(add templates as promoted)* | — | — |

Confirm the template is current before using it. If the template has not been recently promoted from dev, check before proceeding. See `🪜 PROC — GitHub — Dev to Template Promotion`.

### 2. Create a new repo from the template on GitHub

1. Go to the FIT template repository on GitHub (FITAutomate org).
2. Click **Use this template** → **Create a new repository**.
3. Set **Owner** to the FIT personal account for dev/internal repos, or the FITAutomate org for client-facing repos.
4. **Repository name:** follow the `fit-` naming convention for dev repos (example: `fit-astro-site-projectname`). For client repos, use `🪜 PROC — GitHub — New Client Repo Setup` instead.
5. Set visibility to **Private** unless explicitly public.
6. Click **Create repository from template**.

### 3. Clone to the FIT dev root

```bash
cd D:/dev/github
git clone git@github.com:<your-username>/<new-repo-name>.git
cd <new-repo-name>
```

### 4. Customize for the new project

Complete any template-specific setup steps documented in the template's own README. At minimum:

1. Update `README.md` — replace template placeholder content with project-specific description and setup instructions.
2. Update any configuration files that reference the template name (example: `package.json` name field, env file templates).
3. Remove or archive any template-specific example files that do not apply.

### 5. Commit customizations and push

```bash
git add .
git commit -m "init: configure from FIT template for <project-name>"
git push origin main
```

### 6. Configure branch protection on main

1. GitHub → repo **Settings** → **Branches** → **Add branch protection rule**.
2. Branch name pattern: `main`.
3. Enable **Require a pull request before merging**.
4. Click **Create**.

## Troubleshooting

**"Use this template" button is not visible**
- Confirm the repo has been designated as a template in its settings (**Settings** → **General** → **Template repository** checkbox).

**Template content is outdated**
- Do not use an outdated template without first updating it. Raise with the template owner.

**Post-clone customization missed something**
- Search the cloned repo for the template repo name: `grep -r "<template-name>" .` — replace all occurrences.

## Related Links

- `🪜 PROC — GitHub — New Blank Repo Setup`
- `🪜 PROC — GitHub — New Client Repo Setup`
- `🪜 PROC — GitHub — Clone Workflow`
