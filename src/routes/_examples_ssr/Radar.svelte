<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleLinear } from 'd3-scale';

	import Radar from '../../components/Radar.svelte';
	import AxisRadial from '../../components/AxisRadial.svelte';

	// This example loads csv data as json using rollup-plugin-dsv
	import data from '../../data/radarScores.csv';

	const seriesNames = Object.keys(points[0]).filter(d => d !== 'name');

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
		r={['fastball', 'change', 'slider', 'cutter', 'curve']}
		rScale={scaleLinear()}
		rRange={({ height }) => [0, height / 2]}
		rDomain={[0, 10]}
		data={data}
	>
		<Svg>
			<AxisRadial/>
			<Radar/>
		</Svg>
	</LayerCake>
</div>
