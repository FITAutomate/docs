---
title: "Docker — Project Backup + Version Control"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Docker — Project Backup + Version Control |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | Light |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Docker |
| Estimated Time | 30–60 min (initial setup); ~5 min ongoing |
| Prereqs | Docker, Git, access to NAS or backup location |
| Tags | docker, docker-compose, backup, volumes, git, powershell, synology, onedrive |

> ⚠️ **FLAG:** This procedure currently documents the `fit-dev` project specifically (volumes: `n8n_storage`, `postgres_storage`, `qdrant_storage`). It needs to be generalized or replicated for each Docker environment before being marked Publish Ready.

# Docker — Project Backup + Version Control

## Goal

Establish Git version control for Docker Compose configuration files and set up automated volume backups to NAS with OneDrive sync for the `fit-dev` project. End state: configuration is tracked in Git, volumes back up nightly, and a tested restore procedure exists.

## When to Use This

- Setting up backup and version control for a new Docker project.
- Restoring the `fit-dev` environment from a backup after data loss.
- Verifying that automated backups are running correctly.

## Prerequisites

- [ ] Docker is installed and the target project is running
- [ ] Git is installed
- [ ] NAS backup location is accessible from the host (`\\<NAS-IP>\docker-backups\`)
- [ ] OneDrive sync is configured on the NAS (or Windows symbolic link is set up)
- [ ] PowerShell is available (Windows) or adapt commands for bash

## Procedure

### 1. Initialize Git repository for the project

```bash
cd D:\dev\docker\fit-docker-dev

git init
```

Create `.gitignore`:

```bash
echo "backups/" > .gitignore
echo "*.tar" >> .gitignore
echo "*.gz" >> .gitignore
echo ".env" >> .gitignore
```

### 2. Commit the initial configuration

```bash
git add docker-compose.fit-dev.yml
git add .gitignore
git commit -m "Initial commit: fit-dev docker compose configuration"
```

### 3. Push to GitHub

```bash
git remote add origin https://github.com/fitautomate/fit-docker-dev.git
git branch -M main
git push -u origin main
```

> Never commit `.env` files or any file containing passwords, tokens, or API keys.

### 4. Run a manual volume backup

Use the recommended Docker volume method (containers can remain running):

```powershell
$BACKUP_DIR = "\\<NAS-IP>\docker-backups\fit-dev\$(Get-Date -Format 'yyyy-MM-dd_HH-mm-ss')"
New-Item -ItemType Directory -Path $BACKUP_DIR -Force

docker run --rm -v fit-dev_n8n_storage:/data -v ${BACKUP_DIR}:/backup alpine tar czf /backup/n8n_storage.tar.gz -C /data .
docker run --rm -v fit-dev_postgres_storage:/data -v ${BACKUP_DIR}:/backup alpine tar czf /backup/postgres_storage.tar.gz -C /data .
docker run --rm -v fit-dev_qdrant_storage:/data -v ${BACKUP_DIR}:/backup alpine tar czf /backup/qdrant_storage.tar.gz -C /data .

Copy-Item "D:\dev\docker\fit-docker-dev\docker-compose.fit-dev.yml" -Destination $BACKUP_DIR
```

Verify backup files exist in `$BACKUP_DIR` before proceeding.

### 5. Create and test the automated backup script

Save as `backup-fit-dev.ps1` in the project directory:

```powershell
param(
    [string]$NasPath = "\\<NAS-IP>\docker-backups\fit-dev",
    [int]$RetainDays = 30
)

$ProjectName = "fit-dev"
$ComposeFile = "D:\dev\docker\fit-docker-dev\docker-compose.fit-dev.yml"
$Timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$BackupDir = Join-Path $NasPath $Timestamp

Write-Host "=== Fit-Dev Backup Started ===" -ForegroundColor Cyan
New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null

$volumes = @(
    "${ProjectName}_n8n_storage",
    "${ProjectName}_postgres_storage",
    "${ProjectName}_qdrant_storage"
)

foreach ($volume in $volumes) {
    docker run --rm -v ${volume}:/data -v ${BackupDir}:/backup alpine tar czf /backup/"$volume.tar.gz" -C /data .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "OK: $volume" -ForegroundColor Green
    } else {
        Write-Host "FAILED: $volume" -ForegroundColor Red
    }
}

