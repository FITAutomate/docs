---
title: Procedures library rules
description: Naming and metadata standards for procedure runbooks.
---

# 👮 Procedures Library Rules

This folder contains **Procedure** runbooks for FIT Automate operations.

  ------

  ## File Naming (Required)

  - Prefix: `🪜 PROC —`
  - Generic format: `🪜 PROC — <System> — <Procedure Name>.md`
  - App-specific format: `🪜 PROC — <System> — <Procedure Name> — <App>.md`

  Examples:

  - `🪜 PROC — GitHub — Clone Workflow.md`
  - `🪜 PROC — Cloudflare — Tunnels — FITWeb.md`
  - `🪜 PROC — Client — Onboarding — Infrastructure Setup.md`

  Files without the `🪜 PROC —` prefix are invalid and must be renamed before publishing.

  ------

  ## Required Metadata Table (Top of Every File)

  ```markdown
  | Field | Value |
  | --- | --- |
  | Title | <Clean title; no "PROC —"> |
  | Library | PROC |
  | Type | Procedure |
  | Visibility | <Public / Internal> |
  | Publish Ready | <Yes / No> |
  | Redaction Needed | <None / Light / Heavy> |
  | Version | <0.1 / 0.9 / 1.0> |
  | Owner | FIT Automate |
  | Last Updated | <YYYY-MM-DD> |
  | System | <Cloudflare / Docker / GitHub / Client / n8n / Agent / ...> |
  | App | <Optional — specific app or product context> |
  | Estimated Time | <Optional — e.g. 5–10 min> |
  | Prereqs | <Optional — software, access, or credentials required before starting> |
  | Tags | <Optional — comma-separated keywords> |
  ```

  All fields except App, Estimated Time, Prereqs, and Tags are **required**. A file with missing required fields is not valid.

  ------

  ## Field Definitions

  ### Visibility

  - `Public` — safe to publish externally; no internal infrastructure detail, no internal URLs, no credentials
  - `Internal` — FIT staff only; may contain internal URLs, ports, hostnames, or architecture detail

  ### Publish Ready

  - `Yes` — all required sections present, version is 1.0, redaction is complete or not needed
  - `No` — draft, in review, or redaction still outstanding

  ### Redaction Needed

  - `None` — no sensitive content; safe as-is
  - `Light` — contains internal URLs, hostnames, port numbers, or subdomain names that must be removed or genericized before publishing
  - `Heavy` — contains credentials, tunnel IDs, internal architecture, or client-specific detail; requires full review before any external use

  ### Version

  - `0.1` — first draft; structure may be incomplete
  - `0.9` — content complete; not yet reviewed or approved
  - `1.0` — reviewed and approved; Publish Ready: Yes

  ------

  ## Heading Rule (Required)

  - Exactly one H1 per file
  - H1 is placed **below** the metadata table
  - H1 matches the Title field exactly
  - Use H2 for major sections, H3 for numbered steps, H4 for sub-steps if needed

  ------

  ## Required Sections (Every Procedure Must Have All of These)

  The following sections are mandatory, in this order:

  ```
  ## Goal
  ## When to Use This
  ## Prerequisites
  ## Procedure
  ## Troubleshooting
  ## Related Links
  ```

  ### Goal

  One to three sentences. What does this procedure accomplish? What is the end state when it is done correctly?

  ### When to Use This

  Bullet list or short paragraph. When should an operator reach for this procedure — and when should they not? Name the triggering condition.

  ### Prerequisites

  Formatted checklist. Use `- [ ]` for each item. List software, access, credentials, and any prior procedures that must be complete before starting.

  ### Procedure

  Numbered H3 steps (`### 1. Step name`). Each step is a discrete action. Use code blocks for all commands. Steps must be executable in order without backtracking.

  ### Troubleshooting

  Common failure modes and fixes. Use short headers or bold labels per issue. At minimum, address the two or three most likely failure points.

  ### Related Links

  Links to related procedures, external documentation, or tools referenced in the procedure.

  ------

  ## Procedure Content Rules

  - **Voice:** Second-person, imperative. Write "Click the green button" not "The operator should click the green button."
  - **Tone:** Operator-level. Assume the reader knows their tools. No marketing language, no motivational framing.
  - **Code blocks:** Every command goes in a code block. No inline code for multi-line commands.
  - **Step granularity:** One action per step. If a step has sub-actions, use H4 or a nested list — do not combine multiple actions into one step.
  - **Images:** Allowed only when a screenshot materially clarifies an operator action. Store under `assets/<system-name>/`. Reference with a relative path.
  - **Internal detail:** Never include credentials, tunnel IDs, client-specific hostnames, or real internal ports in a Public procedure.

  ------

  ## Tone Examples

  **Correct:**

  > Navigate to the parent directory where you want your projects to live. Run the clone command.

  **Incorrect:**

  > You'll want to make sure you're in the right folder first — this is important! Now you're ready to clone. This is the recommended approach for most users.

  ------

  ## Pre-Publish Validation Checklist

  Before setting `Publish Ready: Yes`, verify all of the following:

  - [ ] File is named with `🪜 PROC —` prefix
  - [ ] All required metadata fields are present and filled
  - [ ] `KB_TARGET` and `Visibility` are consistent
  - [ ] H1 is below the metadata table and matches the Title field
  - [ ] All six required sections are present: Goal, When to Use This, Prerequisites, Procedure, Troubleshooting, Related Links
  - [ ] All commands are in code blocks
  - [ ] No credentials, tunnel IDs, or client-specific hostnames in a Public doc
  - [ ] Redaction Needed field reflects actual content (`None / Light / Heavy`)
  - [ ] Version is `1.0`
  - [ ] `Last Updated` uses `YYYY-MM-DD` format
  - [ ] Owner is set to `FIT Automate`

  ------

  ## Archive

  Procedures removed from the active library are moved to `_ARCHIVE/`. Archived files are retained as reference only and must not be republished or used as agent input without review.
