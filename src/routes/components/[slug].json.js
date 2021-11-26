import { readFileSync, existsSync } from 'fs';
import { readdirFilterSync } from 'indian-ocean';

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

	if (!existsSync(componentPath)) {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found: ${slug}`
		}));
		return;
	}

	const component = readFileSync(componentPath, 'utf-8');

	const fromMain = cleanMain(component);

	const main = {
		slug,
		contents: fromMain
	};

	const dekPath = `src/content/components/${slug}.md`;
	const dek = existsSync(dekPath) ? readFileSync(dekPath, 'utf-8') : '';

	const examplePaths = ['src/routes/_examples', 'src/routes/_examples_ssr'];
	const usedIn = examplePaths.map((d, i) => {
		return {
			group: i === 0 ? 'Regular' : 'SSR',
			matches: readdirFilterSync(d, { fullPath: true })
				.map(q => {
					return {
						path: q,
						contents: readFileSync(q, 'utf-8')
					};
				})
				.filter(q => {
					return q.contents.includes(slug);
				})
				.map(q => {
					const name = q.path.split('/').pop().replace('.svelte', '');
					return `/example${i === 1 ? '-ssr' : ''}/${name}`;
				})
		};
	});

	console.log('used in', usedIn);

	const response = {
		main,
		dek,
		usedIn
	};

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response));
}
