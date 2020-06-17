<script>
	import { LayerCake, ScaledSvg, Canvas } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';

	import MapSvg from '../../components/Map.svg.svelte';
	import MapCanvas from '../../components/Map.canvas.svelte';

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
		position={'absolute'}
		data={geojson}
	>
		<Canvas>
			<MapCanvas
				projection={geoAlbersUsa}
			/>
		</Canvas>
	</LayerCake>

	<LayerCake
		position='absolute'
		ssr={true}
		data={geojson}
	>
		<ScaledSvg
			fixedAspectRatio={aspectRatio}
		>
			<MapSvg
				fixedAspectRatio={aspectRatio}
				projection={geoAlbersUsa}
				features={geojson.features.slice(40, 50)}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
