<script>
	import { getContext } from 'svelte';

	const { data, width, height } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let features = [];
	export let r = 3.5;
	export let fill = 'yellow';
	export let stroke = '#000';
	export let strokeWidth = 1;
	export let opacity = 1;

	$: projection = projection
		.fitSize([$width, $height], $data);
</script>

<div class="points">
{#each features as d}
	<div
		class="point"
		style="
			top: {projection(d.geometry.coordinates)[1]}px;
			left: {projection(d.geometry.coordinates)[0]}px;
			width: {r * 2}px;
			height: {r * 2}px;
			border-width: {strokeWidth}px;
			border-color: {stroke};
			background-color: {fill};
			opacity: {opacity};
		"
	>
	</div>
{/each}
</div>

<style>
	.point {
		position: absolute;
		border-radius: 50%;
		border-style: solid;
	}
</style>
