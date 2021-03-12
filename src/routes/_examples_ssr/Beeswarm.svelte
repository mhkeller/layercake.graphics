<script>
	import { LayerCake, Html } from 'layercake';
	import { scaleOrdinal } from 'd3-scale';

	import Key from '../../components/Key.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import Beeswarm from '../../components/Beeswarm.html.svelte';

	import data from '../../data/us-senate.csv';

	const xKey = 'date_of_birth';
	const zKey = 'gender';

	const seriesNames = new Set();
	const seriesColors = ['#fc0', '#000'];

	const dataTransformed = data.map(d => {
		seriesNames.add(d[zKey]);

		return {
			[zKey]: d[zKey],
			[xKey]: +d[xKey].split('-')[0]
		}
	})

</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class='chart-container'>
	<LayerCake
		ssr={true}
		percentRange={true}
		x={xKey}
		z={zKey}
		zScale={scaleOrdinal()}
		zDomain={Array.from(seriesNames)}
		zRange={seriesColors}
		data={dataTransformed}
	>
		<Html>
			<AxisX/>
			<Beeswarm
				r={6}
				spacing={0.5}
				xStrength={0.95}
				yStrength={0.075}
			/>
		</Html>

		<Html pointerEvents={false}>
			<Key shape='circle' />
		</Html>

	</LayerCake>
</div>
