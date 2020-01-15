---
title: Computed Context Properties
---

Some convenience functions and other internal properties are exposed to the user on the store in case they're handy.

### activeKeys `Array`

A list of all the keys that have an accessor set.

```js
['x', 'y', 'r']
```

### box `Object`

A bounding box object of the [target](/guide#target) element with `top`, `right`, `bottom`, `left`, `width` and `height` numbers in pixels. Useful for creating tooltips.

### domains `Object`

An object containing a key for every [active key](/guide#activekeys) whose value is a two-value array representing the min and max values for that field in the data. This value could differ from the domain of your scale if you are manually setting a limit on your scale by setting any of the `xDomain`, `yDomain` or `rDomain` settings. This is used internally to set domain things but it's also useful as a reference if you want to toggle between an arbitrary domain and the measured extents of the data, such as in the [small multiples example](/examples/SmallMultiples).

### originalSettings `Object`

A shallow copy of the object passed in to `new LayerCake(<settings>)`. This can be useful to refer to in some situations such as in the [Cleveland Dot Plot example](/examples/ClevelandDotPlot), which uses the x-accessor shorthand of providing a list of keys. This list of strings gets mapped to a list of accessor functions inside the layer component but we can reference that original list of strings to know which field we're in based on index, which gets passed to the color scale! Broadly, having access to this field can help you not repeat yourself in specifying things twice or in scenarios where Layer Cake is doing a transformation on that original value, like in accessors or domain inputs, and you want to know about the original value.

### xGet(d: `Object`)

Often you want to get the x value from a row in your data and scale it like so: `$xScale($x(d))`. This function is shorthand for doing just that. Super handy!

Here's an example from a simple SVG line path generator:

```js
import { getContext } from 'svelte';

const { data, xGet, yGet } = getContext('LayerCake');

$: path=  'M' + $data
  .map(d => {
    return $xGet(d) + ',' + $yGet(d);
  })
  .join('L');
```

### yGet(d: `Object`)

Same as [xGet](/guide#xget) but for the y scale.

### rGet(d: `Object`)

Same as [xGet](/guide#xget) but for the r scale.
