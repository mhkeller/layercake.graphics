---
title: Store API
---

### target: `<DOM Node>`

The DOM object you want to use as the the basis for measurements and for rendering into.

```js
const myCake = new LayerCake({
  target: document.getElementById('my-chart')
});
```

> Only `target` is required. Everything else is optional.

### data: `<Array>`

A list of data items. This will be accessible

### x: `<String|Function>`

The key in each row of data that corresponds to the x-field. This can be a string or an accessor function. This property gets converted to an acessor function available on the store as `$x`.

```js
const myCake = new LayerCake({
  x: 'myX',
  // equivalent to...
  x: (d) => d.myX
});
```

You can also give this value an array. While it may seem counter-intuitive to have more than one x- or y-accessor, this is the case in stacked layouts. See the [Stacked bar](/examples/BarStacked), [Stacked area](/examples/AreaStacked) or [Stacked colummn](/examples/ColumnStacked) for complete examples.

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

Calls to `x(dataRow)` in this scenario will return the two-value array. Calls to `xGet(dataRow)` will return a two-value array, mapped through the [xScale](#xScale).

### y: `<String|Function>`

Same as [x](#x) but for the y scale. Accessor function is available on the store as `$y`.

### r: `<String|Function>`

Same as [x](#x) but for the r scale. Accessor function is available on the store as `$r`.

### padding: `<Object>`

An object that can specify `top`, `right`, `bottom`, or `left` padding in pixels. Any unspecified values are filled in as `0`. Padding operates like CSS `box-sizing: border-box;` where values are subtracted from the target container's width and height, the same as [a D3 margin convention](https://bl.ocks.org/mbostock/3019563).

```js
const myCake = new LayerCake({
  padding: { top: 20, right: 10, bottom: 0, left: 0 },
  // equivalent to...
  padding: { top: 20, right: 10 }
});
```

> Another way to set padding is to add it via normal CSS on your [target](#target) div. The target element is assigned CSS of `box-sizing: border-box;` so padding settings won't affect the width or height. If you set any padding via CSS, the padding object will be ignored.

### xScale: d3Scale()

Pass in an instatiated D3 scale if you want to override the default `d3.scaleLinear()` or you want to add extra options.

See the [Column chart](/examples/Column) for an example of passing in a `d3.scaleBand()` to override the default.

### yScale: d3Scale()

Same as [xScale](#xScale) but for the y scale. The default is `d3.scaleLinear()`.

### rScale: d3Scale()

Same as [xScale](#xScale) but for the r scale. The default is `d3.scaleSqrt()`.

### xDomain: `<Array:[min, max]>`

Set a min or max on the x scale. If you want to inherit the value from the data's extent, set that value to `null`.

```js
const myCake = new LayerCake({
  xDomain: [0, 100], // Fixes the x scale's domain
  // or..
  xDomain: [0, null], // Fixes the min but allows the max to be whatever is in the data
});
```

### yDomain: `<Array:[min, max]>`

Same as [xDomain](#xDomain) but for the y scale.

### rDomain: `<Array:[min, max]>`

Same as [xDomain](#xDomain) but for the r scale.

### reverseX: `<Boolean:false>`

Reverse the default x domain. By default this is `false` and the domain is `[0, width]`.

### reverseY: `<Boolean:true>`

Reverse the default y domain. By default this is `true` and the domain is `[height, 0]`.

### xPadding: `<Array:[leftPixels, rightPixels]>`

Assign a value, in pixels, to add to the min or max of the x scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. It uses D3 scale's [invert function](https://github.com/d3/d3-scale#continuous_invert), so this only applies to continuous scales like `scaleLinear`. This is useful for adding extra space to a scatter plot so that your circles don't interfere with your y axis.

```js
const myCake = new LayerCake({
  xPadding: [10, 10], // Add ten pixels of data units to both sides of the scale's domain
});
```

### yPadding: `<Array:[leftPixels, rightPixels]>`

Same as [xPadding](#xPadding) but for the y domain.

### rPadding: `<Array:[leftPixels, rightPixels]>`

Same as [xPadding](#xPadding) but for the r domain.

### rRange: `<Array:[min, max]>`

If you're using the r scale, set it's range here since it doens't infer that from anything nt the layout. The r scale defaults to `d3.scaleSqrt` so make sure you don't use a zero in your range.

```js
const myCake = new LayerCake({
  rRange: [1, 100]
});
```

### flatten: `<Function>`

In order for Layer Cake to measure the extents of your data, it needs a flat array of items that the x, y and r accessors can get at. If your data is not in that format, you can pass in a function to transform it. This *will not* change the shape of the data that gets passed to components — it is only for extent calculation.

> You'll run into this if you get data that is nested and that's the best format for a component. For example, labelling a multi-series line chart can be done nicely if you have a `key` field for each group. If you already have a flat copy of your data, check out [`flatData`](#flatData) below.

For example, let's say you have nested data. You need a function to concatenate the two `values` arrays like so:

```js
const data = [
  {key: 'group1', values: [{x: 1, y: 5},  {x: 2, y: 10}, {x: 3, y: 20}]},
  {key: 'group2', values: [{x: 1, y: 10}, {x: 2, y: 20}, {x: 3, y: 30}]}
];

const myCake = new LayerCake({
    target,
    x: 'x',
    y: 'y',
    data,
    flatten: data => {
      return data.reduce((memo, val) => {
        return memo.concat(val.values);
      }, []);
    }
  });
```

### flatData: `<Array>`

If your data was originally flat but it's since been transformed it into a format more convenient for your components (or you just have a flat copy lying around somewhere) you can pass that data here and it will be used to measure extents using the x, y and r accessors.

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
