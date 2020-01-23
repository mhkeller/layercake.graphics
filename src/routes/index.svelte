<script>
	import hljs from 'highlight.js';
	import examples from './_examples.js';
	import hljsDefineSvelte from '../modules/hljsDefineSvelte.js';

	hljs.registerLanguage('svelte', hljsDefineSvelte);

	hljsDefineSvelte(hljs);

	const codeExample = `<script>
	import { LayerCake, Svg, Html, Canvas } from 'layercake';

	import AxisX from './components/AxisX.svelte';
	import AxisY from './components/AxisY.svelte';
	import Line from './components/Line.svelte';
	import Scatter from './components/Scatter.svelte';
	import Labels from './components/Labels.svelte';

	const data = [{ x: 0, y: 1 }, { x: 1, y: 2 }];
<\/script>

<style>
	.chart-container {
		width: 100%;
		height: 500px;
	}
</style>

<div class="chart-container">
	<LayerCake
		x='x'
		y='y'
		{data}
	>
		<Svg>
			<AxisX/>
			<AxisY/>
			<Line color='#f0c'/>
		</Svg>

		<Canvas>
			<Scatter color='#0fc'/>
		</Canvas>

		<Html>
			<Labels/>
		</Html>
	</LayerCake>
</div>`.trim().replace(/\t/g, '  ');

</script>

<style>
	.main {
		position: relative;
		max-width: 54em;
		background-color: white;
		padding: 1.5em 2em 2em 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-family: "SignPainter";
		font-size: 61px;
	}

	#logo, h1 {
		display: inline-block;
		vertical-align: bottom;
	}
	.logo-container {
		white-space: nowrap;
	}
	#logo {
		width: 80px;
		height: 80px;
		margin-right: 17px;
		background: url('/layercake-logo-128.png');
		background-size: contain;
		background-repeat: no-repeat;
	}
	h1 {
		margin-bottom: 7px;
	}
	.gallery-item {
		display: inline-block;
		vertical-align: top;
		width: 45%;
		position: relative;
		height: 140px;
		margin-bottom: 60px;
	}
	@media (max-width: 650px) {
		.gallery-item {
			width: 100%;
		}
	}
	@media (max-width: 350px) {
		#logo {
			width: 70px;
			margin-right: 7px;
		}
		h1 {
			font-size: 59px;
		}
	}

	.gallery-item:nth-child(odd) {
		margin-right: 5%;
	}
	#dek {
		width: 100%;
		max-width: 800px;
	}
	p a {
		color: #ff3e00;
	}
	p a:hover {
		text-decoration: underline;
	}
	a {
		text-decoration: none;
	}
	.title {
		margin-bottom: 9px;
	}
	.title a{
		text-decoration: underline;
		max-width: 415px;
	}
	.title a:hover {
		color: #ff3e00;
	}
	.strong {
		font-weight: bold;
	}
	.edit-repl {
		text-decoration: none !important;
		font-size: 12px;
		text-transform: lowercase;
		font-family: monospace;
		color: rgba(0,0,0,0.5);
		background-color: #f0f0f0;
		padding: 2px 5px;
		margin-left: 7px;
	}
	.edit-repl:hover {
		text-decoration: underline;
	}
	@media (max-width: 895px) {
		:global(#sapper) {
			overflow: hidden;
		}
		.main {
			padding: 1em;
		}
	}

	.code-example {
		border-left: 3px solid #ccc;
		margin-bottom: 35px;
	}

	pre {
		padding-left: 14px;
		overflow-x: auto;
	}
</style>

<svelte:head>
	<title>Layer Cake</title>
	<meta name="og:title" content="Layer Cake">
	<meta name="twitter:title" content="Layer Cake">
	<link rel='stylesheet' href='hljs.css'>

</svelte:head>

<div class="main">
	<div class="logo-container">
		<div id="logo"></div>
		<h1>Layer Cake</h1>
	</div>

	<div id="dek">
		<p>Layer Cake is a graphics framework built on top of <a href="https://svelte.dev" target="_blank" rel="noopener">Svelte</a>. In its basic usage, it measures your target div and your data and creates scales that <span class="strong">stay synced</span> on layout changes. Using its component methods, you can then use these scales to organize multiple, <span class="strong">mostly-reusable Svelte components</span>, whether they be SVG, HTML, Canvas or WebGL. Since they all share the same coordinate space, you can build your graphic one layer at a time.</p>

		<p>Read the <a href="guide" rel=prefetch>guide</a> or here's a sample of what it looks like. See the full examples below.</p>
	</div>

	<div class="code-example">
		<pre>{@html hljs.highlight('svelte', codeExample).value}</pre>
	</div>

	<div id="gallery">
		{#each examples as example}
			<div class="gallery-item">
				<h4 class="title"><a rel=prefetch href="example/{example.slug}">{example.title}</a> <a class="edit-repl" href="https://svelte.dev/repl/{example.replPath}" target="_blank" rel="nofollow">Edit</a></h4>
				<svelte:component this="{example.component}"/>
			</div>
		{/each}
	</div>
</div>
