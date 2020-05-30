<script>
	import { LayerCake, ScaledSvg } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';

	import Map from '../../components/Map.svg.svelte';
	import usStates from '../../data/us-states.topojson.js';

	const geojson = feature(usStates, usStates.objects.collection);
	const initialAspectRatio = 360 / 140;
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
		percentRange={true}
		data={geojson}
		aspectRatio={initialAspectRatio}
		let:aspectRatio
	>
		<ScaledSvg
			viewBox={`0 0 100 ${100 / aspectRatio}`}
		>
			<Map
				projection={geoAlbersUsa}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
