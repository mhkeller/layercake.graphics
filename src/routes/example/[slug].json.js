import * as fs from 'fs';

function getComponentJsPaths (example) {
	return example.match(/\.\.\/.+\.js/gm);
}

function cleanContents (str) {
	return str.replace(/\t/g, '  ').trim();
}

function getJsPaths (example) {
	const match = example.match(/\.\/.+\.js/gm)
	if (match) {
		return match.map(d => d.replace('../../', ''));
	} else {
		return [];
	}
}

function getCsvPaths (example) {
	return example.match(/\.\/.+\.csv/gm)
		.map(d => d.replace('../../', ''));
}

function cleanMain (example) {
	const cleaned = example
		.replace(/\t/g, '  ')
		.replace(/\.\.\/\.\.\//g, './')
		.trim();

	return cleaned;
}

function getComponentPaths (example) {
	return example.match(/\.\.\/.+svelte/gm)
		.map(d => d.replace('../../', ''));
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

	const components = getComponentPaths(example)
		.map(d => {
			return {
				title: `./${d}`,
				contents: cleanContents(fs.readFileSync(`src/${d}`, 'utf-8'))
			};
		});

	const modules = getJsPaths(example)
		.map(d => {
			return {
				title: d.replace('../', ''),
				contents: cleanContents(fs.readFileSync(d.replace('../', 'src/'), 'utf-8'))
			};
		});

	const csvs = getCsvPaths(example)
		.map(d => {
			return {
				title: d.replace('../', ''),
				contents: cleanContents(fs.readFileSync(d.replace('../', 'src/'), 'utf-8'))
			};
		});

	const componentModulesMatches = getComponentJsPaths(components.map(d => d.contents).join(''));
	const componentModules = componentModulesMatches === null ? [] : componentModulesMatches
		.map(d => {
			return {
				title: d.replace('../', './'),
				contents: cleanContents(fs.readFileSync(d.replace('../', 'src/'), 'utf-8'))
			};
		});

	const response = { main, dek, components, modules, componentModules, csvs };

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response));
}
