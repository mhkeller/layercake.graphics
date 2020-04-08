<script>
	import { LayerCake, Svg, Html } from 'layercake';
	import { scaleOrdinal } from 'd3-scale';
	import { timeParse, timeFormat } from 'd3-time-format';

	import data from '../../data/fruit.csv';
	import MultiLine from '../../components/MultiLine.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	import Labels from '../../components/Labels.svelte';
	import Tooltip from '../../components/Tooltip.svelte';

	/* --------------------------------------------
	 * Set what is our x key to separate it from the other series
	 */
	const xKey = 'month';

	const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
	const seriesColors = [
		'#ffe4b8',
		'#ffb3c0',
		'#ff7ac7',
		'#ff00cc'
	];

	const parseDate = timeParse('%Y-%m-%d');

	const dataLong = seriesNames.map(key => {
		return {
			key,
			values: data.map(d => {
				const obj = { key, value: +d[key] };
				obj[xKey] = parseDate(d[xKey]);
				return obj;
			})
		};
	})

	// Make a flat array of the `values` of our nested series
	// we can pluck the `value` field from each item in the array to measure extents
	const flatten = data => data.reduce((memo, group) => memo.concat(group.values), []);

	const colorScale = scaleOrdinal()
    .domain(seriesNames)
    .range(seriesColors);

	const formatTickX = timeFormat('%b. %e');

	function formatTickY (d) {
		if (d > 999) {
			return d / 1000 + 'k';
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
		padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y='value'
		flatData={flatten(dataLong)}
		yDomain={[0, null]}
		data={dataLong}
	>
		<Svg>
			<AxisX
				gridlines={false}
				ticks={data.map(d => parseDate(d[xKey])).sort((a, b) => a - b)}
				formatTick={formatTickX}
				snapTicks={true}
			/>
			<AxisY
				ticks={4}
				formatTick={formatTickY}
			/>

			<MultiLine
				{colorScale}
			/>
		</Svg>

		<Html>
			<Labels/>
			<Tooltip
				dataset={ data }
			/>
		</Html>
	</LayerCake>
</div>
