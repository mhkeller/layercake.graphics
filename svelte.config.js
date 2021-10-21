import dsv from '@rollup/plugin-dsv';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				dsv()
			],
			// ssr: {
			// 	noExternal: []
			// },
			optimizeDeps: {
				include: ['layercake']
			}
		}
	}
};

export default config;
