<script>
	import { LayerCake, ScaledSvg, Html } from 'layercake';

	import Line from './Line.svelte';
	import Area from './Area.svelte';
	import AxisX from './AxisX.html.svelte';
	import AxisY from './AxisY.html.svelte';
	import Brush from './Brush.html.svelte';

	export let min = null;
	export let max = null;
	export let xKey = 'x';
	export let yKey = 'y';
	export let data = [];

	let brushedData;
	$: {
		brushedData = data.slice((min || 0) * data.length, (max || 1) * data.length);
		if (brushedData.length < 2) {
			brushedData = data.slice(min * data.length, min * data.length + 2)
		}
	}
</script>

<style>
	.chart-wrapper {
		width: 48%;
		height: 48%;
	}
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 80%;
	}
	.brush-container {
		width: 100%;
		height: 20%;
	}
</style>

<div class="chart-wrapper">
	<div class="chart-container">
		<LayerCake
			ssr={true}
			percentRange={true}
			padding={{ right: 10, bottom: 20, left: 25 }}
			x={xKey}
			y={yKey}
			yDomain={[0, null]}
			data={brushedData}
		>
			<Html>
				<AxisX
					ticks={ticks => {
						const filtered = ticks.filter(t => t % 1 === 0);
						if (filtered.length > 7) {
							return filtered.filter((t, i) => i % 2 === 0);
						}
						return filtered;
					}}
				/>
				<AxisY
					ticks={2}
				/>
			</Html>
			<ScaledSvg>
				<Line
					stroke='#00e047'
				/>
				<Area
					fill='#00e04710'
				/>
			</ScaledSvg>
		</LayerCake>
	</div>

	<div class="brush-container">
		<LayerCake
			ssr={true}
			percentRange={true}
			padding={{ top: 5 }}
			x={xKey}
			y={yKey}
			yDomain={[0, null]}
			data={data}
		>
			<ScaledSvg>
				<Line
					stroke='#00e047'
				/>
				<Area
					fill='#00e04710'
				/>
			</ScaledSvg>
			<Html>
				<Brush
					bind:min={min}
					bind:max={max}
				/>
			</Html>
		</LayerCake>
	</div>
</div>
