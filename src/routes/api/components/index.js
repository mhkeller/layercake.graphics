import fs from 'fs';
import path from 'path';

const componentsPath = 'src/components';

export function get (req, res) {
	let json;
	const components = fs.readdirSync(componentsPath)
		.filter(d => d.endsWith('.svelte'))
		// .map(d => {
		// 	return {
		// 		name: d,
		// 		contents: fs.readFileSync(path.join(componentsPath, d), 'utf-8')
		// 	};
		// });

	if (!components || process.env.NODE_ENV !== 'production') {
		json = JSON.stringify(components);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(json);
}
