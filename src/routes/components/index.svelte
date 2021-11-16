<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`api/components`)
			.then(r => r.json())
			.then(components => {
				return { components };
			});
	}
</script>

<script>
	import { groupBy } from 'underscore';

	import svelteComponents from '../_components.js';

	export let components;

	function getClasses(name) {
		// console.log(name)
		const parts = name.split('.').filter(d => d !== 'svelte');
		// console.log('here');
		parts.shift();
		if (parts.length === 0) return ['svg'];
		return parts;
	}

	const componentData = components.map(d => {
		return {
			name: d,
			// Don't group by percent-range
			group: getClasses(d).filter(d => d !== 'percent-range')[0]
		};
	});

	const axisComponents = componentData.filter(d => {
		const dl = d.name.toLowerCase()
		return dl.includes('axis');
	});

	const annotationComponents = componentData.filter(d => {
		const dl = d.name.toLowerCase();
		return dl.includes('annotation')
			|| dl.includes('arrow')
			|| dl.includes('key')
			|| (dl.includes('label') && !dl.includes('map'))
			|| dl.includes('tooltip')
	});

	const interactionComponents = componentData.filter(d => {
		const dl = d.name.toLowerCase()
		return dl.includes('quad')
			|| dl.includes('vornoi');
	});

	const mapComponents = componentData.filter(d => {
		const dl = d.name.toLowerCase()
		return dl.includes('map');
	});

	const chartComponents = componentData.filter(d => {
		return !interactionComponents.map(d => d.name).includes(d.name)
			&& !annotationComponents.map(d => d.name).includes(d.name)
			&& !axisComponents.map(d => d.name).includes(d.name)
			&& !mapComponents.map(d => d.name).includes(d.name)
	});

	const componentGroups = [
		{ name: 'Axis components', components: axisComponents },
		{ name: 'Chart components', components: chartComponents },
		{ name: 'Map components', components: mapComponents },
		{ name: 'Interaction components', components: interactionComponents },
		{ name: 'Annotation components', components: annotationComponents },
		// { name: 'Community components', components: [] },
	];

	function formatName(name) {
		return name.split('.')[0];
	}

	function formatSubgroup(subgroup) {
		if (subgroup == 'webgl') return 'WebGL';
		if (subgroup == 'canvas') return 'Canvas';
		return subgroup.toUpperCase();
	}
</script>

<sidebar>
	<ul>
		{#each componentGroups as componentGroup}
			<li>
				<a
					class='section'
					href='/components#'
				>{componentGroup.name}</a>
			</li>
		{/each}
	</ul>
</sidebar>

<div id="container">
	<h2>Components</h2>

	{#each componentGroups as componentGroup}
		<h3>{componentGroup.name}</h3>
		<div class="component-blocks">
			{#each Object.entries(groupBy(componentGroup.components, d => d.group)) as [subgroup, items]}
				<h4>{formatSubgroup(subgroup)}</h4>
				<div class="subgroup-blocks">
					{#each items as item}
						<a class="component-block" href="/components/{item.name}" rel=prefetch>
							<div class="component-name" ><span>{formatName(item.name)}</span> {@html getClasses(item.name).map(d => `<span class="label ${d}">${d}</span>`).join('')}</div>
							<div class="chart-container">
								{#if svelteComponents.find(d => d.title === item.name)}
									<svelte:component this={svelteComponents.find(d => d.title === item.name).component}/>
								{/if}
							</div>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	sidebar {
		position: fixed;
		background-color: #fff;
		top: 61px;
		left: 0;
		display: none;
		height: calc(100% - (2.7em + 67px));
		width: 11.75em;
		padding: 1.18em 1em 2em 1.5em;
		overflow-y: auto;
		/*box-sizing: border-box;*/
	}

	#container {
		width: 100%;
		tab-size: 2;
		margin-top: -7rem;
		padding: 7em 2em 2em 2em;
		box-sizing: border-box;
	}

	h2 {
		padding: 4rem 0 0 0;
		margin: -3rem 0 1.05rem 0;
		font-size: 2.3em;
		font-weight: bold;
		pointer-events: none;
	}

	h3 {
		font-weight: bold;
	}

	h4 {
		display: block;
		padding: 7px 0;
	}

	.subgroup-blocks {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 28px;
	}

	.component-block {
		width: 28%;
		margin-bottom: 28px;
		height: 200px;
		background-color: #fff;
		box-shadow: 0 0 12px #ccc;
		padding: 14px;
		display: flex;
		flex-direction: column;
	}

	a.component-block {
		text-decoration: none;
	}

	a.component-block:hover .component-name > span {
		text-decoration: underline;
	}

	.component-name {
		white-space: nowrap;
	}

	.component-blocks :global(.label) {
		padding: 0 4px;
		display: inline-block;
		border-radius: 2px;
		font-size: 0.9em;
		margin-left: 3px;
	}

	.component-blocks :global(.label.svg) {
		background-color: #f0c;
		color: #fff;
	}

	.component-blocks :global(.label.html) {
		background-color: #fc0;
		color: #000;
	}

	.component-blocks :global(.label.webgl) {
		background-color: #0cf;
		color: #fff;
	}

	.component-blocks :global(.label.percent-range) {
		background-color: #c0f;
		color: #fff;
	}

	.component-blocks :global(.label.canvas) {
		background-color: #cf0;
		color: #000;
	}

	.chart-container {
		flex: 1;
	}

	@media (min-width: 768px) {
		sidebar {
			display: block;
		}

		#container {
			padding-left: 15em;
			padding-right: 8em;
		}
	}

</style>
