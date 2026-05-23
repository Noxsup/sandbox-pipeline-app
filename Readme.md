# sandbox-pipeline-app

A containerized Node.js app with a multi-stage CI/CD pipeline using Azure DevOps.

## Pipeline Stages

| Stage    | What It Does                              |
|----------|-------------------------------------------|
| Validate | Lints Dockerfile (Hadolint) + YAML        |
| Build    | Builds Docker image                       |
| Push     | Pushes to Docker Hub (dev + latest tags)  |

## Stack
- Azure DevOps Pipelines
- Docker / Docker Hub
- Node.js

## Run Locally
\```bash
docker build -t sandbox-pipeline-app:dev .
docker run -p 3000:3000 sandbox-pipeline-app:dev
\```
