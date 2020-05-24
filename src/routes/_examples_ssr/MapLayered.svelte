<script>
	import { LayerCake, SvgSsr, Canvas } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';

	import usStates from '../../data/us-states.topojson.js';
	import MapSvg from '../../components/Map.svg.svelte';
	import MapCanvas from '../../components/Map.canvas.svelte';

	const geojson = feature(usStates, usStates.objects.collection);
	const initialAspectRatio = 360 / 140;
</script>

<style>
	.chart-container {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
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
		position={'absolute'}
		ssr={true}
		percentRange={true}
		data={geojson}
		aspectRatio={initialAspectRatio}
		let:aspectRatio
	>
		<SvgSsr
			viewBox={`0 0 100 ${100 / aspectRatio}`}
		>
			<MapSvg
				projection={geoAlbersUsa}
				features={ geojson.features.slice(40, 50) }
			/>
		</SvgSsr>
	</LayerCake>
</div>
