<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleOrdinal } from 'd3-scale';

	import AxisX from '../../components/AxisX.svelte';
	import Beeswarm from '../../components/Beeswarm.svelte';
	import Key from '../../components/Key.svelte';

	import data from '../../data/us-senate.csv';

	const xKey = 'date_of_birth';
	const zKey = 'gender';

	const seriesNames = new Set();
	const seriesColors = ['#000', '#00e047'];

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

<div class="chart-container">
	<LayerCake
		x={xKey}
		z={zKey}
		zScale={scaleOrdinal()}
		zDomain={seriesNames}
		zRange={seriesColors}
		data={dataTransformed}
	>
		<Key/>
		<Svg>
			<!-- <AxisX/> -->
			<Beeswarm/>
		</Svg>
	</LayerCake>
</div>