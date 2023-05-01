import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default {
	config,
    kit: {
        adapter: adapter({
            // See below for an explanation of these options
            routes: {
                include: ['/*'],
                exclude: ['<all>']
            }
        })
    }
};
