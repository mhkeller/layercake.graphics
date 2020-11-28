<script>
	import { LayerCake, Html } from 'layercake';

	import CirclePack from '../../components/CirclePack.html.svelte';

  import data from '../../data/familyTree.csv';

	const idKey = 'name';
	const parentKey = 'parent';
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
        parentKey={parentKey}
				circlePadding={5}
				sortBy={(a, b) => b.depth - a.depth}
				labelVisibilityThreshold={r => false}
				stroke="#00bbff"
      />
		</Html>
	</LayerCake>
</div>
