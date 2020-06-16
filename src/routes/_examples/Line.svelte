<script>
	import { LayerCake, Svg } from 'layercake';

	import Line from '../../components/Line.svelte';
	import Area from '../../components/Area.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';

	import data from '../../data/points.csv';

	const xKey = 'myX';
	const yKey = 'myY';

	data.forEach(d => {
		d[yKey] = +d[yKey];
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
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		yDomain={[0, null]}
		data={data}
	>
		<Svg>
			<AxisX/>
			<AxisY
				ticks={4}
			/>
			<Line/>
			<Area/>
		</Svg>
	</LayerCake>
</div>
