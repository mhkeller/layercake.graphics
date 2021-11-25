<script>
	import { getContext } from 'svelte';
	import { scaleCanvas } from 'layercake';

	const { data, width, height } = getContext('LayerCake');

	const { ctx } = getContext('canvas');

	/* --------------------------------------------
	 * Require a D3 projection function
	 */
	export let projection;

	export let features = [];
	export let r = 3.5;
	export let fill = 'yellow';
	export let stroke = '#000';
	export let strokeWidth = 1;

	$: projectionFn = projection
		.fitSize([$width, $height], $data);

	$: {
		if ($ctx) {
			scaleCanvas($ctx, $width, $height);
			$ctx.clearRect(0, 0, $width, $height);

			features.forEach(d => {
				$ctx.beginPath();
				const coordinates = projectionFn(d.geometry.coordinates);
				$ctx.arc(coordinates[0], coordinates[1], r, 0, 2 * Math.PI, false);
				$ctx.fillStyle = fill;
				$ctx.fill();
				$ctx.lineWidth = strokeWidth;
				$ctx.strokeStyle = stroke;
				$ctx.stroke();
			});
		}
	}
</script>
