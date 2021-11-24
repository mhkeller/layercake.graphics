<script>
	import { getContext } from 'svelte';

	const { data, width, height } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let features = [];
	export let r = 3;
	export let fill = 'yellow';
	export let stroke = '#000';
	export let strokeWidth = 1;
	export let opacity = 1;

	$: projectionFn = projection
		.fitSize([$width, $height], $data);
</script>

<g class="points">
{#each features as d}
	<!-- To scale the circle by size, set r to `$rGet(d.properties)` -->
	<circle
		cx={projectionFn(d.geometry.coordinates)[0]}
		cy={projectionFn(d.geometry.coordinates)[1]}
		r="{r}"
		fill="{fill}"
		stroke="{stroke}"
		stroke-width="{strokeWidth}"
		opacity="{opacity}"
	/>
{/each}
</g>
