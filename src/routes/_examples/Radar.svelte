<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleLinear } from 'd3-scale';

	import points from '../../data/radarScores.csv';
	import Radar from '../../components/Radar.svelte';
	import AxisRadial from '../../components/AxisRadial.svelte';

	const seriesNames = Object.keys(points[0]).filter(d => d !== 'name');

	points.forEach(row => {
		seriesNames.forEach(name => {
			row[name] = +row[name];
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
		data={points}
	>
		<Svg>
			<AxisRadial/>
			<Radar/>
		</Svg>
	</LayerCake>
</div>
