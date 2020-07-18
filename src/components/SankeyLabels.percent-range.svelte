<script>
	import { getContext } from 'svelte';
	import * as Sankey from 'd3-sankey';

	export let nodes;

	export let colorText;
</script>

<style>
	.text {
		position: absolute;
		pointer-events: none;
		user-select: none;
		transform: translate(2px, -50%);
		font-size: 12px;
	}
</style>

{#each nodes as d, i}
	<div
		class='text'
		style="left: {d.x1}%;
			top: {(d.y1 + d.y0) / 2}%;
			color: {colorText(d)};">
		{d.id}
	</div>
{/each}
