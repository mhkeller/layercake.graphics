<script>
	/**
		Generates an SVG area shape using the `area` function from d3-shape
		@param {String} fill=#ab00d610 – The shape's fill color.
		@param {Function} [curve=curveLinear] – An optional D3 interpolation function. See [d3-shape](https://github.com/d3/d3-shape#curves) for options.
	*/
	import { getContext } from 'svelte';
	import { area, curveLinear } from 'd3-shape';

	const { data, xGet, yGet, yScale } = getContext('LayerCake');

	export let fill = '#ab00d610';
	export let curve = curveLinear;

	$: path = area()
		.x($xGet)
		.y1($yGet)
		.y0(d => $yScale(0))
		.curve(curve);
		// .defined($y)
</script>

<path class='path-area' d='{path($data)}' {fill}></path>
