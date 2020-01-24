<script>
	import { calcExtents, flatten } from 'layercake';

	import pointSeries from '../../data/pointSeries.js';
	import ChartWrapper from '../../components/ChartWrapper.svelte';

	/* --------------------------------------------
	 * Grab the extents of the full dataset
	 */
	const extentGetters = [
		{ field: 'x', accessor: d => d.x },
		{ field: 'y', accessor: d => d.y }
	];

	const fullExtents = calcExtents(flatten(pointSeries), extentGetters);

	/* --------------------------------------------
	 * Sort by the last value
	 */
	pointSeries.sort((a, b) => {
		return b[b.length - 1].y - a[a.length - 1].y;
	});

	let scale = 'individual';
</script>

<style>
	.group-container {
		height: 90%;
		width: 100%;
	}

	.input-container {
		margin-bottom: 7px;
	}

	label {
		cursor: pointer;
	}

	input {
		margin-right: 7px;
	}

	.chart-container {
		position: relative;
		display: inline-block;
		width: 11%;
		height: 30%;
	}
</style>

<div class="input-container">
	<label><input type="radio" bind:group={scale} value="individual"/>Individual scale</label>
	<label><input type="radio" bind:group={scale} value="shared"/>Shared scale</label>
</div>

<div class="group-container">
	{#each pointSeries as data}
		<div class="chart-container">
			<ChartWrapper
				{data}
				{fullExtents}
				{scale}
				{extentGetters}
			/>
		</div>
	{/each}
</div>
