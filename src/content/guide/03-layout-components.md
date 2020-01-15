---
title: Layout components
---

Layer Cake comes with layout components that provide HTML, Svg, Canvas and WebGl containers for your custom components.

You must wrap your chart components in these layout components for them to appear. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any margin.

The Canvas and Webgl layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

### Html

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Html } from 'layercake';
</script>

<LayerCake ...>
  <Html>
  </Html>
</LayerCake>
```

### Svg

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Svg } from 'layercake';
</script>

<LayerCake ...>
  <Svg>
  </Svg>
</LayerCake>
```

### Canvas

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, Canvas } from 'layercake';
</script>

<LayerCake ...>
  <Canvas>
  </Canvas>
</LayerCake>
```

### WebGl

```html
<!-- { filename: 'App.svelte' } -->
<script>
  import { LayerCake, WebGl } from 'layercake';
</script>

<LayerCake ...>
  <WebGl>
  </WebGl>
</LayerCake>
```
