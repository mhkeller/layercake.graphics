<script>
	/**
		Adds text annotations that get their x and y placement using the `xScale` and `yScale`.
		@param {Array} [annotations=[]] – A list of annotation objects.
		@param {Function} [getText=d => d.text] – An accessor function to get the field to display.
		@param {Boolean} [percentRange=false] – If `true` will set the `top` and `left` CSS positions to percentages instead of pixels.
	*/
	import { getContext } from 'svelte';

	const { xGet, yGet } = getContext('LayerCake');

	export let annotations = [];
	export let getText = d => d.text;
	export let percentRange = false;

	$: units = percentRange === true ? '%' : 'px';
</script>

<div class="layercake-annotations">
	{#each annotations as d, i}
		<div
			class="layercake-annotation"
			data-id="{i}"
			style="top:{$yGet(d)}{units};left:{$xGet(d)}{units};"
		>{getText(d)}</div>
	{/each}
</div>

<style>
	.layercake-annotation {
		position: absolute;
	}
</style>

