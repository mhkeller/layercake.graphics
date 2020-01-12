<script>
import { LayerCake, Svg, Html } from 'layercake';
import { scaleBand } from 'd3-scale';
import groups from '../../data/groups.js';
import Column from '../../components/Column.svelte';
import AxisX from '../../components/AxisXScaleBand.svelte';
import AxisY from '../../components/AxisY.svelte';
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
</script>

<div class="chart-container">
	<LayerCake
			padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
			x={'year'}
			y={'value'}
			xScale={scaleBand().paddingInner([0.02]).round(true)}
			xDomain={['1979', '1980', '1981', '1982', '1983']}
			yDomain={[0, null]}
			data={groups}
	>
		<Svg>
			<DefArrowhead/>
			<Column/>
			<AxisX
				gridlines={false}
			/>
			<AxisY
				gridlines={false}
			/>
		</Svg>

		<Html>
			<Annotations {annotations}/>
		</Html>

		<Svg>
			<Arrows {annotations}/>
		</Svg>

	</LayerCake>

</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
