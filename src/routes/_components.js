/* --------------------------------------------
 * Normal components
 */
import Area from './_components/Area.svelte';
import AreaStacked from './_components/AreaStacked.svelte';
import AxisRadial from './_components/AxisRadial.svelte';
import AxisX from './_components/AxisX.svelte';
import AxisY from './_components/AxisY.svelte';
import Bar from './_components/Bar.svelte';
import BarStacked from './_components/BarStacked.svelte';
import Beeswarm from './_components/Beeswarm.svelte';
import BeeswarmHtml from './_components/Beeswarm.html.svelte';
import BeeswarmForce from './_components/BeeswarmForce.svelte';
import BeeswarmForceHtml from './_components/BeeswarmForce.html.svelte';
import Brush from './_components/Brush.svelte';
import Calendar from './_components/Calendar.svelte';
import CirclePack from './_components/CirclePack.svelte';
import CirclePackForce from './_components/CirclePackForce.svelte';
import CirclePackNested from './_components/CirclePackNested.svelte';
import ClevelandDotPlot from './_components/ClevelandDotPlot.svelte';
import ClevelandDotPlotHtml from './_components/ClevelandDotPlot.html.svelte';
import Column from './_components/Column.svelte';
import ColumnStacked from './_components/ColumnStacked.svelte';
// import ForceDirectedGraph from './_components/ForceDirectedGraph.svelte';
import Line from './_components/Line.svelte';
import MapSvg from './_components/Map.svg.svelte';
import MapCanvas from './_components/Map.canvas.svelte';
import MapPoints from './_components/MapPoints.svelte';
import MapPointsHtml from './_components/MapPoints.html.svelte';
import MapPointsCanvas from './_components/MapPoints.canvas.svelte';
import MapLabels from './_components/MapLabels.svelte';
import MapLabelsHtml from './_components/MapLabels.html.svelte';
import MultiLine from './_components/MultiLine.svelte';
import Radar from './_components/Radar.svelte';
import Sankey from './_components/Sankey.svelte';
import ScatterCanvas from './_components/Scatter.canvas.svelte';
import ScatterSvg from './_components/Scatter.svg.svelte';
import ScatterWebgl from './_components/ScatterWebgl.svelte';
import Voronoi from './_components/Voronoi.svelte';
import Labels from './_components/Labels.html.svelte';
import GroupLabels from './_components/GroupLabels.html.svelte';

import AxisXHtml from './_components_ssr/AxisX.html.svelte';
import AxisYHtml from './_components_ssr/AxisY.html.svelte';
import CirclePackHtml from './_components_ssr/CirclePack.html.svelte';
import ScatterHtml from './_components_ssr/Scatter.html.svelte';
import Key from './_components_ssr/Key.html.svelte';

export default [
	{ name: 'axis',
		components: [
			{ slug: 'AxisX.svelte', component: AxisX },
			{ slug: 'AxisY.svelte', component: AxisY },
			{ slug: 'AxisX.html.svelte', component: AxisXHtml },
			{ slug: 'AxisY.html.svelte', component: AxisYHtml },
			{ slug: 'AxisRadial.svelte', component: AxisRadial },
		] },
	{ name: 'chart',
		components: [
			{ slug: 'Area.svelte', component: Area },
			{ slug: 'AreaStacked.svelte', component: AreaStacked },
			{ slug: 'Bar.svelte', component: Bar },
			{ slug: 'BarStacked.svelte', component: BarStacked },
			{ slug: 'Beeswarm.svelte', component: Beeswarm },
			{ slug: 'Beeswarm.html.svelte', component: BeeswarmHtml },
			{ slug: 'BeeswarmForce.svelte', component: BeeswarmForce },
			{ slug: 'BeeswarmForce.html.svelte', component: BeeswarmForceHtml },
			{ slug: 'CalendarMonth.svelte', component: Calendar },
			{ slug: 'CirclePack.svelte', component: CirclePack },
			{ slug: 'CirclePack.html.svelte', component: CirclePackHtml },
			{ slug: 'CirclePackForce.svelte', component: CirclePackForce },
			{ slug: 'CirclePackNested.svelte', component: CirclePackNested },
			{ slug: 'ClevelandDotPlot.svelte', component: ClevelandDotPlot },
			{ slug: 'ClevelandDotPlot.html.svelte', component: ClevelandDotPlotHtml },
			{ slug: 'Column.svelte', component: Column },
			{ slug: 'ColumnStacked.svelte', component: ColumnStacked },
			// // { slug: 'ForceDirectedGraph.svelte', component: ForceDirectedGraph },
			{ slug: 'Line.svelte', component: Line },
			{ slug: 'MultiLine.svelte', component: MultiLine },
			{ slug: 'Radar.svelte', component: Radar },
			{ slug: 'Sankey.svelte', component: Sankey },
			{ slug: 'Scatter.canvas.svelte', component: ScatterCanvas },
			{ slug: 'Scatter.svg.svelte', component: ScatterSvg },
			{ slug: 'Scatter.webgl.svelte', component: ScatterWebgl },
			{ slug: 'Scatter.html.svelte', component: ScatterHtml },
		] },
	{ name: 'map',
		components: [
			{ slug: 'Map.svg.svelte', component: MapSvg },
			{ slug: 'Map.canvas.svelte', component: MapCanvas },
			{ slug: 'MapPoints.svelte', component: MapPoints },
			{ slug: 'MapPoints.html.svelte', component: MapPointsHtml },
			{ slug: 'MapPoints.canvas.svelte', component: MapPointsCanvas },
			{ slug: 'MapLabels.html.svelte', component: MapLabelsHtml },
			{ slug: 'MapLabels.svg.svelte', component: MapLabels },
		] },
	{ name: 'interaction',
		components: [
			{ slug: 'Voronoi.svelte', component: Voronoi },
			{ slug: 'Brush.html.svelte', component: Brush },
			// { slug: 'Quadtree.html.svelte', component: '' },
			// { slug: 'Quadtree.percent-range.html.svelte', component: '' },
			// { slug: 'SharedTooltip.html.svelte', component: '' },
			// { slug: 'SharedTooltip.percent-range.html.svelte', component: '' },
		] },
	{ name: 'annotation',
		components: [
			{ slug: 'Key.html.svelte', component: Key },
			{ slug: 'Labels.html.svelte', component: Labels },
			{ slug: 'GroupLabels.html.svelte', component: GroupLabels },
		] }
];
