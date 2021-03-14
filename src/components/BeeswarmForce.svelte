<script>
	import { getContext } from 'svelte';
	import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';

	const { data, xGet, width, height, zGet } = getContext('LayerCake');

	const nodes = $data.map((d) => ({ ...d }));

	export let r = 4;
	export let xStrength = 0.95;
	export let yStrength = 0.075;
	export let strokeWidth = 1;
	export let strokeColor = '#fff';

	let radius = r;
	$: {
		// Adjust this as needed for breakpoints
		radius = $width < 400 ? r / 1.25 : r;
	}

	$: simulation = forceSimulation(nodes)
		.force('x', forceX().x(d => $xGet(d)).strength(xStrength))
		.force('y', forceY().y($height / 2).strength(yStrength))
		.force('collide', forceCollide(radius))
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

<g class='bee-group'>
	{#each simulation.nodes() as node}
		<circle
			fill='{$zGet(node)}'
			stroke='{strokeColor}'
			stroke-width='{strokeWidth}'
			cx='{node.x}'
			cy='{node.y}'
			r='{radius}'
			/>
	{/each}
</g>