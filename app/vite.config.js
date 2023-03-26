import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    server: {
        port: 3111,
		strictPort: true,
        https: false,
        proxy: {}
    }
});