---
title: "Agent Session — Handoff + Log"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Agent Session — Handoff + Log |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Claude Code |
| Estimated Time | 15–20 min (setup); automatic thereafter |
| Prereqs | Claude Code installed, Obsidian running with Local REST API plugin active |
| Tags | claude-code, hook, session-log, obsidian, automation, handoff |

# Agent Session — Handoff + Log

## Goal

Configure a Claude Code Stop hook that automatically writes a structured session log to Obsidian at the end of every agent session. End state: each completed Claude Code session produces a markdown log entry in `04-OPERATIONS/agent-logs/` via the Obsidian Local REST API, capturing what was done, what was decided, and what comes next.

## When to Use This

- Initial setup of the session logging hook on a new machine.
- Recreating or updating the hook after a Claude Code config change.
- Diagnosing why session logs are not being written.

## Prerequisites

- [ ] Claude Code is installed and running
- [ ] Obsidian is installed with the **Local REST API** plugin active
- [ ] Obsidian Local REST API is running on `https://127.0.0.1:27124`
- [ ] `04-OPERATIONS/agent-logs/` folder exists in the Obsidian vault
- [ ] Obsidian Local REST API key is available

## Procedure

### 1. Confirm the Obsidian Local REST API is reachable

```powershell
Invoke-RestMethod -Uri "https://127.0.0.1:27124/" -SkipCertificateCheck
```

Expected: a JSON response confirming the API is live. If this fails, open Obsidian and confirm the Local REST API plugin is enabled and the server is started.

### 2. Locate or create the Claude Code settings file

Claude Code hooks are configured in `settings.json`:

- **Windows:** `%APPDATA%\Claude\settings.json`
- **macOS:** `~/Library/Application Support/Claude/settings.json`

### 3. Add the Stop hook

Add the following to the `hooks` section of `settings.json`:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "powershell -Command \"$timestamp = Get-Date -Format 'yyyy-MM-dd-HHmmss'; $logPath = '04-OPERATIONS/agent-logs/session-' + $timestamp + '.md'; $body = @{ content = $env:CLAUDE_SESSION_LOG } | ConvertTo-Json; Invoke-RestMethod -Uri ('https://127.0.0.1:27124/vault/' + $logPath) -Method Put -Body $body -ContentType 'application/json' -SkipCertificateCheck\""
          }
        ]
      }
    ]
  }
}
```

> ⚠️ **FLAG:** The exact `CLAUDE_SESSION_LOG` environment variable name and session log format passed by Claude Code at the Stop event requires verification against current Claude Code hook documentation. Adjust the command to match the actual available hook environment variables.

### 4. Define the session log format

The session log written to Obsidian should capture the following structure:

```markdown
# Agent Session Log — YYYY-MM-DD HH:MM

## Project / Context
[Repo or working directory]

## What Was Done
[Bullet list of completed actions]

## Decisions Made
[Any architectural, scope, or approach decisions]

## Files Changed
[List of files created, edited, or deleted]

## Flags / Open Items
[Anything unresolved, flagged for John review, or needing follow-up]

## Next Steps
[What should happen in the next session]
```

### 5. Test the hook

1. Start a Claude Code session and complete a short task.
2. End the session (trigger the Stop event).
3. Check `04-OPERATIONS/agent-logs/` in Obsidian for the new log file.
4. Confirm the file was created with correct content and timestamp.

### 6. Troubleshoot if the log does not appear

See the Troubleshooting section below.

## Troubleshooting

**No log file created after session ends**
- Confirm the hook is correctly formatted JSON in `settings.json` — invalid JSON silently disables hooks.
- Confirm Obsidian is running and the Local REST API plugin is active during the session.
- Test the API call manually (Step 1).

**SSL certificate error on the API call**
- The Obsidian Local REST API uses a self-signed cert. Confirm `-SkipCertificateCheck` is present in the PowerShell command.

**Log created but content is empty or malformed**
- The session log environment variable may be named differently in your Claude Code version. Check Claude Code hook documentation for the correct variable.

**Logs accumulating — vault getting noisy**
- Consider adding a cleanup workflow in n8n or a scheduled script to archive logs older than 30 days to a subfolder.

## Related Links

- [Claude Code hooks documentation](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [Obsidian Local REST API plugin](https://github.com/coddingtonbear/obsidian-local-rest-api)
- `🪜 PROC — n8n — New Workflow Setup` (for automated log cleanup)
