import * as fs from 'fs';

// function cleanMain (example) {
// 	const body = example.split('<script>');
// 	const htmlExtras = body[0].split('<div class="chart-container"')[0];
// 	const script = body[1];
// 	const parts = script.split('export');

// 	const imports = parts[0]
// 		.replace(/\t/g, '  ')
// 		.replace(/\.\.\/\.\.\//g, './')
// 		.trim();

// 	const oncreate = parts[1].trim()
// 		.replace(/(}\n};\n<\/script>|default {.*|oncreate.*)/g, '')
// 		.replace('this.refs.chart', 'document.getElementById(\'my-chart\')')
// 		.replace(/^\t\t/gm, '')
// 		.replace(/\t/g, '  ')
// 		.trim();

// 	const js = [imports, oncreate].join('\n\n');
// 	return { htmlExtras, js };
// }

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	const examplePath = `src/routes/_examples/${slug}.svelte`;

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

	const response = { example };

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response));

	// const fromMain = cleanMain(example);

	// if (lookup.has(slug)) {
	// 	res.writeHead(200, {
	// 		'Content-Type': 'application/json'
	// 	});

	// 	res.end(lookup.get(slug));
	// } else {
	// 	res.writeHead(404, {
	// 		'Content-Type': 'application/json'
	// 	});

	// 	res.end(JSON.stringify({
	// 		message: `Not found`
	// 	}));
	// }
}
