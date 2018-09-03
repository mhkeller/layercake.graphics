---
title: Computed Store Properties
---

Convenience functions and other internal properties that are exposed to the user in case they're handy.

### activeKeys

A list of the keys the user has specified an accessor for. Used internally to know which scales we're setting.

```js
const myCake = new LayerCake({
  x: 'myX',
  y: 'myY',
  target,
  data
});

const { activeKeys } = myCake.get();
console.log(activeKeys);
// ['x', 'y']
```

### activeGetters

Similar to `activeKeys` but each value is an object with the dimension name and the getter function, which is the same as [`xGet`](#xGet) or [`yGet`](#yGet). Exposed as a possible convenience if you need to get all the values from a data row.

```js
// continuing the example in activeKeys
const { activeGetters } = myCake.get();
console.log(activeGetters);
// [{ dimension: 'x', get: <same-as-xGet()>}, { dimension: 'x', get: <same-as-xGet()>}]
```

### box

A bounding box object of the [target](#target) element with `top`, `right`, `bottom`, `left`, `width` and `height` numbers in pixels.

## domains

An object containing a key for every [active key](#activeKeys) whose value is a two-value array representing the min and max values for that dimension in the data. This value could differ from the domain of your scale if you are manually setting a limit on your scale, for instance. That limit would not show up here since this is just measuring the data. Used internally to set domain things.

### xGet(dataRow)

Often you want to get the x value from a row in your data and scale it like so: `$xScale($x(d))`. This function is shorthand for doing just that.

Here's an example from a simple SVG line path generator:

```js
computed: {
  path: ({ $data, $xGet, $yGet }) => {
    return 'M' + $data
      .map(function (d, i) {
        return $xGet(d) + ',' + $yGet(d);
      })
      .join('L');
  }
}
```

### yGet(dataRow)

Same as [xGet](#xGet) but for the y scale.

### rGet(dataRow)

Same as [xGet](#xGet) but for the r scale.

