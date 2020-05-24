<script>
	import { LayerCake, SvgSsr } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';

	import Map from '../../components/Map.svg.svelte';
	import usStates from '../../data/us-states.topojson.js';

	const geojson = feature(usStates, usStates.objects.collection);
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		ssr={true}
		percentScale={true}
		data={geojson}
		let:aspectRatio
	>
		<SvgSsr
			viewBox={`0 0 100 ${100 / aspectRatio}`}
		>
			<Map
				projection={geoAlbersUsa}
			/>
		</SvgSsr>
	</LayerCake>
</div>
