---
title: Computed Store Functions
---

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

