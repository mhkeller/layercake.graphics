<script>
	import { getContext } from 'svelte';
	import { scaleCanvas } from 'layercake';
	import { geoPath } from 'd3-geo';

	const { data, width, height, percentRange, aspectRatio } = getContext('LayerCake');

	const { ctx } = getContext('ctx');

	export let projection;

	$: fitSizeRange = $percentRange === true ? [100, 100 / $aspectRatio] : [$width, $height];

	$: projectionFn = projection()
		.fitSize(fitSizeRange, $data);

	$: geoPathFn = geoPath(projectionFn);

	$: {
		if ($ctx && geoPath) {
			scaleCanvas($ctx, $width, $height);
			$ctx.clearRect(0, 0, $width, $height);

			$ctx.beginPath();
			// Set the context here since setting it in `$: geoPath` is a circular reference
			geoPathFn.context($ctx);
			geoPathFn($data);
			$ctx.fillStyle = '#fff';
			$ctx.fill();
			$ctx.lineWidth = 1;
			$ctx.strokeStyle = '#ccc';
			$ctx.stroke();
		}
	}
</script>
