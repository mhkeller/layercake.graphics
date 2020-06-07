<script>
	import { LayerCake, Svg } from 'layercake';
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
		data={geojson}
	>
		<Svg>
			<Map
				projection={geoAlbersUsa}
			/>
		</Svg>
	</LayerCake>
</div>
