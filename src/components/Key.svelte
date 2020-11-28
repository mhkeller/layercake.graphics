<script>
	import { getContext } from 'svelte';

	export let shape;

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
		position: relative;
		width: 12px;
		height: 12px;
	}
	.chip__circle {
		border-radius: 50%;
	}
	.chip__line:after {
		content: "";
		position: absolute;
		border-width: 3px;
		width: 14px;
		transform: rotate(-45deg);
		transform-origin: 14px 5px;
	}
	.name {
		display: inline;
		font-size: 14px;
	}
</style>

<div class="key">
	{#each $zDomain as item}
	<div class="key-item">
		<div 
			class="chip chip__{shape}" 
			style="background: { 
				shape == 'line' ? 
				`linear-gradient(-45deg, #ffffff 40%, ${$zScale(item)} 41%, ${$zScale(item)} 59%, #ffffff 60%)`
				: $zScale(item)};"
		></div>
		<div class="name">{item.toUpperCase()}</div>
	</div>
	{/each}
</div>