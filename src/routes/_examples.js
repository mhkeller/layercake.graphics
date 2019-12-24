import Line from './_examples/Line.svelte';
import Scatter from './_examples/Scatter.svelte';
// import MapSvg from './_examples/MapSvg.html';
import Column from './_examples/Column.svelte';
import AreaStacked from './_examples/AreaStacked.svelte';
import ColumnStacked from './_examples/ColumnStacked.svelte';
import MultiLine from './_examples/MultiLine.svelte';
// import MapLayered from './_examples/MapLayered.html';
import Bar from './_examples/Bar.svelte';
import BarStacked from './_examples/BarStacked.svelte';
import ScatterWebgl from './_examples/ScatterWebgl.svelte';
import ClevelandDotPlot from './_examples/ClevelandDotPlot.svelte';
// import Histogram from './_examples/Histogram.html';
// import SmallMultiples from './_examples/SmallMultiples.html';
// import Calendar from './_examples/Calendar.html';
// import Timeplot from './_examples/Timeplot.html';
// import RadarChart from './_examples/RadarChart.html';

export default [
	{ title: 'Line + area', slug: 'Line', component: Line },
	{ title: 'WebGl Scatter (svg axes, quadtree hover)', slug: 'ScatterWebgl', component: ScatterWebgl },
		// { title: 'Map (svg)', slug: 'MapSvg', component: MapSvg },
		// { title: 'Multilayer map (canvas + svg)', slug: 'MapLayered', component: MapLayered },
	{ title: 'Annotated column', slug: 'Column', component: Column },
	{ title: 'Stacked column', slug: 'ColumnStacked', component: ColumnStacked },
	{ title: 'Bar', slug: 'Bar', component: Bar },
	{ title: 'Stacked bar', slug: 'BarStacked', component: BarStacked },
	{ title: 'Multiline (html labels + quadtree tooltip)', slug: 'MultiLine', component: MultiLine },
	{ title: 'Stacked area', slug: 'AreaStacked', component: AreaStacked },
	{ title: 'Scatter (svg + canvas + voronoi)', slug: 'Scatter', component: Scatter },
		{ title: 'Cleveland dot plot', slug: 'ClevelandDotPlot', component: ClevelandDotPlot },
		// { title: 'Calendar (one cake per month)', slug: 'Calendar', component: Calendar },
		// { title: 'Time of day plot', slug: 'Timeplot', component: Timeplot },
		// { title: 'Histogram (variable bins)', slug: 'Histogram', component: Histogram },
		// { title: 'Small multiples (animated domain transition)', slug: 'SmallMultiples', component: SmallMultiples },
		// { title: 'Radar Chart', slug: 'RadarChart', component: RadarChart }
];
