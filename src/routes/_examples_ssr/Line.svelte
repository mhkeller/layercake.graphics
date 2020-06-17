<script>
	import { LayerCake, ScaledSvg, Html } from 'layercake';

	import Line from '../../components/Line.svelte';
	import Area from '../../components/Area.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';

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
		ssr={true}
		percentRange={true}
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={d => d[yKey]}
		yDomain={[0, null]}
		data={data}
	>
		<Html>
				<AxisX/>
				<AxisY
					ticks={4}
				/>
		</Html>
		<ScaledSvg>
			<Line/>
			<Area/>
		</ScaledSvg>
	</LayerCake>
</div>
