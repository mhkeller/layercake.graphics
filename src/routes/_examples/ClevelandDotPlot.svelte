<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleBand } from 'd3-scale';
	import fruit from '../../data/fruitOrdinal.js';
	import ClevelandDotPlot from '../../components/ClevelandDotPlot.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisYScaleBand.svelte';

	const seriesColors = ['#f0c', '#00bbff', '#00e047', '#ff7a33'];
</script>


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
			<AxisY
				gridlines={false}
			/>
			<ClevelandDotPlot
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
