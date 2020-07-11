<script>
	import { LayerCake, Svg } from 'layercake';

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
		{data}
	>
		<Svg>
			<Sankey
				colorNodes={d => '#ab00d6'}
			/>
		</Svg>
	</LayerCake>
</div>
