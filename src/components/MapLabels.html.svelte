<script>
	import { getContext } from 'svelte';
	import * as geo from 'd3-geo';

	const { data, width, height, custom } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let features = $data.features;

	$: projectionFn = projection
		.fitSize([$width, $height], $data);
</script>

<div class="map-labels">
{#each features as d}
	<div
		class="map-label"
		style="
			left: {projectionFn($custom.getLabelCoordinates(d))[0]}px;
			top: {projectionFn($custom.getLabelCoordinates(d))[1]}px;
		"
	>{$custom.getLabelName(d)}</div>
{/each}
</div>

<style>
	.map-label {
		position: absolute;
		text-align: center;
		font-size: 10px;
		color: #333;
		margin-top: -3px; /* To match the SVG labels, it needs a slight tweak */
		transform: translate(-50%, -50%);
	}
</style>
