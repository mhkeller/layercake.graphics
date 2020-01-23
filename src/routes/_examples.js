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
	{ replPath: 'tk', title: 'Line + area', slug: 'Line', component: Line },
	{ replPath: 'tk', title: 'WebGl Scatter (svg axes, quadtree hover)', slug: 'ScatterWebgl', component: ScatterWebgl },
	{ replPath: 'tk', title: 'Map (svg)', slug: 'MapSvg', component: MapSvg },
	{ replPath: 'tk', title: 'Multilayer map (canvas + svg)', slug: 'MapLayered', component: MapLayered },
	{ replPath: 'tk', title: 'Annotated column', slug: 'Column', component: Column },
	{ replPath: 'tk', title: 'Stacked column', slug: 'ColumnStacked', component: ColumnStacked },
	{ replPath: 'tk', title: 'Bar', slug: 'Bar', component: Bar },
	{ replPath: 'tk', title: 'Stacked bar', slug: 'BarStacked', component: BarStacked },
	{ replPath: 'tk', title: 'Multiline (html labels + quadtree tooltip)', slug: 'MultiLine', component: MultiLine },
	{ replPath: 'tk', title: 'Stacked area', slug: 'AreaStacked', component: AreaStacked },
	{ replPath: 'tk', title: 'Scatter (svg + canvas + voronoi)', slug: 'Scatter', component: Scatter },
	{ replPath: 'tk', title: 'Cleveland dot plot', slug: 'ClevelandDotPlot', component: ClevelandDotPlot },
	{ replPath: 'tk', title: 'Caslendar (one cake per month)', slug: 'Calendar', component: Calendar },
	{ replPath: 'tk', title: 'Time of day plot', slug: 'Timeplot', component: Timeplot },
	{ replPath: 'tk', title: 'Histogram (variable bins)', slug: 'Histogram', component: Histogram },
	{ replPath: 'tk', title: 'Small multiples (animated domain transition)', slug: 'SmallMultiples', component: SmallMultiples },
	{ replPath: 'tk', title: 'Radar Chart', slug: 'Radar', component: Radar }
];
