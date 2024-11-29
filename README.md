# basic todo app backend

# Prerequisites

## Installed Tools:

### Docker: Install Docker.

### Make: Pre-installed on most Linux and macOS systems. For Windows, install via WSL or a package manager like Chocolatey.

### Docker Hub Account: Required for pushing Docker images.

### Configured Tools:

### Docker Hub: Log in to Docker Hub before running the push-backend target.

```bash
docker login
```

# Environment Variables

Ensure the following variables are configured in the Makefile or as environment variables in your shell:

### DOCKER_USERNAME: Your Docker Hub username ().

### PROJECT_VERSION: Version tag for the Docker image (default: latest).

### BACKEND_IMAGE_NAME: Docker image name for the backend (default: todo-backend).

### BACKEND_CONTAINER_NAME: Docker container name (default: todo-back).

### BACKEND_PORT: Port on which the backend container runs (default: 4007).

# Steps to Deploy

## 1. Clone the Repository

Clone the repository containing the backend project and navigate into the folder:

```bash
git clone <repository-url>
cd <repository-folder>
```

## 2. Build the Docker Image

Build the backend Docker image:

```bash
make build-backend

```

This step:
Uses the Dockerfile in the specified directory.
Builds an image named todo-backend:latest.

## 3. Tag the Docker Image

Tag the image with your Docker Hub username:

```bash
make tag-backend
```

This step:
Tags the image as <DOCKER_USERNAME>/todo-backend:latest.

## 4. Push the Image to Docker Hub

Push the tagged image to Docker Hub:

```bash
make push-backend
```

This step:

Uploads the image to your Docker Hub account for distribution.

## 5. Run the Backend Container

Run the backend container from the pushed image:

```bash
make run-backend
```

This step:

Runs the container with the name todo-back on the specified port.

## 6. Clean Up Resources

To clean up the Docker images and containers:

```bash
make clean
```

This step:

Removes the Docker images and containers created during the process.
Composite Command: Build, Tag, Push, and Run
To execute all the steps (build, tag, push, and run) in one command:

```bash
make all-backend
```

# All service build o run

```bash
make all
```

# Cleanup

```bash
make clean
```

# Custom configuration

```bash
make DOCKER_USERNAME=myuser BACKEND_PORT=4000 all-backend
```
