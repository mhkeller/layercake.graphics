const fs = require('fs');
const path = require('path');
const App = require('./build/App.js');

const outDir = 'server-rendered';

const data = App.render({});

console.log(data);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>LayerCake Server-rendered</title>

	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='/global.css'>
	<link rel='stylesheet' href='/styles.css'>
	${data.head}
</head>

<body>
	${data.html}
</body>
</html>`

fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
fs.writeFileSync(path.join(outDir, 'styles.css'), data.css.code, 'utf-8');
fs.writeFileSync(path.join(outDir, 'styles.css.map'), data.css.map, 'utf-8');
