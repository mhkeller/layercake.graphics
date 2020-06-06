<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleLinear } from 'd3-scale';

	import Radar from '../../components/Radar.svelte';
	import AxisRadial from '../../components/AxisRadial.svelte';

	import data from '../../data/radarScores.csv';

	const seriesKey = 'name';
	const xKey = ['fastball', 'change', 'slider', 'cutter', 'curve'];

	const seriesNames = Object.keys(data[0]).filter(d => d !== seriesKey);

	data.forEach(d => {
		seriesNames.forEach(name => {
			d[name] = +d[name];
		});
	});
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ top: 30, right: 0, bottom: 7, left: 0 }}
		x={xKey}
		xDomain={[0, 10]}
		xRange={({ height }) => [0, height / 2]}
		data={data}
	>
		<Svg>
			<AxisRadial/>
			<Radar/>
		</Svg>
	</LayerCake>
</div>
