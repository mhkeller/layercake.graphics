<script>
	import { LayerCake, Svg, Html, calcExtents } from 'layercake';

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

	const xDomain = calcExtents(data, [
		{field: 'x', accessor: d => d[xKey] },
	]).x;

	$: xExtents = xDomain.map((d, i) => extents[i] === null ? null : xDomain[0] + (xDomain[1] - xDomain[0]) * extents[i]);

	$: filteredData = data.filter(d => {
		return (d[xKey] > xExtents[0] || xExtents[0] === null) && (d[xKey] < xExtents[1] || xExtents[1] === null);
	})

	// $: console.log('filered', filteredData)
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
		data={filteredData}
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
		yDomain={[0, null]}
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
