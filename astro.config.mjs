import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Astro configuration for a static site build with Tailwind integration
// For GitHub Pages deployment: https://jwein.github.io/sjs-rebuild/
// When switching to custom domain, change site to 'https://www.sjscomms.com' and remove base
export default defineConfig({
	site: 'https://jwein.github.io',
	base: '/sjs-rebuild',
	integrations: [tailwind(), sitemap()],
	output: 'static'
});


