<script>
	import { getContext } from 'svelte';

	const { height, xScale, yScale } = getContext('LayerCake');

	export let formatTick = d => d;
	export let gridlines = true;

</script>

<div class='axis x-axis'>
	{#each $xScale.domain() as tick}
		<div class='tick tick-{ tick }' transform='translate({$xScale(tick)},{$yScale.range()[0]})'>
			{#if gridlines !== false}
				<div y1='{$height * -1}' y2='0' x1='0' x2='0'></div>
			{/if}
			<div y='16' x="{$xScale.bandwidth() / 2}">{formatTick(tick)}</div>
		</div>
	{/each}
</div>

<style>
	.tick {
		font-size: .725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #aaa;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #666;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}
</style>
