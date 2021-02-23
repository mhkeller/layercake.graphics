<script>
	import { LayerCake, ScaledSvg, Canvas } from 'layercake';
	import { feature } from 'topojson-client';
	import { geoAlbersUsa } from 'd3-geo';
	import { scaleQuantize } from 'd3-scale';

	// For a map example with a tooltip, check out https://layercake.graphics/example/MapSvg

	import MapSvg from '../../components/Map.svg.svelte';
	import MapCanvas from '../../components/Map.canvas.svelte';

	// This example loads json data as json using @rollup/plugin-json
	import usStates from '../../data/us-states.topojson.json';

	const zKey = 'FOO';

	const geojson = feature(usStates, usStates.objects.collection);
	const aspectRatio = 2.63;

	// Create a flat array of objects that LayerCake can use to measure
	// extents for the color scale
	const flatData = geojson.features.map(d => d.properties);
	const colors = ['#ffdecc', '#ffc09c', '#ffa06b', '#ff7a33'];
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
		The height is being set inline with `padding-bottom` using the aspect ratio trick below.
	*/
	.chart-container {
		position: relative;
		width: 100%;
	}
</style>

<div class="chart-container" style="padding-bottom:{100 / aspectRatio}%;">
	<LayerCake
		position='absolute'
		data={geojson}
		z={zKey}
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
		z={zKey}
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
