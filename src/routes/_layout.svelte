<script context="module">
	export async function preload({ page, session }) {
		return this.fetch(`api/guide`).then(r => r.json()).then(sections => {
			return { sections, page };
		});
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let page = {};
	export let segment;
	export let sections;

	let slug;

	if (page.params) {
		slug = page.params.slug;
	}
</script>

<style>
	:global(.input-container) {
		user-select: none;
	}
</style>

<Nav
	{segment}
	{sections}
	{slug}
/>

<main>
	<slot></slot>
</main>
