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
{#each features as feature}
	<div
		class="map-label"
		style="
			left: {projectionFn($custom.getLabelCoordinates(feature))[0]}px;
			top: {projectionFn($custom.getLabelCoordinates(feature))[1]}px;
		"
	>{$custom.getLabelName(feature)}</div>
{/each}
</div>

<style>
	.map-label {
		position: absolute;
		text-align: center;
		font-size: 10px;
		color: #999;
		transform: translate(-50%, -50%);
	}
</style>
