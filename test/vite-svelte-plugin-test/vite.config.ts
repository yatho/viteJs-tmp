import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import eslint from '@rollup/plugin-eslint';

export default defineConfig({
	plugins: [sveltekit(), eslint({})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
