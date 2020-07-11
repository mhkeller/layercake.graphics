---
title: Layout component props
---

Layer Cake comes with layout components that provide HTML, Svg, ScaledSvg, Canvas and WebGL containers for your custom components.

You must wrap your chart components in these layout components for them to appear properly scaled. For Html and Svg components, they create a `<div>` and `<g>`, respectively, that is the main element that accounts for any applied margin.

The Canvas and WebGL layout components do the same and also create the canvas contexts that are then available on the LayerCake context object.

All layout components take the following props:

* [zIndex](guide#zindex-1) `Number|String`
* [pointerEvents](guide#pointerevents-1) `Boolean`

The Svg and ScaledSvg layout components also accept:

* [viewBox](guide#viewbox-1) `String`

And ScaledSvg additionally accepts:

* [fixedAspectRatio](guide#fixedaspectratio-1) `Number`

The WebGL Component accepts:

* [contextAttributes](guide#contextattributes-1) `Object`

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

For ScaledSvg components, you can pass in a set aspect ratio. See the [server-side rendered Map](/example-ssr/MapSvg) for an example.

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
  <WebGL
    contextAttributes={{
      antialias: false,
      depth: false,
      alpha: false
    }}
  >
  </WebGL>
</LayerCake>
```

