<script>
  import { LayerCake, Svg, ScaledSvg } from 'layercake';

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
				colorNodes={d => '#ab00d6'}
			/>
    </ScaledSvg>
  </LayerCake>
</div>
