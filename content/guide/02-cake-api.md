---
title: Cake API
---

When you run `new LayerCake(StoreValues)` the Svelte store you get back has the following methods.

Each of the `xyzLayers` functions takes as a first argument an array of objects for each layer. You can optionally pass in an options object as the second argument. All of the layers methods share this pattern:

```js
.xyzLayers([
  { component: SvelteComponent, opts: {} }
], {
  zIndex: <optional z-index number>
})
```

If you set an `opts` object on your component layer, those values will be available in the component under `opts`, e.g. `{ component: SvelteComponent, opts: { color: '#f0c' } }`.

> All of the container elements created by `Layers` functions are absolutely positioned and use any [padding](#padding) that is set. That way, they share the same coordinate system and can sit one on top of another.

### cake.svgLayers(ComponentsList[, opts])

Creates a `<svg>` element containing one `<g>` wrapper element, which gets translated based on any [padding](#padding).

For every component layer in the passed in array, a `<g>` element is created.

### cake.htmlLayers(ComponentsList[, opts])

Creates a `<div>` element.

For every component layer in the passed in array, a `<div>` element is created.

### cake.canvasLayers(ComponentsList[, opts])

Creates a `<canvas>` element.

Because canvas elements have no DOM representation for each layer, you get access to the canvas and the 2d context as *data items* in each layer component. These aren't store values since you could have multiple canvas elements in a cake.

This means you access the `canvas` and `ctx` using `this.get()` instead of `this.store.get()`. For example, here's how a scatterplot layer component would be implemented in canvas.

```html
<!-- { filename: 'CanvasLayer.html' } -->
<script>
export default {
  oncreate () {
    const { canvas, ctx } = this.get();
    const { xGet, yGet, data } = this.store.get();

    data.forEach(d => {
      ctx.beginPath();
      ctx.arc(xGet(d), yGet(d), opts.r, 0, 2 * Math.PI, false);
      ctx.fillStyle = opts.color;
      ctx.fill();
    });
  }
};
</script>
```

Canvas layouts have more options for `opts`. Anything you set here (except for `zIndex`) will get passed as the second argument to  `canvas.getContext('2d', opts)`. See the [Canvas docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) for what options are possible.

### cake.webglLayers(ComponentsList[, opts])

Same as the canvas element except instead of `ctx` you have `gl` as a component-level data item, which is your webgl context. If webgl is not supported, `gl` will be `null`.

Same as in `.canvasLayers`, any options that you set on `opts` (except for `zIndex`) will get passed as the second argument to  `canvas.getContext('webgl', opts)`. See the [Canvas docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) for what options are possible.

### cake.render(options)

Instantiates your cake and layout groups. Returns an object `{ app, store }` where `app` is the instantiated Svelte app and `store` is the cake's Svelte store. Any options you pass in are added as [Svelte options](https://svelte.technology/guide#component-options), including `hydrate`.
