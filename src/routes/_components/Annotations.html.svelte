<script>
	import { LayerCake, Html } from 'layercake';

	import Annotations from '../../components/Annotations.html.svelte';

	const annotations = [
		{
			text: 'CSS-based annotation...',
			top: '10%',
			left: '15%'
		},
		{
			text: '...and another one',
			right: '18%',
			bottom: '10%'
		}
	];
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
	>
		<Html>
			<Annotations {annotations}/>
		</Html>
	</LayerCake>
</div>
