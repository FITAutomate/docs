---
title: "Codex — PIV Loop — Astro"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Codex — PIV Loop — Astro |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Codex |
| App | Cursor |
| Estimated Time | 15–60 min |
| Prereqs | Codex access, GitHub repo, PIV Loop skill installed in Codex, /public assets staged |
| Tags | piv, codex, astro, website-factory, git-workflow, delivery |

# Codex — PIV Loop — Astro

## Goal

Execute a structured Plan → Implement → Validate (PIV) cycle for a scoped change to an Astro website project, resulting in a merge-ready PR that John approves and merges manually.

## When to Use This

- Any scoped website change on an Astro project managed through Codex.
- Image updates, layout changes, copy revisions, component additions, or theme refinements.
- Triggered by John saying: "PIV", "PIV loop", "PIV image update", "PIV [task description]", or similar.

One PIV = one issue, one branch, one PR, one merge. Do not stack PIVs unless explicitly directed.

## Prerequisites

- [ ] Codex is open with the target Astro project in context
- [ ] PIV Loop skill is installed and active in Codex
- [ ] GitHub repo is connected and accessible from Codex
- [ ] All required assets (images, copy, references) are staged in `/public` or available locally
- [ ] `main` branch is clean (no uncommitted changes)
- [ ] `npm run build` passes on `main` before starting

## Procedure

### 1. Trigger and scope clarification

John initiates with a PIV trigger phrase and task description.

The agent clarifies scope before touching any code or git:
- What files or components are in scope?
- What does "done" look like? (acceptance criteria candidates)
- Are there asset dependencies not yet staged?
- Any constraints (example: don't touch nav, keep existing colour palette)?

**Gate:** Agent does not proceed until John confirms scope or gives an explicit go-ahead.

### 2. Plan

Agent produces a short written plan including:

- List of files expected to change
- Draft acceptance criteria (AC1, AC2, AC3…) — these become PR checkboxes
- Any known risks or fallback decisions (example: no matching image → use fallback asset, documented inline)

**Gate:** John reviews and approves the plan. A simple "go" or "looks good" is sufficient.

### 3. Git setup — before any code changes

Agent executes in this exact order:

1. **Create GitHub Issue**
   - Title format: `[PIV] <Task description>`
   - Body: paste the approved plan + acceptance criteria from Step 2
   - Note the issue number (example: `#3`)

2. **Create branch off `main`**
   - Naming format: `piv/<short-slug>-<issue-number>`
   - Example: `piv/image-update-3`
   - All implementation work happens exclusively on this branch

> Never implement on `main`. Never reuse a PIV branch for a different PIV.

### 4. Implement

Agent makes all scoped changes on the PIV branch:

- One concern per commit — no "wip", "misc", or bundled unrelated changes
- Commit message format: `<type>: <description> — closes #<issue-number>`
- Add inline comments explaining non-obvious decisions or fallback choices
- If a decision diverges from the plan, note it in the commit message or inline — do not silently deviate

### 5. Open pull request

Agent opens a PR from the PIV branch to `main`.

**PR title:** `[PIV] <Task description>`

**PR body must include:**
- Link to the issue (`Closes #<n>`)
- Summary of what changed and why
- Acceptance Criteria section with GitHub task-list checkboxes — one per criterion:

```
## Acceptance Criteria
- [ ] AC1: All pages load without build errors
- [ ] AC2: Image assets resolve correctly on all routes
- [ ] AC3: ...
```

- Testing notes (example: "Verify portrait crop on About page manually")

### 6. Validate

Agent works through each AC checkbox one by one:

- For each criterion: confirm it passes, check the box, post a comment explaining how it was verified
- If a criterion fails: fix on the same branch, re-run the check, re-verify before proceeding
- Do not mark criteria passed without evidence

When all boxes are checked, agent posts:

```
All acceptance criteria verified — merge ready. @John please review.
```

### 7. Handoff to John

Agent posts a structured handoff summary in the conversation:

```
PIV [Task Description] is complete and ready for your review.

Issue:  #<n>
Branch: piv/<slug>-<n>
Commit: <hash> <message>
PR:     #<n>

What changed:
- <file or component> — <what and why>

Validation completed:
- npm run build
- Route checks passed
- AC1–ACn all verified with comments

Manual spot-checks for you:
1. <Specific visual or behavioural thing John should eyeball>
2. <Fallback asset or decision that needs John's sign-off>

I did not merge to main.
```

**Gate:** John reviews the PR and either:
- **Merges** — PIV is closed
- **Requests changes** — agent implements on the same branch, re-validates only affected criteria, re-posts the merge-ready comment

> The agent never merges to `main`. Merge is always John's action.

## Troubleshooting

| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| `npm run build` fails during validation | Code change introduced a compile error | Fix on same branch, re-run build, re-validate the AC that covers build |
| Image asset 404 on route check | Asset not in `/public` or path mismatch | Stage correct asset or document fallback inline, re-validate |
| PR checkbox can't be checked | PR body formatting issue | Edit PR body to fix markdown |
| Agent deviated from approved plan | Scope crept during implementation | Agent must document deviation in commit/comment and flag in handoff summary |
| Build passes but visual looks wrong | CSS/layout issue not caught by build | Flag in handoff spot-checks; do not self-merge to fix |
| Codex Astro MCP unavailable | MCP not connected or timed out | Reconnect MCP; use `npm run build` + manual route check as fallback |

## Related Links

- `🪜 PROC — GitHub — Clone Workflow`
- Codex PIV Loop skill definition: `.codex/skills/piv-loop.md` (in project repo)
