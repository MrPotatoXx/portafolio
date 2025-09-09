// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://potatox.me',
	i18n: {
	  locales: ['es', 'en'],
	  defaultLocale: 'es',
	  routing: {
	    prefixDefaultLocale: true,
	  },
	},
	integrations: [sitemap()],
	vite: /** @type {any} */ ({
	  plugins: [tailwindcss()],
	}),
});