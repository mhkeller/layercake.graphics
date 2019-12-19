<script>
	import { LayerCake, Svg } from 'layercake';
	import points from '../../data/points.js';
	import Line from '../../components/Line.svelte';
	import Area from '../../components/Area.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';

	let width;
	let height;
</script>

<div class="chart-container" bind:clientWidth={width} bind:clientHeight={height}>
	<LayerCake
		{width}
		{height}
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={'myX'}
		y={d => d.myY}
		yDomain={[0, null]}
		data={points}
	>
		<Svg>
			<AxisX/>
			<AxisY/>
			<Line/>
			<Area/>
		</Svg>
	</LayerCake>
</div>


<style>
	.chart-container {
		width: 100%;
		height: 100%;
		/* You can also set through styles
			padding: 0 10px 20px 25px;
		*/
	}
</style>


