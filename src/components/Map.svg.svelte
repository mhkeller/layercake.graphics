<script>
	import { getContext } from 'svelte';
	import { geoPath } from 'd3-geo';

	const { data, width, height, percentRange, aspectRatio } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	/* --------------------------------------------
	 * Add this optional export in case you want to plot only a subset of the features
	 * while keeping the zoom on the whole geojson feature set
	 */
	export let features = $data.features;

	$: fitSizeRange = $percentRange === true ? [100, 100 / $aspectRatio] : [$width, $height];

	$: projectionFn = projection()
		.fitSize(fitSizeRange, $data);

	$: geoPathFn = geoPath(projectionFn);

	function fillRandom(random) {
		const colors = ['#ffdecc', '#ffc09c', '#ffa06b', '#ff7a33'];
		const index = Math.round(random * (colors.length - 1));
		return colors[index];
	}
</script>

<g class="map-group">
	{#each features as feature}
		<path
			class="feature-path"
			fill="{fillRandom(Math.random())}"
			d="{geoPathFn(feature)}"
		></path>
	{/each}
</g>

<style>
	.feature-path {
		stroke: #333;
		stroke-width: 0.5px;
	}
</style>
