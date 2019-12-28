---
title: Store API
---

These are the options you can pass into `new LayerCake()`. You can also set your own custom values and they will be normal store properties. Many of the examples do this to set color scales or other values that will be used across components, for instance. To make sure the names don't conflict, the examples suffix any custom properties with an underscore, but it's not required.

### target `DOM Node`

The DOM object you want to use as the the basis for measurements and for rendering into.

```js
const myCake = new LayerCake({
  target: document.getElementById('my-chart')
});
```

> Only `target` is required. Everything else is optional.

### data `Array`

A list of data items. This is available on the store as `$data`.

### x `String|Function|Array`

The key in each row of data that corresponds to the x-field. This can be a string or an accessor function. This property gets converted to an accessor function available on the store as `$x`.

```js
const myCake = new LayerCake({
  x: 'myX',
  // equivalent to...
  x: (d) => d.myX
});
```

You can also give this value an array of strings or arrays of functions. While it may seem counter-intuitive to have more than one x- or y-accessor, this is the case in stacked layouts and Cleveland dot plots. See the [Stacked bar](/examples/BarStacked), [Stacked area](/examples/AreaStacked), [Stacked colummn](/examples/ColumnStacked) or [Cleveland dot plot](/examples/ClevelandDotPlot) for complete examples.

Here's an overview using the `d3.stack()` to make a horizontal bar chart, which will have two values for the x-accessor.

```js
const data = [
  {month: new Date(2015, 3, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
  {month: new Date(2015, 2, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
  {month: new Date(2015, 1, 1), apples: 640,  bananas: 960,  cherries: 640, dates: 400},
  {month: new Date(2015, 0, 1), apples: 320,  bananas: 480,  cherries: 640, dates: 400}
];

const stack = d3.stack()
    .keys(['apples', 'bananas', 'cherries', 'dates']);

const series = stack(data);
```

The data is now an array of values. The `month` values you can't see because sneakily stashes them as a property on the array, accessible as `d.data`.

```js
[
  [[   0, 3840], [   0, 1600], [   0,  640], [   0,  320]], // apples
  [[3840, 5760], [1600, 3040], [ 640, 1600], [ 320,  800]], // bananas
  [[5760, 6720], [3040, 4000], [1600, 2240], [ 800, 1440]], // cherries
  [[6720, 7120], [4000, 4400], [2240, 2640], [1440, 1840]]  // dates
]
```

The x- and y-accessors would then look like this:

```js
const myCake = new LayerCake({
  x: [0, 1],
  y: d => d.data.month
});
```

