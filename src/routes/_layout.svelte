<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	:global(.input-container) {
		user-select: none;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
