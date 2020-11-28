<script>
	import { getContext } from 'svelte';

	const { zDomain, zScale } = getContext('LayerCake');

</script>

<style>
	.key {
		display: flex;
	}
	.key-item {
		margin-right: 7px;
	}
	.chip {
		display: inline-block;
		width: 10px;
		height: 10px;
	}
	.name {
		display: inline;
		font-size: 12px;
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