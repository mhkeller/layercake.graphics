<script>
	import { LayerCake, SvgSsr, Html } from 'layercake';
	import points from '../../data/points.csv';

	import Line from '../../components/Line.svelte';
	import Area from '../../components/Area.svelte';
	import AxisX from '../../components/AxisXHtml.svelte';
	// import AxisY from '../../ssrComponents/AxisY.svelte';

	points.forEach(row => {
		row.myY = +row.myY;
	});
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
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={'myX'}
		y={d => d.myY}
		yDomain={[0, null]}
		xRange={[0, 100]}
		yRange={[100, 0]}
		data={points}
	>
		<Html>
				<AxisX
					gridlines={true}
					baseline={true}
				/>
		</Html>
		<SvgSsr>
			<!-- <AxisY/> -->
			<Line/>
			<Area/>
		</SvgSsr>
	</LayerCake>
</div>
