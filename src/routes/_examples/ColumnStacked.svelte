<script>
	import { LayerCake, Svg, flatten, uniques } from 'layercake';
	import { stack } from 'd3-shape';
	import { scaleBand } from 'd3-scale';

	import fruit from '../../data/fruitOrdinal.js';
	import ColumnStacked from '../../components/ColumnStacked.svelte';
	import AxisX from '../../components/AxisXScaleBand.svelte';
	import AxisY from '../../components/AxisY.svelte';

	const seriesNames = Object.keys(fruit[0]).filter(d => d !== 'year');

	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(fruit);

	function formatYTick (d) {
		if (d > 999) {
			return Math.round(d / 1000) + 'k';
		}
		return d;
	}

	const seriesColors = ['#00e047', '#7ceb68', '#b7f486', '#ecfda5'];

</script>

<div class="chart-container">
	<LayerCake
 			padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
 			x={d => d.data.year}
 			y={[0, 1]}
 			xScale={scaleBand().paddingInner([0.02]).round(true)}
 			xDomain={uniques(fruit, 'year')}
 			flatData={flatten(series)}
 			data={series}
 			custom={{ seriesNames }}
	>
		<Svg>
			<AxisX
				gridlines={false}
			/>
			<AxisY
				gridlines={false}
				formatTick={formatYTick}
			/>
			<ColumnStacked
				{seriesColors}
			/>
		</Svg>
	</LayerCake>

</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
