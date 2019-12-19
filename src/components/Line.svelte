<script>
	import { getContext } from 'svelte';

	const { data, xGet, yGet } = getContext('LayerCake');

	export let opts = {};

	$: path = 'M' + $data
		.map(d => {
			return $xGet(d) + ',' + $yGet(d);
		})
		.join('L');
</script>

<path class='path-line' d='{path}' style="stroke: {opts.stroke || '#ab00d6'};"></path>

<style>
	.path-line {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
	}
</style>


