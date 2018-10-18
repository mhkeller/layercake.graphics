import sirv from 'sirv';
import polka from 'polka';
import * as sapper from '../__sapper__/server.js';
import compression from 'compression';
import { Store } from 'svelte/store.js';
import getSections from './routes/api/guide/_getSections.js';

const guideContents = getSections().map(section => {
	return {
		metadata: section.metadata,
		subsections: section.subsections,
		slug: section.slug
	};
});

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			store: (req, res) => {
				return new Store({ guideContents });
			}
		})
	)
	.listen(PORT)
	.catch(err => {
		console.log('error', err);
	});
