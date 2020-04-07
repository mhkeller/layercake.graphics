<script>
	import { getContext } from 'svelte';

	const { width, height, xScale, yScale } = getContext('LayerCake');

	export let gridlines = true;
	export let formatTick = d => d;
	export let baseline = false;
	export let snapTicks = false;
	export let ticks = undefined;
	export let tickNumber = undefined;

	$: tickVals = ticks || $xScale.ticks(tickNumber);

	function textAnchor(i) {
		if (snapTicks === true) {
			if (i === 0) {
				return '100%';
			}
			if (i === tickVals.length - 1) {
				return '-100%';
			}
		}
		return '-50%';
	}
</script>

<div class='axis x-axis'>
	{#each tickVals as tick, i}
		{#if gridlines !== false}
			<div class="line vertical" style='left:{$xScale(tick)}%;top: 0;bottom: 0;'></div>
		{/if}
		<div class='tick tick-{ tick }' style='left:{$xScale(tick)}%;top:100%;'>
			<div class="text" style='transform: translate({textAnchor(i)}, 16px)'>{formatTick(tick)}</div>
		</div>
	{/each}
	{#if baseline === true}
		<div class="line baseline horizontal" style='top: 100%;width: 100%;'></div>
	{/if}
</div>

<style>
	.axis,
	.tick,
	.line {
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

	.line.vertical {
		border-left: 1px dotted #aaa;
	}

	.line.horizontal {
		border-top: 1px solid #aaa;
	}

	.tick .text {
		color: #666;
	}

	/* line,
	.tick line {
		stroke-dasharray: 2;
	}

	.baseline {
		stroke-dasharray: 0;
	} */
</style>
