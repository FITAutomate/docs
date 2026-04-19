---
title: "Cloudflare — Turnstile Setup"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Cloudflare — Turnstile Setup |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Heavy |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Cloudflare |
| App | FIT Web |
| Estimated Time | 15–30 min |
| Prereqs | FIT Web domain active in Cloudflare, access to Cloudflare dashboard, access to FIT Web environment variables |
| Tags | cloudflare, turnstile, spam, forms, security |

# Cloudflare — Turnstile Setup

## Goal

Add Cloudflare Turnstile to FIT Web forms to block spam and bot submissions while keeping the user experience clean. End state: all targeted public-facing FIT Web forms validate submissions server-side using a Turnstile token before processing.

## When to Use This

- Adding Turnstile to a new FIT Web form (contact, discovery call, newsletter, or lead capture).
- Replacing or rotating Turnstile keys for an existing integration.
- Any public-facing FIT Web form receiving spam or bot traffic.

Do not use this for forms behind authentication — Turnstile is for public-facing endpoints only.

## Prerequisites

- [ ] FIT Web domain is active in Cloudflare
- [ ] Access to Cloudflare dashboard with permission to manage Turnstile
- [ ] Access to FIT Web environment variables (Vercel or hosting panel)
- [ ] Target form component is identified and accessible in the FIT Web codebase

## Procedure

### 1. Create a Turnstile widget in Cloudflare

1. Go to Cloudflare dashboard → **Turnstile** → **Add site**.
2. Enter the FIT Web domain (example: `forwarditthinking.com`).
3. Select widget mode: **Managed** (recommended).
4. Cloudflare generates two keys:
   - **Site Key** — public, used in the browser
   - **Secret Key** — private, used server-side only

> Never commit the Secret Key to source control or log it.

### 2. Add keys to FIT Web environment variables

In the FIT Web hosting panel (Vercel), add to all relevant environments (production and preview):

```
TURNSTILE_SITE_KEY=<site-key>
TURNSTILE_SECRET_KEY=<secret-key>
TURNSTILE_ENABLED=true
```

### 3. Add Turnstile widget to the form component

In the FIT Web form component:

1. Render the Turnstile widget using the Site Key.
2. Capture the token Turnstile returns on successful challenge completion.
3. Include the token in the form submission payload (typically as the `cf-turnstile-response` field — confirm with your Turnstile client integration).

### 4. Verify the token server-side

In the API route or handler that receives the form submission:

1. Extract the token from the request body.
2. POST to the Cloudflare Turnstile verify endpoint using the Secret Key.
3. Only proceed with form processing if verification returns `success: true`.

> Never trust client-side-only verification. The server check is the gate.

### 5. Test the integration

1. Submit the form normally — it should pass.
2. Attempt submission without the token — it should fail.
3. Confirm the failure message is user-friendly (example: "Please try again").
4. Test from incognito or VPN to validate consistent behavior.

### 6. Complete rollout checklist

- [ ] Keys exist in production and all preview environments
- [ ] Logs do not print or expose the Secret Key
- [ ] Failure returns a clear user-facing error message
- [ ] Widget renders correctly on all targeted forms

## Troubleshooting

**Widget does not render**
- Site Key is missing or incorrect in the environment variables.
- Turnstile script blocked by a Content Security Policy on the page.

**Token verification fails on all submissions**
- Secret Key is wrong or missing on the server.
- Server is sending the wrong field name to the verify endpoint.

**Works locally but fails in production**
- Environment variables not set in the production Vercel environment.
- Domain in Turnstile dashboard does not match the production domain exactly.

**Form accepts submissions without Turnstile token**
- Server-side verification is not being enforced. Confirm the API route rejects requests with a missing or invalid token.

## Related Links

- [Cloudflare Turnstile documentation](https://developers.cloudflare.com/turnstile/)
- [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- `🪜 PROC — Cloudflare — Tunnels + Published Application Routes`
