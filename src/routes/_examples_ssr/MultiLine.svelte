<script>
	import { LayerCake, SvgSsr, Html } from 'layercake';
	import { scaleOrdinal } from 'd3-scale';
	import { timeParse, timeFormat } from 'd3-time-format';

	import data from '../../data/fruit.csv';
	import MultiLine from '../../components/MultiLine.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';
	import Labels from '../../components/Labels.svelte';
	// import Tooltip from '../../components/Tooltip.svelte';

	/* --------------------------------------------
	 * Set what is our x key to separate it from the other series
	 */
	const xKey = 'month';
	const yKey = 'value';

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
				return {
					key,
					[yKey]: +d[key],
					[xKey]: typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey] // Conditional required for sapper
				};
			})
		};
	});


	// Make a flat array of the `values` of our nested series
	// we can pluck the `value` field from each item in the array to measure extents
	const flatten = data => data.reduce((memo, group) => {
		return memo.concat(group.values);
	}, []);

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
		ssr={true}
		percentRange={true}
		padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		flatData={flatten(dataLong)}
		yDomain={[0, null]}
		data={dataLong}
	>
		<Html>
			<AxisX
				gridlines={false}
				ticks={data.map(d => parseDate(d[xKey])).sort((a, b) => a - b)}
				formatTick={formatTickX}
				snapTicks={true}
			/>
			<AxisY
				formatTick={formatTickY}
			/>
		</Html>
		<SvgSsr>
			<MultiLine
				{colorScale}
			/>
		</SvgSsr>

		<Html>
			<Labels/>
			<!-- <Tooltip
				dataset={ data }
			/> -->
		</Html>
	</LayerCake>
</div>
