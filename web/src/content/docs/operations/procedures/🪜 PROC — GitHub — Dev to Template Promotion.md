---
title: "GitHub — Dev to Template Promotion"
description: ""
---

| Field | Value |
| --- | --- |
| Title | GitHub — Dev to Template Promotion |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | GitHub |
| Estimated Time | 30–60 min |
| Prereqs | Dev repo (`*-dev`) on clean main, target template repo in FITAutomate org exists, promotion gate checks pass |
| Tags | github, template, promotion, fitautomate, dev-workflow |

# GitHub — Dev to Template Promotion

## Goal

Promote a validated dev baseline from a `*-dev` repo into the corresponding FITAutomate org template repo. End state: the template repo contains the promoted baseline, passes build checks, contains no machine-local paths, and is ready for client repo generation.

## When to Use This

- A dev iteration has been validated and is ready to become the new template baseline.
- For the first promotion of a new solution tier (example: `docs-lite-dev` → `fit-docs-lite`).

Do not promote until all promotion gate checks pass. Client repos generated from an unstable template are hard to fix.

## Repo lifecycle

```
*-dev (D:\dev\github\)
    → [promotion gate passes]
        → fit-* template (D:\FIT-AUTOMATE-ORG\)
            → client-[slug]-[solution]-[tier] (D:\fit-clients\)
```

## Prerequisites

- [ ] Solution and tier confirmed in `fit-solutions/registry/solutions.yaml` and `fit-solutions/registry/repos.yaml`
- [ ] Source dev repo is on clean `main` with all work committed
- [ ] Target template repo in `D:\FIT-AUTOMATE-ORG\` is on clean `main`
- [ ] No active client repo generation is pending on the current template

## Procedure

### 1. Pre-AI bootstrap — verify repo state

Before any AI-assisted session in the dev repo, confirm:

- [ ] Repo role is clearly `dev` — dev repos live in `D:\dev\github\`
- [ ] Template repos live in `D:\FIT-AUTOMATE-ORG\`
- [ ] Client repos live in `D:\fit-clients\`
- [ ] `README.md` describes the repo purpose and current build objective
- [ ] `.gitignore` excludes local env/secrets artifacts
- [ ] `.env.example` contains placeholders only — no real credentials
- [ ] `.agent/CONTEXT.md` exists with correct content
- [ ] No secrets committed
- [ ] Working tree is clean before AI implementation begins

### 2. Run the promotion gate

All checks must pass before promotion proceeds.

**Build and runtime checks:**

- [ ] Install succeeds from a clean clone
- [ ] Local dev server runs
- [ ] Production build succeeds
- [ ] No critical lint/type/build errors

**Contract and governance checks:**

- [ ] Folder contract unchanged from sprint baseline
- [ ] `README.md` and onboarding docs match real commands and paths
- [ ] No ADR conflicts introduced without an explicit draft amendment

**Template readiness checks:**

- [ ] Starter pack is present and readable
- [ ] `.env.example` complete with placeholders only
- [ ] `.agent/CONTEXT.md` is present and template-safe (no machine-local absolute paths)
- [ ] No dev-only scratch files in the repo root

Do not proceed if any gate check fails.

### 3. Tag the source baseline in the dev repo

From the dev repo:

```powershell
Set-Location D:\dev\github\[dev-repo-name]
git checkout main
git pull --ff-only origin main
git tag -a [solution]-template-baseline-YYYYMMDD -m "Promote [dev-repo] baseline to [template-repo]"
git push origin [solution]-template-baseline-YYYYMMDD
```

Record the exact tag value — you will need it in the promotion record.

### 4. Copy baseline into template repo

Preferred method on Windows: remove old tracked baseline files from the target, copy source files in.

```powershell
# Source repo (confirm clean)
Set-Location D:\dev\github\[dev-repo-name]
git checkout main
git pull --ff-only origin main

# Target repo (confirm clean)
Set-Location D:\FIT-AUTOMATE-ORG\[template-repo-name]
git checkout main
git pull --ff-only origin main

