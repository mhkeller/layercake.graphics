<script>
	import { getContext } from 'svelte';

	const { padding, yScale } = getContext('LayerCake');

	export let ticks = undefined;
	export let gridlines = true;
	export let formatTick = d => d;

	$: tickVals = Array.isArray(ticks) ? ticks : $yScale.ticks(ticks);
</script>

<div class='axis y-axis' style='width:calc(100% + {$padding.left + $padding.right}px);transform:translate(-{$padding.left}px, 0)'>
	{#each tickVals as tick, i}
		{#if gridlines !== false}
			<div class="gridline tick-{tick}" style='left: 0;top:{$yScale(tick)}%;width:100%;'></div>
		{/if}
		<div class='tick' style='top:{$yScale(tick)}%;'>
			<div style='transform:translateY(-100%);'>{formatTick(tick)}</div>
		</div>
	{/each}
</div>

<style>
	.axis,
	.tick,
	.gridline {
		position: absolute;
	}
	.axis {
		width: 100%;
		height: 100%;
	}
	.tick {
		font-size: .725em;
		font-weight: 200;
	}

	.gridline {
		border-top: 1px dashed #aaa;
	}

	.gridline.tick-0 {
		border-top-style: solid;
	}
</style>
