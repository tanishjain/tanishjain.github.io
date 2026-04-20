import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tanishjain.github.io',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
