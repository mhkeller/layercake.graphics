<script>
	import { getContext } from 'svelte';
	import { quadtree } from 'd3-quadtree';

	const { data, xGet, yGet, width, height } = getContext('LayerCake');

	let visible = false;
	let found = {};

	function mousemove (e) {
		found = finder.find(e.layerX, e.layerY, 300) || {};

		visible = Object.keys(found).length > 0;
	}

	function mouseout () {
		visible = false;
	}

	$: finder = quadtree()
		.extent([[-1, -1], [$width + 1, $height + 1]])
		.x($xGet)
		.y($yGet)
		.addAll($data);

</script>

<style>
	.bg {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>

<div
	class="bg"
	on:mousemove="{mousemove}"
	on:mouseout="{mouseout}"
></div>
<slot
	x={$xGet(found)}
	y={$yGet(found)}
	found={found}
	visible={visible}
></slot>
