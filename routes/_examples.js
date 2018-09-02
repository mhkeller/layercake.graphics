import Line from '../components/examples/Line.html';
import ScatterCanvas from '../components/examples/ScatterCanvas.html';
import MapSvg from '../components/examples/MapSvg.html';
import Column from '../components/examples/Column.html';
import AreaStacked from '../components/examples/AreaStacked.html';
import ColumnStacked from '../components/examples/ColumnStacked.html';
import MultiLine from '../components/examples/MultiLine.html';
import MapLayered from '../components/examples/MapLayered.html';
import Bar from '../components/examples/Bar.html';
import BarStacked from '../components/examples/BarStacked.html';

export default [
	{ title: 'Line + area', slug: 'Line', component: Line },
	{ title: 'Scatter (svg + canvas + voronoi)', slug: 'ScatterCanvas', component: ScatterCanvas },
	{ title: 'Map (svg)', slug: 'MapSvg', component: MapSvg },
	{ title: 'Multilayer map (canvas + svg)', slug: 'MapLayered', component: MapLayered },
	{ title: 'Column (with annotation)', slug: 'Column', component: Column },
	{ title: 'Stacked area', slug: 'AreaStacked', component: AreaStacked },
	{ title: 'Stacked column', slug: 'ColumnStacked', component: ColumnStacked },
	{ title: 'Multiline (html labels + quadtree tooltip)', slug: 'MultiLine', component: MultiLine },
	{ title: 'Bar', slug: 'Bar', component: Bar },
	{ title: 'Stacked bar', slug: 'BarStacked', component: BarStacked },
];
