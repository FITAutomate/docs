---
title: "Docker Desktop — File Management"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Docker Desktop — File Management |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Docker Desktop |
| Estimated Time | 5–10 min |
| Prereqs | Docker Desktop installed |
| Tags | docker, docker-desktop, storage, disk, wsl |

# Docker Desktop — File Management

## Goal

Locate Docker Desktop's data store, understand disk usage, and safely move or reclaim storage without corrupting container data.

## When to Use This

- Docker Desktop is consuming unexpected disk space.
- You need to move Docker's data store to a different drive.
- You want to reclaim disk space by removing unused images, containers, or volumes.

Do not manually move Docker files using Explorer or Finder — always use Docker Desktop settings or CLI commands.

## Prerequisites

- [ ] Docker Desktop is installed and running
- [ ] Sufficient free space on the target drive (if moving the data store)

## Procedure

### 1. Find the Docker Desktop data store location

Go to Docker Desktop → **Settings** → **Resources** → **Advanced**.

The current disk image location is shown here.

Default locations:
- **macOS:** `~/Library/Containers/com.docker.docker/Data/vms/0`
- **Windows (WSL-backed):** `%USERPROFILE%\AppData\Local\Docker\wsl\data`
- **Linux (Docker Engine):** `/var/lib/docker`

### 2. Check current disk usage

```bash
docker system df
```

For verbose output showing individual items:

```bash
docker system df -v
```

### 3. Move the data store to another drive

1. Docker Desktop → **Settings** → **Resources** → **Advanced**.
2. Click **Browse** next to "Disk image location".
3. Select the new location on the target drive.
4. Click **Apply & Restart**.

Docker Desktop handles the migration. Do not interrupt it.

### 4. Reclaim disk space

Remove unused containers:

```bash
docker container prune
```

Remove unused images:

```bash
docker image prune
```

Remove unused images, containers, and networks in one command:

```bash
docker system prune
```

To also remove unused volumes (destructive — confirm you have backups):

```bash
docker system prune --volumes
```

## Troubleshooting

**Docker Desktop is slow after moving the data store**
- Allow a few minutes after restart for indexing. If the issue persists, verify the new drive is not network-attached (NAS) — Docker performs best on local storage.

**Data store move fails or hangs**
- Stop all running containers before moving: `docker stop $(docker ps -q)`.
- Ensure Docker Desktop is not in use during the migration.

**Disk usage does not decrease after pruning**
- WSL 2 (Windows) does not immediately release the virtual disk space after pruning. To reclaim it, run: `wsl --shutdown` then restart Docker Desktop.

## Related Links

- [Docker storage documentation](https://docs.docker.com/storage/)
- [Docker system prune reference](https://docs.docker.com/reference/cli/docker/system/prune/)
- `🪜 PROC — Docker — Command Reference`
