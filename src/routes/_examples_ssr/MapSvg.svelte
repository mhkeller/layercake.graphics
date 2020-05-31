<script>
	import { LayerCake, ScaledSvg } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';

	import Map from '../../components/Map.svg.svelte';
	import usStates from '../../data/us-states.topojson.js';

	const geojson = feature(usStates, usStates.objects.collection);
	const aspectRatio = 2.63;
</script>

<style>
	.chart-container {
		position: relative;
		width: 100%;
	}
</style>

<div class="chart-container" style="padding-bottom:{100 / aspectRatio}%">
	<LayerCake
		ssr={true}
		percentRange={true}
		position='absolute'
		data={geojson}
		{aspectRatio}
	>
		<ScaledSvg
			viewBox={`0 0 100 ${100 / aspectRatio}`}
		>
			<Map
				{aspectRatio}
				projection={geoAlbersUsa}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
