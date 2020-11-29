<script>
	import { getContext } from 'svelte';
	import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';

	const { data, xGet, width, height, zGet } = getContext('LayerCake');

	const nodes = $data.map((d) => ({ ...d }));

	export let r = 4;
	export let spacing = 0.5;
	export let xStrength = 0.95;
	export let yStrength = 0.075;

	let radius = r;
	$: {
		radius = $width < 400 ? r / 2 : r;
	}

	$: simulation = forceSimulation(nodes)
		.force('x', forceX().x(d => $xGet(d)).strength(xStrength))
		.force('y', forceY().y($height / 2).strength(yStrength))
		.force('collide', forceCollide(radius + spacing))
		.stop();

	$: {
		for ( var i = 0,
			n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
			i < n;
			++i ) {
			simulation.tick();
		}
	}
</script>

<div class='bee-group'>
	{#each simulation.nodes() as node}
		<div
			class='bee'
			stroke-width='{spacing/2}'
			style='
				left:{node.x}px;
				top: {node.y}px; 
				width: {radius*2}px; 
				height: {radius*2}px; 
				background: {$zGet(node)}; 
				border-width: {spacing/2};
				'
			/>
	{/each}
</div>

<style>
	.bee {
		position: absolute;
		border-color: #fff;
		border-radius: 50%;
	}
</style>
