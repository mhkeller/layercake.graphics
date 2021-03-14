<script>
	import { getContext } from 'svelte';
	import {
		forceSimulation,
		forceX,
		forceManyBody,
		forceCollide,
		forceCenter,
	} from 'd3-force';

	const { data, width, height, xScale, xGet, rGet, zGet, custom } = getContext('LayerCake');

	/* --------------------------------------------
	 * Here are some values to play with, but most every force layout
	 * is going be unique and this component will need to be customized
	 * See more: https://github.com/d3/d3-force/blob/master/README.md
	 */
	export let manyBodyStrength = 5;
	/* --------------------------------------------
	 * Set a manual color, otherwise it will default to using the zScale
	 */
	export let nodeColor = undefined;
	export let nodeStrokeWidth = 1;
	export let nodeStrokeColor = '#fff';
	export let ticks = 150;
	export let groupBy = true;

	/* --------------------------------------------
	 * Make a copy because the simulation will alter the objects
	 */
	const copiedData = $data.map((d) => ({ ...d }));

	$: nodes = copiedData;

	$: simulation = forceSimulation(copiedData) // if you pass nodes in here, it leads to a very expensive loop
		.force('charge', forceManyBody().strength(manyBodyStrength))
		.force('x', forceX().x(d => {
			return groupBy === true ? $xGet(d) + $xScale.bandwidth() / 2 : $width / 2;
		}))
		.force('collision', forceCollide().radius(d => {
			return $rGet(d) + nodeStrokeWidth / 2; // Divide this by two because an svg stroke is drawn halfway out
		}))
		.force('center', forceCenter($width / 2, $height / 2))
		.stop();

	function simulationUpdate (i) {
		simulation.tick();
		nodes = [...nodes];
		if (i >= ticks) {
			simulation.stop();
		} else {
			requestAnimationFrame(() => {
				simulationUpdate(++i);
			});
		}
	}

	$: if (simulation) {
		simulationUpdate(0);
	};
</script>
	{#each nodes as point}
    <circle
			class='node'
			r={$rGet(point)}
			fill={nodeColor || $zGet(point)}
			stroke-width={nodeStrokeWidth}
			stroke={nodeStrokeColor}
			cx='{point.x}'
			cy='{point.y}'
		>
    	<!-- <title>{point[$custom.title]}</title> -->
		</circle>
	{/each}
