<script>
	import { LayerCake, ScaledSvg, Html } from 'layercake';
	import { histogram, extent } from 'd3-array';

	import unemployment from '../../data/unemployment.js';
	import Column from '../../components/Column.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';
	import thresholds from '../../modules/thresholds.js';

	let binCount = 40;

	const domain = extent(unemployment);

	$: hist = histogram()
		.domain(domain)
		.thresholds(thresholds(domain, binCount));

	$: bins = hist(unemployment);
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}

	input {
		height: auto;
	}
</style>

<div class="input-container" style="position: absolute;right:10px;z-index: 9;">
	<input
		style="margin:0;"
		type="range"
		min="4"
		max="100"
		step="4"
		bind:value={binCount}
	/> <span class="counter-container" style="display:inline-block;vertical-align:top;width: 70px;text-align:right;">{binCount} bins</span>
</div>

<div class="chart-container">
	<LayerCake
		ssr={true}
		percentRange={true}
		padding={{ top: 20, right: 5, bottom: 20, left: 31 }}
		x={['x0', 'x1']}
		y={'length'}
		xDomain={domain}
		yDomain={[0, null]}
		data={bins}
	>
		<Html>
			<AxisX
				gridlines={false}
				baseline={true}
				snapTicks={true}
			/>
			<AxisY
				gridlines={false}
				ticks={3}
			/>
		</Html>
		<ScaledSvg>
			<Column
				fill={'#fff'}
				stroke={'#000'}
				strokeWidth={1}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
