// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://xzsv.github.io/',
	integrations: [
		starlight({
			title: 'XZSV',
			description:
				'The Svelte SPA router with first-class transitions and loading orchestration.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/xzsv' }],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Overview', link: '/' },
						{ label: 'Why XZSV', slug: 'guides/why' },
						{ label: 'Quick start', slug: 'guides/quick-start' },
					],
				},
				{
					label: '@xzsv/router',
					items: [{ label: 'Transitions', slug: 'guides/router-transitions' }],
				},
				{
					label: '@xzsv/load',
					items: [{ label: 'Loading & overlays', slug: 'guides/load' }],
				},
				{
					label: '@xzsv/animate',
					items: [{ label: 'Presets', slug: 'guides/animate' }],
				},
				{
					label: '@xzsv/bar',
					items: [{ label: 'The HUD bar', slug: 'guides/bar' }],
				},
			],
			plugins: [starlightLlmsTxt()],
		}),
	],
});
