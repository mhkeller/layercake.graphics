<script>
	import { LayerCake, ScaledSvg, Html } from 'layercake';
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
		position='absolute'
		data={geojson}
	>
		<ScaledSvg
			fixedAspectRatio={aspectRatio}
		>
			<Map
				fixedAspectRatio={aspectRatio}
				projection={geoAlbersUsa}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
