<script>
	import { LayerCake, Svg, flatten } from 'layercake';
	import { stack } from 'd3-shape';
	import { scaleOrdinal } from 'd3-scale';
	import { format, precisionFixed } from 'd3-format';

	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	import AreaStacked from '../../components/AreaStacked.svelte';

	import data from '../../data/fruit.csv';

	const xKey = 'month';
	const yKey = [0, 1];
	const zKey = 'key';

	const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
	const seriesColors = ['#ff00cc', '#ff7ac7', '#ffb3c0', '#ffe4b8'];

	data.forEach(d => {
		d[xKey] = new Date(d[xKey]);
		seriesNames.forEach(name => {
			d[name] = +d[name];
		});
	});

	/* --------------------------------------------
	 * Create a stacked data structure
	 */
	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(data);

	const monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

	function formatTickX (d) {
		const date = new Date(d);
		return `${monthNames[date.getMonth()]} ${date.getDate()}`;
	}

	const formatTickY = d => format(`.${precisionFixed(d)}s`)(d);
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, right: 0, bottom: 20, left: 17 }}
		x={d => d.data[xKey]}
		y={yKey}
		z={zKey}
		zScale={scaleOrdinal()}
		zDomain={seriesNames}
		zRange={seriesColors}
		flatData={flatten(series)}
		data={series}
	>
		<Svg>
			<AxisX
				formatTick={formatTickX}
			/>
			<AxisY
				formatTick={formatTickY}
			/>
			<AreaStacked/>
		</Svg>
	</LayerCake>
</div>
