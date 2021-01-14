<script>
	import { LayerCake, ScaledSvg, Html } from 'layercake';
	import { scaleBand } from 'd3-scale';

	import Bar from '../../components/Bar.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';

	// This example loads csv data as json using rollup-plugin-dsv
	import data from '../../data/groups.csv';

	data.forEach(d => {
		d.value = +d.value;
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
		percentRange={true}
		padding={{ top: 0, right: 20, bottom: 20, left: 30 }}
		x='value'
		y='year'
		yScale={scaleBand().paddingInner([0.05]).round(true)}
		yDomain={['1979', '1980', '1981', '1982', '1983']}
		xDomain={[0, null]}
		data={data}
	>
		<Html>
			<AxisX
				gridlines={true}
				baseline={true}
				snapTicks={true}
			/>
			<AxisY gridlines={false}/>
		</Html>
		<ScaledSvg>
			<Bar/>
		</ScaledSvg>
	</LayerCake>

</div>
