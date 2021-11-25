import * as fs from 'fs';

// function getComponentJsPaths (example) {
// 	return example.match(/\.\.\/.+\.js/gm);
// }

// function cleanContents (str) {
// 	return str.replace(/\t/g, '  ').trim();
// }

// function getJsonPaths (example) {
// 	const match = example.match(/\.\/.+\.json/gm);
// 	if (match) {
// 		return match.map(d => d.replace('../../', ''));
// 	}
// 	return [];
// }

// function getJsPaths (example) {
// 	const match = example.match(/\.\/.+\.js('|")/gm);
// 	if (match) {
// 		return match.map(d => d.replace('../../', '').replace(/('|")/g, ''));
// 	}
// 	return [];
// }

// function getCsvPaths (example) {
// 	const match = example.match(/\.\/.+\.csv/gm);
// 	if (match) {
// 		return match.map(d => d.replace('../../', ''));
// 	}
// 	return [];
// }

function cleanMain (str) {
	const cleaned = str
		.replace(/\t/g, '  ')
		.replace(/\.\.\/\.\.\//g, './')
		.trim();

	return cleaned;
}

// function getComponentPaths (example) {
// 	const match = example.match(/\.?\.\/.+svelte/gm);
// 	if (match) {
// 		return match.map(d => d.replace('../../', ''));
// 	}
// 	return [];
// }

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	const componentPath = `src/components/${slug}`;

	if (!fs.existsSync(componentPath)) {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found: ${slug}`
		}));
		return;
	}

	const component = fs.readFileSync(componentPath, 'utf-8');

	const fromMain = cleanMain(component);

	const main = {
		slug,
		contents: fromMain
	};

	const dekPath = `src/content/components/${slug}.md`;
	const dek = fs.existsSync(dekPath) ? fs.readFileSync(dekPath, 'utf-8') : '';

	// const components = getComponentPaths(example)
	// 	.map(d => {
	// 		return {
	// 			title: `./${d}`,
	// 			contents: cleanContents(fs.readFileSync(`src/${d}`, 'utf-8'))
	// 		};
	// 	});

	// const modules = getJsPaths(example)
	// 	.map(d => {
	// 		return {
	// 			title: d.replace('../', ''),
	// 			contents: cleanContents(fs.readFileSync(d.replace('../', 'src/'), 'utf-8'))
	// 		};
	// 	});

	// const jsons = getJsonPaths(example)
	// 	.map(d => {
	// 		return {
	// 			title: d.replace('../', ''),
	// 			contents: cleanContents(fs.readFileSync(d.replace('../', 'src/'), 'utf-8'))
	// 		};
	// 	});

	// const csvs = getCsvPaths(example)
	// 	.map(d => {
	// 		return {
	// 			title: d.replace('../', ''),
	// 			contents: cleanContents(fs.readFileSync(d.replace('./../', 'src/'), 'utf-8'))
	// 		};
	// 	});

	// const componentModulesMatches = getComponentJsPaths(components.map(d => d.contents).join(''));
	// const componentModules = componentModulesMatches === null ? [] : componentModulesMatches
	// 	.map(d => {
	// 		return {
	// 			title: d.replace('../', './'),
	// 			contents: cleanContents(fs.readFileSync(d.replace('../', 'src/'), 'utf-8'))
	// 		};
	// 	});

	// const componentComponentMatches = getComponentPaths(components.map(d => d.contents).join(''));
	// const componentComponents = componentComponentMatches === null ? [] : componentComponentMatches
	// 	.map(d => {
	// 		return {
	// 			title: d.replace('./', './components/'),
	// 			contents: cleanContents(fs.readFileSync(d.replace('./', 'src/components/'), 'utf-8'))
	// 		};
	// 	});

	const response = {
		main,
		dek
	};

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response));
}
