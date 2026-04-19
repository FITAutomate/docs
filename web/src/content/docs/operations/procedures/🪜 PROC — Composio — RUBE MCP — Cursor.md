---
title: "Composio — RUBE MCP — Cursor"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Composio — RUBE MCP — Cursor |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Composio |
| App | Cursor |
| Estimated Time | 15–30 min |
| Prereqs | Cursor installed; Node.js available; RUBE MCP local build or approved package; Composio API key |
| Tags | mcp, cursor, rube, composio, setup |

# Composio — RUBE MCP — Cursor

## Goal

Configure Cursor to load and use RUBE MCP tools through an MCP server definition. End state: Cursor loads RUBE MCP on startup and RUBE tools are available in the AI chat.

## When to Use This

- Enabling RUBE MCP on a new Cursor workstation.
- Switching between project-level and global MCP configuration.
- Rotating MCP environment credentials.

## Prerequisites

- [ ] Cursor is installed and up to date
- [ ] Node.js is available (`node --version` returns a version number)
- [ ] RUBE MCP server path is available (local build) or team-approved package mode is confirmed
- [ ] `COMPOSIO_API_KEY` is available

## Procedure

### 1. Choose configuration scope

1. Use **project config** when MCP setup should be repository-specific.
2. Use **global config** when MCP setup should apply to all Cursor workspaces.

### 2. Locate the Cursor MCP config file

- **Project config:** `.cursor/mcp.json` in the project root
- **Global config:** `~/.cursor/mcp.json`

On Windows, `~` resolves to `%USERPROFILE%`.

### 3. Add the RUBE MCP server entry

Add or update the `mcpServers` entry in the appropriate `mcp.json`:

```json
{
  "mcpServers": {
    "rube": {
      "command": "node",
      "args": [
        "C:/absolute/path/to/rube-mcp/build/index.js"
      ],
      "env": {
        "COMPOSIO_API_KEY": "your_composio_api_key_here"
      }
    }
  }
}
```

If your team uses a package workflow, replace `command` and `args` with the approved package command.

### 4. Restart Cursor

1. Fully quit Cursor.
2. Re-open Cursor to reload the MCP server config.

### 5. Validate RUBE tool access

1. Open Cursor AI chat.
2. Run a simple request that requires a RUBE MCP tool call.
3. Confirm MCP tools are listed and execution succeeds.

### 6. Rotate credentials when needed

1. Update `COMPOSIO_API_KEY` in the config.
2. Restart Cursor.
3. Re-run the validation check (Step 5).

## Troubleshooting

**MCP config not detected**
- Config file is in the wrong scope or path.
- JSON syntax error in `mcp.json` — validate syntax before restarting.

**Server launch failure**
- Invalid `args` path to the built server — confirm the file exists.
- `node` executable not found in PATH.

**Tools visible but calls fail**
- Invalid or expired `COMPOSIO_API_KEY`.
- Server build is out of date — rebuild the RUBE MCP server and update the path.

## Related Links

- [Cursor MCP documentation](https://docs.cursor.com/context/mcp)
- [MCP protocol quickstart](https://modelcontextprotocol.io/quickstart/user)
- [Composio documentation](https://docs.composio.dev/)
- `🪜 PROC — Composio — RUBE MCP — Claude Desktop`
