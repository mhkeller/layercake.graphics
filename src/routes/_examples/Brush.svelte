<script>
	import { LayerCake, Svg, Html } from 'layercake';

	import Line from '../../components/Line.svelte';
	import Area from '../../components/Area.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	import Brush from '../../components/Brush.svelte';

	import data from '../../data/points.csv';

	let extents = [null, null];

	const xKey = 'myX';
	const yKey = 'myY';

	data.forEach(d => {
		d[xKey] = +d[xKey];
		d[yKey] = +d[yKey];
	});

	let brushedData;
	$: {
		brushedData = data.slice((extents[0] || 0) * data.length, (extents[1] || 1) * data.length);
		if (brushedData.length === 0) {
			brushedData = data.slice(extents[0] * data.length, extents[0] * data.length + 1)
		}
	}

	// $: console.log('filered', brushedData)
</script>

<style>
	.chart-container {
		width: 100%;
		height: 80%;
	}
	.brush-container {
		width: 100%;
		height: 20%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		yDomain={[0, null]}
		data={brushedData}
	>
		<Svg>
			<AxisX
				ticks={ticks => ticks.filter(t => t % 1 === 0)}
			/>
			<AxisY
				ticks={4}
			/>
			<Line/>
			<Area/>
		</Svg>
	</LayerCake>
</div>

<div class="brush-container">
	<LayerCake
		x={xKey}
		y={yKey}
		yDomain={[0, 10]}
		data={data}
	>
		<Svg>
			<Line/>
			<Area/>
		</Svg>
		<Html>
			<Brush bind:min={extents[0]} bind:max={extents[1]}/>
		</Html>
	</LayerCake>
</div>
