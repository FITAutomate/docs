---
title: "Docker — Development Environment Setup"
description: ""
---

| Field | Value |
| --- | --- |
| Title | Docker — Development Environment Setup |
| Library | PROC |
| Type | Procedure |
| Visibility | Internal |
| Publish Ready | No |
| Redaction Needed | None |
| Version | 0.9 |
| Owner | FIT Automate |
| Last Updated | 2026-04-18 |
| System | Docker |
| Estimated Time | 20–40 min |
| Prereqs | Docker Desktop, Git, Cursor or VS Code |
| Tags | docker, docker-compose, development, setup |

# Docker — Development Environment Setup

## Goal

Set up a Docker-based local development environment for a FIT project, including Docker Desktop configuration, project file structure, environment variables, and a working `docker-compose.yml`. End state: containers start cleanly, services communicate, and code changes reflect without rebuilding.

## When to Use This

- Starting a new FIT project that uses Docker.
- Onboarding to an existing FIT Docker project on a new machine.
- Rebuilding a development environment from scratch.

## Prerequisites

- [ ] Docker Desktop is installed and running (`docker --version` and `docker compose version` both return version numbers)
- [ ] Git is installed
- [ ] Code editor installed (Cursor or VS Code recommended)

## Procedure

### 1. Verify Docker Desktop installation

```bash
docker --version
docker compose version
```

Both commands must return version numbers before proceeding.

### 2. Configure Docker Desktop resources

1. Open Docker Desktop → **Settings** → **Resources**.
2. Set minimum resources:
   - **CPUs:** 2 (4+ recommended)
   - **Memory:** 4 GB (8 GB+ recommended)
3. Click **Apply & Restart**.

Check current disk usage:

```bash
docker system df
```

### 3. Set up project file structure

Create the following structure in your project directory:

```
my-project/
├── docker-compose.yml       # Multi-container orchestration
├── .env                     # Environment variables — do not commit
├── .env.example             # Template — commit this
├── .dockerignore            # Files to exclude from builds
├── Dockerfile               # Application container definition
├── README.md
├── src/
└── data/                    # Persistent data — add to .gitignore
```

### 4. Create docker-compose.yml

Choose the pattern that matches your project type.

**Simple web application:**

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
```

**Full stack (frontend + backend + database):**

```yaml
version: '3.8'

services:
  db:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: devuser
      POSTGRES_PASSWORD: devpass
      POSTGRES_DB: devdb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U devuser"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build: ./backend
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    environment:
      DATABASE_URL: postgresql://devuser:devpass@db:5432/devdb
      NODE_ENV: development
    depends_on:
      db:
        condition: service_healthy
    command: npm run dev

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      REACT_APP_API_URL: http://localhost:8000
    command: npm start

volumes:
  postgres_data:
```

### 5. Create .env and .env.example

`.env` (do not commit):

```bash
POSTGRES_USER=devuser
POSTGRES_PASSWORD=devpass
POSTGRES_DB=devdb
API_SECRET=change-me
```

`.env.example` (commit this as the template):

```bash
POSTGRES_USER=devuser
POSTGRES_PASSWORD=change-me
POSTGRES_DB=devdb
API_SECRET=change-me
```

Reference variables in `docker-compose.yml`:

```yaml
services:
  app:
    env_file:
      - .env
```

### 6. Create .dockerignore

```
node_modules
.git
.env
*.log
dist
build
```

### 7. Start and verify the environment

```bash
docker compose up -d
docker compose ps
docker compose logs -f
```

All services should show status `Up`. If any service exits immediately, check logs:

```bash
docker compose logs <service-name>
```

## Troubleshooting

**Containers won't start**

```bash
docker compose logs
docker compose down
docker compose up --build
```

**Port already in use**

Find the conflicting process:

```bash
# Windows
netstat -ano | findstr :<port>

# Linux/Mac
lsof -i :<port>
```

Change the host port in `docker-compose.yml` (example: `"3001:3000"` instead of `"3000:3000"`).

**Out of disk space**

```bash
docker system df
docker system prune -a --volumes
```

**Service can't connect to another service**
- Use service names as hostnames in environment variables (example: `DATABASE_URL=postgresql://devuser:devpass@db:5432/devdb`).
- The hostname `db` refers to the service named `db` in `docker-compose.yml`.

**Code changes not reflecting**
- For Dockerfile or dependency changes: `docker compose up -d --build`
- For `docker-compose.yml` changes: `docker compose down && docker compose up -d`

## Related Links

- [Docker Compose documentation](https://docs.docker.com/compose/)
- [Docker environment variables](https://docs.docker.com/compose/environment-variables/)
- `🪜 PROC — Docker — Command Reference`
- `🪜 PROC — Docker Desktop — File Management`
- `🪜 PROC — Docker — Project Backup + Version Control`
