<script>
	import { getContext } from 'svelte';

	const { width, height, xScale, yScale, padding } = getContext('LayerCake');

	export let gridlines = true;
	export let formatTick = d => d;
	export let baseline = false;
	export let snapTicks = false;
	export let ticks = undefined;
	export let yTick = 7;
	export let dyTick = 0;

	$: isBandwidth = typeof $xScale.bandwidth === 'function';

	$: tickVals = Array.isArray(ticks) ? ticks :
		isBandwidth ?
			$xScale.domain() :
			$xScale.ticks(ticks);

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
			<div class="gridline" style='left:{$xScale(tick)}%;top: -{$padding.top}px;bottom: 0;'></div>
		{/if}
		<div
			class='tick tick-{ i }'
			style='left:{$xScale(tick) + (isBandwidth ? $xScale.bandwidth() / 2 : 0)}%;top:100%;'>
			<div
				class="text"
				style='transform: translate({textAnchor(i)}, {(yTick + dyTick)}px)'>{formatTick(tick)}</div>
		</div>
	{/each}
	{#if baseline === true}
		<div class="baseline" style='top: 100%;width: 100%;'></div>
	{/if}
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
		border-left: 1px dashed #aaa;
	}

	.baseline {
		border-top: 1px solid #aaa;
	}

	.tick .text {
		color: #666;
		position: relative;
		white-space: nowrap;
	}
</style>
