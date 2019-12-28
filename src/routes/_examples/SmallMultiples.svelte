<script>
	// import * as eases from 'eases-jsnext';
	// import { tween } from 'svelte-extras';
	import { LayerCake, Svg, calcExtents, flatten } from 'layercake';
	import pointSeries from '../../data/pointSeries.js';
	import Line from '../../components/Line.svelte';

	/* --------------------------------------------
	 * Grab the extents of the full dataset
	 */
	const extents = calcExtents(flatten(pointSeries), [
		{ field: 'x', accessor: d => d.x },
		{ field: 'y', accessor: d => d.y }
	]);

	/* --------------------------------------------
	 * Sort by the last value
	 */
	pointSeries.sort((a, b) => {
		return b[b.length - 1].y - a[a.length - 1].y;
	});

// 		Array.prototype.forEach.call(document.querySelectorAll('.input-container[data-which="small-multiples"]'), el => {
// 			el.addEventListener('change', e => {
// 				const whichScale = e.target.value;
// 				cakes.forEach(myCake => {
// 					const { domains } = myCake.get();
// 					// Set the source of our domain extent
// 					const doughmain = whichScale === 'shared' ? extents : domains;

// 					tween.call(myCake, 'xDomain', doughmain.x, {
// 						duration: 300,
// 						easing: eases.cubicOut
// 					});
// 					tween.call(myCake, 'yDomain', doughmain.y, {
// 						duration: 300,
// 						easing: eases.cubicOut
// 					});
// 				});
// 			});
// 		});
// 	}
// };
</script>

<div class="input-container" data-which="small-multiples" style="margin-bottom:7px;">
	<label><input type="radio" name="scale" value="individual" checked="true"/> Individual scale</label>
	<label><input type="radio" name="scale" value="shared"/> Shared scale</label>
</div>


<div class="group-container">
	{#each pointSeries as data}
		<div class="chart-container">
			<LayerCake
				padding={{ top: 2, right: 6, bottom: 2, left: 6 }}
				x={'x'}
				y={'y'}
				{data}
			>
				<Svg>
					<Line
						stroke={'#000'}
					/>
				</Svg>
			</LayerCake>
		</div>
	{/each}

</div>

<style>
	.group-container {
		height: 90%;
		width: 100%;
	}

	.chart-container {
		position: relative;
		display: inline-block;
		width: 11%;
		height: 30%;
	}
</style>
