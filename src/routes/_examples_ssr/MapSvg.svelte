<script>
	import { LayerCake, SvgSsr } from 'layercake';
	import { feature } from 'topojson';
	import usStates from '../../data/us-states.topojson.js';

	import Map from '../../components/MapSvg.svelte';

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
		data={geojson}
		let:aspectRatio
	>
		<SvgSsr
			viewBox={`0 0 100 ${100 / aspectRatio}`}
		>
			<Map
				projectionName={'geoAlbersUsa'}
			/>
		</SvgSsr>
	</LayerCake>
</div>
