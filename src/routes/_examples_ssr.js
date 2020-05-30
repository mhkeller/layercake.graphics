import Line from './_examples_ssr/Line.svelte';
// import Scatter from './_examples_ssr/Scatter.svelte';
import MapSvg from './_examples_ssr/MapSvg.svelte';
import Column from './_examples_ssr/Column.svelte';
import AreaStacked from './_examples_ssr/AreaStacked.svelte';
import ColumnStacked from './_examples_ssr/ColumnStacked.svelte';
import MultiLine from './_examples_ssr/MultiLine.svelte';
import MapLayered from './_examples_ssr/MapLayered.svelte';
import Bar from './_examples_ssr/Bar.svelte';
import BarStacked from './_examples_ssr/BarStacked.svelte';
import ScatterWebGL from './_examples_ssr/ScatterWebgl.svelte';
import ClevelandDotPlot from './_examples_ssr/ClevelandDotPlot.svelte';
import Histogram from './_examples_ssr/Histogram.svelte';
import SmallMultiples from './_examples_ssr/SmallMultiples.svelte';
import Calendar from './_examples_ssr/Calendar.svelte';
import Timeplot from './_examples_ssr/Timeplot.svelte';
// import Radar from './_examples_ssr/Radar.svelte';

export default [
	{ replPath: '', title: 'Line + area', slug: 'Line', component: Line },
	{ replPath: '', title: 'WebGL Scatter (svg axes, quadtree hover)', slug: 'ScatterWebgl', component: ScatterWebGL },
	{ replPath: '', title: 'Map (svg)', slug: 'MapSvg', component: MapSvg },
	{ replPath: '', title: 'Multilayer map (canvas + svg)', slug: 'MapLayered', component: MapLayered },
	{ replPath: '', title: 'Column annotated', slug: 'Column', component: Column },
	{ replPath: '', title: 'Stacked column', slug: 'ColumnStacked', component: ColumnStacked },
	{ replPath: '', title: 'Bar', slug: 'Bar', component: Bar },
	{ replPath: '', title: 'Stacked bar', slug: 'BarStacked', component: BarStacked },
	{ replPath: '', title: 'Multiline (html labels + quadtree tooltip)', slug: 'MultiLine', component: MultiLine },
	{ replPath: '', title: 'Stacked area', slug: 'AreaStacked', component: AreaStacked },
		// { replPath: '', title: 'Scatter (svg + canvas + voronoi)', slug: 'Scatter', component: Scatter },
	{ replPath: '', title: 'Cleveland dot plot', slug: 'ClevelandDotPlot', component: ClevelandDotPlot },
	{ replPath: '', title: 'Calendar (one cake per month)', slug: 'Calendar', component: Calendar },
	{ replPath: '', title: 'Time of day plot', slug: 'Timeplot', component: Timeplot },
	{ replPath: '', title: 'Histogram (variable bins)', slug: 'Histogram', component: Histogram },
	{ replPath: '', title: 'Small multiples (animated domain transition)', slug: 'SmallMultiples', component: SmallMultiples },
		// { replPath: '', title: 'Radar chart', slug: 'Radar', component: Radar }
];
