<script>
	import { LayerCake, SvgSsr, Html, flatten, uniques } from 'layercake';
	import { stack } from 'd3-shape';
	import { scaleBand } from 'd3-scale';

	import fruit from '../../data/fruitOrdinal.csv';
	import ColumnStacked from '../../components/ColumnStacked.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';

	const seriesNames = Object.keys(fruit[0]).filter(d => d !== 'year');

	fruit.forEach(row => {
		seriesNames.forEach(name => {
			row[name] = +row[name];
		});
	});

	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(fruit);

	function formatTickY (d) {
		if (d > 999) {
			return Math.round(d / 1000) + 'k';
		}
		return d;
	}

	const seriesColors = ['#00e047', '#7ceb68', '#b7f486', '#ecfda5'];

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
		padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
		x={d => d.data.year}
		y={[0, 1]}
		xScale={scaleBand().paddingInner([0.028]).round(true)}
		xDomain={uniques(fruit, 'year')}
		flatData={flatten(series)}
		data={series}
		custom={{ seriesNames }}
	>
		<Html>
			<AxisX
				gridlines={false}
			/>
			<AxisY
				ticks={4}
				gridlines={false}
				formatTick={formatTickY}
			/>
		</Html>
		<SvgSsr>
			<ColumnStacked
				{seriesColors}
			/>
		</SvgSsr>
	</LayerCake>

</div>
