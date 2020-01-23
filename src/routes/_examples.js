import Line from './_examples/Line.svelte';
import Scatter from './_examples/Scatter.svelte';
import MapSvg from './_examples/MapSvg.svelte';
import Column from './_examples/Column.svelte';
import AreaStacked from './_examples/AreaStacked.svelte';
import ColumnStacked from './_examples/ColumnStacked.svelte';
import MultiLine from './_examples/MultiLine.svelte';
import MapLayered from './_examples/MapLayered.svelte';
import Bar from './_examples/Bar.svelte';
import BarStacked from './_examples/BarStacked.svelte';
import ScatterWebgl from './_examples/ScatterWebgl.svelte';
import ClevelandDotPlot from './_examples/ClevelandDotPlot.svelte';
import Histogram from './_examples/Histogram.svelte';
import SmallMultiples from './_examples/SmallMultiples.svelte';
import Calendar from './_examples/Calendar.svelte';
import Timeplot from './_examples/Timeplot.svelte';
import Radar from './_examples/Radar.svelte';

export default [
	{ replPath: 'ad32f9f301484d0cace82272126e9d09?version=3.17.3', title: 'Line + area', slug: 'Line', component: Line },
	{ replPath: 'tk', title: 'WebGl Scatter (svg axes, quadtree hover)', slug: 'ScatterWebgl', component: ScatterWebgl },
	{ replPath: '1f2f354369104bb4b72c900f22e22ff5?version=3.17.3', title: 'Map (svg)', slug: 'MapSvg', component: MapSvg },
	{ replPath: 'a8135fcccf3d42e68b1f29be00fc72c6?version=3.17.3', title: 'Multilayer map (canvas + svg)', slug: 'MapLayered', component: MapLayered },
	{ replPath: '3dcdfc8c7aab4ca5a82f912f377a25e2?version=3.17.3', title: 'Annotated column', slug: 'Column', component: Column },
	{ replPath: 'f38656e90d0644cfb460206005c492e5?version=3.17.3', title: 'Stacked column', slug: 'ColumnStacked', component: ColumnStacked },
	{ replPath: '91fe94cac36c4829903238382563bc81?version=3.17.3', title: 'Bar', slug: 'Bar', component: Bar },
	{ replPath: '8d2e9a75cb0e4bf7abb86cb65915a93c?version=3.17.3', title: 'Stacked bar', slug: 'BarStacked', component: BarStacked },
	{ replPath: 'cc8d7b6ace40433da8d694f2877258a8?version=3.17.3', title: 'Multiline (html labels + quadtree tooltip)', slug: 'MultiLine', component: MultiLine },
	{ replPath: 'e6ae831e723646c8a01a039b3eeb33cb?version=3.17.3', title: 'Stacked area', slug: 'AreaStacked', component: AreaStacked },
	{ replPath: 'tk', title: 'Scatter (svg + canvas + voronoi)', slug: 'Scatter', component: Scatter },
	{ replPath: 'tk', title: 'Cleveland dot plot', slug: 'ClevelandDotPlot', component: ClevelandDotPlot },
	{ replPath: 'tk', title: 'Caslendar (one cake per month)', slug: 'Calendar', component: Calendar },
	{ replPath: 'tk', title: 'Time of day plot', slug: 'Timeplot', component: Timeplot },
	{ replPath: 'tk', title: 'Histogram (variable bins)', slug: 'Histogram', component: Histogram },
	{ replPath: 'tk', title: 'Small multiples (animated domain transition)', slug: 'SmallMultiples', component: SmallMultiples },
	{ replPath: 'tk', title: 'Radar Chart', slug: 'Radar', component: Radar }
];
