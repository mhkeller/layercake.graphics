<script>
	import { LayerCake, Svg } from 'layercake';

	import ForceDirectedGraph from '../../components/ForceDirectedGraph.svelte';

	import data from '../../data/miserables.json';

</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		data={data}
	>
		<Svg>
			<ForceDirectedGraph/>
		</Svg>
	</LayerCake>
</div>