Calls to `x(dataRow)` in this scenario will return the two-value array. Calls to `xGet(dataRow)` will return a two-value array, mapped through the [xScale](/guide#xscale).

### y `String|Function|Array`

Same as [x](/guide#x) but for the y scale. The accessor function is available on the store as `$y`.

### r `String|Function|Array`

Same as [x](/guide#x) but for the r scale. The accessor function is available on the store as `$r`.

### padding `Object`

An object that can specify `top`, `right`, `bottom`, or `left` padding in pixels. Any unspecified values are filled in as `0`. Padding operates like CSS `box-sizing: border-box;` where values are subtracted from the target container's width and height, the same as [a D3 margin convention](https://bl.ocks.org/mbostock/3019563).

```js
const myCake = new LayerCake({
  padding: { top: 20, right: 10, bottom: 0, left: 0 },
  // equivalent to...
  padding: { top: 20, right: 10 }
});
```

> Another way to set padding is to add it via normal CSS on your [target](/guide#target) div. The target element is assigned CSS of `box-sizing: border-box;` so padding settings won't affect the width or height. If you set any padding via CSS, the padding object will be ignored.

### xScale `d3.scaleLinear()`

Pass in an instantiated D3 scale if you want to override the default `d3.scaleLinear()` or you want to add extra options.

See the [Column chart](/examples/Column) for an example of passing in a `d3.scaleBand()` to override the default.

### yScale `d3.scaleLinear()`

Same as [xScale](/guide#xscale) but for the y scale. The default is `d3.scaleLinear()`.

### rScale `d3.scaleSqrt()`

Same as [xScale](/guide#xscale) but for the r scale. The default is `d3.scaleSqrt()`.

### xDomain `Array:[min: Number, max: Number]`

Set a min or max on the x scale. If you want to inherit the value from the data's extent, set that value to `null`.

```js
const myCake = new LayerCake({
  xDomain: [0, 100], // Fixes the x scale's domain
  // or..
  xDomain: [0, null], // Fixes the min but allows the max to be whatever is in the data
});
```

### yDomain `Array:[min: Number, max: Number]`

Same as [xDomain](/guide#xdomain) but for the y scale.

### rDomain `Array:[min: Number, max: Number]`

Same as [xDomain](/guide#xdomain) but for the r scale.

### reverseX `Boolean=false`

Reverse the default x domain. By default this is `false` and the domain is `[0, width]`.

### reverseY `Boolean=true`

Reverse the default y domain. By default this is `true` and the domain is `[height, 0]`.

### xRange `Function|Array:[min: Number, max: Number]`

Override the default y range of `[0, width]` by setting it here to an array or function with argument `({ width, height})` that returns an array. This setting is ignored if you set `reverseX` to `true`.

```js
const myCake = new LayerCake({
  xRange: [1, 100]
});
```
It can also be a function:

```js
const myCake = new LayerCake({
  xRange: ({ width, height }) => [0, width / 2]
});
```

### yRange `Function|Array:[min: Number, max: Number]`

Same as [xRange](/guide#xrange) but for the y scale. Override the default y range of `[0, height]` by setting it here to an array or function with argument `({ width, height})` that returns an array. This setting is ignored if you set `reverseY` to `true`.

### rRange `Function|Array:[min: Number, max: Number]`

Same as [xRange](/guide#xrange) but for the r scale. Override the default y range of `[1, 25]` by setting it here to an array or function with argument `({ width, height})` that returns an array. The r scale defaults to `d3.scaleSqrt` so make sure you don't use a zero in your range.

### xPadding `Array:[leftPixels: Number, rightPixels: Number]`

Assign a pixel value to add to the min or max of the x scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. It uses D3 scale's [invert function](https://github.com/d3/d3-scale#continuous_invert), so this only applies to continuous scales like `scaleLinear`. This is useful for adding extra space to a scatter plot so that your circles don't interfere with your y axis.

```js
const myCake = new LayerCake({
  xPadding: [10, 10], // Add ten pixels of data units to both sides of the scale's domain
});
```

### yPadding `Array:[leftPixels: Number, rightPixels: Number]`

Same as [xPadding](/guide#xpadding) but for the y domain.

### rPadding `Array:[leftPixels: Number, rightPixels: Number]`

Same as [xPadding](/guide#xpadding) but for the r domain.

### xNice `Boolean=false`

Applies D3's [scale.nice()](https://github.com/d3/d3-scale#continuous_nice) to the x domain. This is a separate option instead of being one you can apply to a passed in scale because D3's "nice" transformation only works on existing domains and does not use a state to be able to tell if your existing scale wants to be nice.

### yNice `Boolean=false`

Same as [xNice](/guide#xpadding) but for the y domain.

### rNice `Boolean=false`

Same as [xNice](/guide#xpadding) but for the r domain.

### flatData `Array`

In order for Layer Cake to measure the extents of your data, it needs a flat array of items that the x, y and r accessors can find. If your data is not flat (often the case if your renderers prefer a more nested format), you can tell it to measure extents against a flat version. This *will not* change the shape of the data that gets passed to components — it is only for extent calculation.

> The library also exports a flattening function to handle common use cases if you need to flatten your data and you don't already have a flat version. See the [flatten](/guide#flatten) helper function for more info.

Here's an example showing passing different data formats for extent calculation versus what is used by layer components.

```js
const flatData = [
  {month: new Date(2015, 3, 1), value: 3840, group: 'apples'},
  {month: new Date(2015, 2, 1), value: 1600, group: 'apples'},
  {month: new Date(2015, 1, 1), value: 640, group:  'apples'},
  {month: new Date(2015, 0, 1), value: 320, group:  'apples'},

  {month: new Date(2015, 3, 1), value: 1920, group: 'bananas'},
  {month: new Date(2015, 2, 1), value: 1440, group: 'bananas'},
  {month: new Date(2015, 1, 1), value: 960, group:  'bananas'},
  {month: new Date(2015, 0, 1), value: 480, group:  'bananas'}
];

const data = [
  {
    key: 'apples',
    values: [{month: new Date(2015, 3, 1), value: 3840}, ...]
  },
  {
    key: 'bananas',
    values: [{month: new Date(2015, 3, 1), value: 1920}, ...]
  },
];

const myCake = new LayerCake({
    target,
    x: 'month',
    y: 'value',
    data,
    flatData
  });
```
