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

## Updating content

Portfolio copy and project data live in `src/data/portfolio.ts`. Each project automatically receives:

- A bilingual card and quick-view dialog.
- A detail page under `/projects/<slug>/` and `/es/projects/<slug>/`.
- Optional live-app and source-code links.

The downloadable CV is served from `public/cv/Eduardo-Daniel-Urbina-Campos-CV.pdf`.
