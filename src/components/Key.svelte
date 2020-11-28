<script>
	import { getContext } from 'svelte';

	const { zDomain, zScale } = getContext('LayerCake');

</script>

<style>
	.key {
		display: flex;
	}
	.key-item {
		margin-right: 14px;
	}
	.chip {
		display: inline-block;
		width: 12px;
		height: 12px;
	}
	.name {
		display: inline;
		font-size: 14px;
	}
</style>

<div class="key">
	{#each $zDomain as item}
	<div class="key-item">
		<div class="chip" style="background-color: {$zScale(item)};"></div>
		<div class="name">{item.toUpperCase()}</div>
	</div>
	{/each}
</div>