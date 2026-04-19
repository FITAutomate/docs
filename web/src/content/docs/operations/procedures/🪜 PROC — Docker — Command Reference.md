---
title: "Docker — Command Reference"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Docker — Command Reference |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Docker |
| Estimated Time | 2 min |
| Prereqs | Docker Desktop or Docker Engine installed |
| Tags | docker, docker-compose, containers, images, volumes, networks |

# Docker — Command Reference

## Goal

Provide a quick reference for Docker and Docker Compose commands used in FIT development and operations, organized by task type. This is a companion reference — not a sequential procedure.

## When to Use This

When you need a specific Docker command and don't want to leave your workflow to search documentation. Use this alongside other Docker PROCs, not as a replacement for them.

## Prerequisites

- [ ] Docker Desktop or Docker Engine is installed and running (`docker --version`)

## Procedure

This is a command reference organized by task category. Run commands in any order as needed.

### Container Management

```bash
docker ps                        # Running containers only
docker ps -a                     # All containers (including stopped)
docker start <container>         # Start a stopped container
docker stop <container>          # Stop gracefully
docker restart <container>       # Restart
docker kill <container>          # Force stop immediately
docker rm <container>            # Remove stopped container
docker rm -f <container>         # Force remove running container
docker container prune           # Remove all stopped containers
```

### Creating and Running Containers

```bash
docker run <image>               # Run container from image
docker run -d <image>            # Run in background
docker run -p 8080:80 <image>    # Map host port 8080 to container port 80
docker run --name myapp <image>  # Assign a name
docker run -v $(pwd):/app <image>  # Mount current directory
docker run -e KEY=value <image>  # Set environment variable
docker run --rm <image>          # Remove container on exit
```

### Image Management

```bash
docker images                    # List local images
docker build -t myapp:latest .   # Build from Dockerfile in current dir
docker build --no-cache -t myapp:latest .  # Build without cache
docker pull <image>:<tag>        # Download image
docker push <image>:<tag>        # Push image to registry
docker tag <image> <new>:<tag>   # Tag an image
docker rmi <image>               # Remove image
docker image prune               # Remove dangling images
docker image prune -a            # Remove all unused images
```

### Logs and Debugging

```bash
docker logs <container>          # Show logs
docker logs -f <container>       # Follow logs (live)
docker logs --tail 100 <container>  # Last 100 lines
docker exec -it <container> bash # Interactive bash shell
docker exec -it <container> sh   # Interactive sh (Alpine)
docker inspect <container>       # Detailed info (JSON)
docker stats                     # Live resource usage
docker top <container>           # Running processes
```

### Networks

```bash
docker network ls
docker network create mynetwork
docker network connect mynetwork <container>
docker run --network mynetwork <image>
docker network inspect mynetwork
docker network rm mynetwork
docker network prune
```

### Volumes

```bash
docker volume ls
docker volume create myvolume
docker run -v myvolume:/data <image>     # Named volume
docker run -v $(pwd):/app <image>        # Bind mount
docker volume inspect myvolume
docker volume rm myvolume
docker volume prune
```

### Docker Compose

```bash
docker compose up                # Start all services
docker compose up -d             # Start in background
docker compose up --build        # Rebuild before starting
docker compose down              # Stop and remove containers
docker compose down -v           # Also remove volumes
docker compose stop              # Stop without removing
docker compose ps                # List containers
docker compose logs -f           # Follow logs
docker compose logs <service>    # Logs for one service
docker compose exec <service> bash  # Shell in service
docker compose restart <service>
```

### Cleanup

```bash
docker system prune              # Remove stopped containers, unused networks, dangling images
docker system prune -a           # Also remove unused images
docker system prune -a --volumes # Also remove unused volumes
docker system df                 # Show disk usage
docker system df -v              # Verbose disk usage
```

### Useful One-Liners

```bash
# Stop all running containers
docker stop $(docker ps -q)

# Remove all stopped containers
docker rm $(docker ps -a -q)

# View container IP address
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container>

# Copy file from container to host
docker cp <container>:/path/to/file ./local-path

# Copy file from host to container
docker cp ./local-file <container>:/path/to/destination
```

### Environment Variables

```bash
docker run -e DATABASE_URL=postgres://localhost <image>  # Single variable
docker run --env-file .env <image>                       # From file
```

## Troubleshooting

**Container won't start**

```bash
docker logs <container>
docker inspect <container>
```

**Port already in use**

```bash
# Windows
netstat -ano | findstr :<port>

# Linux/Mac
lsof -i :<port>
```

Change the host port mapping in your `docker run` or `docker-compose.yml`.

**Out of disk space**

```bash
docker system df
docker system prune -a --volumes
```

**Image build fails**

```bash
docker build --no-cache -t myapp .
```

**Container can't reach another container**

```bash
docker network create mynet
docker run --network mynet --name svc1 <image>
docker run --network mynet --name svc2 <image>
# svc2 can reach svc1 using hostname "svc1"
```

## Related Links

- [Docker CLI reference](https://docs.docker.com/reference/cli/docker/)
- [Docker Compose reference](https://docs.docker.com/reference/compose-file/)
- `🪜 PROC — Docker — Development Environment Setup`
- `🪜 PROC — Docker Desktop — File Management`
