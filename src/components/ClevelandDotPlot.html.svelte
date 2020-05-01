<script>
	import { getContext } from 'svelte';
	import { scaleOrdinal } from 'd3-scale';

	const { data, xGet, yGet, yScale, originalSettings } = getContext('LayerCake');

	export let seriesColors;
	export let r = 5;

	$: midHeight = $yScale.bandwidth() / 2;

	$: colorScale = scaleOrdinal()
		.domain($originalSettings.x)
		.range(seriesColors);

</script>

<div class="dot-plot">
	{#each $data as row}
		<div class="dot-row">
			<div
				class="line"
				style="
					left: {Math.min(...$xGet(row))}%;
					top: {$yGet(row) + midHeight}%;
					right: {100 - Math.max(...$xGet(row))}%;
				"
			></div>

			{#each $xGet(row) as circleX, i}
				<div
					class="circle"
					style="
						left: {circleX}%;
						top: {$yGet(row) + midHeight}%;
						width: {r * 2}px;
						height: {r * 2}px;
						background: {colorScale($originalSettings.x[i])};
					"
				></div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.line {
		position: absolute;
		border-bottom: 1px solid #000;
	}
	.circle {
		position: absolute;
		border-radius: 50%;
		border: 1px solid #000;
		stroke: #000;
		transform: translate(-50%, -50%);
	}
</style>
