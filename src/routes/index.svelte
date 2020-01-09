<script>
	import examples from './_examples.js';
</script>

<svelte:head>
	<title>Layer Cake</title>
	<meta name="og:title" content="Layer Cake">
	<meta name="twitter:title" content="Layer Cake">

</svelte:head>

<div class="main">
	<div class="logo-container">
		<div id="logo"></div>
		<h1>Layer Cake</h1>
	</div>

	<div id="dek">
		<p>Layer Cake is a graphics framework built on top of <a href="https://svelte.dev" target="_blank" rel="noopener">Svelte</a>. In its basic usage, it measures your target div and your data and creates scales that <span class="strong">stay synced</span> on layout changes. Using its component methods, you can then use these scales to organize multiple, <span class="strong">mostly-reusable Svelte components</span>, whether they be SVG, HTML, Canvas or WebGl. Since they all share the same coordinate space, you can build your graphic one layer at a time.</p>

		<p>Read the <a href="guide" rel=prefetch>guide</a> or see some examples below:</p>
	</div>

	<div id="gallery">
		{#each examples as example}
			<div class="gallery-item">
				<h4 class="title"><a rel=prefetch href="example/{example.slug}">{example.title}</a></h4>
				<svelte:component this="{example.component}"/>
			</div>
		{/each}
	</div>
</div>

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
		background: url('layercake-logo-128.png');
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
		color: green;
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
	}
	.title a:hover {
		color: green;
	}
	.strong {
		font-weight: bold;
	}
	@media (max-width: 895px) {
		:global(#sapper) {
			overflow: hidden;
		}
		.main {
			padding: 1em;
		}
	}
</style>

