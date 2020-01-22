---
title: Layout components
---

Layer Cake comes with layout components that provide HTML, Svg, Canvas and WebGl containers for your custom components.

You must wrap your chart components in these layout components for them to appear. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any applied margin.

The Canvas and Webgl layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

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
    </Canvas>
  </LayerCake>
</div>
```

### WebGl

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, WebGl } from 'layercake';
</script>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container"
  <LayerCake ...>
    <WebGl zIndex={4}> <!-- Optional z-index -->
    </WebGl>
  </LayerCake>
</div>
```
