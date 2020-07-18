<script>
	import { getContext } from 'svelte';
	import * as Sankey from 'd3-sankey';

	export let colorLinks;
	export let colorNodes;

	export let sankeyData;
	export let link;
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
