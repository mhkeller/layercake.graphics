import fs from 'fs';

function cleanMain (example) {
	const js = example.split('<script>')[1];
	const parts = js.split('export');

	const imports = parts[0]
		.replace(/\t/g, '  ')
		.replace(/\.\.\/\.\.\//g, './')
		.trim();

	const oncreate = parts[1].trim()
		.replace(/(}\n};\n<\/script>|default {.*|oncreate.*)/g, '')
		.replace('this.refs.chart', 'document.getElementById(\'my-chart\')')
		.replace(/^\t\t/gm, '')
		.replace(/\t/g, '  ')
		.trim();

	return [imports, oncreate].join('\n\n');
}

function getComponentPaths (example) {
	return example.match(/\.\.\/.+html/gm)
		.map(d => d.replace('../', ''));
}

function getJsPaths (example) {
	const m = example.match(/\.\/.+\.js/gm)
		.map(d => d.replace('../', ''));
	return m;
}

export function get (req, res, next) {
	const { slug } = req.params;

	const examplePath = `routes/_examples/${slug}.html`;

	if (!fs.existsSync(examplePath)) {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found: ${slug}`
		}));
		return;
	}

	const example = fs.readFileSync(examplePath, 'utf-8');

	const main = {
		title: 'main.js',
		contents: cleanMain(example)
	};

	const components = getComponentPaths(example)
		.map(d => {
			return {
				title: d.replace('../', './'),
				contents: fs.readFileSync(`components/${d}`, 'utf-8').replace(/\t/g, '  ').replace(/'\.\.\/modules/g, '\'./modules').trim()
			};
		});

	const modules = getJsPaths(example + components.map(d => d.contents).join(''))
		.map(d => {
			const title = d.replace('../', './');
			return {
				title,
				contents: fs.readFileSync(title.replace('./', ''), 'utf-8').replace(/\t/g, '  ').trim()
			};
		});

	const dekPath = `content/examples/${slug}.md`;

	const dek = fs.existsSync(dekPath) ? fs.readFileSync(dekPath, 'utf-8') : '';

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({ main, components, modules, dek }));
}
