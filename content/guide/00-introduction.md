---
title: Introduction
---

### What is Layer Cake?

Layer Cake is a graphics framework, built on top of [Svelte](https://svelte.technology) that removes the boilerplate from making responsive web graphics.

Once you pass in your parameters of a target DOM element and some data, the library creates a [Svelte store](https://svelte.technology/guide#state-management) that includes scales bound to your element's dimensions and the data's extents. Layer Cake also includes higher level methods to organize multiple SVG, HTML and Canvas layers that use these scales.

By breaking a part a graphic into layers, you can more easily reuse components from project to project. It also lets you easily move between web languages (SVG, Canvas, HTML, WebGL) by giving you a common coordinate system. You may be using Canvas for a scatterplot, SVG for axes and HTML for annotations but they all read from a common store and appear seamless to the viewer. You can choose the best technology for that part of the graphic without worrying about how it will interact with other elements.

> Layer Cake uses D3 scales. See more in the [xScale](#xScale), [yScale](#yScale) and [rScale](#rScale) sections of the [Store API](#store-api).

Layer Cake is more about having a system to organize your own custom components than it is a high-level charting library. It doesn't have any built-in concepts or strong opinions about how your data should be structured.

> See the [`flatten`](#flatten) and [`flatData`](#flatData) methods in the [Store API](#store-api) section below for more info about data structure.

### Getting started

Here is an example with a basic folder structure like this:

```bash
my-app
 ├── index.html
 └── js
   └── main.js
```

```html
<!-- { filename: 'index.html' } -->
<!-- The target div needs to have a width and a height -->
<div id="chart-target" style="width: 100%; height: 300px;"></div>
```

```js
/* { filename: 'js/main.js' } */
import LayerCake from 'LayerCake';

// Define some data
const points = [
  {x: 0, y: 1},
  {x: 10, y: 5},
  {x: 15, y: 10}
];

// Instantiate the cake, point it to our target div
// and which keys to look for on the data
const myCake = new LayerCake({
  target: document.getElementById('chart-target'),
  data: points,
  x: 'x',
  y: 'y'
});

console.log(myCake.get());
```

> Each of the chart examples on the home page can be run locally by clicking into them and clikcing `Download`. If you are using Layer Cake within Sapper, the code here in `main.js` would go inside your components `oncreate()` method, which is how this examples site is built. You can also download a starter template at [github.com/mhkeller/layercake-template](https://github.com/mhkeller/layercake-template).

The `myCake` variable is a Svelte Store that just computed different properties to use in our chart. Because we gave Layer Cake values for `x` and `y`, it has measured the extent of our data's x- and y-dimensions and created `xScale` and `yScale` properties. It has also measured our DOM element as well as created x- and y-accessors so, for a given row of our data we can compute the value in our coordinate system.

```js
const { x, y, xScale, yScale } = myCake.get();

points.forEach(d => {
  const firstPoint = [xScale(x(d)), yScale(y(d))];
});
```

> You can also use the shorthand `[xGet(d), yGet(d)]`. See the [Store API](#store-api) section for a full list of computed properties.

Because Layer Cake has bound the target DOM element's dimensions to your scales, all computed properties will update on resize automatically.

### Layer components

While it's perfectly fine to use Layer Cake as a store and implement the rest of your project your own way, the library also comes with higher-level methods to create graphic layers and lay them out in a common coordinate space.

To do this, pass a list of Svelte components to any of the `.svgLayers`, `.htmlLayers`, `.canvasLayers` or `.webglLayers` methods. When you've added all the layers to your cake, run `.render()`.

Here's an example creating an SVG scatter plot using the above data.

```js
/* { filename: 'main.js' } */
import LayerCake from 'LayerCake';
import Scatter from './components/Scatter.html';

const points = [
  {x: 0, y: 1},
  {x: 10, y: 5},
  {x: 15, y: 10}
];

const myCake = new LayerCake({
  x: 'x',
  y: 'y',
  data: points,
  target: document.getElementById('chart-target')
})
  .svgLayers([
    { component: Scatter, opts: { fill: 'blue', r: 3 } } // The opts field is optional but exists to let you pass settings down to your components so they can be more reusable.
  ])

myCake.render();
```

```html
<!-- { filename: '/components/Scatter.html' } -->
{#each $data as d}
  <circle cx='{xGet(d)}' cy='{yGet(d)}' fill='{opts.fill}' r='{opts.r}' />
{/each}
```

> We've defined the circle's fill color and radius size in `main.js` using the `opts` field. You could very well hardcode these values into your layer component. Passing in values from `mains.js` is shown here to give an example of how you can make your components more reusable. For example, you could use the same layer component to render small multiples, but pass in a color to highlight one of them.

Our DOM now looks something like this:

```html
<svg width="<el width>" height="<el height>">
  <!-- One main g to wrap all layers -->
  <g>
    <!-- Scatter g -->
    <g>
      <circle cx="..." cy="..." r="..." fill="blue"/>
      <circle cx="..." cy="..." r="..." fill="blue"/>
      <circle cx="..." cy="..." r="..." fill="blue"/>
    </g>
  </g>
</svg
```

### More layer types

We just saw how to add SVG layers with the `.svgLayers` method. You also have `htmlLayers` and `canvasLayers`. For the SVG and HTML groups, every item in the array will create a new DOM element to render into, `<g>` for SVG and `<div>` for HTML. For Canvas, since there's no DOM equivalent, each layer renders into the same Canvas context. See the [Scatter canvas](examples/Scatter) example for details.

Layers are rendered in the order they appear and you can call these methods multiple times to create a new layout group.

```js
/* { filename: 'main.js' } */
import LayerCake from 'LayerCake';

import ScatterCanvas from './components/ScatterCanvas.html';
import AxisX from './components/AxisX.html';
import AxisY from './components/AxisY.html';
import Annotations from './components/Annotations.html';

const blurbs = [
  { x: 10, y: 20, text: 'Look at this value!'}
];

const points = [
  {x: 0, y: 1},
  {x: 10, y: 5},
  {x: 15, y: 10}
];

const myCake = new LayerCake({
  x: 'x',
  y: 'y',
  data: points,
  target: document.getElementById('chart-target')
})
  .canvasLayers([
    { component: Scatter, opts: { fill: 'blue', r: 3 } }
  ])
  .svgLayers([
    { component: AxisX, opts: { } },
    { component: AxisY, opts: { } }
  ])
  .htmlLayers([
    { component: Annotations, opts: { blurbs } }
  ]);
  // If you needed to, you could do `.svgLayers` again...

myCake.render();
```

> Many common chart types have example pages. See the gallery at <https://layercake.graphics> or use the dropdown menu at the top of the page to navigate to one.

### Data-less cakes

You can also use Layer Cake to simply arrange SVG, HTML, Canvas and WebGL elements on top of one another, sharing the same dimensions. For example, this would be handy if you have some SVG artwork that you want to put on top of an HTML video player.

Here's an example just setting the `target` value.

```js
/* { filename: 'main.js' } */
import LayerCake from 'LayerCake';
import Frame from './components/Frame.html';
import VideoPlayer from './components/VideoPlayer.html';

const myCake = new LayerCake({
  target: document.getElementById('chart-target')
})
  .svgLayers([
    { component: Frame }
  ])
  .htmlLayers([
    { component: VideoPlayer }
  ]);

myCake.render();
```
