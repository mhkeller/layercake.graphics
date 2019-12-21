<script>
	import { getContext } from 'svelte';

	const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');
</script>

{#each $data as d, i}
	<rect class='group-rect' data-id="{i}" x="{$xScale.range()[0]}" y="{$yGet(d)}" height={$yScale.bandwidth()} width="{$xGet(d)}"></rect>
{/each}

<style>
	.group-rect {
		fill: #00bbff;
	}
</style>


