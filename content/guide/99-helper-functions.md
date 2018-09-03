---
title: Helper functions
---

LayerCake exposes some commonly-used helper functions. If you don't use them, they will be tree-shaken so there's no added bloat.

### newDiv(className[, stylesObject, parentDomNode])

You can also export a `newDiv` function from the LayerCake module to help you in creating divs. If you pass a DOM node as the third argument it will attach it to that object.

```js
import {default as Layercake, newDiv} from 'LayerCake';

const container = document.getElementById('container');

const styles = {
  position: 'relative'
};

const myDiv = newDiv('my-div', styles, container);

// Or attach yourself
const myDiv = container.appendChild(newDiv('my-div', styles));
```

### flatten(data)

Flatten an array one-level down.

This data

```js
const data = [
  [{x: 0, y: 1}, {x: 1, y: 5}, {x: 2, y: 10}],
  [{x: 0, y: 10}, {x: 1, y: 15}, {x: 2, y: 20}]
];
```

Becomes this

```js
import { flatten } from 'LayerCake';
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

### scaleCanvas(canvas, ctx, width, height)

Scale your canvas size to retina screens. This function will modify the canvas, if necessary, and return an object with the new `width` and `height` as properties.

Such as in the [Scatter canvas](/examples/Scatter) example:

```html
<!-- { filename: 'Scatter.html' } -->
<script>
import { scaleCanvas } from 'LayerCake';

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
