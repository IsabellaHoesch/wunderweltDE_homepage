// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.wunderwelt.kids',
  integrations: [react()],
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
