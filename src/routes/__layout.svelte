<script context="module">
	export async function load({ page, fetch }) {
		return fetch(`api/guide`).then(r => r.json()).then(sections => {
			return {
				props: {
					sections,
					segment: page.params.slug
				}
			};
		});
	}
</script>

<script>
	import Nav from '../site-components/Nav.svelte';


	export let segment;
	export let sections;
	console.log('segment', segment);
</script>

<style>
	:global(.input-container) {
		user-select: none;
	}
</style>

<Nav
	{segment}
	{sections}
/>

<main>
	<slot></slot>
</main>
