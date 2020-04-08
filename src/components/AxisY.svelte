<script>
	import { getContext } from 'svelte';

	const { padding, xRange, xScale, yScale } = getContext('LayerCake');

	export let ticks = undefined;
	export let gridlines = true;
	export let formatTick = d => d;
	export let tickX = '0';
	export let tickY = '';
	export let tickDx = '0';
	export let tickDy = '-4';
	export let textAnchor = 'start';

	$: tickVals = Array.isArray(ticks) ? ticks : typeof ticks === 'function' ? ticks($yScale) : $yScale.ticks(ticks);
</script>

<g class='axis y-axis' transform='translate(-{$padding.left}, 0)'>
	{#each tickVals as tick, i}
		<g class='tick tick-{tick}' transform='translate({$xRange[0]}, {$yScale(tick)})'>
			{#if gridlines !== false}
				<line
					x2='100%'
					y1={typeof tickY === 'function' ? tickY($yScale) : tickY}
					y2={typeof tickY === 'function' ? tickY($yScale) : tickY}
				></line>
			{/if}
			<text
				x={typeof tickX === 'function' ? tickX($xScale) : tickX}
				y={typeof tickY === 'function' ? tickY($yScale) : tickY}
				dx='{typeof tickDx === 'function' ? tickDx($xScale) : tickDx}'
				dy='{typeof tickDy === 'function' ? tickDy($yScale) : tickDy}'
				style="text-anchor:{textAnchor};"
			>{formatTick(tick)}</text>
		</g>
	{/each}
</g>

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
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}
</style>
