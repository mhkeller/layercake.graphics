import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dsv from '@rollup/plugin-dsv';

export default {
	input: 'src/App.svelte',
	output: {
		file: 'build/App.js',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [
		svelte({
			generate: 'ssr'
		}),
		dsv(),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs()
	]
};
