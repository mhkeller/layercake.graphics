---
title: Layout components
---

Layer Cake comes with layout components that provide HTML, Svg, Canvas and WebGL containers for your custom components.

You must wrap your chart components in these layout components for them to appear. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any applied margin.

The Canvas and WebGL layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

## Options

All layout components let you set a `zIndex` property to fine-tune their layering. This is useful if you want your layers to build in a certain order but have a different appearance than their DOM order.

### Html

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Html } from 'layercake';
</script>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake ...>
    <Html zIndex={1}> <!-- Optional z-index -->
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
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container"
  <LayerCake ...>
    <Svg zIndex={2}> <!-- Optional z-index -->
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
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container"
  <LayerCake ...>
    <Canvas zIndex={3}> <!-- Optional z-index -->
      <CanvasLayer/>
    </Canvas>
  </LayerCake>
</div>
```

In the component, you access the canvas context with `const { ctx } = getContext('ctx');`. This value is on a different context from the `getContext('LayerCake')` one because you could have multiple canvas layers and there wouldn't be an easy way to grab the right one.

> Since the `ctx` value is a normal 2d context, the underlying canvas element is accessible under `ctx.canvas`.

Here's an example showing a scatter plot.

```html
<!-- { filename: './components/CanvasLayer.svelte' } -->
<script>
	import { getContext } from 'svelte';
	import { scaleCanvas } from 'layercake';

	const { data, xGet, yGet, width, height } = getContext('LayerCake');
	const { ctx } = getContext('ctx');

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
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container"
  <LayerCake ...>
    <WebGL zIndex={4}> <!-- Optional z-index -->
    </WebGL>
  </LayerCake>
</div>
```
In the component, you access the canvas context with `const { gl } = getContext('gl');`. This value is on a different context from the `getContext('LayerCake')` one because you could have multiple WebGL layers and there wouldn't be an easy way to grab the right one.

> Since the `gl` value is a normal WebGL context, the underlying canvas element is accessible under `gl.canvas`.

See the [WebGL scatter chart](/example/ScatterWebGL) for a working example.
