import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://luxurybeds.example.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react()
  ],
  vite: {
    ssr: {
      noExternal: ['@headlessui/react']
    }
  }
});