<script>
	import { getContext } from 'svelte';

	const { xScale, yScale, height, width } = getContext('LayerCake');

	export let opts = {};

	$: ticks = opts.ticks || $xScale.ticks(opts.tickNumber);

	function textAnchor(i) {
		if (opts.snapTicks === true) {
			if (i === 0) {
				return 'start';
			}
			if (i === ticks.length - 1) {
				return 'end';
			}
		}
		return 'middle';
	}
</script>

<g class='axis x-axis'>
	{#each ticks as tick, i}
		<g class='tick tick-{ tick }' transform='translate({$xScale(tick)},{$yScale.range()[0]})'>
			{#if opts.gridlines !== false}
				<line y1='{$height * -1}' y2='0' x1='0' x2='0'></line>
			{/if}
			<text y='16' text-anchor='{textAnchor(i)}'>{opts.formatTick ? opts.formatTick(tick) : tick}</text>
		</g>
	{/each}
	{#if opts.baseline === true}
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

	.baseline {
		stroke-dasharray: 0;
	}
</style>
