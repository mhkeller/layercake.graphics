<script>
	import { LayerCake, SvgSsr, Html } from 'layercake';
	import { scaleBand } from 'd3-scale';
	import groups from '../../data/groups.csv';

	import Column from '../../components/Column.svelte';
	import AxisX from '../../components/AxisXHtml.svelte';
	import AxisY from '../../components/AxisYHtml.svelte';
	import Annotations from '../../components/Annotations.svelte';
	import Arrows from '../../components/Arrows.svelte';
	import DefArrowhead from '../../components/DefArrowhead.svelte';

	const annotations = [
		{
			text: 'Example text...',
			top: '18%',
			left: '30%',
			arrows: [{
				clockwise: false, // true or false, defaults to true
				source: {
					anchor: 'left-bottom', // can be `{left, middle, right},{top-middle-bottom}`
					dx: -2,
					dy: -7
				},
				target: {
					x: '28%',
					y: '75%'
				}
			},
			{
				source: {
					anchor: 'right-bottom',
					dy: -7,
					dx: 5
				},
				target: {
					x: '68%',
					y: '48%'
				}
			}]
		}
	];

	groups.forEach(row => {
		row.value = +row.value;
	});
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		ssr={true}
		padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
		x='year'
		y='value'
		xScale={scaleBand().paddingInner([0.028]).round(true)}
		xDomain={['1979', '1980', '1981', '1982', '1983']}
		yDomain={[0, null]}
		xRange={[0, 100]}
		yRange={[100, 0]}
		data={groups}
	>

		<SvgSsr>
			<Column/>
		</SvgSsr>

		<Html>
			<AxisX
				ticks={scale => scale.domain()}
				tickDx={scale => scale.bandwidth() / 2}
				gridlines={false}
			/>
			<AxisY
				gridlines={false}
				ticks={4}
			/>
			<Annotations {annotations}/>
		</Html>

		<!-- <Svg>
			<DefArrowhead/>
			<Arrows {annotations}/>
		</Svg> -->
	</LayerCake>

</div>
