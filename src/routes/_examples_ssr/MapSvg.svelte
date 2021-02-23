<script>
	import { LayerCake, ScaledSvg, Html } from 'layercake';
	import { feature } from 'topojson-client';
	import { geoAlbersUsa } from 'd3-geo';
	import { scaleQuantize } from 'd3-scale';

	// For a map example with a tooltip, check out https://layercake.graphics/example/MapSvg

	import Map from '../../components/Map.svg.svelte';

	import usStates from '../../data/us-states.topojson.js';

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

<div class="chart-container" style="padding-bottom:{100 / aspectRatio}%">
	<LayerCake
		ssr={true}
		position='absolute'
		data={geojson}
		z='FOO'
		zScale={scaleQuantize()}
		zRange={colors}
		{flatData}
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
