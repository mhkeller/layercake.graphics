<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`example/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { slug: params.slug, data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import examples from '../_examples.js';

	export let slug;
	// export let data;

	const exampleLookup = new Map();
	examples.forEach(exmpl => {
		exampleLookup.set(exmpl.slug, exmpl);
	});

	const example = exampleLookup.get(slug);
</script>

<svelte:head>
	<title>{example.title}</title>
</svelte:head>

<div class="main">
	<h1>{example.title}</h1>

	<div class="chart-hero">
		<svelte:component this={example.component} />
	</div>
</div>

<style>
	.main {
		position: relative;
		max-width: 54em;
		background-color: white;
		padding: 1.5em 2em 2em 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.chart-hero {
		width: 100%;
		height: 200px;
		margin: 1.5em 0 2em 0;
		position: relative;
	}
</style>
