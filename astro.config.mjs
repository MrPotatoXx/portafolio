// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://potatox.me',
	integrations: [sitemap()],
	vite: /** @type {any} */ ({
	  plugins: [tailwindcss()],
	}),
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: false
		}
	},
	fonts: [{
		provider: fontProviders.google(),
		name: "Source Code Pro",
		cssVariable: "--font-source-code-pro",
		weights: [400, 700]
	}],
	security: {
		csp: true
	}
});