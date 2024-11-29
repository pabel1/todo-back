
# Global Variables
DOCKER_USERNAME ?=pabel1
PROJECT_VERSION ?=latest

BACKEND_DIR ?= .

# Backend Configuration
BACKEND_IMAGE_NAME ?=todo-backend
BACKEND_CONTAINER_NAME ?=todo-back
BACKEND_PORT ?=4007

# Colored output
GREEN := \033[0;32m]
YELLOW := \033[0;33m]
NC := \033[0m]

# Backend Targets
.PHONY: build-backend
build-backend:
	@echo "$(GREEN)Building Backend Docker Image...$(NC)"
	docker build \
		--no-cache \
		-t $(BACKEND_IMAGE_NAME):$(PROJECT_VERSION) \
		-f $(BACKEND_DIR)/Dockerfile \
		$(BACKEND_DIR)

.PHONY: tag-backend
tag-backend: build-backend
	@echo "$(GREEN)Tagging Backend Docker Image...$(NC)"
	docker tag \
		$(BACKEND_IMAGE_NAME):$(PROJECT_VERSION) \
		$(DOCKER_USERNAME)/$(BACKEND_IMAGE_NAME):$(PROJECT_VERSION)

.PHONY: push-backend
push-backend: tag-backend
	@echo "$(GREEN)Pushing Backend Docker Image to Registry...$(NC)"
	docker push $(DOCKER_USERNAME)/$(BACKEND_IMAGE_NAME):$(PROJECT_VERSION)

.PHONY: run-backend
run-backend: tag-backend
	@echo "$(GREEN)Running Backend Docker Container...$(NC)"
	docker run -d \
		--name $(BACKEND_CONTAINER_NAME) \
		-p $(BACKEND_PORT):4007 \
		$(DOCKER_USERNAME)/$(BACKEND_IMAGE_NAME):$(PROJECT_VERSION)

# Composite Targets

.PHONY: all-backend
all-backend: build-backend tag-backend push-backend run-backend

.PHONY: all
all: all-backend


# Cleanup Targets
.PHONY: clean-backend
clean-backend:
	@echo "$(YELLOW)Cleaning Backend Docker resources...$(NC)"
	@docker rmi $(BACKEND_IMAGE_NAME):$(PROJECT_VERSION) 2>/dev/null || true
	@docker rmi $(DOCKER_USERNAME)/$(BACKEND_IMAGE_NAME):$(PROJECT_VERSION) 2>/dev/null || true
	@docker rm -f $(BACKEND_CONTAINER_NAME) 2>/dev/null || true

.PHONY: clean
clean:clean-backend

# Help Target for view  list  all available command 
.PHONY: help
help:
	@echo "$(GREEN)Docker Project Makefile$(NC)"
	@echo "Available targets:"
	@echo "  build-backend    : Build backend Docker image"
	@echo "  tag-backend      : Tag backend Docker image"
	@echo "  push-backend     : Push backend image to registry"
	@echo "  run-backend      : Run backend Docker container"
	@echo "  all-backend      : Build, tag, push, and run backend"
	@echo "  all              : Build, tag, push, and run all services"
	@echo "  clean            : Remove all Docker images and containers"
	@echo "  help             : Show this help message"