<script>
	import { LayerCake, Html } from 'layercake';

	import CirclePack from '../../components/CirclePack.html.svelte';

	// This example loads csv data as json using rollup-plugin-dsv
	import data from '../../data/fruitGroups.csv';

	const idKey = 'fruit';
	const valueKey = 'value';

	data.forEach(d => {
		d[valueKey] = +d[valueKey];
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
		padding={{ top: 0, bottom: 20, left: 30 }}
		data={data}
	>
		<Html>
      <CirclePack
        idKey={idKey}
        valueKey={valueKey}
				fill='#ff00cc'
				stroke='#9f0080'
				textColor="#61004e"
      />
		</Html>
	</LayerCake>
</div>
