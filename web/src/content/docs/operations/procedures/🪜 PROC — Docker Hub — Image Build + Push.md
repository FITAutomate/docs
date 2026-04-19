---
title: "Docker Hub — Image Build + Push"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Docker Hub — Image Build + Push |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Docker Hub |
| Estimated Time | 10–15 min |
| Prereqs | Docker installed and running, Docker Hub account, Docker Hub repo created, Dockerfile available |
| Tags | docker, dockerhub, image, build, tag, push |

# Docker Hub — Image Build + Push

## Goal

Build a Docker image from a local Dockerfile, tag it for Docker Hub, and push it to the FIT Docker Hub repository. End state: the image is available in Docker Hub under the correct namespace and tag.

## When to Use This

- Publishing a new version of a FIT Docker image to Docker Hub.
- Tagging and pushing an updated `fit-dev` image after changes.
- Setting up a new image repository under the `fitautomate` Docker Hub namespace.

## Prerequisites

- [ ] Docker Desktop is installed and running
- [ ] Docker Hub account with access to the `fitautomate` namespace
- [ ] Docker Hub repository exists (example: `fitautomate/fit-dev`)
- [ ] `Dockerfile` is present in the project directory

## Procedure

### 1. Authenticate with Docker Hub

```bash
docker login
```

When prompted, enter your Docker ID and password or Personal Access Token.

> Use a Personal Access Token instead of your password for better security.

### 2. Build the image

From the directory containing your `Dockerfile`:

```bash
docker build -t fit-dev .
```

Verify the build succeeded:

```bash
docker image ls
```

### 3. Tag the image for Docker Hub

```bash
docker tag fit-dev fitautomate/fit-dev:latest
```

Add version tags for production images:

```bash
docker tag fit-dev fitautomate/fit-dev:1.0.0
```

Verify:

```bash
docker image ls | grep fit-dev
```

### 4. Push to Docker Hub

```bash
docker push fitautomate/fit-dev:latest
```

To push all tags at once:

```bash
docker push fitautomate/fit-dev --all-tags
```

### 5. Verify on Docker Hub

1. Go to [https://hub.docker.com](https://hub.docker.com) and sign in.
2. Navigate to **Repositories** → `fitautomate/fit-dev`.
3. Confirm the expected tags appear under the **Tags** tab.

## Troubleshooting

| Issue | Solution |
| --- | --- |
| `denied: requested access to the resource is denied` | Run `docker login` and confirm credentials are correct |
| `image does not exist locally` | Confirm the image was built and tagged correctly with `docker image ls` |
| `repository not found` | Confirm the repository exists at `docker.io/fitautomate/fit-dev` |
| Push succeeds but tag not visible | Refresh Docker Hub. Allow up to 30 seconds for propagation. |

## Related Links

- [Docker Hub documentation](https://docs.docker.com/docker-hub/)
- [Docker tag reference](https://docs.docker.com/reference/cli/docker/image/tag/)
- [Docker push reference](https://docs.docker.com/reference/cli/docker/image/push/)
- `🪜 PROC — Docker — Development Environment Setup`
