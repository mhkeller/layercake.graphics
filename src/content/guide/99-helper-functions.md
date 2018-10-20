---
title: Helper functions
---

Layer Cake exposes some commonly-used helper functions. If you don't use them, they will be tree-shaken so there's no added bloat!

### newDiv(className:String[, styles: Object, parent:DOM Node])

Easily create new divs. If you pass a DOM node as the third argument it will attach it to that object.

Handy when creating small multiples. You can put your cake inside a loop and append a new [target](#target) div for every chart.

```js
import { default as Layercake, newDiv } from 'layercake';

const container = document.getElementById('container');

const styles = {
  position: 'relative'
};

const myDiv = newDiv('my-div', styles, container);

// Or attach yourself
const myDiv = container.appendChild(newDiv('my-div', styles));
```

With small multiples:

```js
import {default as Layercake, newDiv} from 'layercake';
import AxisX from './components/AxisX.html'
import AxisY from './components/AxisY.html'
import Scatter from './components/Scatter.html'

const container = document.getElementById('container');

const styles = {
  position: 'relative',
  display: 'inline-block'
};

const datasets = [
  [data-1...],
  [data-2...],
  [data-3...]
];

datasets.forEach(data => {
  const target = newDiv('my-div', styles, container);

  const myCake = new LayerCake({
    target,
    data,
    x: 'myX',
    y: 'myY'
  })
    .svgLayers([
      { component: AxisX },
      { component: AxisY },
      { component: Scatter }
    ]);

  myCake.render();
});
```

### flatten(data: Array)

Flatten an array one-level down. Handy for preparing data from stacked layouts whose extents can easily be calculated.

This data:

```js
const data = [
  [{x: 0, y: 1}, {x: 1, y: 5}, {x: 2, y: 10}],
  [{x: 0, y: 10}, {x: 1, y: 15}, {x: 2, y: 20}]
];
```

Becomes this:

```js
import { flatten } from 'layercake';

const flatData = flatten(data);
/*
  [{x: 0, y: 1}, {x: 1, y: 5}, {x: 2, y: 10},
   {x: 0, y: 10}, {x: 1, y: 15}, {x: 2, y: 20}]
*/
```

You can safely use this function on arrays of arrays of arrays, such as the output from `d3.stack()`

```js
[
  [[   0, 3840], [   0, 1600], [   0,  640], [   0,  320]],
  [[3840, 5760], [1600, 3040], [ 640, 1600], [ 320,  800]],
  [[5760, 6720], [3040, 4000], [1600, 2240], [ 800, 1440]],
  [[6720, 7120], [4000, 4400], [2240, 2640], [1440, 1840]]
]
```

Becomes...

```js
[ [ 0, 3840 ],
  [ 0, 1600 ],
  [ 0, 640 ],
  [ 0, 320 ],
  [ 3840, 5760 ],
  [ 1600, 3040 ],
  [ 640, 1600 ],
  [ 320, 800 ],
  [ 5760, 6720 ],
  [ 3040, 4000 ],
  [ 1600, 2240 ],
  [ 800, 1440 ],
  [ 6720, 7120 ],
  [ 4000, 4400 ],
  [ 2240, 2640 ],
  [ 1440, 1840 ]
]
```

### scaleCanvas(canvas: DOM Node, ctx: Canvas Context, width: Number, height: Number)

Scale your canvas size to retina screens. This function will modify the canvas, if necessary, and return an object with the new `width` and `height` as properties.

Such as in the [Scatter canvas](/examples/Scatter) example:

```html
<!-- { filename: 'Scatter.html' } -->
<script>
import { scaleCanvas } from 'layercake';

export default {
  onstate () {
    const { canvas, ctx, opts } = this.get();
    const { width, height, xGet, yGet, data, custom } = this.store.get();

    scaleCanvas(canvas, ctx, width, height);
    ctx.clearRect(0, 0, width, height);

    data.forEach(d => {
      ctx.beginPath();
      ctx.arc(xGet(d), yGet(d), custom.r, 0, 2 * Math.PI, false);
      ctx.fillStyle = opts.color;
      ctx.fill();
    });
  }
};
</script>
```

### calcExtents(flatData: Array, fields: Array)

Calculate the extents of any of the keys specified in **fields**, which is an array of objects with `field` and `accessor` keys, representing the field name (x, y, r) and an accessor function.

For example, calculating the extents for the x and y fields, which are in the data as `myX` and `myY` would look like this:

```js
const extents = calcExtents(flatData, [
  {field: 'x', accessor: d => d.myX },
  {field: 'y', accessor: d => d.myY }
]);

console.log(extents);
/*
{
  x: [0, 10],
  y: [-20, 20]
}
*/
```

Returns an object whose keys are the field names specified as the first item in the key group array followed by an array of `[min, max]`.

### uniques(data: Array[, accessor: String|Function, transform|Boolean])

A function get get the unique values from a list. If **accessor** is a string or a function, the uniqueness will be compared using that and, be default, the values in the returned list will be the ones returned by the accessor. Pass `false` to the **transform** argument if you want to return the original elements, which will be the first one that appears for every unique value.
