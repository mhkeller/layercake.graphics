<script>
	import { LayerCake, Svg } from 'layercake';
	import { histogram, extent } from 'd3-array';
	import unemployment from '../../data/unemployment.js';
	import ColumnLinear from '../../components/ColumnLinear.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	import thresholds from '../../modules/thresholds.js';

	let binCount = 40;

	const domain = extent(unemployment);

	$: hist = histogram()
		.domain(domain)
		.thresholds(thresholds(domain, binCount));

	$: bins = hist(unemployment);

</script>

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
		padding={{ top: 20, right: 5, bottom: 20, left: 30 }}
		x={['x0', 'x1']}
		y={'length'}
		yDomain={[0, null]}
		data={bins}
	>
		<Svg>
			<AxisX
				gridlines={false}
				baseline={true}
				snapTicks={true}
			/>
			<AxisY
				gridlines={false}
				ticks={3}
			/>
			<ColumnLinear
				fill={'#fff'}
				stroke={'#000'}
				strokeWidth={1}
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
