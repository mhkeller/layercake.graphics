---
title: Cake API
---

When you run `new LayerCake(StoreValues)` the Svelte store you get back has the following custom methods.

Each of the `Layers` functions takes an array containing the following objects, which we'll call a "component object":

```js
{ component: SvelteComponent, opts: { optionalInfo } }
```

All of the container elements created by `Layers` functions are absolutely positioned and use any [padding](#padding) that is set. That way, they share the same coordinate system and can sit one on top of another.

### cake.svgLayers(ComponentsList[, opts])

Creates a `<svg>` element containing one `<g>` wrapper element, which gets translated based on any [padding](#padding).

For every component object in the passed in array, a `<g>` element is created.

### cake.htmlLayers(ComponentsList[, opts])

Creates a `<div>` element.

For every component object in the passed in array, a `<div>` element is created.

### cake.canvasLayers(ComponentsList[, opts])

Creates a `<canvas>` element.

Every component has access to the `canvas` and `ctx` objects as *data items*, not as store values since you could have multiple canvas elements in your cake.

This means you fetch the `canvas` and `ctx` using `this.get()` instead of `this.store.get()`. For example, here's how a scatterplot layer component would be implemented in canvas.

```html
<!-- { filename: CanvasLayer.html } -->
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

### cake.webglLayers(ComponentsList[, opts])

Work in progress. Want to help out? Get in touch on the [issue tracker](https://github.com/mhkeller/layercake).

### cake.render(options)

Instantiates your cake and layout groups. Returns an object `{ app, store }` where `app` is the instantiate Svelte app and `store` is the cake's Svelte store. Any options you pass in are added as [Svelte options](https://svelte.technology/guide#component-options), including `hydrate`.
