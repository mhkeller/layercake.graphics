---
title: Layout components
---

Layer Cake comes with layout components that provide HTML, Svg, Canvas and WebGl containers for your custom components.

You must wrap your chart components in these layout components for them to appear. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any margin.

The Canvas and Webgl layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

```html
<script>
  import { LayerCake, Html, Svg, Canvas, Webgl } from 'layercake';
</script>

<LayerCake
  x='x'
  y='y'
  {data}
>
  <Html>
    <myHtmlComponent/>
  </Html>

  <Svg>
    <mySvgComponent/>
  </Svg>

  <Canvas>
    <myCanvasComponent/>
  </Canvas>
  </Svg>

  <WebGl>
    <myWebGlComponent/>
  </WebGl>
</LayerCake>
```
