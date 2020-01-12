<script>
	import { getContext } from 'svelte';
	import { quadtree } from 'd3-quadtree';

	const { data, xGet, yGet, width, height } = getContext('LayerCake');

	export let color = '#fff';
	export let diameter = 5;

	let visible = false;
	let highlight = {};

	function mousemove (e) {
		const found = finder.find(e.layerX, e.layerY, 300);

		if (found) {
			visible = true;
			highlight = found;
		} else {
			visible = false;
		}
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
	.bg,
	.circle {
		position: absolute;
	}

	.bg {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.circle {
		border-radius: 50%;
		border: 1px solid #000;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}
</style>

<div
	class="bg"
	on:mousemove="{mousemove}"
	on:mouseout="{mouseout}"
></div>
<div
	class="circle"
	style="top:{$yGet(highlight)}px;left:{$xGet(highlight)}px;display: { visible === true ? 'block' : 'none' };background-color:{color};width:{diameter}px;height:{diameter}px;"
></div>
