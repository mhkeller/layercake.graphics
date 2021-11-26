<script>
	/**
		Generates an SVG x-axis
		@param {Boolean} [gridlines=true] – Extend lines from the ticks into the chart space
		@param {Boolean} [tickMarks=false] – Show a vertical mark for each tick.
		@param {Boolean} [baseline=false] – Show a solid line at the bottom.
		@param {Boolean} [snapTicks=false] – Instead of centering the text on the first and the last items, align them to the edges of the chart.
		@param {Function} [formatTick=d => d] – A function that passes the current tick value and expects a nicely formatted value in return.
		@param {Number|Array|Function} [ticks] – If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return.
		@param {Number} [xTick=0] – TK
		@param {Number} [yTick=16] – The distance from the baseline to place each tick value.
		@param {Number} [dxTick=0] – A value that can be added to `xTick` for additional styling.
		@param {Number} [dyTick=0] – A value that can be added to `yTick` for additional styling.
	*/
		import { getContext } from 'svelte';

	const { width, height, xScale, yRange } = getContext('LayerCake');

	export let gridlines = true;
	export let tickMarks = false;
	export let baseline = false;
	export let snapTicks = false;
	export let formatTick = d => d;
	export let ticks = undefined;
	export let xTick = undefined;
	export let yTick = 16;
	export let dxTick = 0;
	export let dyTick = 0;

	$: isBandwidth = typeof $xScale.bandwidth === 'function';

	$: tickVals = Array.isArray(ticks) ? ticks :
		isBandwidth ?
			$xScale.domain() :
			typeof ticks === 'function' ?
				ticks($xScale.ticks()) :
					$xScale.ticks(ticks);

	function textAnchor(i) {
		if (snapTicks === true) {
			if (i === 0) {
				return 'start';
			}
			if (i === tickVals.length - 1) {
				return 'end';
			}
		}
		return 'middle';
	}
</script>

<g class='axis x-axis' class:snapTicks>
	{#each tickVals as tick, i}
		<g class='tick tick-{ i }' transform='translate({$xScale(tick)},{$yRange[0]})'>
			{#if gridlines !== false}
				<line class="gridline" y1='{$height * -1}' y2='0' x1='0' x2='0'></line>
			{/if}
			{#if tickMarks === true}
				<line class="tick-mark" y1='{0}' y2='{6}' x1='{xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}' x2='{xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}'></line>
			{/if}
			<text
				x="{xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}"
				y='{yTick}'
				dx='{dxTick}'
				dy='{dyTick}'
				text-anchor='{textAnchor(i)}'>{formatTick(tick)}</text>
		</g>
	{/each}
	{#if baseline === true}
		<line class="baseline" y1='{$height + 0.5}' y2='{$height + 0.5}' x1='0' x2='{$width}'></line>
	{/if}
</g>

<style>
	.tick {
		font-size: .725em;
		font-weight: 200;
	}

	line,
	.tick line {
		stroke: #aaa;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #666;
	}

	.tick .tick-mark,
	.baseline {
		stroke-dasharray: 0;
	}
	/* This looks slightly better */
	.axis.snapTicks .tick:last-child text {
		transform: translateX(3px);
	}
	.axis.snapTicks .tick.tick-0 text {
		transform: translateX(-3px);
	}
</style>
