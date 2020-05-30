<script>
	import { LayerCake, Svg, WebGL, Html } from 'layercake';
	import points from '../../data/points.csv';
	import ScatterWebGL from '../../components/Scatter.webgl.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	import QuadTree from '../../components/QuadTree.svelte';

	const diameter = 6;
	const padding = 6;

	points.forEach(row => {
		row.myY = +row.myY;
	});
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}

	.circle {
		position: absolute;
		border-radius: 50%;
		background-color: rgba(171,0, 214);
		transform: translate(-50%, -50%);
		pointer-events: none;
		width: 10px;
		height: 10px;
	}
</style>

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
			<AxisY
				ticks={5}
			/>
		</Svg>

		<WebGL>
			<ScatterWebGL {diameter}/>
		</WebGL>

		<Html>
			<QuadTree
				let:x
				let:y
				let:visible
			>
				<div
					class="circle"
					style="top:{y}px;left:{x}px;display: { visible ? 'block' : 'none' };"
				></div>
			</QuadTree>
		</Html>
	</LayerCake>
</div>
