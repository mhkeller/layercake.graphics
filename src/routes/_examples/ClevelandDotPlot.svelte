<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleBand } from 'd3-scale';
	import fruit from '../../data/fruitOrdinal.csv';
	import ClevelandDotPlot from '../../components/ClevelandDotPlot.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisYScaleBand from '../../components/AxisYScaleBand.svelte';

	const seriesColors = ['#f0c', '#00bbff', '#00e047', '#ff7a33'];

	const seriesNames = Object.keys(fruit[0]).filter(d => d !== 'year');

	fruit.forEach(row => {
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
		padding={{ right: 10, bottom: 20, left: 30 }}
		x={['apples', 'bananas', 'cherries', 'dates']}
		y={'year'}
		yScale={scaleBand().paddingInner([0.05]).round(true)}
		yDomain={['2016', '2017', '2018', '2019']}
		xDomain={[0, null]}
		xPadding={[10, 0]}
		data={fruit}
	>
		<Svg>
			<AxisX/>
			<AxisYScaleBand
				gridlines={false}
			/>
			<ClevelandDotPlot
				{seriesColors}
			/>
		</Svg>
	</LayerCake>

</div>
