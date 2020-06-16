A map component using [d3-geo](https://github.com/d3/d3-geo) for the projection and a hover tooltip. Note that the tooltip layer takes advantage of the `pointerEvents={false}` layout option so that hover styles on the SVG layer still come through.

To render server-side, this example uses the `fixedAspectRatio` property, which the user sets ahead of time.
