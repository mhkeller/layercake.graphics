import * as fs from 'fs';

function cleanMain (example) {

	const cleaned = example
		.replace(/\t/g, '  ')
		.replace(/\.\.\/\.\.\//g, './')
		.trim();

	return cleaned;
}

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

	const fromMain = cleanMain(example);

	const main = {
		title: 'index.svelte',
		contents: fromMain
	};

	const dekPath = `src/content/examples/${slug}.md`;
	const dek = fs.existsSync(dekPath) ? fs.readFileSync(dekPath, 'utf-8') : '';

	const response = { main, dek };

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
