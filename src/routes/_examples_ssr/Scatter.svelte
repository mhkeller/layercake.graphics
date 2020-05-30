<script>
	import { LayerCake, ScaledSvg, Html, Canvas } from 'layercake';

	import points from '../../data/points.csv';
	import Scatter from '../../components/Scatter.html.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';

	const xKey = 'myX';
	const yKey = 'myY';

	points.forEach(row => {
		row[yKey] = +row[yKey];
	});

	const r = 4.5;
	const padding = 2.5;
	const fill = '#fff';
	const stroke = '#0cf';
	const strokeWidth = 1.5;
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
		padding={{ top: 10, right: 5, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		xPadding={[padding, padding]}
		yPadding={[padding, padding]}
		data={points}
	>

		<Html>
			<AxisX/>
			<AxisY/>
			<Scatter
				{r}
				{fill}
				{stroke}
				{strokeWidth}
			/>
		</Html>

	</LayerCake>
</div>
