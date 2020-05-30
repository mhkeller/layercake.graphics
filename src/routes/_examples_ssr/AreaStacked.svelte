<script>
	import { LayerCake, ScaledSvg, Html, flatten } from 'layercake';
	import { stack } from 'd3-shape';
	import fruit from '../../data/fruit.csv';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';
	import AreaStacked from '../../components/AreaStacked.svelte';

	const seriesNames = Object.keys(fruit[0]).filter(d => d !== 'month');

	fruit.forEach(row => {
		row.month = new Date(row.month);
		seriesNames.forEach(name => {
			row[name] = +row[name];
		});
	});

	const seriesColors = ['#ff00cc', '#ff7ac7', '#ffb3c0', '#ffe4b8'];

	/* --------------------------------------------
	 * Create a stacked data structure
	 */
	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(fruit);

	const monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

	function formatTickX (d) {
		const date = new Date(d);
		return `${monthNames[date.getMonth()]} ${date.getDate()}`;
	}

	function formatTickY (d) {
		if (d > 999) {
			return Math.round(d / 1000) + 'k';
		}
		return d;
	}
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
		padding={{ top: 0, right: 0, bottom: 20, left: 17 }}
		x={d => d.data.month}
		y={[0, 1]}
		flatData={flatten(series)}
		data={series}
	>
		<Html>
			<AxisX
				formatTick={formatTickX}
			/>
			<AxisY
				formatTick={formatTickY}
			/>
		</Html>
		<ScaledSvg>
			<AreaStacked
				{seriesColors}
				{seriesNames}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
