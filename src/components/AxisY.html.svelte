<script>
	import { getContext } from 'svelte';

	const { padding, xRange, xScale, yScale } = getContext('LayerCake');

	export let ticks = 4;
	export let gridlines = true;
	export let formatTick = d => d;
	export let xTick = 0;
	export let yTick = 0;
	export let dxTick = 0;
	export let dyTick = -4;
	export let textAnchor = 'start';

	$: isBandwidth = typeof $yScale.bandwidth === 'function';

	$: tickVals = Array.isArray(ticks) ? ticks :
		isBandwidth ?
			$yScale.domain() :
			$yScale.ticks(ticks);
</script>

<div class='axis y-axis' style='transform:translate({-$padding.left}px, 0)'>
	{#each tickVals as tick, i}
		<div class='tick tick-{tick}' style='transform:translate({$xRange[0] + (isBandwidth ? $padding.left : 0)}%, {$yScale(tick)}%)'>
			{#if gridlines !== false}
				<div class="gridline" style='top:{$yScale(tick)}%;left: 0;right: 0;'></div>
			{/if}
			<div
			/// TODO
				class="text"
				x='{xTick}'
				y='{yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0)}'
				dx='{isBandwidth ? -5 : dxTick}'
				dy='{isBandwidth ? 4 : dyTick}'
				style="text-anchor:{isBandwidth ? 'end' : textAnchor};"
			>{formatTick(tick)}</div>
		</div>
	{/each}
</div>

<style>
	.axis,
	.tick,
	.gridline,
	.baseline {
		position: absolute;
	}
	.axis {
		width: 100%;
		height: 100%;
	}
	.tick {
		font-size: .725em;
		font-weight: 200;
	}

	.gridline {
		border-top: 1px dashed #aaa;
	}

	.tick .text {
		color: #666;
		position: relative;
	}
</style>
