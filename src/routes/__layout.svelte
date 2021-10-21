<script context="module">
	export async function load({ fetch }) {
		return fetch(`api/guide`).then(r => r.json()).then(sections => {
			return { sections };
		});
	}
</script>

<script>
	import Nav from '../site-components/Nav.svelte';

	export let segment;
	export let sections;
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
