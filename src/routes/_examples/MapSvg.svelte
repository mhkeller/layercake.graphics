<script>
	import { LayerCake, Svg, Html } from 'layercake';
	import { feature } from 'topojson';
	import { geoAlbersUsa } from 'd3-geo';
	import { scaleQuantize } from 'd3-scale';
	import { format } from 'd3-format';

	import Map from '../../components/Map.svg.svelte';
	import Tooltip from '../../components/Tooltip.svelte';

	import usStates from '../../data/us-states.topojson.js';

	const geojson = feature(usStates, usStates.objects.collection);

	let evt;
	let hideTooltip = true;

	// Create a flat array of objects that LayerCake can use to measure
	// extents for the color scale
	const flatData = geojson.features.map(d => d.properties);
	const colors = ['#ffdecc', '#ffc09c', '#ffa06b', '#ff7a33'];

	const addCommas = format(',');
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
		z='FOO'
		zScale={scaleQuantize()}
		zRange={colors}
		{flatData}
	>
		<Svg>
			<Map
				projection={geoAlbersUsa}
				on:mousemove={event => evt = hideTooltip= event}
				on:mouseout={() => hideTooltip = true}
			/>
		</Svg>

		<Html
			pointerEvents={false}
		>
			{#if hideTooltip !== true}
				<Tooltip
					{evt}
					let:detail
				>
					{#each Object.entries(detail.props) as [key, value]}
						<div class="row"><span>{key}:</span> {typeof value === 'number' ? addCommas(value) : value}</div>
					{/each}
				</Tooltip>
			{/if}
		</Html>
	</LayerCake>
</div>
