---
title: "n8n — Deployment — Docker + Cloudflare"
description: ""
---

| Field | Value |
| --- | --- |
| Title | n8n — Deployment — Docker + Cloudflare |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Heavy |
| Version | 0.1 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | n8n |
| Estimated Time | 30–60 min |
| Prereqs | Docker and docker-compose installed, SSH access to host, valid n8n license, Cloudflare account with domain control, cloudflared installed |
| Tags | n8n, docker, cloudflare, tunnel, deployment, demo |

> ⚠️ **FLAG:** This procedure was drafted from screenshots that are not included in this repository. Steps referencing `image_0.png`, `image_1.png`, and `image_2.png` have been preserved with placeholder notes. The procedure structure and commands are accurate but the image-referenced UI steps require verification and screenshot capture before this can be marked Publish Ready.

# n8n — Deployment — Docker + Cloudflare

## Goal

Spin up a demo or staging n8n instance using Docker Compose, configure the license, and expose it securely via a Cloudflare Tunnel. End state: n8n is accessible at a public hostname, licensed, and protected from direct port exposure.

## When to Use This

- Spinning up a new demo or staging n8n environment.
- Cloning an existing n8n Docker configuration for a parallel instance.
- Redeploying n8n after a host migration.

## Prerequisites

- [ ] Host server has `docker` and `docker-compose` installed
- [ ] SSH or shell access to the host
- [ ] Valid n8n license key (if using paid features)
- [ ] Cloudflare account with control over the target domain
- [ ] `cloudflared` installed on the host
- [ ] Cloudflare tunnel created and connector running (see `🪜 PROC — Cloudflare — Tunnels + Published Application Routes`)

## Procedure

### Part I — Server and Docker Setup

### 1. Prepare configuration files

1. SSH into the host and navigate to the desired parent directory (example: `/opt/n8n-demo`).
2. Copy an existing working n8n configuration as the starting point:

```bash
cp -r /opt/existing-n8n /opt/n8n-demo
cd /opt/n8n-demo
```

### 2. Update configuration files with unique values

1. Edit `.env` — change any values that must be unique for this instance (passwords, environment identifiers) to prevent conflicts with other running instances.

2. Edit `docker-compose.yaml`:
   - Update container names and service identifiers to be unique on this host.
   - Verify volume mappings (example: `n8n_storage`) reference the correct local data directory.

   > ⚠️ **UNVERIFIED:** Source procedure references Docker Compose configuration screenshots (image_0.png, Panels 1–2) that are not available. Verify `docker-compose.yaml` settings against a working reference config before proceeding.

3. Confirm data persistence volumes are correctly defined in the `volumes` section.

### 3. Start the Docker containers

```bash
docker-compose up -d
```

Check logs to confirm the application starts without errors:

```bash
docker-compose logs -f
```

---

### Part II — n8n Initial Setup and Licensing

### 4. Perform first-time login

1. Access n8n via browser using the server's local IP and port, or via the Cloudflare hostname once the tunnel is configured.
2. Enter the first-time setup credentials (email and password).

   > ⚠️ **UNVERIFIED:** Source procedure references a first-time login screenshot (image_1.png, Panel 1) that is not available. The login flow may vary between n8n versions.

### 5. Verify the instance is running

After login, the empty workflows screen confirms the instance is active and ready for licensing.

### 6. Register the instance for a license

1. Locate the licensing panel in n8n Settings.
2. Enter the email address associated with this instance.

   > ⚠️ **UNVERIFIED:** Source procedure references a registration field screenshot (image_0.png, Panel 5). Navigation path may differ in current n8n versions.

### 7. Apply the license key

1. Navigate to the license management area in n8n Settings.
2. Enter the license key.
3. Confirm license activation.

   > ⚠️ **UNVERIFIED:** Source procedure references license key entry screenshots (image_0.png, Panels 3–4). Verify current navigation path in your n8n version.

---

### Part III — Cloudflare Tunnel Configuration

### 8. Locate or create a Cloudflare tunnel

1. Log in to the Cloudflare Zero Trust dashboard.
2. Navigate to **Access** → **Tunnels**.
3. Select an existing tunnel or create a new one.

   See `🪜 PROC — Cloudflare — Tunnels + Published Application Routes` for the full tunnel setup procedure.

   > ⚠️ **UNVERIFIED:** Source procedure references a tunnel list screenshot (image_1.png, Panel 10).

### 9. Add a public hostname for n8n

1. Select the tunnel and open its configuration.
2. Add a new public hostname mapping your desired subdomain to the internal n8n service:
   - Subdomain: `n8n-demo.<your-domain>`
   - Service: `http://localhost:<n8n-port>`

   > ⚠️ **UNVERIFIED:** Source procedure references hostname configuration screenshots (image_1.png, Panels 11 and 13).

### 10. Activate the tunnel connector if needed

If the tunnel shows as inactive in Cloudflare, run the tunnel command on the host:

```bash
cloudflared tunnel run --token <YOUR_TUNNEL_TOKEN>
```

Confirm the tunnel shows **Healthy** (green) in the Cloudflare dashboard before proceeding.

   > ⚠️ **UNVERIFIED:** Source procedure references tunnel status screenshots (image_2.png, Panels 8 and 11).

### 11. Final verification

Open the public URL in a browser (example: `https://n8n-demo.<your-domain>`). Log in with the credentials created in Step 4. Confirm n8n loads correctly and the license is active.

## Troubleshooting

**Docker container fails to start**
- Run `docker-compose logs`. Verify ports are not already bound on the host and volume paths exist.

**License fails to validate**
- Confirm the license key is correct and not expired.
- Test internet connectivity from inside the container: `docker exec -it <n8n_container> ping 8.8.8.8`

**Cloudflare tunnel inactive**
- Confirm `cloudflared` is running on the host.
- Verify the tunnel token is correct in the service definition.
- Confirm the internal hostname/IP referenced in the tunnel config is reachable from the host.

**n8n accessible locally but not via public URL**
- Verify the public hostname is correctly mapped in the Cloudflare tunnel configuration.
- Check that the Cloudflare Access policy (if any) is not blocking the connection.

## Related Links

- `🪜 PROC — Cloudflare — Tunnels + Published Application Routes`
- `🪜 PROC — Docker — Development Environment Setup`
- [n8n Docker installation documentation](https://docs.n8n.io/hosting/installation/docker/)
- [Cloudflare Tunnel documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
