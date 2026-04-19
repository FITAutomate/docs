# FIT Automate Docs - Agent Context

## Lane

- `repo_role`: company-docs
- `solution_family`: FIT Docs
- `tier`: internal
- `template_stage`: active-site

## Purpose

This repository is the FIT Automate company documentation site. It publishes
internal operating knowledge and demo-ready documentation through a Starlight
web app.

## Enabled skills

```yaml
enabled_skills:
  - prp
  - brand-check
  - tier-check
  - astro
  - agent-browser
```

## Canonical references

- Governance and ADRs: `fit-solutions/`
- Port policy registry: `fit-solutions/registry/local-dev-ports.yaml`

## Repo-specific context

- Docs app path: `web/`
- Project documentation path: `docs/`
- Local dev port: `4704`
- Keep user-facing documentation practical, structured, and specific.
- Do not use this repo as a client template.
