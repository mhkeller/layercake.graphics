<script>
	import { LayerCake, ScaledSvg, Canvas } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';
	import { scaleQuantize } from 'd3-scale';

	import MapSvg from '../../components/Map.svg.svelte';
	import MapCanvas from '../../components/Map.canvas.svelte';

	import usStates from '../../data/us-states.topojson.js';

	const geojson = feature(usStates, usStates.objects.collection);
	const aspectRatio = 2.63;

	// Create a flat array of objects that LayerCake can use to measure
	// extents for the color scale
	const flatData = geojson.features.map(d => d.properties);
	const colors = ['#feedde','#fdbe85','#fd8d3c','#e6550d','#a63603'];
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
		z='AREA'
		zScale={scaleQuantize()}
		zRange={colors}
		{flatData}
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
		z='AREA'
		zScale={scaleQuantize()}
		zRange={colors}
		{flatData}
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
