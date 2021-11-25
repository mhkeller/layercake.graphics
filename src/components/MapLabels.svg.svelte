<script>
	import { getContext } from 'svelte';

	const { data, width, height, custom } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let features = $data.features;

	$: projectionFn = projection
		.fitSize([$width, $height], $data);
</script>

<g class="map-labels">
{#each features as d}
	<text
		class="map-label"
		x="{projectionFn($custom.getLabelCoordinates(d))[0]}"
		y="{projectionFn($custom.getLabelCoordinates(d))[1]}"
	>{$custom.getLabelName(d)}</text>
{/each}
</g>

<style>
	.map-label {
		color: #333;
		font-size: 10px;
		text-anchor: middle;
	}
</style>
