const fs = require('fs');

const files = [];

for (const path of process.argv.slice(2)) {
	if (!path.includes('/.')) {
		files.push({ path: path.slice(19), data: fs.readFileSync(path).toString() });
	}
}

fs.writeFileSync('static/svelte-app.json', JSON.stringify(files));

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
fs.writeFileSync('static/deps.json', JSON.stringify(allDeps));
