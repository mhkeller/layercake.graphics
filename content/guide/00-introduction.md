---
title: Introduction
---

### What is LayerCake?

LayerCake is a graphics framework, built on top of [Svelte](https://svelte.technology) that removes the boilerplate from making responsive web graphics.

At its heart, LayerCake is a [Svelte store](https://svelte.technology/guide#state-management) that takes an array of data objects, a target DOM element and creates scales bound to your element's dimensions. It also includes higher level methods to organize multiple SVG, HTML and Canvas layers that use these scales.

By breaking a part a graphic into layers, you can more easily reuse components from project to project. It also lets you easily move between web environments by giving you a common coordinate system. You may be using Canvas for a scatterplot, SVG for axes and HTML for annotations but they all read from a common store and appear seamless to the viewer.

> LayerCake uses D3 scales. See more in the [`xScale`](#xScale), [`yScale`](#yScale) and [`rScale`](#rScale) sections of the [Store API](#store-api).

### What LayerCake is not

LayerCake is not a high-level charting library. It doesn't have any built-in concepts or strong opinions about how your data should be structured.

> See the [`flatten`](#flatten) and [`flatData`](#flatData) methods in the [Store API](#store-api) section below for more info about data structure.

### Getting started

You initialize your cake in a normal JavaScript file. Here is an example in LayerCake's most basic usage, loading in data and binding its extents to a DOM element.

```js
/* { filename: 'main.js' } */
import LayerCake from 'LayerCake';

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
});

console.log(myCake.get());
```

So far, `myCake` is a Svelte Store with a few different properties that were just computed. Because we gave LayerCake values for `x` and `y`, it's measured the extent of our data's x- and y-dimensions and created `xScale` and `yScale` properties. It's also measured our DOM element as well as created x- and y-accessors so, for a given row of our data we can compute the value in our coordinate system.

```js
const { x, y, xScale, yScale } = myCake.get();

points.forEach(d => {
  const firstPoint = [xScale(x(d)), yScale(y(d))];
});
```

> You can also use the shorthand `[xGet(d), yGet(d)]`. See the [Store API](#store-api) section for a full list of computed properties.

Because LayerCake has bound the target DOM element's dimensions to your scales, all computed properties will be updated automatically on resize.

### Organizing components

While it's perfectly fine to use LayerCake as a simple store and implement the rest of your project your own way, LayerCake also comes with helper functions to take care of creating graphic layers that have full access to the store. Add layers inside the `.svgLayers`, `.htmlLayers` or `.canvasLayers` method. Each layer is a Svelte component. When you've added all the layers to your cake, run `.render()`.

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
    { component: Scatter, opts: { fill: 'blue', r: 3 } }
  ])

myCake.render();
```

```html
<!-- { filename: 'Scatter.html' } -->
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

### Adding more layers

We just saw how to add SVG layers with the `.svgLayers` method. You also have `.htmlLayers` and `canvasLayers`. For the first two, every item in the array will create a new DOM element to render into, `<g>` for SVG and `<div>` for HTML. For Canvas, since there's no DOM equivalent, each layer renders into the same Canvas context. See the [Scatter canvas](examples/Scatter) example for details.

Layers are rendered in the order they appear. You can call these methods multiple times to create a new layout group.

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
