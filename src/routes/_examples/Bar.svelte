<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleBand } from 'd3-scale';

	import Bar from '../../components/Bar.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';

	import groups from '../../data/groups.csv';

	const xKey = 'value';
	const yKey = 'year';

	groups.forEach(d => {
		d[xKey] = +d[xKey];
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
		padding={{ top: 0, bottom: 20, left: 30 }}
		x={xKey}
		y={yKey}
		yScale={scaleBand().paddingInner([0.05]).round(true)}
		yDomain={['1979', '1980', '1981', '1982', '1983']}
		xDomain={[0, null]}
		data={groups}
	>
		<Svg>
			<AxisX
				gridlines={true}
				baseline={true}
				snapTicks={true}
			/>
			<AxisY
				gridlines={false}
			/>
			<Bar/>
		</Svg>
	</LayerCake>
</div>
