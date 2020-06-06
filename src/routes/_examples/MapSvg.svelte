<script>
	import { LayerCake, Svg } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';

	import usStates from '../../data/us-states.topojson.js';

	import Map from '../../components/Map.svg.svelte';

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
