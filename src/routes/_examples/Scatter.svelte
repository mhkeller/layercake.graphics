<script>
	import { LayerCake, Svg, Canvas } from 'layercake';
	import points from '../../data/points.js';
	import Scatter from '../../components/Scatter.svelte';
	import ScatterCanvas from '../../components/ScatterCanvas.svelte';
	import Voronoi from '../../components/Voronoi.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';

	const r = 3;
	const padding = 10;
	const color = '#fff';

	// TODO, voronoi
</script>

<div class="chart-container">
	<LayerCake
		padding={{ top: 10, right: 5, bottom: 20, left: 25 }}
		x={'myX'}
		y={'myY'}
		xPadding={[padding, padding]}
		yPadding={[padding, padding]}
		data={points}
	>

		<Svg>
			<AxisX/>
			<AxisY/>
		</Svg>

		<Canvas>
			<ScatterCanvas
				r={r * 1.5}
				fill={'#0cf'}
			/>
		</Canvas>

		<Svg>
			<Scatter
				{r}
				fill={color}
			/>
			<Voronoi/>
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
