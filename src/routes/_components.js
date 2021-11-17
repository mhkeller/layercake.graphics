import Area from './_components/Area.svelte';
import AreaStacked from './_components/AreaStacked.svelte';
import AxisRadial from './_components/AxisRadial.svelte';
import AxisX from './_components/AxisX.svelte';
import AxisY from './_components/AxisY.svelte';
import Bar from './_components/Bar.svelte';
import BarStacked from './_components/BarStacked.svelte';
import Beeswarm from './_components/Beeswarm.svelte';
import BeeswarmForce from './_components/BeeswarmForce.svelte';
import Brush from './_components/Brush.svelte';
import Calendar from './_components/Calendar.svelte';
import CirclePack from './_components/CirclePack.svelte';
import CirclePackForce from './_components/CirclePackForce.svelte';
import CirclePackNested from './_components/CirclePackNested.svelte';
import ClevelandDotPlot from './_components/ClevelandDotPlot.svelte';
import Column from './_components/Column.svelte';
import ColumnStacked from './_components/ColumnStacked.svelte';
// import ForceDirectedGraph from './_components/ForceDirectedGraph.svelte';
import Line from './_components/Line.svelte';
import MapSvg from './_components/Map.svg.svelte';
import MapCanvas from './_components/Map.canvas.svelte';
import MultiLine from './_components/MultiLine.svelte';
import Radar from './_components/Radar.svelte';
import Sankey from './_components/Sankey.svelte';
import ScatterCanvas from './_components/Scatter.canvas.svelte';
import ScatterSvg from './_components/Scatter.svg.svelte';
import ScatterWebgl from './_components/ScatterWebgl.svelte';
import Voronoi from './_components/Voronoi.svelte';

export default [
	{ title: 'Area.svelte', component: Area },
	{ title: 'AreaStacked.svelte', component: AreaStacked },
	{ title: 'AxisRadial.svelte', component: AxisRadial },
	{ title: 'AxisX.svelte', component: AxisX },
	{ title: 'AxisY.svelte', component: AxisY },
	{ title: 'Bar.svelte', component: Bar },
	{ title: 'BarStacked.svelte', component: BarStacked },
	{ title: 'Beeswarm.svelte', component: Beeswarm },
	{ title: 'BeeswarmForce.svelte', component: BeeswarmForce },
	{ title: 'Brush.svelte', component: Brush },
	{ title: 'CalendarMonth.svelte', component: Calendar },
	{ title: 'CirclePack.svelte', component: CirclePack },
	{ title: 'CirclePackForce.svelte', component: CirclePackForce },
	{ title: 'CirclePackNested.svelte', component: CirclePackNested },
	{ title: 'ClevelandDotPlot.svelte', component: ClevelandDotPlot },
	{ title: 'Column.svelte', component: Column },
	{ title: 'ColumnStacked.svelte', component: ColumnStacked },
	// { title: 'ForceDirectedGraph.svelte', component: ForceDirectedGraph },
	{ title: 'Line.svelte', component: Line },
	{ title: 'Map.svg.svelte', component: MapSvg },
	{ title: 'Map.canvas.svelte', component: MapCanvas },
	{ title: 'MultiLine.svelte', component: MultiLine },
	{ title: 'Radar.svelte', component: Radar },
	{ title: 'Sankey.svelte', component: Sankey },
	{ title: 'Scatter.canvas.svelte', component: ScatterCanvas },
	{ title: 'Scatter.svg.svelte', component: ScatterSvg },
	{ title: 'Scatter.webgl.svelte', component: ScatterWebgl },
	{ title: 'Voronoi.svelte', component: Voronoi },
];
