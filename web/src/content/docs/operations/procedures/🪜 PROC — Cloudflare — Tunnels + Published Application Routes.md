---
title: "Cloudflare — Tunnels + Published Application Routes"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Cloudflare — Tunnels + Published Application Routes |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Heavy |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Cloudflare |
| Estimated Time | 15–30 min |
| Prereqs | Cloudflare zone active, cloudflared installed, local service running |
| Tags | cloudflare, tunnel, zero-trust, dns, routes |

# Cloudflare — Tunnels + Published Application Routes

## Goal

Expose local services running on your workstation or a LAN host through Cloudflare Tunnel so each service is reachable via a stable subdomain without opening inbound firewall rules or exposing ports to the internet.

## When to Use This

- You need to publish a microservice running on `localhost:<port>` or a LAN IP without opening inbound firewall rules.
- You need internal or controlled-public access to a local service via a stable subdomain.
- You are adding a new service to an existing tunnel.

Do not use this to expose internal services publicly without first adding a Cloudflare Access policy.

## Prerequisites

- [ ] Domain is active in a Cloudflare zone
- [ ] `cloudflared` is installed on the host that runs the services
- [ ] The local service is running and reachable on the host (example: `http://localhost:5678`)
- [ ] Access to the Cloudflare Zero Trust dashboard

## Procedure

### 1. Create or select a tunnel

1. Go to Cloudflare dashboard → **Zero Trust** → **Networks** → **Tunnels**.
2. Click **Create a tunnel** and name it (example: `FIT-GPU-Server`), or select an existing tunnel.
3. Follow the dashboard prompt to install and run the connector on the target machine.

> Treat tunnel credentials like secrets. Never commit or share them.

### 2. Create DNS records for each subdomain

1. Go to **DNS** → **Records** → **Add record**.
2. For each service subdomain, create a CNAME record pointing to `<tunnel-id>.cfargotunnel.com`.
3. Set proxy status to **Proxied** (orange cloud).

Example:

| Subdomain | Type | Target |
| --- | --- | --- |
| `ai` | CNAME | `<tunnel-id>.cfargotunnel.com` |
| `n8n-dev` | CNAME | `<tunnel-id>.cfargotunnel.com` |
| `docs` | CNAME | `<tunnel-id>.cfargotunnel.com` |

### 3. Add Published Application Routes

1. Go to **Zero Trust** → **Networks** → **Tunnels** → select your tunnel.
2. Open **Published application routes**.
3. Add one route per service mapping the public hostname to the internal service:

| Hostname | Path | Service |
| --- | --- | --- |
| `<subdomain>.<your-domain>` | `*` | `http://localhost:<port>` |

### 4. Validate the service locally

Before testing through Cloudflare, confirm the service is running on the host:

```bash
curl http://localhost:<port>
```

On Windows without `curl`, open the URL in a browser on the host machine.

### 5. Test via the public subdomain

Open each configured hostname in a browser (example: `https://docs.<your-domain>`).

If the page fails:
- Verify DNS points to the correct tunnel
- Verify the route points to the correct local port
- Verify the service is listening on that port

### 6. Restrict access for internal services

For any service that should not be public:

1. Go to **Zero Trust** → **Access** → **Applications**.
2. Create an Access policy for the hostname requiring login or device posture.
3. Restrict by email domain or specific user list as appropriate.

> Internal by default. Public only when explicitly chosen.

## Troubleshooting

**Route shows healthy but site fails**
- Service is down, on the wrong port, or using wrong protocol (http vs https).
- Local firewall is blocking loopback or the target port.

**DNS resolves but returns a 1016 or origin error**
- CNAME is not proxied (orange cloud off).
- Wrong tunnel selected for the route.

**Tunnel is inactive or unhealthy**
- `cloudflared` is not running on the host. Restart the connector service.
- Tunnel credentials have been rotated. Re-install the connector with updated credentials.

## Related Links

- [Cloudflare Tunnel documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- [Cloudflare Access documentation](https://developers.cloudflare.com/cloudflare-one/policies/access/)
- `🪜 PROC — n8n — Deployment — Docker + Cloudflare` (uses this tunnel setup)
