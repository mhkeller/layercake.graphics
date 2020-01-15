---
title: Layout components
---

Layer Cake comes with layout components that provide HTML, Svg, Canvas and WebGl containers for your custom components.

You must wrap your chart components in these layout components for them to appear. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any applied margin.

The Canvas and Webgl layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

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
    <Html>
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
    <Svg>
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
    <Canvas>
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
    <WebGl>
    </WebGl>
  </LayerCake>
</div>
```
