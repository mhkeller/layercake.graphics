<script>
	/**
		Generates an SVG force simulation using [d3-force](https://github.com/d3/d3-force). The values here are defaults which you will likely have to customize because every force simulation is different.
		@type {Number} [manyBodyStrength=5] – The value passed into the `.strength` method on `forceManyBody`, which is used as the `'charge'` property on the simulation. See [the documentation](https://github.com/d3/d3-force#manyBody_strength) for more.
		@type {Number} [xStrength=0.1] – The value passed into the `.strength` method on `forceX`, which is used as the `'x'` property on the simulation. See [the documentation](https://github.com/d3/d3-force#x_strength) for more.
		@type {String} [nodeColor=undefined] Set a color manually otherwise it will default to the `zScale`.
		@type {String} [nodeStroke='#fff'] – The circle's stroke color.
		@type {Number} [nodeStrokeWidth=1] – The circle's stroke width, in pixels.
		@type {Boolean} [groupBy=true] – Group the nodes by the return value of the x-scale. If `false`, align all the nodes to the canvas center.
	*/
	import { getContext } from 'svelte';
	import {
		forceSimulation,
		forceX,
		forceManyBody,
		forceCollide,
		forceCenter,
	} from 'd3-force';

	const { data, width, height, xScale, xGet, rGet, zGet } = getContext('LayerCake');

	export let manyBodyStrength = 5;
	export let xStrength = 0.1;
	export let nodeColor = undefined;
	export let nodeStroke = '#fff';
	export let nodeStrokeWidth = 1;
	export let groupBy = true;

	/* --------------------------------------------
	 * Make a copy because the simulation will alter the objects
	 */
	const initialNodes = $data.map((d) => ({ ...d }));

	const simulation = forceSimulation(initialNodes)

	let nodes = [];

	simulation.on("tick", () => {
		nodes = simulation.nodes()
	})

	/* ----------------------------------------------
	 * When variables change, set forces and restart the simulation
	 */
	$: {
		simulation
			.force('x', forceX().x(d => {
				return groupBy === true ? $xGet(d) + $xScale.bandwidth() / 2 : $width / 2;
			}).strength(xStrength))
			.force('center', forceCenter($width / 2, $height / 2))
			.force('charge', forceManyBody().strength(manyBodyStrength))
			.force('collision', forceCollide().radius(d => {
				return $rGet(d) + nodeStrokeWidth / 2; // Divide this by two because an svg stroke is drawn halfway out
			}))
			.force('center', forceCenter($width / 2, $height / 2))
			.alpha(1)
			.restart()
	}

</script>
	{#each nodes as point}
    <circle
			class='node'
			r={$rGet(point)}
			fill={nodeColor || $zGet(point)}
			stroke={nodeStroke}
			stroke-width={nodeStrokeWidth}
			cx='{point.x}'
			cy='{point.y}'
		>
    	<!-- <title>{point[$custom.title]}</title> -->
		</circle>
	{/each}
