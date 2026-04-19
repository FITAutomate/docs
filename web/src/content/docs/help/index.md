---
title: Help
description: Troubleshooting and support path for maintaining this docs site.
sidebar:
  order: 0
---

Use this section when something is unclear, not working, or blocked.

## Common support topics

- page is hard to find
- wording is unclear
- link goes to the wrong place
- update is pushed but not visible on the live site
- you are unsure whether a change should be a quick edit or a larger draft

Use [Search](/help/search/) first when you know the topic but not the page location.

## Quick triage path

1. Confirm where you are in the workflow: `Writing` or `Publishing`.
2. Re-check the relevant step page:
   - [Drafting](/writing/drafting/)
   - [Live Page Edits](/writing/live-page-edits/)
   - [Preview](/publishing/preview/)
   - [Git Status](/publishing/git-status/)
   - [Git Commit](/publishing/git-commit/)
   - [Git Push](/publishing/git-push/)
3. Verify what changed and where:
   - did the file update in GitHub?
   - did the branch update you expected?
4. If deployment is configured, verify deploy status for your environment.

## Push vs publish (important)

- `git push` means your commit is synced to the remote repository.
- `publish` means your deployment system updated the live site.
- depending on your setup, publish may happen:
  - automatically after push to a specific branch
  - after pull request merge
  - after a manual deployment step

If the repo updated but the site did not, the issue is usually in deployment, not in Git.

## When to escalate

Escalate to your project owner when:

- deployment fails repeatedly
- access/permissions block publishing
- the required workflow for your environment is unclear
- you suspect the template itself needs correction
