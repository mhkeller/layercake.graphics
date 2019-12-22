<script>
	import { getContext } from 'svelte';

	const { data, xGet, yGet } = getContext('LayerCake');

	export let r;
	export let fill;
</script>

<g class="scatter-group">
	{#each $data as d}
		<circle
			cx={$xGet(d)}
			cy={$yGet(d)}
			{r}
			{fill}
		></circle>
	{/each}
</g>
