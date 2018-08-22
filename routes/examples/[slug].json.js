import fs from 'fs';

function cleanMain (example) {
	const js = example.split('<script>')[1];
	const parts = js.split('export');

	const imports = parts[0]
		.replace(/\t/g, '  ')
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

function getModulePaths (example) {
	return example.match(/\.\.\/.+\.js/gm)
		.map(d => d.replace('../', ''));
}

export function get (req, res, next) {
	const { slug } = req.params;

	const examplePath = `components/examples/${slug}.html`;

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
				title: d,
				contents: fs.readFileSync(`components/${d}`, 'utf-8').replace(/\t/g, '  ').trim()
			};
		});

	const modules = getModulePaths(example)
		.map(d => {
			return {
				title: d.replace('../', ''),
				contents: fs.readFileSync(`modules/${d}`, 'utf-8').replace(/\t/g, '  ').trim()
			};
		});

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({ pages: [main].concat(components).concat(modules) }));
}
