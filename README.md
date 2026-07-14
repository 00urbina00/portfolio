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

Pushes to `main` publish both `latest` and `sha-<commit>` images to GHCR. After publishing, the production job runs on the homelab runner and invokes the root-owned deploy script:

```bash
sudo /srv/scripts/deploy-portfolio.sh "sha-${GITHUB_SHA}"
```

Install the repository template once on the Debian server:

```bash
sudo install -o root -g root -m 0755 \
  ops/deploy-portfolio.sh \
  /srv/scripts/deploy-portfolio.sh
```

The runner's sudo policy should allow only that exact script without a password. The script supports both a Compose-managed `portfolio` service and the original standalone `portfolio` container on the `homelab` network. It verifies that the running container is healthy and uses the immutable image published by the current workflow run.

## Updating content

Portfolio copy and project data live in `src/data/portfolio.ts`. Each project automatically receives:

- A bilingual card and quick-view dialog.
- A detail page under `/projects/<slug>/` and `/es/projects/<slug>/`.
- Optional live-app and source-code links.

The downloadable CV is served from `public/cv/Eduardo-Daniel-Urbina-Campos-CV.pdf`.
