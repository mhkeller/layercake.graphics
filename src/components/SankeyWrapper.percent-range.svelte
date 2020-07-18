<script>
	import { getContext } from 'svelte';
	import * as D3Sankey from 'd3-sankey';

	import { ScaledSvg, Html } from 'layercake';

	import Sankey from './Sankey.percent-range.svelte';
	import SankeyLabels from './SankeyLabels.percent-range.svelte';

	const { data, width } = getContext('LayerCake');

	/* --------------------------------------------
	 * Allow for dynamic coloring
	 */
	export let colorLinks = d => 'rgba(0, 0, 0, .2)';
	export let colorNodes = d => '#333';
	export let colorText = d => '#263238';

	export let nodeWidth = 1;
	export let nodePadding = 5;
	export let linkSort = null;
	export let nodeId = d => d.id;
	export let nodeAlign = D3Sankey.sankeyLeft;

	$: sankey = D3Sankey.sankey()
		.nodeAlign(nodeAlign)
		.nodeWidth(nodeWidth)
		.nodePadding(nodePadding)
		.nodeId(nodeId)
		.size([100, 100])
		.linkSort(linkSort);

	$: sankeyData = sankey($data);

	$: link = D3Sankey.sankeyLinkHorizontal();
</script>

<ScaledSvg>
	<Sankey
		{sankeyData}
		{colorLinks}
		{colorNodes}
		{link}
	/>
</ScaledSvg>
<Html>
	<SankeyLabels
		nodes={sankeyData.nodes}
		{colorText}
	/>
</Html>
