---
title: Git Push
description: Send committed updates to the remote repository before deployment.
sidebar:
  order: 4
---

Push sends your committed updates to the remote repository.

In FIT Docs Lite, push is required before publish, but push alone does not always update the live site.

## Before push

- preview is complete
- `git status` looks correct
- commit message clearly explains the update

## Push

```bash
git push
```

## After push

- confirm your changes appear in the remote repository
- run or confirm your publish/deploy step for this project
- check the live docs page only after deploy completes

## Common publish patterns

- auto-deploy on push to a specific branch
- deploy on pull request merge
- manual deploy from hosting dashboard/CI pipeline

If this is your first update, return to [Getting Started](/getting-started/) and repeat the flow with one more small improvement.
