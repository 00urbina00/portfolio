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

Pushes to `main` publish an immutable container image to GHCR. The production
workflow then deploys that image through a repository-scoped delivery runner.
Server addresses, usernames, filesystem paths and deployment credentials are
intentionally kept outside this public repository.

The `ops/` directory contains the deployment helper used by the private
hosting environment. It verifies that the running container is healthy and
uses the immutable image published by the current workflow run.

## Updating content

Portfolio copy and project data live in `src/data/portfolio.ts`. Each project automatically receives:

- A bilingual card and quick-view dialog.
- A detail page under `/projects/<slug>/` and `/es/projects/<slug>/`.
- Optional live-app and source-code links.

The previous CV artifact is retained locally but is not publicly served while
its personal details are being reviewed.
