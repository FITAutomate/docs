---
title: "GitHub — Clone Workflow"
description: ""
---

| Field | Value |
| --- | --- |
| Title | GitHub — Clone Workflow |
| Library | PROC |
| Type | Procedure |
| Visibility | Public |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | GitHub |
| Estimated Time | 5–10 min |
| Prereqs | Git installed |
| Tags | git, github, ssh, clone |

# GitHub — Clone Workflow

## Goal

Clone a GitHub repository to your local machine using `git clone` from the correct parent directory. End state: a local copy of the repository with the remote already configured and ready to work in.

## When to Use This

- Starting work on any FIT repository for the first time on a machine.
- Setting up a second local copy of an existing repository.
- Onboarding a new workstation to a project.

Do not use this to create a new repository. Use GitHub's New Repository flow for that.

## Prerequisites

- [ ] Git is installed (`git --version` returns a version number)
- [ ] SSH key is added to your GitHub account (recommended), or you have a GitHub Personal Access Token
- [ ] You have at least read access to the target repository

## Procedure

### 1. Copy the clone URL from GitHub

1. Navigate to the repository on GitHub.
2. Click the green **<> Code** button.
3. Select **SSH** (recommended) or **HTTPS**.
4. Copy the URL (example: `git@github.com:fitautomate/fit-docker-dev.git`).

### 2. Navigate to your development workspace

Open your terminal and navigate to the parent directory where the repository folder should be created. Do not create the repo folder manually.

```bash
cd ~/dev
```

### 3. Clone the repository

```bash
git clone <paste-your-url-here>
```

To use a custom local folder name instead of the repository name:

```bash
git clone git@github.com:fitautomate/repo-name.git my-custom-folder
```

### 4. Enter the repository and verify

```bash
cd <repo-name>
git remote -v
```

Expected output shows `origin` pointing to the GitHub URL for both fetch and push.

## Troubleshooting

**Permission denied (publickey)**
- SSH key is not added to your GitHub account. See the SSH Setup appendix below, or switch to HTTPS with a Personal Access Token.

**Repository not found**
- Confirm you have access to the repository on GitHub.
- Confirm the URL is correct — check for typos in the org or repo name.

**Remote URL is wrong after cloning**
- Run `git remote set-url origin <correct-url>` to fix.

**HTTPS keeps prompting for credentials**
- Set up SSH (see appendix) or configure a credential manager.

## Related Links

- [GitHub SSH key documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- `🪜 PROC — Docker — Project Backup + Version Control` (uses Git for config version control)

---

## Appendix: SSH Key Setup

Follow these steps once per machine to eliminate password prompts and enable secure automation.

### A1. Check for existing keys

```bash
ls -al ~/.ssh
```

If `id_ed25519.pub` exists, skip to A3.

### A2. Generate a new SSH key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Accept the default file location. Set a passphrase or leave blank.

### A3. Copy the public key

macOS:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

Windows (PowerShell):

```powershell
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

### A4. Add the key to GitHub

1. GitHub → profile icon → **Settings**.
2. **SSH and GPG keys** → **New SSH key**.
3. Paste the key and save.

### A5. Test the connection

```bash
ssh -T git@github.com
```

Expected: `Hi <username>! You've successfully authenticated...`
