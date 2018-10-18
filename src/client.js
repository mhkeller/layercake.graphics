import * as sapper from '../__sapper__/client.js';
import { Store } from 'svelte/store.js';

const store = new Store({
	activeGuideSection: ''
});

sapper.start({
	target: document.querySelector('#sapper'),
	store: data => {
		store.set(data);

		// window.fetch(`api/guide/contents`).then(r => r.json()).then(guideContents => {
		// 	store.set({ guideContents });
		// });

		window.store = store;

		return store;
	}
});
