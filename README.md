# Eduardo Urbina — Portfolio

A bilingual portfolio built with Astro. It presents Eduardo's product engineering, AWS, infrastructure and applied AI work through interactive project cards and expandable case-study pages.

## Local development

```bash
npm install
npm run dev
```

The English site is available at `/` and the Spanish site at `/es/`.

## Production build

```bash
npm run build
npm run preview
```

The Docker image uses a Node build stage and serves the generated static site with Nginx. `/health` remains available for container and external health checks.

## Production deployment

Pushes to `main` publish both `latest` and the immutable
`sha-<40-character-commit>` image to GHCR. After publishing, the production
job runs on the repository-scoped homelab runner and invokes the root-owned
deploy script:

```bash
sudo /srv/scripts/deploy-portfolio.sh "sha-${GITHUB_SHA}"
```

The `ops/` directory exists in this repository, not on the server. Copy the
script from the development PC and install it once on Debian:

```powershell
scp -i "$env:USERPROFILE\.ssh\id_ed25519" `
  ".\ops\deploy-portfolio.sh" `
  daniel@192.168.0.224:/tmp/deploy-portfolio.sh
```

```bash
sudo mkdir -p /srv/scripts
sudo install -o root -g root -m 0755 \
  /tmp/deploy-portfolio.sh \
  /srv/scripts/deploy-portfolio.sh
rm /tmp/deploy-portfolio.sh
```

The portfolio repository needs its own repository-scoped self-hosted runner,
configured with the `homelab` label. Its sudo policy should allow only that
exact script without a password. The script supports both a Compose-managed
`portfolio` service and the original standalone `portfolio` container on the
`homelab` network. It verifies that the running container is healthy and uses
the immutable image published by the current workflow run.

## Updating content

Portfolio copy and project data live in `src/data/portfolio.ts`. Each project automatically receives:

- A bilingual card and quick-view dialog.
- A detail page under `/projects/<slug>/` and `/es/projects/<slug>/`.
- Optional live-app and source-code links.

The downloadable CV is served from `public/cv/Eduardo-Daniel-Urbina-Campos-CV.pdf`.
