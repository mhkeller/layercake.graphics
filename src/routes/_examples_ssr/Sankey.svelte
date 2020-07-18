<script>
	import { LayerCake, ScaledSvg } from 'layercake';

	import SankeyWrapper from '../../components/SankeyWrapper.percent-range.svelte';

	import data from '../../data/sankey-data.js';
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
		padding={{ right: 10 }}
		{data}
	>
		<SankeyWrapper
			nodeWidth={1}
			colorNodes={d => '#ab00d6'}
		/>
	</LayerCake>
</div>
