<script>
	import { getContext } from 'svelte';

	const { data, width, height, custom } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let features = $data.features;

	$: projection = projection()
		.fitSize([$width, $height], $data);
</script>

<g class="map-labels">
{#each features as feature}
	<text
		class="map-label"
		x="{projection($custom.getLabelCoordinates(feature))[0]}"
		y="{projection($custom.getLabelCoordinates(feature))[1]}"
	>{$custom.getLabelName(feature)}</text>
{/each}
</g>

<style>
	.map-label {
		position: absolute;
		text-align: center;
	}
</style>
