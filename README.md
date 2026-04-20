# tanishjain.github.io

Personal portfolio site. Built with [Astro](https://astro.build/), hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in ./dist
npm run preview
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds the site and publishes the `dist` folder to GitHub Pages on every push to `main`. Before the first deploy, enable Pages in the repository settings with source set to "GitHub Actions".

## Content

- `src/data/site.ts` — global site metadata and social links
- `src/data/experience.ts` — roles shown in the Experience section
- `src/data/projects.ts` — featured projects and extras (under a collapsible block)
- `public/resume.pdf` — linked from the hero download button
