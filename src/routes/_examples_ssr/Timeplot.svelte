<script>
	import { LayerCake, ScaledSvg, Html, calcExtents } from 'layercake';
	import { timeDay } from 'd3-time';
	import { scaleBand } from 'd3-scale';

	import days from '../../data/days.csv';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';
	import Scatter from '../../components/Scatter.html.svelte';

	const r = 4;
	const padding = 2;

	const daysTransformed = days.map(row => {
		const parts = row.timestring.split('T');
		const time = parts[1].replace('Z', '').split(':').map(d => +d);
		row.seconds = time[0] * 60 * 60 + time[1] * 60 + time[2];
		row.day = parts[0];
		return row;
	});

	/* --------------------------------------------
	 * Generate a range of days in between the min and max
	 * in case we are missing any in our data so we can show empty days for them
	 */
	const extents = calcExtents(daysTransformed, [
		{ field: 'x', accessor: d => d.timestring }
	]);

	const minDate = extents.x[0].split('T')[0].split('-').map(d => +d);
	const maxDate = extents.x[1].split('T')[0].split('-').map(d => +d);

	const allDays = timeDay.range(new Date(Date.UTC(minDate[0], minDate[1] - 1, minDate[2])), new Date(Date.UTC(maxDate[0], maxDate[1] - 1, maxDate[2] + 1)))
		.map(d => d.toISOString().split('T')[0]).sort().reverse();

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
		padding={{ top: 0, right: 15, bottom: 20, left: 75 }}
		x={'seconds'}
		y={'day'}
		xDomain={[0, 24 * 60 * 60]}
		yDomain={allDays}
		yScale={scaleBand().paddingInner([0.05]).round(true)}
		xPadding={[padding, padding]}
		data={daysTransformed}
	>
		<Html>
			<AxisX
				ticks={[0, 4, 8, 12, 16, 20, 24].map(d => d * 60 * 60)}
				formatTick={d => `${Math.floor(d / 60 / 60)}:00`}
			/>
			<AxisY/>
			<Scatter
				{r}
				fill={'rgba(255, 204, 0, 0.75)'}
			/>
		</Html>
	</LayerCake>
</div>
