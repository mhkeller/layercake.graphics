<script>
	import { getContext } from 'svelte';
	import * as Sankey from 'd3-sankey';

	const { data, width, height } = getContext('LayerCake');

	/* --------------------------------------------
	 * Allow for dynamic coloring
	 */
	export let colorLinks = d => 'rgba(0, 0, 0, .2)';
	export let colorNodes = d => '#333';
	export let colorText = d => '#263238';

	export let nodeWidth = 5;
	export let nodePadding = 10;

	$: sankey = Sankey.sankey()
		.nodeAlign(Sankey.sankeyLeft)
		.nodeWidth(nodeWidth / 100)
		.nodePadding(nodePadding / 100)
		.nodeId(d => d.id)
		.size([100, 100])
		.linkSort(null);

	$: sankeyData = sankey($data);

	$: link = Sankey.sankeyLinkHorizontal();

	$: fontSize = $width <= 320 ? '8px' : '12px';
</script>

<g class="sankey-layer">
	<g class='link-group'>
		{#each sankeyData.links as d}
			<path
				d={link(d)}
				fill={'none'}
				stroke={colorLinks(d)}
				stroke-opacity='0.5'
				stroke-width={d.width} />
		{/each}
	</g>
	<g class='rect-group'>
		{#each sankeyData.nodes as d, i}
			<rect
				x={d.x0}
				y={d.y0}
				height={d.y1 - d.y0}
				width={d.x1 - d.x0}
				fill={colorNodes(d)} />
		{/each}
	</g>
</g>
