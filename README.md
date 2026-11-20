# tanishjain.github.io

Personal site. Built with [Astro](https://astro.build/) and hosted on GitHub Pages.

## Develop

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Deploy

GitHub Actions builds the site and publishes the `dist` folder on pushes to `main` or `master`. The repository's Pages source is GitHub Actions.

## Content

- `src/pages/index.astro` contains the introduction, selected research, writing, and coverage.
- `src/data/site.ts` contains site metadata and profile links.
- `scripts/build-og.mjs` generates the social preview image.
