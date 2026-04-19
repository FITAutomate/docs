---
title: "Composio — RUBE MCP — Claude Desktop"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Composio — RUBE MCP — Claude Desktop |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Composio |
| App | Claude Desktop |
| Estimated Time | 15–30 min |
| Prereqs | Node.js installed; local RUBE MCP build or published package; Composio API key |
| Tags | mcp, claude, rube, composio, setup |

# Composio — RUBE MCP — Claude Desktop

## Goal

Configure Claude Desktop to load a local RUBE MCP server and make RUBE tools available in chat. End state: Claude Desktop loads RUBE MCP on startup and tool calls resolve successfully.

## When to Use This

- Onboarding a machine to RUBE MCP in Claude Desktop.
- Switching Claude Desktop from hosted MCP tools to a local RUBE MCP server.
- Rotating Composio credentials for the local MCP runtime.

## Prerequisites

- [ ] Claude Desktop is installed
- [ ] Node.js is available in PATH (`node --version` returns a version number)
- [ ] RUBE MCP server is available — either a local build path or team-approved published package
- [ ] `COMPOSIO_API_KEY` is available

## Procedure

### 1. Prepare or verify the RUBE MCP server

1. If using a local build, confirm the server entrypoint exists (example: `.../build/index.js`).
2. If using a package workflow, confirm the package name and version currently in use by your team.
3. Run a local smoke check from terminal to confirm the process starts without an immediate error.

### 2. Locate the Claude Desktop MCP config file

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

### 3. Add the RUBE MCP server definition

Add or update the `mcpServers` entry in `claude_desktop_config.json`:

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

If your team uses an npm package variant, replace `command` and `args` with the team-approved package command.

### 4. Restart Claude Desktop

1. Fully quit Claude Desktop.
2. Re-open the app so the MCP config is reloaded.

### 5. Validate tool availability

1. Open a new Claude chat.
2. Trigger a simple MCP action through the RUBE toolset.
3. Confirm no startup or config error appears and the tool call resolves.

### 6. Rotate credentials when needed

1. Update `COMPOSIO_API_KEY` in `claude_desktop_config.json`.
2. Restart Claude Desktop.
3. Re-run the validation check (Step 5).

## Troubleshooting

**Server does not load**
- Invalid JSON in the config file — validate syntax before restarting.
- Wrong file path in `args` — confirm the entrypoint file exists at the exact path.
- `node` not in PATH — confirm `node --version` works in the shell Claude Desktop uses.

**MCP server starts but tool calls fail**
- Invalid or expired `COMPOSIO_API_KEY`.
- RUBE MCP build path points to stale build output — rebuild and update the path.

**No tools appear in Claude**
- Config file path is wrong for your OS profile.
- App was not fully quit and restarted after config change.

## Related Links

- [MCP quickstart and Claude Desktop config locations](https://modelcontextprotocol.io/quickstart/user)
- [Anthropic MCP overview](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)
- [Composio documentation](https://docs.composio.dev/)
- `🪜 PROC — Composio — RUBE MCP — Cursor`
