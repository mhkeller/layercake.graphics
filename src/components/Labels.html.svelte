<script>
  import { getContext } from 'svelte';

  const { xGet, yGet, custom } = getContext('LayerCake');

  export let labels;
  export let formatName = d => d;
</script>

{#each labels as d}
	<div
    class="label"
    style="
      top:{$yGet(d)}px;
      left:{$xGet(d)}px;
    "
  >{formatName($custom.getLabelName(d))}</div>
{/each}

<style>
	.label {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 12px;
	}
</style>
