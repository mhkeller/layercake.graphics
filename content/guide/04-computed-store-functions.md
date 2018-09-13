---
title: Computed Store Properties
---

Convenience functions and other internal properties that are exposed to the user on the store in case they're handy.

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

