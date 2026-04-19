# FIT Automate Docs

Company documentation site for FIT Automate.

## What this delivers

This repo ships the internal FIT Automate documentation site with:

- `web/` Starlight app for the live documentation experience
- `docs/` project documentation for maintainers
- `.agent/` repo context and working rules for AI-assisted delivery

## Folder contract

- `web/` application code, static assets, and rendered documentation content
- `docs/` project documentation, setup notes, and maintenance guidance
- `.agent/` agent context, rules, and repo working guidance

## Quick start

```powershell
cd web
npm install
npm run dev
```

Expected local URL: `http://localhost:4704`

## Content source

Content for the site lives under `web/src/content/docs/`. Use `docs/` for
project documentation about how this repo is maintained.
