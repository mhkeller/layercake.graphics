---
title: LayerCake props
---

These are the props you can set on the `LayerCake` component itself. You set them all like so:

```html
<Layercake
  foo='foo'
  bar='bar'
>
</LayerCake>
```

### data `Array`

A list of data items. If this is not a flat data array of objects, you'll also need to set [flatData](/guide#flatdata).

```html
<LayerCake
  data={ myData }
>
```

### x `String|Function|Array`

The key in each row of data that corresponds to the x-field. This can be a string or an accessor function. This property gets converted to a function when you access it through the context.

```html
<LayerCake
  x='myX'
  <!-- is equivalent to... -->
  x={ d => d.myX }
>
```

You can also give this value an array of strings or arrays of functions. While it may seem counter-intuitive to have more than one x- or y-accessor, this is the case in stacked layouts and Cleveland dot plots. See the [Stacked bar](/example/BarStacked), [Stacked area](/example/AreaStacked), [Stacked colummn](/example/ColumnStacked) or [Cleveland dot plot](/example/ClevelandDotPlot) for complete examples.

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

```html
<LayerCake
  x={ [0, 1] }
  y={ d => d.data.month }
>
```

Calls to `x(dataRow)` in this scenario will return the two-value array. Calls to `xGet(dataRow)` will return a two-value array, mapped through the [xScale](/guide#xscale).

### y `String|Function|Array`

Same as [x](/guide#x) but for the y scale.

### z `String|Function|Array`

Same as [x](/guide#x) but for the z scale.

### r `String|Function|Array`

Same as [x](/guide#x) but for the r scale.

### padding `Object`

An object that can specify `top`, `right`, `bottom`, or `left` padding in pixels. Any unspecified values are filled in as `0`. Padding operates like CSS `box-sizing: border-box;` where values are subtracted from the target container's width and height, the same as [a D3 margin convention](https://bl.ocks.org/mbostock/3019563).

```html
<LayerCake
  padding={ { top: 20, right: 10, bottom: 0, left: 0 } }
  // equivalent to...
  padding={ { top: 20, right: 10 } }
>
```

> Another way to set padding is to add it via normal CSS on your [target](/guide#target) div. The target element is assigned CSS of `box-sizing: border-box;` so padding settings won't affect the width or height. If you set any padding via CSS, the padding object will be ignored.

### xScale `d3.scaleLinear()`

The D3 scale that should be used for the x-dimension. Pass in an instantiated D3 scale if you want to override the default `d3.scaleLinear()` or you want to add extra options.

See the [Column chart](/example/Column) for an example of passing in a `d3.scaleBand()` to override the default.

### yScale `d3.scaleLinear()`

Same as [xScale](/guide#xscale) but for the y scale. The default is `d3.scaleLinear()`.

### zScale `d3.scaleLinear()`

Same as [xScale](/guide#xscale) but for the z scale. The default is `d3.scaleLinear()`.

### rScale `d3.scaleSqrt()`

Same as [xScale](/guide#xscale) but for the r scale. The default is `d3.scaleSqrt()`.

### xDomain `Array:[min: Number, max: Number]`

Set a min or max on the x scale. If you want to inherit the value from the data's extent, set that value to `null`.

```html
<LayerCake
  xDomain={ [0, 100] } // Fixes the x scale's domain
  // or..
  xDomain={ [0, null] } // Fixes the min but allows the max to be whatever is in the data
>
```

### yDomain `Array:[min: Number, max: Number]`

Same as [xDomain](/guide#xdomain) but for the y scale.

### zDomain `Array:[min: Number, max: Number]`

Same as [xDomain](/guide#xdomain) but for the z scale.

### rDomain `Array:[min: Number, max: Number]`

Same as [xDomain](/guide#xdomain) but for the r scale.

### xReverse `Boolean=false`

Reverse the default x domain. By default this is `false` and the domain is `[0, width]`.

### yReverse `Boolean=true`

Reverse the default y domain. By default this is `true` and the domain is `[height, 0]`.
Reverse the default x domain. By default this is `false` and the domain is `[0, width]`.

### zReverse `Boolean=false`

Reverse the default z domain. By default this is `false` and the domain is `[0, width]`.

### rReverse `Boolean=false`

Reverse the default r domain. By default this is `false` and the domain is `[1, 25]`.

### xRange `Function|Array:[min: Number, max: Number]`

Override the default y range of `[0, width]` by setting it here to an array or function with argument `({ width, height})` that returns an array.

This overrides setting [xReverse](/guide#xreverse) to `true`.

```html
<LayerCake
  xRange={ [1, 100] }
>
```
It can also be a function:

```html
<LayerCake
  xRange={ ({ width, height }) => [0, width / 2] }
>
```

### yRange `Function|Array:[min: Number, max: Number]`

Same as [xRange](/guide#xrange) but for the y scale. Override the default y range of `[0, height]` by setting it here to an array or function with argument `({ width, height})` that returns an array.

This overrides setting [yReverse](/guide#yreverse) to `true`.

### zRange `Function|Array:[min: Number, max: Number]`

Same as [xRange](/guide#xrange) but for the z scale. Override the default z range of `[0, width]` by setting it here to an array or function with argument `({ width, height})` that returns an array.

This overrides setting [zReverse](/guide#zreverse) to `true`.

### rRange `Function|Array:[min: Number, max: Number]`

Same as [xRange](/guide#xrange) but for the r scale. Override the default y range of `[1, 25]` by setting it here to an array or function with argument `({ width, height})` that returns an array. The r scale defaults to `d3.scaleSqrt` so make sure you don't use a zero in your range.

This overrides setting [rReverse](/guide#rreverse) to `true`.

### xPadding `Array:[leftPixels: Number, rightPixels: Number]`

Assign a pixel value to add to the min or max of the x scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. It uses D3 scale's [invert function](https://github.com/d3/d3-scale#continuous_invert), so this only applies to continuous scales like `scaleLinear`. This is useful for adding extra space to a scatter plot so that your circles don't interfere with your y axis.

```html
<LayerCake
  xPadding= { [10, 10] } // Add ten pixels of data units to both sides of the scale's domain
>
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

In order for Layer Cake to measure the extents of your data, it needs a flat array of items that the x, y and r accessors can find. If your data is not flat (often the case if your renderers prefer a nested format), you can tell it to measure extents against a flat version. This *will not* change the shape of the data that gets passed to components — it is only for extent calculation.

> The library also exports a flattening function to handle common use cases if you need to flatten your data and you don't already have a flat version. See the [flatten](/guide#flatten) helper function for more info.

Here's an example showing passing different data formats for extent calculation versus what is used by layer components.

```html
<script>
  import { LayerCake } from 'LayerCake';

  const data = [
    {
      key: 'apples',
      values: [{month: '2015-03-01', value: 3840}, ...]
    },
    {
      key: 'bananas',
      values: [{month: '2015-03-01', value: 1920}, ...]
    },
  ];

  const flatData = [
    {month: '2015-03-01', value: 3840, group: 'apples'},
    {month: '2015-02-01', value: 1600, group: 'apples'},
    {month: '2015-01-01', value: 640, group:  'apples'},
    {month: '2015-00-01', value: 320, group:  'apples'},

    {month: '2015-03-01', value: 1920, group: 'bananas'},
    {month: '2015-02-01', value: 1440, group: 'bananas'},
    {month: '2015-01-01', value: 960, group:  'bananas'},
    {month: '2015-00-01', value: 480, group:  'bananas'}
  ];
</script>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>

<div class="chart-container">
  <LayerCake
    x='month'
    y='value'
    {data}
    {flatData}
  >
    <!-- Components go here -->
  </LayerCake>
</div>
```

### custom `Object`

Any extra configuration values you want available on the LayerCake context. This could be useful for color lookups or additional constants.

```html
<LayerCake
  custom={ { size: 10, names: ['a', 'b', 'c'] } }
>
```
