<script>
	import { getContext } from 'svelte';
	import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';

	const { data, xGet, height, zGet } = getContext('LayerCake');

	const r = 7;
	const pad = .5;

	$: simulation = forceSimulation()
		.force("x", forceX().x(d => $xGet(d)).strength(.95))
		.force("y", forceY().y($height / 2).strength(.075))
		.force("collide", forceCollide(r + pad))
		.stop();

	let positions = []

	$: {
		const forceData = $data.map((d) => ({ ...d }));
		
		simulation.nodes(forceData);
		simulation.restart();
		simulation.stop();

		for (var i = 0; i < 120; ++i) simulation.tick();

		positions = simulation.nodes();
	}

</script>

<g class="bee-group">
	{#each positions as p}
		<circle
			fill="{$zGet(p)}"
			stroke="#fff"
			stroke-width="{pad/2}"
			cx="{p.x}"
			cy="{p.y}" 
			r="{r}"
			/>
	{/each}
</g>