import { init } from 'sapper/runtime.js';
import { Store } from 'svelte/store.js';
import { manifest } from './manifest/client.js';

const store = new Store({
	activeGuideSection: ''
});

init({
	target: document.querySelector('#sapper'),
	manifest,
	store: data => {
		store.set(data);

		// window.fetch(`api/guide/contents`).then(r => r.json()).then(guideContents => {
		// 	store.set({ guideContents });
		// });

		window.store = store;

		return store;
	}
});
