<script>
	import { getContext } from 'svelte';
	import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';

	const { data, xGet, width, height, zGet } = getContext('LayerCake');

	export let r = 4;
	export let spacing = 0.5;
	export let xStrength = 0.95;
	export let yStrength = 0.075;

	let radius = r;
	$: {
		radius = $width < 400 ? r / 2 : r;
	}

	$: simulation = forceSimulation()
		.force('x', forceX().x(d => $xGet(d)).strength(xStrength))
		.force('y', forceY().y($height / 2).strength(yStrength))
		.force('collide', forceCollide(radius + spacing))
		.stop();

	let positions = [];

	$: {
		const forceData = $data.map((d) => ({ ...d }));

		simulation.nodes(forceData);

		for ( var i = 0,
			n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
			i < n;
			++i ) {
			simulation.tick();
		}

		positions = simulation.nodes();
	}

</script>

<g class='bee-group'>
	{#each positions as p}
		<circle
			fill='{$zGet(p)}'
			stroke='#fff'
			stroke-width='{spacing/2}'
			cx='{p.x}'
			cy='{p.y}'
			r='{radius}'
			/>
	{/each}
</g>
