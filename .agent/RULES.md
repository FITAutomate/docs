# FIT Docs Lite - Agent Rules

## What this repo is

This is the FIT Docs Lite org template repository.
It is not a dev lane and it is not a client repo.

## Guardrails

1. Do not rename FIT solution families or tiers in this repo.
2. Do not add client-specific content to baseline starter pages.
3. Keep the `web/` + `docs/` + `.agent/` root contract stable unless the
   template baseline is intentionally changing.
4. Record structural changes in governance notes before future promotion work.
5. Never commit secrets or local machine paths in user-facing docs.

## Allowed fast actions

- Add or edit starter pages and nav in `web/src/content/docs/`
- Update theme tokens and CSS for FIT branding
- Improve onboarding docs in `docs/`
- Create template-safe placeholders and examples

## Template reminder

Before using this repo as a new baseline:

- Build passes from clean install
- Starter pack docs exist and match real commands
- `.agent/CONTEXT.md` stays template-safe
- No scratch files or environment secrets
