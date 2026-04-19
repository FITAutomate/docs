# FIT Automate Docs - Agent Rules

## What this repo is

Company documentation site for FIT Automate: internal operating knowledge and
demo-ready documentation via the Starlight app under `web/`.

## Guardrails

1. Do not rename FIT solution families or tiers in this repo without explicit
   instruction.
2. Keep the `web/` + `docs/` + `.agent/` root contract stable unless there is an
   intentional structural change.
3. Record structural changes in project notes under `docs/` when appropriate.
4. Never commit secrets or local machine paths in user-facing docs.

## Allowed actions

- Add or edit documentation pages and navigation under `web/src/content/docs/`
- Update theme tokens and CSS for FIT branding
- Maintain onboarding and maintenance notes in `docs/`

## References

Lane, tier, and enabled skill names live in `.agent/CONTEXT.md`. Use that file
as the single source for repo role and tooling expectations.
