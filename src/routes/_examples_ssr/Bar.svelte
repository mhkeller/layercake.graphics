<script>
	import { LayerCake, SvgSsr, Html } from 'layercake';
	import { scaleBand } from 'd3-scale';

	import groups from '../../data/groups.csv';
	import Bar from '../../components/Bar.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';

	groups.forEach(row => {
		row.value = +row.value;
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
		padding={{ top: 0, right: 20, bottom: 20, left: 30 }}
		x='value'
		y='year'
		yScale={scaleBand().paddingInner([0.05]).round(true)}
		yDomain={['1979', '1980', '1981', '1982', '1983']}
		xDomain={[0, null]}
		xRange={[0, 100]}
		yRange={[100, 0]}
		data={groups}
	>
		<Html>
			<AxisX
				gridlines={true}
				baseline={true}
				snapTicks={true}
			/>
			<AxisY gridlines={false}/>
		</Html>
		<SvgSsr>
			<Bar/>
		</SvgSsr>
	</LayerCake>

</div>
