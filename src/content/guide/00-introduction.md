---
title: Introduction
---

### What is Layer Cake?

Layer Cake is a graphics framework, built on top of [Svelte](https://svelte.technology) that removes the boilerplate from making responsive web graphics. it gives you common elements, like a coordinate system and scales, for you to start creating your own dataviz layers, like axes, plots and annotations.

Give it some data and a target DOM element and Layer Cake will create a [Svelte store](https://svelte.technology/guide#state-management) that includes scales bound to your element's dimensions and the data's extents. Layer Cake also includes higher level methods to organize multiple SVG, HTML and Canvas layers that use these scales.

By breaking a part a graphic into layers, you can more easily reuse components from project to project. It also lets you easily move between web languages (SVG, Canvas, HTML, WebGL) by giving you a common coordinate system. You may be using Canvas for a scatterplot, SVG for axes and HTML for annotations but they all read from a common store and appear seamless to the viewer. You can choose the best technology for that part of the graphic without worrying about how it will interact with other elements.

> Layer Cake uses D3 scales. See more in the [xScale](/guide#xscale), [yScale](/guide#yscale) and [rScale](/guide#rscale) sections of the [Store API](/guide#store-api).

Layer Cake is more about having a system to organize your own custom components than it is a high-level charting library. It doesn't have any built-in concepts or strong opinions about how your data should be structured.

> See the [`flatData`](/guide#flatdata) option in the [Store API](/guide#store-api) section and the [`flatten`](/guide#flatten) helper function for more info about data structure.

### Getting started

Install Layer Cake in your `devDependencies` alongside Svelte.

```sh
npm install --save-dev layercake
```

The easiest way to get started is to clone down or use [degit](https://github.com/rich-harris/degit) to grab the starter template at [github.com/mhkeller/layercake-template](https://github.com/mhkeller/layercake-template).

The important files are like your `index.html` which has the DOM element we want to render into and the cake configuration in `main.js`:

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
import { LayerCake } from 'layercake';

// Define some data
const points = [
  {x: 0, y: 1},
  {x: 10, y: 5},
  {x: 15, y: 10}
];

// Instantiate the cake, point it to our target div
// and which keys to look for on the data
<LayerCake
  data={ points }
  x='x'
  y='y'
>
```

> Each of the chart examples on the home page can be run locally by clicking into them and clicking `Download`. If you are using Layer Cake within Sapper, the code here in `main.js` would go inside your components `oncreate()` method, which is how this examples site is built.

The `myCake` variable is a Svelte Store that just computed different properties to use in our chart. Because we gave Layer Cake values for `x` and `y`, it has measured the extent of our data's x- and y-dimensions and created `xScale` and `yScale` properties. It has also measured our DOM element as well as created x- and y-accessors so, for a given row of our data we can compute the value in our coordinate system.

```js
const { x, y, xScale, yScale } = myCake.get();

points.forEach(d => {
  const firstPoint = [xScale(x(d)), yScale(y(d))];
});
```

> You can also use the shorthand `[xGet(d), yGet(d)]`. See the [Store API](/guide#store-api) section for a full list of computed properties.

Because Layer Cake has bound the target DOM element's dimensions to your scales, all computed properties will update on resize automatically.

### Layer components

While it's perfectly fine to use Layer Cake as a store and implement the rest of your project your own way, the library also comes with higher-level methods to create graphic layers and lay them out in a common coordinate space.

To do this, pass a list of Svelte components to any of the `.svgLayers`, `.htmlLayers`, `.canvasLayers` or `.webglLayers` methods. When you've added all the layers to your cake, run `.render()`.

Here's an example creating an SVG scatter plot using the above data.

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Svg } from 'layercake';
  import Scatter from './components/Scatter.svelte';

  const points = [
    {x: 0, y: 1},
    {x: 10, y: 5},
    {x: 15, y: 10}
  ];
</script>

<div class="chart-container">
  <LayerCake
    x='x'
    y='y'
    data={ points }
  >
    <Svg>
      <!-- You can expose properties on your chart components to make them more reusable -->
      <Scatter fill={'blue'} r={3} />
    </Svg>
  </LayerCake>
</div>
```

```html
<!-- { filename: '/components/Scatter.svelte' } -->
<script>
  import { getContext } from 'svelte';

  const { data, xGet, yGet } = getContext('LayerCake');

  export let fill = '#000';
  export let r = 5;
</script>

<g>
  {#each $data as d}
    <circle cx='{$xGet(d)}' cy='{yGet(d)}' fill='{fill}' r='{r}' />
  {/each}
</g>
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

```html
<script>
/* { filename: 'App.svelte' } */
import { LayerCake, Svg, Canvas, Html }  from 'layercake';

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
</script>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake
    x='x'
    y='y'
    data={points}
  >
    <Canvas>
      <Scatter fill={'blue'} r={3}/>
    </Canvas>

    <Svg>
      <AxisX/>
      <AxisY/>
    </Svg>

    <Html>
      <Annotations {blurbs} />
    </Html>

    <!-- If you wanted to, you could add another <Svg> again... -->
  </LayerCake>
</div>
```

> Many common chart types have example pages. See the gallery at <https://layercake.graphics> or use the dropdown menu at the top of the page to navigate to one.

### Data-less cakes

You can also use Layer Cake to simply arrange SVG, HTML, Canvas and WebGL elements on top of one another, sharing the same dimensions. For example, this would be handy if you have some SVG artwork that you want to put on top of an HTML video player.

Here's an example just setting the `target` value.

```html
/* { filename: 'App.Svelte' } */
<script>
  import { LayerCake, Svg, Html } from 'layercake';
  import Frame from './components/Frame.html';
  import VideoPlayer from './components/VideoPlayer.html';
</script>

<style>
  .chart-container {
    width: 100%;
    width: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake>
    <Svg>
      <Frame/>
    </Svg>

    <Html>
      <VideoPlayer/>
    </Html>
  </LayerCake>
</div>
```
