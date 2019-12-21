<script>
	import { getContext } from 'svelte';
	import { scaleOrdinal } from 'd3-scale';

	export let seriesColors;

	const { data, xGet, yGet, xScale, custom } = getContext('LayerCake');

	$: columnHeight = d => {
		const ys = $yGet(d);
		return ys[0] - ys[1];
	};

	const colorscale = scaleOrdinal()
		.domain($custom.seriesNames)
		.range(seriesColors);


	$: fill = d => {
		return colorscale(d);
	};

	// export default {
	// 	namespace: 'svg',
	// 	computed: {
	// 		colorScale: ({ $xScale, $seriesNames_, $data, opts }) => {
	// 			return scaleOrdinal()
	// 				.domain($seriesNames_)
	// 				.range(opts.colors);
	// 		},
	// 		fill: ({ colorScale }) => {
	// 			return seriesName => colorScale(seriesName);
	// 		},
	// 		width: ({ $xScale }) => {
	// 			return $xScale.bandwidth();
	// 		},
	// 		height: ({ $height, $xScale, $yGet }) => {
	// 			return (d) => {
	// 				const vals = $yGet(d);
	// 				return vals[0] - vals[1];s
	// 			};
	// 		}
	// 	}
	// };
</script>

{#each $data as series, i}
	{#each series as d}
		<rect class='group-rect' data-id="{i}" x="{$xGet(d)}" y="{$yGet(d)[1]}" width={$xScale.bandwidth()} height="{columnHeight(d)}"fill={fill(series.key)}></rect>
	{/each}
{/each}
