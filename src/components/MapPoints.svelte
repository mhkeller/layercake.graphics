<script>
	import { getContext } from 'svelte';

	const { data, width, height } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let pointsData = [];
	export let r = 5;

	$: projection = projection()
		.fitSize([$width, $height], $data);
</script>

<g class="points">
{#each pointsData as d}
	<circle
		cx={projection(d)[0]}
		cy={projection(d)[1]}
		r="{r}"
	>
	</circle>
{/each}
</g>

<style>
	circle {
		fill: #000;
		stroke: #fff;
		stroke-width: 1;
	}
</style>
