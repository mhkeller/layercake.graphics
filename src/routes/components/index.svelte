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
	export let components;

	const axisComponents = components.filter(d => {
		return d.toLowerCase().includes('axis');
	});

	const annotationComponents = components.filter(d => {
		const dl = d.toLowerCase()
		return dl.includes('annotation')
			|| dl.includes('arrow')
			|| dl.includes('key')
			|| (dl.includes('label') && !dl.includes('map'))
			|| dl.includes('tooltip')
	});

	const interactionComponents = components.filter(d => {
		const dl = d.toLowerCase()
		return dl.includes('quad')
			|| dl.includes('vornoi');
	});

	const mapComponents = components.filter(d => {
		const dl = d.toLowerCase()
		return dl.includes('map');
	});

	const chartComponents = components.filter(d => {
		return !interactionComponents.includes(d)
			&& !annotationComponents.includes(d)
			&& !axisComponents.includes(d)
			&& !mapComponents.includes(d)
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
		// const svelteless = name.replace('.svelte', '')
		// return svelteless.replace('.', ', ');
		return name.split('.')[0]
	}

	function getClass(name) {
		if (name.includes('.svg')) return 'svg';
		if (name.includes('.html')) return 'html';
		if (name.includes('.canvas')) return 'canvas';
		if (name.includes('.webgl')) return 'webgl';
		if (name.includes('.percent-range')) return 'html percent-range';
		return 'svg';
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
			{#each componentGroup.components as component}
				<a class="component-block" href="/components/{component}" rel=prefetch>
					<div class="component-name {getClass(component)}" ><span>{formatName(component)}</span> <span class="label">{getClass(component)}</span></div>
				</a>
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

	.component-blocks {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 28px;
	}

	.component-block {
		display: block;
		width: 28%;
		margin-bottom: 28px;
		height: 200px;
		background-color: #fff;
		box-shadow: 0 0 12px #ccc;
		padding: 14px;
	}

	a.component-block {
		text-decoration: none;
	}

	a.component-block:hover .component-name > span {
		text-decoration: underline;
	}

	.component-name .label {
		padding: 0 4px;
		display: inline-block;
		border-radius: 2px;
		font-size: 0.9em;
		margin-left: 7px;
	}

	.component-name.svg .label {
		background-color: #f0c;
		color: #fff;
	}

	.component-name.html .label {
		background-color: #fc0;
		color: #000;
	}

	.component-name.webgl .label {
		background-color: #0cf;
		color: #fff;
	}

	.component-name.percent-range .label {
		background-color: #c0f;
		color: #fff;
	}

	.component-name.canvas .label {
		background-color: #cf0;
		color: #000;
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
