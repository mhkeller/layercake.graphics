<script>
	import { LayerCake, Svg } from 'layercake';
	import { feature } from 'topojson';
	import usStates from '../../data/us-states.topojson.js';

	import MapSvg from '../../components/MapSvg.svelte';

	const geojson = feature(usStates, usStates.objects.collection);
</script>

<div class="chart-container">
	<LayerCake
		data={geojson}
	>
		<Svg>
			<MapSvg
				projectionName={'geoAlbersUsa'}
			/>
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
