---
title: Layout components
---

Here are examples using the four layout components: HTML, Svg, ScaledSvg, Canvas and WebGL containers.

### Html

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Html } from 'layercake';
</script>

<style>
  /*
  	The wrapper div needs to have an explicit width and height in CSS.
  	It can also be a flexbox child or CSS grid element.
  	The point being it needs dimensions since the <LayerCake> element will
  	expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake ...>
    <Html zIndex={1}> <!-- Optional z-index -->
      ...
    </Html>
  </LayerCake>
</div>
```

### Svg

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Svg } from 'layercake';
</script>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake ...>
    <Svg zIndex={2}> <!-- Optional z-index -->
    </Svg>
  </LayerCake>
</div>
```

This component also has a [named slot](https://svelte.dev/docs#slot_name) for adding elements into the SVG `<defs>` field.

```html
<div class="chart-container">
  <LayerCake ...>
    <Svg>
      <svelte:fragment slot="defs">
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="20%" stop-color="gold" />
          <stop offset="90%" stop-color="red" />
        </linearGradient>
      </svelte:fragment>
    </Svg>
  </LayerCake>
</div>
```

### ScaledSvg

Use this when you want to render SVGs server side, using Rich Harris's [Pancake technique](https://dev.to/richharris/a-new-technique-for-making-responsive-javascript-free-charts-gmp).

It's often used in conjunction with props `ssr={true}` and `percentRange={true}`.

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, ScaledSvg } from 'layercake';
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container"
  <LayerCake
    ssr={true}
    percentRange={true}
  >
    <ScaledSvg
      fixedAspectRatio={16/9} <!-- Optional fixed aspect ratio -->
    >
    </ScaledSvg>
  </LayerCake>
</div>
```

This component also has a [named slot](https://svelte.dev/docs#slot_name) for adding elements into the SVG `<defs>` field.

```html
<div class="chart-container">
  <LayerCake ...>
    <Svg>
      <svelte:fragment slot="defs">
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="20%" stop-color="gold" />
          <stop offset="90%" stop-color="red" />
        </linearGradient>
      </svelte:fragment>
    </Svg>
  </LayerCake>
</div>
```

### Canvas

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Canvas } from 'layercake';

  import CanvasLayer from './components/CanvasLayer.svelte'
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake ...>
    <Canvas zIndex={3}> <!-- Optional z-index -->
      <CanvasLayer/>
    </Canvas>
  </LayerCake>
</div>
```

In the component, you access the canvas context with `const { ctx } = getContext('canvas');`. This value is on a different context from the `getContext('LayerCake')` one because you could have multiple canvas layers and there wouldn't be an easy way to grab the right one. This way, the component always has access to just its parent Canvas component.

> Since the `ctx` value is a normal 2d context, the underlying canvas element is accessible under `ctx.canvas`.

Here's an example showing a scatter plot.

```html
<!-- { filename: './components/CanvasLayer.svelte' } -->
<script>
	import { getContext } from 'svelte';
	import { scaleCanvas } from 'layercake';

	const { data, xGet, yGet, width, height } = getContext('LayerCake');
	const { ctx } = getContext('canvas');

	$: {
		if ($ctx) {
			/* --------------------------------------------
			 * If you were to have multiple canvas layers
			 * maybe for some artistic layering purposes
			 * put these reset functions in the first layer, not each one
			 * since they should only run once per update
			 */
			scaleCanvas($ctx, $width, $height);
			$ctx.clearRect(0, 0, $width, $height);

			/* --------------------------------------------
			 * Draw the scatterplot
			 */
			$data.forEach(d => {
				$ctx.beginPath();
				$ctx.arc($xGet(d), $yGet(d), 5, 0, 2 * Math.PI, false);
				$ctx.fillStyle = '#f0c';
				$ctx.fill();
			});
		}
	}
</script>
```

### WebGL

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, WebGL } from 'layercake';
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake ...>
    <WebGL zIndex={4}> <!-- Optional z-index -->
    </WebGL>
  </LayerCake>
</div>
```
In the component, you access the canvas context with `const { gl } = getContext('gl');`. This value is on a different context from the `getContext('LayerCake')` one because you could have multiple WebGL layers and there wouldn't be an easy way to grab the right one.

> Since the `gl` value is a normal WebGL context, the underlying canvas element is accessible under `gl.canvas`.

See the [WebGL scatter chart](/example/ScatterWebgl) for a working example.
