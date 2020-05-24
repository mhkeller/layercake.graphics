<script>
	import { LayerCake, Svg, Canvas } from 'layercake';
	import { feature } from 'topojson';

	import usStates from '../../data/us-states.topojson.js';
	import MapSvg from '../../components/Map.svg.svelte';
	import MapCanvas from '../../components/MapCanvas.svelte';

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
		data={geojson}
	>

		<Canvas>
			<MapCanvas
				projectionName={'geoAlbersUsa'}
			/>
		</Canvas>

		<Svg>
			<MapSvg
				projectionName={'geoAlbersUsa'}
				features={ geojson.features.slice(40, 50) }
			/>
		</Svg>
	</LayerCake>
</div>
