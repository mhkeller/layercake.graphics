<script>
	/**
		Generates an HTML scatter plot. This component can also work if the x- or y-scale is ordinal, i.e. it has a `.bandwidth` method. See the [timeplot chart](https://layercake.graphics/example/Timeplot) for an example.
		@type {Number} [r=5] – The circle's radius.
		@type {String} [fill='#0cf'] – The circle's fill color.
		@type {String} [stroke='#000'] – The circle's stroke color.
		@type {Number} [strokeWidth=1] – The circle's stroke width.
	*/
	import { getContext } from 'svelte';

	const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');

	export let r = 5;
	export let fill = '#0cf';
	export let stroke = '#000';
	export let strokeWidth = 1;
</script>

<div class="scatter-group">
	{#each $data as d}
		<div
			class="circle"
			style="
				left: {$xGet(d)+ ($xScale.bandwidth ? $xScale.bandwidth() / 2 : 0)}%;
				top: {$yGet(d) + ($yScale.bandwidth ? $yScale.bandwidth() / 2 : 0)}%;
				width: {r * 2}px;
				height: {r * 2}px;
				background-color: {fill};
				border: {strokeWidth}px solid {stroke};
			"
		/>
	{/each}
</div>

<style>
	.circle {
		position: absolute;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
</style>
