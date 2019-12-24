<script>
	import { getContext } from 'svelte';
	import * as geo from 'd3-geo';

	const { data, width, height } = getContext('LayerCake');

	export let projectionName = 'geoAlbersUsa';

	$: projection = geo[projectionName]()
		.fitSize([$width, $height], $data);

	$: geoPath = geo.geoPath(projection);

	function fillRandom(random) {
		const colors = ['#ffdecc', '#ffc09c', '#ffa06b', '#ff7a33'];
		const index = Math.round(random * (colors.length - 1));
		return colors[index];
	}
</script>

<g class="map-group">
	{#each $data.features as feature}
		<path
			class="feature-path"
			fill="{fillRandom(Math.random())}"
			d="{geoPath(feature)}"
		></path>
	{/each}
</g>

<style>
	.feature-path {
		stroke: #333;
		stroke-width: 0.5px;
	}
</style>
