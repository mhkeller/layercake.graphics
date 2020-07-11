<script>
	import { LayerCake, ScaledSvg } from 'layercake';

	import Sankey from '../../components/Sankey.svelte';

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
		percentRange={true}
		{data}
	>
		<ScaledSvg>
			<Sankey
				nodeWidth={5 / 100}
				nodePadding={10 / 100}
				colorNodes={d => '#ab00d6'}
			/>
		</ScaledSvg>
	</LayerCake>
</div>
