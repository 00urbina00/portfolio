import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://00urbina00.dev',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
