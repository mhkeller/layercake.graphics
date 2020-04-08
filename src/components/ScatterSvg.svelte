<script>
	import { getContext } from 'svelte';

	const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');

	export let r = 5;
	export let fill = '#000';
	export let dx = 0;
	export let dy = 0;
</script>

<g class="scatter-group">
	{#each $data as d}
		<circle
			cx={$xGet(d) + (typeof dx === 'function' ? dx($xScale) : dx)}
			cy={$yGet(d) + (typeof dy === 'function' ? dy($yScale) : dy)}
			{r}
			{fill}
		/>
	{/each}
</g>
