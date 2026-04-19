---
title: "GitHub — New Blank Repo Setup"
description: ""
---

| Field | Value |
| --- | --- |
| Title | GitHub — New Blank Repo Setup |
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
| Prereqs | Git installed, GitHub account accessible, SSH key configured |
| Tags | github, repo, setup, git, branch-protection |

# GitHub — New Blank Repo Setup

## Goal

Create a new blank GitHub repository under the FIT personal account, clone it locally to the correct root, add a standard .gitignore and README, and push the initial commit. End state: a clean repo exists on GitHub and locally with branch protection on `main`.

## When to Use This

- Starting a new FIT internal project that needs its own repository.
- Any net-new tool, script, or service that will be version-controlled.

Use `🪜 PROC — GitHub — New Repo from Template` instead if a FIT template exists for the project type. Use `🪜 PROC — GitHub — New Client Repo Setup` for all client work.

## Prerequisites

- [ ] GitHub account is accessible
- [ ] SSH key is configured (`ssh -T git@github.com` succeeds)
- [ ] Git is installed locally
- [ ] Project name is decided using the `fit-` naming convention (example: `fit-doc-mgmt`, `fit-automation-core`)

## Procedure

### 1. Create the repository on GitHub

1. Go to [https://github.com/new](https://github.com/new).
2. Set **Owner** to the FIT personal account (not an org).
3. **Repository name:** use `fit-` prefix, lowercase, hyphens (example: `fit-doc-mgmt`).
4. Set visibility to **Private** unless explicitly intended to be public.
5. Leave all initialization checkboxes **unchecked** — do not add README, .gitignore, or license from GitHub.
6. Click **Create repository**.

### 2. Clone to the FIT dev root

```bash
cd D:/dev/github
git clone git@github.com:<your-username>/<repo-name>.git
cd <repo-name>
```

### 3. Add .gitignore

Create `.gitignore` appropriate for the project type. At minimum:

```
.env
.env.local
*.log
node_modules/
dist/
build/
.DS_Store
Thumbs.db
```

### 4. Add README stub

Create `README.md` with at minimum:

```markdown
# <repo-name>

> Short one-line description of what this repo does.

## Purpose

[What problem does this solve? What does it contain?]

## Setup

[How to get it running locally.]
```

### 5. Commit and push

```bash
git add .gitignore README.md
git commit -m "init: repo scaffold"
git push -u origin main
```

### 6. Configure branch protection on main

1. Go to the repo on GitHub → **Settings** → **Branches**.
2. Click **Add branch protection rule**.
3. Branch name pattern: `main`.
4. Enable:
   - **Require a pull request before merging**
   - **Do not allow bypassing the above settings**
5. Click **Create**.

## Troubleshooting

**Push rejected: remote already has commits**
- The repo was initialized on GitHub (README/gitignore added). Delete and recreate with no initialization, or pull first: `git pull origin main --allow-unrelated-histories`.

**Branch protection not available**
- Branch protection requires at least one commit on `main`. Complete Step 5 before Step 6.

**Wrong account pushing**
- Confirm SSH key is associated with the correct account: `ssh -T git@github.com`.

## Related Links

- `🪜 PROC — GitHub — Clone Workflow`
- `🪜 PROC — GitHub — New Repo from Template`
- `🪜 PROC — GitHub — New Client Repo Setup`
