<script>
	/**
		Generates a scatter plot.
		@param {Number} [r=5] – The circle's radius.
		@param {String} [fill='#000'] – The circle's fill color.
		@param {String} [stroke='#0cf'] – The circle's stroke color.
		@param {Number} [strokeWidth=1] – The circle's stroke width.
	*/
	import { getContext } from 'svelte';
	import { scaleCanvas } from 'layercake';

	const { data, xGet, yGet, width, height } = getContext('LayerCake');

	const { ctx } = getContext('canvas');

	export let r = 5;
	export let fill = '#000';
	export let stroke = '#0cf';
	export let strokeWidth = 1;

	$: {
		if ($ctx) {
			/* --------------------------------------------
			 * If you were to have multiple canvas layers
			 * maybe for some artistic layering purposes
			 * put these reset functions in the first layer, not each one
			 * since they should only run once per update
			 */
			scaleCanvas($ctx, $width, $height);
			$ctx.clearRect(0, 0, $width, $height);

			/* --------------------------------------------
			 * Draw our scatterplot
			 */
			$data.forEach(d => {
				$ctx.beginPath();
				$ctx.arc($xGet(d), $yGet(d), r, 0, 2 * Math.PI, false);
				$ctx.fillStyle = fill;
				$ctx.fill();
				$ctx.lineWidth = strokeWidth;
				$ctx.strokeStyle = stroke;
				$ctx.stroke();
			});
		}
	}
</script>
