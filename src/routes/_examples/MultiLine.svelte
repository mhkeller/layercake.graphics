<script>
	import { LayerCake, Svg } from 'layercake';

	import fruit from '../../data/fruit.js';
	import MultiLine from '../../components/MultiLine.svelte';
	import AxisX from '../../components/AxisX.svelte';
	import AxisY from '../../components/AxisY.svelte';
	// import LineLabels from '../../components/LineLabels.Svelte';
	// import Tooltip from '../../components/Tooltip.Svelte';

	const fruitLong = Object.keys(fruit[0]).map(key => {
		if (key === 'month') return null;
		return {
			key,
			values: fruit.map(d => {
				return { key, month: d.month, value: d[key] };
			})
		};
	}).filter(d => d);

	// Make a flat array of the `values` of our nested series
	// we can pluck the `value` field from each item in the array to measure extents
	const flatten = data => data.reduce((store, group) => store.concat(group.values), []);

	const monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

	function formatTickX (d) {
		const date = new Date(d);
		return `${monthNames[date.getMonth()]} ${date.getDate()}`;
	}

	function formatTickY (d) {
		if (d > 999) {
			return d / 1000 + 'k';
		}
		return d;
	}
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
		x={'month'}
		y={'value'}
		flatData={flatten(fruitLong)}
		yDomain={[0, null]}
		data={fruitLong}
	>
		<Svg>
			<AxisX
				gridlines={false}
				tickNumber={3}
				formatTick={formatTickX}
			/>
			<AxisY
				formatTick={formatTickY}
			/>

			<MultiLine/>
		</Svg>
	</LayerCake>
</div>
