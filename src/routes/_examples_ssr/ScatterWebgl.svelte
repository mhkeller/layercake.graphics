<script>
	import { LayerCake, WebGL, Html } from 'layercake';

	import ScatterWebGL from '../../components/Scatter.webgl.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';
	import QuadTree from '../../components/QuadTree.svelte';

	import data from '../../data/points.csv';

	const xKey = 'myX';
	const yKey = 'myY';

	const diameter = 6;
	const padding = 6;

	data.forEach(d => {
		d[yKey] = +d[yKey];
	});
</script>

<style>
	.chart-container {
		position: relative;
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
		position={'absolute'}
		ssr={true}
		percentRange={true}
		padding={{ top: 5, right: 5, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		xPadding={[padding, padding]}
		yPadding={[padding, padding]}
		data={data}
	>
		<Html>
			<AxisX/>
			<AxisY/>
		</Html>
	</LayerCake>

	<LayerCake
		position={'absolute'}
		padding={{ top: 0, right: 5, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		xPadding={[padding, padding]}
		yPadding={[padding, padding]}
		data={data}
	>
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
