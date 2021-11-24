<script>
	import { getContext } from 'svelte';

	const { data, width, height } = getContext('LayerCake');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let pointsData = [];
	export let r = 5;
	export let fill = '#fff';
	export let stroke = '#000';
	export let strokeWidth = 1;

	$: projection = projection()
		.fitSize([$width, $height], $data);
</script>

<div class="points">
{#each pointsData as d}
	<div
		class="point"
		style="
			top: {projection(d)[1]};
			left: {projection(d)[0]};
			width: {r * 2};
			border-width: {strokeWidth}px;
			border-color: {stroke};
			background-color: {fill};
		"
	>
	</div>
{/each}
</div>

<style>
	.point {
		border-radius: 50%;
	}
</style>