# Remove old baseline (adjust paths for this solution's folder contract)
Remove-Item -Recurse -Force .agent, docs, README.md -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force web, .env.example, .gitignore -ErrorAction SilentlyContinue

# Copy source baseline into target
Copy-Item D:\dev\github\[dev-repo-name]\.agent -Destination D:\FIT-AUTOMATE-ORG\[template-repo-name] -Recurse
Copy-Item D:\dev\github\[dev-repo-name]\docs -Destination D:\FIT-AUTOMATE-ORG\[template-repo-name] -Recurse
Copy-Item D:\dev\github\[dev-repo-name]\web -Destination D:\FIT-AUTOMATE-ORG\[template-repo-name] -Recurse
Copy-Item D:\dev\github\[dev-repo-name]\README.md -Destination D:\FIT-AUTOMATE-ORG\[template-repo-name]
Copy-Item D:\dev\github\[dev-repo-name]\.env.example -Destination D:\FIT-AUTOMATE-ORG\[template-repo-name]
Copy-Item D:\dev\github\[dev-repo-name]\.gitignore -Destination D:\FIT-AUTOMATE-ORG\[template-repo-name]
```

Adjust the folder list to match the actual root contract for this solution and tier.

### 5. Normalize `.agent/CONTEXT.md` for template use

Open `D:\FIT-AUTOMATE-ORG\[template-repo-name]\.agent\CONTEXT.md` and remove all machine-specific content:

- **Remove:** `D:\...`, `C:\...`, user profile paths, local skills paths
- **Replace with:** org-safe relative references or plain-language placeholders
- **Keep:** repo role (template), purpose, solution, tier

Minimum requirement: no absolute local paths remain.

### 6. Validate the template repo

From the template repo:

```powershell
Set-Location D:\FIT-AUTOMATE-ORG\[template-repo-name]\web
npm install
npm run build
```

Promotion is not complete until both commands succeed.

### 7. Review and commit

```powershell
Set-Location D:\FIT-AUTOMATE-ORG\[template-repo-name]
git diff --stat
```

Review the diff. Confirm only the intended baseline changes are present — no dev scratch files, no local paths, no internal FIT data.

```powershell
git add .
git commit -m "chore: promote [dev-repo] baseline [tag-name] to template"
git push origin main
```

### 8. Post-promotion verification

- [ ] `README.md` describes the template repo accurately
- [ ] Root contract folders match what was agreed for this solution
- [ ] `.agent/CONTEXT.md` is template-safe
- [ ] `npm install` succeeds in the template `web/` directory
- [ ] `npm run build` succeeds in the template `web/` directory
- [ ] No legacy files from the previous baseline remain
- [ ] Working tree diff matches the intended promotion only

### 9. Record the promotion

Document the following for the first promotion of each solution tier:

- Source tag used
- Source commit SHA
- Target commit SHA
- List of promoted root items
- Target build result
- Any deviations from this procedure

File the record in `fit-ops/` or as a note in the dev repo's CHANGELOG.

## Troubleshooting

**Promotion gate fails**
- Fix the failing item in the dev repo first. Commit, re-run gate, then re-attempt promotion. Never promote a failing baseline.

**Build fails in the template repo after copy**
- Do not commit the broken state. Run `git restore .` in the template repo to discard the copy. Fix the source issue in the dev repo, re-run gate checks, then re-attempt.

**Machine-local path found in template after promotion**
- Fix in the template repo before committing. Update `CONTEXT.md` and any affected files.

**Rollback needed after a bad commit**
```powershell
git revert <promotion-commit-sha>
git push origin main
```
Fix the source baseline in the dev repo, tag a new commit, and run this procedure again.

## Related Links

- `🪜 PROC — GitHub — New Client Repo Setup`
- `🪜 PROC — GitHub — New Repo from Template`
- `fit-solutions/registry/solutions.yaml`
- `fit-solutions/registry/repos.yaml`
