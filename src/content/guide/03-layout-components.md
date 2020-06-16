---
title: Layout components
---

Layer Cake comes with layout components that provide HTML, Svg, Canvas and WebGL containers for your custom components.

You must wrap your chart components in these layout components for them to appear. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any applied margin.

The Canvas and WebGL layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

### Props

All layout components take the following props:

* [zIndex](guide#zindex-21) `Number|String`
* [pointerEvents](guide#pointer-events-27) `Boolean`

The Svg and ScaledSvg layout components also accept:

* [viewBox](guide#viewbox-9) `String`

And ScaledSvg additionally accepts:

* [fixedAspectRatio](guide#fixedaspectratio-9) `Number`

The WebGL Component accepts:

* [contextAttributes](guide#) `Object`

### zIndex `Number|String`

This lets you fine-tune your layering and is useful if you want your layers to build in a certain order but have a different appearance than their DOM order.

```html
<LayerCake ...>
  <Svg
    zIndex=2
  >
  </Svg>
</LayerCake>
```

### pointerEvents `Boolean`

Useful for tooltip layers that need to be display above chart elements but not capture mouse events. Defaults to no `pointer-events` CSS being set. Set to `false` to set `pointer-events: none;`

```html
<LayerCake ...>
  <Html
    pointerEvents={false}
  >
  </Html>
</LayerCake>
```

### viewBox `String`

On Svg components, this defaults to `undefined` and `0 0 100 100` for ScaledSvg.

```html
<LayerCake ...>
  <Svg
    viewBox='0 0 100 50'
  >
  </Svg>
</LayerCake>
```

### fixedAspectRatio `Number`

For ScaledSvg components, you can pass in a set aspect ratio. See the [server-side rendered Map](/examples-ssr/MapSvg) for an example.

```html
<LayerCake ...>
  <ScaledSvg
    fixedAspectRatio={16/9}
  >
  </ScaledSvg>
</LayerCake>
```

### contextAttributes `Object`

For WebGL components, you can pass in an object that gets passed as the second argument to `canvas.getContext()`. See the [WebGL docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) for more details on what those attributes can be.

```html
<LayerCake ...>
  <ScaledSvg
    fixedAspectRatio={16/9}
  >
  </ScaledSvg>
</LayerCake>
```

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
