#!/usr/bin/env bash
set -Eeuo pipefail

IMAGE_REPOSITORY="ghcr.io/00urbina00/portfolio"
CONTAINER_NAME="portfolio"
NETWORK_NAME="homelab"
TAG="${1:-}"

if [[ ! "${TAG}" =~ ^sha-[0-9a-f]{40}$ ]]; then
  echo "Usage: $0 sha-<40-character-git-commit>" >&2
  exit 64
fi

image="${IMAGE_REPOSITORY}:${TAG}"

echo "Pulling ${image}"
docker pull "${image}"

expected_image_id="$(docker image inspect --format '{{.Id}}' "${image}")"
compose_service=""
compose_workdir=""
compose_files=""

if docker container inspect "${CONTAINER_NAME}" >/dev/null 2>&1; then
  compose_service="$(docker inspect --format '{{index .Config.Labels "com.docker.compose.service"}}' "${CONTAINER_NAME}")"
  compose_workdir="$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project.working_dir"}}' "${CONTAINER_NAME}")"
  compose_files="$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project.config_files"}}' "${CONTAINER_NAME}")"
fi

if [[ -n "${compose_service}" && -n "${compose_workdir}" && -n "${compose_files}" ]]; then
  echo "Redeploying Compose service ${compose_service} from ${compose_workdir}"

  # The existing stack points at :latest. Retag the immutable build locally so
  # Compose recreates the service with the exact image published by this run.
  docker tag "${image}" "${IMAGE_REPOSITORY}:latest"

  IFS=',' read -r -a compose_file_list <<< "${compose_files}"
  compose_args=()
  for compose_file in "${compose_file_list[@]}"; do
    compose_args+=(--file "${compose_file}")
  done

  cd "${compose_workdir}"
  docker compose "${compose_args[@]}" up \
    --detach \
    --no-deps \
    --force-recreate \
    --pull never \
    "${compose_service}"
else
  echo "Redeploying standalone container ${CONTAINER_NAME}"
  docker rm --force "${CONTAINER_NAME}" >/dev/null 2>&1 || true
  docker run \
    --detach \
    --name "${CONTAINER_NAME}" \
    --restart unless-stopped \
    --network "${NETWORK_NAME}" \
    "${image}"
fi

for attempt in $(seq 1 30); do
  status="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "${CONTAINER_NAME}")"
  running_image_id="$(docker inspect --format '{{.Image}}' "${CONTAINER_NAME}")"

  if [[ "${status}" == "healthy" && "${running_image_id}" == "${expected_image_id}" ]]; then
    echo "Portfolio deployed successfully with ${image}"
    exit 0
  fi

  if [[ "${status}" == "unhealthy" || "${status}" == "exited" || "${status}" == "dead" ]]; then
    docker logs --tail 100 "${CONTAINER_NAME}" >&2 || true
    echo "Portfolio container entered state: ${status}" >&2
    exit 1
  fi

  echo "Waiting for portfolio health check (${attempt}/30): ${status}"
  sleep 2
done

docker logs --tail 100 "${CONTAINER_NAME}" >&2 || true
echo "Portfolio did not become healthy in time" >&2
exit 1
