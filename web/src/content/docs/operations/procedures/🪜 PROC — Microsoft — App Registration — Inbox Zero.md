---
title: "Microsoft — App Registration — Inbox Zero"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Microsoft — App Registration — Inbox Zero |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.2 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Microsoft Entra |
| App | Inbox Zero |
| Estimated Time | 30 min |
| Prereqs | Entra tenant access; permissions to create app registrations and grant consent |
| Tags | microsoft, entra, oauth, outlook, graph, inbox-zero |

# Microsoft — App Registration — Inbox Zero

## Goal

Create and configure a Microsoft Entra app registration for Inbox Zero OAuth with Outlook and Microsoft 365 using delegated Microsoft Graph permissions. End state: Inbox Zero can authenticate against Microsoft 365 accounts and access the mailbox using the configured scopes.

## When to Use This

- Setting up a new Inbox Zero environment.
- Rotating credentials for an existing Inbox Zero integration.
- Migrating Inbox Zero OAuth from a shared app registration to a dedicated app.

## Prerequisites

- [ ] Access to `https://portal.azure.com`
- [ ] Permission to create or manage app registrations in the target tenant
- [ ] Permission to grant admin consent (if required by tenant policy)
- [ ] Confirmed callback domain and local callback URLs
- [ ] Planned secret rotation policy (expiry owner and schedule)

## Procedure

### 1. Decide registration strategy

1. Determine whether to reuse an existing app registration or create a dedicated one.
2. For Inbox Zero, prefer a dedicated app named `Inbox Zero` for scope isolation and easier audits.
3. If reusing an existing app, plan to remove unnecessary Application permissions and retain only required Delegated permissions.

### 2. Create the app registration

1. Go to `https://portal.azure.com`.
2. Open **Microsoft Entra ID** → **App registrations** → **New registration**.
3. Name: `Inbox Zero`.
4. Supported account types: **Accounts in any organizational directory and personal Microsoft accounts**.
5. Redirect URI (Web): `http://localhost:3001/api/auth/callback/microsoft`.
6. Click **Register**.

### 3. Configure redirect URIs

In **Authentication** → **Web**, add all required URIs.

Required:

- `http://localhost:3001/api/auth/callback/microsoft`
- `http://localhost:3001/api/outlook/linking/callback`

Optional (only if those features are enabled):

- `http://localhost:3001/api/outlook/calendar/callback`
- `http://localhost:3001/api/outlook/drive/callback`

Production equivalents (replace `mail.fitdomain.com` with the actual production domain):

- `https://mail.fitdomain.com/api/auth/callback/microsoft`
- `https://mail.fitdomain.com/api/outlook/linking/callback`
- `https://mail.fitdomain.com/api/outlook/calendar/callback`
- `https://mail.fitdomain.com/api/outlook/drive/callback`

### 4. Create a client secret

1. Go to **Certificates & secrets** → **New client secret**.
2. Description: `fit-email-prod` or `fit-email-local`.
3. Choose an expiry per policy (6–12 months recommended).
4. Copy the **Value** immediately — it is not shown again. Do not copy the Secret ID.

### 5. Configure Microsoft Graph delegated permissions

Go to **API permissions** → **Add a permission** → **Microsoft Graph** → **Delegated permissions**.

Required scopes:

- `openid`
- `profile`
- `email`
- `offline_access`
- `User.Read`
- `Mail.ReadWrite`
- `Mail.Send`
- `MailboxSettings.ReadWrite`

Optional scopes (add only if the corresponding features are enabled):

- `Calendars.Read`
- `Calendars.ReadWrite`
- `Files.ReadWrite`

Do not add Application permissions for this user OAuth flow unless a daemon or service design explicitly requires it.

### 6. Grant admin consent if required

1. Click **Grant admin consent** if tenant policy requires it.
2. Verify delegated scopes appear correctly in the consent model.

### 7. Configure Inbox Zero environment variables

Set in `apps/web/.env`:

```
MICROSOFT_CLIENT_ID=<Application (client) ID GUID>
MICROSOFT_CLIENT_SECRET=<Client secret value>
MICROSOFT_TENANT_ID=common
MICROSOFT_WEBHOOK_CLIENT_STATE=<random 32-byte hex>
```

Use `MICROSOFT_TENANT_ID=common` for multi-tenant. Replace with the specific tenant ID for single-tenant mode.

Restart the stack after updating:

PowerShell:

```powershell
$env:WEB_PORT="3001"; $env:NEXT_PUBLIC_BASE_URL="http://localhost:3001"; docker compose --profile all up -d
```

WSL:

```bash
WEB_PORT=3001 NEXT_PUBLIC_BASE_URL=http://localhost:3001 docker compose --profile all up -d
```

### 8. Validate the integration

1. Open `http://localhost:3001`.
2. Add a Microsoft account in Inbox Zero.
3. Complete the sign-in and consent flow.
4. Confirm account link succeeds.
5. Verify mailbox read and sync.
6. Send a test email if send capability is enabled.

### 9. Existing app reuse hardening (if applicable)

If reusing an existing registration instead of creating a new one:

1. Add a new client secret and update `.env`.
2. Add required Inbox Zero redirect URIs.
3. Remove unnecessary Application permissions.
4. Retain only required Delegated permissions.
5. Re-grant admin consent only for the final scope set.

## Troubleshooting

**invalid_client**
- Secret ID used instead of secret Value.
- Secret has expired.
- Trailing whitespace in the secret value.

**redirect_uri_mismatch**
- Callback URL in Entra does not exactly match the app URL — check scheme, host, port, and path character by character.

**Missing Graph scopes on consent screen**
- Wrong app registration was selected.
- Permissions were added as Application instead of Delegated.
- Admin consent is missing where tenant policy requires it.

**Works for org accounts but not personal Outlook.com**
- Supported account types does not include personal Microsoft accounts.
- A requested scope is not supported for personal accounts.

## Related Links

- [Microsoft identity platform OAuth/OIDC endpoints](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols)
- [Supported account types reference](https://learn.microsoft.com/en-us/entra/identity-platform/v2-supported-account-types)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
- `🪜 PROC — Docker — Development Environment Setup` (Inbox Zero runs in Docker)