Copy-Item $ComposeFile -Destination $BackupDir

$cutoffDate = (Get-Date).AddDays(-$RetainDays)
Get-ChildItem -Path $NasPath -Directory | Where-Object {
    $_.Name -match '^\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}$' -and $_.CreationTime -lt $cutoffDate
} | Remove-Item -Recurse -Force

Write-Host "=== Backup Complete: $BackupDir ===" -ForegroundColor Cyan
```

Run manually to test:

```powershell
.\backup-fit-dev.ps1 -NasPath "\\<NAS-IP>\docker-backups\fit-dev" -RetainDays 30
```

### 6. Schedule automated daily backups

Run as Administrator:

```powershell
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" `
    -Argument "-ExecutionPolicy Bypass -File D:\dev\docker\fit-docker-dev\backup-fit-dev.ps1 -NasPath '\\<NAS-IP>\docker-backups\fit-dev'"

$trigger = New-ScheduledTaskTrigger -Daily -At 2:00AM

$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType S4U

Register-ScheduledTask -TaskName "Backup Fit-Dev Docker" `
    -Action $action -Trigger $trigger -Principal $principal `
    -Description "Daily backup of fit-dev Docker volumes to NAS"
```

### 7. Test a restore

Perform a test restore before relying on backups:

```powershell
docker compose -f docker-compose.fit-dev.yml down

$RESTORE_DIR = "\\<NAS-IP>\docker-backups\fit-dev\<timestamp>"

docker run --rm -v fit-dev_n8n_storage:/data -v ${RESTORE_DIR}:/backup alpine sh -c "cd /data && tar xzf /backup/fit-dev_n8n_storage.tar.gz"
docker run --rm -v fit-dev_postgres_storage:/data -v ${RESTORE_DIR}:/backup alpine sh -c "cd /data && tar xzf /backup/fit-dev_postgres_storage.tar.gz"
docker run --rm -v fit-dev_qdrant_storage:/data -v ${RESTORE_DIR}:/backup alpine sh -c "cd /data && tar xzf /backup/fit-dev_qdrant_storage.tar.gz"

docker compose -f docker-compose.fit-dev.yml up -d
```

Verify:

```powershell
docker compose -f docker-compose.fit-dev.yml ps
docker compose -f docker-compose.fit-dev.yml logs
Start-Process "http://localhost:5678"
```

## Troubleshooting

**Backup script fails with NAS path error**
- Confirm NAS is reachable: `Test-Path "\\<NAS-IP>\docker-backups\"`
- Confirm network drive is mapped and accessible from the machine running the script.

**Volume backup hangs or produces an empty archive**
- Confirm the volume name is correct: `docker volume ls | grep fit-dev`
- Confirm Docker Desktop has access to the NAS path (may need a drive mapping).

**Restore leaves service in bad state**
- Check logs with `docker compose logs <service>`.
- If the database is corrupted, restore from an earlier backup.

**Scheduled task does not run**
- Confirm the task is registered: `Get-ScheduledTask -TaskName "Backup Fit-Dev Docker"`
- Run it manually from Task Scheduler to check for permission errors.

## Related Links

- [Docker volume backup documentation](https://docs.docker.com/storage/volumes/#back-up-restore-or-migrate-data-volumes)
- [Synology Cloud Sync documentation](https://kb.synology.com/en-us/DSM/help/CloudSync/cloudsync)
- `🪜 PROC — Docker — Development Environment Setup`
- `🪜 PROC — GitHub — Clone Workflow`
