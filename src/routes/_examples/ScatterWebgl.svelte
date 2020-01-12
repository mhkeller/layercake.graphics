<script>
	import { LayerCake, Svg, Webgl, Html } from 'layercake';
	import points from '../../data/points.js';
	import ScatterWebgl from '../../components/ScatterWebgl.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	import QuadTree from '../../components/QuadTree.svelte';

	const diameter = 6;
	const padding = 6;

</script>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, right: 5, bottom: 20, left: 25 }}
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

		<Webgl>
			<ScatterWebgl {diameter}/>
		</Webgl>

		<Html>
			<QuadTree {diameter}/>
		</Html>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
